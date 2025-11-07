// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundFilespecificationtemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Kind of delimiter Defaults to `Comma`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#delimiter OutboundFilespecificationtemplate#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Delimiter character, used only when delimiter="Custom"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#delimiter_value OutboundFilespecificationtemplate#delimiter_value}
  */
  readonly delimiterValue?: string;
  /**
  * Description of the file specification template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#description OutboundFilespecificationtemplate#description}
  */
  readonly description?: string;
  /**
  * File format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#format OutboundFilespecificationtemplate#format}
  */
  readonly format: string;
  /**
  * If true indicates that delimited file has a header row, which can provide column names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#header OutboundFilespecificationtemplate#header}
  */
  readonly header?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#id OutboundFilespecificationtemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the File Specification template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#name OutboundFilespecificationtemplate#name}
  */
  readonly name: string;
  /**
  * Number of heading lines to be skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#number_of_header_lines_skipped OutboundFilespecificationtemplate#number_of_header_lines_skipped}
  */
  readonly numberOfHeaderLinesSkipped?: number;
  /**
  * Number of trailing lines to be skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#number_of_trailer_lines_skipped OutboundFilespecificationtemplate#number_of_trailer_lines_skipped}
  */
  readonly numberOfTrailerLinesSkipped?: number;
  /**
  * column_information block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#column_information OutboundFilespecificationtemplate#column_information}
  */
  readonly columnInformation?: OutboundFilespecificationtemplateColumnInformation[] | cdktf.IResolvable;
  /**
  * preprocessing_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#preprocessing_rule OutboundFilespecificationtemplate#preprocessing_rule}
  */
  readonly preprocessingRule?: OutboundFilespecificationtemplatePreprocessingRule[] | cdktf.IResolvable;
}
export interface OutboundFilespecificationtemplateColumnInformation {
  /**
  * Column name. Mandatory for Fixed position/length file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#column_name OutboundFilespecificationtemplate#column_name}
  */
  readonly columnName?: string;
  /**
  * 0 based column number in delimited file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#column_number OutboundFilespecificationtemplate#column_number}
  */
  readonly columnNumber?: number;
  /**
  * Column width. Mandatory for Fixed position/length file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#length OutboundFilespecificationtemplate#length}
  */
  readonly length?: number;
  /**
  * Zero-based position of the first column's character. Mandatory for Fixed position/length file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#start_position OutboundFilespecificationtemplate#start_position}
  */
  readonly startPosition?: number;
}

export function outboundFilespecificationtemplateColumnInformationToTerraform(struct?: OutboundFilespecificationtemplateColumnInformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    column_number: cdktf.numberToTerraform(struct!.columnNumber),
    length: cdktf.numberToTerraform(struct!.length),
    start_position: cdktf.numberToTerraform(struct!.startPosition),
  }
}


