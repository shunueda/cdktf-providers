// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFabricvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#bgp_as SystemFabricvpn#bgp_as}
  */
  readonly bgpAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#bgp_as_string SystemFabricvpn#bgp_as_string}
  */
  readonly bgpAsString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#branch_name SystemFabricvpn#branch_name}
  */
  readonly branchName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#dynamic_sort_subtable SystemFabricvpn#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#get_all_tables SystemFabricvpn#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#health_checks SystemFabricvpn#health_checks}
  */
  readonly healthChecks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#id SystemFabricvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#loopback_address_block SystemFabricvpn#loopback_address_block}
  */
  readonly loopbackAddressBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#loopback_advertised_subnet SystemFabricvpn#loopback_advertised_subnet}
  */
  readonly loopbackAdvertisedSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#loopback_interface SystemFabricvpn#loopback_interface}
  */
  readonly loopbackInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#policy_rule SystemFabricvpn#policy_rule}
  */
  readonly policyRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#psksecret SystemFabricvpn#psksecret}
  */
  readonly psksecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#sdwan_zone SystemFabricvpn#sdwan_zone}
  */
  readonly sdwanZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#status SystemFabricvpn#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#sync_mode SystemFabricvpn#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#vdomparam SystemFabricvpn#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#vpn_role SystemFabricvpn#vpn_role}
  */
  readonly vpnRole?: string;
  /**
  * advertised_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#advertised_subnets SystemFabricvpn#advertised_subnets}
  */
  readonly advertisedSubnets?: SystemFabricvpnAdvertisedSubnets[] | cdktf.IResolvable;
  /**
  * overlays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#overlays SystemFabricvpn#overlays}
  */
  readonly overlays?: SystemFabricvpnOverlays[] | cdktf.IResolvable;
}
export interface SystemFabricvpnAdvertisedSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#access SystemFabricvpn#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#bgp_network SystemFabricvpn#bgp_network}
  */
  readonly bgpNetwork?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#firewall_address SystemFabricvpn#firewall_address}
  */
  readonly firewallAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#id SystemFabricvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#policies SystemFabricvpn#policies}
  */
  readonly policies?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#prefix SystemFabricvpn#prefix}
  */
  readonly prefix?: string;
}

