// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user ids of the admins of this team. These users must also be present in user_ids attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#admin_ids Team#admin_ids}
  */
  readonly adminIds?: number[];
  /**
  * Enable alerts to be broadcasted to a specific channel. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#alert_broadcast_enabled Team#alert_broadcast_enabled}
  */
  readonly alertBroadcastEnabled?: boolean | cdktf.IResolvable;
  /**
  * The alert urgency id of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#alert_urgency_id Team#alert_urgency_id}
  */
  readonly alertUrgencyId?: string;
  /**
  * Email generated to send alerts to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#alerts_email_address Team#alerts_email_address}
  */
  readonly alertsEmailAddress?: string;
  /**
  * Enable alerts through email. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#alerts_email_enabled Team#alerts_email_enabled}
  */
  readonly alertsEmailEnabled?: boolean | cdktf.IResolvable;
  /**
  * Auto add members to incident channel when team is attached. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#auto_add_members_when_attached Team#auto_add_members_when_attached}
  */
  readonly autoAddMembersWhenAttached?: boolean | cdktf.IResolvable;
  /**
  * The Backstage entity id associated to this team. eg: :namespace/:kind/:entity_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#backstage_id Team#backstage_id}
  */
  readonly backstageId?: string;
  /**
  * The hex color of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#color Team#color}
  */
  readonly color?: string;
  /**
  * The Cortex group id associated to this team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#cortex_id Team#cortex_id}
  */
  readonly cortexId?: string;
  /**
  * The description of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * The external id associated to this team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#external_id Team#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable incidents to be broadcasted to a specific channel. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#incident_broadcast_enabled Team#incident_broadcast_enabled}
  */
  readonly incidentBroadcastEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * Emails to attach to the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#notify_emails Team#notify_emails}
  */
  readonly notifyEmails?: string[];
  /**
  * The Opsgenie group id associated to this team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#opsgenie_id Team#opsgenie_id}
  */
  readonly opsgenieId?: string;
  /**
  * The PagerDuty group id associated to this team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#pagerduty_id Team#pagerduty_id}
  */
  readonly pagerdutyId?: string;
  /**
  * The PagerDuty service id associated to this team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#pagerduty_service_id Team#pagerduty_service_id}
  */
  readonly pagerdutyServiceId?: string;
  /**
  * The PagerTree group id associated to this team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#pagertree_id Team#pagertree_id}
  */
  readonly pagertreeId?: string;
  /**
  * Position of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#position Team#position}
  */
  readonly position?: number;
  /**
  * The Service Now CI sys id associated to this team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#service_now_ci_sys_id Team#service_now_ci_sys_id}
  */
  readonly serviceNowCiSysId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#slug Team#slug}
  */
  readonly slug?: string;
  /**
  * The user ids of the members of this team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#user_ids Team#user_ids}
  */
  readonly userIds?: number[];
  /**
  * The VictorOps group id associated to this team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#victor_ops_id Team#victor_ops_id}
  */
  readonly victorOpsId?: string;
  /**
  * alert_broadcast_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#alert_broadcast_channel Team#alert_broadcast_channel}
  */
  readonly alertBroadcastChannel?: TeamAlertBroadcastChannel;
  /**
  * incident_broadcast_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#incident_broadcast_channel Team#incident_broadcast_channel}
  */
  readonly incidentBroadcastChannel?: TeamIncidentBroadcastChannel;
  /**
  * slack_aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#slack_aliases Team#slack_aliases}
  */
  readonly slackAliases?: TeamSlackAliases[] | cdktf.IResolvable;
  /**
  * slack_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#slack_channels Team#slack_channels}
  */
  readonly slackChannels?: TeamSlackChannels[] | cdktf.IResolvable;
}
export interface TeamAlertBroadcastChannel {
  /**
  * Slack channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#name Team#name}
  */
  readonly name?: string;
}

