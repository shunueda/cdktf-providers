// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchRoutingInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The next hop for any traffic that isn`t going to a directly connected subnet or over a static route. This IP address must exist in a subnet with a routed interface. Required if this is the first IPv4 interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#default_gateway SwitchRoutingInterface#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * The IP address this switch will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch`s management IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#interface_ip SwitchRoutingInterface#interface_ip}
  */
  readonly interfaceIp?: string;
  /**
  * The IPv6 address of the interface. Required if assignmentMode is `static`. Must not be included if assignmentMode is `eui-64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#ipv6_address SwitchRoutingInterface#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The IPv6 assignment mode for the interface. Can be either `eui-64` or `static`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#ipv6_assignment_mode SwitchRoutingInterface#ipv6_assignment_mode}
  */
  readonly ipv6AssignmentMode?: string;
  /**
  * The IPv6 default gateway of the interface. Required if prefix is defined and this is the first interface with IPv6 configured for the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#ipv6_gateway SwitchRoutingInterface#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
  /**
  * The IPv6 prefix of the interface. Required if IPv6 object is included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#ipv6_prefix SwitchRoutingInterface#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * L3 Interface mode, can be one of `vlan`, `routed` or `loopback`. Default is `vlan`. CS 17.18 or higher is required for `routed` mode.
  *   - Choices: `loopback`, `routed`, `vlan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#mode SwitchRoutingInterface#mode}
  */
  readonly mode?: string;
  /**
  * Enable multicast support if, multicast routing between VLANs is required. Options are: `disabled`, `enabled` or `IGMP snooping querier`. Default is `disabled`.
  *   - Choices: `IGMP snooping querier`, `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#multicast_routing SwitchRoutingInterface#multicast_routing}
  */
  readonly multicastRouting?: string;
  /**
  * A friendly name or description for the interface or VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#name SwitchRoutingInterface#name}
  */
  readonly name: string;
  /**
  * The OSPF area to which this interface should belong. Can be either `ospfDisabled` or the identifier of an existing OSPF area. Defaults to `ospfDisabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#ospf_settings_area SwitchRoutingInterface#ospf_settings_area}
  */
  readonly ospfSettingsArea?: string;
  /**
  * The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#ospf_settings_cost SwitchRoutingInterface#ospf_settings_cost}
  */
  readonly ospfSettingsCost?: number;
  /**
  * When enabled, OSPF will not run on the interface, but the subnet will still be advertised.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#ospf_settings_is_passive_enabled SwitchRoutingInterface#ospf_settings_is_passive_enabled}
  */
  readonly ospfSettingsIsPassiveEnabled?: boolean | cdktf.IResolvable;
  /**
  * OSPF network type
  *   - Choices: `broadcast`, `point-to-point`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#ospf_settings_network_type SwitchRoutingInterface#ospf_settings_network_type}
  */
  readonly ospfSettingsNetworkType?: string;
  /**
  * Switch serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#serial SwitchRoutingInterface#serial}
  */
  readonly serial: string;
  /**
  * The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#subnet SwitchRoutingInterface#subnet}
  */
  readonly subnet?: string;
  /**
  * Switch Port ID when in Routed mode (CS 17.18 or higher required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#switch_port_id SwitchRoutingInterface#switch_port_id}
  */
  readonly switchPortId?: string;
  /**
  * The VLAN this routed interface is on. VLAN must be between 1 and 4094.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#vlan_id SwitchRoutingInterface#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * The name of the VRF this interface belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#vrf_name SwitchRoutingInterface#vrf_name}
  */
  readonly vrfName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface meraki_switch_routing_interface}
