// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CalculatedMobileMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Dynatrace entity ID of the application to which the metric belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#app_identifier CalculatedMobileMetric#app_identifier}
  */
  readonly appIdentifier: string;
  /**
  * Descriptor of a calculated mobile/custom app metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#description CalculatedMobileMetric#description}
  */
  readonly description?: string;
  /**
  * The metric is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#enabled CalculatedMobileMetric#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#id CalculatedMobileMetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique key of the calculated mobile/custom app metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#metric_key CalculatedMobileMetric#metric_key}
  */
  readonly metricKey: string;
  /**
  * The type of the metric. Possible values: [ REPORTED_ERROR_COUNT, USER_ACTION_DURATION, WEB_REQUEST_COUNT, WEB_REQUEST_ERROR_COUNT ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#metric_type CalculatedMobileMetric#metric_type}
  */
  readonly metricType: string;
  /**
  * The displayed name of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#name CalculatedMobileMetric#name}
  */
  readonly name: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#dimensions CalculatedMobileMetric#dimensions}
  */
  readonly dimensions?: CalculatedMobileMetricDimensions[] | cdktf.IResolvable;
  /**
  * user_action_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#user_action_filter CalculatedMobileMetric#user_action_filter}
  */
  readonly userActionFilter?: CalculatedMobileMetricUserActionFilter;
}
export interface CalculatedMobileMetricDimensionsDimension {
  /**
  * The dimension of the metric. Possible values are `ApdexType`, `Browser`, `ErrorContext`, `ErrorOrigin`, `ErrorType`, `GeoLocation`, `StringProperty`, `UserActionType`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#dimension CalculatedMobileMetric#dimension}
  */
  readonly dimension: string;
  /**
  * The number of top values to be calculated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#top_x CalculatedMobileMetric#top_x}
  */
  readonly topX: number;
}

export function calculatedMobileMetricDimensionsDimensionToTerraform(struct?: CalculatedMobileMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.stringToTerraform(struct!.dimension),
    top_x: cdktf.numberToTerraform(struct!.topX),
  }
}


