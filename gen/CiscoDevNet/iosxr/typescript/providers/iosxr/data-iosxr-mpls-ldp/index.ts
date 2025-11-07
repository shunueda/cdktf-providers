// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/mpls_ldp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrMplsLdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/mpls_ldp#device DataIosxrMplsLdp#device}
  */
  readonly device?: string;
}
export interface DataIosxrMplsLdpAddressFamilies {
}

export function dataIosxrMplsLdpAddressFamiliesToTerraform(struct?: DataIosxrMplsLdpAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrMplsLdpAddressFamiliesToHclTerraform(struct?: DataIosxrMplsLdpAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrMplsLdpAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrMplsLdpAddressFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrMplsLdpAddressFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // af_name - computed: true, optional: false, required: false
  public get afName() {
    return this.getStringAttribute('af_name');
  }

  // label_local_allocate_for_access_list - computed: true, optional: false, required: false
  public get labelLocalAllocateForAccessList() {
    return this.getStringAttribute('label_local_allocate_for_access_list');
  }

  // label_local_allocate_for_host_routes - computed: true, optional: false, required: false
  public get labelLocalAllocateForHostRoutes() {
    return this.getBooleanAttribute('label_local_allocate_for_host_routes');
  }
}

export class DataIosxrMplsLdpAddressFamiliesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrMplsLdpAddressFamiliesOutputReference {
    return new DataIosxrMplsLdpAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrMplsLdpInterfaces {
}

export function dataIosxrMplsLdpInterfacesToTerraform(struct?: DataIosxrMplsLdpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrMplsLdpInterfacesToHclTerraform(struct?: DataIosxrMplsLdpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrMplsLdpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrMplsLdpInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrMplsLdpInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
}

export class DataIosxrMplsLdpInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrMplsLdpInterfacesOutputReference {
    return new DataIosxrMplsLdpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrMplsLdpMldpAddressFamilies {
}

export function dataIosxrMplsLdpMldpAddressFamiliesToTerraform(struct?: DataIosxrMplsLdpMldpAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrMplsLdpMldpAddressFamiliesToHclTerraform(struct?: DataIosxrMplsLdpMldpAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrMplsLdpMldpAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrMplsLdpMldpAddressFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrMplsLdpMldpAddressFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forwarding_recursive - computed: true, optional: false, required: false
  public get forwardingRecursive() {
    return this.getBooleanAttribute('forwarding_recursive');
  }

  // forwarding_recursive_route_policy - computed: true, optional: false, required: false
  public get forwardingRecursiveRoutePolicy() {
    return this.getStringAttribute('forwarding_recursive_route_policy');
  }

  // make_before_break_delay - computed: true, optional: false, required: false
  public get makeBeforeBreakDelay() {
    return this.getNumberAttribute('make_before_break_delay');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recursive_fec - computed: true, optional: false, required: false
  public get recursiveFec() {
    return this.getBooleanAttribute('recursive_fec');
  }
}

export class DataIosxrMplsLdpMldpAddressFamiliesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrMplsLdpMldpAddressFamiliesOutputReference {
    return new DataIosxrMplsLdpMldpAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/mpls_ldp iosxr_mpls_ldp}
*/
export class DataIosxrMplsLdp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_mpls_ldp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrMplsLdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrMplsLdp to import
  * @param importFromId The id of the existing DataIosxrMplsLdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/mpls_ldp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrMplsLdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_mpls_ldp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/mpls_ldp iosxr_mpls_ldp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrMplsLdpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrMplsLdpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_mpls_ldp',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_families - computed: true, optional: false, required: false
  private _addressFamilies = new DataIosxrMplsLdpAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }

  // capabilities_sac - computed: true, optional: false, required: false
  public get capabilitiesSac() {
    return this.getBooleanAttribute('capabilities_sac');
  }

  // capabilities_sac_fec128_disable - computed: true, optional: false, required: false
  public get capabilitiesSacFec128Disable() {
    return this.getBooleanAttribute('capabilities_sac_fec128_disable');
  }

  // capabilities_sac_fec129_disable - computed: true, optional: false, required: false
  public get capabilitiesSacFec129Disable() {
    return this.getBooleanAttribute('capabilities_sac_fec129_disable');
  }

  // capabilities_sac_ipv4_disable - computed: true, optional: false, required: false
  public get capabilitiesSacIpv4Disable() {
    return this.getBooleanAttribute('capabilities_sac_ipv4_disable');
  }

  // capabilities_sac_ipv6_disable - computed: true, optional: false, required: false
  public get capabilitiesSacIpv6Disable() {
    return this.getBooleanAttribute('capabilities_sac_ipv6_disable');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // igp_sync_delay_on_proc_restart - computed: true, optional: false, required: false
  public get igpSyncDelayOnProcRestart() {
    return this.getNumberAttribute('igp_sync_delay_on_proc_restart');
  }

  // igp_sync_delay_on_session_up - computed: true, optional: false, required: false
  public get igpSyncDelayOnSessionUp() {
    return this.getNumberAttribute('igp_sync_delay_on_session_up');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataIosxrMplsLdpInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // mldp - computed: true, optional: false, required: false
  public get mldp() {
    return this.getBooleanAttribute('mldp');
  }

  // mldp_address_families - computed: true, optional: false, required: false
  private _mldpAddressFamilies = new DataIosxrMplsLdpMldpAddressFamiliesList(this, "mldp_address_families", false);
  public get mldpAddressFamilies() {
    return this._mldpAddressFamilies;
  }

  // mldp_logging_notifications - computed: true, optional: false, required: false
  public get mldpLoggingNotifications() {
    return this.getBooleanAttribute('mldp_logging_notifications');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // session_protection - computed: true, optional: false, required: false
  public get sessionProtection() {
    return this.getBooleanAttribute('session_protection');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
