// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CalculatedSyntheticMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Descriptor of a calculated synthetic metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#description CalculatedSyntheticMetric#description}
  */
  readonly description?: string;
  /**
  * The metric is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#enabled CalculatedSyntheticMetric#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#id CalculatedSyntheticMetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of the synthetic metric. Possible values: [ ApplicationCache, Callback, CumulativeLayoutShift, DNSLookup, DOMComplete, DOMContentLoaded, DOMInteractive, FailedRequestsResources, FirstContentfulPaint, FirstInputDelay, FirstInputStart, FirstPaint, HTMLDownloaded, HttpErrors, JavaScriptErrors, LargestContentfulPaint, LoadEventEnd, LoadEventStart, LongTasks, NavigationStart, OnDOMContentLoaded, OnLoad, Processing, RedirectTime, Request, RequestStart, ResourceCount, Response, SecureConnect, SpeedIndex, TCPConnect, TimeToFirstByte, TotalDuration, TransferSize, UserActionDuration, VisuallyComplete ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#metric CalculatedSyntheticMetric#metric}
  */
  readonly metric: string;
  /**
  * The unique key of the calculated synthetic metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#metric_key CalculatedSyntheticMetric#metric_key}
  */
  readonly metricKey: string;
  /**
  * The Dynatrace entity ID of the monitor to which the metric belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#monitor_identifier CalculatedSyntheticMetric#monitor_identifier}
  */
  readonly monitorIdentifier: string;
  /**
  * The displayed name of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#name CalculatedSyntheticMetric#name}
  */
  readonly name: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#dimensions CalculatedSyntheticMetric#dimensions}
  */
  readonly dimensions?: CalculatedSyntheticMetricDimensions[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#filter CalculatedSyntheticMetric#filter}
  */
  readonly filter?: CalculatedSyntheticMetricFilter;
}
export interface CalculatedSyntheticMetricDimensionsDimension {
  /**
  * The dimension of the metric. Possible values are `Event`, `Location`, `ResourceOrigin`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#dimension CalculatedSyntheticMetric#dimension}
  */
  readonly dimension: string;
  /**
  * The number of top values to be calculated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#top_x CalculatedSyntheticMetric#top_x}
  */
  readonly topX?: number;
}

export function calculatedSyntheticMetricDimensionsDimensionToTerraform(struct?: CalculatedSyntheticMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.stringToTerraform(struct!.dimension),
    top_x: cdktf.numberToTerraform(struct!.topX),
  }
}


