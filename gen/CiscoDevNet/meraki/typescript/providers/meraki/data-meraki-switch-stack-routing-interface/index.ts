// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_stack_routing_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchStackRoutingInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_stack_routing_interface#id DataMerakiSwitchStackRoutingInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A friendly name or description for the interface or VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_stack_routing_interface#name DataMerakiSwitchStackRoutingInterface#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_stack_routing_interface#network_id DataMerakiSwitchStackRoutingInterface#network_id}
  */
  readonly networkId: string;
  /**
  * Switch stack ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_stack_routing_interface#switch_stack_id DataMerakiSwitchStackRoutingInterface#switch_stack_id}
  */
  readonly switchStackId: string;
  /**
  * The name of the VRF this interface belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_stack_routing_interface#vrf_name DataMerakiSwitchStackRoutingInterface#vrf_name}
  */
  readonly vrfName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_stack_routing_interface meraki_switch_stack_routing_interface}
*/
export class DataMerakiSwitchStackRoutingInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_stack_routing_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchStackRoutingInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchStackRoutingInterface to import
  * @param importFromId The id of the existing DataMerakiSwitchStackRoutingInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_stack_routing_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchStackRoutingInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_stack_routing_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_stack_routing_interface meraki_switch_stack_routing_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchStackRoutingInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchStackRoutingInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_stack_routing_interface',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._networkId = config.networkId;
    this._switchStackId = config.switchStackId;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_gateway - computed: true, optional: false, required: false
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
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

  // interface_ip - computed: true, optional: false, required: false
  public get interfaceIp() {
    return this.getStringAttribute('interface_ip');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_assignment_mode - computed: true, optional: false, required: false
  public get ipv6AssignmentMode() {
    return this.getStringAttribute('ipv6_assignment_mode');
  }

  // ipv6_gateway - computed: true, optional: false, required: false
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }

  // ipv6_prefix - computed: true, optional: false, required: false
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // multicast_routing - computed: true, optional: false, required: false
  public get multicastRouting() {
    return this.getStringAttribute('multicast_routing');
  }

  // name - computed: true, optional: true, required: false
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // ospf_settings_area - computed: true, optional: false, required: false
  public get ospfSettingsArea() {
    return this.getStringAttribute('ospf_settings_area');
  }

  // ospf_settings_cost - computed: true, optional: false, required: false
  public get ospfSettingsCost() {
    return this.getNumberAttribute('ospf_settings_cost');
  }

  // ospf_settings_is_passive_enabled - computed: true, optional: false, required: false
  public get ospfSettingsIsPassiveEnabled() {
    return this.getBooleanAttribute('ospf_settings_is_passive_enabled');
  }

  // ospf_settings_network_type - computed: true, optional: false, required: false
  public get ospfSettingsNetworkType() {
    return this.getStringAttribute('ospf_settings_network_type');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // switch_port_id - computed: true, optional: false, required: false
  public get switchPortId() {
    return this.getStringAttribute('switch_port_id');
  }

  // switch_stack_id - computed: false, optional: false, required: true
  private _switchStackId?: string; 
  public get switchStackId() {
    return this.getStringAttribute('switch_stack_id');
  }
  public set switchStackId(value: string) {
    this._switchStackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchStackIdInput() {
    return this._switchStackId;
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vrf_name - computed: true, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      switch_stack_id: cdktf.stringToTerraform(this._switchStackId),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_stack_id: {
        value: cdktf.stringToHclTerraform(this._switchStackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
