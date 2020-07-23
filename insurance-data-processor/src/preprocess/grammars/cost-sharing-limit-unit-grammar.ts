// Generated automatically by nearley, version 2.19.5
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

interface NearleyToken {  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: NearleyToken) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: undefined,
  ParserRules: [
    {"name": "expression$subexpression$1", "symbols": [{"literal":" "}, /[pP]/, /[eE]/, /[rR]/, {"literal":" "}], "postprocess": function(d) {return d.join(""); }},
    {"name": "expression$ebnf$1$subexpression$1$subexpression$1", "symbols": [{"literal":" "}], "postprocess": function(d) {return d.join(""); }},
    {"name": "expression$ebnf$1$subexpression$1", "symbols": ["frequencyNum", "expression$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "expression$ebnf$1", "symbols": ["expression$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "expression$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "expression", "symbols": ["text", "expression$subexpression$1", "expression$ebnf$1", "text"], "postprocess":  (match) => ({
            unit: match[0],
            frequencyNum: match[2] ? match[2][0] : 1,
            frequencyUnit: match[3]
        }) },
    {"name": "text$ebnf$1", "symbols": [/[^\d(s]/]},
    {"name": "text$ebnf$1", "symbols": ["text$ebnf$1", /[^\d(s]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "text$ebnf$2$subexpression$1$subexpression$1", "symbols": [/[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "text$ebnf$2$subexpression$1", "symbols": ["text$ebnf$2$subexpression$1$subexpression$1"]},
    {"name": "text$ebnf$2$subexpression$1$subexpression$2", "symbols": [{"literal":"("}, /[sS]/, {"literal":")"}], "postprocess": function(d) {return d.join(""); }},
    {"name": "text$ebnf$2$subexpression$1", "symbols": ["text$ebnf$2$subexpression$1$subexpression$2"]},
    {"name": "text$ebnf$2", "symbols": ["text$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "text$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "text", "symbols": ["text$ebnf$1", "text$ebnf$2"], "postprocess": (match) => match[0].join('').toLowerCase()},
    {"name": "frequencyNum", "symbols": [/[\d]/], "postprocess": (match) => parseInt(match[0])}
  ],
  ParserStart: "expression",
};

export default grammar;