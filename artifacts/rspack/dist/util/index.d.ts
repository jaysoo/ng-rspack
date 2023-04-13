export declare function mapValues(record: Record<string, string>, fn: (key: string) => string): {
    [k: string]: string;
};
export declare function isNil(value: unknown): value is null | undefined;
export declare function isPromiseLike(value: unknown): value is Promise<any>;
export declare function concatErrorMsgAndStack(err: Error): string;
export declare function indent(str: string, prefix: string): string;
export declare function asArray<T>(item: T[]): T[];
export declare function asArray<T>(item: readonly T[]): readonly T[];
export declare function asArray<T>(item: T): T[];
//# sourceMappingURL=index.d.ts.map