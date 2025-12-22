// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceLoopbackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set ARP cache timeout
  *   - Range: `0`-`2147483`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#arp_timeout InterfaceLoopback#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#delete_mode InterfaceLoopback#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Interface specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#description InterfaceLoopback#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#device InterfaceLoopback#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_access_group_in InterfaceLoopback#ip_access_group_in}
  */
  readonly ipAccessGroupIn?: string;
  /**
  * inbound packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_access_group_in_enable InterfaceLoopback#ip_access_group_in_enable}
  */
  readonly ipAccessGroupInEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_access_group_out InterfaceLoopback#ip_access_group_out}
  */
  readonly ipAccessGroupOut?: string;
  /**
  * outbound packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_access_group_out_enable InterfaceLoopback#ip_access_group_out_enable}
  */
  readonly ipAccessGroupOutEnable?: boolean | cdktf.IResolvable;
  /**
  * IGMP version
  *   - Range: `1`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_igmp_version InterfaceLoopback#ip_igmp_version}
  */
  readonly ipIgmpVersion?: number;
  /**
  * Inside interface for address translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_nat_inside InterfaceLoopback#ip_nat_inside}
  */
  readonly ipNatInside?: boolean | cdktf.IResolvable;
  /**
  * Outside interface for address translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_nat_outside InterfaceLoopback#ip_nat_outside}
  */
  readonly ipNatOutside?: boolean | cdktf.IResolvable;
  /**
  * Enable proxy ARP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_proxy_arp InterfaceLoopback#ip_proxy_arp}
  */
  readonly ipProxyArp?: boolean | cdktf.IResolvable;
  /**
  * Enable sending ICMP Redirect messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_redirects InterfaceLoopback#ip_redirects}
  */
  readonly ipRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_router_isis InterfaceLoopback#ip_router_isis}
  */
  readonly ipRouterIsis?: string;
  /**
  * Enable sending ICMP Unreachable messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ip_unreachables InterfaceLoopback#ip_unreachables}
  */
  readonly ipUnreachables?: boolean | cdktf.IResolvable;
  /**
  * Ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ipv4_address InterfaceLoopback#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Ip subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ipv4_address_mask InterfaceLoopback#ipv4_address_mask}
  */
  readonly ipv4AddressMask?: string;
  /**
  * Insert default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ipv6_address_autoconfig_default InterfaceLoopback#ipv6_address_autoconfig_default}
  */
  readonly ipv6AddressAutoconfigDefault?: boolean | cdktf.IResolvable;
  /**
  * Obtain IPv6 address from DHCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ipv6_address_dhcp InterfaceLoopback#ipv6_address_dhcp}
  */
  readonly ipv6AddressDhcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ipv6_addresses InterfaceLoopback#ipv6_addresses}
  */
  readonly ipv6Addresses?: InterfaceLoopbackIpv6Addresses[] | cdktf.IResolvable;
  /**
  * Enable IPv6 on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ipv6_enable InterfaceLoopback#ipv6_enable}
  */
  readonly ipv6Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ipv6_link_local_addresses InterfaceLoopback#ipv6_link_local_addresses}
  */
  readonly ipv6LinkLocalAddresses?: InterfaceLoopbackIpv6LinkLocalAddresses[] | cdktf.IResolvable;
  /**
  * Set IPv6 Maximum Transmission Unit
  *   - Range: `1280`-`9976`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ipv6_mtu InterfaceLoopback#ipv6_mtu}
  */
  readonly ipv6Mtu?: number;
  /**
  * Suppress all IPv6 RA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#ipv6_nd_ra_suppress_all InterfaceLoopback#ipv6_nd_ra_suppress_all}
  */
  readonly ipv6NdRaSuppressAll?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#name InterfaceLoopback#name}
  */
  readonly name: number;
  /**
  * Shutdown the selected interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#shutdown InterfaceLoopback#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Configure forwarding table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#vrf_forwarding InterfaceLoopback#vrf_forwarding}
  */
  readonly vrfForwarding?: string;
}
export interface InterfaceLoopbackIpv6Addresses {
  /**
  * Use eui-64 interface identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#eui_64 InterfaceLoopback#eui_64}
  */
  readonly eui64?: boolean | cdktf.IResolvable;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#prefix InterfaceLoopback#prefix}
  */
  readonly prefix: string;
}

