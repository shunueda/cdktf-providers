// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_dhcp_server_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchDhcpServerPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_dhcp_server_policy#network_id DataMerakiSwitchDhcpServerPolicy#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_dhcp_server_policy meraki_switch_dhcp_server_policy}
*/
export class DataMerakiSwitchDhcpServerPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_dhcp_server_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchDhcpServerPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchDhcpServerPolicy to import
  * @param importFromId The id of the existing DataMerakiSwitchDhcpServerPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_dhcp_server_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchDhcpServerPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_dhcp_server_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_dhcp_server_policy meraki_switch_dhcp_server_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchDhcpServerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchDhcpServerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_dhcp_server_policy',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_email_enabled - computed: true, optional: false, required: false
  public get alertsEmailEnabled() {
    return this.getBooleanAttribute('alerts_email_enabled');
  }

  // allowed_servers - computed: true, optional: false, required: false
  public get allowedServers() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_servers'));
  }

  // arp_inspection_enabled - computed: true, optional: false, required: false
  public get arpInspectionEnabled() {
    return this.getBooleanAttribute('arp_inspection_enabled');
  }

  // blocked_servers - computed: true, optional: false, required: false
  public get blockedServers() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_servers'));
  }

  // default_policy - computed: true, optional: false, required: false
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
