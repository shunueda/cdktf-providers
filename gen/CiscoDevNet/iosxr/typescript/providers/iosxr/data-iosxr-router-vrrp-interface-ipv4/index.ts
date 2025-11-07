// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterVrrpInterfaceIpv4Config extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv4#device DataIosxrRouterVrrpInterfaceIpv4#device}
  */
  readonly device?: string;
  /**
  * VRRP interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv4#interface_name DataIosxrRouterVrrpInterfaceIpv4#interface_name}
  */
  readonly interfaceName: string;
  /**
  * VRRP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv4#version DataIosxrRouterVrrpInterfaceIpv4#version}
  */
  readonly version: number;
  /**
  * VRRP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv4#vrrp_id DataIosxrRouterVrrpInterfaceIpv4#vrrp_id}
  */
  readonly vrrpId: number;
}
export interface DataIosxrRouterVrrpInterfaceIpv4SecondaryAddresses {
}

export function dataIosxrRouterVrrpInterfaceIpv4SecondaryAddressesToTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterVrrpInterfaceIpv4SecondaryAddressesToHclTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterVrrpInterfaceIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterVrrpInterfaceIpv4SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterVrrpInterfaceIpv4SecondaryAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }
}

export class DataIosxrRouterVrrpInterfaceIpv4SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterVrrpInterfaceIpv4SecondaryAddressesOutputReference {
    return new DataIosxrRouterVrrpInterfaceIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterVrrpInterfaceIpv4TrackInterfaces {
}

export function dataIosxrRouterVrrpInterfaceIpv4TrackInterfacesToTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv4TrackInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterVrrpInterfaceIpv4TrackInterfacesToHclTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv4TrackInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterVrrpInterfaceIpv4TrackInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterVrrpInterfaceIpv4TrackInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterVrrpInterfaceIpv4TrackInterfaces | undefined) {
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

  // priority_decrement - computed: true, optional: false, required: false
  public get priorityDecrement() {
    return this.getNumberAttribute('priority_decrement');
  }
}

export class DataIosxrRouterVrrpInterfaceIpv4TrackInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterVrrpInterfaceIpv4TrackInterfacesOutputReference {
    return new DataIosxrRouterVrrpInterfaceIpv4TrackInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterVrrpInterfaceIpv4TrackObjects {
}

export function dataIosxrRouterVrrpInterfaceIpv4TrackObjectsToTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv4TrackObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterVrrpInterfaceIpv4TrackObjectsToHclTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv4TrackObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterVrrpInterfaceIpv4TrackObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterVrrpInterfaceIpv4TrackObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterVrrpInterfaceIpv4TrackObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // priority_decrement - computed: true, optional: false, required: false
  public get priorityDecrement() {
    return this.getNumberAttribute('priority_decrement');
  }
}

export class DataIosxrRouterVrrpInterfaceIpv4TrackObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterVrrpInterfaceIpv4TrackObjectsOutputReference {
    return new DataIosxrRouterVrrpInterfaceIpv4TrackObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv4 iosxr_router_vrrp_interface_ipv4}
*/
export class DataIosxrRouterVrrpInterfaceIpv4 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_vrrp_interface_ipv4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterVrrpInterfaceIpv4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterVrrpInterfaceIpv4 to import
  * @param importFromId The id of the existing DataIosxrRouterVrrpInterfaceIpv4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterVrrpInterfaceIpv4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_vrrp_interface_ipv4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv4 iosxr_router_vrrp_interface_ipv4} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterVrrpInterfaceIpv4Config
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterVrrpInterfaceIpv4Config) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_vrrp_interface_ipv4',
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
    this._interfaceName = config.interfaceName;
    this._version = config.version;
    this._vrrpId = config.vrrpId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_mode_disable - computed: true, optional: false, required: false
  public get acceptModeDisable() {
    return this.getBooleanAttribute('accept_mode_disable');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // bfd_fast_detect_peer_ipv4 - computed: true, optional: false, required: false
  public get bfdFastDetectPeerIpv4() {
    return this.getStringAttribute('bfd_fast_detect_peer_ipv4');
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

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // preempt_delay - computed: true, optional: false, required: false
  public get preemptDelay() {
    return this.getNumberAttribute('preempt_delay');
  }

  // preempt_disable - computed: true, optional: false, required: false
  public get preemptDisable() {
    return this.getBooleanAttribute('preempt_disable');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // secondary_addresses - computed: true, optional: false, required: false
  private _secondaryAddresses = new DataIosxrRouterVrrpInterfaceIpv4SecondaryAddressesList(this, "secondary_addresses", false);
  public get secondaryAddresses() {
    return this._secondaryAddresses;
  }

  // text_authentication - computed: true, optional: false, required: false
  public get textAuthentication() {
    return this.getStringAttribute('text_authentication');
  }

  // timer_advertisement_milliseconds - computed: true, optional: false, required: false
  public get timerAdvertisementMilliseconds() {
    return this.getNumberAttribute('timer_advertisement_milliseconds');
  }

  // timer_advertisement_seconds - computed: true, optional: false, required: false
  public get timerAdvertisementSeconds() {
    return this.getNumberAttribute('timer_advertisement_seconds');
  }

  // timer_force - computed: true, optional: false, required: false
  public get timerForce() {
    return this.getBooleanAttribute('timer_force');
  }

  // track_interfaces - computed: true, optional: false, required: false
  private _trackInterfaces = new DataIosxrRouterVrrpInterfaceIpv4TrackInterfacesList(this, "track_interfaces", false);
  public get trackInterfaces() {
    return this._trackInterfaces;
  }

  // track_objects - computed: true, optional: false, required: false
  private _trackObjects = new DataIosxrRouterVrrpInterfaceIpv4TrackObjectsList(this, "track_objects", false);
  public get trackObjects() {
    return this._trackObjects;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vrrp_id - computed: false, optional: false, required: true
  private _vrrpId?: number; 
  public get vrrpId() {
    return this.getNumberAttribute('vrrp_id');
  }
  public set vrrpId(value: number) {
    this._vrrpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpIdInput() {
    return this._vrrpId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      version: cdktf.numberToTerraform(this._version),
      vrrp_id: cdktf.numberToTerraform(this._vrrpId),
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
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrrp_id: {
        value: cdktf.numberToHclTerraform(this._vrrpId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
