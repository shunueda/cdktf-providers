// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchStackRoutingInterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#items SwitchStackRoutingInterfaces#items}
  */
  readonly items: SwitchStackRoutingInterfacesItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#network_id SwitchStackRoutingInterfaces#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#organization_id SwitchStackRoutingInterfaces#organization_id}
  */
  readonly organizationId: string;
  /**
  * Switch stack ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#switch_stack_id SwitchStackRoutingInterfaces#switch_stack_id}
  */
  readonly switchStackId: string;
}
export interface SwitchStackRoutingInterfacesItems {
  /**
  * The next hop for any traffic that isn`t going to a directly connected subnet or over a static route. This IP address must exist in a subnet with a routed interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#default_gateway SwitchStackRoutingInterfaces#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * The IP address this switch stack will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch`s management IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#interface_ip SwitchStackRoutingInterfaces#interface_ip}
  */
  readonly interfaceIp?: string;
  /**
  * The IPv6 address of the interface. Required if assignmentMode is `static`. Must not be included if assignmentMode is `eui-64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#ipv6_address SwitchStackRoutingInterfaces#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The IPv6 assignment mode for the interface. Can be either `eui-64` or `static`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#ipv6_assignment_mode SwitchStackRoutingInterfaces#ipv6_assignment_mode}
  */
  readonly ipv6AssignmentMode?: string;
  /**
  * The IPv6 default gateway of the interface. Required if prefix is defined and this is the first interface with IPv6 configured for the stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#ipv6_gateway SwitchStackRoutingInterfaces#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
  /**
  * The IPv6 prefix of the interface. Required if IPv6 object is included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#ipv6_prefix SwitchStackRoutingInterfaces#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * L3 Interface mode, can be one of `vlan`, `routed` or `loopback`. Default is `vlan`. CS 17.18 or higher is required for `routed` mode.
  *   - Choices: `loopback`, `routed`, `vlan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#mode SwitchStackRoutingInterfaces#mode}
  */
  readonly mode?: string;
  /**
  * Enable multicast support if, multicast routing between VLANs is required. Options are, `disabled`, `enabled` or `IGMP snooping querier`. Default is `disabled`.
  *   - Choices: `IGMP snooping querier`, `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#multicast_routing SwitchStackRoutingInterfaces#multicast_routing}
  */
  readonly multicastRouting?: string;
  /**
  * A friendly name or description for the interface or VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#name SwitchStackRoutingInterfaces#name}
  */
  readonly name: string;
  /**
  * The OSPF area to which this interface should belong. Can be either `ospfDisabled` or the identifier of an existing OSPF area. Defaults to `ospfDisabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#ospf_settings_area SwitchStackRoutingInterfaces#ospf_settings_area}
  */
  readonly ospfSettingsArea?: string;
  /**
  * The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#ospf_settings_cost SwitchStackRoutingInterfaces#ospf_settings_cost}
  */
  readonly ospfSettingsCost?: number;
  /**
  * When enabled, OSPF will not run on the interface, but the subnet will still be advertised.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#ospf_settings_is_passive_enabled SwitchStackRoutingInterfaces#ospf_settings_is_passive_enabled}
  */
  readonly ospfSettingsIsPassiveEnabled?: boolean | cdktf.IResolvable;
  /**
  * OSPF network type
  *   - Choices: `broadcast`, `point-to-point`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#ospf_settings_network_type SwitchStackRoutingInterfaces#ospf_settings_network_type}
  */
  readonly ospfSettingsNetworkType?: string;
  /**
  * The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#subnet SwitchStackRoutingInterfaces#subnet}
  */
  readonly subnet?: string;
  /**
  * Switch Port ID when in Routed mode (CS 17.18 or higher required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#switch_port_id SwitchStackRoutingInterfaces#switch_port_id}
  */
  readonly switchPortId?: string;
  /**
  * The VLAN this routed interface is on. VLAN must be between 1 and 4094.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#vlan_id SwitchStackRoutingInterfaces#vlan_id}
  */
  readonly vlanId: number;
  /**
  * The name of the VRF this interface belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#vrf_name SwitchStackRoutingInterfaces#vrf_name}
  */
  readonly vrfName?: string;
}

