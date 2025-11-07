// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6DdosProtectionIpEntriesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#id DataThunderCgnv6DdosProtectionIpEntriesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#oper DataThunderCgnv6DdosProtectionIpEntriesOper#oper}
  */
  readonly oper?: DataThunderCgnv6DdosProtectionIpEntriesOperOper;
}
export interface DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#expiration DataThunderCgnv6DdosProtectionIpEntriesOper#expiration}
  */
  readonly expiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#hardware_index DataThunderCgnv6DdosProtectionIpEntriesOper#hardware_index}
  */
  readonly hardwareIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#hints DataThunderCgnv6DdosProtectionIpEntriesOper#hints}
  */
  readonly hints?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#hw_l3_drop_pps DataThunderCgnv6DdosProtectionIpEntriesOper#hw_l3_drop_pps}
  */
  readonly hwL3DropPps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#hw_l4_drop_pps DataThunderCgnv6DdosProtectionIpEntriesOper#hw_l4_drop_pps}
  */
  readonly hwL4DropPps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#in_blacklist DataThunderCgnv6DdosProtectionIpEntriesOper#in_blacklist}
  */
  readonly inBlacklist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#in_hardware DataThunderCgnv6DdosProtectionIpEntriesOper#in_hardware}
  */
  readonly inHardware?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#l4_entries_count DataThunderCgnv6DdosProtectionIpEntriesOper#l4_entries_count}
  */
  readonly l4EntriesCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#sw_l3_drop_pps DataThunderCgnv6DdosProtectionIpEntriesOper#sw_l3_drop_pps}
  */
  readonly swL3DropPps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#sw_l4_drop_pps DataThunderCgnv6DdosProtectionIpEntriesOper#sw_l4_drop_pps}
  */
  readonly swL4DropPps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#sw_receive_pps DataThunderCgnv6DdosProtectionIpEntriesOper#sw_receive_pps}
  */
  readonly swReceivePps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#total_pps DataThunderCgnv6DdosProtectionIpEntriesOper#total_pps}
  */
  readonly totalPps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#v4_address DataThunderCgnv6DdosProtectionIpEntriesOper#v4_address}
  */
  readonly v4Address?: string;
}

export function dataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStructToTerraform(struct?: DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration: cdktf.numberToTerraform(struct!.expiration),
    hardware_index: cdktf.numberToTerraform(struct!.hardwareIndex),
    hints: cdktf.stringToTerraform(struct!.hints),
    hw_l3_drop_pps: cdktf.numberToTerraform(struct!.hwL3DropPps),
    hw_l4_drop_pps: cdktf.numberToTerraform(struct!.hwL4DropPps),
    in_blacklist: cdktf.numberToTerraform(struct!.inBlacklist),
    in_hardware: cdktf.numberToTerraform(struct!.inHardware),
    l4_entries_count: cdktf.numberToTerraform(struct!.l4EntriesCount),
    sw_l3_drop_pps: cdktf.numberToTerraform(struct!.swL3DropPps),
    sw_l4_drop_pps: cdktf.numberToTerraform(struct!.swL4DropPps),
    sw_receive_pps: cdktf.numberToTerraform(struct!.swReceivePps),
    total_pps: cdktf.numberToTerraform(struct!.totalPps),
    v4_address: cdktf.stringToTerraform(struct!.v4Address),
  }
}