export function systemFabricvpnAdvertisedSubnetsToTerraform(struct?: SystemFabricvpnAdvertisedSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    bgp_network: cdktf.numberToTerraform(struct!.bgpNetwork),
    firewall_address: cdktf.stringToTerraform(struct!.firewallAddress),
    id: cdktf.numberToTerraform(struct!.id),
    policies: cdktf.numberToTerraform(struct!.policies),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function systemFabricvpnAdvertisedSubnetsToHclTerraform(struct?: SystemFabricvpnAdvertisedSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_network: {
      value: cdktf.numberToHclTerraform(struct!.bgpNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    firewall_address: {
      value: cdktf.stringToHclTerraform(struct!.firewallAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policies: {
      value: cdktf.numberToHclTerraform(struct!.policies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SystemFabricvpnAdvertisedSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemFabricvpnAdvertisedSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._bgpNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpNetwork = this._bgpNetwork;
    }
    if (this._firewallAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallAddress = this._firewallAddress;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemFabricvpnAdvertisedSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._bgpNetwork = undefined;
      this._firewallAddress = undefined;
      this._id = undefined;
      this._policies = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._bgpNetwork = value.bgpNetwork;
      this._firewallAddress = value.firewallAddress;
      this._id = value.id;
      this._policies = value.policies;
      this._prefix = value.prefix;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // bgp_network - computed: false, optional: true, required: false
  private _bgpNetwork?: number; 
  public get bgpNetwork() {
    return this.getNumberAttribute('bgp_network');
  }
  public set bgpNetwork(value: number) {
    this._bgpNetwork = value;
  }
  public resetBgpNetwork() {
    this._bgpNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNetworkInput() {
    return this._bgpNetwork;
  }

  // firewall_address - computed: false, optional: true, required: false
  private _firewallAddress?: string; 
  public get firewallAddress() {
    return this.getStringAttribute('firewall_address');
  }
  public set firewallAddress(value: string) {
    this._firewallAddress = value;
  }
  public resetFirewallAddress() {
    this._firewallAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAddressInput() {
    return this._firewallAddress;
  }

  // id - computed: true, optional: true, required: false
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

  // policies - computed: false, optional: true, required: false
  private _policies?: number; 
  public get policies() {
    return this.getNumberAttribute('policies');
  }
  public set policies(value: number) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // prefix - computed: true, optional: true, required: false
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
}

export class SystemFabricvpnAdvertisedSubnetsList extends cdktf.ComplexList {
  public internalValue? : SystemFabricvpnAdvertisedSubnets[] | cdktf.IResolvable

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
  public get(index: number): SystemFabricvpnAdvertisedSubnetsOutputReference {
    return new SystemFabricvpnAdvertisedSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemFabricvpnOverlays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#bgp_neighbor SystemFabricvpn#bgp_neighbor}
  */
  readonly bgpNeighbor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#bgp_neighbor_group SystemFabricvpn#bgp_neighbor_group}
  */
  readonly bgpNeighborGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#bgp_neighbor_range SystemFabricvpn#bgp_neighbor_range}
  */
  readonly bgpNeighborRange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#bgp_network SystemFabricvpn#bgp_network}
  */
  readonly bgpNetwork?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#interface SystemFabricvpn#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#ipsec_network_id SystemFabricvpn#ipsec_network_id}
  */
  readonly ipsecNetworkId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#ipsec_phase1 SystemFabricvpn#ipsec_phase1}
  */
  readonly ipsecPhase1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#name SystemFabricvpn#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#overlay_policy SystemFabricvpn#overlay_policy}
  */
  readonly overlayPolicy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#overlay_tunnel_block SystemFabricvpn#overlay_tunnel_block}
  */
  readonly overlayTunnelBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#remote_gw SystemFabricvpn#remote_gw}
  */
  readonly remoteGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#route_policy SystemFabricvpn#route_policy}
  */
  readonly routePolicy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#sdwan_member SystemFabricvpn#sdwan_member}
  */
  readonly sdwanMember?: number;
}

export function systemFabricvpnOverlaysToTerraform(struct?: SystemFabricvpnOverlays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_neighbor: cdktf.stringToTerraform(struct!.bgpNeighbor),
    bgp_neighbor_group: cdktf.stringToTerraform(struct!.bgpNeighborGroup),
    bgp_neighbor_range: cdktf.numberToTerraform(struct!.bgpNeighborRange),
    bgp_network: cdktf.numberToTerraform(struct!.bgpNetwork),
    interface: cdktf.stringToTerraform(struct!.interface),
    ipsec_network_id: cdktf.numberToTerraform(struct!.ipsecNetworkId),
    ipsec_phase1: cdktf.stringToTerraform(struct!.ipsecPhase1),
    name: cdktf.stringToTerraform(struct!.name),
    overlay_policy: cdktf.numberToTerraform(struct!.overlayPolicy),
    overlay_tunnel_block: cdktf.stringToTerraform(struct!.overlayTunnelBlock),
    remote_gw: cdktf.stringToTerraform(struct!.remoteGw),
    route_policy: cdktf.numberToTerraform(struct!.routePolicy),
    sdwan_member: cdktf.numberToTerraform(struct!.sdwanMember),
  }
}


export function systemFabricvpnOverlaysToHclTerraform(struct?: SystemFabricvpnOverlays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_neighbor: {
      value: cdktf.stringToHclTerraform(struct!.bgpNeighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_neighbor_group: {
      value: cdktf.stringToHclTerraform(struct!.bgpNeighborGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_neighbor_range: {
      value: cdktf.numberToHclTerraform(struct!.bgpNeighborRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_network: {
      value: cdktf.numberToHclTerraform(struct!.bgpNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_network_id: {
      value: cdktf.numberToHclTerraform(struct!.ipsecNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_phase1: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPhase1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_policy: {
      value: cdktf.numberToHclTerraform(struct!.overlayPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overlay_tunnel_block: {
      value: cdktf.stringToHclTerraform(struct!.overlayTunnelBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_gw: {
      value: cdktf.stringToHclTerraform(struct!.remoteGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy: {
      value: cdktf.numberToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sdwan_member: {
      value: cdktf.numberToHclTerraform(struct!.sdwanMember),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemFabricvpnOverlaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemFabricvpnOverlays | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpNeighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpNeighbor = this._bgpNeighbor;
    }
    if (this._bgpNeighborGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpNeighborGroup = this._bgpNeighborGroup;
    }
    if (this._bgpNeighborRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpNeighborRange = this._bgpNeighborRange;
    }
    if (this._bgpNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpNetwork = this._bgpNetwork;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipsecNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecNetworkId = this._ipsecNetworkId;
    }
    if (this._ipsecPhase1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPhase1 = this._ipsecPhase1;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overlayPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayPolicy = this._overlayPolicy;
    }
    if (this._overlayTunnelBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayTunnelBlock = this._overlayTunnelBlock;
    }
    if (this._remoteGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGw = this._remoteGw;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._sdwanMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanMember = this._sdwanMember;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemFabricvpnOverlays | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpNeighbor = undefined;
      this._bgpNeighborGroup = undefined;
      this._bgpNeighborRange = undefined;
      this._bgpNetwork = undefined;
      this._interface = undefined;
      this._ipsecNetworkId = undefined;
      this._ipsecPhase1 = undefined;
      this._name = undefined;
      this._overlayPolicy = undefined;
      this._overlayTunnelBlock = undefined;
      this._remoteGw = undefined;
      this._routePolicy = undefined;
      this._sdwanMember = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpNeighbor = value.bgpNeighbor;
      this._bgpNeighborGroup = value.bgpNeighborGroup;
      this._bgpNeighborRange = value.bgpNeighborRange;
      this._bgpNetwork = value.bgpNetwork;
      this._interface = value.interface;
      this._ipsecNetworkId = value.ipsecNetworkId;
      this._ipsecPhase1 = value.ipsecPhase1;
      this._name = value.name;
      this._overlayPolicy = value.overlayPolicy;
      this._overlayTunnelBlock = value.overlayTunnelBlock;
      this._remoteGw = value.remoteGw;
      this._routePolicy = value.routePolicy;
      this._sdwanMember = value.sdwanMember;
    }
  }

  // bgp_neighbor - computed: false, optional: true, required: false
  private _bgpNeighbor?: string; 
  public get bgpNeighbor() {
    return this.getStringAttribute('bgp_neighbor');
  }
  public set bgpNeighbor(value: string) {
    this._bgpNeighbor = value;
  }
  public resetBgpNeighbor() {
    this._bgpNeighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborInput() {
    return this._bgpNeighbor;
  }

  // bgp_neighbor_group - computed: false, optional: true, required: false
  private _bgpNeighborGroup?: string; 
  public get bgpNeighborGroup() {
    return this.getStringAttribute('bgp_neighbor_group');
  }
  public set bgpNeighborGroup(value: string) {
    this._bgpNeighborGroup = value;
  }
  public resetBgpNeighborGroup() {
    this._bgpNeighborGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborGroupInput() {
    return this._bgpNeighborGroup;
  }

  // bgp_neighbor_range - computed: false, optional: true, required: false
  private _bgpNeighborRange?: number; 
  public get bgpNeighborRange() {
    return this.getNumberAttribute('bgp_neighbor_range');
  }
  public set bgpNeighborRange(value: number) {
    this._bgpNeighborRange = value;
  }
  public resetBgpNeighborRange() {
    this._bgpNeighborRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborRangeInput() {
    return this._bgpNeighborRange;
  }

  // bgp_network - computed: false, optional: true, required: false
  private _bgpNetwork?: number; 
  public get bgpNetwork() {
    return this.getNumberAttribute('bgp_network');
  }
  public set bgpNetwork(value: number) {
    this._bgpNetwork = value;
  }
  public resetBgpNetwork() {
    this._bgpNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNetworkInput() {
    return this._bgpNetwork;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipsec_network_id - computed: false, optional: true, required: false
  private _ipsecNetworkId?: number; 
  public get ipsecNetworkId() {
    return this.getNumberAttribute('ipsec_network_id');
  }
  public set ipsecNetworkId(value: number) {
    this._ipsecNetworkId = value;
  }
  public resetIpsecNetworkId() {
    this._ipsecNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecNetworkIdInput() {
    return this._ipsecNetworkId;
  }

  // ipsec_phase1 - computed: false, optional: true, required: false
  private _ipsecPhase1?: string; 
  public get ipsecPhase1() {
    return this.getStringAttribute('ipsec_phase1');
  }
  public set ipsecPhase1(value: string) {
    this._ipsecPhase1 = value;
  }
  public resetIpsecPhase1() {
    this._ipsecPhase1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase1Input() {
    return this._ipsecPhase1;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overlay_policy - computed: false, optional: true, required: false
  private _overlayPolicy?: number; 
  public get overlayPolicy() {
    return this.getNumberAttribute('overlay_policy');
  }
  public set overlayPolicy(value: number) {
    this._overlayPolicy = value;
  }
  public resetOverlayPolicy() {
    this._overlayPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayPolicyInput() {
    return this._overlayPolicy;
  }

  // overlay_tunnel_block - computed: true, optional: true, required: false
  private _overlayTunnelBlock?: string; 
  public get overlayTunnelBlock() {
    return this.getStringAttribute('overlay_tunnel_block');
  }
  public set overlayTunnelBlock(value: string) {
    this._overlayTunnelBlock = value;
  }
  public resetOverlayTunnelBlock() {
    this._overlayTunnelBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayTunnelBlockInput() {
    return this._overlayTunnelBlock;
  }

  // remote_gw - computed: true, optional: true, required: false
  private _remoteGw?: string; 
  public get remoteGw() {
    return this.getStringAttribute('remote_gw');
  }
  public set remoteGw(value: string) {
    this._remoteGw = value;
  }
  public resetRemoteGw() {
    this._remoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwInput() {
    return this._remoteGw;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: number; 
  public get routePolicy() {
    return this.getNumberAttribute('route_policy');
  }
  public set routePolicy(value: number) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // sdwan_member - computed: false, optional: true, required: false
  private _sdwanMember?: number; 
  public get sdwanMember() {
    return this.getNumberAttribute('sdwan_member');
  }
  public set sdwanMember(value: number) {
    this._sdwanMember = value;
  }
  public resetSdwanMember() {
    this._sdwanMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanMemberInput() {
    return this._sdwanMember;
  }
}

export class SystemFabricvpnOverlaysList extends cdktf.ComplexList {
  public internalValue? : SystemFabricvpnOverlays[] | cdktf.IResolvable

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
  public get(index: number): SystemFabricvpnOverlaysOutputReference {
    return new SystemFabricvpnOverlaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn fortios_system_fabricvpn}
*/
export class SystemFabricvpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_fabricvpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFabricvpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFabricvpn to import
  * @param importFromId The id of the existing SystemFabricvpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFabricvpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_fabricvpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fabricvpn fortios_system_fabricvpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFabricvpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFabricvpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_fabricvpn',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpAs = config.bgpAs;
    this._bgpAsString = config.bgpAsString;
    this._branchName = config.branchName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._healthChecks = config.healthChecks;
    this._id = config.id;
    this._loopbackAddressBlock = config.loopbackAddressBlock;
    this._loopbackAdvertisedSubnet = config.loopbackAdvertisedSubnet;
    this._loopbackInterface = config.loopbackInterface;
    this._policyRule = config.policyRule;
    this._psksecret = config.psksecret;
    this._sdwanZone = config.sdwanZone;
    this._status = config.status;
    this._syncMode = config.syncMode;
    this._vdomparam = config.vdomparam;
    this._vpnRole = config.vpnRole;
    this._advertisedSubnets.internalValue = config.advertisedSubnets;
    this._overlays.internalValue = config.overlays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_as - computed: false, optional: true, required: false
  private _bgpAs?: number; 
  public get bgpAs() {
    return this.getNumberAttribute('bgp_as');
  }
  public set bgpAs(value: number) {
    this._bgpAs = value;
  }
  public resetBgpAs() {
    this._bgpAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsInput() {
    return this._bgpAs;
  }

  // bgp_as_string - computed: false, optional: true, required: false
  private _bgpAsString?: string; 
  public get bgpAsString() {
    return this.getStringAttribute('bgp_as_string');
  }
  public set bgpAsString(value: string) {
    this._bgpAsString = value;
  }
  public resetBgpAsString() {
    this._bgpAsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsStringInput() {
    return this._bgpAsString;
  }

  // branch_name - computed: false, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks?: string; 
  public get healthChecks() {
    return this.getStringAttribute('health_checks');
  }
  public set healthChecks(value: string) {
    this._healthChecks = value;
  }
  public resetHealthChecks() {
    this._healthChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks;
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

  // loopback_address_block - computed: true, optional: true, required: false
  private _loopbackAddressBlock?: string; 
  public get loopbackAddressBlock() {
    return this.getStringAttribute('loopback_address_block');
  }
  public set loopbackAddressBlock(value: string) {
    this._loopbackAddressBlock = value;
  }
  public resetLoopbackAddressBlock() {
    this._loopbackAddressBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackAddressBlockInput() {
    return this._loopbackAddressBlock;
  }

  // loopback_advertised_subnet - computed: false, optional: true, required: false
  private _loopbackAdvertisedSubnet?: number; 
  public get loopbackAdvertisedSubnet() {
    return this.getNumberAttribute('loopback_advertised_subnet');
  }
  public set loopbackAdvertisedSubnet(value: number) {
    this._loopbackAdvertisedSubnet = value;
  }
  public resetLoopbackAdvertisedSubnet() {
    this._loopbackAdvertisedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackAdvertisedSubnetInput() {
    return this._loopbackAdvertisedSubnet;
  }

  // loopback_interface - computed: false, optional: true, required: false
  private _loopbackInterface?: string; 
  public get loopbackInterface() {
    return this.getStringAttribute('loopback_interface');
  }
  public set loopbackInterface(value: string) {
    this._loopbackInterface = value;
  }
  public resetLoopbackInterface() {
    this._loopbackInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInterfaceInput() {
    return this._loopbackInterface;
  }

  // policy_rule - computed: true, optional: true, required: false
  private _policyRule?: string; 
  public get policyRule() {
    return this.getStringAttribute('policy_rule');
  }
  public set policyRule(value: string) {
    this._policyRule = value;
  }
  public resetPolicyRule() {
    this._policyRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleInput() {
    return this._policyRule;
  }

  // psksecret - computed: false, optional: true, required: false
  private _psksecret?: string; 
  public get psksecret() {
    return this.getStringAttribute('psksecret');
  }
  public set psksecret(value: string) {
    this._psksecret = value;
  }
  public resetPsksecret() {
    this._psksecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psksecretInput() {
    return this._psksecret;
  }

  // sdwan_zone - computed: false, optional: true, required: false
  private _sdwanZone?: string; 
  public get sdwanZone() {
    return this.getStringAttribute('sdwan_zone');
  }
  public set sdwanZone(value: string) {
    this._sdwanZone = value;
  }
  public resetSdwanZone() {
    this._sdwanZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanZoneInput() {
    return this._sdwanZone;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // sync_mode - computed: true, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vpn_role - computed: true, optional: true, required: false
  private _vpnRole?: string; 
  public get vpnRole() {
    return this.getStringAttribute('vpn_role');
  }
  public set vpnRole(value: string) {
    this._vpnRole = value;
  }
  public resetVpnRole() {
    this._vpnRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnRoleInput() {
    return this._vpnRole;
  }

  // advertised_subnets - computed: false, optional: true, required: false
  private _advertisedSubnets = new SystemFabricvpnAdvertisedSubnetsList(this, "advertised_subnets", false);
  public get advertisedSubnets() {
    return this._advertisedSubnets;
  }
  public putAdvertisedSubnets(value: SystemFabricvpnAdvertisedSubnets[] | cdktf.IResolvable) {
    this._advertisedSubnets.internalValue = value;
  }
  public resetAdvertisedSubnets() {
    this._advertisedSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedSubnetsInput() {
    return this._advertisedSubnets.internalValue;
  }

  // overlays - computed: false, optional: true, required: false
  private _overlays = new SystemFabricvpnOverlaysList(this, "overlays", false);
  public get overlays() {
    return this._overlays;
  }
  public putOverlays(value: SystemFabricvpnOverlays[] | cdktf.IResolvable) {
    this._overlays.internalValue = value;
  }
  public resetOverlays() {
    this._overlays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaysInput() {
    return this._overlays.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_as: cdktf.numberToTerraform(this._bgpAs),
      bgp_as_string: cdktf.stringToTerraform(this._bgpAsString),
      branch_name: cdktf.stringToTerraform(this._branchName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      health_checks: cdktf.stringToTerraform(this._healthChecks),
      id: cdktf.stringToTerraform(this._id),
      loopback_address_block: cdktf.stringToTerraform(this._loopbackAddressBlock),
      loopback_advertised_subnet: cdktf.numberToTerraform(this._loopbackAdvertisedSubnet),
      loopback_interface: cdktf.stringToTerraform(this._loopbackInterface),
      policy_rule: cdktf.stringToTerraform(this._policyRule),
      psksecret: cdktf.stringToTerraform(this._psksecret),
      sdwan_zone: cdktf.stringToTerraform(this._sdwanZone),
      status: cdktf.stringToTerraform(this._status),
      sync_mode: cdktf.stringToTerraform(this._syncMode),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vpn_role: cdktf.stringToTerraform(this._vpnRole),
      advertised_subnets: cdktf.listMapper(systemFabricvpnAdvertisedSubnetsToTerraform, true)(this._advertisedSubnets.internalValue),
      overlays: cdktf.listMapper(systemFabricvpnOverlaysToTerraform, true)(this._overlays.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_as: {
        value: cdktf.numberToHclTerraform(this._bgpAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_as_string: {
        value: cdktf.stringToHclTerraform(this._bgpAsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch_name: {
        value: cdktf.stringToHclTerraform(this._branchName),
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_checks: {
        value: cdktf.stringToHclTerraform(this._healthChecks),
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
      loopback_address_block: {
        value: cdktf.stringToHclTerraform(this._loopbackAddressBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_advertised_subnet: {
        value: cdktf.numberToHclTerraform(this._loopbackAdvertisedSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loopback_interface: {
        value: cdktf.stringToHclTerraform(this._loopbackInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_rule: {
        value: cdktf.stringToHclTerraform(this._policyRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psksecret: {
        value: cdktf.stringToHclTerraform(this._psksecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdwan_zone: {
        value: cdktf.stringToHclTerraform(this._sdwanZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_mode: {
        value: cdktf.stringToHclTerraform(this._syncMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_role: {
        value: cdktf.stringToHclTerraform(this._vpnRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertised_subnets: {
        value: cdktf.listMapperHcl(systemFabricvpnAdvertisedSubnetsToHclTerraform, true)(this._advertisedSubnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemFabricvpnAdvertisedSubnetsList",
      },
      overlays: {
        value: cdktf.listMapperHcl(systemFabricvpnOverlaysToHclTerraform, true)(this._overlays.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemFabricvpnOverlaysList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
