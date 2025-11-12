// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterVrrpInterfaceIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv6#device DataIosxrRouterVrrpInterfaceIpv6#device}
  */
  readonly device?: string;
  /**
  * VRRP interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv6#interface_name DataIosxrRouterVrrpInterfaceIpv6#interface_name}
  */
  readonly interfaceName: string;
  /**
  * VRRP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv6#vrrp_id DataIosxrRouterVrrpInterfaceIpv6#vrrp_id}
  */
  readonly vrrpId: number;
}
export interface DataIosxrRouterVrrpInterfaceIpv6GlobalAddresses {
}

export function dataIosxrRouterVrrpInterfaceIpv6GlobalAddressesToTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv6GlobalAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterVrrpInterfaceIpv6GlobalAddressesToHclTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv6GlobalAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterVrrpInterfaceIpv6GlobalAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterVrrpInterfaceIpv6GlobalAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterVrrpInterfaceIpv6GlobalAddresses | undefined) {
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

export class DataIosxrRouterVrrpInterfaceIpv6GlobalAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterVrrpInterfaceIpv6GlobalAddressesOutputReference {
    return new DataIosxrRouterVrrpInterfaceIpv6GlobalAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterVrrpInterfaceIpv6TrackInterfaces {
}

export function dataIosxrRouterVrrpInterfaceIpv6TrackInterfacesToTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv6TrackInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterVrrpInterfaceIpv6TrackInterfacesToHclTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv6TrackInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterVrrpInterfaceIpv6TrackInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterVrrpInterfaceIpv6TrackInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterVrrpInterfaceIpv6TrackInterfaces | undefined) {
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

export class DataIosxrRouterVrrpInterfaceIpv6TrackInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterVrrpInterfaceIpv6TrackInterfacesOutputReference {
    return new DataIosxrRouterVrrpInterfaceIpv6TrackInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterVrrpInterfaceIpv6TrackObjects {
}

export function dataIosxrRouterVrrpInterfaceIpv6TrackObjectsToTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv6TrackObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterVrrpInterfaceIpv6TrackObjectsToHclTerraform(struct?: DataIosxrRouterVrrpInterfaceIpv6TrackObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterVrrpInterfaceIpv6TrackObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterVrrpInterfaceIpv6TrackObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterVrrpInterfaceIpv6TrackObjects | undefined) {
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

export class DataIosxrRouterVrrpInterfaceIpv6TrackObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterVrrpInterfaceIpv6TrackObjectsOutputReference {
    return new DataIosxrRouterVrrpInterfaceIpv6TrackObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv6 iosxr_router_vrrp_interface_ipv6}
*/
export class DataIosxrRouterVrrpInterfaceIpv6 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_vrrp_interface_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterVrrpInterfaceIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterVrrpInterfaceIpv6 to import
  * @param importFromId The id of the existing DataIosxrRouterVrrpInterfaceIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterVrrpInterfaceIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_vrrp_interface_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_vrrp_interface_ipv6 iosxr_router_vrrp_interface_ipv6} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterVrrpInterfaceIpv6Config
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterVrrpInterfaceIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_vrrp_interface_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
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
    this._vrrpId = config.vrrpId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_mode_disable - computed: true, optional: false, required: false
  public get acceptModeDisable() {
    return this.getBooleanAttribute('accept_mode_disable');
  }

  // address_linklocal - computed: true, optional: false, required: false
  public get addressLinklocal() {
    return this.getStringAttribute('address_linklocal');
  }

  // address_linklocal_autoconfig - computed: true, optional: false, required: false
  public get addressLinklocalAutoconfig() {
    return this.getBooleanAttribute('address_linklocal_autoconfig');
  }

  // bfd_fast_detect_peer_ipv6 - computed: true, optional: false, required: false
  public get bfdFastDetectPeerIpv6() {
    return this.getStringAttribute('bfd_fast_detect_peer_ipv6');
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

  // global_addresses - computed: true, optional: false, required: false
  private _globalAddresses = new DataIosxrRouterVrrpInterfaceIpv6GlobalAddressesList(this, "global_addresses", false);
  public get globalAddresses() {
    return this._globalAddresses;
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
  private _trackInterfaces = new DataIosxrRouterVrrpInterfaceIpv6TrackInterfacesList(this, "track_interfaces", false);
  public get trackInterfaces() {
    return this._trackInterfaces;
  }

  // track_objects - computed: true, optional: false, required: false
  private _trackObjects = new DataIosxrRouterVrrpInterfaceIpv6TrackObjectsList(this, "track_objects", false);
  public get trackObjects() {
    return this._trackObjects;
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
