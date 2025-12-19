// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6DdosProtectionL4EntriesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#id DataThunderCgnv6DdosProtectionL4EntriesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#oper DataThunderCgnv6DdosProtectionL4EntriesOper#oper}
  */
  readonly oper?: DataThunderCgnv6DdosProtectionL4EntriesOperOper;
}
export interface DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#expiration DataThunderCgnv6DdosProtectionL4EntriesOper#expiration}
  */
  readonly expiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#hardware_index DataThunderCgnv6DdosProtectionL4EntriesOper#hardware_index}
  */
  readonly hardwareIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#hw_add_count DataThunderCgnv6DdosProtectionL4EntriesOper#hw_add_count}
  */
  readonly hwAddCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#hw_age DataThunderCgnv6DdosProtectionL4EntriesOper#hw_age}
  */
  readonly hwAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#in_hardware DataThunderCgnv6DdosProtectionL4EntriesOper#in_hardware}
  */
  readonly inHardware?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#is_deleted DataThunderCgnv6DdosProtectionL4EntriesOper#is_deleted}
  */
  readonly isDeleted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#l4_protocol DataThunderCgnv6DdosProtectionL4EntriesOper#l4_protocol}
  */
  readonly l4Protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#port DataThunderCgnv6DdosProtectionL4EntriesOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#pps DataThunderCgnv6DdosProtectionL4EntriesOper#pps}
  */
  readonly pps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#v4_address DataThunderCgnv6DdosProtectionL4EntriesOper#v4_address}
  */
  readonly v4Address?: string;
}

export function dataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStructToTerraform(struct?: DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration: cdktf.numberToTerraform(struct!.expiration),
    hardware_index: cdktf.numberToTerraform(struct!.hardwareIndex),
    hw_add_count: cdktf.numberToTerraform(struct!.hwAddCount),
    hw_age: cdktf.numberToTerraform(struct!.hwAge),
    in_hardware: cdktf.numberToTerraform(struct!.inHardware),
    is_deleted: cdktf.numberToTerraform(struct!.isDeleted),
    l4_protocol: cdktf.stringToTerraform(struct!.l4Protocol),
    port: cdktf.numberToTerraform(struct!.port),
    pps: cdktf.numberToTerraform(struct!.pps),
    v4_address: cdktf.stringToTerraform(struct!.v4Address),
  }
}


