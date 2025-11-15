// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceUplinksSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_enabled ApplianceUplinksSettings#interfaces_wan1_enabled}
  */
  readonly interfacesWan1Enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether PPPoE authentication is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_pppoe_authentication_enabled ApplianceUplinksSettings#interfaces_wan1_pppoe_authentication_enabled}
  */
  readonly interfacesWan1PppoeAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Password for PPPoE authentication. This parameter is not returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_pppoe_authentication_password ApplianceUplinksSettings#interfaces_wan1_pppoe_authentication_password}
  */
  readonly interfacesWan1PppoeAuthenticationPassword?: string;
  /**
  * Username for PPPoE authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_pppoe_authentication_username ApplianceUplinksSettings#interfaces_wan1_pppoe_authentication_username}
  */
  readonly interfacesWan1PppoeAuthenticationUsername?: string;
  /**
  * Whether PPPoE is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_pppoe_enabled ApplianceUplinksSettings#interfaces_wan1_pppoe_enabled}
  */
  readonly interfacesWan1PppoeEnabled?: boolean | cdktf.IResolvable;
  /**
  * IP address and subnet mask when in static mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_svis_ipv4_address ApplianceUplinksSettings#interfaces_wan1_svis_ipv4_address}
  */
  readonly interfacesWan1SvisIpv4Address?: string;
  /**
  * The assignment mode for this SVI. Applies only when PPPoE is disabled.
  *   - Choices: `dynamic`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_svis_ipv4_assignment_mode ApplianceUplinksSettings#interfaces_wan1_svis_ipv4_assignment_mode}
  */
  readonly interfacesWan1SvisIpv4AssignmentMode?: string;
  /**
  * Gateway IP address when in static mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_svis_ipv4_gateway ApplianceUplinksSettings#interfaces_wan1_svis_ipv4_gateway}
  */
  readonly interfacesWan1SvisIpv4Gateway?: string;
  /**
  * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_svis_ipv4_nameservers_addresses ApplianceUplinksSettings#interfaces_wan1_svis_ipv4_nameservers_addresses}
  */
  readonly interfacesWan1SvisIpv4NameserversAddresses?: string[];
  /**
  * Static address that will override the one(s) received by SLAAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_svis_ipv6_address ApplianceUplinksSettings#interfaces_wan1_svis_ipv6_address}
  */
  readonly interfacesWan1SvisIpv6Address?: string;
  /**
  * The assignment mode for this SVI. Applies only when PPPoE is disabled.
  *   - Choices: `dynamic`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_svis_ipv6_assignment_mode ApplianceUplinksSettings#interfaces_wan1_svis_ipv6_assignment_mode}
  */
  readonly interfacesWan1SvisIpv6AssignmentMode?: string;
  /**
  * Static gateway that will override the one received by autoconf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_svis_ipv6_gateway ApplianceUplinksSettings#interfaces_wan1_svis_ipv6_gateway}
  */
  readonly interfacesWan1SvisIpv6Gateway?: string;
  /**
  * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_svis_ipv6_nameservers_addresses ApplianceUplinksSettings#interfaces_wan1_svis_ipv6_nameservers_addresses}
  */
  readonly interfacesWan1SvisIpv6NameserversAddresses?: string[];
  /**
  * Whether VLAN tagging is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_vlan_tagging_enabled ApplianceUplinksSettings#interfaces_wan1_vlan_tagging_enabled}
  */
  readonly interfacesWan1VlanTaggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the VLAN to use for VLAN tagging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan1_vlan_tagging_vlan_id ApplianceUplinksSettings#interfaces_wan1_vlan_tagging_vlan_id}
  */
  readonly interfacesWan1VlanTaggingVlanId?: number;
  /**
  * Enable or disable the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_enabled ApplianceUplinksSettings#interfaces_wan2_enabled}
  */
  readonly interfacesWan2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether PPPoE authentication is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_pppoe_authentication_enabled ApplianceUplinksSettings#interfaces_wan2_pppoe_authentication_enabled}
  */
  readonly interfacesWan2PppoeAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Password for PPPoE authentication. This parameter is not returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_pppoe_authentication_password ApplianceUplinksSettings#interfaces_wan2_pppoe_authentication_password}
  */
  readonly interfacesWan2PppoeAuthenticationPassword?: string;
  /**
  * Username for PPPoE authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_pppoe_authentication_username ApplianceUplinksSettings#interfaces_wan2_pppoe_authentication_username}
  */
  readonly interfacesWan2PppoeAuthenticationUsername?: string;
  /**
  * Whether PPPoE is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_pppoe_enabled ApplianceUplinksSettings#interfaces_wan2_pppoe_enabled}
  */
  readonly interfacesWan2PppoeEnabled?: boolean | cdktf.IResolvable;
  /**
  * IP address and subnet mask when in static mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_svis_ipv4_address ApplianceUplinksSettings#interfaces_wan2_svis_ipv4_address}
  */
  readonly interfacesWan2SvisIpv4Address?: string;
  /**
  * The assignment mode for this SVI. Applies only when PPPoE is disabled.
  *   - Choices: `dynamic`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_svis_ipv4_assignment_mode ApplianceUplinksSettings#interfaces_wan2_svis_ipv4_assignment_mode}
  */
  readonly interfacesWan2SvisIpv4AssignmentMode?: string;
  /**
  * Gateway IP address when in static mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_svis_ipv4_gateway ApplianceUplinksSettings#interfaces_wan2_svis_ipv4_gateway}
  */
  readonly interfacesWan2SvisIpv4Gateway?: string;
  /**
  * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_svis_ipv4_nameservers_addresses ApplianceUplinksSettings#interfaces_wan2_svis_ipv4_nameservers_addresses}
  */
  readonly interfacesWan2SvisIpv4NameserversAddresses?: string[];
  /**
  * Static address that will override the one(s) received by SLAAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_svis_ipv6_address ApplianceUplinksSettings#interfaces_wan2_svis_ipv6_address}
  */
  readonly interfacesWan2SvisIpv6Address?: string;
  /**
  * The assignment mode for this SVI. Applies only when PPPoE is disabled.
  *   - Choices: `dynamic`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_svis_ipv6_assignment_mode ApplianceUplinksSettings#interfaces_wan2_svis_ipv6_assignment_mode}
  */
  readonly interfacesWan2SvisIpv6AssignmentMode?: string;
  /**
  * Static gateway that will override the one received by autoconf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_svis_ipv6_gateway ApplianceUplinksSettings#interfaces_wan2_svis_ipv6_gateway}
  */
  readonly interfacesWan2SvisIpv6Gateway?: string;
  /**
  * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_svis_ipv6_nameservers_addresses ApplianceUplinksSettings#interfaces_wan2_svis_ipv6_nameservers_addresses}
  */
  readonly interfacesWan2SvisIpv6NameserversAddresses?: string[];
  /**
  * Whether VLAN tagging is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_vlan_tagging_enabled ApplianceUplinksSettings#interfaces_wan2_vlan_tagging_enabled}
  */
  readonly interfacesWan2VlanTaggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the VLAN to use for VLAN tagging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#interfaces_wan2_vlan_tagging_vlan_id ApplianceUplinksSettings#interfaces_wan2_vlan_tagging_vlan_id}
  */
  readonly interfacesWan2VlanTaggingVlanId?: number;
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#serial ApplianceUplinksSettings#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings meraki_appliance_uplinks_settings}
*/
export class ApplianceUplinksSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_uplinks_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceUplinksSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceUplinksSettings to import
  * @param importFromId The id of the existing ApplianceUplinksSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceUplinksSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_uplinks_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_uplinks_settings meraki_appliance_uplinks_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceUplinksSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceUplinksSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_uplinks_settings',
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
    this._interfacesWan1Enabled = config.interfacesWan1Enabled;
    this._interfacesWan1PppoeAuthenticationEnabled = config.interfacesWan1PppoeAuthenticationEnabled;
    this._interfacesWan1PppoeAuthenticationPassword = config.interfacesWan1PppoeAuthenticationPassword;
    this._interfacesWan1PppoeAuthenticationUsername = config.interfacesWan1PppoeAuthenticationUsername;
    this._interfacesWan1PppoeEnabled = config.interfacesWan1PppoeEnabled;
    this._interfacesWan1SvisIpv4Address = config.interfacesWan1SvisIpv4Address;
    this._interfacesWan1SvisIpv4AssignmentMode = config.interfacesWan1SvisIpv4AssignmentMode;
    this._interfacesWan1SvisIpv4Gateway = config.interfacesWan1SvisIpv4Gateway;
    this._interfacesWan1SvisIpv4NameserversAddresses = config.interfacesWan1SvisIpv4NameserversAddresses;
    this._interfacesWan1SvisIpv6Address = config.interfacesWan1SvisIpv6Address;
    this._interfacesWan1SvisIpv6AssignmentMode = config.interfacesWan1SvisIpv6AssignmentMode;
    this._interfacesWan1SvisIpv6Gateway = config.interfacesWan1SvisIpv6Gateway;
    this._interfacesWan1SvisIpv6NameserversAddresses = config.interfacesWan1SvisIpv6NameserversAddresses;
    this._interfacesWan1VlanTaggingEnabled = config.interfacesWan1VlanTaggingEnabled;
    this._interfacesWan1VlanTaggingVlanId = config.interfacesWan1VlanTaggingVlanId;
    this._interfacesWan2Enabled = config.interfacesWan2Enabled;
    this._interfacesWan2PppoeAuthenticationEnabled = config.interfacesWan2PppoeAuthenticationEnabled;
    this._interfacesWan2PppoeAuthenticationPassword = config.interfacesWan2PppoeAuthenticationPassword;
    this._interfacesWan2PppoeAuthenticationUsername = config.interfacesWan2PppoeAuthenticationUsername;
    this._interfacesWan2PppoeEnabled = config.interfacesWan2PppoeEnabled;
    this._interfacesWan2SvisIpv4Address = config.interfacesWan2SvisIpv4Address;
    this._interfacesWan2SvisIpv4AssignmentMode = config.interfacesWan2SvisIpv4AssignmentMode;
    this._interfacesWan2SvisIpv4Gateway = config.interfacesWan2SvisIpv4Gateway;
    this._interfacesWan2SvisIpv4NameserversAddresses = config.interfacesWan2SvisIpv4NameserversAddresses;
    this._interfacesWan2SvisIpv6Address = config.interfacesWan2SvisIpv6Address;
    this._interfacesWan2SvisIpv6AssignmentMode = config.interfacesWan2SvisIpv6AssignmentMode;
    this._interfacesWan2SvisIpv6Gateway = config.interfacesWan2SvisIpv6Gateway;
    this._interfacesWan2SvisIpv6NameserversAddresses = config.interfacesWan2SvisIpv6NameserversAddresses;
    this._interfacesWan2VlanTaggingEnabled = config.interfacesWan2VlanTaggingEnabled;
    this._interfacesWan2VlanTaggingVlanId = config.interfacesWan2VlanTaggingVlanId;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces_wan1_enabled - computed: false, optional: true, required: false
  private _interfacesWan1Enabled?: boolean | cdktf.IResolvable; 
  public get interfacesWan1Enabled() {
    return this.getBooleanAttribute('interfaces_wan1_enabled');
  }
  public set interfacesWan1Enabled(value: boolean | cdktf.IResolvable) {
    this._interfacesWan1Enabled = value;
  }
  public resetInterfacesWan1Enabled() {
    this._interfacesWan1Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1EnabledInput() {
    return this._interfacesWan1Enabled;
  }

  // interfaces_wan1_pppoe_authentication_enabled - computed: false, optional: true, required: false
  private _interfacesWan1PppoeAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get interfacesWan1PppoeAuthenticationEnabled() {
    return this.getBooleanAttribute('interfaces_wan1_pppoe_authentication_enabled');
  }
  public set interfacesWan1PppoeAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._interfacesWan1PppoeAuthenticationEnabled = value;
  }
  public resetInterfacesWan1PppoeAuthenticationEnabled() {
    this._interfacesWan1PppoeAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1PppoeAuthenticationEnabledInput() {
    return this._interfacesWan1PppoeAuthenticationEnabled;
  }

  // interfaces_wan1_pppoe_authentication_password - computed: false, optional: true, required: false
  private _interfacesWan1PppoeAuthenticationPassword?: string; 
  public get interfacesWan1PppoeAuthenticationPassword() {
    return this.getStringAttribute('interfaces_wan1_pppoe_authentication_password');
  }
  public set interfacesWan1PppoeAuthenticationPassword(value: string) {
    this._interfacesWan1PppoeAuthenticationPassword = value;
  }
  public resetInterfacesWan1PppoeAuthenticationPassword() {
    this._interfacesWan1PppoeAuthenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1PppoeAuthenticationPasswordInput() {
    return this._interfacesWan1PppoeAuthenticationPassword;
  }

  // interfaces_wan1_pppoe_authentication_username - computed: false, optional: true, required: false
  private _interfacesWan1PppoeAuthenticationUsername?: string; 
  public get interfacesWan1PppoeAuthenticationUsername() {
    return this.getStringAttribute('interfaces_wan1_pppoe_authentication_username');
  }
  public set interfacesWan1PppoeAuthenticationUsername(value: string) {
    this._interfacesWan1PppoeAuthenticationUsername = value;
  }
  public resetInterfacesWan1PppoeAuthenticationUsername() {
    this._interfacesWan1PppoeAuthenticationUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1PppoeAuthenticationUsernameInput() {
    return this._interfacesWan1PppoeAuthenticationUsername;
  }

  // interfaces_wan1_pppoe_enabled - computed: false, optional: true, required: false
  private _interfacesWan1PppoeEnabled?: boolean | cdktf.IResolvable; 
  public get interfacesWan1PppoeEnabled() {
    return this.getBooleanAttribute('interfaces_wan1_pppoe_enabled');
  }
  public set interfacesWan1PppoeEnabled(value: boolean | cdktf.IResolvable) {
    this._interfacesWan1PppoeEnabled = value;
  }
  public resetInterfacesWan1PppoeEnabled() {
    this._interfacesWan1PppoeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1PppoeEnabledInput() {
    return this._interfacesWan1PppoeEnabled;
  }

  // interfaces_wan1_svis_ipv4_address - computed: false, optional: true, required: false
  private _interfacesWan1SvisIpv4Address?: string; 
  public get interfacesWan1SvisIpv4Address() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv4_address');
  }
  public set interfacesWan1SvisIpv4Address(value: string) {
    this._interfacesWan1SvisIpv4Address = value;
  }
  public resetInterfacesWan1SvisIpv4Address() {
    this._interfacesWan1SvisIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1SvisIpv4AddressInput() {
    return this._interfacesWan1SvisIpv4Address;
  }

  // interfaces_wan1_svis_ipv4_assignment_mode - computed: false, optional: true, required: false
  private _interfacesWan1SvisIpv4AssignmentMode?: string; 
  public get interfacesWan1SvisIpv4AssignmentMode() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv4_assignment_mode');
  }
  public set interfacesWan1SvisIpv4AssignmentMode(value: string) {
    this._interfacesWan1SvisIpv4AssignmentMode = value;
  }
  public resetInterfacesWan1SvisIpv4AssignmentMode() {
    this._interfacesWan1SvisIpv4AssignmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1SvisIpv4AssignmentModeInput() {
    return this._interfacesWan1SvisIpv4AssignmentMode;
  }

  // interfaces_wan1_svis_ipv4_gateway - computed: false, optional: true, required: false
  private _interfacesWan1SvisIpv4Gateway?: string; 
  public get interfacesWan1SvisIpv4Gateway() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv4_gateway');
  }
  public set interfacesWan1SvisIpv4Gateway(value: string) {
    this._interfacesWan1SvisIpv4Gateway = value;
  }
  public resetInterfacesWan1SvisIpv4Gateway() {
    this._interfacesWan1SvisIpv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1SvisIpv4GatewayInput() {
    return this._interfacesWan1SvisIpv4Gateway;
  }

  // interfaces_wan1_svis_ipv4_nameservers_addresses - computed: false, optional: true, required: false
  private _interfacesWan1SvisIpv4NameserversAddresses?: string[]; 
  public get interfacesWan1SvisIpv4NameserversAddresses() {
    return this.getListAttribute('interfaces_wan1_svis_ipv4_nameservers_addresses');
  }
  public set interfacesWan1SvisIpv4NameserversAddresses(value: string[]) {
    this._interfacesWan1SvisIpv4NameserversAddresses = value;
  }
  public resetInterfacesWan1SvisIpv4NameserversAddresses() {
    this._interfacesWan1SvisIpv4NameserversAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1SvisIpv4NameserversAddressesInput() {
    return this._interfacesWan1SvisIpv4NameserversAddresses;
  }

  // interfaces_wan1_svis_ipv6_address - computed: false, optional: true, required: false
  private _interfacesWan1SvisIpv6Address?: string; 
  public get interfacesWan1SvisIpv6Address() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv6_address');
  }
  public set interfacesWan1SvisIpv6Address(value: string) {
    this._interfacesWan1SvisIpv6Address = value;
  }
  public resetInterfacesWan1SvisIpv6Address() {
    this._interfacesWan1SvisIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1SvisIpv6AddressInput() {
    return this._interfacesWan1SvisIpv6Address;
  }

  // interfaces_wan1_svis_ipv6_assignment_mode - computed: false, optional: true, required: false
  private _interfacesWan1SvisIpv6AssignmentMode?: string; 
  public get interfacesWan1SvisIpv6AssignmentMode() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv6_assignment_mode');
  }
  public set interfacesWan1SvisIpv6AssignmentMode(value: string) {
    this._interfacesWan1SvisIpv6AssignmentMode = value;
  }
  public resetInterfacesWan1SvisIpv6AssignmentMode() {
    this._interfacesWan1SvisIpv6AssignmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1SvisIpv6AssignmentModeInput() {
    return this._interfacesWan1SvisIpv6AssignmentMode;
  }

  // interfaces_wan1_svis_ipv6_gateway - computed: false, optional: true, required: false
  private _interfacesWan1SvisIpv6Gateway?: string; 
  public get interfacesWan1SvisIpv6Gateway() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv6_gateway');
  }
  public set interfacesWan1SvisIpv6Gateway(value: string) {
    this._interfacesWan1SvisIpv6Gateway = value;
  }
  public resetInterfacesWan1SvisIpv6Gateway() {
    this._interfacesWan1SvisIpv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1SvisIpv6GatewayInput() {
    return this._interfacesWan1SvisIpv6Gateway;
  }

  // interfaces_wan1_svis_ipv6_nameservers_addresses - computed: false, optional: true, required: false
  private _interfacesWan1SvisIpv6NameserversAddresses?: string[]; 
  public get interfacesWan1SvisIpv6NameserversAddresses() {
    return this.getListAttribute('interfaces_wan1_svis_ipv6_nameservers_addresses');
  }
  public set interfacesWan1SvisIpv6NameserversAddresses(value: string[]) {
    this._interfacesWan1SvisIpv6NameserversAddresses = value;
  }
  public resetInterfacesWan1SvisIpv6NameserversAddresses() {
    this._interfacesWan1SvisIpv6NameserversAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1SvisIpv6NameserversAddressesInput() {
    return this._interfacesWan1SvisIpv6NameserversAddresses;
  }

  // interfaces_wan1_vlan_tagging_enabled - computed: false, optional: true, required: false
  private _interfacesWan1VlanTaggingEnabled?: boolean | cdktf.IResolvable; 
  public get interfacesWan1VlanTaggingEnabled() {
    return this.getBooleanAttribute('interfaces_wan1_vlan_tagging_enabled');
  }
  public set interfacesWan1VlanTaggingEnabled(value: boolean | cdktf.IResolvable) {
    this._interfacesWan1VlanTaggingEnabled = value;
  }
  public resetInterfacesWan1VlanTaggingEnabled() {
    this._interfacesWan1VlanTaggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1VlanTaggingEnabledInput() {
    return this._interfacesWan1VlanTaggingEnabled;
  }

  // interfaces_wan1_vlan_tagging_vlan_id - computed: false, optional: true, required: false
  private _interfacesWan1VlanTaggingVlanId?: number; 
  public get interfacesWan1VlanTaggingVlanId() {
    return this.getNumberAttribute('interfaces_wan1_vlan_tagging_vlan_id');
  }
  public set interfacesWan1VlanTaggingVlanId(value: number) {
    this._interfacesWan1VlanTaggingVlanId = value;
  }
  public resetInterfacesWan1VlanTaggingVlanId() {
    this._interfacesWan1VlanTaggingVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan1VlanTaggingVlanIdInput() {
    return this._interfacesWan1VlanTaggingVlanId;
  }

  // interfaces_wan2_enabled - computed: false, optional: true, required: false
  private _interfacesWan2Enabled?: boolean | cdktf.IResolvable; 
  public get interfacesWan2Enabled() {
    return this.getBooleanAttribute('interfaces_wan2_enabled');
  }
  public set interfacesWan2Enabled(value: boolean | cdktf.IResolvable) {
    this._interfacesWan2Enabled = value;
  }
  public resetInterfacesWan2Enabled() {
    this._interfacesWan2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2EnabledInput() {
    return this._interfacesWan2Enabled;
  }

  // interfaces_wan2_pppoe_authentication_enabled - computed: false, optional: true, required: false
  private _interfacesWan2PppoeAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get interfacesWan2PppoeAuthenticationEnabled() {
    return this.getBooleanAttribute('interfaces_wan2_pppoe_authentication_enabled');
  }
  public set interfacesWan2PppoeAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._interfacesWan2PppoeAuthenticationEnabled = value;
  }
  public resetInterfacesWan2PppoeAuthenticationEnabled() {
    this._interfacesWan2PppoeAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2PppoeAuthenticationEnabledInput() {
    return this._interfacesWan2PppoeAuthenticationEnabled;
  }

  // interfaces_wan2_pppoe_authentication_password - computed: false, optional: true, required: false
  private _interfacesWan2PppoeAuthenticationPassword?: string; 
  public get interfacesWan2PppoeAuthenticationPassword() {
    return this.getStringAttribute('interfaces_wan2_pppoe_authentication_password');
  }
  public set interfacesWan2PppoeAuthenticationPassword(value: string) {
    this._interfacesWan2PppoeAuthenticationPassword = value;
  }
  public resetInterfacesWan2PppoeAuthenticationPassword() {
    this._interfacesWan2PppoeAuthenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2PppoeAuthenticationPasswordInput() {
    return this._interfacesWan2PppoeAuthenticationPassword;
  }

  // interfaces_wan2_pppoe_authentication_username - computed: false, optional: true, required: false
  private _interfacesWan2PppoeAuthenticationUsername?: string; 
  public get interfacesWan2PppoeAuthenticationUsername() {
    return this.getStringAttribute('interfaces_wan2_pppoe_authentication_username');
  }
  public set interfacesWan2PppoeAuthenticationUsername(value: string) {
    this._interfacesWan2PppoeAuthenticationUsername = value;
  }
  public resetInterfacesWan2PppoeAuthenticationUsername() {
    this._interfacesWan2PppoeAuthenticationUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2PppoeAuthenticationUsernameInput() {
    return this._interfacesWan2PppoeAuthenticationUsername;
  }

  // interfaces_wan2_pppoe_enabled - computed: false, optional: true, required: false
  private _interfacesWan2PppoeEnabled?: boolean | cdktf.IResolvable; 
  public get interfacesWan2PppoeEnabled() {
    return this.getBooleanAttribute('interfaces_wan2_pppoe_enabled');
  }
  public set interfacesWan2PppoeEnabled(value: boolean | cdktf.IResolvable) {
    this._interfacesWan2PppoeEnabled = value;
  }
  public resetInterfacesWan2PppoeEnabled() {
    this._interfacesWan2PppoeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2PppoeEnabledInput() {
    return this._interfacesWan2PppoeEnabled;
  }

  // interfaces_wan2_svis_ipv4_address - computed: false, optional: true, required: false
  private _interfacesWan2SvisIpv4Address?: string; 
  public get interfacesWan2SvisIpv4Address() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv4_address');
  }
  public set interfacesWan2SvisIpv4Address(value: string) {
    this._interfacesWan2SvisIpv4Address = value;
  }
  public resetInterfacesWan2SvisIpv4Address() {
    this._interfacesWan2SvisIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2SvisIpv4AddressInput() {
    return this._interfacesWan2SvisIpv4Address;
  }

  // interfaces_wan2_svis_ipv4_assignment_mode - computed: false, optional: true, required: false
  private _interfacesWan2SvisIpv4AssignmentMode?: string; 
  public get interfacesWan2SvisIpv4AssignmentMode() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv4_assignment_mode');
  }
  public set interfacesWan2SvisIpv4AssignmentMode(value: string) {
    this._interfacesWan2SvisIpv4AssignmentMode = value;
  }
  public resetInterfacesWan2SvisIpv4AssignmentMode() {
    this._interfacesWan2SvisIpv4AssignmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2SvisIpv4AssignmentModeInput() {
    return this._interfacesWan2SvisIpv4AssignmentMode;
  }

  // interfaces_wan2_svis_ipv4_gateway - computed: false, optional: true, required: false
  private _interfacesWan2SvisIpv4Gateway?: string; 
  public get interfacesWan2SvisIpv4Gateway() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv4_gateway');
  }
  public set interfacesWan2SvisIpv4Gateway(value: string) {
    this._interfacesWan2SvisIpv4Gateway = value;
  }
  public resetInterfacesWan2SvisIpv4Gateway() {
    this._interfacesWan2SvisIpv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2SvisIpv4GatewayInput() {
    return this._interfacesWan2SvisIpv4Gateway;
  }

  // interfaces_wan2_svis_ipv4_nameservers_addresses - computed: false, optional: true, required: false
  private _interfacesWan2SvisIpv4NameserversAddresses?: string[]; 
  public get interfacesWan2SvisIpv4NameserversAddresses() {
    return this.getListAttribute('interfaces_wan2_svis_ipv4_nameservers_addresses');
  }
  public set interfacesWan2SvisIpv4NameserversAddresses(value: string[]) {
    this._interfacesWan2SvisIpv4NameserversAddresses = value;
  }
  public resetInterfacesWan2SvisIpv4NameserversAddresses() {
    this._interfacesWan2SvisIpv4NameserversAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2SvisIpv4NameserversAddressesInput() {
    return this._interfacesWan2SvisIpv4NameserversAddresses;
  }

  // interfaces_wan2_svis_ipv6_address - computed: false, optional: true, required: false
  private _interfacesWan2SvisIpv6Address?: string; 
  public get interfacesWan2SvisIpv6Address() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv6_address');
  }
  public set interfacesWan2SvisIpv6Address(value: string) {
    this._interfacesWan2SvisIpv6Address = value;
  }
  public resetInterfacesWan2SvisIpv6Address() {
    this._interfacesWan2SvisIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2SvisIpv6AddressInput() {
    return this._interfacesWan2SvisIpv6Address;
  }

  // interfaces_wan2_svis_ipv6_assignment_mode - computed: false, optional: true, required: false
  private _interfacesWan2SvisIpv6AssignmentMode?: string; 
  public get interfacesWan2SvisIpv6AssignmentMode() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv6_assignment_mode');
  }
  public set interfacesWan2SvisIpv6AssignmentMode(value: string) {
    this._interfacesWan2SvisIpv6AssignmentMode = value;
  }
  public resetInterfacesWan2SvisIpv6AssignmentMode() {
    this._interfacesWan2SvisIpv6AssignmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2SvisIpv6AssignmentModeInput() {
    return this._interfacesWan2SvisIpv6AssignmentMode;
  }

  // interfaces_wan2_svis_ipv6_gateway - computed: false, optional: true, required: false
  private _interfacesWan2SvisIpv6Gateway?: string; 
  public get interfacesWan2SvisIpv6Gateway() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv6_gateway');
  }
  public set interfacesWan2SvisIpv6Gateway(value: string) {
    this._interfacesWan2SvisIpv6Gateway = value;
  }
  public resetInterfacesWan2SvisIpv6Gateway() {
    this._interfacesWan2SvisIpv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2SvisIpv6GatewayInput() {
    return this._interfacesWan2SvisIpv6Gateway;
  }

  // interfaces_wan2_svis_ipv6_nameservers_addresses - computed: false, optional: true, required: false
  private _interfacesWan2SvisIpv6NameserversAddresses?: string[]; 
  public get interfacesWan2SvisIpv6NameserversAddresses() {
    return this.getListAttribute('interfaces_wan2_svis_ipv6_nameservers_addresses');
  }
  public set interfacesWan2SvisIpv6NameserversAddresses(value: string[]) {
    this._interfacesWan2SvisIpv6NameserversAddresses = value;
  }
  public resetInterfacesWan2SvisIpv6NameserversAddresses() {
    this._interfacesWan2SvisIpv6NameserversAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2SvisIpv6NameserversAddressesInput() {
    return this._interfacesWan2SvisIpv6NameserversAddresses;
  }

  // interfaces_wan2_vlan_tagging_enabled - computed: false, optional: true, required: false
  private _interfacesWan2VlanTaggingEnabled?: boolean | cdktf.IResolvable; 
  public get interfacesWan2VlanTaggingEnabled() {
    return this.getBooleanAttribute('interfaces_wan2_vlan_tagging_enabled');
  }
  public set interfacesWan2VlanTaggingEnabled(value: boolean | cdktf.IResolvable) {
    this._interfacesWan2VlanTaggingEnabled = value;
  }
  public resetInterfacesWan2VlanTaggingEnabled() {
    this._interfacesWan2VlanTaggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2VlanTaggingEnabledInput() {
    return this._interfacesWan2VlanTaggingEnabled;
  }

  // interfaces_wan2_vlan_tagging_vlan_id - computed: false, optional: true, required: false
  private _interfacesWan2VlanTaggingVlanId?: number; 
  public get interfacesWan2VlanTaggingVlanId() {
    return this.getNumberAttribute('interfaces_wan2_vlan_tagging_vlan_id');
  }
  public set interfacesWan2VlanTaggingVlanId(value: number) {
    this._interfacesWan2VlanTaggingVlanId = value;
  }
  public resetInterfacesWan2VlanTaggingVlanId() {
    this._interfacesWan2VlanTaggingVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesWan2VlanTaggingVlanIdInput() {
    return this._interfacesWan2VlanTaggingVlanId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      interfaces_wan1_enabled: cdktf.booleanToTerraform(this._interfacesWan1Enabled),
      interfaces_wan1_pppoe_authentication_enabled: cdktf.booleanToTerraform(this._interfacesWan1PppoeAuthenticationEnabled),
      interfaces_wan1_pppoe_authentication_password: cdktf.stringToTerraform(this._interfacesWan1PppoeAuthenticationPassword),
      interfaces_wan1_pppoe_authentication_username: cdktf.stringToTerraform(this._interfacesWan1PppoeAuthenticationUsername),
      interfaces_wan1_pppoe_enabled: cdktf.booleanToTerraform(this._interfacesWan1PppoeEnabled),
      interfaces_wan1_svis_ipv4_address: cdktf.stringToTerraform(this._interfacesWan1SvisIpv4Address),
      interfaces_wan1_svis_ipv4_assignment_mode: cdktf.stringToTerraform(this._interfacesWan1SvisIpv4AssignmentMode),
      interfaces_wan1_svis_ipv4_gateway: cdktf.stringToTerraform(this._interfacesWan1SvisIpv4Gateway),
      interfaces_wan1_svis_ipv4_nameservers_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfacesWan1SvisIpv4NameserversAddresses),
      interfaces_wan1_svis_ipv6_address: cdktf.stringToTerraform(this._interfacesWan1SvisIpv6Address),
      interfaces_wan1_svis_ipv6_assignment_mode: cdktf.stringToTerraform(this._interfacesWan1SvisIpv6AssignmentMode),
      interfaces_wan1_svis_ipv6_gateway: cdktf.stringToTerraform(this._interfacesWan1SvisIpv6Gateway),
      interfaces_wan1_svis_ipv6_nameservers_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfacesWan1SvisIpv6NameserversAddresses),
      interfaces_wan1_vlan_tagging_enabled: cdktf.booleanToTerraform(this._interfacesWan1VlanTaggingEnabled),
      interfaces_wan1_vlan_tagging_vlan_id: cdktf.numberToTerraform(this._interfacesWan1VlanTaggingVlanId),
      interfaces_wan2_enabled: cdktf.booleanToTerraform(this._interfacesWan2Enabled),
      interfaces_wan2_pppoe_authentication_enabled: cdktf.booleanToTerraform(this._interfacesWan2PppoeAuthenticationEnabled),
      interfaces_wan2_pppoe_authentication_password: cdktf.stringToTerraform(this._interfacesWan2PppoeAuthenticationPassword),
      interfaces_wan2_pppoe_authentication_username: cdktf.stringToTerraform(this._interfacesWan2PppoeAuthenticationUsername),
      interfaces_wan2_pppoe_enabled: cdktf.booleanToTerraform(this._interfacesWan2PppoeEnabled),
      interfaces_wan2_svis_ipv4_address: cdktf.stringToTerraform(this._interfacesWan2SvisIpv4Address),
      interfaces_wan2_svis_ipv4_assignment_mode: cdktf.stringToTerraform(this._interfacesWan2SvisIpv4AssignmentMode),
      interfaces_wan2_svis_ipv4_gateway: cdktf.stringToTerraform(this._interfacesWan2SvisIpv4Gateway),
      interfaces_wan2_svis_ipv4_nameservers_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfacesWan2SvisIpv4NameserversAddresses),
      interfaces_wan2_svis_ipv6_address: cdktf.stringToTerraform(this._interfacesWan2SvisIpv6Address),
      interfaces_wan2_svis_ipv6_assignment_mode: cdktf.stringToTerraform(this._interfacesWan2SvisIpv6AssignmentMode),
      interfaces_wan2_svis_ipv6_gateway: cdktf.stringToTerraform(this._interfacesWan2SvisIpv6Gateway),
      interfaces_wan2_svis_ipv6_nameservers_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfacesWan2SvisIpv6NameserversAddresses),
      interfaces_wan2_vlan_tagging_enabled: cdktf.booleanToTerraform(this._interfacesWan2VlanTaggingEnabled),
      interfaces_wan2_vlan_tagging_vlan_id: cdktf.numberToTerraform(this._interfacesWan2VlanTaggingVlanId),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      interfaces_wan1_enabled: {
        value: cdktf.booleanToHclTerraform(this._interfacesWan1Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces_wan1_pppoe_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._interfacesWan1PppoeAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces_wan1_pppoe_authentication_password: {
        value: cdktf.stringToHclTerraform(this._interfacesWan1PppoeAuthenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan1_pppoe_authentication_username: {
        value: cdktf.stringToHclTerraform(this._interfacesWan1PppoeAuthenticationUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan1_pppoe_enabled: {
        value: cdktf.booleanToHclTerraform(this._interfacesWan1PppoeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces_wan1_svis_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._interfacesWan1SvisIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan1_svis_ipv4_assignment_mode: {
        value: cdktf.stringToHclTerraform(this._interfacesWan1SvisIpv4AssignmentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan1_svis_ipv4_gateway: {
        value: cdktf.stringToHclTerraform(this._interfacesWan1SvisIpv4Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan1_svis_ipv4_nameservers_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfacesWan1SvisIpv4NameserversAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      interfaces_wan1_svis_ipv6_address: {
        value: cdktf.stringToHclTerraform(this._interfacesWan1SvisIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan1_svis_ipv6_assignment_mode: {
        value: cdktf.stringToHclTerraform(this._interfacesWan1SvisIpv6AssignmentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan1_svis_ipv6_gateway: {
        value: cdktf.stringToHclTerraform(this._interfacesWan1SvisIpv6Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan1_svis_ipv6_nameservers_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfacesWan1SvisIpv6NameserversAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      interfaces_wan1_vlan_tagging_enabled: {
        value: cdktf.booleanToHclTerraform(this._interfacesWan1VlanTaggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces_wan1_vlan_tagging_vlan_id: {
        value: cdktf.numberToHclTerraform(this._interfacesWan1VlanTaggingVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interfaces_wan2_enabled: {
        value: cdktf.booleanToHclTerraform(this._interfacesWan2Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces_wan2_pppoe_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._interfacesWan2PppoeAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces_wan2_pppoe_authentication_password: {
        value: cdktf.stringToHclTerraform(this._interfacesWan2PppoeAuthenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan2_pppoe_authentication_username: {
        value: cdktf.stringToHclTerraform(this._interfacesWan2PppoeAuthenticationUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan2_pppoe_enabled: {
        value: cdktf.booleanToHclTerraform(this._interfacesWan2PppoeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces_wan2_svis_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._interfacesWan2SvisIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan2_svis_ipv4_assignment_mode: {
        value: cdktf.stringToHclTerraform(this._interfacesWan2SvisIpv4AssignmentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan2_svis_ipv4_gateway: {
        value: cdktf.stringToHclTerraform(this._interfacesWan2SvisIpv4Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan2_svis_ipv4_nameservers_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfacesWan2SvisIpv4NameserversAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      interfaces_wan2_svis_ipv6_address: {
        value: cdktf.stringToHclTerraform(this._interfacesWan2SvisIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan2_svis_ipv6_assignment_mode: {
        value: cdktf.stringToHclTerraform(this._interfacesWan2SvisIpv6AssignmentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan2_svis_ipv6_gateway: {
        value: cdktf.stringToHclTerraform(this._interfacesWan2SvisIpv6Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces_wan2_svis_ipv6_nameservers_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfacesWan2SvisIpv6NameserversAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      interfaces_wan2_vlan_tagging_enabled: {
        value: cdktf.booleanToHclTerraform(this._interfacesWan2VlanTaggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces_wan2_vlan_tagging_vlan_id: {
        value: cdktf.numberToHclTerraform(this._interfacesWan2VlanTaggingVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
