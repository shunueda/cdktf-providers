// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZoneDetectionOutboundDetectionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#id DataThunderDdosDstZoneDetectionOutboundDetectionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#zone_name DataThunderDdosDstZoneDetectionOutboundDetectionOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#oper DataThunderDdosDstZoneDetectionOutboundDetectionOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneDetectionOutboundDetectionOperOper;
  /**
  * topk_source_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#topk_source_subnet DataThunderDdosDstZoneDetectionOutboundDetectionOper#topk_source_subnet}
  */
  readonly topkSourceSubnet?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnet;
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#adaptive_threshold DataThunderDdosDstZoneDetectionOutboundDetectionOper#adaptive_threshold}
  */
  readonly adaptiveThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#average DataThunderDdosDstZoneDetectionOutboundDetectionOper#average}
  */
  readonly average?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#indicator_index DataThunderDdosDstZoneDetectionOutboundDetectionOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#indicator_name DataThunderDdosDstZoneDetectionOutboundDetectionOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#maximum DataThunderDdosDstZoneDetectionOutboundDetectionOper#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#minimum DataThunderDdosDstZoneDetectionOutboundDetectionOper#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#non_zero_minimum DataThunderDdosDstZoneDetectionOutboundDetectionOper#non_zero_minimum}
  */
  readonly nonZeroMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#rate DataThunderDdosDstZoneDetectionOutboundDetectionOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_threshold: cdktf.stringToTerraform(struct!.adaptiveThreshold),
    average: cdktf.stringToTerraform(struct!.average),
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    non_zero_minimum: cdktf.stringToTerraform(struct!.nonZeroMinimum),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_threshold: {
      value: cdktf.stringToHclTerraform(struct!.adaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    average: {
      value: cdktf.stringToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_zero_minimum: {
      value: cdktf.stringToHclTerraform(struct!.nonZeroMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveThreshold = this._adaptiveThreshold;
    }
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._nonZeroMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonZeroMinimum = this._nonZeroMinimum;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adaptiveThreshold = undefined;
      this._average = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._nonZeroMinimum = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adaptiveThreshold = value.adaptiveThreshold;
      this._average = value.average;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._nonZeroMinimum = value.nonZeroMinimum;
      this._rate = value.rate;
    }
  }

  // adaptive_threshold - computed: false, optional: true, required: false
  private _adaptiveThreshold?: string; 
  public get adaptiveThreshold() {
    return this.getStringAttribute('adaptive_threshold');
  }
  public set adaptiveThreshold(value: string) {
    this._adaptiveThreshold = value;
  }
  public resetAdaptiveThreshold() {
    this._adaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveThresholdInput() {
    return this._adaptiveThreshold;
  }

  // average - computed: false, optional: true, required: false
  private _average?: string; 
  public get average() {
    return this.getStringAttribute('average');
  }
  public set average(value: string) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // non_zero_minimum - computed: false, optional: true, required: false
  private _nonZeroMinimum?: string; 
  public get nonZeroMinimum() {
    return this.getStringAttribute('non_zero_minimum');
  }
  public set nonZeroMinimum(value: string) {
    this._nonZeroMinimum = value;
  }
  public resetNonZeroMinimum() {
    this._nonZeroMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonZeroMinimumInput() {
    return this._nonZeroMinimum;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#active_time DataThunderDdosDstZoneDetectionOutboundDetectionOper#active_time}
  */
  readonly activeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#anomaly DataThunderDdosDstZoneDetectionOutboundDetectionOper#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#anomaly_timestamp DataThunderDdosDstZoneDetectionOutboundDetectionOper#anomaly_timestamp}
  */
  readonly anomalyTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#data_source DataThunderDdosDstZoneDetectionOutboundDetectionOper#data_source}
  */
  readonly dataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#initial_learning DataThunderDdosDstZoneDetectionOutboundDetectionOper#initial_learning}
  */
  readonly initialLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#location_name DataThunderDdosDstZoneDetectionOutboundDetectionOper#location_name}
  */
  readonly locationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#location_type DataThunderDdosDstZoneDetectionOutboundDetectionOper#location_type}
  */
  readonly locationType?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#indicators DataThunderDdosDstZoneDetectionOutboundDetectionOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStructToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_time: cdktf.numberToTerraform(struct!.activeTime),
    anomaly: cdktf.stringToTerraform(struct!.anomaly),
    anomaly_timestamp: cdktf.stringToTerraform(struct!.anomalyTimestamp),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    initial_learning: cdktf.stringToTerraform(struct!.initialLearning),
    location_name: cdktf.stringToTerraform(struct!.locationName),
    location_type: cdktf.stringToTerraform(struct!.locationType),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_time: {
      value: cdktf.numberToHclTerraform(struct!.activeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    anomaly: {
      value: cdktf.stringToHclTerraform(struct!.anomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anomaly_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.anomalyTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktf.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_learning: {
      value: cdktf.stringToHclTerraform(struct!.initialLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_name: {
      value: cdktf.stringToHclTerraform(struct!.locationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTime = this._activeTime;
    }
    if (this._anomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomaly = this._anomaly;
    }
    if (this._anomalyTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomalyTimestamp = this._anomalyTimestamp;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._initialLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLearning = this._initialLearning;
    }
    if (this._locationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationName = this._locationName;
    }
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeTime = undefined;
      this._anomaly = undefined;
      this._anomalyTimestamp = undefined;
      this._dataSource = undefined;
      this._initialLearning = undefined;
      this._locationName = undefined;
      this._locationType = undefined;
      this._indicators.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeTime = value.activeTime;
      this._anomaly = value.anomaly;
      this._anomalyTimestamp = value.anomalyTimestamp;
      this._dataSource = value.dataSource;
      this._initialLearning = value.initialLearning;
      this._locationName = value.locationName;
      this._locationType = value.locationType;
      this._indicators.internalValue = value.indicators;
    }
  }

  // active_time - computed: false, optional: true, required: false
  private _activeTime?: number; 
  public get activeTime() {
    return this.getNumberAttribute('active_time');
  }
  public set activeTime(value: number) {
    this._activeTime = value;
  }
  public resetActiveTime() {
    this._activeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeInput() {
    return this._activeTime;
  }

  // anomaly - computed: false, optional: true, required: false
  private _anomaly?: string; 
  public get anomaly() {
    return this.getStringAttribute('anomaly');
  }
  public set anomaly(value: string) {
    this._anomaly = value;
  }
  public resetAnomaly() {
    this._anomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyInput() {
    return this._anomaly;
  }

  // anomaly_timestamp - computed: false, optional: true, required: false
  private _anomalyTimestamp?: string; 
  public get anomalyTimestamp() {
    return this.getStringAttribute('anomaly_timestamp');
  }
  public set anomalyTimestamp(value: string) {
    this._anomalyTimestamp = value;
  }
  public resetAnomalyTimestamp() {
    this._anomalyTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyTimestampInput() {
    return this._anomalyTimestamp;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // initial_learning - computed: false, optional: true, required: false
  private _initialLearning?: string; 
  public get initialLearning() {
    return this.getStringAttribute('initial_learning');
  }
  public set initialLearning(value: string) {
    this._initialLearning = value;
  }
  public resetInitialLearning() {
    this._initialLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLearningInput() {
    return this._initialLearning;
  }

  // location_name - computed: false, optional: true, required: false
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  public resetLocationName() {
    this._locationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }

  // location_type - computed: false, optional: true, required: false
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  public resetLocationType() {
    this._locationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStructOutputReference {
    return new DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#discovery_timestamp DataThunderDdosDstZoneDetectionOutboundDetectionOper#discovery_timestamp}
  */
  readonly discoveryTimestamp?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#entry_list DataThunderDdosDstZoneDetectionOutboundDetectionOper#entry_list}
  */
  readonly entryList?: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionOperOperToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperOutputReference | DataThunderDdosDstZoneDetectionOutboundDetectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discovery_timestamp: cdktf.stringToTerraform(struct!.discoveryTimestamp),
    entry_list: cdktf.listMapper(dataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionOperOperToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperOutputReference | DataThunderDdosDstZoneDetectionOutboundDetectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discovery_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.discoveryTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoveryTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryTimestamp = this._discoveryTimestamp;
    }
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._discoveryTimestamp = undefined;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._discoveryTimestamp = value.discoveryTimestamp;
      this._entryList.internalValue = value.entryList;
    }
  }

  // discovery_timestamp - computed: false, optional: true, required: false
  private _discoveryTimestamp?: string; 
  public get discoveryTimestamp() {
    return this.getStringAttribute('discovery_timestamp');
  }
  public set discoveryTimestamp(value: string) {
    this._discoveryTimestamp = value;
  }
  public resetDiscoveryTimestamp() {
    this._discoveryTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTimestampInput() {
    return this._discoveryTimestamp;
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#address DataThunderDdosDstZoneDetectionOutboundDetectionOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#rate DataThunderDdosDstZoneDetectionOutboundDetectionOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnetsToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnetsToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._rate = value.rate;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnetsOutputReference {
    return new DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#indicator_index DataThunderDdosDstZoneDetectionOutboundDetectionOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#indicator_name DataThunderDdosDstZoneDetectionOutboundDetectionOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * source_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#source_subnets DataThunderDdosDstZoneDetectionOutboundDetectionOper#source_subnets}
  */
  readonly sourceSubnets?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnets[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    source_subnets: cdktf.listMapper(dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnetsToTerraform, true)(struct!.sourceSubnets),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_subnets: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnetsToHclTerraform, true)(struct!.sourceSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._sourceSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSubnets = this._sourceSubnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._sourceSubnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._sourceSubnets.internalValue = value.sourceSubnets;
    }
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // source_subnets - computed: false, optional: true, required: false
  private _sourceSubnets = new DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnetsList(this, "source_subnets", false);
  public get sourceSubnets() {
    return this._sourceSubnets;
  }
  public putSourceSubnets(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsSourceSubnets[] | cdktf.IResolvable) {
    this._sourceSubnets.internalValue = value;
  }
  public resetSourceSubnets() {
    this._sourceSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSubnetsInput() {
    return this._sourceSubnets.internalValue;
  }
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#location_name DataThunderDdosDstZoneDetectionOutboundDetectionOper#location_name}
  */
  readonly locationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#location_type DataThunderDdosDstZoneDetectionOutboundDetectionOper#location_type}
  */
  readonly locationType?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#indicators DataThunderDdosDstZoneDetectionOutboundDetectionOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStructToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_name: cdktf.stringToTerraform(struct!.locationName),
    location_type: cdktf.stringToTerraform(struct!.locationType),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_name: {
      value: cdktf.stringToHclTerraform(struct!.locationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationName = this._locationName;
    }
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locationName = undefined;
      this._locationType = undefined;
      this._indicators.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locationName = value.locationName;
      this._locationType = value.locationType;
      this._indicators.internalValue = value.indicators;
    }
  }

  // location_name - computed: false, optional: true, required: false
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  public resetLocationName() {
    this._locationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }

  // location_type - computed: false, optional: true, required: false
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  public resetLocationType() {
    this._locationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStructOutputReference {
    return new DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOper {
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#entry_list DataThunderDdosDstZoneDetectionOutboundDetectionOper#entry_list}
  */
  readonly entryList?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperOutputReference | DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_list: cdktf.listMapper(dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperOutputReference | DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryList.internalValue = value.entryList;
    }
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnet {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#oper DataThunderDdosDstZoneDetectionOutboundDetectionOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOper;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOutputReference | DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOutputReference | DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper thunder_ddos_dst_zone_detection_outbound_detection_oper}
*/
export class DataThunderDdosDstZoneDetectionOutboundDetectionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_detection_outbound_detection_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZoneDetectionOutboundDetectionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZoneDetectionOutboundDetectionOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZoneDetectionOutboundDetectionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZoneDetectionOutboundDetectionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_detection_outbound_detection_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_oper thunder_ddos_dst_zone_detection_outbound_detection_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZoneDetectionOutboundDetectionOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZoneDetectionOutboundDetectionOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_detection_outbound_detection_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._zoneName = config.zoneName;
    this._oper.internalValue = config.oper;
    this._topkSourceSubnet.internalValue = config.topkSourceSubnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneDetectionOutboundDetectionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // topk_source_subnet - computed: false, optional: true, required: false
  private _topkSourceSubnet = new DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetOutputReference(this, "topk_source_subnet");
  public get topkSourceSubnet() {
    return this._topkSourceSubnet;
  }
  public putTopkSourceSubnet(value: DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnet) {
    this._topkSourceSubnet.internalValue = value;
  }
  public resetTopkSourceSubnet() {
    this._topkSourceSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourceSubnetInput() {
    return this._topkSourceSubnet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderDdosDstZoneDetectionOutboundDetectionOperOperToTerraform(this._oper.internalValue),
      topk_source_subnet: dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetToTerraform(this._topkSourceSubnet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosDstZoneDetectionOutboundDetectionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionOperOperList",
      },
      topk_source_subnet: {
        value: dataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetToHclTerraform(this._topkSourceSubnet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionOperTopkSourceSubnetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
