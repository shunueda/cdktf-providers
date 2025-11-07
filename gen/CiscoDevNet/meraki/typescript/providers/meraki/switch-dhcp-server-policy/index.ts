// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_dhcp_server_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchDhcpServerPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * When enabled, send an email if a new DHCP server is seen. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_dhcp_server_policy#alerts_email_enabled SwitchDhcpServerPolicy#alerts_email_enabled}
  */
  readonly alertsEmailEnabled?: boolean | cdktf.IResolvable;
  /**
  * List the MAC addresses of DHCP servers to permit on the network when defaultPolicy is set to block. An empty array will clear the entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_dhcp_server_policy#allowed_servers SwitchDhcpServerPolicy#allowed_servers}
  */
  readonly allowedServers?: string[];
  /**
  * Enable or disable Dynamic ARP Inspection on the network. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_dhcp_server_policy#arp_inspection_enabled SwitchDhcpServerPolicy#arp_inspection_enabled}
  */
  readonly arpInspectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * List the MAC addresses of DHCP servers to block on the network when defaultPolicy is set to allow. An empty array will clear the entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_dhcp_server_policy#blocked_servers SwitchDhcpServerPolicy#blocked_servers}
  */
  readonly blockedServers?: string[];
  /**
  * `allow` or `block` new DHCP servers. Default value is `allow`.
  *   - Choices: `allow`, `block`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_dhcp_server_policy#default_policy SwitchDhcpServerPolicy#default_policy}
  */
  readonly defaultPolicy?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_dhcp_server_policy#network_id SwitchDhcpServerPolicy#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_dhcp_server_policy meraki_switch_dhcp_server_policy}
*/
export class SwitchDhcpServerPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_dhcp_server_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchDhcpServerPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchDhcpServerPolicy to import
  * @param importFromId The id of the existing SwitchDhcpServerPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_dhcp_server_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchDhcpServerPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_dhcp_server_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_dhcp_server_policy meraki_switch_dhcp_server_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchDhcpServerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchDhcpServerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_dhcp_server_policy',
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
    this._alertsEmailEnabled = config.alertsEmailEnabled;
    this._allowedServers = config.allowedServers;
    this._arpInspectionEnabled = config.arpInspectionEnabled;
    this._blockedServers = config.blockedServers;
    this._defaultPolicy = config.defaultPolicy;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_email_enabled - computed: false, optional: true, required: false
  private _alertsEmailEnabled?: boolean | cdktf.IResolvable; 
  public get alertsEmailEnabled() {
    return this.getBooleanAttribute('alerts_email_enabled');
  }
  public set alertsEmailEnabled(value: boolean | cdktf.IResolvable) {
    this._alertsEmailEnabled = value;
  }
  public resetAlertsEmailEnabled() {
    this._alertsEmailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsEmailEnabledInput() {
    return this._alertsEmailEnabled;
  }

  // allowed_servers - computed: false, optional: true, required: false
  private _allowedServers?: string[]; 
  public get allowedServers() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_servers'));
  }
  public set allowedServers(value: string[]) {
    this._allowedServers = value;
  }
  public resetAllowedServers() {
    this._allowedServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServersInput() {
    return this._allowedServers;
  }

  // arp_inspection_enabled - computed: false, optional: true, required: false
  private _arpInspectionEnabled?: boolean | cdktf.IResolvable; 
  public get arpInspectionEnabled() {
    return this.getBooleanAttribute('arp_inspection_enabled');
  }
  public set arpInspectionEnabled(value: boolean | cdktf.IResolvable) {
    this._arpInspectionEnabled = value;
  }
  public resetArpInspectionEnabled() {
    this._arpInspectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInspectionEnabledInput() {
    return this._arpInspectionEnabled;
  }

  // blocked_servers - computed: false, optional: true, required: false
  private _blockedServers?: string[]; 
  public get blockedServers() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_servers'));
  }
  public set blockedServers(value: string[]) {
    this._blockedServers = value;
  }
  public resetBlockedServers() {
    this._blockedServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedServersInput() {
    return this._blockedServers;
  }

  // default_policy - computed: false, optional: true, required: false
  private _defaultPolicy?: string; 
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }
  public set defaultPolicy(value: string) {
    this._defaultPolicy = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy;
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
      alerts_email_enabled: cdktf.booleanToTerraform(this._alertsEmailEnabled),
      allowed_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedServers),
      arp_inspection_enabled: cdktf.booleanToTerraform(this._arpInspectionEnabled),
      blocked_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedServers),
      default_policy: cdktf.stringToTerraform(this._defaultPolicy),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts_email_enabled: {
        value: cdktf.booleanToHclTerraform(this._alertsEmailEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      arp_inspection_enabled: {
        value: cdktf.booleanToHclTerraform(this._arpInspectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocked_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_policy: {
        value: cdktf.stringToHclTerraform(this._defaultPolicy),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
