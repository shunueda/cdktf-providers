// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_acl_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnAclProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the ACL Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_acl_profile#acl_profile_name DataSolacebrokerMsgVpnAclProfile#acl_profile_name}
  */
  readonly aclProfileName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_acl_profile#msg_vpn_name DataSolacebrokerMsgVpnAclProfile#msg_vpn_name}
  */
  readonly msgVpnName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_acl_profile solacebroker_msg_vpn_acl_profile}
*/
export class DataSolacebrokerMsgVpnAclProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_acl_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnAclProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnAclProfile to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnAclProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_acl_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnAclProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_acl_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_acl_profile solacebroker_msg_vpn_acl_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnAclProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnAclProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_acl_profile',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclProfileName = config.aclProfileName;
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_profile_name - computed: false, optional: false, required: true
  private _aclProfileName?: string; 
  public get aclProfileName() {
    return this.getStringAttribute('acl_profile_name');
  }
  public set aclProfileName(value: string) {
    this._aclProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclProfileNameInput() {
    return this._aclProfileName;
  }

  // client_connect_default_action - computed: true, optional: false, required: false
  public get clientConnectDefaultAction() {
    return this.getStringAttribute('client_connect_default_action');
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

  // publish_topic_default_action - computed: true, optional: false, required: false
  public get publishTopicDefaultAction() {
    return this.getStringAttribute('publish_topic_default_action');
  }

  // subscribe_share_name_default_action - computed: true, optional: false, required: false
  public get subscribeShareNameDefaultAction() {
    return this.getStringAttribute('subscribe_share_name_default_action');
  }

  // subscribe_topic_default_action - computed: true, optional: false, required: false
  public get subscribeTopicDefaultAction() {
    return this.getStringAttribute('subscribe_topic_default_action');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_profile_name: cdktf.stringToTerraform(this._aclProfileName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_profile_name: {
        value: cdktf.stringToHclTerraform(this._aclProfileName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
