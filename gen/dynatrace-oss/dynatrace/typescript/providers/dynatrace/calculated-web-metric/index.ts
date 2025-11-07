// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CalculatedWebMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Dynatrace entity ID of the application to which the metric belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#app_identifier CalculatedWebMetric#app_identifier}
  */
  readonly appIdentifier: string;
  /**
  * Descriptor of a calculated web metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#description CalculatedWebMetric#description}
  */
  readonly description?: string;
  /**
  * The metric is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#enabled CalculatedWebMetric#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#id CalculatedWebMetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique key of the calculated web metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#metric_key CalculatedWebMetric#metric_key}
  */
  readonly metricKey: string;
  /**
  * The displayed name of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#name CalculatedWebMetric#name}
  */
  readonly name: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#dimensions CalculatedWebMetric#dimensions}
  */
  readonly dimensions?: CalculatedWebMetricDimensions[] | cdktf.IResolvable;
  /**
  * metric_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#metric_definition CalculatedWebMetric#metric_definition}
  */
  readonly metricDefinition: CalculatedWebMetricMetricDefinition;
  /**
  * user_action_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#user_action_filter CalculatedWebMetric#user_action_filter}
  */
  readonly userActionFilter?: CalculatedWebMetricUserActionFilter;
}
export interface CalculatedWebMetricDimensionsDimension {
  /**
  * The dimension of the metric. Possible values are `ApdexType`, `Browser`, `ErrorContext`, `ErrorOrigin`, `ErrorType`, `GeoLocation`, `StringProperty`, `UserActionType`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#dimension CalculatedWebMetric#dimension}
  */
  readonly dimension: string;
  /**
  * The key of the user action property. Only applicable for the StringProperty dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#property_key CalculatedWebMetric#property_key}
  */
  readonly propertyKey?: string;
  /**
  * The number of top values to be calculated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#top_x CalculatedWebMetric#top_x}
  */
  readonly topX: number;
}

export function calculatedWebMetricDimensionsDimensionToTerraform(struct?: CalculatedWebMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.stringToTerraform(struct!.dimension),
    property_key: cdktf.stringToTerraform(struct!.propertyKey),
    top_x: cdktf.numberToTerraform(struct!.topX),
  }
}


