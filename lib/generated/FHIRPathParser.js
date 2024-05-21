// Generated from ./grammar/FHIRPath.g4 by ANTLR 4.9.0-SNAPSHOT
import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Token } from "antlr4ts/Token";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import * as Utils from "antlr4ts/misc/Utils";
export class FHIRPathParser extends Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return FHIRPathParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "FHIRPath.g4"; }
    // @Override
    get ruleNames() { return FHIRPathParser.ruleNames; }
    // @Override
    get serializedATN() { return FHIRPathParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator(FHIRPathParser._ATN, this);
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 0;
        this.enterRecursionRule(_localctx, 0, FHIRPathParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case FHIRPathParser.T__10:
                    case FHIRPathParser.T__11:
                    case FHIRPathParser.T__21:
                    case FHIRPathParser.T__22:
                    case FHIRPathParser.T__27:
                    case FHIRPathParser.T__29:
                    case FHIRPathParser.T__31:
                    case FHIRPathParser.T__32:
                    case FHIRPathParser.T__33:
                    case FHIRPathParser.T__34:
                    case FHIRPathParser.T__35:
                    case FHIRPathParser.T__36:
                    case FHIRPathParser.DATETIME:
                    case FHIRPathParser.TIME:
                    case FHIRPathParser.DATESTARTSYMBOL:
                    case FHIRPathParser.IDENTIFIER:
                    case FHIRPathParser.DELIMITEDIDENTIFIER:
                    case FHIRPathParser.UDELIMITEDIDENTIFIER:
                    case FHIRPathParser.STRING:
                    case FHIRPathParser.USTRING:
                    case FHIRPathParser.NUMBER:
                        {
                            _localctx = new TermExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 29;
                            this.term();
                        }
                        break;
                    case FHIRPathParser.T__3:
                    case FHIRPathParser.T__4:
                        {
                            _localctx = new PolarityExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 30;
                            _la = this._input.LA(1);
                            if (!(_la === FHIRPathParser.T__3 || _la === FHIRPathParser.T__4)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 31;
                            this.expression(11);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 74;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 72;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 34;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 35;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__5) | (1 << FHIRPathParser.T__6) | (1 << FHIRPathParser.T__7) | (1 << FHIRPathParser.T__8))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 36;
                                        this.expression(11);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 37;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 38;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__3) | (1 << FHIRPathParser.T__4) | (1 << FHIRPathParser.T__9))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 39;
                                        this.expression(10);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new UnionExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 40;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 41;
                                        this.match(FHIRPathParser.T__12);
                                        this.state = 42;
                                        this.expression(8);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new InequalityExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 43;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 44;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__13) | (1 << FHIRPathParser.T__14) | (1 << FHIRPathParser.T__15) | (1 << FHIRPathParser.T__16))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 45;
                                        this.expression(7);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 46;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 47;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__17) | (1 << FHIRPathParser.T__18) | (1 << FHIRPathParser.T__19) | (1 << FHIRPathParser.T__20))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 48;
                                        this.expression(6);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new MembershipExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 49;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 50;
                                        _la = this._input.LA(1);
                                        if (!(_la === FHIRPathParser.T__21 || _la === FHIRPathParser.T__22)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 51;
                                        this.expression(5);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 52;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 53;
                                        this.match(FHIRPathParser.T__23);
                                        this.state = 54;
                                        this.expression(4);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 55;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 56;
                                        _la = this._input.LA(1);
                                        if (!(_la === FHIRPathParser.T__24 || _la === FHIRPathParser.T__25)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 57;
                                        this.expression(3);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ImpliesExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 58;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 59;
                                        this.match(FHIRPathParser.T__26);
                                        this.state = 60;
                                        this.expression(2);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new InvocationExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 61;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 62;
                                        this.match(FHIRPathParser.T__0);
                                        this.state = 63;
                                        this.invocation();
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new IndexerExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 64;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 65;
                                        this.match(FHIRPathParser.T__1);
                                        this.state = 66;
                                        this.expression(0);
                                        this.state = 67;
                                        this.match(FHIRPathParser.T__2);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new TypeExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FHIRPathParser.RULE_expression);
                                        this.state = 69;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 70;
                                        _la = this._input.LA(1);
                                        if (!(_la === FHIRPathParser.T__10 || _la === FHIRPathParser.T__11)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 71;
                                        this.typeSpecifier();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 76;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    term() {
        let _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, FHIRPathParser.RULE_term);
        try {
            this.state = 84;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FHIRPathParser.T__10:
                case FHIRPathParser.T__11:
                case FHIRPathParser.T__21:
                case FHIRPathParser.T__22:
                case FHIRPathParser.T__34:
                case FHIRPathParser.T__35:
                case FHIRPathParser.T__36:
                case FHIRPathParser.IDENTIFIER:
                case FHIRPathParser.DELIMITEDIDENTIFIER:
                case FHIRPathParser.UDELIMITEDIDENTIFIER:
                    _localctx = new InvocationTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 77;
                        this.invocation();
                    }
                    break;
                case FHIRPathParser.T__29:
                case FHIRPathParser.T__31:
                case FHIRPathParser.T__32:
                case FHIRPathParser.DATETIME:
                case FHIRPathParser.TIME:
                case FHIRPathParser.DATESTARTSYMBOL:
                case FHIRPathParser.STRING:
                case FHIRPathParser.USTRING:
                case FHIRPathParser.NUMBER:
                    _localctx = new LiteralTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 78;
                        this.literal();
                    }
                    break;
                case FHIRPathParser.T__33:
                    _localctx = new ExternalConstantTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 79;
                        this.externalConstant();
                    }
                    break;
                case FHIRPathParser.T__27:
                    _localctx = new ParenthesizedTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 80;
                        this.match(FHIRPathParser.T__27);
                        this.state = 81;
                        this.expression(0);
                        this.state = 82;
                        this.match(FHIRPathParser.T__28);
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, FHIRPathParser.RULE_literal);
        let _la;
        try {
            this.state = 96;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    _localctx = new NullLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 86;
                        this.match(FHIRPathParser.T__29);
                        this.state = 87;
                        this.match(FHIRPathParser.T__30);
                    }
                    break;
                case 2:
                    _localctx = new BooleanLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 88;
                        _la = this._input.LA(1);
                        if (!(_la === FHIRPathParser.T__31 || _la === FHIRPathParser.T__32)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case 3:
                    _localctx = new StringLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 89;
                        this.match(FHIRPathParser.STRING);
                    }
                    break;
                case 4:
                    _localctx = new UstringLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 90;
                        this.match(FHIRPathParser.USTRING);
                    }
                    break;
                case 5:
                    _localctx = new NumberLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 91;
                        this.match(FHIRPathParser.NUMBER);
                    }
                    break;
                case 6:
                    _localctx = new DateTimeLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 92;
                        this.match(FHIRPathParser.DATETIME);
                    }
                    break;
                case 7:
                    _localctx = new TimeLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 93;
                        this.match(FHIRPathParser.TIME);
                    }
                    break;
                case 8:
                    _localctx = new DateStartSymbolLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 94;
                        this.match(FHIRPathParser.DATESTARTSYMBOL);
                    }
                    break;
                case 9:
                    _localctx = new QuantityLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 95;
                        this.quantity();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    externalConstant() {
        let _localctx = new ExternalConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, FHIRPathParser.RULE_externalConstant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.match(FHIRPathParser.T__33);
                this.state = 101;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case FHIRPathParser.T__10:
                    case FHIRPathParser.T__11:
                    case FHIRPathParser.T__21:
                    case FHIRPathParser.T__22:
                    case FHIRPathParser.IDENTIFIER:
                    case FHIRPathParser.DELIMITEDIDENTIFIER:
                    case FHIRPathParser.UDELIMITEDIDENTIFIER:
                        {
                            this.state = 99;
                            this.identifier();
                        }
                        break;
                    case FHIRPathParser.STRING:
                        {
                            this.state = 100;
                            this.match(FHIRPathParser.STRING);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    invocation() {
        let _localctx = new InvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, FHIRPathParser.RULE_invocation);
        try {
            this.state = 108;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    _localctx = new MemberInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 103;
                        this.identifier();
                    }
                    break;
                case 2:
                    _localctx = new FunctionInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 104;
                        this.function();
                    }
                    break;
                case 3:
                    _localctx = new ThisInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 105;
                        this.match(FHIRPathParser.T__34);
                    }
                    break;
                case 4:
                    _localctx = new IndexInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 106;
                        this.match(FHIRPathParser.T__35);
                    }
                    break;
                case 5:
                    _localctx = new TotalInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 107;
                        this.match(FHIRPathParser.T__36);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    function() {
        let _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, FHIRPathParser.RULE_function);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                this.identifier();
                this.state = 111;
                this.match(FHIRPathParser.T__27);
                this.state = 113;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__3) | (1 << FHIRPathParser.T__4) | (1 << FHIRPathParser.T__10) | (1 << FHIRPathParser.T__11) | (1 << FHIRPathParser.T__21) | (1 << FHIRPathParser.T__22) | (1 << FHIRPathParser.T__27) | (1 << FHIRPathParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FHIRPathParser.T__31 - 32)) | (1 << (FHIRPathParser.T__32 - 32)) | (1 << (FHIRPathParser.T__33 - 32)) | (1 << (FHIRPathParser.T__34 - 32)) | (1 << (FHIRPathParser.T__35 - 32)) | (1 << (FHIRPathParser.T__36 - 32)) | (1 << (FHIRPathParser.DATETIME - 32)) | (1 << (FHIRPathParser.TIME - 32)) | (1 << (FHIRPathParser.DATESTARTSYMBOL - 32)) | (1 << (FHIRPathParser.IDENTIFIER - 32)) | (1 << (FHIRPathParser.DELIMITEDIDENTIFIER - 32)) | (1 << (FHIRPathParser.UDELIMITEDIDENTIFIER - 32)) | (1 << (FHIRPathParser.STRING - 32)) | (1 << (FHIRPathParser.USTRING - 32)) | (1 << (FHIRPathParser.NUMBER - 32)))) !== 0)) {
                    {
                        this.state = 112;
                        this.paramList();
                    }
                }
                this.state = 115;
                this.match(FHIRPathParser.T__28);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    paramList() {
        let _localctx = new ParamListContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, FHIRPathParser.RULE_paramList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this.expression(0);
                this.state = 122;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === FHIRPathParser.T__37) {
                    {
                        {
                            this.state = 118;
                            this.match(FHIRPathParser.T__37);
                            this.state = 119;
                            this.expression(0);
                        }
                    }
                    this.state = 124;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantity() {
        let _localctx = new QuantityContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, FHIRPathParser.RULE_quantity);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 125;
                this.match(FHIRPathParser.NUMBER);
                this.state = 127;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            this.state = 126;
                            this.unit();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unit() {
        let _localctx = new UnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, FHIRPathParser.RULE_unit);
        try {
            this.state = 132;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FHIRPathParser.T__38:
                case FHIRPathParser.T__39:
                case FHIRPathParser.T__40:
                case FHIRPathParser.T__41:
                case FHIRPathParser.T__42:
                case FHIRPathParser.T__43:
                case FHIRPathParser.T__44:
                case FHIRPathParser.T__45:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 129;
                        this.dateTimePrecision();
                    }
                    break;
                case FHIRPathParser.T__46:
                case FHIRPathParser.T__47:
                case FHIRPathParser.T__48:
                case FHIRPathParser.T__49:
                case FHIRPathParser.T__50:
                case FHIRPathParser.T__51:
                case FHIRPathParser.T__52:
                case FHIRPathParser.T__53:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 130;
                        this.pluralDateTimePrecision();
                    }
                    break;
                case FHIRPathParser.STRING:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 131;
                        this.match(FHIRPathParser.STRING);
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dateTimePrecision() {
        let _localctx = new DateTimePrecisionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, FHIRPathParser.RULE_dateTimePrecision);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 134;
                _la = this._input.LA(1);
                if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (FHIRPathParser.T__38 - 39)) | (1 << (FHIRPathParser.T__39 - 39)) | (1 << (FHIRPathParser.T__40 - 39)) | (1 << (FHIRPathParser.T__41 - 39)) | (1 << (FHIRPathParser.T__42 - 39)) | (1 << (FHIRPathParser.T__43 - 39)) | (1 << (FHIRPathParser.T__44 - 39)) | (1 << (FHIRPathParser.T__45 - 39)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pluralDateTimePrecision() {
        let _localctx = new PluralDateTimePrecisionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, FHIRPathParser.RULE_pluralDateTimePrecision);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 136;
                _la = this._input.LA(1);
                if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (FHIRPathParser.T__46 - 47)) | (1 << (FHIRPathParser.T__47 - 47)) | (1 << (FHIRPathParser.T__48 - 47)) | (1 << (FHIRPathParser.T__49 - 47)) | (1 << (FHIRPathParser.T__50 - 47)) | (1 << (FHIRPathParser.T__51 - 47)) | (1 << (FHIRPathParser.T__52 - 47)) | (1 << (FHIRPathParser.T__53 - 47)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeSpecifier() {
        let _localctx = new TypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, FHIRPathParser.RULE_typeSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.qualifiedIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifiedIdentifier() {
        let _localctx = new QualifiedIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, FHIRPathParser.RULE_qualifiedIdentifier);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.identifier();
                this.state = 145;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 141;
                                this.match(FHIRPathParser.T__0);
                                this.state = 142;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 147;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, FHIRPathParser.RULE_identifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 148;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRPathParser.T__10) | (1 << FHIRPathParser.T__11) | (1 << FHIRPathParser.T__21) | (1 << FHIRPathParser.T__22))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (FHIRPathParser.IDENTIFIER - 58)) | (1 << (FHIRPathParser.DELIMITEDIDENTIFIER - 58)) | (1 << (FHIRPathParser.UDELIMITEDIDENTIFIER - 58)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 0:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 10);
            case 1:
                return this.precpred(this._ctx, 9);
            case 2:
                return this.precpred(this._ctx, 7);
            case 3:
                return this.precpred(this._ctx, 6);
            case 4:
                return this.precpred(this._ctx, 5);
            case 5:
                return this.precpred(this._ctx, 4);
            case 6:
                return this.precpred(this._ctx, 3);
            case 7:
                return this.precpred(this._ctx, 2);
            case 8:
                return this.precpred(this._ctx, 1);
            case 9:
                return this.precpred(this._ctx, 13);
            case 10:
                return this.precpred(this._ctx, 12);
            case 11:
                return this.precpred(this._ctx, 8);
        }
        return true;
    }
    static get _ATN() {
        if (!FHIRPathParser.__ATN) {
            FHIRPathParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FHIRPathParser._serializedATN));
        }
        return FHIRPathParser.__ATN;
    }
}
FHIRPathParser.T__0 = 1;
FHIRPathParser.T__1 = 2;
FHIRPathParser.T__2 = 3;
FHIRPathParser.T__3 = 4;
FHIRPathParser.T__4 = 5;
FHIRPathParser.T__5 = 6;
FHIRPathParser.T__6 = 7;
FHIRPathParser.T__7 = 8;
FHIRPathParser.T__8 = 9;
FHIRPathParser.T__9 = 10;
FHIRPathParser.T__10 = 11;
FHIRPathParser.T__11 = 12;
FHIRPathParser.T__12 = 13;
FHIRPathParser.T__13 = 14;
FHIRPathParser.T__14 = 15;
FHIRPathParser.T__15 = 16;
FHIRPathParser.T__16 = 17;
FHIRPathParser.T__17 = 18;
FHIRPathParser.T__18 = 19;
FHIRPathParser.T__19 = 20;
FHIRPathParser.T__20 = 21;
FHIRPathParser.T__21 = 22;
FHIRPathParser.T__22 = 23;
FHIRPathParser.T__23 = 24;
FHIRPathParser.T__24 = 25;
FHIRPathParser.T__25 = 26;
FHIRPathParser.T__26 = 27;
FHIRPathParser.T__27 = 28;
FHIRPathParser.T__28 = 29;
FHIRPathParser.T__29 = 30;
FHIRPathParser.T__30 = 31;
FHIRPathParser.T__31 = 32;
FHIRPathParser.T__32 = 33;
FHIRPathParser.T__33 = 34;
FHIRPathParser.T__34 = 35;
FHIRPathParser.T__35 = 36;
FHIRPathParser.T__36 = 37;
FHIRPathParser.T__37 = 38;
FHIRPathParser.T__38 = 39;
FHIRPathParser.T__39 = 40;
FHIRPathParser.T__40 = 41;
FHIRPathParser.T__41 = 42;
FHIRPathParser.T__42 = 43;
FHIRPathParser.T__43 = 44;
FHIRPathParser.T__44 = 45;
FHIRPathParser.T__45 = 46;
FHIRPathParser.T__46 = 47;
FHIRPathParser.T__47 = 48;
FHIRPathParser.T__48 = 49;
FHIRPathParser.T__49 = 50;
FHIRPathParser.T__50 = 51;
FHIRPathParser.T__51 = 52;
FHIRPathParser.T__52 = 53;
FHIRPathParser.T__53 = 54;
FHIRPathParser.DATETIME = 55;
FHIRPathParser.TIME = 56;
FHIRPathParser.DATESTARTSYMBOL = 57;
FHIRPathParser.IDENTIFIER = 58;
FHIRPathParser.DELIMITEDIDENTIFIER = 59;
FHIRPathParser.UDELIMITEDIDENTIFIER = 60;
FHIRPathParser.STRING = 61;
FHIRPathParser.USTRING = 62;
FHIRPathParser.NUMBER = 63;
FHIRPathParser.WS = 64;
FHIRPathParser.COMMENT = 65;
FHIRPathParser.LINE_COMMENT = 66;
FHIRPathParser.RULE_expression = 0;
FHIRPathParser.RULE_term = 1;
FHIRPathParser.RULE_literal = 2;
FHIRPathParser.RULE_externalConstant = 3;
FHIRPathParser.RULE_invocation = 4;
FHIRPathParser.RULE_function = 5;
FHIRPathParser.RULE_paramList = 6;
FHIRPathParser.RULE_quantity = 7;
FHIRPathParser.RULE_unit = 8;
FHIRPathParser.RULE_dateTimePrecision = 9;
FHIRPathParser.RULE_pluralDateTimePrecision = 10;
FHIRPathParser.RULE_typeSpecifier = 11;
FHIRPathParser.RULE_qualifiedIdentifier = 12;
FHIRPathParser.RULE_identifier = 13;
// tslint:disable:no-trailing-whitespace
FHIRPathParser.ruleNames = [
    "expression", "term", "literal", "externalConstant", "invocation", "function",
    "paramList", "quantity", "unit", "dateTimePrecision", "pluralDateTimePrecision",
    "typeSpecifier", "qualifiedIdentifier", "identifier",
];
FHIRPathParser._LITERAL_NAMES = [
    undefined, "'.'", "'['", "']'", "'+'", "'-'", "'*'", "'/'", "'div'", "'mod'",
    "'&'", "'is'", "'as'", "'|'", "'<='", "'<'", "'>'", "'>='", "'='", "'~'",
    "'!='", "'!~'", "'in'", "'contains'", "'and'", "'or'", "'xor'", "'implies'",
    "'('", "')'", "'{'", "'}'", "'true'", "'false'", "'%'", "'$this'", "'$index'",
    "'$total'", "','", "'year'", "'month'", "'week'", "'day'", "'hour'", "'minute'",
    "'second'", "'millisecond'", "'years'", "'months'", "'weeks'", "'days'",
    "'hours'", "'minutes'", "'seconds'", "'milliseconds'", undefined, undefined,
    "'@'",
];
FHIRPathParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "DATETIME",
    "TIME", "DATESTARTSYMBOL", "IDENTIFIER", "DELIMITEDIDENTIFIER", "UDELIMITEDIDENTIFIER",
    "STRING", "USTRING", "NUMBER", "WS", "COMMENT", "LINE_COMMENT",
];
FHIRPathParser.VOCABULARY = new VocabularyImpl(FHIRPathParser._LITERAL_NAMES, FHIRPathParser._SYMBOLIC_NAMES, []);
FHIRPathParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03D\x99\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02#\n\x02" +
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
    "\x03\x02\x03\x02\x07\x02K\n\x02\f\x02\x0E\x02N\v\x02\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03W\n\x03\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04c" +
    "\n\x04\x03\x05\x03\x05\x03\x05\x05\x05h\n\x05\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x05\x06o\n\x06\x03\x07\x03\x07\x03\x07\x05\x07t\n\x07" +
    "\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\b{\n\b\f\b\x0E\b~\v\b\x03\t\x03" +
    "\t\x05\t\x82\n\t\x03\n\x03\n\x03\n\x05\n\x87\n\n\x03\v\x03\v\x03\f\x03" +
    "\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\x92\n\x0E\f\x0E\x0E\x0E" +
    "\x95\v\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x03\x02\x10\x02\x02\x04\x02" +
    "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
    "\x02\x1A\x02\x1C\x02\x02\x0E\x03\x02\x06\x07\x03\x02\b\v\x04\x02\x06\x07" +
    "\f\f\x03\x02\x10\x13\x03\x02\x14\x17\x03\x02\x18\x19\x03\x02\x1B\x1C\x03" +
    "\x02\r\x0E\x03\x02\"#\x03\x02)0\x03\x0218\x05\x02\r\x0E\x18\x19<>\x02" +
    "\xAD\x02\"\x03\x02\x02\x02\x04V\x03\x02\x02\x02\x06b\x03\x02\x02\x02\b" +
    "d\x03\x02\x02\x02\nn\x03\x02\x02\x02\fp\x03\x02\x02\x02\x0Ew\x03\x02\x02" +
    "\x02\x10\x7F\x03\x02\x02\x02\x12\x86\x03\x02\x02\x02\x14\x88\x03\x02\x02" +
    "\x02\x16\x8A\x03\x02\x02\x02\x18\x8C\x03\x02\x02\x02\x1A\x8E\x03\x02\x02" +
    "\x02\x1C\x96\x03\x02\x02\x02\x1E\x1F\b\x02\x01\x02\x1F#\x05\x04\x03\x02" +
    " !\t\x02\x02\x02!#\x05\x02\x02\r\"\x1E\x03\x02\x02\x02\" \x03\x02\x02" +
    "\x02#L\x03\x02\x02\x02$%\f\f\x02\x02%&\t\x03\x02\x02&K\x05\x02\x02\r\'" +
    "(\f\v\x02\x02()\t\x04\x02\x02)K\x05\x02\x02\f*+\f\t\x02\x02+,\x07\x0F" +
    "\x02\x02,K\x05\x02\x02\n-.\f\b\x02\x02./\t\x05\x02\x02/K\x05\x02\x02\t" +
    "01\f\x07\x02\x0212\t\x06\x02\x022K\x05\x02\x02\b34\f\x06\x02\x0245\t\x07" +
    "\x02\x025K\x05\x02\x02\x0767\f\x05\x02\x0278\x07\x1A\x02\x028K\x05\x02" +
    "\x02\x069:\f\x04\x02\x02:;\t\b\x02\x02;K\x05\x02\x02\x05<=\f\x03\x02\x02" +
    "=>\x07\x1D\x02\x02>K\x05\x02\x02\x04?@\f\x0F\x02\x02@A\x07\x03\x02\x02" +
    "AK\x05\n\x06\x02BC\f\x0E\x02\x02CD\x07\x04\x02\x02DE\x05\x02\x02\x02E" +
    "F\x07\x05\x02\x02FK\x03\x02\x02\x02GH\f\n\x02\x02HI\t\t\x02\x02IK\x05" +
    "\x18\r\x02J$\x03\x02\x02\x02J\'\x03\x02\x02\x02J*\x03\x02\x02\x02J-\x03" +
    "\x02\x02\x02J0\x03\x02\x02\x02J3\x03\x02\x02\x02J6\x03\x02\x02\x02J9\x03" +
    "\x02\x02\x02J<\x03\x02\x02\x02J?\x03\x02\x02\x02JB\x03\x02\x02\x02JG\x03" +
    "\x02\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02M\x03" +
    "\x03\x02\x02\x02NL\x03\x02\x02\x02OW\x05\n\x06\x02PW\x05\x06\x04\x02Q" +
    "W\x05\b\x05\x02RS\x07\x1E\x02\x02ST\x05\x02\x02\x02TU\x07\x1F\x02\x02" +
    "UW\x03\x02\x02\x02VO\x03\x02\x02\x02VP\x03\x02\x02\x02VQ\x03\x02\x02\x02" +
    "VR\x03\x02\x02\x02W\x05\x03\x02\x02\x02XY\x07 \x02\x02Yc\x07!\x02\x02" +
    "Zc\t\n\x02\x02[c\x07?\x02\x02\\c\x07@\x02\x02]c\x07A\x02\x02^c\x079\x02" +
    "\x02_c\x07:\x02\x02`c\x07;\x02\x02ac\x05\x10\t\x02bX\x03\x02\x02\x02b" +
    "Z\x03\x02\x02\x02b[\x03\x02\x02\x02b\\\x03\x02\x02\x02b]\x03\x02\x02\x02" +
    "b^\x03\x02\x02\x02b_\x03\x02\x02\x02b`\x03\x02\x02\x02ba\x03\x02\x02\x02" +
    "c\x07\x03\x02\x02\x02dg\x07$\x02\x02eh\x05\x1C\x0F\x02fh\x07?\x02\x02" +
    "ge\x03\x02\x02\x02gf\x03\x02\x02\x02h\t\x03\x02\x02\x02io\x05\x1C\x0F" +
    "\x02jo\x05\f\x07\x02ko\x07%\x02\x02lo\x07&\x02\x02mo\x07\'\x02\x02ni\x03" +
    "\x02\x02\x02nj\x03\x02\x02\x02nk\x03\x02\x02\x02nl\x03\x02\x02\x02nm\x03" +
    "\x02\x02\x02o\v\x03\x02\x02\x02pq\x05\x1C\x0F\x02qs\x07\x1E\x02\x02rt" +
    "\x05\x0E\b\x02sr\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02u" +
    "v\x07\x1F\x02\x02v\r\x03\x02\x02\x02w|\x05\x02\x02\x02xy\x07(\x02\x02" +
    "y{\x05\x02\x02\x02zx\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02" +
    "|}\x03\x02\x02\x02}\x0F\x03\x02\x02\x02~|\x03\x02\x02\x02\x7F\x81\x07" +
    "A\x02\x02\x80\x82\x05\x12\n\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02" +
    "\x02\x02\x82\x11\x03\x02\x02\x02\x83\x87\x05\x14\v\x02\x84\x87\x05\x16" +
    "\f\x02\x85\x87\x07?\x02\x02\x86\x83\x03\x02\x02\x02\x86\x84\x03\x02\x02" +
    "\x02\x86\x85\x03\x02\x02\x02\x87\x13\x03\x02\x02\x02\x88\x89\t\v\x02\x02" +
    "\x89\x15\x03\x02\x02\x02\x8A\x8B\t\f\x02\x02\x8B\x17\x03\x02\x02\x02\x8C" +
    "\x8D\x05\x1A\x0E\x02\x8D\x19\x03\x02\x02\x02\x8E\x93\x05\x1C\x0F\x02\x8F" +
    "\x90\x07\x03\x02\x02\x90\x92\x05\x1C\x0F\x02\x91\x8F\x03\x02\x02\x02\x92" +
    "\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94" +
    "\x1B\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x97\t\r\x02\x02\x97\x1D" +
    "\x03\x02\x02\x02\x0E\"JLVbgns|\x81\x86\x93";
