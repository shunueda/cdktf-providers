// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/anycast_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterAnycastGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric to contain this anycast gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/anycast_gateway#fabric_id DataCatalystcenterAnycastGateway#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Name of the IP pool associated with the anycast gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/anycast_gateway#ip_pool_name DataCatalystcenterAnycastGateway#ip_pool_name}
  */
  readonly ipPoolName: string;
  /**
  * Name of the layer 3 virtual network associated with the anycast gateway. the virtual network must have already been added to the site before creating an anycast gateway with it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/anycast_gateway#virtual_network_name DataCatalystcenterAnycastGateway#virtual_network_name}
  */
  readonly virtualNetworkName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/anycast_gateway catalystcenter_anycast_gateway}
*/
export class DataCatalystcenterAnycastGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_anycast_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterAnycastGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterAnycastGateway to import
  * @param importFromId The id of the existing DataCatalystcenterAnycastGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/anycast_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterAnycastGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_anycast_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/anycast_gateway catalystcenter_anycast_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterAnycastGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterAnycastGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_anycast_gateway',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricId = config.fabricId;
    this._ipPoolName = config.ipPoolName;
    this._virtualNetworkName = config.virtualNetworkName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_generate_vlan_name - computed: true, optional: false, required: false
  public get autoGenerateVlanName() {
    return this.getBooleanAttribute('auto_generate_vlan_name');
  }

  // critical_pool - computed: true, optional: false, required: false
  public get criticalPool() {
    return this.getBooleanAttribute('critical_pool');
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

  // group_based_policy_enforcement_enabled - computed: true, optional: false, required: false
  public get groupBasedPolicyEnforcementEnabled() {
    return this.getBooleanAttribute('group_based_policy_enforcement_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intra_subnet_routing_enabled - computed: true, optional: false, required: false
  public get intraSubnetRoutingEnabled() {
    return this.getBooleanAttribute('intra_subnet_routing_enabled');
  }

  // ip_directed_broadcast - computed: true, optional: false, required: false
  public get ipDirectedBroadcast() {
    return this.getBooleanAttribute('ip_directed_broadcast');
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

  // l2_flooding_enabled - computed: true, optional: false, required: false
  public get l2FloodingEnabled() {
    return this.getBooleanAttribute('l2_flooding_enabled');
  }

  // multiple_ip_to_mac_addresses - computed: true, optional: false, required: false
  public get multipleIpToMacAddresses() {
    return this.getBooleanAttribute('multiple_ip_to_mac_addresses');
  }

  // pool_type - computed: true, optional: false, required: false
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // supplicant_based_extended_node_onboarding - computed: true, optional: false, required: false
  public get supplicantBasedExtendedNodeOnboarding() {
    return this.getBooleanAttribute('supplicant_based_extended_node_onboarding');
  }

  // tcp_mss_adjustment - computed: true, optional: false, required: false
  public get tcpMssAdjustment() {
    return this.getNumberAttribute('tcp_mss_adjustment');
  }

  // traffic_type - computed: true, optional: false, required: false
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
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

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vlan_name - computed: true, optional: false, required: false
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }

  // wireless_pool - computed: true, optional: false, required: false
  public get wirelessPool() {
    return this.getBooleanAttribute('wireless_pool');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      ip_pool_name: cdktf.stringToTerraform(this._ipPoolName),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_pool_name: {
        value: cdktf.stringToHclTerraform(this._ipPoolName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
