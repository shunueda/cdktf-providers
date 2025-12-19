import * as cdktf from 'cdktf';
import { DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperEntryListStruct,
dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperEntryListStructToTerraform,
dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperEntryListStructToHclTerraform,
DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperEntryListStructList,
DataThunderDdosDstZoneOperPortRangeListIpFilteringPolicyStatistics,
dataThunderDdosDstZoneOperPortRangeListIpFilteringPolicyStatisticsToTerraform,
dataThunderDdosDstZoneOperPortRangeListIpFilteringPolicyStatisticsToHclTerraform,
DataThunderDdosDstZoneOperPortRangeListIpFilteringPolicyStatisticsOutputReference,
DataThunderDdosDstZoneOperPortRangeListOper,
dataThunderDdosDstZoneOperPortRangeListOperToTerraform,
dataThunderDdosDstZoneOperPortRangeListOperToHclTerraform,
DataThunderDdosDstZoneOperPortRangeListOperOutputReference,
DataThunderDdosDstZoneOperPortRangeListPatternRecognition,
dataThunderDdosDstZoneOperPortRangeListPatternRecognitionToTerraform,
dataThunderDdosDstZoneOperPortRangeListPatternRecognitionToHclTerraform,
DataThunderDdosDstZoneOperPortRangeListPatternRecognitionOutputReference,
DataThunderDdosDstZoneOperPortRangeListPatternRecognitionPuDetails,
dataThunderDdosDstZoneOperPortRangeListPatternRecognitionPuDetailsToTerraform,
dataThunderDdosDstZoneOperPortRangeListPatternRecognitionPuDetailsToHclTerraform,
DataThunderDdosDstZoneOperPortRangeListPatternRecognitionPuDetailsOutputReference,
DataThunderDdosDstZoneOperPortRangeListPortInd,
dataThunderDdosDstZoneOperPortRangeListPortIndToTerraform,
dataThunderDdosDstZoneOperPortRangeListPortIndToHclTerraform,
DataThunderDdosDstZoneOperPortRangeListPortIndOutputReference,
DataThunderDdosDstZoneOperPortRangeListProgressionTracking,
dataThunderDdosDstZoneOperPortRangeListProgressionTrackingToTerraform,
dataThunderDdosDstZoneOperPortRangeListProgressionTrackingToHclTerraform,
DataThunderDdosDstZoneOperPortRangeListProgressionTrackingOutputReference,
DataThunderDdosDstZoneOperPortRangeListSrcBasedPolicyListStruct,
dataThunderDdosDstZoneOperPortRangeListSrcBasedPolicyListStructToTerraform,
dataThunderDdosDstZoneOperPortRangeListSrcBasedPolicyListStructToHclTerraform,
DataThunderDdosDstZoneOperPortRangeListSrcBasedPolicyListStructList,
DataThunderDdosDstZoneOperPortRangeListTopkDestinations,
dataThunderDdosDstZoneOperPortRangeListTopkDestinationsToTerraform,
dataThunderDdosDstZoneOperPortRangeListTopkDestinationsToHclTerraform,
DataThunderDdosDstZoneOperPortRangeListTopkDestinationsOutputReference } from './structs400'
export interface DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#address DataThunderDdosDstZoneOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#rate DataThunderDdosDstZoneOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSourcesToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSourcesToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSources | cdktf.IResolvable): any {
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

