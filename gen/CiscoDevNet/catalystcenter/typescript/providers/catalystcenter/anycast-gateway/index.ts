// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnycastGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * This field cannot be true when vlanName is provided. the vlanName will be generated as ipPoolGroupV4Cidr-virtualNetworkName for non-critical VLANs. for critical VLANs with DATA trafficType, vlanName will be CRITICAL_VLAN. for critical VLANs with VOICE trafficType, vlanName will be VOICE_VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#auto_generate_vlan_name AnycastGateway#auto_generate_vlan_name}
  */
  readonly autoGenerateVlanName: boolean | cdktf.IResolvable;
  /**
  * Enable/disable critical VLAN. if true, autoGenerateVlanName must also be true. (isCriticalPool is not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#critical_pool AnycastGateway#critical_pool}
  */
  readonly criticalPool?: boolean | cdktf.IResolvable;
  /**
  * ID of the fabric to contain this anycast gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#fabric_id AnycastGateway#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Enable/disable Group-Based Policy Enforcement (applicable only to INFRA_VN; defaults to false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#group_based_policy_enforcement_enabled AnycastGateway#group_based_policy_enforcement_enabled}
  */
  readonly groupBasedPolicyEnforcementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable Intra-Subnet Routing (not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#intra_subnet_routing_enabled AnycastGateway#intra_subnet_routing_enabled}
  */
  readonly intraSubnetRoutingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable IP-directed broadcast (not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#ip_directed_broadcast AnycastGateway#ip_directed_broadcast}
  */
  readonly ipDirectedBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Name of the IP pool associated with the anycast gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#ip_pool_name AnycastGateway#ip_pool_name}
  */
  readonly ipPoolName: string;
  /**
  * Enable/disable layer 2 flooding (not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#l2_flooding_enabled AnycastGateway#l2_flooding_enabled}
  */
  readonly l2FloodingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable multiple IP-to-MAC Addresses (Wireless Bridged-Network Virtual Machine; not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#multiple_ip_to_mac_addresses AnycastGateway#multiple_ip_to_mac_addresses}
  */
  readonly multipleIpToMacAddresses?: boolean | cdktf.IResolvable;
  /**
  * The pool type of the anycast gateway (required for & applicable only to INFRA_VN)
  *   - Choices: `EXTENDED_NODE`, `FABRIC_AP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#pool_type AnycastGateway#pool_type}
  */
  readonly poolType?: string;
  /**
  * Name of the associated Security Group (not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#security_group_name AnycastGateway#security_group_name}
  */
  readonly securityGroupName?: string;
  /**
  * Enable/disable Supplicant-Based Extended Node Onboarding (applicable only to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#supplicant_based_extended_node_onboarding AnycastGateway#supplicant_based_extended_node_onboarding}
  */
  readonly supplicantBasedExtendedNodeOnboarding?: boolean | cdktf.IResolvable;
  /**
  * TCP maximum segment size adjustment
  *   - Range: `500`-`1440`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#tcp_mss_adjustment AnycastGateway#tcp_mss_adjustment}
  */
  readonly tcpMssAdjustment?: number;
  /**
  * The type of traffic the anycast gateway serves
  *   - Choices: `DATA`, `VOICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#traffic_type AnycastGateway#traffic_type}
  */
  readonly trafficType: string;
  /**
  * Name of the layer 3 virtual network associated with the anycast gateway. the virtual network must have already been added to the site before creating an anycast gateway with it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#virtual_network_name AnycastGateway#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * ID of the VLAN of the anycast gateway. allowed VLAN range is 2-4093 except for reserved VLANs 1002-1005, 2046, and 4094. if deploying an anycast gateway on a fabric zone, this vlanId must match the vlanId of the corresponding anycast gateway on the fabric site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#vlan_id AnycastGateway#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Name of the VLAN of the anycast gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#vlan_name AnycastGateway#vlan_name}
  */
  readonly vlanName?: string;
  /**
  * Enable/disable fabric-enabled wireless (not applicable to INFRA_VN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#wireless_pool AnycastGateway#wireless_pool}
  */
  readonly wirelessPool?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway catalystcenter_anycast_gateway}
*/
export class AnycastGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_anycast_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnycastGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnycastGateway to import
  * @param importFromId The id of the existing AnycastGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnycastGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_anycast_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/anycast_gateway catalystcenter_anycast_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnycastGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: AnycastGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_anycast_gateway',
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
    this._autoGenerateVlanName = config.autoGenerateVlanName;
    this._criticalPool = config.criticalPool;
    this._fabricId = config.fabricId;
    this._groupBasedPolicyEnforcementEnabled = config.groupBasedPolicyEnforcementEnabled;
    this._intraSubnetRoutingEnabled = config.intraSubnetRoutingEnabled;
    this._ipDirectedBroadcast = config.ipDirectedBroadcast;
    this._ipPoolName = config.ipPoolName;
    this._l2FloodingEnabled = config.l2FloodingEnabled;
    this._multipleIpToMacAddresses = config.multipleIpToMacAddresses;
    this._poolType = config.poolType;
    this._securityGroupName = config.securityGroupName;
    this._supplicantBasedExtendedNodeOnboarding = config.supplicantBasedExtendedNodeOnboarding;
    this._tcpMssAdjustment = config.tcpMssAdjustment;
    this._trafficType = config.trafficType;
    this._virtualNetworkName = config.virtualNetworkName;
    this._vlanId = config.vlanId;
    this._vlanName = config.vlanName;
    this._wirelessPool = config.wirelessPool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_generate_vlan_name: cdktf.booleanToTerraform(this._autoGenerateVlanName),
      critical_pool: cdktf.booleanToTerraform(this._criticalPool),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      group_based_policy_enforcement_enabled: cdktf.booleanToTerraform(this._groupBasedPolicyEnforcementEnabled),
      intra_subnet_routing_enabled: cdktf.booleanToTerraform(this._intraSubnetRoutingEnabled),
      ip_directed_broadcast: cdktf.booleanToTerraform(this._ipDirectedBroadcast),
      ip_pool_name: cdktf.stringToTerraform(this._ipPoolName),
      l2_flooding_enabled: cdktf.booleanToTerraform(this._l2FloodingEnabled),
      multiple_ip_to_mac_addresses: cdktf.booleanToTerraform(this._multipleIpToMacAddresses),
      pool_type: cdktf.stringToTerraform(this._poolType),
      security_group_name: cdktf.stringToTerraform(this._securityGroupName),
      supplicant_based_extended_node_onboarding: cdktf.booleanToTerraform(this._supplicantBasedExtendedNodeOnboarding),
      tcp_mss_adjustment: cdktf.numberToTerraform(this._tcpMssAdjustment),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_name: cdktf.stringToTerraform(this._vlanName),
      wireless_pool: cdktf.booleanToTerraform(this._wirelessPool),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_generate_vlan_name: {
        value: cdktf.booleanToHclTerraform(this._autoGenerateVlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      critical_pool: {
        value: cdktf.booleanToHclTerraform(this._criticalPool),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_based_policy_enforcement_enabled: {
        value: cdktf.booleanToHclTerraform(this._groupBasedPolicyEnforcementEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      intra_subnet_routing_enabled: {
        value: cdktf.booleanToHclTerraform(this._intraSubnetRoutingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_directed_broadcast: {
        value: cdktf.booleanToHclTerraform(this._ipDirectedBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_pool_name: {
        value: cdktf.stringToHclTerraform(this._ipPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2_flooding_enabled: {
        value: cdktf.booleanToHclTerraform(this._l2FloodingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multiple_ip_to_mac_addresses: {
        value: cdktf.booleanToHclTerraform(this._multipleIpToMacAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pool_type: {
        value: cdktf.stringToHclTerraform(this._poolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_name: {
        value: cdktf.stringToHclTerraform(this._securityGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supplicant_based_extended_node_onboarding: {
        value: cdktf.booleanToHclTerraform(this._supplicantBasedExtendedNodeOnboarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_mss_adjustment: {
        value: cdktf.numberToHclTerraform(this._tcpMssAdjustment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_type: {
        value: cdktf.stringToHclTerraform(this._trafficType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_name: {
        value: cdktf.stringToHclTerraform(this._vlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wireless_pool: {
        value: cdktf.booleanToHclTerraform(this._wirelessPool),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
