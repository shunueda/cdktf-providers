// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosEventsMessageSelectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#id AcosEventsMessageSelector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify message selector name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#name AcosEventsMessageSelector#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#user_tag AcosEventsMessageSelector#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#uuid AcosEventsMessageSelector#uuid}
  */
  readonly uuid?: string;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#rule_list AcosEventsMessageSelector#rule_list}
  */
  readonly ruleList?: AcosEventsMessageSelectorRuleListStruct[] | cdktf.IResolvable;
}
export interface AcosEventsMessageSelectorRuleListStruct {
  /**
  * 'send': log messages selected by this rule will be sent; 'drop': log messages selected by this rule will be dropped;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#action AcosEventsMessageSelector#action}
  */
  readonly action?: string;
  /**
  * Specify rule index - rules are applied in numeric order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#index AcosEventsMessageSelector#index}
  */
  readonly index: number;
  /**
  * Select a specific message by message-id and optionally severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#message_id AcosEventsMessageSelector#message_id}
  */
  readonly messageId?: string;
  /**
  * 'all': Log messages at this level and all sub-trees; 'node-only': Log messages at this node only; 'children-only': Log messages at all sub-trees only; 'log-field-only': Log message for this Log Field only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#message_id_scope AcosEventsMessageSelector#message_id_scope}
  */
  readonly messageIdScope?: string;
  /**
  * 'equal-and-higher': emergency is highest, debugging lowest; 'equal': single severity;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#severity_oper AcosEventsMessageSelector#severity_oper}
  */
  readonly severityOper?: string;
  /**
  * 'emergency': System unusable log messages (Most Important); 'alert': Action must be taken immediately; 'critical': Critical conditions; 'error': Error conditions; 'warning': Warning conditions; 'notification': Normal but significant conditions; 'information': Informational messages; 'debugging': Debug level messages (Least Important);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#severity_val AcosEventsMessageSelector#severity_val}
  */
  readonly severityVal?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#user_tag AcosEventsMessageSelector#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#uuid AcosEventsMessageSelector#uuid}
  */
  readonly uuid?: string;
}

export function acosEventsMessageSelectorRuleListStructToTerraform(struct?: AcosEventsMessageSelectorRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    index: cdktf.numberToTerraform(struct!.index),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    message_id_scope: cdktf.stringToTerraform(struct!.messageIdScope),
    severity_oper: cdktf.stringToTerraform(struct!.severityOper),
    severity_val: cdktf.stringToTerraform(struct!.severityVal),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function acosEventsMessageSelectorRuleListStructToHclTerraform(struct?: AcosEventsMessageSelectorRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_id: {
      value: cdktf.stringToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id_scope: {
      value: cdktf.stringToHclTerraform(struct!.messageIdScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_oper: {
      value: cdktf.stringToHclTerraform(struct!.severityOper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_val: {
      value: cdktf.stringToHclTerraform(struct!.severityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosEventsMessageSelectorRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AcosEventsMessageSelectorRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._messageIdScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageIdScope = this._messageIdScope;
    }
    if (this._severityOper !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityOper = this._severityOper;
    }
    if (this._severityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityVal = this._severityVal;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosEventsMessageSelectorRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._index = undefined;
      this._messageId = undefined;
      this._messageIdScope = undefined;
      this._severityOper = undefined;
      this._severityVal = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._index = value.index;
      this._messageId = value.messageId;
      this._messageIdScope = value.messageIdScope;
      this._severityOper = value.severityOper;
      this._severityVal = value.severityVal;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

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
}

export class AcosEventsMessageSelectorRuleListStructList extends cdktf.ComplexList {
  public internalValue? : AcosEventsMessageSelectorRuleListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AcosEventsMessageSelectorRuleListStructOutputReference {
    return new AcosEventsMessageSelectorRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector thunder_acos_events_message_selector}
*/
export class AcosEventsMessageSelector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_message_selector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosEventsMessageSelector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosEventsMessageSelector to import
  * @param importFromId The id of the existing AcosEventsMessageSelector that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosEventsMessageSelector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_message_selector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_selector thunder_acos_events_message_selector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosEventsMessageSelectorConfig
  */
  public constructor(scope: Construct, id: string, config: AcosEventsMessageSelectorConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_message_selector',
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
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ruleList.internalValue = config.ruleList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new AcosEventsMessageSelectorRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: AcosEventsMessageSelectorRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      rule_list: cdktf.listMapper(acosEventsMessageSelectorRuleListStructToTerraform, true)(this._ruleList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      rule_list: {
        value: cdktf.listMapperHcl(acosEventsMessageSelectorRuleListStructToHclTerraform, true)(this._ruleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AcosEventsMessageSelectorRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
