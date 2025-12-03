// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneIpamAddressBlocksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#filters DataBloxoneIpamAddressBlocks#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#tag_filters DataBloxoneIpamAddressBlocks#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneIpamAddressBlocksResultsAsmConfig {
  /**
  * ASM shows the number of addresses forecast to be used _forecast_period_ days in the future, if it is greater than _asm_threshold_ percent * _dhcp_total_ (see _dhcp_utilization_) then the subnet is flagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#asm_threshold DataBloxoneIpamAddressBlocks#asm_threshold}
  */
  readonly asmThreshold?: number;
  /**
  * Indicates if Automated Scope Management is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#enable DataBloxoneIpamAddressBlocks#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Indicates if ASM should send notifications to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#enable_notification DataBloxoneIpamAddressBlocks#enable_notification}
  */
  readonly enableNotification?: boolean | cdktf.IResolvable;
  /**
  * The forecast period in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#forecast_period DataBloxoneIpamAddressBlocks#forecast_period}
  */
  readonly forecastPeriod?: number;
  /**
  * Indicates the growth in the number or percentage of IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#growth_factor DataBloxoneIpamAddressBlocks#growth_factor}
  */
  readonly growthFactor?: number;
  /**
  * The type of factor to use: _percent_ or _count_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#growth_type DataBloxoneIpamAddressBlocks#growth_type}
  */
  readonly growthType?: string;
  /**
  * The minimum amount of history needed before ASM can run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#history DataBloxoneIpamAddressBlocks#history}
  */
  readonly history?: number;
  /**
  * The minimum size of range needed for ASM to run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#min_total DataBloxoneIpamAddressBlocks#min_total}
  */
  readonly minTotal?: number;
  /**
  * The minimum percentage of addresses that must be available outside of the DHCP ranges and fixed addresses when making a suggested change..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#min_unused DataBloxoneIpamAddressBlocks#min_unused}
  */
  readonly minUnused?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#reenable_date DataBloxoneIpamAddressBlocks#reenable_date}
  */
  readonly reenableDate?: string;
}

export function dataBloxoneIpamAddressBlocksResultsAsmConfigToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsAsmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asm_threshold: cdktf.numberToTerraform(struct!.asmThreshold),
    enable: cdktf.booleanToTerraform(struct!.enable),
    enable_notification: cdktf.booleanToTerraform(struct!.enableNotification),
    forecast_period: cdktf.numberToTerraform(struct!.forecastPeriod),
    growth_factor: cdktf.numberToTerraform(struct!.growthFactor),
    growth_type: cdktf.stringToTerraform(struct!.growthType),
    history: cdktf.numberToTerraform(struct!.history),
    min_total: cdktf.numberToTerraform(struct!.minTotal),
    min_unused: cdktf.numberToTerraform(struct!.minUnused),
    reenable_date: cdktf.stringToTerraform(struct!.reenableDate),
  }
}


