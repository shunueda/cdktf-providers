// https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/issue_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSentryIssueAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/issue_alert#id DataSentryIssueAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The organization the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/issue_alert#organization DataSentryIssueAlert#organization}
  */
  readonly organization: string;
  /**
  * The project the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/issue_alert#project DataSentryIssueAlert#project}
  */
  readonly project: string;
}
export interface DataSentryIssueAlertActionsV2AzureDevopsCreateTicket {
}

export function dataSentryIssueAlertActionsV2AzureDevopsCreateTicketToTerraform(struct?: DataSentryIssueAlertActionsV2AzureDevopsCreateTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2AzureDevopsCreateTicketToHclTerraform(struct?: DataSentryIssueAlertActionsV2AzureDevopsCreateTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2AzureDevopsCreateTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2AzureDevopsCreateTicket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2AzureDevopsCreateTicket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration - computed: true, optional: false, required: false
  public get integration() {
    return this.getStringAttribute('integration');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // work_item_type - computed: true, optional: false, required: false
  public get workItemType() {
    return this.getStringAttribute('work_item_type');
  }
}
export interface DataSentryIssueAlertActionsV2DiscordNotifyService {
}

export function dataSentryIssueAlertActionsV2DiscordNotifyServiceToTerraform(struct?: DataSentryIssueAlertActionsV2DiscordNotifyService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2DiscordNotifyServiceToHclTerraform(struct?: DataSentryIssueAlertActionsV2DiscordNotifyService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2DiscordNotifyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2DiscordNotifyService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2DiscordNotifyService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
}
export interface DataSentryIssueAlertActionsV2GithubCreateTicket {
}

export function dataSentryIssueAlertActionsV2GithubCreateTicketToTerraform(struct?: DataSentryIssueAlertActionsV2GithubCreateTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2GithubCreateTicketToHclTerraform(struct?: DataSentryIssueAlertActionsV2GithubCreateTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2GithubCreateTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2GithubCreateTicket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2GithubCreateTicket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assignee - computed: true, optional: false, required: false
  public get assignee() {
    return this.getStringAttribute('assignee');
  }

  // integration - computed: true, optional: false, required: false
  public get integration() {
    return this.getStringAttribute('integration');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repo - computed: true, optional: false, required: false
  public get repo() {
    return this.getStringAttribute('repo');
  }
}
export interface DataSentryIssueAlertActionsV2GithubEnterpriseCreateTicket {
}

export function dataSentryIssueAlertActionsV2GithubEnterpriseCreateTicketToTerraform(struct?: DataSentryIssueAlertActionsV2GithubEnterpriseCreateTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2GithubEnterpriseCreateTicketToHclTerraform(struct?: DataSentryIssueAlertActionsV2GithubEnterpriseCreateTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2GithubEnterpriseCreateTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2GithubEnterpriseCreateTicket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2GithubEnterpriseCreateTicket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assignee - computed: true, optional: false, required: false
  public get assignee() {
    return this.getStringAttribute('assignee');
  }

  // integration - computed: true, optional: false, required: false
  public get integration() {
    return this.getStringAttribute('integration');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repo - computed: true, optional: false, required: false
  public get repo() {
    return this.getStringAttribute('repo');
  }
}
export interface DataSentryIssueAlertActionsV2JiraCreateTicket {
}

export function dataSentryIssueAlertActionsV2JiraCreateTicketToTerraform(struct?: DataSentryIssueAlertActionsV2JiraCreateTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2JiraCreateTicketToHclTerraform(struct?: DataSentryIssueAlertActionsV2JiraCreateTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2JiraCreateTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2JiraCreateTicket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2JiraCreateTicket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration - computed: true, optional: false, required: false
  public get integration() {
    return this.getStringAttribute('integration');
  }

  // issue_type - computed: true, optional: false, required: false
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}
export interface DataSentryIssueAlertActionsV2JiraServerCreateTicket {
}

export function dataSentryIssueAlertActionsV2JiraServerCreateTicketToTerraform(struct?: DataSentryIssueAlertActionsV2JiraServerCreateTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2JiraServerCreateTicketToHclTerraform(struct?: DataSentryIssueAlertActionsV2JiraServerCreateTicket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2JiraServerCreateTicketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2JiraServerCreateTicket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2JiraServerCreateTicket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration - computed: true, optional: false, required: false
  public get integration() {
    return this.getStringAttribute('integration');
  }

  // issue_type - computed: true, optional: false, required: false
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}
export interface DataSentryIssueAlertActionsV2MsteamsNotifyService {
}

export function dataSentryIssueAlertActionsV2MsteamsNotifyServiceToTerraform(struct?: DataSentryIssueAlertActionsV2MsteamsNotifyService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2MsteamsNotifyServiceToHclTerraform(struct?: DataSentryIssueAlertActionsV2MsteamsNotifyService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2MsteamsNotifyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2MsteamsNotifyService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2MsteamsNotifyService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }
}
export interface DataSentryIssueAlertActionsV2NotifyEmail {
}

export function dataSentryIssueAlertActionsV2NotifyEmailToTerraform(struct?: DataSentryIssueAlertActionsV2NotifyEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2NotifyEmailToHclTerraform(struct?: DataSentryIssueAlertActionsV2NotifyEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2NotifyEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2NotifyEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2NotifyEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fallthrough_type - computed: true, optional: false, required: false
  public get fallthroughType() {
    return this.getStringAttribute('fallthrough_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_identifier - computed: true, optional: false, required: false
  public get targetIdentifier() {
    return this.getStringAttribute('target_identifier');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
}
export interface DataSentryIssueAlertActionsV2NotifyEvent {
}

export function dataSentryIssueAlertActionsV2NotifyEventToTerraform(struct?: DataSentryIssueAlertActionsV2NotifyEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2NotifyEventToHclTerraform(struct?: DataSentryIssueAlertActionsV2NotifyEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2NotifyEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2NotifyEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2NotifyEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataSentryIssueAlertActionsV2NotifyEventSentryApp {
}

export function dataSentryIssueAlertActionsV2NotifyEventSentryAppToTerraform(struct?: DataSentryIssueAlertActionsV2NotifyEventSentryApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2NotifyEventSentryAppToHclTerraform(struct?: DataSentryIssueAlertActionsV2NotifyEventSentryApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2NotifyEventSentryAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2NotifyEventSentryApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2NotifyEventSentryApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sentry_app_installation_uuid - computed: true, optional: false, required: false
  public get sentryAppInstallationUuid() {
    return this.getStringAttribute('sentry_app_installation_uuid');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new cdktf.StringMap(this, "settings");
  public get settings() {
    return this._settings;
  }
}
export interface DataSentryIssueAlertActionsV2NotifyEventService {
}

export function dataSentryIssueAlertActionsV2NotifyEventServiceToTerraform(struct?: DataSentryIssueAlertActionsV2NotifyEventService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2NotifyEventServiceToHclTerraform(struct?: DataSentryIssueAlertActionsV2NotifyEventService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2NotifyEventServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2NotifyEventService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2NotifyEventService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}
export interface DataSentryIssueAlertActionsV2OpsgenieNotifyTeam {
}

export function dataSentryIssueAlertActionsV2OpsgenieNotifyTeamToTerraform(struct?: DataSentryIssueAlertActionsV2OpsgenieNotifyTeam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2OpsgenieNotifyTeamToHclTerraform(struct?: DataSentryIssueAlertActionsV2OpsgenieNotifyTeam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2OpsgenieNotifyTeamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2OpsgenieNotifyTeam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2OpsgenieNotifyTeam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }
}
export interface DataSentryIssueAlertActionsV2PagerdutyNotifyService {
}

export function dataSentryIssueAlertActionsV2PagerdutyNotifyServiceToTerraform(struct?: DataSentryIssueAlertActionsV2PagerdutyNotifyService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2PagerdutyNotifyServiceToHclTerraform(struct?: DataSentryIssueAlertActionsV2PagerdutyNotifyService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2PagerdutyNotifyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2PagerdutyNotifyService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2PagerdutyNotifyService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}
export interface DataSentryIssueAlertActionsV2SlackNotifyService {
}

export function dataSentryIssueAlertActionsV2SlackNotifyServiceToTerraform(struct?: DataSentryIssueAlertActionsV2SlackNotifyService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2SlackNotifyServiceToHclTerraform(struct?: DataSentryIssueAlertActionsV2SlackNotifyService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2SlackNotifyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2SlackNotifyService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2SlackNotifyService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // workspace - computed: true, optional: false, required: false
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
}
export interface DataSentryIssueAlertActionsV2 {
}

export function dataSentryIssueAlertActionsV2ToTerraform(struct?: DataSentryIssueAlertActionsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertActionsV2ToHclTerraform(struct?: DataSentryIssueAlertActionsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertActionsV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSentryIssueAlertActionsV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertActionsV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_devops_create_ticket - computed: true, optional: false, required: false
  private _azureDevopsCreateTicket = new DataSentryIssueAlertActionsV2AzureDevopsCreateTicketOutputReference(this, "azure_devops_create_ticket");
  public get azureDevopsCreateTicket() {
    return this._azureDevopsCreateTicket;
  }

  // discord_notify_service - computed: true, optional: false, required: false
  private _discordNotifyService = new DataSentryIssueAlertActionsV2DiscordNotifyServiceOutputReference(this, "discord_notify_service");
  public get discordNotifyService() {
    return this._discordNotifyService;
  }

  // github_create_ticket - computed: true, optional: false, required: false
  private _githubCreateTicket = new DataSentryIssueAlertActionsV2GithubCreateTicketOutputReference(this, "github_create_ticket");
  public get githubCreateTicket() {
    return this._githubCreateTicket;
  }

  // github_enterprise_create_ticket - computed: true, optional: false, required: false
  private _githubEnterpriseCreateTicket = new DataSentryIssueAlertActionsV2GithubEnterpriseCreateTicketOutputReference(this, "github_enterprise_create_ticket");
  public get githubEnterpriseCreateTicket() {
    return this._githubEnterpriseCreateTicket;
  }

  // jira_create_ticket - computed: true, optional: false, required: false
  private _jiraCreateTicket = new DataSentryIssueAlertActionsV2JiraCreateTicketOutputReference(this, "jira_create_ticket");
  public get jiraCreateTicket() {
    return this._jiraCreateTicket;
  }

  // jira_server_create_ticket - computed: true, optional: false, required: false
  private _jiraServerCreateTicket = new DataSentryIssueAlertActionsV2JiraServerCreateTicketOutputReference(this, "jira_server_create_ticket");
  public get jiraServerCreateTicket() {
    return this._jiraServerCreateTicket;
  }

  // msteams_notify_service - computed: true, optional: false, required: false
  private _msteamsNotifyService = new DataSentryIssueAlertActionsV2MsteamsNotifyServiceOutputReference(this, "msteams_notify_service");
  public get msteamsNotifyService() {
    return this._msteamsNotifyService;
  }

  // notify_email - computed: true, optional: false, required: false
  private _notifyEmail = new DataSentryIssueAlertActionsV2NotifyEmailOutputReference(this, "notify_email");
  public get notifyEmail() {
    return this._notifyEmail;
  }

  // notify_event - computed: true, optional: false, required: false
  private _notifyEvent = new DataSentryIssueAlertActionsV2NotifyEventOutputReference(this, "notify_event");
  public get notifyEvent() {
    return this._notifyEvent;
  }

  // notify_event_sentry_app - computed: true, optional: false, required: false
  private _notifyEventSentryApp = new DataSentryIssueAlertActionsV2NotifyEventSentryAppOutputReference(this, "notify_event_sentry_app");
  public get notifyEventSentryApp() {
    return this._notifyEventSentryApp;
  }

  // notify_event_service - computed: true, optional: false, required: false
  private _notifyEventService = new DataSentryIssueAlertActionsV2NotifyEventServiceOutputReference(this, "notify_event_service");
  public get notifyEventService() {
    return this._notifyEventService;
  }

  // opsgenie_notify_team - computed: true, optional: false, required: false
  private _opsgenieNotifyTeam = new DataSentryIssueAlertActionsV2OpsgenieNotifyTeamOutputReference(this, "opsgenie_notify_team");
  public get opsgenieNotifyTeam() {
    return this._opsgenieNotifyTeam;
  }

  // pagerduty_notify_service - computed: true, optional: false, required: false
  private _pagerdutyNotifyService = new DataSentryIssueAlertActionsV2PagerdutyNotifyServiceOutputReference(this, "pagerduty_notify_service");
  public get pagerdutyNotifyService() {
    return this._pagerdutyNotifyService;
  }

  // slack_notify_service - computed: true, optional: false, required: false
  private _slackNotifyService = new DataSentryIssueAlertActionsV2SlackNotifyServiceOutputReference(this, "slack_notify_service");
  public get slackNotifyService() {
    return this._slackNotifyService;
  }
}

export class DataSentryIssueAlertActionsV2List extends cdktf.ComplexList {

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
  public get(index: number): DataSentryIssueAlertActionsV2OutputReference {
    return new DataSentryIssueAlertActionsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSentryIssueAlertConditionsV2EventFrequency {
}

export function dataSentryIssueAlertConditionsV2EventFrequencyToTerraform(struct?: DataSentryIssueAlertConditionsV2EventFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertConditionsV2EventFrequencyToHclTerraform(struct?: DataSentryIssueAlertConditionsV2EventFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertConditionsV2EventFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertConditionsV2EventFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertConditionsV2EventFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison_interval - computed: true, optional: false, required: false
  public get comparisonInterval() {
    return this.getStringAttribute('comparison_interval');
  }

  // comparison_type - computed: true, optional: false, required: false
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataSentryIssueAlertConditionsV2EventFrequencyPercent {
}

export function dataSentryIssueAlertConditionsV2EventFrequencyPercentToTerraform(struct?: DataSentryIssueAlertConditionsV2EventFrequencyPercent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertConditionsV2EventFrequencyPercentToHclTerraform(struct?: DataSentryIssueAlertConditionsV2EventFrequencyPercent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertConditionsV2EventFrequencyPercentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertConditionsV2EventFrequencyPercent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertConditionsV2EventFrequencyPercent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison_interval - computed: true, optional: false, required: false
  public get comparisonInterval() {
    return this.getStringAttribute('comparison_interval');
  }

  // comparison_type - computed: true, optional: false, required: false
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataSentryIssueAlertConditionsV2EventUniqueUserFrequency {
}

export function dataSentryIssueAlertConditionsV2EventUniqueUserFrequencyToTerraform(struct?: DataSentryIssueAlertConditionsV2EventUniqueUserFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertConditionsV2EventUniqueUserFrequencyToHclTerraform(struct?: DataSentryIssueAlertConditionsV2EventUniqueUserFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertConditionsV2EventUniqueUserFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertConditionsV2EventUniqueUserFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertConditionsV2EventUniqueUserFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison_interval - computed: true, optional: false, required: false
  public get comparisonInterval() {
    return this.getStringAttribute('comparison_interval');
  }

  // comparison_type - computed: true, optional: false, required: false
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataSentryIssueAlertConditionsV2ExistingHighPriorityIssue {
}

export function dataSentryIssueAlertConditionsV2ExistingHighPriorityIssueToTerraform(struct?: DataSentryIssueAlertConditionsV2ExistingHighPriorityIssue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertConditionsV2ExistingHighPriorityIssueToHclTerraform(struct?: DataSentryIssueAlertConditionsV2ExistingHighPriorityIssue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertConditionsV2ExistingHighPriorityIssueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertConditionsV2ExistingHighPriorityIssue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertConditionsV2ExistingHighPriorityIssue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataSentryIssueAlertConditionsV2FirstSeenEvent {
}

export function dataSentryIssueAlertConditionsV2FirstSeenEventToTerraform(struct?: DataSentryIssueAlertConditionsV2FirstSeenEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertConditionsV2FirstSeenEventToHclTerraform(struct?: DataSentryIssueAlertConditionsV2FirstSeenEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertConditionsV2FirstSeenEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertConditionsV2FirstSeenEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertConditionsV2FirstSeenEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataSentryIssueAlertConditionsV2NewHighPriorityIssue {
}

export function dataSentryIssueAlertConditionsV2NewHighPriorityIssueToTerraform(struct?: DataSentryIssueAlertConditionsV2NewHighPriorityIssue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertConditionsV2NewHighPriorityIssueToHclTerraform(struct?: DataSentryIssueAlertConditionsV2NewHighPriorityIssue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertConditionsV2NewHighPriorityIssueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertConditionsV2NewHighPriorityIssue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertConditionsV2NewHighPriorityIssue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataSentryIssueAlertConditionsV2ReappearedEvent {
}

export function dataSentryIssueAlertConditionsV2ReappearedEventToTerraform(struct?: DataSentryIssueAlertConditionsV2ReappearedEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertConditionsV2ReappearedEventToHclTerraform(struct?: DataSentryIssueAlertConditionsV2ReappearedEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertConditionsV2ReappearedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertConditionsV2ReappearedEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertConditionsV2ReappearedEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataSentryIssueAlertConditionsV2RegressionEvent {
}

export function dataSentryIssueAlertConditionsV2RegressionEventToTerraform(struct?: DataSentryIssueAlertConditionsV2RegressionEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertConditionsV2RegressionEventToHclTerraform(struct?: DataSentryIssueAlertConditionsV2RegressionEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertConditionsV2RegressionEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertConditionsV2RegressionEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertConditionsV2RegressionEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataSentryIssueAlertConditionsV2 {
}

export function dataSentryIssueAlertConditionsV2ToTerraform(struct?: DataSentryIssueAlertConditionsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertConditionsV2ToHclTerraform(struct?: DataSentryIssueAlertConditionsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertConditionsV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSentryIssueAlertConditionsV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertConditionsV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_frequency - computed: true, optional: false, required: false
  private _eventFrequency = new DataSentryIssueAlertConditionsV2EventFrequencyOutputReference(this, "event_frequency");
  public get eventFrequency() {
    return this._eventFrequency;
  }

  // event_frequency_percent - computed: true, optional: false, required: false
  private _eventFrequencyPercent = new DataSentryIssueAlertConditionsV2EventFrequencyPercentOutputReference(this, "event_frequency_percent");
  public get eventFrequencyPercent() {
    return this._eventFrequencyPercent;
  }

  // event_unique_user_frequency - computed: true, optional: false, required: false
  private _eventUniqueUserFrequency = new DataSentryIssueAlertConditionsV2EventUniqueUserFrequencyOutputReference(this, "event_unique_user_frequency");
  public get eventUniqueUserFrequency() {
    return this._eventUniqueUserFrequency;
  }

  // existing_high_priority_issue - computed: true, optional: false, required: false
  private _existingHighPriorityIssue = new DataSentryIssueAlertConditionsV2ExistingHighPriorityIssueOutputReference(this, "existing_high_priority_issue");
  public get existingHighPriorityIssue() {
    return this._existingHighPriorityIssue;
  }

  // first_seen_event - computed: true, optional: false, required: false
  private _firstSeenEvent = new DataSentryIssueAlertConditionsV2FirstSeenEventOutputReference(this, "first_seen_event");
  public get firstSeenEvent() {
    return this._firstSeenEvent;
  }

  // new_high_priority_issue - computed: true, optional: false, required: false
  private _newHighPriorityIssue = new DataSentryIssueAlertConditionsV2NewHighPriorityIssueOutputReference(this, "new_high_priority_issue");
  public get newHighPriorityIssue() {
    return this._newHighPriorityIssue;
  }

  // reappeared_event - computed: true, optional: false, required: false
  private _reappearedEvent = new DataSentryIssueAlertConditionsV2ReappearedEventOutputReference(this, "reappeared_event");
  public get reappearedEvent() {
    return this._reappearedEvent;
  }

  // regression_event - computed: true, optional: false, required: false
  private _regressionEvent = new DataSentryIssueAlertConditionsV2RegressionEventOutputReference(this, "regression_event");
  public get regressionEvent() {
    return this._regressionEvent;
  }
}

export class DataSentryIssueAlertConditionsV2List extends cdktf.ComplexList {

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
  public get(index: number): DataSentryIssueAlertConditionsV2OutputReference {
    return new DataSentryIssueAlertConditionsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSentryIssueAlertFiltersV2AgeComparison {
}

export function dataSentryIssueAlertFiltersV2AgeComparisonToTerraform(struct?: DataSentryIssueAlertFiltersV2AgeComparison): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertFiltersV2AgeComparisonToHclTerraform(struct?: DataSentryIssueAlertFiltersV2AgeComparison): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertFiltersV2AgeComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertFiltersV2AgeComparison | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertFiltersV2AgeComparison | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison_type - computed: true, optional: false, required: false
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataSentryIssueAlertFiltersV2AssignedTo {
}

export function dataSentryIssueAlertFiltersV2AssignedToToTerraform(struct?: DataSentryIssueAlertFiltersV2AssignedTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertFiltersV2AssignedToToHclTerraform(struct?: DataSentryIssueAlertFiltersV2AssignedTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertFiltersV2AssignedToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertFiltersV2AssignedTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertFiltersV2AssignedTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_identifier - computed: true, optional: false, required: false
  public get targetIdentifier() {
    return this.getNumberAttribute('target_identifier');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getNumberAttribute('target_type');
  }
}
export interface DataSentryIssueAlertFiltersV2EventAttribute {
}

export function dataSentryIssueAlertFiltersV2EventAttributeToTerraform(struct?: DataSentryIssueAlertFiltersV2EventAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertFiltersV2EventAttributeToHclTerraform(struct?: DataSentryIssueAlertFiltersV2EventAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertFiltersV2EventAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertFiltersV2EventAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertFiltersV2EventAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataSentryIssueAlertFiltersV2IssueCategory {
}

export function dataSentryIssueAlertFiltersV2IssueCategoryToTerraform(struct?: DataSentryIssueAlertFiltersV2IssueCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertFiltersV2IssueCategoryToHclTerraform(struct?: DataSentryIssueAlertFiltersV2IssueCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertFiltersV2IssueCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertFiltersV2IssueCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertFiltersV2IssueCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataSentryIssueAlertFiltersV2IssueOccurrences {
}

export function dataSentryIssueAlertFiltersV2IssueOccurrencesToTerraform(struct?: DataSentryIssueAlertFiltersV2IssueOccurrences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertFiltersV2IssueOccurrencesToHclTerraform(struct?: DataSentryIssueAlertFiltersV2IssueOccurrences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertFiltersV2IssueOccurrencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertFiltersV2IssueOccurrences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertFiltersV2IssueOccurrences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataSentryIssueAlertFiltersV2LatestAdoptedRelease {
}

export function dataSentryIssueAlertFiltersV2LatestAdoptedReleaseToTerraform(struct?: DataSentryIssueAlertFiltersV2LatestAdoptedRelease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertFiltersV2LatestAdoptedReleaseToHclTerraform(struct?: DataSentryIssueAlertFiltersV2LatestAdoptedRelease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertFiltersV2LatestAdoptedReleaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertFiltersV2LatestAdoptedRelease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertFiltersV2LatestAdoptedRelease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getNumberAttribute('environment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // older_or_newer - computed: true, optional: false, required: false
  public get olderOrNewer() {
    return this.getNumberAttribute('older_or_newer');
  }

  // oldest_or_newest - computed: true, optional: false, required: false
  public get oldestOrNewest() {
    return this.getNumberAttribute('oldest_or_newest');
  }
}
export interface DataSentryIssueAlertFiltersV2LatestRelease {
}

export function dataSentryIssueAlertFiltersV2LatestReleaseToTerraform(struct?: DataSentryIssueAlertFiltersV2LatestRelease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertFiltersV2LatestReleaseToHclTerraform(struct?: DataSentryIssueAlertFiltersV2LatestRelease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertFiltersV2LatestReleaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertFiltersV2LatestRelease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertFiltersV2LatestRelease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataSentryIssueAlertFiltersV2Level {
}

export function dataSentryIssueAlertFiltersV2LevelToTerraform(struct?: DataSentryIssueAlertFiltersV2Level): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertFiltersV2LevelToHclTerraform(struct?: DataSentryIssueAlertFiltersV2Level): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertFiltersV2LevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertFiltersV2Level | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertFiltersV2Level | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataSentryIssueAlertFiltersV2TaggedEvent {
}

export function dataSentryIssueAlertFiltersV2TaggedEventToTerraform(struct?: DataSentryIssueAlertFiltersV2TaggedEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertFiltersV2TaggedEventToHclTerraform(struct?: DataSentryIssueAlertFiltersV2TaggedEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertFiltersV2TaggedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSentryIssueAlertFiltersV2TaggedEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertFiltersV2TaggedEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataSentryIssueAlertFiltersV2 {
}

export function dataSentryIssueAlertFiltersV2ToTerraform(struct?: DataSentryIssueAlertFiltersV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSentryIssueAlertFiltersV2ToHclTerraform(struct?: DataSentryIssueAlertFiltersV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSentryIssueAlertFiltersV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSentryIssueAlertFiltersV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSentryIssueAlertFiltersV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // age_comparison - computed: true, optional: false, required: false
  private _ageComparison = new DataSentryIssueAlertFiltersV2AgeComparisonOutputReference(this, "age_comparison");
  public get ageComparison() {
    return this._ageComparison;
  }

  // assigned_to - computed: true, optional: false, required: false
  private _assignedTo = new DataSentryIssueAlertFiltersV2AssignedToOutputReference(this, "assigned_to");
  public get assignedTo() {
    return this._assignedTo;
  }

  // event_attribute - computed: true, optional: false, required: false
  private _eventAttribute = new DataSentryIssueAlertFiltersV2EventAttributeOutputReference(this, "event_attribute");
  public get eventAttribute() {
    return this._eventAttribute;
  }

  // issue_category - computed: true, optional: false, required: false
  private _issueCategory = new DataSentryIssueAlertFiltersV2IssueCategoryOutputReference(this, "issue_category");
  public get issueCategory() {
    return this._issueCategory;
  }

  // issue_occurrences - computed: true, optional: false, required: false
  private _issueOccurrences = new DataSentryIssueAlertFiltersV2IssueOccurrencesOutputReference(this, "issue_occurrences");
  public get issueOccurrences() {
    return this._issueOccurrences;
  }

  // latest_adopted_release - computed: true, optional: false, required: false
  private _latestAdoptedRelease = new DataSentryIssueAlertFiltersV2LatestAdoptedReleaseOutputReference(this, "latest_adopted_release");
  public get latestAdoptedRelease() {
    return this._latestAdoptedRelease;
  }

  // latest_release - computed: true, optional: false, required: false
  private _latestRelease = new DataSentryIssueAlertFiltersV2LatestReleaseOutputReference(this, "latest_release");
  public get latestRelease() {
    return this._latestRelease;
  }

  // level - computed: true, optional: false, required: false
  private _level = new DataSentryIssueAlertFiltersV2LevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }

  // tagged_event - computed: true, optional: false, required: false
  private _taggedEvent = new DataSentryIssueAlertFiltersV2TaggedEventOutputReference(this, "tagged_event");
  public get taggedEvent() {
    return this._taggedEvent;
  }
}

export class DataSentryIssueAlertFiltersV2List extends cdktf.ComplexList {

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
  public get(index: number): DataSentryIssueAlertFiltersV2OutputReference {
    return new DataSentryIssueAlertFiltersV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/issue_alert sentry_issue_alert}
*/
export class DataSentryIssueAlert extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_issue_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSentryIssueAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSentryIssueAlert to import
  * @param importFromId The id of the existing DataSentryIssueAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/issue_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSentryIssueAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_issue_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/data-sources/issue_alert sentry_issue_alert} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSentryIssueAlertConfig
  */
  public constructor(scope: Construct, id: string, config: DataSentryIssueAlertConfig) {
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
    this._id = config.id;
    this._organization = config.organization;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_match - computed: true, optional: false, required: false
  public get actionMatch() {
    return this.getStringAttribute('action_match');
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getStringAttribute('actions');
  }

  // actions_v2 - computed: true, optional: false, required: false
  private _actionsV2 = new DataSentryIssueAlertActionsV2List(this, "actions_v2", false);
  public get actionsV2() {
    return this._actionsV2;
  }

  // conditions - computed: true, optional: false, required: false
  public get conditions() {
    return this.getStringAttribute('conditions');
  }

  // conditions_v2 - computed: true, optional: false, required: false
  private _conditionsV2 = new DataSentryIssueAlertConditionsV2List(this, "conditions_v2", false);
  public get conditionsV2() {
    return this._conditionsV2;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // filter_match - computed: true, optional: false, required: false
  public get filterMatch() {
    return this.getStringAttribute('filter_match');
  }

  // filters - computed: true, optional: false, required: false
  public get filters() {
    return this.getStringAttribute('filters');
  }

  // filters_v2 - computed: true, optional: false, required: false
  private _filtersV2 = new DataSentryIssueAlertFiltersV2List(this, "filters_v2", false);
  public get filtersV2() {
    return this._filtersV2;
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
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
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
      project: cdktf.stringToTerraform(this._project),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
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
