// https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJinjaTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Footer to add at the bottom of the template before rendering. Deprecated in favor of the `source` block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#footer DataJinjaTemplate#footer}
  */
  readonly footer?: string;
  /**
  * Header to add at the top of the template before rendering. Deprecated in favor of the `source` block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#header DataJinjaTemplate#header}
  */
  readonly header?: string;
  /**
  * Set to `true` leading spaces and tabs are stripped from the start of a line to a block. Setting this value overrides any value set at the provider level if any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#left_strip_blocks DataJinjaTemplate#left_strip_blocks}
  */
  readonly leftStripBlocks?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to fail on missing items and attribute. Setting this value overrides any value set at the provider level if any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#strict_undefined DataJinjaTemplate#strict_undefined}
  */
  readonly strictUndefined?: boolean | cdktf.IResolvable;
  /**
  * Inlined or path to the jinja template to render. If the template is passed inlined, any filesystem calls such as using the `include` statement or the `fileset` filter won't work as expected. Deprecated in favor of the `source` block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#template DataJinjaTemplate#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#timeouts DataJinjaTemplate#timeouts}
  */
  readonly timeouts?: DataJinjaTemplateTimeouts;
  /**
  * Set to `true` the first newline after a block is removed. Setting this value overrides any value set at the provider level if any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#trim_blocks DataJinjaTemplate#trim_blocks}
  */
  readonly trimBlocks?: boolean | cdktf.IResolvable;
  /**
  * Map of JSON schemas to validate against the context. Schemas are tested sequentially in lexicographic order of this map's keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#validation DataJinjaTemplate#validation}
  */
  readonly validation?: { [key: string]: string };
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#context DataJinjaTemplate#context}
  */
  readonly context?: DataJinjaTemplateContext[] | cdktf.IResolvable;
  /**
  * delimiters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#delimiters DataJinjaTemplate#delimiters}
  */
  readonly delimiters?: DataJinjaTemplateDelimiters;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#source DataJinjaTemplate#source}
  */
  readonly source?: DataJinjaTemplateSource[] | cdktf.IResolvable;
}
export interface DataJinjaTemplateTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#read DataJinjaTemplate#read}
  */
  readonly read?: string;
}

