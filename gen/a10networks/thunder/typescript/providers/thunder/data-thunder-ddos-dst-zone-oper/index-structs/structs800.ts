import * as cdktf from 'cdktf';
import { DataThunderDdosDstZoneOperSrcPortRangeListOper,
dataThunderDdosDstZoneOperSrcPortRangeListOperToTerraform,
dataThunderDdosDstZoneOperSrcPortRangeListOperToHclTerraform,
DataThunderDdosDstZoneOperSrcPortRangeListOperOutputReference } from './structs400'
export interface DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#level DataThunderDdosDstZoneOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#source_threshold DataThunderDdosDstZoneOper#source_threshold}
  */
  readonly sourceThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#zone_threshold DataThunderDdosDstZoneOper#zone_threshold}
  */
  readonly zoneThreshold?: string;
}

export function dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfgToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
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


export function dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfgToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
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

export class DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfgList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfgOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#indicator_index DataThunderDdosDstZoneOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#indicator_name DataThunderDdosDstZoneOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#rate DataThunderDdosDstZoneOper#rate}
  */
  readonly rate?: string;
  /**
  * indicator_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#indicator_cfg DataThunderDdosDstZoneOper#indicator_cfg}
  */
  readonly indicatorCfg?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    rate: cdktf.stringToTerraform(struct!.rate),
    indicator_cfg: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfgToTerraform, true)(struct!.indicatorCfg),
  }
}


export function dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicators | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfgToHclTerraform, true)(struct!.indicatorCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicators | cdktf.IResolvable | undefined) {
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
  private _indicatorCfg = new DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfgList(this, "indicator_cfg", false);
  public get indicatorCfg() {
    return this._indicatorCfg;
  }
  public putIndicatorCfg(value: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortRangeListPortIndOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#current_level DataThunderDdosDstZoneOper#current_level}
  */
  readonly currentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#details DataThunderDdosDstZoneOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#detection_data_source DataThunderDdosDstZoneOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#indicators DataThunderDdosDstZoneOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperOutputReference | DataThunderDdosDstZoneOperSrcPortRangeListPortIndOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_level: cdktf.stringToTerraform(struct!.currentLevel),
    details: cdktf.numberToTerraform(struct!.details),
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperOutputReference | DataThunderDdosDstZoneOperSrcPortRangeListPortIndOper): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortRangeListPortIndOper | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOper | undefined) {
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
  private _indicators = new DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicators[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstZoneOperSrcPortRangeListPortInd {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOper;
}

export function dataThunderDdosDstZoneOperSrcPortRangeListPortIndToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOutputReference | DataThunderDdosDstZoneOperSrcPortRangeListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZoneOperSrcPortRangeListPortIndToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOutputReference | DataThunderDdosDstZoneOperSrcPortRangeListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZoneOperSrcPortRangeListPortIndOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortRangeListPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortRangeListPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortRangeListPortInd | undefined) {
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
  private _oper = new DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperSrcPortRangeListPortIndOper) {
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
export interface DataThunderDdosDstZoneOperSrcPortRangeListStruct {
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#protocol DataThunderDdosDstZoneOper#protocol}
  */
  readonly protocol: string;
  /**
  * Src Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#src_port_range_end DataThunderDdosDstZoneOper#src_port_range_end}
  */
  readonly srcPortRangeEnd: number;
  /**
  * Src Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#src_port_range_start DataThunderDdosDstZoneOper#src_port_range_start}
  */
  readonly srcPortRangeStart: number;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperSrcPortRangeListOper;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#port_ind DataThunderDdosDstZoneOper#port_ind}
  */
  readonly portInd?: DataThunderDdosDstZoneOperSrcPortRangeListPortInd;
}

export function dataThunderDdosDstZoneOperSrcPortRangeListStructToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_port_range_end: cdktf.numberToTerraform(struct!.srcPortRangeEnd),
    src_port_range_start: cdktf.numberToTerraform(struct!.srcPortRangeStart),
    oper: dataThunderDdosDstZoneOperSrcPortRangeListOperToTerraform(struct!.oper),
    port_ind: dataThunderDdosDstZoneOperSrcPortRangeListPortIndToTerraform(struct!.portInd),
  }
}


