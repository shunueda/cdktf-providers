// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/virtual_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable Virtual Hostname to Message VPN mapping.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/virtual_hostname#enabled VirtualHostname#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The message VPN to which this virtual hostname is mapped.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/virtual_hostname#msg_vpn_name VirtualHostname#msg_vpn_name}
  */
  readonly msgVpnName?: string;
  /**
  * The virtual hostname.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/virtual_hostname#virtual_hostname VirtualHostname#virtual_hostname}
  */
  readonly virtualHostname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/virtual_hostname solacebroker_virtual_hostname}
*/
export class VirtualHostname extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_virtual_hostname";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualHostname resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualHostname to import
  * @param importFromId The id of the existing VirtualHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/virtual_hostname#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualHostname to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_virtual_hostname", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/virtual_hostname solacebroker_virtual_hostname} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHostnameConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualHostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_virtual_hostname',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._msgVpnName = config.msgVpnName;
    this._virtualHostname = config.virtualHostname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // msg_vpn_name - computed: false, optional: true, required: false
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  public resetMsgVpnName() {
    this._msgVpnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // virtual_hostname - computed: false, optional: false, required: true
  private _virtualHostname?: string; 
  public get virtualHostname() {
    return this.getStringAttribute('virtual_hostname');
  }
  public set virtualHostname(value: string) {
    this._virtualHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostnameInput() {
    return this._virtualHostname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      virtual_hostname: cdktf.stringToTerraform(this._virtualHostname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_hostname: {
        value: cdktf.stringToHclTerraform(this._virtualHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
