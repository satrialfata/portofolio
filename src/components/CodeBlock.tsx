"use client";

import type { CSSProperties } from "react";

export type CodeLang =
  | "bash"
  | "python"
  | "sql"
  | "php"
  | "javascript"
  | "r"
  | "html"
  | "css";

type TokenType =
  | "text"
  | "keyword"
  | "string"
  | "function"
  | "command"
  | "variable"
  | "number"
  | "comment"
  | "operator"
  | "class";

type Token = { type: TokenType; value: string };

interface LangConfig {
  comments: RegExp[];
  strings: RegExp[];
  variables?: RegExp[];
  extras?: { re: RegExp; type: TokenType }[];
  number: RegExp;
  word: RegExp;
  keywords: string[];
  builtins?: string[];
  functionIfParen?: boolean;
  capitalizeAsClass?: boolean;
  commandAtLineStart?: boolean;
}

const OPERATOR = /[+\-*/%=<>!&|^~]+/y;

const CFG: Record<CodeLang, LangConfig> = {
  bash: {
    comments: [/#.*/y],
    strings: [/"(?:[^"\\\n]|\\.)*"/y, /'[^'\n]*'/y],
    variables: [/\$\{[^}]*\}/y, /\$[A-Za-z_]\w*/y],
    number: /\d+(?:\.\d+)?/y,
    word: /[A-Za-z_][\w-]*/y,
    keywords: [],
    functionIfParen: true,
    commandAtLineStart: true,
  },
  python: {
    comments: [/#.*/y],
    strings: [
      /[rRfFbBuU]{0,2}"""[\s\S]*?"""/y,
      /[rRfFbBuU]{0,2}'''[\s\S]*?'''/y,
      /[rRfFbBuU]{0,2}"(?:[^"\\\n]|\\.)*"/y,
      /[rRfFbBuU]{0,2}'(?:[^'\\\n]|\\.)*'/y,
    ],
    extras: [{ re: /@[\w.]+/y, type: "class" }],
    number: /\d+(?:\.\d+)?/y,
    word: /[A-Za-z_]\w*/y,
    keywords: [
      "and","as","assert","async","await","break","class","continue","def","del",
      "elif","else","except","finally","for","from","global","if","import","in",
      "is","lambda","nonlocal","not","or","pass","raise","return","try","while",
      "with","yield","true","false","none",
    ],
    builtins: [
      "print","len","range","input","int","float","str","bool","list","dict",
      "set","tuple","type","open","enumerate","zip","sum","min","max","abs",
      "sorted","reversed","isinstance","round","map","filter","any","all",
    ],
    functionIfParen: true,
    capitalizeAsClass: true,
  },
  sql: {
    comments: [/--.*/y, /\/\*[\s\S]*?\*\//y],
    strings: [/'(?:[^']|'')*'/y],
    number: /\d+(?:\.\d+)?/y,
    word: /[A-Za-z_]\w*/y,
    keywords: [
      "select","from","where","order","by","group","having","limit","offset",
      "as","and","or","not","null","is","in","between","like","distinct","join",
      "inner","left","right","full","outer","on","using","union","all","insert",
      "into","values","update","set","delete","create","table","database","drop",
      "alter","add","column","primary","key","foreign","references","auto_increment",
      "default","show","use","describe","explain","desc","asc","if","exists",
      "truncate","int","varchar","text","date","boolean",
    ],
    builtins: ["count","sum","avg","min","max","round","now","date","concat","coalesce","upper","lower","length"],
    functionIfParen: true,
  },
  php: {
    comments: [/#.*/y, /\/\/.*/y, /\/\*[\s\S]*?\*\//y],
    strings: [/"(?:[^"\\\n]|\\.)*"/y, /'(?:[^'\\\n]|\\.)*'/y],
    variables: [/\$[A-Za-z_]\w*/y],
    extras: [
      { re: /<\?(?:php)?/iy, type: "keyword" },
      { re: /\?>/y, type: "keyword" },
    ],
    number: /\d+(?:\.\d+)?/y,
    word: /[A-Za-z_]\w*/y,
    keywords: [
      "if","else","elseif","endif","foreach","as","endforeach","for","endfor",
      "while","endwhile","do","switch","case","default","break","continue",
      "return","function","class","extends","implements","public","private",
      "protected","static","new","echo","print","require","require_once",
      "include","include_once","use","namespace","try","catch","finally","throw",
      "const","global","true","false","null","array",
    ],
    builtins: ["count","strlen","array_merge","header","json_encode","json_decode","isset","empty"],
    functionIfParen: true,
    capitalizeAsClass: true,
  },
  javascript: {
    comments: [/\/\/.*/y, /\/\*[\s\S]*?\*\//y],
    strings: [
      /"(?:[^"\\\n]|\\.)*"/y,
      /'(?:[^'\\\n]|\\.)*'/y,
      /`(?:[^`\\]|\\.)*`/y,
    ],
    number: /\d+(?:\.\d+)?/y,
    word: /[A-Za-z_$][\w$]*/y,
    keywords: [
      "const","let","var","function","return","if","else","for","while","do",
      "break","continue","new","class","extends","super","this","typeof",
      "instanceof","in","of","delete","void","yield","async","await","try",
      "catch","finally","throw","switch","case","default","export","import",
      "from","as","null","undefined","true","false",
    ],
    functionIfParen: true,
    capitalizeAsClass: true,
  },
  r: {
    comments: [/#.*/y],
    strings: [/"(?:[^"\\\n]|\\.)*"/y, /'[^'\n]*'/y],
    number: /\d+(?:\.\d+)?/y,
    word: /[A-Za-z.][\w.]*/y,
    keywords: [
      "if","else","for","while","repeat","function","return","break","next",
      "true","false","null","na","inf","nan","library","require","in",
    ],
    builtins: [
      "c","length","mean","sum","min","max","print","paste","paste0","read.csv",
      "write.csv","plot","head","tail","str","nrow","ncol","seq","seq_along",
      "data.frame","factor","table",
    ],
    functionIfParen: true,
  },
  html: {
    comments: [/<!--[\s\S]*?-->/y, /<![^>]*>/y],
    strings: [/"[^"\n]*"/y, /'[^'\n]*'/y],
    extras: [
      { re: /<\/?[A-Za-z][\w-]*/y, type: "keyword" },
      { re: /[A-Za-z][\w:-]*(?=\s*=)/y, type: "variable" },
    ],
    number: /\d+(?:\.\d+)?/y,
    word: /[A-Za-z_]\w*/y,
    keywords: ["html", "head", "body"],
    functionIfParen: true,
  },
  css: {
    comments: [/\/\*[\s\S]*?\*\//y],
    strings: [/"(?:[^"\\\n]|\\.)*"/y, /'[^'\n]*'/y],
    extras: [
      { re: /@[a-z-]+/y, type: "keyword" },
      { re: /#[0-9a-fA-F]{3,8}\b/y, type: "number" },
    ],
    number: /\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|ch|fr|s|ms)?/y,
    word: /[A-Za-z_][\w-]*/y,
    keywords: [
      "block","flex","grid","center","none","auto","hidden","bold","solid",
      "absolute","relative","fixed","inherit","initial","pointer","uppercase",
      "transparent","column","nowrap","underline",
    ],
    functionIfParen: true,
  },
};

function classifyWord(
  word: string,
  cfg: LangConfig,
  atLineStart: boolean,
  code: string,
  end: number
): TokenType {
  const key = word.toLowerCase();
  if (cfg.keywords.includes(key)) return "keyword";
  if (cfg.builtins?.includes(key)) return "function";
  const isAssignment = /^\s*=[^=]/.test(code.slice(end, end + 8));
  if (cfg.commandAtLineStart && atLineStart && !isAssignment) return "command";
  if (cfg.functionIfParen && /^\s*\(/.test(code.slice(end, end + 8))) return "function";
  if (cfg.capitalizeAsClass && /^[A-Z]/.test(word)) return "class";
  return "text";
}

export function tokenize(code: string, lang: CodeLang): Token[] {
  const cfg = CFG[lang];
  const tokens: Token[] = [];
  const push = (type: TokenType, value: string) => {
    if (!value) return;
    const last = tokens[tokens.length - 1];
    if (last && last.type === type) last.value += value;
    else tokens.push({ type, value });
  };

  const tryMatch = (re: RegExp): string | null => {
    re.lastIndex = i;
    const m = re.exec(code);
    return m ? m[0] : null;
  };

  let i = 0;
  let atLineStart = true;

  while (i < code.length) {
    let matched: string | null = null;
    let type: TokenType = "text";
    let isWord = false;

    for (const re of cfg.comments) {
      const m = tryMatch(re);
      if (m) { matched = m; type = "comment"; break; }
    }

    if (!matched) {
      for (const re of cfg.strings) {
        const m = tryMatch(re);
        if (m) { matched = m; type = "string"; break; }
      }
    }

    if (!matched && cfg.variables) {
      for (const re of cfg.variables) {
        const m = tryMatch(re);
        if (m) { matched = m; type = "variable"; break; }
      }
    }

    if (!matched && cfg.extras) {
      for (const ex of cfg.extras) {
        const m = tryMatch(ex.re);
        if (m) { matched = m; type = ex.type; break; }
      }
    }

    if (!matched) {
      const m = tryMatch(cfg.number);
      if (m) { matched = m; type = "number"; }
    }

    if (!matched) {
      const m = tryMatch(cfg.word);
      if (m) {
        matched = m;
        isWord = true;
        type = classifyWord(m, cfg, atLineStart, code, i + m.length);
      }
    }

    if (!matched) {
      const m = tryMatch(OPERATOR);
      if (m) { matched = m; type = "operator"; }
    }

    if (!matched) {
      const cp = code.codePointAt(i) ?? code.charCodeAt(i);
      matched = String.fromCodePoint(cp);
      type = "text";
    }

    push(type, matched);
    i += matched.length;

    if (matched.includes("\n")) atLineStart = true;
    else if (isWord) atLineStart = false;
  }

  return tokens;
}

const TOKEN_STYLE: Record<Exclude<TokenType, "text">, CSSProperties> = {
  keyword: { color: "var(--code-keyword)" },
  string: { color: "var(--code-string)" },
  function: { color: "var(--code-function)" },
  command: { color: "var(--code-command)", fontWeight: 600 },
  variable: { color: "var(--code-variable)" },
  number: { color: "var(--code-number)" },
  comment: { color: "var(--code-comment)", fontStyle: "italic" },
  operator: { color: "var(--code-operator)" },
  class: { color: "var(--code-class)" },
};

export default function CodeBlock({ code, language }: { code: string; language: CodeLang }) {
  const tokens = tokenize(code, language);

  return (
    <pre
      className="rounded-xl border p-4 text-xs leading-relaxed overflow-x-auto font-mono"
      style={{
        backgroundColor: "var(--sidebar)",
        borderColor: "var(--border)",
        color: "var(--code-text)",
      }}
    >
      <code>
        {tokens.map((token, idx) =>
          token.type === "text" ? (
            <span key={idx}>{token.value}</span>
          ) : (
            <span key={idx} style={TOKEN_STYLE[token.type]}>
              {token.value}
            </span>
          )
        )}
      </code>
    </pre>
  );
}
