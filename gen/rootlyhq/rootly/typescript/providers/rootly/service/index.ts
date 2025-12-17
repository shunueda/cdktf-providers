// https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable alerts to be broadcasted to a specific channel. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#alert_broadcast_enabled Service#alert_broadcast_enabled}
  */
  readonly alertBroadcastEnabled?: boolean | cdktf.IResolvable;
  /**
  * The alert urgency id of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#alert_urgency_id Service#alert_urgency_id}
  */
  readonly alertUrgencyId?: string;
  /**
  * Email generated to send alerts to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#alerts_email_address Service#alerts_email_address}
  */
  readonly alertsEmailAddress?: string;
  /**
  * Enable alerts through email. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#alerts_email_enabled Service#alerts_email_enabled}
  */
  readonly alertsEmailEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Backstage entity id associated to this service. eg: :namespace/:kind/:entity_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#backstage_id Service#backstage_id}
  */
  readonly backstageId?: string;
  /**
  * The hex color of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#color Service#color}
  */
  readonly color?: string;
  /**
  * The Cortex group id associated to this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#cortex_id Service#cortex_id}
  */
  readonly cortexId?: string;
  /**
  * The description of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#description Service#description}
  */
  readonly description?: string;
  /**
  * Environments associated with this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#environment_ids Service#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * The escalation policy id of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#escalation_policy_id Service#escalation_policy_id}
  */
  readonly escalationPolicyId?: string;
  /**
  * The external id associated to this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#external_id Service#external_id}
  */
  readonly externalId?: string;
  /**
  * The GitHub repository branch associated to this service. eg: main
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#github_repository_branch Service#github_repository_branch}
  */
  readonly githubRepositoryBranch?: string;
  /**
  * The GitHub repository name associated to this service. eg: rootlyhq/my-service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#github_repository_name Service#github_repository_name}
  */
  readonly githubRepositoryName?: string;
  /**
  * The GitLab repository branch associated to this service. eg: main
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#gitlab_repository_branch Service#gitlab_repository_branch}
  */
  readonly gitlabRepositoryBranch?: string;
  /**
  * The GitLab repository name associated to this service. eg: rootlyhq/my-service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#gitlab_repository_name Service#gitlab_repository_name}
  */
  readonly gitlabRepositoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable incidents to be broadcasted to a specific channel. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#incident_broadcast_enabled Service#incident_broadcast_enabled}
  */
  readonly incidentBroadcastEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * Emails attached to the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#notify_emails Service#notify_emails}
  */
  readonly notifyEmails?: string[];
  /**
  * The Opsgenie service id associated to this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#opsgenie_id Service#opsgenie_id}
  */
  readonly opsgenieId?: string;
  /**
  * Owner Teams associated with this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#owner_group_ids Service#owner_group_ids}
  */
  readonly ownerGroupIds?: string[];
  /**
  * Owner Users associated with this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#owner_user_ids Service#owner_user_ids}
  */
  readonly ownerUserIds?: number[];
  /**
  * The PagerDuty service id associated to this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#pagerduty_id Service#pagerduty_id}
  */
  readonly pagerdutyId?: string;
  /**
  * Position of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#position Service#position}
  */
  readonly position?: number;
  /**
  * The public description of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#public_description Service#public_description}
  */
  readonly publicDescription?: string;
  /**
  * Services dependent on this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#service_ids Service#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * The Service Now CI sys id associated to this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#service_now_ci_sys_id Service#service_now_ci_sys_id}
  */
  readonly serviceNowCiSysId?: string;
  /**
  * The slug of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#slug Service#slug}
  */
  readonly slug?: string;
  /**
  * alert_broadcast_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#alert_broadcast_channel Service#alert_broadcast_channel}
  */
  readonly alertBroadcastChannel?: ServiceAlertBroadcastChannel;
  /**
  * incident_broadcast_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#incident_broadcast_channel Service#incident_broadcast_channel}
  */
  readonly incidentBroadcastChannel?: ServiceIncidentBroadcastChannel;
  /**
  * slack_aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#slack_aliases Service#slack_aliases}
  */
  readonly slackAliases?: ServiceSlackAliases[] | cdktf.IResolvable;
  /**
  * slack_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#slack_channels Service#slack_channels}
  */
  readonly slackChannels?: ServiceSlackChannels[] | cdktf.IResolvable;
}
export interface ServiceAlertBroadcastChannel {
  /**
  * Slack channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#name Service#name}
  */
  readonly name?: string;
}

