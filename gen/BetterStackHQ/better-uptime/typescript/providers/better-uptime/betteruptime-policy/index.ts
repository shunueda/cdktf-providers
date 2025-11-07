// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of this Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#name BetteruptimePolicy#name}
  */
  readonly name: string;
  /**
  * Set this attribute if you want to add this policy to a policy group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#policy_group_id BetteruptimePolicy#policy_group_id}
  */
  readonly policyGroupId?: number;
  /**
  * How many times should the entire policy be repeated if no one acknowledges the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#repeat_count BetteruptimePolicy#repeat_count}
  */
  readonly repeatCount?: number;
  /**
  * How long in seconds to wait before each repetition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#repeat_delay BetteruptimePolicy#repeat_delay}
  */
  readonly repeatDelay?: number;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#team_name BetteruptimePolicy#team_name}
  */
  readonly teamName?: string;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#steps BetteruptimePolicy#steps}
  */
  readonly steps: BetteruptimePolicySteps[] | cdktf.IResolvable;
}
export interface BetteruptimePolicyStepsMetadataValue {
  /**
  * Email of the referenced user when type is `User`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#email BetteruptimePolicy#email}
  */
  readonly email?: string;
  /**
  * ID of the referenced item when type is different than `String`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#item_id BetteruptimePolicy#item_id}
  */
  readonly itemId?: string;
  /**
  * Name of the referenced item when type is different than `String`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#name BetteruptimePolicy#name}
  */
  readonly name?: string;
  /**
  * Value types can be grouped into 2 main categories:
  *   - **Scalar**: `String`
  *   - **Reference**: `User`, `Team`, `Policy`, `Schedule`, `SlackIntegration`, `LinearIntegration`, `JiraIntegration`, `MicrosoftTeamsWebhook`, `ZapierWebhook`, `NativeWebhook`, `PagerDutyWebhook`
  *   
  *   The value of a **Scalar** type is defined using the value field.
  *   
  *   The value of a **Reference** type is defined using one of the following fields:
  *   - `item_id` - great choice when you know the ID of the target item.
  *   - `email` - your go-to choice when you're referencing users.
  *   - `name` - can be used to reference other items like teams, policies, etc.
  *   
  *   **The reference types require the presence of at least one of the three fields: `item_id`, `name`, `email`.**
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#type BetteruptimePolicy#type}
  */
  readonly type?: string;
  /**
  * Value when type is String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#value BetteruptimePolicy#value}
  */
  readonly value?: string;
}

