// https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IssueAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Trigger actions when an event is captured by Sentry and `any` or `all` of the specified conditions happen. Valid values are: `all`, and `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#action_match IssueAlert#action_match}
  */
  readonly actionMatch: string;
  /**
  * **Deprecated** in favor of `actions_v2`. A list of actions that take place when all required conditions and filters for the rule are met. In JSON string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#actions IssueAlert#actions}
  */
  readonly actions?: string;
  /**
  * A list of actions that take place when all required conditions and filters for the rule are met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#actions_v2 IssueAlert#actions_v2}
  */
  readonly actionsV2?: IssueAlertActionsV2[] | cdktf.IResolvable;
  /**
  * **Deprecated** in favor of `conditions_v2`. A list of triggers that determine when the rule fires. In JSON string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#conditions IssueAlert#conditions}
  */
  readonly conditions?: string;
  /**
  * A list of triggers that determine when the rule fires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#conditions_v2 IssueAlert#conditions_v2}
  */
  readonly conditionsV2?: IssueAlertConditionsV2[] | cdktf.IResolvable;
  /**
  * Perform issue alert in a specific environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#environment IssueAlert#environment}
  */
  readonly environment?: string;
  /**
  * A string determining which filters need to be true before any actions take place. Required when a value is provided for `filters`. Valid values are: `all`, `any`, and `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#filter_match IssueAlert#filter_match}
  */
  readonly filterMatch?: string;
  /**
  * **Deprecated** in favor of `filters_v2`. A list of filters that determine if a rule fires after the necessary conditions have been met. In JSON string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#filters IssueAlert#filters}
  */
  readonly filters?: string;
  /**
  * A list of filters that determine if a rule fires after the necessary conditions have been met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#filters_v2 IssueAlert#filters_v2}
  */
  readonly filtersV2?: IssueAlertFiltersV2[] | cdktf.IResolvable;
  /**
  * Perform actions at most once every `X` minutes for this issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#frequency IssueAlert#frequency}
  */
  readonly frequency: number;
  /**
  * The issue alert name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#name IssueAlert#name}
  */
  readonly name: string;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#organization IssueAlert#organization}
  */
  readonly organization: string;
  /**
  * The ID of the team or user that owns the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#owner IssueAlert#owner}
  */
  readonly owner?: string;
  /**
  * The project of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#project IssueAlert#project}
  */
  readonly project: string;
}
export interface IssueAlertActionsV2AzureDevopsCreateTicket {
  /**
  * The integration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#integration IssueAlert#integration}
  */
  readonly integration: string;
  /**
  * The ID of the Azure DevOps project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#project IssueAlert#project}
  */
  readonly project: string;
  /**
  * The type of work item to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#work_item_type IssueAlert#work_item_type}
  */
  readonly workItemType: string;
}

export function issueAlertActionsV2AzureDevopsCreateTicketToTerraform(struct?: IssueAlertActionsV2AzureDevopsCreateTicket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration: cdktf.stringToTerraform(struct!.integration),
    project: cdktf.stringToTerraform(struct!.project),
    work_item_type: cdktf.stringToTerraform(struct!.workItemType),
  }
}


