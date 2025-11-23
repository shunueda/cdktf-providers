// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set ARP cache timeout
  *   - Range: `0`-`2147483`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#arp_timeout InterfaceTunnel#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Use echo adjunct as bfd detection mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#bfd_echo InterfaceTunnel#bfd_echo}
  */
  readonly bfdEcho?: boolean | cdktf.IResolvable;
  /**
  * Enable BFD under the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#bfd_enable InterfaceTunnel#bfd_enable}
  */
  readonly bfdEnable?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `50`-`9999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#bfd_interval InterfaceTunnel#bfd_interval}
  */
  readonly bfdInterval?: number;
  /**
  * Minimum receive interval capability
  *   - Range: `50`-`9999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#bfd_interval_min_rx InterfaceTunnel#bfd_interval_min_rx}
  */
  readonly bfdIntervalMinRx?: number;
  /**
  * Multiplier value used to compute holddown
  *   - Range: `3`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#bfd_interval_multiplier InterfaceTunnel#bfd_interval_multiplier}
  */
  readonly bfdIntervalMultiplier?: number;
  /**
  * The Source IP address to be used for BFD sessions over this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#bfd_local_address InterfaceTunnel#bfd_local_address}
  */
  readonly bfdLocalAddress?: string;
  /**
  * BFD template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#bfd_template InterfaceTunnel#bfd_template}
  */
  readonly bfdTemplate?: string;
  /**
  * Handling of encapsulated DF bit.
  *   - Choices: `clear`, `copy`, `set`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#crypto_ipsec_df_bit InterfaceTunnel#crypto_ipsec_df_bit}
  */
  readonly cryptoIpsecDfBit?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#delete_mode InterfaceTunnel#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Interface specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#description InterfaceTunnel#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#device InterfaceTunnel#device}
  */
  readonly device?: string;
  /**
  * Specify a destination address for UDP broadcasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#helper_addresses InterfaceTunnel#helper_addresses}
  */
  readonly helperAddresses?: InterfaceTunnelHelperAddresses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_access_group_in InterfaceTunnel#ip_access_group_in}
  */
  readonly ipAccessGroupIn?: string;
  /**
  * inbound packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_access_group_in_enable InterfaceTunnel#ip_access_group_in_enable}
  */
  readonly ipAccessGroupInEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_access_group_out InterfaceTunnel#ip_access_group_out}
  */
  readonly ipAccessGroupOut?: string;
  /**
  * outbound packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_access_group_out_enable InterfaceTunnel#ip_access_group_out_enable}
  */
  readonly ipAccessGroupOutEnable?: boolean | cdktf.IResolvable;
  /**
  * Set source interface for relayed messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_dhcp_relay_source_interface InterfaceTunnel#ip_dhcp_relay_source_interface}
  */
  readonly ipDhcpRelaySourceInterface?: string;
  /**
  * IGMP version
  *   - Range: `1`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_igmp_version InterfaceTunnel#ip_igmp_version}
  */
  readonly ipIgmpVersion?: number;
  /**
  * Set IP Maximum Transmission Unit
  *   - Range: `68`-`18000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_mtu InterfaceTunnel#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Enable proxy ARP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_proxy_arp InterfaceTunnel#ip_proxy_arp}
  */
  readonly ipProxyArp?: boolean | cdktf.IResolvable;
  /**
  * Enable sending ICMP Redirect messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_redirects InterfaceTunnel#ip_redirects}
  */
  readonly ipRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_router_isis InterfaceTunnel#ip_router_isis}
  */
  readonly ipRouterIsis?: string;
  /**
  * Enable sending ICMP Unreachable messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ip_unreachables InterfaceTunnel#ip_unreachables}
  */
  readonly ipUnreachables?: boolean | cdktf.IResolvable;
  /**
  * Ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ipv4_address InterfaceTunnel#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Ip subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ipv4_address_mask InterfaceTunnel#ipv4_address_mask}
  */
  readonly ipv4AddressMask?: string;
  /**
  * Insert default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ipv6_address_autoconfig_default InterfaceTunnel#ipv6_address_autoconfig_default}
  */
  readonly ipv6AddressAutoconfigDefault?: boolean | cdktf.IResolvable;
  /**
  * Obtain IPv6 address from DHCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ipv6_address_dhcp InterfaceTunnel#ipv6_address_dhcp}
  */
  readonly ipv6AddressDhcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ipv6_addresses InterfaceTunnel#ipv6_addresses}
  */
  readonly ipv6Addresses?: InterfaceTunnelIpv6Addresses[] | cdktf.IResolvable;
  /**
  * Enable IPv6 on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ipv6_enable InterfaceTunnel#ipv6_enable}
  */
  readonly ipv6Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ipv6_link_local_addresses InterfaceTunnel#ipv6_link_local_addresses}
  */
  readonly ipv6LinkLocalAddresses?: InterfaceTunnelIpv6LinkLocalAddresses[] | cdktf.IResolvable;
  /**
  * Set IPv6 Maximum Transmission Unit
  *   - Range: `1280`-`9976`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ipv6_mtu InterfaceTunnel#ipv6_mtu}
  */
  readonly ipv6Mtu?: number;
  /**
  * Suppress all IPv6 RA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#ipv6_nd_ra_suppress_all InterfaceTunnel#ipv6_nd_ra_suppress_all}
  */
  readonly ipv6NdRaSuppressAll?: boolean | cdktf.IResolvable;
  /**
  * Specify interval for load calculation for an interface
  *   - Range: `30`-`600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#load_interval InterfaceTunnel#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * UPDOWN and CHANGE messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#logging_event_link_status_enable InterfaceTunnel#logging_event_link_status_enable}
  */
  readonly loggingEventLinkStatusEnable?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#name InterfaceTunnel#name}
  */
  readonly name: number;
  /**
  * Shutdown the selected interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#shutdown InterfaceTunnel#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Allow SNMP LINKUP and LINKDOWN traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#snmp_trap_link_status InterfaceTunnel#snmp_trap_link_status}
  */
  readonly snmpTrapLinkStatus?: boolean | cdktf.IResolvable;
  /**
  * ip address or host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#tunnel_destination_ipv4 InterfaceTunnel#tunnel_destination_ipv4}
  */
  readonly tunnelDestinationIpv4?: string;
  /**
  * over IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#tunnel_mode_ipsec_ipv4 InterfaceTunnel#tunnel_mode_ipsec_ipv4}
  */
  readonly tunnelModeIpsecIpv4?: boolean | cdktf.IResolvable;
  /**
  * Obsolete, use the other option profile-option to set ipsec policy profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#tunnel_protection_ipsec_profile InterfaceTunnel#tunnel_protection_ipsec_profile}
  */
  readonly tunnelProtectionIpsecProfile?: string;
  /**
  * source of tunnel packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#tunnel_source InterfaceTunnel#tunnel_source}
  */
  readonly tunnelSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#tunnel_vrf InterfaceTunnel#tunnel_vrf}
  */
  readonly tunnelVrf?: string;
  /**
  * Enable IP processing without an explicit address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#unnumbered InterfaceTunnel#unnumbered}
  */
  readonly unnumbered?: string;
  /**
  * Configure forwarding table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#vrf_forwarding InterfaceTunnel#vrf_forwarding}
  */
  readonly vrfForwarding?: string;
}
export interface InterfaceTunnelHelperAddresses {
  /**
  * IP destination address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#address InterfaceTunnel#address}
  */
  readonly address: string;
  /**
  * Helper-address is global
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#global InterfaceTunnel#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * VRF name for helper-address (if different from interface VRF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#vrf InterfaceTunnel#vrf}
  */
  readonly vrf?: string;
}

