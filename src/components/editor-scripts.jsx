import React from 'react';

/**
 * The Different RegEx patterns used to match markdown to tags. E.g.: ** foo ** => <b>foo</b>
 */
const tagNames = {
    b: /(?:\*\*([^*]+)\*\*)|(?:^#{1,6}\s.+)/g,
    em: /(?:[^*])?\*([^*]*)\*(?:[^*])?/g,
    br: /\n/g
}

class Lexer {
    constructor(options, text) {
        this.text = text;
        this.toks = options.toks;
        this.selection = text;
        this.idx = 0;
        this.advance(0);
    }

    advance(n) {
        this.idx += n;
        this.selection = this.text.substr(this.idx);
    }

    make_tokens() {
        let tokens = [];

        while (this.idx < this.text.length) {
            var matched = false;
            for (let type in this.toks) {
                if (this.selection.search(this.toks[type]) === 0) {
                    let val = this.selection.match(this.toks[type])[0];
                    this.advance(val.length);
                    const TagName = `${type}`;
                    if (TagName !== 'br')
                        matched = <TagName key={this.idx - val.length}>{val}</TagName>;
                    else
                        matched = <br/>;
                    break;
                }
            }
            if (matched) {
                tokens.push(matched);
            } else {
                tokens.push(<span key={this.idx}>{this.text[this.idx]}</span>);
                this.advance(1);
            }
        }

        return tokens;
    }
}



/**
 * This function massages markdown text
 * @param {string} text The text to massage
 */

function editor(text) {
    var lex = new Lexer({toks: tagNames}, text);
    var toks = lex.make_tokens();
    return toks;
}  
// function editor(text) {
//     var resultText = text;
//     // better than for...in
//     Object.keys(tagNames).forEach(key => {
//         tagNames[key].forEach((regex, idx) => {
//             let array1;

//             while ((array1 = regex.exec(text))) {
//                 if (array1.index === regex.lastIndex)
//                     regex.lastIndex++;
//                 resultText = StrInsert(resultText, array1.index, `<${key} class="${key}--${idx}">`);
//                 resultText = StrInsert(resultText, regex.lastIndex + `<${key} class="${key}--${idx}">`.length, `</${key}>`);
//             }
//         });
//     });

//     return resultText;
// }

export default editor;