export function interfaceLoopbackIpv6AddressesToTerraform(struct?: InterfaceLoopbackIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eui_64: cdktf.booleanToTerraform(struct!.eui64),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function interfaceLoopbackIpv6AddressesToHclTerraform(struct?: InterfaceLoopbackIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eui_64: {
      value: cdktf.booleanToHclTerraform(struct!.eui64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLoopbackIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLoopbackIpv6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eui64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.eui64 = this._eui64;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLoopbackIpv6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eui64 = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eui64 = value.eui64;
      this._prefix = value.prefix;
    }
  }

  // eui_64 - computed: false, optional: true, required: false
  private _eui64?: boolean | cdktf.IResolvable; 
  public get eui64() {
    return this.getBooleanAttribute('eui_64');
  }
  public set eui64(value: boolean | cdktf.IResolvable) {
    this._eui64 = value;
  }
  public resetEui64() {
    this._eui64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eui64Input() {
    return this._eui64;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class InterfaceLoopbackIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceLoopbackIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLoopbackIpv6AddressesOutputReference {
    return new InterfaceLoopbackIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceLoopbackIpv6LinkLocalAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#address InterfaceLoopback#address}
  */
  readonly address: string;
  /**
  * Use link-local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#link_local InterfaceLoopback#link_local}
  */
  readonly linkLocal?: boolean | cdktf.IResolvable;
}

export function interfaceLoopbackIpv6LinkLocalAddressesToTerraform(struct?: InterfaceLoopbackIpv6LinkLocalAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    link_local: cdktf.booleanToTerraform(struct!.linkLocal),
  }
}


export function interfaceLoopbackIpv6LinkLocalAddressesToHclTerraform(struct?: InterfaceLoopbackIpv6LinkLocalAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_local: {
      value: cdktf.booleanToHclTerraform(struct!.linkLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLoopbackIpv6LinkLocalAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLoopbackIpv6LinkLocalAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._linkLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkLocal = this._linkLocal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLoopbackIpv6LinkLocalAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._linkLocal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._linkLocal = value.linkLocal;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // link_local - computed: false, optional: true, required: false
  private _linkLocal?: boolean | cdktf.IResolvable; 
  public get linkLocal() {
    return this.getBooleanAttribute('link_local');
  }
  public set linkLocal(value: boolean | cdktf.IResolvable) {
    this._linkLocal = value;
  }
  public resetLinkLocal() {
    this._linkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalInput() {
    return this._linkLocal;
  }
}

export class InterfaceLoopbackIpv6LinkLocalAddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceLoopbackIpv6LinkLocalAddresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLoopbackIpv6LinkLocalAddressesOutputReference {
    return new InterfaceLoopbackIpv6LinkLocalAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback iosxe_interface_loopback}
*/
export class InterfaceLoopback extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_loopback";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceLoopback resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceLoopback to import
  * @param importFromId The id of the existing InterfaceLoopback that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceLoopback to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_loopback", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_loopback iosxe_interface_loopback} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceLoopbackConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceLoopbackConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_loopback',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arpTimeout = config.arpTimeout;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._ipAccessGroupIn = config.ipAccessGroupIn;
    this._ipAccessGroupInEnable = config.ipAccessGroupInEnable;
    this._ipAccessGroupOut = config.ipAccessGroupOut;
    this._ipAccessGroupOutEnable = config.ipAccessGroupOutEnable;
    this._ipIgmpVersion = config.ipIgmpVersion;
    this._ipNatInside = config.ipNatInside;
    this._ipNatOutside = config.ipNatOutside;
    this._ipProxyArp = config.ipProxyArp;
    this._ipRedirects = config.ipRedirects;
    this._ipRouterIsis = config.ipRouterIsis;
    this._ipUnreachables = config.ipUnreachables;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressMask = config.ipv4AddressMask;
    this._ipv6AddressAutoconfigDefault = config.ipv6AddressAutoconfigDefault;
    this._ipv6AddressDhcp = config.ipv6AddressDhcp;
    this._ipv6Addresses.internalValue = config.ipv6Addresses;
    this._ipv6Enable = config.ipv6Enable;
    this._ipv6LinkLocalAddresses.internalValue = config.ipv6LinkLocalAddresses;
    this._ipv6Mtu = config.ipv6Mtu;
    this._ipv6NdRaSuppressAll = config.ipv6NdRaSuppressAll;
    this._name = config.name;
    this._shutdown = config.shutdown;
    this._vrfForwarding = config.vrfForwarding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_timeout - computed: false, optional: true, required: false
  private _arpTimeout?: number; 
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }
  public set arpTimeout(value: number) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ip_access_group_in - computed: false, optional: true, required: false
  private _ipAccessGroupIn?: string; 
  public get ipAccessGroupIn() {
    return this.getStringAttribute('ip_access_group_in');
  }
  public set ipAccessGroupIn(value: string) {
    this._ipAccessGroupIn = value;
  }
  public resetIpAccessGroupIn() {
    this._ipAccessGroupIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessGroupInInput() {
    return this._ipAccessGroupIn;
  }

  // ip_access_group_in_enable - computed: false, optional: true, required: false
  private _ipAccessGroupInEnable?: boolean | cdktf.IResolvable; 
  public get ipAccessGroupInEnable() {
    return this.getBooleanAttribute('ip_access_group_in_enable');
  }
  public set ipAccessGroupInEnable(value: boolean | cdktf.IResolvable) {
    this._ipAccessGroupInEnable = value;
  }
  public resetIpAccessGroupInEnable() {
    this._ipAccessGroupInEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessGroupInEnableInput() {
    return this._ipAccessGroupInEnable;
  }

  // ip_access_group_out - computed: false, optional: true, required: false
  private _ipAccessGroupOut?: string; 
  public get ipAccessGroupOut() {
    return this.getStringAttribute('ip_access_group_out');
  }
  public set ipAccessGroupOut(value: string) {
    this._ipAccessGroupOut = value;
  }
  public resetIpAccessGroupOut() {
    this._ipAccessGroupOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessGroupOutInput() {
    return this._ipAccessGroupOut;
  }

  // ip_access_group_out_enable - computed: false, optional: true, required: false
  private _ipAccessGroupOutEnable?: boolean | cdktf.IResolvable; 
  public get ipAccessGroupOutEnable() {
    return this.getBooleanAttribute('ip_access_group_out_enable');
  }
  public set ipAccessGroupOutEnable(value: boolean | cdktf.IResolvable) {
    this._ipAccessGroupOutEnable = value;
  }
  public resetIpAccessGroupOutEnable() {
    this._ipAccessGroupOutEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessGroupOutEnableInput() {
    return this._ipAccessGroupOutEnable;
  }

  // ip_igmp_version - computed: false, optional: true, required: false
  private _ipIgmpVersion?: number; 
  public get ipIgmpVersion() {
    return this.getNumberAttribute('ip_igmp_version');
  }
  public set ipIgmpVersion(value: number) {
    this._ipIgmpVersion = value;
  }
  public resetIpIgmpVersion() {
    this._ipIgmpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipIgmpVersionInput() {
    return this._ipIgmpVersion;
  }

  // ip_nat_inside - computed: false, optional: true, required: false
  private _ipNatInside?: boolean | cdktf.IResolvable; 
  public get ipNatInside() {
    return this.getBooleanAttribute('ip_nat_inside');
  }
  public set ipNatInside(value: boolean | cdktf.IResolvable) {
    this._ipNatInside = value;
  }
  public resetIpNatInside() {
    this._ipNatInside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatInsideInput() {
    return this._ipNatInside;
  }

  // ip_nat_outside - computed: false, optional: true, required: false
  private _ipNatOutside?: boolean | cdktf.IResolvable; 
  public get ipNatOutside() {
    return this.getBooleanAttribute('ip_nat_outside');
  }
  public set ipNatOutside(value: boolean | cdktf.IResolvable) {
    this._ipNatOutside = value;
  }
  public resetIpNatOutside() {
    this._ipNatOutside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatOutsideInput() {
    return this._ipNatOutside;
  }

  // ip_proxy_arp - computed: false, optional: true, required: false
  private _ipProxyArp?: boolean | cdktf.IResolvable; 
  public get ipProxyArp() {
    return this.getBooleanAttribute('ip_proxy_arp');
  }
  public set ipProxyArp(value: boolean | cdktf.IResolvable) {
    this._ipProxyArp = value;
  }
  public resetIpProxyArp() {
    this._ipProxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProxyArpInput() {
    return this._ipProxyArp;
  }

  // ip_redirects - computed: false, optional: true, required: false
  private _ipRedirects?: boolean | cdktf.IResolvable; 
  public get ipRedirects() {
    return this.getBooleanAttribute('ip_redirects');
  }
  public set ipRedirects(value: boolean | cdktf.IResolvable) {
    this._ipRedirects = value;
  }
  public resetIpRedirects() {
    this._ipRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRedirectsInput() {
    return this._ipRedirects;
  }

  // ip_router_isis - computed: false, optional: true, required: false
  private _ipRouterIsis?: string; 
  public get ipRouterIsis() {
    return this.getStringAttribute('ip_router_isis');
  }
  public set ipRouterIsis(value: string) {
    this._ipRouterIsis = value;
  }
  public resetIpRouterIsis() {
    this._ipRouterIsis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRouterIsisInput() {
    return this._ipRouterIsis;
  }

  // ip_unreachables - computed: false, optional: true, required: false
  private _ipUnreachables?: boolean | cdktf.IResolvable; 
  public get ipUnreachables() {
    return this.getBooleanAttribute('ip_unreachables');
  }
  public set ipUnreachables(value: boolean | cdktf.IResolvable) {
    this._ipUnreachables = value;
  }
  public resetIpUnreachables() {
    this._ipUnreachables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnreachablesInput() {
    return this._ipUnreachables;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_address_mask - computed: false, optional: true, required: false
  private _ipv4AddressMask?: string; 
  public get ipv4AddressMask() {
    return this.getStringAttribute('ipv4_address_mask');
  }
  public set ipv4AddressMask(value: string) {
    this._ipv4AddressMask = value;
  }
  public resetIpv4AddressMask() {
    this._ipv4AddressMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressMaskInput() {
    return this._ipv4AddressMask;
  }

  // ipv6_address_autoconfig_default - computed: false, optional: true, required: false
  private _ipv6AddressAutoconfigDefault?: boolean | cdktf.IResolvable; 
  public get ipv6AddressAutoconfigDefault() {
    return this.getBooleanAttribute('ipv6_address_autoconfig_default');
  }
  public set ipv6AddressAutoconfigDefault(value: boolean | cdktf.IResolvable) {
    this._ipv6AddressAutoconfigDefault = value;
  }
  public resetIpv6AddressAutoconfigDefault() {
    this._ipv6AddressAutoconfigDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressAutoconfigDefaultInput() {
    return this._ipv6AddressAutoconfigDefault;
  }

  // ipv6_address_dhcp - computed: false, optional: true, required: false
  private _ipv6AddressDhcp?: boolean | cdktf.IResolvable; 
  public get ipv6AddressDhcp() {
    return this.getBooleanAttribute('ipv6_address_dhcp');
  }
  public set ipv6AddressDhcp(value: boolean | cdktf.IResolvable) {
    this._ipv6AddressDhcp = value;
  }
  public resetIpv6AddressDhcp() {
    this._ipv6AddressDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressDhcpInput() {
    return this._ipv6AddressDhcp;
  }

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses = new InterfaceLoopbackIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: InterfaceLoopbackIpv6Addresses[] | cdktf.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
  }

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: boolean | cdktf.IResolvable; 
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: boolean | cdktf.IResolvable) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // ipv6_link_local_addresses - computed: false, optional: true, required: false
  private _ipv6LinkLocalAddresses = new InterfaceLoopbackIpv6LinkLocalAddressesList(this, "ipv6_link_local_addresses", false);
  public get ipv6LinkLocalAddresses() {
    return this._ipv6LinkLocalAddresses;
  }
  public putIpv6LinkLocalAddresses(value: InterfaceLoopbackIpv6LinkLocalAddresses[] | cdktf.IResolvable) {
    this._ipv6LinkLocalAddresses.internalValue = value;
  }
  public resetIpv6LinkLocalAddresses() {
    this._ipv6LinkLocalAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalAddressesInput() {
    return this._ipv6LinkLocalAddresses.internalValue;
  }

  // ipv6_mtu - computed: false, optional: true, required: false
  private _ipv6Mtu?: number; 
  public get ipv6Mtu() {
    return this.getNumberAttribute('ipv6_mtu');
  }
  public set ipv6Mtu(value: number) {
    this._ipv6Mtu = value;
  }
  public resetIpv6Mtu() {
    this._ipv6Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MtuInput() {
    return this._ipv6Mtu;
  }

  // ipv6_nd_ra_suppress_all - computed: false, optional: true, required: false
  private _ipv6NdRaSuppressAll?: boolean | cdktf.IResolvable; 
  public get ipv6NdRaSuppressAll() {
    return this.getBooleanAttribute('ipv6_nd_ra_suppress_all');
  }
  public set ipv6NdRaSuppressAll(value: boolean | cdktf.IResolvable) {
    this._ipv6NdRaSuppressAll = value;
  }
  public resetIpv6NdRaSuppressAll() {
    this._ipv6NdRaSuppressAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NdRaSuppressAllInput() {
    return this._ipv6NdRaSuppressAll;
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

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // vrf_forwarding - computed: false, optional: true, required: false
  private _vrfForwarding?: string; 
  public get vrfForwarding() {
    return this.getStringAttribute('vrf_forwarding');
  }
  public set vrfForwarding(value: string) {
    this._vrfForwarding = value;
  }
  public resetVrfForwarding() {
    this._vrfForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfForwardingInput() {
    return this._vrfForwarding;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_timeout: cdktf.numberToTerraform(this._arpTimeout),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      ip_access_group_in: cdktf.stringToTerraform(this._ipAccessGroupIn),
      ip_access_group_in_enable: cdktf.booleanToTerraform(this._ipAccessGroupInEnable),
      ip_access_group_out: cdktf.stringToTerraform(this._ipAccessGroupOut),
      ip_access_group_out_enable: cdktf.booleanToTerraform(this._ipAccessGroupOutEnable),
      ip_igmp_version: cdktf.numberToTerraform(this._ipIgmpVersion),
      ip_nat_inside: cdktf.booleanToTerraform(this._ipNatInside),
      ip_nat_outside: cdktf.booleanToTerraform(this._ipNatOutside),
      ip_proxy_arp: cdktf.booleanToTerraform(this._ipProxyArp),
      ip_redirects: cdktf.booleanToTerraform(this._ipRedirects),
      ip_router_isis: cdktf.stringToTerraform(this._ipRouterIsis),
      ip_unreachables: cdktf.booleanToTerraform(this._ipUnreachables),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_mask: cdktf.stringToTerraform(this._ipv4AddressMask),
      ipv6_address_autoconfig_default: cdktf.booleanToTerraform(this._ipv6AddressAutoconfigDefault),
      ipv6_address_dhcp: cdktf.booleanToTerraform(this._ipv6AddressDhcp),
      ipv6_addresses: cdktf.listMapper(interfaceLoopbackIpv6AddressesToTerraform, false)(this._ipv6Addresses.internalValue),
      ipv6_enable: cdktf.booleanToTerraform(this._ipv6Enable),
      ipv6_link_local_addresses: cdktf.listMapper(interfaceLoopbackIpv6LinkLocalAddressesToTerraform, false)(this._ipv6LinkLocalAddresses.internalValue),
      ipv6_mtu: cdktf.numberToTerraform(this._ipv6Mtu),
      ipv6_nd_ra_suppress_all: cdktf.booleanToTerraform(this._ipv6NdRaSuppressAll),
      name: cdktf.numberToTerraform(this._name),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      vrf_forwarding: cdktf.stringToTerraform(this._vrfForwarding),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_timeout: {
        value: cdktf.numberToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_access_group_in: {
        value: cdktf.stringToHclTerraform(this._ipAccessGroupIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_access_group_in_enable: {
        value: cdktf.booleanToHclTerraform(this._ipAccessGroupInEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_access_group_out: {
        value: cdktf.stringToHclTerraform(this._ipAccessGroupOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_access_group_out_enable: {
        value: cdktf.booleanToHclTerraform(this._ipAccessGroupOutEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_igmp_version: {
        value: cdktf.numberToHclTerraform(this._ipIgmpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_nat_inside: {
        value: cdktf.booleanToHclTerraform(this._ipNatInside),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_nat_outside: {
        value: cdktf.booleanToHclTerraform(this._ipNatOutside),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_proxy_arp: {
        value: cdktf.booleanToHclTerraform(this._ipProxyArp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_redirects: {
        value: cdktf.booleanToHclTerraform(this._ipRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_router_isis: {
        value: cdktf.stringToHclTerraform(this._ipRouterIsis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_unreachables: {
        value: cdktf.booleanToHclTerraform(this._ipUnreachables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address_mask: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_autoconfig_default: {
        value: cdktf.booleanToHclTerraform(this._ipv6AddressAutoconfigDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_address_dhcp: {
        value: cdktf.booleanToHclTerraform(this._ipv6AddressDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_addresses: {
        value: cdktf.listMapperHcl(interfaceLoopbackIpv6AddressesToHclTerraform, false)(this._ipv6Addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLoopbackIpv6AddressesList",
      },
      ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_link_local_addresses: {
        value: cdktf.listMapperHcl(interfaceLoopbackIpv6LinkLocalAddressesToHclTerraform, false)(this._ipv6LinkLocalAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLoopbackIpv6LinkLocalAddressesList",
      },
      ipv6_mtu: {
        value: cdktf.numberToHclTerraform(this._ipv6Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_nd_ra_suppress_all: {
        value: cdktf.booleanToHclTerraform(this._ipv6NdRaSuppressAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.numberToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrf_forwarding: {
        value: cdktf.stringToHclTerraform(this._vrfForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
