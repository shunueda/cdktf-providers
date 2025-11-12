// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticastPimsmglobalvrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#bsr_allow_quick_refresh RouterMulticastPimsmglobalvrf#bsr_allow_quick_refresh}
  */
  readonly bsrAllowQuickRefresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#bsr_candidate RouterMulticastPimsmglobalvrf#bsr_candidate}
  */
  readonly bsrCandidate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#bsr_hash RouterMulticastPimsmglobalvrf#bsr_hash}
  */
  readonly bsrHash?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#bsr_interface RouterMulticastPimsmglobalvrf#bsr_interface}
  */
  readonly bsrInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#bsr_priority RouterMulticastPimsmglobalvrf#bsr_priority}
  */
  readonly bsrPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#cisco_crp_prefix RouterMulticastPimsmglobalvrf#cisco_crp_prefix}
  */
  readonly ciscoCrpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#device_name RouterMulticastPimsmglobalvrf#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#device_vdom RouterMulticastPimsmglobalvrf#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#dynamic_sort_subtable RouterMulticastPimsmglobalvrf#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#id RouterMulticastPimsmglobalvrf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#vrf RouterMulticastPimsmglobalvrf#vrf}
  */
  readonly vrf?: number;
  /**
  * rp_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#rp_address RouterMulticastPimsmglobalvrf#rp_address}
  */
  readonly rpAddress?: RouterMulticastPimsmglobalvrfRpAddress[] | cdktf.IResolvable;
}
export interface RouterMulticastPimsmglobalvrfRpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#group RouterMulticastPimsmglobalvrf#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#id RouterMulticastPimsmglobalvrf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#ip_address RouterMulticastPimsmglobalvrf#ip_address}
  */
  readonly ipAddress?: string;
}

