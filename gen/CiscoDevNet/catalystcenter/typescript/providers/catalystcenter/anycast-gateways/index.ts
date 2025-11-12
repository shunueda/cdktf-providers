// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnycastGatewaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of anycast gateways
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#anycast_gateways AnycastGateways#anycast_gateways}
  */
  readonly anycastGateways: AnycastGatewaysAnycastGateways[] | cdktf.IResolvable;
  /**
  * ID of the fabric to contain this anycast gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#fabric_id AnycastGateways#fabric_id}
  */
  readonly fabricId: string;
}
export interface AnycastGatewaysAnycastGateways {
  /**
  * This field cannot be true when vlanName is provided. the vlanName will be generated as ipPoolGroupV4Cidr-virtualNetworkName for non-critical VLANs. for critical VLANs with DATA trafficType, vlanName will be CRITICAL_VLAN. for critical VLANs with VOICE trafficType, vlanName will be VOICE_VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#auto_generate_vlan_name AnycastGateways#auto_generate_vlan_name}
  */
  readonly autoGenerateVlanName: boolean | cdktf.IResolvable;
  /**
  * Enable/disable critical VLAN. if true, autoGenerateVlanName must also be true. (isCriticalPool is not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#critical_pool AnycastGateways#critical_pool}
  */
  readonly criticalPool?: boolean | cdktf.IResolvable;
  /**
  * ID of the fabric to contain this anycast gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#fabric_id AnycastGateways#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Enable/disable Group-Based Policy Enforcement (applicable only to INFRA_VN; defaults to false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#group_based_policy_enforcement_enabled AnycastGateways#group_based_policy_enforcement_enabled}
  */
  readonly groupBasedPolicyEnforcementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable Intra-Subnet Routing (not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#intra_subnet_routing_enabled AnycastGateways#intra_subnet_routing_enabled}
  */
  readonly intraSubnetRoutingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable IP-directed broadcast (not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#ip_directed_broadcast AnycastGateways#ip_directed_broadcast}
  */
  readonly ipDirectedBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Name of the IP pool associated with the anycast gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#ip_pool_name AnycastGateways#ip_pool_name}
  */
  readonly ipPoolName: string;
  /**
  * Enable/disable layer 2 flooding (not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#l2_flooding_enabled AnycastGateways#l2_flooding_enabled}
  */
  readonly l2FloodingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable multiple IP-to-MAC Addresses (Wireless Bridged-Network Virtual Machine; not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#multiple_ip_to_mac_addresses AnycastGateways#multiple_ip_to_mac_addresses}
  */
  readonly multipleIpToMacAddresses?: boolean | cdktf.IResolvable;
  /**
  * The pool type of the anycast gateway (required for & applicable only to INFRA_VN)
  *   - Choices: `EXTENDED_NODE`, `FABRIC_AP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#pool_type AnycastGateways#pool_type}
  */
  readonly poolType?: string;
  /**
  * Name of the associated Security Group (not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#security_group_name AnycastGateways#security_group_name}
  */
  readonly securityGroupName?: string;
  /**
  * Enable/disable Supplicant-Based Extended Node Onboarding (applicable only to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#supplicant_based_extended_node_onboarding AnycastGateways#supplicant_based_extended_node_onboarding}
  */
  readonly supplicantBasedExtendedNodeOnboarding?: boolean | cdktf.IResolvable;
  /**
  * TCP maximum segment size adjustment
  *   - Range: `500`-`1440`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#tcp_mss_adjustment AnycastGateways#tcp_mss_adjustment}
  */
  readonly tcpMssAdjustment?: number;
  /**
  * The type of traffic the anycast gateway serves
  *   - Choices: `DATA`, `VOICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#traffic_type AnycastGateways#traffic_type}
  */
  readonly trafficType: string;
  /**
  * Name of the layer 3 virtual network associated with the anycast gateway. the virtual network must have already been added to the site before creating an anycast gateway with it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#virtual_network_name AnycastGateways#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * ID of the VLAN of the anycast gateway. allowed VLAN range is 2-4093 except for reserved VLANs 1002-1005, 2046, and 4094. if deploying an anycast gateway on a fabric zone, this vlanId must match the vlanId of the corresponding anycast gateway on the fabric site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#vlan_id AnycastGateways#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Name of the VLAN of the anycast gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#vlan_name AnycastGateways#vlan_name}
  */
  readonly vlanName?: string;
  /**
  * Enable/disable fabric-enabled wireless (not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#wireless_pool AnycastGateways#wireless_pool}
  */
  readonly wirelessPool?: boolean | cdktf.IResolvable;
}

export function anycastGatewaysAnycastGatewaysToTerraform(struct?: AnycastGatewaysAnycastGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_generate_vlan_name: cdktf.booleanToTerraform(struct!.autoGenerateVlanName),
    critical_pool: cdktf.booleanToTerraform(struct!.criticalPool),
    fabric_id: cdktf.stringToTerraform(struct!.fabricId),
    group_based_policy_enforcement_enabled: cdktf.booleanToTerraform(struct!.groupBasedPolicyEnforcementEnabled),
    intra_subnet_routing_enabled: cdktf.booleanToTerraform(struct!.intraSubnetRoutingEnabled),
    ip_directed_broadcast: cdktf.booleanToTerraform(struct!.ipDirectedBroadcast),
    ip_pool_name: cdktf.stringToTerraform(struct!.ipPoolName),
    l2_flooding_enabled: cdktf.booleanToTerraform(struct!.l2FloodingEnabled),
    multiple_ip_to_mac_addresses: cdktf.booleanToTerraform(struct!.multipleIpToMacAddresses),
    pool_type: cdktf.stringToTerraform(struct!.poolType),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
    supplicant_based_extended_node_onboarding: cdktf.booleanToTerraform(struct!.supplicantBasedExtendedNodeOnboarding),
    tcp_mss_adjustment: cdktf.numberToTerraform(struct!.tcpMssAdjustment),
    traffic_type: cdktf.stringToTerraform(struct!.trafficType),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
    wireless_pool: cdktf.booleanToTerraform(struct!.wirelessPool),
  }
}


export function anycastGatewaysAnycastGatewaysToHclTerraform(struct?: AnycastGatewaysAnycastGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_generate_vlan_name: {
      value: cdktf.booleanToHclTerraform(struct!.autoGenerateVlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    critical_pool: {
      value: cdktf.booleanToHclTerraform(struct!.criticalPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fabric_id: {
      value: cdktf.stringToHclTerraform(struct!.fabricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_based_policy_enforcement_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.groupBasedPolicyEnforcementEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    intra_subnet_routing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.intraSubnetRoutingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_directed_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.ipDirectedBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.ipPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l2_flooding_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.l2FloodingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multiple_ip_to_mac_addresses: {
      value: cdktf.booleanToHclTerraform(struct!.multipleIpToMacAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_type: {
      value: cdktf.stringToHclTerraform(struct!.poolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supplicant_based_extended_node_onboarding: {
      value: cdktf.booleanToHclTerraform(struct!.supplicantBasedExtendedNodeOnboarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_mss_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.tcpMssAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_type: {
      value: cdktf.stringToHclTerraform(struct!.trafficType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wireless_pool: {
      value: cdktf.booleanToHclTerraform(struct!.wirelessPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnycastGatewaysAnycastGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnycastGatewaysAnycastGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoGenerateVlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoGenerateVlanName = this._autoGenerateVlanName;
    }
    if (this._criticalPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalPool = this._criticalPool;
    }
    if (this._fabricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricId = this._fabricId;
    }
    if (this._groupBasedPolicyEnforcementEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBasedPolicyEnforcementEnabled = this._groupBasedPolicyEnforcementEnabled;
    }
    if (this._intraSubnetRoutingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.intraSubnetRoutingEnabled = this._intraSubnetRoutingEnabled;
    }
    if (this._ipDirectedBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDirectedBroadcast = this._ipDirectedBroadcast;
    }
    if (this._ipPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolName = this._ipPoolName;
    }
    if (this._l2FloodingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2FloodingEnabled = this._l2FloodingEnabled;
    }
    if (this._multipleIpToMacAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleIpToMacAddresses = this._multipleIpToMacAddresses;
    }
    if (this._poolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolType = this._poolType;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    if (this._supplicantBasedExtendedNodeOnboarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplicantBasedExtendedNodeOnboarding = this._supplicantBasedExtendedNodeOnboarding;
    }
    if (this._tcpMssAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMssAdjustment = this._tcpMssAdjustment;
    }
    if (this._trafficType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficType = this._trafficType;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    if (this._wirelessPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.wirelessPool = this._wirelessPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnycastGatewaysAnycastGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoGenerateVlanName = undefined;
      this._criticalPool = undefined;
      this._fabricId = undefined;
      this._groupBasedPolicyEnforcementEnabled = undefined;
      this._intraSubnetRoutingEnabled = undefined;
      this._ipDirectedBroadcast = undefined;
      this._ipPoolName = undefined;
      this._l2FloodingEnabled = undefined;
      this._multipleIpToMacAddresses = undefined;
      this._poolType = undefined;
      this._securityGroupName = undefined;
      this._supplicantBasedExtendedNodeOnboarding = undefined;
      this._tcpMssAdjustment = undefined;
      this._trafficType = undefined;
      this._virtualNetworkName = undefined;
      this._vlanId = undefined;
      this._vlanName = undefined;
      this._wirelessPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoGenerateVlanName = value.autoGenerateVlanName;
      this._criticalPool = value.criticalPool;
      this._fabricId = value.fabricId;
      this._groupBasedPolicyEnforcementEnabled = value.groupBasedPolicyEnforcementEnabled;
      this._intraSubnetRoutingEnabled = value.intraSubnetRoutingEnabled;
      this._ipDirectedBroadcast = value.ipDirectedBroadcast;
      this._ipPoolName = value.ipPoolName;
      this._l2FloodingEnabled = value.l2FloodingEnabled;
      this._multipleIpToMacAddresses = value.multipleIpToMacAddresses;
      this._poolType = value.poolType;
      this._securityGroupName = value.securityGroupName;
      this._supplicantBasedExtendedNodeOnboarding = value.supplicantBasedExtendedNodeOnboarding;
      this._tcpMssAdjustment = value.tcpMssAdjustment;
      this._trafficType = value.trafficType;
      this._virtualNetworkName = value.virtualNetworkName;
      this._vlanId = value.vlanId;
      this._vlanName = value.vlanName;
      this._wirelessPool = value.wirelessPool;
    }
  }

  // auto_generate_vlan_name - computed: false, optional: false, required: true
  private _autoGenerateVlanName?: boolean | cdktf.IResolvable; 
  public get autoGenerateVlanName() {
    return this.getBooleanAttribute('auto_generate_vlan_name');
  }
  public set autoGenerateVlanName(value: boolean | cdktf.IResolvable) {
    this._autoGenerateVlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGenerateVlanNameInput() {
    return this._autoGenerateVlanName;
  }

  // critical_pool - computed: false, optional: true, required: false
  private _criticalPool?: boolean | cdktf.IResolvable; 
  public get criticalPool() {
    return this.getBooleanAttribute('critical_pool');
  }
  public set criticalPool(value: boolean | cdktf.IResolvable) {
    this._criticalPool = value;
  }
  public resetCriticalPool() {
    this._criticalPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalPoolInput() {
    return this._criticalPool;
  }

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // group_based_policy_enforcement_enabled - computed: false, optional: true, required: false
  private _groupBasedPolicyEnforcementEnabled?: boolean | cdktf.IResolvable; 
  public get groupBasedPolicyEnforcementEnabled() {
    return this.getBooleanAttribute('group_based_policy_enforcement_enabled');
  }
  public set groupBasedPolicyEnforcementEnabled(value: boolean | cdktf.IResolvable) {
    this._groupBasedPolicyEnforcementEnabled = value;
  }
  public resetGroupBasedPolicyEnforcementEnabled() {
    this._groupBasedPolicyEnforcementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBasedPolicyEnforcementEnabledInput() {
    return this._groupBasedPolicyEnforcementEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intra_subnet_routing_enabled - computed: false, optional: true, required: false
  private _intraSubnetRoutingEnabled?: boolean | cdktf.IResolvable; 
  public get intraSubnetRoutingEnabled() {
    return this.getBooleanAttribute('intra_subnet_routing_enabled');
  }
  public set intraSubnetRoutingEnabled(value: boolean | cdktf.IResolvable) {
    this._intraSubnetRoutingEnabled = value;
  }
  public resetIntraSubnetRoutingEnabled() {
    this._intraSubnetRoutingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraSubnetRoutingEnabledInput() {
    return this._intraSubnetRoutingEnabled;
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

  // ip_pool_name - computed: false, optional: false, required: true
  private _ipPoolName?: string; 
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }
  public set ipPoolName(value: string) {
    this._ipPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolNameInput() {
    return this._ipPoolName;
  }

  // l2_flooding_enabled - computed: false, optional: true, required: false
  private _l2FloodingEnabled?: boolean | cdktf.IResolvable; 
  public get l2FloodingEnabled() {
    return this.getBooleanAttribute('l2_flooding_enabled');
  }
  public set l2FloodingEnabled(value: boolean | cdktf.IResolvable) {
    this._l2FloodingEnabled = value;
  }
  public resetL2FloodingEnabled() {
    this._l2FloodingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2FloodingEnabledInput() {
    return this._l2FloodingEnabled;
  }

  // multiple_ip_to_mac_addresses - computed: false, optional: true, required: false
  private _multipleIpToMacAddresses?: boolean | cdktf.IResolvable; 
  public get multipleIpToMacAddresses() {
    return this.getBooleanAttribute('multiple_ip_to_mac_addresses');
  }
  public set multipleIpToMacAddresses(value: boolean | cdktf.IResolvable) {
    this._multipleIpToMacAddresses = value;
  }
  public resetMultipleIpToMacAddresses() {
    this._multipleIpToMacAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleIpToMacAddressesInput() {
    return this._multipleIpToMacAddresses;
  }

  // pool_type - computed: false, optional: true, required: false
  private _poolType?: string; 
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }
  public set poolType(value: string) {
    this._poolType = value;
  }
  public resetPoolType() {
    this._poolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType;
  }

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }

  // supplicant_based_extended_node_onboarding - computed: false, optional: true, required: false
  private _supplicantBasedExtendedNodeOnboarding?: boolean | cdktf.IResolvable; 
  public get supplicantBasedExtendedNodeOnboarding() {
    return this.getBooleanAttribute('supplicant_based_extended_node_onboarding');
  }
  public set supplicantBasedExtendedNodeOnboarding(value: boolean | cdktf.IResolvable) {
    this._supplicantBasedExtendedNodeOnboarding = value;
  }
  public resetSupplicantBasedExtendedNodeOnboarding() {
    this._supplicantBasedExtendedNodeOnboarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplicantBasedExtendedNodeOnboardingInput() {
    return this._supplicantBasedExtendedNodeOnboarding;
  }

  // tcp_mss_adjustment - computed: false, optional: true, required: false
  private _tcpMssAdjustment?: number; 
  public get tcpMssAdjustment() {
    return this.getNumberAttribute('tcp_mss_adjustment');
  }
  public set tcpMssAdjustment(value: number) {
    this._tcpMssAdjustment = value;
  }
  public resetTcpMssAdjustment() {
    this._tcpMssAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustmentInput() {
    return this._tcpMssAdjustment;
  }

  // traffic_type - computed: false, optional: false, required: true
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_name - computed: true, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }

  // wireless_pool - computed: false, optional: true, required: false
  private _wirelessPool?: boolean | cdktf.IResolvable; 
  public get wirelessPool() {
    return this.getBooleanAttribute('wireless_pool');
  }
  public set wirelessPool(value: boolean | cdktf.IResolvable) {
    this._wirelessPool = value;
  }
  public resetWirelessPool() {
    this._wirelessPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessPoolInput() {
    return this._wirelessPool;
  }
}

export class AnycastGatewaysAnycastGatewaysList extends cdktf.ComplexList {
  public internalValue? : AnycastGatewaysAnycastGateways[] | cdktf.IResolvable

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
  public get(index: number): AnycastGatewaysAnycastGatewaysOutputReference {
    return new AnycastGatewaysAnycastGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways catalystcenter_anycast_gateways}
*/
export class AnycastGateways extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_anycast_gateways";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnycastGateways resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnycastGateways to import
  * @param importFromId The id of the existing AnycastGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnycastGateways to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_anycast_gateways", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateways catalystcenter_anycast_gateways} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnycastGatewaysConfig
  */
  public constructor(scope: Construct, id: string, config: AnycastGatewaysConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_anycast_gateways',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2',
        providerVersionConstraint: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anycastGateways.internalValue = config.anycastGateways;
    this._fabricId = config.fabricId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anycast_gateways - computed: false, optional: false, required: true
  private _anycastGateways = new AnycastGatewaysAnycastGatewaysList(this, "anycast_gateways", true);
  public get anycastGateways() {
    return this._anycastGateways;
  }
  public putAnycastGateways(value: AnycastGatewaysAnycastGateways[] | cdktf.IResolvable) {
    this._anycastGateways.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastGatewaysInput() {
    return this._anycastGateways.internalValue;
  }

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anycast_gateways: cdktf.listMapper(anycastGatewaysAnycastGatewaysToTerraform, false)(this._anycastGateways.internalValue),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anycast_gateways: {
        value: cdktf.listMapperHcl(anycastGatewaysAnycastGatewaysToHclTerraform, false)(this._anycastGateways.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AnycastGatewaysAnycastGatewaysList",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
