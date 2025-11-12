// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_uplinks_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiApplianceUplinksSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_uplinks_settings#serial DataMerakiApplianceUplinksSettings#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_uplinks_settings meraki_appliance_uplinks_settings}
*/
export class DataMerakiApplianceUplinksSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_uplinks_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiApplianceUplinksSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiApplianceUplinksSettings to import
  * @param importFromId The id of the existing DataMerakiApplianceUplinksSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_uplinks_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiApplianceUplinksSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_uplinks_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_uplinks_settings meraki_appliance_uplinks_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiApplianceUplinksSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiApplianceUplinksSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_uplinks_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces_wan1_enabled - computed: true, optional: false, required: false
  public get interfacesWan1Enabled() {
    return this.getBooleanAttribute('interfaces_wan1_enabled');
  }

  // interfaces_wan1_pppoe_authentication_enabled - computed: true, optional: false, required: false
  public get interfacesWan1PppoeAuthenticationEnabled() {
    return this.getBooleanAttribute('interfaces_wan1_pppoe_authentication_enabled');
  }

  // interfaces_wan1_pppoe_authentication_password - computed: true, optional: false, required: false
  public get interfacesWan1PppoeAuthenticationPassword() {
    return this.getStringAttribute('interfaces_wan1_pppoe_authentication_password');
  }

  // interfaces_wan1_pppoe_authentication_username - computed: true, optional: false, required: false
  public get interfacesWan1PppoeAuthenticationUsername() {
    return this.getStringAttribute('interfaces_wan1_pppoe_authentication_username');
  }

  // interfaces_wan1_pppoe_enabled - computed: true, optional: false, required: false
  public get interfacesWan1PppoeEnabled() {
    return this.getBooleanAttribute('interfaces_wan1_pppoe_enabled');
  }

  // interfaces_wan1_svis_ipv4_address - computed: true, optional: false, required: false
  public get interfacesWan1SvisIpv4Address() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv4_address');
  }

  // interfaces_wan1_svis_ipv4_assignment_mode - computed: true, optional: false, required: false
  public get interfacesWan1SvisIpv4AssignmentMode() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv4_assignment_mode');
  }

  // interfaces_wan1_svis_ipv4_gateway - computed: true, optional: false, required: false
  public get interfacesWan1SvisIpv4Gateway() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv4_gateway');
  }

  // interfaces_wan1_svis_ipv4_nameservers_addresses - computed: true, optional: false, required: false
  public get interfacesWan1SvisIpv4NameserversAddresses() {
    return this.getListAttribute('interfaces_wan1_svis_ipv4_nameservers_addresses');
  }

  // interfaces_wan1_svis_ipv6_address - computed: true, optional: false, required: false
  public get interfacesWan1SvisIpv6Address() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv6_address');
  }

  // interfaces_wan1_svis_ipv6_assignment_mode - computed: true, optional: false, required: false
  public get interfacesWan1SvisIpv6AssignmentMode() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv6_assignment_mode');
  }

  // interfaces_wan1_svis_ipv6_gateway - computed: true, optional: false, required: false
  public get interfacesWan1SvisIpv6Gateway() {
    return this.getStringAttribute('interfaces_wan1_svis_ipv6_gateway');
  }

  // interfaces_wan1_svis_ipv6_nameservers_addresses - computed: true, optional: false, required: false
  public get interfacesWan1SvisIpv6NameserversAddresses() {
    return this.getListAttribute('interfaces_wan1_svis_ipv6_nameservers_addresses');
  }

  // interfaces_wan1_vlan_tagging_enabled - computed: true, optional: false, required: false
  public get interfacesWan1VlanTaggingEnabled() {
    return this.getBooleanAttribute('interfaces_wan1_vlan_tagging_enabled');
  }

  // interfaces_wan1_vlan_tagging_vlan_id - computed: true, optional: false, required: false
  public get interfacesWan1VlanTaggingVlanId() {
    return this.getNumberAttribute('interfaces_wan1_vlan_tagging_vlan_id');
  }

  // interfaces_wan2_enabled - computed: true, optional: false, required: false
  public get interfacesWan2Enabled() {
    return this.getBooleanAttribute('interfaces_wan2_enabled');
  }

  // interfaces_wan2_pppoe_authentication_enabled - computed: true, optional: false, required: false
  public get interfacesWan2PppoeAuthenticationEnabled() {
    return this.getBooleanAttribute('interfaces_wan2_pppoe_authentication_enabled');
  }

  // interfaces_wan2_pppoe_authentication_password - computed: true, optional: false, required: false
  public get interfacesWan2PppoeAuthenticationPassword() {
    return this.getStringAttribute('interfaces_wan2_pppoe_authentication_password');
  }

  // interfaces_wan2_pppoe_authentication_username - computed: true, optional: false, required: false
  public get interfacesWan2PppoeAuthenticationUsername() {
    return this.getStringAttribute('interfaces_wan2_pppoe_authentication_username');
  }

  // interfaces_wan2_pppoe_enabled - computed: true, optional: false, required: false
  public get interfacesWan2PppoeEnabled() {
    return this.getBooleanAttribute('interfaces_wan2_pppoe_enabled');
  }

  // interfaces_wan2_svis_ipv4_address - computed: true, optional: false, required: false
  public get interfacesWan2SvisIpv4Address() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv4_address');
  }

  // interfaces_wan2_svis_ipv4_assignment_mode - computed: true, optional: false, required: false
  public get interfacesWan2SvisIpv4AssignmentMode() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv4_assignment_mode');
  }

  // interfaces_wan2_svis_ipv4_gateway - computed: true, optional: false, required: false
  public get interfacesWan2SvisIpv4Gateway() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv4_gateway');
  }

  // interfaces_wan2_svis_ipv4_nameservers_addresses - computed: true, optional: false, required: false
  public get interfacesWan2SvisIpv4NameserversAddresses() {
    return this.getListAttribute('interfaces_wan2_svis_ipv4_nameservers_addresses');
  }

  // interfaces_wan2_svis_ipv6_address - computed: true, optional: false, required: false
  public get interfacesWan2SvisIpv6Address() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv6_address');
  }

  // interfaces_wan2_svis_ipv6_assignment_mode - computed: true, optional: false, required: false
  public get interfacesWan2SvisIpv6AssignmentMode() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv6_assignment_mode');
  }

  // interfaces_wan2_svis_ipv6_gateway - computed: true, optional: false, required: false
  public get interfacesWan2SvisIpv6Gateway() {
    return this.getStringAttribute('interfaces_wan2_svis_ipv6_gateway');
  }

  // interfaces_wan2_svis_ipv6_nameservers_addresses - computed: true, optional: false, required: false
  public get interfacesWan2SvisIpv6NameserversAddresses() {
    return this.getListAttribute('interfaces_wan2_svis_ipv6_nameservers_addresses');
  }

  // interfaces_wan2_vlan_tagging_enabled - computed: true, optional: false, required: false
  public get interfacesWan2VlanTaggingEnabled() {
    return this.getBooleanAttribute('interfaces_wan2_vlan_tagging_enabled');
  }

  // interfaces_wan2_vlan_tagging_vlan_id - computed: true, optional: false, required: false
  public get interfacesWan2VlanTaggingVlanId() {
    return this.getNumberAttribute('interfaces_wan2_vlan_tagging_vlan_id');
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
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
