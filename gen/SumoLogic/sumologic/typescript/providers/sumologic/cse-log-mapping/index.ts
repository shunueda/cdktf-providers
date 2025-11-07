// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseLogMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#enabled CseLogMapping#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#id CseLogMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#name CseLogMapping#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#parent_id CseLogMapping#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#product_guid CseLogMapping#product_guid}
  */
  readonly productGuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#record_type CseLogMapping#record_type}
  */
  readonly recordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#relates_entities CseLogMapping#relates_entities}
  */
  readonly relatesEntities?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#skipped_values CseLogMapping#skipped_values}
  */
  readonly skippedValues?: string[];
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#fields CseLogMapping#fields}
  */
  readonly fields: CseLogMappingFields[] | cdktf.IResolvable;
  /**
  * structured_inputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#structured_inputs CseLogMapping#structured_inputs}
  */
  readonly structuredInputs?: CseLogMappingStructuredInputs[] | cdktf.IResolvable;
  /**
  * unstructured_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#unstructured_fields CseLogMapping#unstructured_fields}
  */
  readonly unstructuredFields?: CseLogMappingUnstructuredFields;
}
export interface CseLogMappingFieldsLookup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#key CseLogMapping#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#value CseLogMapping#value}
  */
  readonly value: string;
}

export function cseLogMappingFieldsLookupToTerraform(struct?: CseLogMappingFieldsLookup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cseLogMappingFieldsLookupToHclTerraform(struct?: CseLogMappingFieldsLookup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CseLogMappingFieldsLookupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseLogMappingFieldsLookup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseLogMappingFieldsLookup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CseLogMappingFieldsLookupList extends cdktf.ComplexList {
  public internalValue? : CseLogMappingFieldsLookup[] | cdktf.IResolvable

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
  public get(index: number): CseLogMappingFieldsLookupOutputReference {
    return new CseLogMappingFieldsLookupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CseLogMappingFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#alternate_values CseLogMapping#alternate_values}
  */
  readonly alternateValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#case_insensitive CseLogMapping#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#default_value CseLogMapping#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#field_join CseLogMapping#field_join}
  */
  readonly fieldJoin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#format CseLogMapping#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#format_parameters CseLogMapping#format_parameters}
  */
  readonly formatParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#join_delimiter CseLogMapping#join_delimiter}
  */
  readonly joinDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#name CseLogMapping#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#skipped_values CseLogMapping#skipped_values}
  */
  readonly skippedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#split_delimiter CseLogMapping#split_delimiter}
  */
  readonly splitDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#split_index CseLogMapping#split_index}
  */
  readonly splitIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#time_zone CseLogMapping#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#value CseLogMapping#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#value_type CseLogMapping#value_type}
  */
  readonly valueType?: string;
  /**
  * lookup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#lookup CseLogMapping#lookup}
  */
  readonly lookup?: CseLogMappingFieldsLookup[] | cdktf.IResolvable;
}

export function cseLogMappingFieldsToTerraform(struct?: CseLogMappingFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alternateValues),
    case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field_join: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldJoin),
    format: cdktf.stringToTerraform(struct!.format),
    format_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.formatParameters),
    join_delimiter: cdktf.stringToTerraform(struct!.joinDelimiter),
    name: cdktf.stringToTerraform(struct!.name),
    skipped_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.skippedValues),
    split_delimiter: cdktf.stringToTerraform(struct!.splitDelimiter),
    split_index: cdktf.stringToTerraform(struct!.splitIndex),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    lookup: cdktf.listMapper(cseLogMappingFieldsLookupToTerraform, true)(struct!.lookup),
  }
}


