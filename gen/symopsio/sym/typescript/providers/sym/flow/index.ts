// https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Environment this Flow is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#environment_id Flow#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#id Flow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Python code defining custom logic for the Flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#implementation Flow#implementation}
  */
  readonly implementation: string;
  /**
  * An optional label for the Flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#label Flow#label}
  */
  readonly label?: string;
  /**
  * A unique identifier for the Flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#name Flow#name}
  */
  readonly name: string;
  /**
  * A map of variables and their string values to pass to `impl.py`. Useful for making IDs generated dynamically by Terraform available to your `impl.py`.
  * 
  * ~> **Note:** While you may pass in other primitives (e.g. bool, int) as a value to `sym_flow.vars`, they will be cast to strings when you apply your configuration. When accessing these values in your `impl.py`, you will need to recast them into the correct types before using them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#vars Flow#vars}
  */
  readonly vars?: { [key: string]: string };
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#params Flow#params}
  */
  readonly params?: FlowParams;
}
export interface FlowParamsPromptField {
  /**
  * Defines the full list of valid choices for this field's value. If defined, this field will be displayed as a dropdown in Slack. Not applicable for the "slack_user" and "slack_user_list" types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#allowed_values Flow#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * A fallback value for optional fields if no value is provided. Not applicable for the "slack_user", "slack_user_list", "int_list", and "str_list" types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#default Flow#default}
  */
  readonly default?: string;
  /**
  * A name for the field, to be displayed in Slack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#label Flow#label}
  */
  readonly label?: string;
  /**
  * A unique identifier for this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#name Flow#name}
  */
  readonly name: string;
  /**
  * Python code defining logic to execute when this field's value changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#on_change Flow#on_change}
  */
  readonly onChange?: string;
  /**
  * Whether a prefetch reducer will be used to populate the options for this field. Not applicable for the "slack_user" and "slack_user_list" types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#prefetch Flow#prefetch}
  */
  readonly prefetch?: boolean | cdktf.IResolvable;
  /**
  * Whether this field is a required input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#required Flow#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The type of data stored in this field. One of: "string", "str_list", "int", "int_list", "bool", "duration", "slack_user", "slack_user_list".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#type Flow#type}
  */
  readonly type: string;
  /**
  * Whether this field is rendered in the prompt modal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#visible Flow#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
}

export function flowParamsPromptFieldToTerraform(struct?: FlowParamsPromptField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedValues),
    default: cdktf.stringToTerraform(struct!.default),
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    on_change: cdktf.stringToTerraform(struct!.onChange),
    prefetch: cdktf.booleanToTerraform(struct!.prefetch),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    visible: cdktf.booleanToTerraform(struct!.visible),
  }
}


export function flowParamsPromptFieldToHclTerraform(struct?: FlowParamsPromptField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_change: {
      value: cdktf.stringToHclTerraform(struct!.onChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefetch: {
      value: cdktf.booleanToHclTerraform(struct!.prefetch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible: {
      value: cdktf.booleanToHclTerraform(struct!.visible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowParamsPromptFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowParamsPromptField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.onChange = this._onChange;
    }
    if (this._prefetch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefetch = this._prefetch;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._visible !== undefined) {
      hasAnyValues = true;
      internalValueResult.visible = this._visible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowParamsPromptField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._default = undefined;
      this._label = undefined;
      this._name = undefined;
      this._onChange = undefined;
      this._prefetch = undefined;
      this._required = undefined;
      this._type = undefined;
      this._visible = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._default = value.default;
      this._label = value.label;
      this._name = value.name;
      this._onChange = value.onChange;
      this._prefetch = value.prefetch;
      this._required = value.required;
      this._type = value.type;
      this._visible = value.visible;
    }
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // on_change - computed: false, optional: true, required: false
  private _onChange?: string; 
  public get onChange() {
    return this.getStringAttribute('on_change');
  }
  public set onChange(value: string) {
    this._onChange = value;
  }
  public resetOnChange() {
    this._onChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onChangeInput() {
    return this._onChange;
  }

  // prefetch - computed: false, optional: true, required: false
  private _prefetch?: boolean | cdktf.IResolvable; 
  public get prefetch() {
    return this.getBooleanAttribute('prefetch');
  }
  public set prefetch(value: boolean | cdktf.IResolvable) {
    this._prefetch = value;
  }
  public resetPrefetch() {
    this._prefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchInput() {
    return this._prefetch;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }
}

export class FlowParamsPromptFieldList extends cdktf.ComplexList {
  public internalValue? : FlowParamsPromptField[] | cdktf.IResolvable

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
  public get(index: number): FlowParamsPromptFieldOutputReference {
    return new FlowParamsPromptFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowParams {
  /**
  * Additional text to append to the header text displayed at the top of the Slack request modal, after the default header text. Supports Slack markdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#additional_header_text Flow#additional_header_text}
  */
  readonly additionalHeaderText?: string;
  /**
  * Whether to allow guest users to interact with this sym_flow. If true, guest users can click the "Approve", "Deny", and "Revoke" buttons in Slack. If false, guest users' interactions with this sym_flow's requests will be rejected.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#allow_guest_interaction Flow#allow_guest_interaction}
  */
  readonly allowGuestInteraction?: boolean | cdktf.IResolvable;
  /**
  * Whether access granted by a sym_strategy may be revoked before the requested duration is over. If true, shows a "Revoke" button in Slack that allows both the requester and approver to instantly revoke access. At least one of "schedule_deescalation" or "allow_revoke" must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#allow_revoke Flow#allow_revoke}
  */
  readonly allowRevoke?: boolean | cdktf.IResolvable;
  /**
  * A list of sources from which this sym_flow may be invoked. Valid sources are: "slack", "api". If unspecified, all sources will be enabled. If an empty list is specified, it will not be possible for this sym_flow to be invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#allowed_sources Flow#allowed_sources}
  */
  readonly allowedSources?: string[];
  /**
  * Whether users responding to requests may enter additional text as context for their decisions. If true, shows an input box on all open requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#include_decision_message Flow#include_decision_message}
  */
  readonly includeDecisionMessage?: boolean | cdktf.IResolvable;
  /**
  * Whether automatic access de-escalation will occur after a requested duration. If false, de-escalation will only occur when manually revoked. At least one of "schedule_deescalation" or "allow_revoke" must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#schedule_deescalation Flow#schedule_deescalation}
  */
  readonly scheduleDeescalation?: boolean | cdktf.IResolvable;
  /**
  * The ID of a sym_strategy with sym_targets that this sym_flow will be managing access to. If not defined, this sym_flow will be approval-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#strategy_id Flow#strategy_id}
  */
  readonly strategyId?: string;
  /**
  * prompt_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#prompt_field Flow#prompt_field}
  */
  readonly promptField?: FlowParamsPromptField[] | cdktf.IResolvable;
}

