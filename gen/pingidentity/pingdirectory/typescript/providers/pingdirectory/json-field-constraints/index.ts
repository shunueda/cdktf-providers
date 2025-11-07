// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JsonFieldConstraintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the target field may have a value that is an empty JSON object (i.e., a JSON object with zero fields). This may only be set to true if value-type property is set to object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#allow_empty_object JsonFieldConstraints#allow_empty_object}
  */
  readonly allowEmptyObject?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the target field may have a value that is the JSON null value as an alternative to a value (or array of values) of the specified value-type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#allow_null_value JsonFieldConstraints#allow_null_value}
  */
  readonly allowNullValue?: boolean | cdktf.IResolvable;
  /**
  * Specifies an explicit set of string values that will be the only values permitted for the target field. If a set of allowed values is defined, then the server will reject any attempt to store a JSON object with a value for the target field that is not included in that set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#allowed_value JsonFieldConstraints#allowed_value}
  */
  readonly allowedValue?: string[];
  /**
  * Specifies an explicit set of regular expressions that may be used to restrict the set of values that may be used for the target field. If a set of allowed value regular expressions is defined, then the server will reject any attempt to store a JSON object with a value for the target field that does not match at least one of those regular expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#allowed_value_regular_expression JsonFieldConstraints#allowed_value_regular_expression}
  */
  readonly allowedValueRegularExpression?: string[];
  /**
  * Specifies the behavior that the server should exhibit when caching data for the associated JSON index. This can be useful in environments in which the system does not have enough memory to fully cache the entire data set, as it makes it possible to prioritize which data is the most important to keep in memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#cache_mode JsonFieldConstraints#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * A description for this JSON Field Constraints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#description JsonFieldConstraints#description}
  */
  readonly description?: string;
  /**
  * The maximum number of entries that may contain a particular value for the target field before the server will stop maintaining the index for that value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#index_entry_limit JsonFieldConstraints#index_entry_limit}
  */
  readonly indexEntryLimit?: number;
  /**
  * Indicates whether backends that support JSON indexing should maintain an index for values of the target field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#index_values JsonFieldConstraints#index_values}
  */
  readonly indexValues?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the value of the target field may be an array of values rather than a single value. If this property is set to "required" or "optional", then the constraints defined for this field will be applied to each element of the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#is_array JsonFieldConstraints#is_array}
  */
  readonly isArray?: string;
  /**
  * Indicates whether the target field must be present in JSON objects stored as values of the associated attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#is_required JsonFieldConstraints#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Name of the parent JSON Attribute Constraints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#json_attribute_constraints_name JsonFieldConstraints#json_attribute_constraints_name}
  */
  readonly jsonAttributeConstraintsName: string;
  /**
  * The full name of the JSON field to which these constraints apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#json_field JsonFieldConstraints#json_field}
  */
  readonly jsonField: string;
  /**
  * Specifies the largest numeric value that may be used as the value for the target field. If configured, then the server will reject any attempt to store a JSON object with a value for the target field that is greater than that maximum numeric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#maximum_numeric_value JsonFieldConstraints#maximum_numeric_value}
  */
  readonly maximumNumericValue?: string;
  /**
  * Specifies the largest number of elements that may be present in an array of values for the target field. If configured, then the server will reject any attempt to store a JSON object with a value for the target field that is an array with more than this number of elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#maximum_value_count JsonFieldConstraints#maximum_value_count}
  */
  readonly maximumValueCount?: number;
  /**
  * Specifies the largest number of characters that may be present in string values of the target field. If configured, then the server will reject any attempt to store a JSON object with a value for the target field that is longer than that maximum value length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#maximum_value_length JsonFieldConstraints#maximum_value_length}
  */
  readonly maximumValueLength?: number;
  /**
  * Specifies the smallest numeric value that may be used as the value for the target field. If configured, then the server will reject any attempt to store a JSON object with a value for the target field that is less than that minimum numeric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#minimum_numeric_value JsonFieldConstraints#minimum_numeric_value}
  */
  readonly minimumNumericValue?: string;
  /**
  * Specifies the smallest number of elements that may be present in an array of values for the target field. If configured, then the server will reject any attempt to store a JSON object with a value for the target field that is an array with fewer than this number of elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#minimum_value_count JsonFieldConstraints#minimum_value_count}
  */
  readonly minimumValueCount?: number;
  /**
  * Specifies the smallest number of characters that may be present in string values of the target field. If configured, then the server will reject any attempt to store a JSON object with a value for the target field that is shorter than that minimum value length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#minimum_value_length JsonFieldConstraints#minimum_value_length}
  */
  readonly minimumValueLength?: number;
  /**
  * Indicates whether backends that support database priming should load the contents of the associated JSON index into memory whenever the backend is opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#prime_index JsonFieldConstraints#prime_index}
  */
  readonly primeIndex?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the backend should attempt to assign a compact token for each distinct value for the target field in an attempt to reduce the encoded size of the field in JSON objects. These tokens would be assigned prior to using any from the token set used for automatic compaction of some JSON string values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#tokenize_values JsonFieldConstraints#tokenize_values}
  */
  readonly tokenizeValues?: boolean | cdktf.IResolvable;
  /**
  * The type of JSON Field Constraints resource. Options are ['json-field-constraints']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#type JsonFieldConstraints#type}
  */
  readonly type?: string;
  /**
  * The data type that will be required for values of the target field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#value_type JsonFieldConstraints#value_type}
  */
  readonly valueType: string;
}
export interface JsonFieldConstraintsRequiredActions {
}

