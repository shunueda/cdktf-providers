// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/interface_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeInterfaceVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/interface_vlan#device DataIosxeInterfaceVlan#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/interface_vlan#name DataIosxeInterfaceVlan#name}
  */
  readonly name: number;
}
export interface DataIosxeInterfaceVlanHelperAddresses {
}

export function dataIosxeInterfaceVlanHelperAddressesToTerraform(struct?: DataIosxeInterfaceVlanHelperAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceVlanHelperAddressesToHclTerraform(struct?: DataIosxeInterfaceVlanHelperAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceVlanHelperAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceVlanHelperAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceVlanHelperAddresses | undefined) {
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

  // global - computed: true, optional: false, required: false
  public get global() {
    return this.getBooleanAttribute('global');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeInterfaceVlanHelperAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceVlanHelperAddressesOutputReference {
    return new DataIosxeInterfaceVlanHelperAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceVlanIpv6Addresses {
}

export function dataIosxeInterfaceVlanIpv6AddressesToTerraform(struct?: DataIosxeInterfaceVlanIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceVlanIpv6AddressesToHclTerraform(struct?: DataIosxeInterfaceVlanIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceVlanIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceVlanIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceVlanIpv6Addresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eui_64 - computed: true, optional: false, required: false
  public get eui64() {
    return this.getBooleanAttribute('eui_64');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataIosxeInterfaceVlanIpv6AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceVlanIpv6AddressesOutputReference {
    return new DataIosxeInterfaceVlanIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfaceVlanIpv6LinkLocalAddresses {
}

export function dataIosxeInterfaceVlanIpv6LinkLocalAddressesToTerraform(struct?: DataIosxeInterfaceVlanIpv6LinkLocalAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceVlanIpv6LinkLocalAddressesToHclTerraform(struct?: DataIosxeInterfaceVlanIpv6LinkLocalAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceVlanIpv6LinkLocalAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceVlanIpv6LinkLocalAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceVlanIpv6LinkLocalAddresses | undefined) {
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

  // link_local - computed: true, optional: false, required: false
  public get linkLocal() {
    return this.getBooleanAttribute('link_local');
  }
}

export class DataIosxeInterfaceVlanIpv6LinkLocalAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceVlanIpv6LinkLocalAddressesOutputReference {
    return new DataIosxeInterfaceVlanIpv6LinkLocalAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/interface_vlan iosxe_interface_vlan}
*/
export class DataIosxeInterfaceVlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeInterfaceVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeInterfaceVlan to import
  * @param importFromId The id of the existing DataIosxeInterfaceVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/interface_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeInterfaceVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/interface_vlan iosxe_interface_vlan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeInterfaceVlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeInterfaceVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_vlan',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autostate - computed: true, optional: false, required: false
  public get autostate() {
    return this.getBooleanAttribute('autostate');
  }

  // bfd_echo - computed: true, optional: false, required: false
  public get bfdEcho() {
    return this.getBooleanAttribute('bfd_echo');
  }

  // bfd_enable - computed: true, optional: false, required: false
  public get bfdEnable() {
    return this.getBooleanAttribute('bfd_enable');
  }

  // bfd_interval - computed: true, optional: false, required: false
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }

  // bfd_interval_min_rx - computed: true, optional: false, required: false
  public get bfdIntervalMinRx() {
    return this.getNumberAttribute('bfd_interval_min_rx');
  }

  // bfd_interval_multiplier - computed: true, optional: false, required: false
  public get bfdIntervalMultiplier() {
    return this.getNumberAttribute('bfd_interval_multiplier');
  }

  // bfd_local_address - computed: true, optional: false, required: false
  public get bfdLocalAddress() {
    return this.getStringAttribute('bfd_local_address');
  }

  // bfd_template - computed: true, optional: false, required: false
  public get bfdTemplate() {
    return this.getStringAttribute('bfd_template');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // helper_addresses - computed: true, optional: false, required: false
  private _helperAddresses = new DataIosxeInterfaceVlanHelperAddressesList(this, "helper_addresses", false);
  public get helperAddresses() {
    return this._helperAddresses;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_access_group_in - computed: true, optional: false, required: false
  public get ipAccessGroupIn() {
    return this.getStringAttribute('ip_access_group_in');
  }

  // ip_access_group_in_enable - computed: true, optional: false, required: false
  public get ipAccessGroupInEnable() {
    return this.getBooleanAttribute('ip_access_group_in_enable');
  }

  // ip_access_group_out - computed: true, optional: false, required: false
  public get ipAccessGroupOut() {
    return this.getStringAttribute('ip_access_group_out');
  }

  // ip_access_group_out_enable - computed: true, optional: false, required: false
  public get ipAccessGroupOutEnable() {
    return this.getBooleanAttribute('ip_access_group_out_enable');
  }

  // ip_dhcp_relay_information_option_vpn_id - computed: true, optional: false, required: false
  public get ipDhcpRelayInformationOptionVpnId() {
    return this.getBooleanAttribute('ip_dhcp_relay_information_option_vpn_id');
  }

  // ip_dhcp_relay_source_interface - computed: true, optional: false, required: false
  public get ipDhcpRelaySourceInterface() {
    return this.getStringAttribute('ip_dhcp_relay_source_interface');
  }

  // ip_igmp_version - computed: true, optional: false, required: false
  public get ipIgmpVersion() {
    return this.getNumberAttribute('ip_igmp_version');
  }

  // ip_local_proxy_arp - computed: true, optional: false, required: false
  public get ipLocalProxyArp() {
    return this.getBooleanAttribute('ip_local_proxy_arp');
  }

  // ip_proxy_arp - computed: true, optional: false, required: false
  public get ipProxyArp() {
    return this.getBooleanAttribute('ip_proxy_arp');
  }

  // ip_redirects - computed: true, optional: false, required: false
  public get ipRedirects() {
    return this.getBooleanAttribute('ip_redirects');
  }

  // ip_router_isis - computed: true, optional: false, required: false
  public get ipRouterIsis() {
    return this.getStringAttribute('ip_router_isis');
  }

  // ip_unreachables - computed: true, optional: false, required: false
  public get ipUnreachables() {
    return this.getBooleanAttribute('ip_unreachables');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_mask - computed: true, optional: false, required: false
  public get ipv4AddressMask() {
    return this.getStringAttribute('ipv4_address_mask');
  }

  // ipv6_address_autoconfig_default - computed: true, optional: false, required: false
  public get ipv6AddressAutoconfigDefault() {
    return this.getBooleanAttribute('ipv6_address_autoconfig_default');
  }

  // ipv6_address_dhcp - computed: true, optional: false, required: false
  public get ipv6AddressDhcp() {
    return this.getBooleanAttribute('ipv6_address_dhcp');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  private _ipv6Addresses = new DataIosxeInterfaceVlanIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // ipv6_enable - computed: true, optional: false, required: false
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }

  // ipv6_link_local_addresses - computed: true, optional: false, required: false
  private _ipv6LinkLocalAddresses = new DataIosxeInterfaceVlanIpv6LinkLocalAddressesList(this, "ipv6_link_local_addresses", false);
  public get ipv6LinkLocalAddresses() {
    return this._ipv6LinkLocalAddresses;
  }

  // ipv6_mtu - computed: true, optional: false, required: false
  public get ipv6Mtu() {
    return this.getNumberAttribute('ipv6_mtu');
  }

  // ipv6_nd_ra_suppress_all - computed: true, optional: false, required: false
  public get ipv6NdRaSuppressAll() {
    return this.getBooleanAttribute('ipv6_nd_ra_suppress_all');
  }

  // load_interval - computed: true, optional: false, required: false
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // name - computed: false, optional: false, required: true
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // unnumbered - computed: true, optional: false, required: false
  public get unnumbered() {
    return this.getStringAttribute('unnumbered');
  }

  // vrf_forwarding - computed: true, optional: false, required: false
  public get vrfForwarding() {
    return this.getStringAttribute('vrf_forwarding');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.numberToTerraform(this._name),
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
      name: {
        value: cdktf.numberToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