export function dataJinjaTemplateTimeoutsToTerraform(struct?: DataJinjaTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataJinjaTemplateTimeoutsToHclTerraform(struct?: DataJinjaTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataJinjaTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJinjaTemplateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJinjaTemplateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface DataJinjaTemplateContext {
  /**
  * A string holding the serialized context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#data DataJinjaTemplate#data}
  */
  readonly data: string;
  /**
  * Type of parsing (one of: `json`,`yaml`,`toml`,`tfvars`) to perform on the given string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#type DataJinjaTemplate#type}
  */
  readonly type: string;
}

export function dataJinjaTemplateContextToTerraform(struct?: DataJinjaTemplateContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataJinjaTemplateContextToHclTerraform(struct?: DataJinjaTemplateContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataJinjaTemplateContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataJinjaTemplateContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJinjaTemplateContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataJinjaTemplateContextList extends cdktf.ComplexList {
  public internalValue? : DataJinjaTemplateContext[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataJinjaTemplateContextOutputReference {
    return new DataJinjaTemplateContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJinjaTemplateDelimiters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#block_end DataJinjaTemplate#block_end}
  */
  readonly blockEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#block_start DataJinjaTemplate#block_start}
  */
  readonly blockStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#comment_end DataJinjaTemplate#comment_end}
  */
  readonly commentEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#comment_start DataJinjaTemplate#comment_start}
  */
  readonly commentStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#variable_end DataJinjaTemplate#variable_end}
  */
  readonly variableEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#variable_start DataJinjaTemplate#variable_start}
  */
  readonly variableStart?: string;
}

export function dataJinjaTemplateDelimitersToTerraform(struct?: DataJinjaTemplateDelimiters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_end: cdktf.stringToTerraform(struct!.blockEnd),
    block_start: cdktf.stringToTerraform(struct!.blockStart),
    comment_end: cdktf.stringToTerraform(struct!.commentEnd),
    comment_start: cdktf.stringToTerraform(struct!.commentStart),
    variable_end: cdktf.stringToTerraform(struct!.variableEnd),
    variable_start: cdktf.stringToTerraform(struct!.variableStart),
  }
}


export function dataJinjaTemplateDelimitersToHclTerraform(struct?: DataJinjaTemplateDelimiters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_end: {
      value: cdktf.stringToHclTerraform(struct!.blockEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_start: {
      value: cdktf.stringToHclTerraform(struct!.blockStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment_end: {
      value: cdktf.stringToHclTerraform(struct!.commentEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment_start: {
      value: cdktf.stringToHclTerraform(struct!.commentStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_end: {
      value: cdktf.stringToHclTerraform(struct!.variableEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_start: {
      value: cdktf.stringToHclTerraform(struct!.variableStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataJinjaTemplateDelimitersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJinjaTemplateDelimiters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockEnd = this._blockEnd;
    }
    if (this._blockStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStart = this._blockStart;
    }
    if (this._commentEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentEnd = this._commentEnd;
    }
    if (this._commentStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentStart = this._commentStart;
    }
    if (this._variableEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableEnd = this._variableEnd;
    }
    if (this._variableStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableStart = this._variableStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJinjaTemplateDelimiters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockEnd = undefined;
      this._blockStart = undefined;
      this._commentEnd = undefined;
      this._commentStart = undefined;
      this._variableEnd = undefined;
      this._variableStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockEnd = value.blockEnd;
      this._blockStart = value.blockStart;
      this._commentEnd = value.commentEnd;
      this._commentStart = value.commentStart;
      this._variableEnd = value.variableEnd;
      this._variableStart = value.variableStart;
    }
  }

  // block_end - computed: false, optional: true, required: false
  private _blockEnd?: string; 
  public get blockEnd() {
    return this.getStringAttribute('block_end');
  }
  public set blockEnd(value: string) {
    this._blockEnd = value;
  }
  public resetBlockEnd() {
    this._blockEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockEndInput() {
    return this._blockEnd;
  }

  // block_start - computed: false, optional: true, required: false
  private _blockStart?: string; 
  public get blockStart() {
    return this.getStringAttribute('block_start');
  }
  public set blockStart(value: string) {
    this._blockStart = value;
  }
  public resetBlockStart() {
    this._blockStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStartInput() {
    return this._blockStart;
  }

  // comment_end - computed: false, optional: true, required: false
  private _commentEnd?: string; 
  public get commentEnd() {
    return this.getStringAttribute('comment_end');
  }
  public set commentEnd(value: string) {
    this._commentEnd = value;
  }
  public resetCommentEnd() {
    this._commentEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentEndInput() {
    return this._commentEnd;
  }

  // comment_start - computed: false, optional: true, required: false
  private _commentStart?: string; 
  public get commentStart() {
    return this.getStringAttribute('comment_start');
  }
  public set commentStart(value: string) {
    this._commentStart = value;
  }
  public resetCommentStart() {
    this._commentStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentStartInput() {
    return this._commentStart;
  }

  // variable_end - computed: false, optional: true, required: false
  private _variableEnd?: string; 
  public get variableEnd() {
    return this.getStringAttribute('variable_end');
  }
  public set variableEnd(value: string) {
    this._variableEnd = value;
  }
  public resetVariableEnd() {
    this._variableEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableEndInput() {
    return this._variableEnd;
  }

  // variable_start - computed: false, optional: true, required: false
  private _variableStart?: string; 
  public get variableStart() {
    return this.getStringAttribute('variable_start');
  }
  public set variableStart(value: string) {
    this._variableStart = value;
  }
  public resetVariableStart() {
    this._variableStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableStartInput() {
    return this._variableStart;
  }
}
export interface DataJinjaTemplateSource {
  /**
  * Path to the directory to use as the root starting point. If the template is an external file, then the `dirname(...)` function can be used to get the path to the template's directory. Otherwise, just using `path.module` is usually a good idea
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#directory DataJinjaTemplate#directory}
  */
  readonly directory: string;
  /**
  * Template to render. If required to load an external file, then the `file(...)` function can be used to retrieve the file's content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#template DataJinjaTemplate#template}
  */
  readonly template: string;
}

export function dataJinjaTemplateSourceToTerraform(struct?: DataJinjaTemplateSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataJinjaTemplateSourceToHclTerraform(struct?: DataJinjaTemplateSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataJinjaTemplateSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataJinjaTemplateSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJinjaTemplateSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
      this._template = value.template;
    }
  }

  // directory - computed: false, optional: false, required: true
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class DataJinjaTemplateSourceList extends cdktf.ComplexList {
  public internalValue? : DataJinjaTemplateSource[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataJinjaTemplateSourceOutputReference {
    return new DataJinjaTemplateSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template jinja_template}
*/
export class DataJinjaTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jinja_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJinjaTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJinjaTemplate to import
  * @param importFromId The id of the existing DataJinjaTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJinjaTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jinja_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs/data-sources/template jinja_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJinjaTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataJinjaTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'jinja_template',
      terraformGeneratorMetadata: {
        providerName: 'jinja',
        providerVersion: '2.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._footer = config.footer;
    this._header = config.header;
    this._leftStripBlocks = config.leftStripBlocks;
    this._strictUndefined = config.strictUndefined;
    this._template = config.template;
    this._timeouts.internalValue = config.timeouts;
    this._trimBlocks = config.trimBlocks;
    this._validation = config.validation;
    this._context.internalValue = config.context;
    this._delimiters.internalValue = config.delimiters;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // footer - computed: false, optional: true, required: false
  private _footer?: string; 
  public get footer() {
    return this.getStringAttribute('footer');
  }
  public set footer(value: string) {
    this._footer = value;
  }
  public resetFooter() {
    this._footer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerInput() {
    return this._footer;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // left_strip_blocks - computed: false, optional: true, required: false
  private _leftStripBlocks?: boolean | cdktf.IResolvable; 
  public get leftStripBlocks() {
    return this.getBooleanAttribute('left_strip_blocks');
  }
  public set leftStripBlocks(value: boolean | cdktf.IResolvable) {
    this._leftStripBlocks = value;
  }
  public resetLeftStripBlocks() {
    this._leftStripBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftStripBlocksInput() {
    return this._leftStripBlocks;
  }

  // merged_context - computed: true, optional: false, required: false
  public get mergedContext() {
    return this.getStringAttribute('merged_context');
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // strict_undefined - computed: false, optional: true, required: false
  private _strictUndefined?: boolean | cdktf.IResolvable; 
  public get strictUndefined() {
    return this.getBooleanAttribute('strict_undefined');
  }
  public set strictUndefined(value: boolean | cdktf.IResolvable) {
    this._strictUndefined = value;
  }
  public resetStrictUndefined() {
    this._strictUndefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictUndefinedInput() {
    return this._strictUndefined;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataJinjaTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataJinjaTemplateTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trim_blocks - computed: false, optional: true, required: false
  private _trimBlocks?: boolean | cdktf.IResolvable; 
  public get trimBlocks() {
    return this.getBooleanAttribute('trim_blocks');
  }
  public set trimBlocks(value: boolean | cdktf.IResolvable) {
    this._trimBlocks = value;
  }
  public resetTrimBlocks() {
    this._trimBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimBlocksInput() {
    return this._trimBlocks;
  }

  // validation - computed: false, optional: true, required: false
  private _validation?: { [key: string]: string }; 
  public get validation() {
    return this.getStringMapAttribute('validation');
  }
  public set validation(value: { [key: string]: string }) {
    this._validation = value;
  }
  public resetValidation() {
    this._validation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation;
  }

  // context - computed: false, optional: true, required: false
  private _context = new DataJinjaTemplateContextList(this, "context", false);
  public get context() {
    return this._context;
  }
  public putContext(value: DataJinjaTemplateContext[] | cdktf.IResolvable) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // delimiters - computed: false, optional: true, required: false
  private _delimiters = new DataJinjaTemplateDelimitersOutputReference(this, "delimiters");
  public get delimiters() {
    return this._delimiters;
  }
  public putDelimiters(value: DataJinjaTemplateDelimiters) {
    this._delimiters.internalValue = value;
  }
  public resetDelimiters() {
    this._delimiters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimitersInput() {
    return this._delimiters.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataJinjaTemplateSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: DataJinjaTemplateSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      footer: cdktf.stringToTerraform(this._footer),
      header: cdktf.stringToTerraform(this._header),
      left_strip_blocks: cdktf.booleanToTerraform(this._leftStripBlocks),
      strict_undefined: cdktf.booleanToTerraform(this._strictUndefined),
      template: cdktf.stringToTerraform(this._template),
      timeouts: dataJinjaTemplateTimeoutsToTerraform(this._timeouts.internalValue),
      trim_blocks: cdktf.booleanToTerraform(this._trimBlocks),
      validation: cdktf.hashMapper(cdktf.stringToTerraform)(this._validation),
      context: cdktf.listMapper(dataJinjaTemplateContextToTerraform, true)(this._context.internalValue),
      delimiters: dataJinjaTemplateDelimitersToTerraform(this._delimiters.internalValue),
      source: cdktf.listMapper(dataJinjaTemplateSourceToTerraform, true)(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      footer: {
        value: cdktf.stringToHclTerraform(this._footer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header: {
        value: cdktf.stringToHclTerraform(this._header),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      left_strip_blocks: {
        value: cdktf.booleanToHclTerraform(this._leftStripBlocks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict_undefined: {
        value: cdktf.booleanToHclTerraform(this._strictUndefined),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataJinjaTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataJinjaTemplateTimeouts",
      },
      trim_blocks: {
        value: cdktf.booleanToHclTerraform(this._trimBlocks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validation: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._validation),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      context: {
        value: cdktf.listMapperHcl(dataJinjaTemplateContextToHclTerraform, true)(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataJinjaTemplateContextList",
      },
      delimiters: {
        value: dataJinjaTemplateDelimitersToHclTerraform(this._delimiters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataJinjaTemplateDelimiters",
      },
      source: {
        value: cdktf.listMapperHcl(dataJinjaTemplateSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataJinjaTemplateSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
