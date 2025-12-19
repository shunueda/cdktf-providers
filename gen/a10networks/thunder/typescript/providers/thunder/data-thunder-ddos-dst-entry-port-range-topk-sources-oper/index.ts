// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstEntryPortRangeTopkSourcesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#dst_entry_name DataThunderDdosDstEntryPortRangeTopkSourcesOper#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#id DataThunderDdosDstEntryPortRangeTopkSourcesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortRangeEnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#port_range_end DataThunderDdosDstEntryPortRangeTopkSourcesOper#port_range_end}
  */
  readonly portRangeEnd: string;
  /**
  * PortRangeStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#port_range_start DataThunderDdosDstEntryPortRangeTopkSourcesOper#port_range_start}
  */
  readonly portRangeStart: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#protocol DataThunderDdosDstEntryPortRangeTopkSourcesOper#protocol}
  */
  readonly protocol: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#oper DataThunderDdosDstEntryPortRangeTopkSourcesOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOper;
}
export interface DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#indicator_index DataThunderDdosDstEntryPortRangeTopkSourcesOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#indicator_name DataThunderDdosDstEntryPortRangeTopkSourcesOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#max_peak DataThunderDdosDstEntryPortRangeTopkSourcesOper#max_peak}
  */
  readonly maxPeak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#psd_wdw_cnt DataThunderDdosDstEntryPortRangeTopkSourcesOper#psd_wdw_cnt}
  */
  readonly psdWdwCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#rate DataThunderDdosDstEntryPortRangeTopkSourcesOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicators | cdktf.IResolvable): any {
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


export function dataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicators | cdktf.IResolvable): any {
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

export class DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicators | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#address_str DataThunderDdosDstEntryPortRangeTopkSourcesOper#address_str}
  */
  readonly addressStr?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#indicators DataThunderDdosDstEntryPortRangeTopkSourcesOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStructToTerraform(struct?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_str: cdktf.stringToTerraform(struct!.addressStr),
    indicators: cdktf.listMapper(dataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStructToHclTerraform(struct?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStruct | cdktf.IResolvable | undefined) {
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
  private _indicators = new DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListIndicators[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStructOutputReference {
    return new DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#address DataThunderDdosDstEntryPortRangeTopkSourcesOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#rate DataThunderDdosDstEntryPortRangeTopkSourcesOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSourcesToTerraform(struct?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSourcesToHclTerraform(struct?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSources | cdktf.IResolvable): any {
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

export class DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSources | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSourcesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSources[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSourcesOutputReference {
    return new DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#indicator_index DataThunderDdosDstEntryPortRangeTopkSourcesOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#indicator_name DataThunderDdosDstEntryPortRangeTopkSourcesOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#sources DataThunderDdosDstEntryPortRangeTopkSourcesOper#sources}
  */
  readonly sources?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSources[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsToTerraform(struct?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    sources: cdktf.listMapper(dataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSourcesToTerraform, true)(struct!.sources),
  }
}


export function dataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicators | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicators | cdktf.IResolvable | undefined) {
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
  private _sources = new DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsSources[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsOutputReference {
    return new DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortRangeTopkSourcesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#details DataThunderDdosDstEntryPortRangeTopkSourcesOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#finished DataThunderDdosDstEntryPortRangeTopkSourcesOper#finished}
  */
  readonly finished?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#next_indicator DataThunderDdosDstEntryPortRangeTopkSourcesOper#next_indicator}
  */
  readonly nextIndicator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#top_k_key DataThunderDdosDstEntryPortRangeTopkSourcesOper#top_k_key}
  */
  readonly topKKey?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#entry_list DataThunderDdosDstEntryPortRangeTopkSourcesOper#entry_list}
  */
  readonly entryList?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStruct[] | cdktf.IResolvable;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#indicators DataThunderDdosDstEntryPortRangeTopkSourcesOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortRangeTopkSourcesOperOperToTerraform(struct?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperOutputReference | DataThunderDdosDstEntryPortRangeTopkSourcesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.numberToTerraform(struct!.details),
    finished: cdktf.numberToTerraform(struct!.finished),
    next_indicator: cdktf.numberToTerraform(struct!.nextIndicator),
    top_k_key: cdktf.stringToTerraform(struct!.topKKey),
    entry_list: cdktf.listMapper(dataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStructToTerraform, true)(struct!.entryList),
    indicators: cdktf.listMapper(dataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstEntryPortRangeTopkSourcesOperOperToHclTerraform(struct?: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperOutputReference | DataThunderDdosDstEntryPortRangeTopkSourcesOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStructList",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortRangeTopkSourcesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortRangeTopkSourcesOperOper | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortRangeTopkSourcesOperOper | undefined) {
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
  private _entryList = new DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperEntryListStruct[] | cdktf.IResolvable) {
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
  private _indicators = new DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstEntryPortRangeTopkSourcesOperOperIndicators[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper thunder_ddos_dst_entry_port_range_topk_sources_oper}
*/
export class DataThunderDdosDstEntryPortRangeTopkSourcesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_port_range_topk_sources_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstEntryPortRangeTopkSourcesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstEntryPortRangeTopkSourcesOper to import
  * @param importFromId The id of the existing DataThunderDdosDstEntryPortRangeTopkSourcesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstEntryPortRangeTopkSourcesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_port_range_topk_sources_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_port_range_topk_sources_oper thunder_ddos_dst_entry_port_range_topk_sources_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstEntryPortRangeTopkSourcesOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstEntryPortRangeTopkSourcesOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_port_range_topk_sources_oper',
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
    this._dstEntryName = config.dstEntryName;
    this._id = config.id;
    this._portRangeEnd = config.portRangeEnd;
    this._portRangeStart = config.portRangeStart;
    this._protocol = config.protocol;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
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

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: string; 
  public get portRangeEnd() {
    return this.getStringAttribute('port_range_end');
  }
  public set portRangeEnd(value: string) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: string; 
  public get portRangeStart() {
    return this.getStringAttribute('port_range_start');
  }
  public set portRangeStart(value: string) {
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstEntryPortRangeTopkSourcesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryPortRangeTopkSourcesOperOper) {
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
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      id: cdktf.stringToTerraform(this._id),
      port_range_end: cdktf.stringToTerraform(this._portRangeEnd),
      port_range_start: cdktf.stringToTerraform(this._portRangeStart),
      protocol: cdktf.stringToTerraform(this._protocol),
      oper: dataThunderDdosDstEntryPortRangeTopkSourcesOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_end: {
        value: cdktf.stringToHclTerraform(this._portRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_start: {
        value: cdktf.stringToHclTerraform(this._portRangeStart),
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
      oper: {
        value: dataThunderDdosDstEntryPortRangeTopkSourcesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryPortRangeTopkSourcesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
