// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpGeneralPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tunnel Inactivity Timeout during Handover in minutes (default: 2 mins)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy#handover_timeout TemplateGtpGeneralPolicy#handover_timeout}
  */
  readonly handoverTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy#id TemplateGtpGeneralPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'monitor': Forward failed packet; 'drop': drop packet failing check(Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy#max_mesg_length_action TemplateGtpGeneralPolicy#max_mesg_length_action}
  */
  readonly maxMesgLengthAction?: string;
  /**
  * Maximum message length for a GTP message in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy#maximum_message_length TemplateGtpGeneralPolicy#maximum_message_length}
  */
  readonly maximumMessageLength?: number;
  /**
  * Specify name of the GTP General Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy#name TemplateGtpGeneralPolicy#name}
  */
  readonly name: string;
  /**
  * Tunnel Inactivity Timeout in minutes (default: 1440 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy#tunnel_timeout TemplateGtpGeneralPolicy#tunnel_timeout}
  */
  readonly tunnelTimeout?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy#user_tag TemplateGtpGeneralPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy#uuid TemplateGtpGeneralPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * 'permit': Permit GTP-C version 0; 'drop': Drop GTP-C version 0(Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy#v0_action TemplateGtpGeneralPolicy#v0_action}
  */
  readonly v0Action?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy thunder_template_gtp_general_policy}
*/
export class TemplateGtpGeneralPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_general_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpGeneralPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpGeneralPolicy to import
  * @param importFromId The id of the existing TemplateGtpGeneralPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpGeneralPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_general_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_general_policy thunder_template_gtp_general_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpGeneralPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpGeneralPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_general_policy',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._handoverTimeout = config.handoverTimeout;
    this._id = config.id;
    this._maxMesgLengthAction = config.maxMesgLengthAction;
    this._maximumMessageLength = config.maximumMessageLength;
    this._name = config.name;
    this._tunnelTimeout = config.tunnelTimeout;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._v0Action = config.v0Action;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // handover_timeout - computed: false, optional: true, required: false
  private _handoverTimeout?: number; 
  public get handoverTimeout() {
    return this.getNumberAttribute('handover_timeout');
  }
  public set handoverTimeout(value: number) {
    this._handoverTimeout = value;
  }
  public resetHandoverTimeout() {
    this._handoverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoverTimeoutInput() {
    return this._handoverTimeout;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_mesg_length_action - computed: false, optional: true, required: false
  private _maxMesgLengthAction?: string; 
  public get maxMesgLengthAction() {
    return this.getStringAttribute('max_mesg_length_action');
  }
  public set maxMesgLengthAction(value: string) {
    this._maxMesgLengthAction = value;
  }
  public resetMaxMesgLengthAction() {
    this._maxMesgLengthAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMesgLengthActionInput() {
    return this._maxMesgLengthAction;
  }

  // maximum_message_length - computed: false, optional: true, required: false
  private _maximumMessageLength?: number; 
  public get maximumMessageLength() {
    return this.getNumberAttribute('maximum_message_length');
  }
  public set maximumMessageLength(value: number) {
    this._maximumMessageLength = value;
  }
  public resetMaximumMessageLength() {
    this._maximumMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMessageLengthInput() {
    return this._maximumMessageLength;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tunnel_timeout - computed: false, optional: true, required: false
  private _tunnelTimeout?: number; 
  public get tunnelTimeout() {
    return this.getNumberAttribute('tunnel_timeout');
  }
  public set tunnelTimeout(value: number) {
    this._tunnelTimeout = value;
  }
  public resetTunnelTimeout() {
    this._tunnelTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTimeoutInput() {
    return this._tunnelTimeout;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // v0_action - computed: false, optional: true, required: false
  private _v0Action?: string; 
  public get v0Action() {
    return this.getStringAttribute('v0_action');
  }
  public set v0Action(value: string) {
    this._v0Action = value;
  }
  public resetV0Action() {
    this._v0Action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v0ActionInput() {
    return this._v0Action;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      handover_timeout: cdktf.numberToTerraform(this._handoverTimeout),
      id: cdktf.stringToTerraform(this._id),
      max_mesg_length_action: cdktf.stringToTerraform(this._maxMesgLengthAction),
      maximum_message_length: cdktf.numberToTerraform(this._maximumMessageLength),
      name: cdktf.stringToTerraform(this._name),
      tunnel_timeout: cdktf.numberToTerraform(this._tunnelTimeout),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      v0_action: cdktf.stringToTerraform(this._v0Action),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      handover_timeout: {
        value: cdktf.numberToHclTerraform(this._handoverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_mesg_length_action: {
        value: cdktf.stringToHclTerraform(this._maxMesgLengthAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_message_length: {
        value: cdktf.numberToHclTerraform(this._maximumMessageLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_timeout: {
        value: cdktf.numberToHclTerraform(this._tunnelTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v0_action: {
        value: cdktf.stringToHclTerraform(this._v0Action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
