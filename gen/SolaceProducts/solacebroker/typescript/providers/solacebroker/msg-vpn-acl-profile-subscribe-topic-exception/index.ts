// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_acl_profile_subscribe_topic_exception
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnAclProfileSubscribeTopicExceptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the ACL Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_acl_profile_subscribe_topic_exception#acl_profile_name MsgVpnAclProfileSubscribeTopicException#acl_profile_name}
  */
  readonly aclProfileName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_acl_profile_subscribe_topic_exception#msg_vpn_name MsgVpnAclProfileSubscribeTopicException#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The topic for the exception to the default action taken. May include wildcard characters.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_acl_profile_subscribe_topic_exception#subscribe_topic_exception MsgVpnAclProfileSubscribeTopicException#subscribe_topic_exception}
  */
  readonly subscribeTopicException: string;
  /**
  * The syntax of the topic for the exception to the default action taken.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The allowed values and their meaning are:
  * 
  * <pre>
  * "smf" - Topic uses SMF syntax.
  * "mqtt" - Topic uses MQTT syntax.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_acl_profile_subscribe_topic_exception#subscribe_topic_exception_syntax MsgVpnAclProfileSubscribeTopicException#subscribe_topic_exception_syntax}
  */
  readonly subscribeTopicExceptionSyntax: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_acl_profile_subscribe_topic_exception solacebroker_msg_vpn_acl_profile_subscribe_topic_exception}
*/
export class MsgVpnAclProfileSubscribeTopicException extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_acl_profile_subscribe_topic_exception";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnAclProfileSubscribeTopicException resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnAclProfileSubscribeTopicException to import
  * @param importFromId The id of the existing MsgVpnAclProfileSubscribeTopicException that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_acl_profile_subscribe_topic_exception#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnAclProfileSubscribeTopicException to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_acl_profile_subscribe_topic_exception", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_acl_profile_subscribe_topic_exception solacebroker_msg_vpn_acl_profile_subscribe_topic_exception} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnAclProfileSubscribeTopicExceptionConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnAclProfileSubscribeTopicExceptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_acl_profile_subscribe_topic_exception',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
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
    this._subscribeTopicException = config.subscribeTopicException;
    this._subscribeTopicExceptionSyntax = config.subscribeTopicExceptionSyntax;
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

  // subscribe_topic_exception - computed: false, optional: false, required: true
  private _subscribeTopicException?: string; 
  public get subscribeTopicException() {
    return this.getStringAttribute('subscribe_topic_exception');
  }
  public set subscribeTopicException(value: string) {
    this._subscribeTopicException = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeTopicExceptionInput() {
    return this._subscribeTopicException;
  }

  // subscribe_topic_exception_syntax - computed: false, optional: false, required: true
  private _subscribeTopicExceptionSyntax?: string; 
  public get subscribeTopicExceptionSyntax() {
    return this.getStringAttribute('subscribe_topic_exception_syntax');
  }
  public set subscribeTopicExceptionSyntax(value: string) {
    this._subscribeTopicExceptionSyntax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeTopicExceptionSyntaxInput() {
    return this._subscribeTopicExceptionSyntax;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_profile_name: cdktf.stringToTerraform(this._aclProfileName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      subscribe_topic_exception: cdktf.stringToTerraform(this._subscribeTopicException),
      subscribe_topic_exception_syntax: cdktf.stringToTerraform(this._subscribeTopicExceptionSyntax),
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
      subscribe_topic_exception: {
        value: cdktf.stringToHclTerraform(this._subscribeTopicException),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribe_topic_exception_syntax: {
        value: cdktf.stringToHclTerraform(this._subscribeTopicExceptionSyntax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