export function outboundFilespecificationtemplateColumnInformationToHclTerraform(struct?: OutboundFilespecificationtemplateColumnInformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_number: {
      value: cdktf.numberToHclTerraform(struct!.columnNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_position: {
      value: cdktf.numberToHclTerraform(struct!.startPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundFilespecificationtemplateColumnInformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundFilespecificationtemplateColumnInformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._columnNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNumber = this._columnNumber;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._startPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPosition = this._startPosition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundFilespecificationtemplateColumnInformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._columnNumber = undefined;
      this._length = undefined;
      this._startPosition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._columnNumber = value.columnNumber;
      this._length = value.length;
      this._startPosition = value.startPosition;
    }
  }

  // column_name - computed: false, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // column_number - computed: false, optional: true, required: false
  private _columnNumber?: number; 
  public get columnNumber() {
    return this.getNumberAttribute('column_number');
  }
  public set columnNumber(value: number) {
    this._columnNumber = value;
  }
  public resetColumnNumber() {
    this._columnNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNumberInput() {
    return this._columnNumber;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // start_position - computed: false, optional: true, required: false
  private _startPosition?: number; 
  public get startPosition() {
    return this.getNumberAttribute('start_position');
  }
  public set startPosition(value: number) {
    this._startPosition = value;
  }
  public resetStartPosition() {
    this._startPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPositionInput() {
    return this._startPosition;
  }
}

export class OutboundFilespecificationtemplateColumnInformationList extends cdktf.ComplexList {
  public internalValue? : OutboundFilespecificationtemplateColumnInformation[] | cdktf.IResolvable

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
  public get(index: number): OutboundFilespecificationtemplateColumnInformationOutputReference {
    return new OutboundFilespecificationtemplateColumnInformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundFilespecificationtemplatePreprocessingRule {
  /**
  * The regular expression to which file lines are to be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#find OutboundFilespecificationtemplate#find}
  */
  readonly find?: string;
  /**
  * Replaces all matching substrings in every line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#global OutboundFilespecificationtemplate#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * Enables case-insensitive matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#ignore_case OutboundFilespecificationtemplate#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The string to be substituted for each match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#replace_with OutboundFilespecificationtemplate#replace_with}
  */
  readonly replaceWith?: string;
}

export function outboundFilespecificationtemplatePreprocessingRuleToTerraform(struct?: OutboundFilespecificationtemplatePreprocessingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    find: cdktf.stringToTerraform(struct!.find),
    global: cdktf.booleanToTerraform(struct!.global),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    replace_with: cdktf.stringToTerraform(struct!.replaceWith),
  }
}


export function outboundFilespecificationtemplatePreprocessingRuleToHclTerraform(struct?: OutboundFilespecificationtemplatePreprocessingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    find: {
      value: cdktf.stringToHclTerraform(struct!.find),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_with: {
      value: cdktf.stringToHclTerraform(struct!.replaceWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundFilespecificationtemplatePreprocessingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundFilespecificationtemplatePreprocessingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._find !== undefined) {
      hasAnyValues = true;
      internalValueResult.find = this._find;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._replaceWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceWith = this._replaceWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundFilespecificationtemplatePreprocessingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._find = undefined;
      this._global = undefined;
      this._ignoreCase = undefined;
      this._replaceWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._find = value.find;
      this._global = value.global;
      this._ignoreCase = value.ignoreCase;
      this._replaceWith = value.replaceWith;
    }
  }

  // find - computed: false, optional: true, required: false
  private _find?: string; 
  public get find() {
    return this.getStringAttribute('find');
  }
  public set find(value: string) {
    this._find = value;
  }
  public resetFind() {
    this._find = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findInput() {
    return this._find;
  }

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // replace_with - computed: false, optional: true, required: false
  private _replaceWith?: string; 
  public get replaceWith() {
    return this.getStringAttribute('replace_with');
  }
  public set replaceWith(value: string) {
    this._replaceWith = value;
  }
  public resetReplaceWith() {
    this._replaceWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceWithInput() {
    return this._replaceWith;
  }
}

export class OutboundFilespecificationtemplatePreprocessingRuleList extends cdktf.ComplexList {
  public internalValue? : OutboundFilespecificationtemplatePreprocessingRule[] | cdktf.IResolvable

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
  public get(index: number): OutboundFilespecificationtemplatePreprocessingRuleOutputReference {
    return new OutboundFilespecificationtemplatePreprocessingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate genesyscloud_outbound_filespecificationtemplate}
*/
export class OutboundFilespecificationtemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_filespecificationtemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundFilespecificationtemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundFilespecificationtemplate to import
  * @param importFromId The id of the existing OutboundFilespecificationtemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundFilespecificationtemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_filespecificationtemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_filespecificationtemplate genesyscloud_outbound_filespecificationtemplate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundFilespecificationtemplateConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundFilespecificationtemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_filespecificationtemplate',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delimiter = config.delimiter;
    this._delimiterValue = config.delimiterValue;
    this._description = config.description;
    this._format = config.format;
    this._header = config.header;
    this._id = config.id;
    this._name = config.name;
    this._numberOfHeaderLinesSkipped = config.numberOfHeaderLinesSkipped;
    this._numberOfTrailerLinesSkipped = config.numberOfTrailerLinesSkipped;
    this._columnInformation.internalValue = config.columnInformation;
    this._preprocessingRule.internalValue = config.preprocessingRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // delimiter_value - computed: false, optional: true, required: false
  private _delimiterValue?: string; 
  public get delimiterValue() {
    return this.getStringAttribute('delimiter_value');
  }
  public set delimiterValue(value: string) {
    this._delimiterValue = value;
  }
  public resetDelimiterValue() {
    this._delimiterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterValueInput() {
    return this._delimiterValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // header - computed: false, optional: true, required: false
  private _header?: boolean | cdktf.IResolvable; 
  public get header() {
    return this.getBooleanAttribute('header');
  }
  public set header(value: boolean | cdktf.IResolvable) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // number_of_header_lines_skipped - computed: false, optional: true, required: false
  private _numberOfHeaderLinesSkipped?: number; 
  public get numberOfHeaderLinesSkipped() {
    return this.getNumberAttribute('number_of_header_lines_skipped');
  }
  public set numberOfHeaderLinesSkipped(value: number) {
    this._numberOfHeaderLinesSkipped = value;
  }
  public resetNumberOfHeaderLinesSkipped() {
    this._numberOfHeaderLinesSkipped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfHeaderLinesSkippedInput() {
    return this._numberOfHeaderLinesSkipped;
  }

  // number_of_trailer_lines_skipped - computed: false, optional: true, required: false
  private _numberOfTrailerLinesSkipped?: number; 
  public get numberOfTrailerLinesSkipped() {
    return this.getNumberAttribute('number_of_trailer_lines_skipped');
  }
  public set numberOfTrailerLinesSkipped(value: number) {
    this._numberOfTrailerLinesSkipped = value;
  }
  public resetNumberOfTrailerLinesSkipped() {
    this._numberOfTrailerLinesSkipped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfTrailerLinesSkippedInput() {
    return this._numberOfTrailerLinesSkipped;
  }

  // column_information - computed: false, optional: true, required: false
  private _columnInformation = new OutboundFilespecificationtemplateColumnInformationList(this, "column_information", false);
  public get columnInformation() {
    return this._columnInformation;
  }
  public putColumnInformation(value: OutboundFilespecificationtemplateColumnInformation[] | cdktf.IResolvable) {
    this._columnInformation.internalValue = value;
  }
  public resetColumnInformation() {
    this._columnInformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInformationInput() {
    return this._columnInformation.internalValue;
  }

  // preprocessing_rule - computed: false, optional: true, required: false
  private _preprocessingRule = new OutboundFilespecificationtemplatePreprocessingRuleList(this, "preprocessing_rule", false);
  public get preprocessingRule() {
    return this._preprocessingRule;
  }
  public putPreprocessingRule(value: OutboundFilespecificationtemplatePreprocessingRule[] | cdktf.IResolvable) {
    this._preprocessingRule.internalValue = value;
  }
  public resetPreprocessingRule() {
    this._preprocessingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessingRuleInput() {
    return this._preprocessingRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delimiter: cdktf.stringToTerraform(this._delimiter),
      delimiter_value: cdktf.stringToTerraform(this._delimiterValue),
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      header: cdktf.booleanToTerraform(this._header),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      number_of_header_lines_skipped: cdktf.numberToTerraform(this._numberOfHeaderLinesSkipped),
      number_of_trailer_lines_skipped: cdktf.numberToTerraform(this._numberOfTrailerLinesSkipped),
      column_information: cdktf.listMapper(outboundFilespecificationtemplateColumnInformationToTerraform, true)(this._columnInformation.internalValue),
      preprocessing_rule: cdktf.listMapper(outboundFilespecificationtemplatePreprocessingRuleToTerraform, true)(this._preprocessingRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delimiter: {
        value: cdktf.stringToHclTerraform(this._delimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delimiter_value: {
        value: cdktf.stringToHclTerraform(this._delimiterValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header: {
        value: cdktf.booleanToHclTerraform(this._header),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_header_lines_skipped: {
        value: cdktf.numberToHclTerraform(this._numberOfHeaderLinesSkipped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_trailer_lines_skipped: {
        value: cdktf.numberToHclTerraform(this._numberOfTrailerLinesSkipped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      column_information: {
        value: cdktf.listMapperHcl(outboundFilespecificationtemplateColumnInformationToHclTerraform, true)(this._columnInformation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundFilespecificationtemplateColumnInformationList",
      },
      preprocessing_rule: {
        value: cdktf.listMapperHcl(outboundFilespecificationtemplatePreprocessingRuleToHclTerraform, true)(this._preprocessingRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundFilespecificationtemplatePreprocessingRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