export function calculatedSyntheticMetricDimensionsDimensionToHclTerraform(struct?: CalculatedSyntheticMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class CalculatedSyntheticMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedSyntheticMetricDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._topX !== undefined) {
      hasAnyValues = true;
      internalValueResult.topX = this._topX;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedSyntheticMetricDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimension = undefined;
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

  // top_x - computed: false, optional: true, required: false
  private _topX?: number; 
  public get topX() {
    return this.getNumberAttribute('top_x');
  }
  public set topX(value: number) {
    this._topX = value;
  }
  public resetTopX() {
    this._topX = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topXInput() {
    return this._topX;
  }
}

export class CalculatedSyntheticMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : CalculatedSyntheticMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): CalculatedSyntheticMetricDimensionsDimensionOutputReference {
    return new CalculatedSyntheticMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedSyntheticMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#dimension CalculatedSyntheticMetric#dimension}
  */
  readonly dimension?: CalculatedSyntheticMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function calculatedSyntheticMetricDimensionsToTerraform(struct?: CalculatedSyntheticMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(calculatedSyntheticMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function calculatedSyntheticMetricDimensionsToHclTerraform(struct?: CalculatedSyntheticMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(calculatedSyntheticMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedSyntheticMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedSyntheticMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedSyntheticMetricDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CalculatedSyntheticMetricDimensions | cdktf.IResolvable | undefined) {
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
  private _dimension = new CalculatedSyntheticMetricDimensionsDimensionList(this, "dimension", false);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CalculatedSyntheticMetricDimensionsDimension[] | cdktf.IResolvable) {
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

export class CalculatedSyntheticMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : CalculatedSyntheticMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): CalculatedSyntheticMetricDimensionsOutputReference {
    return new CalculatedSyntheticMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedSyntheticMetricFilter {
  /**
  * Only user actions of the specified type are included in the metric calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#action_type CalculatedSyntheticMetric#action_type}
  */
  readonly actionType?: string;
  /**
  * Only executions finished with the specified error code are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#error_code CalculatedSyntheticMetric#error_code}
  */
  readonly errorCode?: number;
  /**
  * Only the specified browser clickpath event is included in the metric calculation. Specify the Dynatrace entity ID of the event here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#event CalculatedSyntheticMetric#event}
  */
  readonly event?: string;
  /**
  * The execution status of the monitors to be included in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#has_error CalculatedSyntheticMetric#has_error}
  */
  readonly hasError?: boolean | cdktf.IResolvable;
  /**
  * Only executions from the specified location are included in the metric calculation. Specify the Dynatrace entity ID of the location here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#location CalculatedSyntheticMetric#location}
  */
  readonly location?: string;
}

export function calculatedSyntheticMetricFilterToTerraform(struct?: CalculatedSyntheticMetricFilterOutputReference | CalculatedSyntheticMetricFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    error_code: cdktf.numberToTerraform(struct!.errorCode),
    event: cdktf.stringToTerraform(struct!.event),
    has_error: cdktf.booleanToTerraform(struct!.hasError),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function calculatedSyntheticMetricFilterToHclTerraform(struct?: CalculatedSyntheticMetricFilterOutputReference | CalculatedSyntheticMetricFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_code: {
      value: cdktf.numberToHclTerraform(struct!.errorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_error: {
      value: cdktf.booleanToHclTerraform(struct!.hasError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedSyntheticMetricFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedSyntheticMetricFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._errorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCode = this._errorCode;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._hasError !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasError = this._hasError;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedSyntheticMetricFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._errorCode = undefined;
      this._event = undefined;
      this._hasError = undefined;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._errorCode = value.errorCode;
      this._event = value.event;
      this._hasError = value.hasError;
      this._location = value.location;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // error_code - computed: false, optional: true, required: false
  private _errorCode?: number; 
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }
  public set errorCode(value: number) {
    this._errorCode = value;
  }
  public resetErrorCode() {
    this._errorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodeInput() {
    return this._errorCode;
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // has_error - computed: false, optional: true, required: false
  private _hasError?: boolean | cdktf.IResolvable; 
  public get hasError() {
    return this.getBooleanAttribute('has_error');
  }
  public set hasError(value: boolean | cdktf.IResolvable) {
    this._hasError = value;
  }
  public resetHasError() {
    this._hasError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasErrorInput() {
    return this._hasError;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric dynatrace_calculated_synthetic_metric}
*/
export class CalculatedSyntheticMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_calculated_synthetic_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CalculatedSyntheticMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CalculatedSyntheticMetric to import
  * @param importFromId The id of the existing CalculatedSyntheticMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CalculatedSyntheticMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_calculated_synthetic_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_synthetic_metric dynatrace_calculated_synthetic_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CalculatedSyntheticMetricConfig
  */
  public constructor(scope: Construct, id: string, config: CalculatedSyntheticMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_calculated_synthetic_metric',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._metric = config.metric;
    this._metricKey = config.metricKey;
    this._monitorIdentifier = config.monitorIdentifier;
    this._name = config.name;
    this._dimensions.internalValue = config.dimensions;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // monitor_identifier - computed: false, optional: false, required: true
  private _monitorIdentifier?: string; 
  public get monitorIdentifier() {
    return this.getStringAttribute('monitor_identifier');
  }
  public set monitorIdentifier(value: string) {
    this._monitorIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdentifierInput() {
    return this._monitorIdentifier;
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
  private _dimensions = new CalculatedSyntheticMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: CalculatedSyntheticMetricDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new CalculatedSyntheticMetricFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CalculatedSyntheticMetricFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.stringToTerraform(this._metric),
      metric_key: cdktf.stringToTerraform(this._metricKey),
      monitor_identifier: cdktf.stringToTerraform(this._monitorIdentifier),
      name: cdktf.stringToTerraform(this._name),
      dimensions: cdktf.listMapper(calculatedSyntheticMetricDimensionsToTerraform, true)(this._dimensions.internalValue),
      filter: calculatedSyntheticMetricFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
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
      monitor_identifier: {
        value: cdktf.stringToHclTerraform(this._monitorIdentifier),
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
        value: cdktf.listMapperHcl(calculatedSyntheticMetricDimensionsToHclTerraform, true)(this._dimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CalculatedSyntheticMetricDimensionsList",
      },
      filter: {
        value: calculatedSyntheticMetricFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CalculatedSyntheticMetricFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
