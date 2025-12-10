// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfacePortChannelSubinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set ARP cache timeout
  *   - Range: `0`-`2147483`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#arp_timeout InterfacePortChannelSubinterface#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Configure classification for untrusted devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_classify InterfacePortChannelSubinterface#auto_qos_classify}
  */
  readonly autoQosClassify?: boolean | cdktf.IResolvable;
  /**
  * Configure QoS policing for untrusted devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_classify_police InterfacePortChannelSubinterface#auto_qos_classify_police}
  */
  readonly autoQosClassifyPolice?: boolean | cdktf.IResolvable;
  /**
  * Trust the DSCP/CoS marking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_trust InterfacePortChannelSubinterface#auto_qos_trust}
  */
  readonly autoQosTrust?: boolean | cdktf.IResolvable;
  /**
  * Trust the CoS marking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_trust_cos InterfacePortChannelSubinterface#auto_qos_trust_cos}
  */
  readonly autoQosTrustCos?: boolean | cdktf.IResolvable;
  /**
  * Trust the DSCP marking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_trust_dscp InterfacePortChannelSubinterface#auto_qos_trust_dscp}
  */
  readonly autoQosTrustDscp?: boolean | cdktf.IResolvable;
  /**
  * Trust the QoS marking of the Cisco Telepresence System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_video_cts InterfacePortChannelSubinterface#auto_qos_video_cts}
  */
  readonly autoQosVideoCts?: boolean | cdktf.IResolvable;
  /**
  * Trust the QoS marking of the Ip Video Surveillance camera
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_video_ip_camera InterfacePortChannelSubinterface#auto_qos_video_ip_camera}
  */
  readonly autoQosVideoIpCamera?: boolean | cdktf.IResolvable;
  /**
  * Trust the Qos marking of the Cisco Media Player
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_video_media_player InterfacePortChannelSubinterface#auto_qos_video_media_player}
  */
  readonly autoQosVideoMediaPlayer?: boolean | cdktf.IResolvable;
  /**
  * Configure AutoQoS for VoIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_voip InterfacePortChannelSubinterface#auto_qos_voip}
  */
  readonly autoQosVoip?: boolean | cdktf.IResolvable;
  /**
  * Trust the QoS marking of Cisco IP Phone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_voip_cisco_phone InterfacePortChannelSubinterface#auto_qos_voip_cisco_phone}
  */
  readonly autoQosVoipCiscoPhone?: boolean | cdktf.IResolvable;
  /**
  * Trust the QoS marking of Cisco IP SoftPhone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_voip_cisco_softphone InterfacePortChannelSubinterface#auto_qos_voip_cisco_softphone}
  */
  readonly autoQosVoipCiscoSoftphone?: boolean | cdktf.IResolvable;
  /**
  * Trust the DSCP/CoS marking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#auto_qos_voip_trust InterfacePortChannelSubinterface#auto_qos_voip_trust}
  */
  readonly autoQosVoipTrust?: boolean | cdktf.IResolvable;
  /**
  * Use echo adjunct as bfd detection mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#bfd_echo InterfacePortChannelSubinterface#bfd_echo}
  */
  readonly bfdEcho?: boolean | cdktf.IResolvable;
  /**
  * Enable BFD under the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#bfd_enable InterfacePortChannelSubinterface#bfd_enable}
  */
  readonly bfdEnable?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `50`-`9999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#bfd_interval InterfacePortChannelSubinterface#bfd_interval}
  */
  readonly bfdInterval?: number;
  /**
  * Minimum receive interval capability
  *   - Range: `50`-`9999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#bfd_interval_min_rx InterfacePortChannelSubinterface#bfd_interval_min_rx}
  */
  readonly bfdIntervalMinRx?: number;
  /**
  * Multiplier value used to compute holddown
  *   - Range: `3`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#bfd_interval_multiplier InterfacePortChannelSubinterface#bfd_interval_multiplier}
  */
  readonly bfdIntervalMultiplier?: number;
  /**
  * The Source IP address to be used for BFD sessions over this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#bfd_local_address InterfacePortChannelSubinterface#bfd_local_address}
  */
  readonly bfdLocalAddress?: string;
  /**
  * BFD template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#bfd_template InterfacePortChannelSubinterface#bfd_template}
  */
  readonly bfdTemplate?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#delete_mode InterfacePortChannelSubinterface#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Interface specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#description InterfacePortChannelSubinterface#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#device InterfacePortChannelSubinterface#device}
  */
  readonly device?: string;
  /**
  * 
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#encapsulation_dot1q_vlan_id InterfacePortChannelSubinterface#encapsulation_dot1q_vlan_id}
  */
  readonly encapsulationDot1QVlanId?: number;
  /**
  * Specify a destination address for UDP broadcasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#helper_addresses InterfacePortChannelSubinterface#helper_addresses}
  */
  readonly helperAddresses?: InterfacePortChannelSubinterfaceHelperAddresses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_access_group_in InterfacePortChannelSubinterface#ip_access_group_in}
  */
  readonly ipAccessGroupIn?: string;
  /**
  * inbound packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_access_group_in_enable InterfacePortChannelSubinterface#ip_access_group_in_enable}
  */
  readonly ipAccessGroupInEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_access_group_out InterfacePortChannelSubinterface#ip_access_group_out}
  */
  readonly ipAccessGroupOut?: string;
  /**
  * outbound packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_access_group_out_enable InterfacePortChannelSubinterface#ip_access_group_out_enable}
  */
  readonly ipAccessGroupOutEnable?: boolean | cdktf.IResolvable;
  /**
  * Rate Limit
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_arp_inspection_limit_rate InterfacePortChannelSubinterface#ip_arp_inspection_limit_rate}
  */
  readonly ipArpInspectionLimitRate?: number;
  /**
  * Configure Trust state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_arp_inspection_trust InterfacePortChannelSubinterface#ip_arp_inspection_trust}
  */
  readonly ipArpInspectionTrust?: boolean | cdktf.IResolvable;
  /**
  * IGMP version
  *   - Range: `1`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_igmp_version InterfacePortChannelSubinterface#ip_igmp_version}
  */
  readonly ipIgmpVersion?: number;
  /**
  * Enable proxy ARP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_proxy_arp InterfacePortChannelSubinterface#ip_proxy_arp}
  */
  readonly ipProxyArp?: boolean | cdktf.IResolvable;
  /**
  * Enable sending ICMP Redirect messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_redirects InterfacePortChannelSubinterface#ip_redirects}
  */
  readonly ipRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_router_isis InterfacePortChannelSubinterface#ip_router_isis}
  */
  readonly ipRouterIsis?: string;
  /**
  * Enable sending ICMP Unreachable messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ip_unreachables InterfacePortChannelSubinterface#ip_unreachables}
  */
  readonly ipUnreachables?: boolean | cdktf.IResolvable;
  /**
  * Ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ipv4_address InterfacePortChannelSubinterface#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Ip subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ipv4_address_mask InterfacePortChannelSubinterface#ipv4_address_mask}
  */
  readonly ipv4AddressMask?: string;
  /**
  * Insert default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ipv6_address_autoconfig_default InterfacePortChannelSubinterface#ipv6_address_autoconfig_default}
  */
  readonly ipv6AddressAutoconfigDefault?: boolean | cdktf.IResolvable;
  /**
  * Obtain IPv6 address from DHCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ipv6_address_dhcp InterfacePortChannelSubinterface#ipv6_address_dhcp}
  */
  readonly ipv6AddressDhcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ipv6_addresses InterfacePortChannelSubinterface#ipv6_addresses}
  */
  readonly ipv6Addresses?: InterfacePortChannelSubinterfaceIpv6Addresses[] | cdktf.IResolvable;
  /**
  * Enable IPv6 on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ipv6_enable InterfacePortChannelSubinterface#ipv6_enable}
  */
  readonly ipv6Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ipv6_link_local_addresses InterfacePortChannelSubinterface#ipv6_link_local_addresses}
  */
  readonly ipv6LinkLocalAddresses?: InterfacePortChannelSubinterfaceIpv6LinkLocalAddresses[] | cdktf.IResolvable;
  /**
  * Set IPv6 Maximum Transmission Unit
  *   - Range: `1280`-`9976`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ipv6_mtu InterfacePortChannelSubinterface#ipv6_mtu}
  */
  readonly ipv6Mtu?: number;
  /**
  * Suppress all IPv6 RA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#ipv6_nd_ra_suppress_all InterfacePortChannelSubinterface#ipv6_nd_ra_suppress_all}
  */
  readonly ipv6NdRaSuppressAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#name InterfacePortChannelSubinterface#name}
  */
  readonly name: string;
  /**
  * Shutdown the selected interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#shutdown InterfacePortChannelSubinterface#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * trusted device class
  *   - Choices: `cisco-phone`, `cts`, `ip-camera`, `media-player`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#trust_device InterfacePortChannelSubinterface#trust_device}
  */
  readonly trustDevice?: string;
  /**
  * Configure forwarding table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#vrf_forwarding InterfacePortChannelSubinterface#vrf_forwarding}
  */
  readonly vrfForwarding?: string;
}
export interface InterfacePortChannelSubinterfaceHelperAddresses {
  /**
  * IP destination address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#address InterfacePortChannelSubinterface#address}
  */
  readonly address: string;
  /**
  * Helper-address is global
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#global InterfacePortChannelSubinterface#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * VRF name for helper-address (if different from interface VRF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#vrf InterfacePortChannelSubinterface#vrf}
  */
  readonly vrf?: string;
}

