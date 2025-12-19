// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#id DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortOther
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#port_other DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#port_other}
  */
  readonly portOther: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#protocol DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#protocol}
  */
  readonly protocol: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#zone_name DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#oper DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOper;
}
export interface DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#level DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#source_threshold DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#source_threshold}
  */
  readonly sourceThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#zone_threshold DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#zone_threshold}
  */
  readonly zoneThreshold?: string;
}

export function dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfgToTerraform(struct?: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
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


export function dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfgToHclTerraform(struct?: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
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

export class DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfgList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfg[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfgOutputReference {
    return new DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#indicator_index DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#indicator_name DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#rate DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#rate}
  */
  readonly rate?: string;
  /**
  * indicator_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#indicator_cfg DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#indicator_cfg}
  */
  readonly indicatorCfg?: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfg[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsToTerraform(struct?: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    rate: cdktf.stringToTerraform(struct!.rate),
    indicator_cfg: cdktf.listMapper(dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfgToTerraform, true)(struct!.indicatorCfg),
  }
}


export function dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicators | cdktf.IResolvable): any {
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
    indicator_cfg: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfgToHclTerraform, true)(struct!.indicatorCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicators | cdktf.IResolvable | undefined {
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
    if (this._indicatorCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorCfg = this._indicatorCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._rate = undefined;
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

  // indicator_cfg - computed: false, optional: true, required: false
  private _indicatorCfg = new DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfgList(this, "indicator_cfg", false);
  public get indicatorCfg() {
    return this._indicatorCfg;
  }
  public putIndicatorCfg(value: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsIndicatorCfg[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsOutputReference {
    return new DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#current_level DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#current_level}
  */
  readonly currentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#details DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#detection_data_source DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#indicators DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperToTerraform(struct?: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperOutputReference | DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_level: cdktf.stringToTerraform(struct!.currentLevel),
    details: cdktf.numberToTerraform(struct!.details),
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperToHclTerraform(struct?: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperOutputReference | DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentLevel = undefined;
      this._details = undefined;
      this._detectionDataSource = undefined;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentLevel = value.currentLevel;
      this._details = value.details;
      this._detectionDataSource = value.detectionDataSource;
      this._indicators.internalValue = value.indicators;
    }
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

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperIndicators[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper thunder_ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper}
*/
export class DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper thunder_ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_src_port_zone_src_port_other_port_ind_oper',
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
  private _oper = new DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOper) {
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
      oper: dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneSrcPortZoneSrcPortOtherPortIndOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
