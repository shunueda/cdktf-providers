// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper#id DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper#oper DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper#oper}
  */
  readonly oper?: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOper;
}
export interface DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper#nat_pool_name DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper#nat_pool_name}
  */
  readonly natPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper#v4_address DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper#v4_address}
  */
  readonly v4Address?: string;
}

export function dataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStructToTerraform(struct?: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_pool_name: cdktf.stringToTerraform(struct!.natPoolName),
    v4_address: cdktf.stringToTerraform(struct!.v4Address),
  }
}


export function dataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStructToHclTerraform(struct?: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.natPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolName = this._natPoolName;
    }
    if (this._v4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Address = this._v4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natPoolName = undefined;
      this._v4Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._natPoolName = value.natPoolName;
      this._v4Address = value.v4Address;
    }
  }

  // nat_pool_name - computed: false, optional: true, required: false
  private _natPoolName?: string; 
  public get natPoolName() {
    return this.getStringAttribute('nat_pool_name');
  }
  public set natPoolName(value: string) {
    this._natPoolName = value;
  }
  public resetNatPoolName() {
    this._natPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameInput() {
    return this._natPoolName;
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

export class DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStructOutputReference {
    return new DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper#all DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper#all}
  */
  readonly all?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper#total_entries DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper#total_entries}
  */
  readonly totalEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper#v4_address DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper#v4_address}
  */
  readonly v4Address?: string;
  /**
  * ddos_disabled_by_bgp_entries_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper#ddos_disabled_by_bgp_entries_list DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper#ddos_disabled_by_bgp_entries_list}
  */
  readonly ddosDisabledByBgpEntriesList?: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperToTerraform(struct?: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperOutputReference | DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    total_entries: cdktf.numberToTerraform(struct!.totalEntries),
    v4_address: cdktf.stringToTerraform(struct!.v4Address),
    ddos_disabled_by_bgp_entries_list: cdktf.listMapper(dataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStructToTerraform, true)(struct!.ddosDisabledByBgpEntriesList),
  }
}


export function dataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperToHclTerraform(struct?: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperOutputReference | DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOper): any {
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
    total_entries: {
      value: cdktf.numberToHclTerraform(struct!.totalEntries),
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
    ddos_disabled_by_bgp_entries_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStructToHclTerraform, true)(struct!.ddosDisabledByBgpEntriesList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._totalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntries = this._totalEntries;
    }
    if (this._v4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Address = this._v4Address;
    }
    if (this._ddosDisabledByBgpEntriesList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosDisabledByBgpEntriesList = this._ddosDisabledByBgpEntriesList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._totalEntries = undefined;
      this._v4Address = undefined;
      this._ddosDisabledByBgpEntriesList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._totalEntries = value.totalEntries;
      this._v4Address = value.v4Address;
      this._ddosDisabledByBgpEntriesList.internalValue = value.ddosDisabledByBgpEntriesList;
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

  // ddos_disabled_by_bgp_entries_list - computed: false, optional: true, required: false
  private _ddosDisabledByBgpEntriesList = new DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStructList(this, "ddos_disabled_by_bgp_entries_list", false);
  public get ddosDisabledByBgpEntriesList() {
    return this._ddosDisabledByBgpEntriesList;
  }
  public putDdosDisabledByBgpEntriesList(value: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperDdosDisabledByBgpEntriesListStruct[] | cdktf.IResolvable) {
    this._ddosDisabledByBgpEntriesList.internalValue = value;
  }
  public resetDdosDisabledByBgpEntriesList() {
    this._ddosDisabledByBgpEntriesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosDisabledByBgpEntriesListInput() {
    return this._ddosDisabledByBgpEntriesList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper thunder_cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper}
*/
export class DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper to import
  * @param importFromId The id of the existing DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6DdosProtectionDisableNatIpByBgpOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper thunder_cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_ddos_protection_disable_nat_ip_by_bgp_oper',
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
  private _oper = new DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOper) {
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
      oper: dataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6DdosProtectionDisableNatIpByBgpOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