export function dataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStructToHclTerraform(struct?: DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStruct | cdktf.IResolvable): any {
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
    hw_add_count: {
      value: cdktf.numberToHclTerraform(struct!.hwAddCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_age: {
      value: cdktf.numberToHclTerraform(struct!.hwAge),
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
    is_deleted: {
      value: cdktf.numberToHclTerraform(struct!.isDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_protocol: {
      value: cdktf.stringToHclTerraform(struct!.l4Protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pps: {
      value: cdktf.numberToHclTerraform(struct!.pps),
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

export class DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStruct | cdktf.IResolvable | undefined {
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
    if (this._hwAddCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwAddCount = this._hwAddCount;
    }
    if (this._hwAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwAge = this._hwAge;
    }
    if (this._inHardware !== undefined) {
      hasAnyValues = true;
      internalValueResult.inHardware = this._inHardware;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._l4Protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Protocol = this._l4Protocol;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._pps !== undefined) {
      hasAnyValues = true;
      internalValueResult.pps = this._pps;
    }
    if (this._v4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Address = this._v4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiration = undefined;
      this._hardwareIndex = undefined;
      this._hwAddCount = undefined;
      this._hwAge = undefined;
      this._inHardware = undefined;
      this._isDeleted = undefined;
      this._l4Protocol = undefined;
      this._port = undefined;
      this._pps = undefined;
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
      this._hwAddCount = value.hwAddCount;
      this._hwAge = value.hwAge;
      this._inHardware = value.inHardware;
      this._isDeleted = value.isDeleted;
      this._l4Protocol = value.l4Protocol;
      this._port = value.port;
      this._pps = value.pps;
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

  // hw_add_count - computed: false, optional: true, required: false
  private _hwAddCount?: number; 
  public get hwAddCount() {
    return this.getNumberAttribute('hw_add_count');
  }
  public set hwAddCount(value: number) {
    this._hwAddCount = value;
  }
  public resetHwAddCount() {
    this._hwAddCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwAddCountInput() {
    return this._hwAddCount;
  }

  // hw_age - computed: false, optional: true, required: false
  private _hwAge?: number; 
  public get hwAge() {
    return this.getNumberAttribute('hw_age');
  }
  public set hwAge(value: number) {
    this._hwAge = value;
  }
  public resetHwAge() {
    this._hwAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwAgeInput() {
    return this._hwAge;
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

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: number; 
  public get isDeleted() {
    return this.getNumberAttribute('is_deleted');
  }
  public set isDeleted(value: number) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // l4_protocol - computed: false, optional: true, required: false
  private _l4Protocol?: string; 
  public get l4Protocol() {
    return this.getStringAttribute('l4_protocol');
  }
  public set l4Protocol(value: string) {
    this._l4Protocol = value;
  }
  public resetL4Protocol() {
    this._l4Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProtocolInput() {
    return this._l4Protocol;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // pps - computed: false, optional: true, required: false
  private _pps?: number; 
  public get pps() {
    return this.getNumberAttribute('pps');
  }
  public set pps(value: number) {
    this._pps = value;
  }
  public resetPps() {
    this._pps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppsInput() {
    return this._pps;
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

export class DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStructOutputReference {
    return new DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6DdosProtectionL4EntriesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#all DataThunderCgnv6DdosProtectionL4EntriesOper#all}
  */
  readonly all?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#nat_pool DataThunderCgnv6DdosProtectionL4EntriesOper#nat_pool}
  */
  readonly natPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#not_in_hardware DataThunderCgnv6DdosProtectionL4EntriesOper#not_in_hardware}
  */
  readonly notInHardware?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#total_entries DataThunderCgnv6DdosProtectionL4EntriesOper#total_entries}
  */
  readonly totalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#v4_netmask DataThunderCgnv6DdosProtectionL4EntriesOper#v4_netmask}
  */
  readonly v4Netmask?: string;
  /**
  * ddos_l4_entries_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#ddos_l4_entries_list DataThunderCgnv6DdosProtectionL4EntriesOper#ddos_l4_entries_list}
  */
  readonly ddosL4EntriesList?: DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6DdosProtectionL4EntriesOperOperToTerraform(struct?: DataThunderCgnv6DdosProtectionL4EntriesOperOperOutputReference | DataThunderCgnv6DdosProtectionL4EntriesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    not_in_hardware: cdktf.numberToTerraform(struct!.notInHardware),
    total_entries: cdktf.numberToTerraform(struct!.totalEntries),
    v4_netmask: cdktf.stringToTerraform(struct!.v4Netmask),
    ddos_l4_entries_list: cdktf.listMapper(dataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStructToTerraform, true)(struct!.ddosL4EntriesList),
  }
}


export function dataThunderCgnv6DdosProtectionL4EntriesOperOperToHclTerraform(struct?: DataThunderCgnv6DdosProtectionL4EntriesOperOperOutputReference | DataThunderCgnv6DdosProtectionL4EntriesOperOper): any {
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
    not_in_hardware: {
      value: cdktf.numberToHclTerraform(struct!.notInHardware),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    ddos_l4_entries_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStructToHclTerraform, true)(struct!.ddosL4EntriesList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6DdosProtectionL4EntriesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6DdosProtectionL4EntriesOperOper | undefined {
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
    if (this._notInHardware !== undefined) {
      hasAnyValues = true;
      internalValueResult.notInHardware = this._notInHardware;
    }
    if (this._totalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntries = this._totalEntries;
    }
    if (this._v4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Netmask = this._v4Netmask;
    }
    if (this._ddosL4EntriesList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosL4EntriesList = this._ddosL4EntriesList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6DdosProtectionL4EntriesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._natPool = undefined;
      this._notInHardware = undefined;
      this._totalEntries = undefined;
      this._v4Netmask = undefined;
      this._ddosL4EntriesList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._natPool = value.natPool;
      this._notInHardware = value.notInHardware;
      this._totalEntries = value.totalEntries;
      this._v4Netmask = value.v4Netmask;
      this._ddosL4EntriesList.internalValue = value.ddosL4EntriesList;
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

  // not_in_hardware - computed: false, optional: true, required: false
  private _notInHardware?: number; 
  public get notInHardware() {
    return this.getNumberAttribute('not_in_hardware');
  }
  public set notInHardware(value: number) {
    this._notInHardware = value;
  }
  public resetNotInHardware() {
    this._notInHardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInHardwareInput() {
    return this._notInHardware;
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

  // ddos_l4_entries_list - computed: false, optional: true, required: false
  private _ddosL4EntriesList = new DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStructList(this, "ddos_l4_entries_list", false);
  public get ddosL4EntriesList() {
    return this._ddosL4EntriesList;
  }
  public putDdosL4EntriesList(value: DataThunderCgnv6DdosProtectionL4EntriesOperOperDdosL4EntriesListStruct[] | cdktf.IResolvable) {
    this._ddosL4EntriesList.internalValue = value;
  }
  public resetDdosL4EntriesList() {
    this._ddosL4EntriesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosL4EntriesListInput() {
    return this._ddosL4EntriesList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper thunder_cgnv6_ddos_protection_l4_entries_oper}
*/
export class DataThunderCgnv6DdosProtectionL4EntriesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_ddos_protection_l4_entries_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6DdosProtectionL4EntriesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6DdosProtectionL4EntriesOper to import
  * @param importFromId The id of the existing DataThunderCgnv6DdosProtectionL4EntriesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6DdosProtectionL4EntriesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_ddos_protection_l4_entries_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_l4_entries_oper thunder_cgnv6_ddos_protection_l4_entries_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6DdosProtectionL4EntriesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6DdosProtectionL4EntriesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_ddos_protection_l4_entries_oper',
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
  private _oper = new DataThunderCgnv6DdosProtectionL4EntriesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6DdosProtectionL4EntriesOperOper) {
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
      oper: dataThunderCgnv6DdosProtectionL4EntriesOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6DdosProtectionL4EntriesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6DdosProtectionL4EntriesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
