// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticast6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#dynamic_sort_subtable RouterMulticast6#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#get_all_tables RouterMulticast6#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#id RouterMulticast6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#multicast_pmtu RouterMulticast6#multicast_pmtu}
  */
  readonly multicastPmtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#multicast_routing RouterMulticast6#multicast_routing}
  */
  readonly multicastRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#vdomparam RouterMulticast6#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#interface RouterMulticast6#interface}
  */
  readonly interface?: RouterMulticast6Interface[] | cdktf.IResolvable;
  /**
  * pim_sm_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#pim_sm_global RouterMulticast6#pim_sm_global}
  */
  readonly pimSmGlobal?: RouterMulticast6PimSmGlobal;
}
export interface RouterMulticast6Interface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#hello_holdtime RouterMulticast6#hello_holdtime}
  */
  readonly helloHoldtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#hello_interval RouterMulticast6#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#name RouterMulticast6#name}
  */
  readonly name?: string;
}

export function routerMulticast6InterfaceToTerraform(struct?: RouterMulticast6Interface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_holdtime: cdktf.numberToTerraform(struct!.helloHoldtime),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerMulticast6InterfaceToHclTerraform(struct?: RouterMulticast6Interface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.helloHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticast6InterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticast6Interface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloHoldtime = this._helloHoldtime;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticast6Interface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloHoldtime = undefined;
      this._helloInterval = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloHoldtime = value.helloHoldtime;
      this._helloInterval = value.helloInterval;
      this._name = value.name;
    }
  }

  // hello_holdtime - computed: false, optional: true, required: false
  private _helloHoldtime?: number; 
  public get helloHoldtime() {
    return this.getNumberAttribute('hello_holdtime');
  }
  public set helloHoldtime(value: number) {
    this._helloHoldtime = value;
  }
  public resetHelloHoldtime() {
    this._helloHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloHoldtimeInput() {
    return this._helloHoldtime;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // name - computed: false, optional: true, required: false
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
}

export class RouterMulticast6InterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterMulticast6Interface[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticast6InterfaceOutputReference {
    return new RouterMulticast6InterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterMulticast6PimSmGlobalRpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#id RouterMulticast6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#ip6_address RouterMulticast6#ip6_address}
  */
  readonly ip6Address?: string;
}

export function routerMulticast6PimSmGlobalRpAddressToTerraform(struct?: RouterMulticast6PimSmGlobalRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip6_address: cdktf.stringToTerraform(struct!.ip6Address),
  }
}


export function routerMulticast6PimSmGlobalRpAddressToHclTerraform(struct?: RouterMulticast6PimSmGlobalRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_address: {
      value: cdktf.stringToHclTerraform(struct!.ip6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticast6PimSmGlobalRpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticast6PimSmGlobalRpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticast6PimSmGlobalRpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip6Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip6Address = value.ip6Address;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip6_address - computed: true, optional: true, required: false
  private _ip6Address?: string; 
  public get ip6Address() {
    return this.getStringAttribute('ip6_address');
  }
  public set ip6Address(value: string) {
    this._ip6Address = value;
  }
  public resetIp6Address() {
    this._ip6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address;
  }
}

export class RouterMulticast6PimSmGlobalRpAddressList extends cdktf.ComplexList {
  public internalValue? : RouterMulticast6PimSmGlobalRpAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticast6PimSmGlobalRpAddressOutputReference {
    return new RouterMulticast6PimSmGlobalRpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterMulticast6PimSmGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#pim_use_sdwan RouterMulticast6#pim_use_sdwan}
  */
  readonly pimUseSdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#register_rate_limit RouterMulticast6#register_rate_limit}
  */
  readonly registerRateLimit?: number;
  /**
  * rp_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#rp_address RouterMulticast6#rp_address}
  */
  readonly rpAddress?: RouterMulticast6PimSmGlobalRpAddress[] | cdktf.IResolvable;
}

export function routerMulticast6PimSmGlobalToTerraform(struct?: RouterMulticast6PimSmGlobalOutputReference | RouterMulticast6PimSmGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pim_use_sdwan: cdktf.stringToTerraform(struct!.pimUseSdwan),
    register_rate_limit: cdktf.numberToTerraform(struct!.registerRateLimit),
    rp_address: cdktf.listMapper(routerMulticast6PimSmGlobalRpAddressToTerraform, true)(struct!.rpAddress),
  }
}


export function routerMulticast6PimSmGlobalToHclTerraform(struct?: RouterMulticast6PimSmGlobalOutputReference | RouterMulticast6PimSmGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pim_use_sdwan: {
      value: cdktf.stringToHclTerraform(struct!.pimUseSdwan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.registerRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rp_address: {
      value: cdktf.listMapperHcl(routerMulticast6PimSmGlobalRpAddressToHclTerraform, true)(struct!.rpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "RouterMulticast6PimSmGlobalRpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticast6PimSmGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterMulticast6PimSmGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pimUseSdwan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pimUseSdwan = this._pimUseSdwan;
    }
    if (this._registerRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerRateLimit = this._registerRateLimit;
    }
    if (this._rpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddress = this._rpAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticast6PimSmGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pimUseSdwan = undefined;
      this._registerRateLimit = undefined;
      this._rpAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pimUseSdwan = value.pimUseSdwan;
      this._registerRateLimit = value.registerRateLimit;
      this._rpAddress.internalValue = value.rpAddress;
    }
  }

  // pim_use_sdwan - computed: true, optional: true, required: false
  private _pimUseSdwan?: string; 
  public get pimUseSdwan() {
    return this.getStringAttribute('pim_use_sdwan');
  }
  public set pimUseSdwan(value: string) {
    this._pimUseSdwan = value;
  }
  public resetPimUseSdwan() {
    this._pimUseSdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimUseSdwanInput() {
    return this._pimUseSdwan;
  }

  // register_rate_limit - computed: false, optional: true, required: false
  private _registerRateLimit?: number; 
  public get registerRateLimit() {
    return this.getNumberAttribute('register_rate_limit');
  }
  public set registerRateLimit(value: number) {
    this._registerRateLimit = value;
  }
  public resetRegisterRateLimit() {
    this._registerRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerRateLimitInput() {
    return this._registerRateLimit;
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress = new RouterMulticast6PimSmGlobalRpAddressList(this, "rp_address", false);
  public get rpAddress() {
    return this._rpAddress;
  }
  public putRpAddress(value: RouterMulticast6PimSmGlobalRpAddress[] | cdktf.IResolvable) {
    this._rpAddress.internalValue = value;
  }
  public resetRpAddress() {
    this._rpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6 fortios_router_multicast6}
*/
export class RouterMulticast6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_multicast6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticast6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticast6 to import
  * @param importFromId The id of the existing RouterMulticast6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticast6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_multicast6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_multicast6 fortios_router_multicast6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticast6Config = {}
  */
  public constructor(scope: Construct, id: string, config: RouterMulticast6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_multicast6',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._multicastPmtu = config.multicastPmtu;
    this._multicastRouting = config.multicastRouting;
    this._vdomparam = config.vdomparam;
    this._interface.internalValue = config.interface;
    this._pimSmGlobal.internalValue = config.pimSmGlobal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // multicast_pmtu - computed: true, optional: true, required: false
  private _multicastPmtu?: string; 
  public get multicastPmtu() {
    return this.getStringAttribute('multicast_pmtu');
  }
  public set multicastPmtu(value: string) {
    this._multicastPmtu = value;
  }
  public resetMulticastPmtu() {
    this._multicastPmtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastPmtuInput() {
    return this._multicastPmtu;
  }

  // multicast_routing - computed: true, optional: true, required: false
  private _multicastRouting?: string; 
  public get multicastRouting() {
    return this.getStringAttribute('multicast_routing');
  }
  public set multicastRouting(value: string) {
    this._multicastRouting = value;
  }
  public resetMulticastRouting() {
    this._multicastRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRoutingInput() {
    return this._multicastRouting;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new RouterMulticast6InterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouterMulticast6Interface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // pim_sm_global - computed: false, optional: true, required: false
  private _pimSmGlobal = new RouterMulticast6PimSmGlobalOutputReference(this, "pim_sm_global");
  public get pimSmGlobal() {
    return this._pimSmGlobal;
  }
  public putPimSmGlobal(value: RouterMulticast6PimSmGlobal) {
    this._pimSmGlobal.internalValue = value;
  }
  public resetPimSmGlobal() {
    this._pimSmGlobal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimSmGlobalInput() {
    return this._pimSmGlobal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      multicast_pmtu: cdktf.stringToTerraform(this._multicastPmtu),
      multicast_routing: cdktf.stringToTerraform(this._multicastRouting),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      interface: cdktf.listMapper(routerMulticast6InterfaceToTerraform, true)(this._interface.internalValue),
      pim_sm_global: routerMulticast6PimSmGlobalToTerraform(this._pimSmGlobal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      multicast_pmtu: {
        value: cdktf.stringToHclTerraform(this._multicastPmtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_routing: {
        value: cdktf.stringToHclTerraform(this._multicastRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(routerMulticast6InterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticast6InterfaceList",
      },
      pim_sm_global: {
        value: routerMulticast6PimSmGlobalToHclTerraform(this._pimSmGlobal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticast6PimSmGlobalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