export function dataBloxoneIpamAddressBlocksResultsAsmConfigToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsAsmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asm_threshold: {
      value: cdktf.numberToHclTerraform(struct!.asmThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_notification: {
      value: cdktf.booleanToHclTerraform(struct!.enableNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forecast_period: {
      value: cdktf.numberToHclTerraform(struct!.forecastPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    growth_factor: {
      value: cdktf.numberToHclTerraform(struct!.growthFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    growth_type: {
      value: cdktf.stringToHclTerraform(struct!.growthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    history: {
      value: cdktf.numberToHclTerraform(struct!.history),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_total: {
      value: cdktf.numberToHclTerraform(struct!.minTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_unused: {
      value: cdktf.numberToHclTerraform(struct!.minUnused),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reenable_date: {
      value: cdktf.stringToHclTerraform(struct!.reenableDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsAsmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsAsmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asmThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmThreshold = this._asmThreshold;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enableNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNotification = this._enableNotification;
    }
    if (this._forecastPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastPeriod = this._forecastPeriod;
    }
    if (this._growthFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.growthFactor = this._growthFactor;
    }
    if (this._growthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.growthType = this._growthType;
    }
    if (this._history !== undefined) {
      hasAnyValues = true;
      internalValueResult.history = this._history;
    }
    if (this._minTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTotal = this._minTotal;
    }
    if (this._minUnused !== undefined) {
      hasAnyValues = true;
      internalValueResult.minUnused = this._minUnused;
    }
    if (this._reenableDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.reenableDate = this._reenableDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsAsmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asmThreshold = undefined;
      this._enable = undefined;
      this._enableNotification = undefined;
      this._forecastPeriod = undefined;
      this._growthFactor = undefined;
      this._growthType = undefined;
      this._history = undefined;
      this._minTotal = undefined;
      this._minUnused = undefined;
      this._reenableDate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asmThreshold = value.asmThreshold;
      this._enable = value.enable;
      this._enableNotification = value.enableNotification;
      this._forecastPeriod = value.forecastPeriod;
      this._growthFactor = value.growthFactor;
      this._growthType = value.growthType;
      this._history = value.history;
      this._minTotal = value.minTotal;
      this._minUnused = value.minUnused;
      this._reenableDate = value.reenableDate;
    }
  }

  // asm_threshold - computed: true, optional: true, required: false
  private _asmThreshold?: number; 
  public get asmThreshold() {
    return this.getNumberAttribute('asm_threshold');
  }
  public set asmThreshold(value: number) {
    this._asmThreshold = value;
  }
  public resetAsmThreshold() {
    this._asmThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmThresholdInput() {
    return this._asmThreshold;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_notification - computed: true, optional: true, required: false
  private _enableNotification?: boolean | cdktf.IResolvable; 
  public get enableNotification() {
    return this.getBooleanAttribute('enable_notification');
  }
  public set enableNotification(value: boolean | cdktf.IResolvable) {
    this._enableNotification = value;
  }
  public resetEnableNotification() {
    this._enableNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNotificationInput() {
    return this._enableNotification;
  }

  // forecast_period - computed: true, optional: true, required: false
  private _forecastPeriod?: number; 
  public get forecastPeriod() {
    return this.getNumberAttribute('forecast_period');
  }
  public set forecastPeriod(value: number) {
    this._forecastPeriod = value;
  }
  public resetForecastPeriod() {
    this._forecastPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastPeriodInput() {
    return this._forecastPeriod;
  }

  // growth_factor - computed: true, optional: true, required: false
  private _growthFactor?: number; 
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }
  public set growthFactor(value: number) {
    this._growthFactor = value;
  }
  public resetGrowthFactor() {
    this._growthFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthFactorInput() {
    return this._growthFactor;
  }

  // growth_type - computed: true, optional: true, required: false
  private _growthType?: string; 
  public get growthType() {
    return this.getStringAttribute('growth_type');
  }
  public set growthType(value: string) {
    this._growthType = value;
  }
  public resetGrowthType() {
    this._growthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthTypeInput() {
    return this._growthType;
  }

  // history - computed: true, optional: true, required: false
  private _history?: number; 
  public get history() {
    return this.getNumberAttribute('history');
  }
  public set history(value: number) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
  }

  // min_total - computed: true, optional: true, required: false
  private _minTotal?: number; 
  public get minTotal() {
    return this.getNumberAttribute('min_total');
  }
  public set minTotal(value: number) {
    this._minTotal = value;
  }
  public resetMinTotal() {
    this._minTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTotalInput() {
    return this._minTotal;
  }

  // min_unused - computed: true, optional: true, required: false
  private _minUnused?: number; 
  public get minUnused() {
    return this.getNumberAttribute('min_unused');
  }
  public set minUnused(value: number) {
    this._minUnused = value;
  }
  public resetMinUnused() {
    this._minUnused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUnusedInput() {
    return this._minUnused;
  }

  // reenable_date - computed: true, optional: true, required: false
  private _reenableDate?: string; 
  public get reenableDate() {
    return this.getStringAttribute('reenable_date');
  }
  public set reenableDate(value: string) {
    this._reenableDate = value;
  }
  public resetReenableDate() {
    this._reenableDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reenableDateInput() {
    return this._reenableDate;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStruct {
  /**
  * Type of ignore matching: client to ignore by client identifier (client hex or client text) or hardware to ignore by hardware identifier (MAC address). It can have one of the following values:
  *   * _client_hex_
  *   * _client_text_
  *   * _hardware_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#type DataBloxoneIpamAddressBlocks#type}
  */
  readonly type: string;
  /**
  * Value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#value DataBloxoneIpamAddressBlocks#value}
  */
  readonly value: string;
}

export function dataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStructToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStructToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStructList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStructOutputReference {
    return new DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneIpamAddressBlocksResultsDhcpConfig {
  /**
  * Disable to allow leases only for known IPv4 clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#allow_unknown DataBloxoneIpamAddressBlocks#allow_unknown}
  */
  readonly allowUnknown?: boolean | cdktf.IResolvable;
  /**
  * Disable to allow leases only for known IPV6 clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#allow_unknown_v6 DataBloxoneIpamAddressBlocks#allow_unknown_v6}
  */
  readonly allowUnknownV6?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#filters DataBloxoneIpamAddressBlocks#filters}
  */
  readonly filters?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#filters_large_selection DataBloxoneIpamAddressBlocks#filters_large_selection}
  */
  readonly filtersLargeSelection?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#filters_v6 DataBloxoneIpamAddressBlocks#filters_v6}
  */
  readonly filtersV6?: string[];
  /**
  * Enable to ignore the client UID when issuing a DHCP lease. Use this option to prevent assigning two IP addresses for a client which does not have a UID during one phase of PXE boot but acquires one for the other phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ignore_client_uid DataBloxoneIpamAddressBlocks#ignore_client_uid}
  */
  readonly ignoreClientUid?: boolean | cdktf.IResolvable;
  /**
  * The list of clients to ignore requests from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ignore_list DataBloxoneIpamAddressBlocks#ignore_list}
  */
  readonly ignoreList?: DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStruct[] | cdktf.IResolvable;
  /**
  * The lease duration in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#lease_time DataBloxoneIpamAddressBlocks#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * The lease duration in seconds for IPV6 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#lease_time_v6 DataBloxoneIpamAddressBlocks#lease_time_v6}
  */
  readonly leaseTimeV6?: number;
}

export function dataBloxoneIpamAddressBlocksResultsDhcpConfigToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_unknown: cdktf.booleanToTerraform(struct!.allowUnknown),
    allow_unknown_v6: cdktf.booleanToTerraform(struct!.allowUnknownV6),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    filters_large_selection: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersLargeSelection),
    filters_v6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersV6),
    ignore_client_uid: cdktf.booleanToTerraform(struct!.ignoreClientUid),
    ignore_list: cdktf.listMapper(dataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStructToTerraform, false)(struct!.ignoreList),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    lease_time_v6: cdktf.numberToTerraform(struct!.leaseTimeV6),
  }
}


export function dataBloxoneIpamAddressBlocksResultsDhcpConfigToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_unknown: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_unknown_v6: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnknownV6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters_large_selection: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filtersLargeSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters_v6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filtersV6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_client_uid: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreClientUid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_list: {
      value: cdktf.listMapperHcl(dataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStructToHclTerraform, false)(struct!.ignoreList),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStructList",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time_v6: {
      value: cdktf.numberToHclTerraform(struct!.leaseTimeV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsDhcpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown;
    }
    if (this._allowUnknownV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknownV6 = this._allowUnknownV6;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._filtersLargeSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersLargeSelection = this._filtersLargeSelection;
    }
    if (this._filtersV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersV6 = this._filtersV6;
    }
    if (this._ignoreClientUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientUid = this._ignoreClientUid;
    }
    if (this._ignoreList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreList = this._ignoreList?.internalValue;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._leaseTimeV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeV6 = this._leaseTimeV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsDhcpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowUnknown = undefined;
      this._allowUnknownV6 = undefined;
      this._filters = undefined;
      this._filtersLargeSelection = undefined;
      this._filtersV6 = undefined;
      this._ignoreClientUid = undefined;
      this._ignoreList.internalValue = undefined;
      this._leaseTime = undefined;
      this._leaseTimeV6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowUnknown = value.allowUnknown;
      this._allowUnknownV6 = value.allowUnknownV6;
      this._filters = value.filters;
      this._filtersLargeSelection = value.filtersLargeSelection;
      this._filtersV6 = value.filtersV6;
      this._ignoreClientUid = value.ignoreClientUid;
      this._ignoreList.internalValue = value.ignoreList;
      this._leaseTime = value.leaseTime;
      this._leaseTimeV6 = value.leaseTimeV6;
    }
  }

  // abandoned_reclaim_time - computed: true, optional: false, required: false
  public get abandonedReclaimTime() {
    return this.getNumberAttribute('abandoned_reclaim_time');
  }

  // abandoned_reclaim_time_v6 - computed: true, optional: false, required: false
  public get abandonedReclaimTimeV6() {
    return this.getNumberAttribute('abandoned_reclaim_time_v6');
  }

  // allow_unknown - computed: true, optional: true, required: false
  private _allowUnknown?: boolean | cdktf.IResolvable; 
  public get allowUnknown() {
    return this.getBooleanAttribute('allow_unknown');
  }
  public set allowUnknown(value: boolean | cdktf.IResolvable) {
    this._allowUnknown = value;
  }
  public resetAllowUnknown() {
    this._allowUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownInput() {
    return this._allowUnknown;
  }

  // allow_unknown_v6 - computed: true, optional: true, required: false
  private _allowUnknownV6?: boolean | cdktf.IResolvable; 
  public get allowUnknownV6() {
    return this.getBooleanAttribute('allow_unknown_v6');
  }
  public set allowUnknownV6(value: boolean | cdktf.IResolvable) {
    this._allowUnknownV6 = value;
  }
  public resetAllowUnknownV6() {
    this._allowUnknownV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownV6Input() {
    return this._allowUnknownV6;
  }

  // echo_client_id - computed: true, optional: false, required: false
  public get echoClientId() {
    return this.getBooleanAttribute('echo_client_id');
  }

  // filters - computed: true, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // filters_large_selection - computed: true, optional: true, required: false
  private _filtersLargeSelection?: string[]; 
  public get filtersLargeSelection() {
    return this.getListAttribute('filters_large_selection');
  }
  public set filtersLargeSelection(value: string[]) {
    this._filtersLargeSelection = value;
  }
  public resetFiltersLargeSelection() {
    this._filtersLargeSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersLargeSelectionInput() {
    return this._filtersLargeSelection;
  }

  // filters_v6 - computed: true, optional: true, required: false
  private _filtersV6?: string[]; 
  public get filtersV6() {
    return this.getListAttribute('filters_v6');
  }
  public set filtersV6(value: string[]) {
    this._filtersV6 = value;
  }
  public resetFiltersV6() {
    this._filtersV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersV6Input() {
    return this._filtersV6;
  }

  // ignore_client_uid - computed: true, optional: true, required: false
  private _ignoreClientUid?: boolean | cdktf.IResolvable; 
  public get ignoreClientUid() {
    return this.getBooleanAttribute('ignore_client_uid');
  }
  public set ignoreClientUid(value: boolean | cdktf.IResolvable) {
    this._ignoreClientUid = value;
  }
  public resetIgnoreClientUid() {
    this._ignoreClientUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientUidInput() {
    return this._ignoreClientUid;
  }

  // ignore_list - computed: true, optional: true, required: false
  private _ignoreList = new DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStructList(this, "ignore_list", false);
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: DataBloxoneIpamAddressBlocksResultsDhcpConfigIgnoreListStruct[] | cdktf.IResolvable) {
    this._ignoreList.internalValue = value;
  }
  public resetIgnoreList() {
    this._ignoreList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreListInput() {
    return this._ignoreList.internalValue;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // lease_time_v6 - computed: true, optional: true, required: false
  private _leaseTimeV6?: number; 
  public get leaseTimeV6() {
    return this.getNumberAttribute('lease_time_v6');
  }
  public set leaseTimeV6(value: number) {
    this._leaseTimeV6 = value;
  }
  public resetLeaseTimeV6() {
    this._leaseTimeV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeV6Input() {
    return this._leaseTimeV6;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsDhcpOptions {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#group DataBloxoneIpamAddressBlocks#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#option_code DataBloxoneIpamAddressBlocks#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#option_value DataBloxoneIpamAddressBlocks#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item. Valid values are:
  *   * _group_
  *   * _option_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#type DataBloxoneIpamAddressBlocks#type}
  */
  readonly type?: string;
}

export function dataBloxoneIpamAddressBlocksResultsDhcpOptionsToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    option_code: cdktf.stringToTerraform(struct!.optionCode),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBloxoneIpamAddressBlocksResultsDhcpOptionsToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_code: {
      value: cdktf.stringToHclTerraform(struct!.optionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._optionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCode = this._optionCode;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._optionCode = undefined;
      this._optionValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._optionCode = value.optionCode;
      this._optionValue = value.optionValue;
      this._type = value.type;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // option_code - computed: true, optional: true, required: false
  private _optionCode?: string; 
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }
  public set optionCode(value: string) {
    this._optionCode = value;
  }
  public resetOptionCode() {
    this._optionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeInput() {
    return this._optionCode;
  }

  // option_value - computed: true, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataBloxoneIpamAddressBlocksResultsDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamAddressBlocksResultsDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamAddressBlocksResultsDhcpOptionsOutputReference {
    return new DataBloxoneIpamAddressBlocksResultsDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneIpamAddressBlocksResultsDhcpUtilization {
}

export function dataBloxoneIpamAddressBlocksResultsDhcpUtilizationToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsDhcpUtilization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressBlocksResultsDhcpUtilizationToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsDhcpUtilization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressBlocksResultsDhcpUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsDhcpUtilization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsDhcpUtilization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // dhcp_free - computed: true, optional: false, required: false
  public get dhcpFree() {
    return this.getStringAttribute('dhcp_free');
  }

  // dhcp_total - computed: true, optional: false, required: false
  public get dhcpTotal() {
    return this.getStringAttribute('dhcp_total');
  }

  // dhcp_used - computed: true, optional: false, required: false
  public get dhcpUsed() {
    return this.getStringAttribute('dhcp_used');
  }

  // dhcp_utilization - computed: true, optional: false, required: false
  public get dhcpUtilization() {
    return this.getNumberAttribute('dhcp_utilization');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockValue {
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockValueToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockValueToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // enable_notification - computed: true, optional: false, required: false
  public get enableNotification() {
    return this.getBooleanAttribute('enable_notification');
  }

  // reenable_date - computed: true, optional: false, required: false
  public get reenableDate() {
    return this.getStringAttribute('reenable_date');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockValue {
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // growth_factor - computed: true, optional: false, required: false
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }

  // growth_type - computed: true, optional: false, required: false
  public get growthType() {
    return this.getStringAttribute('growth_type');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThreshold {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThresholdToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThresholdToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriod {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriodToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriodToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistory {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistoryToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistoryToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotal {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotalToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotalToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnused {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnusedToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnusedToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnusedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnused | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfig {
  /**
  * The block of ASM fields: _enable_, _enable_notification_, _reenable_date_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#asm_enable_block DataBloxoneIpamAddressBlocks#asm_enable_block}
  */
  readonly asmEnableBlock?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlock;
  /**
  * The block of ASM fields: _growth_factor_, _growth_type_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#asm_growth_block DataBloxoneIpamAddressBlocks#asm_growth_block}
  */
  readonly asmGrowthBlock?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlock;
  /**
  * ASM shows the number of addresses forecast to be used _forecast_period_ days in the future, if it is greater than _asm_threshold_percent_ * _dhcp_total_ (see _dhcp_utilization_) then the subnet is flagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#asm_threshold DataBloxoneIpamAddressBlocks#asm_threshold}
  */
  readonly asmThreshold?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThreshold;
  /**
  * The forecast period in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#forecast_period DataBloxoneIpamAddressBlocks#forecast_period}
  */
  readonly forecastPeriod?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriod;
  /**
  * The minimum amount of history needed before ASM can run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#history DataBloxoneIpamAddressBlocks#history}
  */
  readonly history?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistory;
  /**
  * The minimum size of range needed for ASM to run on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#min_total DataBloxoneIpamAddressBlocks#min_total}
  */
  readonly minTotal?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotal;
  /**
  * The minimum percentage of addresses that must be available outside of the DHCP ranges and fixed addresses when making a suggested change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#min_unused DataBloxoneIpamAddressBlocks#min_unused}
  */
  readonly minUnused?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnused;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asm_enable_block: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockToTerraform(struct!.asmEnableBlock),
    asm_growth_block: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockToTerraform(struct!.asmGrowthBlock),
    asm_threshold: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThresholdToTerraform(struct!.asmThreshold),
    forecast_period: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriodToTerraform(struct!.forecastPeriod),
    history: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistoryToTerraform(struct!.history),
    min_total: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotalToTerraform(struct!.minTotal),
    min_unused: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnusedToTerraform(struct!.minUnused),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asm_enable_block: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockToHclTerraform(struct!.asmEnableBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlock",
    },
    asm_growth_block: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockToHclTerraform(struct!.asmGrowthBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlock",
    },
    asm_threshold: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThresholdToHclTerraform(struct!.asmThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThreshold",
    },
    forecast_period: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriodToHclTerraform(struct!.forecastPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriod",
    },
    history: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistoryToHclTerraform(struct!.history),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistory",
    },
    min_total: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotalToHclTerraform(struct!.minTotal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotal",
    },
    min_unused: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnusedToHclTerraform(struct!.minUnused),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnused",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asmEnableBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmEnableBlock = this._asmEnableBlock?.internalValue;
    }
    if (this._asmGrowthBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmGrowthBlock = this._asmGrowthBlock?.internalValue;
    }
    if (this._asmThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmThreshold = this._asmThreshold?.internalValue;
    }
    if (this._forecastPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastPeriod = this._forecastPeriod?.internalValue;
    }
    if (this._history?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.history = this._history?.internalValue;
    }
    if (this._minTotal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTotal = this._minTotal?.internalValue;
    }
    if (this._minUnused?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minUnused = this._minUnused?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asmEnableBlock.internalValue = undefined;
      this._asmGrowthBlock.internalValue = undefined;
      this._asmThreshold.internalValue = undefined;
      this._forecastPeriod.internalValue = undefined;
      this._history.internalValue = undefined;
      this._minTotal.internalValue = undefined;
      this._minUnused.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asmEnableBlock.internalValue = value.asmEnableBlock;
      this._asmGrowthBlock.internalValue = value.asmGrowthBlock;
      this._asmThreshold.internalValue = value.asmThreshold;
      this._forecastPeriod.internalValue = value.forecastPeriod;
      this._history.internalValue = value.history;
      this._minTotal.internalValue = value.minTotal;
      this._minUnused.internalValue = value.minUnused;
    }
  }

  // asm_enable_block - computed: true, optional: true, required: false
  private _asmEnableBlock = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlockOutputReference(this, "asm_enable_block");
  public get asmEnableBlock() {
    return this._asmEnableBlock;
  }
  public putAsmEnableBlock(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmEnableBlock) {
    this._asmEnableBlock.internalValue = value;
  }
  public resetAsmEnableBlock() {
    this._asmEnableBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmEnableBlockInput() {
    return this._asmEnableBlock.internalValue;
  }

  // asm_growth_block - computed: true, optional: true, required: false
  private _asmGrowthBlock = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference(this, "asm_growth_block");
  public get asmGrowthBlock() {
    return this._asmGrowthBlock;
  }
  public putAsmGrowthBlock(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmGrowthBlock) {
    this._asmGrowthBlock.internalValue = value;
  }
  public resetAsmGrowthBlock() {
    this._asmGrowthBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmGrowthBlockInput() {
    return this._asmGrowthBlock.internalValue;
  }

  // asm_threshold - computed: true, optional: true, required: false
  private _asmThreshold = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThresholdOutputReference(this, "asm_threshold");
  public get asmThreshold() {
    return this._asmThreshold;
  }
  public putAsmThreshold(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigAsmThreshold) {
    this._asmThreshold.internalValue = value;
  }
  public resetAsmThreshold() {
    this._asmThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmThresholdInput() {
    return this._asmThreshold.internalValue;
  }

  // forecast_period - computed: true, optional: true, required: false
  private _forecastPeriod = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriodOutputReference(this, "forecast_period");
  public get forecastPeriod() {
    return this._forecastPeriod;
  }
  public putForecastPeriod(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigForecastPeriod) {
    this._forecastPeriod.internalValue = value;
  }
  public resetForecastPeriod() {
    this._forecastPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastPeriodInput() {
    return this._forecastPeriod.internalValue;
  }

  // history - computed: true, optional: true, required: false
  private _history = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistoryOutputReference(this, "history");
  public get history() {
    return this._history;
  }
  public putHistory(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigHistory) {
    this._history.internalValue = value;
  }
  public resetHistory() {
    this._history.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history.internalValue;
  }

  // min_total - computed: true, optional: true, required: false
  private _minTotal = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotalOutputReference(this, "min_total");
  public get minTotal() {
    return this._minTotal;
  }
  public putMinTotal(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinTotal) {
    this._minTotal.internalValue = value;
  }
  public resetMinTotal() {
    this._minTotal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTotalInput() {
    return this._minTotal.internalValue;
  }

  // min_unused - computed: true, optional: true, required: false
  private _minUnused = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnusedOutputReference(this, "min_unused");
  public get minUnused() {
    return this._minUnused;
  }
  public putMinUnused(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigMinUnused) {
    this._minUnused.internalValue = value;
  }
  public resetMinUnused() {
    this._minUnused.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUnusedInput() {
    return this._minUnused.internalValue;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdate {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdateToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdateToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionMode {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionModeToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionModeToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabledToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabledToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockValue {
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockValueToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockValueToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ddns_generate_name - computed: true, optional: false, required: false
  public get ddnsGenerateName() {
    return this.getBooleanAttribute('ddns_generate_name');
  }

  // ddns_generated_prefix - computed: true, optional: false, required: false
  public get ddnsGeneratedPrefix() {
    return this.getStringAttribute('ddns_generated_prefix');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercent {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercentToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercentToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockValue {
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockValueToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockValueToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ddns_domain - computed: true, optional: false, required: false
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }

  // ddns_send_updates - computed: true, optional: false, required: false
  public get ddnsSendUpdates() {
    return this.getBooleanAttribute('ddns_send_updates');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenew {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolution {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknown {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6ToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6ToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientId {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientIdToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientIdToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFilters {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6 {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6ToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6ToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUid {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUidToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUidToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValue {
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValueToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValueToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValueOutputReference {
    return new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStruct {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6ToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6ToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfig {
  /**
  * The inheritance configuration for _abandoned_reclaim_time_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#abandoned_reclaim_time DataBloxoneIpamAddressBlocks#abandoned_reclaim_time}
  */
  readonly abandonedReclaimTime?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime;
  /**
  * The inheritance configuration for _abandoned_reclaim_time_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#abandoned_reclaim_time_v6 DataBloxoneIpamAddressBlocks#abandoned_reclaim_time_v6}
  */
  readonly abandonedReclaimTimeV6?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6;
  /**
  * The inheritance configuration for _allow_unknown_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#allow_unknown DataBloxoneIpamAddressBlocks#allow_unknown}
  */
  readonly allowUnknown?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknown;
  /**
  * The inheritance configuration for _allow_unknown_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#allow_unknown_v6 DataBloxoneIpamAddressBlocks#allow_unknown_v6}
  */
  readonly allowUnknownV6?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6;
  /**
  * The inheritance configuration for authoritative_dhcp field to set DHCP server as authoritative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#authoritative_dhcp DataBloxoneIpamAddressBlocks#authoritative_dhcp}
  */
  readonly authoritativeDhcp?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp;
  /**
  * The inheritance configuration for _echo_client_id_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#echo_client_id DataBloxoneIpamAddressBlocks#echo_client_id}
  */
  readonly echoClientId?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientId;
  /**
  * The inheritance configuration for filters field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#filters DataBloxoneIpamAddressBlocks#filters}
  */
  readonly filters?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFilters;
  /**
  * The inheritance configuration for _filters_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#filters_v6 DataBloxoneIpamAddressBlocks#filters_v6}
  */
  readonly filtersV6?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6;
  /**
  * The inheritance configuration for hold_reclaimed_time in seconds from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#hold_reclaimed_time DataBloxoneIpamAddressBlocks#hold_reclaimed_time}
  */
  readonly holdReclaimedTime?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTime;
  /**
  * The inheritance configuration for hold_reclaimed_time_v6 in seconds from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#hold_reclaimed_time_v6 DataBloxoneIpamAddressBlocks#hold_reclaimed_time_v6}
  */
  readonly holdReclaimedTimeV6?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6;
  /**
  * The inheritance configuration for _ignore_client_uid_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ignore_client_uid DataBloxoneIpamAddressBlocks#ignore_client_uid}
  */
  readonly ignoreClientUid?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUid;
  /**
  * The inheritance configuration for _ignore_list_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ignore_list DataBloxoneIpamAddressBlocks#ignore_list}
  */
  readonly ignoreList?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStruct;
  /**
  * The inheritance configuration for _lease_time_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#lease_time DataBloxoneIpamAddressBlocks#lease_time}
  */
  readonly leaseTime?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTime;
  /**
  * The inheritance configuration for _lease_time_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#lease_time_v6 DataBloxoneIpamAddressBlocks#lease_time_v6}
  */
  readonly leaseTimeV6?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned_reclaim_time: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeToTerraform(struct!.abandonedReclaimTime),
    abandoned_reclaim_time_v6: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToTerraform(struct!.abandonedReclaimTimeV6),
    allow_unknown: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct!.allowUnknown),
    allow_unknown_v6: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6ToTerraform(struct!.allowUnknownV6),
    authoritative_dhcp: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpToTerraform(struct!.authoritativeDhcp),
    echo_client_id: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientIdToTerraform(struct!.echoClientId),
    filters: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersToTerraform(struct!.filters),
    filters_v6: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6ToTerraform(struct!.filtersV6),
    hold_reclaimed_time: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeToTerraform(struct!.holdReclaimedTime),
    hold_reclaimed_time_v6: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToTerraform(struct!.holdReclaimedTimeV6),
    ignore_client_uid: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUidToTerraform(struct!.ignoreClientUid),
    ignore_list: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct!.ignoreList),
    lease_time: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct!.leaseTime),
    lease_time_v6: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6ToTerraform(struct!.leaseTimeV6),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned_reclaim_time: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeToHclTerraform(struct!.abandonedReclaimTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime",
    },
    abandoned_reclaim_time_v6: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToHclTerraform(struct!.abandonedReclaimTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6",
    },
    allow_unknown: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct!.allowUnknown),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknown",
    },
    allow_unknown_v6: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6ToHclTerraform(struct!.allowUnknownV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6",
    },
    authoritative_dhcp: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpToHclTerraform(struct!.authoritativeDhcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp",
    },
    echo_client_id: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientIdToHclTerraform(struct!.echoClientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientId",
    },
    filters: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFilters",
    },
    filters_v6: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6ToHclTerraform(struct!.filtersV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6",
    },
    hold_reclaimed_time: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeToHclTerraform(struct!.holdReclaimedTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTime",
    },
    hold_reclaimed_time_v6: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToHclTerraform(struct!.holdReclaimedTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6",
    },
    ignore_client_uid: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUidToHclTerraform(struct!.ignoreClientUid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUid",
    },
    ignore_list: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct!.ignoreList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStruct",
    },
    lease_time: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct!.leaseTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTime",
    },
    lease_time_v6: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6ToHclTerraform(struct!.leaseTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abandonedReclaimTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTime = this._abandonedReclaimTime?.internalValue;
    }
    if (this._abandonedReclaimTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTimeV6 = this._abandonedReclaimTimeV6?.internalValue;
    }
    if (this._allowUnknown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown?.internalValue;
    }
    if (this._allowUnknownV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknownV6 = this._allowUnknownV6?.internalValue;
    }
    if (this._authoritativeDhcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritativeDhcp = this._authoritativeDhcp?.internalValue;
    }
    if (this._echoClientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoClientId = this._echoClientId?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._filtersV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersV6 = this._filtersV6?.internalValue;
    }
    if (this._holdReclaimedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdReclaimedTime = this._holdReclaimedTime?.internalValue;
    }
    if (this._holdReclaimedTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdReclaimedTimeV6 = this._holdReclaimedTimeV6?.internalValue;
    }
    if (this._ignoreClientUid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientUid = this._ignoreClientUid?.internalValue;
    }
    if (this._ignoreList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreList = this._ignoreList?.internalValue;
    }
    if (this._leaseTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime?.internalValue;
    }
    if (this._leaseTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeV6 = this._leaseTimeV6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime.internalValue = undefined;
      this._abandonedReclaimTimeV6.internalValue = undefined;
      this._allowUnknown.internalValue = undefined;
      this._allowUnknownV6.internalValue = undefined;
      this._authoritativeDhcp.internalValue = undefined;
      this._echoClientId.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._filtersV6.internalValue = undefined;
      this._holdReclaimedTime.internalValue = undefined;
      this._holdReclaimedTimeV6.internalValue = undefined;
      this._ignoreClientUid.internalValue = undefined;
      this._ignoreList.internalValue = undefined;
      this._leaseTime.internalValue = undefined;
      this._leaseTimeV6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime.internalValue = value.abandonedReclaimTime;
      this._abandonedReclaimTimeV6.internalValue = value.abandonedReclaimTimeV6;
      this._allowUnknown.internalValue = value.allowUnknown;
      this._allowUnknownV6.internalValue = value.allowUnknownV6;
      this._authoritativeDhcp.internalValue = value.authoritativeDhcp;
      this._echoClientId.internalValue = value.echoClientId;
      this._filters.internalValue = value.filters;
      this._filtersV6.internalValue = value.filtersV6;
      this._holdReclaimedTime.internalValue = value.holdReclaimedTime;
      this._holdReclaimedTimeV6.internalValue = value.holdReclaimedTimeV6;
      this._ignoreClientUid.internalValue = value.ignoreClientUid;
      this._ignoreList.internalValue = value.ignoreList;
      this._leaseTime.internalValue = value.leaseTime;
      this._leaseTimeV6.internalValue = value.leaseTimeV6;
    }
  }

  // abandoned_reclaim_time - computed: true, optional: true, required: false
  private _abandonedReclaimTime = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeOutputReference(this, "abandoned_reclaim_time");
  public get abandonedReclaimTime() {
    return this._abandonedReclaimTime;
  }
  public putAbandonedReclaimTime(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTime) {
    this._abandonedReclaimTime.internalValue = value;
  }
  public resetAbandonedReclaimTime() {
    this._abandonedReclaimTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeInput() {
    return this._abandonedReclaimTime.internalValue;
  }

  // abandoned_reclaim_time_v6 - computed: true, optional: true, required: false
  private _abandonedReclaimTimeV6 = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6OutputReference(this, "abandoned_reclaim_time_v6");
  public get abandonedReclaimTimeV6() {
    return this._abandonedReclaimTimeV6;
  }
  public putAbandonedReclaimTimeV6(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6) {
    this._abandonedReclaimTimeV6.internalValue = value;
  }
  public resetAbandonedReclaimTimeV6() {
    this._abandonedReclaimTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeV6Input() {
    return this._abandonedReclaimTimeV6.internalValue;
  }

  // allow_unknown - computed: true, optional: true, required: false
  private _allowUnknown = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownOutputReference(this, "allow_unknown");
  public get allowUnknown() {
    return this._allowUnknown;
  }
  public putAllowUnknown(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknown) {
    this._allowUnknown.internalValue = value;
  }
  public resetAllowUnknown() {
    this._allowUnknown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownInput() {
    return this._allowUnknown.internalValue;
  }

  // allow_unknown_v6 - computed: true, optional: true, required: false
  private _allowUnknownV6 = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6OutputReference(this, "allow_unknown_v6");
  public get allowUnknownV6() {
    return this._allowUnknownV6;
  }
  public putAllowUnknownV6(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAllowUnknownV6) {
    this._allowUnknownV6.internalValue = value;
  }
  public resetAllowUnknownV6() {
    this._allowUnknownV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownV6Input() {
    return this._allowUnknownV6.internalValue;
  }

  // authoritative_dhcp - computed: true, optional: true, required: false
  private _authoritativeDhcp = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcpOutputReference(this, "authoritative_dhcp");
  public get authoritativeDhcp() {
    return this._authoritativeDhcp;
  }
  public putAuthoritativeDhcp(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigAuthoritativeDhcp) {
    this._authoritativeDhcp.internalValue = value;
  }
  public resetAuthoritativeDhcp() {
    this._authoritativeDhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeDhcpInput() {
    return this._authoritativeDhcp.internalValue;
  }

  // echo_client_id - computed: true, optional: true, required: false
  private _echoClientId = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientIdOutputReference(this, "echo_client_id");
  public get echoClientId() {
    return this._echoClientId;
  }
  public putEchoClientId(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigEchoClientId) {
    this._echoClientId.internalValue = value;
  }
  public resetEchoClientId() {
    this._echoClientId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoClientIdInput() {
    return this._echoClientId.internalValue;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // filters_v6 - computed: true, optional: true, required: false
  private _filtersV6 = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6OutputReference(this, "filters_v6");
  public get filtersV6() {
    return this._filtersV6;
  }
  public putFiltersV6(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigFiltersV6) {
    this._filtersV6.internalValue = value;
  }
  public resetFiltersV6() {
    this._filtersV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersV6Input() {
    return this._filtersV6.internalValue;
  }

  // hold_reclaimed_time - computed: true, optional: true, required: false
  private _holdReclaimedTime = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeOutputReference(this, "hold_reclaimed_time");
  public get holdReclaimedTime() {
    return this._holdReclaimedTime;
  }
  public putHoldReclaimedTime(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTime) {
    this._holdReclaimedTime.internalValue = value;
  }
  public resetHoldReclaimedTime() {
    this._holdReclaimedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdReclaimedTimeInput() {
    return this._holdReclaimedTime.internalValue;
  }

  // hold_reclaimed_time_v6 - computed: true, optional: true, required: false
  private _holdReclaimedTimeV6 = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6OutputReference(this, "hold_reclaimed_time_v6");
  public get holdReclaimedTimeV6() {
    return this._holdReclaimedTimeV6;
  }
  public putHoldReclaimedTimeV6(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigHoldReclaimedTimeV6) {
    this._holdReclaimedTimeV6.internalValue = value;
  }
  public resetHoldReclaimedTimeV6() {
    this._holdReclaimedTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdReclaimedTimeV6Input() {
    return this._holdReclaimedTimeV6.internalValue;
  }

  // ignore_client_uid - computed: true, optional: true, required: false
  private _ignoreClientUid = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUidOutputReference(this, "ignore_client_uid");
  public get ignoreClientUid() {
    return this._ignoreClientUid;
  }
  public putIgnoreClientUid(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreClientUid) {
    this._ignoreClientUid.internalValue = value;
  }
  public resetIgnoreClientUid() {
    this._ignoreClientUid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientUidInput() {
    return this._ignoreClientUid.internalValue;
  }

  // ignore_list - computed: true, optional: true, required: false
  private _ignoreList = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStructOutputReference(this, "ignore_list");
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigIgnoreListStruct) {
    this._ignoreList.internalValue = value;
  }
  public resetIgnoreList() {
    this._ignoreList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreListInput() {
    return this._ignoreList.internalValue;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeOutputReference(this, "lease_time");
  public get leaseTime() {
    return this._leaseTime;
  }
  public putLeaseTime(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTime) {
    this._leaseTime.internalValue = value;
  }
  public resetLeaseTime() {
    this._leaseTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime.internalValue;
  }

  // lease_time_v6 - computed: true, optional: true, required: false
  private _leaseTimeV6 = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6OutputReference(this, "lease_time_v6");
  public get leaseTimeV6() {
    return this._leaseTimeV6;
  }
  public putLeaseTimeV6(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigLeaseTimeV6) {
    this._leaseTimeV6.internalValue = value;
  }
  public resetLeaseTimeV6() {
    this._leaseTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeV6Input() {
    return this._leaseTimeV6.internalValue;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOption {
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOptionToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOptionToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValue {
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  private _option = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // overriding_group - computed: true, optional: false, required: false
  public get overridingGroup() {
    return this.getStringAttribute('overriding_group');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValue {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueOutputReference {
    return new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptions {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
  /**
  * The inherited DHCP option values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#value DataBloxoneIpamAddressBlocks#value}
  */
  readonly value?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueToTerraform, false)(struct!.value),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: true, optional: true, required: false
  private _value = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilename {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilenameToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddress {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddressToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerName {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerNameToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockValue {
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockValueToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockValueToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname_rewrite_char - computed: true, optional: false, required: false
  public get hostnameRewriteChar() {
    return this.getStringAttribute('hostname_rewrite_char');
  }

  // hostname_rewrite_enabled - computed: true, optional: false, required: false
  public get hostnameRewriteEnabled() {
    return this.getBooleanAttribute('hostname_rewrite_enabled');
  }

  // hostname_rewrite_regex - computed: true, optional: false, required: false
  public get hostnameRewriteRegex() {
    return this.getStringAttribute('hostname_rewrite_regex');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#action DataBloxoneIpamAddressBlocks#action}
  */
  readonly action?: string;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsInheritanceSources {
  /**
  * The inheritance configuration for _asm_config_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#asm_config DataBloxoneIpamAddressBlocks#asm_config}
  */
  readonly asmConfig?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfig;
  /**
  * The inheritance configuration for _ddns_client_update_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_client_update DataBloxoneIpamAddressBlocks#ddns_client_update}
  */
  readonly ddnsClientUpdate?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdate;
  /**
  * The inheritance configuration for _ddns_conflict_resolution_mode_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_conflict_resolution_mode DataBloxoneIpamAddressBlocks#ddns_conflict_resolution_mode}
  */
  readonly ddnsConflictResolutionMode?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionMode;
  /**
  * The inheritance configuration for _ddns_enabled_ field. Only action allowed is 'inherit'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_enabled DataBloxoneIpamAddressBlocks#ddns_enabled}
  */
  readonly ddnsEnabled?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabled;
  /**
  * The inheritance configuration for _ddns_generate_name_ and _ddns_generated_prefix_ fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_hostname_block DataBloxoneIpamAddressBlocks#ddns_hostname_block}
  */
  readonly ddnsHostnameBlock?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlock;
  /**
  * The inheritance configuration for _ddns_ttl_percent_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_ttl_percent DataBloxoneIpamAddressBlocks#ddns_ttl_percent}
  */
  readonly ddnsTtlPercent?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercent;
  /**
  * The inheritance configuration for _ddns_send_updates_ and _ddns_domain_ fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_update_block DataBloxoneIpamAddressBlocks#ddns_update_block}
  */
  readonly ddnsUpdateBlock?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlock;
  /**
  * The inheritance configuration for _ddns_update_on_renew_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_update_on_renew DataBloxoneIpamAddressBlocks#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenew;
  /**
  * The inheritance configuration for _ddns_use_conflict_resolution_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_use_conflict_resolution DataBloxoneIpamAddressBlocks#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolution;
  /**
  * The inheritance configuration for _dhcp_config_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#dhcp_config DataBloxoneIpamAddressBlocks#dhcp_config}
  */
  readonly dhcpConfig?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfig;
  /**
  * The inheritance configuration for _dhcp_options_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#dhcp_options DataBloxoneIpamAddressBlocks#dhcp_options}
  */
  readonly dhcpOptions?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptions;
  /**
  * The inheritance configuration for _header_option_filename_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#header_option_filename DataBloxoneIpamAddressBlocks#header_option_filename}
  */
  readonly headerOptionFilename?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilename;
  /**
  * The inheritance configuration for _header_option_server_address_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#header_option_server_address DataBloxoneIpamAddressBlocks#header_option_server_address}
  */
  readonly headerOptionServerAddress?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddress;
  /**
  * The inheritance configuration for _header_option_server_name_ field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#header_option_server_name DataBloxoneIpamAddressBlocks#header_option_server_name}
  */
  readonly headerOptionServerName?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerName;
  /**
  * The inheritance configuration for _hostname_rewrite_enabled_, _hostname_rewrite_regex_, and _hostname_rewrite_char_ fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#hostname_rewrite_block DataBloxoneIpamAddressBlocks#hostname_rewrite_block}
  */
  readonly hostnameRewriteBlock?: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlock;
}

export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asm_config: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigToTerraform(struct!.asmConfig),
    ddns_client_update: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdateToTerraform(struct!.ddnsClientUpdate),
    ddns_conflict_resolution_mode: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionModeToTerraform(struct!.ddnsConflictResolutionMode),
    ddns_enabled: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabledToTerraform(struct!.ddnsEnabled),
    ddns_hostname_block: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockToTerraform(struct!.ddnsHostnameBlock),
    ddns_ttl_percent: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercentToTerraform(struct!.ddnsTtlPercent),
    ddns_update_block: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockToTerraform(struct!.ddnsUpdateBlock),
    ddns_update_on_renew: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct!.ddnsUpdateOnRenew),
    ddns_use_conflict_resolution: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct!.ddnsUseConflictResolution),
    dhcp_config: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigToTerraform(struct!.dhcpConfig),
    dhcp_options: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsToTerraform(struct!.dhcpOptions),
    header_option_filename: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilenameToTerraform(struct!.headerOptionFilename),
    header_option_server_address: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddressToTerraform(struct!.headerOptionServerAddress),
    header_option_server_name: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerNameToTerraform(struct!.headerOptionServerName),
    hostname_rewrite_block: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockToTerraform(struct!.hostnameRewriteBlock),
  }
}


export function dataBloxoneIpamAddressBlocksResultsInheritanceSourcesToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asm_config: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigToHclTerraform(struct!.asmConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfig",
    },
    ddns_client_update: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdateToHclTerraform(struct!.ddnsClientUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdate",
    },
    ddns_conflict_resolution_mode: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionModeToHclTerraform(struct!.ddnsConflictResolutionMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionMode",
    },
    ddns_enabled: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabledToHclTerraform(struct!.ddnsEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabled",
    },
    ddns_hostname_block: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct!.ddnsHostnameBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlock",
    },
    ddns_ttl_percent: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercentToHclTerraform(struct!.ddnsTtlPercent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercent",
    },
    ddns_update_block: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockToHclTerraform(struct!.ddnsUpdateBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlock",
    },
    ddns_update_on_renew: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct!.ddnsUpdateOnRenew),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenew",
    },
    ddns_use_conflict_resolution: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct!.ddnsUseConflictResolution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolution",
    },
    dhcp_config: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigToHclTerraform(struct!.dhcpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfig",
    },
    dhcp_options: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsToHclTerraform(struct!.dhcpOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptions",
    },
    header_option_filename: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct!.headerOptionFilename),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilename",
    },
    header_option_server_address: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct!.headerOptionServerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddress",
    },
    header_option_server_name: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct!.headerOptionServerName),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerName",
    },
    hostname_rewrite_block: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct!.hostnameRewriteBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlock",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmConfig = this._asmConfig?.internalValue;
    }
    if (this._ddnsClientUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsClientUpdate = this._ddnsClientUpdate?.internalValue;
    }
    if (this._ddnsConflictResolutionMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsConflictResolutionMode = this._ddnsConflictResolutionMode?.internalValue;
    }
    if (this._ddnsEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsEnabled = this._ddnsEnabled?.internalValue;
    }
    if (this._ddnsHostnameBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsHostnameBlock = this._ddnsHostnameBlock?.internalValue;
    }
    if (this._ddnsTtlPercent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsTtlPercent = this._ddnsTtlPercent?.internalValue;
    }
    if (this._ddnsUpdateBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateBlock = this._ddnsUpdateBlock?.internalValue;
    }
    if (this._ddnsUpdateOnRenew?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateOnRenew = this._ddnsUpdateOnRenew?.internalValue;
    }
    if (this._ddnsUseConflictResolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUseConflictResolution = this._ddnsUseConflictResolution?.internalValue;
    }
    if (this._dhcpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpConfig = this._dhcpConfig?.internalValue;
    }
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    if (this._headerOptionFilename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionFilename = this._headerOptionFilename?.internalValue;
    }
    if (this._headerOptionServerAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerAddress = this._headerOptionServerAddress?.internalValue;
    }
    if (this._headerOptionServerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerName = this._headerOptionServerName?.internalValue;
    }
    if (this._hostnameRewriteBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameRewriteBlock = this._hostnameRewriteBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asmConfig.internalValue = undefined;
      this._ddnsClientUpdate.internalValue = undefined;
      this._ddnsConflictResolutionMode.internalValue = undefined;
      this._ddnsEnabled.internalValue = undefined;
      this._ddnsHostnameBlock.internalValue = undefined;
      this._ddnsTtlPercent.internalValue = undefined;
      this._ddnsUpdateBlock.internalValue = undefined;
      this._ddnsUpdateOnRenew.internalValue = undefined;
      this._ddnsUseConflictResolution.internalValue = undefined;
      this._dhcpConfig.internalValue = undefined;
      this._dhcpOptions.internalValue = undefined;
      this._headerOptionFilename.internalValue = undefined;
      this._headerOptionServerAddress.internalValue = undefined;
      this._headerOptionServerName.internalValue = undefined;
      this._hostnameRewriteBlock.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asmConfig.internalValue = value.asmConfig;
      this._ddnsClientUpdate.internalValue = value.ddnsClientUpdate;
      this._ddnsConflictResolutionMode.internalValue = value.ddnsConflictResolutionMode;
      this._ddnsEnabled.internalValue = value.ddnsEnabled;
      this._ddnsHostnameBlock.internalValue = value.ddnsHostnameBlock;
      this._ddnsTtlPercent.internalValue = value.ddnsTtlPercent;
      this._ddnsUpdateBlock.internalValue = value.ddnsUpdateBlock;
      this._ddnsUpdateOnRenew.internalValue = value.ddnsUpdateOnRenew;
      this._ddnsUseConflictResolution.internalValue = value.ddnsUseConflictResolution;
      this._dhcpConfig.internalValue = value.dhcpConfig;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._headerOptionFilename.internalValue = value.headerOptionFilename;
      this._headerOptionServerAddress.internalValue = value.headerOptionServerAddress;
      this._headerOptionServerName.internalValue = value.headerOptionServerName;
      this._hostnameRewriteBlock.internalValue = value.hostnameRewriteBlock;
    }
  }

  // asm_config - computed: true, optional: true, required: false
  private _asmConfig = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfigOutputReference(this, "asm_config");
  public get asmConfig() {
    return this._asmConfig;
  }
  public putAsmConfig(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesAsmConfig) {
    this._asmConfig.internalValue = value;
  }
  public resetAsmConfig() {
    this._asmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmConfigInput() {
    return this._asmConfig.internalValue;
  }

  // ddns_client_update - computed: true, optional: true, required: false
  private _ddnsClientUpdate = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdateOutputReference(this, "ddns_client_update");
  public get ddnsClientUpdate() {
    return this._ddnsClientUpdate;
  }
  public putDdnsClientUpdate(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsClientUpdate) {
    this._ddnsClientUpdate.internalValue = value;
  }
  public resetDdnsClientUpdate() {
    this._ddnsClientUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsClientUpdateInput() {
    return this._ddnsClientUpdate.internalValue;
  }

  // ddns_conflict_resolution_mode - computed: true, optional: true, required: false
  private _ddnsConflictResolutionMode = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionModeOutputReference(this, "ddns_conflict_resolution_mode");
  public get ddnsConflictResolutionMode() {
    return this._ddnsConflictResolutionMode;
  }
  public putDdnsConflictResolutionMode(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsConflictResolutionMode) {
    this._ddnsConflictResolutionMode.internalValue = value;
  }
  public resetDdnsConflictResolutionMode() {
    this._ddnsConflictResolutionMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConflictResolutionModeInput() {
    return this._ddnsConflictResolutionMode.internalValue;
  }

  // ddns_enabled - computed: true, optional: true, required: false
  private _ddnsEnabled = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabledOutputReference(this, "ddns_enabled");
  public get ddnsEnabled() {
    return this._ddnsEnabled;
  }
  public putDdnsEnabled(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsEnabled) {
    this._ddnsEnabled.internalValue = value;
  }
  public resetDdnsEnabled() {
    this._ddnsEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsEnabledInput() {
    return this._ddnsEnabled.internalValue;
  }

  // ddns_hostname_block - computed: true, optional: true, required: false
  private _ddnsHostnameBlock = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlockOutputReference(this, "ddns_hostname_block");
  public get ddnsHostnameBlock() {
    return this._ddnsHostnameBlock;
  }
  public putDdnsHostnameBlock(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsHostnameBlock) {
    this._ddnsHostnameBlock.internalValue = value;
  }
  public resetDdnsHostnameBlock() {
    this._ddnsHostnameBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsHostnameBlockInput() {
    return this._ddnsHostnameBlock.internalValue;
  }

  // ddns_ttl_percent - computed: true, optional: true, required: false
  private _ddnsTtlPercent = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercentOutputReference(this, "ddns_ttl_percent");
  public get ddnsTtlPercent() {
    return this._ddnsTtlPercent;
  }
  public putDdnsTtlPercent(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsTtlPercent) {
    this._ddnsTtlPercent.internalValue = value;
  }
  public resetDdnsTtlPercent() {
    this._ddnsTtlPercent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlPercentInput() {
    return this._ddnsTtlPercent.internalValue;
  }

  // ddns_update_block - computed: true, optional: true, required: false
  private _ddnsUpdateBlock = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlockOutputReference(this, "ddns_update_block");
  public get ddnsUpdateBlock() {
    return this._ddnsUpdateBlock;
  }
  public putDdnsUpdateBlock(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateBlock) {
    this._ddnsUpdateBlock.internalValue = value;
  }
  public resetDdnsUpdateBlock() {
    this._ddnsUpdateBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateBlockInput() {
    return this._ddnsUpdateBlock.internalValue;
  }

  // ddns_update_on_renew - computed: true, optional: true, required: false
  private _ddnsUpdateOnRenew = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenewOutputReference(this, "ddns_update_on_renew");
  public get ddnsUpdateOnRenew() {
    return this._ddnsUpdateOnRenew;
  }
  public putDdnsUpdateOnRenew(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUpdateOnRenew) {
    this._ddnsUpdateOnRenew.internalValue = value;
  }
  public resetDdnsUpdateOnRenew() {
    this._ddnsUpdateOnRenew.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOnRenewInput() {
    return this._ddnsUpdateOnRenew.internalValue;
  }

  // ddns_use_conflict_resolution - computed: true, optional: true, required: false
  private _ddnsUseConflictResolution = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolutionOutputReference(this, "ddns_use_conflict_resolution");
  public get ddnsUseConflictResolution() {
    return this._ddnsUseConflictResolution;
  }
  public putDdnsUseConflictResolution(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDdnsUseConflictResolution) {
    this._ddnsUseConflictResolution.internalValue = value;
  }
  public resetDdnsUseConflictResolution() {
    this._ddnsUseConflictResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseConflictResolutionInput() {
    return this._ddnsUseConflictResolution.internalValue;
  }

  // dhcp_config - computed: true, optional: true, required: false
  private _dhcpConfig = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // dhcp_options - computed: true, optional: true, required: false
  private _dhcpOptions = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptionsOutputReference(this, "dhcp_options");
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesDhcpOptions) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilenameOutputReference(this, "header_option_filename");
  public get headerOptionFilename() {
    return this._headerOptionFilename;
  }
  public putHeaderOptionFilename(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionFilename) {
    this._headerOptionFilename.internalValue = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename.internalValue;
  }

  // header_option_server_address - computed: true, optional: true, required: false
  private _headerOptionServerAddress = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddressOutputReference(this, "header_option_server_address");
  public get headerOptionServerAddress() {
    return this._headerOptionServerAddress;
  }
  public putHeaderOptionServerAddress(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerAddress) {
    this._headerOptionServerAddress.internalValue = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress.internalValue;
  }

  // header_option_server_name - computed: true, optional: true, required: false
  private _headerOptionServerName = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerNameOutputReference(this, "header_option_server_name");
  public get headerOptionServerName() {
    return this._headerOptionServerName;
  }
  public putHeaderOptionServerName(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHeaderOptionServerName) {
    this._headerOptionServerName.internalValue = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName.internalValue;
  }

  // hostname_rewrite_block - computed: true, optional: true, required: false
  private _hostnameRewriteBlock = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlockOutputReference(this, "hostname_rewrite_block");
  public get hostnameRewriteBlock() {
    return this._hostnameRewriteBlock;
  }
  public putHostnameRewriteBlock(value: DataBloxoneIpamAddressBlocksResultsInheritanceSourcesHostnameRewriteBlock) {
    this._hostnameRewriteBlock.internalValue = value;
  }
  public resetHostnameRewriteBlock() {
    this._hostnameRewriteBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteBlockInput() {
    return this._hostnameRewriteBlock.internalValue;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsThreshold {
  /**
  * Indicates whether the utilization threshold for IP addresses is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#enabled DataBloxoneIpamAddressBlocks#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The high threshold value for the percentage of used IP addresses relative to the total IP addresses available in the scope of the object. Thresholds are inclusive in the comparison test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#high DataBloxoneIpamAddressBlocks#high}
  */
  readonly high: number;
  /**
  * The low threshold value for the percentage of used IP addresses relative to the total IP addresses available in the scope of the object. Thresholds are inclusive in the comparison test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#low DataBloxoneIpamAddressBlocks#low}
  */
  readonly low: number;
}

export function dataBloxoneIpamAddressBlocksResultsThresholdToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    high: cdktf.numberToTerraform(struct!.high),
    low: cdktf.numberToTerraform(struct!.low),
  }
}


export function dataBloxoneIpamAddressBlocksResultsThresholdToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._high = undefined;
      this._low = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._high = value.high;
      this._low = value.low;
    }
  }

  // enabled - computed: true, optional: false, required: true
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

  // high - computed: true, optional: false, required: true
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: true, optional: false, required: true
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }
}
export interface DataBloxoneIpamAddressBlocksResultsUtilization {
}

export function dataBloxoneIpamAddressBlocksResultsUtilizationToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneIpamAddressBlocksResultsUtilizationToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneIpamAddressBlocksResultsUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abandon_utilization - computed: true, optional: false, required: false
  public get abandonUtilization() {
    return this.getNumberAttribute('abandon_utilization');
  }

  // abandoned - computed: true, optional: false, required: false
  public get abandoned() {
    return this.getStringAttribute('abandoned');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getStringAttribute('dynamic');
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // static - computed: true, optional: false, required: false
  public get static() {
    return this.getStringAttribute('static');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getStringAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }

  // utilization - computed: true, optional: false, required: false
  public get utilization() {
    return this.getNumberAttribute('utilization');
  }
}
export interface DataBloxoneIpamAddressBlocksResultsUtilizationV6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#abandoned DataBloxoneIpamAddressBlocks#abandoned}
  */
  readonly abandoned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#dynamic DataBloxoneIpamAddressBlocks#dynamic}
  */
  readonly dynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#static DataBloxoneIpamAddressBlocks#static}
  */
  readonly static?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#total DataBloxoneIpamAddressBlocks#total}
  */
  readonly total?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#used DataBloxoneIpamAddressBlocks#used}
  */
  readonly used?: string;
}

export function dataBloxoneIpamAddressBlocksResultsUtilizationV6ToTerraform(struct?: DataBloxoneIpamAddressBlocksResultsUtilizationV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned: cdktf.stringToTerraform(struct!.abandoned),
    dynamic: cdktf.stringToTerraform(struct!.dynamic),
    static: cdktf.stringToTerraform(struct!.static),
    total: cdktf.stringToTerraform(struct!.total),
    used: cdktf.stringToTerraform(struct!.used),
  }
}


export function dataBloxoneIpamAddressBlocksResultsUtilizationV6ToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResultsUtilizationV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned: {
      value: cdktf.stringToHclTerraform(struct!.abandoned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic: {
      value: cdktf.stringToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static: {
      value: cdktf.stringToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total: {
      value: cdktf.stringToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used: {
      value: cdktf.stringToHclTerraform(struct!.used),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsUtilizationV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResultsUtilizationV6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abandoned !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandoned = this._abandoned;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._used !== undefined) {
      hasAnyValues = true;
      internalValueResult.used = this._used;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResultsUtilizationV6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abandoned = undefined;
      this._dynamic = undefined;
      this._static = undefined;
      this._total = undefined;
      this._used = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abandoned = value.abandoned;
      this._dynamic = value.dynamic;
      this._static = value.static;
      this._total = value.total;
      this._used = value.used;
    }
  }

  // abandoned - computed: true, optional: true, required: false
  private _abandoned?: string; 
  public get abandoned() {
    return this.getStringAttribute('abandoned');
  }
  public set abandoned(value: string) {
    this._abandoned = value;
  }
  public resetAbandoned() {
    this._abandoned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedInput() {
    return this._abandoned;
  }

  // dynamic - computed: true, optional: true, required: false
  private _dynamic?: string; 
  public get dynamic() {
    return this.getStringAttribute('dynamic');
  }
  public set dynamic(value: string) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // static - computed: true, optional: true, required: false
  private _static?: string; 
  public get static() {
    return this.getStringAttribute('static');
  }
  public set static(value: string) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // total - computed: true, optional: true, required: false
  private _total?: string; 
  public get total() {
    return this.getStringAttribute('total');
  }
  public set total(value: string) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // used - computed: true, optional: true, required: false
  private _used?: string; 
  public get used() {
    return this.getStringAttribute('used');
  }
  public set used(value: string) {
    this._used = value;
  }
  public resetUsed() {
    this._used = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedInput() {
    return this._used;
  }
}
export interface DataBloxoneIpamAddressBlocksResults {
  /**
  * The address field in form 'a.b.c.d'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#address DataBloxoneIpamAddressBlocks#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#asm_config DataBloxoneIpamAddressBlocks#asm_config}
  */
  readonly asmConfig?: DataBloxoneIpamAddressBlocksResultsAsmConfig;
  /**
  * The CIDR of the address block. This is required, if _address_ does not specify it in its input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#cidr DataBloxoneIpamAddressBlocks#cidr}
  */
  readonly cidr: number;
  /**
  * The description for the address block. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#comment DataBloxoneIpamAddressBlocks#comment}
  */
  readonly comment?: string;
  /**
  * The compartment associated with the object. If no compartment is associated with the object, the value defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#compartment_id DataBloxoneIpamAddressBlocks#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Controls who does the DDNS updates. Valid values are:
  *   * _client_: DHCP server updates DNS if requested by client.
  *   * _server_: DHCP server always updates DNS, overriding an update request from the client, unless the client requests no updates.
  *   * _ignore_: DHCP server always updates DNS, even if the client says not to.
  *   * _over_client_update_: Same as _server_. DHCP server always updates DNS, overriding an update request from the client, unless the client requests no updates.
  *   * _over_no_update_: DHCP server updates DNS even if the client requests that no updates be done. If the client requests to do the update, DHCP server allows it.
  *   Defaults to _client_.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_client_update DataBloxoneIpamAddressBlocks#ddns_client_update}
  */
  readonly ddnsClientUpdate?: string;
  /**
  * The mode used for resolving conflicts while performing DDNS updates. Valid values are:
  * 
  *   * _check_with_dhcid_: It includes adding a DHCID record and checking that record via conflict detection as per RFC 4703.
  *   * _no_check_with_dhcid_: This will ignore conflict detection but add a DHCID record when creating/updating an entry.
  *   * _check_exists_with_dhcid_: This will check if there is an existing DHCID record but does not verify the value of the record matches the update. This will also update the DHCID record for the entry.
  *   * _no_check_without_dhcid_: This ignores conflict detection and will not add a DHCID record when creating/updating a DDNS entry.
  *   Defaults to _check_with_dhcid_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_conflict_resolution_mode DataBloxoneIpamAddressBlocks#ddns_conflict_resolution_mode}
  */
  readonly ddnsConflictResolutionMode?: string;
  /**
  * The domain suffix for DDNS updates. FQDN, may be empty.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_domain DataBloxoneIpamAddressBlocks#ddns_domain}
  */
  readonly ddnsDomain?: string;
  /**
  * Indicates if DDNS needs to generate a hostname when not supplied by the client.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_generate_name DataBloxoneIpamAddressBlocks#ddns_generate_name}
  */
  readonly ddnsGenerateName?: boolean | cdktf.IResolvable;
  /**
  * The prefix used in the generation of an FQDN.  When generating a name, DHCP server will construct the name in the format: [ddns-generated-prefix]-[address-text].[ddns-qualifying-suffix]. where address-text is simply the lease IP address converted to a hyphenated string.  Defaults to "myhost".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_generated_prefix DataBloxoneIpamAddressBlocks#ddns_generated_prefix}
  */
  readonly ddnsGeneratedPrefix?: string;
  /**
  * Determines if DDNS updates are enabled at the address block level. Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_send_updates DataBloxoneIpamAddressBlocks#ddns_send_updates}
  */
  readonly ddnsSendUpdates?: boolean | cdktf.IResolvable;
  /**
  * DDNS TTL value - to be calculated as a simple percentage of the lease's lifetime, using the parameter's value as the percentage. It is specified as a percentage (e.g. 25, 75). Defaults to unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_ttl_percent DataBloxoneIpamAddressBlocks#ddns_ttl_percent}
  */
  readonly ddnsTtlPercent?: number;
  /**
  * Instructs the DHCP server to always update the DNS information when a lease is renewed even if its DNS information has not changed.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_update_on_renew DataBloxoneIpamAddressBlocks#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: boolean | cdktf.IResolvable;
  /**
  * When true, DHCP server will apply conflict resolution, as described in RFC 4703, when attempting to fulfill the update request.  When false, DHCP server will simply attempt to update the DNS entries per the request, regardless of whether or not they conflict with existing entries owned by other DHCP4 clients.  Defaults to _true_. Can be set to true only when ddns_conflict_resolution_mode is check_with_dhcid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#ddns_use_conflict_resolution DataBloxoneIpamAddressBlocks#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#dhcp_config DataBloxoneIpamAddressBlocks#dhcp_config}
  */
  readonly dhcpConfig?: DataBloxoneIpamAddressBlocksResultsDhcpConfig;
  /**
  * The list of DHCP options for the address block. May be either a specific option or a group of options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#dhcp_options DataBloxoneIpamAddressBlocks#dhcp_options}
  */
  readonly dhcpOptions?: DataBloxoneIpamAddressBlocksResultsDhcpOptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#dhcp_utilization DataBloxoneIpamAddressBlocks#dhcp_utilization}
  */
  readonly dhcpUtilization?: DataBloxoneIpamAddressBlocksResultsDhcpUtilization;
  /**
  * The discovery attributes for this address block in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#discovery_attrs DataBloxoneIpamAddressBlocks#discovery_attrs}
  */
  readonly discoveryAttrs?: { [key: string]: string };
  /**
  * The discovery metadata for this address block in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#discovery_metadata DataBloxoneIpamAddressBlocks#discovery_metadata}
  */
  readonly discoveryMetadata?: { [key: string]: string };
  /**
  * The external keys (source key) for this address block in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#external_keys DataBloxoneIpamAddressBlocks#external_keys}
  */
  readonly externalKeys?: { [key: string]: string };
  /**
  * Federated realms to which this address block belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#federated_realms DataBloxoneIpamAddressBlocks#federated_realms}
  */
  readonly federatedRealms?: string[];
  /**
  * The configuration for header option filename field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#header_option_filename DataBloxoneIpamAddressBlocks#header_option_filename}
  */
  readonly headerOptionFilename?: string;
  /**
  * The configuration for header option server address field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#header_option_server_address DataBloxoneIpamAddressBlocks#header_option_server_address}
  */
  readonly headerOptionServerAddress?: string;
  /**
  * The configuration for header option server name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#header_option_server_name DataBloxoneIpamAddressBlocks#header_option_server_name}
  */
  readonly headerOptionServerName?: string;
  /**
  * The character to replace non-matching characters with, when hostname rewrite is enabled.  Any single ASCII character or no character if the invalid characters should be removed without replacement.  Defaults to "-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#hostname_rewrite_char DataBloxoneIpamAddressBlocks#hostname_rewrite_char}
  */
  readonly hostnameRewriteChar?: string;
  /**
  * Indicates if client supplied hostnames will be rewritten prior to DDNS update by replacing every character that does not match _hostname_rewrite_regex_ by _hostname_rewrite_char_.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#hostname_rewrite_enabled DataBloxoneIpamAddressBlocks#hostname_rewrite_enabled}
  */
  readonly hostnameRewriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * The regex bracket expression to match valid characters.  Must begin with "[" and end with "]" and be a compilable POSIX regex.  Defaults to "[^a-zA-Z0-9_.]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#hostname_rewrite_regex DataBloxoneIpamAddressBlocks#hostname_rewrite_regex}
  */
  readonly hostnameRewriteRegex?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#inheritance_parent DataBloxoneIpamAddressBlocks#inheritance_parent}
  */
  readonly inheritanceParent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#inheritance_sources DataBloxoneIpamAddressBlocks#inheritance_sources}
  */
  readonly inheritanceSources?: DataBloxoneIpamAddressBlocksResultsInheritanceSources;
  /**
  * The name of the address block. May contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#name DataBloxoneIpamAddressBlocks#name}
  */
  readonly name?: string;
  /**
  * The resource identifier for the address block where the next available address block should be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#next_available_id DataBloxoneIpamAddressBlocks#next_available_id}
  */
  readonly nextAvailableId?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#space DataBloxoneIpamAddressBlocks#space}
  */
  readonly space: string;
  /**
  * The tags for the address block in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#tags DataBloxoneIpamAddressBlocks#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataBloxoneIpamAddressBlocksResultsToTerraform(struct?: DataBloxoneIpamAddressBlocksResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    asm_config: dataBloxoneIpamAddressBlocksResultsAsmConfigToTerraform(struct!.asmConfig),
    cidr: cdktf.numberToTerraform(struct!.cidr),
    comment: cdktf.stringToTerraform(struct!.comment),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    ddns_client_update: cdktf.stringToTerraform(struct!.ddnsClientUpdate),
    ddns_conflict_resolution_mode: cdktf.stringToTerraform(struct!.ddnsConflictResolutionMode),
    ddns_domain: cdktf.stringToTerraform(struct!.ddnsDomain),
    ddns_generate_name: cdktf.booleanToTerraform(struct!.ddnsGenerateName),
    ddns_generated_prefix: cdktf.stringToTerraform(struct!.ddnsGeneratedPrefix),
    ddns_send_updates: cdktf.booleanToTerraform(struct!.ddnsSendUpdates),
    ddns_ttl_percent: cdktf.numberToTerraform(struct!.ddnsTtlPercent),
    ddns_update_on_renew: cdktf.booleanToTerraform(struct!.ddnsUpdateOnRenew),
    ddns_use_conflict_resolution: cdktf.booleanToTerraform(struct!.ddnsUseConflictResolution),
    dhcp_config: dataBloxoneIpamAddressBlocksResultsDhcpConfigToTerraform(struct!.dhcpConfig),
    dhcp_options: cdktf.listMapper(dataBloxoneIpamAddressBlocksResultsDhcpOptionsToTerraform, false)(struct!.dhcpOptions),
    dhcp_utilization: dataBloxoneIpamAddressBlocksResultsDhcpUtilizationToTerraform(struct!.dhcpUtilization),
    discovery_attrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.discoveryAttrs),
    discovery_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.discoveryMetadata),
    external_keys: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.externalKeys),
    federated_realms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.federatedRealms),
    header_option_filename: cdktf.stringToTerraform(struct!.headerOptionFilename),
    header_option_server_address: cdktf.stringToTerraform(struct!.headerOptionServerAddress),
    header_option_server_name: cdktf.stringToTerraform(struct!.headerOptionServerName),
    hostname_rewrite_char: cdktf.stringToTerraform(struct!.hostnameRewriteChar),
    hostname_rewrite_enabled: cdktf.booleanToTerraform(struct!.hostnameRewriteEnabled),
    hostname_rewrite_regex: cdktf.stringToTerraform(struct!.hostnameRewriteRegex),
    inheritance_parent: cdktf.stringToTerraform(struct!.inheritanceParent),
    inheritance_sources: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesToTerraform(struct!.inheritanceSources),
    name: cdktf.stringToTerraform(struct!.name),
    next_available_id: cdktf.stringToTerraform(struct!.nextAvailableId),
    space: cdktf.stringToTerraform(struct!.space),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataBloxoneIpamAddressBlocksResultsToHclTerraform(struct?: DataBloxoneIpamAddressBlocksResults): any {
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
    asm_config: {
      value: dataBloxoneIpamAddressBlocksResultsAsmConfigToHclTerraform(struct!.asmConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsAsmConfig",
    },
    cidr: {
      value: cdktf.numberToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_client_update: {
      value: cdktf.stringToHclTerraform(struct!.ddnsClientUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_conflict_resolution_mode: {
      value: cdktf.stringToHclTerraform(struct!.ddnsConflictResolutionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_domain: {
      value: cdktf.stringToHclTerraform(struct!.ddnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_generate_name: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsGenerateName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_generated_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ddnsGeneratedPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_send_updates: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsSendUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_ttl_percent: {
      value: cdktf.numberToHclTerraform(struct!.ddnsTtlPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddns_update_on_renew: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsUpdateOnRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_use_conflict_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsUseConflictResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_config: {
      value: dataBloxoneIpamAddressBlocksResultsDhcpConfigToHclTerraform(struct!.dhcpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsDhcpConfig",
    },
    dhcp_options: {
      value: cdktf.listMapperHcl(dataBloxoneIpamAddressBlocksResultsDhcpOptionsToHclTerraform, false)(struct!.dhcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsDhcpOptionsList",
    },
    dhcp_utilization: {
      value: dataBloxoneIpamAddressBlocksResultsDhcpUtilizationToHclTerraform(struct!.dhcpUtilization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsDhcpUtilization",
    },
    discovery_attrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.discoveryAttrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    discovery_metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.discoveryMetadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_keys: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.externalKeys),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    federated_realms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.federatedRealms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_option_filename: {
      value: cdktf.stringToHclTerraform(struct!.headerOptionFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_option_server_address: {
      value: cdktf.stringToHclTerraform(struct!.headerOptionServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_option_server_name: {
      value: cdktf.stringToHclTerraform(struct!.headerOptionServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_rewrite_char: {
      value: cdktf.stringToHclTerraform(struct!.hostnameRewriteChar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_rewrite_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.hostnameRewriteEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname_rewrite_regex: {
      value: cdktf.stringToHclTerraform(struct!.hostnameRewriteRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inheritance_parent: {
      value: cdktf.stringToHclTerraform(struct!.inheritanceParent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inheritance_sources: {
      value: dataBloxoneIpamAddressBlocksResultsInheritanceSourcesToHclTerraform(struct!.inheritanceSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneIpamAddressBlocksResultsInheritanceSources",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_available_id: {
      value: cdktf.stringToHclTerraform(struct!.nextAvailableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space: {
      value: cdktf.stringToHclTerraform(struct!.space),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneIpamAddressBlocksResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneIpamAddressBlocksResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._asmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmConfig = this._asmConfig?.internalValue;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._ddnsClientUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsClientUpdate = this._ddnsClientUpdate;
    }
    if (this._ddnsConflictResolutionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsConflictResolutionMode = this._ddnsConflictResolutionMode;
    }
    if (this._ddnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsDomain = this._ddnsDomain;
    }
    if (this._ddnsGenerateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsGenerateName = this._ddnsGenerateName;
    }
    if (this._ddnsGeneratedPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsGeneratedPrefix = this._ddnsGeneratedPrefix;
    }
    if (this._ddnsSendUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsSendUpdates = this._ddnsSendUpdates;
    }
    if (this._ddnsTtlPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsTtlPercent = this._ddnsTtlPercent;
    }
    if (this._ddnsUpdateOnRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateOnRenew = this._ddnsUpdateOnRenew;
    }
    if (this._ddnsUseConflictResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUseConflictResolution = this._ddnsUseConflictResolution;
    }
    if (this._dhcpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpConfig = this._dhcpConfig?.internalValue;
    }
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    if (this._dhcpUtilization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpUtilization = this._dhcpUtilization?.internalValue;
    }
    if (this._discoveryAttrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryAttrs = this._discoveryAttrs;
    }
    if (this._discoveryMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryMetadata = this._discoveryMetadata;
    }
    if (this._externalKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalKeys = this._externalKeys;
    }
    if (this._federatedRealms !== undefined) {
      hasAnyValues = true;
      internalValueResult.federatedRealms = this._federatedRealms;
    }
    if (this._headerOptionFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionFilename = this._headerOptionFilename;
    }
    if (this._headerOptionServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerAddress = this._headerOptionServerAddress;
    }
    if (this._headerOptionServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerName = this._headerOptionServerName;
    }
    if (this._hostnameRewriteChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameRewriteChar = this._hostnameRewriteChar;
    }
    if (this._hostnameRewriteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameRewriteEnabled = this._hostnameRewriteEnabled;
    }
    if (this._hostnameRewriteRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameRewriteRegex = this._hostnameRewriteRegex;
    }
    if (this._inheritanceParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritanceParent = this._inheritanceParent;
    }
    if (this._inheritanceSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritanceSources = this._inheritanceSources?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextAvailableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextAvailableId = this._nextAvailableId;
    }
    if (this._space !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneIpamAddressBlocksResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._asmConfig.internalValue = undefined;
      this._cidr = undefined;
      this._comment = undefined;
      this._compartmentId = undefined;
      this._ddnsClientUpdate = undefined;
      this._ddnsConflictResolutionMode = undefined;
      this._ddnsDomain = undefined;
      this._ddnsGenerateName = undefined;
      this._ddnsGeneratedPrefix = undefined;
      this._ddnsSendUpdates = undefined;
      this._ddnsTtlPercent = undefined;
      this._ddnsUpdateOnRenew = undefined;
      this._ddnsUseConflictResolution = undefined;
      this._dhcpConfig.internalValue = undefined;
      this._dhcpOptions.internalValue = undefined;
      this._dhcpUtilization.internalValue = undefined;
      this._discoveryAttrs = undefined;
      this._discoveryMetadata = undefined;
      this._externalKeys = undefined;
      this._federatedRealms = undefined;
      this._headerOptionFilename = undefined;
      this._headerOptionServerAddress = undefined;
      this._headerOptionServerName = undefined;
      this._hostnameRewriteChar = undefined;
      this._hostnameRewriteEnabled = undefined;
      this._hostnameRewriteRegex = undefined;
      this._inheritanceParent = undefined;
      this._inheritanceSources.internalValue = undefined;
      this._name = undefined;
      this._nextAvailableId = undefined;
      this._space = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._asmConfig.internalValue = value.asmConfig;
      this._cidr = value.cidr;
      this._comment = value.comment;
      this._compartmentId = value.compartmentId;
      this._ddnsClientUpdate = value.ddnsClientUpdate;
      this._ddnsConflictResolutionMode = value.ddnsConflictResolutionMode;
      this._ddnsDomain = value.ddnsDomain;
      this._ddnsGenerateName = value.ddnsGenerateName;
      this._ddnsGeneratedPrefix = value.ddnsGeneratedPrefix;
      this._ddnsSendUpdates = value.ddnsSendUpdates;
      this._ddnsTtlPercent = value.ddnsTtlPercent;
      this._ddnsUpdateOnRenew = value.ddnsUpdateOnRenew;
      this._ddnsUseConflictResolution = value.ddnsUseConflictResolution;
      this._dhcpConfig.internalValue = value.dhcpConfig;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._dhcpUtilization.internalValue = value.dhcpUtilization;
      this._discoveryAttrs = value.discoveryAttrs;
      this._discoveryMetadata = value.discoveryMetadata;
      this._externalKeys = value.externalKeys;
      this._federatedRealms = value.federatedRealms;
      this._headerOptionFilename = value.headerOptionFilename;
      this._headerOptionServerAddress = value.headerOptionServerAddress;
      this._headerOptionServerName = value.headerOptionServerName;
      this._hostnameRewriteChar = value.hostnameRewriteChar;
      this._hostnameRewriteEnabled = value.hostnameRewriteEnabled;
      this._hostnameRewriteRegex = value.hostnameRewriteRegex;
      this._inheritanceParent = value.inheritanceParent;
      this._inheritanceSources.internalValue = value.inheritanceSources;
      this._name = value.name;
      this._nextAvailableId = value.nextAvailableId;
      this._space = value.space;
      this._tags = value.tags;
    }
  }

  // address - computed: true, optional: true, required: false
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

  // asm_config - computed: true, optional: true, required: false
  private _asmConfig = new DataBloxoneIpamAddressBlocksResultsAsmConfigOutputReference(this, "asm_config");
  public get asmConfig() {
    return this._asmConfig;
  }
  public putAsmConfig(value: DataBloxoneIpamAddressBlocksResultsAsmConfig) {
    this._asmConfig.internalValue = value;
  }
  public resetAsmConfig() {
    this._asmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmConfigInput() {
    return this._asmConfig.internalValue;
  }

  // asm_scope_flag - computed: true, optional: false, required: false
  public get asmScopeFlag() {
    return this.getNumberAttribute('asm_scope_flag');
  }

  // cidr - computed: true, optional: false, required: true
  private _cidr?: number; 
  public get cidr() {
    return this.getNumberAttribute('cidr');
  }
  public set cidr(value: number) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // ddns_client_update - computed: true, optional: true, required: false
  private _ddnsClientUpdate?: string; 
  public get ddnsClientUpdate() {
    return this.getStringAttribute('ddns_client_update');
  }
  public set ddnsClientUpdate(value: string) {
    this._ddnsClientUpdate = value;
  }
  public resetDdnsClientUpdate() {
    this._ddnsClientUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsClientUpdateInput() {
    return this._ddnsClientUpdate;
  }

  // ddns_conflict_resolution_mode - computed: true, optional: true, required: false
  private _ddnsConflictResolutionMode?: string; 
  public get ddnsConflictResolutionMode() {
    return this.getStringAttribute('ddns_conflict_resolution_mode');
  }
  public set ddnsConflictResolutionMode(value: string) {
    this._ddnsConflictResolutionMode = value;
  }
  public resetDdnsConflictResolutionMode() {
    this._ddnsConflictResolutionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConflictResolutionModeInput() {
    return this._ddnsConflictResolutionMode;
  }

  // ddns_domain - computed: true, optional: true, required: false
  private _ddnsDomain?: string; 
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }
  public set ddnsDomain(value: string) {
    this._ddnsDomain = value;
  }
  public resetDdnsDomain() {
    this._ddnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainInput() {
    return this._ddnsDomain;
  }

  // ddns_generate_name - computed: true, optional: true, required: false
  private _ddnsGenerateName?: boolean | cdktf.IResolvable; 
  public get ddnsGenerateName() {
    return this.getBooleanAttribute('ddns_generate_name');
  }
  public set ddnsGenerateName(value: boolean | cdktf.IResolvable) {
    this._ddnsGenerateName = value;
  }
  public resetDdnsGenerateName() {
    this._ddnsGenerateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGenerateNameInput() {
    return this._ddnsGenerateName;
  }

  // ddns_generated_prefix - computed: true, optional: true, required: false
  private _ddnsGeneratedPrefix?: string; 
  public get ddnsGeneratedPrefix() {
    return this.getStringAttribute('ddns_generated_prefix');
  }
  public set ddnsGeneratedPrefix(value: string) {
    this._ddnsGeneratedPrefix = value;
  }
  public resetDdnsGeneratedPrefix() {
    this._ddnsGeneratedPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGeneratedPrefixInput() {
    return this._ddnsGeneratedPrefix;
  }

  // ddns_send_updates - computed: true, optional: true, required: false
  private _ddnsSendUpdates?: boolean | cdktf.IResolvable; 
  public get ddnsSendUpdates() {
    return this.getBooleanAttribute('ddns_send_updates');
  }
  public set ddnsSendUpdates(value: boolean | cdktf.IResolvable) {
    this._ddnsSendUpdates = value;
  }
  public resetDdnsSendUpdates() {
    this._ddnsSendUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsSendUpdatesInput() {
    return this._ddnsSendUpdates;
  }

  // ddns_ttl_percent - computed: true, optional: true, required: false
  private _ddnsTtlPercent?: number; 
  public get ddnsTtlPercent() {
    return this.getNumberAttribute('ddns_ttl_percent');
  }
  public set ddnsTtlPercent(value: number) {
    this._ddnsTtlPercent = value;
  }
  public resetDdnsTtlPercent() {
    this._ddnsTtlPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlPercentInput() {
    return this._ddnsTtlPercent;
  }

  // ddns_update_on_renew - computed: true, optional: true, required: false
  private _ddnsUpdateOnRenew?: boolean | cdktf.IResolvable; 
  public get ddnsUpdateOnRenew() {
    return this.getBooleanAttribute('ddns_update_on_renew');
  }
  public set ddnsUpdateOnRenew(value: boolean | cdktf.IResolvable) {
    this._ddnsUpdateOnRenew = value;
  }
  public resetDdnsUpdateOnRenew() {
    this._ddnsUpdateOnRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOnRenewInput() {
    return this._ddnsUpdateOnRenew;
  }

  // ddns_use_conflict_resolution - computed: true, optional: true, required: false
  private _ddnsUseConflictResolution?: boolean | cdktf.IResolvable; 
  public get ddnsUseConflictResolution() {
    return this.getBooleanAttribute('ddns_use_conflict_resolution');
  }
  public set ddnsUseConflictResolution(value: boolean | cdktf.IResolvable) {
    this._ddnsUseConflictResolution = value;
  }
  public resetDdnsUseConflictResolution() {
    this._ddnsUseConflictResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseConflictResolutionInput() {
    return this._ddnsUseConflictResolution;
  }

  // delegation - computed: true, optional: false, required: false
  public get delegation() {
    return this.getStringAttribute('delegation');
  }

  // dhcp_config - computed: true, optional: true, required: false
  private _dhcpConfig = new DataBloxoneIpamAddressBlocksResultsDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: DataBloxoneIpamAddressBlocksResultsDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // dhcp_options - computed: true, optional: true, required: false
  private _dhcpOptions = new DataBloxoneIpamAddressBlocksResultsDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: DataBloxoneIpamAddressBlocksResultsDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_utilization - computed: true, optional: true, required: false
  private _dhcpUtilization = new DataBloxoneIpamAddressBlocksResultsDhcpUtilizationOutputReference(this, "dhcp_utilization");
  public get dhcpUtilization() {
    return this._dhcpUtilization;
  }
  public putDhcpUtilization(value: DataBloxoneIpamAddressBlocksResultsDhcpUtilization) {
    this._dhcpUtilization.internalValue = value;
  }
  public resetDhcpUtilization() {
    this._dhcpUtilization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpUtilizationInput() {
    return this._dhcpUtilization.internalValue;
  }

  // discovery_attrs - computed: true, optional: true, required: false
  private _discoveryAttrs?: { [key: string]: string }; 
  public get discoveryAttrs() {
    return this.getStringMapAttribute('discovery_attrs');
  }
  public set discoveryAttrs(value: { [key: string]: string }) {
    this._discoveryAttrs = value;
  }
  public resetDiscoveryAttrs() {
    this._discoveryAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryAttrsInput() {
    return this._discoveryAttrs;
  }

  // discovery_metadata - computed: true, optional: true, required: false
  private _discoveryMetadata?: { [key: string]: string }; 
  public get discoveryMetadata() {
    return this.getStringMapAttribute('discovery_metadata');
  }
  public set discoveryMetadata(value: { [key: string]: string }) {
    this._discoveryMetadata = value;
  }
  public resetDiscoveryMetadata() {
    this._discoveryMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryMetadataInput() {
    return this._discoveryMetadata;
  }

  // external_keys - computed: true, optional: true, required: false
  private _externalKeys?: { [key: string]: string }; 
  public get externalKeys() {
    return this.getStringMapAttribute('external_keys');
  }
  public set externalKeys(value: { [key: string]: string }) {
    this._externalKeys = value;
  }
  public resetExternalKeys() {
    this._externalKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKeysInput() {
    return this._externalKeys;
  }

  // federated_realms - computed: true, optional: true, required: false
  private _federatedRealms?: string[]; 
  public get federatedRealms() {
    return this.getListAttribute('federated_realms');
  }
  public set federatedRealms(value: string[]) {
    this._federatedRealms = value;
  }
  public resetFederatedRealms() {
    this._federatedRealms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedRealmsInput() {
    return this._federatedRealms;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename?: string; 
  public get headerOptionFilename() {
    return this.getStringAttribute('header_option_filename');
  }
  public set headerOptionFilename(value: string) {
    this._headerOptionFilename = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename;
  }

  // header_option_server_address - computed: true, optional: true, required: false
  private _headerOptionServerAddress?: string; 
  public get headerOptionServerAddress() {
    return this.getStringAttribute('header_option_server_address');
  }
  public set headerOptionServerAddress(value: string) {
    this._headerOptionServerAddress = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress;
  }

  // header_option_server_name - computed: true, optional: true, required: false
  private _headerOptionServerName?: string; 
  public get headerOptionServerName() {
    return this.getStringAttribute('header_option_server_name');
  }
  public set headerOptionServerName(value: string) {
    this._headerOptionServerName = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName;
  }

  // hostname_rewrite_char - computed: true, optional: true, required: false
  private _hostnameRewriteChar?: string; 
  public get hostnameRewriteChar() {
    return this.getStringAttribute('hostname_rewrite_char');
  }
  public set hostnameRewriteChar(value: string) {
    this._hostnameRewriteChar = value;
  }
  public resetHostnameRewriteChar() {
    this._hostnameRewriteChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteCharInput() {
    return this._hostnameRewriteChar;
  }

  // hostname_rewrite_enabled - computed: true, optional: true, required: false
  private _hostnameRewriteEnabled?: boolean | cdktf.IResolvable; 
  public get hostnameRewriteEnabled() {
    return this.getBooleanAttribute('hostname_rewrite_enabled');
  }
  public set hostnameRewriteEnabled(value: boolean | cdktf.IResolvable) {
    this._hostnameRewriteEnabled = value;
  }
  public resetHostnameRewriteEnabled() {
    this._hostnameRewriteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteEnabledInput() {
    return this._hostnameRewriteEnabled;
  }

  // hostname_rewrite_regex - computed: true, optional: true, required: false
  private _hostnameRewriteRegex?: string; 
  public get hostnameRewriteRegex() {
    return this.getStringAttribute('hostname_rewrite_regex');
  }
  public set hostnameRewriteRegex(value: string) {
    this._hostnameRewriteRegex = value;
  }
  public resetHostnameRewriteRegex() {
    this._hostnameRewriteRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteRegexInput() {
    return this._hostnameRewriteRegex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_parent - computed: true, optional: true, required: false
  private _inheritanceParent?: string; 
  public get inheritanceParent() {
    return this.getStringAttribute('inheritance_parent');
  }
  public set inheritanceParent(value: string) {
    this._inheritanceParent = value;
  }
  public resetInheritanceParent() {
    this._inheritanceParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceParentInput() {
    return this._inheritanceParent;
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DataBloxoneIpamAddressBlocksResultsInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DataBloxoneIpamAddressBlocksResultsInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next_available_id - computed: true, optional: true, required: false
  private _nextAvailableId?: string; 
  public get nextAvailableId() {
    return this.getStringAttribute('next_available_id');
  }
  public set nextAvailableId(value: string) {
    this._nextAvailableId = value;
  }
  public resetNextAvailableId() {
    this._nextAvailableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextAvailableIdInput() {
    return this._nextAvailableId;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // space - computed: true, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // threshold - computed: true, optional: false, required: false
  private _threshold = new DataBloxoneIpamAddressBlocksResultsThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getListAttribute('usage');
  }

  // utilization - computed: true, optional: false, required: false
  private _utilization = new DataBloxoneIpamAddressBlocksResultsUtilizationOutputReference(this, "utilization");
  public get utilization() {
    return this._utilization;
  }

  // utilization_v6 - computed: true, optional: false, required: false
  private _utilizationV6 = new DataBloxoneIpamAddressBlocksResultsUtilizationV6OutputReference(this, "utilization_v6");
  public get utilizationV6() {
    return this._utilizationV6;
  }
}

export class DataBloxoneIpamAddressBlocksResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneIpamAddressBlocksResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneIpamAddressBlocksResultsOutputReference {
    return new DataBloxoneIpamAddressBlocksResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks bloxone_ipam_address_blocks}
*/
export class DataBloxoneIpamAddressBlocks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_ipam_address_blocks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneIpamAddressBlocks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneIpamAddressBlocks to import
  * @param importFromId The id of the existing DataBloxoneIpamAddressBlocks that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneIpamAddressBlocks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_ipam_address_blocks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/ipam_address_blocks bloxone_ipam_address_blocks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneIpamAddressBlocksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneIpamAddressBlocksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_ipam_address_blocks',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.4',
        providerVersionConstraint: '1.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneIpamAddressBlocksResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
