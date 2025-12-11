// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlans_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceVlansSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlans_settings#network_id ApplianceVlansSettings#network_id}
  */
  readonly networkId: string;
  /**
  * Boolean indicating whether to enable (true) or disable (false) VLANs for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlans_settings#vlans_enabled ApplianceVlansSettings#vlans_enabled}
  */
  readonly vlansEnabled: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlans_settings meraki_appliance_vlans_settings}
*/
export class ApplianceVlansSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_vlans_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceVlansSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceVlansSettings to import
  * @param importFromId The id of the existing ApplianceVlansSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlans_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceVlansSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_vlans_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlans_settings meraki_appliance_vlans_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceVlansSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceVlansSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_vlans_settings',
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
    this._vlansEnabled = config.vlansEnabled;
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

  // vlans_enabled - computed: false, optional: false, required: true
  private _vlansEnabled?: boolean | cdktf.IResolvable; 
  public get vlansEnabled() {
    return this.getBooleanAttribute('vlans_enabled');
  }
  public set vlansEnabled(value: boolean | cdktf.IResolvable) {
    this._vlansEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansEnabledInput() {
    return this._vlansEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      vlans_enabled: cdktf.booleanToTerraform(this._vlansEnabled),
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
      vlans_enabled: {
        value: cdktf.booleanToHclTerraform(this._vlansEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