export function jsonFieldConstraintsRequiredActionsToTerraform(struct?: JsonFieldConstraintsRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function jsonFieldConstraintsRequiredActionsToHclTerraform(struct?: JsonFieldConstraintsRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class JsonFieldConstraintsRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): JsonFieldConstraintsRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JsonFieldConstraintsRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class JsonFieldConstraintsRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): JsonFieldConstraintsRequiredActionsOutputReference {
    return new JsonFieldConstraintsRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints pingdirectory_json_field_constraints}
*/
export class JsonFieldConstraints extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_json_field_constraints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JsonFieldConstraints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JsonFieldConstraints to import
  * @param importFromId The id of the existing JsonFieldConstraints that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JsonFieldConstraints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_json_field_constraints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/json_field_constraints pingdirectory_json_field_constraints} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JsonFieldConstraintsConfig
  */
  public constructor(scope: Construct, id: string, config: JsonFieldConstraintsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_json_field_constraints',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowEmptyObject = config.allowEmptyObject;
    this._allowNullValue = config.allowNullValue;
    this._allowedValue = config.allowedValue;
    this._allowedValueRegularExpression = config.allowedValueRegularExpression;
    this._cacheMode = config.cacheMode;
    this._description = config.description;
    this._indexEntryLimit = config.indexEntryLimit;
    this._indexValues = config.indexValues;
    this._isArray = config.isArray;
    this._isRequired = config.isRequired;
    this._jsonAttributeConstraintsName = config.jsonAttributeConstraintsName;
    this._jsonField = config.jsonField;
    this._maximumNumericValue = config.maximumNumericValue;
    this._maximumValueCount = config.maximumValueCount;
    this._maximumValueLength = config.maximumValueLength;
    this._minimumNumericValue = config.minimumNumericValue;
    this._minimumValueCount = config.minimumValueCount;
    this._minimumValueLength = config.minimumValueLength;
    this._primeIndex = config.primeIndex;
    this._tokenizeValues = config.tokenizeValues;
    this._type = config.type;
    this._valueType = config.valueType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_empty_object - computed: true, optional: true, required: false
  private _allowEmptyObject?: boolean | cdktf.IResolvable; 
  public get allowEmptyObject() {
    return this.getBooleanAttribute('allow_empty_object');
  }
  public set allowEmptyObject(value: boolean | cdktf.IResolvable) {
    this._allowEmptyObject = value;
  }
  public resetAllowEmptyObject() {
    this._allowEmptyObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyObjectInput() {
    return this._allowEmptyObject;
  }

  // allow_null_value - computed: true, optional: true, required: false
  private _allowNullValue?: boolean | cdktf.IResolvable; 
  public get allowNullValue() {
    return this.getBooleanAttribute('allow_null_value');
  }
  public set allowNullValue(value: boolean | cdktf.IResolvable) {
    this._allowNullValue = value;
  }
  public resetAllowNullValue() {
    this._allowNullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNullValueInput() {
    return this._allowNullValue;
  }

  // allowed_value - computed: true, optional: true, required: false
  private _allowedValue?: string[]; 
  public get allowedValue() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_value'));
  }
  public set allowedValue(value: string[]) {
    this._allowedValue = value;
  }
  public resetAllowedValue() {
    this._allowedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValueInput() {
    return this._allowedValue;
  }

  // allowed_value_regular_expression - computed: true, optional: true, required: false
  private _allowedValueRegularExpression?: string[]; 
  public get allowedValueRegularExpression() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_value_regular_expression'));
  }
  public set allowedValueRegularExpression(value: string[]) {
    this._allowedValueRegularExpression = value;
  }
  public resetAllowedValueRegularExpression() {
    this._allowedValueRegularExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValueRegularExpressionInput() {
    return this._allowedValueRegularExpression;
  }

  // cache_mode - computed: false, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_entry_limit - computed: false, optional: true, required: false
  private _indexEntryLimit?: number; 
  public get indexEntryLimit() {
    return this.getNumberAttribute('index_entry_limit');
  }
  public set indexEntryLimit(value: number) {
    this._indexEntryLimit = value;
  }
  public resetIndexEntryLimit() {
    this._indexEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexEntryLimitInput() {
    return this._indexEntryLimit;
  }

  // index_values - computed: true, optional: true, required: false
  private _indexValues?: boolean | cdktf.IResolvable; 
  public get indexValues() {
    return this.getBooleanAttribute('index_values');
  }
  public set indexValues(value: boolean | cdktf.IResolvable) {
    this._indexValues = value;
  }
  public resetIndexValues() {
    this._indexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexValuesInput() {
    return this._indexValues;
  }

  // is_array - computed: true, optional: true, required: false
  private _isArray?: string; 
  public get isArray() {
    return this.getStringAttribute('is_array');
  }
  public set isArray(value: string) {
    this._isArray = value;
  }
  public resetIsArray() {
    this._isArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isArrayInput() {
    return this._isArray;
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // json_attribute_constraints_name - computed: false, optional: false, required: true
  private _jsonAttributeConstraintsName?: string; 
  public get jsonAttributeConstraintsName() {
    return this.getStringAttribute('json_attribute_constraints_name');
  }
  public set jsonAttributeConstraintsName(value: string) {
    this._jsonAttributeConstraintsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonAttributeConstraintsNameInput() {
    return this._jsonAttributeConstraintsName;
  }

  // json_field - computed: false, optional: false, required: true
  private _jsonField?: string; 
  public get jsonField() {
    return this.getStringAttribute('json_field');
  }
  public set jsonField(value: string) {
    this._jsonField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFieldInput() {
    return this._jsonField;
  }

  // maximum_numeric_value - computed: false, optional: true, required: false
  private _maximumNumericValue?: string; 
  public get maximumNumericValue() {
    return this.getStringAttribute('maximum_numeric_value');
  }
  public set maximumNumericValue(value: string) {
    this._maximumNumericValue = value;
  }
  public resetMaximumNumericValue() {
    this._maximumNumericValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumNumericValueInput() {
    return this._maximumNumericValue;
  }

  // maximum_value_count - computed: false, optional: true, required: false
  private _maximumValueCount?: number; 
  public get maximumValueCount() {
    return this.getNumberAttribute('maximum_value_count');
  }
  public set maximumValueCount(value: number) {
    this._maximumValueCount = value;
  }
  public resetMaximumValueCount() {
    this._maximumValueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumValueCountInput() {
    return this._maximumValueCount;
  }

  // maximum_value_length - computed: false, optional: true, required: false
  private _maximumValueLength?: number; 
  public get maximumValueLength() {
    return this.getNumberAttribute('maximum_value_length');
  }
  public set maximumValueLength(value: number) {
    this._maximumValueLength = value;
  }
  public resetMaximumValueLength() {
    this._maximumValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumValueLengthInput() {
    return this._maximumValueLength;
  }

  // minimum_numeric_value - computed: false, optional: true, required: false
  private _minimumNumericValue?: string; 
  public get minimumNumericValue() {
    return this.getStringAttribute('minimum_numeric_value');
  }
  public set minimumNumericValue(value: string) {
    this._minimumNumericValue = value;
  }
  public resetMinimumNumericValue() {
    this._minimumNumericValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumNumericValueInput() {
    return this._minimumNumericValue;
  }

  // minimum_value_count - computed: false, optional: true, required: false
  private _minimumValueCount?: number; 
  public get minimumValueCount() {
    return this.getNumberAttribute('minimum_value_count');
  }
  public set minimumValueCount(value: number) {
    this._minimumValueCount = value;
  }
  public resetMinimumValueCount() {
    this._minimumValueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumValueCountInput() {
    return this._minimumValueCount;
  }

  // minimum_value_length - computed: false, optional: true, required: false
  private _minimumValueLength?: number; 
  public get minimumValueLength() {
    return this.getNumberAttribute('minimum_value_length');
  }
  public set minimumValueLength(value: number) {
    this._minimumValueLength = value;
  }
  public resetMinimumValueLength() {
    this._minimumValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumValueLengthInput() {
    return this._minimumValueLength;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // prime_index - computed: true, optional: true, required: false
  private _primeIndex?: boolean | cdktf.IResolvable; 
  public get primeIndex() {
    return this.getBooleanAttribute('prime_index');
  }
  public set primeIndex(value: boolean | cdktf.IResolvable) {
    this._primeIndex = value;
  }
  public resetPrimeIndex() {
    this._primeIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primeIndexInput() {
    return this._primeIndex;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new JsonFieldConstraintsRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // tokenize_values - computed: true, optional: true, required: false
  private _tokenizeValues?: boolean | cdktf.IResolvable; 
  public get tokenizeValues() {
    return this.getBooleanAttribute('tokenize_values');
  }
  public set tokenizeValues(value: boolean | cdktf.IResolvable) {
    this._tokenizeValues = value;
  }
  public resetTokenizeValues() {
    this._tokenizeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenizeValuesInput() {
    return this._tokenizeValues;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_empty_object: cdktf.booleanToTerraform(this._allowEmptyObject),
      allow_null_value: cdktf.booleanToTerraform(this._allowNullValue),
      allowed_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedValue),
      allowed_value_regular_expression: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedValueRegularExpression),
      cache_mode: cdktf.stringToTerraform(this._cacheMode),
      description: cdktf.stringToTerraform(this._description),
      index_entry_limit: cdktf.numberToTerraform(this._indexEntryLimit),
      index_values: cdktf.booleanToTerraform(this._indexValues),
      is_array: cdktf.stringToTerraform(this._isArray),
      is_required: cdktf.booleanToTerraform(this._isRequired),
      json_attribute_constraints_name: cdktf.stringToTerraform(this._jsonAttributeConstraintsName),
      json_field: cdktf.stringToTerraform(this._jsonField),
      maximum_numeric_value: cdktf.stringToTerraform(this._maximumNumericValue),
      maximum_value_count: cdktf.numberToTerraform(this._maximumValueCount),
      maximum_value_length: cdktf.numberToTerraform(this._maximumValueLength),
      minimum_numeric_value: cdktf.stringToTerraform(this._minimumNumericValue),
      minimum_value_count: cdktf.numberToTerraform(this._minimumValueCount),
      minimum_value_length: cdktf.numberToTerraform(this._minimumValueLength),
      prime_index: cdktf.booleanToTerraform(this._primeIndex),
      tokenize_values: cdktf.booleanToTerraform(this._tokenizeValues),
      type: cdktf.stringToTerraform(this._type),
      value_type: cdktf.stringToTerraform(this._valueType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_empty_object: {
        value: cdktf.booleanToHclTerraform(this._allowEmptyObject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_null_value: {
        value: cdktf.booleanToHclTerraform(this._allowNullValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_value_regular_expression: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedValueRegularExpression),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache_mode: {
        value: cdktf.stringToHclTerraform(this._cacheMode),
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
      index_entry_limit: {
        value: cdktf.numberToHclTerraform(this._indexEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      index_values: {
        value: cdktf.booleanToHclTerraform(this._indexValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_array: {
        value: cdktf.stringToHclTerraform(this._isArray),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_required: {
        value: cdktf.booleanToHclTerraform(this._isRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      json_attribute_constraints_name: {
        value: cdktf.stringToHclTerraform(this._jsonAttributeConstraintsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_field: {
        value: cdktf.stringToHclTerraform(this._jsonField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_numeric_value: {
        value: cdktf.stringToHclTerraform(this._maximumNumericValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_value_count: {
        value: cdktf.numberToHclTerraform(this._maximumValueCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_value_length: {
        value: cdktf.numberToHclTerraform(this._maximumValueLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_numeric_value: {
        value: cdktf.stringToHclTerraform(this._minimumNumericValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_value_count: {
        value: cdktf.numberToHclTerraform(this._minimumValueCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_value_length: {
        value: cdktf.numberToHclTerraform(this._minimumValueLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prime_index: {
        value: cdktf.booleanToHclTerraform(this._primeIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tokenize_values: {
        value: cdktf.booleanToHclTerraform(this._tokenizeValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_type: {
        value: cdktf.stringToHclTerraform(this._valueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
