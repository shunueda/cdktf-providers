// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticast6PimsmglobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal#device_name RouterMulticast6Pimsmglobal#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal#device_vdom RouterMulticast6Pimsmglobal#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal#dynamic_sort_subtable RouterMulticast6Pimsmglobal#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal#id RouterMulticast6Pimsmglobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal#pim_use_sdwan RouterMulticast6Pimsmglobal#pim_use_sdwan}
  */
  readonly pimUseSdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal#register_rate_limit RouterMulticast6Pimsmglobal#register_rate_limit}
  */
  readonly registerRateLimit?: number;
  /**
  * rp_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal#rp_address RouterMulticast6Pimsmglobal#rp_address}
  */
  readonly rpAddress?: RouterMulticast6PimsmglobalRpAddress[] | cdktf.IResolvable;
}
export interface RouterMulticast6PimsmglobalRpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal#id RouterMulticast6Pimsmglobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal#ip6_address RouterMulticast6Pimsmglobal#ip6_address}
  */
  readonly ip6Address?: string;
}

export function routerMulticast6PimsmglobalRpAddressToTerraform(struct?: RouterMulticast6PimsmglobalRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip6_address: cdktf.stringToTerraform(struct!.ip6Address),
  }
}


export function routerMulticast6PimsmglobalRpAddressToHclTerraform(struct?: RouterMulticast6PimsmglobalRpAddress | cdktf.IResolvable): any {
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

export class RouterMulticast6PimsmglobalRpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticast6PimsmglobalRpAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterMulticast6PimsmglobalRpAddress | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
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

export class RouterMulticast6PimsmglobalRpAddressList extends cdktf.ComplexList {
  public internalValue? : RouterMulticast6PimsmglobalRpAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticast6PimsmglobalRpAddressOutputReference {
    return new RouterMulticast6PimsmglobalRpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal fmgdevice_router_multicast6_pimsmglobal}
*/
export class RouterMulticast6Pimsmglobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_multicast6_pimsmglobal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticast6Pimsmglobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticast6Pimsmglobal to import
  * @param importFromId The id of the existing RouterMulticast6Pimsmglobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticast6Pimsmglobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_multicast6_pimsmglobal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast6_pimsmglobal fmgdevice_router_multicast6_pimsmglobal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticast6PimsmglobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterMulticast6PimsmglobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_multicast6_pimsmglobal',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._pimUseSdwan = config.pimUseSdwan;
    this._registerRateLimit = config.registerRateLimit;
    this._rpAddress.internalValue = config.rpAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

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
  private _rpAddress = new RouterMulticast6PimsmglobalRpAddressList(this, "rp_address", false);
  public get rpAddress() {
    return this._rpAddress;
  }
  public putRpAddress(value: RouterMulticast6PimsmglobalRpAddress[] | cdktf.IResolvable) {
    this._rpAddress.internalValue = value;
  }
  public resetRpAddress() {
    this._rpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      pim_use_sdwan: cdktf.stringToTerraform(this._pimUseSdwan),
      register_rate_limit: cdktf.numberToTerraform(this._registerRateLimit),
      rp_address: cdktf.listMapper(routerMulticast6PimsmglobalRpAddressToTerraform, true)(this._rpAddress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      pim_use_sdwan: {
        value: cdktf.stringToHclTerraform(this._pimUseSdwan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register_rate_limit: {
        value: cdktf.numberToHclTerraform(this._registerRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rp_address: {
        value: cdktf.listMapperHcl(routerMulticast6PimsmglobalRpAddressToHclTerraform, true)(this._rpAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticast6PimsmglobalRpAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
