// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_access_level_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthProfileAccessLevelGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for the group.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/read-write". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_access_level_group#description OauthProfileAccessLevelGroup#description}
  */
  readonly description?: string;
  /**
  * The global access level for this group.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"none"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "none" - User has no access to global data.
  * "read-only" - User has read-only access to global data.
  * "mesh-manager" - User has read-write access to global data required to administer this broker as a member of a mesh of brokers.
  * "read-write" - User has read-write access to most global data.
  * "admin" - User has read-write access to all global data.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_access_level_group#global_access_level OauthProfileAccessLevelGroup#global_access_level}
  */
  readonly globalAccessLevel?: string;
  /**
  * The name of the group.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_access_level_group#group_name OauthProfileAccessLevelGroup#group_name}
  */
  readonly groupName: string;
  /**
  * The default message VPN access level for this group.
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_access_level_group#msg_vpn_access_level OauthProfileAccessLevelGroup#msg_vpn_access_level}
  */
  readonly msgVpnAccessLevel?: string;
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_access_level_group#oauth_profile_name OauthProfileAccessLevelGroup#oauth_profile_name}
  */
  readonly oauthProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_access_level_group solacebroker_oauth_profile_access_level_group}
*/
export class OauthProfileAccessLevelGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_oauth_profile_access_level_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthProfileAccessLevelGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthProfileAccessLevelGroup to import
  * @param importFromId The id of the existing OauthProfileAccessLevelGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_access_level_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthProfileAccessLevelGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_oauth_profile_access_level_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/oauth_profile_access_level_group solacebroker_oauth_profile_access_level_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthProfileAccessLevelGroupConfig
  */
  public constructor(scope: Construct, id: string, config: OauthProfileAccessLevelGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_oauth_profile_access_level_group',
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
    this._description = config.description;
    this._globalAccessLevel = config.globalAccessLevel;
    this._groupName = config.groupName;
    this._msgVpnAccessLevel = config.msgVpnAccessLevel;
    this._oauthProfileName = config.oauthProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // global_access_level - computed: false, optional: true, required: false
  private _globalAccessLevel?: string; 
  public get globalAccessLevel() {
    return this.getStringAttribute('global_access_level');
  }
  public set globalAccessLevel(value: string) {
    this._globalAccessLevel = value;
  }
  public resetGlobalAccessLevel() {
    this._globalAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAccessLevelInput() {
    return this._globalAccessLevel;
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

  // msg_vpn_access_level - computed: false, optional: true, required: false
  private _msgVpnAccessLevel?: string; 
  public get msgVpnAccessLevel() {
    return this.getStringAttribute('msg_vpn_access_level');
  }
  public set msgVpnAccessLevel(value: string) {
    this._msgVpnAccessLevel = value;
  }
  public resetMsgVpnAccessLevel() {
    this._msgVpnAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnAccessLevelInput() {
    return this._msgVpnAccessLevel;
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
      description: cdktf.stringToTerraform(this._description),
      global_access_level: cdktf.stringToTerraform(this._globalAccessLevel),
      group_name: cdktf.stringToTerraform(this._groupName),
      msg_vpn_access_level: cdktf.stringToTerraform(this._msgVpnAccessLevel),
      oauth_profile_name: cdktf.stringToTerraform(this._oauthProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_access_level: {
        value: cdktf.stringToHclTerraform(this._globalAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_access_level: {
        value: cdktf.stringToHclTerraform(this._msgVpnAccessLevel),
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
