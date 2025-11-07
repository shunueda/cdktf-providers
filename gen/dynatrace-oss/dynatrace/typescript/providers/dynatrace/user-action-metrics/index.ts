// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserActionMetricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines the fields that are used as dimensions. A dimension is a collection of reference information about a metric data point that is of interest to your business. Dimensions are parameters like "application", "type", "apdexCategory". For example, using "type" as a dimension allows you to split chart data based on the user action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#dimensions UserActionMetrics#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#enabled UserActionMetrics#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#id UserActionMetrics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#metric_key UserActionMetrics#metric_key}
  */
  readonly metricKey: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#filters UserActionMetrics#filters}
  */
  readonly filters?: UserActionMetricsFilters;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#value UserActionMetrics#value}
  */
  readonly value: UserActionMetricsValue;
}
export interface UserActionMetricsFiltersFilter {
  /**
  * Field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#field_name UserActionMetrics#field_name}
  */
  readonly fieldName: string;
  /**
  * Possible Values: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL_TO`, `IN`, `IS_NOT_NULL`, `IS_NULL`, `LESS_THAN`, `LESS_THAN_OR_EQUAL_TO`, `LIKE`, `NOT_EQUAL`, `NOT_LIKE`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#operator UserActionMetrics#operator}
  */
  readonly operator: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#value UserActionMetrics#value}
  */
  readonly value?: string;
  /**
  * Values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#value_in UserActionMetrics#value_in}
  */
  readonly valueIn?: string[];
}

export function userActionMetricsFiltersFilterToTerraform(struct?: UserActionMetricsFiltersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
    value_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueIn),
  }
}


export function userActionMetricsFiltersFilterToHclTerraform(struct?: UserActionMetricsFiltersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    value_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueIn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserActionMetricsFiltersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserActionMetricsFiltersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueIn = this._valueIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserActionMetricsFiltersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._valueIn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._operator = value.operator;
      this._value = value.value;
      this._valueIn = value.valueIn;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // value_in - computed: false, optional: true, required: false
  private _valueIn?: string[]; 
  public get valueIn() {
    return this.getListAttribute('value_in');
  }
  public set valueIn(value: string[]) {
    this._valueIn = value;
  }
  public resetValueIn() {
    this._valueIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInInput() {
    return this._valueIn;
  }
}

export class UserActionMetricsFiltersFilterList extends cdktf.ComplexList {
  public internalValue? : UserActionMetricsFiltersFilter[] | cdktf.IResolvable

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
  public get(index: number): UserActionMetricsFiltersFilterOutputReference {
    return new UserActionMetricsFiltersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserActionMetricsFilters {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#filter UserActionMetrics#filter}
  */
  readonly filter: UserActionMetricsFiltersFilter[] | cdktf.IResolvable;
}

export function userActionMetricsFiltersToTerraform(struct?: UserActionMetricsFiltersOutputReference | UserActionMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.listMapper(userActionMetricsFiltersFilterToTerraform, true)(struct!.filter),
  }
}


export function userActionMetricsFiltersToHclTerraform(struct?: UserActionMetricsFiltersOutputReference | UserActionMetricsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.listMapperHcl(userActionMetricsFiltersFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "UserActionMetricsFiltersFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserActionMetricsFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserActionMetricsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserActionMetricsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new UserActionMetricsFiltersFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: UserActionMetricsFiltersFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface UserActionMetricsValue {
  /**
  * Field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#field_name UserActionMetrics#field_name}
  */
  readonly fieldName?: string;
  /**
  * Possible Values: `COUNTER`, `FIELD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#type UserActionMetrics#type}
  */
  readonly type: string;
}

export function userActionMetricsValueToTerraform(struct?: UserActionMetricsValueOutputReference | UserActionMetricsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userActionMetricsValueToHclTerraform(struct?: UserActionMetricsValueOutputReference | UserActionMetricsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
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

export class UserActionMetricsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserActionMetricsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserActionMetricsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldName = value.fieldName;
      this._type = value.type;
    }
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
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

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics dynatrace_user_action_metrics}
*/
export class UserActionMetrics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_user_action_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserActionMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserActionMetrics to import
  * @param importFromId The id of the existing UserActionMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserActionMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_user_action_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_action_metrics dynatrace_user_action_metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserActionMetricsConfig
  */
  public constructor(scope: Construct, id: string, config: UserActionMetricsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_user_action_metrics',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dimensions = config.dimensions;
    this._enabled = config.enabled;
    this._id = config.id;
    this._metricKey = config.metricKey;
    this._filters.internalValue = config.filters;
    this._value.internalValue = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

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

  // metric_key - computed: false, optional: false, required: true
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new UserActionMetricsFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: UserActionMetricsFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // value - computed: false, optional: false, required: true
  private _value = new UserActionMetricsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: UserActionMetricsValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dimensions),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      metric_key: cdktf.stringToTerraform(this._metricKey),
      filters: userActionMetricsFiltersToTerraform(this._filters.internalValue),
      value: userActionMetricsValueToTerraform(this._value.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dimensions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dimensions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      metric_key: {
        value: cdktf.stringToHclTerraform(this._metricKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: userActionMetricsFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserActionMetricsFiltersList",
      },
      value: {
        value: userActionMetricsValueToHclTerraform(this._value.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserActionMetricsValueList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