export class ExpressionContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_expression; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class TermExpressionContext extends ExpressionContext {
    term() {
        return this.getRuleContext(0, TermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTermExpression) {
            listener.enterTermExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTermExpression) {
            listener.exitTermExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTermExpression) {
            return visitor.visitTermExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InvocationExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    invocation() {
        return this.getRuleContext(0, InvocationContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInvocationExpression) {
            listener.enterInvocationExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInvocationExpression) {
            listener.exitInvocationExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInvocationExpression) {
            return visitor.visitInvocationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IndexerExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexerExpression) {
            listener.enterIndexerExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexerExpression) {
            listener.exitIndexerExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexerExpression) {
            return visitor.visitIndexerExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PolarityExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPolarityExpression) {
            listener.enterPolarityExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPolarityExpression) {
            listener.exitPolarityExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPolarityExpression) {
            return visitor.visitPolarityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplicativeExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AdditiveExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    typeSpecifier() {
        return this.getRuleContext(0, TypeSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeExpression) {
            listener.enterTypeExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeExpression) {
            listener.exitTypeExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeExpression) {
            return visitor.visitTypeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnionExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnionExpression) {
            listener.enterUnionExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnionExpression) {
            listener.exitUnionExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnionExpression) {
            return visitor.visitUnionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InequalityExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInequalityExpression) {
            listener.enterInequalityExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInequalityExpression) {
            listener.exitInequalityExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInequalityExpression) {
            return visitor.visitInequalityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EqualityExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MembershipExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMembershipExpression) {
            listener.enterMembershipExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMembershipExpression) {
            listener.exitMembershipExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMembershipExpression) {
            return visitor.visitMembershipExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AndExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAndExpression) {
            listener.enterAndExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAndExpression) {
            listener.exitAndExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAndExpression) {
            return visitor.visitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOrExpression) {
            listener.enterOrExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrExpression) {
            listener.exitOrExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOrExpression) {
            return visitor.visitOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ImpliesExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterImpliesExpression) {
            listener.enterImpliesExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImpliesExpression) {
            listener.exitImpliesExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImpliesExpression) {
            return visitor.visitImpliesExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TermContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_term; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class InvocationTermContext extends TermContext {
    invocation() {
        return this.getRuleContext(0, InvocationContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInvocationTerm) {
            listener.enterInvocationTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInvocationTerm) {
            listener.exitInvocationTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInvocationTerm) {
            return visitor.visitInvocationTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralTermContext extends TermContext {
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLiteralTerm) {
            listener.enterLiteralTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLiteralTerm) {
            listener.exitLiteralTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteralTerm) {
            return visitor.visitLiteralTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExternalConstantTermContext extends TermContext {
    externalConstant() {
        return this.getRuleContext(0, ExternalConstantContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExternalConstantTerm) {
            listener.enterExternalConstantTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExternalConstantTerm) {
            listener.exitExternalConstantTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExternalConstantTerm) {
            return visitor.visitExternalConstantTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedTermContext extends TermContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParenthesizedTerm) {
            listener.enterParenthesizedTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenthesizedTerm) {
            listener.exitParenthesizedTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesizedTerm) {
            return visitor.visitParenthesizedTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_literal; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class NullLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNullLiteral) {
            listener.enterNullLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNullLiteral) {
            listener.exitNullLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBooleanLiteral) {
            listener.enterBooleanLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBooleanLiteral) {
            listener.exitBooleanLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends LiteralContext {
    STRING() { return this.getToken(FHIRPathParser.STRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UstringLiteralContext extends LiteralContext {
    USTRING() { return this.getToken(FHIRPathParser.USTRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUstringLiteral) {
            listener.enterUstringLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUstringLiteral) {
            listener.exitUstringLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUstringLiteral) {
            return visitor.visitUstringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumberLiteralContext extends LiteralContext {
    NUMBER() { return this.getToken(FHIRPathParser.NUMBER, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNumberLiteral) {
            listener.enterNumberLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumberLiteral) {
            listener.exitNumberLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumberLiteral) {
            return visitor.visitNumberLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DateTimeLiteralContext extends LiteralContext {
    DATETIME() { return this.getToken(FHIRPathParser.DATETIME, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDateTimeLiteral) {
            listener.enterDateTimeLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateTimeLiteral) {
            listener.exitDateTimeLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateTimeLiteral) {
            return visitor.visitDateTimeLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TimeLiteralContext extends LiteralContext {
    TIME() { return this.getToken(FHIRPathParser.TIME, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTimeLiteral) {
            listener.enterTimeLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTimeLiteral) {
            listener.exitTimeLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTimeLiteral) {
            return visitor.visitTimeLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DateStartSymbolLiteralContext extends LiteralContext {
    DATESTARTSYMBOL() { return this.getToken(FHIRPathParser.DATESTARTSYMBOL, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDateStartSymbolLiteral) {
            listener.enterDateStartSymbolLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateStartSymbolLiteral) {
            listener.exitDateStartSymbolLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateStartSymbolLiteral) {
            return visitor.visitDateStartSymbolLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuantityLiteralContext extends LiteralContext {
    quantity() {
        return this.getRuleContext(0, QuantityContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantityLiteral) {
            listener.enterQuantityLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantityLiteral) {
            listener.exitQuantityLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantityLiteral) {
            return visitor.visitQuantityLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExternalConstantContext extends ParserRuleContext {
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    STRING() { return this.tryGetToken(FHIRPathParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_externalConstant; }
    // @Override
    enterRule(listener) {
        if (listener.enterExternalConstant) {
            listener.enterExternalConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExternalConstant) {
            listener.exitExternalConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExternalConstant) {
            return visitor.visitExternalConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InvocationContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_invocation; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class MemberInvocationContext extends InvocationContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMemberInvocation) {
            listener.enterMemberInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMemberInvocation) {
            listener.exitMemberInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberInvocation) {
            return visitor.visitMemberInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionInvocationContext extends InvocationContext {
    function() {
        return this.getRuleContext(0, FunctionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionInvocation) {
            listener.enterFunctionInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionInvocation) {
            listener.exitFunctionInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionInvocation) {
            return visitor.visitFunctionInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ThisInvocationContext extends InvocationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterThisInvocation) {
            listener.enterThisInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitThisInvocation) {
            listener.exitThisInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitThisInvocation) {
            return visitor.visitThisInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IndexInvocationContext extends InvocationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexInvocation) {
            listener.enterIndexInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexInvocation) {
            listener.exitIndexInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexInvocation) {
            return visitor.visitIndexInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TotalInvocationContext extends InvocationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTotalInvocation) {
            listener.enterTotalInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTotalInvocation) {
            listener.exitTotalInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTotalInvocation) {
            return visitor.visitTotalInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionContext extends ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    paramList() {
        return this.tryGetRuleContext(0, ParamListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_function; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParamListContext extends ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_paramList; }
    // @Override
    enterRule(listener) {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuantityContext extends ParserRuleContext {
    NUMBER() { return this.getToken(FHIRPathParser.NUMBER, 0); }
    unit() {
        return this.tryGetRuleContext(0, UnitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_quantity; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantity) {
            listener.enterQuantity(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantity) {
            listener.exitQuantity(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantity) {
            return visitor.visitQuantity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnitContext extends ParserRuleContext {
    dateTimePrecision() {
        return this.tryGetRuleContext(0, DateTimePrecisionContext);
    }
    pluralDateTimePrecision() {
        return this.tryGetRuleContext(0, PluralDateTimePrecisionContext);
    }
    STRING() { return this.tryGetToken(FHIRPathParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_unit; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnit) {
            listener.enterUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnit) {
            listener.exitUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DateTimePrecisionContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_dateTimePrecision; }
    // @Override
    enterRule(listener) {
        if (listener.enterDateTimePrecision) {
            listener.enterDateTimePrecision(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateTimePrecision) {
            listener.exitDateTimePrecision(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateTimePrecision) {
            return visitor.visitDateTimePrecision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PluralDateTimePrecisionContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_pluralDateTimePrecision; }
    // @Override
    enterRule(listener) {
        if (listener.enterPluralDateTimePrecision) {
            listener.enterPluralDateTimePrecision(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPluralDateTimePrecision) {
            listener.exitPluralDateTimePrecision(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPluralDateTimePrecision) {
            return visitor.visitPluralDateTimePrecision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeSpecifierContext extends ParserRuleContext {
    qualifiedIdentifier() {
        return this.getRuleContext(0, QualifiedIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_typeSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeSpecifier) {
            listener.enterTypeSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeSpecifier) {
            listener.exitTypeSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSpecifier) {
            return visitor.visitTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QualifiedIdentifierContext extends ParserRuleContext {
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_qualifiedIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifiedIdentifier) {
            listener.enterQualifiedIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifiedIdentifier) {
            listener.exitQualifiedIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedIdentifier) {
            return visitor.visitQualifiedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierContext extends ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(FHIRPathParser.IDENTIFIER, 0); }
    DELIMITEDIDENTIFIER() { return this.tryGetToken(FHIRPathParser.DELIMITEDIDENTIFIER, 0); }
    UDELIMITEDIDENTIFIER() { return this.tryGetToken(FHIRPathParser.UDELIMITEDIDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FHIRPathParser.RULE_identifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
//# sourceMappingURL=FHIRPathParser.js.map