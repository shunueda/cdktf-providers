// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the group.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception#group_name DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelException#group_name}
  */
  readonly groupName: string;
  /**
  * The name of the message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception#msg_vpn_name DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelException#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception#oauth_profile_name DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelException#oauth_profile_name}
  */
  readonly oauthProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception}
*/
export class DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelException extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelException resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelException to import
  * @param importFromId The id of the existing DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelException that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelException to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_oauth_profile_access_level_group_msg_vpn_access_level_exception',
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
    this._groupName = config.groupName;
    this._msgVpnName = config.msgVpnName;
    this._oauthProfileName = config.oauthProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: true, optional: false, required: false
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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
      group_name: cdktf.stringToTerraform(this._groupName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      oauth_profile_name: cdktf.stringToTerraform(this._oauthProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
