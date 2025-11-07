// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_usg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingUsgConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DHCP relay servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_usg#dhcp_relay_servers SettingUsg#dhcp_relay_servers}
  */
  readonly dhcpRelayServers?: string[];
  /**
  * Whether the guest firewall log is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_usg#firewall_guest_default_log SettingUsg#firewall_guest_default_log}
  */
  readonly firewallGuestDefaultLog?: boolean | cdktf.IResolvable;
  /**
  * Whether the LAN firewall log is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_usg#firewall_lan_default_log SettingUsg#firewall_lan_default_log}
  */
  readonly firewallLanDefaultLog?: boolean | cdktf.IResolvable;
  /**
  * Whether the WAN firewall log is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_usg#firewall_wan_default_log SettingUsg#firewall_wan_default_log}
  */
  readonly firewallWanDefaultLog?: boolean | cdktf.IResolvable;
  /**
  * Whether multicast DNS is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_usg#multicast_dns_enabled SettingUsg#multicast_dns_enabled}
  */
  readonly multicastDnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the site to associate the settings with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_usg#site SettingUsg#site}
  */
  readonly site?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_usg unifi_setting_usg}
*/
export class SettingUsg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_setting_usg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SettingUsg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SettingUsg to import
  * @param importFromId The id of the existing SettingUsg that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_usg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SettingUsg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_setting_usg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/setting_usg unifi_setting_usg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingUsgConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SettingUsgConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'unifi_setting_usg',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dhcpRelayServers = config.dhcpRelayServers;
    this._firewallGuestDefaultLog = config.firewallGuestDefaultLog;
    this._firewallLanDefaultLog = config.firewallLanDefaultLog;
    this._firewallWanDefaultLog = config.firewallWanDefaultLog;
    this._multicastDnsEnabled = config.multicastDnsEnabled;
    this._site = config.site;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_relay_servers - computed: true, optional: true, required: false
  private _dhcpRelayServers?: string[]; 
  public get dhcpRelayServers() {
    return this.getListAttribute('dhcp_relay_servers');
  }
  public set dhcpRelayServers(value: string[]) {
    this._dhcpRelayServers = value;
  }
  public resetDhcpRelayServers() {
    this._dhcpRelayServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayServersInput() {
    return this._dhcpRelayServers;
  }

  // firewall_guest_default_log - computed: true, optional: true, required: false
  private _firewallGuestDefaultLog?: boolean | cdktf.IResolvable; 
  public get firewallGuestDefaultLog() {
    return this.getBooleanAttribute('firewall_guest_default_log');
  }
  public set firewallGuestDefaultLog(value: boolean | cdktf.IResolvable) {
    this._firewallGuestDefaultLog = value;
  }
  public resetFirewallGuestDefaultLog() {
    this._firewallGuestDefaultLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallGuestDefaultLogInput() {
    return this._firewallGuestDefaultLog;
  }

  // firewall_lan_default_log - computed: true, optional: true, required: false
  private _firewallLanDefaultLog?: boolean | cdktf.IResolvable; 
  public get firewallLanDefaultLog() {
    return this.getBooleanAttribute('firewall_lan_default_log');
  }
  public set firewallLanDefaultLog(value: boolean | cdktf.IResolvable) {
    this._firewallLanDefaultLog = value;
  }
  public resetFirewallLanDefaultLog() {
    this._firewallLanDefaultLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallLanDefaultLogInput() {
    return this._firewallLanDefaultLog;
  }

  // firewall_wan_default_log - computed: true, optional: true, required: false
  private _firewallWanDefaultLog?: boolean | cdktf.IResolvable; 
  public get firewallWanDefaultLog() {
    return this.getBooleanAttribute('firewall_wan_default_log');
  }
  public set firewallWanDefaultLog(value: boolean | cdktf.IResolvable) {
    this._firewallWanDefaultLog = value;
  }
  public resetFirewallWanDefaultLog() {
    this._firewallWanDefaultLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallWanDefaultLogInput() {
    return this._firewallWanDefaultLog;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multicast_dns_enabled - computed: true, optional: true, required: false
  private _multicastDnsEnabled?: boolean | cdktf.IResolvable; 
  public get multicastDnsEnabled() {
    return this.getBooleanAttribute('multicast_dns_enabled');
  }
  public set multicastDnsEnabled(value: boolean | cdktf.IResolvable) {
    this._multicastDnsEnabled = value;
  }
  public resetMulticastDnsEnabled() {
    this._multicastDnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastDnsEnabledInput() {
    return this._multicastDnsEnabled;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp_relay_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpRelayServers),
      firewall_guest_default_log: cdktf.booleanToTerraform(this._firewallGuestDefaultLog),
      firewall_lan_default_log: cdktf.booleanToTerraform(this._firewallLanDefaultLog),
      firewall_wan_default_log: cdktf.booleanToTerraform(this._firewallWanDefaultLog),
      multicast_dns_enabled: cdktf.booleanToTerraform(this._multicastDnsEnabled),
      site: cdktf.stringToTerraform(this._site),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcp_relay_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpRelayServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      firewall_guest_default_log: {
        value: cdktf.booleanToHclTerraform(this._firewallGuestDefaultLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_lan_default_log: {
        value: cdktf.booleanToHclTerraform(this._firewallLanDefaultLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_wan_default_log: {
        value: cdktf.booleanToHclTerraform(this._firewallWanDefaultLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multicast_dns_enabled: {
        value: cdktf.booleanToHclTerraform(this._multicastDnsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