export function teamAlertBroadcastChannelToTerraform(struct?: TeamAlertBroadcastChannelOutputReference | TeamAlertBroadcastChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function teamAlertBroadcastChannelToHclTerraform(struct?: TeamAlertBroadcastChannelOutputReference | TeamAlertBroadcastChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamAlertBroadcastChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamAlertBroadcastChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamAlertBroadcastChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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
}
export interface TeamIncidentBroadcastChannel {
  /**
  * Slack channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#name Team#name}
  */
  readonly name?: string;
}

export function teamIncidentBroadcastChannelToTerraform(struct?: TeamIncidentBroadcastChannelOutputReference | TeamIncidentBroadcastChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function teamIncidentBroadcastChannelToHclTerraform(struct?: TeamIncidentBroadcastChannelOutputReference | TeamIncidentBroadcastChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamIncidentBroadcastChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamIncidentBroadcastChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamIncidentBroadcastChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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
}
export interface TeamSlackAliases {
  /**
  * Slack alias ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#name Team#name}
  */
  readonly name?: string;
}

export function teamSlackAliasesToTerraform(struct?: TeamSlackAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function teamSlackAliasesToHclTerraform(struct?: TeamSlackAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamSlackAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamSlackAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamSlackAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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
}

export class TeamSlackAliasesList extends cdktf.ComplexList {
  public internalValue? : TeamSlackAliases[] | cdktf.IResolvable

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
  public get(index: number): TeamSlackAliasesOutputReference {
    return new TeamSlackAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeamSlackChannels {
  /**
  * Slack channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#name Team#name}
  */
  readonly name?: string;
}

export function teamSlackChannelsToTerraform(struct?: TeamSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function teamSlackChannelsToHclTerraform(struct?: TeamSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamSlackChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamSlackChannels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamSlackChannels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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
}

export class TeamSlackChannelsList extends cdktf.ComplexList {
  public internalValue? : TeamSlackChannels[] | cdktf.IResolvable

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
  public get(index: number): TeamSlackChannelsOutputReference {
    return new TeamSlackChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team rootly_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/team rootly_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_team',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.10',
        providerVersionConstraint: '4.3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminIds = config.adminIds;
    this._alertBroadcastEnabled = config.alertBroadcastEnabled;
    this._alertUrgencyId = config.alertUrgencyId;
    this._alertsEmailAddress = config.alertsEmailAddress;
    this._alertsEmailEnabled = config.alertsEmailEnabled;
    this._autoAddMembersWhenAttached = config.autoAddMembersWhenAttached;
    this._backstageId = config.backstageId;
    this._color = config.color;
    this._cortexId = config.cortexId;
    this._description = config.description;
    this._externalId = config.externalId;
    this._id = config.id;
    this._incidentBroadcastEnabled = config.incidentBroadcastEnabled;
    this._name = config.name;
    this._notifyEmails = config.notifyEmails;
    this._opsgenieId = config.opsgenieId;
    this._pagerdutyId = config.pagerdutyId;
    this._pagerdutyServiceId = config.pagerdutyServiceId;
    this._pagertreeId = config.pagertreeId;
    this._position = config.position;
    this._serviceNowCiSysId = config.serviceNowCiSysId;
    this._slug = config.slug;
    this._userIds = config.userIds;
    this._victorOpsId = config.victorOpsId;
    this._alertBroadcastChannel.internalValue = config.alertBroadcastChannel;
    this._incidentBroadcastChannel.internalValue = config.incidentBroadcastChannel;
    this._slackAliases.internalValue = config.slackAliases;
    this._slackChannels.internalValue = config.slackChannels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_ids - computed: false, optional: true, required: false
  private _adminIds?: number[]; 
  public get adminIds() {
    return this.getNumberListAttribute('admin_ids');
  }
  public set adminIds(value: number[]) {
    this._adminIds = value;
  }
  public resetAdminIds() {
    this._adminIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIdsInput() {
    return this._adminIds;
  }

  // alert_broadcast_enabled - computed: true, optional: true, required: false
  private _alertBroadcastEnabled?: boolean | cdktf.IResolvable; 
  public get alertBroadcastEnabled() {
    return this.getBooleanAttribute('alert_broadcast_enabled');
  }
  public set alertBroadcastEnabled(value: boolean | cdktf.IResolvable) {
    this._alertBroadcastEnabled = value;
  }
  public resetAlertBroadcastEnabled() {
    this._alertBroadcastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertBroadcastEnabledInput() {
    return this._alertBroadcastEnabled;
  }

  // alert_urgency_id - computed: true, optional: true, required: false
  private _alertUrgencyId?: string; 
  public get alertUrgencyId() {
    return this.getStringAttribute('alert_urgency_id');
  }
  public set alertUrgencyId(value: string) {
    this._alertUrgencyId = value;
  }
  public resetAlertUrgencyId() {
    this._alertUrgencyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertUrgencyIdInput() {
    return this._alertUrgencyId;
  }

  // alerts_email_address - computed: true, optional: true, required: false
  private _alertsEmailAddress?: string; 
  public get alertsEmailAddress() {
    return this.getStringAttribute('alerts_email_address');
  }
  public set alertsEmailAddress(value: string) {
    this._alertsEmailAddress = value;
  }
  public resetAlertsEmailAddress() {
    this._alertsEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsEmailAddressInput() {
    return this._alertsEmailAddress;
  }

  // alerts_email_enabled - computed: true, optional: true, required: false
  private _alertsEmailEnabled?: boolean | cdktf.IResolvable; 
  public get alertsEmailEnabled() {
    return this.getBooleanAttribute('alerts_email_enabled');
  }
  public set alertsEmailEnabled(value: boolean | cdktf.IResolvable) {
    this._alertsEmailEnabled = value;
  }
  public resetAlertsEmailEnabled() {
    this._alertsEmailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsEmailEnabledInput() {
    return this._alertsEmailEnabled;
  }

  // auto_add_members_when_attached - computed: true, optional: true, required: false
  private _autoAddMembersWhenAttached?: boolean | cdktf.IResolvable; 
  public get autoAddMembersWhenAttached() {
    return this.getBooleanAttribute('auto_add_members_when_attached');
  }
  public set autoAddMembersWhenAttached(value: boolean | cdktf.IResolvable) {
    this._autoAddMembersWhenAttached = value;
  }
  public resetAutoAddMembersWhenAttached() {
    this._autoAddMembersWhenAttached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAddMembersWhenAttachedInput() {
    return this._autoAddMembersWhenAttached;
  }

  // backstage_id - computed: true, optional: true, required: false
  private _backstageId?: string; 
  public get backstageId() {
    return this.getStringAttribute('backstage_id');
  }
  public set backstageId(value: string) {
    this._backstageId = value;
  }
  public resetBackstageId() {
    this._backstageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backstageIdInput() {
    return this._backstageId;
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // cortex_id - computed: true, optional: true, required: false
  private _cortexId?: string; 
  public get cortexId() {
    return this.getStringAttribute('cortex_id');
  }
  public set cortexId(value: string) {
    this._cortexId = value;
  }
  public resetCortexId() {
    this._cortexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cortexIdInput() {
    return this._cortexId;
  }

  // description - computed: true, optional: true, required: false
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

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // incident_broadcast_enabled - computed: true, optional: true, required: false
  private _incidentBroadcastEnabled?: boolean | cdktf.IResolvable; 
  public get incidentBroadcastEnabled() {
    return this.getBooleanAttribute('incident_broadcast_enabled');
  }
  public set incidentBroadcastEnabled(value: boolean | cdktf.IResolvable) {
    this._incidentBroadcastEnabled = value;
  }
  public resetIncidentBroadcastEnabled() {
    this._incidentBroadcastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentBroadcastEnabledInput() {
    return this._incidentBroadcastEnabled;
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

  // notify_emails - computed: false, optional: true, required: false
  private _notifyEmails?: string[]; 
  public get notifyEmails() {
    return this.getListAttribute('notify_emails');
  }
  public set notifyEmails(value: string[]) {
    this._notifyEmails = value;
  }
  public resetNotifyEmails() {
    this._notifyEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEmailsInput() {
    return this._notifyEmails;
  }

  // opsgenie_id - computed: true, optional: true, required: false
  private _opsgenieId?: string; 
  public get opsgenieId() {
    return this.getStringAttribute('opsgenie_id');
  }
  public set opsgenieId(value: string) {
    this._opsgenieId = value;
  }
  public resetOpsgenieId() {
    this._opsgenieId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieIdInput() {
    return this._opsgenieId;
  }

  // pagerduty_id - computed: true, optional: true, required: false
  private _pagerdutyId?: string; 
  public get pagerdutyId() {
    return this.getStringAttribute('pagerduty_id');
  }
  public set pagerdutyId(value: string) {
    this._pagerdutyId = value;
  }
  public resetPagerdutyId() {
    this._pagerdutyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyIdInput() {
    return this._pagerdutyId;
  }

  // pagerduty_service_id - computed: true, optional: true, required: false
  private _pagerdutyServiceId?: string; 
  public get pagerdutyServiceId() {
    return this.getStringAttribute('pagerduty_service_id');
  }
  public set pagerdutyServiceId(value: string) {
    this._pagerdutyServiceId = value;
  }
  public resetPagerdutyServiceId() {
    this._pagerdutyServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyServiceIdInput() {
    return this._pagerdutyServiceId;
  }

  // pagertree_id - computed: true, optional: true, required: false
  private _pagertreeId?: string; 
  public get pagertreeId() {
    return this.getStringAttribute('pagertree_id');
  }
  public set pagertreeId(value: string) {
    this._pagertreeId = value;
  }
  public resetPagertreeId() {
    this._pagertreeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagertreeIdInput() {
    return this._pagertreeId;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // service_now_ci_sys_id - computed: true, optional: true, required: false
  private _serviceNowCiSysId?: string; 
  public get serviceNowCiSysId() {
    return this.getStringAttribute('service_now_ci_sys_id');
  }
  public set serviceNowCiSysId(value: string) {
    this._serviceNowCiSysId = value;
  }
  public resetServiceNowCiSysId() {
    this._serviceNowCiSysId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowCiSysIdInput() {
    return this._serviceNowCiSysId;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: number[]; 
  public get userIds() {
    return this.getNumberListAttribute('user_ids');
  }
  public set userIds(value: number[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // victor_ops_id - computed: true, optional: true, required: false
  private _victorOpsId?: string; 
  public get victorOpsId() {
    return this.getStringAttribute('victor_ops_id');
  }
  public set victorOpsId(value: string) {
    this._victorOpsId = value;
  }
  public resetVictorOpsId() {
    this._victorOpsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victorOpsIdInput() {
    return this._victorOpsId;
  }

  // alert_broadcast_channel - computed: false, optional: true, required: false
  private _alertBroadcastChannel = new TeamAlertBroadcastChannelOutputReference(this, "alert_broadcast_channel");
  public get alertBroadcastChannel() {
    return this._alertBroadcastChannel;
  }
  public putAlertBroadcastChannel(value: TeamAlertBroadcastChannel) {
    this._alertBroadcastChannel.internalValue = value;
  }
  public resetAlertBroadcastChannel() {
    this._alertBroadcastChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertBroadcastChannelInput() {
    return this._alertBroadcastChannel.internalValue;
  }

  // incident_broadcast_channel - computed: false, optional: true, required: false
  private _incidentBroadcastChannel = new TeamIncidentBroadcastChannelOutputReference(this, "incident_broadcast_channel");
  public get incidentBroadcastChannel() {
    return this._incidentBroadcastChannel;
  }
  public putIncidentBroadcastChannel(value: TeamIncidentBroadcastChannel) {
    this._incidentBroadcastChannel.internalValue = value;
  }
  public resetIncidentBroadcastChannel() {
    this._incidentBroadcastChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentBroadcastChannelInput() {
    return this._incidentBroadcastChannel.internalValue;
  }

  // slack_aliases - computed: false, optional: true, required: false
  private _slackAliases = new TeamSlackAliasesList(this, "slack_aliases", false);
  public get slackAliases() {
    return this._slackAliases;
  }
  public putSlackAliases(value: TeamSlackAliases[] | cdktf.IResolvable) {
    this._slackAliases.internalValue = value;
  }
  public resetSlackAliases() {
    this._slackAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackAliasesInput() {
    return this._slackAliases.internalValue;
  }

  // slack_channels - computed: false, optional: true, required: false
  private _slackChannels = new TeamSlackChannelsList(this, "slack_channels", false);
  public get slackChannels() {
    return this._slackChannels;
  }
  public putSlackChannels(value: TeamSlackChannels[] | cdktf.IResolvable) {
    this._slackChannels.internalValue = value;
  }
  public resetSlackChannels() {
    this._slackChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelsInput() {
    return this._slackChannels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._adminIds),
      alert_broadcast_enabled: cdktf.booleanToTerraform(this._alertBroadcastEnabled),
      alert_urgency_id: cdktf.stringToTerraform(this._alertUrgencyId),
      alerts_email_address: cdktf.stringToTerraform(this._alertsEmailAddress),
      alerts_email_enabled: cdktf.booleanToTerraform(this._alertsEmailEnabled),
      auto_add_members_when_attached: cdktf.booleanToTerraform(this._autoAddMembersWhenAttached),
      backstage_id: cdktf.stringToTerraform(this._backstageId),
      color: cdktf.stringToTerraform(this._color),
      cortex_id: cdktf.stringToTerraform(this._cortexId),
      description: cdktf.stringToTerraform(this._description),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      incident_broadcast_enabled: cdktf.booleanToTerraform(this._incidentBroadcastEnabled),
      name: cdktf.stringToTerraform(this._name),
      notify_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyEmails),
      opsgenie_id: cdktf.stringToTerraform(this._opsgenieId),
      pagerduty_id: cdktf.stringToTerraform(this._pagerdutyId),
      pagerduty_service_id: cdktf.stringToTerraform(this._pagerdutyServiceId),
      pagertree_id: cdktf.stringToTerraform(this._pagertreeId),
      position: cdktf.numberToTerraform(this._position),
      service_now_ci_sys_id: cdktf.stringToTerraform(this._serviceNowCiSysId),
      slug: cdktf.stringToTerraform(this._slug),
      user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userIds),
      victor_ops_id: cdktf.stringToTerraform(this._victorOpsId),
      alert_broadcast_channel: teamAlertBroadcastChannelToTerraform(this._alertBroadcastChannel.internalValue),
      incident_broadcast_channel: teamIncidentBroadcastChannelToTerraform(this._incidentBroadcastChannel.internalValue),
      slack_aliases: cdktf.listMapper(teamSlackAliasesToTerraform, true)(this._slackAliases.internalValue),
      slack_channels: cdktf.listMapper(teamSlackChannelsToTerraform, true)(this._slackChannels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._adminIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      alert_broadcast_enabled: {
        value: cdktf.booleanToHclTerraform(this._alertBroadcastEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alert_urgency_id: {
        value: cdktf.stringToHclTerraform(this._alertUrgencyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alerts_email_address: {
        value: cdktf.stringToHclTerraform(this._alertsEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alerts_email_enabled: {
        value: cdktf.booleanToHclTerraform(this._alertsEmailEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_add_members_when_attached: {
        value: cdktf.booleanToHclTerraform(this._autoAddMembersWhenAttached),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backstage_id: {
        value: cdktf.stringToHclTerraform(this._backstageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cortex_id: {
        value: cdktf.stringToHclTerraform(this._cortexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      incident_broadcast_enabled: {
        value: cdktf.booleanToHclTerraform(this._incidentBroadcastEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifyEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      opsgenie_id: {
        value: cdktf.stringToHclTerraform(this._opsgenieId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pagerduty_id: {
        value: cdktf.stringToHclTerraform(this._pagerdutyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pagerduty_service_id: {
        value: cdktf.stringToHclTerraform(this._pagerdutyServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pagertree_id: {
        value: cdktf.stringToHclTerraform(this._pagertreeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_now_ci_sys_id: {
        value: cdktf.stringToHclTerraform(this._serviceNowCiSysId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      victor_ops_id: {
        value: cdktf.stringToHclTerraform(this._victorOpsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_broadcast_channel: {
        value: teamAlertBroadcastChannelToHclTerraform(this._alertBroadcastChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamAlertBroadcastChannelList",
      },
      incident_broadcast_channel: {
        value: teamIncidentBroadcastChannelToHclTerraform(this._incidentBroadcastChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamIncidentBroadcastChannelList",
      },
      slack_aliases: {
        value: cdktf.listMapperHcl(teamSlackAliasesToHclTerraform, true)(this._slackAliases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamSlackAliasesList",
      },
      slack_channels: {
        value: cdktf.listMapperHcl(teamSlackChannelsToHclTerraform, true)(this._slackChannels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamSlackChannelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
