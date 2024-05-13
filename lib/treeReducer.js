import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { FHIRPathLexer } from './generated/FHIRPathLexer';
import { FHIRPathParser } from './generated/FHIRPathParser';
export function reduce() {
    // Create the lexer and parser
    var inputStream = CharStreams.fromString("text");
    var lexer = new FHIRPathLexer(inputStream);
    var tokenStream = new CommonTokenStream(lexer);
    var parser = new FHIRPathParser(tokenStream);
    // Parse the input, where `compilationUnit` is whatever entry point you defined
    var tree = parser.expression();
    return tree;
}
//# sourceMappingURL=treeReducer.js.map