export function dataThunderDdosDstZoneOperSrcPortRangeListStructToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.srcPortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.srcPortRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oper: {
      value: dataThunderDdosDstZoneOperSrcPortRangeListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortRangeListOperList",
    },
    port_ind: {
      value: dataThunderDdosDstZoneOperSrcPortRangeListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortRangeListPortIndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcPortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRangeEnd = this._srcPortRangeEnd;
    }
    if (this._srcPortRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRangeStart = this._srcPortRangeStart;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    if (this._portInd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portInd = this._portInd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._srcPortRangeEnd = undefined;
      this._srcPortRangeStart = undefined;
      this._oper.internalValue = undefined;
      this._portInd.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._srcPortRangeEnd = value.srcPortRangeEnd;
      this._srcPortRangeStart = value.srcPortRangeStart;
      this._oper.internalValue = value.oper;
      this._portInd.internalValue = value.portInd;
    }
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

  // src_port_range_end - computed: false, optional: false, required: true
  private _srcPortRangeEnd?: number; 
  public get srcPortRangeEnd() {
    return this.getNumberAttribute('src_port_range_end');
  }
  public set srcPortRangeEnd(value: number) {
    this._srcPortRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeEndInput() {
    return this._srcPortRangeEnd;
  }

  // src_port_range_start - computed: false, optional: false, required: true
  private _srcPortRangeStart?: number; 
  public get srcPortRangeStart() {
    return this.getNumberAttribute('src_port_range_start');
  }
  public set srcPortRangeStart(value: number) {
    this._srcPortRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeStartInput() {
    return this._srcPortRangeStart;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneOperSrcPortRangeListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperSrcPortRangeListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DataThunderDdosDstZoneOperSrcPortRangeListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DataThunderDdosDstZoneOperSrcPortRangeListPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }
}

export class DataThunderDdosDstZoneOperSrcPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortRangeListStructOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#indicator_index DataThunderDdosDstZoneOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#indicator_name DataThunderDdosDstZoneOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#max_peak DataThunderDdosDstZoneOper#max_peak}
  */
  readonly maxPeak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#psd_wdw_cnt DataThunderDdosDstZoneOper#psd_wdw_cnt}
  */
  readonly psdWdwCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#rate DataThunderDdosDstZoneOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    max_peak: cdktf.stringToTerraform(struct!.maxPeak),
    psd_wdw_cnt: cdktf.numberToTerraform(struct!.psdWdwCnt),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicators | cdktf.IResolvable): any {
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
    max_peak: {
      value: cdktf.stringToHclTerraform(struct!.maxPeak),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psd_wdw_cnt: {
      value: cdktf.numberToHclTerraform(struct!.psdWdwCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicators | cdktf.IResolvable | undefined {
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
    if (this._maxPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPeak = this._maxPeak;
    }
    if (this._psdWdwCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.psdWdwCnt = this._psdWdwCnt;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._maxPeak = undefined;
      this._psdWdwCnt = undefined;
      this._rate = undefined;
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
      this._maxPeak = value.maxPeak;
      this._psdWdwCnt = value.psdWdwCnt;
      this._rate = value.rate;
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

  // max_peak - computed: false, optional: true, required: false
  private _maxPeak?: string; 
  public get maxPeak() {
    return this.getStringAttribute('max_peak');
  }
  public set maxPeak(value: string) {
    this._maxPeak = value;
  }
  public resetMaxPeak() {
    this._maxPeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPeakInput() {
    return this._maxPeak;
  }

  // psd_wdw_cnt - computed: false, optional: true, required: false
  private _psdWdwCnt?: number; 
  public get psdWdwCnt() {
    return this.getNumberAttribute('psd_wdw_cnt');
  }
  public set psdWdwCnt(value: number) {
    this._psdWdwCnt = value;
  }
  public resetPsdWdwCnt() {
    this._psdWdwCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psdWdwCntInput() {
    return this._psdWdwCnt;
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

export class DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#address_str DataThunderDdosDstZoneOper#address_str}
  */
  readonly addressStr?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#indicators DataThunderDdosDstZoneOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperTopkDestinationsOperEntryListStructToTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_str: cdktf.stringToTerraform(struct!.addressStr),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneOperTopkDestinationsOperEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_str: {
      value: cdktf.stringToHclTerraform(struct!.addressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressStr = this._addressStr;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressStr = undefined;
      this._indicators.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressStr = value.addressStr;
      this._indicators.internalValue = value.indicators;
    }
  }

  // address_str - computed: false, optional: true, required: false
  private _addressStr?: string; 
  public get addressStr() {
    return this.getStringAttribute('address_str');
  }
  public set addressStr(value: string) {
    this._addressStr = value;
  }
  public resetAddressStr() {
    this._addressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressStrInput() {
    return this._addressStr;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListIndicators[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStructOutputReference {
    return new DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#address DataThunderDdosDstZoneOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#rate DataThunderDdosDstZoneOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinationsToTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinationsToHclTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable): any {
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

export class DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinationsOutputReference {
    return new DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperTopkDestinationsOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#indicator_index DataThunderDdosDstZoneOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#indicator_name DataThunderDdosDstZoneOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#destinations DataThunderDdosDstZoneOper#destinations}
  */
  readonly destinations?: DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinations[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsToTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    destinations: cdktf.listMapper(dataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinationsToTerraform, true)(struct!.destinations),
  }
}


export function dataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOperIndicators | cdktf.IResolvable): any {
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
    destinations: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperTopkDestinationsOperIndicators | cdktf.IResolvable | undefined {
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
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperTopkDestinationsOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._destinations.internalValue = undefined;
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
      this._destinations.internalValue = value.destinations;
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

  // destinations - computed: false, optional: true, required: false
  private _destinations = new DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}

export class DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperTopkDestinationsOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsOutputReference {
    return new DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperTopkDestinationsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#details DataThunderDdosDstZoneOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#finished DataThunderDdosDstZoneOper#finished}
  */
  readonly finished?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#next_indicator DataThunderDdosDstZoneOper#next_indicator}
  */
  readonly nextIndicator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#top_k_key DataThunderDdosDstZoneOper#top_k_key}
  */
  readonly topKKey?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#entry_list DataThunderDdosDstZoneOper#entry_list}
  */
  readonly entryList?: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStruct[] | cdktf.IResolvable;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#indicators DataThunderDdosDstZoneOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneOperTopkDestinationsOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperTopkDestinationsOperToTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOperOutputReference | DataThunderDdosDstZoneOperTopkDestinationsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.numberToTerraform(struct!.details),
    finished: cdktf.numberToTerraform(struct!.finished),
    next_indicator: cdktf.numberToTerraform(struct!.nextIndicator),
    top_k_key: cdktf.stringToTerraform(struct!.topKKey),
    entry_list: cdktf.listMapper(dataThunderDdosDstZoneOperTopkDestinationsOperEntryListStructToTerraform, true)(struct!.entryList),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneOperTopkDestinationsOperToHclTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOperOutputReference | DataThunderDdosDstZoneOperTopkDestinationsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    details: {
      value: cdktf.numberToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finished: {
      value: cdktf.numberToHclTerraform(struct!.finished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_indicator: {
      value: cdktf.numberToHclTerraform(struct!.nextIndicator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_k_key: {
      value: cdktf.stringToHclTerraform(struct!.topKKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperTopkDestinationsOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStructList",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperTopkDestinationsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperTopkDestinationsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._finished !== undefined) {
      hasAnyValues = true;
      internalValueResult.finished = this._finished;
    }
    if (this._nextIndicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextIndicator = this._nextIndicator;
    }
    if (this._topKKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topKKey = this._topKKey;
    }
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperTopkDestinationsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._details = undefined;
      this._finished = undefined;
      this._nextIndicator = undefined;
      this._topKKey = undefined;
      this._entryList.internalValue = undefined;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._details = value.details;
      this._finished = value.finished;
      this._nextIndicator = value.nextIndicator;
      this._topKKey = value.topKKey;
      this._entryList.internalValue = value.entryList;
      this._indicators.internalValue = value.indicators;
    }
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

  // finished - computed: false, optional: true, required: false
  private _finished?: number; 
  public get finished() {
    return this.getNumberAttribute('finished');
  }
  public set finished(value: number) {
    this._finished = value;
  }
  public resetFinished() {
    this._finished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedInput() {
    return this._finished;
  }

  // next_indicator - computed: false, optional: true, required: false
  private _nextIndicator?: number; 
  public get nextIndicator() {
    return this.getNumberAttribute('next_indicator');
  }
  public set nextIndicator(value: number) {
    this._nextIndicator = value;
  }
  public resetNextIndicator() {
    this._nextIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextIndicatorInput() {
    return this._nextIndicator;
  }

  // top_k_key - computed: false, optional: true, required: false
  private _topKKey?: string; 
  public get topKKey() {
    return this.getStringAttribute('top_k_key');
  }
  public set topKKey(value: string) {
    this._topKKey = value;
  }
  public resetTopKKey() {
    this._topKKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKKeyInput() {
    return this._topKKey;
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZoneOperTopkDestinationsOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneOperTopkDestinationsOperIndicators[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstZoneOperTopkDestinations {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperTopkDestinationsOper;
}

export function dataThunderDdosDstZoneOperTopkDestinationsToTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOutputReference | DataThunderDdosDstZoneOperTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZoneOperTopkDestinationsOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZoneOperTopkDestinationsToHclTerraform(struct?: DataThunderDdosDstZoneOperTopkDestinationsOutputReference | DataThunderDdosDstZoneOperTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZoneOperTopkDestinationsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperTopkDestinationsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperTopkDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperTopkDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperTopkDestinations | undefined) {
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
  private _oper = new DataThunderDdosDstZoneOperTopkDestinationsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperTopkDestinationsOper) {
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
