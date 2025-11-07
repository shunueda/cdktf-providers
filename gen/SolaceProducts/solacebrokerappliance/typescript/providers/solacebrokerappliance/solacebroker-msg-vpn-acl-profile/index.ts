// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_acl_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnAclProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the ACL Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_acl_profile#acl_profile_name SolacebrokerMsgVpnAclProfile#acl_profile_name}
  */
  readonly aclProfileName: string;
  /**
  * The default action to take when a client using the ACL Profile connects to the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"disallow"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "allow" - Allow client connection unless an exception is found for it.
  * "disallow" - Disallow client connection unless an exception is found for it.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_acl_profile#client_connect_default_action SolacebrokerMsgVpnAclProfile#client_connect_default_action}
  */
  readonly clientConnectDefaultAction?: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_acl_profile#msg_vpn_name SolacebrokerMsgVpnAclProfile#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The default action to take when a client using the ACL Profile publishes to a topic in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"disallow"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "allow" - Allow topic unless an exception is found for it.
  * "disallow" - Disallow topic unless an exception is found for it.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_acl_profile#publish_topic_default_action SolacebrokerMsgVpnAclProfile#publish_topic_default_action}
  */
  readonly publishTopicDefaultAction?: string;
  /**
  * The default action to take when a client using the ACL Profile subscribes to a share-name subscription in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"allow"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "allow" - Allow topic unless an exception is found for it.
  * "disallow" - Disallow topic unless an exception is found for it.
  * </pre>
  *  Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_acl_profile#subscribe_share_name_default_action SolacebrokerMsgVpnAclProfile#subscribe_share_name_default_action}
  */
  readonly subscribeShareNameDefaultAction?: string;
  /**
  * The default action to take when a client using the ACL Profile subscribes to a topic in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"disallow"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "allow" - Allow topic unless an exception is found for it.
  * "disallow" - Disallow topic unless an exception is found for it.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_acl_profile#subscribe_topic_default_action SolacebrokerMsgVpnAclProfile#subscribe_topic_default_action}
  */
  readonly subscribeTopicDefaultAction?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_acl_profile solacebroker_msg_vpn_acl_profile}
*/
export class SolacebrokerMsgVpnAclProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_acl_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnAclProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnAclProfile to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnAclProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_acl_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnAclProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_acl_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_acl_profile solacebroker_msg_vpn_acl_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnAclProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnAclProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_acl_profile',
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
    this._aclProfileName = config.aclProfileName;
    this._clientConnectDefaultAction = config.clientConnectDefaultAction;
    this._msgVpnName = config.msgVpnName;
    this._publishTopicDefaultAction = config.publishTopicDefaultAction;
    this._subscribeShareNameDefaultAction = config.subscribeShareNameDefaultAction;
    this._subscribeTopicDefaultAction = config.subscribeTopicDefaultAction;
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

  // client_connect_default_action - computed: false, optional: true, required: false
  private _clientConnectDefaultAction?: string; 
  public get clientConnectDefaultAction() {
    return this.getStringAttribute('client_connect_default_action');
  }
  public set clientConnectDefaultAction(value: string) {
    this._clientConnectDefaultAction = value;
  }
  public resetClientConnectDefaultAction() {
    this._clientConnectDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnectDefaultActionInput() {
    return this._clientConnectDefaultAction;
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

  // publish_topic_default_action - computed: false, optional: true, required: false
  private _publishTopicDefaultAction?: string; 
  public get publishTopicDefaultAction() {
    return this.getStringAttribute('publish_topic_default_action');
  }
  public set publishTopicDefaultAction(value: string) {
    this._publishTopicDefaultAction = value;
  }
  public resetPublishTopicDefaultAction() {
    this._publishTopicDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishTopicDefaultActionInput() {
    return this._publishTopicDefaultAction;
  }

  // subscribe_share_name_default_action - computed: false, optional: true, required: false
  private _subscribeShareNameDefaultAction?: string; 
  public get subscribeShareNameDefaultAction() {
    return this.getStringAttribute('subscribe_share_name_default_action');
  }
  public set subscribeShareNameDefaultAction(value: string) {
    this._subscribeShareNameDefaultAction = value;
  }
  public resetSubscribeShareNameDefaultAction() {
    this._subscribeShareNameDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeShareNameDefaultActionInput() {
    return this._subscribeShareNameDefaultAction;
  }

  // subscribe_topic_default_action - computed: false, optional: true, required: false
  private _subscribeTopicDefaultAction?: string; 
  public get subscribeTopicDefaultAction() {
    return this.getStringAttribute('subscribe_topic_default_action');
  }
  public set subscribeTopicDefaultAction(value: string) {
    this._subscribeTopicDefaultAction = value;
  }
  public resetSubscribeTopicDefaultAction() {
    this._subscribeTopicDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeTopicDefaultActionInput() {
    return this._subscribeTopicDefaultAction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_profile_name: cdktf.stringToTerraform(this._aclProfileName),
      client_connect_default_action: cdktf.stringToTerraform(this._clientConnectDefaultAction),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      publish_topic_default_action: cdktf.stringToTerraform(this._publishTopicDefaultAction),
      subscribe_share_name_default_action: cdktf.stringToTerraform(this._subscribeShareNameDefaultAction),
      subscribe_topic_default_action: cdktf.stringToTerraform(this._subscribeTopicDefaultAction),
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
      client_connect_default_action: {
        value: cdktf.stringToHclTerraform(this._clientConnectDefaultAction),
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
      publish_topic_default_action: {
        value: cdktf.stringToHclTerraform(this._publishTopicDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribe_share_name_default_action: {
        value: cdktf.stringToHclTerraform(this._subscribeShareNameDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribe_topic_default_action: {
        value: cdktf.stringToHclTerraform(this._subscribeTopicDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
