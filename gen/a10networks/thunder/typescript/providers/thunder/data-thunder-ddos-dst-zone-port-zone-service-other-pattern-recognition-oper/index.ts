// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#id DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortOther
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#port_other DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#port_other}
  */
  readonly portOther: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#protocol DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#protocol}
  */
  readonly protocol: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#zone_name DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#oper DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOper;
}
export interface DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#filter_desc DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#filter_desc}
  */
  readonly filterDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#filter_enabled DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#filter_enabled}
  */
  readonly filterEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#filter_expr DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#filter_expr}
  */
  readonly filterExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#hardware_filter DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#hardware_filter}
  */
  readonly hardwareFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#processing_unit DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#processing_unit}
  */
  readonly processingUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#sample_ratio DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#sample_ratio}
  */
  readonly sampleRatio?: number;
}

export function dataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStructToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_desc: cdktf.stringToTerraform(struct!.filterDesc),
    filter_enabled: cdktf.numberToTerraform(struct!.filterEnabled),
    filter_expr: cdktf.stringToTerraform(struct!.filterExpr),
    hardware_filter: cdktf.numberToTerraform(struct!.hardwareFilter),
    processing_unit: cdktf.stringToTerraform(struct!.processingUnit),
    sample_ratio: cdktf.numberToTerraform(struct!.sampleRatio),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStructToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_desc: {
      value: cdktf.stringToHclTerraform(struct!.filterDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_enabled: {
      value: cdktf.numberToHclTerraform(struct!.filterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_expr: {
      value: cdktf.stringToHclTerraform(struct!.filterExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware_filter: {
      value: cdktf.numberToHclTerraform(struct!.hardwareFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_unit: {
      value: cdktf.stringToHclTerraform(struct!.processingUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_ratio: {
      value: cdktf.numberToHclTerraform(struct!.sampleRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDesc = this._filterDesc;
    }
    if (this._filterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEnabled = this._filterEnabled;
    }
    if (this._filterExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExpr = this._filterExpr;
    }
    if (this._hardwareFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareFilter = this._hardwareFilter;
    }
    if (this._processingUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingUnit = this._processingUnit;
    }
    if (this._sampleRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRatio = this._sampleRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterDesc = undefined;
      this._filterEnabled = undefined;
      this._filterExpr = undefined;
      this._hardwareFilter = undefined;
      this._processingUnit = undefined;
      this._sampleRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterDesc = value.filterDesc;
      this._filterEnabled = value.filterEnabled;
      this._filterExpr = value.filterExpr;
      this._hardwareFilter = value.hardwareFilter;
      this._processingUnit = value.processingUnit;
      this._sampleRatio = value.sampleRatio;
    }
  }

  // filter_desc - computed: false, optional: true, required: false
  private _filterDesc?: string; 
  public get filterDesc() {
    return this.getStringAttribute('filter_desc');
  }
  public set filterDesc(value: string) {
    this._filterDesc = value;
  }
  public resetFilterDesc() {
    this._filterDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDescInput() {
    return this._filterDesc;
  }

  // filter_enabled - computed: false, optional: true, required: false
  private _filterEnabled?: number; 
  public get filterEnabled() {
    return this.getNumberAttribute('filter_enabled');
  }
  public set filterEnabled(value: number) {
    this._filterEnabled = value;
  }
  public resetFilterEnabled() {
    this._filterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEnabledInput() {
    return this._filterEnabled;
  }

  // filter_expr - computed: false, optional: true, required: false
  private _filterExpr?: string; 
  public get filterExpr() {
    return this.getStringAttribute('filter_expr');
  }
  public set filterExpr(value: string) {
    this._filterExpr = value;
  }
  public resetFilterExpr() {
    this._filterExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExprInput() {
    return this._filterExpr;
  }

  // hardware_filter - computed: false, optional: true, required: false
  private _hardwareFilter?: number; 
  public get hardwareFilter() {
    return this.getNumberAttribute('hardware_filter');
  }
  public set hardwareFilter(value: number) {
    this._hardwareFilter = value;
  }
  public resetHardwareFilter() {
    this._hardwareFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareFilterInput() {
    return this._hardwareFilter;
  }

  // processing_unit - computed: false, optional: true, required: false
  private _processingUnit?: string; 
  public get processingUnit() {
    return this.getStringAttribute('processing_unit');
  }
  public set processingUnit(value: string) {
    this._processingUnit = value;
  }
  public resetProcessingUnit() {
    this._processingUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingUnitInput() {
    return this._processingUnit;
  }

  // sample_ratio - computed: false, optional: true, required: false
  private _sampleRatio?: number; 
  public get sampleRatio() {
    return this.getNumberAttribute('sample_ratio');
  }
  public set sampleRatio(value: number) {
    this._sampleRatio = value;
  }
  public resetSampleRatio() {
    this._sampleRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRatioInput() {
    return this._sampleRatio;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStructOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#filter_count DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#filter_count}
  */
  readonly filterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#filter_threshold DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#peace_pkt_count DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#peace_pkt_count}
  */
  readonly peacePktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#state DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#timestamp DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#war_pkt_count DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#war_pkt_count}
  */
  readonly warPktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#war_pkt_percentage DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#war_pkt_percentage}
  */
  readonly warPktPercentage?: number;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#filter_list DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper#filter_list}
  */
  readonly filterList?: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperOutputReference | DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_count: cdktf.numberToTerraform(struct!.filterCount),
    filter_threshold: cdktf.numberToTerraform(struct!.filterThreshold),
    peace_pkt_count: cdktf.numberToTerraform(struct!.peacePktCount),
    state: cdktf.stringToTerraform(struct!.state),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    war_pkt_count: cdktf.numberToTerraform(struct!.warPktCount),
    war_pkt_percentage: cdktf.numberToTerraform(struct!.warPktPercentage),
    filter_list: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStructToTerraform, true)(struct!.filterList),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperOutputReference | DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_count: {
      value: cdktf.numberToHclTerraform(struct!.filterCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peace_pkt_count: {
      value: cdktf.numberToHclTerraform(struct!.peacePktCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    war_pkt_count: {
      value: cdktf.numberToHclTerraform(struct!.warPktCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    war_pkt_percentage: {
      value: cdktf.numberToHclTerraform(struct!.warPktPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStructToHclTerraform, true)(struct!.filterList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCount = this._filterCount;
    }
    if (this._filterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterThreshold = this._filterThreshold;
    }
    if (this._peacePktCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.peacePktCount = this._peacePktCount;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._warPktCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.warPktCount = this._warPktCount;
    }
    if (this._warPktPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warPktPercentage = this._warPktPercentage;
    }
    if (this._filterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterCount = undefined;
      this._filterThreshold = undefined;
      this._peacePktCount = undefined;
      this._state = undefined;
      this._timestamp = undefined;
      this._warPktCount = undefined;
      this._warPktPercentage = undefined;
      this._filterList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterCount = value.filterCount;
      this._filterThreshold = value.filterThreshold;
      this._peacePktCount = value.peacePktCount;
      this._state = value.state;
      this._timestamp = value.timestamp;
      this._warPktCount = value.warPktCount;
      this._warPktPercentage = value.warPktPercentage;
      this._filterList.internalValue = value.filterList;
    }
  }

  // filter_count - computed: false, optional: true, required: false
  private _filterCount?: number; 
  public get filterCount() {
    return this.getNumberAttribute('filter_count');
  }
  public set filterCount(value: number) {
    this._filterCount = value;
  }
  public resetFilterCount() {
    this._filterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCountInput() {
    return this._filterCount;
  }

  // filter_threshold - computed: false, optional: true, required: false
  private _filterThreshold?: number; 
  public get filterThreshold() {
    return this.getNumberAttribute('filter_threshold');
  }
  public set filterThreshold(value: number) {
    this._filterThreshold = value;
  }
  public resetFilterThreshold() {
    this._filterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterThresholdInput() {
    return this._filterThreshold;
  }

  // peace_pkt_count - computed: false, optional: true, required: false
  private _peacePktCount?: number; 
  public get peacePktCount() {
    return this.getNumberAttribute('peace_pkt_count');
  }
  public set peacePktCount(value: number) {
    this._peacePktCount = value;
  }
  public resetPeacePktCount() {
    this._peacePktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peacePktCountInput() {
    return this._peacePktCount;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // war_pkt_count - computed: false, optional: true, required: false
  private _warPktCount?: number; 
  public get warPktCount() {
    return this.getNumberAttribute('war_pkt_count');
  }
  public set warPktCount(value: number) {
    this._warPktCount = value;
  }
  public resetWarPktCount() {
    this._warPktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warPktCountInput() {
    return this._warPktCount;
  }

  // war_pkt_percentage - computed: false, optional: true, required: false
  private _warPktPercentage?: number; 
  public get warPktPercentage() {
    return this.getNumberAttribute('war_pkt_percentage');
  }
  public set warPktPercentage(value: number) {
    this._warPktPercentage = value;
  }
  public resetWarPktPercentage() {
    this._warPktPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warPktPercentageInput() {
    return this._warPktPercentage;
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper thunder_ddos_dst_zone_port_zone_service_other_pattern_recognition_oper}
*/
export class DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_zone_service_other_pattern_recognition_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_zone_service_other_pattern_recognition_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_other_pattern_recognition_oper thunder_ddos_dst_zone_port_zone_service_other_pattern_recognition_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_zone_service_other_pattern_recognition_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._portOther = config.portOther;
    this._protocol = config.protocol;
    this._zoneName = config.zoneName;
    this._oper.internalValue = config.oper;
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

  // port_other - computed: false, optional: false, required: true
  private _portOther?: string; 
  public get portOther() {
    return this.getStringAttribute('port_other');
  }
  public set portOther(value: string) {
    this._portOther = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portOtherInput() {
    return this._portOther;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
  private _oper = new DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_other: cdktf.stringToTerraform(this._portOther),
      protocol: cdktf.stringToTerraform(this._protocol),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperToTerraform(this._oper.internalValue),
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
      port_other: {
        value: cdktf.stringToHclTerraform(this._portOther),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
        value: dataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOtherPatternRecognitionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