export function betteruptimePolicyStepsMetadataValueToTerraform(struct?: BetteruptimePolicyStepsMetadataValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    item_id: cdktf.stringToTerraform(struct!.itemId),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function betteruptimePolicyStepsMetadataValueToHclTerraform(struct?: BetteruptimePolicyStepsMetadataValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item_id: {
      value: cdktf.stringToHclTerraform(struct!.itemId),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimePolicyStepsMetadataValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimePolicyStepsMetadataValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._itemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemId = this._itemId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimePolicyStepsMetadataValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._itemId = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._itemId = value.itemId;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // item_id - computed: false, optional: true, required: false
  private _itemId?: string; 
  public get itemId() {
    return this.getStringAttribute('item_id');
  }
  public set itemId(value: string) {
    this._itemId = value;
  }
  public resetItemId() {
    this._itemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BetteruptimePolicyStepsMetadataValueList extends cdktf.ComplexList {
  public internalValue? : BetteruptimePolicyStepsMetadataValue[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimePolicyStepsMetadataValueOutputReference {
    return new BetteruptimePolicyStepsMetadataValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BetteruptimePolicyStepsStepMembers {
  /**
  * The ID of the resource to notify during an incident. Required for user, webhook, slack_integration, microsoft_teams_integration, zapier_webhook and pagerduty_integration member types. This is e.g. the ID of the user to notify when member type is user, or on-call calendar ID of when member type is current_on_call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#id BetteruptimePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The metadata key to use to retrieve the escalation target from the incident's metadata. Required when type is incident_metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#metadata_key BetteruptimePolicy#metadata_key}
  */
  readonly metadataKey?: string;
  /**
  * The ID of the team to notify when member team is entire_team. When left empty, the default team for the incident is used. This field is deprecated, use id instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#team_id BetteruptimePolicy#team_id}
  */
  readonly teamId?: number;
  /**
  * Type type of the member to notify during an incident. Can be one of current_on_call, entire_team, all_slack_integrations, all_microsoft_teams_integrations, all_zapier_integrations, all_webhook_integrations, all_splunk_on_call_integrations, incident_metadata, user, webhook, slack_integration, microsoft_teams_integration, zapier_webhook or pagerduty_integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#type BetteruptimePolicy#type}
  */
  readonly type: string;
}

export function betteruptimePolicyStepsStepMembersToTerraform(struct?: BetteruptimePolicyStepsStepMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
    team_id: cdktf.numberToTerraform(struct!.teamId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function betteruptimePolicyStepsStepMembersToHclTerraform(struct?: BetteruptimePolicyStepsStepMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.numberToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimePolicyStepsStepMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimePolicyStepsStepMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimePolicyStepsStepMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._metadataKey = undefined;
      this._teamId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._metadataKey = value.metadataKey;
      this._teamId = value.teamId;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata_key - computed: false, optional: true, required: false
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  public resetMetadataKey() {
    this._metadataKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: number; 
  public get teamId() {
    return this.getNumberAttribute('team_id');
  }
  public set teamId(value: number) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
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
}

export class BetteruptimePolicyStepsStepMembersList extends cdktf.ComplexList {
  public internalValue? : BetteruptimePolicyStepsStepMembers[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimePolicyStepsStepMembersOutputReference {
    return new BetteruptimePolicyStepsStepMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BetteruptimePolicySteps {
  /**
  * Post instructions as a comment into the incident timeline. You can use Markdown, reference metadata as `{server_region}`, and interactive checkboxes like `- [ ] Step 1`. Used when step type is instructions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#comment BetteruptimePolicy#comment}
  */
  readonly comment?: string;
  /**
  * An array of days during which the branching rule will be executed. Valid values are ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]. Used when step type is branching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#days BetteruptimePolicy#days}
  */
  readonly days?: string[];
  /**
  * A metadata field key to check. Used when step type is metadata_branching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#metadata_key BetteruptimePolicy#metadata_key}
  */
  readonly metadataKey?: string;
  /**
  * An array of metadata String values which will cause the branching rule to be executed. Used when step type is metadata_branching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#metadata_values BetteruptimePolicy#metadata_values}
  */
  readonly metadataValues?: string[];
  /**
  * A policy to executed if the branching rule matches the time of an incident. Used when step type is time_branching or metadata_branching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#policy_id BetteruptimePolicy#policy_id}
  */
  readonly policyId?: number;
  /**
  * A metadata key from which to extract the policy to executed if the branching rule matches the time of an incident. Used when step type is time_branching or metadata_branching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#policy_metadata_key BetteruptimePolicy#policy_metadata_key}
  */
  readonly policyMetadataKey?: string;
  /**
  * Whether we should followup periodically unless all checkboxes are checked. Used when step type is instructions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#reminder_enabled BetteruptimePolicy#reminder_enabled}
  */
  readonly reminderEnabled?: boolean | cdktf.IResolvable;
  /**
  * Time interval in hours we should use for periodical follow-ups. Used when step type is instructions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#reminder_interval_hours BetteruptimePolicy#reminder_interval_hours}
  */
  readonly reminderIntervalHours?: number;
  /**
  * A time from which the branching rule will be executed. Use HH:MM format. Used when step type is time_branching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#time_from BetteruptimePolicy#time_from}
  */
  readonly timeFrom?: string;
  /**
  * A time at which the branching rule will step being executed. Use HH:MM format. Used when step type is time_branching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#time_to BetteruptimePolicy#time_to}
  */
  readonly timeTo?: string;
  /**
  * What timezone to use when evaluating time based branching rules. Used when step type is time_branching. The accepted values can be found in the Rails TimeZone documentation. https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#timezone BetteruptimePolicy#timezone}
  */
  readonly timezone?: string;
  /**
  * The type of the step. Can be either escalation, time_branching, metadata_branching, or instructions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#type BetteruptimePolicy#type}
  */
  readonly type: string;
  /**
  * Which severity to use for this step. Used when step type is escalation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#urgency_id BetteruptimePolicy#urgency_id}
  */
  readonly urgencyId?: number;
  /**
  * How long to wait in seconds before executing this step since previous step. Omit if wait_until_time is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#wait_before BetteruptimePolicy#wait_before}
  */
  readonly waitBefore?: number;
  /**
  * Execute this step at the specified time. Use HH:MM format. Omit if wait_before is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#wait_until_time BetteruptimePolicy#wait_until_time}
  */
  readonly waitUntilTime?: string;
  /**
  * Timezone to use when interpreting wait_until_time. Omit if wait_before is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#wait_until_timezone BetteruptimePolicy#wait_until_timezone}
  */
  readonly waitUntilTimezone?: string;
  /**
  * metadata_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#metadata_value BetteruptimePolicy#metadata_value}
  */
  readonly metadataValue?: BetteruptimePolicyStepsMetadataValue[] | cdktf.IResolvable;
  /**
  * step_members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#step_members BetteruptimePolicy#step_members}
  */
  readonly stepMembers?: BetteruptimePolicyStepsStepMembers[] | cdktf.IResolvable;
}

export function betteruptimePolicyStepsToTerraform(struct?: BetteruptimePolicySteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
    metadata_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metadataValues),
    policy_id: cdktf.numberToTerraform(struct!.policyId),
    policy_metadata_key: cdktf.stringToTerraform(struct!.policyMetadataKey),
    reminder_enabled: cdktf.booleanToTerraform(struct!.reminderEnabled),
    reminder_interval_hours: cdktf.numberToTerraform(struct!.reminderIntervalHours),
    time_from: cdktf.stringToTerraform(struct!.timeFrom),
    time_to: cdktf.stringToTerraform(struct!.timeTo),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    urgency_id: cdktf.numberToTerraform(struct!.urgencyId),
    wait_before: cdktf.numberToTerraform(struct!.waitBefore),
    wait_until_time: cdktf.stringToTerraform(struct!.waitUntilTime),
    wait_until_timezone: cdktf.stringToTerraform(struct!.waitUntilTimezone),
    metadata_value: cdktf.listMapper(betteruptimePolicyStepsMetadataValueToTerraform, true)(struct!.metadataValue),
    step_members: cdktf.listMapper(betteruptimePolicyStepsStepMembersToTerraform, true)(struct!.stepMembers),
  }
}


export function betteruptimePolicyStepsToHclTerraform(struct?: BetteruptimePolicySteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metadataValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    policy_id: {
      value: cdktf.numberToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.policyMetadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reminder_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.reminderEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reminder_interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.reminderIntervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_from: {
      value: cdktf.stringToHclTerraform(struct!.timeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to: {
      value: cdktf.stringToHclTerraform(struct!.timeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency_id: {
      value: cdktf.numberToHclTerraform(struct!.urgencyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_before: {
      value: cdktf.numberToHclTerraform(struct!.waitBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_until_time: {
      value: cdktf.stringToHclTerraform(struct!.waitUntilTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_until_timezone: {
      value: cdktf.stringToHclTerraform(struct!.waitUntilTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_value: {
      value: cdktf.listMapperHcl(betteruptimePolicyStepsMetadataValueToHclTerraform, true)(struct!.metadataValue),
      isBlock: true,
      type: "list",
      storageClassType: "BetteruptimePolicyStepsMetadataValueList",
    },
    step_members: {
      value: cdktf.listMapperHcl(betteruptimePolicyStepsStepMembersToHclTerraform, true)(struct!.stepMembers),
      isBlock: true,
      type: "list",
      storageClassType: "BetteruptimePolicyStepsStepMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimePolicyStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimePolicySteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    if (this._metadataValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataValues = this._metadataValues;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._policyMetadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyMetadataKey = this._policyMetadataKey;
    }
    if (this._reminderEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.reminderEnabled = this._reminderEnabled;
    }
    if (this._reminderIntervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.reminderIntervalHours = this._reminderIntervalHours;
    }
    if (this._timeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFrom = this._timeFrom;
    }
    if (this._timeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTo = this._timeTo;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgencyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgencyId = this._urgencyId;
    }
    if (this._waitBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitBefore = this._waitBefore;
    }
    if (this._waitUntilTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitUntilTime = this._waitUntilTime;
    }
    if (this._waitUntilTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitUntilTimezone = this._waitUntilTimezone;
    }
    if (this._metadataValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataValue = this._metadataValue?.internalValue;
    }
    if (this._stepMembers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepMembers = this._stepMembers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimePolicySteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._days = undefined;
      this._metadataKey = undefined;
      this._metadataValues = undefined;
      this._policyId = undefined;
      this._policyMetadataKey = undefined;
      this._reminderEnabled = undefined;
      this._reminderIntervalHours = undefined;
      this._timeFrom = undefined;
      this._timeTo = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._urgencyId = undefined;
      this._waitBefore = undefined;
      this._waitUntilTime = undefined;
      this._waitUntilTimezone = undefined;
      this._metadataValue.internalValue = undefined;
      this._stepMembers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._days = value.days;
      this._metadataKey = value.metadataKey;
      this._metadataValues = value.metadataValues;
      this._policyId = value.policyId;
      this._policyMetadataKey = value.policyMetadataKey;
      this._reminderEnabled = value.reminderEnabled;
      this._reminderIntervalHours = value.reminderIntervalHours;
      this._timeFrom = value.timeFrom;
      this._timeTo = value.timeTo;
      this._timezone = value.timezone;
      this._type = value.type;
      this._urgencyId = value.urgencyId;
      this._waitBefore = value.waitBefore;
      this._waitUntilTime = value.waitUntilTime;
      this._waitUntilTimezone = value.waitUntilTimezone;
      this._metadataValue.internalValue = value.metadataValue;
      this._stepMembers.internalValue = value.stepMembers;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // metadata_key - computed: false, optional: true, required: false
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  public resetMetadataKey() {
    this._metadataKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }

  // metadata_values - computed: false, optional: true, required: false
  private _metadataValues?: string[]; 
  public get metadataValues() {
    return this.getListAttribute('metadata_values');
  }
  public set metadataValues(value: string[]) {
    this._metadataValues = value;
  }
  public resetMetadataValues() {
    this._metadataValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataValuesInput() {
    return this._metadataValues;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policy_metadata_key - computed: false, optional: true, required: false
  private _policyMetadataKey?: string; 
  public get policyMetadataKey() {
    return this.getStringAttribute('policy_metadata_key');
  }
  public set policyMetadataKey(value: string) {
    this._policyMetadataKey = value;
  }
  public resetPolicyMetadataKey() {
    this._policyMetadataKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyMetadataKeyInput() {
    return this._policyMetadataKey;
  }

  // reminder_enabled - computed: true, optional: true, required: false
  private _reminderEnabled?: boolean | cdktf.IResolvable; 
  public get reminderEnabled() {
    return this.getBooleanAttribute('reminder_enabled');
  }
  public set reminderEnabled(value: boolean | cdktf.IResolvable) {
    this._reminderEnabled = value;
  }
  public resetReminderEnabled() {
    this._reminderEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reminderEnabledInput() {
    return this._reminderEnabled;
  }

  // reminder_interval_hours - computed: true, optional: true, required: false
  private _reminderIntervalHours?: number; 
  public get reminderIntervalHours() {
    return this.getNumberAttribute('reminder_interval_hours');
  }
  public set reminderIntervalHours(value: number) {
    this._reminderIntervalHours = value;
  }
  public resetReminderIntervalHours() {
    this._reminderIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reminderIntervalHoursInput() {
    return this._reminderIntervalHours;
  }

  // time_from - computed: false, optional: true, required: false
  private _timeFrom?: string; 
  public get timeFrom() {
    return this.getStringAttribute('time_from');
  }
  public set timeFrom(value: string) {
    this._timeFrom = value;
  }
  public resetTimeFrom() {
    this._timeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFromInput() {
    return this._timeFrom;
  }

  // time_to - computed: false, optional: true, required: false
  private _timeTo?: string; 
  public get timeTo() {
    return this.getStringAttribute('time_to');
  }
  public set timeTo(value: string) {
    this._timeTo = value;
  }
  public resetTimeTo() {
    this._timeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToInput() {
    return this._timeTo;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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

  // urgency_id - computed: false, optional: true, required: false
  private _urgencyId?: number; 
  public get urgencyId() {
    return this.getNumberAttribute('urgency_id');
  }
  public set urgencyId(value: number) {
    this._urgencyId = value;
  }
  public resetUrgencyId() {
    this._urgencyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyIdInput() {
    return this._urgencyId;
  }

  // wait_before - computed: false, optional: true, required: false
  private _waitBefore?: number; 
  public get waitBefore() {
    return this.getNumberAttribute('wait_before');
  }
  public set waitBefore(value: number) {
    this._waitBefore = value;
  }
  public resetWaitBefore() {
    this._waitBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitBeforeInput() {
    return this._waitBefore;
  }

  // wait_until_time - computed: false, optional: true, required: false
  private _waitUntilTime?: string; 
  public get waitUntilTime() {
    return this.getStringAttribute('wait_until_time');
  }
  public set waitUntilTime(value: string) {
    this._waitUntilTime = value;
  }
  public resetWaitUntilTime() {
    this._waitUntilTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilTimeInput() {
    return this._waitUntilTime;
  }

  // wait_until_timezone - computed: false, optional: true, required: false
  private _waitUntilTimezone?: string; 
  public get waitUntilTimezone() {
    return this.getStringAttribute('wait_until_timezone');
  }
  public set waitUntilTimezone(value: string) {
    this._waitUntilTimezone = value;
  }
  public resetWaitUntilTimezone() {
    this._waitUntilTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilTimezoneInput() {
    return this._waitUntilTimezone;
  }

  // metadata_value - computed: false, optional: true, required: false
  private _metadataValue = new BetteruptimePolicyStepsMetadataValueList(this, "metadata_value", false);
  public get metadataValue() {
    return this._metadataValue;
  }
  public putMetadataValue(value: BetteruptimePolicyStepsMetadataValue[] | cdktf.IResolvable) {
    this._metadataValue.internalValue = value;
  }
  public resetMetadataValue() {
    this._metadataValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataValueInput() {
    return this._metadataValue.internalValue;
  }

  // step_members - computed: false, optional: true, required: false
  private _stepMembers = new BetteruptimePolicyStepsStepMembersList(this, "step_members", false);
  public get stepMembers() {
    return this._stepMembers;
  }
  public putStepMembers(value: BetteruptimePolicyStepsStepMembers[] | cdktf.IResolvable) {
    this._stepMembers.internalValue = value;
  }
  public resetStepMembers() {
    this._stepMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepMembersInput() {
    return this._stepMembers.internalValue;
  }
}

export class BetteruptimePolicyStepsList extends cdktf.ComplexList {
  public internalValue? : BetteruptimePolicySteps[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimePolicyStepsOutputReference {
    return new BetteruptimePolicyStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy betteruptime_policy}
*/
export class BetteruptimePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimePolicy to import
  * @param importFromId The id of the existing BetteruptimePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_policy betteruptime_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_policy',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._policyGroupId = config.policyGroupId;
    this._repeatCount = config.repeatCount;
    this._repeatDelay = config.repeatDelay;
    this._teamName = config.teamName;
    this._steps.internalValue = config.steps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_token - computed: true, optional: false, required: false
  public get incidentToken() {
    return this.getStringAttribute('incident_token');
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

  // policy_group_id - computed: true, optional: true, required: false
  private _policyGroupId?: number; 
  public get policyGroupId() {
    return this.getNumberAttribute('policy_group_id');
  }
  public set policyGroupId(value: number) {
    this._policyGroupId = value;
  }
  public resetPolicyGroupId() {
    this._policyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupIdInput() {
    return this._policyGroupId;
  }

  // repeat_count - computed: true, optional: true, required: false
  private _repeatCount?: number; 
  public get repeatCount() {
    return this.getNumberAttribute('repeat_count');
  }
  public set repeatCount(value: number) {
    this._repeatCount = value;
  }
  public resetRepeatCount() {
    this._repeatCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCountInput() {
    return this._repeatCount;
  }

  // repeat_delay - computed: true, optional: true, required: false
  private _repeatDelay?: number; 
  public get repeatDelay() {
    return this.getNumberAttribute('repeat_delay');
  }
  public set repeatDelay(value: number) {
    this._repeatDelay = value;
  }
  public resetRepeatDelay() {
    this._repeatDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatDelayInput() {
    return this._repeatDelay;
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new BetteruptimePolicyStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: BetteruptimePolicySteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      policy_group_id: cdktf.numberToTerraform(this._policyGroupId),
      repeat_count: cdktf.numberToTerraform(this._repeatCount),
      repeat_delay: cdktf.numberToTerraform(this._repeatDelay),
      team_name: cdktf.stringToTerraform(this._teamName),
      steps: cdktf.listMapper(betteruptimePolicyStepsToTerraform, true)(this._steps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_group_id: {
        value: cdktf.numberToHclTerraform(this._policyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repeat_count: {
        value: cdktf.numberToHclTerraform(this._repeatCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repeat_delay: {
        value: cdktf.numberToHclTerraform(this._repeatDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      steps: {
        value: cdktf.listMapperHcl(betteruptimePolicyStepsToHclTerraform, true)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimePolicyStepsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
