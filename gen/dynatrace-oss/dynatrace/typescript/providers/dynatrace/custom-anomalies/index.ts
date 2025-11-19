// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * How the metric data points are aggregated for the evaluation. The timeseries must support this aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#aggregation_type CustomAnomalies#aggregation_type}
  */
  readonly aggregationType?: string;
  /**
  * The description of the metric event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#description CustomAnomalies#description}
  */
  readonly description: string;
  /**
  * The reason of automatic disabling.  The `NONE` means config was not disabled automatically. Possible values are `METRIC_DEFINITION_INCONSISTENCY`, `NONE`, `TOO_MANY_DIMS` and `TOPX_FORCIBLY_DEACTIVATED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#disabled_reason CustomAnomalies#disabled_reason}
  */
  readonly disabledReason?: string;
  /**
  * The metric event is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#enabled CustomAnomalies#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#id CustomAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the metric evaluated by the metric event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#metric_id CustomAnomalies#metric_id}
  */
  readonly metricId?: string;
  /**
  * The metric selector that should be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#metric_selector CustomAnomalies#metric_selector}
  */
  readonly metricSelector?: string;
  /**
  * The name of the metric event displayed in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#name CustomAnomalies#name}
  */
  readonly name: string;
  /**
  * Defines which dimension key should be used for the **alertingScope**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#primary_dimension_key CustomAnomalies#primary_dimension_key}
  */
  readonly primaryDimensionKey?: string;
  /**
  * The type of the event to trigger on the threshold violation.  The `CUSTOM_ALERT` type is not correlated with other alerts. The `INFO` type does not open a problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#severity CustomAnomalies#severity}
  */
  readonly severity?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The reason of a warning set on the config. The `NONE` means config has no warnings. The other supported value is `TOO_MANY_DIMS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#warning_reason CustomAnomalies#warning_reason}
  */
  readonly warningReason?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#dimensions CustomAnomalies#dimensions}
  */
  readonly dimensions?: CustomAnomaliesDimensions[] | cdktf.IResolvable;
  /**
  * scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#scopes CustomAnomalies#scopes}
  */
  readonly scopes?: CustomAnomaliesScopes[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#strategy CustomAnomalies#strategy}
  */
  readonly strategy: CustomAnomaliesStrategy;
}
export interface CustomAnomaliesDimensionsDimension {
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#index CustomAnomalies#index}
  */
  readonly index?: number;
  /**
  * The dimensions key on the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#key CustomAnomalies#key}
  */
  readonly key?: string;
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#name CustomAnomalies#name}
  */
  readonly name?: string;
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#type CustomAnomalies#type}
  */
  readonly type: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function customAnomaliesDimensionsDimensionToTerraform(struct?: CustomAnomaliesDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function customAnomaliesDimensionsDimensionToHclTerraform(struct?: CustomAnomaliesDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._key = undefined;
      this._name = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._key = value.key;
      this._name = value.name;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class CustomAnomaliesDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesDimensionsDimensionOutputReference {
    return new CustomAnomaliesDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesDimensionsEntityFilter {
  /**
  * The operator to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#operator CustomAnomalies#operator}
  */
  readonly operator: string;
  /**
  * The value to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#value CustomAnomalies#value}
  */
  readonly value: string;
}

export function customAnomaliesDimensionsEntityFilterToTerraform(struct?: CustomAnomaliesDimensionsEntityFilterOutputReference | CustomAnomaliesDimensionsEntityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function customAnomaliesDimensionsEntityFilterToHclTerraform(struct?: CustomAnomaliesDimensionsEntityFilterOutputReference | CustomAnomaliesDimensionsEntityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesDimensionsEntityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesDimensionsEntityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesDimensionsEntityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
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
export interface CustomAnomaliesDimensionsEntity {
  /**
  * The dimensions key on the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#key CustomAnomalies#key}
  */
  readonly key?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#filter CustomAnomalies#filter}
  */
  readonly filter: CustomAnomaliesDimensionsEntityFilter;
}

export function customAnomaliesDimensionsEntityToTerraform(struct?: CustomAnomaliesDimensionsEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    filter: customAnomaliesDimensionsEntityFilterToTerraform(struct!.filter),
  }
}


export function customAnomaliesDimensionsEntityToHclTerraform(struct?: CustomAnomaliesDimensionsEntity | cdktf.IResolvable): any {
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: customAnomaliesDimensionsEntityFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesDimensionsEntityFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesDimensionsEntityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesDimensionsEntity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesDimensionsEntity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._filter.internalValue = value.filter;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new CustomAnomaliesDimensionsEntityFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CustomAnomaliesDimensionsEntityFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class CustomAnomaliesDimensionsEntityList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesDimensionsEntity[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesDimensionsEntityOutputReference {
    return new CustomAnomaliesDimensionsEntityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesDimensionsStringFilter {
  /**
  * The operator to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#operator CustomAnomalies#operator}
  */
  readonly operator: string;
  /**
  * The value to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#value CustomAnomalies#value}
  */
  readonly value: string;
}

export function customAnomaliesDimensionsStringFilterToTerraform(struct?: CustomAnomaliesDimensionsStringFilterOutputReference | CustomAnomaliesDimensionsStringFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function customAnomaliesDimensionsStringFilterToHclTerraform(struct?: CustomAnomaliesDimensionsStringFilterOutputReference | CustomAnomaliesDimensionsStringFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesDimensionsStringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesDimensionsStringFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesDimensionsStringFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
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
export interface CustomAnomaliesDimensionsString {
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#index CustomAnomalies#index}
  */
  readonly index?: number;
  /**
  * The dimensions key on the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#key CustomAnomalies#key}
  */
  readonly key?: string;
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#name CustomAnomalies#name}
  */
  readonly name?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#filter CustomAnomalies#filter}
  */
  readonly filter: CustomAnomaliesDimensionsStringFilter;
}

export function customAnomaliesDimensionsStringToTerraform(struct?: CustomAnomaliesDimensionsString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    filter: customAnomaliesDimensionsStringFilterToTerraform(struct!.filter),
  }
}


export function customAnomaliesDimensionsStringToHclTerraform(struct?: CustomAnomaliesDimensionsString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: customAnomaliesDimensionsStringFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesDimensionsStringFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesDimensionsStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesDimensionsString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesDimensionsString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._key = undefined;
      this._name = undefined;
      this._unknowns = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._key = value.key;
      this._name = value.name;
      this._unknowns = value.unknowns;
      this._filter.internalValue = value.filter;
    }
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new CustomAnomaliesDimensionsStringFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CustomAnomaliesDimensionsStringFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class CustomAnomaliesDimensionsStringList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesDimensionsString[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesDimensionsStringOutputReference {
    return new CustomAnomaliesDimensionsStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#dimension CustomAnomalies#dimension}
  */
  readonly dimension?: CustomAnomaliesDimensionsDimension[] | cdktf.IResolvable;
  /**
  * entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#entity CustomAnomalies#entity}
  */
  readonly entity?: CustomAnomaliesDimensionsEntity[] | cdktf.IResolvable;
  /**
  * string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#string CustomAnomalies#string}
  */
  readonly string?: CustomAnomaliesDimensionsString[] | cdktf.IResolvable;
}

export function customAnomaliesDimensionsToTerraform(struct?: CustomAnomaliesDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(customAnomaliesDimensionsDimensionToTerraform, true)(struct!.dimension),
    entity: cdktf.listMapper(customAnomaliesDimensionsEntityToTerraform, true)(struct!.entity),
    string: cdktf.listMapper(customAnomaliesDimensionsStringToTerraform, true)(struct!.string),
  }
}


export function customAnomaliesDimensionsToHclTerraform(struct?: CustomAnomaliesDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(customAnomaliesDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesDimensionsDimensionList",
    },
    entity: {
      value: cdktf.listMapperHcl(customAnomaliesDimensionsEntityToHclTerraform, true)(struct!.entity),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesDimensionsEntityList",
    },
    string: {
      value: cdktf.listMapperHcl(customAnomaliesDimensionsStringToHclTerraform, true)(struct!.string),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesDimensionsStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._entity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimension.internalValue = undefined;
      this._entity.internalValue = undefined;
      this._string.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimension.internalValue = value.dimension;
      this._entity.internalValue = value.entity;
      this._string.internalValue = value.string;
    }
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CustomAnomaliesDimensionsDimensionList(this, "dimension", false);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CustomAnomaliesDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // entity - computed: false, optional: true, required: false
  private _entity = new CustomAnomaliesDimensionsEntityList(this, "entity", false);
  public get entity() {
    return this._entity;
  }
  public putEntity(value: CustomAnomaliesDimensionsEntity[] | cdktf.IResolvable) {
    this._entity.internalValue = value;
  }
  public resetEntity() {
    this._entity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new CustomAnomaliesDimensionsStringList(this, "string", false);
  public get string() {
    return this._string;
  }
  public putString(value: CustomAnomaliesDimensionsString[] | cdktf.IResolvable) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }
}

export class CustomAnomaliesDimensionsList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesDimensions[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesDimensionsOutputReference {
    return new CustomAnomaliesDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopesCustomDeviceGroupNameFilter {
  /**
  * The operator to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#operator CustomAnomalies#operator}
  */
  readonly operator: string;
  /**
  * The value to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#value CustomAnomalies#value}
  */
  readonly value: string;
}

export function customAnomaliesScopesCustomDeviceGroupNameFilterToTerraform(struct?: CustomAnomaliesScopesCustomDeviceGroupNameFilterOutputReference | CustomAnomaliesScopesCustomDeviceGroupNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function customAnomaliesScopesCustomDeviceGroupNameFilterToHclTerraform(struct?: CustomAnomaliesScopesCustomDeviceGroupNameFilterOutputReference | CustomAnomaliesScopesCustomDeviceGroupNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesCustomDeviceGroupNameFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesScopesCustomDeviceGroupNameFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesCustomDeviceGroupNameFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
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
export interface CustomAnomaliesScopesCustomDeviceGroupName {
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#filter CustomAnomalies#filter}
  */
  readonly filter: CustomAnomaliesScopesCustomDeviceGroupNameFilter;
}

export function customAnomaliesScopesCustomDeviceGroupNameToTerraform(struct?: CustomAnomaliesScopesCustomDeviceGroupName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    filter: customAnomaliesScopesCustomDeviceGroupNameFilterToTerraform(struct!.filter),
  }
}


export function customAnomaliesScopesCustomDeviceGroupNameToHclTerraform(struct?: CustomAnomaliesScopesCustomDeviceGroupName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: customAnomaliesScopesCustomDeviceGroupNameFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesCustomDeviceGroupNameFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesCustomDeviceGroupNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopesCustomDeviceGroupName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesCustomDeviceGroupName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._filter.internalValue = value.filter;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new CustomAnomaliesScopesCustomDeviceGroupNameFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CustomAnomaliesScopesCustomDeviceGroupNameFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class CustomAnomaliesScopesCustomDeviceGroupNameList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopesCustomDeviceGroupName[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesCustomDeviceGroupNameOutputReference {
    return new CustomAnomaliesScopesCustomDeviceGroupNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopesEntity {
  /**
  * The monitored entities id to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#id CustomAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function customAnomaliesScopesEntityToTerraform(struct?: CustomAnomaliesScopesEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function customAnomaliesScopesEntityToHclTerraform(struct?: CustomAnomaliesScopesEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesEntityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopesEntity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesEntity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._unknowns = value.unknowns;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class CustomAnomaliesScopesEntityList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopesEntity[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesEntityOutputReference {
    return new CustomAnomaliesScopesEntityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopesHostGroupNameFilter {
  /**
  * The operator to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#operator CustomAnomalies#operator}
  */
  readonly operator: string;
  /**
  * The value to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#value CustomAnomalies#value}
  */
  readonly value: string;
}

export function customAnomaliesScopesHostGroupNameFilterToTerraform(struct?: CustomAnomaliesScopesHostGroupNameFilterOutputReference | CustomAnomaliesScopesHostGroupNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function customAnomaliesScopesHostGroupNameFilterToHclTerraform(struct?: CustomAnomaliesScopesHostGroupNameFilterOutputReference | CustomAnomaliesScopesHostGroupNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesHostGroupNameFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesScopesHostGroupNameFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesHostGroupNameFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
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
export interface CustomAnomaliesScopesHostGroupName {
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#filter CustomAnomalies#filter}
  */
  readonly filter: CustomAnomaliesScopesHostGroupNameFilter;
}

export function customAnomaliesScopesHostGroupNameToTerraform(struct?: CustomAnomaliesScopesHostGroupName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    filter: customAnomaliesScopesHostGroupNameFilterToTerraform(struct!.filter),
  }
}


export function customAnomaliesScopesHostGroupNameToHclTerraform(struct?: CustomAnomaliesScopesHostGroupName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: customAnomaliesScopesHostGroupNameFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesHostGroupNameFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesHostGroupNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopesHostGroupName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesHostGroupName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._filter.internalValue = value.filter;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new CustomAnomaliesScopesHostGroupNameFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CustomAnomaliesScopesHostGroupNameFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class CustomAnomaliesScopesHostGroupNameList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopesHostGroupName[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesHostGroupNameOutputReference {
    return new CustomAnomaliesScopesHostGroupNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopesHostNameFilter {
  /**
  * The operator to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#operator CustomAnomalies#operator}
  */
  readonly operator: string;
  /**
  * The value to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#value CustomAnomalies#value}
  */
  readonly value: string;
}

export function customAnomaliesScopesHostNameFilterToTerraform(struct?: CustomAnomaliesScopesHostNameFilterOutputReference | CustomAnomaliesScopesHostNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function customAnomaliesScopesHostNameFilterToHclTerraform(struct?: CustomAnomaliesScopesHostNameFilterOutputReference | CustomAnomaliesScopesHostNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesHostNameFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesScopesHostNameFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesHostNameFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
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
export interface CustomAnomaliesScopesHostName {
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#filter CustomAnomalies#filter}
  */
  readonly filter: CustomAnomaliesScopesHostNameFilter;
}

export function customAnomaliesScopesHostNameToTerraform(struct?: CustomAnomaliesScopesHostName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    filter: customAnomaliesScopesHostNameFilterToTerraform(struct!.filter),
  }
}


export function customAnomaliesScopesHostNameToHclTerraform(struct?: CustomAnomaliesScopesHostName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: customAnomaliesScopesHostNameFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesHostNameFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesHostNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopesHostName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesHostName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._filter.internalValue = value.filter;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new CustomAnomaliesScopesHostNameFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CustomAnomaliesScopesHostNameFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class CustomAnomaliesScopesHostNameList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopesHostName[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesHostNameOutputReference {
    return new CustomAnomaliesScopesHostNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopesManagementZone {
  /**
  * The management zone id to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#id CustomAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function customAnomaliesScopesManagementZoneToTerraform(struct?: CustomAnomaliesScopesManagementZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function customAnomaliesScopesManagementZoneToHclTerraform(struct?: CustomAnomaliesScopesManagementZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesManagementZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopesManagementZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesManagementZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._unknowns = value.unknowns;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class CustomAnomaliesScopesManagementZoneList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopesManagementZone[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesManagementZoneOutputReference {
    return new CustomAnomaliesScopesManagementZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopesNameFilter {
  /**
  * The operator to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#operator CustomAnomalies#operator}
  */
  readonly operator: string;
  /**
  * The value to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#value CustomAnomalies#value}
  */
  readonly value: string;
}

export function customAnomaliesScopesNameFilterToTerraform(struct?: CustomAnomaliesScopesNameFilterOutputReference | CustomAnomaliesScopesNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function customAnomaliesScopesNameFilterToHclTerraform(struct?: CustomAnomaliesScopesNameFilterOutputReference | CustomAnomaliesScopesNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesNameFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesScopesNameFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesNameFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
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
export interface CustomAnomaliesScopesName {
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#filter CustomAnomalies#filter}
  */
  readonly filter: CustomAnomaliesScopesNameFilter;
}

export function customAnomaliesScopesNameToTerraform(struct?: CustomAnomaliesScopesName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    filter: customAnomaliesScopesNameFilterToTerraform(struct!.filter),
  }
}


export function customAnomaliesScopesNameToHclTerraform(struct?: CustomAnomaliesScopesName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: customAnomaliesScopesNameFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesNameFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopesName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._filter.internalValue = value.filter;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new CustomAnomaliesScopesNameFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CustomAnomaliesScopesNameFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class CustomAnomaliesScopesNameList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopesName[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesNameOutputReference {
    return new CustomAnomaliesScopesNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopesProcessGroupId {
  /**
  * The process groups id to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#id CustomAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function customAnomaliesScopesProcessGroupIdToTerraform(struct?: CustomAnomaliesScopesProcessGroupId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function customAnomaliesScopesProcessGroupIdToHclTerraform(struct?: CustomAnomaliesScopesProcessGroupId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesProcessGroupIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopesProcessGroupId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesProcessGroupId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._unknowns = value.unknowns;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class CustomAnomaliesScopesProcessGroupIdList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopesProcessGroupId[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesProcessGroupIdOutputReference {
    return new CustomAnomaliesScopesProcessGroupIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopesProcessGroupNameFilter {
  /**
  * The operator to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#operator CustomAnomalies#operator}
  */
  readonly operator: string;
  /**
  * The value to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#value CustomAnomalies#value}
  */
  readonly value: string;
}

export function customAnomaliesScopesProcessGroupNameFilterToTerraform(struct?: CustomAnomaliesScopesProcessGroupNameFilterOutputReference | CustomAnomaliesScopesProcessGroupNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function customAnomaliesScopesProcessGroupNameFilterToHclTerraform(struct?: CustomAnomaliesScopesProcessGroupNameFilterOutputReference | CustomAnomaliesScopesProcessGroupNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesProcessGroupNameFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesScopesProcessGroupNameFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesProcessGroupNameFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
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
export interface CustomAnomaliesScopesProcessGroupName {
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#filter CustomAnomalies#filter}
  */
  readonly filter: CustomAnomaliesScopesProcessGroupNameFilter;
}

export function customAnomaliesScopesProcessGroupNameToTerraform(struct?: CustomAnomaliesScopesProcessGroupName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    filter: customAnomaliesScopesProcessGroupNameFilterToTerraform(struct!.filter),
  }
}


export function customAnomaliesScopesProcessGroupNameToHclTerraform(struct?: CustomAnomaliesScopesProcessGroupName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: customAnomaliesScopesProcessGroupNameFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesProcessGroupNameFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesProcessGroupNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopesProcessGroupName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesProcessGroupName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._filter.internalValue = value.filter;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new CustomAnomaliesScopesProcessGroupNameFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CustomAnomaliesScopesProcessGroupNameFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class CustomAnomaliesScopesProcessGroupNameList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopesProcessGroupName[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesProcessGroupNameOutputReference {
    return new CustomAnomaliesScopesProcessGroupNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopesScope {
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#type CustomAnomalies#type}
  */
  readonly type: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function customAnomaliesScopesScopeToTerraform(struct?: CustomAnomaliesScopesScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function customAnomaliesScopesScopeToHclTerraform(struct?: CustomAnomaliesScopesScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopesScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class CustomAnomaliesScopesScopeList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopesScope[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesScopeOutputReference {
    return new CustomAnomaliesScopesScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopesTagFilter {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#context CustomAnomalies#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#key CustomAnomalies#key}
  */
  readonly key: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#value CustomAnomalies#value}
  */
  readonly value?: string;
}

export function customAnomaliesScopesTagFilterToTerraform(struct?: CustomAnomaliesScopesTagFilterOutputReference | CustomAnomaliesScopesTagFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function customAnomaliesScopesTagFilterToHclTerraform(struct?: CustomAnomaliesScopesTagFilterOutputReference | CustomAnomaliesScopesTagFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class CustomAnomaliesScopesTagFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesScopesTagFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
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

  public set internalValue(value: CustomAnomaliesScopesTagFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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
}
export interface CustomAnomaliesScopesTag {
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#filter CustomAnomalies#filter}
  */
  readonly filter: CustomAnomaliesScopesTagFilter;
}

export function customAnomaliesScopesTagToTerraform(struct?: CustomAnomaliesScopesTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    filter: customAnomaliesScopesTagFilterToTerraform(struct!.filter),
  }
}


export function customAnomaliesScopesTagToHclTerraform(struct?: CustomAnomaliesScopesTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: customAnomaliesScopesTagFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesTagFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopesTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopesTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._filter.internalValue = value.filter;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new CustomAnomaliesScopesTagFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CustomAnomaliesScopesTagFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class CustomAnomaliesScopesTagList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopesTag[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesTagOutputReference {
    return new CustomAnomaliesScopesTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesScopes {
  /**
  * custom_device_group_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#custom_device_group_name CustomAnomalies#custom_device_group_name}
  */
  readonly customDeviceGroupName?: CustomAnomaliesScopesCustomDeviceGroupName[] | cdktf.IResolvable;
  /**
  * entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#entity CustomAnomalies#entity}
  */
  readonly entity?: CustomAnomaliesScopesEntity[] | cdktf.IResolvable;
  /**
  * host_group_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#host_group_name CustomAnomalies#host_group_name}
  */
  readonly hostGroupName?: CustomAnomaliesScopesHostGroupName[] | cdktf.IResolvable;
  /**
  * host_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#host_name CustomAnomalies#host_name}
  */
  readonly hostName?: CustomAnomaliesScopesHostName[] | cdktf.IResolvable;
  /**
  * management_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#management_zone CustomAnomalies#management_zone}
  */
  readonly managementZone?: CustomAnomaliesScopesManagementZone[] | cdktf.IResolvable;
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#name CustomAnomalies#name}
  */
  readonly name?: CustomAnomaliesScopesName[] | cdktf.IResolvable;
  /**
  * process_group_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#process_group_id CustomAnomalies#process_group_id}
  */
  readonly processGroupId?: CustomAnomaliesScopesProcessGroupId[] | cdktf.IResolvable;
  /**
  * process_group_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#process_group_name CustomAnomalies#process_group_name}
  */
  readonly processGroupName?: CustomAnomaliesScopesProcessGroupName[] | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#scope CustomAnomalies#scope}
  */
  readonly scope?: CustomAnomaliesScopesScope[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#tag CustomAnomalies#tag}
  */
  readonly tag?: CustomAnomaliesScopesTag[] | cdktf.IResolvable;
}

export function customAnomaliesScopesToTerraform(struct?: CustomAnomaliesScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_device_group_name: cdktf.listMapper(customAnomaliesScopesCustomDeviceGroupNameToTerraform, true)(struct!.customDeviceGroupName),
    entity: cdktf.listMapper(customAnomaliesScopesEntityToTerraform, true)(struct!.entity),
    host_group_name: cdktf.listMapper(customAnomaliesScopesHostGroupNameToTerraform, true)(struct!.hostGroupName),
    host_name: cdktf.listMapper(customAnomaliesScopesHostNameToTerraform, true)(struct!.hostName),
    management_zone: cdktf.listMapper(customAnomaliesScopesManagementZoneToTerraform, true)(struct!.managementZone),
    name: cdktf.listMapper(customAnomaliesScopesNameToTerraform, true)(struct!.name),
    process_group_id: cdktf.listMapper(customAnomaliesScopesProcessGroupIdToTerraform, true)(struct!.processGroupId),
    process_group_name: cdktf.listMapper(customAnomaliesScopesProcessGroupNameToTerraform, true)(struct!.processGroupName),
    scope: cdktf.listMapper(customAnomaliesScopesScopeToTerraform, true)(struct!.scope),
    tag: cdktf.listMapper(customAnomaliesScopesTagToTerraform, true)(struct!.tag),
  }
}


export function customAnomaliesScopesToHclTerraform(struct?: CustomAnomaliesScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_device_group_name: {
      value: cdktf.listMapperHcl(customAnomaliesScopesCustomDeviceGroupNameToHclTerraform, true)(struct!.customDeviceGroupName),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesCustomDeviceGroupNameList",
    },
    entity: {
      value: cdktf.listMapperHcl(customAnomaliesScopesEntityToHclTerraform, true)(struct!.entity),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesEntityList",
    },
    host_group_name: {
      value: cdktf.listMapperHcl(customAnomaliesScopesHostGroupNameToHclTerraform, true)(struct!.hostGroupName),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesHostGroupNameList",
    },
    host_name: {
      value: cdktf.listMapperHcl(customAnomaliesScopesHostNameToHclTerraform, true)(struct!.hostName),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesHostNameList",
    },
    management_zone: {
      value: cdktf.listMapperHcl(customAnomaliesScopesManagementZoneToHclTerraform, true)(struct!.managementZone),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesManagementZoneList",
    },
    name: {
      value: cdktf.listMapperHcl(customAnomaliesScopesNameToHclTerraform, true)(struct!.name),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesNameList",
    },
    process_group_id: {
      value: cdktf.listMapperHcl(customAnomaliesScopesProcessGroupIdToHclTerraform, true)(struct!.processGroupId),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesProcessGroupIdList",
    },
    process_group_name: {
      value: cdktf.listMapperHcl(customAnomaliesScopesProcessGroupNameToHclTerraform, true)(struct!.processGroupName),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesProcessGroupNameList",
    },
    scope: {
      value: cdktf.listMapperHcl(customAnomaliesScopesScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesScopeList",
    },
    tag: {
      value: cdktf.listMapperHcl(customAnomaliesScopesTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesScopesTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDeviceGroupName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDeviceGroupName = this._customDeviceGroupName?.internalValue;
    }
    if (this._entity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity?.internalValue;
    }
    if (this._hostGroupName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroupName = this._hostGroupName?.internalValue;
    }
    if (this._hostName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName?.internalValue;
    }
    if (this._managementZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementZone = this._managementZone?.internalValue;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    if (this._processGroupId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processGroupId = this._processGroupId?.internalValue;
    }
    if (this._processGroupName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processGroupName = this._processGroupName?.internalValue;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customDeviceGroupName.internalValue = undefined;
      this._entity.internalValue = undefined;
      this._hostGroupName.internalValue = undefined;
      this._hostName.internalValue = undefined;
      this._managementZone.internalValue = undefined;
      this._name.internalValue = undefined;
      this._processGroupId.internalValue = undefined;
      this._processGroupName.internalValue = undefined;
      this._scope.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customDeviceGroupName.internalValue = value.customDeviceGroupName;
      this._entity.internalValue = value.entity;
      this._hostGroupName.internalValue = value.hostGroupName;
      this._hostName.internalValue = value.hostName;
      this._managementZone.internalValue = value.managementZone;
      this._name.internalValue = value.name;
      this._processGroupId.internalValue = value.processGroupId;
      this._processGroupName.internalValue = value.processGroupName;
      this._scope.internalValue = value.scope;
      this._tag.internalValue = value.tag;
    }
  }

  // custom_device_group_name - computed: false, optional: true, required: false
  private _customDeviceGroupName = new CustomAnomaliesScopesCustomDeviceGroupNameList(this, "custom_device_group_name", false);
  public get customDeviceGroupName() {
    return this._customDeviceGroupName;
  }
  public putCustomDeviceGroupName(value: CustomAnomaliesScopesCustomDeviceGroupName[] | cdktf.IResolvable) {
    this._customDeviceGroupName.internalValue = value;
  }
  public resetCustomDeviceGroupName() {
    this._customDeviceGroupName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDeviceGroupNameInput() {
    return this._customDeviceGroupName.internalValue;
  }

  // entity - computed: false, optional: true, required: false
  private _entity = new CustomAnomaliesScopesEntityList(this, "entity", false);
  public get entity() {
    return this._entity;
  }
  public putEntity(value: CustomAnomaliesScopesEntity[] | cdktf.IResolvable) {
    this._entity.internalValue = value;
  }
  public resetEntity() {
    this._entity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity.internalValue;
  }

  // host_group_name - computed: false, optional: true, required: false
  private _hostGroupName = new CustomAnomaliesScopesHostGroupNameList(this, "host_group_name", false);
  public get hostGroupName() {
    return this._hostGroupName;
  }
  public putHostGroupName(value: CustomAnomaliesScopesHostGroupName[] | cdktf.IResolvable) {
    this._hostGroupName.internalValue = value;
  }
  public resetHostGroupName() {
    this._hostGroupName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupNameInput() {
    return this._hostGroupName.internalValue;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName = new CustomAnomaliesScopesHostNameList(this, "host_name", false);
  public get hostName() {
    return this._hostName;
  }
  public putHostName(value: CustomAnomaliesScopesHostName[] | cdktf.IResolvable) {
    this._hostName.internalValue = value;
  }
  public resetHostName() {
    this._hostName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName.internalValue;
  }

  // management_zone - computed: false, optional: true, required: false
  private _managementZone = new CustomAnomaliesScopesManagementZoneList(this, "management_zone", false);
  public get managementZone() {
    return this._managementZone;
  }
  public putManagementZone(value: CustomAnomaliesScopesManagementZone[] | cdktf.IResolvable) {
    this._managementZone.internalValue = value;
  }
  public resetManagementZone() {
    this._managementZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZoneInput() {
    return this._managementZone.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new CustomAnomaliesScopesNameList(this, "name", false);
  public get name() {
    return this._name;
  }
  public putName(value: CustomAnomaliesScopesName[] | cdktf.IResolvable) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // process_group_id - computed: false, optional: true, required: false
  private _processGroupId = new CustomAnomaliesScopesProcessGroupIdList(this, "process_group_id", false);
  public get processGroupId() {
    return this._processGroupId;
  }
  public putProcessGroupId(value: CustomAnomaliesScopesProcessGroupId[] | cdktf.IResolvable) {
    this._processGroupId.internalValue = value;
  }
  public resetProcessGroupId() {
    this._processGroupId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupIdInput() {
    return this._processGroupId.internalValue;
  }

  // process_group_name - computed: false, optional: true, required: false
  private _processGroupName = new CustomAnomaliesScopesProcessGroupNameList(this, "process_group_name", false);
  public get processGroupName() {
    return this._processGroupName;
  }
  public putProcessGroupName(value: CustomAnomaliesScopesProcessGroupName[] | cdktf.IResolvable) {
    this._processGroupName.internalValue = value;
  }
  public resetProcessGroupName() {
    this._processGroupName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupNameInput() {
    return this._processGroupName.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new CustomAnomaliesScopesScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: CustomAnomaliesScopesScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new CustomAnomaliesScopesTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: CustomAnomaliesScopesTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class CustomAnomaliesScopesList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesScopes[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesScopesOutputReference {
    return new CustomAnomaliesScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesStrategyAuto {
  /**
  * The condition for the **threshold** value check: `ABOVE` or `BELOW`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#alert_condition CustomAnomalies#alert_condition}
  */
  readonly alertCondition: string;
  /**
  * If true, also one-minute samples without data are counted as violating samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#alerting_on_missing_data CustomAnomalies#alerting_on_missing_data}
  */
  readonly alertingOnMissingData?: boolean | cdktf.IResolvable;
  /**
  * The number of one-minute samples within the evaluation window that must go back to normal to close the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#dealerting_samples CustomAnomalies#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of one-minute samples that form the sliding evaluation window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#samples CustomAnomalies#samples}
  */
  readonly samples: number;
  /**
  * Defines the factor of how many signal fluctuations are valid. Values above the baseline plus the signal fluctuation times the number of tolerated signal fluctuations are alerted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#signal_fluctuations CustomAnomalies#signal_fluctuations}
  */
  readonly signalFluctuations: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The number of one-minute samples within the evaluation window that must violate the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#violating_samples CustomAnomalies#violating_samples}
  */
  readonly violatingSamples: number;
}

export function customAnomaliesStrategyAutoToTerraform(struct?: CustomAnomaliesStrategyAutoOutputReference | CustomAnomaliesStrategyAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_condition: cdktf.stringToTerraform(struct!.alertCondition),
    alerting_on_missing_data: cdktf.booleanToTerraform(struct!.alertingOnMissingData),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    samples: cdktf.numberToTerraform(struct!.samples),
    signal_fluctuations: cdktf.numberToTerraform(struct!.signalFluctuations),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function customAnomaliesStrategyAutoToHclTerraform(struct?: CustomAnomaliesStrategyAutoOutputReference | CustomAnomaliesStrategyAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_condition: {
      value: cdktf.stringToHclTerraform(struct!.alertCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alerting_on_missing_data: {
      value: cdktf.booleanToHclTerraform(struct!.alertingOnMissingData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    samples: {
      value: cdktf.numberToHclTerraform(struct!.samples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signal_fluctuations: {
      value: cdktf.numberToHclTerraform(struct!.signalFluctuations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    violating_samples: {
      value: cdktf.numberToHclTerraform(struct!.violatingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesStrategyAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesStrategyAuto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertCondition = this._alertCondition;
    }
    if (this._alertingOnMissingData !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingOnMissingData = this._alertingOnMissingData;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._signalFluctuations !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalFluctuations = this._signalFluctuations;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesStrategyAuto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertCondition = undefined;
      this._alertingOnMissingData = undefined;
      this._dealertingSamples = undefined;
      this._samples = undefined;
      this._signalFluctuations = undefined;
      this._unknowns = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertCondition = value.alertCondition;
      this._alertingOnMissingData = value.alertingOnMissingData;
      this._dealertingSamples = value.dealertingSamples;
      this._samples = value.samples;
      this._signalFluctuations = value.signalFluctuations;
      this._unknowns = value.unknowns;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // alert_condition - computed: false, optional: false, required: true
  private _alertCondition?: string; 
  public get alertCondition() {
    return this.getStringAttribute('alert_condition');
  }
  public set alertCondition(value: string) {
    this._alertCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionInput() {
    return this._alertCondition;
  }

  // alerting_on_missing_data - computed: false, optional: true, required: false
  private _alertingOnMissingData?: boolean | cdktf.IResolvable; 
  public get alertingOnMissingData() {
    return this.getBooleanAttribute('alerting_on_missing_data');
  }
  public set alertingOnMissingData(value: boolean | cdktf.IResolvable) {
    this._alertingOnMissingData = value;
  }
  public resetAlertingOnMissingData() {
    this._alertingOnMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingOnMissingDataInput() {
    return this._alertingOnMissingData;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // samples - computed: false, optional: false, required: true
  private _samples?: number; 
  public get samples() {
    return this.getNumberAttribute('samples');
  }
  public set samples(value: number) {
    this._samples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // signal_fluctuations - computed: false, optional: false, required: true
  private _signalFluctuations?: number; 
  public get signalFluctuations() {
    return this.getNumberAttribute('signal_fluctuations');
  }
  public set signalFluctuations(value: number) {
    this._signalFluctuations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalFluctuationsInput() {
    return this._signalFluctuations;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface CustomAnomaliesStrategyGeneric {
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#type CustomAnomalies#type}
  */
  readonly type: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
}

export function customAnomaliesStrategyGenericToTerraform(struct?: CustomAnomaliesStrategyGeneric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function customAnomaliesStrategyGenericToHclTerraform(struct?: CustomAnomaliesStrategyGeneric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesStrategyGenericOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomAnomaliesStrategyGeneric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesStrategyGeneric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class CustomAnomaliesStrategyGenericList extends cdktf.ComplexList {
  public internalValue? : CustomAnomaliesStrategyGeneric[] | cdktf.IResolvable

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
  public get(index: number): CustomAnomaliesStrategyGenericOutputReference {
    return new CustomAnomaliesStrategyGenericOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomAnomaliesStrategyStatic {
  /**
  * The condition for the **threshold** value check: `ABOVE` or `BELOW`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#alert_condition CustomAnomalies#alert_condition}
  */
  readonly alertCondition: string;
  /**
  * If true, also one-minute samples without data are counted as violating samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#alerting_on_missing_data CustomAnomalies#alerting_on_missing_data}
  */
  readonly alertingOnMissingData?: boolean | cdktf.IResolvable;
  /**
  * The number of one-minute samples within the evaluation window that must go back to normal to close the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#dealerting_samples CustomAnomalies#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of one-minute samples that form the sliding evaluation window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#samples CustomAnomalies#samples}
  */
  readonly samples: number;
  /**
  * The value of the static threshold based on the specified unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#threshold CustomAnomalies#threshold}
  */
  readonly threshold: number;
  /**
  * The unit of the threshold, matching the metric definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unit CustomAnomalies#unit}
  */
  readonly unit: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#unknowns CustomAnomalies#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The number of one-minute samples within the evaluation window that must violate the threshold to trigger an event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#violating_samples CustomAnomalies#violating_samples}
  */
  readonly violatingSamples: number;
}

export function customAnomaliesStrategyStaticToTerraform(struct?: CustomAnomaliesStrategyStaticOutputReference | CustomAnomaliesStrategyStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_condition: cdktf.stringToTerraform(struct!.alertCondition),
    alerting_on_missing_data: cdktf.booleanToTerraform(struct!.alertingOnMissingData),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    samples: cdktf.numberToTerraform(struct!.samples),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function customAnomaliesStrategyStaticToHclTerraform(struct?: CustomAnomaliesStrategyStaticOutputReference | CustomAnomaliesStrategyStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_condition: {
      value: cdktf.stringToHclTerraform(struct!.alertCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alerting_on_missing_data: {
      value: cdktf.booleanToHclTerraform(struct!.alertingOnMissingData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    samples: {
      value: cdktf.numberToHclTerraform(struct!.samples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    violating_samples: {
      value: cdktf.numberToHclTerraform(struct!.violatingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesStrategyStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesStrategyStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertCondition = this._alertCondition;
    }
    if (this._alertingOnMissingData !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingOnMissingData = this._alertingOnMissingData;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesStrategyStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertCondition = undefined;
      this._alertingOnMissingData = undefined;
      this._dealertingSamples = undefined;
      this._samples = undefined;
      this._threshold = undefined;
      this._unit = undefined;
      this._unknowns = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertCondition = value.alertCondition;
      this._alertingOnMissingData = value.alertingOnMissingData;
      this._dealertingSamples = value.dealertingSamples;
      this._samples = value.samples;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._unknowns = value.unknowns;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // alert_condition - computed: false, optional: false, required: true
  private _alertCondition?: string; 
  public get alertCondition() {
    return this.getStringAttribute('alert_condition');
  }
  public set alertCondition(value: string) {
    this._alertCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionInput() {
    return this._alertCondition;
  }

  // alerting_on_missing_data - computed: false, optional: true, required: false
  private _alertingOnMissingData?: boolean | cdktf.IResolvable; 
  public get alertingOnMissingData() {
    return this.getBooleanAttribute('alerting_on_missing_data');
  }
  public set alertingOnMissingData(value: boolean | cdktf.IResolvable) {
    this._alertingOnMissingData = value;
  }
  public resetAlertingOnMissingData() {
    this._alertingOnMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingOnMissingDataInput() {
    return this._alertingOnMissingData;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // samples - computed: false, optional: false, required: true
  private _samples?: number; 
  public get samples() {
    return this.getNumberAttribute('samples');
  }
  public set samples(value: number) {
    this._samples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface CustomAnomaliesStrategy {
  /**
  * auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#auto CustomAnomalies#auto}
  */
  readonly auto?: CustomAnomaliesStrategyAuto;
  /**
  * generic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#generic CustomAnomalies#generic}
  */
  readonly generic?: CustomAnomaliesStrategyGeneric[] | cdktf.IResolvable;
  /**
  * static block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#static CustomAnomalies#static}
  */
  readonly static?: CustomAnomaliesStrategyStatic;
}

export function customAnomaliesStrategyToTerraform(struct?: CustomAnomaliesStrategyOutputReference | CustomAnomaliesStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: customAnomaliesStrategyAutoToTerraform(struct!.auto),
    generic: cdktf.listMapper(customAnomaliesStrategyGenericToTerraform, true)(struct!.generic),
    static: customAnomaliesStrategyStaticToTerraform(struct!.static),
  }
}


export function customAnomaliesStrategyToHclTerraform(struct?: CustomAnomaliesStrategyOutputReference | CustomAnomaliesStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: customAnomaliesStrategyAutoToHclTerraform(struct!.auto),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesStrategyAutoList",
    },
    generic: {
      value: cdktf.listMapperHcl(customAnomaliesStrategyGenericToHclTerraform, true)(struct!.generic),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesStrategyGenericList",
    },
    static: {
      value: customAnomaliesStrategyStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "list",
      storageClassType: "CustomAnomaliesStrategyStaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAnomaliesStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAnomaliesStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto?.internalValue;
    }
    if (this._generic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generic = this._generic?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAnomaliesStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auto.internalValue = undefined;
      this._generic.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auto.internalValue = value.auto;
      this._generic.internalValue = value.generic;
      this._static.internalValue = value.static;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto = new CustomAnomaliesStrategyAutoOutputReference(this, "auto");
  public get auto() {
    return this._auto;
  }
  public putAuto(value: CustomAnomaliesStrategyAuto) {
    this._auto.internalValue = value;
  }
  public resetAuto() {
    this._auto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto.internalValue;
  }

  // generic - computed: false, optional: true, required: false
  private _generic = new CustomAnomaliesStrategyGenericList(this, "generic", false);
  public get generic() {
    return this._generic;
  }
  public putGeneric(value: CustomAnomaliesStrategyGeneric[] | cdktf.IResolvable) {
    this._generic.internalValue = value;
  }
  public resetGeneric() {
    this._generic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericInput() {
    return this._generic.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new CustomAnomaliesStrategyStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: CustomAnomaliesStrategyStatic) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies dynatrace_custom_anomalies}
*/
export class CustomAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_custom_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomAnomalies to import
  * @param importFromId The id of the existing CustomAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_custom_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_anomalies dynatrace_custom_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: CustomAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_custom_anomalies',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregationType = config.aggregationType;
    this._description = config.description;
    this._disabledReason = config.disabledReason;
    this._enabled = config.enabled;
    this._id = config.id;
    this._metricId = config.metricId;
    this._metricSelector = config.metricSelector;
    this._name = config.name;
    this._primaryDimensionKey = config.primaryDimensionKey;
    this._severity = config.severity;
    this._unknowns = config.unknowns;
    this._warningReason = config.warningReason;
    this._dimensions.internalValue = config.dimensions;
    this._scopes.internalValue = config.scopes;
    this._strategy.internalValue = config.strategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_type - computed: false, optional: true, required: false
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  public resetAggregationType() {
    this._aggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disabled_reason - computed: false, optional: true, required: false
  private _disabledReason?: string; 
  public get disabledReason() {
    return this.getStringAttribute('disabled_reason');
  }
  public set disabledReason(value: string) {
    this._disabledReason = value;
  }
  public resetDisabledReason() {
    this._disabledReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledReasonInput() {
    return this._disabledReason;
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

  // metric_id - computed: false, optional: true, required: false
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  public resetMetricId() {
    this._metricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // metric_selector - computed: false, optional: true, required: false
  private _metricSelector?: string; 
  public get metricSelector() {
    return this.getStringAttribute('metric_selector');
  }
  public set metricSelector(value: string) {
    this._metricSelector = value;
  }
  public resetMetricSelector() {
    this._metricSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectorInput() {
    return this._metricSelector;
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

  // primary_dimension_key - computed: false, optional: true, required: false
  private _primaryDimensionKey?: string; 
  public get primaryDimensionKey() {
    return this.getStringAttribute('primary_dimension_key');
  }
  public set primaryDimensionKey(value: string) {
    this._primaryDimensionKey = value;
  }
  public resetPrimaryDimensionKey() {
    this._primaryDimensionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDimensionKeyInput() {
    return this._primaryDimensionKey;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // warning_reason - computed: false, optional: true, required: false
  private _warningReason?: string; 
  public get warningReason() {
    return this.getStringAttribute('warning_reason');
  }
  public set warningReason(value: string) {
    this._warningReason = value;
  }
  public resetWarningReason() {
    this._warningReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningReasonInput() {
    return this._warningReason;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new CustomAnomaliesDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: CustomAnomaliesDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes = new CustomAnomaliesScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: CustomAnomaliesScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy = new CustomAnomaliesStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: CustomAnomaliesStrategy) {
    this._strategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation_type: cdktf.stringToTerraform(this._aggregationType),
      description: cdktf.stringToTerraform(this._description),
      disabled_reason: cdktf.stringToTerraform(this._disabledReason),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      metric_id: cdktf.stringToTerraform(this._metricId),
      metric_selector: cdktf.stringToTerraform(this._metricSelector),
      name: cdktf.stringToTerraform(this._name),
      primary_dimension_key: cdktf.stringToTerraform(this._primaryDimensionKey),
      severity: cdktf.stringToTerraform(this._severity),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      warning_reason: cdktf.stringToTerraform(this._warningReason),
      dimensions: cdktf.listMapper(customAnomaliesDimensionsToTerraform, true)(this._dimensions.internalValue),
      scopes: cdktf.listMapper(customAnomaliesScopesToTerraform, true)(this._scopes.internalValue),
      strategy: customAnomaliesStrategyToTerraform(this._strategy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation_type: {
        value: cdktf.stringToHclTerraform(this._aggregationType),
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
      disabled_reason: {
        value: cdktf.stringToHclTerraform(this._disabledReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      metric_id: {
        value: cdktf.stringToHclTerraform(this._metricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_selector: {
        value: cdktf.stringToHclTerraform(this._metricSelector),
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
      primary_dimension_key: {
        value: cdktf.stringToHclTerraform(this._primaryDimensionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warning_reason: {
        value: cdktf.stringToHclTerraform(this._warningReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimensions: {
        value: cdktf.listMapperHcl(customAnomaliesDimensionsToHclTerraform, true)(this._dimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomAnomaliesDimensionsList",
      },
      scopes: {
        value: cdktf.listMapperHcl(customAnomaliesScopesToHclTerraform, true)(this._scopes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomAnomaliesScopesList",
      },
      strategy: {
        value: customAnomaliesStrategyToHclTerraform(this._strategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomAnomaliesStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