export function interfacePortChannelSubinterfaceHelperAddressesToTerraform(struct?: InterfacePortChannelSubinterfaceHelperAddresses | cdktf.IResolvable): any {
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


export function interfacePortChannelSubinterfaceHelperAddressesToHclTerraform(struct?: InterfacePortChannelSubinterfaceHelperAddresses | cdktf.IResolvable): any {
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

export class InterfacePortChannelSubinterfaceHelperAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePortChannelSubinterfaceHelperAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfacePortChannelSubinterfaceHelperAddresses | cdktf.IResolvable | undefined) {
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

export class InterfacePortChannelSubinterfaceHelperAddressesList extends cdktf.ComplexList {
  public internalValue? : InterfacePortChannelSubinterfaceHelperAddresses[] | cdktf.IResolvable

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
  public get(index: number): InterfacePortChannelSubinterfaceHelperAddressesOutputReference {
    return new InterfacePortChannelSubinterfaceHelperAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfacePortChannelSubinterfaceIpv6Addresses {
  /**
  * Use eui-64 interface identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#eui_64 InterfacePortChannelSubinterface#eui_64}
  */
  readonly eui64?: boolean | cdktf.IResolvable;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#prefix InterfacePortChannelSubinterface#prefix}
  */
  readonly prefix: string;
}

export function interfacePortChannelSubinterfaceIpv6AddressesToTerraform(struct?: InterfacePortChannelSubinterfaceIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eui_64: cdktf.booleanToTerraform(struct!.eui64),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function interfacePortChannelSubinterfaceIpv6AddressesToHclTerraform(struct?: InterfacePortChannelSubinterfaceIpv6Addresses | cdktf.IResolvable): any {
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

export class InterfacePortChannelSubinterfaceIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePortChannelSubinterfaceIpv6Addresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfacePortChannelSubinterfaceIpv6Addresses | cdktf.IResolvable | undefined) {
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

export class InterfacePortChannelSubinterfaceIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : InterfacePortChannelSubinterfaceIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): InterfacePortChannelSubinterfaceIpv6AddressesOutputReference {
    return new InterfacePortChannelSubinterfaceIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfacePortChannelSubinterfaceIpv6LinkLocalAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#address InterfacePortChannelSubinterface#address}
  */
  readonly address: string;
  /**
  * Use link-local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#link_local InterfacePortChannelSubinterface#link_local}
  */
  readonly linkLocal?: boolean | cdktf.IResolvable;
}

export function interfacePortChannelSubinterfaceIpv6LinkLocalAddressesToTerraform(struct?: InterfacePortChannelSubinterfaceIpv6LinkLocalAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    link_local: cdktf.booleanToTerraform(struct!.linkLocal),
  }
}


export function interfacePortChannelSubinterfaceIpv6LinkLocalAddressesToHclTerraform(struct?: InterfacePortChannelSubinterfaceIpv6LinkLocalAddresses | cdktf.IResolvable): any {
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

export class InterfacePortChannelSubinterfaceIpv6LinkLocalAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePortChannelSubinterfaceIpv6LinkLocalAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InterfacePortChannelSubinterfaceIpv6LinkLocalAddresses | cdktf.IResolvable | undefined) {
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

export class InterfacePortChannelSubinterfaceIpv6LinkLocalAddressesList extends cdktf.ComplexList {
  public internalValue? : InterfacePortChannelSubinterfaceIpv6LinkLocalAddresses[] | cdktf.IResolvable

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
  public get(index: number): InterfacePortChannelSubinterfaceIpv6LinkLocalAddressesOutputReference {
    return new InterfacePortChannelSubinterfaceIpv6LinkLocalAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface iosxe_interface_port_channel_subinterface}
*/
export class InterfacePortChannelSubinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_port_channel_subinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfacePortChannelSubinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfacePortChannelSubinterface to import
  * @param importFromId The id of the existing InterfacePortChannelSubinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfacePortChannelSubinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_port_channel_subinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_port_channel_subinterface iosxe_interface_port_channel_subinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfacePortChannelSubinterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: InterfacePortChannelSubinterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_port_channel_subinterface',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
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
    this._autoQosClassify = config.autoQosClassify;
    this._autoQosClassifyPolice = config.autoQosClassifyPolice;
    this._autoQosTrust = config.autoQosTrust;
    this._autoQosTrustCos = config.autoQosTrustCos;
    this._autoQosTrustDscp = config.autoQosTrustDscp;
    this._autoQosVideoCts = config.autoQosVideoCts;
    this._autoQosVideoIpCamera = config.autoQosVideoIpCamera;
    this._autoQosVideoMediaPlayer = config.autoQosVideoMediaPlayer;
    this._autoQosVoip = config.autoQosVoip;
    this._autoQosVoipCiscoPhone = config.autoQosVoipCiscoPhone;
    this._autoQosVoipCiscoSoftphone = config.autoQosVoipCiscoSoftphone;
    this._autoQosVoipTrust = config.autoQosVoipTrust;
    this._bfdEcho = config.bfdEcho;
    this._bfdEnable = config.bfdEnable;
    this._bfdInterval = config.bfdInterval;
    this._bfdIntervalMinRx = config.bfdIntervalMinRx;
    this._bfdIntervalMultiplier = config.bfdIntervalMultiplier;
    this._bfdLocalAddress = config.bfdLocalAddress;
    this._bfdTemplate = config.bfdTemplate;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._encapsulationDot1QVlanId = config.encapsulationDot1QVlanId;
    this._helperAddresses.internalValue = config.helperAddresses;
    this._ipAccessGroupIn = config.ipAccessGroupIn;
    this._ipAccessGroupInEnable = config.ipAccessGroupInEnable;
    this._ipAccessGroupOut = config.ipAccessGroupOut;
    this._ipAccessGroupOutEnable = config.ipAccessGroupOutEnable;
    this._ipArpInspectionLimitRate = config.ipArpInspectionLimitRate;
    this._ipArpInspectionTrust = config.ipArpInspectionTrust;
    this._ipIgmpVersion = config.ipIgmpVersion;
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
    this._trustDevice = config.trustDevice;
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

  // auto_qos_classify - computed: false, optional: true, required: false
  private _autoQosClassify?: boolean | cdktf.IResolvable; 
  public get autoQosClassify() {
    return this.getBooleanAttribute('auto_qos_classify');
  }
  public set autoQosClassify(value: boolean | cdktf.IResolvable) {
    this._autoQosClassify = value;
  }
  public resetAutoQosClassify() {
    this._autoQosClassify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosClassifyInput() {
    return this._autoQosClassify;
  }

  // auto_qos_classify_police - computed: false, optional: true, required: false
  private _autoQosClassifyPolice?: boolean | cdktf.IResolvable; 
  public get autoQosClassifyPolice() {
    return this.getBooleanAttribute('auto_qos_classify_police');
  }
  public set autoQosClassifyPolice(value: boolean | cdktf.IResolvable) {
    this._autoQosClassifyPolice = value;
  }
  public resetAutoQosClassifyPolice() {
    this._autoQosClassifyPolice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosClassifyPoliceInput() {
    return this._autoQosClassifyPolice;
  }

  // auto_qos_trust - computed: false, optional: true, required: false
  private _autoQosTrust?: boolean | cdktf.IResolvable; 
  public get autoQosTrust() {
    return this.getBooleanAttribute('auto_qos_trust');
  }
  public set autoQosTrust(value: boolean | cdktf.IResolvable) {
    this._autoQosTrust = value;
  }
  public resetAutoQosTrust() {
    this._autoQosTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosTrustInput() {
    return this._autoQosTrust;
  }

  // auto_qos_trust_cos - computed: false, optional: true, required: false
  private _autoQosTrustCos?: boolean | cdktf.IResolvable; 
  public get autoQosTrustCos() {
    return this.getBooleanAttribute('auto_qos_trust_cos');
  }
  public set autoQosTrustCos(value: boolean | cdktf.IResolvable) {
    this._autoQosTrustCos = value;
  }
  public resetAutoQosTrustCos() {
    this._autoQosTrustCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosTrustCosInput() {
    return this._autoQosTrustCos;
  }

  // auto_qos_trust_dscp - computed: false, optional: true, required: false
  private _autoQosTrustDscp?: boolean | cdktf.IResolvable; 
  public get autoQosTrustDscp() {
    return this.getBooleanAttribute('auto_qos_trust_dscp');
  }
  public set autoQosTrustDscp(value: boolean | cdktf.IResolvable) {
    this._autoQosTrustDscp = value;
  }
  public resetAutoQosTrustDscp() {
    this._autoQosTrustDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosTrustDscpInput() {
    return this._autoQosTrustDscp;
  }

  // auto_qos_video_cts - computed: false, optional: true, required: false
  private _autoQosVideoCts?: boolean | cdktf.IResolvable; 
  public get autoQosVideoCts() {
    return this.getBooleanAttribute('auto_qos_video_cts');
  }
  public set autoQosVideoCts(value: boolean | cdktf.IResolvable) {
    this._autoQosVideoCts = value;
  }
  public resetAutoQosVideoCts() {
    this._autoQosVideoCts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVideoCtsInput() {
    return this._autoQosVideoCts;
  }

  // auto_qos_video_ip_camera - computed: false, optional: true, required: false
  private _autoQosVideoIpCamera?: boolean | cdktf.IResolvable; 
  public get autoQosVideoIpCamera() {
    return this.getBooleanAttribute('auto_qos_video_ip_camera');
  }
  public set autoQosVideoIpCamera(value: boolean | cdktf.IResolvable) {
    this._autoQosVideoIpCamera = value;
  }
  public resetAutoQosVideoIpCamera() {
    this._autoQosVideoIpCamera = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVideoIpCameraInput() {
    return this._autoQosVideoIpCamera;
  }

  // auto_qos_video_media_player - computed: false, optional: true, required: false
  private _autoQosVideoMediaPlayer?: boolean | cdktf.IResolvable; 
  public get autoQosVideoMediaPlayer() {
    return this.getBooleanAttribute('auto_qos_video_media_player');
  }
  public set autoQosVideoMediaPlayer(value: boolean | cdktf.IResolvable) {
    this._autoQosVideoMediaPlayer = value;
  }
  public resetAutoQosVideoMediaPlayer() {
    this._autoQosVideoMediaPlayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVideoMediaPlayerInput() {
    return this._autoQosVideoMediaPlayer;
  }

  // auto_qos_voip - computed: false, optional: true, required: false
  private _autoQosVoip?: boolean | cdktf.IResolvable; 
  public get autoQosVoip() {
    return this.getBooleanAttribute('auto_qos_voip');
  }
  public set autoQosVoip(value: boolean | cdktf.IResolvable) {
    this._autoQosVoip = value;
  }
  public resetAutoQosVoip() {
    this._autoQosVoip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVoipInput() {
    return this._autoQosVoip;
  }

  // auto_qos_voip_cisco_phone - computed: false, optional: true, required: false
  private _autoQosVoipCiscoPhone?: boolean | cdktf.IResolvable; 
  public get autoQosVoipCiscoPhone() {
    return this.getBooleanAttribute('auto_qos_voip_cisco_phone');
  }
  public set autoQosVoipCiscoPhone(value: boolean | cdktf.IResolvable) {
    this._autoQosVoipCiscoPhone = value;
  }
  public resetAutoQosVoipCiscoPhone() {
    this._autoQosVoipCiscoPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVoipCiscoPhoneInput() {
    return this._autoQosVoipCiscoPhone;
  }

  // auto_qos_voip_cisco_softphone - computed: false, optional: true, required: false
  private _autoQosVoipCiscoSoftphone?: boolean | cdktf.IResolvable; 
  public get autoQosVoipCiscoSoftphone() {
    return this.getBooleanAttribute('auto_qos_voip_cisco_softphone');
  }
  public set autoQosVoipCiscoSoftphone(value: boolean | cdktf.IResolvable) {
    this._autoQosVoipCiscoSoftphone = value;
  }
  public resetAutoQosVoipCiscoSoftphone() {
    this._autoQosVoipCiscoSoftphone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVoipCiscoSoftphoneInput() {
    return this._autoQosVoipCiscoSoftphone;
  }

  // auto_qos_voip_trust - computed: false, optional: true, required: false
  private _autoQosVoipTrust?: boolean | cdktf.IResolvable; 
  public get autoQosVoipTrust() {
    return this.getBooleanAttribute('auto_qos_voip_trust');
  }
  public set autoQosVoipTrust(value: boolean | cdktf.IResolvable) {
    this._autoQosVoipTrust = value;
  }
  public resetAutoQosVoipTrust() {
    this._autoQosVoipTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQosVoipTrustInput() {
    return this._autoQosVoipTrust;
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

  // encapsulation_dot1q_vlan_id - computed: false, optional: true, required: false
  private _encapsulationDot1QVlanId?: number; 
  public get encapsulationDot1QVlanId() {
    return this.getNumberAttribute('encapsulation_dot1q_vlan_id');
  }
  public set encapsulationDot1QVlanId(value: number) {
    this._encapsulationDot1QVlanId = value;
  }
  public resetEncapsulationDot1QVlanId() {
    this._encapsulationDot1QVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationDot1QVlanIdInput() {
    return this._encapsulationDot1QVlanId;
  }

  // helper_addresses - computed: false, optional: true, required: false
  private _helperAddresses = new InterfacePortChannelSubinterfaceHelperAddressesList(this, "helper_addresses", false);
  public get helperAddresses() {
    return this._helperAddresses;
  }
  public putHelperAddresses(value: InterfacePortChannelSubinterfaceHelperAddresses[] | cdktf.IResolvable) {
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

  // ip_arp_inspection_limit_rate - computed: false, optional: true, required: false
  private _ipArpInspectionLimitRate?: number; 
  public get ipArpInspectionLimitRate() {
    return this.getNumberAttribute('ip_arp_inspection_limit_rate');
  }
  public set ipArpInspectionLimitRate(value: number) {
    this._ipArpInspectionLimitRate = value;
  }
  public resetIpArpInspectionLimitRate() {
    this._ipArpInspectionLimitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipArpInspectionLimitRateInput() {
    return this._ipArpInspectionLimitRate;
  }

  // ip_arp_inspection_trust - computed: false, optional: true, required: false
  private _ipArpInspectionTrust?: boolean | cdktf.IResolvable; 
  public get ipArpInspectionTrust() {
    return this.getBooleanAttribute('ip_arp_inspection_trust');
  }
  public set ipArpInspectionTrust(value: boolean | cdktf.IResolvable) {
    this._ipArpInspectionTrust = value;
  }
  public resetIpArpInspectionTrust() {
    this._ipArpInspectionTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipArpInspectionTrustInput() {
    return this._ipArpInspectionTrust;
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
  private _ipv6Addresses = new InterfacePortChannelSubinterfaceIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: InterfacePortChannelSubinterfaceIpv6Addresses[] | cdktf.IResolvable) {
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
  private _ipv6LinkLocalAddresses = new InterfacePortChannelSubinterfaceIpv6LinkLocalAddressesList(this, "ipv6_link_local_addresses", false);
  public get ipv6LinkLocalAddresses() {
    return this._ipv6LinkLocalAddresses;
  }
  public putIpv6LinkLocalAddresses(value: InterfacePortChannelSubinterfaceIpv6LinkLocalAddresses[] | cdktf.IResolvable) {
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
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
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

  // trust_device - computed: false, optional: true, required: false
  private _trustDevice?: string; 
  public get trustDevice() {
    return this.getStringAttribute('trust_device');
  }
  public set trustDevice(value: string) {
    this._trustDevice = value;
  }
  public resetTrustDevice() {
    this._trustDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDeviceInput() {
    return this._trustDevice;
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
      auto_qos_classify: cdktf.booleanToTerraform(this._autoQosClassify),
      auto_qos_classify_police: cdktf.booleanToTerraform(this._autoQosClassifyPolice),
      auto_qos_trust: cdktf.booleanToTerraform(this._autoQosTrust),
      auto_qos_trust_cos: cdktf.booleanToTerraform(this._autoQosTrustCos),
      auto_qos_trust_dscp: cdktf.booleanToTerraform(this._autoQosTrustDscp),
      auto_qos_video_cts: cdktf.booleanToTerraform(this._autoQosVideoCts),
      auto_qos_video_ip_camera: cdktf.booleanToTerraform(this._autoQosVideoIpCamera),
      auto_qos_video_media_player: cdktf.booleanToTerraform(this._autoQosVideoMediaPlayer),
      auto_qos_voip: cdktf.booleanToTerraform(this._autoQosVoip),
      auto_qos_voip_cisco_phone: cdktf.booleanToTerraform(this._autoQosVoipCiscoPhone),
      auto_qos_voip_cisco_softphone: cdktf.booleanToTerraform(this._autoQosVoipCiscoSoftphone),
      auto_qos_voip_trust: cdktf.booleanToTerraform(this._autoQosVoipTrust),
      bfd_echo: cdktf.booleanToTerraform(this._bfdEcho),
      bfd_enable: cdktf.booleanToTerraform(this._bfdEnable),
      bfd_interval: cdktf.numberToTerraform(this._bfdInterval),
      bfd_interval_min_rx: cdktf.numberToTerraform(this._bfdIntervalMinRx),
      bfd_interval_multiplier: cdktf.numberToTerraform(this._bfdIntervalMultiplier),
      bfd_local_address: cdktf.stringToTerraform(this._bfdLocalAddress),
      bfd_template: cdktf.stringToTerraform(this._bfdTemplate),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      encapsulation_dot1q_vlan_id: cdktf.numberToTerraform(this._encapsulationDot1QVlanId),
      helper_addresses: cdktf.listMapper(interfacePortChannelSubinterfaceHelperAddressesToTerraform, false)(this._helperAddresses.internalValue),
      ip_access_group_in: cdktf.stringToTerraform(this._ipAccessGroupIn),
      ip_access_group_in_enable: cdktf.booleanToTerraform(this._ipAccessGroupInEnable),
      ip_access_group_out: cdktf.stringToTerraform(this._ipAccessGroupOut),
      ip_access_group_out_enable: cdktf.booleanToTerraform(this._ipAccessGroupOutEnable),
      ip_arp_inspection_limit_rate: cdktf.numberToTerraform(this._ipArpInspectionLimitRate),
      ip_arp_inspection_trust: cdktf.booleanToTerraform(this._ipArpInspectionTrust),
      ip_igmp_version: cdktf.numberToTerraform(this._ipIgmpVersion),
      ip_proxy_arp: cdktf.booleanToTerraform(this._ipProxyArp),
      ip_redirects: cdktf.booleanToTerraform(this._ipRedirects),
      ip_router_isis: cdktf.stringToTerraform(this._ipRouterIsis),
      ip_unreachables: cdktf.booleanToTerraform(this._ipUnreachables),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_mask: cdktf.stringToTerraform(this._ipv4AddressMask),
      ipv6_address_autoconfig_default: cdktf.booleanToTerraform(this._ipv6AddressAutoconfigDefault),
      ipv6_address_dhcp: cdktf.booleanToTerraform(this._ipv6AddressDhcp),
      ipv6_addresses: cdktf.listMapper(interfacePortChannelSubinterfaceIpv6AddressesToTerraform, false)(this._ipv6Addresses.internalValue),
      ipv6_enable: cdktf.booleanToTerraform(this._ipv6Enable),
      ipv6_link_local_addresses: cdktf.listMapper(interfacePortChannelSubinterfaceIpv6LinkLocalAddressesToTerraform, false)(this._ipv6LinkLocalAddresses.internalValue),
      ipv6_mtu: cdktf.numberToTerraform(this._ipv6Mtu),
      ipv6_nd_ra_suppress_all: cdktf.booleanToTerraform(this._ipv6NdRaSuppressAll),
      name: cdktf.stringToTerraform(this._name),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      trust_device: cdktf.stringToTerraform(this._trustDevice),
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
      auto_qos_classify: {
        value: cdktf.booleanToHclTerraform(this._autoQosClassify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_classify_police: {
        value: cdktf.booleanToHclTerraform(this._autoQosClassifyPolice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_trust: {
        value: cdktf.booleanToHclTerraform(this._autoQosTrust),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_trust_cos: {
        value: cdktf.booleanToHclTerraform(this._autoQosTrustCos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_trust_dscp: {
        value: cdktf.booleanToHclTerraform(this._autoQosTrustDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_video_cts: {
        value: cdktf.booleanToHclTerraform(this._autoQosVideoCts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_video_ip_camera: {
        value: cdktf.booleanToHclTerraform(this._autoQosVideoIpCamera),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_video_media_player: {
        value: cdktf.booleanToHclTerraform(this._autoQosVideoMediaPlayer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_voip: {
        value: cdktf.booleanToHclTerraform(this._autoQosVoip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_voip_cisco_phone: {
        value: cdktf.booleanToHclTerraform(this._autoQosVoipCiscoPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_voip_cisco_softphone: {
        value: cdktf.booleanToHclTerraform(this._autoQosVoipCiscoSoftphone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qos_voip_trust: {
        value: cdktf.booleanToHclTerraform(this._autoQosVoipTrust),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      encapsulation_dot1q_vlan_id: {
        value: cdktf.numberToHclTerraform(this._encapsulationDot1QVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      helper_addresses: {
        value: cdktf.listMapperHcl(interfacePortChannelSubinterfaceHelperAddressesToHclTerraform, false)(this._helperAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfacePortChannelSubinterfaceHelperAddressesList",
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
      ip_arp_inspection_limit_rate: {
        value: cdktf.numberToHclTerraform(this._ipArpInspectionLimitRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_arp_inspection_trust: {
        value: cdktf.booleanToHclTerraform(this._ipArpInspectionTrust),
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
        value: cdktf.listMapperHcl(interfacePortChannelSubinterfaceIpv6AddressesToHclTerraform, false)(this._ipv6Addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfacePortChannelSubinterfaceIpv6AddressesList",
      },
      ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_link_local_addresses: {
        value: cdktf.listMapperHcl(interfacePortChannelSubinterfaceIpv6LinkLocalAddressesToHclTerraform, false)(this._ipv6LinkLocalAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfacePortChannelSubinterfaceIpv6LinkLocalAddressesList",
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
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trust_device: {
        value: cdktf.stringToHclTerraform(this._trustDevice),
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
