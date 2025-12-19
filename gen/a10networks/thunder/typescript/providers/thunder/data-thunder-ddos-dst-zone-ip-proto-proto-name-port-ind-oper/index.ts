// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZoneIpProtoProtoNamePortIndOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#id DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#protocol DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#protocol}
  */
  readonly protocol: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#zone_name DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#oper DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOper;
}
export interface DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#level DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#source_threshold DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#source_threshold}
  */
  readonly sourceThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#zone_threshold DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#zone_threshold}
  */
  readonly zoneThreshold?: string;
}

export function dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfgToTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.numberToTerraform(struct!.level),
    source_threshold: cdktf.stringToTerraform(struct!.sourceThreshold),
    zone_threshold: cdktf.stringToTerraform(struct!.zoneThreshold),
  }
}


export function dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfgToHclTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_threshold: {
      value: cdktf.stringToHclTerraform(struct!.sourceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_threshold: {
      value: cdktf.stringToHclTerraform(struct!.zoneThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._sourceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceThreshold = this._sourceThreshold;
    }
    if (this._zoneThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThreshold = this._zoneThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._sourceThreshold = undefined;
      this._zoneThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._sourceThreshold = value.sourceThreshold;
      this._zoneThreshold = value.zoneThreshold;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // source_threshold - computed: false, optional: true, required: false
  private _sourceThreshold?: string; 
  public get sourceThreshold() {
    return this.getStringAttribute('source_threshold');
  }
  public set sourceThreshold(value: string) {
    this._sourceThreshold = value;
  }
  public resetSourceThreshold() {
    this._sourceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceThresholdInput() {
    return this._sourceThreshold;
  }

  // zone_threshold - computed: false, optional: true, required: false
  private _zoneThreshold?: string; 
  public get zoneThreshold() {
    return this.getStringAttribute('zone_threshold');
  }
  public set zoneThreshold(value: string) {
    this._zoneThreshold = value;
  }
  public resetZoneThreshold() {
    this._zoneThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdInput() {
    return this._zoneThreshold;
  }
}

export class DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfgList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfg[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfgOutputReference {
    return new DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#indicator_index DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#indicator_name DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#rate DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#rate}
  */
  readonly rate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#score DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#score}
  */
  readonly score?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#src_maximum DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#src_maximum}
  */
  readonly srcMaximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#zone_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#zone_adaptive_threshold}
  */
  readonly zoneAdaptiveThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#zone_average DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#zone_average}
  */
  readonly zoneAverage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#zone_maximum DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#zone_maximum}
  */
  readonly zoneMaximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#zone_minimum DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#zone_minimum}
  */
  readonly zoneMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#zone_non_zero_minimum DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#zone_non_zero_minimum}
  */
  readonly zoneNonZeroMinimum?: string;
  /**
  * indicator_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#indicator_cfg DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#indicator_cfg}
  */
  readonly indicatorCfg?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfg[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsToTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    rate: cdktf.stringToTerraform(struct!.rate),
    score: cdktf.stringToTerraform(struct!.score),
    src_maximum: cdktf.stringToTerraform(struct!.srcMaximum),
    zone_adaptive_threshold: cdktf.stringToTerraform(struct!.zoneAdaptiveThreshold),
    zone_average: cdktf.stringToTerraform(struct!.zoneAverage),
    zone_maximum: cdktf.stringToTerraform(struct!.zoneMaximum),
    zone_minimum: cdktf.stringToTerraform(struct!.zoneMinimum),
    zone_non_zero_minimum: cdktf.stringToTerraform(struct!.zoneNonZeroMinimum),
    indicator_cfg: cdktf.listMapper(dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfgToTerraform, true)(struct!.indicatorCfg),
  }
}


export function dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicators | cdktf.IResolvable): any {
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
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_maximum: {
      value: cdktf.stringToHclTerraform(struct!.srcMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_adaptive_threshold: {
      value: cdktf.stringToHclTerraform(struct!.zoneAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_average: {
      value: cdktf.stringToHclTerraform(struct!.zoneAverage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_maximum: {
      value: cdktf.stringToHclTerraform(struct!.zoneMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_minimum: {
      value: cdktf.stringToHclTerraform(struct!.zoneMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_non_zero_minimum: {
      value: cdktf.stringToHclTerraform(struct!.zoneNonZeroMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_cfg: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfgToHclTerraform, true)(struct!.indicatorCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicators | cdktf.IResolvable | undefined {
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
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._srcMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMaximum = this._srcMaximum;
    }
    if (this._zoneAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAdaptiveThreshold = this._zoneAdaptiveThreshold;
    }
    if (this._zoneAverage !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAverage = this._zoneAverage;
    }
    if (this._zoneMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneMaximum = this._zoneMaximum;
    }
    if (this._zoneMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneMinimum = this._zoneMinimum;
    }
    if (this._zoneNonZeroMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneNonZeroMinimum = this._zoneNonZeroMinimum;
    }
    if (this._indicatorCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorCfg = this._indicatorCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._rate = undefined;
      this._score = undefined;
      this._srcMaximum = undefined;
      this._zoneAdaptiveThreshold = undefined;
      this._zoneAverage = undefined;
      this._zoneMaximum = undefined;
      this._zoneMinimum = undefined;
      this._zoneNonZeroMinimum = undefined;
      this._indicatorCfg.internalValue = undefined;
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
      this._rate = value.rate;
      this._score = value.score;
      this._srcMaximum = value.srcMaximum;
      this._zoneAdaptiveThreshold = value.zoneAdaptiveThreshold;
      this._zoneAverage = value.zoneAverage;
      this._zoneMaximum = value.zoneMaximum;
      this._zoneMinimum = value.zoneMinimum;
      this._zoneNonZeroMinimum = value.zoneNonZeroMinimum;
      this._indicatorCfg.internalValue = value.indicatorCfg;
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

  // score - computed: false, optional: true, required: false
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // src_maximum - computed: false, optional: true, required: false
  private _srcMaximum?: string; 
  public get srcMaximum() {
    return this.getStringAttribute('src_maximum');
  }
  public set srcMaximum(value: string) {
    this._srcMaximum = value;
  }
  public resetSrcMaximum() {
    this._srcMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMaximumInput() {
    return this._srcMaximum;
  }

  // zone_adaptive_threshold - computed: false, optional: true, required: false
  private _zoneAdaptiveThreshold?: string; 
  public get zoneAdaptiveThreshold() {
    return this.getStringAttribute('zone_adaptive_threshold');
  }
  public set zoneAdaptiveThreshold(value: string) {
    this._zoneAdaptiveThreshold = value;
  }
  public resetZoneAdaptiveThreshold() {
    this._zoneAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAdaptiveThresholdInput() {
    return this._zoneAdaptiveThreshold;
  }

  // zone_average - computed: false, optional: true, required: false
  private _zoneAverage?: string; 
  public get zoneAverage() {
    return this.getStringAttribute('zone_average');
  }
  public set zoneAverage(value: string) {
    this._zoneAverage = value;
  }
  public resetZoneAverage() {
    this._zoneAverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAverageInput() {
    return this._zoneAverage;
  }

  // zone_maximum - computed: false, optional: true, required: false
  private _zoneMaximum?: string; 
  public get zoneMaximum() {
    return this.getStringAttribute('zone_maximum');
  }
  public set zoneMaximum(value: string) {
    this._zoneMaximum = value;
  }
  public resetZoneMaximum() {
    this._zoneMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMaximumInput() {
    return this._zoneMaximum;
  }

  // zone_minimum - computed: false, optional: true, required: false
  private _zoneMinimum?: string; 
  public get zoneMinimum() {
    return this.getStringAttribute('zone_minimum');
  }
  public set zoneMinimum(value: string) {
    this._zoneMinimum = value;
  }
  public resetZoneMinimum() {
    this._zoneMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMinimumInput() {
    return this._zoneMinimum;
  }

  // zone_non_zero_minimum - computed: false, optional: true, required: false
  private _zoneNonZeroMinimum?: string; 
  public get zoneNonZeroMinimum() {
    return this.getStringAttribute('zone_non_zero_minimum');
  }
  public set zoneNonZeroMinimum(value: string) {
    this._zoneNonZeroMinimum = value;
  }
  public resetZoneNonZeroMinimum() {
    this._zoneNonZeroMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNonZeroMinimumInput() {
    return this._zoneNonZeroMinimum;
  }

  // indicator_cfg - computed: false, optional: true, required: false
  private _indicatorCfg = new DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfgList(this, "indicator_cfg", false);
  public get indicatorCfg() {
    return this._indicatorCfg;
  }
  public putIndicatorCfg(value: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsIndicatorCfg[] | cdktf.IResolvable) {
    this._indicatorCfg.internalValue = value;
  }
  public resetIndicatorCfg() {
    this._indicatorCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorCfgInput() {
    return this._indicatorCfg.internalValue;
  }
}

export class DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsOutputReference {
    return new DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#indicator_index DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#indicator_name DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#rate DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#rate}
  */
  readonly rate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#score DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#score}
  */
  readonly score?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#src_average DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#src_average}
  */
  readonly srcAverage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#src_maximum DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#src_maximum}
  */
  readonly srcMaximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#src_minimum DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#src_minimum}
  */
  readonly srcMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#src_non_zero_minimum DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#src_non_zero_minimum}
  */
  readonly srcNonZeroMinimum?: string;
}

export function dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    rate: cdktf.stringToTerraform(struct!.rate),
    score: cdktf.stringToTerraform(struct!.score),
    src_average: cdktf.stringToTerraform(struct!.srcAverage),
    src_maximum: cdktf.stringToTerraform(struct!.srcMaximum),
    src_minimum: cdktf.stringToTerraform(struct!.srcMinimum),
    src_non_zero_minimum: cdktf.stringToTerraform(struct!.srcNonZeroMinimum),
  }
}


export function dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicators | cdktf.IResolvable): any {
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
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_average: {
      value: cdktf.stringToHclTerraform(struct!.srcAverage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_maximum: {
      value: cdktf.stringToHclTerraform(struct!.srcMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_minimum: {
      value: cdktf.stringToHclTerraform(struct!.srcMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_non_zero_minimum: {
      value: cdktf.stringToHclTerraform(struct!.srcNonZeroMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicators | cdktf.IResolvable | undefined {
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
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._srcAverage !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAverage = this._srcAverage;
    }
    if (this._srcMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMaximum = this._srcMaximum;
    }
    if (this._srcMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMinimum = this._srcMinimum;
    }
    if (this._srcNonZeroMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcNonZeroMinimum = this._srcNonZeroMinimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._rate = undefined;
      this._score = undefined;
      this._srcAverage = undefined;
      this._srcMaximum = undefined;
      this._srcMinimum = undefined;
      this._srcNonZeroMinimum = undefined;
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
      this._rate = value.rate;
      this._score = value.score;
      this._srcAverage = value.srcAverage;
      this._srcMaximum = value.srcMaximum;
      this._srcMinimum = value.srcMinimum;
      this._srcNonZeroMinimum = value.srcNonZeroMinimum;
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

  // score - computed: false, optional: true, required: false
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // src_average - computed: false, optional: true, required: false
  private _srcAverage?: string; 
  public get srcAverage() {
    return this.getStringAttribute('src_average');
  }
  public set srcAverage(value: string) {
    this._srcAverage = value;
  }
  public resetSrcAverage() {
    this._srcAverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAverageInput() {
    return this._srcAverage;
  }

  // src_maximum - computed: false, optional: true, required: false
  private _srcMaximum?: string; 
  public get srcMaximum() {
    return this.getStringAttribute('src_maximum');
  }
  public set srcMaximum(value: string) {
    this._srcMaximum = value;
  }
  public resetSrcMaximum() {
    this._srcMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMaximumInput() {
    return this._srcMaximum;
  }

  // src_minimum - computed: false, optional: true, required: false
  private _srcMinimum?: string; 
  public get srcMinimum() {
    return this.getStringAttribute('src_minimum');
  }
  public set srcMinimum(value: string) {
    this._srcMinimum = value;
  }
  public resetSrcMinimum() {
    this._srcMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMinimumInput() {
    return this._srcMinimum;
  }

  // src_non_zero_minimum - computed: false, optional: true, required: false
  private _srcNonZeroMinimum?: string; 
  public get srcNonZeroMinimum() {
    return this.getStringAttribute('src_non_zero_minimum');
  }
  public set srcNonZeroMinimum(value: string) {
    this._srcNonZeroMinimum = value;
  }
  public resetSrcNonZeroMinimum() {
    this._srcNonZeroMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNonZeroMinimumInput() {
    return this._srcNonZeroMinimum;
  }
}

export class DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#active_time DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#active_time}
  */
  readonly activeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#current_level DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#current_level}
  */
  readonly currentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#detection_data_source DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#escalation_timestamp DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#escalation_timestamp}
  */
  readonly escalationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#initial_learning DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#initial_learning}
  */
  readonly initialLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#src_address_str DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#src_address_str}
  */
  readonly srcAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#src_level DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#src_level}
  */
  readonly srcLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#total_score DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#total_score}
  */
  readonly totalScore?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#indicators DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStructToTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_time: cdktf.numberToTerraform(struct!.activeTime),
    current_level: cdktf.stringToTerraform(struct!.currentLevel),
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    escalation_timestamp: cdktf.stringToTerraform(struct!.escalationTimestamp),
    initial_learning: cdktf.stringToTerraform(struct!.initialLearning),
    src_address_str: cdktf.stringToTerraform(struct!.srcAddressStr),
    src_level: cdktf.stringToTerraform(struct!.srcLevel),
    total_score: cdktf.stringToTerraform(struct!.totalScore),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStruct | cdktf.IResolvable): any {
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
    current_level: {
      value: cdktf.stringToHclTerraform(struct!.currentLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_data_source: {
      value: cdktf.stringToHclTerraform(struct!.detectionDataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escalation_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.escalationTimestamp),
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
    src_address_str: {
      value: cdktf.stringToHclTerraform(struct!.srcAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_level: {
      value: cdktf.stringToHclTerraform(struct!.srcLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_score: {
      value: cdktf.stringToHclTerraform(struct!.totalScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTime = this._activeTime;
    }
    if (this._currentLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentLevel = this._currentLevel;
    }
    if (this._detectionDataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionDataSource = this._detectionDataSource;
    }
    if (this._escalationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationTimestamp = this._escalationTimestamp;
    }
    if (this._initialLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLearning = this._initialLearning;
    }
    if (this._srcAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddressStr = this._srcAddressStr;
    }
    if (this._srcLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcLevel = this._srcLevel;
    }
    if (this._totalScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalScore = this._totalScore;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeTime = undefined;
      this._currentLevel = undefined;
      this._detectionDataSource = undefined;
      this._escalationTimestamp = undefined;
      this._initialLearning = undefined;
      this._srcAddressStr = undefined;
      this._srcLevel = undefined;
      this._totalScore = undefined;
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
      this._currentLevel = value.currentLevel;
      this._detectionDataSource = value.detectionDataSource;
      this._escalationTimestamp = value.escalationTimestamp;
      this._initialLearning = value.initialLearning;
      this._srcAddressStr = value.srcAddressStr;
      this._srcLevel = value.srcLevel;
      this._totalScore = value.totalScore;
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

  // current_level - computed: false, optional: true, required: false
  private _currentLevel?: string; 
  public get currentLevel() {
    return this.getStringAttribute('current_level');
  }
  public set currentLevel(value: string) {
    this._currentLevel = value;
  }
  public resetCurrentLevel() {
    this._currentLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentLevelInput() {
    return this._currentLevel;
  }

  // detection_data_source - computed: false, optional: true, required: false
  private _detectionDataSource?: string; 
  public get detectionDataSource() {
    return this.getStringAttribute('detection_data_source');
  }
  public set detectionDataSource(value: string) {
    this._detectionDataSource = value;
  }
  public resetDetectionDataSource() {
    this._detectionDataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionDataSourceInput() {
    return this._detectionDataSource;
  }

  // escalation_timestamp - computed: false, optional: true, required: false
  private _escalationTimestamp?: string; 
  public get escalationTimestamp() {
    return this.getStringAttribute('escalation_timestamp');
  }
  public set escalationTimestamp(value: string) {
    this._escalationTimestamp = value;
  }
  public resetEscalationTimestamp() {
    this._escalationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationTimestampInput() {
    return this._escalationTimestamp;
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

  // src_address_str - computed: false, optional: true, required: false
  private _srcAddressStr?: string; 
  public get srcAddressStr() {
    return this.getStringAttribute('src_address_str');
  }
  public set srcAddressStr(value: string) {
    this._srcAddressStr = value;
  }
  public resetSrcAddressStr() {
    this._srcAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressStrInput() {
    return this._srcAddressStr;
  }

  // src_level - computed: false, optional: true, required: false
  private _srcLevel?: string; 
  public get srcLevel() {
    return this.getStringAttribute('src_level');
  }
  public set srcLevel(value: string) {
    this._srcLevel = value;
  }
  public resetSrcLevel() {
    this._srcLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcLevelInput() {
    return this._srcLevel;
  }

  // total_score - computed: false, optional: true, required: false
  private _totalScore?: string; 
  public get totalScore() {
    return this.getStringAttribute('total_score');
  }
  public set totalScore(value: string) {
    this._totalScore = value;
  }
  public resetTotalScore() {
    this._totalScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalScoreInput() {
    return this._totalScore;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListIndicators[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStructOutputReference {
    return new DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#active_time DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#active_time}
  */
  readonly activeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#current_level DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#current_level}
  */
  readonly currentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#details DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#detection_data_source DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#escalation_timestamp DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#escalation_timestamp}
  */
  readonly escalationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#initial_learning DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#initial_learning}
  */
  readonly initialLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#ipv6 DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#sources DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#sources}
  */
  readonly sources?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#sources_all_entries DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#sources_all_entries}
  */
  readonly sourcesAllEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#subnet_ip_addr DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#subnet_ipv6_addr DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#total_score DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#total_score}
  */
  readonly totalScore?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#indicators DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicators[] | cdktf.IResolvable;
  /**
  * src_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#src_entry_list DataThunderDdosDstZoneIpProtoProtoNamePortIndOper#src_entry_list}
  */
  readonly srcEntryList?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperToTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperOutputReference | DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_time: cdktf.numberToTerraform(struct!.activeTime),
    current_level: cdktf.stringToTerraform(struct!.currentLevel),
    details: cdktf.numberToTerraform(struct!.details),
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    escalation_timestamp: cdktf.stringToTerraform(struct!.escalationTimestamp),
    initial_learning: cdktf.stringToTerraform(struct!.initialLearning),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    sources: cdktf.numberToTerraform(struct!.sources),
    sources_all_entries: cdktf.numberToTerraform(struct!.sourcesAllEntries),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    total_score: cdktf.stringToTerraform(struct!.totalScore),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsToTerraform, true)(struct!.indicators),
    src_entry_list: cdktf.listMapper(dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStructToTerraform, true)(struct!.srcEntryList),
  }
}


export function dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperToHclTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperOutputReference | DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOper): any {
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
    current_level: {
      value: cdktf.stringToHclTerraform(struct!.currentLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    details: {
      value: cdktf.numberToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detection_data_source: {
      value: cdktf.stringToHclTerraform(struct!.detectionDataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escalation_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.escalationTimestamp),
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
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.numberToHclTerraform(struct!.sources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources_all_entries: {
      value: cdktf.numberToHclTerraform(struct!.sourcesAllEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_score: {
      value: cdktf.stringToHclTerraform(struct!.totalScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsList",
    },
    src_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStructToHclTerraform, true)(struct!.srcEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTime = this._activeTime;
    }
    if (this._currentLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentLevel = this._currentLevel;
    }
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._detectionDataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionDataSource = this._detectionDataSource;
    }
    if (this._escalationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationTimestamp = this._escalationTimestamp;
    }
    if (this._initialLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLearning = this._initialLearning;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._sourcesAllEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcesAllEntries = this._sourcesAllEntries;
    }
    if (this._subnetIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddr = this._subnetIpAddr;
    }
    if (this._subnetIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpv6Addr = this._subnetIpv6Addr;
    }
    if (this._totalScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalScore = this._totalScore;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    if (this._srcEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryList = this._srcEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeTime = undefined;
      this._currentLevel = undefined;
      this._details = undefined;
      this._detectionDataSource = undefined;
      this._escalationTimestamp = undefined;
      this._initialLearning = undefined;
      this._ipv6 = undefined;
      this._sources = undefined;
      this._sourcesAllEntries = undefined;
      this._subnetIpAddr = undefined;
      this._subnetIpv6Addr = undefined;
      this._totalScore = undefined;
      this._indicators.internalValue = undefined;
      this._srcEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeTime = value.activeTime;
      this._currentLevel = value.currentLevel;
      this._details = value.details;
      this._detectionDataSource = value.detectionDataSource;
      this._escalationTimestamp = value.escalationTimestamp;
      this._initialLearning = value.initialLearning;
      this._ipv6 = value.ipv6;
      this._sources = value.sources;
      this._sourcesAllEntries = value.sourcesAllEntries;
      this._subnetIpAddr = value.subnetIpAddr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._totalScore = value.totalScore;
      this._indicators.internalValue = value.indicators;
      this._srcEntryList.internalValue = value.srcEntryList;
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

  // current_level - computed: false, optional: true, required: false
  private _currentLevel?: string; 
  public get currentLevel() {
    return this.getStringAttribute('current_level');
  }
  public set currentLevel(value: string) {
    this._currentLevel = value;
  }
  public resetCurrentLevel() {
    this._currentLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentLevelInput() {
    return this._currentLevel;
  }

  // details - computed: false, optional: true, required: false
  private _details?: number; 
  public get details() {
    return this.getNumberAttribute('details');
  }
  public set details(value: number) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // detection_data_source - computed: false, optional: true, required: false
  private _detectionDataSource?: string; 
  public get detectionDataSource() {
    return this.getStringAttribute('detection_data_source');
  }
  public set detectionDataSource(value: string) {
    this._detectionDataSource = value;
  }
  public resetDetectionDataSource() {
    this._detectionDataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionDataSourceInput() {
    return this._detectionDataSource;
  }

  // escalation_timestamp - computed: false, optional: true, required: false
  private _escalationTimestamp?: string; 
  public get escalationTimestamp() {
    return this.getStringAttribute('escalation_timestamp');
  }
  public set escalationTimestamp(value: string) {
    this._escalationTimestamp = value;
  }
  public resetEscalationTimestamp() {
    this._escalationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationTimestampInput() {
    return this._escalationTimestamp;
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: number; 
  public get sources() {
    return this.getNumberAttribute('sources');
  }
  public set sources(value: number) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // sources_all_entries - computed: false, optional: true, required: false
  private _sourcesAllEntries?: number; 
  public get sourcesAllEntries() {
    return this.getNumberAttribute('sources_all_entries');
  }
  public set sourcesAllEntries(value: number) {
    this._sourcesAllEntries = value;
  }
  public resetSourcesAllEntries() {
    this._sourcesAllEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesAllEntriesInput() {
    return this._sourcesAllEntries;
  }

  // subnet_ip_addr - computed: false, optional: true, required: false
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  public resetSubnetIpAddr() {
    this._subnetIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
  }

  // subnet_ipv6_addr - computed: false, optional: true, required: false
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  public resetSubnetIpv6Addr() {
    this._subnetIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
  }

  // total_score - computed: false, optional: true, required: false
  private _totalScore?: string; 
  public get totalScore() {
    return this.getStringAttribute('total_score');
  }
  public set totalScore(value: string) {
    this._totalScore = value;
  }
  public resetTotalScore() {
    this._totalScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalScoreInput() {
    return this._totalScore;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }

  // src_entry_list - computed: false, optional: true, required: false
  private _srcEntryList = new DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStructList(this, "src_entry_list", false);
  public get srcEntryList() {
    return this._srcEntryList;
  }
  public putSrcEntryList(value: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperSrcEntryListStruct[] | cdktf.IResolvable) {
    this._srcEntryList.internalValue = value;
  }
  public resetSrcEntryList() {
    this._srcEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryListInput() {
    return this._srcEntryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper thunder_ddos_dst_zone_ip_proto_proto_name_port_ind_oper}
*/
export class DataThunderDdosDstZoneIpProtoProtoNamePortIndOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_ip_proto_proto_name_port_ind_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZoneIpProtoProtoNamePortIndOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZoneIpProtoProtoNamePortIndOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZoneIpProtoProtoNamePortIndOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZoneIpProtoProtoNamePortIndOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_ip_proto_proto_name_port_ind_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_name_port_ind_oper thunder_ddos_dst_zone_ip_proto_proto_name_port_ind_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZoneIpProtoProtoNamePortIndOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_ip_proto_proto_name_port_ind_oper',
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
  private _oper = new DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOper) {
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
      protocol: cdktf.stringToTerraform(this._protocol),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneIpProtoProtoNamePortIndOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