export function serviceAlertBroadcastChannelToTerraform(struct?: ServiceAlertBroadcastChannelOutputReference | ServiceAlertBroadcastChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceAlertBroadcastChannelToHclTerraform(struct?: ServiceAlertBroadcastChannelOutputReference | ServiceAlertBroadcastChannel): any {
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

export class ServiceAlertBroadcastChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAlertBroadcastChannel | undefined {
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

  public set internalValue(value: ServiceAlertBroadcastChannel | undefined) {
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
export interface ServiceIncidentBroadcastChannel {
  /**
  * Slack channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#name Service#name}
  */
  readonly name?: string;
}

export function serviceIncidentBroadcastChannelToTerraform(struct?: ServiceIncidentBroadcastChannelOutputReference | ServiceIncidentBroadcastChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceIncidentBroadcastChannelToHclTerraform(struct?: ServiceIncidentBroadcastChannelOutputReference | ServiceIncidentBroadcastChannel): any {
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

export class ServiceIncidentBroadcastChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIncidentBroadcastChannel | undefined {
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

  public set internalValue(value: ServiceIncidentBroadcastChannel | undefined) {
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
export interface ServiceSlackAliases {
  /**
  * Slack alias ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#name Service#name}
  */
  readonly name?: string;
}

export function serviceSlackAliasesToTerraform(struct?: ServiceSlackAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceSlackAliasesToHclTerraform(struct?: ServiceSlackAliases | cdktf.IResolvable): any {
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

export class ServiceSlackAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceSlackAliases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceSlackAliases | cdktf.IResolvable | undefined) {
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

export class ServiceSlackAliasesList extends cdktf.ComplexList {
  public internalValue? : ServiceSlackAliases[] | cdktf.IResolvable

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
  public get(index: number): ServiceSlackAliasesOutputReference {
    return new ServiceSlackAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceSlackChannels {
  /**
  * Slack channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#name Service#name}
  */
  readonly name?: string;
}

export function serviceSlackChannelsToTerraform(struct?: ServiceSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceSlackChannelsToHclTerraform(struct?: ServiceSlackChannels | cdktf.IResolvable): any {
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

export class ServiceSlackChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceSlackChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceSlackChannels | cdktf.IResolvable | undefined) {
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

export class ServiceSlackChannelsList extends cdktf.ComplexList {
  public internalValue? : ServiceSlackChannels[] | cdktf.IResolvable

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
  public get(index: number): ServiceSlackChannelsOutputReference {
    return new ServiceSlackChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service rootly_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/service rootly_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_service',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertBroadcastEnabled = config.alertBroadcastEnabled;
    this._alertUrgencyId = config.alertUrgencyId;
    this._alertsEmailAddress = config.alertsEmailAddress;
    this._alertsEmailEnabled = config.alertsEmailEnabled;
    this._backstageId = config.backstageId;
    this._color = config.color;
    this._cortexId = config.cortexId;
    this._description = config.description;
    this._environmentIds = config.environmentIds;
    this._escalationPolicyId = config.escalationPolicyId;
    this._externalId = config.externalId;
    this._githubRepositoryBranch = config.githubRepositoryBranch;
    this._githubRepositoryName = config.githubRepositoryName;
    this._gitlabRepositoryBranch = config.gitlabRepositoryBranch;
    this._gitlabRepositoryName = config.gitlabRepositoryName;
    this._id = config.id;
    this._incidentBroadcastEnabled = config.incidentBroadcastEnabled;
    this._name = config.name;
    this._notifyEmails = config.notifyEmails;
    this._opsgenieId = config.opsgenieId;
    this._ownerGroupIds = config.ownerGroupIds;
    this._ownerUserIds = config.ownerUserIds;
    this._pagerdutyId = config.pagerdutyId;
    this._position = config.position;
    this._publicDescription = config.publicDescription;
    this._serviceIds = config.serviceIds;
    this._serviceNowCiSysId = config.serviceNowCiSysId;
    this._slug = config.slug;
    this._alertBroadcastChannel.internalValue = config.alertBroadcastChannel;
    this._incidentBroadcastChannel.internalValue = config.incidentBroadcastChannel;
    this._slackAliases.internalValue = config.slackAliases;
    this._slackChannels.internalValue = config.slackChannels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // backstage_id - computed: false, optional: true, required: false
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

  // cortex_id - computed: false, optional: true, required: false
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

  // environment_ids - computed: false, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return this.getListAttribute('environment_ids');
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
  }

  // escalation_policy_id - computed: true, optional: true, required: false
  private _escalationPolicyId?: string; 
  public get escalationPolicyId() {
    return this.getStringAttribute('escalation_policy_id');
  }
  public set escalationPolicyId(value: string) {
    this._escalationPolicyId = value;
  }
  public resetEscalationPolicyId() {
    this._escalationPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyIdInput() {
    return this._escalationPolicyId;
  }

  // external_id - computed: false, optional: true, required: false
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

  // github_repository_branch - computed: true, optional: true, required: false
  private _githubRepositoryBranch?: string; 
  public get githubRepositoryBranch() {
    return this.getStringAttribute('github_repository_branch');
  }
  public set githubRepositoryBranch(value: string) {
    this._githubRepositoryBranch = value;
  }
  public resetGithubRepositoryBranch() {
    this._githubRepositoryBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubRepositoryBranchInput() {
    return this._githubRepositoryBranch;
  }

  // github_repository_name - computed: true, optional: true, required: false
  private _githubRepositoryName?: string; 
  public get githubRepositoryName() {
    return this.getStringAttribute('github_repository_name');
  }
  public set githubRepositoryName(value: string) {
    this._githubRepositoryName = value;
  }
  public resetGithubRepositoryName() {
    this._githubRepositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubRepositoryNameInput() {
    return this._githubRepositoryName;
  }

  // gitlab_repository_branch - computed: true, optional: true, required: false
  private _gitlabRepositoryBranch?: string; 
  public get gitlabRepositoryBranch() {
    return this.getStringAttribute('gitlab_repository_branch');
  }
  public set gitlabRepositoryBranch(value: string) {
    this._gitlabRepositoryBranch = value;
  }
  public resetGitlabRepositoryBranch() {
    this._gitlabRepositoryBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabRepositoryBranchInput() {
    return this._gitlabRepositoryBranch;
  }

  // gitlab_repository_name - computed: true, optional: true, required: false
  private _gitlabRepositoryName?: string; 
  public get gitlabRepositoryName() {
    return this.getStringAttribute('gitlab_repository_name');
  }
  public set gitlabRepositoryName(value: string) {
    this._gitlabRepositoryName = value;
  }
  public resetGitlabRepositoryName() {
    this._gitlabRepositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabRepositoryNameInput() {
    return this._gitlabRepositoryName;
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

  // opsgenie_id - computed: false, optional: true, required: false
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

  // owner_group_ids - computed: false, optional: true, required: false
  private _ownerGroupIds?: string[]; 
  public get ownerGroupIds() {
    return this.getListAttribute('owner_group_ids');
  }
  public set ownerGroupIds(value: string[]) {
    this._ownerGroupIds = value;
  }
  public resetOwnerGroupIds() {
    this._ownerGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerGroupIdsInput() {
    return this._ownerGroupIds;
  }

  // owner_user_ids - computed: false, optional: true, required: false
  private _ownerUserIds?: number[]; 
  public get ownerUserIds() {
    return this.getNumberListAttribute('owner_user_ids');
  }
  public set ownerUserIds(value: number[]) {
    this._ownerUserIds = value;
  }
  public resetOwnerUserIds() {
    this._ownerUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserIdsInput() {
    return this._ownerUserIds;
  }

  // pagerduty_id - computed: false, optional: true, required: false
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

  // public_description - computed: true, optional: true, required: false
  private _publicDescription?: string; 
  public get publicDescription() {
    return this.getStringAttribute('public_description');
  }
  public set publicDescription(value: string) {
    this._publicDescription = value;
  }
  public resetPublicDescription() {
    this._publicDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDescriptionInput() {
    return this._publicDescription;
  }

  // service_ids - computed: false, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return this.getListAttribute('service_ids');
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // service_now_ci_sys_id - computed: false, optional: true, required: false
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

  // alert_broadcast_channel - computed: false, optional: true, required: false
  private _alertBroadcastChannel = new ServiceAlertBroadcastChannelOutputReference(this, "alert_broadcast_channel");
  public get alertBroadcastChannel() {
    return this._alertBroadcastChannel;
  }
  public putAlertBroadcastChannel(value: ServiceAlertBroadcastChannel) {
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
  private _incidentBroadcastChannel = new ServiceIncidentBroadcastChannelOutputReference(this, "incident_broadcast_channel");
  public get incidentBroadcastChannel() {
    return this._incidentBroadcastChannel;
  }
  public putIncidentBroadcastChannel(value: ServiceIncidentBroadcastChannel) {
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
  private _slackAliases = new ServiceSlackAliasesList(this, "slack_aliases", false);
  public get slackAliases() {
    return this._slackAliases;
  }
  public putSlackAliases(value: ServiceSlackAliases[] | cdktf.IResolvable) {
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
  private _slackChannels = new ServiceSlackChannelsList(this, "slack_channels", false);
  public get slackChannels() {
    return this._slackChannels;
  }
  public putSlackChannels(value: ServiceSlackChannels[] | cdktf.IResolvable) {
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
      alert_broadcast_enabled: cdktf.booleanToTerraform(this._alertBroadcastEnabled),
      alert_urgency_id: cdktf.stringToTerraform(this._alertUrgencyId),
      alerts_email_address: cdktf.stringToTerraform(this._alertsEmailAddress),
      alerts_email_enabled: cdktf.booleanToTerraform(this._alertsEmailEnabled),
      backstage_id: cdktf.stringToTerraform(this._backstageId),
      color: cdktf.stringToTerraform(this._color),
      cortex_id: cdktf.stringToTerraform(this._cortexId),
      description: cdktf.stringToTerraform(this._description),
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      escalation_policy_id: cdktf.stringToTerraform(this._escalationPolicyId),
      external_id: cdktf.stringToTerraform(this._externalId),
      github_repository_branch: cdktf.stringToTerraform(this._githubRepositoryBranch),
      github_repository_name: cdktf.stringToTerraform(this._githubRepositoryName),
      gitlab_repository_branch: cdktf.stringToTerraform(this._gitlabRepositoryBranch),
      gitlab_repository_name: cdktf.stringToTerraform(this._gitlabRepositoryName),
      id: cdktf.stringToTerraform(this._id),
      incident_broadcast_enabled: cdktf.booleanToTerraform(this._incidentBroadcastEnabled),
      name: cdktf.stringToTerraform(this._name),
      notify_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyEmails),
      opsgenie_id: cdktf.stringToTerraform(this._opsgenieId),
      owner_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ownerGroupIds),
      owner_user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ownerUserIds),
      pagerduty_id: cdktf.stringToTerraform(this._pagerdutyId),
      position: cdktf.numberToTerraform(this._position),
      public_description: cdktf.stringToTerraform(this._publicDescription),
      service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIds),
      service_now_ci_sys_id: cdktf.stringToTerraform(this._serviceNowCiSysId),
      slug: cdktf.stringToTerraform(this._slug),
      alert_broadcast_channel: serviceAlertBroadcastChannelToTerraform(this._alertBroadcastChannel.internalValue),
      incident_broadcast_channel: serviceIncidentBroadcastChannelToTerraform(this._incidentBroadcastChannel.internalValue),
      slack_aliases: cdktf.listMapper(serviceSlackAliasesToTerraform, true)(this._slackAliases.internalValue),
      slack_channels: cdktf.listMapper(serviceSlackChannelsToTerraform, true)(this._slackChannels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      escalation_policy_id: {
        value: cdktf.stringToHclTerraform(this._escalationPolicyId),
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
      github_repository_branch: {
        value: cdktf.stringToHclTerraform(this._githubRepositoryBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_repository_name: {
        value: cdktf.stringToHclTerraform(this._githubRepositoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab_repository_branch: {
        value: cdktf.stringToHclTerraform(this._gitlabRepositoryBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab_repository_name: {
        value: cdktf.stringToHclTerraform(this._gitlabRepositoryName),
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
      owner_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ownerGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      owner_user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ownerUserIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      pagerduty_id: {
        value: cdktf.stringToHclTerraform(this._pagerdutyId),
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
      public_description: {
        value: cdktf.stringToHclTerraform(this._publicDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      alert_broadcast_channel: {
        value: serviceAlertBroadcastChannelToHclTerraform(this._alertBroadcastChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAlertBroadcastChannelList",
      },
      incident_broadcast_channel: {
        value: serviceIncidentBroadcastChannelToHclTerraform(this._incidentBroadcastChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIncidentBroadcastChannelList",
      },
      slack_aliases: {
        value: cdktf.listMapperHcl(serviceSlackAliasesToHclTerraform, true)(this._slackAliases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceSlackAliasesList",
      },
      slack_channels: {
        value: cdktf.listMapperHcl(serviceSlackChannelsToHclTerraform, true)(this._slackChannels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceSlackChannelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