export function routerMulticastPimsmglobalvrfRpAddressToTerraform(struct?: RouterMulticastPimsmglobalvrfRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    id: cdktf.numberToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function routerMulticastPimsmglobalvrfRpAddressToHclTerraform(struct?: RouterMulticastPimsmglobalvrfRpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastPimsmglobalvrfRpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticastPimsmglobalvrfRpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastPimsmglobalvrfRpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return cdktf.Fn.tolist(this.getListAttribute('group'));
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class RouterMulticastPimsmglobalvrfRpAddressList extends cdktf.ComplexList {
  public internalValue? : RouterMulticastPimsmglobalvrfRpAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticastPimsmglobalvrfRpAddressOutputReference {
    return new RouterMulticastPimsmglobalvrfRpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf fmgdevice_router_multicast_pimsmglobalvrf}
*/
export class RouterMulticastPimsmglobalvrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_multicast_pimsmglobalvrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticastPimsmglobalvrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticastPimsmglobalvrf to import
  * @param importFromId The id of the existing RouterMulticastPimsmglobalvrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticastPimsmglobalvrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_multicast_pimsmglobalvrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf fmgdevice_router_multicast_pimsmglobalvrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticastPimsmglobalvrfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterMulticastPimsmglobalvrfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_multicast_pimsmglobalvrf',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bsrAllowQuickRefresh = config.bsrAllowQuickRefresh;
    this._bsrCandidate = config.bsrCandidate;
    this._bsrHash = config.bsrHash;
    this._bsrInterface = config.bsrInterface;
    this._bsrPriority = config.bsrPriority;
    this._ciscoCrpPrefix = config.ciscoCrpPrefix;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._vrf = config.vrf;
    this._rpAddress.internalValue = config.rpAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bsr_allow_quick_refresh - computed: true, optional: true, required: false
  private _bsrAllowQuickRefresh?: string; 
  public get bsrAllowQuickRefresh() {
    return this.getStringAttribute('bsr_allow_quick_refresh');
  }
  public set bsrAllowQuickRefresh(value: string) {
    this._bsrAllowQuickRefresh = value;
  }
  public resetBsrAllowQuickRefresh() {
    this._bsrAllowQuickRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrAllowQuickRefreshInput() {
    return this._bsrAllowQuickRefresh;
  }

  // bsr_candidate - computed: true, optional: true, required: false
  private _bsrCandidate?: string; 
  public get bsrCandidate() {
    return this.getStringAttribute('bsr_candidate');
  }
  public set bsrCandidate(value: string) {
    this._bsrCandidate = value;
  }
  public resetBsrCandidate() {
    this._bsrCandidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateInput() {
    return this._bsrCandidate;
  }

  // bsr_hash - computed: true, optional: true, required: false
  private _bsrHash?: number; 
  public get bsrHash() {
    return this.getNumberAttribute('bsr_hash');
  }
  public set bsrHash(value: number) {
    this._bsrHash = value;
  }
  public resetBsrHash() {
    this._bsrHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrHashInput() {
    return this._bsrHash;
  }

  // bsr_interface - computed: true, optional: true, required: false
  private _bsrInterface?: string[]; 
  public get bsrInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('bsr_interface'));
  }
  public set bsrInterface(value: string[]) {
    this._bsrInterface = value;
  }
  public resetBsrInterface() {
    this._bsrInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrInterfaceInput() {
    return this._bsrInterface;
  }

  // bsr_priority - computed: false, optional: true, required: false
  private _bsrPriority?: number; 
  public get bsrPriority() {
    return this.getNumberAttribute('bsr_priority');
  }
  public set bsrPriority(value: number) {
    this._bsrPriority = value;
  }
  public resetBsrPriority() {
    this._bsrPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrPriorityInput() {
    return this._bsrPriority;
  }

  // cisco_crp_prefix - computed: true, optional: true, required: false
  private _ciscoCrpPrefix?: string; 
  public get ciscoCrpPrefix() {
    return this.getStringAttribute('cisco_crp_prefix');
  }
  public set ciscoCrpPrefix(value: string) {
    this._ciscoCrpPrefix = value;
  }
  public resetCiscoCrpPrefix() {
    this._ciscoCrpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoCrpPrefixInput() {
    return this._ciscoCrpPrefix;
  }

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

  // vrf - computed: false, optional: true, required: false
  private _vrf?: number; 
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }
  public set vrf(value: number) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress = new RouterMulticastPimsmglobalvrfRpAddressList(this, "rp_address", false);
  public get rpAddress() {
    return this._rpAddress;
  }
  public putRpAddress(value: RouterMulticastPimsmglobalvrfRpAddress[] | cdktf.IResolvable) {
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
      bsr_allow_quick_refresh: cdktf.stringToTerraform(this._bsrAllowQuickRefresh),
      bsr_candidate: cdktf.stringToTerraform(this._bsrCandidate),
      bsr_hash: cdktf.numberToTerraform(this._bsrHash),
      bsr_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bsrInterface),
      bsr_priority: cdktf.numberToTerraform(this._bsrPriority),
      cisco_crp_prefix: cdktf.stringToTerraform(this._ciscoCrpPrefix),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      vrf: cdktf.numberToTerraform(this._vrf),
      rp_address: cdktf.listMapper(routerMulticastPimsmglobalvrfRpAddressToTerraform, true)(this._rpAddress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bsr_allow_quick_refresh: {
        value: cdktf.stringToHclTerraform(this._bsrAllowQuickRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bsr_candidate: {
        value: cdktf.stringToHclTerraform(this._bsrCandidate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bsr_hash: {
        value: cdktf.numberToHclTerraform(this._bsrHash),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bsr_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bsrInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bsr_priority: {
        value: cdktf.numberToHclTerraform(this._bsrPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cisco_crp_prefix: {
        value: cdktf.stringToHclTerraform(this._ciscoCrpPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      vrf: {
        value: cdktf.numberToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rp_address: {
        value: cdktf.listMapperHcl(routerMulticastPimsmglobalvrfRpAddressToHclTerraform, true)(this._rpAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticastPimsmglobalvrfRpAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