export function dataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStructToHclTerraform(struct?: DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration: {
      value: cdktf.numberToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hardware_index: {
      value: cdktf.numberToHclTerraform(struct!.hardwareIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hints: {
      value: cdktf.stringToHclTerraform(struct!.hints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hw_l3_drop_pps: {
      value: cdktf.numberToHclTerraform(struct!.hwL3DropPps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_l4_drop_pps: {
      value: cdktf.numberToHclTerraform(struct!.hwL4DropPps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.inBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_hardware: {
      value: cdktf.numberToHclTerraform(struct!.inHardware),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entries_count: {
      value: cdktf.numberToHclTerraform(struct!.l4EntriesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sw_l3_drop_pps: {
      value: cdktf.numberToHclTerraform(struct!.swL3DropPps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sw_l4_drop_pps: {
      value: cdktf.numberToHclTerraform(struct!.swL4DropPps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sw_receive_pps: {
      value: cdktf.numberToHclTerraform(struct!.swReceivePps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_pps: {
      value: cdktf.numberToHclTerraform(struct!.totalPps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v4_address: {
      value: cdktf.stringToHclTerraform(struct!.v4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._hardwareIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareIndex = this._hardwareIndex;
    }
    if (this._hints !== undefined) {
      hasAnyValues = true;
      internalValueResult.hints = this._hints;
    }
    if (this._hwL3DropPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwL3DropPps = this._hwL3DropPps;
    }
    if (this._hwL4DropPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwL4DropPps = this._hwL4DropPps;
    }
    if (this._inBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.inBlacklist = this._inBlacklist;
    }
    if (this._inHardware !== undefined) {
      hasAnyValues = true;
      internalValueResult.inHardware = this._inHardware;
    }
    if (this._l4EntriesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntriesCount = this._l4EntriesCount;
    }
    if (this._swL3DropPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.swL3DropPps = this._swL3DropPps;
    }
    if (this._swL4DropPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.swL4DropPps = this._swL4DropPps;
    }
    if (this._swReceivePps !== undefined) {
      hasAnyValues = true;
      internalValueResult.swReceivePps = this._swReceivePps;
    }
    if (this._totalPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPps = this._totalPps;
    }
    if (this._v4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Address = this._v4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiration = undefined;
      this._hardwareIndex = undefined;
      this._hints = undefined;
      this._hwL3DropPps = undefined;
      this._hwL4DropPps = undefined;
      this._inBlacklist = undefined;
      this._inHardware = undefined;
      this._l4EntriesCount = undefined;
      this._swL3DropPps = undefined;
      this._swL4DropPps = undefined;
      this._swReceivePps = undefined;
      this._totalPps = undefined;
      this._v4Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiration = value.expiration;
      this._hardwareIndex = value.hardwareIndex;
      this._hints = value.hints;
      this._hwL3DropPps = value.hwL3DropPps;
      this._hwL4DropPps = value.hwL4DropPps;
      this._inBlacklist = value.inBlacklist;
      this._inHardware = value.inHardware;
      this._l4EntriesCount = value.l4EntriesCount;
      this._swL3DropPps = value.swL3DropPps;
      this._swL4DropPps = value.swL4DropPps;
      this._swReceivePps = value.swReceivePps;
      this._totalPps = value.totalPps;
      this._v4Address = value.v4Address;
    }
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // hardware_index - computed: false, optional: true, required: false
  private _hardwareIndex?: number; 
  public get hardwareIndex() {
    return this.getNumberAttribute('hardware_index');
  }
  public set hardwareIndex(value: number) {
    this._hardwareIndex = value;
  }
  public resetHardwareIndex() {
    this._hardwareIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareIndexInput() {
    return this._hardwareIndex;
  }

  // hints - computed: false, optional: true, required: false
  private _hints?: string; 
  public get hints() {
    return this.getStringAttribute('hints');
  }
  public set hints(value: string) {
    this._hints = value;
  }
  public resetHints() {
    this._hints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hintsInput() {
    return this._hints;
  }

  // hw_l3_drop_pps - computed: false, optional: true, required: false
  private _hwL3DropPps?: number; 
  public get hwL3DropPps() {
    return this.getNumberAttribute('hw_l3_drop_pps');
  }
  public set hwL3DropPps(value: number) {
    this._hwL3DropPps = value;
  }
  public resetHwL3DropPps() {
    this._hwL3DropPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwL3DropPpsInput() {
    return this._hwL3DropPps;
  }

  // hw_l4_drop_pps - computed: false, optional: true, required: false
  private _hwL4DropPps?: number; 
  public get hwL4DropPps() {
    return this.getNumberAttribute('hw_l4_drop_pps');
  }
  public set hwL4DropPps(value: number) {
    this._hwL4DropPps = value;
  }
  public resetHwL4DropPps() {
    this._hwL4DropPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwL4DropPpsInput() {
    return this._hwL4DropPps;
  }

  // in_blacklist - computed: false, optional: true, required: false
  private _inBlacklist?: number; 
  public get inBlacklist() {
    return this.getNumberAttribute('in_blacklist');
  }
  public set inBlacklist(value: number) {
    this._inBlacklist = value;
  }
  public resetInBlacklist() {
    this._inBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBlacklistInput() {
    return this._inBlacklist;
  }

  // in_hardware - computed: false, optional: true, required: false
  private _inHardware?: number; 
  public get inHardware() {
    return this.getNumberAttribute('in_hardware');
  }
  public set inHardware(value: number) {
    this._inHardware = value;
  }
  public resetInHardware() {
    this._inHardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inHardwareInput() {
    return this._inHardware;
  }

  // l4_entries_count - computed: false, optional: true, required: false
  private _l4EntriesCount?: number; 
  public get l4EntriesCount() {
    return this.getNumberAttribute('l4_entries_count');
  }
  public set l4EntriesCount(value: number) {
    this._l4EntriesCount = value;
  }
  public resetL4EntriesCount() {
    this._l4EntriesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntriesCountInput() {
    return this._l4EntriesCount;
  }

  // sw_l3_drop_pps - computed: false, optional: true, required: false
  private _swL3DropPps?: number; 
  public get swL3DropPps() {
    return this.getNumberAttribute('sw_l3_drop_pps');
  }
  public set swL3DropPps(value: number) {
    this._swL3DropPps = value;
  }
  public resetSwL3DropPps() {
    this._swL3DropPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swL3DropPpsInput() {
    return this._swL3DropPps;
  }

  // sw_l4_drop_pps - computed: false, optional: true, required: false
  private _swL4DropPps?: number; 
  public get swL4DropPps() {
    return this.getNumberAttribute('sw_l4_drop_pps');
  }
  public set swL4DropPps(value: number) {
    this._swL4DropPps = value;
  }
  public resetSwL4DropPps() {
    this._swL4DropPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swL4DropPpsInput() {
    return this._swL4DropPps;
  }

  // sw_receive_pps - computed: false, optional: true, required: false
  private _swReceivePps?: number; 
  public get swReceivePps() {
    return this.getNumberAttribute('sw_receive_pps');
  }
  public set swReceivePps(value: number) {
    this._swReceivePps = value;
  }
  public resetSwReceivePps() {
    this._swReceivePps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swReceivePpsInput() {
    return this._swReceivePps;
  }

  // total_pps - computed: false, optional: true, required: false
  private _totalPps?: number; 
  public get totalPps() {
    return this.getNumberAttribute('total_pps');
  }
  public set totalPps(value: number) {
    this._totalPps = value;
  }
  public resetTotalPps() {
    this._totalPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPpsInput() {
    return this._totalPps;
  }

  // v4_address - computed: false, optional: true, required: false
  private _v4Address?: string; 
  public get v4Address() {
    return this.getStringAttribute('v4_address');
  }
  public set v4Address(value: string) {
    this._v4Address = value;
  }
  public resetV4Address() {
    this._v4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4AddressInput() {
    return this._v4Address;
  }
}

export class DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStructOutputReference {
    return new DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6DdosProtectionIpEntriesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#all DataThunderCgnv6DdosProtectionIpEntriesOper#all}
  */
  readonly all?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#nat_pool DataThunderCgnv6DdosProtectionIpEntriesOper#nat_pool}
  */
  readonly natPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#total_entries DataThunderCgnv6DdosProtectionIpEntriesOper#total_entries}
  */
  readonly totalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#v4_netmask DataThunderCgnv6DdosProtectionIpEntriesOper#v4_netmask}
  */
  readonly v4Netmask?: string;
  /**
  * ddos_ip_entries_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#ddos_ip_entries_list DataThunderCgnv6DdosProtectionIpEntriesOper#ddos_ip_entries_list}
  */
  readonly ddosIpEntriesList?: DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6DdosProtectionIpEntriesOperOperToTerraform(struct?: DataThunderCgnv6DdosProtectionIpEntriesOperOperOutputReference | DataThunderCgnv6DdosProtectionIpEntriesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    total_entries: cdktf.numberToTerraform(struct!.totalEntries),
    v4_netmask: cdktf.stringToTerraform(struct!.v4Netmask),
    ddos_ip_entries_list: cdktf.listMapper(dataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStructToTerraform, true)(struct!.ddosIpEntriesList),
  }
}


export function dataThunderCgnv6DdosProtectionIpEntriesOperOperToHclTerraform(struct?: DataThunderCgnv6DdosProtectionIpEntriesOperOperOutputReference | DataThunderCgnv6DdosProtectionIpEntriesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_entries: {
      value: cdktf.numberToHclTerraform(struct!.totalEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.v4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddos_ip_entries_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStructToHclTerraform, true)(struct!.ddosIpEntriesList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6DdosProtectionIpEntriesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6DdosProtectionIpEntriesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._totalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntries = this._totalEntries;
    }
    if (this._v4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Netmask = this._v4Netmask;
    }
    if (this._ddosIpEntriesList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosIpEntriesList = this._ddosIpEntriesList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6DdosProtectionIpEntriesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._natPool = undefined;
      this._totalEntries = undefined;
      this._v4Netmask = undefined;
      this._ddosIpEntriesList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._natPool = value.natPool;
      this._totalEntries = value.totalEntries;
      this._v4Netmask = value.v4Netmask;
      this._ddosIpEntriesList.internalValue = value.ddosIpEntriesList;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // total_entries - computed: false, optional: true, required: false
  private _totalEntries?: number; 
  public get totalEntries() {
    return this.getNumberAttribute('total_entries');
  }
  public set totalEntries(value: number) {
    this._totalEntries = value;
  }
  public resetTotalEntries() {
    this._totalEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesInput() {
    return this._totalEntries;
  }

  // v4_netmask - computed: false, optional: true, required: false
  private _v4Netmask?: string; 
  public get v4Netmask() {
    return this.getStringAttribute('v4_netmask');
  }
  public set v4Netmask(value: string) {
    this._v4Netmask = value;
  }
  public resetV4Netmask() {
    this._v4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4NetmaskInput() {
    return this._v4Netmask;
  }

  // ddos_ip_entries_list - computed: false, optional: true, required: false
  private _ddosIpEntriesList = new DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStructList(this, "ddos_ip_entries_list", false);
  public get ddosIpEntriesList() {
    return this._ddosIpEntriesList;
  }
  public putDdosIpEntriesList(value: DataThunderCgnv6DdosProtectionIpEntriesOperOperDdosIpEntriesListStruct[] | cdktf.IResolvable) {
    this._ddosIpEntriesList.internalValue = value;
  }
  public resetDdosIpEntriesList() {
    this._ddosIpEntriesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosIpEntriesListInput() {
    return this._ddosIpEntriesList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper thunder_cgnv6_ddos_protection_ip_entries_oper}
*/
export class DataThunderCgnv6DdosProtectionIpEntriesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_ddos_protection_ip_entries_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6DdosProtectionIpEntriesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6DdosProtectionIpEntriesOper to import
  * @param importFromId The id of the existing DataThunderCgnv6DdosProtectionIpEntriesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6DdosProtectionIpEntriesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_ddos_protection_ip_entries_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_ddos_protection_ip_entries_oper thunder_cgnv6_ddos_protection_ip_entries_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6DdosProtectionIpEntriesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6DdosProtectionIpEntriesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_ddos_protection_ip_entries_oper',
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderCgnv6DdosProtectionIpEntriesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6DdosProtectionIpEntriesOperOper) {
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
      oper: dataThunderCgnv6DdosProtectionIpEntriesOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderCgnv6DdosProtectionIpEntriesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6DdosProtectionIpEntriesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
