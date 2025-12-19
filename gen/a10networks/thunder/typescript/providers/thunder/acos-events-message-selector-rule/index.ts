// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosEventsMessageSelectorRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'send': log messages selected by this rule will be sent; 'drop': log messages selected by this rule will be dropped;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#action AcosEventsMessageSelectorRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#id AcosEventsMessageSelectorRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify rule index - rules are applied in numeric order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#index AcosEventsMessageSelectorRule#index}
  */
  readonly index: number;
  /**
  * Select a specific message by message-id and optionally severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#message_id AcosEventsMessageSelectorRule#message_id}
  */
  readonly messageId?: string;
  /**
  * 'all': Log messages at this level and all sub-trees; 'node-only': Log messages at this node only; 'children-only': Log messages at all sub-trees only; 'log-field-only': Log message for this Log Field only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#message_id_scope AcosEventsMessageSelectorRule#message_id_scope}
  */
  readonly messageIdScope?: string;
  /**
  * Message_selector_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#message_selector_name AcosEventsMessageSelectorRule#message_selector_name}
  */
  readonly messageSelectorName: string;
  /**
  * 'equal-and-higher': emergency is highest, debugging lowest; 'equal': single severity;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#severity_oper AcosEventsMessageSelectorRule#severity_oper}
  */
  readonly severityOper?: string;
  /**
  * 'emergency': System unusable log messages (Most Important); 'alert': Action must be taken immediately; 'critical': Critical conditions; 'error': Error conditions; 'warning': Warning conditions; 'notification': Normal but significant conditions; 'information': Informational messages; 'debugging': Debug level messages (Least Important);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#severity_val AcosEventsMessageSelectorRule#severity_val}
  */
  readonly severityVal?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#user_tag AcosEventsMessageSelectorRule#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#uuid AcosEventsMessageSelectorRule#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule thunder_acos_events_message_selector_rule}
*/
export class AcosEventsMessageSelectorRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_message_selector_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosEventsMessageSelectorRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosEventsMessageSelectorRule to import
  * @param importFromId The id of the existing AcosEventsMessageSelectorRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosEventsMessageSelectorRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_message_selector_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector_rule thunder_acos_events_message_selector_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosEventsMessageSelectorRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AcosEventsMessageSelectorRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_message_selector_rule',
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
    this._action = config.action;
    this._id = config.id;
    this._index = config.index;
    this._messageId = config.messageId;
    this._messageIdScope = config.messageIdScope;
    this._messageSelectorName = config.messageSelectorName;
    this._severityOper = config.severityOper;
    this._severityVal = config.severityVal;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: string; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // message_id_scope - computed: false, optional: true, required: false
  private _messageIdScope?: string; 
  public get messageIdScope() {
    return this.getStringAttribute('message_id_scope');
  }
  public set messageIdScope(value: string) {
    this._messageIdScope = value;
  }
  public resetMessageIdScope() {
    this._messageIdScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdScopeInput() {
    return this._messageIdScope;
  }

  // message_selector_name - computed: false, optional: false, required: true
  private _messageSelectorName?: string; 
  public get messageSelectorName() {
    return this.getStringAttribute('message_selector_name');
  }
  public set messageSelectorName(value: string) {
    this._messageSelectorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSelectorNameInput() {
    return this._messageSelectorName;
  }

  // severity_oper - computed: false, optional: true, required: false
  private _severityOper?: string; 
  public get severityOper() {
    return this.getStringAttribute('severity_oper');
  }
  public set severityOper(value: string) {
    this._severityOper = value;
  }
  public resetSeverityOper() {
    this._severityOper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityOperInput() {
    return this._severityOper;
  }

  // severity_val - computed: false, optional: true, required: false
  private _severityVal?: string; 
  public get severityVal() {
    return this.getStringAttribute('severity_val');
  }
  public set severityVal(value: string) {
    this._severityVal = value;
  }
  public resetSeverityVal() {
    this._severityVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityValInput() {
    return this._severityVal;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.numberToTerraform(this._index),
      message_id: cdktf.stringToTerraform(this._messageId),
      message_id_scope: cdktf.stringToTerraform(this._messageIdScope),
      message_selector_name: cdktf.stringToTerraform(this._messageSelectorName),
      severity_oper: cdktf.stringToTerraform(this._severityOper),
      severity_val: cdktf.stringToTerraform(this._severityVal),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index: {
        value: cdktf.numberToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_id: {
        value: cdktf.stringToHclTerraform(this._messageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_id_scope: {
        value: cdktf.stringToHclTerraform(this._messageIdScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_selector_name: {
        value: cdktf.stringToHclTerraform(this._messageSelectorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity_oper: {
        value: cdktf.stringToHclTerraform(this._severityOper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity_val: {
        value: cdktf.stringToHclTerraform(this._severityVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