export function calculatedWebMetricDimensionsDimensionToHclTerraform(struct?: CalculatedWebMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.stringToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_key: {
      value: cdktf.stringToHclTerraform(struct!.propertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top_x: {
      value: cdktf.numberToHclTerraform(struct!.topX),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedWebMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedWebMetricDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._propertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyKey = this._propertyKey;
    }
    if (this._topX !== undefined) {
      hasAnyValues = true;
      internalValueResult.topX = this._topX;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedWebMetricDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimension = undefined;
      this._propertyKey = undefined;
      this._topX = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimension = value.dimension;
      this._propertyKey = value.propertyKey;
      this._topX = value.topX;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // property_key - computed: false, optional: true, required: false
  private _propertyKey?: string; 
  public get propertyKey() {
    return this.getStringAttribute('property_key');
  }
  public set propertyKey(value: string) {
    this._propertyKey = value;
  }
  public resetPropertyKey() {
    this._propertyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyKeyInput() {
    return this._propertyKey;
  }

  // top_x - computed: false, optional: false, required: true
  private _topX?: number; 
  public get topX() {
    return this.getNumberAttribute('top_x');
  }
  public set topX(value: number) {
    this._topX = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topXInput() {
    return this._topX;
  }
}

export class CalculatedWebMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : CalculatedWebMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): CalculatedWebMetricDimensionsDimensionOutputReference {
    return new CalculatedWebMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedWebMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#dimension CalculatedWebMetric#dimension}
  */
  readonly dimension?: CalculatedWebMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function calculatedWebMetricDimensionsToTerraform(struct?: CalculatedWebMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(calculatedWebMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function calculatedWebMetricDimensionsToHclTerraform(struct?: CalculatedWebMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(calculatedWebMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedWebMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedWebMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedWebMetricDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedWebMetricDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimension.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new CalculatedWebMetricDimensionsDimensionList(this, "dimension", false);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CalculatedWebMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}

export class CalculatedWebMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : CalculatedWebMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): CalculatedWebMetricDimensionsOutputReference {
    return new CalculatedWebMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedWebMetricMetricDefinition {
  /**
  * The metric to be captured. Possible values are `Apdex`, `ApplicationCache`, `Callback`, `CumulativeLayoutShift`, `DNSLookup`, `DOMComplete`, `DOMContentLoaded`, `DOMInteractive`, `DoubleProperty`, `ErrorCount`, `FirstContentfulPaint`, `FirstInputDelay`, `FirstInputStart`, `FirstPaint`, `HTMLDownloaded`, `LargestContentfulPaint`, `LoadEventEnd`, `LoadEventStart`, `LongProperty`, `LongTasksTime`, `NavigationStart`, `OnDOMContentLoaded`, `OnLoad`, `Processing`, `RedirectTime`, `Request`, `RequestStart`, `Response`, `SecureConnect`, `SpeedIndex`, `TCPConnect`, `TimeToFirstByte`, `UserActionDuration`, `VisuallyComplete`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#metric CalculatedWebMetric#metric}
  */
  readonly metric: string;
  /**
  * The key of the user action property. Only applicable for DoubleProperty and LongProperty metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#property_key CalculatedWebMetric#property_key}
  */
  readonly propertyKey?: string;
}

export function calculatedWebMetricMetricDefinitionToTerraform(struct?: CalculatedWebMetricMetricDefinitionOutputReference | CalculatedWebMetricMetricDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    property_key: cdktf.stringToTerraform(struct!.propertyKey),
  }
}


export function calculatedWebMetricMetricDefinitionToHclTerraform(struct?: CalculatedWebMetricMetricDefinitionOutputReference | CalculatedWebMetricMetricDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_key: {
      value: cdktf.stringToHclTerraform(struct!.propertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedWebMetricMetricDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedWebMetricMetricDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._propertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyKey = this._propertyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedWebMetricMetricDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric = undefined;
      this._propertyKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric = value.metric;
      this._propertyKey = value.propertyKey;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // property_key - computed: false, optional: true, required: false
  private _propertyKey?: string; 
  public get propertyKey() {
    return this.getStringAttribute('property_key');
  }
  public set propertyKey(value: string) {
    this._propertyKey = value;
  }
  public resetPropertyKey() {
    this._propertyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyKeyInput() {
    return this._propertyKey;
  }
}
export interface CalculatedWebMetricUserActionFilterUserActionPropertiesProperty {
  /**
  * Only actions that have a value greater than or equal to this are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#from CalculatedWebMetric#from}
  */
  readonly from?: number;
  /**
  * The key of the action property we're checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#key CalculatedWebMetric#key}
  */
  readonly key?: string;
  /**
  * Specifies the match type of a string filter, e.g. using Contains or Equals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#match_type CalculatedWebMetric#match_type}
  */
  readonly matchType?: string;
  /**
  * Only actions that have a value less than or equal to this are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#to CalculatedWebMetric#to}
  */
  readonly to?: number;
  /**
  * Only actions that have this value in the specified property are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#value CalculatedWebMetric#value}
  */
  readonly value?: string;
}

export function calculatedWebMetricUserActionFilterUserActionPropertiesPropertyToTerraform(struct?: CalculatedWebMetricUserActionFilterUserActionPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    key: cdktf.stringToTerraform(struct!.key),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    to: cdktf.numberToTerraform(struct!.to),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function calculatedWebMetricUserActionFilterUserActionPropertiesPropertyToHclTerraform(struct?: CalculatedWebMetricUserActionFilterUserActionPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
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
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CalculatedWebMetricUserActionFilterUserActionPropertiesPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedWebMetricUserActionFilterUserActionPropertiesProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedWebMetricUserActionFilterUserActionPropertiesProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._key = undefined;
      this._matchType = undefined;
      this._to = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._key = value.key;
      this._matchType = value.matchType;
      this._to = value.to;
      this._value = value.value;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
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

export class CalculatedWebMetricUserActionFilterUserActionPropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : CalculatedWebMetricUserActionFilterUserActionPropertiesProperty[] | cdktf.IResolvable

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
  public get(index: number): CalculatedWebMetricUserActionFilterUserActionPropertiesPropertyOutputReference {
    return new CalculatedWebMetricUserActionFilterUserActionPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedWebMetricUserActionFilterUserActionProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#property CalculatedWebMetric#property}
  */
  readonly property?: CalculatedWebMetricUserActionFilterUserActionPropertiesProperty[] | cdktf.IResolvable;
}

export function calculatedWebMetricUserActionFilterUserActionPropertiesToTerraform(struct?: CalculatedWebMetricUserActionFilterUserActionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(calculatedWebMetricUserActionFilterUserActionPropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function calculatedWebMetricUserActionFilterUserActionPropertiesToHclTerraform(struct?: CalculatedWebMetricUserActionFilterUserActionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(calculatedWebMetricUserActionFilterUserActionPropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "set",
      storageClassType: "CalculatedWebMetricUserActionFilterUserActionPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedWebMetricUserActionFilterUserActionPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedWebMetricUserActionFilterUserActionProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedWebMetricUserActionFilterUserActionProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._property.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._property.internalValue = value.property;
    }
  }

  // property - computed: false, optional: true, required: false
  private _property = new CalculatedWebMetricUserActionFilterUserActionPropertiesPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: CalculatedWebMetricUserActionFilterUserActionPropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}

export class CalculatedWebMetricUserActionFilterUserActionPropertiesList extends cdktf.ComplexList {
  public internalValue? : CalculatedWebMetricUserActionFilterUserActionProperties[] | cdktf.IResolvable

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
  public get(index: number): CalculatedWebMetricUserActionFilterUserActionPropertiesOutputReference {
    return new CalculatedWebMetricUserActionFilterUserActionPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedWebMetricUserActionFilter {
  /**
  * Only actions with a duration more than or equal to this value (in milliseconds) are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#action_duration_from_milliseconds CalculatedWebMetric#action_duration_from_milliseconds}
  */
  readonly actionDurationFromMilliseconds?: number;
  /**
  * Only actions with a duration less than or equal to this value (in milliseconds) are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#action_duration_to_milliseconds CalculatedWebMetric#action_duration_to_milliseconds}
  */
  readonly actionDurationToMilliseconds?: number;
  /**
  * Only actions with the specified Apdex score are included in the metric calculation. Possible values: [ Frustrated, Satisfied, Tolerating, Unknown ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#apdex CalculatedWebMetric#apdex}
  */
  readonly apdex?: string;
  /**
  * Only user actions coming from the specified browser family are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#browser_family CalculatedWebMetric#browser_family}
  */
  readonly browserFamily?: string;
  /**
  * Only user actions coming from the specified browser type are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#browser_type CalculatedWebMetric#browser_type}
  */
  readonly browserType?: string;
  /**
  * Only user actions coming from the specified browser version are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#browser_version CalculatedWebMetric#browser_version}
  */
  readonly browserVersion?: string;
  /**
  * Only actions of users from this city are included in the metric calculation. Specify geolocation ID here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#city CalculatedWebMetric#city}
  */
  readonly city?: string;
  /**
  * Only actions of users from this continent are included in the metric calculation. Specify geolocation ID here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#continent CalculatedWebMetric#continent}
  */
  readonly continent?: string;
  /**
  * Only actions of users from this country are included in the metric calculation. Specify geolocation ID here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#country CalculatedWebMetric#country}
  */
  readonly country?: string;
  /**
  * The status of custom actions in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#custom_action CalculatedWebMetric#custom_action}
  */
  readonly customAction?: boolean | cdktf.IResolvable;
  /**
  * The custom error name of the actions to be included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#custom_error_name CalculatedWebMetric#custom_error_name}
  */
  readonly customErrorName?: string;
  /**
  * The custom error type of the actions to be included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#custom_error_type CalculatedWebMetric#custom_error_type}
  */
  readonly customErrorType?: string;
  /**
  * Only user actions coming from the specified domain are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#domain CalculatedWebMetric#domain}
  */
  readonly domain?: string;
  /**
  * The error status of the actions to be included in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#has_any_error CalculatedWebMetric#has_any_error}
  */
  readonly hasAnyError?: boolean | cdktf.IResolvable;
  /**
  * The custom error status of the actions to be included in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#has_custom_errors CalculatedWebMetric#has_custom_errors}
  */
  readonly hasCustomErrors?: boolean | cdktf.IResolvable;
  /**
  * The request error status of the actions to be included in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#has_http_errors CalculatedWebMetric#has_http_errors}
  */
  readonly hasHttpErrors?: boolean | cdktf.IResolvable;
  /**
  * The JavaScript error status of the actions to be included in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#has_javascript_errors CalculatedWebMetric#has_javascript_errors}
  */
  readonly hasJavascriptErrors?: boolean | cdktf.IResolvable;
  /**
  * The HTTP error status code of the actions to be included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#http_error_code CalculatedWebMetric#http_error_code}
  */
  readonly httpErrorCode?: number;
  /**
  * Can be used in combination with httpErrorCode to define a range of error codes that will be included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#http_error_code_to CalculatedWebMetric#http_error_code_to}
  */
  readonly httpErrorCodeTo?: number;
  /**
  * The request path that has been determined to be the origin of an HTTP error of the actions to be included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#http_path CalculatedWebMetric#http_path}
  */
  readonly httpPath?: string;
  /**
  * Only actions coming from this IP address are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#ip CalculatedWebMetric#ip}
  */
  readonly ip?: string;
  /**
  * The IPv6 status of the actions to be included in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#ip_v6_traffic CalculatedWebMetric#ip_v6_traffic}
  */
  readonly ipV6Traffic?: boolean | cdktf.IResolvable;
  /**
  * The status of load actions in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#load_action CalculatedWebMetric#load_action}
  */
  readonly loadAction?: boolean | cdktf.IResolvable;
  /**
  * Only actions coming from this OS family are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#os_family CalculatedWebMetric#os_family}
  */
  readonly osFamily?: string;
  /**
  * Only actions coming from this OS version are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#os_version CalculatedWebMetric#os_version}
  */
  readonly osVersion?: string;
  /**
  * The status of actions coming from real users in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#real_user CalculatedWebMetric#real_user}
  */
  readonly realUser?: boolean | cdktf.IResolvable;
  /**
  * Only actions of users from this region are included in the metric calculation. Specify geolocation ID here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#region CalculatedWebMetric#region}
  */
  readonly region?: string;
  /**
  * The status of actions coming from robots in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#robot CalculatedWebMetric#robot}
  */
  readonly robot?: boolean | cdktf.IResolvable;
  /**
  * The status of actions coming from synthetic monitors in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#synthetic CalculatedWebMetric#synthetic}
  */
  readonly synthetic?: boolean | cdktf.IResolvable;
  /**
  * Only actions on the specified group of views are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#target_view_group CalculatedWebMetric#target_view_group}
  */
  readonly targetViewGroup?: string;
  /**
  * Specifies the match type of the view group filter, e.g. using Contains or Equals. Defaults to Equals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#target_view_group_name_match_type CalculatedWebMetric#target_view_group_name_match_type}
  */
  readonly targetViewGroupNameMatchType?: string;
  /**
  * Only actions on the specified view are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#target_view_name CalculatedWebMetric#target_view_name}
  */
  readonly targetViewName?: string;
  /**
  * Specifies the match type of the view name filter, e.g. using Contains or Equals. Defaults to Equals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#target_view_name_match_type CalculatedWebMetric#target_view_name_match_type}
  */
  readonly targetViewNameMatchType?: string;
  /**
  * Only actions with this name are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#user_action_name CalculatedWebMetric#user_action_name}
  */
  readonly userActionName?: string;
  /**
  * The status of xhr actions in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#xhr_action CalculatedWebMetric#xhr_action}
  */
  readonly xhrAction?: boolean | cdktf.IResolvable;
  /**
  * The status of route actions in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#xhr_route_change_action CalculatedWebMetric#xhr_route_change_action}
  */
  readonly xhrRouteChangeAction?: boolean | cdktf.IResolvable;
  /**
  * user_action_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#user_action_properties CalculatedWebMetric#user_action_properties}
  */
  readonly userActionProperties?: CalculatedWebMetricUserActionFilterUserActionProperties[] | cdktf.IResolvable;
}

export function calculatedWebMetricUserActionFilterToTerraform(struct?: CalculatedWebMetricUserActionFilterOutputReference | CalculatedWebMetricUserActionFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_duration_from_milliseconds: cdktf.numberToTerraform(struct!.actionDurationFromMilliseconds),
    action_duration_to_milliseconds: cdktf.numberToTerraform(struct!.actionDurationToMilliseconds),
    apdex: cdktf.stringToTerraform(struct!.apdex),
    browser_family: cdktf.stringToTerraform(struct!.browserFamily),
    browser_type: cdktf.stringToTerraform(struct!.browserType),
    browser_version: cdktf.stringToTerraform(struct!.browserVersion),
    city: cdktf.stringToTerraform(struct!.city),
    continent: cdktf.stringToTerraform(struct!.continent),
    country: cdktf.stringToTerraform(struct!.country),
    custom_action: cdktf.booleanToTerraform(struct!.customAction),
    custom_error_name: cdktf.stringToTerraform(struct!.customErrorName),
    custom_error_type: cdktf.stringToTerraform(struct!.customErrorType),
    domain: cdktf.stringToTerraform(struct!.domain),
    has_any_error: cdktf.booleanToTerraform(struct!.hasAnyError),
    has_custom_errors: cdktf.booleanToTerraform(struct!.hasCustomErrors),
    has_http_errors: cdktf.booleanToTerraform(struct!.hasHttpErrors),
    has_javascript_errors: cdktf.booleanToTerraform(struct!.hasJavascriptErrors),
    http_error_code: cdktf.numberToTerraform(struct!.httpErrorCode),
    http_error_code_to: cdktf.numberToTerraform(struct!.httpErrorCodeTo),
    http_path: cdktf.stringToTerraform(struct!.httpPath),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_v6_traffic: cdktf.booleanToTerraform(struct!.ipV6Traffic),
    load_action: cdktf.booleanToTerraform(struct!.loadAction),
    os_family: cdktf.stringToTerraform(struct!.osFamily),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
    real_user: cdktf.booleanToTerraform(struct!.realUser),
    region: cdktf.stringToTerraform(struct!.region),
    robot: cdktf.booleanToTerraform(struct!.robot),
    synthetic: cdktf.booleanToTerraform(struct!.synthetic),
    target_view_group: cdktf.stringToTerraform(struct!.targetViewGroup),
    target_view_group_name_match_type: cdktf.stringToTerraform(struct!.targetViewGroupNameMatchType),
    target_view_name: cdktf.stringToTerraform(struct!.targetViewName),
    target_view_name_match_type: cdktf.stringToTerraform(struct!.targetViewNameMatchType),
    user_action_name: cdktf.stringToTerraform(struct!.userActionName),
    xhr_action: cdktf.booleanToTerraform(struct!.xhrAction),
    xhr_route_change_action: cdktf.booleanToTerraform(struct!.xhrRouteChangeAction),
    user_action_properties: cdktf.listMapper(calculatedWebMetricUserActionFilterUserActionPropertiesToTerraform, true)(struct!.userActionProperties),
  }
}


export function calculatedWebMetricUserActionFilterToHclTerraform(struct?: CalculatedWebMetricUserActionFilterOutputReference | CalculatedWebMetricUserActionFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_duration_from_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.actionDurationFromMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action_duration_to_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.actionDurationToMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    apdex: {
      value: cdktf.stringToHclTerraform(struct!.apdex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    browser_family: {
      value: cdktf.stringToHclTerraform(struct!.browserFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    browser_type: {
      value: cdktf.stringToHclTerraform(struct!.browserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    browser_version: {
      value: cdktf.stringToHclTerraform(struct!.browserVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continent: {
      value: cdktf.stringToHclTerraform(struct!.continent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_action: {
      value: cdktf.booleanToHclTerraform(struct!.customAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_error_name: {
      value: cdktf.stringToHclTerraform(struct!.customErrorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_error_type: {
      value: cdktf.stringToHclTerraform(struct!.customErrorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_any_error: {
      value: cdktf.booleanToHclTerraform(struct!.hasAnyError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    has_custom_errors: {
      value: cdktf.booleanToHclTerraform(struct!.hasCustomErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    has_http_errors: {
      value: cdktf.booleanToHclTerraform(struct!.hasHttpErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    has_javascript_errors: {
      value: cdktf.booleanToHclTerraform(struct!.hasJavascriptErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_error_code: {
      value: cdktf.numberToHclTerraform(struct!.httpErrorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_error_code_to: {
      value: cdktf.numberToHclTerraform(struct!.httpErrorCodeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_path: {
      value: cdktf.stringToHclTerraform(struct!.httpPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_v6_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.ipV6Traffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_action: {
      value: cdktf.booleanToHclTerraform(struct!.loadAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os_family: {
      value: cdktf.stringToHclTerraform(struct!.osFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version: {
      value: cdktf.stringToHclTerraform(struct!.osVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    real_user: {
      value: cdktf.booleanToHclTerraform(struct!.realUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    robot: {
      value: cdktf.booleanToHclTerraform(struct!.robot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    synthetic: {
      value: cdktf.booleanToHclTerraform(struct!.synthetic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_view_group: {
      value: cdktf.stringToHclTerraform(struct!.targetViewGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_view_group_name_match_type: {
      value: cdktf.stringToHclTerraform(struct!.targetViewGroupNameMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_view_name: {
      value: cdktf.stringToHclTerraform(struct!.targetViewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_view_name_match_type: {
      value: cdktf.stringToHclTerraform(struct!.targetViewNameMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_action_name: {
      value: cdktf.stringToHclTerraform(struct!.userActionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xhr_action: {
      value: cdktf.booleanToHclTerraform(struct!.xhrAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xhr_route_change_action: {
      value: cdktf.booleanToHclTerraform(struct!.xhrRouteChangeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_action_properties: {
      value: cdktf.listMapperHcl(calculatedWebMetricUserActionFilterUserActionPropertiesToHclTerraform, true)(struct!.userActionProperties),
      isBlock: true,
      type: "set",
      storageClassType: "CalculatedWebMetricUserActionFilterUserActionPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedWebMetricUserActionFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedWebMetricUserActionFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionDurationFromMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDurationFromMilliseconds = this._actionDurationFromMilliseconds;
    }
    if (this._actionDurationToMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDurationToMilliseconds = this._actionDurationToMilliseconds;
    }
    if (this._apdex !== undefined) {
      hasAnyValues = true;
      internalValueResult.apdex = this._apdex;
    }
    if (this._browserFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserFamily = this._browserFamily;
    }
    if (this._browserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserType = this._browserType;
    }
    if (this._browserVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserVersion = this._browserVersion;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._continent !== undefined) {
      hasAnyValues = true;
      internalValueResult.continent = this._continent;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._customAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAction = this._customAction;
    }
    if (this._customErrorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorName = this._customErrorName;
    }
    if (this._customErrorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorType = this._customErrorType;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._hasAnyError !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasAnyError = this._hasAnyError;
    }
    if (this._hasCustomErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasCustomErrors = this._hasCustomErrors;
    }
    if (this._hasHttpErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasHttpErrors = this._hasHttpErrors;
    }
    if (this._hasJavascriptErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasJavascriptErrors = this._hasJavascriptErrors;
    }
    if (this._httpErrorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrorCode = this._httpErrorCode;
    }
    if (this._httpErrorCodeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrorCodeTo = this._httpErrorCodeTo;
    }
    if (this._httpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPath = this._httpPath;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipV6Traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipV6Traffic = this._ipV6Traffic;
    }
    if (this._loadAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadAction = this._loadAction;
    }
    if (this._osFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.osFamily = this._osFamily;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    if (this._realUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.realUser = this._realUser;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._robot !== undefined) {
      hasAnyValues = true;
      internalValueResult.robot = this._robot;
    }
    if (this._synthetic !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthetic = this._synthetic;
    }
    if (this._targetViewGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetViewGroup = this._targetViewGroup;
    }
    if (this._targetViewGroupNameMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetViewGroupNameMatchType = this._targetViewGroupNameMatchType;
    }
    if (this._targetViewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetViewName = this._targetViewName;
    }
    if (this._targetViewNameMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetViewNameMatchType = this._targetViewNameMatchType;
    }
    if (this._userActionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userActionName = this._userActionName;
    }
    if (this._xhrAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.xhrAction = this._xhrAction;
    }
    if (this._xhrRouteChangeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.xhrRouteChangeAction = this._xhrRouteChangeAction;
    }
    if (this._userActionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userActionProperties = this._userActionProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedWebMetricUserActionFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionDurationFromMilliseconds = undefined;
      this._actionDurationToMilliseconds = undefined;
      this._apdex = undefined;
      this._browserFamily = undefined;
      this._browserType = undefined;
      this._browserVersion = undefined;
      this._city = undefined;
      this._continent = undefined;
      this._country = undefined;
      this._customAction = undefined;
      this._customErrorName = undefined;
      this._customErrorType = undefined;
      this._domain = undefined;
      this._hasAnyError = undefined;
      this._hasCustomErrors = undefined;
      this._hasHttpErrors = undefined;
      this._hasJavascriptErrors = undefined;
      this._httpErrorCode = undefined;
      this._httpErrorCodeTo = undefined;
      this._httpPath = undefined;
      this._ip = undefined;
      this._ipV6Traffic = undefined;
      this._loadAction = undefined;
      this._osFamily = undefined;
      this._osVersion = undefined;
      this._realUser = undefined;
      this._region = undefined;
      this._robot = undefined;
      this._synthetic = undefined;
      this._targetViewGroup = undefined;
      this._targetViewGroupNameMatchType = undefined;
      this._targetViewName = undefined;
      this._targetViewNameMatchType = undefined;
      this._userActionName = undefined;
      this._xhrAction = undefined;
      this._xhrRouteChangeAction = undefined;
      this._userActionProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionDurationFromMilliseconds = value.actionDurationFromMilliseconds;
      this._actionDurationToMilliseconds = value.actionDurationToMilliseconds;
      this._apdex = value.apdex;
      this._browserFamily = value.browserFamily;
      this._browserType = value.browserType;
      this._browserVersion = value.browserVersion;
      this._city = value.city;
      this._continent = value.continent;
      this._country = value.country;
      this._customAction = value.customAction;
      this._customErrorName = value.customErrorName;
      this._customErrorType = value.customErrorType;
      this._domain = value.domain;
      this._hasAnyError = value.hasAnyError;
      this._hasCustomErrors = value.hasCustomErrors;
      this._hasHttpErrors = value.hasHttpErrors;
      this._hasJavascriptErrors = value.hasJavascriptErrors;
      this._httpErrorCode = value.httpErrorCode;
      this._httpErrorCodeTo = value.httpErrorCodeTo;
      this._httpPath = value.httpPath;
      this._ip = value.ip;
      this._ipV6Traffic = value.ipV6Traffic;
      this._loadAction = value.loadAction;
      this._osFamily = value.osFamily;
      this._osVersion = value.osVersion;
      this._realUser = value.realUser;
      this._region = value.region;
      this._robot = value.robot;
      this._synthetic = value.synthetic;
      this._targetViewGroup = value.targetViewGroup;
      this._targetViewGroupNameMatchType = value.targetViewGroupNameMatchType;
      this._targetViewName = value.targetViewName;
      this._targetViewNameMatchType = value.targetViewNameMatchType;
      this._userActionName = value.userActionName;
      this._xhrAction = value.xhrAction;
      this._xhrRouteChangeAction = value.xhrRouteChangeAction;
      this._userActionProperties.internalValue = value.userActionProperties;
    }
  }

  // action_duration_from_milliseconds - computed: false, optional: true, required: false
  private _actionDurationFromMilliseconds?: number; 
  public get actionDurationFromMilliseconds() {
    return this.getNumberAttribute('action_duration_from_milliseconds');
  }
  public set actionDurationFromMilliseconds(value: number) {
    this._actionDurationFromMilliseconds = value;
  }
  public resetActionDurationFromMilliseconds() {
    this._actionDurationFromMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDurationFromMillisecondsInput() {
    return this._actionDurationFromMilliseconds;
  }

  // action_duration_to_milliseconds - computed: false, optional: true, required: false
  private _actionDurationToMilliseconds?: number; 
  public get actionDurationToMilliseconds() {
    return this.getNumberAttribute('action_duration_to_milliseconds');
  }
  public set actionDurationToMilliseconds(value: number) {
    this._actionDurationToMilliseconds = value;
  }
  public resetActionDurationToMilliseconds() {
    this._actionDurationToMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDurationToMillisecondsInput() {
    return this._actionDurationToMilliseconds;
  }

  // apdex - computed: false, optional: true, required: false
  private _apdex?: string; 
  public get apdex() {
    return this.getStringAttribute('apdex');
  }
  public set apdex(value: string) {
    this._apdex = value;
  }
  public resetApdex() {
    this._apdex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexInput() {
    return this._apdex;
  }

  // browser_family - computed: false, optional: true, required: false
  private _browserFamily?: string; 
  public get browserFamily() {
    return this.getStringAttribute('browser_family');
  }
  public set browserFamily(value: string) {
    this._browserFamily = value;
  }
  public resetBrowserFamily() {
    this._browserFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserFamilyInput() {
    return this._browserFamily;
  }

  // browser_type - computed: false, optional: true, required: false
  private _browserType?: string; 
  public get browserType() {
    return this.getStringAttribute('browser_type');
  }
  public set browserType(value: string) {
    this._browserType = value;
  }
  public resetBrowserType() {
    this._browserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserTypeInput() {
    return this._browserType;
  }

  // browser_version - computed: false, optional: true, required: false
  private _browserVersion?: string; 
  public get browserVersion() {
    return this.getStringAttribute('browser_version');
  }
  public set browserVersion(value: string) {
    this._browserVersion = value;
  }
  public resetBrowserVersion() {
    this._browserVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserVersionInput() {
    return this._browserVersion;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // continent - computed: false, optional: true, required: false
  private _continent?: string; 
  public get continent() {
    return this.getStringAttribute('continent');
  }
  public set continent(value: string) {
    this._continent = value;
  }
  public resetContinent() {
    this._continent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentInput() {
    return this._continent;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // custom_action - computed: false, optional: true, required: false
  private _customAction?: boolean | cdktf.IResolvable; 
  public get customAction() {
    return this.getBooleanAttribute('custom_action');
  }
  public set customAction(value: boolean | cdktf.IResolvable) {
    this._customAction = value;
  }
  public resetCustomAction() {
    this._customAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionInput() {
    return this._customAction;
  }

  // custom_error_name - computed: false, optional: true, required: false
  private _customErrorName?: string; 
  public get customErrorName() {
    return this.getStringAttribute('custom_error_name');
  }
  public set customErrorName(value: string) {
    this._customErrorName = value;
  }
  public resetCustomErrorName() {
    this._customErrorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorNameInput() {
    return this._customErrorName;
  }

  // custom_error_type - computed: false, optional: true, required: false
  private _customErrorType?: string; 
  public get customErrorType() {
    return this.getStringAttribute('custom_error_type');
  }
  public set customErrorType(value: string) {
    this._customErrorType = value;
  }
  public resetCustomErrorType() {
    this._customErrorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorTypeInput() {
    return this._customErrorType;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // has_any_error - computed: false, optional: true, required: false
  private _hasAnyError?: boolean | cdktf.IResolvable; 
  public get hasAnyError() {
    return this.getBooleanAttribute('has_any_error');
  }
  public set hasAnyError(value: boolean | cdktf.IResolvable) {
    this._hasAnyError = value;
  }
  public resetHasAnyError() {
    this._hasAnyError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasAnyErrorInput() {
    return this._hasAnyError;
  }

  // has_custom_errors - computed: false, optional: true, required: false
  private _hasCustomErrors?: boolean | cdktf.IResolvable; 
  public get hasCustomErrors() {
    return this.getBooleanAttribute('has_custom_errors');
  }
  public set hasCustomErrors(value: boolean | cdktf.IResolvable) {
    this._hasCustomErrors = value;
  }
  public resetHasCustomErrors() {
    this._hasCustomErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasCustomErrorsInput() {
    return this._hasCustomErrors;
  }

  // has_http_errors - computed: false, optional: true, required: false
  private _hasHttpErrors?: boolean | cdktf.IResolvable; 
  public get hasHttpErrors() {
    return this.getBooleanAttribute('has_http_errors');
  }
  public set hasHttpErrors(value: boolean | cdktf.IResolvable) {
    this._hasHttpErrors = value;
  }
  public resetHasHttpErrors() {
    this._hasHttpErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasHttpErrorsInput() {
    return this._hasHttpErrors;
  }

  // has_javascript_errors - computed: false, optional: true, required: false
  private _hasJavascriptErrors?: boolean | cdktf.IResolvable; 
  public get hasJavascriptErrors() {
    return this.getBooleanAttribute('has_javascript_errors');
  }
  public set hasJavascriptErrors(value: boolean | cdktf.IResolvable) {
    this._hasJavascriptErrors = value;
  }
  public resetHasJavascriptErrors() {
    this._hasJavascriptErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasJavascriptErrorsInput() {
    return this._hasJavascriptErrors;
  }

  // http_error_code - computed: false, optional: true, required: false
  private _httpErrorCode?: number; 
  public get httpErrorCode() {
    return this.getNumberAttribute('http_error_code');
  }
  public set httpErrorCode(value: number) {
    this._httpErrorCode = value;
  }
  public resetHttpErrorCode() {
    this._httpErrorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorCodeInput() {
    return this._httpErrorCode;
  }

  // http_error_code_to - computed: false, optional: true, required: false
  private _httpErrorCodeTo?: number; 
  public get httpErrorCodeTo() {
    return this.getNumberAttribute('http_error_code_to');
  }
  public set httpErrorCodeTo(value: number) {
    this._httpErrorCodeTo = value;
  }
  public resetHttpErrorCodeTo() {
    this._httpErrorCodeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorCodeToInput() {
    return this._httpErrorCodeTo;
  }

  // http_path - computed: false, optional: true, required: false
  private _httpPath?: string; 
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }
  public set httpPath(value: string) {
    this._httpPath = value;
  }
  public resetHttpPath() {
    this._httpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPathInput() {
    return this._httpPath;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_v6_traffic - computed: false, optional: true, required: false
  private _ipV6Traffic?: boolean | cdktf.IResolvable; 
  public get ipV6Traffic() {
    return this.getBooleanAttribute('ip_v6_traffic');
  }
  public set ipV6Traffic(value: boolean | cdktf.IResolvable) {
    this._ipV6Traffic = value;
  }
  public resetIpV6Traffic() {
    this._ipV6Traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipV6TrafficInput() {
    return this._ipV6Traffic;
  }

  // load_action - computed: false, optional: true, required: false
  private _loadAction?: boolean | cdktf.IResolvable; 
  public get loadAction() {
    return this.getBooleanAttribute('load_action');
  }
  public set loadAction(value: boolean | cdktf.IResolvable) {
    this._loadAction = value;
  }
  public resetLoadAction() {
    this._loadAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadActionInput() {
    return this._loadAction;
  }

  // os_family - computed: false, optional: true, required: false
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  public resetOsFamily() {
    this._osFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // real_user - computed: false, optional: true, required: false
  private _realUser?: boolean | cdktf.IResolvable; 
  public get realUser() {
    return this.getBooleanAttribute('real_user');
  }
  public set realUser(value: boolean | cdktf.IResolvable) {
    this._realUser = value;
  }
  public resetRealUser() {
    this._realUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realUserInput() {
    return this._realUser;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // robot - computed: false, optional: true, required: false
  private _robot?: boolean | cdktf.IResolvable; 
  public get robot() {
    return this.getBooleanAttribute('robot');
  }
  public set robot(value: boolean | cdktf.IResolvable) {
    this._robot = value;
  }
  public resetRobot() {
    this._robot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get robotInput() {
    return this._robot;
  }

  // synthetic - computed: false, optional: true, required: false
  private _synthetic?: boolean | cdktf.IResolvable; 
  public get synthetic() {
    return this.getBooleanAttribute('synthetic');
  }
  public set synthetic(value: boolean | cdktf.IResolvable) {
    this._synthetic = value;
  }
  public resetSynthetic() {
    this._synthetic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticInput() {
    return this._synthetic;
  }

  // target_view_group - computed: false, optional: true, required: false
  private _targetViewGroup?: string; 
  public get targetViewGroup() {
    return this.getStringAttribute('target_view_group');
  }
  public set targetViewGroup(value: string) {
    this._targetViewGroup = value;
  }
  public resetTargetViewGroup() {
    this._targetViewGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetViewGroupInput() {
    return this._targetViewGroup;
  }

  // target_view_group_name_match_type - computed: false, optional: true, required: false
  private _targetViewGroupNameMatchType?: string; 
  public get targetViewGroupNameMatchType() {
    return this.getStringAttribute('target_view_group_name_match_type');
  }
  public set targetViewGroupNameMatchType(value: string) {
    this._targetViewGroupNameMatchType = value;
  }
  public resetTargetViewGroupNameMatchType() {
    this._targetViewGroupNameMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetViewGroupNameMatchTypeInput() {
    return this._targetViewGroupNameMatchType;
  }

  // target_view_name - computed: false, optional: true, required: false
  private _targetViewName?: string; 
  public get targetViewName() {
    return this.getStringAttribute('target_view_name');
  }
  public set targetViewName(value: string) {
    this._targetViewName = value;
  }
  public resetTargetViewName() {
    this._targetViewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetViewNameInput() {
    return this._targetViewName;
  }

  // target_view_name_match_type - computed: false, optional: true, required: false
  private _targetViewNameMatchType?: string; 
  public get targetViewNameMatchType() {
    return this.getStringAttribute('target_view_name_match_type');
  }
  public set targetViewNameMatchType(value: string) {
    this._targetViewNameMatchType = value;
  }
  public resetTargetViewNameMatchType() {
    this._targetViewNameMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetViewNameMatchTypeInput() {
    return this._targetViewNameMatchType;
  }

  // user_action_name - computed: false, optional: true, required: false
  private _userActionName?: string; 
  public get userActionName() {
    return this.getStringAttribute('user_action_name');
  }
  public set userActionName(value: string) {
    this._userActionName = value;
  }
  public resetUserActionName() {
    this._userActionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionNameInput() {
    return this._userActionName;
  }

  // xhr_action - computed: false, optional: true, required: false
  private _xhrAction?: boolean | cdktf.IResolvable; 
  public get xhrAction() {
    return this.getBooleanAttribute('xhr_action');
  }
  public set xhrAction(value: boolean | cdktf.IResolvable) {
    this._xhrAction = value;
  }
  public resetXhrAction() {
    this._xhrAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xhrActionInput() {
    return this._xhrAction;
  }

  // xhr_route_change_action - computed: false, optional: true, required: false
  private _xhrRouteChangeAction?: boolean | cdktf.IResolvable; 
  public get xhrRouteChangeAction() {
    return this.getBooleanAttribute('xhr_route_change_action');
  }
  public set xhrRouteChangeAction(value: boolean | cdktf.IResolvable) {
    this._xhrRouteChangeAction = value;
  }
  public resetXhrRouteChangeAction() {
    this._xhrRouteChangeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xhrRouteChangeActionInput() {
    return this._xhrRouteChangeAction;
  }

  // user_action_properties - computed: false, optional: true, required: false
  private _userActionProperties = new CalculatedWebMetricUserActionFilterUserActionPropertiesList(this, "user_action_properties", true);
  public get userActionProperties() {
    return this._userActionProperties;
  }
  public putUserActionProperties(value: CalculatedWebMetricUserActionFilterUserActionProperties[] | cdktf.IResolvable) {
    this._userActionProperties.internalValue = value;
  }
  public resetUserActionProperties() {
    this._userActionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionPropertiesInput() {
    return this._userActionProperties.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric dynatrace_calculated_web_metric}
*/
export class CalculatedWebMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_calculated_web_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CalculatedWebMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CalculatedWebMetric to import
  * @param importFromId The id of the existing CalculatedWebMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CalculatedWebMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_calculated_web_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/calculated_web_metric dynatrace_calculated_web_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CalculatedWebMetricConfig
  */
  public constructor(scope: Construct, id: string, config: CalculatedWebMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_calculated_web_metric',
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
    this._appIdentifier = config.appIdentifier;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._metricKey = config.metricKey;
    this._name = config.name;
    this._dimensions.internalValue = config.dimensions;
    this._metricDefinition.internalValue = config.metricDefinition;
    this._userActionFilter.internalValue = config.userActionFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_identifier - computed: false, optional: false, required: true
  private _appIdentifier?: string; 
  public get appIdentifier() {
    return this.getStringAttribute('app_identifier');
  }
  public set appIdentifier(value: string) {
    this._appIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdentifierInput() {
    return this._appIdentifier;
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new CalculatedWebMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: CalculatedWebMetricDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // metric_definition - computed: false, optional: false, required: true
  private _metricDefinition = new CalculatedWebMetricMetricDefinitionOutputReference(this, "metric_definition");
  public get metricDefinition() {
    return this._metricDefinition;
  }
  public putMetricDefinition(value: CalculatedWebMetricMetricDefinition) {
    this._metricDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionInput() {
    return this._metricDefinition.internalValue;
  }

  // user_action_filter - computed: false, optional: true, required: false
  private _userActionFilter = new CalculatedWebMetricUserActionFilterOutputReference(this, "user_action_filter");
  public get userActionFilter() {
    return this._userActionFilter;
  }
  public putUserActionFilter(value: CalculatedWebMetricUserActionFilter) {
    this._userActionFilter.internalValue = value;
  }
  public resetUserActionFilter() {
    this._userActionFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionFilterInput() {
    return this._userActionFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_identifier: cdktf.stringToTerraform(this._appIdentifier),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      metric_key: cdktf.stringToTerraform(this._metricKey),
      name: cdktf.stringToTerraform(this._name),
      dimensions: cdktf.listMapper(calculatedWebMetricDimensionsToTerraform, true)(this._dimensions.internalValue),
      metric_definition: calculatedWebMetricMetricDefinitionToTerraform(this._metricDefinition.internalValue),
      user_action_filter: calculatedWebMetricUserActionFilterToTerraform(this._userActionFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_identifier: {
        value: cdktf.stringToHclTerraform(this._appIdentifier),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimensions: {
        value: cdktf.listMapperHcl(calculatedWebMetricDimensionsToHclTerraform, true)(this._dimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CalculatedWebMetricDimensionsList",
      },
      metric_definition: {
        value: calculatedWebMetricMetricDefinitionToHclTerraform(this._metricDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CalculatedWebMetricMetricDefinitionList",
      },
      user_action_filter: {
        value: calculatedWebMetricUserActionFilterToHclTerraform(this._userActionFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CalculatedWebMetricUserActionFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