export function switchStackRoutingInterfacesItemsToTerraform(struct?: SwitchStackRoutingInterfacesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    interface_ip: cdktf.stringToTerraform(struct!.interfaceIp),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_assignment_mode: cdktf.stringToTerraform(struct!.ipv6AssignmentMode),
    ipv6_gateway: cdktf.stringToTerraform(struct!.ipv6Gateway),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    mode: cdktf.stringToTerraform(struct!.mode),
    multicast_routing: cdktf.stringToTerraform(struct!.multicastRouting),
    name: cdktf.stringToTerraform(struct!.name),
    ospf_settings_area: cdktf.stringToTerraform(struct!.ospfSettingsArea),
    ospf_settings_cost: cdktf.numberToTerraform(struct!.ospfSettingsCost),
    ospf_settings_is_passive_enabled: cdktf.booleanToTerraform(struct!.ospfSettingsIsPassiveEnabled),
    ospf_settings_network_type: cdktf.stringToTerraform(struct!.ospfSettingsNetworkType),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    switch_port_id: cdktf.stringToTerraform(struct!.switchPortId),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function switchStackRoutingInterfacesItemsToHclTerraform(struct?: SwitchStackRoutingInterfacesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_ip: {
      value: cdktf.stringToHclTerraform(struct!.interfaceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_assignment_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AssignmentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicast_routing: {
      value: cdktf.stringToHclTerraform(struct!.multicastRouting),
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
    ospf_settings_area: {
      value: cdktf.stringToHclTerraform(struct!.ospfSettingsArea),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf_settings_cost: {
      value: cdktf.numberToHclTerraform(struct!.ospfSettingsCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospf_settings_is_passive_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ospfSettingsIsPassiveEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ospf_settings_network_type: {
      value: cdktf.stringToHclTerraform(struct!.ospfSettingsNetworkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_port_id: {
      value: cdktf.stringToHclTerraform(struct!.switchPortId),
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
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchStackRoutingInterfacesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchStackRoutingInterfacesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._interfaceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIp = this._interfaceIp;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6AssignmentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AssignmentMode = this._ipv6AssignmentMode;
    }
    if (this._ipv6Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Gateway = this._ipv6Gateway;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._multicastRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastRouting = this._multicastRouting;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ospfSettingsArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfSettingsArea = this._ospfSettingsArea;
    }
    if (this._ospfSettingsCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfSettingsCost = this._ospfSettingsCost;
    }
    if (this._ospfSettingsIsPassiveEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfSettingsIsPassiveEnabled = this._ospfSettingsIsPassiveEnabled;
    }
    if (this._ospfSettingsNetworkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfSettingsNetworkType = this._ospfSettingsNetworkType;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._switchPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPortId = this._switchPortId;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchStackRoutingInterfacesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultGateway = undefined;
      this._interfaceIp = undefined;
      this._ipv6Address = undefined;
      this._ipv6AssignmentMode = undefined;
      this._ipv6Gateway = undefined;
      this._ipv6Prefix = undefined;
      this._mode = undefined;
      this._multicastRouting = undefined;
      this._name = undefined;
      this._ospfSettingsArea = undefined;
      this._ospfSettingsCost = undefined;
      this._ospfSettingsIsPassiveEnabled = undefined;
      this._ospfSettingsNetworkType = undefined;
      this._subnet = undefined;
      this._switchPortId = undefined;
      this._vlanId = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultGateway = value.defaultGateway;
      this._interfaceIp = value.interfaceIp;
      this._ipv6Address = value.ipv6Address;
      this._ipv6AssignmentMode = value.ipv6AssignmentMode;
      this._ipv6Gateway = value.ipv6Gateway;
      this._ipv6Prefix = value.ipv6Prefix;
      this._mode = value.mode;
      this._multicastRouting = value.multicastRouting;
      this._name = value.name;
      this._ospfSettingsArea = value.ospfSettingsArea;
      this._ospfSettingsCost = value.ospfSettingsCost;
      this._ospfSettingsIsPassiveEnabled = value.ospfSettingsIsPassiveEnabled;
      this._ospfSettingsNetworkType = value.ospfSettingsNetworkType;
      this._subnet = value.subnet;
      this._switchPortId = value.switchPortId;
      this._vlanId = value.vlanId;
      this._vrfName = value.vrfName;
    }
  }

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

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
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
}

export class SwitchStackRoutingInterfacesItemsList extends cdktf.ComplexList {
  public internalValue? : SwitchStackRoutingInterfacesItems[] | cdktf.IResolvable

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
  public get(index: number): SwitchStackRoutingInterfacesItemsOutputReference {
    return new SwitchStackRoutingInterfacesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces meraki_switch_stack_routing_interfaces}
*/
export class SwitchStackRoutingInterfaces extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_stack_routing_interfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchStackRoutingInterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchStackRoutingInterfaces to import
  * @param importFromId The id of the existing SwitchStackRoutingInterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchStackRoutingInterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_stack_routing_interfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_stack_routing_interfaces meraki_switch_stack_routing_interfaces} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchStackRoutingInterfacesConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchStackRoutingInterfacesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_stack_routing_interfaces',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
    this._switchStackId = config.switchStackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new SwitchStackRoutingInterfacesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: SwitchStackRoutingInterfacesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(switchStackRoutingInterfacesItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      switch_stack_id: cdktf.stringToTerraform(this._switchStackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(switchStackRoutingInterfacesItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SwitchStackRoutingInterfacesItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