export class DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSources | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSourcesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSources[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSourcesOutputReference {
    return new DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_index DataThunderDdosDstZoneOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_name DataThunderDdosDstZoneOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sources DataThunderDdosDstZoneOper#sources}
  */
  readonly sources?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSources[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    sources: cdktf.listMapper(dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSourcesToTerraform, true)(struct!.sources),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicators | cdktf.IResolvable): any {
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
    sources: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicators | cdktf.IResolvable | undefined {
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
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._sources.internalValue = undefined;
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
      this._sources.internalValue = value.sources;
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

  // sources - computed: false, optional: true, required: false
  private _sources = new DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}

export class DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsOutputReference {
    return new DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperPortRangeListTopkSourcesOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#details DataThunderDdosDstZoneOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#finished DataThunderDdosDstZoneOper#finished}
  */
  readonly finished?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#next_indicator DataThunderDdosDstZoneOper#next_indicator}
  */
  readonly nextIndicator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#top_k_key DataThunderDdosDstZoneOper#top_k_key}
  */
  readonly topKKey?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#entry_list DataThunderDdosDstZoneOper#entry_list}
  */
  readonly entryList?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperEntryListStruct[] | cdktf.IResolvable;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicators DataThunderDdosDstZoneOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperOutputReference | DataThunderDdosDstZoneOperPortRangeListTopkSourcesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.numberToTerraform(struct!.details),
    finished: cdktf.numberToTerraform(struct!.finished),
    next_indicator: cdktf.numberToTerraform(struct!.nextIndicator),
    top_k_key: cdktf.stringToTerraform(struct!.topKKey),
    entry_list: cdktf.listMapper(dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperEntryListStructToTerraform, true)(struct!.entryList),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperOutputReference | DataThunderDdosDstZoneOperPortRangeListTopkSourcesOper): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperEntryListStructList",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListTopkSourcesOper | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOper | undefined) {
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
  private _entryList = new DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperEntryListStruct[] | cdktf.IResolvable) {
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
  private _indicators = new DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperIndicators[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstZoneOperPortRangeListTopkSources {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOper;
}

export function dataThunderDdosDstZoneOperPortRangeListTopkSourcesToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOutputReference | DataThunderDdosDstZoneOperPortRangeListTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListTopkSourcesToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOutputReference | DataThunderDdosDstZoneOperPortRangeListTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZoneOperPortRangeListTopkSourcesOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperPortRangeListTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListTopkSources | undefined) {
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
  private _oper = new DataThunderDdosDstZoneOperPortRangeListTopkSourcesOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperPortRangeListTopkSourcesOper) {
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
export interface DataThunderDdosDstZoneOperPortRangeListVirtualhostsOper {
}

export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsOperToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsOperOutputReference | DataThunderDdosDstZoneOperPortRangeListVirtualhostsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsOperToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsOperOutputReference | DataThunderDdosDstZoneOperPortRangeListVirtualhostsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListVirtualhostsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_http_filter_rate DataThunderDdosDstZoneOper#current_http_filter_rate}
  */
  readonly currentHttpFilterRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#http_filter_rate_limit DataThunderDdosDstZoneOper#http_filter_rate_limit}
  */
  readonly httpFilterRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#http_filter_rate_name DataThunderDdosDstZoneOper#http_filter_rate_name}
  */
  readonly httpFilterRateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_http_filter_rate_limit_exceed DataThunderDdosDstZoneOper#is_http_filter_rate_limit_exceed}
  */
  readonly isHttpFilterRateLimitExceed?: number;
}

export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRatesToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_http_filter_rate: cdktf.stringToTerraform(struct!.currentHttpFilterRate),
    http_filter_rate_limit: cdktf.stringToTerraform(struct!.httpFilterRateLimit),
    http_filter_rate_name: cdktf.stringToTerraform(struct!.httpFilterRateName),
    is_http_filter_rate_limit_exceed: cdktf.numberToTerraform(struct!.isHttpFilterRateLimitExceed),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRatesToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_http_filter_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentHttpFilterRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_filter_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_filter_rate_name: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_http_filter_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isHttpFilterRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentHttpFilterRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentHttpFilterRate = this._currentHttpFilterRate;
    }
    if (this._httpFilterRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRateLimit = this._httpFilterRateLimit;
    }
    if (this._httpFilterRateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRateName = this._httpFilterRateName;
    }
    if (this._isHttpFilterRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHttpFilterRateLimitExceed = this._isHttpFilterRateLimitExceed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentHttpFilterRate = undefined;
      this._httpFilterRateLimit = undefined;
      this._httpFilterRateName = undefined;
      this._isHttpFilterRateLimitExceed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentHttpFilterRate = value.currentHttpFilterRate;
      this._httpFilterRateLimit = value.httpFilterRateLimit;
      this._httpFilterRateName = value.httpFilterRateName;
      this._isHttpFilterRateLimitExceed = value.isHttpFilterRateLimitExceed;
    }
  }

  // current_http_filter_rate - computed: false, optional: true, required: false
  private _currentHttpFilterRate?: string; 
  public get currentHttpFilterRate() {
    return this.getStringAttribute('current_http_filter_rate');
  }
  public set currentHttpFilterRate(value: string) {
    this._currentHttpFilterRate = value;
  }
  public resetCurrentHttpFilterRate() {
    this._currentHttpFilterRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentHttpFilterRateInput() {
    return this._currentHttpFilterRate;
  }

  // http_filter_rate_limit - computed: false, optional: true, required: false
  private _httpFilterRateLimit?: string; 
  public get httpFilterRateLimit() {
    return this.getStringAttribute('http_filter_rate_limit');
  }
  public set httpFilterRateLimit(value: string) {
    this._httpFilterRateLimit = value;
  }
  public resetHttpFilterRateLimit() {
    this._httpFilterRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRateLimitInput() {
    return this._httpFilterRateLimit;
  }

  // http_filter_rate_name - computed: false, optional: true, required: false
  private _httpFilterRateName?: string; 
  public get httpFilterRateName() {
    return this.getStringAttribute('http_filter_rate_name');
  }
  public set httpFilterRateName(value: string) {
    this._httpFilterRateName = value;
  }
  public resetHttpFilterRateName() {
    this._httpFilterRateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRateNameInput() {
    return this._httpFilterRateName;
  }

  // is_http_filter_rate_limit_exceed - computed: false, optional: true, required: false
  private _isHttpFilterRateLimitExceed?: number; 
  public get isHttpFilterRateLimitExceed() {
    return this.getNumberAttribute('is_http_filter_rate_limit_exceed');
  }
  public set isHttpFilterRateLimitExceed(value: number) {
    this._isHttpFilterRateLimitExceed = value;
  }
  public resetIsHttpFilterRateLimitExceed() {
    this._isHttpFilterRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpFilterRateLimitExceedInput() {
    return this._isHttpFilterRateLimitExceed;
  }
}

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRatesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRates[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRatesOutputReference {
    return new DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_response_size_rate DataThunderDdosDstZoneOper#current_response_size_rate}
  */
  readonly currentResponseSizeRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_response_size_rate_limit_exceed DataThunderDdosDstZoneOper#is_response_size_rate_limit_exceed}
  */
  readonly isResponseSizeRateLimitExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#response_size_rate_limit DataThunderDdosDstZoneOper#response_size_rate_limit}
  */
  readonly responseSizeRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#response_size_rate_name DataThunderDdosDstZoneOper#response_size_rate_name}
  */
  readonly responseSizeRateName?: string;
}

export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRatesToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_response_size_rate: cdktf.stringToTerraform(struct!.currentResponseSizeRate),
    is_response_size_rate_limit_exceed: cdktf.numberToTerraform(struct!.isResponseSizeRateLimitExceed),
    response_size_rate_limit: cdktf.stringToTerraform(struct!.responseSizeRateLimit),
    response_size_rate_name: cdktf.stringToTerraform(struct!.responseSizeRateName),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRatesToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_response_size_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentResponseSizeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_response_size_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isResponseSizeRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_size_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.responseSizeRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_size_rate_name: {
      value: cdktf.stringToHclTerraform(struct!.responseSizeRateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentResponseSizeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentResponseSizeRate = this._currentResponseSizeRate;
    }
    if (this._isResponseSizeRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponseSizeRateLimitExceed = this._isResponseSizeRateLimitExceed;
    }
    if (this._responseSizeRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeRateLimit = this._responseSizeRateLimit;
    }
    if (this._responseSizeRateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeRateName = this._responseSizeRateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentResponseSizeRate = undefined;
      this._isResponseSizeRateLimitExceed = undefined;
      this._responseSizeRateLimit = undefined;
      this._responseSizeRateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentResponseSizeRate = value.currentResponseSizeRate;
      this._isResponseSizeRateLimitExceed = value.isResponseSizeRateLimitExceed;
      this._responseSizeRateLimit = value.responseSizeRateLimit;
      this._responseSizeRateName = value.responseSizeRateName;
    }
  }

  // current_response_size_rate - computed: false, optional: true, required: false
  private _currentResponseSizeRate?: string; 
  public get currentResponseSizeRate() {
    return this.getStringAttribute('current_response_size_rate');
  }
  public set currentResponseSizeRate(value: string) {
    this._currentResponseSizeRate = value;
  }
  public resetCurrentResponseSizeRate() {
    this._currentResponseSizeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentResponseSizeRateInput() {
    return this._currentResponseSizeRate;
  }

  // is_response_size_rate_limit_exceed - computed: false, optional: true, required: false
  private _isResponseSizeRateLimitExceed?: number; 
  public get isResponseSizeRateLimitExceed() {
    return this.getNumberAttribute('is_response_size_rate_limit_exceed');
  }
  public set isResponseSizeRateLimitExceed(value: number) {
    this._isResponseSizeRateLimitExceed = value;
  }
  public resetIsResponseSizeRateLimitExceed() {
    this._isResponseSizeRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponseSizeRateLimitExceedInput() {
    return this._isResponseSizeRateLimitExceed;
  }

  // response_size_rate_limit - computed: false, optional: true, required: false
  private _responseSizeRateLimit?: string; 
  public get responseSizeRateLimit() {
    return this.getStringAttribute('response_size_rate_limit');
  }
  public set responseSizeRateLimit(value: string) {
    this._responseSizeRateLimit = value;
  }
  public resetResponseSizeRateLimit() {
    this._responseSizeRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeRateLimitInput() {
    return this._responseSizeRateLimit;
  }

  // response_size_rate_name - computed: false, optional: true, required: false
  private _responseSizeRateName?: string; 
  public get responseSizeRateName() {
    return this.getStringAttribute('response_size_rate_name');
  }
  public set responseSizeRateName(value: string) {
    this._responseSizeRateName = value;
  }
  public resetResponseSizeRateName() {
    this._responseSizeRateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeRateNameInput() {
    return this._responseSizeRateName;
  }
}

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRatesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRates[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRatesOutputReference {
    return new DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#age DataThunderDdosDstZoneOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat1_limit DataThunderDdosDstZoneOper#app_stat1_limit}
  */
  readonly appStat1Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat2_limit DataThunderDdosDstZoneOper#app_stat2_limit}
  */
  readonly appStat2Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat3_limit DataThunderDdosDstZoneOper#app_stat3_limit}
  */
  readonly appStat3Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat4_limit DataThunderDdosDstZoneOper#app_stat4_limit}
  */
  readonly appStat4Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat5_limit DataThunderDdosDstZoneOper#app_stat5_limit}
  */
  readonly appStat5Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat6_limit DataThunderDdosDstZoneOper#app_stat6_limit}
  */
  readonly appStat6Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat7_limit DataThunderDdosDstZoneOper#app_stat7_limit}
  */
  readonly appStat7Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat8_limit DataThunderDdosDstZoneOper#app_stat8_limit}
  */
  readonly appStat8Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#bl_reasoning_rcode DataThunderDdosDstZoneOper#bl_reasoning_rcode}
  */
  readonly blReasoningRcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#bl_reasoning_timestamp DataThunderDdosDstZoneOper#bl_reasoning_timestamp}
  */
  readonly blReasoningTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#bw_state DataThunderDdosDstZoneOper#bw_state}
  */
  readonly bwState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#connection_limit DataThunderDdosDstZoneOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#connection_rate_limit DataThunderDdosDstZoneOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat1 DataThunderDdosDstZoneOper#current_app_stat1}
  */
  readonly currentAppStat1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat2 DataThunderDdosDstZoneOper#current_app_stat2}
  */
  readonly currentAppStat2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat3 DataThunderDdosDstZoneOper#current_app_stat3}
  */
  readonly currentAppStat3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat4 DataThunderDdosDstZoneOper#current_app_stat4}
  */
  readonly currentAppStat4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat5 DataThunderDdosDstZoneOper#current_app_stat5}
  */
  readonly currentAppStat5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat6 DataThunderDdosDstZoneOper#current_app_stat6}
  */
  readonly currentAppStat6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat7 DataThunderDdosDstZoneOper#current_app_stat7}
  */
  readonly currentAppStat7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat8 DataThunderDdosDstZoneOper#current_app_stat8}
  */
  readonly currentAppStat8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_connection_rate DataThunderDdosDstZoneOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_connections DataThunderDdosDstZoneOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_frag_packet_rate DataThunderDdosDstZoneOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_kbit_rate DataThunderDdosDstZoneOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_packet_rate DataThunderDdosDstZoneOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#debug_str DataThunderDdosDstZoneOper#debug_str}
  */
  readonly debugStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dst_address_str DataThunderDdosDstZoneOper#dst_address_str}
  */
  readonly dstAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_count DataThunderDdosDstZoneOper#dynamic_entry_count}
  */
  readonly dynamicEntryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_limit DataThunderDdosDstZoneOper#dynamic_entry_limit}
  */
  readonly dynamicEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_warn_state DataThunderDdosDstZoneOper#dynamic_entry_warn_state}
  */
  readonly dynamicEntryWarnState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#frag_packet_rate_limit DataThunderDdosDstZoneOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat1_exceed DataThunderDdosDstZoneOper#is_app_stat1_exceed}
  */
  readonly isAppStat1Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat2_exceed DataThunderDdosDstZoneOper#is_app_stat2_exceed}
  */
  readonly isAppStat2Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat3_exceed DataThunderDdosDstZoneOper#is_app_stat3_exceed}
  */
  readonly isAppStat3Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat4_exceed DataThunderDdosDstZoneOper#is_app_stat4_exceed}
  */
  readonly isAppStat4Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat5_exceed DataThunderDdosDstZoneOper#is_app_stat5_exceed}
  */
  readonly isAppStat5Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat6_exceed DataThunderDdosDstZoneOper#is_app_stat6_exceed}
  */
  readonly isAppStat6Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat7_exceed DataThunderDdosDstZoneOper#is_app_stat7_exceed}
  */
  readonly isAppStat7Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat8_exceed DataThunderDdosDstZoneOper#is_app_stat8_exceed}
  */
  readonly isAppStat8Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_auth_passed DataThunderDdosDstZoneOper#is_auth_passed}
  */
  readonly isAuthPassed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_connection_rate_exceed DataThunderDdosDstZoneOper#is_connection_rate_exceed}
  */
  readonly isConnectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_connections_exceed DataThunderDdosDstZoneOper#is_connections_exceed}
  */
  readonly isConnectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_frag_packet_rate_exceed DataThunderDdosDstZoneOper#is_frag_packet_rate_exceed}
  */
  readonly isFragPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_kbit_rate_exceed DataThunderDdosDstZoneOper#is_kbit_rate_exceed}
  */
  readonly isKbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_packet_rate_exceed DataThunderDdosDstZoneOper#is_packet_rate_exceed}
  */
  readonly isPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#kbit_rate_limit DataThunderDdosDstZoneOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#level DataThunderDdosDstZoneOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#lockup_time DataThunderDdosDstZoneOper#lockup_time}
  */
  readonly lockupTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#packet_rate_limit DataThunderDdosDstZoneOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sflow_source_id DataThunderDdosDstZoneOper#sflow_source_id}
  */
  readonly sflowSourceId?: number;
  /**
  * http_filter_rates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#http_filter_rates DataThunderDdosDstZoneOper#http_filter_rates}
  */
  readonly httpFilterRates?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRates[] | cdktf.IResolvable;
  /**
  * response_size_rates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#response_size_rates DataThunderDdosDstZoneOper#response_size_rates}
  */
  readonly responseSizeRates?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRates[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStructToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    app_stat1_limit: cdktf.stringToTerraform(struct!.appStat1Limit),
    app_stat2_limit: cdktf.stringToTerraform(struct!.appStat2Limit),
    app_stat3_limit: cdktf.stringToTerraform(struct!.appStat3Limit),
    app_stat4_limit: cdktf.stringToTerraform(struct!.appStat4Limit),
    app_stat5_limit: cdktf.stringToTerraform(struct!.appStat5Limit),
    app_stat6_limit: cdktf.stringToTerraform(struct!.appStat6Limit),
    app_stat7_limit: cdktf.stringToTerraform(struct!.appStat7Limit),
    app_stat8_limit: cdktf.stringToTerraform(struct!.appStat8Limit),
    bl_reasoning_rcode: cdktf.stringToTerraform(struct!.blReasoningRcode),
    bl_reasoning_timestamp: cdktf.stringToTerraform(struct!.blReasoningTimestamp),
    bw_state: cdktf.stringToTerraform(struct!.bwState),
    connection_limit: cdktf.stringToTerraform(struct!.connectionLimit),
    connection_rate_limit: cdktf.stringToTerraform(struct!.connectionRateLimit),
    current_app_stat1: cdktf.stringToTerraform(struct!.currentAppStat1),
    current_app_stat2: cdktf.stringToTerraform(struct!.currentAppStat2),
    current_app_stat3: cdktf.stringToTerraform(struct!.currentAppStat3),
    current_app_stat4: cdktf.stringToTerraform(struct!.currentAppStat4),
    current_app_stat5: cdktf.stringToTerraform(struct!.currentAppStat5),
    current_app_stat6: cdktf.stringToTerraform(struct!.currentAppStat6),
    current_app_stat7: cdktf.stringToTerraform(struct!.currentAppStat7),
    current_app_stat8: cdktf.stringToTerraform(struct!.currentAppStat8),
    current_connection_rate: cdktf.stringToTerraform(struct!.currentConnectionRate),
    current_connections: cdktf.stringToTerraform(struct!.currentConnections),
    current_frag_packet_rate: cdktf.stringToTerraform(struct!.currentFragPacketRate),
    current_kbit_rate: cdktf.stringToTerraform(struct!.currentKbitRate),
    current_packet_rate: cdktf.stringToTerraform(struct!.currentPacketRate),
    debug_str: cdktf.stringToTerraform(struct!.debugStr),
    dst_address_str: cdktf.stringToTerraform(struct!.dstAddressStr),
    dynamic_entry_count: cdktf.stringToTerraform(struct!.dynamicEntryCount),
    dynamic_entry_limit: cdktf.stringToTerraform(struct!.dynamicEntryLimit),
    dynamic_entry_warn_state: cdktf.stringToTerraform(struct!.dynamicEntryWarnState),
    frag_packet_rate_limit: cdktf.stringToTerraform(struct!.fragPacketRateLimit),
    is_app_stat1_exceed: cdktf.numberToTerraform(struct!.isAppStat1Exceed),
    is_app_stat2_exceed: cdktf.numberToTerraform(struct!.isAppStat2Exceed),
    is_app_stat3_exceed: cdktf.numberToTerraform(struct!.isAppStat3Exceed),
    is_app_stat4_exceed: cdktf.numberToTerraform(struct!.isAppStat4Exceed),
    is_app_stat5_exceed: cdktf.numberToTerraform(struct!.isAppStat5Exceed),
    is_app_stat6_exceed: cdktf.numberToTerraform(struct!.isAppStat6Exceed),
    is_app_stat7_exceed: cdktf.numberToTerraform(struct!.isAppStat7Exceed),
    is_app_stat8_exceed: cdktf.numberToTerraform(struct!.isAppStat8Exceed),
    is_auth_passed: cdktf.stringToTerraform(struct!.isAuthPassed),
    is_connection_rate_exceed: cdktf.numberToTerraform(struct!.isConnectionRateExceed),
    is_connections_exceed: cdktf.numberToTerraform(struct!.isConnectionsExceed),
    is_frag_packet_rate_exceed: cdktf.numberToTerraform(struct!.isFragPacketRateExceed),
    is_kbit_rate_exceed: cdktf.numberToTerraform(struct!.isKbitRateExceed),
    is_packet_rate_exceed: cdktf.numberToTerraform(struct!.isPacketRateExceed),
    kbit_rate_limit: cdktf.stringToTerraform(struct!.kbitRateLimit),
    level: cdktf.numberToTerraform(struct!.level),
    lockup_time: cdktf.numberToTerraform(struct!.lockupTime),
    packet_rate_limit: cdktf.stringToTerraform(struct!.packetRateLimit),
    sflow_source_id: cdktf.numberToTerraform(struct!.sflowSourceId),
    http_filter_rates: cdktf.listMapper(dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRatesToTerraform, true)(struct!.httpFilterRates),
    response_size_rates: cdktf.listMapper(dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRatesToTerraform, true)(struct!.responseSizeRates),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_stat1_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat1Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat2_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat2Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat3_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat3Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat4_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat4Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat5_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat5Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat6_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat6Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat7_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat7Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat8_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat8Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bl_reasoning_rcode: {
      value: cdktf.stringToHclTerraform(struct!.blReasoningRcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bl_reasoning_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.blReasoningTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bw_state: {
      value: cdktf.stringToHclTerraform(struct!.bwState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat1: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat2: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat3: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat4: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat5: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat6: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat7: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat8: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connection_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentConnectionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connections: {
      value: cdktf.stringToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_frag_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentFragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_kbit_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentKbitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_str: {
      value: cdktf.stringToHclTerraform(struct!.debugStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_address_str: {
      value: cdktf.stringToHclTerraform(struct!.dstAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_count: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_limit: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_warn_state: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryWarnState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.fragPacketRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_app_stat1_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat1Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat2_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat2Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat3_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat3Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat4_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat4Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat5_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat5Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat6_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat6Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat7_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat7Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat8_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat8Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_auth_passed: {
      value: cdktf.stringToHclTerraform(struct!.isAuthPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_frag_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isFragPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_time: {
      value: cdktf.numberToHclTerraform(struct!.lockupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.numberToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_filter_rates: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRatesToHclTerraform, true)(struct!.httpFilterRates),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRatesList",
    },
    response_size_rates: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRatesToHclTerraform, true)(struct!.responseSizeRates),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._appStat1Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat1Limit = this._appStat1Limit;
    }
    if (this._appStat2Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat2Limit = this._appStat2Limit;
    }
    if (this._appStat3Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat3Limit = this._appStat3Limit;
    }
    if (this._appStat4Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat4Limit = this._appStat4Limit;
    }
    if (this._appStat5Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat5Limit = this._appStat5Limit;
    }
    if (this._appStat6Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat6Limit = this._appStat6Limit;
    }
    if (this._appStat7Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat7Limit = this._appStat7Limit;
    }
    if (this._appStat8Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat8Limit = this._appStat8Limit;
    }
    if (this._blReasoningRcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blReasoningRcode = this._blReasoningRcode;
    }
    if (this._blReasoningTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.blReasoningTimestamp = this._blReasoningTimestamp;
    }
    if (this._bwState !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwState = this._bwState;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._connectionRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateLimit = this._connectionRateLimit;
    }
    if (this._currentAppStat1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat1 = this._currentAppStat1;
    }
    if (this._currentAppStat2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat2 = this._currentAppStat2;
    }
    if (this._currentAppStat3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat3 = this._currentAppStat3;
    }
    if (this._currentAppStat4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat4 = this._currentAppStat4;
    }
    if (this._currentAppStat5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat5 = this._currentAppStat5;
    }
    if (this._currentAppStat6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat6 = this._currentAppStat6;
    }
    if (this._currentAppStat7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat7 = this._currentAppStat7;
    }
    if (this._currentAppStat8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat8 = this._currentAppStat8;
    }
    if (this._currentConnectionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnectionRate = this._currentConnectionRate;
    }
    if (this._currentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnections = this._currentConnections;
    }
    if (this._currentFragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentFragPacketRate = this._currentFragPacketRate;
    }
    if (this._currentKbitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKbitRate = this._currentKbitRate;
    }
    if (this._currentPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPacketRate = this._currentPacketRate;
    }
    if (this._debugStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugStr = this._debugStr;
    }
    if (this._dstAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddressStr = this._dstAddressStr;
    }
    if (this._dynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryCount = this._dynamicEntryCount;
    }
    if (this._dynamicEntryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryLimit = this._dynamicEntryLimit;
    }
    if (this._dynamicEntryWarnState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryWarnState = this._dynamicEntryWarnState;
    }
    if (this._fragPacketRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRateLimit = this._fragPacketRateLimit;
    }
    if (this._isAppStat1Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat1Exceed = this._isAppStat1Exceed;
    }
    if (this._isAppStat2Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat2Exceed = this._isAppStat2Exceed;
    }
    if (this._isAppStat3Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat3Exceed = this._isAppStat3Exceed;
    }
    if (this._isAppStat4Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat4Exceed = this._isAppStat4Exceed;
    }
    if (this._isAppStat5Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat5Exceed = this._isAppStat5Exceed;
    }
    if (this._isAppStat6Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat6Exceed = this._isAppStat6Exceed;
    }
    if (this._isAppStat7Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat7Exceed = this._isAppStat7Exceed;
    }
    if (this._isAppStat8Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat8Exceed = this._isAppStat8Exceed;
    }
    if (this._isAuthPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuthPassed = this._isAuthPassed;
    }
    if (this._isConnectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionRateExceed = this._isConnectionRateExceed;
    }
    if (this._isConnectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionsExceed = this._isConnectionsExceed;
    }
    if (this._isFragPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFragPacketRateExceed = this._isFragPacketRateExceed;
    }
    if (this._isKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKbitRateExceed = this._isKbitRateExceed;
    }
    if (this._isPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPacketRateExceed = this._isPacketRateExceed;
    }
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._lockupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTime = this._lockupTime;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    if (this._httpFilterRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRates = this._httpFilterRates?.internalValue;
    }
    if (this._responseSizeRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeRates = this._responseSizeRates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._appStat1Limit = undefined;
      this._appStat2Limit = undefined;
      this._appStat3Limit = undefined;
      this._appStat4Limit = undefined;
      this._appStat5Limit = undefined;
      this._appStat6Limit = undefined;
      this._appStat7Limit = undefined;
      this._appStat8Limit = undefined;
      this._blReasoningRcode = undefined;
      this._blReasoningTimestamp = undefined;
      this._bwState = undefined;
      this._connectionLimit = undefined;
      this._connectionRateLimit = undefined;
      this._currentAppStat1 = undefined;
      this._currentAppStat2 = undefined;
      this._currentAppStat3 = undefined;
      this._currentAppStat4 = undefined;
      this._currentAppStat5 = undefined;
      this._currentAppStat6 = undefined;
      this._currentAppStat7 = undefined;
      this._currentAppStat8 = undefined;
      this._currentConnectionRate = undefined;
      this._currentConnections = undefined;
      this._currentFragPacketRate = undefined;
      this._currentKbitRate = undefined;
      this._currentPacketRate = undefined;
      this._debugStr = undefined;
      this._dstAddressStr = undefined;
      this._dynamicEntryCount = undefined;
      this._dynamicEntryLimit = undefined;
      this._dynamicEntryWarnState = undefined;
      this._fragPacketRateLimit = undefined;
      this._isAppStat1Exceed = undefined;
      this._isAppStat2Exceed = undefined;
      this._isAppStat3Exceed = undefined;
      this._isAppStat4Exceed = undefined;
      this._isAppStat5Exceed = undefined;
      this._isAppStat6Exceed = undefined;
      this._isAppStat7Exceed = undefined;
      this._isAppStat8Exceed = undefined;
      this._isAuthPassed = undefined;
      this._isConnectionRateExceed = undefined;
      this._isConnectionsExceed = undefined;
      this._isFragPacketRateExceed = undefined;
      this._isKbitRateExceed = undefined;
      this._isPacketRateExceed = undefined;
      this._kbitRateLimit = undefined;
      this._level = undefined;
      this._lockupTime = undefined;
      this._packetRateLimit = undefined;
      this._sflowSourceId = undefined;
      this._httpFilterRates.internalValue = undefined;
      this._responseSizeRates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._appStat1Limit = value.appStat1Limit;
      this._appStat2Limit = value.appStat2Limit;
      this._appStat3Limit = value.appStat3Limit;
      this._appStat4Limit = value.appStat4Limit;
      this._appStat5Limit = value.appStat5Limit;
      this._appStat6Limit = value.appStat6Limit;
      this._appStat7Limit = value.appStat7Limit;
      this._appStat8Limit = value.appStat8Limit;
      this._blReasoningRcode = value.blReasoningRcode;
      this._blReasoningTimestamp = value.blReasoningTimestamp;
      this._bwState = value.bwState;
      this._connectionLimit = value.connectionLimit;
      this._connectionRateLimit = value.connectionRateLimit;
      this._currentAppStat1 = value.currentAppStat1;
      this._currentAppStat2 = value.currentAppStat2;
      this._currentAppStat3 = value.currentAppStat3;
      this._currentAppStat4 = value.currentAppStat4;
      this._currentAppStat5 = value.currentAppStat5;
      this._currentAppStat6 = value.currentAppStat6;
      this._currentAppStat7 = value.currentAppStat7;
      this._currentAppStat8 = value.currentAppStat8;
      this._currentConnectionRate = value.currentConnectionRate;
      this._currentConnections = value.currentConnections;
      this._currentFragPacketRate = value.currentFragPacketRate;
      this._currentKbitRate = value.currentKbitRate;
      this._currentPacketRate = value.currentPacketRate;
      this._debugStr = value.debugStr;
      this._dstAddressStr = value.dstAddressStr;
      this._dynamicEntryCount = value.dynamicEntryCount;
      this._dynamicEntryLimit = value.dynamicEntryLimit;
      this._dynamicEntryWarnState = value.dynamicEntryWarnState;
      this._fragPacketRateLimit = value.fragPacketRateLimit;
      this._isAppStat1Exceed = value.isAppStat1Exceed;
      this._isAppStat2Exceed = value.isAppStat2Exceed;
      this._isAppStat3Exceed = value.isAppStat3Exceed;
      this._isAppStat4Exceed = value.isAppStat4Exceed;
      this._isAppStat5Exceed = value.isAppStat5Exceed;
      this._isAppStat6Exceed = value.isAppStat6Exceed;
      this._isAppStat7Exceed = value.isAppStat7Exceed;
      this._isAppStat8Exceed = value.isAppStat8Exceed;
      this._isAuthPassed = value.isAuthPassed;
      this._isConnectionRateExceed = value.isConnectionRateExceed;
      this._isConnectionsExceed = value.isConnectionsExceed;
      this._isFragPacketRateExceed = value.isFragPacketRateExceed;
      this._isKbitRateExceed = value.isKbitRateExceed;
      this._isPacketRateExceed = value.isPacketRateExceed;
      this._kbitRateLimit = value.kbitRateLimit;
      this._level = value.level;
      this._lockupTime = value.lockupTime;
      this._packetRateLimit = value.packetRateLimit;
      this._sflowSourceId = value.sflowSourceId;
      this._httpFilterRates.internalValue = value.httpFilterRates;
      this._responseSizeRates.internalValue = value.responseSizeRates;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // app_stat1_limit - computed: false, optional: true, required: false
  private _appStat1Limit?: string; 
  public get appStat1Limit() {
    return this.getStringAttribute('app_stat1_limit');
  }
  public set appStat1Limit(value: string) {
    this._appStat1Limit = value;
  }
  public resetAppStat1Limit() {
    this._appStat1Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat1LimitInput() {
    return this._appStat1Limit;
  }

  // app_stat2_limit - computed: false, optional: true, required: false
  private _appStat2Limit?: string; 
  public get appStat2Limit() {
    return this.getStringAttribute('app_stat2_limit');
  }
  public set appStat2Limit(value: string) {
    this._appStat2Limit = value;
  }
  public resetAppStat2Limit() {
    this._appStat2Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat2LimitInput() {
    return this._appStat2Limit;
  }

  // app_stat3_limit - computed: false, optional: true, required: false
  private _appStat3Limit?: string; 
  public get appStat3Limit() {
    return this.getStringAttribute('app_stat3_limit');
  }
  public set appStat3Limit(value: string) {
    this._appStat3Limit = value;
  }
  public resetAppStat3Limit() {
    this._appStat3Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat3LimitInput() {
    return this._appStat3Limit;
  }

  // app_stat4_limit - computed: false, optional: true, required: false
  private _appStat4Limit?: string; 
  public get appStat4Limit() {
    return this.getStringAttribute('app_stat4_limit');
  }
  public set appStat4Limit(value: string) {
    this._appStat4Limit = value;
  }
  public resetAppStat4Limit() {
    this._appStat4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat4LimitInput() {
    return this._appStat4Limit;
  }

  // app_stat5_limit - computed: false, optional: true, required: false
  private _appStat5Limit?: string; 
  public get appStat5Limit() {
    return this.getStringAttribute('app_stat5_limit');
  }
  public set appStat5Limit(value: string) {
    this._appStat5Limit = value;
  }
  public resetAppStat5Limit() {
    this._appStat5Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat5LimitInput() {
    return this._appStat5Limit;
  }

  // app_stat6_limit - computed: false, optional: true, required: false
  private _appStat6Limit?: string; 
  public get appStat6Limit() {
    return this.getStringAttribute('app_stat6_limit');
  }
  public set appStat6Limit(value: string) {
    this._appStat6Limit = value;
  }
  public resetAppStat6Limit() {
    this._appStat6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat6LimitInput() {
    return this._appStat6Limit;
  }

  // app_stat7_limit - computed: false, optional: true, required: false
  private _appStat7Limit?: string; 
  public get appStat7Limit() {
    return this.getStringAttribute('app_stat7_limit');
  }
  public set appStat7Limit(value: string) {
    this._appStat7Limit = value;
  }
  public resetAppStat7Limit() {
    this._appStat7Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat7LimitInput() {
    return this._appStat7Limit;
  }

  // app_stat8_limit - computed: false, optional: true, required: false
  private _appStat8Limit?: string; 
  public get appStat8Limit() {
    return this.getStringAttribute('app_stat8_limit');
  }
  public set appStat8Limit(value: string) {
    this._appStat8Limit = value;
  }
  public resetAppStat8Limit() {
    this._appStat8Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat8LimitInput() {
    return this._appStat8Limit;
  }

  // bl_reasoning_rcode - computed: false, optional: true, required: false
  private _blReasoningRcode?: string; 
  public get blReasoningRcode() {
    return this.getStringAttribute('bl_reasoning_rcode');
  }
  public set blReasoningRcode(value: string) {
    this._blReasoningRcode = value;
  }
  public resetBlReasoningRcode() {
    this._blReasoningRcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blReasoningRcodeInput() {
    return this._blReasoningRcode;
  }

  // bl_reasoning_timestamp - computed: false, optional: true, required: false
  private _blReasoningTimestamp?: string; 
  public get blReasoningTimestamp() {
    return this.getStringAttribute('bl_reasoning_timestamp');
  }
  public set blReasoningTimestamp(value: string) {
    this._blReasoningTimestamp = value;
  }
  public resetBlReasoningTimestamp() {
    this._blReasoningTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blReasoningTimestampInput() {
    return this._blReasoningTimestamp;
  }

  // bw_state - computed: false, optional: true, required: false
  private _bwState?: string; 
  public get bwState() {
    return this.getStringAttribute('bw_state');
  }
  public set bwState(value: string) {
    this._bwState = value;
  }
  public resetBwState() {
    this._bwState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwStateInput() {
    return this._bwState;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_rate_limit - computed: false, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // current_app_stat1 - computed: false, optional: true, required: false
  private _currentAppStat1?: string; 
  public get currentAppStat1() {
    return this.getStringAttribute('current_app_stat1');
  }
  public set currentAppStat1(value: string) {
    this._currentAppStat1 = value;
  }
  public resetCurrentAppStat1() {
    this._currentAppStat1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat1Input() {
    return this._currentAppStat1;
  }

  // current_app_stat2 - computed: false, optional: true, required: false
  private _currentAppStat2?: string; 
  public get currentAppStat2() {
    return this.getStringAttribute('current_app_stat2');
  }
  public set currentAppStat2(value: string) {
    this._currentAppStat2 = value;
  }
  public resetCurrentAppStat2() {
    this._currentAppStat2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat2Input() {
    return this._currentAppStat2;
  }

  // current_app_stat3 - computed: false, optional: true, required: false
  private _currentAppStat3?: string; 
  public get currentAppStat3() {
    return this.getStringAttribute('current_app_stat3');
  }
  public set currentAppStat3(value: string) {
    this._currentAppStat3 = value;
  }
  public resetCurrentAppStat3() {
    this._currentAppStat3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat3Input() {
    return this._currentAppStat3;
  }

  // current_app_stat4 - computed: false, optional: true, required: false
  private _currentAppStat4?: string; 
  public get currentAppStat4() {
    return this.getStringAttribute('current_app_stat4');
  }
  public set currentAppStat4(value: string) {
    this._currentAppStat4 = value;
  }
  public resetCurrentAppStat4() {
    this._currentAppStat4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat4Input() {
    return this._currentAppStat4;
  }

  // current_app_stat5 - computed: false, optional: true, required: false
  private _currentAppStat5?: string; 
  public get currentAppStat5() {
    return this.getStringAttribute('current_app_stat5');
  }
  public set currentAppStat5(value: string) {
    this._currentAppStat5 = value;
  }
  public resetCurrentAppStat5() {
    this._currentAppStat5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat5Input() {
    return this._currentAppStat5;
  }

  // current_app_stat6 - computed: false, optional: true, required: false
  private _currentAppStat6?: string; 
  public get currentAppStat6() {
    return this.getStringAttribute('current_app_stat6');
  }
  public set currentAppStat6(value: string) {
    this._currentAppStat6 = value;
  }
  public resetCurrentAppStat6() {
    this._currentAppStat6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat6Input() {
    return this._currentAppStat6;
  }

  // current_app_stat7 - computed: false, optional: true, required: false
  private _currentAppStat7?: string; 
  public get currentAppStat7() {
    return this.getStringAttribute('current_app_stat7');
  }
  public set currentAppStat7(value: string) {
    this._currentAppStat7 = value;
  }
  public resetCurrentAppStat7() {
    this._currentAppStat7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat7Input() {
    return this._currentAppStat7;
  }

  // current_app_stat8 - computed: false, optional: true, required: false
  private _currentAppStat8?: string; 
  public get currentAppStat8() {
    return this.getStringAttribute('current_app_stat8');
  }
  public set currentAppStat8(value: string) {
    this._currentAppStat8 = value;
  }
  public resetCurrentAppStat8() {
    this._currentAppStat8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat8Input() {
    return this._currentAppStat8;
  }

  // current_connection_rate - computed: false, optional: true, required: false
  private _currentConnectionRate?: string; 
  public get currentConnectionRate() {
    return this.getStringAttribute('current_connection_rate');
  }
  public set currentConnectionRate(value: string) {
    this._currentConnectionRate = value;
  }
  public resetCurrentConnectionRate() {
    this._currentConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionRateInput() {
    return this._currentConnectionRate;
  }

  // current_connections - computed: false, optional: true, required: false
  private _currentConnections?: string; 
  public get currentConnections() {
    return this.getStringAttribute('current_connections');
  }
  public set currentConnections(value: string) {
    this._currentConnections = value;
  }
  public resetCurrentConnections() {
    this._currentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionsInput() {
    return this._currentConnections;
  }

  // current_frag_packet_rate - computed: false, optional: true, required: false
  private _currentFragPacketRate?: string; 
  public get currentFragPacketRate() {
    return this.getStringAttribute('current_frag_packet_rate');
  }
  public set currentFragPacketRate(value: string) {
    this._currentFragPacketRate = value;
  }
  public resetCurrentFragPacketRate() {
    this._currentFragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentFragPacketRateInput() {
    return this._currentFragPacketRate;
  }

  // current_kbit_rate - computed: false, optional: true, required: false
  private _currentKbitRate?: string; 
  public get currentKbitRate() {
    return this.getStringAttribute('current_kbit_rate');
  }
  public set currentKbitRate(value: string) {
    this._currentKbitRate = value;
  }
  public resetCurrentKbitRate() {
    this._currentKbitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKbitRateInput() {
    return this._currentKbitRate;
  }

  // current_packet_rate - computed: false, optional: true, required: false
  private _currentPacketRate?: string; 
  public get currentPacketRate() {
    return this.getStringAttribute('current_packet_rate');
  }
  public set currentPacketRate(value: string) {
    this._currentPacketRate = value;
  }
  public resetCurrentPacketRate() {
    this._currentPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPacketRateInput() {
    return this._currentPacketRate;
  }

  // debug_str - computed: false, optional: true, required: false
  private _debugStr?: string; 
  public get debugStr() {
    return this.getStringAttribute('debug_str');
  }
  public set debugStr(value: string) {
    this._debugStr = value;
  }
  public resetDebugStr() {
    this._debugStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugStrInput() {
    return this._debugStr;
  }

  // dst_address_str - computed: false, optional: true, required: false
  private _dstAddressStr?: string; 
  public get dstAddressStr() {
    return this.getStringAttribute('dst_address_str');
  }
  public set dstAddressStr(value: string) {
    this._dstAddressStr = value;
  }
  public resetDstAddressStr() {
    this._dstAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressStrInput() {
    return this._dstAddressStr;
  }

  // dynamic_entry_count - computed: false, optional: true, required: false
  private _dynamicEntryCount?: string; 
  public get dynamicEntryCount() {
    return this.getStringAttribute('dynamic_entry_count');
  }
  public set dynamicEntryCount(value: string) {
    this._dynamicEntryCount = value;
  }
  public resetDynamicEntryCount() {
    this._dynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryCountInput() {
    return this._dynamicEntryCount;
  }

  // dynamic_entry_limit - computed: false, optional: true, required: false
  private _dynamicEntryLimit?: string; 
  public get dynamicEntryLimit() {
    return this.getStringAttribute('dynamic_entry_limit');
  }
  public set dynamicEntryLimit(value: string) {
    this._dynamicEntryLimit = value;
  }
  public resetDynamicEntryLimit() {
    this._dynamicEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryLimitInput() {
    return this._dynamicEntryLimit;
  }

  // dynamic_entry_warn_state - computed: false, optional: true, required: false
  private _dynamicEntryWarnState?: string; 
  public get dynamicEntryWarnState() {
    return this.getStringAttribute('dynamic_entry_warn_state');
  }
  public set dynamicEntryWarnState(value: string) {
    this._dynamicEntryWarnState = value;
  }
  public resetDynamicEntryWarnState() {
    this._dynamicEntryWarnState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryWarnStateInput() {
    return this._dynamicEntryWarnState;
  }

  // frag_packet_rate_limit - computed: false, optional: true, required: false
  private _fragPacketRateLimit?: string; 
  public get fragPacketRateLimit() {
    return this.getStringAttribute('frag_packet_rate_limit');
  }
  public set fragPacketRateLimit(value: string) {
    this._fragPacketRateLimit = value;
  }
  public resetFragPacketRateLimit() {
    this._fragPacketRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateLimitInput() {
    return this._fragPacketRateLimit;
  }

  // is_app_stat1_exceed - computed: false, optional: true, required: false
  private _isAppStat1Exceed?: number; 
  public get isAppStat1Exceed() {
    return this.getNumberAttribute('is_app_stat1_exceed');
  }
  public set isAppStat1Exceed(value: number) {
    this._isAppStat1Exceed = value;
  }
  public resetIsAppStat1Exceed() {
    this._isAppStat1Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat1ExceedInput() {
    return this._isAppStat1Exceed;
  }

  // is_app_stat2_exceed - computed: false, optional: true, required: false
  private _isAppStat2Exceed?: number; 
  public get isAppStat2Exceed() {
    return this.getNumberAttribute('is_app_stat2_exceed');
  }
  public set isAppStat2Exceed(value: number) {
    this._isAppStat2Exceed = value;
  }
  public resetIsAppStat2Exceed() {
    this._isAppStat2Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat2ExceedInput() {
    return this._isAppStat2Exceed;
  }

  // is_app_stat3_exceed - computed: false, optional: true, required: false
  private _isAppStat3Exceed?: number; 
  public get isAppStat3Exceed() {
    return this.getNumberAttribute('is_app_stat3_exceed');
  }
  public set isAppStat3Exceed(value: number) {
    this._isAppStat3Exceed = value;
  }
  public resetIsAppStat3Exceed() {
    this._isAppStat3Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat3ExceedInput() {
    return this._isAppStat3Exceed;
  }

  // is_app_stat4_exceed - computed: false, optional: true, required: false
  private _isAppStat4Exceed?: number; 
  public get isAppStat4Exceed() {
    return this.getNumberAttribute('is_app_stat4_exceed');
  }
  public set isAppStat4Exceed(value: number) {
    this._isAppStat4Exceed = value;
  }
  public resetIsAppStat4Exceed() {
    this._isAppStat4Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat4ExceedInput() {
    return this._isAppStat4Exceed;
  }

  // is_app_stat5_exceed - computed: false, optional: true, required: false
  private _isAppStat5Exceed?: number; 
  public get isAppStat5Exceed() {
    return this.getNumberAttribute('is_app_stat5_exceed');
  }
  public set isAppStat5Exceed(value: number) {
    this._isAppStat5Exceed = value;
  }
  public resetIsAppStat5Exceed() {
    this._isAppStat5Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat5ExceedInput() {
    return this._isAppStat5Exceed;
  }

  // is_app_stat6_exceed - computed: false, optional: true, required: false
  private _isAppStat6Exceed?: number; 
  public get isAppStat6Exceed() {
    return this.getNumberAttribute('is_app_stat6_exceed');
  }
  public set isAppStat6Exceed(value: number) {
    this._isAppStat6Exceed = value;
  }
  public resetIsAppStat6Exceed() {
    this._isAppStat6Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat6ExceedInput() {
    return this._isAppStat6Exceed;
  }

  // is_app_stat7_exceed - computed: false, optional: true, required: false
  private _isAppStat7Exceed?: number; 
  public get isAppStat7Exceed() {
    return this.getNumberAttribute('is_app_stat7_exceed');
  }
  public set isAppStat7Exceed(value: number) {
    this._isAppStat7Exceed = value;
  }
  public resetIsAppStat7Exceed() {
    this._isAppStat7Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat7ExceedInput() {
    return this._isAppStat7Exceed;
  }

  // is_app_stat8_exceed - computed: false, optional: true, required: false
  private _isAppStat8Exceed?: number; 
  public get isAppStat8Exceed() {
    return this.getNumberAttribute('is_app_stat8_exceed');
  }
  public set isAppStat8Exceed(value: number) {
    this._isAppStat8Exceed = value;
  }
  public resetIsAppStat8Exceed() {
    this._isAppStat8Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat8ExceedInput() {
    return this._isAppStat8Exceed;
  }

  // is_auth_passed - computed: false, optional: true, required: false
  private _isAuthPassed?: string; 
  public get isAuthPassed() {
    return this.getStringAttribute('is_auth_passed');
  }
  public set isAuthPassed(value: string) {
    this._isAuthPassed = value;
  }
  public resetIsAuthPassed() {
    this._isAuthPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthPassedInput() {
    return this._isAuthPassed;
  }

  // is_connection_rate_exceed - computed: false, optional: true, required: false
  private _isConnectionRateExceed?: number; 
  public get isConnectionRateExceed() {
    return this.getNumberAttribute('is_connection_rate_exceed');
  }
  public set isConnectionRateExceed(value: number) {
    this._isConnectionRateExceed = value;
  }
  public resetIsConnectionRateExceed() {
    this._isConnectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionRateExceedInput() {
    return this._isConnectionRateExceed;
  }

  // is_connections_exceed - computed: false, optional: true, required: false
  private _isConnectionsExceed?: number; 
  public get isConnectionsExceed() {
    return this.getNumberAttribute('is_connections_exceed');
  }
  public set isConnectionsExceed(value: number) {
    this._isConnectionsExceed = value;
  }
  public resetIsConnectionsExceed() {
    this._isConnectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionsExceedInput() {
    return this._isConnectionsExceed;
  }

  // is_frag_packet_rate_exceed - computed: false, optional: true, required: false
  private _isFragPacketRateExceed?: number; 
  public get isFragPacketRateExceed() {
    return this.getNumberAttribute('is_frag_packet_rate_exceed');
  }
  public set isFragPacketRateExceed(value: number) {
    this._isFragPacketRateExceed = value;
  }
  public resetIsFragPacketRateExceed() {
    this._isFragPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFragPacketRateExceedInput() {
    return this._isFragPacketRateExceed;
  }

  // is_kbit_rate_exceed - computed: false, optional: true, required: false
  private _isKbitRateExceed?: number; 
  public get isKbitRateExceed() {
    return this.getNumberAttribute('is_kbit_rate_exceed');
  }
  public set isKbitRateExceed(value: number) {
    this._isKbitRateExceed = value;
  }
  public resetIsKbitRateExceed() {
    this._isKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKbitRateExceedInput() {
    return this._isKbitRateExceed;
  }

  // is_packet_rate_exceed - computed: false, optional: true, required: false
  private _isPacketRateExceed?: number; 
  public get isPacketRateExceed() {
    return this.getNumberAttribute('is_packet_rate_exceed');
  }
  public set isPacketRateExceed(value: number) {
    this._isPacketRateExceed = value;
  }
  public resetIsPacketRateExceed() {
    this._isPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPacketRateExceedInput() {
    return this._isPacketRateExceed;
  }

  // kbit_rate_limit - computed: false, optional: true, required: false
  private _kbitRateLimit?: string; 
  public get kbitRateLimit() {
    return this.getStringAttribute('kbit_rate_limit');
  }
  public set kbitRateLimit(value: string) {
    this._kbitRateLimit = value;
  }
  public resetKbitRateLimit() {
    this._kbitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateLimitInput() {
    return this._kbitRateLimit;
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

  // lockup_time - computed: false, optional: true, required: false
  private _lockupTime?: number; 
  public get lockupTime() {
    return this.getNumberAttribute('lockup_time');
  }
  public set lockupTime(value: number) {
    this._lockupTime = value;
  }
  public resetLockupTime() {
    this._lockupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupTimeInput() {
    return this._lockupTime;
  }

  // packet_rate_limit - computed: false, optional: true, required: false
  private _packetRateLimit?: string; 
  public get packetRateLimit() {
    return this.getStringAttribute('packet_rate_limit');
  }
  public set packetRateLimit(value: string) {
    this._packetRateLimit = value;
  }
  public resetPacketRateLimit() {
    this._packetRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateLimitInput() {
    return this._packetRateLimit;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: number; 
  public get sflowSourceId() {
    return this.getNumberAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: number) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }

  // http_filter_rates - computed: false, optional: true, required: false
  private _httpFilterRates = new DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRatesList(this, "http_filter_rates", false);
  public get httpFilterRates() {
    return this._httpFilterRates;
  }
  public putHttpFilterRates(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListHttpFilterRates[] | cdktf.IResolvable) {
    this._httpFilterRates.internalValue = value;
  }
  public resetHttpFilterRates() {
    this._httpFilterRates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRatesInput() {
    return this._httpFilterRates.internalValue;
  }

  // response_size_rates - computed: false, optional: true, required: false
  private _responseSizeRates = new DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRatesList(this, "response_size_rates", false);
  public get responseSizeRates() {
    return this._responseSizeRates;
  }
  public putResponseSizeRates(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListResponseSizeRates[] | cdktf.IResolvable) {
    this._responseSizeRates.internalValue = value;
  }
  public resetResponseSizeRates() {
    this._responseSizeRates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeRatesInput() {
    return this._responseSizeRates.internalValue;
  }
}

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStructOutputReference {
    return new DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat DataThunderDdosDstZoneOper#app_stat}
  */
  readonly appStat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#authenticated DataThunderDdosDstZoneOper#authenticated}
  */
  readonly authenticated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#black_listed DataThunderDdosDstZoneOper#black_listed}
  */
  readonly blackListed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#class_list DataThunderDdosDstZoneOper#class_list}
  */
  readonly classList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#domain_name DataThunderDdosDstZoneOper#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#entry_displayed_count DataThunderDdosDstZoneOper#entry_displayed_count}
  */
  readonly entryDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#exceeded DataThunderDdosDstZoneOper#exceeded}
  */
  readonly exceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#hw_blacklisted DataThunderDdosDstZoneOper#hw_blacklisted}
  */
  readonly hwBlacklisted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_detail DataThunderDdosDstZoneOper#indicator_detail}
  */
  readonly indicatorDetail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicators DataThunderDdosDstZoneOper#indicators}
  */
  readonly indicators?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#ipv6 DataThunderDdosDstZoneOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#l4_ext_rate DataThunderDdosDstZoneOper#l4_ext_rate}
  */
  readonly l4ExtRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#level DataThunderDdosDstZoneOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#overflow_policy DataThunderDdosDstZoneOper#overflow_policy}
  */
  readonly overflowPolicy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#reporting_status DataThunderDdosDstZoneOper#reporting_status}
  */
  readonly reportingStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#service_displayed_count DataThunderDdosDstZoneOper#service_displayed_count}
  */
  readonly serviceDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sources DataThunderDdosDstZoneOper#sources}
  */
  readonly sources?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sources_all_entries DataThunderDdosDstZoneOper#sources_all_entries}
  */
  readonly sourcesAllEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#subnet_ip_addr DataThunderDdosDstZoneOper#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#subnet_ipv6_addr DataThunderDdosDstZoneOper#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#suffix_request_rate DataThunderDdosDstZoneOper#suffix_request_rate}
  */
  readonly suffixRequestRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#white_listed DataThunderDdosDstZoneOper#white_listed}
  */
  readonly whiteListed?: number;
  /**
  * ddos_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#ddos_entry_list DataThunderDdosDstZoneOper#ddos_entry_list}
  */
  readonly ddosEntryList?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperOutputReference | DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_stat: cdktf.numberToTerraform(struct!.appStat),
    authenticated: cdktf.numberToTerraform(struct!.authenticated),
    black_listed: cdktf.numberToTerraform(struct!.blackListed),
    class_list: cdktf.stringToTerraform(struct!.classList),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    entry_displayed_count: cdktf.numberToTerraform(struct!.entryDisplayedCount),
    exceeded: cdktf.numberToTerraform(struct!.exceeded),
    hw_blacklisted: cdktf.numberToTerraform(struct!.hwBlacklisted),
    indicator_detail: cdktf.numberToTerraform(struct!.indicatorDetail),
    indicators: cdktf.numberToTerraform(struct!.indicators),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    l4_ext_rate: cdktf.numberToTerraform(struct!.l4ExtRate),
    level: cdktf.numberToTerraform(struct!.level),
    overflow_policy: cdktf.numberToTerraform(struct!.overflowPolicy),
    reporting_status: cdktf.numberToTerraform(struct!.reportingStatus),
    service_displayed_count: cdktf.numberToTerraform(struct!.serviceDisplayedCount),
    sources: cdktf.numberToTerraform(struct!.sources),
    sources_all_entries: cdktf.numberToTerraform(struct!.sourcesAllEntries),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    suffix_request_rate: cdktf.numberToTerraform(struct!.suffixRequestRate),
    white_listed: cdktf.numberToTerraform(struct!.whiteListed),
    ddos_entry_list: cdktf.listMapper(dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStructToTerraform, true)(struct!.ddosEntryList),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperOutputReference | DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_stat: {
      value: cdktf.numberToHclTerraform(struct!.appStat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authenticated: {
      value: cdktf.numberToHclTerraform(struct!.authenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    black_listed: {
      value: cdktf.numberToHclTerraform(struct!.blackListed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.entryDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceeded: {
      value: cdktf.numberToHclTerraform(struct!.exceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_blacklisted: {
      value: cdktf.numberToHclTerraform(struct!.hwBlacklisted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_detail: {
      value: cdktf.numberToHclTerraform(struct!.indicatorDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicators: {
      value: cdktf.numberToHclTerraform(struct!.indicators),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_ext_rate: {
      value: cdktf.numberToHclTerraform(struct!.l4ExtRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overflow_policy: {
      value: cdktf.numberToHclTerraform(struct!.overflowPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reporting_status: {
      value: cdktf.numberToHclTerraform(struct!.reportingStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.serviceDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    suffix_request_rate: {
      value: cdktf.numberToHclTerraform(struct!.suffixRequestRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    white_listed: {
      value: cdktf.numberToHclTerraform(struct!.whiteListed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStructToHclTerraform, true)(struct!.ddosEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat = this._appStat;
    }
    if (this._authenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticated = this._authenticated;
    }
    if (this._blackListed !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackListed = this._blackListed;
    }
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._entryDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDisplayedCount = this._entryDisplayedCount;
    }
    if (this._exceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceeded = this._exceeded;
    }
    if (this._hwBlacklisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwBlacklisted = this._hwBlacklisted;
    }
    if (this._indicatorDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorDetail = this._indicatorDetail;
    }
    if (this._indicators !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._l4ExtRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4ExtRate = this._l4ExtRate;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._overflowPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.overflowPolicy = this._overflowPolicy;
    }
    if (this._reportingStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingStatus = this._reportingStatus;
    }
    if (this._serviceDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDisplayedCount = this._serviceDisplayedCount;
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
    if (this._suffixRequestRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixRequestRate = this._suffixRequestRate;
    }
    if (this._whiteListed !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListed = this._whiteListed;
    }
    if (this._ddosEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryList = this._ddosEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appStat = undefined;
      this._authenticated = undefined;
      this._blackListed = undefined;
      this._classList = undefined;
      this._domainName = undefined;
      this._entryDisplayedCount = undefined;
      this._exceeded = undefined;
      this._hwBlacklisted = undefined;
      this._indicatorDetail = undefined;
      this._indicators = undefined;
      this._ipv6 = undefined;
      this._l4ExtRate = undefined;
      this._level = undefined;
      this._overflowPolicy = undefined;
      this._reportingStatus = undefined;
      this._serviceDisplayedCount = undefined;
      this._sources = undefined;
      this._sourcesAllEntries = undefined;
      this._subnetIpAddr = undefined;
      this._subnetIpv6Addr = undefined;
      this._suffixRequestRate = undefined;
      this._whiteListed = undefined;
      this._ddosEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appStat = value.appStat;
      this._authenticated = value.authenticated;
      this._blackListed = value.blackListed;
      this._classList = value.classList;
      this._domainName = value.domainName;
      this._entryDisplayedCount = value.entryDisplayedCount;
      this._exceeded = value.exceeded;
      this._hwBlacklisted = value.hwBlacklisted;
      this._indicatorDetail = value.indicatorDetail;
      this._indicators = value.indicators;
      this._ipv6 = value.ipv6;
      this._l4ExtRate = value.l4ExtRate;
      this._level = value.level;
      this._overflowPolicy = value.overflowPolicy;
      this._reportingStatus = value.reportingStatus;
      this._serviceDisplayedCount = value.serviceDisplayedCount;
      this._sources = value.sources;
      this._sourcesAllEntries = value.sourcesAllEntries;
      this._subnetIpAddr = value.subnetIpAddr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._suffixRequestRate = value.suffixRequestRate;
      this._whiteListed = value.whiteListed;
      this._ddosEntryList.internalValue = value.ddosEntryList;
    }
  }

  // app_stat - computed: false, optional: true, required: false
  private _appStat?: number; 
  public get appStat() {
    return this.getNumberAttribute('app_stat');
  }
  public set appStat(value: number) {
    this._appStat = value;
  }
  public resetAppStat() {
    this._appStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStatInput() {
    return this._appStat;
  }

  // authenticated - computed: false, optional: true, required: false
  private _authenticated?: number; 
  public get authenticated() {
    return this.getNumberAttribute('authenticated');
  }
  public set authenticated(value: number) {
    this._authenticated = value;
  }
  public resetAuthenticated() {
    this._authenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedInput() {
    return this._authenticated;
  }

  // black_listed - computed: false, optional: true, required: false
  private _blackListed?: number; 
  public get blackListed() {
    return this.getNumberAttribute('black_listed');
  }
  public set blackListed(value: number) {
    this._blackListed = value;
  }
  public resetBlackListed() {
    this._blackListed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListedInput() {
    return this._blackListed;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // entry_displayed_count - computed: false, optional: true, required: false
  private _entryDisplayedCount?: number; 
  public get entryDisplayedCount() {
    return this.getNumberAttribute('entry_displayed_count');
  }
  public set entryDisplayedCount(value: number) {
    this._entryDisplayedCount = value;
  }
  public resetEntryDisplayedCount() {
    this._entryDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDisplayedCountInput() {
    return this._entryDisplayedCount;
  }

  // exceeded - computed: false, optional: true, required: false
  private _exceeded?: number; 
  public get exceeded() {
    return this.getNumberAttribute('exceeded');
  }
  public set exceeded(value: number) {
    this._exceeded = value;
  }
  public resetExceeded() {
    this._exceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceededInput() {
    return this._exceeded;
  }

  // hw_blacklisted - computed: false, optional: true, required: false
  private _hwBlacklisted?: number; 
  public get hwBlacklisted() {
    return this.getNumberAttribute('hw_blacklisted');
  }
  public set hwBlacklisted(value: number) {
    this._hwBlacklisted = value;
  }
  public resetHwBlacklisted() {
    this._hwBlacklisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistedInput() {
    return this._hwBlacklisted;
  }

  // indicator_detail - computed: false, optional: true, required: false
  private _indicatorDetail?: number; 
  public get indicatorDetail() {
    return this.getNumberAttribute('indicator_detail');
  }
  public set indicatorDetail(value: number) {
    this._indicatorDetail = value;
  }
  public resetIndicatorDetail() {
    this._indicatorDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorDetailInput() {
    return this._indicatorDetail;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators?: number; 
  public get indicators() {
    return this.getNumberAttribute('indicators');
  }
  public set indicators(value: number) {
    this._indicators = value;
  }
  public resetIndicators() {
    this._indicators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators;
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

  // l4_ext_rate - computed: false, optional: true, required: false
  private _l4ExtRate?: number; 
  public get l4ExtRate() {
    return this.getNumberAttribute('l4_ext_rate');
  }
  public set l4ExtRate(value: number) {
    this._l4ExtRate = value;
  }
  public resetL4ExtRate() {
    this._l4ExtRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ExtRateInput() {
    return this._l4ExtRate;
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

  // overflow_policy - computed: false, optional: true, required: false
  private _overflowPolicy?: number; 
  public get overflowPolicy() {
    return this.getNumberAttribute('overflow_policy');
  }
  public set overflowPolicy(value: number) {
    this._overflowPolicy = value;
  }
  public resetOverflowPolicy() {
    this._overflowPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowPolicyInput() {
    return this._overflowPolicy;
  }

  // reporting_status - computed: false, optional: true, required: false
  private _reportingStatus?: number; 
  public get reportingStatus() {
    return this.getNumberAttribute('reporting_status');
  }
  public set reportingStatus(value: number) {
    this._reportingStatus = value;
  }
  public resetReportingStatus() {
    this._reportingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingStatusInput() {
    return this._reportingStatus;
  }

  // service_displayed_count - computed: false, optional: true, required: false
  private _serviceDisplayedCount?: number; 
  public get serviceDisplayedCount() {
    return this.getNumberAttribute('service_displayed_count');
  }
  public set serviceDisplayedCount(value: number) {
    this._serviceDisplayedCount = value;
  }
  public resetServiceDisplayedCount() {
    this._serviceDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDisplayedCountInput() {
    return this._serviceDisplayedCount;
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

  // suffix_request_rate - computed: false, optional: true, required: false
  private _suffixRequestRate?: number; 
  public get suffixRequestRate() {
    return this.getNumberAttribute('suffix_request_rate');
  }
  public set suffixRequestRate(value: number) {
    this._suffixRequestRate = value;
  }
  public resetSuffixRequestRate() {
    this._suffixRequestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixRequestRateInput() {
    return this._suffixRequestRate;
  }

  // white_listed - computed: false, optional: true, required: false
  private _whiteListed?: number; 
  public get whiteListed() {
    return this.getNumberAttribute('white_listed');
  }
  public set whiteListed(value: number) {
    this._whiteListed = value;
  }
  public resetWhiteListed() {
    this._whiteListed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedInput() {
    return this._whiteListed;
  }

  // ddos_entry_list - computed: false, optional: true, required: false
  private _ddosEntryList = new DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStructList(this, "ddos_entry_list", false);
  public get ddosEntryList() {
    return this._ddosEntryList;
  }
  public putDdosEntryList(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperDdosEntryListStruct[] | cdktf.IResolvable) {
    this._ddosEntryList.internalValue = value;
  }
  public resetDdosEntryList() {
    this._ddosEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryListInput() {
    return this._ddosEntryList.internalValue;
  }
}
export interface DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStruct {
  /**
  * name for virtualhost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#vhost DataThunderDdosDstZoneOper#vhost}
  */
  readonly vhost: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOper;
}

export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStructToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vhost: cdktf.stringToTerraform(struct!.vhost),
    oper: dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStructToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vhost: {
      value: cdktf.stringToHclTerraform(struct!.vhost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vhost !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhost = this._vhost;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vhost = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vhost = value.vhost;
      this._oper.internalValue = value.oper;
    }
  }

  // vhost - computed: false, optional: false, required: true
  private _vhost?: string; 
  public get vhost() {
    return this.getStringAttribute('vhost');
  }
  public set vhost(value: string) {
    this._vhost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListOper) {
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

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStructOutputReference {
    return new DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperPortRangeListVirtualhosts {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsOper;
  /**
  * virtualhost_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#virtualhost_list DataThunderDdosDstZoneOper#virtualhost_list}
  */
  readonly virtualhostList?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsOutputReference | DataThunderDdosDstZoneOperPortRangeListVirtualhosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZoneOperPortRangeListVirtualhostsOperToTerraform(struct!.oper),
    virtualhost_list: cdktf.listMapper(dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStructToTerraform, true)(struct!.virtualhostList),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListVirtualhostsToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListVirtualhostsOutputReference | DataThunderDdosDstZoneOperPortRangeListVirtualhosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZoneOperPortRangeListVirtualhostsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListVirtualhostsOperList",
    },
    virtualhost_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStructToHclTerraform, true)(struct!.virtualhostList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperPortRangeListVirtualhostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListVirtualhosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    if (this._virtualhostList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualhostList = this._virtualhostList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListVirtualhosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
      this._virtualhostList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
      this._virtualhostList.internalValue = value.virtualhostList;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneOperPortRangeListVirtualhostsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // virtualhost_list - computed: false, optional: true, required: false
  private _virtualhostList = new DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStructList(this, "virtualhost_list", false);
  public get virtualhostList() {
    return this._virtualhostList;
  }
  public putVirtualhostList(value: DataThunderDdosDstZoneOperPortRangeListVirtualhostsVirtualhostListStruct[] | cdktf.IResolvable) {
    this._virtualhostList.internalValue = value;
  }
  public resetVirtualhostList() {
    this._virtualhostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualhostListInput() {
    return this._virtualhostList.internalValue;
  }
}
export interface DataThunderDdosDstZoneOperPortRangeListStruct {
  /**
  * Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#port_range_end DataThunderDdosDstZoneOper#port_range_end}
  */
  readonly portRangeEnd: number;
  /**
  * Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#port_range_start DataThunderDdosDstZoneOper#port_range_start}
  */
  readonly portRangeStart: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port; 'quic': QUIC Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#protocol DataThunderDdosDstZoneOper#protocol}
  */
  readonly protocol: string;
  /**
  * ip_filtering_policy_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#ip_filtering_policy_statistics DataThunderDdosDstZoneOper#ip_filtering_policy_statistics}
  */
  readonly ipFilteringPolicyStatistics?: DataThunderDdosDstZoneOperPortRangeListIpFilteringPolicyStatistics;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperPortRangeListOper;
  /**
  * pattern_recognition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#pattern_recognition DataThunderDdosDstZoneOper#pattern_recognition}
  */
  readonly patternRecognition?: DataThunderDdosDstZoneOperPortRangeListPatternRecognition;
  /**
  * pattern_recognition_pu_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#pattern_recognition_pu_details DataThunderDdosDstZoneOper#pattern_recognition_pu_details}
  */
  readonly patternRecognitionPuDetails?: DataThunderDdosDstZoneOperPortRangeListPatternRecognitionPuDetails;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#port_ind DataThunderDdosDstZoneOper#port_ind}
  */
  readonly portInd?: DataThunderDdosDstZoneOperPortRangeListPortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#progression_tracking DataThunderDdosDstZoneOper#progression_tracking}
  */
  readonly progressionTracking?: DataThunderDdosDstZoneOperPortRangeListProgressionTracking;
  /**
  * src_based_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#src_based_policy_list DataThunderDdosDstZoneOper#src_based_policy_list}
  */
  readonly srcBasedPolicyList?: DataThunderDdosDstZoneOperPortRangeListSrcBasedPolicyListStruct[] | cdktf.IResolvable;
  /**
  * topk_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#topk_destinations DataThunderDdosDstZoneOper#topk_destinations}
  */
  readonly topkDestinations?: DataThunderDdosDstZoneOperPortRangeListTopkDestinations;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#topk_sources DataThunderDdosDstZoneOper#topk_sources}
  */
  readonly topkSources?: DataThunderDdosDstZoneOperPortRangeListTopkSources;
  /**
  * virtualhosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#virtualhosts DataThunderDdosDstZoneOper#virtualhosts}
  */
  readonly virtualhosts?: DataThunderDdosDstZoneOperPortRangeListVirtualhosts;
}

export function dataThunderDdosDstZoneOperPortRangeListStructToTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_range_end: cdktf.numberToTerraform(struct!.portRangeEnd),
    port_range_start: cdktf.numberToTerraform(struct!.portRangeStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    ip_filtering_policy_statistics: dataThunderDdosDstZoneOperPortRangeListIpFilteringPolicyStatisticsToTerraform(struct!.ipFilteringPolicyStatistics),
    oper: dataThunderDdosDstZoneOperPortRangeListOperToTerraform(struct!.oper),
    pattern_recognition: dataThunderDdosDstZoneOperPortRangeListPatternRecognitionToTerraform(struct!.patternRecognition),
    pattern_recognition_pu_details: dataThunderDdosDstZoneOperPortRangeListPatternRecognitionPuDetailsToTerraform(struct!.patternRecognitionPuDetails),
    port_ind: dataThunderDdosDstZoneOperPortRangeListPortIndToTerraform(struct!.portInd),
    progression_tracking: dataThunderDdosDstZoneOperPortRangeListProgressionTrackingToTerraform(struct!.progressionTracking),
    src_based_policy_list: cdktf.listMapper(dataThunderDdosDstZoneOperPortRangeListSrcBasedPolicyListStructToTerraform, true)(struct!.srcBasedPolicyList),
    topk_destinations: dataThunderDdosDstZoneOperPortRangeListTopkDestinationsToTerraform(struct!.topkDestinations),
    topk_sources: dataThunderDdosDstZoneOperPortRangeListTopkSourcesToTerraform(struct!.topkSources),
    virtualhosts: dataThunderDdosDstZoneOperPortRangeListVirtualhostsToTerraform(struct!.virtualhosts),
  }
}


export function dataThunderDdosDstZoneOperPortRangeListStructToHclTerraform(struct?: DataThunderDdosDstZoneOperPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.portRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.portRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_filtering_policy_statistics: {
      value: dataThunderDdosDstZoneOperPortRangeListIpFilteringPolicyStatisticsToHclTerraform(struct!.ipFilteringPolicyStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListIpFilteringPolicyStatisticsList",
    },
    oper: {
      value: dataThunderDdosDstZoneOperPortRangeListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListOperList",
    },
    pattern_recognition: {
      value: dataThunderDdosDstZoneOperPortRangeListPatternRecognitionToHclTerraform(struct!.patternRecognition),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListPatternRecognitionList",
    },
    pattern_recognition_pu_details: {
      value: dataThunderDdosDstZoneOperPortRangeListPatternRecognitionPuDetailsToHclTerraform(struct!.patternRecognitionPuDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListPatternRecognitionPuDetailsList",
    },
    port_ind: {
      value: dataThunderDdosDstZoneOperPortRangeListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListPortIndList",
    },
    progression_tracking: {
      value: dataThunderDdosDstZoneOperPortRangeListProgressionTrackingToHclTerraform(struct!.progressionTracking),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListProgressionTrackingList",
    },
    src_based_policy_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperPortRangeListSrcBasedPolicyListStructToHclTerraform, true)(struct!.srcBasedPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListSrcBasedPolicyListStructList",
    },
    topk_destinations: {
      value: dataThunderDdosDstZoneOperPortRangeListTopkDestinationsToHclTerraform(struct!.topkDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListTopkDestinationsList",
    },
    topk_sources: {
      value: dataThunderDdosDstZoneOperPortRangeListTopkSourcesToHclTerraform(struct!.topkSources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListTopkSourcesList",
    },
    virtualhosts: {
      value: dataThunderDdosDstZoneOperPortRangeListVirtualhostsToHclTerraform(struct!.virtualhosts),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperPortRangeListVirtualhostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeEnd = this._portRangeEnd;
    }
    if (this._portRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeStart = this._portRangeStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ipFilteringPolicyStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringPolicyStatistics = this._ipFilteringPolicyStatistics?.internalValue;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    if (this._patternRecognition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognition = this._patternRecognition?.internalValue;
    }
    if (this._patternRecognitionPuDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionPuDetails = this._patternRecognitionPuDetails?.internalValue;
    }
    if (this._portInd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portInd = this._portInd?.internalValue;
    }
    if (this._progressionTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressionTracking = this._progressionTracking?.internalValue;
    }
    if (this._srcBasedPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBasedPolicyList = this._srcBasedPolicyList?.internalValue;
    }
    if (this._topkDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkDestinations = this._topkDestinations?.internalValue;
    }
    if (this._topkSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkSources = this._topkSources?.internalValue;
    }
    if (this._virtualhosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualhosts = this._virtualhosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portRangeEnd = undefined;
      this._portRangeStart = undefined;
      this._protocol = undefined;
      this._ipFilteringPolicyStatistics.internalValue = undefined;
      this._oper.internalValue = undefined;
      this._patternRecognition.internalValue = undefined;
      this._patternRecognitionPuDetails.internalValue = undefined;
      this._portInd.internalValue = undefined;
      this._progressionTracking.internalValue = undefined;
      this._srcBasedPolicyList.internalValue = undefined;
      this._topkDestinations.internalValue = undefined;
      this._topkSources.internalValue = undefined;
      this._virtualhosts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portRangeEnd = value.portRangeEnd;
      this._portRangeStart = value.portRangeStart;
      this._protocol = value.protocol;
      this._ipFilteringPolicyStatistics.internalValue = value.ipFilteringPolicyStatistics;
      this._oper.internalValue = value.oper;
      this._patternRecognition.internalValue = value.patternRecognition;
      this._patternRecognitionPuDetails.internalValue = value.patternRecognitionPuDetails;
      this._portInd.internalValue = value.portInd;
      this._progressionTracking.internalValue = value.progressionTracking;
      this._srcBasedPolicyList.internalValue = value.srcBasedPolicyList;
      this._topkDestinations.internalValue = value.topkDestinations;
      this._topkSources.internalValue = value.topkSources;
      this._virtualhosts.internalValue = value.virtualhosts;
    }
  }

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
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

  // ip_filtering_policy_statistics - computed: false, optional: true, required: false
  private _ipFilteringPolicyStatistics = new DataThunderDdosDstZoneOperPortRangeListIpFilteringPolicyStatisticsOutputReference(this, "ip_filtering_policy_statistics");
  public get ipFilteringPolicyStatistics() {
    return this._ipFilteringPolicyStatistics;
  }
  public putIpFilteringPolicyStatistics(value: DataThunderDdosDstZoneOperPortRangeListIpFilteringPolicyStatistics) {
    this._ipFilteringPolicyStatistics.internalValue = value;
  }
  public resetIpFilteringPolicyStatistics() {
    this._ipFilteringPolicyStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyStatisticsInput() {
    return this._ipFilteringPolicyStatistics.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneOperPortRangeListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperPortRangeListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // pattern_recognition - computed: false, optional: true, required: false
  private _patternRecognition = new DataThunderDdosDstZoneOperPortRangeListPatternRecognitionOutputReference(this, "pattern_recognition");
  public get patternRecognition() {
    return this._patternRecognition;
  }
  public putPatternRecognition(value: DataThunderDdosDstZoneOperPortRangeListPatternRecognition) {
    this._patternRecognition.internalValue = value;
  }
  public resetPatternRecognition() {
    this._patternRecognition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionInput() {
    return this._patternRecognition.internalValue;
  }

  // pattern_recognition_pu_details - computed: false, optional: true, required: false
  private _patternRecognitionPuDetails = new DataThunderDdosDstZoneOperPortRangeListPatternRecognitionPuDetailsOutputReference(this, "pattern_recognition_pu_details");
  public get patternRecognitionPuDetails() {
    return this._patternRecognitionPuDetails;
  }
  public putPatternRecognitionPuDetails(value: DataThunderDdosDstZoneOperPortRangeListPatternRecognitionPuDetails) {
    this._patternRecognitionPuDetails.internalValue = value;
  }
  public resetPatternRecognitionPuDetails() {
    this._patternRecognitionPuDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPuDetailsInput() {
    return this._patternRecognitionPuDetails.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DataThunderDdosDstZoneOperPortRangeListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DataThunderDdosDstZoneOperPortRangeListPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DataThunderDdosDstZoneOperPortRangeListProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DataThunderDdosDstZoneOperPortRangeListProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // src_based_policy_list - computed: false, optional: true, required: false
  private _srcBasedPolicyList = new DataThunderDdosDstZoneOperPortRangeListSrcBasedPolicyListStructList(this, "src_based_policy_list", false);
  public get srcBasedPolicyList() {
    return this._srcBasedPolicyList;
  }
  public putSrcBasedPolicyList(value: DataThunderDdosDstZoneOperPortRangeListSrcBasedPolicyListStruct[] | cdktf.IResolvable) {
    this._srcBasedPolicyList.internalValue = value;
  }
  public resetSrcBasedPolicyList() {
    this._srcBasedPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyListInput() {
    return this._srcBasedPolicyList.internalValue;
  }

  // topk_destinations - computed: false, optional: true, required: false
  private _topkDestinations = new DataThunderDdosDstZoneOperPortRangeListTopkDestinationsOutputReference(this, "topk_destinations");
  public get topkDestinations() {
    return this._topkDestinations;
  }
  public putTopkDestinations(value: DataThunderDdosDstZoneOperPortRangeListTopkDestinations) {
    this._topkDestinations.internalValue = value;
  }
  public resetTopkDestinations() {
    this._topkDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDestinationsInput() {
    return this._topkDestinations.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DataThunderDdosDstZoneOperPortRangeListTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DataThunderDdosDstZoneOperPortRangeListTopkSources) {
    this._topkSources.internalValue = value;
  }
  public resetTopkSources() {
    this._topkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourcesInput() {
    return this._topkSources.internalValue;
  }

  // virtualhosts - computed: false, optional: true, required: false
  private _virtualhosts = new DataThunderDdosDstZoneOperPortRangeListVirtualhostsOutputReference(this, "virtualhosts");
  public get virtualhosts() {
    return this._virtualhosts;
  }
  public putVirtualhosts(value: DataThunderDdosDstZoneOperPortRangeListVirtualhosts) {
    this._virtualhosts.internalValue = value;
  }
  public resetVirtualhosts() {
    this._virtualhosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualhostsInput() {
    return this._virtualhosts.internalValue;
  }
}

export class DataThunderDdosDstZoneOperPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperPortRangeListStructOutputReference {
    return new DataThunderDdosDstZoneOperPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortOper {
}

export function dataThunderDdosDstZoneOperSrcPortOperToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortOperOutputReference | DataThunderDdosDstZoneOperSrcPortOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataThunderDdosDstZoneOperSrcPortOperToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortOperOutputReference | DataThunderDdosDstZoneOperSrcPortOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataThunderDdosDstZoneOperSrcPortOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#age DataThunderDdosDstZoneOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat1_limit DataThunderDdosDstZoneOper#app_stat1_limit}
  */
  readonly appStat1Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat2_limit DataThunderDdosDstZoneOper#app_stat2_limit}
  */
  readonly appStat2Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat3_limit DataThunderDdosDstZoneOper#app_stat3_limit}
  */
  readonly appStat3Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat4_limit DataThunderDdosDstZoneOper#app_stat4_limit}
  */
  readonly appStat4Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat5_limit DataThunderDdosDstZoneOper#app_stat5_limit}
  */
  readonly appStat5Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat6_limit DataThunderDdosDstZoneOper#app_stat6_limit}
  */
  readonly appStat6Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat7_limit DataThunderDdosDstZoneOper#app_stat7_limit}
  */
  readonly appStat7Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat8_limit DataThunderDdosDstZoneOper#app_stat8_limit}
  */
  readonly appStat8Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#bw_state DataThunderDdosDstZoneOper#bw_state}
  */
  readonly bwState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#connection_limit DataThunderDdosDstZoneOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#connection_rate_limit DataThunderDdosDstZoneOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat1 DataThunderDdosDstZoneOper#current_app_stat1}
  */
  readonly currentAppStat1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat2 DataThunderDdosDstZoneOper#current_app_stat2}
  */
  readonly currentAppStat2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat3 DataThunderDdosDstZoneOper#current_app_stat3}
  */
  readonly currentAppStat3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat4 DataThunderDdosDstZoneOper#current_app_stat4}
  */
  readonly currentAppStat4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat5 DataThunderDdosDstZoneOper#current_app_stat5}
  */
  readonly currentAppStat5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat6 DataThunderDdosDstZoneOper#current_app_stat6}
  */
  readonly currentAppStat6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat7 DataThunderDdosDstZoneOper#current_app_stat7}
  */
  readonly currentAppStat7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat8 DataThunderDdosDstZoneOper#current_app_stat8}
  */
  readonly currentAppStat8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_connection_rate DataThunderDdosDstZoneOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_connections DataThunderDdosDstZoneOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_frag_packet_rate DataThunderDdosDstZoneOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_kbit_rate DataThunderDdosDstZoneOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_packet_rate DataThunderDdosDstZoneOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#debug_str DataThunderDdosDstZoneOper#debug_str}
  */
  readonly debugStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dst_address_str DataThunderDdosDstZoneOper#dst_address_str}
  */
  readonly dstAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_count DataThunderDdosDstZoneOper#dynamic_entry_count}
  */
  readonly dynamicEntryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_limit DataThunderDdosDstZoneOper#dynamic_entry_limit}
  */
  readonly dynamicEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_warn_state DataThunderDdosDstZoneOper#dynamic_entry_warn_state}
  */
  readonly dynamicEntryWarnState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#frag_packet_rate_limit DataThunderDdosDstZoneOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat1_exceed DataThunderDdosDstZoneOper#is_app_stat1_exceed}
  */
  readonly isAppStat1Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat2_exceed DataThunderDdosDstZoneOper#is_app_stat2_exceed}
  */
  readonly isAppStat2Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat3_exceed DataThunderDdosDstZoneOper#is_app_stat3_exceed}
  */
  readonly isAppStat3Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat4_exceed DataThunderDdosDstZoneOper#is_app_stat4_exceed}
  */
  readonly isAppStat4Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat5_exceed DataThunderDdosDstZoneOper#is_app_stat5_exceed}
  */
  readonly isAppStat5Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat6_exceed DataThunderDdosDstZoneOper#is_app_stat6_exceed}
  */
  readonly isAppStat6Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat7_exceed DataThunderDdosDstZoneOper#is_app_stat7_exceed}
  */
  readonly isAppStat7Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat8_exceed DataThunderDdosDstZoneOper#is_app_stat8_exceed}
  */
  readonly isAppStat8Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_auth_passed DataThunderDdosDstZoneOper#is_auth_passed}
  */
  readonly isAuthPassed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_connection_rate_exceed DataThunderDdosDstZoneOper#is_connection_rate_exceed}
  */
  readonly isConnectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_connections_exceed DataThunderDdosDstZoneOper#is_connections_exceed}
  */
  readonly isConnectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_frag_packet_rate_exceed DataThunderDdosDstZoneOper#is_frag_packet_rate_exceed}
  */
  readonly isFragPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_kbit_rate_exceed DataThunderDdosDstZoneOper#is_kbit_rate_exceed}
  */
  readonly isKbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_packet_rate_exceed DataThunderDdosDstZoneOper#is_packet_rate_exceed}
  */
  readonly isPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#kbit_rate_limit DataThunderDdosDstZoneOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#level DataThunderDdosDstZoneOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#lockup_time DataThunderDdosDstZoneOper#lockup_time}
  */
  readonly lockupTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#packet_rate_limit DataThunderDdosDstZoneOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sflow_source_id DataThunderDdosDstZoneOper#sflow_source_id}
  */
  readonly sflowSourceId?: number;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStructToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    app_stat1_limit: cdktf.stringToTerraform(struct!.appStat1Limit),
    app_stat2_limit: cdktf.stringToTerraform(struct!.appStat2Limit),
    app_stat3_limit: cdktf.stringToTerraform(struct!.appStat3Limit),
    app_stat4_limit: cdktf.stringToTerraform(struct!.appStat4Limit),
    app_stat5_limit: cdktf.stringToTerraform(struct!.appStat5Limit),
    app_stat6_limit: cdktf.stringToTerraform(struct!.appStat6Limit),
    app_stat7_limit: cdktf.stringToTerraform(struct!.appStat7Limit),
    app_stat8_limit: cdktf.stringToTerraform(struct!.appStat8Limit),
    bw_state: cdktf.stringToTerraform(struct!.bwState),
    connection_limit: cdktf.stringToTerraform(struct!.connectionLimit),
    connection_rate_limit: cdktf.stringToTerraform(struct!.connectionRateLimit),
    current_app_stat1: cdktf.stringToTerraform(struct!.currentAppStat1),
    current_app_stat2: cdktf.stringToTerraform(struct!.currentAppStat2),
    current_app_stat3: cdktf.stringToTerraform(struct!.currentAppStat3),
    current_app_stat4: cdktf.stringToTerraform(struct!.currentAppStat4),
    current_app_stat5: cdktf.stringToTerraform(struct!.currentAppStat5),
    current_app_stat6: cdktf.stringToTerraform(struct!.currentAppStat6),
    current_app_stat7: cdktf.stringToTerraform(struct!.currentAppStat7),
    current_app_stat8: cdktf.stringToTerraform(struct!.currentAppStat8),
    current_connection_rate: cdktf.stringToTerraform(struct!.currentConnectionRate),
    current_connections: cdktf.stringToTerraform(struct!.currentConnections),
    current_frag_packet_rate: cdktf.stringToTerraform(struct!.currentFragPacketRate),
    current_kbit_rate: cdktf.stringToTerraform(struct!.currentKbitRate),
    current_packet_rate: cdktf.stringToTerraform(struct!.currentPacketRate),
    debug_str: cdktf.stringToTerraform(struct!.debugStr),
    dst_address_str: cdktf.stringToTerraform(struct!.dstAddressStr),
    dynamic_entry_count: cdktf.stringToTerraform(struct!.dynamicEntryCount),
    dynamic_entry_limit: cdktf.stringToTerraform(struct!.dynamicEntryLimit),
    dynamic_entry_warn_state: cdktf.stringToTerraform(struct!.dynamicEntryWarnState),
    frag_packet_rate_limit: cdktf.stringToTerraform(struct!.fragPacketRateLimit),
    is_app_stat1_exceed: cdktf.numberToTerraform(struct!.isAppStat1Exceed),
    is_app_stat2_exceed: cdktf.numberToTerraform(struct!.isAppStat2Exceed),
    is_app_stat3_exceed: cdktf.numberToTerraform(struct!.isAppStat3Exceed),
    is_app_stat4_exceed: cdktf.numberToTerraform(struct!.isAppStat4Exceed),
    is_app_stat5_exceed: cdktf.numberToTerraform(struct!.isAppStat5Exceed),
    is_app_stat6_exceed: cdktf.numberToTerraform(struct!.isAppStat6Exceed),
    is_app_stat7_exceed: cdktf.numberToTerraform(struct!.isAppStat7Exceed),
    is_app_stat8_exceed: cdktf.numberToTerraform(struct!.isAppStat8Exceed),
    is_auth_passed: cdktf.stringToTerraform(struct!.isAuthPassed),
    is_connection_rate_exceed: cdktf.numberToTerraform(struct!.isConnectionRateExceed),
    is_connections_exceed: cdktf.numberToTerraform(struct!.isConnectionsExceed),
    is_frag_packet_rate_exceed: cdktf.numberToTerraform(struct!.isFragPacketRateExceed),
    is_kbit_rate_exceed: cdktf.numberToTerraform(struct!.isKbitRateExceed),
    is_packet_rate_exceed: cdktf.numberToTerraform(struct!.isPacketRateExceed),
    kbit_rate_limit: cdktf.stringToTerraform(struct!.kbitRateLimit),
    level: cdktf.numberToTerraform(struct!.level),
    lockup_time: cdktf.numberToTerraform(struct!.lockupTime),
    packet_rate_limit: cdktf.stringToTerraform(struct!.packetRateLimit),
    sflow_source_id: cdktf.numberToTerraform(struct!.sflowSourceId),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_stat1_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat1Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat2_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat2Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat3_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat3Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat4_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat4Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat5_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat5Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat6_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat6Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat7_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat7Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat8_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat8Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bw_state: {
      value: cdktf.stringToHclTerraform(struct!.bwState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat1: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat2: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat3: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat4: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat5: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat6: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat7: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat8: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connection_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentConnectionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connections: {
      value: cdktf.stringToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_frag_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentFragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_kbit_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentKbitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_str: {
      value: cdktf.stringToHclTerraform(struct!.debugStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_address_str: {
      value: cdktf.stringToHclTerraform(struct!.dstAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_count: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_limit: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_warn_state: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryWarnState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.fragPacketRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_app_stat1_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat1Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat2_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat2Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat3_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat3Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat4_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat4Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat5_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat5Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat6_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat6Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat7_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat7Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat8_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat8Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_auth_passed: {
      value: cdktf.stringToHclTerraform(struct!.isAuthPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_frag_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isFragPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_time: {
      value: cdktf.numberToHclTerraform(struct!.lockupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.numberToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._appStat1Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat1Limit = this._appStat1Limit;
    }
    if (this._appStat2Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat2Limit = this._appStat2Limit;
    }
    if (this._appStat3Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat3Limit = this._appStat3Limit;
    }
    if (this._appStat4Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat4Limit = this._appStat4Limit;
    }
    if (this._appStat5Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat5Limit = this._appStat5Limit;
    }
    if (this._appStat6Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat6Limit = this._appStat6Limit;
    }
    if (this._appStat7Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat7Limit = this._appStat7Limit;
    }
    if (this._appStat8Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat8Limit = this._appStat8Limit;
    }
    if (this._bwState !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwState = this._bwState;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._connectionRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateLimit = this._connectionRateLimit;
    }
    if (this._currentAppStat1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat1 = this._currentAppStat1;
    }
    if (this._currentAppStat2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat2 = this._currentAppStat2;
    }
    if (this._currentAppStat3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat3 = this._currentAppStat3;
    }
    if (this._currentAppStat4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat4 = this._currentAppStat4;
    }
    if (this._currentAppStat5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat5 = this._currentAppStat5;
    }
    if (this._currentAppStat6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat6 = this._currentAppStat6;
    }
    if (this._currentAppStat7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat7 = this._currentAppStat7;
    }
    if (this._currentAppStat8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat8 = this._currentAppStat8;
    }
    if (this._currentConnectionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnectionRate = this._currentConnectionRate;
    }
    if (this._currentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnections = this._currentConnections;
    }
    if (this._currentFragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentFragPacketRate = this._currentFragPacketRate;
    }
    if (this._currentKbitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKbitRate = this._currentKbitRate;
    }
    if (this._currentPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPacketRate = this._currentPacketRate;
    }
    if (this._debugStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugStr = this._debugStr;
    }
    if (this._dstAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddressStr = this._dstAddressStr;
    }
    if (this._dynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryCount = this._dynamicEntryCount;
    }
    if (this._dynamicEntryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryLimit = this._dynamicEntryLimit;
    }
    if (this._dynamicEntryWarnState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryWarnState = this._dynamicEntryWarnState;
    }
    if (this._fragPacketRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRateLimit = this._fragPacketRateLimit;
    }
    if (this._isAppStat1Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat1Exceed = this._isAppStat1Exceed;
    }
    if (this._isAppStat2Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat2Exceed = this._isAppStat2Exceed;
    }
    if (this._isAppStat3Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat3Exceed = this._isAppStat3Exceed;
    }
    if (this._isAppStat4Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat4Exceed = this._isAppStat4Exceed;
    }
    if (this._isAppStat5Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat5Exceed = this._isAppStat5Exceed;
    }
    if (this._isAppStat6Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat6Exceed = this._isAppStat6Exceed;
    }
    if (this._isAppStat7Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat7Exceed = this._isAppStat7Exceed;
    }
    if (this._isAppStat8Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat8Exceed = this._isAppStat8Exceed;
    }
    if (this._isAuthPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuthPassed = this._isAuthPassed;
    }
    if (this._isConnectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionRateExceed = this._isConnectionRateExceed;
    }
    if (this._isConnectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionsExceed = this._isConnectionsExceed;
    }
    if (this._isFragPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFragPacketRateExceed = this._isFragPacketRateExceed;
    }
    if (this._isKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKbitRateExceed = this._isKbitRateExceed;
    }
    if (this._isPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPacketRateExceed = this._isPacketRateExceed;
    }
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._lockupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTime = this._lockupTime;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._appStat1Limit = undefined;
      this._appStat2Limit = undefined;
      this._appStat3Limit = undefined;
      this._appStat4Limit = undefined;
      this._appStat5Limit = undefined;
      this._appStat6Limit = undefined;
      this._appStat7Limit = undefined;
      this._appStat8Limit = undefined;
      this._bwState = undefined;
      this._connectionLimit = undefined;
      this._connectionRateLimit = undefined;
      this._currentAppStat1 = undefined;
      this._currentAppStat2 = undefined;
      this._currentAppStat3 = undefined;
      this._currentAppStat4 = undefined;
      this._currentAppStat5 = undefined;
      this._currentAppStat6 = undefined;
      this._currentAppStat7 = undefined;
      this._currentAppStat8 = undefined;
      this._currentConnectionRate = undefined;
      this._currentConnections = undefined;
      this._currentFragPacketRate = undefined;
      this._currentKbitRate = undefined;
      this._currentPacketRate = undefined;
      this._debugStr = undefined;
      this._dstAddressStr = undefined;
      this._dynamicEntryCount = undefined;
      this._dynamicEntryLimit = undefined;
      this._dynamicEntryWarnState = undefined;
      this._fragPacketRateLimit = undefined;
      this._isAppStat1Exceed = undefined;
      this._isAppStat2Exceed = undefined;
      this._isAppStat3Exceed = undefined;
      this._isAppStat4Exceed = undefined;
      this._isAppStat5Exceed = undefined;
      this._isAppStat6Exceed = undefined;
      this._isAppStat7Exceed = undefined;
      this._isAppStat8Exceed = undefined;
      this._isAuthPassed = undefined;
      this._isConnectionRateExceed = undefined;
      this._isConnectionsExceed = undefined;
      this._isFragPacketRateExceed = undefined;
      this._isKbitRateExceed = undefined;
      this._isPacketRateExceed = undefined;
      this._kbitRateLimit = undefined;
      this._level = undefined;
      this._lockupTime = undefined;
      this._packetRateLimit = undefined;
      this._sflowSourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._appStat1Limit = value.appStat1Limit;
      this._appStat2Limit = value.appStat2Limit;
      this._appStat3Limit = value.appStat3Limit;
      this._appStat4Limit = value.appStat4Limit;
      this._appStat5Limit = value.appStat5Limit;
      this._appStat6Limit = value.appStat6Limit;
      this._appStat7Limit = value.appStat7Limit;
      this._appStat8Limit = value.appStat8Limit;
      this._bwState = value.bwState;
      this._connectionLimit = value.connectionLimit;
      this._connectionRateLimit = value.connectionRateLimit;
      this._currentAppStat1 = value.currentAppStat1;
      this._currentAppStat2 = value.currentAppStat2;
      this._currentAppStat3 = value.currentAppStat3;
      this._currentAppStat4 = value.currentAppStat4;
      this._currentAppStat5 = value.currentAppStat5;
      this._currentAppStat6 = value.currentAppStat6;
      this._currentAppStat7 = value.currentAppStat7;
      this._currentAppStat8 = value.currentAppStat8;
      this._currentConnectionRate = value.currentConnectionRate;
      this._currentConnections = value.currentConnections;
      this._currentFragPacketRate = value.currentFragPacketRate;
      this._currentKbitRate = value.currentKbitRate;
      this._currentPacketRate = value.currentPacketRate;
      this._debugStr = value.debugStr;
      this._dstAddressStr = value.dstAddressStr;
      this._dynamicEntryCount = value.dynamicEntryCount;
      this._dynamicEntryLimit = value.dynamicEntryLimit;
      this._dynamicEntryWarnState = value.dynamicEntryWarnState;
      this._fragPacketRateLimit = value.fragPacketRateLimit;
      this._isAppStat1Exceed = value.isAppStat1Exceed;
      this._isAppStat2Exceed = value.isAppStat2Exceed;
      this._isAppStat3Exceed = value.isAppStat3Exceed;
      this._isAppStat4Exceed = value.isAppStat4Exceed;
      this._isAppStat5Exceed = value.isAppStat5Exceed;
      this._isAppStat6Exceed = value.isAppStat6Exceed;
      this._isAppStat7Exceed = value.isAppStat7Exceed;
      this._isAppStat8Exceed = value.isAppStat8Exceed;
      this._isAuthPassed = value.isAuthPassed;
      this._isConnectionRateExceed = value.isConnectionRateExceed;
      this._isConnectionsExceed = value.isConnectionsExceed;
      this._isFragPacketRateExceed = value.isFragPacketRateExceed;
      this._isKbitRateExceed = value.isKbitRateExceed;
      this._isPacketRateExceed = value.isPacketRateExceed;
      this._kbitRateLimit = value.kbitRateLimit;
      this._level = value.level;
      this._lockupTime = value.lockupTime;
      this._packetRateLimit = value.packetRateLimit;
      this._sflowSourceId = value.sflowSourceId;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // app_stat1_limit - computed: false, optional: true, required: false
  private _appStat1Limit?: string; 
  public get appStat1Limit() {
    return this.getStringAttribute('app_stat1_limit');
  }
  public set appStat1Limit(value: string) {
    this._appStat1Limit = value;
  }
  public resetAppStat1Limit() {
    this._appStat1Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat1LimitInput() {
    return this._appStat1Limit;
  }

  // app_stat2_limit - computed: false, optional: true, required: false
  private _appStat2Limit?: string; 
  public get appStat2Limit() {
    return this.getStringAttribute('app_stat2_limit');
  }
  public set appStat2Limit(value: string) {
    this._appStat2Limit = value;
  }
  public resetAppStat2Limit() {
    this._appStat2Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat2LimitInput() {
    return this._appStat2Limit;
  }

  // app_stat3_limit - computed: false, optional: true, required: false
  private _appStat3Limit?: string; 
  public get appStat3Limit() {
    return this.getStringAttribute('app_stat3_limit');
  }
  public set appStat3Limit(value: string) {
    this._appStat3Limit = value;
  }
  public resetAppStat3Limit() {
    this._appStat3Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat3LimitInput() {
    return this._appStat3Limit;
  }

  // app_stat4_limit - computed: false, optional: true, required: false
  private _appStat4Limit?: string; 
  public get appStat4Limit() {
    return this.getStringAttribute('app_stat4_limit');
  }
  public set appStat4Limit(value: string) {
    this._appStat4Limit = value;
  }
  public resetAppStat4Limit() {
    this._appStat4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat4LimitInput() {
    return this._appStat4Limit;
  }

  // app_stat5_limit - computed: false, optional: true, required: false
  private _appStat5Limit?: string; 
  public get appStat5Limit() {
    return this.getStringAttribute('app_stat5_limit');
  }
  public set appStat5Limit(value: string) {
    this._appStat5Limit = value;
  }
  public resetAppStat5Limit() {
    this._appStat5Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat5LimitInput() {
    return this._appStat5Limit;
  }

  // app_stat6_limit - computed: false, optional: true, required: false
  private _appStat6Limit?: string; 
  public get appStat6Limit() {
    return this.getStringAttribute('app_stat6_limit');
  }
  public set appStat6Limit(value: string) {
    this._appStat6Limit = value;
  }
  public resetAppStat6Limit() {
    this._appStat6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat6LimitInput() {
    return this._appStat6Limit;
  }

  // app_stat7_limit - computed: false, optional: true, required: false
  private _appStat7Limit?: string; 
  public get appStat7Limit() {
    return this.getStringAttribute('app_stat7_limit');
  }
  public set appStat7Limit(value: string) {
    this._appStat7Limit = value;
  }
  public resetAppStat7Limit() {
    this._appStat7Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat7LimitInput() {
    return this._appStat7Limit;
  }

  // app_stat8_limit - computed: false, optional: true, required: false
  private _appStat8Limit?: string; 
  public get appStat8Limit() {
    return this.getStringAttribute('app_stat8_limit');
  }
  public set appStat8Limit(value: string) {
    this._appStat8Limit = value;
  }
  public resetAppStat8Limit() {
    this._appStat8Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat8LimitInput() {
    return this._appStat8Limit;
  }

  // bw_state - computed: false, optional: true, required: false
  private _bwState?: string; 
  public get bwState() {
    return this.getStringAttribute('bw_state');
  }
  public set bwState(value: string) {
    this._bwState = value;
  }
  public resetBwState() {
    this._bwState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwStateInput() {
    return this._bwState;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_rate_limit - computed: false, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // current_app_stat1 - computed: false, optional: true, required: false
  private _currentAppStat1?: string; 
  public get currentAppStat1() {
    return this.getStringAttribute('current_app_stat1');
  }
  public set currentAppStat1(value: string) {
    this._currentAppStat1 = value;
  }
  public resetCurrentAppStat1() {
    this._currentAppStat1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat1Input() {
    return this._currentAppStat1;
  }

  // current_app_stat2 - computed: false, optional: true, required: false
  private _currentAppStat2?: string; 
  public get currentAppStat2() {
    return this.getStringAttribute('current_app_stat2');
  }
  public set currentAppStat2(value: string) {
    this._currentAppStat2 = value;
  }
  public resetCurrentAppStat2() {
    this._currentAppStat2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat2Input() {
    return this._currentAppStat2;
  }

  // current_app_stat3 - computed: false, optional: true, required: false
  private _currentAppStat3?: string; 
  public get currentAppStat3() {
    return this.getStringAttribute('current_app_stat3');
  }
  public set currentAppStat3(value: string) {
    this._currentAppStat3 = value;
  }
  public resetCurrentAppStat3() {
    this._currentAppStat3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat3Input() {
    return this._currentAppStat3;
  }

  // current_app_stat4 - computed: false, optional: true, required: false
  private _currentAppStat4?: string; 
  public get currentAppStat4() {
    return this.getStringAttribute('current_app_stat4');
  }
  public set currentAppStat4(value: string) {
    this._currentAppStat4 = value;
  }
  public resetCurrentAppStat4() {
    this._currentAppStat4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat4Input() {
    return this._currentAppStat4;
  }

  // current_app_stat5 - computed: false, optional: true, required: false
  private _currentAppStat5?: string; 
  public get currentAppStat5() {
    return this.getStringAttribute('current_app_stat5');
  }
  public set currentAppStat5(value: string) {
    this._currentAppStat5 = value;
  }
  public resetCurrentAppStat5() {
    this._currentAppStat5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat5Input() {
    return this._currentAppStat5;
  }

  // current_app_stat6 - computed: false, optional: true, required: false
  private _currentAppStat6?: string; 
  public get currentAppStat6() {
    return this.getStringAttribute('current_app_stat6');
  }
  public set currentAppStat6(value: string) {
    this._currentAppStat6 = value;
  }
  public resetCurrentAppStat6() {
    this._currentAppStat6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat6Input() {
    return this._currentAppStat6;
  }

  // current_app_stat7 - computed: false, optional: true, required: false
  private _currentAppStat7?: string; 
  public get currentAppStat7() {
    return this.getStringAttribute('current_app_stat7');
  }
  public set currentAppStat7(value: string) {
    this._currentAppStat7 = value;
  }
  public resetCurrentAppStat7() {
    this._currentAppStat7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat7Input() {
    return this._currentAppStat7;
  }

  // current_app_stat8 - computed: false, optional: true, required: false
  private _currentAppStat8?: string; 
  public get currentAppStat8() {
    return this.getStringAttribute('current_app_stat8');
  }
  public set currentAppStat8(value: string) {
    this._currentAppStat8 = value;
  }
  public resetCurrentAppStat8() {
    this._currentAppStat8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat8Input() {
    return this._currentAppStat8;
  }

  // current_connection_rate - computed: false, optional: true, required: false
  private _currentConnectionRate?: string; 
  public get currentConnectionRate() {
    return this.getStringAttribute('current_connection_rate');
  }
  public set currentConnectionRate(value: string) {
    this._currentConnectionRate = value;
  }
  public resetCurrentConnectionRate() {
    this._currentConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionRateInput() {
    return this._currentConnectionRate;
  }

  // current_connections - computed: false, optional: true, required: false
  private _currentConnections?: string; 
  public get currentConnections() {
    return this.getStringAttribute('current_connections');
  }
  public set currentConnections(value: string) {
    this._currentConnections = value;
  }
  public resetCurrentConnections() {
    this._currentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionsInput() {
    return this._currentConnections;
  }

  // current_frag_packet_rate - computed: false, optional: true, required: false
  private _currentFragPacketRate?: string; 
  public get currentFragPacketRate() {
    return this.getStringAttribute('current_frag_packet_rate');
  }
  public set currentFragPacketRate(value: string) {
    this._currentFragPacketRate = value;
  }
  public resetCurrentFragPacketRate() {
    this._currentFragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentFragPacketRateInput() {
    return this._currentFragPacketRate;
  }

  // current_kbit_rate - computed: false, optional: true, required: false
  private _currentKbitRate?: string; 
  public get currentKbitRate() {
    return this.getStringAttribute('current_kbit_rate');
  }
  public set currentKbitRate(value: string) {
    this._currentKbitRate = value;
  }
  public resetCurrentKbitRate() {
    this._currentKbitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKbitRateInput() {
    return this._currentKbitRate;
  }

  // current_packet_rate - computed: false, optional: true, required: false
  private _currentPacketRate?: string; 
  public get currentPacketRate() {
    return this.getStringAttribute('current_packet_rate');
  }
  public set currentPacketRate(value: string) {
    this._currentPacketRate = value;
  }
  public resetCurrentPacketRate() {
    this._currentPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPacketRateInput() {
    return this._currentPacketRate;
  }

  // debug_str - computed: false, optional: true, required: false
  private _debugStr?: string; 
  public get debugStr() {
    return this.getStringAttribute('debug_str');
  }
  public set debugStr(value: string) {
    this._debugStr = value;
  }
  public resetDebugStr() {
    this._debugStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugStrInput() {
    return this._debugStr;
  }

  // dst_address_str - computed: false, optional: true, required: false
  private _dstAddressStr?: string; 
  public get dstAddressStr() {
    return this.getStringAttribute('dst_address_str');
  }
  public set dstAddressStr(value: string) {
    this._dstAddressStr = value;
  }
  public resetDstAddressStr() {
    this._dstAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressStrInput() {
    return this._dstAddressStr;
  }

  // dynamic_entry_count - computed: false, optional: true, required: false
  private _dynamicEntryCount?: string; 
  public get dynamicEntryCount() {
    return this.getStringAttribute('dynamic_entry_count');
  }
  public set dynamicEntryCount(value: string) {
    this._dynamicEntryCount = value;
  }
  public resetDynamicEntryCount() {
    this._dynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryCountInput() {
    return this._dynamicEntryCount;
  }

  // dynamic_entry_limit - computed: false, optional: true, required: false
  private _dynamicEntryLimit?: string; 
  public get dynamicEntryLimit() {
    return this.getStringAttribute('dynamic_entry_limit');
  }
  public set dynamicEntryLimit(value: string) {
    this._dynamicEntryLimit = value;
  }
  public resetDynamicEntryLimit() {
    this._dynamicEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryLimitInput() {
    return this._dynamicEntryLimit;
  }

  // dynamic_entry_warn_state - computed: false, optional: true, required: false
  private _dynamicEntryWarnState?: string; 
  public get dynamicEntryWarnState() {
    return this.getStringAttribute('dynamic_entry_warn_state');
  }
  public set dynamicEntryWarnState(value: string) {
    this._dynamicEntryWarnState = value;
  }
  public resetDynamicEntryWarnState() {
    this._dynamicEntryWarnState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryWarnStateInput() {
    return this._dynamicEntryWarnState;
  }

  // frag_packet_rate_limit - computed: false, optional: true, required: false
  private _fragPacketRateLimit?: string; 
  public get fragPacketRateLimit() {
    return this.getStringAttribute('frag_packet_rate_limit');
  }
  public set fragPacketRateLimit(value: string) {
    this._fragPacketRateLimit = value;
  }
  public resetFragPacketRateLimit() {
    this._fragPacketRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateLimitInput() {
    return this._fragPacketRateLimit;
  }

  // is_app_stat1_exceed - computed: false, optional: true, required: false
  private _isAppStat1Exceed?: number; 
  public get isAppStat1Exceed() {
    return this.getNumberAttribute('is_app_stat1_exceed');
  }
  public set isAppStat1Exceed(value: number) {
    this._isAppStat1Exceed = value;
  }
  public resetIsAppStat1Exceed() {
    this._isAppStat1Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat1ExceedInput() {
    return this._isAppStat1Exceed;
  }

  // is_app_stat2_exceed - computed: false, optional: true, required: false
  private _isAppStat2Exceed?: number; 
  public get isAppStat2Exceed() {
    return this.getNumberAttribute('is_app_stat2_exceed');
  }
  public set isAppStat2Exceed(value: number) {
    this._isAppStat2Exceed = value;
  }
  public resetIsAppStat2Exceed() {
    this._isAppStat2Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat2ExceedInput() {
    return this._isAppStat2Exceed;
  }

  // is_app_stat3_exceed - computed: false, optional: true, required: false
  private _isAppStat3Exceed?: number; 
  public get isAppStat3Exceed() {
    return this.getNumberAttribute('is_app_stat3_exceed');
  }
  public set isAppStat3Exceed(value: number) {
    this._isAppStat3Exceed = value;
  }
  public resetIsAppStat3Exceed() {
    this._isAppStat3Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat3ExceedInput() {
    return this._isAppStat3Exceed;
  }

  // is_app_stat4_exceed - computed: false, optional: true, required: false
  private _isAppStat4Exceed?: number; 
  public get isAppStat4Exceed() {
    return this.getNumberAttribute('is_app_stat4_exceed');
  }
  public set isAppStat4Exceed(value: number) {
    this._isAppStat4Exceed = value;
  }
  public resetIsAppStat4Exceed() {
    this._isAppStat4Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat4ExceedInput() {
    return this._isAppStat4Exceed;
  }

  // is_app_stat5_exceed - computed: false, optional: true, required: false
  private _isAppStat5Exceed?: number; 
  public get isAppStat5Exceed() {
    return this.getNumberAttribute('is_app_stat5_exceed');
  }
  public set isAppStat5Exceed(value: number) {
    this._isAppStat5Exceed = value;
  }
  public resetIsAppStat5Exceed() {
    this._isAppStat5Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat5ExceedInput() {
    return this._isAppStat5Exceed;
  }

  // is_app_stat6_exceed - computed: false, optional: true, required: false
  private _isAppStat6Exceed?: number; 
  public get isAppStat6Exceed() {
    return this.getNumberAttribute('is_app_stat6_exceed');
  }
  public set isAppStat6Exceed(value: number) {
    this._isAppStat6Exceed = value;
  }
  public resetIsAppStat6Exceed() {
    this._isAppStat6Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat6ExceedInput() {
    return this._isAppStat6Exceed;
  }

  // is_app_stat7_exceed - computed: false, optional: true, required: false
  private _isAppStat7Exceed?: number; 
  public get isAppStat7Exceed() {
    return this.getNumberAttribute('is_app_stat7_exceed');
  }
  public set isAppStat7Exceed(value: number) {
    this._isAppStat7Exceed = value;
  }
  public resetIsAppStat7Exceed() {
    this._isAppStat7Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat7ExceedInput() {
    return this._isAppStat7Exceed;
  }

  // is_app_stat8_exceed - computed: false, optional: true, required: false
  private _isAppStat8Exceed?: number; 
  public get isAppStat8Exceed() {
    return this.getNumberAttribute('is_app_stat8_exceed');
  }
  public set isAppStat8Exceed(value: number) {
    this._isAppStat8Exceed = value;
  }
  public resetIsAppStat8Exceed() {
    this._isAppStat8Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat8ExceedInput() {
    return this._isAppStat8Exceed;
  }

  // is_auth_passed - computed: false, optional: true, required: false
  private _isAuthPassed?: string; 
  public get isAuthPassed() {
    return this.getStringAttribute('is_auth_passed');
  }
  public set isAuthPassed(value: string) {
    this._isAuthPassed = value;
  }
  public resetIsAuthPassed() {
    this._isAuthPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthPassedInput() {
    return this._isAuthPassed;
  }

  // is_connection_rate_exceed - computed: false, optional: true, required: false
  private _isConnectionRateExceed?: number; 
  public get isConnectionRateExceed() {
    return this.getNumberAttribute('is_connection_rate_exceed');
  }
  public set isConnectionRateExceed(value: number) {
    this._isConnectionRateExceed = value;
  }
  public resetIsConnectionRateExceed() {
    this._isConnectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionRateExceedInput() {
    return this._isConnectionRateExceed;
  }

  // is_connections_exceed - computed: false, optional: true, required: false
  private _isConnectionsExceed?: number; 
  public get isConnectionsExceed() {
    return this.getNumberAttribute('is_connections_exceed');
  }
  public set isConnectionsExceed(value: number) {
    this._isConnectionsExceed = value;
  }
  public resetIsConnectionsExceed() {
    this._isConnectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionsExceedInput() {
    return this._isConnectionsExceed;
  }

  // is_frag_packet_rate_exceed - computed: false, optional: true, required: false
  private _isFragPacketRateExceed?: number; 
  public get isFragPacketRateExceed() {
    return this.getNumberAttribute('is_frag_packet_rate_exceed');
  }
  public set isFragPacketRateExceed(value: number) {
    this._isFragPacketRateExceed = value;
  }
  public resetIsFragPacketRateExceed() {
    this._isFragPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFragPacketRateExceedInput() {
    return this._isFragPacketRateExceed;
  }

  // is_kbit_rate_exceed - computed: false, optional: true, required: false
  private _isKbitRateExceed?: number; 
  public get isKbitRateExceed() {
    return this.getNumberAttribute('is_kbit_rate_exceed');
  }
  public set isKbitRateExceed(value: number) {
    this._isKbitRateExceed = value;
  }
  public resetIsKbitRateExceed() {
    this._isKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKbitRateExceedInput() {
    return this._isKbitRateExceed;
  }

  // is_packet_rate_exceed - computed: false, optional: true, required: false
  private _isPacketRateExceed?: number; 
  public get isPacketRateExceed() {
    return this.getNumberAttribute('is_packet_rate_exceed');
  }
  public set isPacketRateExceed(value: number) {
    this._isPacketRateExceed = value;
  }
  public resetIsPacketRateExceed() {
    this._isPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPacketRateExceedInput() {
    return this._isPacketRateExceed;
  }

  // kbit_rate_limit - computed: false, optional: true, required: false
  private _kbitRateLimit?: string; 
  public get kbitRateLimit() {
    return this.getStringAttribute('kbit_rate_limit');
  }
  public set kbitRateLimit(value: string) {
    this._kbitRateLimit = value;
  }
  public resetKbitRateLimit() {
    this._kbitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateLimitInput() {
    return this._kbitRateLimit;
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

  // lockup_time - computed: false, optional: true, required: false
  private _lockupTime?: number; 
  public get lockupTime() {
    return this.getNumberAttribute('lockup_time');
  }
  public set lockupTime(value: number) {
    this._lockupTime = value;
  }
  public resetLockupTime() {
    this._lockupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupTimeInput() {
    return this._lockupTime;
  }

  // packet_rate_limit - computed: false, optional: true, required: false
  private _packetRateLimit?: string; 
  public get packetRateLimit() {
    return this.getStringAttribute('packet_rate_limit');
  }
  public set packetRateLimit(value: string) {
    this._packetRateLimit = value;
  }
  public resetPacketRateLimit() {
    this._packetRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateLimitInput() {
    return this._packetRateLimit;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: number; 
  public get sflowSourceId() {
    return this.getNumberAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: number) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStructOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#entry_displayed_count DataThunderDdosDstZoneOper#entry_displayed_count}
  */
  readonly entryDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#hw_blacklisted DataThunderDdosDstZoneOper#hw_blacklisted}
  */
  readonly hwBlacklisted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#ipv6 DataThunderDdosDstZoneOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#reporting_status DataThunderDdosDstZoneOper#reporting_status}
  */
  readonly reportingStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#service_displayed_count DataThunderDdosDstZoneOper#service_displayed_count}
  */
  readonly serviceDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sources DataThunderDdosDstZoneOper#sources}
  */
  readonly sources?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sources_all_entries DataThunderDdosDstZoneOper#sources_all_entries}
  */
  readonly sourcesAllEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#subnet_ip_addr DataThunderDdosDstZoneOper#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#subnet_ipv6_addr DataThunderDdosDstZoneOper#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * ddos_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#ddos_entry_list DataThunderDdosDstZoneOper#ddos_entry_list}
  */
  readonly ddosEntryList?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_displayed_count: cdktf.numberToTerraform(struct!.entryDisplayedCount),
    hw_blacklisted: cdktf.numberToTerraform(struct!.hwBlacklisted),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    reporting_status: cdktf.numberToTerraform(struct!.reportingStatus),
    service_displayed_count: cdktf.numberToTerraform(struct!.serviceDisplayedCount),
    sources: cdktf.numberToTerraform(struct!.sources),
    sources_all_entries: cdktf.numberToTerraform(struct!.sourcesAllEntries),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    ddos_entry_list: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStructToTerraform, true)(struct!.ddosEntryList),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.entryDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_blacklisted: {
      value: cdktf.numberToHclTerraform(struct!.hwBlacklisted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reporting_status: {
      value: cdktf.numberToHclTerraform(struct!.reportingStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.serviceDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    ddos_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStructToHclTerraform, true)(struct!.ddosEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDisplayedCount = this._entryDisplayedCount;
    }
    if (this._hwBlacklisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwBlacklisted = this._hwBlacklisted;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._reportingStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingStatus = this._reportingStatus;
    }
    if (this._serviceDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDisplayedCount = this._serviceDisplayedCount;
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
    if (this._ddosEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryList = this._ddosEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryDisplayedCount = undefined;
      this._hwBlacklisted = undefined;
      this._ipv6 = undefined;
      this._reportingStatus = undefined;
      this._serviceDisplayedCount = undefined;
      this._sources = undefined;
      this._sourcesAllEntries = undefined;
      this._subnetIpAddr = undefined;
      this._subnetIpv6Addr = undefined;
      this._ddosEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryDisplayedCount = value.entryDisplayedCount;
      this._hwBlacklisted = value.hwBlacklisted;
      this._ipv6 = value.ipv6;
      this._reportingStatus = value.reportingStatus;
      this._serviceDisplayedCount = value.serviceDisplayedCount;
      this._sources = value.sources;
      this._sourcesAllEntries = value.sourcesAllEntries;
      this._subnetIpAddr = value.subnetIpAddr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._ddosEntryList.internalValue = value.ddosEntryList;
    }
  }

  // entry_displayed_count - computed: false, optional: true, required: false
  private _entryDisplayedCount?: number; 
  public get entryDisplayedCount() {
    return this.getNumberAttribute('entry_displayed_count');
  }
  public set entryDisplayedCount(value: number) {
    this._entryDisplayedCount = value;
  }
  public resetEntryDisplayedCount() {
    this._entryDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDisplayedCountInput() {
    return this._entryDisplayedCount;
  }

  // hw_blacklisted - computed: false, optional: true, required: false
  private _hwBlacklisted?: number; 
  public get hwBlacklisted() {
    return this.getNumberAttribute('hw_blacklisted');
  }
  public set hwBlacklisted(value: number) {
    this._hwBlacklisted = value;
  }
  public resetHwBlacklisted() {
    this._hwBlacklisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistedInput() {
    return this._hwBlacklisted;
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

  // reporting_status - computed: false, optional: true, required: false
  private _reportingStatus?: number; 
  public get reportingStatus() {
    return this.getNumberAttribute('reporting_status');
  }
  public set reportingStatus(value: number) {
    this._reportingStatus = value;
  }
  public resetReportingStatus() {
    this._reportingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingStatusInput() {
    return this._reportingStatus;
  }

  // service_displayed_count - computed: false, optional: true, required: false
  private _serviceDisplayedCount?: number; 
  public get serviceDisplayedCount() {
    return this.getNumberAttribute('service_displayed_count');
  }
  public set serviceDisplayedCount(value: number) {
    this._serviceDisplayedCount = value;
  }
  public resetServiceDisplayedCount() {
    this._serviceDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDisplayedCountInput() {
    return this._serviceDisplayedCount;
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

  // ddos_entry_list - computed: false, optional: true, required: false
  private _ddosEntryList = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStructList(this, "ddos_entry_list", false);
  public get ddosEntryList() {
    return this._ddosEntryList;
  }
  public putDdosEntryList(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperDdosEntryListStruct[] | cdktf.IResolvable) {
    this._ddosEntryList.internalValue = value;
  }
  public resetDdosEntryList() {
    this._ddosEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryListInput() {
    return this._ddosEntryList.internalValue;
  }
}
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#level DataThunderDdosDstZoneOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#source_threshold DataThunderDdosDstZoneOper#source_threshold}
  */
  readonly sourceThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#zone_threshold DataThunderDdosDstZoneOper#zone_threshold}
  */
  readonly zoneThreshold?: string;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfgToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
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


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfgToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
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

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfgList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfgOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_index DataThunderDdosDstZoneOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_name DataThunderDdosDstZoneOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#rate DataThunderDdosDstZoneOper#rate}
  */
  readonly rate?: string;
  /**
  * indicator_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_cfg DataThunderDdosDstZoneOper#indicator_cfg}
  */
  readonly indicatorCfg?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    rate: cdktf.stringToTerraform(struct!.rate),
    indicator_cfg: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfgToTerraform, true)(struct!.indicatorCfg),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicators | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfgToHclTerraform, true)(struct!.indicatorCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicators | cdktf.IResolvable | undefined) {
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
  private _indicatorCfg = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfgList(this, "indicator_cfg", false);
  public get indicatorCfg() {
    return this._indicatorCfg;
  }
  public putIndicatorCfg(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_level DataThunderDdosDstZoneOper#current_level}
  */
  readonly currentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#details DataThunderDdosDstZoneOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#detection_data_source DataThunderDdosDstZoneOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicators DataThunderDdosDstZoneOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_level: cdktf.stringToTerraform(struct!.currentLevel),
    details: cdktf.numberToTerraform(struct!.details),
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOper): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOper | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOper | undefined) {
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
  private _indicators = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperIndicators[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortInd {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOper;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortInd | undefined) {
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
  private _oper = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOper) {
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
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStruct {
  /**
  * Source Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#port_num DataThunderDdosDstZoneOper#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-udp': DNS-UDP Port; 'dns-tcp': DNS-TCP Port; 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#protocol DataThunderDdosDstZoneOper#protocol}
  */
  readonly protocol: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOper;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#port_ind DataThunderDdosDstZoneOper#port_ind}
  */
  readonly portInd?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortInd;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListStructToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_num: cdktf.numberToTerraform(struct!.portNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    oper: dataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperToTerraform(struct!.oper),
    port_ind: dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndToTerraform(struct!.portInd),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortListStructToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperList",
    },
    port_ind: {
      value: dataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNum = undefined;
      this._protocol = undefined;
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
      this._portNum = value.portNum;
      this._protocol = value.protocol;
      this._oper.internalValue = value.oper;
      this._portInd.internalValue = value.portInd;
    }
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListOper) {
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
  private _portInd = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListPortInd) {
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

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStructOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#age DataThunderDdosDstZoneOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat1_limit DataThunderDdosDstZoneOper#app_stat1_limit}
  */
  readonly appStat1Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat2_limit DataThunderDdosDstZoneOper#app_stat2_limit}
  */
  readonly appStat2Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat3_limit DataThunderDdosDstZoneOper#app_stat3_limit}
  */
  readonly appStat3Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat4_limit DataThunderDdosDstZoneOper#app_stat4_limit}
  */
  readonly appStat4Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat5_limit DataThunderDdosDstZoneOper#app_stat5_limit}
  */
  readonly appStat5Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat6_limit DataThunderDdosDstZoneOper#app_stat6_limit}
  */
  readonly appStat6Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat7_limit DataThunderDdosDstZoneOper#app_stat7_limit}
  */
  readonly appStat7Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat8_limit DataThunderDdosDstZoneOper#app_stat8_limit}
  */
  readonly appStat8Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#bw_state DataThunderDdosDstZoneOper#bw_state}
  */
  readonly bwState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#connection_limit DataThunderDdosDstZoneOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#connection_rate_limit DataThunderDdosDstZoneOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat1 DataThunderDdosDstZoneOper#current_app_stat1}
  */
  readonly currentAppStat1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat2 DataThunderDdosDstZoneOper#current_app_stat2}
  */
  readonly currentAppStat2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat3 DataThunderDdosDstZoneOper#current_app_stat3}
  */
  readonly currentAppStat3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat4 DataThunderDdosDstZoneOper#current_app_stat4}
  */
  readonly currentAppStat4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat5 DataThunderDdosDstZoneOper#current_app_stat5}
  */
  readonly currentAppStat5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat6 DataThunderDdosDstZoneOper#current_app_stat6}
  */
  readonly currentAppStat6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat7 DataThunderDdosDstZoneOper#current_app_stat7}
  */
  readonly currentAppStat7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat8 DataThunderDdosDstZoneOper#current_app_stat8}
  */
  readonly currentAppStat8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_connection_rate DataThunderDdosDstZoneOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_connections DataThunderDdosDstZoneOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_frag_packet_rate DataThunderDdosDstZoneOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_kbit_rate DataThunderDdosDstZoneOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_packet_rate DataThunderDdosDstZoneOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#debug_str DataThunderDdosDstZoneOper#debug_str}
  */
  readonly debugStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dst_address_str DataThunderDdosDstZoneOper#dst_address_str}
  */
  readonly dstAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_count DataThunderDdosDstZoneOper#dynamic_entry_count}
  */
  readonly dynamicEntryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_limit DataThunderDdosDstZoneOper#dynamic_entry_limit}
  */
  readonly dynamicEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_warn_state DataThunderDdosDstZoneOper#dynamic_entry_warn_state}
  */
  readonly dynamicEntryWarnState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#frag_packet_rate_limit DataThunderDdosDstZoneOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat1_exceed DataThunderDdosDstZoneOper#is_app_stat1_exceed}
  */
  readonly isAppStat1Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat2_exceed DataThunderDdosDstZoneOper#is_app_stat2_exceed}
  */
  readonly isAppStat2Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat3_exceed DataThunderDdosDstZoneOper#is_app_stat3_exceed}
  */
  readonly isAppStat3Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat4_exceed DataThunderDdosDstZoneOper#is_app_stat4_exceed}
  */
  readonly isAppStat4Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat5_exceed DataThunderDdosDstZoneOper#is_app_stat5_exceed}
  */
  readonly isAppStat5Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat6_exceed DataThunderDdosDstZoneOper#is_app_stat6_exceed}
  */
  readonly isAppStat6Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat7_exceed DataThunderDdosDstZoneOper#is_app_stat7_exceed}
  */
  readonly isAppStat7Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat8_exceed DataThunderDdosDstZoneOper#is_app_stat8_exceed}
  */
  readonly isAppStat8Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_auth_passed DataThunderDdosDstZoneOper#is_auth_passed}
  */
  readonly isAuthPassed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_connection_rate_exceed DataThunderDdosDstZoneOper#is_connection_rate_exceed}
  */
  readonly isConnectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_connections_exceed DataThunderDdosDstZoneOper#is_connections_exceed}
  */
  readonly isConnectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_frag_packet_rate_exceed DataThunderDdosDstZoneOper#is_frag_packet_rate_exceed}
  */
  readonly isFragPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_kbit_rate_exceed DataThunderDdosDstZoneOper#is_kbit_rate_exceed}
  */
  readonly isKbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_packet_rate_exceed DataThunderDdosDstZoneOper#is_packet_rate_exceed}
  */
  readonly isPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#kbit_rate_limit DataThunderDdosDstZoneOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#level DataThunderDdosDstZoneOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#lockup_time DataThunderDdosDstZoneOper#lockup_time}
  */
  readonly lockupTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#packet_rate_limit DataThunderDdosDstZoneOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sflow_source_id DataThunderDdosDstZoneOper#sflow_source_id}
  */
  readonly sflowSourceId?: number;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStructToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    app_stat1_limit: cdktf.stringToTerraform(struct!.appStat1Limit),
    app_stat2_limit: cdktf.stringToTerraform(struct!.appStat2Limit),
    app_stat3_limit: cdktf.stringToTerraform(struct!.appStat3Limit),
    app_stat4_limit: cdktf.stringToTerraform(struct!.appStat4Limit),
    app_stat5_limit: cdktf.stringToTerraform(struct!.appStat5Limit),
    app_stat6_limit: cdktf.stringToTerraform(struct!.appStat6Limit),
    app_stat7_limit: cdktf.stringToTerraform(struct!.appStat7Limit),
    app_stat8_limit: cdktf.stringToTerraform(struct!.appStat8Limit),
    bw_state: cdktf.stringToTerraform(struct!.bwState),
    connection_limit: cdktf.stringToTerraform(struct!.connectionLimit),
    connection_rate_limit: cdktf.stringToTerraform(struct!.connectionRateLimit),
    current_app_stat1: cdktf.stringToTerraform(struct!.currentAppStat1),
    current_app_stat2: cdktf.stringToTerraform(struct!.currentAppStat2),
    current_app_stat3: cdktf.stringToTerraform(struct!.currentAppStat3),
    current_app_stat4: cdktf.stringToTerraform(struct!.currentAppStat4),
    current_app_stat5: cdktf.stringToTerraform(struct!.currentAppStat5),
    current_app_stat6: cdktf.stringToTerraform(struct!.currentAppStat6),
    current_app_stat7: cdktf.stringToTerraform(struct!.currentAppStat7),
    current_app_stat8: cdktf.stringToTerraform(struct!.currentAppStat8),
    current_connection_rate: cdktf.stringToTerraform(struct!.currentConnectionRate),
    current_connections: cdktf.stringToTerraform(struct!.currentConnections),
    current_frag_packet_rate: cdktf.stringToTerraform(struct!.currentFragPacketRate),
    current_kbit_rate: cdktf.stringToTerraform(struct!.currentKbitRate),
    current_packet_rate: cdktf.stringToTerraform(struct!.currentPacketRate),
    debug_str: cdktf.stringToTerraform(struct!.debugStr),
    dst_address_str: cdktf.stringToTerraform(struct!.dstAddressStr),
    dynamic_entry_count: cdktf.stringToTerraform(struct!.dynamicEntryCount),
    dynamic_entry_limit: cdktf.stringToTerraform(struct!.dynamicEntryLimit),
    dynamic_entry_warn_state: cdktf.stringToTerraform(struct!.dynamicEntryWarnState),
    frag_packet_rate_limit: cdktf.stringToTerraform(struct!.fragPacketRateLimit),
    is_app_stat1_exceed: cdktf.numberToTerraform(struct!.isAppStat1Exceed),
    is_app_stat2_exceed: cdktf.numberToTerraform(struct!.isAppStat2Exceed),
    is_app_stat3_exceed: cdktf.numberToTerraform(struct!.isAppStat3Exceed),
    is_app_stat4_exceed: cdktf.numberToTerraform(struct!.isAppStat4Exceed),
    is_app_stat5_exceed: cdktf.numberToTerraform(struct!.isAppStat5Exceed),
    is_app_stat6_exceed: cdktf.numberToTerraform(struct!.isAppStat6Exceed),
    is_app_stat7_exceed: cdktf.numberToTerraform(struct!.isAppStat7Exceed),
    is_app_stat8_exceed: cdktf.numberToTerraform(struct!.isAppStat8Exceed),
    is_auth_passed: cdktf.stringToTerraform(struct!.isAuthPassed),
    is_connection_rate_exceed: cdktf.numberToTerraform(struct!.isConnectionRateExceed),
    is_connections_exceed: cdktf.numberToTerraform(struct!.isConnectionsExceed),
    is_frag_packet_rate_exceed: cdktf.numberToTerraform(struct!.isFragPacketRateExceed),
    is_kbit_rate_exceed: cdktf.numberToTerraform(struct!.isKbitRateExceed),
    is_packet_rate_exceed: cdktf.numberToTerraform(struct!.isPacketRateExceed),
    kbit_rate_limit: cdktf.stringToTerraform(struct!.kbitRateLimit),
    level: cdktf.numberToTerraform(struct!.level),
    lockup_time: cdktf.numberToTerraform(struct!.lockupTime),
    packet_rate_limit: cdktf.stringToTerraform(struct!.packetRateLimit),
    sflow_source_id: cdktf.numberToTerraform(struct!.sflowSourceId),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_stat1_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat1Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat2_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat2Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat3_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat3Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat4_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat4Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat5_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat5Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat6_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat6Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat7_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat7Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat8_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat8Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bw_state: {
      value: cdktf.stringToHclTerraform(struct!.bwState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat1: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat2: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat3: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat4: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat5: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat6: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat7: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat8: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connection_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentConnectionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connections: {
      value: cdktf.stringToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_frag_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentFragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_kbit_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentKbitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_str: {
      value: cdktf.stringToHclTerraform(struct!.debugStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_address_str: {
      value: cdktf.stringToHclTerraform(struct!.dstAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_count: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_limit: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_warn_state: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryWarnState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.fragPacketRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_app_stat1_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat1Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat2_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat2Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat3_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat3Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat4_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat4Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat5_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat5Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat6_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat6Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat7_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat7Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat8_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat8Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_auth_passed: {
      value: cdktf.stringToHclTerraform(struct!.isAuthPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_frag_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isFragPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_time: {
      value: cdktf.numberToHclTerraform(struct!.lockupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.numberToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._appStat1Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat1Limit = this._appStat1Limit;
    }
    if (this._appStat2Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat2Limit = this._appStat2Limit;
    }
    if (this._appStat3Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat3Limit = this._appStat3Limit;
    }
    if (this._appStat4Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat4Limit = this._appStat4Limit;
    }
    if (this._appStat5Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat5Limit = this._appStat5Limit;
    }
    if (this._appStat6Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat6Limit = this._appStat6Limit;
    }
    if (this._appStat7Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat7Limit = this._appStat7Limit;
    }
    if (this._appStat8Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat8Limit = this._appStat8Limit;
    }
    if (this._bwState !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwState = this._bwState;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._connectionRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateLimit = this._connectionRateLimit;
    }
    if (this._currentAppStat1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat1 = this._currentAppStat1;
    }
    if (this._currentAppStat2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat2 = this._currentAppStat2;
    }
    if (this._currentAppStat3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat3 = this._currentAppStat3;
    }
    if (this._currentAppStat4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat4 = this._currentAppStat4;
    }
    if (this._currentAppStat5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat5 = this._currentAppStat5;
    }
    if (this._currentAppStat6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat6 = this._currentAppStat6;
    }
    if (this._currentAppStat7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat7 = this._currentAppStat7;
    }
    if (this._currentAppStat8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat8 = this._currentAppStat8;
    }
    if (this._currentConnectionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnectionRate = this._currentConnectionRate;
    }
    if (this._currentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnections = this._currentConnections;
    }
    if (this._currentFragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentFragPacketRate = this._currentFragPacketRate;
    }
    if (this._currentKbitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKbitRate = this._currentKbitRate;
    }
    if (this._currentPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPacketRate = this._currentPacketRate;
    }
    if (this._debugStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugStr = this._debugStr;
    }
    if (this._dstAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddressStr = this._dstAddressStr;
    }
    if (this._dynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryCount = this._dynamicEntryCount;
    }
    if (this._dynamicEntryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryLimit = this._dynamicEntryLimit;
    }
    if (this._dynamicEntryWarnState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryWarnState = this._dynamicEntryWarnState;
    }
    if (this._fragPacketRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRateLimit = this._fragPacketRateLimit;
    }
    if (this._isAppStat1Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat1Exceed = this._isAppStat1Exceed;
    }
    if (this._isAppStat2Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat2Exceed = this._isAppStat2Exceed;
    }
    if (this._isAppStat3Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat3Exceed = this._isAppStat3Exceed;
    }
    if (this._isAppStat4Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat4Exceed = this._isAppStat4Exceed;
    }
    if (this._isAppStat5Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat5Exceed = this._isAppStat5Exceed;
    }
    if (this._isAppStat6Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat6Exceed = this._isAppStat6Exceed;
    }
    if (this._isAppStat7Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat7Exceed = this._isAppStat7Exceed;
    }
    if (this._isAppStat8Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat8Exceed = this._isAppStat8Exceed;
    }
    if (this._isAuthPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuthPassed = this._isAuthPassed;
    }
    if (this._isConnectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionRateExceed = this._isConnectionRateExceed;
    }
    if (this._isConnectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionsExceed = this._isConnectionsExceed;
    }
    if (this._isFragPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFragPacketRateExceed = this._isFragPacketRateExceed;
    }
    if (this._isKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKbitRateExceed = this._isKbitRateExceed;
    }
    if (this._isPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPacketRateExceed = this._isPacketRateExceed;
    }
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._lockupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTime = this._lockupTime;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._appStat1Limit = undefined;
      this._appStat2Limit = undefined;
      this._appStat3Limit = undefined;
      this._appStat4Limit = undefined;
      this._appStat5Limit = undefined;
      this._appStat6Limit = undefined;
      this._appStat7Limit = undefined;
      this._appStat8Limit = undefined;
      this._bwState = undefined;
      this._connectionLimit = undefined;
      this._connectionRateLimit = undefined;
      this._currentAppStat1 = undefined;
      this._currentAppStat2 = undefined;
      this._currentAppStat3 = undefined;
      this._currentAppStat4 = undefined;
      this._currentAppStat5 = undefined;
      this._currentAppStat6 = undefined;
      this._currentAppStat7 = undefined;
      this._currentAppStat8 = undefined;
      this._currentConnectionRate = undefined;
      this._currentConnections = undefined;
      this._currentFragPacketRate = undefined;
      this._currentKbitRate = undefined;
      this._currentPacketRate = undefined;
      this._debugStr = undefined;
      this._dstAddressStr = undefined;
      this._dynamicEntryCount = undefined;
      this._dynamicEntryLimit = undefined;
      this._dynamicEntryWarnState = undefined;
      this._fragPacketRateLimit = undefined;
      this._isAppStat1Exceed = undefined;
      this._isAppStat2Exceed = undefined;
      this._isAppStat3Exceed = undefined;
      this._isAppStat4Exceed = undefined;
      this._isAppStat5Exceed = undefined;
      this._isAppStat6Exceed = undefined;
      this._isAppStat7Exceed = undefined;
      this._isAppStat8Exceed = undefined;
      this._isAuthPassed = undefined;
      this._isConnectionRateExceed = undefined;
      this._isConnectionsExceed = undefined;
      this._isFragPacketRateExceed = undefined;
      this._isKbitRateExceed = undefined;
      this._isPacketRateExceed = undefined;
      this._kbitRateLimit = undefined;
      this._level = undefined;
      this._lockupTime = undefined;
      this._packetRateLimit = undefined;
      this._sflowSourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._appStat1Limit = value.appStat1Limit;
      this._appStat2Limit = value.appStat2Limit;
      this._appStat3Limit = value.appStat3Limit;
      this._appStat4Limit = value.appStat4Limit;
      this._appStat5Limit = value.appStat5Limit;
      this._appStat6Limit = value.appStat6Limit;
      this._appStat7Limit = value.appStat7Limit;
      this._appStat8Limit = value.appStat8Limit;
      this._bwState = value.bwState;
      this._connectionLimit = value.connectionLimit;
      this._connectionRateLimit = value.connectionRateLimit;
      this._currentAppStat1 = value.currentAppStat1;
      this._currentAppStat2 = value.currentAppStat2;
      this._currentAppStat3 = value.currentAppStat3;
      this._currentAppStat4 = value.currentAppStat4;
      this._currentAppStat5 = value.currentAppStat5;
      this._currentAppStat6 = value.currentAppStat6;
      this._currentAppStat7 = value.currentAppStat7;
      this._currentAppStat8 = value.currentAppStat8;
      this._currentConnectionRate = value.currentConnectionRate;
      this._currentConnections = value.currentConnections;
      this._currentFragPacketRate = value.currentFragPacketRate;
      this._currentKbitRate = value.currentKbitRate;
      this._currentPacketRate = value.currentPacketRate;
      this._debugStr = value.debugStr;
      this._dstAddressStr = value.dstAddressStr;
      this._dynamicEntryCount = value.dynamicEntryCount;
      this._dynamicEntryLimit = value.dynamicEntryLimit;
      this._dynamicEntryWarnState = value.dynamicEntryWarnState;
      this._fragPacketRateLimit = value.fragPacketRateLimit;
      this._isAppStat1Exceed = value.isAppStat1Exceed;
      this._isAppStat2Exceed = value.isAppStat2Exceed;
      this._isAppStat3Exceed = value.isAppStat3Exceed;
      this._isAppStat4Exceed = value.isAppStat4Exceed;
      this._isAppStat5Exceed = value.isAppStat5Exceed;
      this._isAppStat6Exceed = value.isAppStat6Exceed;
      this._isAppStat7Exceed = value.isAppStat7Exceed;
      this._isAppStat8Exceed = value.isAppStat8Exceed;
      this._isAuthPassed = value.isAuthPassed;
      this._isConnectionRateExceed = value.isConnectionRateExceed;
      this._isConnectionsExceed = value.isConnectionsExceed;
      this._isFragPacketRateExceed = value.isFragPacketRateExceed;
      this._isKbitRateExceed = value.isKbitRateExceed;
      this._isPacketRateExceed = value.isPacketRateExceed;
      this._kbitRateLimit = value.kbitRateLimit;
      this._level = value.level;
      this._lockupTime = value.lockupTime;
      this._packetRateLimit = value.packetRateLimit;
      this._sflowSourceId = value.sflowSourceId;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // app_stat1_limit - computed: false, optional: true, required: false
  private _appStat1Limit?: string; 
  public get appStat1Limit() {
    return this.getStringAttribute('app_stat1_limit');
  }
  public set appStat1Limit(value: string) {
    this._appStat1Limit = value;
  }
  public resetAppStat1Limit() {
    this._appStat1Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat1LimitInput() {
    return this._appStat1Limit;
  }

  // app_stat2_limit - computed: false, optional: true, required: false
  private _appStat2Limit?: string; 
  public get appStat2Limit() {
    return this.getStringAttribute('app_stat2_limit');
  }
  public set appStat2Limit(value: string) {
    this._appStat2Limit = value;
  }
  public resetAppStat2Limit() {
    this._appStat2Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat2LimitInput() {
    return this._appStat2Limit;
  }

  // app_stat3_limit - computed: false, optional: true, required: false
  private _appStat3Limit?: string; 
  public get appStat3Limit() {
    return this.getStringAttribute('app_stat3_limit');
  }
  public set appStat3Limit(value: string) {
    this._appStat3Limit = value;
  }
  public resetAppStat3Limit() {
    this._appStat3Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat3LimitInput() {
    return this._appStat3Limit;
  }

  // app_stat4_limit - computed: false, optional: true, required: false
  private _appStat4Limit?: string; 
  public get appStat4Limit() {
    return this.getStringAttribute('app_stat4_limit');
  }
  public set appStat4Limit(value: string) {
    this._appStat4Limit = value;
  }
  public resetAppStat4Limit() {
    this._appStat4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat4LimitInput() {
    return this._appStat4Limit;
  }

  // app_stat5_limit - computed: false, optional: true, required: false
  private _appStat5Limit?: string; 
  public get appStat5Limit() {
    return this.getStringAttribute('app_stat5_limit');
  }
  public set appStat5Limit(value: string) {
    this._appStat5Limit = value;
  }
  public resetAppStat5Limit() {
    this._appStat5Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat5LimitInput() {
    return this._appStat5Limit;
  }

  // app_stat6_limit - computed: false, optional: true, required: false
  private _appStat6Limit?: string; 
  public get appStat6Limit() {
    return this.getStringAttribute('app_stat6_limit');
  }
  public set appStat6Limit(value: string) {
    this._appStat6Limit = value;
  }
  public resetAppStat6Limit() {
    this._appStat6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat6LimitInput() {
    return this._appStat6Limit;
  }

  // app_stat7_limit - computed: false, optional: true, required: false
  private _appStat7Limit?: string; 
  public get appStat7Limit() {
    return this.getStringAttribute('app_stat7_limit');
  }
  public set appStat7Limit(value: string) {
    this._appStat7Limit = value;
  }
  public resetAppStat7Limit() {
    this._appStat7Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat7LimitInput() {
    return this._appStat7Limit;
  }

  // app_stat8_limit - computed: false, optional: true, required: false
  private _appStat8Limit?: string; 
  public get appStat8Limit() {
    return this.getStringAttribute('app_stat8_limit');
  }
  public set appStat8Limit(value: string) {
    this._appStat8Limit = value;
  }
  public resetAppStat8Limit() {
    this._appStat8Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat8LimitInput() {
    return this._appStat8Limit;
  }

  // bw_state - computed: false, optional: true, required: false
  private _bwState?: string; 
  public get bwState() {
    return this.getStringAttribute('bw_state');
  }
  public set bwState(value: string) {
    this._bwState = value;
  }
  public resetBwState() {
    this._bwState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwStateInput() {
    return this._bwState;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_rate_limit - computed: false, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // current_app_stat1 - computed: false, optional: true, required: false
  private _currentAppStat1?: string; 
  public get currentAppStat1() {
    return this.getStringAttribute('current_app_stat1');
  }
  public set currentAppStat1(value: string) {
    this._currentAppStat1 = value;
  }
  public resetCurrentAppStat1() {
    this._currentAppStat1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat1Input() {
    return this._currentAppStat1;
  }

  // current_app_stat2 - computed: false, optional: true, required: false
  private _currentAppStat2?: string; 
  public get currentAppStat2() {
    return this.getStringAttribute('current_app_stat2');
  }
  public set currentAppStat2(value: string) {
    this._currentAppStat2 = value;
  }
  public resetCurrentAppStat2() {
    this._currentAppStat2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat2Input() {
    return this._currentAppStat2;
  }

  // current_app_stat3 - computed: false, optional: true, required: false
  private _currentAppStat3?: string; 
  public get currentAppStat3() {
    return this.getStringAttribute('current_app_stat3');
  }
  public set currentAppStat3(value: string) {
    this._currentAppStat3 = value;
  }
  public resetCurrentAppStat3() {
    this._currentAppStat3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat3Input() {
    return this._currentAppStat3;
  }

  // current_app_stat4 - computed: false, optional: true, required: false
  private _currentAppStat4?: string; 
  public get currentAppStat4() {
    return this.getStringAttribute('current_app_stat4');
  }
  public set currentAppStat4(value: string) {
    this._currentAppStat4 = value;
  }
  public resetCurrentAppStat4() {
    this._currentAppStat4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat4Input() {
    return this._currentAppStat4;
  }

  // current_app_stat5 - computed: false, optional: true, required: false
  private _currentAppStat5?: string; 
  public get currentAppStat5() {
    return this.getStringAttribute('current_app_stat5');
  }
  public set currentAppStat5(value: string) {
    this._currentAppStat5 = value;
  }
  public resetCurrentAppStat5() {
    this._currentAppStat5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat5Input() {
    return this._currentAppStat5;
  }

  // current_app_stat6 - computed: false, optional: true, required: false
  private _currentAppStat6?: string; 
  public get currentAppStat6() {
    return this.getStringAttribute('current_app_stat6');
  }
  public set currentAppStat6(value: string) {
    this._currentAppStat6 = value;
  }
  public resetCurrentAppStat6() {
    this._currentAppStat6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat6Input() {
    return this._currentAppStat6;
  }

  // current_app_stat7 - computed: false, optional: true, required: false
  private _currentAppStat7?: string; 
  public get currentAppStat7() {
    return this.getStringAttribute('current_app_stat7');
  }
  public set currentAppStat7(value: string) {
    this._currentAppStat7 = value;
  }
  public resetCurrentAppStat7() {
    this._currentAppStat7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat7Input() {
    return this._currentAppStat7;
  }

  // current_app_stat8 - computed: false, optional: true, required: false
  private _currentAppStat8?: string; 
  public get currentAppStat8() {
    return this.getStringAttribute('current_app_stat8');
  }
  public set currentAppStat8(value: string) {
    this._currentAppStat8 = value;
  }
  public resetCurrentAppStat8() {
    this._currentAppStat8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat8Input() {
    return this._currentAppStat8;
  }

  // current_connection_rate - computed: false, optional: true, required: false
  private _currentConnectionRate?: string; 
  public get currentConnectionRate() {
    return this.getStringAttribute('current_connection_rate');
  }
  public set currentConnectionRate(value: string) {
    this._currentConnectionRate = value;
  }
  public resetCurrentConnectionRate() {
    this._currentConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionRateInput() {
    return this._currentConnectionRate;
  }

  // current_connections - computed: false, optional: true, required: false
  private _currentConnections?: string; 
  public get currentConnections() {
    return this.getStringAttribute('current_connections');
  }
  public set currentConnections(value: string) {
    this._currentConnections = value;
  }
  public resetCurrentConnections() {
    this._currentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionsInput() {
    return this._currentConnections;
  }

  // current_frag_packet_rate - computed: false, optional: true, required: false
  private _currentFragPacketRate?: string; 
  public get currentFragPacketRate() {
    return this.getStringAttribute('current_frag_packet_rate');
  }
  public set currentFragPacketRate(value: string) {
    this._currentFragPacketRate = value;
  }
  public resetCurrentFragPacketRate() {
    this._currentFragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentFragPacketRateInput() {
    return this._currentFragPacketRate;
  }

  // current_kbit_rate - computed: false, optional: true, required: false
  private _currentKbitRate?: string; 
  public get currentKbitRate() {
    return this.getStringAttribute('current_kbit_rate');
  }
  public set currentKbitRate(value: string) {
    this._currentKbitRate = value;
  }
  public resetCurrentKbitRate() {
    this._currentKbitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKbitRateInput() {
    return this._currentKbitRate;
  }

  // current_packet_rate - computed: false, optional: true, required: false
  private _currentPacketRate?: string; 
  public get currentPacketRate() {
    return this.getStringAttribute('current_packet_rate');
  }
  public set currentPacketRate(value: string) {
    this._currentPacketRate = value;
  }
  public resetCurrentPacketRate() {
    this._currentPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPacketRateInput() {
    return this._currentPacketRate;
  }

  // debug_str - computed: false, optional: true, required: false
  private _debugStr?: string; 
  public get debugStr() {
    return this.getStringAttribute('debug_str');
  }
  public set debugStr(value: string) {
    this._debugStr = value;
  }
  public resetDebugStr() {
    this._debugStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugStrInput() {
    return this._debugStr;
  }

  // dst_address_str - computed: false, optional: true, required: false
  private _dstAddressStr?: string; 
  public get dstAddressStr() {
    return this.getStringAttribute('dst_address_str');
  }
  public set dstAddressStr(value: string) {
    this._dstAddressStr = value;
  }
  public resetDstAddressStr() {
    this._dstAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressStrInput() {
    return this._dstAddressStr;
  }

  // dynamic_entry_count - computed: false, optional: true, required: false
  private _dynamicEntryCount?: string; 
  public get dynamicEntryCount() {
    return this.getStringAttribute('dynamic_entry_count');
  }
  public set dynamicEntryCount(value: string) {
    this._dynamicEntryCount = value;
  }
  public resetDynamicEntryCount() {
    this._dynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryCountInput() {
    return this._dynamicEntryCount;
  }

  // dynamic_entry_limit - computed: false, optional: true, required: false
  private _dynamicEntryLimit?: string; 
  public get dynamicEntryLimit() {
    return this.getStringAttribute('dynamic_entry_limit');
  }
  public set dynamicEntryLimit(value: string) {
    this._dynamicEntryLimit = value;
  }
  public resetDynamicEntryLimit() {
    this._dynamicEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryLimitInput() {
    return this._dynamicEntryLimit;
  }

  // dynamic_entry_warn_state - computed: false, optional: true, required: false
  private _dynamicEntryWarnState?: string; 
  public get dynamicEntryWarnState() {
    return this.getStringAttribute('dynamic_entry_warn_state');
  }
  public set dynamicEntryWarnState(value: string) {
    this._dynamicEntryWarnState = value;
  }
  public resetDynamicEntryWarnState() {
    this._dynamicEntryWarnState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryWarnStateInput() {
    return this._dynamicEntryWarnState;
  }

  // frag_packet_rate_limit - computed: false, optional: true, required: false
  private _fragPacketRateLimit?: string; 
  public get fragPacketRateLimit() {
    return this.getStringAttribute('frag_packet_rate_limit');
  }
  public set fragPacketRateLimit(value: string) {
    this._fragPacketRateLimit = value;
  }
  public resetFragPacketRateLimit() {
    this._fragPacketRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateLimitInput() {
    return this._fragPacketRateLimit;
  }

  // is_app_stat1_exceed - computed: false, optional: true, required: false
  private _isAppStat1Exceed?: number; 
  public get isAppStat1Exceed() {
    return this.getNumberAttribute('is_app_stat1_exceed');
  }
  public set isAppStat1Exceed(value: number) {
    this._isAppStat1Exceed = value;
  }
  public resetIsAppStat1Exceed() {
    this._isAppStat1Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat1ExceedInput() {
    return this._isAppStat1Exceed;
  }

  // is_app_stat2_exceed - computed: false, optional: true, required: false
  private _isAppStat2Exceed?: number; 
  public get isAppStat2Exceed() {
    return this.getNumberAttribute('is_app_stat2_exceed');
  }
  public set isAppStat2Exceed(value: number) {
    this._isAppStat2Exceed = value;
  }
  public resetIsAppStat2Exceed() {
    this._isAppStat2Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat2ExceedInput() {
    return this._isAppStat2Exceed;
  }

  // is_app_stat3_exceed - computed: false, optional: true, required: false
  private _isAppStat3Exceed?: number; 
  public get isAppStat3Exceed() {
    return this.getNumberAttribute('is_app_stat3_exceed');
  }
  public set isAppStat3Exceed(value: number) {
    this._isAppStat3Exceed = value;
  }
  public resetIsAppStat3Exceed() {
    this._isAppStat3Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat3ExceedInput() {
    return this._isAppStat3Exceed;
  }

  // is_app_stat4_exceed - computed: false, optional: true, required: false
  private _isAppStat4Exceed?: number; 
  public get isAppStat4Exceed() {
    return this.getNumberAttribute('is_app_stat4_exceed');
  }
  public set isAppStat4Exceed(value: number) {
    this._isAppStat4Exceed = value;
  }
  public resetIsAppStat4Exceed() {
    this._isAppStat4Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat4ExceedInput() {
    return this._isAppStat4Exceed;
  }

  // is_app_stat5_exceed - computed: false, optional: true, required: false
  private _isAppStat5Exceed?: number; 
  public get isAppStat5Exceed() {
    return this.getNumberAttribute('is_app_stat5_exceed');
  }
  public set isAppStat5Exceed(value: number) {
    this._isAppStat5Exceed = value;
  }
  public resetIsAppStat5Exceed() {
    this._isAppStat5Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat5ExceedInput() {
    return this._isAppStat5Exceed;
  }

  // is_app_stat6_exceed - computed: false, optional: true, required: false
  private _isAppStat6Exceed?: number; 
  public get isAppStat6Exceed() {
    return this.getNumberAttribute('is_app_stat6_exceed');
  }
  public set isAppStat6Exceed(value: number) {
    this._isAppStat6Exceed = value;
  }
  public resetIsAppStat6Exceed() {
    this._isAppStat6Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat6ExceedInput() {
    return this._isAppStat6Exceed;
  }

  // is_app_stat7_exceed - computed: false, optional: true, required: false
  private _isAppStat7Exceed?: number; 
  public get isAppStat7Exceed() {
    return this.getNumberAttribute('is_app_stat7_exceed');
  }
  public set isAppStat7Exceed(value: number) {
    this._isAppStat7Exceed = value;
  }
  public resetIsAppStat7Exceed() {
    this._isAppStat7Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat7ExceedInput() {
    return this._isAppStat7Exceed;
  }

  // is_app_stat8_exceed - computed: false, optional: true, required: false
  private _isAppStat8Exceed?: number; 
  public get isAppStat8Exceed() {
    return this.getNumberAttribute('is_app_stat8_exceed');
  }
  public set isAppStat8Exceed(value: number) {
    this._isAppStat8Exceed = value;
  }
  public resetIsAppStat8Exceed() {
    this._isAppStat8Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat8ExceedInput() {
    return this._isAppStat8Exceed;
  }

  // is_auth_passed - computed: false, optional: true, required: false
  private _isAuthPassed?: string; 
  public get isAuthPassed() {
    return this.getStringAttribute('is_auth_passed');
  }
  public set isAuthPassed(value: string) {
    this._isAuthPassed = value;
  }
  public resetIsAuthPassed() {
    this._isAuthPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthPassedInput() {
    return this._isAuthPassed;
  }

  // is_connection_rate_exceed - computed: false, optional: true, required: false
  private _isConnectionRateExceed?: number; 
  public get isConnectionRateExceed() {
    return this.getNumberAttribute('is_connection_rate_exceed');
  }
  public set isConnectionRateExceed(value: number) {
    this._isConnectionRateExceed = value;
  }
  public resetIsConnectionRateExceed() {
    this._isConnectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionRateExceedInput() {
    return this._isConnectionRateExceed;
  }

  // is_connections_exceed - computed: false, optional: true, required: false
  private _isConnectionsExceed?: number; 
  public get isConnectionsExceed() {
    return this.getNumberAttribute('is_connections_exceed');
  }
  public set isConnectionsExceed(value: number) {
    this._isConnectionsExceed = value;
  }
  public resetIsConnectionsExceed() {
    this._isConnectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionsExceedInput() {
    return this._isConnectionsExceed;
  }

  // is_frag_packet_rate_exceed - computed: false, optional: true, required: false
  private _isFragPacketRateExceed?: number; 
  public get isFragPacketRateExceed() {
    return this.getNumberAttribute('is_frag_packet_rate_exceed');
  }
  public set isFragPacketRateExceed(value: number) {
    this._isFragPacketRateExceed = value;
  }
  public resetIsFragPacketRateExceed() {
    this._isFragPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFragPacketRateExceedInput() {
    return this._isFragPacketRateExceed;
  }

  // is_kbit_rate_exceed - computed: false, optional: true, required: false
  private _isKbitRateExceed?: number; 
  public get isKbitRateExceed() {
    return this.getNumberAttribute('is_kbit_rate_exceed');
  }
  public set isKbitRateExceed(value: number) {
    this._isKbitRateExceed = value;
  }
  public resetIsKbitRateExceed() {
    this._isKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKbitRateExceedInput() {
    return this._isKbitRateExceed;
  }

  // is_packet_rate_exceed - computed: false, optional: true, required: false
  private _isPacketRateExceed?: number; 
  public get isPacketRateExceed() {
    return this.getNumberAttribute('is_packet_rate_exceed');
  }
  public set isPacketRateExceed(value: number) {
    this._isPacketRateExceed = value;
  }
  public resetIsPacketRateExceed() {
    this._isPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPacketRateExceedInput() {
    return this._isPacketRateExceed;
  }

  // kbit_rate_limit - computed: false, optional: true, required: false
  private _kbitRateLimit?: string; 
  public get kbitRateLimit() {
    return this.getStringAttribute('kbit_rate_limit');
  }
  public set kbitRateLimit(value: string) {
    this._kbitRateLimit = value;
  }
  public resetKbitRateLimit() {
    this._kbitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateLimitInput() {
    return this._kbitRateLimit;
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

  // lockup_time - computed: false, optional: true, required: false
  private _lockupTime?: number; 
  public get lockupTime() {
    return this.getNumberAttribute('lockup_time');
  }
  public set lockupTime(value: number) {
    this._lockupTime = value;
  }
  public resetLockupTime() {
    this._lockupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupTimeInput() {
    return this._lockupTime;
  }

  // packet_rate_limit - computed: false, optional: true, required: false
  private _packetRateLimit?: string; 
  public get packetRateLimit() {
    return this.getStringAttribute('packet_rate_limit');
  }
  public set packetRateLimit(value: string) {
    this._packetRateLimit = value;
  }
  public resetPacketRateLimit() {
    this._packetRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateLimitInput() {
    return this._packetRateLimit;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: number; 
  public get sflowSourceId() {
    return this.getNumberAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: number) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStructOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#entry_displayed_count DataThunderDdosDstZoneOper#entry_displayed_count}
  */
  readonly entryDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#hw_blacklisted DataThunderDdosDstZoneOper#hw_blacklisted}
  */
  readonly hwBlacklisted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#ipv6 DataThunderDdosDstZoneOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#reporting_status DataThunderDdosDstZoneOper#reporting_status}
  */
  readonly reportingStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#service_displayed_count DataThunderDdosDstZoneOper#service_displayed_count}
  */
  readonly serviceDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sources DataThunderDdosDstZoneOper#sources}
  */
  readonly sources?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sources_all_entries DataThunderDdosDstZoneOper#sources_all_entries}
  */
  readonly sourcesAllEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#subnet_ip_addr DataThunderDdosDstZoneOper#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#subnet_ipv6_addr DataThunderDdosDstZoneOper#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * ddos_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#ddos_entry_list DataThunderDdosDstZoneOper#ddos_entry_list}
  */
  readonly ddosEntryList?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_displayed_count: cdktf.numberToTerraform(struct!.entryDisplayedCount),
    hw_blacklisted: cdktf.numberToTerraform(struct!.hwBlacklisted),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    reporting_status: cdktf.numberToTerraform(struct!.reportingStatus),
    service_displayed_count: cdktf.numberToTerraform(struct!.serviceDisplayedCount),
    sources: cdktf.numberToTerraform(struct!.sources),
    sources_all_entries: cdktf.numberToTerraform(struct!.sourcesAllEntries),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    ddos_entry_list: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStructToTerraform, true)(struct!.ddosEntryList),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.entryDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_blacklisted: {
      value: cdktf.numberToHclTerraform(struct!.hwBlacklisted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reporting_status: {
      value: cdktf.numberToHclTerraform(struct!.reportingStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.serviceDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    ddos_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStructToHclTerraform, true)(struct!.ddosEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDisplayedCount = this._entryDisplayedCount;
    }
    if (this._hwBlacklisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwBlacklisted = this._hwBlacklisted;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._reportingStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingStatus = this._reportingStatus;
    }
    if (this._serviceDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDisplayedCount = this._serviceDisplayedCount;
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
    if (this._ddosEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryList = this._ddosEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryDisplayedCount = undefined;
      this._hwBlacklisted = undefined;
      this._ipv6 = undefined;
      this._reportingStatus = undefined;
      this._serviceDisplayedCount = undefined;
      this._sources = undefined;
      this._sourcesAllEntries = undefined;
      this._subnetIpAddr = undefined;
      this._subnetIpv6Addr = undefined;
      this._ddosEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryDisplayedCount = value.entryDisplayedCount;
      this._hwBlacklisted = value.hwBlacklisted;
      this._ipv6 = value.ipv6;
      this._reportingStatus = value.reportingStatus;
      this._serviceDisplayedCount = value.serviceDisplayedCount;
      this._sources = value.sources;
      this._sourcesAllEntries = value.sourcesAllEntries;
      this._subnetIpAddr = value.subnetIpAddr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._ddosEntryList.internalValue = value.ddosEntryList;
    }
  }

  // entry_displayed_count - computed: false, optional: true, required: false
  private _entryDisplayedCount?: number; 
  public get entryDisplayedCount() {
    return this.getNumberAttribute('entry_displayed_count');
  }
  public set entryDisplayedCount(value: number) {
    this._entryDisplayedCount = value;
  }
  public resetEntryDisplayedCount() {
    this._entryDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDisplayedCountInput() {
    return this._entryDisplayedCount;
  }

  // hw_blacklisted - computed: false, optional: true, required: false
  private _hwBlacklisted?: number; 
  public get hwBlacklisted() {
    return this.getNumberAttribute('hw_blacklisted');
  }
  public set hwBlacklisted(value: number) {
    this._hwBlacklisted = value;
  }
  public resetHwBlacklisted() {
    this._hwBlacklisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistedInput() {
    return this._hwBlacklisted;
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

  // reporting_status - computed: false, optional: true, required: false
  private _reportingStatus?: number; 
  public get reportingStatus() {
    return this.getNumberAttribute('reporting_status');
  }
  public set reportingStatus(value: number) {
    this._reportingStatus = value;
  }
  public resetReportingStatus() {
    this._reportingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingStatusInput() {
    return this._reportingStatus;
  }

  // service_displayed_count - computed: false, optional: true, required: false
  private _serviceDisplayedCount?: number; 
  public get serviceDisplayedCount() {
    return this.getNumberAttribute('service_displayed_count');
  }
  public set serviceDisplayedCount(value: number) {
    this._serviceDisplayedCount = value;
  }
  public resetServiceDisplayedCount() {
    this._serviceDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDisplayedCountInput() {
    return this._serviceDisplayedCount;
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

  // ddos_entry_list - computed: false, optional: true, required: false
  private _ddosEntryList = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStructList(this, "ddos_entry_list", false);
  public get ddosEntryList() {
    return this._ddosEntryList;
  }
  public putDdosEntryList(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperDdosEntryListStruct[] | cdktf.IResolvable) {
    this._ddosEntryList.internalValue = value;
  }
  public resetDdosEntryList() {
    this._ddosEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryListInput() {
    return this._ddosEntryList.internalValue;
  }
}
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#level DataThunderDdosDstZoneOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#source_threshold DataThunderDdosDstZoneOper#source_threshold}
  */
  readonly sourceThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#zone_threshold DataThunderDdosDstZoneOper#zone_threshold}
  */
  readonly zoneThreshold?: string;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfgToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
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


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfgToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
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

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfgList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfgOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_index DataThunderDdosDstZoneOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_name DataThunderDdosDstZoneOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#rate DataThunderDdosDstZoneOper#rate}
  */
  readonly rate?: string;
  /**
  * indicator_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_cfg DataThunderDdosDstZoneOper#indicator_cfg}
  */
  readonly indicatorCfg?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    rate: cdktf.stringToTerraform(struct!.rate),
    indicator_cfg: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfgToTerraform, true)(struct!.indicatorCfg),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicators | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfgToHclTerraform, true)(struct!.indicatorCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicators | cdktf.IResolvable | undefined) {
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
  private _indicatorCfg = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfgList(this, "indicator_cfg", false);
  public get indicatorCfg() {
    return this._indicatorCfg;
  }
  public putIndicatorCfg(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_level DataThunderDdosDstZoneOper#current_level}
  */
  readonly currentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#details DataThunderDdosDstZoneOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#detection_data_source DataThunderDdosDstZoneOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicators DataThunderDdosDstZoneOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_level: cdktf.stringToTerraform(struct!.currentLevel),
    details: cdktf.numberToTerraform(struct!.details),
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOper): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOper | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOper | undefined) {
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
  private _indicators = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperIndicators[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortInd {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOper;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOutputReference | DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortInd | undefined) {
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
  private _oper = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOper) {
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
export interface DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStruct {
  /**
  * 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#port_other DataThunderDdosDstZoneOper#port_other}
  */
  readonly portOther: string;
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#protocol DataThunderDdosDstZoneOper#protocol}
  */
  readonly protocol: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOper;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#port_ind DataThunderDdosDstZoneOper#port_ind}
  */
  readonly portInd?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortInd;
}

export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStructToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_other: cdktf.stringToTerraform(struct!.portOther),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    oper: dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperToTerraform(struct!.oper),
    port_ind: dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndToTerraform(struct!.portInd),
  }
}


export function dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStructToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_other: {
      value: cdktf.stringToHclTerraform(struct!.portOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperList",
    },
    port_ind: {
      value: dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndToHclTerraform(struct!.portInd),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOther = this._portOther;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
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

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portOther = undefined;
      this._protocol = undefined;
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
      this._portOther = value.portOther;
      this._protocol = value.protocol;
      this._oper.internalValue = value.oper;
      this._portInd.internalValue = value.portInd;
    }
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListOper) {
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
  private _portInd = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListPortInd) {
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

export class DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStructOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPort {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperSrcPortOper;
  /**
  * zone_src_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#zone_src_port_list DataThunderDdosDstZoneOper#zone_src_port_list}
  */
  readonly zoneSrcPortList?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStruct[] | cdktf.IResolvable;
  /**
  * zone_src_port_other_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#zone_src_port_other_list DataThunderDdosDstZoneOper#zone_src_port_other_list}
  */
  readonly zoneSrcPortOtherList?: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperSrcPortToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortOutputReference | DataThunderDdosDstZoneOperSrcPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZoneOperSrcPortOperToTerraform(struct!.oper),
    zone_src_port_list: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortZoneSrcPortListStructToTerraform, true)(struct!.zoneSrcPortList),
    zone_src_port_other_list: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStructToTerraform, true)(struct!.zoneSrcPortOtherList),
  }
}


export function dataThunderDdosDstZoneOperSrcPortToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortOutputReference | DataThunderDdosDstZoneOperSrcPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZoneOperSrcPortOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortOperList",
    },
    zone_src_port_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortZoneSrcPortListStructToHclTerraform, true)(struct!.zoneSrcPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStructList",
    },
    zone_src_port_other_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStructToHclTerraform, true)(struct!.zoneSrcPortOtherList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    if (this._zoneSrcPortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcPortList = this._zoneSrcPortList?.internalValue;
    }
    if (this._zoneSrcPortOtherList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcPortOtherList = this._zoneSrcPortOtherList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
      this._zoneSrcPortList.internalValue = undefined;
      this._zoneSrcPortOtherList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
      this._zoneSrcPortList.internalValue = value.zoneSrcPortList;
      this._zoneSrcPortOtherList.internalValue = value.zoneSrcPortOtherList;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneOperSrcPortOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperSrcPortOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // zone_src_port_list - computed: false, optional: true, required: false
  private _zoneSrcPortList = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStructList(this, "zone_src_port_list", false);
  public get zoneSrcPortList() {
    return this._zoneSrcPortList;
  }
  public putZoneSrcPortList(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortListStruct[] | cdktf.IResolvable) {
    this._zoneSrcPortList.internalValue = value;
  }
  public resetZoneSrcPortList() {
    this._zoneSrcPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSrcPortListInput() {
    return this._zoneSrcPortList.internalValue;
  }

  // zone_src_port_other_list - computed: false, optional: true, required: false
  private _zoneSrcPortOtherList = new DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStructList(this, "zone_src_port_other_list", false);
  public get zoneSrcPortOtherList() {
    return this._zoneSrcPortOtherList;
  }
  public putZoneSrcPortOtherList(value: DataThunderDdosDstZoneOperSrcPortZoneSrcPortOtherListStruct[] | cdktf.IResolvable) {
    this._zoneSrcPortOtherList.internalValue = value;
  }
  public resetZoneSrcPortOtherList() {
    this._zoneSrcPortOtherList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSrcPortOtherListInput() {
    return this._zoneSrcPortOtherList.internalValue;
  }
}
export interface DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#age DataThunderDdosDstZoneOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat1_limit DataThunderDdosDstZoneOper#app_stat1_limit}
  */
  readonly appStat1Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat2_limit DataThunderDdosDstZoneOper#app_stat2_limit}
  */
  readonly appStat2Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat3_limit DataThunderDdosDstZoneOper#app_stat3_limit}
  */
  readonly appStat3Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat4_limit DataThunderDdosDstZoneOper#app_stat4_limit}
  */
  readonly appStat4Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat5_limit DataThunderDdosDstZoneOper#app_stat5_limit}
  */
  readonly appStat5Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat6_limit DataThunderDdosDstZoneOper#app_stat6_limit}
  */
  readonly appStat6Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat7_limit DataThunderDdosDstZoneOper#app_stat7_limit}
  */
  readonly appStat7Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#app_stat8_limit DataThunderDdosDstZoneOper#app_stat8_limit}
  */
  readonly appStat8Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#bw_state DataThunderDdosDstZoneOper#bw_state}
  */
  readonly bwState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#connection_limit DataThunderDdosDstZoneOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#connection_rate_limit DataThunderDdosDstZoneOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat1 DataThunderDdosDstZoneOper#current_app_stat1}
  */
  readonly currentAppStat1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat2 DataThunderDdosDstZoneOper#current_app_stat2}
  */
  readonly currentAppStat2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat3 DataThunderDdosDstZoneOper#current_app_stat3}
  */
  readonly currentAppStat3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat4 DataThunderDdosDstZoneOper#current_app_stat4}
  */
  readonly currentAppStat4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat5 DataThunderDdosDstZoneOper#current_app_stat5}
  */
  readonly currentAppStat5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat6 DataThunderDdosDstZoneOper#current_app_stat6}
  */
  readonly currentAppStat6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat7 DataThunderDdosDstZoneOper#current_app_stat7}
  */
  readonly currentAppStat7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_app_stat8 DataThunderDdosDstZoneOper#current_app_stat8}
  */
  readonly currentAppStat8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_connection_rate DataThunderDdosDstZoneOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_connections DataThunderDdosDstZoneOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_frag_packet_rate DataThunderDdosDstZoneOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_kbit_rate DataThunderDdosDstZoneOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_packet_rate DataThunderDdosDstZoneOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#debug_str DataThunderDdosDstZoneOper#debug_str}
  */
  readonly debugStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dst_address_str DataThunderDdosDstZoneOper#dst_address_str}
  */
  readonly dstAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_count DataThunderDdosDstZoneOper#dynamic_entry_count}
  */
  readonly dynamicEntryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_limit DataThunderDdosDstZoneOper#dynamic_entry_limit}
  */
  readonly dynamicEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#dynamic_entry_warn_state DataThunderDdosDstZoneOper#dynamic_entry_warn_state}
  */
  readonly dynamicEntryWarnState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#frag_packet_rate_limit DataThunderDdosDstZoneOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat1_exceed DataThunderDdosDstZoneOper#is_app_stat1_exceed}
  */
  readonly isAppStat1Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat2_exceed DataThunderDdosDstZoneOper#is_app_stat2_exceed}
  */
  readonly isAppStat2Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat3_exceed DataThunderDdosDstZoneOper#is_app_stat3_exceed}
  */
  readonly isAppStat3Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat4_exceed DataThunderDdosDstZoneOper#is_app_stat4_exceed}
  */
  readonly isAppStat4Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat5_exceed DataThunderDdosDstZoneOper#is_app_stat5_exceed}
  */
  readonly isAppStat5Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat6_exceed DataThunderDdosDstZoneOper#is_app_stat6_exceed}
  */
  readonly isAppStat6Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat7_exceed DataThunderDdosDstZoneOper#is_app_stat7_exceed}
  */
  readonly isAppStat7Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_app_stat8_exceed DataThunderDdosDstZoneOper#is_app_stat8_exceed}
  */
  readonly isAppStat8Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_auth_passed DataThunderDdosDstZoneOper#is_auth_passed}
  */
  readonly isAuthPassed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_connection_rate_exceed DataThunderDdosDstZoneOper#is_connection_rate_exceed}
  */
  readonly isConnectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_connections_exceed DataThunderDdosDstZoneOper#is_connections_exceed}
  */
  readonly isConnectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_frag_packet_rate_exceed DataThunderDdosDstZoneOper#is_frag_packet_rate_exceed}
  */
  readonly isFragPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_kbit_rate_exceed DataThunderDdosDstZoneOper#is_kbit_rate_exceed}
  */
  readonly isKbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#is_packet_rate_exceed DataThunderDdosDstZoneOper#is_packet_rate_exceed}
  */
  readonly isPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#kbit_rate_limit DataThunderDdosDstZoneOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#level DataThunderDdosDstZoneOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#lockup_time DataThunderDdosDstZoneOper#lockup_time}
  */
  readonly lockupTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#packet_rate_limit DataThunderDdosDstZoneOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sflow_source_id DataThunderDdosDstZoneOper#sflow_source_id}
  */
  readonly sflowSourceId?: number;
}

export function dataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStructToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    app_stat1_limit: cdktf.stringToTerraform(struct!.appStat1Limit),
    app_stat2_limit: cdktf.stringToTerraform(struct!.appStat2Limit),
    app_stat3_limit: cdktf.stringToTerraform(struct!.appStat3Limit),
    app_stat4_limit: cdktf.stringToTerraform(struct!.appStat4Limit),
    app_stat5_limit: cdktf.stringToTerraform(struct!.appStat5Limit),
    app_stat6_limit: cdktf.stringToTerraform(struct!.appStat6Limit),
    app_stat7_limit: cdktf.stringToTerraform(struct!.appStat7Limit),
    app_stat8_limit: cdktf.stringToTerraform(struct!.appStat8Limit),
    bw_state: cdktf.stringToTerraform(struct!.bwState),
    connection_limit: cdktf.stringToTerraform(struct!.connectionLimit),
    connection_rate_limit: cdktf.stringToTerraform(struct!.connectionRateLimit),
    current_app_stat1: cdktf.stringToTerraform(struct!.currentAppStat1),
    current_app_stat2: cdktf.stringToTerraform(struct!.currentAppStat2),
    current_app_stat3: cdktf.stringToTerraform(struct!.currentAppStat3),
    current_app_stat4: cdktf.stringToTerraform(struct!.currentAppStat4),
    current_app_stat5: cdktf.stringToTerraform(struct!.currentAppStat5),
    current_app_stat6: cdktf.stringToTerraform(struct!.currentAppStat6),
    current_app_stat7: cdktf.stringToTerraform(struct!.currentAppStat7),
    current_app_stat8: cdktf.stringToTerraform(struct!.currentAppStat8),
    current_connection_rate: cdktf.stringToTerraform(struct!.currentConnectionRate),
    current_connections: cdktf.stringToTerraform(struct!.currentConnections),
    current_frag_packet_rate: cdktf.stringToTerraform(struct!.currentFragPacketRate),
    current_kbit_rate: cdktf.stringToTerraform(struct!.currentKbitRate),
    current_packet_rate: cdktf.stringToTerraform(struct!.currentPacketRate),
    debug_str: cdktf.stringToTerraform(struct!.debugStr),
    dst_address_str: cdktf.stringToTerraform(struct!.dstAddressStr),
    dynamic_entry_count: cdktf.stringToTerraform(struct!.dynamicEntryCount),
    dynamic_entry_limit: cdktf.stringToTerraform(struct!.dynamicEntryLimit),
    dynamic_entry_warn_state: cdktf.stringToTerraform(struct!.dynamicEntryWarnState),
    frag_packet_rate_limit: cdktf.stringToTerraform(struct!.fragPacketRateLimit),
    is_app_stat1_exceed: cdktf.numberToTerraform(struct!.isAppStat1Exceed),
    is_app_stat2_exceed: cdktf.numberToTerraform(struct!.isAppStat2Exceed),
    is_app_stat3_exceed: cdktf.numberToTerraform(struct!.isAppStat3Exceed),
    is_app_stat4_exceed: cdktf.numberToTerraform(struct!.isAppStat4Exceed),
    is_app_stat5_exceed: cdktf.numberToTerraform(struct!.isAppStat5Exceed),
    is_app_stat6_exceed: cdktf.numberToTerraform(struct!.isAppStat6Exceed),
    is_app_stat7_exceed: cdktf.numberToTerraform(struct!.isAppStat7Exceed),
    is_app_stat8_exceed: cdktf.numberToTerraform(struct!.isAppStat8Exceed),
    is_auth_passed: cdktf.stringToTerraform(struct!.isAuthPassed),
    is_connection_rate_exceed: cdktf.numberToTerraform(struct!.isConnectionRateExceed),
    is_connections_exceed: cdktf.numberToTerraform(struct!.isConnectionsExceed),
    is_frag_packet_rate_exceed: cdktf.numberToTerraform(struct!.isFragPacketRateExceed),
    is_kbit_rate_exceed: cdktf.numberToTerraform(struct!.isKbitRateExceed),
    is_packet_rate_exceed: cdktf.numberToTerraform(struct!.isPacketRateExceed),
    kbit_rate_limit: cdktf.stringToTerraform(struct!.kbitRateLimit),
    level: cdktf.numberToTerraform(struct!.level),
    lockup_time: cdktf.numberToTerraform(struct!.lockupTime),
    packet_rate_limit: cdktf.stringToTerraform(struct!.packetRateLimit),
    sflow_source_id: cdktf.numberToTerraform(struct!.sflowSourceId),
  }
}


export function dataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_stat1_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat1Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat2_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat2Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat3_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat3Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat4_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat4Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat5_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat5Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat6_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat6Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat7_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat7Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat8_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat8Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bw_state: {
      value: cdktf.stringToHclTerraform(struct!.bwState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat1: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat2: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat3: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat4: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat5: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat6: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat7: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat8: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connection_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentConnectionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connections: {
      value: cdktf.stringToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_frag_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentFragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_kbit_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentKbitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_str: {
      value: cdktf.stringToHclTerraform(struct!.debugStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_address_str: {
      value: cdktf.stringToHclTerraform(struct!.dstAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_count: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_limit: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_warn_state: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryWarnState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.fragPacketRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_app_stat1_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat1Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat2_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat2Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat3_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat3Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat4_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat4Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat5_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat5Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat6_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat6Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat7_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat7Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat8_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat8Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_auth_passed: {
      value: cdktf.stringToHclTerraform(struct!.isAuthPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_frag_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isFragPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_time: {
      value: cdktf.numberToHclTerraform(struct!.lockupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.numberToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._appStat1Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat1Limit = this._appStat1Limit;
    }
    if (this._appStat2Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat2Limit = this._appStat2Limit;
    }
    if (this._appStat3Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat3Limit = this._appStat3Limit;
    }
    if (this._appStat4Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat4Limit = this._appStat4Limit;
    }
    if (this._appStat5Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat5Limit = this._appStat5Limit;
    }
    if (this._appStat6Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat6Limit = this._appStat6Limit;
    }
    if (this._appStat7Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat7Limit = this._appStat7Limit;
    }
    if (this._appStat8Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat8Limit = this._appStat8Limit;
    }
    if (this._bwState !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwState = this._bwState;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._connectionRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateLimit = this._connectionRateLimit;
    }
    if (this._currentAppStat1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat1 = this._currentAppStat1;
    }
    if (this._currentAppStat2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat2 = this._currentAppStat2;
    }
    if (this._currentAppStat3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat3 = this._currentAppStat3;
    }
    if (this._currentAppStat4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat4 = this._currentAppStat4;
    }
    if (this._currentAppStat5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat5 = this._currentAppStat5;
    }
    if (this._currentAppStat6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat6 = this._currentAppStat6;
    }
    if (this._currentAppStat7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat7 = this._currentAppStat7;
    }
    if (this._currentAppStat8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat8 = this._currentAppStat8;
    }
    if (this._currentConnectionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnectionRate = this._currentConnectionRate;
    }
    if (this._currentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnections = this._currentConnections;
    }
    if (this._currentFragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentFragPacketRate = this._currentFragPacketRate;
    }
    if (this._currentKbitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKbitRate = this._currentKbitRate;
    }
    if (this._currentPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPacketRate = this._currentPacketRate;
    }
    if (this._debugStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugStr = this._debugStr;
    }
    if (this._dstAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddressStr = this._dstAddressStr;
    }
    if (this._dynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryCount = this._dynamicEntryCount;
    }
    if (this._dynamicEntryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryLimit = this._dynamicEntryLimit;
    }
    if (this._dynamicEntryWarnState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryWarnState = this._dynamicEntryWarnState;
    }
    if (this._fragPacketRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRateLimit = this._fragPacketRateLimit;
    }
    if (this._isAppStat1Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat1Exceed = this._isAppStat1Exceed;
    }
    if (this._isAppStat2Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat2Exceed = this._isAppStat2Exceed;
    }
    if (this._isAppStat3Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat3Exceed = this._isAppStat3Exceed;
    }
    if (this._isAppStat4Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat4Exceed = this._isAppStat4Exceed;
    }
    if (this._isAppStat5Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat5Exceed = this._isAppStat5Exceed;
    }
    if (this._isAppStat6Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat6Exceed = this._isAppStat6Exceed;
    }
    if (this._isAppStat7Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat7Exceed = this._isAppStat7Exceed;
    }
    if (this._isAppStat8Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat8Exceed = this._isAppStat8Exceed;
    }
    if (this._isAuthPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuthPassed = this._isAuthPassed;
    }
    if (this._isConnectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionRateExceed = this._isConnectionRateExceed;
    }
    if (this._isConnectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionsExceed = this._isConnectionsExceed;
    }
    if (this._isFragPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFragPacketRateExceed = this._isFragPacketRateExceed;
    }
    if (this._isKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKbitRateExceed = this._isKbitRateExceed;
    }
    if (this._isPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPacketRateExceed = this._isPacketRateExceed;
    }
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._lockupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTime = this._lockupTime;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._appStat1Limit = undefined;
      this._appStat2Limit = undefined;
      this._appStat3Limit = undefined;
      this._appStat4Limit = undefined;
      this._appStat5Limit = undefined;
      this._appStat6Limit = undefined;
      this._appStat7Limit = undefined;
      this._appStat8Limit = undefined;
      this._bwState = undefined;
      this._connectionLimit = undefined;
      this._connectionRateLimit = undefined;
      this._currentAppStat1 = undefined;
      this._currentAppStat2 = undefined;
      this._currentAppStat3 = undefined;
      this._currentAppStat4 = undefined;
      this._currentAppStat5 = undefined;
      this._currentAppStat6 = undefined;
      this._currentAppStat7 = undefined;
      this._currentAppStat8 = undefined;
      this._currentConnectionRate = undefined;
      this._currentConnections = undefined;
      this._currentFragPacketRate = undefined;
      this._currentKbitRate = undefined;
      this._currentPacketRate = undefined;
      this._debugStr = undefined;
      this._dstAddressStr = undefined;
      this._dynamicEntryCount = undefined;
      this._dynamicEntryLimit = undefined;
      this._dynamicEntryWarnState = undefined;
      this._fragPacketRateLimit = undefined;
      this._isAppStat1Exceed = undefined;
      this._isAppStat2Exceed = undefined;
      this._isAppStat3Exceed = undefined;
      this._isAppStat4Exceed = undefined;
      this._isAppStat5Exceed = undefined;
      this._isAppStat6Exceed = undefined;
      this._isAppStat7Exceed = undefined;
      this._isAppStat8Exceed = undefined;
      this._isAuthPassed = undefined;
      this._isConnectionRateExceed = undefined;
      this._isConnectionsExceed = undefined;
      this._isFragPacketRateExceed = undefined;
      this._isKbitRateExceed = undefined;
      this._isPacketRateExceed = undefined;
      this._kbitRateLimit = undefined;
      this._level = undefined;
      this._lockupTime = undefined;
      this._packetRateLimit = undefined;
      this._sflowSourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._appStat1Limit = value.appStat1Limit;
      this._appStat2Limit = value.appStat2Limit;
      this._appStat3Limit = value.appStat3Limit;
      this._appStat4Limit = value.appStat4Limit;
      this._appStat5Limit = value.appStat5Limit;
      this._appStat6Limit = value.appStat6Limit;
      this._appStat7Limit = value.appStat7Limit;
      this._appStat8Limit = value.appStat8Limit;
      this._bwState = value.bwState;
      this._connectionLimit = value.connectionLimit;
      this._connectionRateLimit = value.connectionRateLimit;
      this._currentAppStat1 = value.currentAppStat1;
      this._currentAppStat2 = value.currentAppStat2;
      this._currentAppStat3 = value.currentAppStat3;
      this._currentAppStat4 = value.currentAppStat4;
      this._currentAppStat5 = value.currentAppStat5;
      this._currentAppStat6 = value.currentAppStat6;
      this._currentAppStat7 = value.currentAppStat7;
      this._currentAppStat8 = value.currentAppStat8;
      this._currentConnectionRate = value.currentConnectionRate;
      this._currentConnections = value.currentConnections;
      this._currentFragPacketRate = value.currentFragPacketRate;
      this._currentKbitRate = value.currentKbitRate;
      this._currentPacketRate = value.currentPacketRate;
      this._debugStr = value.debugStr;
      this._dstAddressStr = value.dstAddressStr;
      this._dynamicEntryCount = value.dynamicEntryCount;
      this._dynamicEntryLimit = value.dynamicEntryLimit;
      this._dynamicEntryWarnState = value.dynamicEntryWarnState;
      this._fragPacketRateLimit = value.fragPacketRateLimit;
      this._isAppStat1Exceed = value.isAppStat1Exceed;
      this._isAppStat2Exceed = value.isAppStat2Exceed;
      this._isAppStat3Exceed = value.isAppStat3Exceed;
      this._isAppStat4Exceed = value.isAppStat4Exceed;
      this._isAppStat5Exceed = value.isAppStat5Exceed;
      this._isAppStat6Exceed = value.isAppStat6Exceed;
      this._isAppStat7Exceed = value.isAppStat7Exceed;
      this._isAppStat8Exceed = value.isAppStat8Exceed;
      this._isAuthPassed = value.isAuthPassed;
      this._isConnectionRateExceed = value.isConnectionRateExceed;
      this._isConnectionsExceed = value.isConnectionsExceed;
      this._isFragPacketRateExceed = value.isFragPacketRateExceed;
      this._isKbitRateExceed = value.isKbitRateExceed;
      this._isPacketRateExceed = value.isPacketRateExceed;
      this._kbitRateLimit = value.kbitRateLimit;
      this._level = value.level;
      this._lockupTime = value.lockupTime;
      this._packetRateLimit = value.packetRateLimit;
      this._sflowSourceId = value.sflowSourceId;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // app_stat1_limit - computed: false, optional: true, required: false
  private _appStat1Limit?: string; 
  public get appStat1Limit() {
    return this.getStringAttribute('app_stat1_limit');
  }
  public set appStat1Limit(value: string) {
    this._appStat1Limit = value;
  }
  public resetAppStat1Limit() {
    this._appStat1Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat1LimitInput() {
    return this._appStat1Limit;
  }

  // app_stat2_limit - computed: false, optional: true, required: false
  private _appStat2Limit?: string; 
  public get appStat2Limit() {
    return this.getStringAttribute('app_stat2_limit');
  }
  public set appStat2Limit(value: string) {
    this._appStat2Limit = value;
  }
  public resetAppStat2Limit() {
    this._appStat2Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat2LimitInput() {
    return this._appStat2Limit;
  }

  // app_stat3_limit - computed: false, optional: true, required: false
  private _appStat3Limit?: string; 
  public get appStat3Limit() {
    return this.getStringAttribute('app_stat3_limit');
  }
  public set appStat3Limit(value: string) {
    this._appStat3Limit = value;
  }
  public resetAppStat3Limit() {
    this._appStat3Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat3LimitInput() {
    return this._appStat3Limit;
  }

  // app_stat4_limit - computed: false, optional: true, required: false
  private _appStat4Limit?: string; 
  public get appStat4Limit() {
    return this.getStringAttribute('app_stat4_limit');
  }
  public set appStat4Limit(value: string) {
    this._appStat4Limit = value;
  }
  public resetAppStat4Limit() {
    this._appStat4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat4LimitInput() {
    return this._appStat4Limit;
  }

  // app_stat5_limit - computed: false, optional: true, required: false
  private _appStat5Limit?: string; 
  public get appStat5Limit() {
    return this.getStringAttribute('app_stat5_limit');
  }
  public set appStat5Limit(value: string) {
    this._appStat5Limit = value;
  }
  public resetAppStat5Limit() {
    this._appStat5Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat5LimitInput() {
    return this._appStat5Limit;
  }

  // app_stat6_limit - computed: false, optional: true, required: false
  private _appStat6Limit?: string; 
  public get appStat6Limit() {
    return this.getStringAttribute('app_stat6_limit');
  }
  public set appStat6Limit(value: string) {
    this._appStat6Limit = value;
  }
  public resetAppStat6Limit() {
    this._appStat6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat6LimitInput() {
    return this._appStat6Limit;
  }

  // app_stat7_limit - computed: false, optional: true, required: false
  private _appStat7Limit?: string; 
  public get appStat7Limit() {
    return this.getStringAttribute('app_stat7_limit');
  }
  public set appStat7Limit(value: string) {
    this._appStat7Limit = value;
  }
  public resetAppStat7Limit() {
    this._appStat7Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat7LimitInput() {
    return this._appStat7Limit;
  }

  // app_stat8_limit - computed: false, optional: true, required: false
  private _appStat8Limit?: string; 
  public get appStat8Limit() {
    return this.getStringAttribute('app_stat8_limit');
  }
  public set appStat8Limit(value: string) {
    this._appStat8Limit = value;
  }
  public resetAppStat8Limit() {
    this._appStat8Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat8LimitInput() {
    return this._appStat8Limit;
  }

  // bw_state - computed: false, optional: true, required: false
  private _bwState?: string; 
  public get bwState() {
    return this.getStringAttribute('bw_state');
  }
  public set bwState(value: string) {
    this._bwState = value;
  }
  public resetBwState() {
    this._bwState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwStateInput() {
    return this._bwState;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_rate_limit - computed: false, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // current_app_stat1 - computed: false, optional: true, required: false
  private _currentAppStat1?: string; 
  public get currentAppStat1() {
    return this.getStringAttribute('current_app_stat1');
  }
  public set currentAppStat1(value: string) {
    this._currentAppStat1 = value;
  }
  public resetCurrentAppStat1() {
    this._currentAppStat1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat1Input() {
    return this._currentAppStat1;
  }

  // current_app_stat2 - computed: false, optional: true, required: false
  private _currentAppStat2?: string; 
  public get currentAppStat2() {
    return this.getStringAttribute('current_app_stat2');
  }
  public set currentAppStat2(value: string) {
    this._currentAppStat2 = value;
  }
  public resetCurrentAppStat2() {
    this._currentAppStat2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat2Input() {
    return this._currentAppStat2;
  }

  // current_app_stat3 - computed: false, optional: true, required: false
  private _currentAppStat3?: string; 
  public get currentAppStat3() {
    return this.getStringAttribute('current_app_stat3');
  }
  public set currentAppStat3(value: string) {
    this._currentAppStat3 = value;
  }
  public resetCurrentAppStat3() {
    this._currentAppStat3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat3Input() {
    return this._currentAppStat3;
  }

  // current_app_stat4 - computed: false, optional: true, required: false
  private _currentAppStat4?: string; 
  public get currentAppStat4() {
    return this.getStringAttribute('current_app_stat4');
  }
  public set currentAppStat4(value: string) {
    this._currentAppStat4 = value;
  }
  public resetCurrentAppStat4() {
    this._currentAppStat4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat4Input() {
    return this._currentAppStat4;
  }

  // current_app_stat5 - computed: false, optional: true, required: false
  private _currentAppStat5?: string; 
  public get currentAppStat5() {
    return this.getStringAttribute('current_app_stat5');
  }
  public set currentAppStat5(value: string) {
    this._currentAppStat5 = value;
  }
  public resetCurrentAppStat5() {
    this._currentAppStat5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat5Input() {
    return this._currentAppStat5;
  }

  // current_app_stat6 - computed: false, optional: true, required: false
  private _currentAppStat6?: string; 
  public get currentAppStat6() {
    return this.getStringAttribute('current_app_stat6');
  }
  public set currentAppStat6(value: string) {
    this._currentAppStat6 = value;
  }
  public resetCurrentAppStat6() {
    this._currentAppStat6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat6Input() {
    return this._currentAppStat6;
  }

  // current_app_stat7 - computed: false, optional: true, required: false
  private _currentAppStat7?: string; 
  public get currentAppStat7() {
    return this.getStringAttribute('current_app_stat7');
  }
  public set currentAppStat7(value: string) {
    this._currentAppStat7 = value;
  }
  public resetCurrentAppStat7() {
    this._currentAppStat7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat7Input() {
    return this._currentAppStat7;
  }

  // current_app_stat8 - computed: false, optional: true, required: false
  private _currentAppStat8?: string; 
  public get currentAppStat8() {
    return this.getStringAttribute('current_app_stat8');
  }
  public set currentAppStat8(value: string) {
    this._currentAppStat8 = value;
  }
  public resetCurrentAppStat8() {
    this._currentAppStat8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat8Input() {
    return this._currentAppStat8;
  }

  // current_connection_rate - computed: false, optional: true, required: false
  private _currentConnectionRate?: string; 
  public get currentConnectionRate() {
    return this.getStringAttribute('current_connection_rate');
  }
  public set currentConnectionRate(value: string) {
    this._currentConnectionRate = value;
  }
  public resetCurrentConnectionRate() {
    this._currentConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionRateInput() {
    return this._currentConnectionRate;
  }

  // current_connections - computed: false, optional: true, required: false
  private _currentConnections?: string; 
  public get currentConnections() {
    return this.getStringAttribute('current_connections');
  }
  public set currentConnections(value: string) {
    this._currentConnections = value;
  }
  public resetCurrentConnections() {
    this._currentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionsInput() {
    return this._currentConnections;
  }

  // current_frag_packet_rate - computed: false, optional: true, required: false
  private _currentFragPacketRate?: string; 
  public get currentFragPacketRate() {
    return this.getStringAttribute('current_frag_packet_rate');
  }
  public set currentFragPacketRate(value: string) {
    this._currentFragPacketRate = value;
  }
  public resetCurrentFragPacketRate() {
    this._currentFragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentFragPacketRateInput() {
    return this._currentFragPacketRate;
  }

  // current_kbit_rate - computed: false, optional: true, required: false
  private _currentKbitRate?: string; 
  public get currentKbitRate() {
    return this.getStringAttribute('current_kbit_rate');
  }
  public set currentKbitRate(value: string) {
    this._currentKbitRate = value;
  }
  public resetCurrentKbitRate() {
    this._currentKbitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKbitRateInput() {
    return this._currentKbitRate;
  }

  // current_packet_rate - computed: false, optional: true, required: false
  private _currentPacketRate?: string; 
  public get currentPacketRate() {
    return this.getStringAttribute('current_packet_rate');
  }
  public set currentPacketRate(value: string) {
    this._currentPacketRate = value;
  }
  public resetCurrentPacketRate() {
    this._currentPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPacketRateInput() {
    return this._currentPacketRate;
  }

  // debug_str - computed: false, optional: true, required: false
  private _debugStr?: string; 
  public get debugStr() {
    return this.getStringAttribute('debug_str');
  }
  public set debugStr(value: string) {
    this._debugStr = value;
  }
  public resetDebugStr() {
    this._debugStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugStrInput() {
    return this._debugStr;
  }

  // dst_address_str - computed: false, optional: true, required: false
  private _dstAddressStr?: string; 
  public get dstAddressStr() {
    return this.getStringAttribute('dst_address_str');
  }
  public set dstAddressStr(value: string) {
    this._dstAddressStr = value;
  }
  public resetDstAddressStr() {
    this._dstAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressStrInput() {
    return this._dstAddressStr;
  }

  // dynamic_entry_count - computed: false, optional: true, required: false
  private _dynamicEntryCount?: string; 
  public get dynamicEntryCount() {
    return this.getStringAttribute('dynamic_entry_count');
  }
  public set dynamicEntryCount(value: string) {
    this._dynamicEntryCount = value;
  }
  public resetDynamicEntryCount() {
    this._dynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryCountInput() {
    return this._dynamicEntryCount;
  }

  // dynamic_entry_limit - computed: false, optional: true, required: false
  private _dynamicEntryLimit?: string; 
  public get dynamicEntryLimit() {
    return this.getStringAttribute('dynamic_entry_limit');
  }
  public set dynamicEntryLimit(value: string) {
    this._dynamicEntryLimit = value;
  }
  public resetDynamicEntryLimit() {
    this._dynamicEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryLimitInput() {
    return this._dynamicEntryLimit;
  }

  // dynamic_entry_warn_state - computed: false, optional: true, required: false
  private _dynamicEntryWarnState?: string; 
  public get dynamicEntryWarnState() {
    return this.getStringAttribute('dynamic_entry_warn_state');
  }
  public set dynamicEntryWarnState(value: string) {
    this._dynamicEntryWarnState = value;
  }
  public resetDynamicEntryWarnState() {
    this._dynamicEntryWarnState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryWarnStateInput() {
    return this._dynamicEntryWarnState;
  }

  // frag_packet_rate_limit - computed: false, optional: true, required: false
  private _fragPacketRateLimit?: string; 
  public get fragPacketRateLimit() {
    return this.getStringAttribute('frag_packet_rate_limit');
  }
  public set fragPacketRateLimit(value: string) {
    this._fragPacketRateLimit = value;
  }
  public resetFragPacketRateLimit() {
    this._fragPacketRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateLimitInput() {
    return this._fragPacketRateLimit;
  }

  // is_app_stat1_exceed - computed: false, optional: true, required: false
  private _isAppStat1Exceed?: number; 
  public get isAppStat1Exceed() {
    return this.getNumberAttribute('is_app_stat1_exceed');
  }
  public set isAppStat1Exceed(value: number) {
    this._isAppStat1Exceed = value;
  }
  public resetIsAppStat1Exceed() {
    this._isAppStat1Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat1ExceedInput() {
    return this._isAppStat1Exceed;
  }

  // is_app_stat2_exceed - computed: false, optional: true, required: false
  private _isAppStat2Exceed?: number; 
  public get isAppStat2Exceed() {
    return this.getNumberAttribute('is_app_stat2_exceed');
  }
  public set isAppStat2Exceed(value: number) {
    this._isAppStat2Exceed = value;
  }
  public resetIsAppStat2Exceed() {
    this._isAppStat2Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat2ExceedInput() {
    return this._isAppStat2Exceed;
  }

  // is_app_stat3_exceed - computed: false, optional: true, required: false
  private _isAppStat3Exceed?: number; 
  public get isAppStat3Exceed() {
    return this.getNumberAttribute('is_app_stat3_exceed');
  }
  public set isAppStat3Exceed(value: number) {
    this._isAppStat3Exceed = value;
  }
  public resetIsAppStat3Exceed() {
    this._isAppStat3Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat3ExceedInput() {
    return this._isAppStat3Exceed;
  }

  // is_app_stat4_exceed - computed: false, optional: true, required: false
  private _isAppStat4Exceed?: number; 
  public get isAppStat4Exceed() {
    return this.getNumberAttribute('is_app_stat4_exceed');
  }
  public set isAppStat4Exceed(value: number) {
    this._isAppStat4Exceed = value;
  }
  public resetIsAppStat4Exceed() {
    this._isAppStat4Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat4ExceedInput() {
    return this._isAppStat4Exceed;
  }

  // is_app_stat5_exceed - computed: false, optional: true, required: false
  private _isAppStat5Exceed?: number; 
  public get isAppStat5Exceed() {
    return this.getNumberAttribute('is_app_stat5_exceed');
  }
  public set isAppStat5Exceed(value: number) {
    this._isAppStat5Exceed = value;
  }
  public resetIsAppStat5Exceed() {
    this._isAppStat5Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat5ExceedInput() {
    return this._isAppStat5Exceed;
  }

  // is_app_stat6_exceed - computed: false, optional: true, required: false
  private _isAppStat6Exceed?: number; 
  public get isAppStat6Exceed() {
    return this.getNumberAttribute('is_app_stat6_exceed');
  }
  public set isAppStat6Exceed(value: number) {
    this._isAppStat6Exceed = value;
  }
  public resetIsAppStat6Exceed() {
    this._isAppStat6Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat6ExceedInput() {
    return this._isAppStat6Exceed;
  }

  // is_app_stat7_exceed - computed: false, optional: true, required: false
  private _isAppStat7Exceed?: number; 
  public get isAppStat7Exceed() {
    return this.getNumberAttribute('is_app_stat7_exceed');
  }
  public set isAppStat7Exceed(value: number) {
    this._isAppStat7Exceed = value;
  }
  public resetIsAppStat7Exceed() {
    this._isAppStat7Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat7ExceedInput() {
    return this._isAppStat7Exceed;
  }

  // is_app_stat8_exceed - computed: false, optional: true, required: false
  private _isAppStat8Exceed?: number; 
  public get isAppStat8Exceed() {
    return this.getNumberAttribute('is_app_stat8_exceed');
  }
  public set isAppStat8Exceed(value: number) {
    this._isAppStat8Exceed = value;
  }
  public resetIsAppStat8Exceed() {
    this._isAppStat8Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat8ExceedInput() {
    return this._isAppStat8Exceed;
  }

  // is_auth_passed - computed: false, optional: true, required: false
  private _isAuthPassed?: string; 
  public get isAuthPassed() {
    return this.getStringAttribute('is_auth_passed');
  }
  public set isAuthPassed(value: string) {
    this._isAuthPassed = value;
  }
  public resetIsAuthPassed() {
    this._isAuthPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthPassedInput() {
    return this._isAuthPassed;
  }

  // is_connection_rate_exceed - computed: false, optional: true, required: false
  private _isConnectionRateExceed?: number; 
  public get isConnectionRateExceed() {
    return this.getNumberAttribute('is_connection_rate_exceed');
  }
  public set isConnectionRateExceed(value: number) {
    this._isConnectionRateExceed = value;
  }
  public resetIsConnectionRateExceed() {
    this._isConnectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionRateExceedInput() {
    return this._isConnectionRateExceed;
  }

  // is_connections_exceed - computed: false, optional: true, required: false
  private _isConnectionsExceed?: number; 
  public get isConnectionsExceed() {
    return this.getNumberAttribute('is_connections_exceed');
  }
  public set isConnectionsExceed(value: number) {
    this._isConnectionsExceed = value;
  }
  public resetIsConnectionsExceed() {
    this._isConnectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionsExceedInput() {
    return this._isConnectionsExceed;
  }

  // is_frag_packet_rate_exceed - computed: false, optional: true, required: false
  private _isFragPacketRateExceed?: number; 
  public get isFragPacketRateExceed() {
    return this.getNumberAttribute('is_frag_packet_rate_exceed');
  }
  public set isFragPacketRateExceed(value: number) {
    this._isFragPacketRateExceed = value;
  }
  public resetIsFragPacketRateExceed() {
    this._isFragPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFragPacketRateExceedInput() {
    return this._isFragPacketRateExceed;
  }

  // is_kbit_rate_exceed - computed: false, optional: true, required: false
  private _isKbitRateExceed?: number; 
  public get isKbitRateExceed() {
    return this.getNumberAttribute('is_kbit_rate_exceed');
  }
  public set isKbitRateExceed(value: number) {
    this._isKbitRateExceed = value;
  }
  public resetIsKbitRateExceed() {
    this._isKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKbitRateExceedInput() {
    return this._isKbitRateExceed;
  }

  // is_packet_rate_exceed - computed: false, optional: true, required: false
  private _isPacketRateExceed?: number; 
  public get isPacketRateExceed() {
    return this.getNumberAttribute('is_packet_rate_exceed');
  }
  public set isPacketRateExceed(value: number) {
    this._isPacketRateExceed = value;
  }
  public resetIsPacketRateExceed() {
    this._isPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPacketRateExceedInput() {
    return this._isPacketRateExceed;
  }

  // kbit_rate_limit - computed: false, optional: true, required: false
  private _kbitRateLimit?: string; 
  public get kbitRateLimit() {
    return this.getStringAttribute('kbit_rate_limit');
  }
  public set kbitRateLimit(value: string) {
    this._kbitRateLimit = value;
  }
  public resetKbitRateLimit() {
    this._kbitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateLimitInput() {
    return this._kbitRateLimit;
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

  // lockup_time - computed: false, optional: true, required: false
  private _lockupTime?: number; 
  public get lockupTime() {
    return this.getNumberAttribute('lockup_time');
  }
  public set lockupTime(value: number) {
    this._lockupTime = value;
  }
  public resetLockupTime() {
    this._lockupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupTimeInput() {
    return this._lockupTime;
  }

  // packet_rate_limit - computed: false, optional: true, required: false
  private _packetRateLimit?: string; 
  public get packetRateLimit() {
    return this.getStringAttribute('packet_rate_limit');
  }
  public set packetRateLimit(value: string) {
    this._packetRateLimit = value;
  }
  public resetPacketRateLimit() {
    this._packetRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateLimitInput() {
    return this._packetRateLimit;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: number; 
  public get sflowSourceId() {
    return this.getNumberAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: number) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }
}

export class DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStructOutputReference {
    return new DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOperSrcPortRangeListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#entry_displayed_count DataThunderDdosDstZoneOper#entry_displayed_count}
  */
  readonly entryDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#hw_blacklisted DataThunderDdosDstZoneOper#hw_blacklisted}
  */
  readonly hwBlacklisted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#ipv6 DataThunderDdosDstZoneOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#reporting_status DataThunderDdosDstZoneOper#reporting_status}
  */
  readonly reportingStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#service_displayed_count DataThunderDdosDstZoneOper#service_displayed_count}
  */
  readonly serviceDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sources DataThunderDdosDstZoneOper#sources}
  */
  readonly sources?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#sources_all_entries DataThunderDdosDstZoneOper#sources_all_entries}
  */
  readonly sourcesAllEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#subnet_ip_addr DataThunderDdosDstZoneOper#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#subnet_ipv6_addr DataThunderDdosDstZoneOper#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * ddos_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#ddos_entry_list DataThunderDdosDstZoneOper#ddos_entry_list}
  */
  readonly ddosEntryList?: DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOperSrcPortRangeListOperToTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListOperOutputReference | DataThunderDdosDstZoneOperSrcPortRangeListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_displayed_count: cdktf.numberToTerraform(struct!.entryDisplayedCount),
    hw_blacklisted: cdktf.numberToTerraform(struct!.hwBlacklisted),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    reporting_status: cdktf.numberToTerraform(struct!.reportingStatus),
    service_displayed_count: cdktf.numberToTerraform(struct!.serviceDisplayedCount),
    sources: cdktf.numberToTerraform(struct!.sources),
    sources_all_entries: cdktf.numberToTerraform(struct!.sourcesAllEntries),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    ddos_entry_list: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStructToTerraform, true)(struct!.ddosEntryList),
  }
}


export function dataThunderDdosDstZoneOperSrcPortRangeListOperToHclTerraform(struct?: DataThunderDdosDstZoneOperSrcPortRangeListOperOutputReference | DataThunderDdosDstZoneOperSrcPortRangeListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.entryDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_blacklisted: {
      value: cdktf.numberToHclTerraform(struct!.hwBlacklisted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reporting_status: {
      value: cdktf.numberToHclTerraform(struct!.reportingStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.serviceDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    ddos_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStructToHclTerraform, true)(struct!.ddosEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOperSrcPortRangeListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOperSrcPortRangeListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDisplayedCount = this._entryDisplayedCount;
    }
    if (this._hwBlacklisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwBlacklisted = this._hwBlacklisted;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._reportingStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingStatus = this._reportingStatus;
    }
    if (this._serviceDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDisplayedCount = this._serviceDisplayedCount;
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
    if (this._ddosEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryList = this._ddosEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOperSrcPortRangeListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryDisplayedCount = undefined;
      this._hwBlacklisted = undefined;
      this._ipv6 = undefined;
      this._reportingStatus = undefined;
      this._serviceDisplayedCount = undefined;
      this._sources = undefined;
      this._sourcesAllEntries = undefined;
      this._subnetIpAddr = undefined;
      this._subnetIpv6Addr = undefined;
      this._ddosEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryDisplayedCount = value.entryDisplayedCount;
      this._hwBlacklisted = value.hwBlacklisted;
      this._ipv6 = value.ipv6;
      this._reportingStatus = value.reportingStatus;
      this._serviceDisplayedCount = value.serviceDisplayedCount;
      this._sources = value.sources;
      this._sourcesAllEntries = value.sourcesAllEntries;
      this._subnetIpAddr = value.subnetIpAddr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._ddosEntryList.internalValue = value.ddosEntryList;
    }
  }

  // entry_displayed_count - computed: false, optional: true, required: false
  private _entryDisplayedCount?: number; 
  public get entryDisplayedCount() {
    return this.getNumberAttribute('entry_displayed_count');
  }
  public set entryDisplayedCount(value: number) {
    this._entryDisplayedCount = value;
  }
  public resetEntryDisplayedCount() {
    this._entryDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDisplayedCountInput() {
    return this._entryDisplayedCount;
  }

  // hw_blacklisted - computed: false, optional: true, required: false
  private _hwBlacklisted?: number; 
  public get hwBlacklisted() {
    return this.getNumberAttribute('hw_blacklisted');
  }
  public set hwBlacklisted(value: number) {
    this._hwBlacklisted = value;
  }
  public resetHwBlacklisted() {
    this._hwBlacklisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistedInput() {
    return this._hwBlacklisted;
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

  // reporting_status - computed: false, optional: true, required: false
  private _reportingStatus?: number; 
  public get reportingStatus() {
    return this.getNumberAttribute('reporting_status');
  }
  public set reportingStatus(value: number) {
    this._reportingStatus = value;
  }
  public resetReportingStatus() {
    this._reportingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingStatusInput() {
    return this._reportingStatus;
  }

  // service_displayed_count - computed: false, optional: true, required: false
  private _serviceDisplayedCount?: number; 
  public get serviceDisplayedCount() {
    return this.getNumberAttribute('service_displayed_count');
  }
  public set serviceDisplayedCount(value: number) {
    this._serviceDisplayedCount = value;
  }
  public resetServiceDisplayedCount() {
    this._serviceDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDisplayedCountInput() {
    return this._serviceDisplayedCount;
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

  // ddos_entry_list - computed: false, optional: true, required: false
  private _ddosEntryList = new DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStructList(this, "ddos_entry_list", false);
  public get ddosEntryList() {
    return this._ddosEntryList;
  }
  public putDdosEntryList(value: DataThunderDdosDstZoneOperSrcPortRangeListOperDdosEntryListStruct[] | cdktf.IResolvable) {
    this._ddosEntryList.internalValue = value;
  }
  public resetDdosEntryList() {
    this._ddosEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryListInput() {
    return this._ddosEntryList.internalValue;
  }
}
export interface DataThunderDdosDstZoneOperSrcPortRangeListPortIndOperIndicatorsIndicatorCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#level DataThunderDdosDstZoneOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#source_threshold DataThunderDdosDstZoneOper#source_threshold}
  */
  readonly sourceThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#zone_threshold DataThunderDdosDstZoneOper#zone_threshold}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_index DataThunderDdosDstZoneOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_name DataThunderDdosDstZoneOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#rate DataThunderDdosDstZoneOper#rate}
  */
  readonly rate?: string;
  /**
  * indicator_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_cfg DataThunderDdosDstZoneOper#indicator_cfg}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#current_level DataThunderDdosDstZoneOper#current_level}
  */
  readonly currentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#details DataThunderDdosDstZoneOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#detection_data_source DataThunderDdosDstZoneOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicators DataThunderDdosDstZoneOper#indicators}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#protocol DataThunderDdosDstZoneOper#protocol}
  */
  readonly protocol: string;
  /**
  * Src Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#src_port_range_end DataThunderDdosDstZoneOper#src_port_range_end}
  */
  readonly srcPortRangeEnd: number;
  /**
  * Src Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#src_port_range_start DataThunderDdosDstZoneOper#src_port_range_start}
  */
  readonly srcPortRangeStart: number;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperSrcPortRangeListOper;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#port_ind DataThunderDdosDstZoneOper#port_ind}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_index DataThunderDdosDstZoneOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_name DataThunderDdosDstZoneOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#max_peak DataThunderDdosDstZoneOper#max_peak}
  */
  readonly maxPeak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#psd_wdw_cnt DataThunderDdosDstZoneOper#psd_wdw_cnt}
  */
  readonly psdWdwCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#rate DataThunderDdosDstZoneOper#rate}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#address_str DataThunderDdosDstZoneOper#address_str}
  */
  readonly addressStr?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicators DataThunderDdosDstZoneOper#indicators}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#address DataThunderDdosDstZoneOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#rate DataThunderDdosDstZoneOper#rate}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_index DataThunderDdosDstZoneOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicator_name DataThunderDdosDstZoneOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#destinations DataThunderDdosDstZoneOper#destinations}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#details DataThunderDdosDstZoneOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#finished DataThunderDdosDstZoneOper#finished}
  */
  readonly finished?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#next_indicator DataThunderDdosDstZoneOper#next_indicator}
  */
  readonly nextIndicator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#top_k_key DataThunderDdosDstZoneOper#top_k_key}
  */
  readonly topKKey?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#entry_list DataThunderDdosDstZoneOper#entry_list}
  */
  readonly entryList?: DataThunderDdosDstZoneOperTopkDestinationsOperEntryListStruct[] | cdktf.IResolvable;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#indicators DataThunderDdosDstZoneOper#indicators}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
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