export function flowParamsToTerraform(struct?: FlowParamsOutputReference | FlowParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_header_text: cdktf.stringToTerraform(struct!.additionalHeaderText),
    allow_guest_interaction: cdktf.booleanToTerraform(struct!.allowGuestInteraction),
    allow_revoke: cdktf.booleanToTerraform(struct!.allowRevoke),
    allowed_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedSources),
    include_decision_message: cdktf.booleanToTerraform(struct!.includeDecisionMessage),
    schedule_deescalation: cdktf.booleanToTerraform(struct!.scheduleDeescalation),
    strategy_id: cdktf.stringToTerraform(struct!.strategyId),
    prompt_field: cdktf.listMapper(flowParamsPromptFieldToTerraform, true)(struct!.promptField),
  }
}


export function flowParamsToHclTerraform(struct?: FlowParamsOutputReference | FlowParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_header_text: {
      value: cdktf.stringToHclTerraform(struct!.additionalHeaderText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_guest_interaction: {
      value: cdktf.booleanToHclTerraform(struct!.allowGuestInteraction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_revoke: {
      value: cdktf.booleanToHclTerraform(struct!.allowRevoke),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_decision_message: {
      value: cdktf.booleanToHclTerraform(struct!.includeDecisionMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule_deescalation: {
      value: cdktf.booleanToHclTerraform(struct!.scheduleDeescalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strategy_id: {
      value: cdktf.stringToHclTerraform(struct!.strategyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt_field: {
      value: cdktf.listMapperHcl(flowParamsPromptFieldToHclTerraform, true)(struct!.promptField),
      isBlock: true,
      type: "list",
      storageClassType: "FlowParamsPromptFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlowParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalHeaderText !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalHeaderText = this._additionalHeaderText;
    }
    if (this._allowGuestInteraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowGuestInteraction = this._allowGuestInteraction;
    }
    if (this._allowRevoke !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRevoke = this._allowRevoke;
    }
    if (this._allowedSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSources = this._allowedSources;
    }
    if (this._includeDecisionMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDecisionMessage = this._includeDecisionMessage;
    }
    if (this._scheduleDeescalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleDeescalation = this._scheduleDeescalation;
    }
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._promptField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptField = this._promptField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalHeaderText = undefined;
      this._allowGuestInteraction = undefined;
      this._allowRevoke = undefined;
      this._allowedSources = undefined;
      this._includeDecisionMessage = undefined;
      this._scheduleDeescalation = undefined;
      this._strategyId = undefined;
      this._promptField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalHeaderText = value.additionalHeaderText;
      this._allowGuestInteraction = value.allowGuestInteraction;
      this._allowRevoke = value.allowRevoke;
      this._allowedSources = value.allowedSources;
      this._includeDecisionMessage = value.includeDecisionMessage;
      this._scheduleDeescalation = value.scheduleDeescalation;
      this._strategyId = value.strategyId;
      this._promptField.internalValue = value.promptField;
    }
  }

  // additional_header_text - computed: false, optional: true, required: false
  private _additionalHeaderText?: string; 
  public get additionalHeaderText() {
    return this.getStringAttribute('additional_header_text');
  }
  public set additionalHeaderText(value: string) {
    this._additionalHeaderText = value;
  }
  public resetAdditionalHeaderText() {
    this._additionalHeaderText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeaderTextInput() {
    return this._additionalHeaderText;
  }

  // allow_guest_interaction - computed: false, optional: true, required: false
  private _allowGuestInteraction?: boolean | cdktf.IResolvable; 
  public get allowGuestInteraction() {
    return this.getBooleanAttribute('allow_guest_interaction');
  }
  public set allowGuestInteraction(value: boolean | cdktf.IResolvable) {
    this._allowGuestInteraction = value;
  }
  public resetAllowGuestInteraction() {
    this._allowGuestInteraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGuestInteractionInput() {
    return this._allowGuestInteraction;
  }

  // allow_revoke - computed: false, optional: true, required: false
  private _allowRevoke?: boolean | cdktf.IResolvable; 
  public get allowRevoke() {
    return this.getBooleanAttribute('allow_revoke');
  }
  public set allowRevoke(value: boolean | cdktf.IResolvable) {
    this._allowRevoke = value;
  }
  public resetAllowRevoke() {
    this._allowRevoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRevokeInput() {
    return this._allowRevoke;
  }

  // allowed_sources - computed: false, optional: true, required: false
  private _allowedSources?: string[]; 
  public get allowedSources() {
    return this.getListAttribute('allowed_sources');
  }
  public set allowedSources(value: string[]) {
    this._allowedSources = value;
  }
  public resetAllowedSources() {
    this._allowedSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSourcesInput() {
    return this._allowedSources;
  }

  // include_decision_message - computed: false, optional: true, required: false
  private _includeDecisionMessage?: boolean | cdktf.IResolvable; 
  public get includeDecisionMessage() {
    return this.getBooleanAttribute('include_decision_message');
  }
  public set includeDecisionMessage(value: boolean | cdktf.IResolvable) {
    this._includeDecisionMessage = value;
  }
  public resetIncludeDecisionMessage() {
    this._includeDecisionMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDecisionMessageInput() {
    return this._includeDecisionMessage;
  }

  // schedule_deescalation - computed: false, optional: true, required: false
  private _scheduleDeescalation?: boolean | cdktf.IResolvable; 
  public get scheduleDeescalation() {
    return this.getBooleanAttribute('schedule_deescalation');
  }
  public set scheduleDeescalation(value: boolean | cdktf.IResolvable) {
    this._scheduleDeescalation = value;
  }
  public resetScheduleDeescalation() {
    this._scheduleDeescalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleDeescalationInput() {
    return this._scheduleDeescalation;
  }

  // strategy_id - computed: false, optional: true, required: false
  private _strategyId?: string; 
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }
  public set strategyId(value: string) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
  }

  // prompt_field - computed: false, optional: true, required: false
  private _promptField = new FlowParamsPromptFieldList(this, "prompt_field", false);
  public get promptField() {
    return this._promptField;
  }
  public putPromptField(value: FlowParamsPromptField[] | cdktf.IResolvable) {
    this._promptField.internalValue = value;
  }
  public resetPromptField() {
    this._promptField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptFieldInput() {
    return this._promptField.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow sym_flow}
*/
export class Flow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sym_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Flow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Flow to import
  * @param importFromId The id of the existing Flow that should be imported. Refer to the {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Flow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sym_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/flow sym_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowConfig
  */
  public constructor(scope: Construct, id: string, config: FlowConfig) {
    super(scope, id, {
      terraformResourceType: 'sym_flow',
      terraformGeneratorMetadata: {
        providerName: 'sym',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._implementation = config.implementation;
    this._label = config.label;
    this._name = config.name;
    this._vars = config.vars;
    this._params.internalValue = config.params;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // implementation - computed: false, optional: false, required: true
  private _implementation?: string; 
  public get implementation() {
    return this.getStringAttribute('implementation');
  }
  public set implementation(value: string) {
    this._implementation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationInput() {
    return this._implementation;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }

  // params - computed: false, optional: true, required: false
  private _params = new FlowParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: FlowParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      implementation: cdktf.stringToTerraform(this._implementation),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
      params: flowParamsToTerraform(this._params.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      implementation: {
        value: cdktf.stringToHclTerraform(this._implementation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      params: {
        value: flowParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
