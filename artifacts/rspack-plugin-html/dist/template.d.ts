/**
 * compile template to js code.
 */
export interface TemplateCompiler<T = any> {
    compile(content: string, options?: {
        filename: string;
    } & T): Promise<string>;
    options?: T;
}
export declare const defaultTemplateCompiler: TemplateCompiler;
/**
 * eval js code to js function or js string.
 */
export declare function evaluate(compiled: string, publicPath: string, templateFilename: string): Promise<string | (() => string | Promise<string>)>;
//# sourceMappingURL=template.d.ts.map