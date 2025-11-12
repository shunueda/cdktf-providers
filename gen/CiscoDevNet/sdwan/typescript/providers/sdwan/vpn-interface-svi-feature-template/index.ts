// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnInterfaceSviFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timeout value for dynamically learned ARP entries, <0..2678400> seconds
  *   - Range: `0`-`2678400`
  *   - Default value: `1200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#arp_timeout VpnInterfaceSviFeatureTemplate#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#arp_timeout_variable VpnInterfaceSviFeatureTemplate#arp_timeout_variable}
  */
  readonly arpTimeoutVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#description VpnInterfaceSviFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#device_types VpnInterfaceSviFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Interface name: VLAN 1 - VLAN 4094 when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#if_name VpnInterfaceSviFeatureTemplate#if_name}
  */
  readonly ifName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#if_name_variable VpnInterfaceSviFeatureTemplate#if_name_variable}
  */
  readonly ifNameVariable?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#interface_description VpnInterfaceSviFeatureTemplate#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#interface_description_variable VpnInterfaceSviFeatureTemplate#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * IP Directed-Broadcast
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ip_directed_broadcast VpnInterfaceSviFeatureTemplate#ip_directed_broadcast}
  */
  readonly ipDirectedBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ip_directed_broadcast_variable VpnInterfaceSviFeatureTemplate#ip_directed_broadcast_variable}
  */
  readonly ipDirectedBroadcastVariable?: string;
  /**
  * IP MTU <576..Interface MTU>, in bytes
  *   - Range: `576`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ip_mtu VpnInterfaceSviFeatureTemplate#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ip_mtu_variable VpnInterfaceSviFeatureTemplate#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * Apply ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_access_lists VpnInterfaceSviFeatureTemplate#ipv4_access_lists}
  */
  readonly ipv4AccessLists?: VpnInterfaceSviFeatureTemplateIpv4AccessLists[] | cdktf.IResolvable;
  /**
  * Assign IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_address VpnInterfaceSviFeatureTemplate#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_address_variable VpnInterfaceSviFeatureTemplate#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * List of DHCP helper addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_dhcp_helper VpnInterfaceSviFeatureTemplate#ipv4_dhcp_helper}
  */
  readonly ipv4DhcpHelper?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_dhcp_helper_variable VpnInterfaceSviFeatureTemplate#ipv4_dhcp_helper_variable}
  */
  readonly ipv4DhcpHelperVariable?: string;
  /**
  * Assign secondary IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_secondary_addresses VpnInterfaceSviFeatureTemplate#ipv4_secondary_addresses}
  */
  readonly ipv4SecondaryAddresses?: VpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Enable VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_vrrps VpnInterfaceSviFeatureTemplate#ipv4_vrrps}
  */
  readonly ipv4Vrrps?: VpnInterfaceSviFeatureTemplateIpv4Vrrps[] | cdktf.IResolvable;
  /**
  * Apply ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_access_lists VpnInterfaceSviFeatureTemplate#ipv6_access_lists}
  */
  readonly ipv6AccessLists?: VpnInterfaceSviFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable;
  /**
  * Assign IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_address VpnInterfaceSviFeatureTemplate#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_address_variable VpnInterfaceSviFeatureTemplate#ipv6_address_variable}
  */
  readonly ipv6AddressVariable?: string;
  /**
  * Enable DHCPv6
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_dhcp_client VpnInterfaceSviFeatureTemplate#ipv6_dhcp_client}
  */
  readonly ipv6DhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_dhcp_client_variable VpnInterfaceSviFeatureTemplate#ipv6_dhcp_client_variable}
  */
  readonly ipv6DhcpClientVariable?: string;
  /**
  * Set administrative distance for DHCP default route
  *   - Range: `1`-`65536`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_dhcp_distance VpnInterfaceSviFeatureTemplate#ipv6_dhcp_distance}
  */
  readonly ipv6DhcpDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_dhcp_distance_variable VpnInterfaceSviFeatureTemplate#ipv6_dhcp_distance_variable}
  */
  readonly ipv6DhcpDistanceVariable?: string;
  /**
  * DHCPv6 Helper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_dhcp_helpers VpnInterfaceSviFeatureTemplate#ipv6_dhcp_helpers}
  */
  readonly ipv6DhcpHelpers?: VpnInterfaceSviFeatureTemplateIpv6DhcpHelpers[] | cdktf.IResolvable;
  /**
  * Enable DHCPv6 rapid commit
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_dhcp_rapid_commit VpnInterfaceSviFeatureTemplate#ipv6_dhcp_rapid_commit}
  */
  readonly ipv6DhcpRapidCommit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_dhcp_rapid_commit_variable VpnInterfaceSviFeatureTemplate#ipv6_dhcp_rapid_commit_variable}
  */
  readonly ipv6DhcpRapidCommitVariable?: string;
  /**
  * Assign secondary IPv6 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_secondary_addresses VpnInterfaceSviFeatureTemplate#ipv6_secondary_addresses}
  */
  readonly ipv6SecondaryAddresses?: VpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Enable VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_vrrps VpnInterfaceSviFeatureTemplate#ipv6_vrrps}
  */
  readonly ipv6Vrrps?: VpnInterfaceSviFeatureTemplateIpv6Vrrps[] | cdktf.IResolvable;
  /**
  * Interface MTU <1500..9216> in bytes
  *   - Range: `1500`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#mtu VpnInterfaceSviFeatureTemplate#mtu}
  */
  readonly mtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#mtu_variable VpnInterfaceSviFeatureTemplate#mtu_variable}
  */
  readonly mtuVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#name VpnInterfaceSviFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Enable policer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#policers VpnInterfaceSviFeatureTemplate#policers}
  */
  readonly policers?: VpnInterfaceSviFeatureTemplatePolicers[] | cdktf.IResolvable;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#shutdown VpnInterfaceSviFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#shutdown_variable VpnInterfaceSviFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Configure static ARP entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#static_arp_entries VpnInterfaceSviFeatureTemplate#static_arp_entries}
  */
  readonly staticArpEntries?: VpnInterfaceSviFeatureTemplateStaticArpEntries[] | cdktf.IResolvable;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `552`-`1960`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#tcp_mss_adjust VpnInterfaceSviFeatureTemplate#tcp_mss_adjust}
  */
  readonly tcpMssAdjust?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#tcp_mss_adjust_variable VpnInterfaceSviFeatureTemplate#tcp_mss_adjust_variable}
  */
  readonly tcpMssAdjustVariable?: string;
}
export interface VpnInterfaceSviFeatureTemplateIpv4AccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#acl_name VpnInterfaceSviFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#acl_name_variable VpnInterfaceSviFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#direction VpnInterfaceSviFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceSviFeatureTemplateIpv4AccessListsToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv4AccessLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    acl_name_variable: cdktf.stringToTerraform(struct!.aclNameVariable),
    direction: cdktf.stringToTerraform(struct!.direction),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv4AccessListsToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv4AccessLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.aclNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv4AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv4AccessLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._aclNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameVariable = this._aclNameVariable;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv4AccessLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclName = undefined;
      this._aclNameVariable = undefined;
      this._direction = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclName = value.aclName;
      this._aclNameVariable = value.aclNameVariable;
      this._direction = value.direction;
      this._optional = value.optional;
    }
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // acl_name_variable - computed: false, optional: true, required: false
  private _aclNameVariable?: string; 
  public get aclNameVariable() {
    return this.getStringAttribute('acl_name_variable');
  }
  public set aclNameVariable(value: string) {
    this._aclNameVariable = value;
  }
  public resetAclNameVariable() {
    this._aclNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameVariableInput() {
    return this._aclNameVariable;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv4AccessListsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv4AccessLists[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv4AccessListsOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv4AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_address VpnInterfaceSviFeatureTemplate#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_address_variable VpnInterfaceSviFeatureTemplate#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_variable: cdktf.stringToTerraform(struct!.ipv4AddressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressVariable = this._ipv4AddressVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressVariable = value.ipv4AddressVariable;
      this._optional = value.optional;
    }
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

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses {
  /**
  * VRRP Secondary IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_address VpnInterfaceSviFeatureTemplate#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_address_variable VpnInterfaceSviFeatureTemplate#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_variable: cdktf.stringToTerraform(struct!.ipv4AddressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressVariable = this._ipv4AddressVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressVariable = value.ipv4AddressVariable;
      this._optional = value.optional;
    }
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

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects {
  /**
  * Decrement Value for VRRP priority
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#decrement_value VpnInterfaceSviFeatureTemplate#decrement_value}
  */
  readonly decrementValue?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#decrement_value_variable VpnInterfaceSviFeatureTemplate#decrement_value_variable}
  */
  readonly decrementValueVariable?: string;
  /**
  * Tracker ID
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#name VpnInterfaceSviFeatureTemplate#name}
  */
  readonly name?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#name_variable VpnInterfaceSviFeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Track Action
  *   - Choices: `decrement`, `shutdown`
  *   - Default value: `decrement`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#track_action VpnInterfaceSviFeatureTemplate#track_action}
  */
  readonly trackAction?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#track_action_variable VpnInterfaceSviFeatureTemplate#track_action_variable}
  */
  readonly trackActionVariable?: string;
}

export function vpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decrement_value: cdktf.numberToTerraform(struct!.decrementValue),
    decrement_value_variable: cdktf.stringToTerraform(struct!.decrementValueVariable),
    name: cdktf.numberToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    track_action: cdktf.stringToTerraform(struct!.trackAction),
    track_action_variable: cdktf.stringToTerraform(struct!.trackActionVariable),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decrement_value: {
      value: cdktf.numberToHclTerraform(struct!.decrementValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decrement_value_variable: {
      value: cdktf.stringToHclTerraform(struct!.decrementValueVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_action: {
      value: cdktf.stringToHclTerraform(struct!.trackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_action_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackActionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decrementValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decrementValue = this._decrementValue;
    }
    if (this._decrementValueVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.decrementValueVariable = this._decrementValueVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._trackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackAction = this._trackAction;
    }
    if (this._trackActionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackActionVariable = this._trackActionVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decrementValue = undefined;
      this._decrementValueVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._optional = undefined;
      this._trackAction = undefined;
      this._trackActionVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decrementValue = value.decrementValue;
      this._decrementValueVariable = value.decrementValueVariable;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._optional = value.optional;
      this._trackAction = value.trackAction;
      this._trackActionVariable = value.trackActionVariable;
    }
  }

  // decrement_value - computed: false, optional: true, required: false
  private _decrementValue?: number; 
  public get decrementValue() {
    return this.getNumberAttribute('decrement_value');
  }
  public set decrementValue(value: number) {
    this._decrementValue = value;
  }
  public resetDecrementValue() {
    this._decrementValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decrementValueInput() {
    return this._decrementValue;
  }

  // decrement_value_variable - computed: false, optional: true, required: false
  private _decrementValueVariable?: string; 
  public get decrementValueVariable() {
    return this.getStringAttribute('decrement_value_variable');
  }
  public set decrementValueVariable(value: string) {
    this._decrementValueVariable = value;
  }
  public resetDecrementValueVariable() {
    this._decrementValueVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decrementValueVariableInput() {
    return this._decrementValueVariable;
  }

  // name - computed: false, optional: true, required: false
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // track_action - computed: false, optional: true, required: false
  private _trackAction?: string; 
  public get trackAction() {
    return this.getStringAttribute('track_action');
  }
  public set trackAction(value: string) {
    this._trackAction = value;
  }
  public resetTrackAction() {
    this._trackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackActionInput() {
    return this._trackAction;
  }

  // track_action_variable - computed: false, optional: true, required: false
  private _trackActionVariable?: string; 
  public get trackActionVariable() {
    return this.getStringAttribute('track_action_variable');
  }
  public set trackActionVariable(value: string) {
    this._trackActionVariable = value;
  }
  public resetTrackActionVariable() {
    this._trackActionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackActionVariableInput() {
    return this._trackActionVariable;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateIpv4Vrrps {
  /**
  * Group ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#group_id VpnInterfaceSviFeatureTemplate#group_id}
  */
  readonly groupId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#group_id_variable VpnInterfaceSviFeatureTemplate#group_id_variable}
  */
  readonly groupIdVariable?: string;
  /**
  * Assign IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_address VpnInterfaceSviFeatureTemplate#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_address_variable VpnInterfaceSviFeatureTemplate#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * VRRP Secondary IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_secondary_addresses VpnInterfaceSviFeatureTemplate#ipv4_secondary_addresses}
  */
  readonly ipv4SecondaryAddresses?: VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set priority
  *   - Range: `1`-`254`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#priority VpnInterfaceSviFeatureTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#priority_variable VpnInterfaceSviFeatureTemplate#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * Timer interval for successive advertisements, in milliseconds
  *   - Range: `100`-`40950`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#timer VpnInterfaceSviFeatureTemplate#timer}
  */
  readonly timer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#timer_variable VpnInterfaceSviFeatureTemplate#timer_variable}
  */
  readonly timerVariable?: string;
  /**
  * change TLOC preference
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#tloc_preference_change VpnInterfaceSviFeatureTemplate#tloc_preference_change}
  */
  readonly tlocPreferenceChange?: boolean | cdktf.IResolvable;
  /**
  * Set tloc preference change value
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#tloc_preference_change_value VpnInterfaceSviFeatureTemplate#tloc_preference_change_value}
  */
  readonly tlocPreferenceChangeValue?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#tloc_preference_change_value_variable VpnInterfaceSviFeatureTemplate#tloc_preference_change_value_variable}
  */
  readonly tlocPreferenceChangeValueVariable?: string;
  /**
  * Track OMP status
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#track_omp VpnInterfaceSviFeatureTemplate#track_omp}
  */
  readonly trackOmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#track_omp_variable VpnInterfaceSviFeatureTemplate#track_omp_variable}
  */
  readonly trackOmpVariable?: string;
  /**
  * Track Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#track_prefix_list VpnInterfaceSviFeatureTemplate#track_prefix_list}
  */
  readonly trackPrefixList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#track_prefix_list_variable VpnInterfaceSviFeatureTemplate#track_prefix_list_variable}
  */
  readonly trackPrefixListVariable?: string;
  /**
  * tracking object for VRRP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#tracking_objects VpnInterfaceSviFeatureTemplate#tracking_objects}
  */
  readonly trackingObjects?: VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects[] | cdktf.IResolvable;
}

export function vpnInterfaceSviFeatureTemplateIpv4VrrpsToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv4Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    group_id_variable: cdktf.stringToTerraform(struct!.groupIdVariable),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_variable: cdktf.stringToTerraform(struct!.ipv4AddressVariable),
    ipv4_secondary_addresses: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToTerraform, false)(struct!.ipv4SecondaryAddresses),
    optional: cdktf.booleanToTerraform(struct!.optional),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    timer: cdktf.numberToTerraform(struct!.timer),
    timer_variable: cdktf.stringToTerraform(struct!.timerVariable),
    tloc_preference_change: cdktf.booleanToTerraform(struct!.tlocPreferenceChange),
    tloc_preference_change_value: cdktf.numberToTerraform(struct!.tlocPreferenceChangeValue),
    tloc_preference_change_value_variable: cdktf.stringToTerraform(struct!.tlocPreferenceChangeValueVariable),
    track_omp: cdktf.booleanToTerraform(struct!.trackOmp),
    track_omp_variable: cdktf.stringToTerraform(struct!.trackOmpVariable),
    track_prefix_list: cdktf.stringToTerraform(struct!.trackPrefixList),
    track_prefix_list_variable: cdktf.stringToTerraform(struct!.trackPrefixListVariable),
    tracking_objects: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsToTerraform, false)(struct!.trackingObjects),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv4VrrpsToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv4Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.groupIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_secondary_addresses: {
      value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToHclTerraform, false)(struct!.ipv4SecondaryAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_variable: {
      value: cdktf.stringToHclTerraform(struct!.priorityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer: {
      value: cdktf.numberToHclTerraform(struct!.timer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_variable: {
      value: cdktf.stringToHclTerraform(struct!.timerVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_preference_change: {
      value: cdktf.booleanToHclTerraform(struct!.tlocPreferenceChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tloc_preference_change_value: {
      value: cdktf.numberToHclTerraform(struct!.tlocPreferenceChangeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tloc_preference_change_value_variable: {
      value: cdktf.stringToHclTerraform(struct!.tlocPreferenceChangeValueVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_omp: {
      value: cdktf.booleanToHclTerraform(struct!.trackOmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_omp_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackOmpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.trackPrefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_prefix_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackPrefixListVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracking_objects: {
      value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsToHclTerraform, false)(struct!.trackingObjects),
      isBlock: true,
      type: "list",
      storageClassType: "VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv4VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv4Vrrps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdVariable = this._groupIdVariable;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressVariable = this._ipv4AddressVariable;
    }
    if (this._ipv4SecondaryAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4SecondaryAddresses = this._ipv4SecondaryAddresses?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityVariable = this._priorityVariable;
    }
    if (this._timer !== undefined) {
      hasAnyValues = true;
      internalValueResult.timer = this._timer;
    }
    if (this._timerVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerVariable = this._timerVariable;
    }
    if (this._tlocPreferenceChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPreferenceChange = this._tlocPreferenceChange;
    }
    if (this._tlocPreferenceChangeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPreferenceChangeValue = this._tlocPreferenceChangeValue;
    }
    if (this._tlocPreferenceChangeValueVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPreferenceChangeValueVariable = this._tlocPreferenceChangeValueVariable;
    }
    if (this._trackOmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOmp = this._trackOmp;
    }
    if (this._trackOmpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOmpVariable = this._trackOmpVariable;
    }
    if (this._trackPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackPrefixList = this._trackPrefixList;
    }
    if (this._trackPrefixListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackPrefixListVariable = this._trackPrefixListVariable;
    }
    if (this._trackingObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingObjects = this._trackingObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv4Vrrps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._groupIdVariable = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressVariable = undefined;
      this._ipv4SecondaryAddresses.internalValue = undefined;
      this._optional = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
      this._timer = undefined;
      this._timerVariable = undefined;
      this._tlocPreferenceChange = undefined;
      this._tlocPreferenceChangeValue = undefined;
      this._tlocPreferenceChangeValueVariable = undefined;
      this._trackOmp = undefined;
      this._trackOmpVariable = undefined;
      this._trackPrefixList = undefined;
      this._trackPrefixListVariable = undefined;
      this._trackingObjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._groupIdVariable = value.groupIdVariable;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressVariable = value.ipv4AddressVariable;
      this._ipv4SecondaryAddresses.internalValue = value.ipv4SecondaryAddresses;
      this._optional = value.optional;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._timer = value.timer;
      this._timerVariable = value.timerVariable;
      this._tlocPreferenceChange = value.tlocPreferenceChange;
      this._tlocPreferenceChangeValue = value.tlocPreferenceChangeValue;
      this._tlocPreferenceChangeValueVariable = value.tlocPreferenceChangeValueVariable;
      this._trackOmp = value.trackOmp;
      this._trackOmpVariable = value.trackOmpVariable;
      this._trackPrefixList = value.trackPrefixList;
      this._trackPrefixListVariable = value.trackPrefixListVariable;
      this._trackingObjects.internalValue = value.trackingObjects;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_id_variable - computed: false, optional: true, required: false
  private _groupIdVariable?: string; 
  public get groupIdVariable() {
    return this.getStringAttribute('group_id_variable');
  }
  public set groupIdVariable(value: string) {
    this._groupIdVariable = value;
  }
  public resetGroupIdVariable() {
    this._groupIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdVariableInput() {
    return this._groupIdVariable;
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

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
  }

  // ipv4_secondary_addresses - computed: false, optional: true, required: false
  private _ipv4SecondaryAddresses = new VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }
  public putIpv4SecondaryAddresses(value: VpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses[] | cdktf.IResolvable) {
    this._ipv4SecondaryAddresses.internalValue = value;
  }
  public resetIpv4SecondaryAddresses() {
    this._ipv4SecondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SecondaryAddressesInput() {
    return this._ipv4SecondaryAddresses.internalValue;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_variable - computed: false, optional: true, required: false
  private _priorityVariable?: string; 
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
  public set priorityVariable(value: string) {
    this._priorityVariable = value;
  }
  public resetPriorityVariable() {
    this._priorityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityVariableInput() {
    return this._priorityVariable;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // timer_variable - computed: false, optional: true, required: false
  private _timerVariable?: string; 
  public get timerVariable() {
    return this.getStringAttribute('timer_variable');
  }
  public set timerVariable(value: string) {
    this._timerVariable = value;
  }
  public resetTimerVariable() {
    this._timerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerVariableInput() {
    return this._timerVariable;
  }

  // tloc_preference_change - computed: false, optional: true, required: false
  private _tlocPreferenceChange?: boolean | cdktf.IResolvable; 
  public get tlocPreferenceChange() {
    return this.getBooleanAttribute('tloc_preference_change');
  }
  public set tlocPreferenceChange(value: boolean | cdktf.IResolvable) {
    this._tlocPreferenceChange = value;
  }
  public resetTlocPreferenceChange() {
    this._tlocPreferenceChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocPreferenceChangeInput() {
    return this._tlocPreferenceChange;
  }

  // tloc_preference_change_value - computed: false, optional: true, required: false
  private _tlocPreferenceChangeValue?: number; 
  public get tlocPreferenceChangeValue() {
    return this.getNumberAttribute('tloc_preference_change_value');
  }
  public set tlocPreferenceChangeValue(value: number) {
    this._tlocPreferenceChangeValue = value;
  }
  public resetTlocPreferenceChangeValue() {
    this._tlocPreferenceChangeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocPreferenceChangeValueInput() {
    return this._tlocPreferenceChangeValue;
  }

  // tloc_preference_change_value_variable - computed: false, optional: true, required: false
  private _tlocPreferenceChangeValueVariable?: string; 
  public get tlocPreferenceChangeValueVariable() {
    return this.getStringAttribute('tloc_preference_change_value_variable');
  }
  public set tlocPreferenceChangeValueVariable(value: string) {
    this._tlocPreferenceChangeValueVariable = value;
  }
  public resetTlocPreferenceChangeValueVariable() {
    this._tlocPreferenceChangeValueVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocPreferenceChangeValueVariableInput() {
    return this._tlocPreferenceChangeValueVariable;
  }

  // track_omp - computed: false, optional: true, required: false
  private _trackOmp?: boolean | cdktf.IResolvable; 
  public get trackOmp() {
    return this.getBooleanAttribute('track_omp');
  }
  public set trackOmp(value: boolean | cdktf.IResolvable) {
    this._trackOmp = value;
  }
  public resetTrackOmp() {
    this._trackOmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackOmpInput() {
    return this._trackOmp;
  }

  // track_omp_variable - computed: false, optional: true, required: false
  private _trackOmpVariable?: string; 
  public get trackOmpVariable() {
    return this.getStringAttribute('track_omp_variable');
  }
  public set trackOmpVariable(value: string) {
    this._trackOmpVariable = value;
  }
  public resetTrackOmpVariable() {
    this._trackOmpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackOmpVariableInput() {
    return this._trackOmpVariable;
  }

  // track_prefix_list - computed: false, optional: true, required: false
  private _trackPrefixList?: string; 
  public get trackPrefixList() {
    return this.getStringAttribute('track_prefix_list');
  }
  public set trackPrefixList(value: string) {
    this._trackPrefixList = value;
  }
  public resetTrackPrefixList() {
    this._trackPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackPrefixListInput() {
    return this._trackPrefixList;
  }

  // track_prefix_list_variable - computed: false, optional: true, required: false
  private _trackPrefixListVariable?: string; 
  public get trackPrefixListVariable() {
    return this.getStringAttribute('track_prefix_list_variable');
  }
  public set trackPrefixListVariable(value: string) {
    this._trackPrefixListVariable = value;
  }
  public resetTrackPrefixListVariable() {
    this._trackPrefixListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackPrefixListVariableInput() {
    return this._trackPrefixListVariable;
  }

  // tracking_objects - computed: false, optional: true, required: false
  private _trackingObjects = new VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsList(this, "tracking_objects", false);
  public get trackingObjects() {
    return this._trackingObjects;
  }
  public putTrackingObjects(value: VpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects[] | cdktf.IResolvable) {
    this._trackingObjects.internalValue = value;
  }
  public resetTrackingObjects() {
    this._trackingObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingObjectsInput() {
    return this._trackingObjects.internalValue;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv4VrrpsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv4Vrrps[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv4VrrpsOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv4VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateIpv6AccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#acl_name VpnInterfaceSviFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#acl_name_variable VpnInterfaceSviFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#direction VpnInterfaceSviFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceSviFeatureTemplateIpv6AccessListsToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6AccessLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    acl_name_variable: cdktf.stringToTerraform(struct!.aclNameVariable),
    direction: cdktf.stringToTerraform(struct!.direction),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv6AccessListsToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6AccessLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.aclNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv6AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv6AccessLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._aclNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameVariable = this._aclNameVariable;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv6AccessLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclName = undefined;
      this._aclNameVariable = undefined;
      this._direction = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclName = value.aclName;
      this._aclNameVariable = value.aclNameVariable;
      this._direction = value.direction;
      this._optional = value.optional;
    }
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // acl_name_variable - computed: false, optional: true, required: false
  private _aclNameVariable?: string; 
  public get aclNameVariable() {
    return this.getStringAttribute('acl_name_variable');
  }
  public set aclNameVariable(value: string) {
    this._aclNameVariable = value;
  }
  public resetAclNameVariable() {
    this._aclNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameVariableInput() {
    return this._aclNameVariable;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv6AccessListsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv6AccessListsOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv6AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateIpv6DhcpHelpers {
  /**
  * DHCPv6 Helper address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#address VpnInterfaceSviFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#address_variable VpnInterfaceSviFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * DHCPv6 Helper VPN
  *   - Range: `1`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#vpn_id VpnInterfaceSviFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#vpn_id_variable VpnInterfaceSviFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function vpnInterfaceSviFeatureTemplateIpv6DhcpHelpersToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6DhcpHelpers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv6DhcpHelpersToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6DhcpHelpers | cdktf.IResolvable): any {
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
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv6DhcpHelpersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv6DhcpHelpers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIdVariable = this._vpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv6DhcpHelpers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._optional = undefined;
      this._vpnId = undefined;
      this._vpnIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
      this._optional = value.optional;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_id_variable - computed: false, optional: true, required: false
  private _vpnIdVariable?: string; 
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
  public set vpnIdVariable(value: string) {
    this._vpnIdVariable = value;
  }
  public resetVpnIdVariable() {
    this._vpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdVariableInput() {
    return this._vpnIdVariable;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv6DhcpHelpersList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv6DhcpHelpers[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv6DhcpHelpersOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv6DhcpHelpersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses {
  /**
  * IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_address VpnInterfaceSviFeatureTemplate#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_address_variable VpnInterfaceSviFeatureTemplate#ipv6_address_variable}
  */
  readonly ipv6AddressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_address_variable: cdktf.stringToTerraform(struct!.ipv6AddressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6AddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressVariable = this._ipv6AddressVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
      this._ipv6AddressVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
      this._ipv6AddressVariable = value.ipv6AddressVariable;
      this._optional = value.optional;
    }
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_address_variable - computed: false, optional: true, required: false
  private _ipv6AddressVariable?: string; 
  public get ipv6AddressVariable() {
    return this.getStringAttribute('ipv6_address_variable');
  }
  public set ipv6AddressVariable(value: string) {
    this._ipv6AddressVariable = value;
  }
  public resetIpv6AddressVariable() {
    this._ipv6AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressVariableInput() {
    return this._ipv6AddressVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses {
  /**
  * Use link-local IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#link_local_address VpnInterfaceSviFeatureTemplate#link_local_address}
  */
  readonly linkLocalAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#link_local_address_variable VpnInterfaceSviFeatureTemplate#link_local_address_variable}
  */
  readonly linkLocalAddressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Assign Global IPv6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#prefix VpnInterfaceSviFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#prefix_variable VpnInterfaceSviFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function vpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_local_address: cdktf.stringToTerraform(struct!.linkLocalAddress),
    link_local_address_variable: cdktf.stringToTerraform(struct!.linkLocalAddressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_local_address: {
      value: cdktf.stringToHclTerraform(struct!.linkLocalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_local_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.linkLocalAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkLocalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkLocalAddress = this._linkLocalAddress;
    }
    if (this._linkLocalAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkLocalAddressVariable = this._linkLocalAddressVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linkLocalAddress = undefined;
      this._linkLocalAddressVariable = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linkLocalAddress = value.linkLocalAddress;
      this._linkLocalAddressVariable = value.linkLocalAddressVariable;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
  }

  // link_local_address - computed: false, optional: true, required: false
  private _linkLocalAddress?: string; 
  public get linkLocalAddress() {
    return this.getStringAttribute('link_local_address');
  }
  public set linkLocalAddress(value: string) {
    this._linkLocalAddress = value;
  }
  public resetLinkLocalAddress() {
    this._linkLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalAddressInput() {
    return this._linkLocalAddress;
  }

  // link_local_address_variable - computed: false, optional: true, required: false
  private _linkLocalAddressVariable?: string; 
  public get linkLocalAddressVariable() {
    return this.getStringAttribute('link_local_address_variable');
  }
  public set linkLocalAddressVariable(value: string) {
    this._linkLocalAddressVariable = value;
  }
  public resetLinkLocalAddressVariable() {
    this._linkLocalAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalAddressVariableInput() {
    return this._linkLocalAddressVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * IPv6 Secondary IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#prefix VpnInterfaceSviFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#prefix_variable VpnInterfaceSviFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function vpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateIpv6Vrrps {
  /**
  * Group ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#group_id VpnInterfaceSviFeatureTemplate#group_id}
  */
  readonly groupId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#group_id_variable VpnInterfaceSviFeatureTemplate#group_id_variable}
  */
  readonly groupIdVariable?: string;
  /**
  * IPv6 VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_addresses VpnInterfaceSviFeatureTemplate#ipv6_addresses}
  */
  readonly ipv6Addresses?: VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses[] | cdktf.IResolvable;
  /**
  * IPv6 Secondary IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv6_secondary_addresses VpnInterfaceSviFeatureTemplate#ipv6_secondary_addresses}
  */
  readonly ipv6SecondaryAddresses?: VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set priority
  *   - Range: `1`-`254`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#priority VpnInterfaceSviFeatureTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#priority_variable VpnInterfaceSviFeatureTemplate#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * Timer interval for successive advertisements, in milliseconds
  *   - Range: `100`-`40950`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#timer VpnInterfaceSviFeatureTemplate#timer}
  */
  readonly timer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#timer_variable VpnInterfaceSviFeatureTemplate#timer_variable}
  */
  readonly timerVariable?: string;
  /**
  * Track OMP status
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#track_omp VpnInterfaceSviFeatureTemplate#track_omp}
  */
  readonly trackOmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#track_omp_variable VpnInterfaceSviFeatureTemplate#track_omp_variable}
  */
  readonly trackOmpVariable?: string;
  /**
  * Track Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#track_prefix_list VpnInterfaceSviFeatureTemplate#track_prefix_list}
  */
  readonly trackPrefixList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#track_prefix_list_variable VpnInterfaceSviFeatureTemplate#track_prefix_list_variable}
  */
  readonly trackPrefixListVariable?: string;
}

export function vpnInterfaceSviFeatureTemplateIpv6VrrpsToTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    group_id_variable: cdktf.stringToTerraform(struct!.groupIdVariable),
    ipv6_addresses: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesToTerraform, false)(struct!.ipv6Addresses),
    ipv6_secondary_addresses: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesToTerraform, false)(struct!.ipv6SecondaryAddresses),
    optional: cdktf.booleanToTerraform(struct!.optional),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    timer: cdktf.numberToTerraform(struct!.timer),
    timer_variable: cdktf.stringToTerraform(struct!.timerVariable),
    track_omp: cdktf.booleanToTerraform(struct!.trackOmp),
    track_omp_variable: cdktf.stringToTerraform(struct!.trackOmpVariable),
    track_prefix_list: cdktf.stringToTerraform(struct!.trackPrefixList),
    track_prefix_list_variable: cdktf.stringToTerraform(struct!.trackPrefixListVariable),
  }
}


export function vpnInterfaceSviFeatureTemplateIpv6VrrpsToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateIpv6Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.groupIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addresses: {
      value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesToHclTerraform, false)(struct!.ipv6Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesList",
    },
    ipv6_secondary_addresses: {
      value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesToHclTerraform, false)(struct!.ipv6SecondaryAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_variable: {
      value: cdktf.stringToHclTerraform(struct!.priorityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer: {
      value: cdktf.numberToHclTerraform(struct!.timer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_variable: {
      value: cdktf.stringToHclTerraform(struct!.timerVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_omp: {
      value: cdktf.booleanToHclTerraform(struct!.trackOmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_omp_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackOmpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.trackPrefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_prefix_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackPrefixListVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateIpv6VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateIpv6Vrrps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdVariable = this._groupIdVariable;
    }
    if (this._ipv6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addresses = this._ipv6Addresses?.internalValue;
    }
    if (this._ipv6SecondaryAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SecondaryAddresses = this._ipv6SecondaryAddresses?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityVariable = this._priorityVariable;
    }
    if (this._timer !== undefined) {
      hasAnyValues = true;
      internalValueResult.timer = this._timer;
    }
    if (this._timerVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerVariable = this._timerVariable;
    }
    if (this._trackOmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOmp = this._trackOmp;
    }
    if (this._trackOmpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOmpVariable = this._trackOmpVariable;
    }
    if (this._trackPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackPrefixList = this._trackPrefixList;
    }
    if (this._trackPrefixListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackPrefixListVariable = this._trackPrefixListVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateIpv6Vrrps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._groupIdVariable = undefined;
      this._ipv6Addresses.internalValue = undefined;
      this._ipv6SecondaryAddresses.internalValue = undefined;
      this._optional = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
      this._timer = undefined;
      this._timerVariable = undefined;
      this._trackOmp = undefined;
      this._trackOmpVariable = undefined;
      this._trackPrefixList = undefined;
      this._trackPrefixListVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._groupIdVariable = value.groupIdVariable;
      this._ipv6Addresses.internalValue = value.ipv6Addresses;
      this._ipv6SecondaryAddresses.internalValue = value.ipv6SecondaryAddresses;
      this._optional = value.optional;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._timer = value.timer;
      this._timerVariable = value.timerVariable;
      this._trackOmp = value.trackOmp;
      this._trackOmpVariable = value.trackOmpVariable;
      this._trackPrefixList = value.trackPrefixList;
      this._trackPrefixListVariable = value.trackPrefixListVariable;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_id_variable - computed: false, optional: true, required: false
  private _groupIdVariable?: string; 
  public get groupIdVariable() {
    return this.getStringAttribute('group_id_variable');
  }
  public set groupIdVariable(value: string) {
    this._groupIdVariable = value;
  }
  public resetGroupIdVariable() {
    this._groupIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdVariableInput() {
    return this._groupIdVariable;
  }

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses = new VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses[] | cdktf.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
  }

  // ipv6_secondary_addresses - computed: false, optional: true, required: false
  private _ipv6SecondaryAddresses = new VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesList(this, "ipv6_secondary_addresses", false);
  public get ipv6SecondaryAddresses() {
    return this._ipv6SecondaryAddresses;
  }
  public putIpv6SecondaryAddresses(value: VpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses[] | cdktf.IResolvable) {
    this._ipv6SecondaryAddresses.internalValue = value;
  }
  public resetIpv6SecondaryAddresses() {
    this._ipv6SecondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SecondaryAddressesInput() {
    return this._ipv6SecondaryAddresses.internalValue;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_variable - computed: false, optional: true, required: false
  private _priorityVariable?: string; 
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
  public set priorityVariable(value: string) {
    this._priorityVariable = value;
  }
  public resetPriorityVariable() {
    this._priorityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityVariableInput() {
    return this._priorityVariable;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // timer_variable - computed: false, optional: true, required: false
  private _timerVariable?: string; 
  public get timerVariable() {
    return this.getStringAttribute('timer_variable');
  }
  public set timerVariable(value: string) {
    this._timerVariable = value;
  }
  public resetTimerVariable() {
    this._timerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerVariableInput() {
    return this._timerVariable;
  }

  // track_omp - computed: false, optional: true, required: false
  private _trackOmp?: boolean | cdktf.IResolvable; 
  public get trackOmp() {
    return this.getBooleanAttribute('track_omp');
  }
  public set trackOmp(value: boolean | cdktf.IResolvable) {
    this._trackOmp = value;
  }
  public resetTrackOmp() {
    this._trackOmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackOmpInput() {
    return this._trackOmp;
  }

  // track_omp_variable - computed: false, optional: true, required: false
  private _trackOmpVariable?: string; 
  public get trackOmpVariable() {
    return this.getStringAttribute('track_omp_variable');
  }
  public set trackOmpVariable(value: string) {
    this._trackOmpVariable = value;
  }
  public resetTrackOmpVariable() {
    this._trackOmpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackOmpVariableInput() {
    return this._trackOmpVariable;
  }

  // track_prefix_list - computed: false, optional: true, required: false
  private _trackPrefixList?: string; 
  public get trackPrefixList() {
    return this.getStringAttribute('track_prefix_list');
  }
  public set trackPrefixList(value: string) {
    this._trackPrefixList = value;
  }
  public resetTrackPrefixList() {
    this._trackPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackPrefixListInput() {
    return this._trackPrefixList;
  }

  // track_prefix_list_variable - computed: false, optional: true, required: false
  private _trackPrefixListVariable?: string; 
  public get trackPrefixListVariable() {
    return this.getStringAttribute('track_prefix_list_variable');
  }
  public set trackPrefixListVariable(value: string) {
    this._trackPrefixListVariable = value;
  }
  public resetTrackPrefixListVariable() {
    this._trackPrefixListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackPrefixListVariableInput() {
    return this._trackPrefixListVariable;
  }
}

export class VpnInterfaceSviFeatureTemplateIpv6VrrpsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateIpv6Vrrps[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateIpv6VrrpsOutputReference {
    return new VpnInterfaceSviFeatureTemplateIpv6VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplatePolicers {
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#direction VpnInterfaceSviFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Name of policer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#policer_name VpnInterfaceSviFeatureTemplate#policer_name}
  */
  readonly policerName?: string;
}

export function vpnInterfaceSviFeatureTemplatePolicersToTerraform(struct?: VpnInterfaceSviFeatureTemplatePolicers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    optional: cdktf.booleanToTerraform(struct!.optional),
    policer_name: cdktf.stringToTerraform(struct!.policerName),
  }
}


export function vpnInterfaceSviFeatureTemplatePolicersToHclTerraform(struct?: VpnInterfaceSviFeatureTemplatePolicers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policer_name: {
      value: cdktf.stringToHclTerraform(struct!.policerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplatePolicersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplatePolicers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._policerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policerName = this._policerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplatePolicers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._optional = undefined;
      this._policerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._optional = value.optional;
      this._policerName = value.policerName;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // policer_name - computed: false, optional: true, required: false
  private _policerName?: string; 
  public get policerName() {
    return this.getStringAttribute('policer_name');
  }
  public set policerName(value: string) {
    this._policerName = value;
  }
  public resetPolicerName() {
    this._policerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerNameInput() {
    return this._policerName;
  }
}

export class VpnInterfaceSviFeatureTemplatePolicersList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplatePolicers[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplatePolicersOutputReference {
    return new VpnInterfaceSviFeatureTemplatePolicersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceSviFeatureTemplateStaticArpEntries {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_address VpnInterfaceSviFeatureTemplate#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#ipv4_address_variable VpnInterfaceSviFeatureTemplate#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#mac_address VpnInterfaceSviFeatureTemplate#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#mac_address_variable VpnInterfaceSviFeatureTemplate#mac_address_variable}
  */
  readonly macAddressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#optional VpnInterfaceSviFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceSviFeatureTemplateStaticArpEntriesToTerraform(struct?: VpnInterfaceSviFeatureTemplateStaticArpEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_variable: cdktf.stringToTerraform(struct!.ipv4AddressVariable),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mac_address_variable: cdktf.stringToTerraform(struct!.macAddressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function vpnInterfaceSviFeatureTemplateStaticArpEntriesToHclTerraform(struct?: VpnInterfaceSviFeatureTemplateStaticArpEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.macAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceSviFeatureTemplateStaticArpEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceSviFeatureTemplateStaticArpEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressVariable = this._ipv4AddressVariable;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._macAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressVariable = this._macAddressVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceSviFeatureTemplateStaticArpEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressVariable = undefined;
      this._macAddress = undefined;
      this._macAddressVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressVariable = value.ipv4AddressVariable;
      this._macAddress = value.macAddress;
      this._macAddressVariable = value.macAddressVariable;
      this._optional = value.optional;
    }
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

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mac_address_variable - computed: false, optional: true, required: false
  private _macAddressVariable?: string; 
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }
  public set macAddressVariable(value: string) {
    this._macAddressVariable = value;
  }
  public resetMacAddressVariable() {
    this._macAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressVariableInput() {
    return this._macAddressVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class VpnInterfaceSviFeatureTemplateStaticArpEntriesList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceSviFeatureTemplateStaticArpEntries[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceSviFeatureTemplateStaticArpEntriesOutputReference {
    return new VpnInterfaceSviFeatureTemplateStaticArpEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template sdwan_vpn_interface_svi_feature_template}
*/
export class VpnInterfaceSviFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_vpn_interface_svi_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnInterfaceSviFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnInterfaceSviFeatureTemplate to import
  * @param importFromId The id of the existing VpnInterfaceSviFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnInterfaceSviFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_vpn_interface_svi_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_svi_feature_template sdwan_vpn_interface_svi_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnInterfaceSviFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VpnInterfaceSviFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_vpn_interface_svi_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
    this._arpTimeoutVariable = config.arpTimeoutVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._ifName = config.ifName;
    this._ifNameVariable = config.ifNameVariable;
    this._interfaceDescription = config.interfaceDescription;
    this._interfaceDescriptionVariable = config.interfaceDescriptionVariable;
    this._ipDirectedBroadcast = config.ipDirectedBroadcast;
    this._ipDirectedBroadcastVariable = config.ipDirectedBroadcastVariable;
    this._ipMtu = config.ipMtu;
    this._ipMtuVariable = config.ipMtuVariable;
    this._ipv4AccessLists.internalValue = config.ipv4AccessLists;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressVariable = config.ipv4AddressVariable;
    this._ipv4DhcpHelper = config.ipv4DhcpHelper;
    this._ipv4DhcpHelperVariable = config.ipv4DhcpHelperVariable;
    this._ipv4SecondaryAddresses.internalValue = config.ipv4SecondaryAddresses;
    this._ipv4Vrrps.internalValue = config.ipv4Vrrps;
    this._ipv6AccessLists.internalValue = config.ipv6AccessLists;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AddressVariable = config.ipv6AddressVariable;
    this._ipv6DhcpClient = config.ipv6DhcpClient;
    this._ipv6DhcpClientVariable = config.ipv6DhcpClientVariable;
    this._ipv6DhcpDistance = config.ipv6DhcpDistance;
    this._ipv6DhcpDistanceVariable = config.ipv6DhcpDistanceVariable;
    this._ipv6DhcpHelpers.internalValue = config.ipv6DhcpHelpers;
    this._ipv6DhcpRapidCommit = config.ipv6DhcpRapidCommit;
    this._ipv6DhcpRapidCommitVariable = config.ipv6DhcpRapidCommitVariable;
    this._ipv6SecondaryAddresses.internalValue = config.ipv6SecondaryAddresses;
    this._ipv6Vrrps.internalValue = config.ipv6Vrrps;
    this._mtu = config.mtu;
    this._mtuVariable = config.mtuVariable;
    this._name = config.name;
    this._policers.internalValue = config.policers;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._staticArpEntries.internalValue = config.staticArpEntries;
    this._tcpMssAdjust = config.tcpMssAdjust;
    this._tcpMssAdjustVariable = config.tcpMssAdjustVariable;
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

  // arp_timeout_variable - computed: false, optional: true, required: false
  private _arpTimeoutVariable?: string; 
  public get arpTimeoutVariable() {
    return this.getStringAttribute('arp_timeout_variable');
  }
  public set arpTimeoutVariable(value: string) {
    this._arpTimeoutVariable = value;
  }
  public resetArpTimeoutVariable() {
    this._arpTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutVariableInput() {
    return this._arpTimeoutVariable;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if_name - computed: false, optional: true, required: false
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  public resetIfName() {
    this._ifName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // if_name_variable - computed: false, optional: true, required: false
  private _ifNameVariable?: string; 
  public get ifNameVariable() {
    return this.getStringAttribute('if_name_variable');
  }
  public set ifNameVariable(value: string) {
    this._ifNameVariable = value;
  }
  public resetIfNameVariable() {
    this._ifNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameVariableInput() {
    return this._ifNameVariable;
  }

  // interface_description - computed: false, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // interface_description_variable - computed: false, optional: true, required: false
  private _interfaceDescriptionVariable?: string; 
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }
  public set interfaceDescriptionVariable(value: string) {
    this._interfaceDescriptionVariable = value;
  }
  public resetInterfaceDescriptionVariable() {
    this._interfaceDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionVariableInput() {
    return this._interfaceDescriptionVariable;
  }

  // ip_directed_broadcast - computed: false, optional: true, required: false
  private _ipDirectedBroadcast?: boolean | cdktf.IResolvable; 
  public get ipDirectedBroadcast() {
    return this.getBooleanAttribute('ip_directed_broadcast');
  }
  public set ipDirectedBroadcast(value: boolean | cdktf.IResolvable) {
    this._ipDirectedBroadcast = value;
  }
  public resetIpDirectedBroadcast() {
    this._ipDirectedBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDirectedBroadcastInput() {
    return this._ipDirectedBroadcast;
  }

  // ip_directed_broadcast_variable - computed: false, optional: true, required: false
  private _ipDirectedBroadcastVariable?: string; 
  public get ipDirectedBroadcastVariable() {
    return this.getStringAttribute('ip_directed_broadcast_variable');
  }
  public set ipDirectedBroadcastVariable(value: string) {
    this._ipDirectedBroadcastVariable = value;
  }
  public resetIpDirectedBroadcastVariable() {
    this._ipDirectedBroadcastVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDirectedBroadcastVariableInput() {
    return this._ipDirectedBroadcastVariable;
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

  // ip_mtu_variable - computed: false, optional: true, required: false
  private _ipMtuVariable?: string; 
  public get ipMtuVariable() {
    return this.getStringAttribute('ip_mtu_variable');
  }
  public set ipMtuVariable(value: string) {
    this._ipMtuVariable = value;
  }
  public resetIpMtuVariable() {
    this._ipMtuVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuVariableInput() {
    return this._ipMtuVariable;
  }

  // ipv4_access_lists - computed: false, optional: true, required: false
  private _ipv4AccessLists = new VpnInterfaceSviFeatureTemplateIpv4AccessListsList(this, "ipv4_access_lists", false);
  public get ipv4AccessLists() {
    return this._ipv4AccessLists;
  }
  public putIpv4AccessLists(value: VpnInterfaceSviFeatureTemplateIpv4AccessLists[] | cdktf.IResolvable) {
    this._ipv4AccessLists.internalValue = value;
  }
  public resetIpv4AccessLists() {
    this._ipv4AccessLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessListsInput() {
    return this._ipv4AccessLists.internalValue;
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

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
  }

  // ipv4_dhcp_helper - computed: false, optional: true, required: false
  private _ipv4DhcpHelper?: string[]; 
  public get ipv4DhcpHelper() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_dhcp_helper'));
  }
  public set ipv4DhcpHelper(value: string[]) {
    this._ipv4DhcpHelper = value;
  }
  public resetIpv4DhcpHelper() {
    this._ipv4DhcpHelper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpHelperInput() {
    return this._ipv4DhcpHelper;
  }

  // ipv4_dhcp_helper_variable - computed: false, optional: true, required: false
  private _ipv4DhcpHelperVariable?: string; 
  public get ipv4DhcpHelperVariable() {
    return this.getStringAttribute('ipv4_dhcp_helper_variable');
  }
  public set ipv4DhcpHelperVariable(value: string) {
    this._ipv4DhcpHelperVariable = value;
  }
  public resetIpv4DhcpHelperVariable() {
    this._ipv4DhcpHelperVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpHelperVariableInput() {
    return this._ipv4DhcpHelperVariable;
  }

  // ipv4_secondary_addresses - computed: false, optional: true, required: false
  private _ipv4SecondaryAddresses = new VpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }
  public putIpv4SecondaryAddresses(value: VpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses[] | cdktf.IResolvable) {
    this._ipv4SecondaryAddresses.internalValue = value;
  }
  public resetIpv4SecondaryAddresses() {
    this._ipv4SecondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SecondaryAddressesInput() {
    return this._ipv4SecondaryAddresses.internalValue;
  }

  // ipv4_vrrps - computed: false, optional: true, required: false
  private _ipv4Vrrps = new VpnInterfaceSviFeatureTemplateIpv4VrrpsList(this, "ipv4_vrrps", false);
  public get ipv4Vrrps() {
    return this._ipv4Vrrps;
  }
  public putIpv4Vrrps(value: VpnInterfaceSviFeatureTemplateIpv4Vrrps[] | cdktf.IResolvable) {
    this._ipv4Vrrps.internalValue = value;
  }
  public resetIpv4Vrrps() {
    this._ipv4Vrrps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VrrpsInput() {
    return this._ipv4Vrrps.internalValue;
  }

  // ipv6_access_lists - computed: false, optional: true, required: false
  private _ipv6AccessLists = new VpnInterfaceSviFeatureTemplateIpv6AccessListsList(this, "ipv6_access_lists", false);
  public get ipv6AccessLists() {
    return this._ipv6AccessLists;
  }
  public putIpv6AccessLists(value: VpnInterfaceSviFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable) {
    this._ipv6AccessLists.internalValue = value;
  }
  public resetIpv6AccessLists() {
    this._ipv6AccessLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessListsInput() {
    return this._ipv6AccessLists.internalValue;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_address_variable - computed: false, optional: true, required: false
  private _ipv6AddressVariable?: string; 
  public get ipv6AddressVariable() {
    return this.getStringAttribute('ipv6_address_variable');
  }
  public set ipv6AddressVariable(value: string) {
    this._ipv6AddressVariable = value;
  }
  public resetIpv6AddressVariable() {
    this._ipv6AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressVariableInput() {
    return this._ipv6AddressVariable;
  }

  // ipv6_dhcp_client - computed: false, optional: true, required: false
  private _ipv6DhcpClient?: boolean | cdktf.IResolvable; 
  public get ipv6DhcpClient() {
    return this.getBooleanAttribute('ipv6_dhcp_client');
  }
  public set ipv6DhcpClient(value: boolean | cdktf.IResolvable) {
    this._ipv6DhcpClient = value;
  }
  public resetIpv6DhcpClient() {
    this._ipv6DhcpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpClientInput() {
    return this._ipv6DhcpClient;
  }

  // ipv6_dhcp_client_variable - computed: false, optional: true, required: false
  private _ipv6DhcpClientVariable?: string; 
  public get ipv6DhcpClientVariable() {
    return this.getStringAttribute('ipv6_dhcp_client_variable');
  }
  public set ipv6DhcpClientVariable(value: string) {
    this._ipv6DhcpClientVariable = value;
  }
  public resetIpv6DhcpClientVariable() {
    this._ipv6DhcpClientVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpClientVariableInput() {
    return this._ipv6DhcpClientVariable;
  }

  // ipv6_dhcp_distance - computed: false, optional: true, required: false
  private _ipv6DhcpDistance?: number; 
  public get ipv6DhcpDistance() {
    return this.getNumberAttribute('ipv6_dhcp_distance');
  }
  public set ipv6DhcpDistance(value: number) {
    this._ipv6DhcpDistance = value;
  }
  public resetIpv6DhcpDistance() {
    this._ipv6DhcpDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpDistanceInput() {
    return this._ipv6DhcpDistance;
  }

  // ipv6_dhcp_distance_variable - computed: false, optional: true, required: false
  private _ipv6DhcpDistanceVariable?: string; 
  public get ipv6DhcpDistanceVariable() {
    return this.getStringAttribute('ipv6_dhcp_distance_variable');
  }
  public set ipv6DhcpDistanceVariable(value: string) {
    this._ipv6DhcpDistanceVariable = value;
  }
  public resetIpv6DhcpDistanceVariable() {
    this._ipv6DhcpDistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpDistanceVariableInput() {
    return this._ipv6DhcpDistanceVariable;
  }

  // ipv6_dhcp_helpers - computed: false, optional: true, required: false
  private _ipv6DhcpHelpers = new VpnInterfaceSviFeatureTemplateIpv6DhcpHelpersList(this, "ipv6_dhcp_helpers", false);
  public get ipv6DhcpHelpers() {
    return this._ipv6DhcpHelpers;
  }
  public putIpv6DhcpHelpers(value: VpnInterfaceSviFeatureTemplateIpv6DhcpHelpers[] | cdktf.IResolvable) {
    this._ipv6DhcpHelpers.internalValue = value;
  }
  public resetIpv6DhcpHelpers() {
    this._ipv6DhcpHelpers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpHelpersInput() {
    return this._ipv6DhcpHelpers.internalValue;
  }

  // ipv6_dhcp_rapid_commit - computed: false, optional: true, required: false
  private _ipv6DhcpRapidCommit?: boolean | cdktf.IResolvable; 
  public get ipv6DhcpRapidCommit() {
    return this.getBooleanAttribute('ipv6_dhcp_rapid_commit');
  }
  public set ipv6DhcpRapidCommit(value: boolean | cdktf.IResolvable) {
    this._ipv6DhcpRapidCommit = value;
  }
  public resetIpv6DhcpRapidCommit() {
    this._ipv6DhcpRapidCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpRapidCommitInput() {
    return this._ipv6DhcpRapidCommit;
  }

  // ipv6_dhcp_rapid_commit_variable - computed: false, optional: true, required: false
  private _ipv6DhcpRapidCommitVariable?: string; 
  public get ipv6DhcpRapidCommitVariable() {
    return this.getStringAttribute('ipv6_dhcp_rapid_commit_variable');
  }
  public set ipv6DhcpRapidCommitVariable(value: string) {
    this._ipv6DhcpRapidCommitVariable = value;
  }
  public resetIpv6DhcpRapidCommitVariable() {
    this._ipv6DhcpRapidCommitVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpRapidCommitVariableInput() {
    return this._ipv6DhcpRapidCommitVariable;
  }

  // ipv6_secondary_addresses - computed: false, optional: true, required: false
  private _ipv6SecondaryAddresses = new VpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesList(this, "ipv6_secondary_addresses", false);
  public get ipv6SecondaryAddresses() {
    return this._ipv6SecondaryAddresses;
  }
  public putIpv6SecondaryAddresses(value: VpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses[] | cdktf.IResolvable) {
    this._ipv6SecondaryAddresses.internalValue = value;
  }
  public resetIpv6SecondaryAddresses() {
    this._ipv6SecondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SecondaryAddressesInput() {
    return this._ipv6SecondaryAddresses.internalValue;
  }

  // ipv6_vrrps - computed: false, optional: true, required: false
  private _ipv6Vrrps = new VpnInterfaceSviFeatureTemplateIpv6VrrpsList(this, "ipv6_vrrps", false);
  public get ipv6Vrrps() {
    return this._ipv6Vrrps;
  }
  public putIpv6Vrrps(value: VpnInterfaceSviFeatureTemplateIpv6Vrrps[] | cdktf.IResolvable) {
    this._ipv6Vrrps.internalValue = value;
  }
  public resetIpv6Vrrps() {
    this._ipv6Vrrps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VrrpsInput() {
    return this._ipv6Vrrps.internalValue;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_variable - computed: false, optional: true, required: false
  private _mtuVariable?: string; 
  public get mtuVariable() {
    return this.getStringAttribute('mtu_variable');
  }
  public set mtuVariable(value: string) {
    this._mtuVariable = value;
  }
  public resetMtuVariable() {
    this._mtuVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuVariableInput() {
    return this._mtuVariable;
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

  // policers - computed: false, optional: true, required: false
  private _policers = new VpnInterfaceSviFeatureTemplatePolicersList(this, "policers", false);
  public get policers() {
    return this._policers;
  }
  public putPolicers(value: VpnInterfaceSviFeatureTemplatePolicers[] | cdktf.IResolvable) {
    this._policers.internalValue = value;
  }
  public resetPolicers() {
    this._policers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policersInput() {
    return this._policers.internalValue;
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

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // static_arp_entries - computed: false, optional: true, required: false
  private _staticArpEntries = new VpnInterfaceSviFeatureTemplateStaticArpEntriesList(this, "static_arp_entries", false);
  public get staticArpEntries() {
    return this._staticArpEntries;
  }
  public putStaticArpEntries(value: VpnInterfaceSviFeatureTemplateStaticArpEntries[] | cdktf.IResolvable) {
    this._staticArpEntries.internalValue = value;
  }
  public resetStaticArpEntries() {
    this._staticArpEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpEntriesInput() {
    return this._staticArpEntries.internalValue;
  }

  // tcp_mss_adjust - computed: false, optional: true, required: false
  private _tcpMssAdjust?: number; 
  public get tcpMssAdjust() {
    return this.getNumberAttribute('tcp_mss_adjust');
  }
  public set tcpMssAdjust(value: number) {
    this._tcpMssAdjust = value;
  }
  public resetTcpMssAdjust() {
    this._tcpMssAdjust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustInput() {
    return this._tcpMssAdjust;
  }

  // tcp_mss_adjust_variable - computed: false, optional: true, required: false
  private _tcpMssAdjustVariable?: string; 
  public get tcpMssAdjustVariable() {
    return this.getStringAttribute('tcp_mss_adjust_variable');
  }
  public set tcpMssAdjustVariable(value: string) {
    this._tcpMssAdjustVariable = value;
  }
  public resetTcpMssAdjustVariable() {
    this._tcpMssAdjustVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustVariableInput() {
    return this._tcpMssAdjustVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_timeout: cdktf.numberToTerraform(this._arpTimeout),
      arp_timeout_variable: cdktf.stringToTerraform(this._arpTimeoutVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      if_name: cdktf.stringToTerraform(this._ifName),
      if_name_variable: cdktf.stringToTerraform(this._ifNameVariable),
      interface_description: cdktf.stringToTerraform(this._interfaceDescription),
      interface_description_variable: cdktf.stringToTerraform(this._interfaceDescriptionVariable),
      ip_directed_broadcast: cdktf.booleanToTerraform(this._ipDirectedBroadcast),
      ip_directed_broadcast_variable: cdktf.stringToTerraform(this._ipDirectedBroadcastVariable),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_mtu_variable: cdktf.stringToTerraform(this._ipMtuVariable),
      ipv4_access_lists: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv4AccessListsToTerraform, false)(this._ipv4AccessLists.internalValue),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_variable: cdktf.stringToTerraform(this._ipv4AddressVariable),
      ipv4_dhcp_helper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4DhcpHelper),
      ipv4_dhcp_helper_variable: cdktf.stringToTerraform(this._ipv4DhcpHelperVariable),
      ipv4_secondary_addresses: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesToTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
      ipv4_vrrps: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv4VrrpsToTerraform, false)(this._ipv4Vrrps.internalValue),
      ipv6_access_lists: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv6AccessListsToTerraform, false)(this._ipv6AccessLists.internalValue),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_address_variable: cdktf.stringToTerraform(this._ipv6AddressVariable),
      ipv6_dhcp_client: cdktf.booleanToTerraform(this._ipv6DhcpClient),
      ipv6_dhcp_client_variable: cdktf.stringToTerraform(this._ipv6DhcpClientVariable),
      ipv6_dhcp_distance: cdktf.numberToTerraform(this._ipv6DhcpDistance),
      ipv6_dhcp_distance_variable: cdktf.stringToTerraform(this._ipv6DhcpDistanceVariable),
      ipv6_dhcp_helpers: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv6DhcpHelpersToTerraform, false)(this._ipv6DhcpHelpers.internalValue),
      ipv6_dhcp_rapid_commit: cdktf.booleanToTerraform(this._ipv6DhcpRapidCommit),
      ipv6_dhcp_rapid_commit_variable: cdktf.stringToTerraform(this._ipv6DhcpRapidCommitVariable),
      ipv6_secondary_addresses: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesToTerraform, false)(this._ipv6SecondaryAddresses.internalValue),
      ipv6_vrrps: cdktf.listMapper(vpnInterfaceSviFeatureTemplateIpv6VrrpsToTerraform, false)(this._ipv6Vrrps.internalValue),
      mtu: cdktf.numberToTerraform(this._mtu),
      mtu_variable: cdktf.stringToTerraform(this._mtuVariable),
      name: cdktf.stringToTerraform(this._name),
      policers: cdktf.listMapper(vpnInterfaceSviFeatureTemplatePolicersToTerraform, false)(this._policers.internalValue),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      static_arp_entries: cdktf.listMapper(vpnInterfaceSviFeatureTemplateStaticArpEntriesToTerraform, false)(this._staticArpEntries.internalValue),
      tcp_mss_adjust: cdktf.numberToTerraform(this._tcpMssAdjust),
      tcp_mss_adjust_variable: cdktf.stringToTerraform(this._tcpMssAdjustVariable),
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
      arp_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._arpTimeoutVariable),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      if_name: {
        value: cdktf.stringToHclTerraform(this._ifName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      if_name_variable: {
        value: cdktf.stringToHclTerraform(this._ifNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_description: {
        value: cdktf.stringToHclTerraform(this._interfaceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_description_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceDescriptionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_directed_broadcast: {
        value: cdktf.booleanToHclTerraform(this._ipDirectedBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_directed_broadcast_variable: {
        value: cdktf.stringToHclTerraform(this._ipDirectedBroadcastVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_mtu: {
        value: cdktf.numberToHclTerraform(this._ipMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_mtu_variable: {
        value: cdktf.stringToHclTerraform(this._ipMtuVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_access_lists: {
        value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv4AccessListsToHclTerraform, false)(this._ipv4AccessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceSviFeatureTemplateIpv4AccessListsList",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dhcp_helper: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4DhcpHelper),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_dhcp_helper_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DhcpHelperVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_secondary_addresses: {
        value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesToHclTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesList",
      },
      ipv4_vrrps: {
        value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv4VrrpsToHclTerraform, false)(this._ipv4Vrrps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceSviFeatureTemplateIpv4VrrpsList",
      },
      ipv6_access_lists: {
        value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv6AccessListsToHclTerraform, false)(this._ipv6AccessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceSviFeatureTemplateIpv6AccessListsList",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dhcp_client: {
        value: cdktf.booleanToHclTerraform(this._ipv6DhcpClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_dhcp_client_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6DhcpClientVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dhcp_distance: {
        value: cdktf.numberToHclTerraform(this._ipv6DhcpDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_dhcp_distance_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6DhcpDistanceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dhcp_helpers: {
        value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv6DhcpHelpersToHclTerraform, false)(this._ipv6DhcpHelpers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceSviFeatureTemplateIpv6DhcpHelpersList",
      },
      ipv6_dhcp_rapid_commit: {
        value: cdktf.booleanToHclTerraform(this._ipv6DhcpRapidCommit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_dhcp_rapid_commit_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6DhcpRapidCommitVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_secondary_addresses: {
        value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesToHclTerraform, false)(this._ipv6SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesList",
      },
      ipv6_vrrps: {
        value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateIpv6VrrpsToHclTerraform, false)(this._ipv6Vrrps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceSviFeatureTemplateIpv6VrrpsList",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu_variable: {
        value: cdktf.stringToHclTerraform(this._mtuVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policers: {
        value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplatePolicersToHclTerraform, false)(this._policers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceSviFeatureTemplatePolicersList",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_variable: {
        value: cdktf.stringToHclTerraform(this._shutdownVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_arp_entries: {
        value: cdktf.listMapperHcl(vpnInterfaceSviFeatureTemplateStaticArpEntriesToHclTerraform, false)(this._staticArpEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceSviFeatureTemplateStaticArpEntriesList",
      },
      tcp_mss_adjust: {
        value: cdktf.numberToHclTerraform(this._tcpMssAdjust),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_adjust_variable: {
        value: cdktf.stringToHclTerraform(this._tcpMssAdjustVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