export function cseLogMappingFieldsToHclTerraform(struct?: CseLogMappingFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alternateValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    case_insensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseInsensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_join: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldJoin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.formatParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    join_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.joinDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skipped_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.skippedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    split_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.splitDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_index: {
      value: cdktf.stringToHclTerraform(struct!.splitIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookup: {
      value: cdktf.listMapperHcl(cseLogMappingFieldsLookupToHclTerraform, true)(struct!.lookup),
      isBlock: true,
      type: "list",
      storageClassType: "CseLogMappingFieldsLookupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CseLogMappingFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseLogMappingFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateValues = this._alternateValues;
    }
    if (this._caseInsensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitive = this._caseInsensitive;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._fieldJoin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldJoin = this._fieldJoin;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatParameters = this._formatParameters;
    }
    if (this._joinDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinDelimiter = this._joinDelimiter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._skippedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippedValues = this._skippedValues;
    }
    if (this._splitDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitDelimiter = this._splitDelimiter;
    }
    if (this._splitIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitIndex = this._splitIndex;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._lookup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookup = this._lookup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseLogMappingFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateValues = undefined;
      this._caseInsensitive = undefined;
      this._defaultValue = undefined;
      this._fieldJoin = undefined;
      this._format = undefined;
      this._formatParameters = undefined;
      this._joinDelimiter = undefined;
      this._name = undefined;
      this._skippedValues = undefined;
      this._splitDelimiter = undefined;
      this._splitIndex = undefined;
      this._timeZone = undefined;
      this._value = undefined;
      this._valueType = undefined;
      this._lookup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateValues = value.alternateValues;
      this._caseInsensitive = value.caseInsensitive;
      this._defaultValue = value.defaultValue;
      this._fieldJoin = value.fieldJoin;
      this._format = value.format;
      this._formatParameters = value.formatParameters;
      this._joinDelimiter = value.joinDelimiter;
      this._name = value.name;
      this._skippedValues = value.skippedValues;
      this._splitDelimiter = value.splitDelimiter;
      this._splitIndex = value.splitIndex;
      this._timeZone = value.timeZone;
      this._value = value.value;
      this._valueType = value.valueType;
      this._lookup.internalValue = value.lookup;
    }
  }

  // alternate_values - computed: false, optional: true, required: false
  private _alternateValues?: string[]; 
  public get alternateValues() {
    return this.getListAttribute('alternate_values');
  }
  public set alternateValues(value: string[]) {
    this._alternateValues = value;
  }
  public resetAlternateValues() {
    this._alternateValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateValuesInput() {
    return this._alternateValues;
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: boolean | cdktf.IResolvable; 
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }
  public set caseInsensitive(value: boolean | cdktf.IResolvable) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // field_join - computed: false, optional: true, required: false
  private _fieldJoin?: string[]; 
  public get fieldJoin() {
    return this.getListAttribute('field_join');
  }
  public set fieldJoin(value: string[]) {
    this._fieldJoin = value;
  }
  public resetFieldJoin() {
    this._fieldJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldJoinInput() {
    return this._fieldJoin;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_parameters - computed: false, optional: true, required: false
  private _formatParameters?: string[]; 
  public get formatParameters() {
    return this.getListAttribute('format_parameters');
  }
  public set formatParameters(value: string[]) {
    this._formatParameters = value;
  }
  public resetFormatParameters() {
    this._formatParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatParametersInput() {
    return this._formatParameters;
  }

  // join_delimiter - computed: false, optional: true, required: false
  private _joinDelimiter?: string; 
  public get joinDelimiter() {
    return this.getStringAttribute('join_delimiter');
  }
  public set joinDelimiter(value: string) {
    this._joinDelimiter = value;
  }
  public resetJoinDelimiter() {
    this._joinDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinDelimiterInput() {
    return this._joinDelimiter;
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

  // skipped_values - computed: false, optional: true, required: false
  private _skippedValues?: string[]; 
  public get skippedValues() {
    return this.getListAttribute('skipped_values');
  }
  public set skippedValues(value: string[]) {
    this._skippedValues = value;
  }
  public resetSkippedValues() {
    this._skippedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippedValuesInput() {
    return this._skippedValues;
  }

  // split_delimiter - computed: false, optional: true, required: false
  private _splitDelimiter?: string; 
  public get splitDelimiter() {
    return this.getStringAttribute('split_delimiter');
  }
  public set splitDelimiter(value: string) {
    this._splitDelimiter = value;
  }
  public resetSplitDelimiter() {
    this._splitDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDelimiterInput() {
    return this._splitDelimiter;
  }

  // split_index - computed: false, optional: true, required: false
  private _splitIndex?: string; 
  public get splitIndex() {
    return this.getStringAttribute('split_index');
  }
  public set splitIndex(value: string) {
    this._splitIndex = value;
  }
  public resetSplitIndex() {
    this._splitIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitIndexInput() {
    return this._splitIndex;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // lookup - computed: false, optional: true, required: false
  private _lookup = new CseLogMappingFieldsLookupList(this, "lookup", false);
  public get lookup() {
    return this._lookup;
  }
  public putLookup(value: CseLogMappingFieldsLookup[] | cdktf.IResolvable) {
    this._lookup.internalValue = value;
  }
  public resetLookup() {
    this._lookup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupInput() {
    return this._lookup.internalValue;
  }
}

export class CseLogMappingFieldsList extends cdktf.ComplexList {
  public internalValue? : CseLogMappingFields[] | cdktf.IResolvable

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
  public get(index: number): CseLogMappingFieldsOutputReference {
    return new CseLogMappingFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CseLogMappingStructuredInputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#event_id_pattern CseLogMapping#event_id_pattern}
  */
  readonly eventIdPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#log_format CseLogMapping#log_format}
  */
  readonly logFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#product CseLogMapping#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#vendor CseLogMapping#vendor}
  */
  readonly vendor: string;
}

export function cseLogMappingStructuredInputsToTerraform(struct?: CseLogMappingStructuredInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_id_pattern: cdktf.stringToTerraform(struct!.eventIdPattern),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    product: cdktf.stringToTerraform(struct!.product),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function cseLogMappingStructuredInputsToHclTerraform(struct?: CseLogMappingStructuredInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_id_pattern: {
      value: cdktf.stringToHclTerraform(struct!.eventIdPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CseLogMappingStructuredInputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseLogMappingStructuredInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventIdPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventIdPattern = this._eventIdPattern;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseLogMappingStructuredInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventIdPattern = undefined;
      this._logFormat = undefined;
      this._product = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventIdPattern = value.eventIdPattern;
      this._logFormat = value.logFormat;
      this._product = value.product;
      this._vendor = value.vendor;
    }
  }

  // event_id_pattern - computed: false, optional: false, required: true
  private _eventIdPattern?: string; 
  public get eventIdPattern() {
    return this.getStringAttribute('event_id_pattern');
  }
  public set eventIdPattern(value: string) {
    this._eventIdPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdPatternInput() {
    return this._eventIdPattern;
  }

  // log_format - computed: false, optional: false, required: true
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // vendor - computed: false, optional: false, required: true
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

export class CseLogMappingStructuredInputsList extends cdktf.ComplexList {
  public internalValue? : CseLogMappingStructuredInputs[] | cdktf.IResolvable

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
  public get(index: number): CseLogMappingStructuredInputsOutputReference {
    return new CseLogMappingStructuredInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CseLogMappingUnstructuredFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#pattern_names CseLogMapping#pattern_names}
  */
  readonly patternNames: string[];
}

export function cseLogMappingUnstructuredFieldsToTerraform(struct?: CseLogMappingUnstructuredFieldsOutputReference | CseLogMappingUnstructuredFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patternNames),
  }
}


export function cseLogMappingUnstructuredFieldsToHclTerraform(struct?: CseLogMappingUnstructuredFieldsOutputReference | CseLogMappingUnstructuredFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patternNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CseLogMappingUnstructuredFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CseLogMappingUnstructuredFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patternNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternNames = this._patternNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseLogMappingUnstructuredFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patternNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patternNames = value.patternNames;
    }
  }

  // pattern_names - computed: false, optional: false, required: true
  private _patternNames?: string[]; 
  public get patternNames() {
    return this.getListAttribute('pattern_names');
  }
  public set patternNames(value: string[]) {
    this._patternNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternNamesInput() {
    return this._patternNames;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping sumologic_cse_log_mapping}
*/
export class CseLogMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_log_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseLogMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseLogMapping to import
  * @param importFromId The id of the existing CseLogMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseLogMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_log_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_log_mapping sumologic_cse_log_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseLogMappingConfig
  */
  public constructor(scope: Construct, id: string, config: CseLogMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_log_mapping',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._parentId = config.parentId;
    this._productGuid = config.productGuid;
    this._recordType = config.recordType;
    this._relatesEntities = config.relatesEntities;
    this._skippedValues = config.skippedValues;
    this._fields.internalValue = config.fields;
    this._structuredInputs.internalValue = config.structuredInputs;
    this._unstructuredFields.internalValue = config.unstructuredFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // product_guid - computed: false, optional: false, required: true
  private _productGuid?: string; 
  public get productGuid() {
    return this.getStringAttribute('product_guid');
  }
  public set productGuid(value: string) {
    this._productGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productGuidInput() {
    return this._productGuid;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // relates_entities - computed: false, optional: true, required: false
  private _relatesEntities?: boolean | cdktf.IResolvable; 
  public get relatesEntities() {
    return this.getBooleanAttribute('relates_entities');
  }
  public set relatesEntities(value: boolean | cdktf.IResolvable) {
    this._relatesEntities = value;
  }
  public resetRelatesEntities() {
    this._relatesEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatesEntitiesInput() {
    return this._relatesEntities;
  }

  // skipped_values - computed: false, optional: true, required: false
  private _skippedValues?: string[]; 
  public get skippedValues() {
    return this.getListAttribute('skipped_values');
  }
  public set skippedValues(value: string[]) {
    this._skippedValues = value;
  }
  public resetSkippedValues() {
    this._skippedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippedValuesInput() {
    return this._skippedValues;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new CseLogMappingFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: CseLogMappingFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // structured_inputs - computed: false, optional: true, required: false
  private _structuredInputs = new CseLogMappingStructuredInputsList(this, "structured_inputs", false);
  public get structuredInputs() {
    return this._structuredInputs;
  }
  public putStructuredInputs(value: CseLogMappingStructuredInputs[] | cdktf.IResolvable) {
    this._structuredInputs.internalValue = value;
  }
  public resetStructuredInputs() {
    this._structuredInputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredInputsInput() {
    return this._structuredInputs.internalValue;
  }

  // unstructured_fields - computed: false, optional: true, required: false
  private _unstructuredFields = new CseLogMappingUnstructuredFieldsOutputReference(this, "unstructured_fields");
  public get unstructuredFields() {
    return this._unstructuredFields;
  }
  public putUnstructuredFields(value: CseLogMappingUnstructuredFields) {
    this._unstructuredFields.internalValue = value;
  }
  public resetUnstructuredFields() {
    this._unstructuredFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstructuredFieldsInput() {
    return this._unstructuredFields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      product_guid: cdktf.stringToTerraform(this._productGuid),
      record_type: cdktf.stringToTerraform(this._recordType),
      relates_entities: cdktf.booleanToTerraform(this._relatesEntities),
      skipped_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._skippedValues),
      fields: cdktf.listMapper(cseLogMappingFieldsToTerraform, true)(this._fields.internalValue),
      structured_inputs: cdktf.listMapper(cseLogMappingStructuredInputsToTerraform, true)(this._structuredInputs.internalValue),
      unstructured_fields: cseLogMappingUnstructuredFieldsToTerraform(this._unstructuredFields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_guid: {
        value: cdktf.stringToHclTerraform(this._productGuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relates_entities: {
        value: cdktf.booleanToHclTerraform(this._relatesEntities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skipped_values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._skippedValues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fields: {
        value: cdktf.listMapperHcl(cseLogMappingFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseLogMappingFieldsList",
      },
      structured_inputs: {
        value: cdktf.listMapperHcl(cseLogMappingStructuredInputsToHclTerraform, true)(this._structuredInputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseLogMappingStructuredInputsList",
      },
      unstructured_fields: {
        value: cseLogMappingUnstructuredFieldsToHclTerraform(this._unstructuredFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseLogMappingUnstructuredFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
