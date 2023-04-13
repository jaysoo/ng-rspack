import type { JsCompatSource } from "@rspack/binding";
import { Source } from "webpack-sources";
declare function createSourceFromRaw(source: JsCompatSource): Source;
declare function createRawFromSource(source: Source): JsCompatSource;
export { createSourceFromRaw, createRawFromSource };
//# sourceMappingURL=createSource.d.ts.map