*/
export class SwitchRoutingInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_routing_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchRoutingInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchRoutingInterface to import
  * @param importFromId The id of the existing SwitchRoutingInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchRoutingInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_routing_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_interface meraki_switch_routing_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchRoutingInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchRoutingInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_routing_interface',
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
    this._defaultGateway = config.defaultGateway;
    this._interfaceIp = config.interfaceIp;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AssignmentMode = config.ipv6AssignmentMode;
    this._ipv6Gateway = config.ipv6Gateway;
    this._ipv6Prefix = config.ipv6Prefix;
    this._mode = config.mode;
    this._multicastRouting = config.multicastRouting;
    this._name = config.name;
    this._ospfSettingsArea = config.ospfSettingsArea;
    this._ospfSettingsCost = config.ospfSettingsCost;
    this._ospfSettingsIsPassiveEnabled = config.ospfSettingsIsPassiveEnabled;
    this._ospfSettingsNetworkType = config.ospfSettingsNetworkType;
    this._serial = config.serial;
    this._subnet = config.subnet;
    this._switchPortId = config.switchPortId;
    this._vlanId = config.vlanId;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_ip - computed: false, optional: true, required: false
  private _interfaceIp?: string; 
  public get interfaceIp() {
    return this.getStringAttribute('interface_ip');
  }
  public set interfaceIp(value: string) {
    this._interfaceIp = value;
  }
  public resetInterfaceIp() {
    this._interfaceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpInput() {
    return this._interfaceIp;
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

  // ipv6_assignment_mode - computed: false, optional: true, required: false
  private _ipv6AssignmentMode?: string; 
  public get ipv6AssignmentMode() {
    return this.getStringAttribute('ipv6_assignment_mode');
  }
  public set ipv6AssignmentMode(value: string) {
    this._ipv6AssignmentMode = value;
  }
  public resetIpv6AssignmentMode() {
    this._ipv6AssignmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AssignmentModeInput() {
    return this._ipv6AssignmentMode;
  }

  // ipv6_gateway - computed: false, optional: true, required: false
  private _ipv6Gateway?: string; 
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }
  public set ipv6Gateway(value: string) {
    this._ipv6Gateway = value;
  }
  public resetIpv6Gateway() {
    this._ipv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayInput() {
    return this._ipv6Gateway;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // multicast_routing - computed: false, optional: true, required: false
  private _multicastRouting?: string; 
  public get multicastRouting() {
    return this.getStringAttribute('multicast_routing');
  }
  public set multicastRouting(value: string) {
    this._multicastRouting = value;
  }
  public resetMulticastRouting() {
    this._multicastRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRoutingInput() {
    return this._multicastRouting;
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

  // ospf_settings_area - computed: false, optional: true, required: false
  private _ospfSettingsArea?: string; 
  public get ospfSettingsArea() {
    return this.getStringAttribute('ospf_settings_area');
  }
  public set ospfSettingsArea(value: string) {
    this._ospfSettingsArea = value;
  }
  public resetOspfSettingsArea() {
    this._ospfSettingsArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfSettingsAreaInput() {
    return this._ospfSettingsArea;
  }

  // ospf_settings_cost - computed: false, optional: true, required: false
  private _ospfSettingsCost?: number; 
  public get ospfSettingsCost() {
    return this.getNumberAttribute('ospf_settings_cost');
  }
  public set ospfSettingsCost(value: number) {
    this._ospfSettingsCost = value;
  }
  public resetOspfSettingsCost() {
    this._ospfSettingsCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfSettingsCostInput() {
    return this._ospfSettingsCost;
  }

  // ospf_settings_is_passive_enabled - computed: false, optional: true, required: false
  private _ospfSettingsIsPassiveEnabled?: boolean | cdktf.IResolvable; 
  public get ospfSettingsIsPassiveEnabled() {
    return this.getBooleanAttribute('ospf_settings_is_passive_enabled');
  }
  public set ospfSettingsIsPassiveEnabled(value: boolean | cdktf.IResolvable) {
    this._ospfSettingsIsPassiveEnabled = value;
  }
  public resetOspfSettingsIsPassiveEnabled() {
    this._ospfSettingsIsPassiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfSettingsIsPassiveEnabledInput() {
    return this._ospfSettingsIsPassiveEnabled;
  }

  // ospf_settings_network_type - computed: false, optional: true, required: false
  private _ospfSettingsNetworkType?: string; 
  public get ospfSettingsNetworkType() {
    return this.getStringAttribute('ospf_settings_network_type');
  }
  public set ospfSettingsNetworkType(value: string) {
    this._ospfSettingsNetworkType = value;
  }
  public resetOspfSettingsNetworkType() {
    this._ospfSettingsNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfSettingsNetworkTypeInput() {
    return this._ospfSettingsNetworkType;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // switch_port_id - computed: false, optional: true, required: false
  private _switchPortId?: string; 
  public get switchPortId() {
    return this.getStringAttribute('switch_port_id');
  }
  public set switchPortId(value: string) {
    this._switchPortId = value;
  }
  public resetSwitchPortId() {
    this._switchPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortIdInput() {
    return this._switchPortId;
  }

  // vlan_id - computed: false, optional: true, required: false
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

  // vrf_name - computed: false, optional: true, required: false
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
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      interface_ip: cdktf.stringToTerraform(this._interfaceIp),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_assignment_mode: cdktf.stringToTerraform(this._ipv6AssignmentMode),
      ipv6_gateway: cdktf.stringToTerraform(this._ipv6Gateway),
      ipv6_prefix: cdktf.stringToTerraform(this._ipv6Prefix),
      mode: cdktf.stringToTerraform(this._mode),
      multicast_routing: cdktf.stringToTerraform(this._multicastRouting),
      name: cdktf.stringToTerraform(this._name),
      ospf_settings_area: cdktf.stringToTerraform(this._ospfSettingsArea),
      ospf_settings_cost: cdktf.numberToTerraform(this._ospfSettingsCost),
      ospf_settings_is_passive_enabled: cdktf.booleanToTerraform(this._ospfSettingsIsPassiveEnabled),
      ospf_settings_network_type: cdktf.stringToTerraform(this._ospfSettingsNetworkType),
      serial: cdktf.stringToTerraform(this._serial),
      subnet: cdktf.stringToTerraform(this._subnet),
      switch_port_id: cdktf.stringToTerraform(this._switchPortId),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_ip: {
        value: cdktf.stringToHclTerraform(this._interfaceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_assignment_mode: {
        value: cdktf.stringToHclTerraform(this._ipv6AssignmentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv6Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_prefix: {
        value: cdktf.stringToHclTerraform(this._ipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_routing: {
        value: cdktf.stringToHclTerraform(this._multicastRouting),
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
      ospf_settings_area: {
        value: cdktf.stringToHclTerraform(this._ospfSettingsArea),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf_settings_cost: {
        value: cdktf.numberToHclTerraform(this._ospfSettingsCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ospf_settings_is_passive_enabled: {
        value: cdktf.booleanToHclTerraform(this._ospfSettingsIsPassiveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ospf_settings_network_type: {
        value: cdktf.stringToHclTerraform(this._ospfSettingsNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_port_id: {
        value: cdktf.stringToHclTerraform(this._switchPortId),
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
