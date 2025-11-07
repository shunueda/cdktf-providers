// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_default_msg_vpn_access_level_exception
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerOauthProfileDefaultMsgVpnAccessLevelExceptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The message VPN access level.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"none"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "none" - User has no access to a Message VPN.
  * "read-only" - User has read-only access to a Message VPN.
  * "read-write" - User has read-write access to most Message VPN settings.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_default_msg_vpn_access_level_exception#access_level SolacebrokerOauthProfileDefaultMsgVpnAccessLevelException#access_level}
  */
  readonly accessLevel?: string;
  /**
  * The name of the message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_default_msg_vpn_access_level_exception#msg_vpn_name SolacebrokerOauthProfileDefaultMsgVpnAccessLevelException#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_default_msg_vpn_access_level_exception#oauth_profile_name SolacebrokerOauthProfileDefaultMsgVpnAccessLevelException#oauth_profile_name}
  */
  readonly oauthProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_default_msg_vpn_access_level_exception solacebroker_oauth_profile_default_msg_vpn_access_level_exception}
*/
export class SolacebrokerOauthProfileDefaultMsgVpnAccessLevelException extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_oauth_profile_default_msg_vpn_access_level_exception";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerOauthProfileDefaultMsgVpnAccessLevelException resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerOauthProfileDefaultMsgVpnAccessLevelException to import
  * @param importFromId The id of the existing SolacebrokerOauthProfileDefaultMsgVpnAccessLevelException that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_default_msg_vpn_access_level_exception#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerOauthProfileDefaultMsgVpnAccessLevelException to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_oauth_profile_default_msg_vpn_access_level_exception", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_default_msg_vpn_access_level_exception solacebroker_oauth_profile_default_msg_vpn_access_level_exception} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerOauthProfileDefaultMsgVpnAccessLevelExceptionConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerOauthProfileDefaultMsgVpnAccessLevelExceptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_oauth_profile_default_msg_vpn_access_level_exception',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
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
    this._accessLevel = config.accessLevel;
    this._msgVpnName = config.msgVpnName;
    this._oauthProfileName = config.oauthProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // oauth_profile_name - computed: false, optional: false, required: true
  private _oauthProfileName?: string; 
  public get oauthProfileName() {
    return this.getStringAttribute('oauth_profile_name');
  }
  public set oauthProfileName(value: string) {
    this._oauthProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProfileNameInput() {
    return this._oauthProfileName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      oauth_profile_name: cdktf.stringToTerraform(this._oauthProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_profile_name: {
        value: cdktf.stringToHclTerraform(this._oauthProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