export function interfaceTunnelHelperAddressesToTerraform(struct?: InterfaceTunnelHelperAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    global: cdktf.booleanToTerraform(struct!.global),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function interfaceTunnelHelperAddressesToHclTerraform(struct?: InterfaceTunnelHelperAddresses | cdktf.IResolvable): any {
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
    global: {
      value: cdktf.booleanToHclTerraform(struct!.global),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTunnelHelperAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelHelperAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._global !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTunnelHelperAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._global = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._global = value.global;
      this._vrf = value.vrf;
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

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class InterfaceTunnelHelperAddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelHelperAddresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelHelperAddressesOutputReference {
    return new InterfaceTunnelHelperAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6Addresses {
  /**
  * Use eui-64 interface identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#eui_64 InterfaceTunnel#eui_64}
  */
  readonly eui64?: boolean | cdktf.IResolvable;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#prefix InterfaceTunnel#prefix}
  */
  readonly prefix: string;
}

export function interfaceTunnelIpv6AddressesToTerraform(struct?: InterfaceTunnelIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eui_64: cdktf.booleanToTerraform(struct!.eui64),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function interfaceTunnelIpv6AddressesToHclTerraform(struct?: InterfaceTunnelIpv6Addresses | cdktf.IResolvable): any {
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

export class InterfaceTunnelIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6Addresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceTunnelIpv6Addresses | cdktf.IResolvable | undefined) {
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

export class InterfaceTunnelIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6AddressesOutputReference {
    return new InterfaceTunnelIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTunnelIpv6LinkLocalAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#address InterfaceTunnel#address}
  */
  readonly address: string;
  /**
  * Use link-local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#link_local InterfaceTunnel#link_local}
  */
  readonly linkLocal?: boolean | cdktf.IResolvable;
}

export function interfaceTunnelIpv6LinkLocalAddressesToTerraform(struct?: InterfaceTunnelIpv6LinkLocalAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    link_local: cdktf.booleanToTerraform(struct!.linkLocal),
  }
}


export function interfaceTunnelIpv6LinkLocalAddressesToHclTerraform(struct?: InterfaceTunnelIpv6LinkLocalAddresses | cdktf.IResolvable): any {
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

export class InterfaceTunnelIpv6LinkLocalAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTunnelIpv6LinkLocalAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfaceTunnelIpv6LinkLocalAddresses | cdktf.IResolvable | undefined) {
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

export class InterfaceTunnelIpv6LinkLocalAddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceTunnelIpv6LinkLocalAddresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTunnelIpv6LinkLocalAddressesOutputReference {
    return new InterfaceTunnelIpv6LinkLocalAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel iosxe_interface_tunnel}
*/
export class InterfaceTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceTunnel to import
  * @param importFromId The id of the existing InterfaceTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_tunnel iosxe_interface_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
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
    this._bfdEcho = config.bfdEcho;
    this._bfdEnable = config.bfdEnable;
    this._bfdInterval = config.bfdInterval;
    this._bfdIntervalMinRx = config.bfdIntervalMinRx;
    this._bfdIntervalMultiplier = config.bfdIntervalMultiplier;
    this._bfdLocalAddress = config.bfdLocalAddress;
    this._bfdTemplate = config.bfdTemplate;
    this._cryptoIpsecDfBit = config.cryptoIpsecDfBit;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._helperAddresses.internalValue = config.helperAddresses;
    this._ipAccessGroupIn = config.ipAccessGroupIn;
    this._ipAccessGroupInEnable = config.ipAccessGroupInEnable;
    this._ipAccessGroupOut = config.ipAccessGroupOut;
    this._ipAccessGroupOutEnable = config.ipAccessGroupOutEnable;
    this._ipDhcpRelaySourceInterface = config.ipDhcpRelaySourceInterface;
    this._ipIgmpVersion = config.ipIgmpVersion;
    this._ipMtu = config.ipMtu;
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
    this._loadInterval = config.loadInterval;
    this._loggingEventLinkStatusEnable = config.loggingEventLinkStatusEnable;
    this._name = config.name;
    this._shutdown = config.shutdown;
    this._snmpTrapLinkStatus = config.snmpTrapLinkStatus;
    this._tunnelDestinationIpv4 = config.tunnelDestinationIpv4;
    this._tunnelModeIpsecIpv4 = config.tunnelModeIpsecIpv4;
    this._tunnelProtectionIpsecProfile = config.tunnelProtectionIpsecProfile;
    this._tunnelSource = config.tunnelSource;
    this._tunnelVrf = config.tunnelVrf;
    this._unnumbered = config.unnumbered;
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

  // bfd_echo - computed: false, optional: true, required: false
  private _bfdEcho?: boolean | cdktf.IResolvable; 
  public get bfdEcho() {
    return this.getBooleanAttribute('bfd_echo');
  }
  public set bfdEcho(value: boolean | cdktf.IResolvable) {
    this._bfdEcho = value;
  }
  public resetBfdEcho() {
    this._bfdEcho = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEchoInput() {
    return this._bfdEcho;
  }

  // bfd_enable - computed: false, optional: true, required: false
  private _bfdEnable?: boolean | cdktf.IResolvable; 
  public get bfdEnable() {
    return this.getBooleanAttribute('bfd_enable');
  }
  public set bfdEnable(value: boolean | cdktf.IResolvable) {
    this._bfdEnable = value;
  }
  public resetBfdEnable() {
    this._bfdEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnableInput() {
    return this._bfdEnable;
  }

  // bfd_interval - computed: false, optional: true, required: false
  private _bfdInterval?: number; 
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }
  public set bfdInterval(value: number) {
    this._bfdInterval = value;
  }
  public resetBfdInterval() {
    this._bfdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalInput() {
    return this._bfdInterval;
  }

  // bfd_interval_min_rx - computed: false, optional: true, required: false
  private _bfdIntervalMinRx?: number; 
  public get bfdIntervalMinRx() {
    return this.getNumberAttribute('bfd_interval_min_rx');
  }
  public set bfdIntervalMinRx(value: number) {
    this._bfdIntervalMinRx = value;
  }
  public resetBfdIntervalMinRx() {
    this._bfdIntervalMinRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalMinRxInput() {
    return this._bfdIntervalMinRx;
  }

  // bfd_interval_multiplier - computed: false, optional: true, required: false
  private _bfdIntervalMultiplier?: number; 
  public get bfdIntervalMultiplier() {
    return this.getNumberAttribute('bfd_interval_multiplier');
  }
  public set bfdIntervalMultiplier(value: number) {
    this._bfdIntervalMultiplier = value;
  }
  public resetBfdIntervalMultiplier() {
    this._bfdIntervalMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalMultiplierInput() {
    return this._bfdIntervalMultiplier;
  }

  // bfd_local_address - computed: false, optional: true, required: false
  private _bfdLocalAddress?: string; 
  public get bfdLocalAddress() {
    return this.getStringAttribute('bfd_local_address');
  }
  public set bfdLocalAddress(value: string) {
    this._bfdLocalAddress = value;
  }
  public resetBfdLocalAddress() {
    this._bfdLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdLocalAddressInput() {
    return this._bfdLocalAddress;
  }

  // bfd_template - computed: false, optional: true, required: false
  private _bfdTemplate?: string; 
  public get bfdTemplate() {
    return this.getStringAttribute('bfd_template');
  }
  public set bfdTemplate(value: string) {
    this._bfdTemplate = value;
  }
  public resetBfdTemplate() {
    this._bfdTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdTemplateInput() {
    return this._bfdTemplate;
  }

  // crypto_ipsec_df_bit - computed: false, optional: true, required: false
  private _cryptoIpsecDfBit?: string; 
  public get cryptoIpsecDfBit() {
    return this.getStringAttribute('crypto_ipsec_df_bit');
  }
  public set cryptoIpsecDfBit(value: string) {
    this._cryptoIpsecDfBit = value;
  }
  public resetCryptoIpsecDfBit() {
    this._cryptoIpsecDfBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoIpsecDfBitInput() {
    return this._cryptoIpsecDfBit;
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

  // helper_addresses - computed: false, optional: true, required: false
  private _helperAddresses = new InterfaceTunnelHelperAddressesList(this, "helper_addresses", false);
  public get helperAddresses() {
    return this._helperAddresses;
  }
  public putHelperAddresses(value: InterfaceTunnelHelperAddresses[] | cdktf.IResolvable) {
    this._helperAddresses.internalValue = value;
  }
  public resetHelperAddresses() {
    this._helperAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperAddressesInput() {
    return this._helperAddresses.internalValue;
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

  // ip_dhcp_relay_source_interface - computed: false, optional: true, required: false
  private _ipDhcpRelaySourceInterface?: string; 
  public get ipDhcpRelaySourceInterface() {
    return this.getStringAttribute('ip_dhcp_relay_source_interface');
  }
  public set ipDhcpRelaySourceInterface(value: string) {
    this._ipDhcpRelaySourceInterface = value;
  }
  public resetIpDhcpRelaySourceInterface() {
    this._ipDhcpRelaySourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDhcpRelaySourceInterfaceInput() {
    return this._ipDhcpRelaySourceInterface;
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

  // ip_mtu - computed: false, optional: true, required: false
  private _ipMtu?: number; 
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }
  public set ipMtu(value: number) {
    this._ipMtu = value;
  }
  public resetIpMtu() {
    this._ipMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuInput() {
    return this._ipMtu;
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
  private _ipv6Addresses = new InterfaceTunnelIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: InterfaceTunnelIpv6Addresses[] | cdktf.IResolvable) {
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
  private _ipv6LinkLocalAddresses = new InterfaceTunnelIpv6LinkLocalAddressesList(this, "ipv6_link_local_addresses", false);
  public get ipv6LinkLocalAddresses() {
    return this._ipv6LinkLocalAddresses;
  }
  public putIpv6LinkLocalAddresses(value: InterfaceTunnelIpv6LinkLocalAddresses[] | cdktf.IResolvable) {
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

  // load_interval - computed: false, optional: true, required: false
  private _loadInterval?: number; 
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }
  public set loadInterval(value: number) {
    this._loadInterval = value;
  }
  public resetLoadInterval() {
    this._loadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadIntervalInput() {
    return this._loadInterval;
  }

  // logging_event_link_status_enable - computed: false, optional: true, required: false
  private _loggingEventLinkStatusEnable?: boolean | cdktf.IResolvable; 
  public get loggingEventLinkStatusEnable() {
    return this.getBooleanAttribute('logging_event_link_status_enable');
  }
  public set loggingEventLinkStatusEnable(value: boolean | cdktf.IResolvable) {
    this._loggingEventLinkStatusEnable = value;
  }
  public resetLoggingEventLinkStatusEnable() {
    this._loggingEventLinkStatusEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEventLinkStatusEnableInput() {
    return this._loggingEventLinkStatusEnable;
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

  // snmp_trap_link_status - computed: false, optional: true, required: false
  private _snmpTrapLinkStatus?: boolean | cdktf.IResolvable; 
  public get snmpTrapLinkStatus() {
    return this.getBooleanAttribute('snmp_trap_link_status');
  }
  public set snmpTrapLinkStatus(value: boolean | cdktf.IResolvable) {
    this._snmpTrapLinkStatus = value;
  }
  public resetSnmpTrapLinkStatus() {
    this._snmpTrapLinkStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapLinkStatusInput() {
    return this._snmpTrapLinkStatus;
  }

  // tunnel_destination_ipv4 - computed: false, optional: true, required: false
  private _tunnelDestinationIpv4?: string; 
  public get tunnelDestinationIpv4() {
    return this.getStringAttribute('tunnel_destination_ipv4');
  }
  public set tunnelDestinationIpv4(value: string) {
    this._tunnelDestinationIpv4 = value;
  }
  public resetTunnelDestinationIpv4() {
    this._tunnelDestinationIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationIpv4Input() {
    return this._tunnelDestinationIpv4;
  }

  // tunnel_mode_ipsec_ipv4 - computed: false, optional: true, required: false
  private _tunnelModeIpsecIpv4?: boolean | cdktf.IResolvable; 
  public get tunnelModeIpsecIpv4() {
    return this.getBooleanAttribute('tunnel_mode_ipsec_ipv4');
  }
  public set tunnelModeIpsecIpv4(value: boolean | cdktf.IResolvable) {
    this._tunnelModeIpsecIpv4 = value;
  }
  public resetTunnelModeIpsecIpv4() {
    this._tunnelModeIpsecIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelModeIpsecIpv4Input() {
    return this._tunnelModeIpsecIpv4;
  }

  // tunnel_protection_ipsec_profile - computed: false, optional: true, required: false
  private _tunnelProtectionIpsecProfile?: string; 
  public get tunnelProtectionIpsecProfile() {
    return this.getStringAttribute('tunnel_protection_ipsec_profile');
  }
  public set tunnelProtectionIpsecProfile(value: string) {
    this._tunnelProtectionIpsecProfile = value;
  }
  public resetTunnelProtectionIpsecProfile() {
    this._tunnelProtectionIpsecProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProtectionIpsecProfileInput() {
    return this._tunnelProtectionIpsecProfile;
  }

  // tunnel_source - computed: false, optional: true, required: false
  private _tunnelSource?: string; 
  public get tunnelSource() {
    return this.getStringAttribute('tunnel_source');
  }
  public set tunnelSource(value: string) {
    this._tunnelSource = value;
  }
  public resetTunnelSource() {
    this._tunnelSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInput() {
    return this._tunnelSource;
  }

  // tunnel_vrf - computed: false, optional: true, required: false
  private _tunnelVrf?: string; 
  public get tunnelVrf() {
    return this.getStringAttribute('tunnel_vrf');
  }
  public set tunnelVrf(value: string) {
    this._tunnelVrf = value;
  }
  public resetTunnelVrf() {
    this._tunnelVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelVrfInput() {
    return this._tunnelVrf;
  }

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: string; 
  public get unnumbered() {
    return this.getStringAttribute('unnumbered');
  }
  public set unnumbered(value: string) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
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
      bfd_echo: cdktf.booleanToTerraform(this._bfdEcho),
      bfd_enable: cdktf.booleanToTerraform(this._bfdEnable),
      bfd_interval: cdktf.numberToTerraform(this._bfdInterval),
      bfd_interval_min_rx: cdktf.numberToTerraform(this._bfdIntervalMinRx),
      bfd_interval_multiplier: cdktf.numberToTerraform(this._bfdIntervalMultiplier),
      bfd_local_address: cdktf.stringToTerraform(this._bfdLocalAddress),
      bfd_template: cdktf.stringToTerraform(this._bfdTemplate),
      crypto_ipsec_df_bit: cdktf.stringToTerraform(this._cryptoIpsecDfBit),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      helper_addresses: cdktf.listMapper(interfaceTunnelHelperAddressesToTerraform, false)(this._helperAddresses.internalValue),
      ip_access_group_in: cdktf.stringToTerraform(this._ipAccessGroupIn),
      ip_access_group_in_enable: cdktf.booleanToTerraform(this._ipAccessGroupInEnable),
      ip_access_group_out: cdktf.stringToTerraform(this._ipAccessGroupOut),
      ip_access_group_out_enable: cdktf.booleanToTerraform(this._ipAccessGroupOutEnable),
      ip_dhcp_relay_source_interface: cdktf.stringToTerraform(this._ipDhcpRelaySourceInterface),
      ip_igmp_version: cdktf.numberToTerraform(this._ipIgmpVersion),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_proxy_arp: cdktf.booleanToTerraform(this._ipProxyArp),
      ip_redirects: cdktf.booleanToTerraform(this._ipRedirects),
      ip_router_isis: cdktf.stringToTerraform(this._ipRouterIsis),
      ip_unreachables: cdktf.booleanToTerraform(this._ipUnreachables),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_mask: cdktf.stringToTerraform(this._ipv4AddressMask),
      ipv6_address_autoconfig_default: cdktf.booleanToTerraform(this._ipv6AddressAutoconfigDefault),
      ipv6_address_dhcp: cdktf.booleanToTerraform(this._ipv6AddressDhcp),
      ipv6_addresses: cdktf.listMapper(interfaceTunnelIpv6AddressesToTerraform, false)(this._ipv6Addresses.internalValue),
      ipv6_enable: cdktf.booleanToTerraform(this._ipv6Enable),
      ipv6_link_local_addresses: cdktf.listMapper(interfaceTunnelIpv6LinkLocalAddressesToTerraform, false)(this._ipv6LinkLocalAddresses.internalValue),
      ipv6_mtu: cdktf.numberToTerraform(this._ipv6Mtu),
      ipv6_nd_ra_suppress_all: cdktf.booleanToTerraform(this._ipv6NdRaSuppressAll),
      load_interval: cdktf.numberToTerraform(this._loadInterval),
      logging_event_link_status_enable: cdktf.booleanToTerraform(this._loggingEventLinkStatusEnable),
      name: cdktf.numberToTerraform(this._name),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      snmp_trap_link_status: cdktf.booleanToTerraform(this._snmpTrapLinkStatus),
      tunnel_destination_ipv4: cdktf.stringToTerraform(this._tunnelDestinationIpv4),
      tunnel_mode_ipsec_ipv4: cdktf.booleanToTerraform(this._tunnelModeIpsecIpv4),
      tunnel_protection_ipsec_profile: cdktf.stringToTerraform(this._tunnelProtectionIpsecProfile),
      tunnel_source: cdktf.stringToTerraform(this._tunnelSource),
      tunnel_vrf: cdktf.stringToTerraform(this._tunnelVrf),
      unnumbered: cdktf.stringToTerraform(this._unnumbered),
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
      bfd_echo: {
        value: cdktf.booleanToHclTerraform(this._bfdEcho),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_enable: {
        value: cdktf.booleanToHclTerraform(this._bfdEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_interval: {
        value: cdktf.numberToHclTerraform(this._bfdInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_interval_min_rx: {
        value: cdktf.numberToHclTerraform(this._bfdIntervalMinRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_interval_multiplier: {
        value: cdktf.numberToHclTerraform(this._bfdIntervalMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_local_address: {
        value: cdktf.stringToHclTerraform(this._bfdLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_template: {
        value: cdktf.stringToHclTerraform(this._bfdTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crypto_ipsec_df_bit: {
        value: cdktf.stringToHclTerraform(this._cryptoIpsecDfBit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      helper_addresses: {
        value: cdktf.listMapperHcl(interfaceTunnelHelperAddressesToHclTerraform, false)(this._helperAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTunnelHelperAddressesList",
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
      ip_dhcp_relay_source_interface: {
        value: cdktf.stringToHclTerraform(this._ipDhcpRelaySourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_igmp_version: {
        value: cdktf.numberToHclTerraform(this._ipIgmpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_mtu: {
        value: cdktf.numberToHclTerraform(this._ipMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: cdktf.listMapperHcl(interfaceTunnelIpv6AddressesToHclTerraform, false)(this._ipv6Addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTunnelIpv6AddressesList",
      },
      ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_link_local_addresses: {
        value: cdktf.listMapperHcl(interfaceTunnelIpv6LinkLocalAddressesToHclTerraform, false)(this._ipv6LinkLocalAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTunnelIpv6LinkLocalAddressesList",
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
      load_interval: {
        value: cdktf.numberToHclTerraform(this._loadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logging_event_link_status_enable: {
        value: cdktf.booleanToHclTerraform(this._loggingEventLinkStatusEnable),
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
      snmp_trap_link_status: {
        value: cdktf.booleanToHclTerraform(this._snmpTrapLinkStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_destination_ipv4: {
        value: cdktf.stringToHclTerraform(this._tunnelDestinationIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_mode_ipsec_ipv4: {
        value: cdktf.booleanToHclTerraform(this._tunnelModeIpsecIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_protection_ipsec_profile: {
        value: cdktf.stringToHclTerraform(this._tunnelProtectionIpsecProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source: {
        value: cdktf.stringToHclTerraform(this._tunnelSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_vrf: {
        value: cdktf.stringToHclTerraform(this._tunnelVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unnumbered: {
        value: cdktf.stringToHclTerraform(this._unnumbered),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