export function calculatedMobileMetricDimensionsDimensionToHclTerraform(struct?: CalculatedMobileMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class CalculatedMobileMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedMobileMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CalculatedMobileMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class CalculatedMobileMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : CalculatedMobileMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): CalculatedMobileMetricDimensionsDimensionOutputReference {
    return new CalculatedMobileMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedMobileMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#dimension CalculatedMobileMetric#dimension}
  */
  readonly dimension?: CalculatedMobileMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function calculatedMobileMetricDimensionsToTerraform(struct?: CalculatedMobileMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(calculatedMobileMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function calculatedMobileMetricDimensionsToHclTerraform(struct?: CalculatedMobileMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(calculatedMobileMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedMobileMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedMobileMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedMobileMetricDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CalculatedMobileMetricDimensions | cdktf.IResolvable | undefined) {
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
  private _dimension = new CalculatedMobileMetricDimensionsDimensionList(this, "dimension", false);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: CalculatedMobileMetricDimensionsDimension[] | cdktf.IResolvable) {
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

export class CalculatedMobileMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : CalculatedMobileMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): CalculatedMobileMetricDimensionsOutputReference {
    return new CalculatedMobileMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedMobileMetricUserActionFilter {
  /**
  * Only actions with a duration more than or equal to this value (in milliseconds) are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#action_duration_from_milliseconds CalculatedMobileMetric#action_duration_from_milliseconds}
  */
  readonly actionDurationFromMilliseconds?: number;
  /**
  * Only actions with a duration less than or equal to this value (in milliseconds) are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#action_duration_to_milliseconds CalculatedMobileMetric#action_duration_to_milliseconds}
  */
  readonly actionDurationToMilliseconds?: number;
  /**
  * Only actions with the specified Apdex score are included in the metric calculation. Possible values: [ Frustrated, Satisfied, Tolerating, Unknown ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#apdex CalculatedMobileMetric#apdex}
  */
  readonly apdex?: string;
  /**
  * Only actions coming from this app version are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#app_version CalculatedMobileMetric#app_version}
  */
  readonly appVersion?: string;
  /**
  * Only actions coming from this carrier type are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#carrier CalculatedMobileMetric#carrier}
  */
  readonly carrier?: string;
  /**
  * Only actions of users from this city are included in the metric calculation. Specify geolocation ID here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#city CalculatedMobileMetric#city}
  */
  readonly city?: string;
  /**
  * Only actions coming from this connection type are included in the metric calculation. Possible values: [ LAN, MOBILE, OFFLINE, UNKNOWN, WIFI ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#connection_type CalculatedMobileMetric#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Only actions of users from this continent are included in the metric calculation. Specify geolocation ID here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#continent CalculatedMobileMetric#continent}
  */
  readonly continent?: string;
  /**
  * Only actions of users from this country are included in the metric calculation. Specify geolocation ID here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#country CalculatedMobileMetric#country}
  */
  readonly country?: string;
  /**
  * Only actions coming from this app version are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#device CalculatedMobileMetric#device}
  */
  readonly device?: string;
  /**
  * The request error status of the actions to be included in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#has_http_error CalculatedMobileMetric#has_http_error}
  */
  readonly hasHttpError?: boolean | cdktf.IResolvable;
  /**
  * The error status of the actions to be included in the metric calculation: `true` or `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#has_reported_error CalculatedMobileMetric#has_reported_error}
  */
  readonly hasReportedError?: boolean | cdktf.IResolvable;
  /**
  * Only actions coming from this internet service provider are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#isp CalculatedMobileMetric#isp}
  */
  readonly isp?: string;
  /**
  * Only actions coming from devices of this manufacturer are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#manufacturer CalculatedMobileMetric#manufacturer}
  */
  readonly manufacturer?: string;
  /**
  * Filter by network technology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#network_technology CalculatedMobileMetric#network_technology}
  */
  readonly networkTechnology?: string;
  /**
  * Only actions coming from devices with this display orientation are included in the metric calculation. Possible values: [ LANDSCAPE, PORTRAIT, UNKNOWN ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#orientation CalculatedMobileMetric#orientation}
  */
  readonly orientation?: string;
  /**
  * Only actions coming from this OS family are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#os_family CalculatedMobileMetric#os_family}
  */
  readonly osFamily?: string;
  /**
  * Only actions coming from this OS version are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#os_version CalculatedMobileMetric#os_version}
  */
  readonly osVersion?: string;
  /**
  * Only actions of users from this region are included in the metric calculation. Specify geolocation ID here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#region CalculatedMobileMetric#region}
  */
  readonly region?: string;
  /**
  * Only actions coming from devices with this display resolution are included in the metric calculation. Possible values: [ CGA, DCI2K, DCI4K, DVGA, FHD, FWVGA, FWXGA, GHDPlus, HD, HQVGA, HQVGA2, HSXGA, HUXGA, HVGA, HXGA, NTSC, PAL, QHD, QQVGA, QSXGA, QUXGA, QVGA, QWXGA, QXGA, SVGA, SXGA, SXGAMinus, SXGAPlus, UGA, UHD16K, UHD4K, UHD8K, UHDPlus, UNKNOWN, UWQHD, UXGA, VGA, WHSXGA, WHUXGA, WHXGA, WQSXGA, WQUXGA, WQVGA, WQVGA2, WQVGA3, WQXGA, WQXGA2, WSVGA, WSVGA2, WSXGA, WSXGAPlus, WUXGA, WVGA, WVGA2, WXGA, WXGA2, WXGA3, WXGAPlus, XGA, XGAPLUS, _1280x854, nHD, qHD ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#resolution CalculatedMobileMetric#resolution}
  */
  readonly resolution?: string;
  /**
  * Only actions with this name are included in the metric calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#user_action_name CalculatedMobileMetric#user_action_name}
  */
  readonly userActionName?: string;
}

export function calculatedMobileMetricUserActionFilterToTerraform(struct?: CalculatedMobileMetricUserActionFilterOutputReference | CalculatedMobileMetricUserActionFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_duration_from_milliseconds: cdktf.numberToTerraform(struct!.actionDurationFromMilliseconds),
    action_duration_to_milliseconds: cdktf.numberToTerraform(struct!.actionDurationToMilliseconds),
    apdex: cdktf.stringToTerraform(struct!.apdex),
    app_version: cdktf.stringToTerraform(struct!.appVersion),
    carrier: cdktf.stringToTerraform(struct!.carrier),
    city: cdktf.stringToTerraform(struct!.city),
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    continent: cdktf.stringToTerraform(struct!.continent),
    country: cdktf.stringToTerraform(struct!.country),
    device: cdktf.stringToTerraform(struct!.device),
    has_http_error: cdktf.booleanToTerraform(struct!.hasHttpError),
    has_reported_error: cdktf.booleanToTerraform(struct!.hasReportedError),
    isp: cdktf.stringToTerraform(struct!.isp),
    manufacturer: cdktf.stringToTerraform(struct!.manufacturer),
    network_technology: cdktf.stringToTerraform(struct!.networkTechnology),
    orientation: cdktf.stringToTerraform(struct!.orientation),
    os_family: cdktf.stringToTerraform(struct!.osFamily),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
    region: cdktf.stringToTerraform(struct!.region),
    resolution: cdktf.stringToTerraform(struct!.resolution),
    user_action_name: cdktf.stringToTerraform(struct!.userActionName),
  }
}


export function calculatedMobileMetricUserActionFilterToHclTerraform(struct?: CalculatedMobileMetricUserActionFilterOutputReference | CalculatedMobileMetricUserActionFilter): any {
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
    app_version: {
      value: cdktf.stringToHclTerraform(struct!.appVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    carrier: {
      value: cdktf.stringToHclTerraform(struct!.carrier),
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
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
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
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_http_error: {
      value: cdktf.booleanToHclTerraform(struct!.hasHttpError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    has_reported_error: {
      value: cdktf.booleanToHclTerraform(struct!.hasReportedError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    isp: {
      value: cdktf.stringToHclTerraform(struct!.isp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manufacturer: {
      value: cdktf.stringToHclTerraform(struct!.manufacturer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_technology: {
      value: cdktf.stringToHclTerraform(struct!.networkTechnology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orientation: {
      value: cdktf.stringToHclTerraform(struct!.orientation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolution: {
      value: cdktf.stringToHclTerraform(struct!.resolution),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedMobileMetricUserActionFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedMobileMetricUserActionFilter | undefined {
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
    if (this._appVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.appVersion = this._appVersion;
    }
    if (this._carrier !== undefined) {
      hasAnyValues = true;
      internalValueResult.carrier = this._carrier;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._continent !== undefined) {
      hasAnyValues = true;
      internalValueResult.continent = this._continent;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._hasHttpError !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasHttpError = this._hasHttpError;
    }
    if (this._hasReportedError !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasReportedError = this._hasReportedError;
    }
    if (this._isp !== undefined) {
      hasAnyValues = true;
      internalValueResult.isp = this._isp;
    }
    if (this._manufacturer !== undefined) {
      hasAnyValues = true;
      internalValueResult.manufacturer = this._manufacturer;
    }
    if (this._networkTechnology !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTechnology = this._networkTechnology;
    }
    if (this._orientation !== undefined) {
      hasAnyValues = true;
      internalValueResult.orientation = this._orientation;
    }
    if (this._osFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.osFamily = this._osFamily;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution;
    }
    if (this._userActionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userActionName = this._userActionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedMobileMetricUserActionFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionDurationFromMilliseconds = undefined;
      this._actionDurationToMilliseconds = undefined;
      this._apdex = undefined;
      this._appVersion = undefined;
      this._carrier = undefined;
      this._city = undefined;
      this._connectionType = undefined;
      this._continent = undefined;
      this._country = undefined;
      this._device = undefined;
      this._hasHttpError = undefined;
      this._hasReportedError = undefined;
      this._isp = undefined;
      this._manufacturer = undefined;
      this._networkTechnology = undefined;
      this._orientation = undefined;
      this._osFamily = undefined;
      this._osVersion = undefined;
      this._region = undefined;
      this._resolution = undefined;
      this._userActionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionDurationFromMilliseconds = value.actionDurationFromMilliseconds;
      this._actionDurationToMilliseconds = value.actionDurationToMilliseconds;
      this._apdex = value.apdex;
      this._appVersion = value.appVersion;
      this._carrier = value.carrier;
      this._city = value.city;
      this._connectionType = value.connectionType;
      this._continent = value.continent;
      this._country = value.country;
      this._device = value.device;
      this._hasHttpError = value.hasHttpError;
      this._hasReportedError = value.hasReportedError;
      this._isp = value.isp;
      this._manufacturer = value.manufacturer;
      this._networkTechnology = value.networkTechnology;
      this._orientation = value.orientation;
      this._osFamily = value.osFamily;
      this._osVersion = value.osVersion;
      this._region = value.region;
      this._resolution = value.resolution;
      this._userActionName = value.userActionName;
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

  // app_version - computed: false, optional: true, required: false
  private _appVersion?: string; 
  public get appVersion() {
    return this.getStringAttribute('app_version');
  }
  public set appVersion(value: string) {
    this._appVersion = value;
  }
  public resetAppVersion() {
    this._appVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appVersionInput() {
    return this._appVersion;
  }

  // carrier - computed: false, optional: true, required: false
  private _carrier?: string; 
  public get carrier() {
    return this.getStringAttribute('carrier');
  }
  public set carrier(value: string) {
    this._carrier = value;
  }
  public resetCarrier() {
    this._carrier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierInput() {
    return this._carrier;
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

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // has_http_error - computed: false, optional: true, required: false
  private _hasHttpError?: boolean | cdktf.IResolvable; 
  public get hasHttpError() {
    return this.getBooleanAttribute('has_http_error');
  }
  public set hasHttpError(value: boolean | cdktf.IResolvable) {
    this._hasHttpError = value;
  }
  public resetHasHttpError() {
    this._hasHttpError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasHttpErrorInput() {
    return this._hasHttpError;
  }

  // has_reported_error - computed: false, optional: true, required: false
  private _hasReportedError?: boolean | cdktf.IResolvable; 
  public get hasReportedError() {
    return this.getBooleanAttribute('has_reported_error');
  }
  public set hasReportedError(value: boolean | cdktf.IResolvable) {
    this._hasReportedError = value;
  }
  public resetHasReportedError() {
    this._hasReportedError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasReportedErrorInput() {
    return this._hasReportedError;
  }

  // isp - computed: false, optional: true, required: false
  private _isp?: string; 
  public get isp() {
    return this.getStringAttribute('isp');
  }
  public set isp(value: string) {
    this._isp = value;
  }
  public resetIsp() {
    this._isp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ispInput() {
    return this._isp;
  }

  // manufacturer - computed: false, optional: true, required: false
  private _manufacturer?: string; 
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }
  public set manufacturer(value: string) {
    this._manufacturer = value;
  }
  public resetManufacturer() {
    this._manufacturer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerInput() {
    return this._manufacturer;
  }

  // network_technology - computed: false, optional: true, required: false
  private _networkTechnology?: string; 
  public get networkTechnology() {
    return this.getStringAttribute('network_technology');
  }
  public set networkTechnology(value: string) {
    this._networkTechnology = value;
  }
  public resetNetworkTechnology() {
    this._networkTechnology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTechnologyInput() {
    return this._networkTechnology;
  }

  // orientation - computed: false, optional: true, required: false
  private _orientation?: string; 
  public get orientation() {
    return this.getStringAttribute('orientation');
  }
  public set orientation(value: string) {
    this._orientation = value;
  }
  public resetOrientation() {
    this._orientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orientationInput() {
    return this._orientation;
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

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric dynatrace_calculated_mobile_metric}
*/
export class CalculatedMobileMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_calculated_mobile_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CalculatedMobileMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CalculatedMobileMetric to import
  * @param importFromId The id of the existing CalculatedMobileMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CalculatedMobileMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_calculated_mobile_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/calculated_mobile_metric dynatrace_calculated_mobile_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CalculatedMobileMetricConfig
  */
  public constructor(scope: Construct, id: string, config: CalculatedMobileMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_calculated_mobile_metric',
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
    this._appIdentifier = config.appIdentifier;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._metricKey = config.metricKey;
    this._metricType = config.metricType;
    this._name = config.name;
    this._dimensions.internalValue = config.dimensions;
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

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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
  private _dimensions = new CalculatedMobileMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: CalculatedMobileMetricDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // user_action_filter - computed: false, optional: true, required: false
  private _userActionFilter = new CalculatedMobileMetricUserActionFilterOutputReference(this, "user_action_filter");
  public get userActionFilter() {
    return this._userActionFilter;
  }
  public putUserActionFilter(value: CalculatedMobileMetricUserActionFilter) {
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
      metric_type: cdktf.stringToTerraform(this._metricType),
      name: cdktf.stringToTerraform(this._name),
      dimensions: cdktf.listMapper(calculatedMobileMetricDimensionsToTerraform, true)(this._dimensions.internalValue),
      user_action_filter: calculatedMobileMetricUserActionFilterToTerraform(this._userActionFilter.internalValue),
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
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
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
        value: cdktf.listMapperHcl(calculatedMobileMetricDimensionsToHclTerraform, true)(this._dimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CalculatedMobileMetricDimensionsList",
      },
      user_action_filter: {
        value: calculatedMobileMetricUserActionFilterToHclTerraform(this._userActionFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CalculatedMobileMetricUserActionFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
