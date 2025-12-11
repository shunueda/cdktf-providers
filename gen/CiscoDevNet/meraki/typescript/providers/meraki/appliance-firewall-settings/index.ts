// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceFirewallSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_settings#network_id ApplianceFirewallSettings#network_id}
  */
  readonly networkId: string;
  /**
  * Mode of protection
  *   - Choices: `block`, `log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_settings#spoofing_protection_ip_source_guard_mode ApplianceFirewallSettings#spoofing_protection_ip_source_guard_mode}
  */
  readonly spoofingProtectionIpSourceGuardMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_settings meraki_appliance_firewall_settings}
*/
export class ApplianceFirewallSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_firewall_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceFirewallSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceFirewallSettings to import
  * @param importFromId The id of the existing ApplianceFirewallSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceFirewallSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_firewall_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_settings meraki_appliance_firewall_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceFirewallSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceFirewallSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_firewall_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
    this._spoofingProtectionIpSourceGuardMode = config.spoofingProtectionIpSourceGuardMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // spoofing_protection_ip_source_guard_mode - computed: false, optional: true, required: false
  private _spoofingProtectionIpSourceGuardMode?: string; 
  public get spoofingProtectionIpSourceGuardMode() {
    return this.getStringAttribute('spoofing_protection_ip_source_guard_mode');
  }
  public set spoofingProtectionIpSourceGuardMode(value: string) {
    this._spoofingProtectionIpSourceGuardMode = value;
  }
  public resetSpoofingProtectionIpSourceGuardMode() {
    this._spoofingProtectionIpSourceGuardMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofingProtectionIpSourceGuardModeInput() {
    return this._spoofingProtectionIpSourceGuardMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      spoofing_protection_ip_source_guard_mode: cdktf.stringToTerraform(this._spoofingProtectionIpSourceGuardMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoofing_protection_ip_source_guard_mode: {
        value: cdktf.stringToHclTerraform(this._spoofingProtectionIpSourceGuardMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