export function issueAlertActionsV2AzureDevopsCreateTicketToHclTerraform(struct?: IssueAlertActionsV2AzureDevopsCreateTicket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration: {
      value: cdktf.stringToHclTerraform(struct!.integration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_item_type: {
      value: cdktf.stringToHclTerraform(struct!.workItemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2AzureDevopsCreateTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2AzureDevopsCreateTicket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integration !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._workItemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workItemType = this._workItemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2AzureDevopsCreateTicket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integration = undefined;
      this._project = undefined;
      this._workItemType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integration = value.integration;
      this._project = value.project;
      this._workItemType = value.workItemType;
    }
  }

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // work_item_type - computed: false, optional: false, required: true
  private _workItemType?: string; 
  public get workItemType() {
    return this.getStringAttribute('work_item_type');
  }
  public set workItemType(value: string) {
    this._workItemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemTypeInput() {
    return this._workItemType;
  }
}
export interface IssueAlertActionsV2DiscordNotifyService {
  /**
  * The ID of the channel to send the notification to. You must enter either a channel ID or a channel URL, not a channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#channel_id IssueAlert#channel_id}
  */
  readonly channelId: string;
  /**
  * The integration ID associated with the Discord server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#server IssueAlert#server}
  */
  readonly server: string;
  /**
  * A string of tags to show in the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#tags IssueAlert#tags}
  */
  readonly tags?: string[];
}

export function issueAlertActionsV2DiscordNotifyServiceToTerraform(struct?: IssueAlertActionsV2DiscordNotifyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    server: cdktf.stringToTerraform(struct!.server),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function issueAlertActionsV2DiscordNotifyServiceToHclTerraform(struct?: IssueAlertActionsV2DiscordNotifyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_id: {
      value: cdktf.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2DiscordNotifyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2DiscordNotifyService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2DiscordNotifyService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelId = undefined;
      this._server = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelId = value.channelId;
      this._server = value.server;
      this._tags = value.tags;
    }
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface IssueAlertActionsV2GithubCreateTicket {
  /**
  * The GitHub user to assign the issue to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#assignee IssueAlert#assignee}
  */
  readonly assignee?: string;
  /**
  * The integration ID associated with GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#integration IssueAlert#integration}
  */
  readonly integration: string;
  /**
  * A list of labels to assign to the issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#labels IssueAlert#labels}
  */
  readonly labels?: string[];
  /**
  * The name of the repository to create the issue in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#repo IssueAlert#repo}
  */
  readonly repo: string;
}

export function issueAlertActionsV2GithubCreateTicketToTerraform(struct?: IssueAlertActionsV2GithubCreateTicket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignee: cdktf.stringToTerraform(struct!.assignee),
    integration: cdktf.stringToTerraform(struct!.integration),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function issueAlertActionsV2GithubCreateTicketToHclTerraform(struct?: IssueAlertActionsV2GithubCreateTicket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignee: {
      value: cdktf.stringToHclTerraform(struct!.assignee),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration: {
      value: cdktf.stringToHclTerraform(struct!.integration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2GithubCreateTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2GithubCreateTicket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignee !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignee = this._assignee;
    }
    if (this._integration !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2GithubCreateTicket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignee = undefined;
      this._integration = undefined;
      this._labels = undefined;
      this._repo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignee = value.assignee;
      this._integration = value.integration;
      this._labels = value.labels;
      this._repo = value.repo;
    }
  }

  // assignee - computed: false, optional: true, required: false
  private _assignee?: string; 
  public get assignee() {
    return this.getStringAttribute('assignee');
  }
  public set assignee(value: string) {
    this._assignee = value;
  }
  public resetAssignee() {
    this._assignee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeInput() {
    return this._assignee;
  }

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface IssueAlertActionsV2GithubEnterpriseCreateTicket {
  /**
  * The GitHub user to assign the issue to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#assignee IssueAlert#assignee}
  */
  readonly assignee?: string;
  /**
  * The integration ID associated with GitHub Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#integration IssueAlert#integration}
  */
  readonly integration: string;
  /**
  * A list of labels to assign to the issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#labels IssueAlert#labels}
  */
  readonly labels?: string[];
  /**
  * The name of the repository to create the issue in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#repo IssueAlert#repo}
  */
  readonly repo: string;
}

export function issueAlertActionsV2GithubEnterpriseCreateTicketToTerraform(struct?: IssueAlertActionsV2GithubEnterpriseCreateTicket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignee: cdktf.stringToTerraform(struct!.assignee),
    integration: cdktf.stringToTerraform(struct!.integration),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function issueAlertActionsV2GithubEnterpriseCreateTicketToHclTerraform(struct?: IssueAlertActionsV2GithubEnterpriseCreateTicket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignee: {
      value: cdktf.stringToHclTerraform(struct!.assignee),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration: {
      value: cdktf.stringToHclTerraform(struct!.integration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2GithubEnterpriseCreateTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2GithubEnterpriseCreateTicket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignee !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignee = this._assignee;
    }
    if (this._integration !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2GithubEnterpriseCreateTicket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignee = undefined;
      this._integration = undefined;
      this._labels = undefined;
      this._repo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignee = value.assignee;
      this._integration = value.integration;
      this._labels = value.labels;
      this._repo = value.repo;
    }
  }

  // assignee - computed: false, optional: true, required: false
  private _assignee?: string; 
  public get assignee() {
    return this.getStringAttribute('assignee');
  }
  public set assignee(value: string) {
    this._assignee = value;
  }
  public resetAssignee() {
    this._assignee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeInput() {
    return this._assignee;
  }

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface IssueAlertActionsV2JiraCreateTicket {
  /**
  * The integration ID associated with Jira.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#integration IssueAlert#integration}
  */
  readonly integration: string;
  /**
  * The ID of the type of issue that the ticket should be created as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#issue_type IssueAlert#issue_type}
  */
  readonly issueType: string;
  /**
  * The ID of the Jira project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#project IssueAlert#project}
  */
  readonly project: string;
}

export function issueAlertActionsV2JiraCreateTicketToTerraform(struct?: IssueAlertActionsV2JiraCreateTicket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration: cdktf.stringToTerraform(struct!.integration),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function issueAlertActionsV2JiraCreateTicketToHclTerraform(struct?: IssueAlertActionsV2JiraCreateTicket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration: {
      value: cdktf.stringToHclTerraform(struct!.integration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_type: {
      value: cdktf.stringToHclTerraform(struct!.issueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2JiraCreateTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2JiraCreateTicket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integration !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2JiraCreateTicket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integration = undefined;
      this._issueType = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integration = value.integration;
      this._issueType = value.issueType;
      this._project = value.project;
    }
  }

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // issue_type - computed: false, optional: false, required: true
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface IssueAlertActionsV2JiraServerCreateTicket {
  /**
  * The integration ID associated with Jira Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#integration IssueAlert#integration}
  */
  readonly integration: string;
  /**
  * The ID of the type of issue that the ticket should be created as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#issue_type IssueAlert#issue_type}
  */
  readonly issueType: string;
  /**
  * The ID of the Jira Server project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#project IssueAlert#project}
  */
  readonly project: string;
}

export function issueAlertActionsV2JiraServerCreateTicketToTerraform(struct?: IssueAlertActionsV2JiraServerCreateTicket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration: cdktf.stringToTerraform(struct!.integration),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function issueAlertActionsV2JiraServerCreateTicketToHclTerraform(struct?: IssueAlertActionsV2JiraServerCreateTicket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration: {
      value: cdktf.stringToHclTerraform(struct!.integration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_type: {
      value: cdktf.stringToHclTerraform(struct!.issueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2JiraServerCreateTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2JiraServerCreateTicket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integration !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2JiraServerCreateTicket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integration = undefined;
      this._issueType = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integration = value.integration;
      this._issueType = value.issueType;
      this._project = value.project;
    }
  }

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // issue_type - computed: false, optional: false, required: true
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface IssueAlertActionsV2MsteamsNotifyService {
  /**
  * The name of the channel to send the notification to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#channel IssueAlert#channel}
  */
  readonly channel: string;
  /**
  * The integration ID associated with the Microsoft Teams team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#team IssueAlert#team}
  */
  readonly team: string;
}

export function issueAlertActionsV2MsteamsNotifyServiceToTerraform(struct?: IssueAlertActionsV2MsteamsNotifyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function issueAlertActionsV2MsteamsNotifyServiceToHclTerraform(struct?: IssueAlertActionsV2MsteamsNotifyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2MsteamsNotifyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2MsteamsNotifyService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2MsteamsNotifyService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._team = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._team = value.team;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // team - computed: false, optional: false, required: true
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}
export interface IssueAlertActionsV2NotifyEmail {
  /**
  * Who the notification should be sent to if there are no suggested assignees. Valid values are: `AllMembers`, `ActiveMembers`, and `NoOne`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#fallthrough_type IssueAlert#fallthrough_type}
  */
  readonly fallthroughType?: string;
  /**
  * The ID of the Member or Team the notification should be sent to. Only required when `target_type` is `Team` or `Member`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#target_identifier IssueAlert#target_identifier}
  */
  readonly targetIdentifier?: string;
  /**
  * Valid values are: `IssueOwners`, `Team`, and `Member`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#target_type IssueAlert#target_type}
  */
  readonly targetType: string;
}

export function issueAlertActionsV2NotifyEmailToTerraform(struct?: IssueAlertActionsV2NotifyEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallthrough_type: cdktf.stringToTerraform(struct!.fallthroughType),
    target_identifier: cdktf.stringToTerraform(struct!.targetIdentifier),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function issueAlertActionsV2NotifyEmailToHclTerraform(struct?: IssueAlertActionsV2NotifyEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallthrough_type: {
      value: cdktf.stringToHclTerraform(struct!.fallthroughType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_identifier: {
      value: cdktf.stringToHclTerraform(struct!.targetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2NotifyEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2NotifyEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallthroughType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallthroughType = this._fallthroughType;
    }
    if (this._targetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIdentifier = this._targetIdentifier;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2NotifyEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallthroughType = undefined;
      this._targetIdentifier = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallthroughType = value.fallthroughType;
      this._targetIdentifier = value.targetIdentifier;
      this._targetType = value.targetType;
    }
  }

  // fallthrough_type - computed: false, optional: true, required: false
  private _fallthroughType?: string; 
  public get fallthroughType() {
    return this.getStringAttribute('fallthrough_type');
  }
  public set fallthroughType(value: string) {
    this._fallthroughType = value;
  }
  public resetFallthroughType() {
    this._fallthroughType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallthroughTypeInput() {
    return this._fallthroughType;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_identifier - computed: false, optional: true, required: false
  private _targetIdentifier?: string; 
  public get targetIdentifier() {
    return this.getStringAttribute('target_identifier');
  }
  public set targetIdentifier(value: string) {
    this._targetIdentifier = value;
  }
  public resetTargetIdentifier() {
    this._targetIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdentifierInput() {
    return this._targetIdentifier;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface IssueAlertActionsV2NotifyEvent {
}

export function issueAlertActionsV2NotifyEventToTerraform(struct?: IssueAlertActionsV2NotifyEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function issueAlertActionsV2NotifyEventToHclTerraform(struct?: IssueAlertActionsV2NotifyEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IssueAlertActionsV2NotifyEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2NotifyEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2NotifyEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface IssueAlertActionsV2NotifyEventSentryApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#sentry_app_installation_uuid IssueAlert#sentry_app_installation_uuid}
  */
  readonly sentryAppInstallationUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#settings IssueAlert#settings}
  */
  readonly settings?: { [key: string]: string };
}

export function issueAlertActionsV2NotifyEventSentryAppToTerraform(struct?: IssueAlertActionsV2NotifyEventSentryApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sentry_app_installation_uuid: cdktf.stringToTerraform(struct!.sentryAppInstallationUuid),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
  }
}


export function issueAlertActionsV2NotifyEventSentryAppToHclTerraform(struct?: IssueAlertActionsV2NotifyEventSentryApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sentry_app_installation_uuid: {
      value: cdktf.stringToHclTerraform(struct!.sentryAppInstallationUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2NotifyEventSentryAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2NotifyEventSentryApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sentryAppInstallationUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentryAppInstallationUuid = this._sentryAppInstallationUuid;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2NotifyEventSentryApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sentryAppInstallationUuid = undefined;
      this._settings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sentryAppInstallationUuid = value.sentryAppInstallationUuid;
      this._settings = value.settings;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sentry_app_installation_uuid - computed: false, optional: false, required: true
  private _sentryAppInstallationUuid?: string; 
  public get sentryAppInstallationUuid() {
    return this.getStringAttribute('sentry_app_installation_uuid');
  }
  public set sentryAppInstallationUuid(value: string) {
    this._sentryAppInstallationUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sentryAppInstallationUuidInput() {
    return this._sentryAppInstallationUuid;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }
}
export interface IssueAlertActionsV2NotifyEventService {
  /**
  * The slug of the integration service. Sourced from `https://terraform-provider-sentry.sentry.io/settings/developer-settings/<service>/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#service IssueAlert#service}
  */
  readonly service: string;
}

export function issueAlertActionsV2NotifyEventServiceToTerraform(struct?: IssueAlertActionsV2NotifyEventService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function issueAlertActionsV2NotifyEventServiceToHclTerraform(struct?: IssueAlertActionsV2NotifyEventService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2NotifyEventServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2NotifyEventService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2NotifyEventService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service = value.service;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface IssueAlertActionsV2OpsgenieNotifyTeam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#account IssueAlert#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#priority IssueAlert#priority}
  */
  readonly priority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#team IssueAlert#team}
  */
  readonly team: string;
}

export function issueAlertActionsV2OpsgenieNotifyTeamToTerraform(struct?: IssueAlertActionsV2OpsgenieNotifyTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    priority: cdktf.stringToTerraform(struct!.priority),
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function issueAlertActionsV2OpsgenieNotifyTeamToHclTerraform(struct?: IssueAlertActionsV2OpsgenieNotifyTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2OpsgenieNotifyTeamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2OpsgenieNotifyTeam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2OpsgenieNotifyTeam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._priority = undefined;
      this._team = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._priority = value.priority;
      this._team = value.team;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // team - computed: false, optional: false, required: true
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}
export interface IssueAlertActionsV2PagerdutyNotifyService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#account IssueAlert#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#service IssueAlert#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#severity IssueAlert#severity}
  */
  readonly severity: string;
}

export function issueAlertActionsV2PagerdutyNotifyServiceToTerraform(struct?: IssueAlertActionsV2PagerdutyNotifyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    service: cdktf.stringToTerraform(struct!.service),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function issueAlertActionsV2PagerdutyNotifyServiceToHclTerraform(struct?: IssueAlertActionsV2PagerdutyNotifyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2PagerdutyNotifyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2PagerdutyNotifyService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2PagerdutyNotifyService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._service = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._service = value.service;
      this._severity = value.severity;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface IssueAlertActionsV2SlackNotifyService {
  /**
  * The name of the channel to send the notification to (e.g., #critical, Jane Schmidt).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#channel IssueAlert#channel}
  */
  readonly channel: string;
  /**
  * Text to show alongside the notification. To @ a user, include their user id like `@<USER_ID>`. To include a clickable link, format the link and title like `<http://example.com|Click Here>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#notes IssueAlert#notes}
  */
  readonly notes?: string;
  /**
  * A string of tags to show in the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#tags IssueAlert#tags}
  */
  readonly tags?: string[];
  /**
  * The integration ID associated with the Slack workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#workspace IssueAlert#workspace}
  */
  readonly workspace: string;
}

export function issueAlertActionsV2SlackNotifyServiceToTerraform(struct?: IssueAlertActionsV2SlackNotifyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    notes: cdktf.stringToTerraform(struct!.notes),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    workspace: cdktf.stringToTerraform(struct!.workspace),
  }
}


export function issueAlertActionsV2SlackNotifyServiceToHclTerraform(struct?: IssueAlertActionsV2SlackNotifyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    workspace: {
      value: cdktf.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2SlackNotifyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertActionsV2SlackNotifyService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2SlackNotifyService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._notes = undefined;
      this._tags = undefined;
      this._workspace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._notes = value.notes;
      this._tags = value.tags;
      this._workspace = value.workspace;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }
}
export interface IssueAlertActionsV2 {
  /**
  * Create an Azure DevOps work item in `integration`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#azure_devops_create_ticket IssueAlert#azure_devops_create_ticket}
  */
  readonly azureDevopsCreateTicket?: IssueAlertActionsV2AzureDevopsCreateTicket;
  /**
  * Send a notification to the `server` Discord server in the channel with ID or URL: `channel_id` and show tags `tags` in the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#discord_notify_service IssueAlert#discord_notify_service}
  */
  readonly discordNotifyService?: IssueAlertActionsV2DiscordNotifyService;
  /**
  * Create a GitHub issue in `integration`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#github_create_ticket IssueAlert#github_create_ticket}
  */
  readonly githubCreateTicket?: IssueAlertActionsV2GithubCreateTicket;
  /**
  * Create a GitHub Enterprise issue in `integration`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#github_enterprise_create_ticket IssueAlert#github_enterprise_create_ticket}
  */
  readonly githubEnterpriseCreateTicket?: IssueAlertActionsV2GithubEnterpriseCreateTicket;
  /**
  * Create a Jira issue in `integration`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#jira_create_ticket IssueAlert#jira_create_ticket}
  */
  readonly jiraCreateTicket?: IssueAlertActionsV2JiraCreateTicket;
  /**
  * Create a Jira Server issue in `integration`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#jira_server_create_ticket IssueAlert#jira_server_create_ticket}
  */
  readonly jiraServerCreateTicket?: IssueAlertActionsV2JiraServerCreateTicket;
  /**
  * Send a notification to the `team` Team to `channel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#msteams_notify_service IssueAlert#msteams_notify_service}
  */
  readonly msteamsNotifyService?: IssueAlertActionsV2MsteamsNotifyService;
  /**
  * Send a notification to `target_type` and if none can be found then send a notification to `fallthrough_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#notify_email IssueAlert#notify_email}
  */
  readonly notifyEmail?: IssueAlertActionsV2NotifyEmail;
  /**
  * Send a notification to all legacy integrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#notify_event IssueAlert#notify_event}
  */
  readonly notifyEvent?: IssueAlertActionsV2NotifyEvent;
  /**
  * Send a notification to a Sentry app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#notify_event_sentry_app IssueAlert#notify_event_sentry_app}
  */
  readonly notifyEventSentryApp?: IssueAlertActionsV2NotifyEventSentryApp;
  /**
  * Send a notification via an integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#notify_event_service IssueAlert#notify_event_service}
  */
  readonly notifyEventService?: IssueAlertActionsV2NotifyEventService;
  /**
  * Send a notification to Opsgenie account `account` and team `team` with `priority` priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#opsgenie_notify_team IssueAlert#opsgenie_notify_team}
  */
  readonly opsgenieNotifyTeam?: IssueAlertActionsV2OpsgenieNotifyTeam;
  /**
  * Send a notification to PagerDuty account `account` and service `service` with `severity` severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#pagerduty_notify_service IssueAlert#pagerduty_notify_service}
  */
  readonly pagerdutyNotifyService?: IssueAlertActionsV2PagerdutyNotifyService;
  /**
  * Send a notification to the `workspace` Slack workspace to `channel` (optionally, an ID: `channel_id`) and show tags `tags` and notes `notes` in notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#slack_notify_service IssueAlert#slack_notify_service}
  */
  readonly slackNotifyService?: IssueAlertActionsV2SlackNotifyService;
}

export function issueAlertActionsV2ToTerraform(struct?: IssueAlertActionsV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_devops_create_ticket: issueAlertActionsV2AzureDevopsCreateTicketToTerraform(struct!.azureDevopsCreateTicket),
    discord_notify_service: issueAlertActionsV2DiscordNotifyServiceToTerraform(struct!.discordNotifyService),
    github_create_ticket: issueAlertActionsV2GithubCreateTicketToTerraform(struct!.githubCreateTicket),
    github_enterprise_create_ticket: issueAlertActionsV2GithubEnterpriseCreateTicketToTerraform(struct!.githubEnterpriseCreateTicket),
    jira_create_ticket: issueAlertActionsV2JiraCreateTicketToTerraform(struct!.jiraCreateTicket),
    jira_server_create_ticket: issueAlertActionsV2JiraServerCreateTicketToTerraform(struct!.jiraServerCreateTicket),
    msteams_notify_service: issueAlertActionsV2MsteamsNotifyServiceToTerraform(struct!.msteamsNotifyService),
    notify_email: issueAlertActionsV2NotifyEmailToTerraform(struct!.notifyEmail),
    notify_event: issueAlertActionsV2NotifyEventToTerraform(struct!.notifyEvent),
    notify_event_sentry_app: issueAlertActionsV2NotifyEventSentryAppToTerraform(struct!.notifyEventSentryApp),
    notify_event_service: issueAlertActionsV2NotifyEventServiceToTerraform(struct!.notifyEventService),
    opsgenie_notify_team: issueAlertActionsV2OpsgenieNotifyTeamToTerraform(struct!.opsgenieNotifyTeam),
    pagerduty_notify_service: issueAlertActionsV2PagerdutyNotifyServiceToTerraform(struct!.pagerdutyNotifyService),
    slack_notify_service: issueAlertActionsV2SlackNotifyServiceToTerraform(struct!.slackNotifyService),
  }
}


export function issueAlertActionsV2ToHclTerraform(struct?: IssueAlertActionsV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_devops_create_ticket: {
      value: issueAlertActionsV2AzureDevopsCreateTicketToHclTerraform(struct!.azureDevopsCreateTicket),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2AzureDevopsCreateTicket",
    },
    discord_notify_service: {
      value: issueAlertActionsV2DiscordNotifyServiceToHclTerraform(struct!.discordNotifyService),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2DiscordNotifyService",
    },
    github_create_ticket: {
      value: issueAlertActionsV2GithubCreateTicketToHclTerraform(struct!.githubCreateTicket),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2GithubCreateTicket",
    },
    github_enterprise_create_ticket: {
      value: issueAlertActionsV2GithubEnterpriseCreateTicketToHclTerraform(struct!.githubEnterpriseCreateTicket),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2GithubEnterpriseCreateTicket",
    },
    jira_create_ticket: {
      value: issueAlertActionsV2JiraCreateTicketToHclTerraform(struct!.jiraCreateTicket),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2JiraCreateTicket",
    },
    jira_server_create_ticket: {
      value: issueAlertActionsV2JiraServerCreateTicketToHclTerraform(struct!.jiraServerCreateTicket),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2JiraServerCreateTicket",
    },
    msteams_notify_service: {
      value: issueAlertActionsV2MsteamsNotifyServiceToHclTerraform(struct!.msteamsNotifyService),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2MsteamsNotifyService",
    },
    notify_email: {
      value: issueAlertActionsV2NotifyEmailToHclTerraform(struct!.notifyEmail),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2NotifyEmail",
    },
    notify_event: {
      value: issueAlertActionsV2NotifyEventToHclTerraform(struct!.notifyEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2NotifyEvent",
    },
    notify_event_sentry_app: {
      value: issueAlertActionsV2NotifyEventSentryAppToHclTerraform(struct!.notifyEventSentryApp),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2NotifyEventSentryApp",
    },
    notify_event_service: {
      value: issueAlertActionsV2NotifyEventServiceToHclTerraform(struct!.notifyEventService),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2NotifyEventService",
    },
    opsgenie_notify_team: {
      value: issueAlertActionsV2OpsgenieNotifyTeamToHclTerraform(struct!.opsgenieNotifyTeam),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2OpsgenieNotifyTeam",
    },
    pagerduty_notify_service: {
      value: issueAlertActionsV2PagerdutyNotifyServiceToHclTerraform(struct!.pagerdutyNotifyService),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2PagerdutyNotifyService",
    },
    slack_notify_service: {
      value: issueAlertActionsV2SlackNotifyServiceToHclTerraform(struct!.slackNotifyService),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertActionsV2SlackNotifyService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertActionsV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IssueAlertActionsV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureDevopsCreateTicket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDevopsCreateTicket = this._azureDevopsCreateTicket?.internalValue;
    }
    if (this._discordNotifyService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discordNotifyService = this._discordNotifyService?.internalValue;
    }
    if (this._githubCreateTicket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubCreateTicket = this._githubCreateTicket?.internalValue;
    }
    if (this._githubEnterpriseCreateTicket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubEnterpriseCreateTicket = this._githubEnterpriseCreateTicket?.internalValue;
    }
    if (this._jiraCreateTicket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jiraCreateTicket = this._jiraCreateTicket?.internalValue;
    }
    if (this._jiraServerCreateTicket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jiraServerCreateTicket = this._jiraServerCreateTicket?.internalValue;
    }
    if (this._msteamsNotifyService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msteamsNotifyService = this._msteamsNotifyService?.internalValue;
    }
    if (this._notifyEmail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyEmail = this._notifyEmail?.internalValue;
    }
    if (this._notifyEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyEvent = this._notifyEvent?.internalValue;
    }
    if (this._notifyEventSentryApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyEventSentryApp = this._notifyEventSentryApp?.internalValue;
    }
    if (this._notifyEventService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyEventService = this._notifyEventService?.internalValue;
    }
    if (this._opsgenieNotifyTeam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsgenieNotifyTeam = this._opsgenieNotifyTeam?.internalValue;
    }
    if (this._pagerdutyNotifyService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerdutyNotifyService = this._pagerdutyNotifyService?.internalValue;
    }
    if (this._slackNotifyService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackNotifyService = this._slackNotifyService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertActionsV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureDevopsCreateTicket.internalValue = undefined;
      this._discordNotifyService.internalValue = undefined;
      this._githubCreateTicket.internalValue = undefined;
      this._githubEnterpriseCreateTicket.internalValue = undefined;
      this._jiraCreateTicket.internalValue = undefined;
      this._jiraServerCreateTicket.internalValue = undefined;
      this._msteamsNotifyService.internalValue = undefined;
      this._notifyEmail.internalValue = undefined;
      this._notifyEvent.internalValue = undefined;
      this._notifyEventSentryApp.internalValue = undefined;
      this._notifyEventService.internalValue = undefined;
      this._opsgenieNotifyTeam.internalValue = undefined;
      this._pagerdutyNotifyService.internalValue = undefined;
      this._slackNotifyService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureDevopsCreateTicket.internalValue = value.azureDevopsCreateTicket;
      this._discordNotifyService.internalValue = value.discordNotifyService;
      this._githubCreateTicket.internalValue = value.githubCreateTicket;
      this._githubEnterpriseCreateTicket.internalValue = value.githubEnterpriseCreateTicket;
      this._jiraCreateTicket.internalValue = value.jiraCreateTicket;
      this._jiraServerCreateTicket.internalValue = value.jiraServerCreateTicket;
      this._msteamsNotifyService.internalValue = value.msteamsNotifyService;
      this._notifyEmail.internalValue = value.notifyEmail;
      this._notifyEvent.internalValue = value.notifyEvent;
      this._notifyEventSentryApp.internalValue = value.notifyEventSentryApp;
      this._notifyEventService.internalValue = value.notifyEventService;
      this._opsgenieNotifyTeam.internalValue = value.opsgenieNotifyTeam;
      this._pagerdutyNotifyService.internalValue = value.pagerdutyNotifyService;
      this._slackNotifyService.internalValue = value.slackNotifyService;
    }
  }

  // azure_devops_create_ticket - computed: false, optional: true, required: false
  private _azureDevopsCreateTicket = new IssueAlertActionsV2AzureDevopsCreateTicketOutputReference(this, "azure_devops_create_ticket");
  public get azureDevopsCreateTicket() {
    return this._azureDevopsCreateTicket;
  }
  public putAzureDevopsCreateTicket(value: IssueAlertActionsV2AzureDevopsCreateTicket) {
    this._azureDevopsCreateTicket.internalValue = value;
  }
  public resetAzureDevopsCreateTicket() {
    this._azureDevopsCreateTicket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDevopsCreateTicketInput() {
    return this._azureDevopsCreateTicket.internalValue;
  }

  // discord_notify_service - computed: false, optional: true, required: false
  private _discordNotifyService = new IssueAlertActionsV2DiscordNotifyServiceOutputReference(this, "discord_notify_service");
  public get discordNotifyService() {
    return this._discordNotifyService;
  }
  public putDiscordNotifyService(value: IssueAlertActionsV2DiscordNotifyService) {
    this._discordNotifyService.internalValue = value;
  }
  public resetDiscordNotifyService() {
    this._discordNotifyService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discordNotifyServiceInput() {
    return this._discordNotifyService.internalValue;
  }

  // github_create_ticket - computed: false, optional: true, required: false
  private _githubCreateTicket = new IssueAlertActionsV2GithubCreateTicketOutputReference(this, "github_create_ticket");
  public get githubCreateTicket() {
    return this._githubCreateTicket;
  }
  public putGithubCreateTicket(value: IssueAlertActionsV2GithubCreateTicket) {
    this._githubCreateTicket.internalValue = value;
  }
  public resetGithubCreateTicket() {
    this._githubCreateTicket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubCreateTicketInput() {
    return this._githubCreateTicket.internalValue;
  }

  // github_enterprise_create_ticket - computed: false, optional: true, required: false
  private _githubEnterpriseCreateTicket = new IssueAlertActionsV2GithubEnterpriseCreateTicketOutputReference(this, "github_enterprise_create_ticket");
  public get githubEnterpriseCreateTicket() {
    return this._githubEnterpriseCreateTicket;
  }
  public putGithubEnterpriseCreateTicket(value: IssueAlertActionsV2GithubEnterpriseCreateTicket) {
    this._githubEnterpriseCreateTicket.internalValue = value;
  }
  public resetGithubEnterpriseCreateTicket() {
    this._githubEnterpriseCreateTicket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseCreateTicketInput() {
    return this._githubEnterpriseCreateTicket.internalValue;
  }

  // jira_create_ticket - computed: false, optional: true, required: false
  private _jiraCreateTicket = new IssueAlertActionsV2JiraCreateTicketOutputReference(this, "jira_create_ticket");
  public get jiraCreateTicket() {
    return this._jiraCreateTicket;
  }
  public putJiraCreateTicket(value: IssueAlertActionsV2JiraCreateTicket) {
    this._jiraCreateTicket.internalValue = value;
  }
  public resetJiraCreateTicket() {
    this._jiraCreateTicket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraCreateTicketInput() {
    return this._jiraCreateTicket.internalValue;
  }

  // jira_server_create_ticket - computed: false, optional: true, required: false
  private _jiraServerCreateTicket = new IssueAlertActionsV2JiraServerCreateTicketOutputReference(this, "jira_server_create_ticket");
  public get jiraServerCreateTicket() {
    return this._jiraServerCreateTicket;
  }
  public putJiraServerCreateTicket(value: IssueAlertActionsV2JiraServerCreateTicket) {
    this._jiraServerCreateTicket.internalValue = value;
  }
  public resetJiraServerCreateTicket() {
    this._jiraServerCreateTicket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraServerCreateTicketInput() {
    return this._jiraServerCreateTicket.internalValue;
  }

  // msteams_notify_service - computed: false, optional: true, required: false
  private _msteamsNotifyService = new IssueAlertActionsV2MsteamsNotifyServiceOutputReference(this, "msteams_notify_service");
  public get msteamsNotifyService() {
    return this._msteamsNotifyService;
  }
  public putMsteamsNotifyService(value: IssueAlertActionsV2MsteamsNotifyService) {
    this._msteamsNotifyService.internalValue = value;
  }
  public resetMsteamsNotifyService() {
    this._msteamsNotifyService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msteamsNotifyServiceInput() {
    return this._msteamsNotifyService.internalValue;
  }

  // notify_email - computed: false, optional: true, required: false
  private _notifyEmail = new IssueAlertActionsV2NotifyEmailOutputReference(this, "notify_email");
  public get notifyEmail() {
    return this._notifyEmail;
  }
  public putNotifyEmail(value: IssueAlertActionsV2NotifyEmail) {
    this._notifyEmail.internalValue = value;
  }
  public resetNotifyEmail() {
    this._notifyEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEmailInput() {
    return this._notifyEmail.internalValue;
  }

  // notify_event - computed: false, optional: true, required: false
  private _notifyEvent = new IssueAlertActionsV2NotifyEventOutputReference(this, "notify_event");
  public get notifyEvent() {
    return this._notifyEvent;
  }
  public putNotifyEvent(value: IssueAlertActionsV2NotifyEvent) {
    this._notifyEvent.internalValue = value;
  }
  public resetNotifyEvent() {
    this._notifyEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEventInput() {
    return this._notifyEvent.internalValue;
  }

  // notify_event_sentry_app - computed: false, optional: true, required: false
  private _notifyEventSentryApp = new IssueAlertActionsV2NotifyEventSentryAppOutputReference(this, "notify_event_sentry_app");
  public get notifyEventSentryApp() {
    return this._notifyEventSentryApp;
  }
  public putNotifyEventSentryApp(value: IssueAlertActionsV2NotifyEventSentryApp) {
    this._notifyEventSentryApp.internalValue = value;
  }
  public resetNotifyEventSentryApp() {
    this._notifyEventSentryApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEventSentryAppInput() {
    return this._notifyEventSentryApp.internalValue;
  }

  // notify_event_service - computed: false, optional: true, required: false
  private _notifyEventService = new IssueAlertActionsV2NotifyEventServiceOutputReference(this, "notify_event_service");
  public get notifyEventService() {
    return this._notifyEventService;
  }
  public putNotifyEventService(value: IssueAlertActionsV2NotifyEventService) {
    this._notifyEventService.internalValue = value;
  }
  public resetNotifyEventService() {
    this._notifyEventService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEventServiceInput() {
    return this._notifyEventService.internalValue;
  }

  // opsgenie_notify_team - computed: false, optional: true, required: false
  private _opsgenieNotifyTeam = new IssueAlertActionsV2OpsgenieNotifyTeamOutputReference(this, "opsgenie_notify_team");
  public get opsgenieNotifyTeam() {
    return this._opsgenieNotifyTeam;
  }
  public putOpsgenieNotifyTeam(value: IssueAlertActionsV2OpsgenieNotifyTeam) {
    this._opsgenieNotifyTeam.internalValue = value;
  }
  public resetOpsgenieNotifyTeam() {
    this._opsgenieNotifyTeam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieNotifyTeamInput() {
    return this._opsgenieNotifyTeam.internalValue;
  }

  // pagerduty_notify_service - computed: false, optional: true, required: false
  private _pagerdutyNotifyService = new IssueAlertActionsV2PagerdutyNotifyServiceOutputReference(this, "pagerduty_notify_service");
  public get pagerdutyNotifyService() {
    return this._pagerdutyNotifyService;
  }
  public putPagerdutyNotifyService(value: IssueAlertActionsV2PagerdutyNotifyService) {
    this._pagerdutyNotifyService.internalValue = value;
  }
  public resetPagerdutyNotifyService() {
    this._pagerdutyNotifyService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyNotifyServiceInput() {
    return this._pagerdutyNotifyService.internalValue;
  }

  // slack_notify_service - computed: false, optional: true, required: false
  private _slackNotifyService = new IssueAlertActionsV2SlackNotifyServiceOutputReference(this, "slack_notify_service");
  public get slackNotifyService() {
    return this._slackNotifyService;
  }
  public putSlackNotifyService(value: IssueAlertActionsV2SlackNotifyService) {
    this._slackNotifyService.internalValue = value;
  }
  public resetSlackNotifyService() {
    this._slackNotifyService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackNotifyServiceInput() {
    return this._slackNotifyService.internalValue;
  }
}

export class IssueAlertActionsV2List extends cdktf.ComplexList {
  public internalValue? : IssueAlertActionsV2[] | cdktf.IResolvable

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
  public get(index: number): IssueAlertActionsV2OutputReference {
    return new IssueAlertActionsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IssueAlertConditionsV2EventFrequency {
  /**
  * `m` for minutes, `h` for hours, `d` for days, and `w` for weeks. Valid values are: `5m`, `15m`, `1h`, `1d`, `1w`, and `30d`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#comparison_interval IssueAlert#comparison_interval}
  */
  readonly comparisonInterval?: string;
  /**
  * Valid values are: `count`, and `percent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#comparison_type IssueAlert#comparison_type}
  */
  readonly comparisonType: string;
  /**
  * `m` for minutes, `h` for hours, `d` for days, and `w` for weeks. Valid values are: `1m`, `5m`, `15m`, `1h`, `1d`, `1w`, and `30d`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#interval IssueAlert#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#value IssueAlert#value}
  */
  readonly value: number;
}

export function issueAlertConditionsV2EventFrequencyToTerraform(struct?: IssueAlertConditionsV2EventFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_interval: cdktf.stringToTerraform(struct!.comparisonInterval),
    comparison_type: cdktf.stringToTerraform(struct!.comparisonType),
    interval: cdktf.stringToTerraform(struct!.interval),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function issueAlertConditionsV2EventFrequencyToHclTerraform(struct?: IssueAlertConditionsV2EventFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_interval: {
      value: cdktf.stringToHclTerraform(struct!.comparisonInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_type: {
      value: cdktf.stringToHclTerraform(struct!.comparisonType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertConditionsV2EventFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertConditionsV2EventFrequency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonInterval = this._comparisonInterval;
    }
    if (this._comparisonType !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonType = this._comparisonType;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertConditionsV2EventFrequency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonInterval = undefined;
      this._comparisonType = undefined;
      this._interval = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonInterval = value.comparisonInterval;
      this._comparisonType = value.comparisonType;
      this._interval = value.interval;
      this._value = value.value;
    }
  }

  // comparison_interval - computed: false, optional: true, required: false
  private _comparisonInterval?: string; 
  public get comparisonInterval() {
    return this.getStringAttribute('comparison_interval');
  }
  public set comparisonInterval(value: string) {
    this._comparisonInterval = value;
  }
  public resetComparisonInterval() {
    this._comparisonInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonIntervalInput() {
    return this._comparisonInterval;
  }

  // comparison_type - computed: false, optional: false, required: true
  private _comparisonType?: string; 
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }
  public set comparisonType(value: string) {
    this._comparisonType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonTypeInput() {
    return this._comparisonType;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IssueAlertConditionsV2EventFrequencyPercent {
  /**
  * `m` for minutes, `h` for hours, `d` for days, and `w` for weeks. Valid values are: `5m`, `15m`, `1h`, `1d`, `1w`, and `30d`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#comparison_interval IssueAlert#comparison_interval}
  */
  readonly comparisonInterval?: string;
  /**
  * Valid values are: `count`, and `percent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#comparison_type IssueAlert#comparison_type}
  */
  readonly comparisonType: string;
  /**
  * `m` for minutes, `h` for hours. Valid values are: `5m`, `10m`, `30m`, and `1h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#interval IssueAlert#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#value IssueAlert#value}
  */
  readonly value: number;
}

export function issueAlertConditionsV2EventFrequencyPercentToTerraform(struct?: IssueAlertConditionsV2EventFrequencyPercent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_interval: cdktf.stringToTerraform(struct!.comparisonInterval),
    comparison_type: cdktf.stringToTerraform(struct!.comparisonType),
    interval: cdktf.stringToTerraform(struct!.interval),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function issueAlertConditionsV2EventFrequencyPercentToHclTerraform(struct?: IssueAlertConditionsV2EventFrequencyPercent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_interval: {
      value: cdktf.stringToHclTerraform(struct!.comparisonInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_type: {
      value: cdktf.stringToHclTerraform(struct!.comparisonType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertConditionsV2EventFrequencyPercentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertConditionsV2EventFrequencyPercent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonInterval = this._comparisonInterval;
    }
    if (this._comparisonType !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonType = this._comparisonType;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertConditionsV2EventFrequencyPercent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonInterval = undefined;
      this._comparisonType = undefined;
      this._interval = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonInterval = value.comparisonInterval;
      this._comparisonType = value.comparisonType;
      this._interval = value.interval;
      this._value = value.value;
    }
  }

  // comparison_interval - computed: false, optional: true, required: false
  private _comparisonInterval?: string; 
  public get comparisonInterval() {
    return this.getStringAttribute('comparison_interval');
  }
  public set comparisonInterval(value: string) {
    this._comparisonInterval = value;
  }
  public resetComparisonInterval() {
    this._comparisonInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonIntervalInput() {
    return this._comparisonInterval;
  }

  // comparison_type - computed: false, optional: false, required: true
  private _comparisonType?: string; 
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }
  public set comparisonType(value: string) {
    this._comparisonType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonTypeInput() {
    return this._comparisonType;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IssueAlertConditionsV2EventUniqueUserFrequency {
  /**
  * `m` for minutes, `h` for hours, `d` for days, and `w` for weeks. Valid values are: `5m`, `15m`, `1h`, `1d`, `1w`, and `30d`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#comparison_interval IssueAlert#comparison_interval}
  */
  readonly comparisonInterval?: string;
  /**
  * Valid values are: `count`, and `percent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#comparison_type IssueAlert#comparison_type}
  */
  readonly comparisonType: string;
  /**
  * `m` for minutes, `h` for hours, `d` for days, and `w` for weeks. Valid values are: `1m`, `5m`, `15m`, `1h`, `1d`, `1w`, and `30d`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#interval IssueAlert#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#value IssueAlert#value}
  */
  readonly value: number;
}

export function issueAlertConditionsV2EventUniqueUserFrequencyToTerraform(struct?: IssueAlertConditionsV2EventUniqueUserFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_interval: cdktf.stringToTerraform(struct!.comparisonInterval),
    comparison_type: cdktf.stringToTerraform(struct!.comparisonType),
    interval: cdktf.stringToTerraform(struct!.interval),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function issueAlertConditionsV2EventUniqueUserFrequencyToHclTerraform(struct?: IssueAlertConditionsV2EventUniqueUserFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_interval: {
      value: cdktf.stringToHclTerraform(struct!.comparisonInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_type: {
      value: cdktf.stringToHclTerraform(struct!.comparisonType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertConditionsV2EventUniqueUserFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertConditionsV2EventUniqueUserFrequency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonInterval = this._comparisonInterval;
    }
    if (this._comparisonType !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonType = this._comparisonType;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertConditionsV2EventUniqueUserFrequency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonInterval = undefined;
      this._comparisonType = undefined;
      this._interval = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonInterval = value.comparisonInterval;
      this._comparisonType = value.comparisonType;
      this._interval = value.interval;
      this._value = value.value;
    }
  }

  // comparison_interval - computed: false, optional: true, required: false
  private _comparisonInterval?: string; 
  public get comparisonInterval() {
    return this.getStringAttribute('comparison_interval');
  }
  public set comparisonInterval(value: string) {
    this._comparisonInterval = value;
  }
  public resetComparisonInterval() {
    this._comparisonInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonIntervalInput() {
    return this._comparisonInterval;
  }

  // comparison_type - computed: false, optional: false, required: true
  private _comparisonType?: string; 
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }
  public set comparisonType(value: string) {
    this._comparisonType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonTypeInput() {
    return this._comparisonType;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IssueAlertConditionsV2ExistingHighPriorityIssue {
}

export function issueAlertConditionsV2ExistingHighPriorityIssueToTerraform(struct?: IssueAlertConditionsV2ExistingHighPriorityIssue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function issueAlertConditionsV2ExistingHighPriorityIssueToHclTerraform(struct?: IssueAlertConditionsV2ExistingHighPriorityIssue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IssueAlertConditionsV2ExistingHighPriorityIssueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertConditionsV2ExistingHighPriorityIssue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertConditionsV2ExistingHighPriorityIssue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface IssueAlertConditionsV2FirstSeenEvent {
}

export function issueAlertConditionsV2FirstSeenEventToTerraform(struct?: IssueAlertConditionsV2FirstSeenEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function issueAlertConditionsV2FirstSeenEventToHclTerraform(struct?: IssueAlertConditionsV2FirstSeenEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IssueAlertConditionsV2FirstSeenEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertConditionsV2FirstSeenEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertConditionsV2FirstSeenEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface IssueAlertConditionsV2NewHighPriorityIssue {
}

export function issueAlertConditionsV2NewHighPriorityIssueToTerraform(struct?: IssueAlertConditionsV2NewHighPriorityIssue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function issueAlertConditionsV2NewHighPriorityIssueToHclTerraform(struct?: IssueAlertConditionsV2NewHighPriorityIssue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IssueAlertConditionsV2NewHighPriorityIssueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertConditionsV2NewHighPriorityIssue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertConditionsV2NewHighPriorityIssue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface IssueAlertConditionsV2ReappearedEvent {
}

export function issueAlertConditionsV2ReappearedEventToTerraform(struct?: IssueAlertConditionsV2ReappearedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function issueAlertConditionsV2ReappearedEventToHclTerraform(struct?: IssueAlertConditionsV2ReappearedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IssueAlertConditionsV2ReappearedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertConditionsV2ReappearedEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertConditionsV2ReappearedEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface IssueAlertConditionsV2RegressionEvent {
}

export function issueAlertConditionsV2RegressionEventToTerraform(struct?: IssueAlertConditionsV2RegressionEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function issueAlertConditionsV2RegressionEventToHclTerraform(struct?: IssueAlertConditionsV2RegressionEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IssueAlertConditionsV2RegressionEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertConditionsV2RegressionEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertConditionsV2RegressionEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface IssueAlertConditionsV2 {
  /**
  * When the `comparison_type` is `count`, the number of events in an issue is more than `value` in `interval`. When the `comparison_type` is `percent`, the number of events in an issue is `value` % higher in `interval` compared to `comparison_interval` ago.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#event_frequency IssueAlert#event_frequency}
  */
  readonly eventFrequency?: IssueAlertConditionsV2EventFrequency;
  /**
  * When the `comparison_type` is `count`, the percent of sessions affected by an issue is more than `value` in `interval`. When the `comparison_type` is `percent`, the percent of sessions affected by an issue is `value` % higher in `interval` compared to `comparison_interval` ago.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#event_frequency_percent IssueAlert#event_frequency_percent}
  */
  readonly eventFrequencyPercent?: IssueAlertConditionsV2EventFrequencyPercent;
  /**
  * When the `comparison_type` is `count`, the number of users affected by an issue is more than `value` in `interval`. When the `comparison_type` is `percent`, the number of users affected by an issue is `value` % higher in `interval` compared to `comparison_interval` ago.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#event_unique_user_frequency IssueAlert#event_unique_user_frequency}
  */
  readonly eventUniqueUserFrequency?: IssueAlertConditionsV2EventUniqueUserFrequency;
  /**
  * Sentry marks an existing issue as high priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#existing_high_priority_issue IssueAlert#existing_high_priority_issue}
  */
  readonly existingHighPriorityIssue?: IssueAlertConditionsV2ExistingHighPriorityIssue;
  /**
  * A new issue is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#first_seen_event IssueAlert#first_seen_event}
  */
  readonly firstSeenEvent?: IssueAlertConditionsV2FirstSeenEvent;
  /**
  * Sentry marks a new issue as high priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#new_high_priority_issue IssueAlert#new_high_priority_issue}
  */
  readonly newHighPriorityIssue?: IssueAlertConditionsV2NewHighPriorityIssue;
  /**
  * The issue changes state from ignored to unresolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#reappeared_event IssueAlert#reappeared_event}
  */
  readonly reappearedEvent?: IssueAlertConditionsV2ReappearedEvent;
  /**
  * The issue changes state from resolved to unresolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#regression_event IssueAlert#regression_event}
  */
  readonly regressionEvent?: IssueAlertConditionsV2RegressionEvent;
}

export function issueAlertConditionsV2ToTerraform(struct?: IssueAlertConditionsV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_frequency: issueAlertConditionsV2EventFrequencyToTerraform(struct!.eventFrequency),
    event_frequency_percent: issueAlertConditionsV2EventFrequencyPercentToTerraform(struct!.eventFrequencyPercent),
    event_unique_user_frequency: issueAlertConditionsV2EventUniqueUserFrequencyToTerraform(struct!.eventUniqueUserFrequency),
    existing_high_priority_issue: issueAlertConditionsV2ExistingHighPriorityIssueToTerraform(struct!.existingHighPriorityIssue),
    first_seen_event: issueAlertConditionsV2FirstSeenEventToTerraform(struct!.firstSeenEvent),
    new_high_priority_issue: issueAlertConditionsV2NewHighPriorityIssueToTerraform(struct!.newHighPriorityIssue),
    reappeared_event: issueAlertConditionsV2ReappearedEventToTerraform(struct!.reappearedEvent),
    regression_event: issueAlertConditionsV2RegressionEventToTerraform(struct!.regressionEvent),
  }
}


export function issueAlertConditionsV2ToHclTerraform(struct?: IssueAlertConditionsV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_frequency: {
      value: issueAlertConditionsV2EventFrequencyToHclTerraform(struct!.eventFrequency),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertConditionsV2EventFrequency",
    },
    event_frequency_percent: {
      value: issueAlertConditionsV2EventFrequencyPercentToHclTerraform(struct!.eventFrequencyPercent),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertConditionsV2EventFrequencyPercent",
    },
    event_unique_user_frequency: {
      value: issueAlertConditionsV2EventUniqueUserFrequencyToHclTerraform(struct!.eventUniqueUserFrequency),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertConditionsV2EventUniqueUserFrequency",
    },
    existing_high_priority_issue: {
      value: issueAlertConditionsV2ExistingHighPriorityIssueToHclTerraform(struct!.existingHighPriorityIssue),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertConditionsV2ExistingHighPriorityIssue",
    },
    first_seen_event: {
      value: issueAlertConditionsV2FirstSeenEventToHclTerraform(struct!.firstSeenEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertConditionsV2FirstSeenEvent",
    },
    new_high_priority_issue: {
      value: issueAlertConditionsV2NewHighPriorityIssueToHclTerraform(struct!.newHighPriorityIssue),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertConditionsV2NewHighPriorityIssue",
    },
    reappeared_event: {
      value: issueAlertConditionsV2ReappearedEventToHclTerraform(struct!.reappearedEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertConditionsV2ReappearedEvent",
    },
    regression_event: {
      value: issueAlertConditionsV2RegressionEventToHclTerraform(struct!.regressionEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertConditionsV2RegressionEvent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertConditionsV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IssueAlertConditionsV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventFrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventFrequency = this._eventFrequency?.internalValue;
    }
    if (this._eventFrequencyPercent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventFrequencyPercent = this._eventFrequencyPercent?.internalValue;
    }
    if (this._eventUniqueUserFrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventUniqueUserFrequency = this._eventUniqueUserFrequency?.internalValue;
    }
    if (this._existingHighPriorityIssue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingHighPriorityIssue = this._existingHighPriorityIssue?.internalValue;
    }
    if (this._firstSeenEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstSeenEvent = this._firstSeenEvent?.internalValue;
    }
    if (this._newHighPriorityIssue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newHighPriorityIssue = this._newHighPriorityIssue?.internalValue;
    }
    if (this._reappearedEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reappearedEvent = this._reappearedEvent?.internalValue;
    }
    if (this._regressionEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regressionEvent = this._regressionEvent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertConditionsV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventFrequency.internalValue = undefined;
      this._eventFrequencyPercent.internalValue = undefined;
      this._eventUniqueUserFrequency.internalValue = undefined;
      this._existingHighPriorityIssue.internalValue = undefined;
      this._firstSeenEvent.internalValue = undefined;
      this._newHighPriorityIssue.internalValue = undefined;
      this._reappearedEvent.internalValue = undefined;
      this._regressionEvent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventFrequency.internalValue = value.eventFrequency;
      this._eventFrequencyPercent.internalValue = value.eventFrequencyPercent;
      this._eventUniqueUserFrequency.internalValue = value.eventUniqueUserFrequency;
      this._existingHighPriorityIssue.internalValue = value.existingHighPriorityIssue;
      this._firstSeenEvent.internalValue = value.firstSeenEvent;
      this._newHighPriorityIssue.internalValue = value.newHighPriorityIssue;
      this._reappearedEvent.internalValue = value.reappearedEvent;
      this._regressionEvent.internalValue = value.regressionEvent;
    }
  }

  // event_frequency - computed: false, optional: true, required: false
  private _eventFrequency = new IssueAlertConditionsV2EventFrequencyOutputReference(this, "event_frequency");
  public get eventFrequency() {
    return this._eventFrequency;
  }
  public putEventFrequency(value: IssueAlertConditionsV2EventFrequency) {
    this._eventFrequency.internalValue = value;
  }
  public resetEventFrequency() {
    this._eventFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFrequencyInput() {
    return this._eventFrequency.internalValue;
  }

  // event_frequency_percent - computed: false, optional: true, required: false
  private _eventFrequencyPercent = new IssueAlertConditionsV2EventFrequencyPercentOutputReference(this, "event_frequency_percent");
  public get eventFrequencyPercent() {
    return this._eventFrequencyPercent;
  }
  public putEventFrequencyPercent(value: IssueAlertConditionsV2EventFrequencyPercent) {
    this._eventFrequencyPercent.internalValue = value;
  }
  public resetEventFrequencyPercent() {
    this._eventFrequencyPercent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFrequencyPercentInput() {
    return this._eventFrequencyPercent.internalValue;
  }

  // event_unique_user_frequency - computed: false, optional: true, required: false
  private _eventUniqueUserFrequency = new IssueAlertConditionsV2EventUniqueUserFrequencyOutputReference(this, "event_unique_user_frequency");
  public get eventUniqueUserFrequency() {
    return this._eventUniqueUserFrequency;
  }
  public putEventUniqueUserFrequency(value: IssueAlertConditionsV2EventUniqueUserFrequency) {
    this._eventUniqueUserFrequency.internalValue = value;
  }
  public resetEventUniqueUserFrequency() {
    this._eventUniqueUserFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventUniqueUserFrequencyInput() {
    return this._eventUniqueUserFrequency.internalValue;
  }

  // existing_high_priority_issue - computed: false, optional: true, required: false
  private _existingHighPriorityIssue = new IssueAlertConditionsV2ExistingHighPriorityIssueOutputReference(this, "existing_high_priority_issue");
  public get existingHighPriorityIssue() {
    return this._existingHighPriorityIssue;
  }
  public putExistingHighPriorityIssue(value: IssueAlertConditionsV2ExistingHighPriorityIssue) {
    this._existingHighPriorityIssue.internalValue = value;
  }
  public resetExistingHighPriorityIssue() {
    this._existingHighPriorityIssue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingHighPriorityIssueInput() {
    return this._existingHighPriorityIssue.internalValue;
  }

  // first_seen_event - computed: false, optional: true, required: false
  private _firstSeenEvent = new IssueAlertConditionsV2FirstSeenEventOutputReference(this, "first_seen_event");
  public get firstSeenEvent() {
    return this._firstSeenEvent;
  }
  public putFirstSeenEvent(value: IssueAlertConditionsV2FirstSeenEvent) {
    this._firstSeenEvent.internalValue = value;
  }
  public resetFirstSeenEvent() {
    this._firstSeenEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstSeenEventInput() {
    return this._firstSeenEvent.internalValue;
  }

  // new_high_priority_issue - computed: false, optional: true, required: false
  private _newHighPriorityIssue = new IssueAlertConditionsV2NewHighPriorityIssueOutputReference(this, "new_high_priority_issue");
  public get newHighPriorityIssue() {
    return this._newHighPriorityIssue;
  }
  public putNewHighPriorityIssue(value: IssueAlertConditionsV2NewHighPriorityIssue) {
    this._newHighPriorityIssue.internalValue = value;
  }
  public resetNewHighPriorityIssue() {
    this._newHighPriorityIssue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newHighPriorityIssueInput() {
    return this._newHighPriorityIssue.internalValue;
  }

  // reappeared_event - computed: false, optional: true, required: false
  private _reappearedEvent = new IssueAlertConditionsV2ReappearedEventOutputReference(this, "reappeared_event");
  public get reappearedEvent() {
    return this._reappearedEvent;
  }
  public putReappearedEvent(value: IssueAlertConditionsV2ReappearedEvent) {
    this._reappearedEvent.internalValue = value;
  }
  public resetReappearedEvent() {
    this._reappearedEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reappearedEventInput() {
    return this._reappearedEvent.internalValue;
  }

  // regression_event - computed: false, optional: true, required: false
  private _regressionEvent = new IssueAlertConditionsV2RegressionEventOutputReference(this, "regression_event");
  public get regressionEvent() {
    return this._regressionEvent;
  }
  public putRegressionEvent(value: IssueAlertConditionsV2RegressionEvent) {
    this._regressionEvent.internalValue = value;
  }
  public resetRegressionEvent() {
    this._regressionEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regressionEventInput() {
    return this._regressionEvent.internalValue;
  }
}

export class IssueAlertConditionsV2List extends cdktf.ComplexList {
  public internalValue? : IssueAlertConditionsV2[] | cdktf.IResolvable

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
  public get(index: number): IssueAlertConditionsV2OutputReference {
    return new IssueAlertConditionsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IssueAlertFiltersV2AgeComparison {
  /**
  * Valid values are: `older`, and `newer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#comparison_type IssueAlert#comparison_type}
  */
  readonly comparisonType: string;
  /**
  * Valid values are: `minute`, `hour`, `day`, and `week`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#time IssueAlert#time}
  */
  readonly time: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#value IssueAlert#value}
  */
  readonly value: number;
}

export function issueAlertFiltersV2AgeComparisonToTerraform(struct?: IssueAlertFiltersV2AgeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_type: cdktf.stringToTerraform(struct!.comparisonType),
    time: cdktf.stringToTerraform(struct!.time),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function issueAlertFiltersV2AgeComparisonToHclTerraform(struct?: IssueAlertFiltersV2AgeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_type: {
      value: cdktf.stringToHclTerraform(struct!.comparisonType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertFiltersV2AgeComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertFiltersV2AgeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonType !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonType = this._comparisonType;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertFiltersV2AgeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonType = undefined;
      this._time = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonType = value.comparisonType;
      this._time = value.time;
      this._value = value.value;
    }
  }

  // comparison_type - computed: false, optional: false, required: true
  private _comparisonType?: string; 
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }
  public set comparisonType(value: string) {
    this._comparisonType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonTypeInput() {
    return this._comparisonType;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IssueAlertFiltersV2AssignedTo {
  /**
  * The target's ID. Only required when `target_type` is `Team` or `Member`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#target_identifier IssueAlert#target_identifier}
  */
  readonly targetIdentifier?: string;
  /**
  * Valid values are: `Unassigned`, `Team`, and `Member`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#target_type IssueAlert#target_type}
  */
  readonly targetType: string;
}

export function issueAlertFiltersV2AssignedToToTerraform(struct?: IssueAlertFiltersV2AssignedTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_identifier: cdktf.stringToTerraform(struct!.targetIdentifier),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function issueAlertFiltersV2AssignedToToHclTerraform(struct?: IssueAlertFiltersV2AssignedTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_identifier: {
      value: cdktf.stringToHclTerraform(struct!.targetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertFiltersV2AssignedToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertFiltersV2AssignedTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIdentifier = this._targetIdentifier;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertFiltersV2AssignedTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetIdentifier = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetIdentifier = value.targetIdentifier;
      this._targetType = value.targetType;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_identifier - computed: false, optional: true, required: false
  private _targetIdentifier?: string; 
  public get targetIdentifier() {
    return this.getStringAttribute('target_identifier');
  }
  public set targetIdentifier(value: string) {
    this._targetIdentifier = value;
  }
  public resetTargetIdentifier() {
    this._targetIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdentifierInput() {
    return this._targetIdentifier;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface IssueAlertFiltersV2EventAttribute {
  /**
  * Valid values are: `message`, `platform`, `environment`, `type`, `error.handled`, `error.unhandled`, `error.main_thread`, `exception.type`, `exception.value`, `user.id`, `user.email`, `user.username`, `user.ip_address`, `http.method`, `http.url`, `http.status_code`, `sdk.name`, `stacktrace.code`, `stacktrace.module`, `stacktrace.filename`, `stacktrace.abs_path`, `stacktrace.package`, `unreal.crash_type`, `app.in_foreground`, `os.distribution_name`, `os.distribution_version`, `symbolicated_in_app`, `ota_updates.channel`, `ota_updates.runtime_version`, and `ota_updates.update_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#attribute IssueAlert#attribute}
  */
  readonly attribute: string;
  /**
  * The comparison operator. Valid values are: `CONTAINS`, `ENDS_WITH`, `EQUAL`, `GREATER_OR_EQUAL`, `GREATER`, `IS_SET`, `IS_IN`, `LESS_OR_EQUAL`, `LESS`, `NOT_CONTAINS`, `NOT_ENDS_WITH`, `NOT_EQUAL`, `NOT_SET`, `NOT_STARTS_WITH`, `NOT_IN`, and `STARTS_WITH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#match IssueAlert#match}
  */
  readonly match: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#value IssueAlert#value}
  */
  readonly value?: string;
}

export function issueAlertFiltersV2EventAttributeToTerraform(struct?: IssueAlertFiltersV2EventAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function issueAlertFiltersV2EventAttributeToHclTerraform(struct?: IssueAlertFiltersV2EventAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class IssueAlertFiltersV2EventAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertFiltersV2EventAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertFiltersV2EventAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
export interface IssueAlertFiltersV2IssueCategory {
  /**
  * Valid values are: `Error`, `Performance`, `Profile`, `Cron`, `Replay`, `Feedback`, `Uptime`, `Metric_Alert`, `Test_Notification`, `Outage`, `Metric`, `Db_Query`, `Http_Client`, `Frontend`, and `Mobile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#value IssueAlert#value}
  */
  readonly value: string;
}

export function issueAlertFiltersV2IssueCategoryToTerraform(struct?: IssueAlertFiltersV2IssueCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function issueAlertFiltersV2IssueCategoryToHclTerraform(struct?: IssueAlertFiltersV2IssueCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IssueAlertFiltersV2IssueCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertFiltersV2IssueCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertFiltersV2IssueCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IssueAlertFiltersV2IssueOccurrences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#value IssueAlert#value}
  */
  readonly value: number;
}

export function issueAlertFiltersV2IssueOccurrencesToTerraform(struct?: IssueAlertFiltersV2IssueOccurrences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function issueAlertFiltersV2IssueOccurrencesToHclTerraform(struct?: IssueAlertFiltersV2IssueOccurrences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertFiltersV2IssueOccurrencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertFiltersV2IssueOccurrences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertFiltersV2IssueOccurrences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IssueAlertFiltersV2LatestAdoptedRelease {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#environment IssueAlert#environment}
  */
  readonly environment: string;
  /**
  * Valid values are: `older`, and `newer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#older_or_newer IssueAlert#older_or_newer}
  */
  readonly olderOrNewer: string;
  /**
  * Valid values are: `oldest`, and `newest`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#oldest_or_newest IssueAlert#oldest_or_newest}
  */
  readonly oldestOrNewest: string;
}

export function issueAlertFiltersV2LatestAdoptedReleaseToTerraform(struct?: IssueAlertFiltersV2LatestAdoptedRelease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    older_or_newer: cdktf.stringToTerraform(struct!.olderOrNewer),
    oldest_or_newest: cdktf.stringToTerraform(struct!.oldestOrNewest),
  }
}


export function issueAlertFiltersV2LatestAdoptedReleaseToHclTerraform(struct?: IssueAlertFiltersV2LatestAdoptedRelease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    older_or_newer: {
      value: cdktf.stringToHclTerraform(struct!.olderOrNewer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oldest_or_newest: {
      value: cdktf.stringToHclTerraform(struct!.oldestOrNewest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertFiltersV2LatestAdoptedReleaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertFiltersV2LatestAdoptedRelease | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._olderOrNewer !== undefined) {
      hasAnyValues = true;
      internalValueResult.olderOrNewer = this._olderOrNewer;
    }
    if (this._oldestOrNewest !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldestOrNewest = this._oldestOrNewest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertFiltersV2LatestAdoptedRelease | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._olderOrNewer = undefined;
      this._oldestOrNewest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._olderOrNewer = value.olderOrNewer;
      this._oldestOrNewest = value.oldestOrNewest;
    }
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // older_or_newer - computed: false, optional: false, required: true
  private _olderOrNewer?: string; 
  public get olderOrNewer() {
    return this.getStringAttribute('older_or_newer');
  }
  public set olderOrNewer(value: string) {
    this._olderOrNewer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get olderOrNewerInput() {
    return this._olderOrNewer;
  }

  // oldest_or_newest - computed: false, optional: false, required: true
  private _oldestOrNewest?: string; 
  public get oldestOrNewest() {
    return this.getStringAttribute('oldest_or_newest');
  }
  public set oldestOrNewest(value: string) {
    this._oldestOrNewest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldestOrNewestInput() {
    return this._oldestOrNewest;
  }
}
export interface IssueAlertFiltersV2LatestRelease {
}

export function issueAlertFiltersV2LatestReleaseToTerraform(struct?: IssueAlertFiltersV2LatestRelease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function issueAlertFiltersV2LatestReleaseToHclTerraform(struct?: IssueAlertFiltersV2LatestRelease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IssueAlertFiltersV2LatestReleaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertFiltersV2LatestRelease | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertFiltersV2LatestRelease | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface IssueAlertFiltersV2Level {
  /**
  * Valid values are: `sample`, `debug`, `info`, `warning`, `error`, and `fatal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#level IssueAlert#level}
  */
  readonly level: string;
  /**
  * The comparison operator. Valid values are: `EQUAL`, `GREATER_OR_EQUAL`, and `LESS_OR_EQUAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#match IssueAlert#match}
  */
  readonly match: string;
}

export function issueAlertFiltersV2LevelToTerraform(struct?: IssueAlertFiltersV2Level | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    match: cdktf.stringToTerraform(struct!.match),
  }
}


export function issueAlertFiltersV2LevelToHclTerraform(struct?: IssueAlertFiltersV2Level | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertFiltersV2LevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertFiltersV2Level | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertFiltersV2Level | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._match = value.match;
    }
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface IssueAlertFiltersV2TaggedEvent {
  /**
  * The tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#key IssueAlert#key}
  */
  readonly key: string;
  /**
  * The comparison operator. Valid values are: `CONTAINS`, `ENDS_WITH`, `EQUAL`, `GREATER_OR_EQUAL`, `GREATER`, `IS_SET`, `IS_IN`, `LESS_OR_EQUAL`, `LESS`, `NOT_CONTAINS`, `NOT_ENDS_WITH`, `NOT_EQUAL`, `NOT_SET`, `NOT_STARTS_WITH`, `NOT_IN`, and `STARTS_WITH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#match IssueAlert#match}
  */
  readonly match: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#value IssueAlert#value}
  */
  readonly value?: string;
}

export function issueAlertFiltersV2TaggedEventToTerraform(struct?: IssueAlertFiltersV2TaggedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function issueAlertFiltersV2TaggedEventToHclTerraform(struct?: IssueAlertFiltersV2TaggedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class IssueAlertFiltersV2TaggedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueAlertFiltersV2TaggedEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertFiltersV2TaggedEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
export interface IssueAlertFiltersV2 {
  /**
  * The issue is older or newer than `value` `time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#age_comparison IssueAlert#age_comparison}
  */
  readonly ageComparison?: IssueAlertFiltersV2AgeComparison;
  /**
  * The issue is assigned to no one, team, or member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#assigned_to IssueAlert#assigned_to}
  */
  readonly assignedTo?: IssueAlertFiltersV2AssignedTo;
  /**
  * The event's `attribute` value `match` `value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#event_attribute IssueAlert#event_attribute}
  */
  readonly eventAttribute?: IssueAlertFiltersV2EventAttribute;
  /**
  * The issue's category is equal to `value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#issue_category IssueAlert#issue_category}
  */
  readonly issueCategory?: IssueAlertFiltersV2IssueCategory;
  /**
  * The issue has happened at least `value` times (Note: this is approximate).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#issue_occurrences IssueAlert#issue_occurrences}
  */
  readonly issueOccurrences?: IssueAlertFiltersV2IssueOccurrences;
  /**
  * The {oldest_or_newest} adopted release associated with the event's issue is {older_or_newer} than the latest adopted release in {environment}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#latest_adopted_release IssueAlert#latest_adopted_release}
  */
  readonly latestAdoptedRelease?: IssueAlertFiltersV2LatestAdoptedRelease;
  /**
  * The event is from the latest release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#latest_release IssueAlert#latest_release}
  */
  readonly latestRelease?: IssueAlertFiltersV2LatestRelease;
  /**
  * The event's level is `match` `level`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#level IssueAlert#level}
  */
  readonly level?: IssueAlertFiltersV2Level;
  /**
  * The event's tags match `key` `match` `value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#tagged_event IssueAlert#tagged_event}
  */
  readonly taggedEvent?: IssueAlertFiltersV2TaggedEvent;
}

export function issueAlertFiltersV2ToTerraform(struct?: IssueAlertFiltersV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age_comparison: issueAlertFiltersV2AgeComparisonToTerraform(struct!.ageComparison),
    assigned_to: issueAlertFiltersV2AssignedToToTerraform(struct!.assignedTo),
    event_attribute: issueAlertFiltersV2EventAttributeToTerraform(struct!.eventAttribute),
    issue_category: issueAlertFiltersV2IssueCategoryToTerraform(struct!.issueCategory),
    issue_occurrences: issueAlertFiltersV2IssueOccurrencesToTerraform(struct!.issueOccurrences),
    latest_adopted_release: issueAlertFiltersV2LatestAdoptedReleaseToTerraform(struct!.latestAdoptedRelease),
    latest_release: issueAlertFiltersV2LatestReleaseToTerraform(struct!.latestRelease),
    level: issueAlertFiltersV2LevelToTerraform(struct!.level),
    tagged_event: issueAlertFiltersV2TaggedEventToTerraform(struct!.taggedEvent),
  }
}


export function issueAlertFiltersV2ToHclTerraform(struct?: IssueAlertFiltersV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age_comparison: {
      value: issueAlertFiltersV2AgeComparisonToHclTerraform(struct!.ageComparison),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertFiltersV2AgeComparison",
    },
    assigned_to: {
      value: issueAlertFiltersV2AssignedToToHclTerraform(struct!.assignedTo),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertFiltersV2AssignedTo",
    },
    event_attribute: {
      value: issueAlertFiltersV2EventAttributeToHclTerraform(struct!.eventAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertFiltersV2EventAttribute",
    },
    issue_category: {
      value: issueAlertFiltersV2IssueCategoryToHclTerraform(struct!.issueCategory),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertFiltersV2IssueCategory",
    },
    issue_occurrences: {
      value: issueAlertFiltersV2IssueOccurrencesToHclTerraform(struct!.issueOccurrences),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertFiltersV2IssueOccurrences",
    },
    latest_adopted_release: {
      value: issueAlertFiltersV2LatestAdoptedReleaseToHclTerraform(struct!.latestAdoptedRelease),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertFiltersV2LatestAdoptedRelease",
    },
    latest_release: {
      value: issueAlertFiltersV2LatestReleaseToHclTerraform(struct!.latestRelease),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertFiltersV2LatestRelease",
    },
    level: {
      value: issueAlertFiltersV2LevelToHclTerraform(struct!.level),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertFiltersV2Level",
    },
    tagged_event: {
      value: issueAlertFiltersV2TaggedEventToHclTerraform(struct!.taggedEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueAlertFiltersV2TaggedEvent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueAlertFiltersV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IssueAlertFiltersV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ageComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ageComparison = this._ageComparison?.internalValue;
    }
    if (this._assignedTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedTo = this._assignedTo?.internalValue;
    }
    if (this._eventAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAttribute = this._eventAttribute?.internalValue;
    }
    if (this._issueCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueCategory = this._issueCategory?.internalValue;
    }
    if (this._issueOccurrences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueOccurrences = this._issueOccurrences?.internalValue;
    }
    if (this._latestAdoptedRelease?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestAdoptedRelease = this._latestAdoptedRelease?.internalValue;
    }
    if (this._latestRelease?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestRelease = this._latestRelease?.internalValue;
    }
    if (this._level?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level?.internalValue;
    }
    if (this._taggedEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggedEvent = this._taggedEvent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueAlertFiltersV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ageComparison.internalValue = undefined;
      this._assignedTo.internalValue = undefined;
      this._eventAttribute.internalValue = undefined;
      this._issueCategory.internalValue = undefined;
      this._issueOccurrences.internalValue = undefined;
      this._latestAdoptedRelease.internalValue = undefined;
      this._latestRelease.internalValue = undefined;
      this._level.internalValue = undefined;
      this._taggedEvent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ageComparison.internalValue = value.ageComparison;
      this._assignedTo.internalValue = value.assignedTo;
      this._eventAttribute.internalValue = value.eventAttribute;
      this._issueCategory.internalValue = value.issueCategory;
      this._issueOccurrences.internalValue = value.issueOccurrences;
      this._latestAdoptedRelease.internalValue = value.latestAdoptedRelease;
      this._latestRelease.internalValue = value.latestRelease;
      this._level.internalValue = value.level;
      this._taggedEvent.internalValue = value.taggedEvent;
    }
  }

  // age_comparison - computed: false, optional: true, required: false
  private _ageComparison = new IssueAlertFiltersV2AgeComparisonOutputReference(this, "age_comparison");
  public get ageComparison() {
    return this._ageComparison;
  }
  public putAgeComparison(value: IssueAlertFiltersV2AgeComparison) {
    this._ageComparison.internalValue = value;
  }
  public resetAgeComparison() {
    this._ageComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageComparisonInput() {
    return this._ageComparison.internalValue;
  }

  // assigned_to - computed: false, optional: true, required: false
  private _assignedTo = new IssueAlertFiltersV2AssignedToOutputReference(this, "assigned_to");
  public get assignedTo() {
    return this._assignedTo;
  }
  public putAssignedTo(value: IssueAlertFiltersV2AssignedTo) {
    this._assignedTo.internalValue = value;
  }
  public resetAssignedTo() {
    this._assignedTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedToInput() {
    return this._assignedTo.internalValue;
  }

  // event_attribute - computed: false, optional: true, required: false
  private _eventAttribute = new IssueAlertFiltersV2EventAttributeOutputReference(this, "event_attribute");
  public get eventAttribute() {
    return this._eventAttribute;
  }
  public putEventAttribute(value: IssueAlertFiltersV2EventAttribute) {
    this._eventAttribute.internalValue = value;
  }
  public resetEventAttribute() {
    this._eventAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventAttributeInput() {
    return this._eventAttribute.internalValue;
  }

  // issue_category - computed: false, optional: true, required: false
  private _issueCategory = new IssueAlertFiltersV2IssueCategoryOutputReference(this, "issue_category");
  public get issueCategory() {
    return this._issueCategory;
  }
  public putIssueCategory(value: IssueAlertFiltersV2IssueCategory) {
    this._issueCategory.internalValue = value;
  }
  public resetIssueCategory() {
    this._issueCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueCategoryInput() {
    return this._issueCategory.internalValue;
  }

  // issue_occurrences - computed: false, optional: true, required: false
  private _issueOccurrences = new IssueAlertFiltersV2IssueOccurrencesOutputReference(this, "issue_occurrences");
  public get issueOccurrences() {
    return this._issueOccurrences;
  }
  public putIssueOccurrences(value: IssueAlertFiltersV2IssueOccurrences) {
    this._issueOccurrences.internalValue = value;
  }
  public resetIssueOccurrences() {
    this._issueOccurrences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueOccurrencesInput() {
    return this._issueOccurrences.internalValue;
  }

  // latest_adopted_release - computed: false, optional: true, required: false
  private _latestAdoptedRelease = new IssueAlertFiltersV2LatestAdoptedReleaseOutputReference(this, "latest_adopted_release");
  public get latestAdoptedRelease() {
    return this._latestAdoptedRelease;
  }
  public putLatestAdoptedRelease(value: IssueAlertFiltersV2LatestAdoptedRelease) {
    this._latestAdoptedRelease.internalValue = value;
  }
  public resetLatestAdoptedRelease() {
    this._latestAdoptedRelease.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestAdoptedReleaseInput() {
    return this._latestAdoptedRelease.internalValue;
  }

  // latest_release - computed: false, optional: true, required: false
  private _latestRelease = new IssueAlertFiltersV2LatestReleaseOutputReference(this, "latest_release");
  public get latestRelease() {
    return this._latestRelease;
  }
  public putLatestRelease(value: IssueAlertFiltersV2LatestRelease) {
    this._latestRelease.internalValue = value;
  }
  public resetLatestRelease() {
    this._latestRelease.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestReleaseInput() {
    return this._latestRelease.internalValue;
  }

  // level - computed: false, optional: true, required: false
  private _level = new IssueAlertFiltersV2LevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }
  public putLevel(value: IssueAlertFiltersV2Level) {
    this._level.internalValue = value;
  }
  public resetLevel() {
    this._level.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }

  // tagged_event - computed: false, optional: true, required: false
  private _taggedEvent = new IssueAlertFiltersV2TaggedEventOutputReference(this, "tagged_event");
  public get taggedEvent() {
    return this._taggedEvent;
  }
  public putTaggedEvent(value: IssueAlertFiltersV2TaggedEvent) {
    this._taggedEvent.internalValue = value;
  }
  public resetTaggedEvent() {
    this._taggedEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedEventInput() {
    return this._taggedEvent.internalValue;
  }
}

export class IssueAlertFiltersV2List extends cdktf.ComplexList {
  public internalValue? : IssueAlertFiltersV2[] | cdktf.IResolvable

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
  public get(index: number): IssueAlertFiltersV2OutputReference {
    return new IssueAlertFiltersV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert sentry_issue_alert}
*/
export class IssueAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_issue_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IssueAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IssueAlert to import
  * @param importFromId The id of the existing IssueAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IssueAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_issue_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/issue_alert sentry_issue_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IssueAlertConfig
  */
  public constructor(scope: Construct, id: string, config: IssueAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_issue_alert',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionMatch = config.actionMatch;
    this._actions = config.actions;
    this._actionsV2.internalValue = config.actionsV2;
    this._conditions = config.conditions;
    this._conditionsV2.internalValue = config.conditionsV2;
    this._environment = config.environment;
    this._filterMatch = config.filterMatch;
    this._filters = config.filters;
    this._filtersV2.internalValue = config.filtersV2;
    this._frequency = config.frequency;
    this._name = config.name;
    this._organization = config.organization;
    this._owner = config.owner;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_match - computed: false, optional: false, required: true
  private _actionMatch?: string; 
  public get actionMatch() {
    return this.getStringAttribute('action_match');
  }
  public set actionMatch(value: string) {
    this._actionMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionMatchInput() {
    return this._actionMatch;
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string; 
  public get actions() {
    return this.getStringAttribute('actions');
  }
  public set actions(value: string) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // actions_v2 - computed: false, optional: true, required: false
  private _actionsV2 = new IssueAlertActionsV2List(this, "actions_v2", false);
  public get actionsV2() {
    return this._actionsV2;
  }
  public putActionsV2(value: IssueAlertActionsV2[] | cdktf.IResolvable) {
    this._actionsV2.internalValue = value;
  }
  public resetActionsV2() {
    this._actionsV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsV2Input() {
    return this._actionsV2.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions?: string; 
  public get conditions() {
    return this.getStringAttribute('conditions');
  }
  public set conditions(value: string) {
    this._conditions = value;
  }
  public resetConditions() {
    this._conditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }

  // conditions_v2 - computed: false, optional: true, required: false
  private _conditionsV2 = new IssueAlertConditionsV2List(this, "conditions_v2", false);
  public get conditionsV2() {
    return this._conditionsV2;
  }
  public putConditionsV2(value: IssueAlertConditionsV2[] | cdktf.IResolvable) {
    this._conditionsV2.internalValue = value;
  }
  public resetConditionsV2() {
    this._conditionsV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsV2Input() {
    return this._conditionsV2.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // filter_match - computed: false, optional: true, required: false
  private _filterMatch?: string; 
  public get filterMatch() {
    return this.getStringAttribute('filter_match');
  }
  public set filterMatch(value: string) {
    this._filterMatch = value;
  }
  public resetFilterMatch() {
    this._filterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMatchInput() {
    return this._filterMatch;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string; 
  public get filters() {
    return this.getStringAttribute('filters');
  }
  public set filters(value: string) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // filters_v2 - computed: false, optional: true, required: false
  private _filtersV2 = new IssueAlertFiltersV2List(this, "filters_v2", false);
  public get filtersV2() {
    return this._filtersV2;
  }
  public putFiltersV2(value: IssueAlertFiltersV2[] | cdktf.IResolvable) {
    this._filtersV2.internalValue = value;
  }
  public resetFiltersV2() {
    this._filtersV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersV2Input() {
    return this._filtersV2.internalValue;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_match: cdktf.stringToTerraform(this._actionMatch),
      actions: cdktf.stringToTerraform(this._actions),
      actions_v2: cdktf.listMapper(issueAlertActionsV2ToTerraform, false)(this._actionsV2.internalValue),
      conditions: cdktf.stringToTerraform(this._conditions),
      conditions_v2: cdktf.listMapper(issueAlertConditionsV2ToTerraform, false)(this._conditionsV2.internalValue),
      environment: cdktf.stringToTerraform(this._environment),
      filter_match: cdktf.stringToTerraform(this._filterMatch),
      filters: cdktf.stringToTerraform(this._filters),
      filters_v2: cdktf.listMapper(issueAlertFiltersV2ToTerraform, false)(this._filtersV2.internalValue),
      frequency: cdktf.numberToTerraform(this._frequency),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      owner: cdktf.stringToTerraform(this._owner),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_match: {
        value: cdktf.stringToHclTerraform(this._actionMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.stringToHclTerraform(this._actions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions_v2: {
        value: cdktf.listMapperHcl(issueAlertActionsV2ToHclTerraform, false)(this._actionsV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IssueAlertActionsV2List",
      },
      conditions: {
        value: cdktf.stringToHclTerraform(this._conditions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions_v2: {
        value: cdktf.listMapperHcl(issueAlertConditionsV2ToHclTerraform, false)(this._conditionsV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IssueAlertConditionsV2List",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_match: {
        value: cdktf.stringToHclTerraform(this._filterMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.stringToHclTerraform(this._filters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters_v2: {
        value: cdktf.listMapperHcl(issueAlertFiltersV2ToHclTerraform, false)(this._filtersV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IssueAlertFiltersV2List",
      },
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
