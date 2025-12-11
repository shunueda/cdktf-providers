// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicehookWebhookTfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accept untrusted SSL certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#accept_untrusted_certs ServicehookWebhookTfs#accept_untrusted_certs}
  */
  readonly acceptUntrustedCerts?: boolean | cdktf.IResolvable;
  /**
  * Basic authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#basic_auth_password ServicehookWebhookTfs#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Basic authentication username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#basic_auth_username ServicehookWebhookTfs#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * Detailed messages to send - all, text, html, markdown or none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#detailed_messages_to_send ServicehookWebhookTfs#detailed_messages_to_send}
  */
  readonly detailedMessagesToSend?: string;
  /**
  * HTTP headers as key-value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#http_headers ServicehookWebhookTfs#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#id ServicehookWebhookTfs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource details to send - all, text, html, markdown or none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#messages_to_send ServicehookWebhookTfs#messages_to_send}
  */
  readonly messagesToSend?: string;
  /**
  * The project ID that will be used for the TFS event subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#project_id ServicehookWebhookTfs#project_id}
  */
  readonly projectId: string;
  /**
  * Resource details to send - all, minimal, or none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#resource_details_to_send ServicehookWebhookTfs#resource_details_to_send}
  */
  readonly resourceDetailsToSend?: string;
  /**
  * The URL to send HTTP POST to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#url ServicehookWebhookTfs#url}
  */
  readonly url: string;
  /**
  * build_completed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#build_completed ServicehookWebhookTfs#build_completed}
  */
  readonly buildCompleted?: ServicehookWebhookTfsBuildCompleted;
  /**
  * git_pull_request_commented block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#git_pull_request_commented ServicehookWebhookTfs#git_pull_request_commented}
  */
  readonly gitPullRequestCommented?: ServicehookWebhookTfsGitPullRequestCommented;
  /**
  * git_pull_request_created block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#git_pull_request_created ServicehookWebhookTfs#git_pull_request_created}
  */
  readonly gitPullRequestCreated?: ServicehookWebhookTfsGitPullRequestCreated;
  /**
  * git_pull_request_merge_attempted block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#git_pull_request_merge_attempted ServicehookWebhookTfs#git_pull_request_merge_attempted}
  */
  readonly gitPullRequestMergeAttempted?: ServicehookWebhookTfsGitPullRequestMergeAttempted;
  /**
  * git_pull_request_updated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#git_pull_request_updated ServicehookWebhookTfs#git_pull_request_updated}
  */
  readonly gitPullRequestUpdated?: ServicehookWebhookTfsGitPullRequestUpdated;
  /**
  * git_push block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#git_push ServicehookWebhookTfs#git_push}
  */
  readonly gitPush?: ServicehookWebhookTfsGitPush;
  /**
  * repository_created block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_created ServicehookWebhookTfs#repository_created}
  */
  readonly repositoryCreated?: ServicehookWebhookTfsRepositoryCreated;
  /**
  * repository_deleted block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_deleted ServicehookWebhookTfs#repository_deleted}
  */
  readonly repositoryDeleted?: ServicehookWebhookTfsRepositoryDeleted;
  /**
  * repository_forked block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_forked ServicehookWebhookTfs#repository_forked}
  */
  readonly repositoryForked?: ServicehookWebhookTfsRepositoryForked;
  /**
  * repository_renamed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_renamed ServicehookWebhookTfs#repository_renamed}
  */
  readonly repositoryRenamed?: ServicehookWebhookTfsRepositoryRenamed;
  /**
  * repository_status_changed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_status_changed ServicehookWebhookTfs#repository_status_changed}
  */
  readonly repositoryStatusChanged?: ServicehookWebhookTfsRepositoryStatusChanged;
  /**
  * service_connection_created block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#service_connection_created ServicehookWebhookTfs#service_connection_created}
  */
  readonly serviceConnectionCreated?: ServicehookWebhookTfsServiceConnectionCreated;
  /**
  * service_connection_updated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#service_connection_updated ServicehookWebhookTfs#service_connection_updated}
  */
  readonly serviceConnectionUpdated?: ServicehookWebhookTfsServiceConnectionUpdated;
  /**
  * tfvc_checkin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#tfvc_checkin ServicehookWebhookTfs#tfvc_checkin}
  */
  readonly tfvcCheckin?: ServicehookWebhookTfsTfvcCheckin;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#timeouts ServicehookWebhookTfs#timeouts}
  */
  readonly timeouts?: ServicehookWebhookTfsTimeouts;
  /**
  * work_item_commented block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#work_item_commented ServicehookWebhookTfs#work_item_commented}
  */
  readonly workItemCommented?: ServicehookWebhookTfsWorkItemCommented;
  /**
  * work_item_created block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#work_item_created ServicehookWebhookTfs#work_item_created}
  */
  readonly workItemCreated?: ServicehookWebhookTfsWorkItemCreated;
  /**
  * work_item_deleted block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#work_item_deleted ServicehookWebhookTfs#work_item_deleted}
  */
  readonly workItemDeleted?: ServicehookWebhookTfsWorkItemDeleted;
  /**
  * work_item_restored block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#work_item_restored ServicehookWebhookTfs#work_item_restored}
  */
  readonly workItemRestored?: ServicehookWebhookTfsWorkItemRestored;
  /**
  * work_item_updated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#work_item_updated ServicehookWebhookTfs#work_item_updated}
  */
  readonly workItemUpdated?: ServicehookWebhookTfsWorkItemUpdated;
}
export interface ServicehookWebhookTfsBuildCompleted {
  /**
  * Include only events for completed builds that have a specific completion status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#build_status ServicehookWebhookTfs#build_status}
  */
  readonly buildStatus?: string;
  /**
  * Include only events for completed builds for a specific pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#definition_name ServicehookWebhookTfs#definition_name}
  */
  readonly definitionName?: string;
}

export function servicehookWebhookTfsBuildCompletedToTerraform(struct?: ServicehookWebhookTfsBuildCompletedOutputReference | ServicehookWebhookTfsBuildCompleted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_status: cdktf.stringToTerraform(struct!.buildStatus),
    definition_name: cdktf.stringToTerraform(struct!.definitionName),
  }
}


export function servicehookWebhookTfsBuildCompletedToHclTerraform(struct?: ServicehookWebhookTfsBuildCompletedOutputReference | ServicehookWebhookTfsBuildCompleted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_status: {
      value: cdktf.stringToHclTerraform(struct!.buildStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    definition_name: {
      value: cdktf.stringToHclTerraform(struct!.definitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsBuildCompletedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsBuildCompleted | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildStatus = this._buildStatus;
    }
    if (this._definitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionName = this._definitionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsBuildCompleted | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildStatus = undefined;
      this._definitionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildStatus = value.buildStatus;
      this._definitionName = value.definitionName;
    }
  }

  // build_status - computed: false, optional: true, required: false
  private _buildStatus?: string; 
  public get buildStatus() {
    return this.getStringAttribute('build_status');
  }
  public set buildStatus(value: string) {
    this._buildStatus = value;
  }
  public resetBuildStatus() {
    this._buildStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildStatusInput() {
    return this._buildStatus;
  }

  // definition_name - computed: false, optional: true, required: false
  private _definitionName?: string; 
  public get definitionName() {
    return this.getStringAttribute('definition_name');
  }
  public set definitionName(value: string) {
    this._definitionName = value;
  }
  public resetDefinitionName() {
    this._definitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionNameInput() {
    return this._definitionName;
  }
}
export interface ServicehookWebhookTfsGitPullRequestCommented {
  /**
  * Include only events for pull requests in a specific branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#branch ServicehookWebhookTfs#branch}
  */
  readonly branch?: string;
  /**
  * Include only events for pull requests in a specific repository (repository ID). If not specified, all repositories in the project will trigger the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_id ServicehookWebhookTfs#repository_id}
  */
  readonly repositoryId?: string;
}

export function servicehookWebhookTfsGitPullRequestCommentedToTerraform(struct?: ServicehookWebhookTfsGitPullRequestCommentedOutputReference | ServicehookWebhookTfsGitPullRequestCommented): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
  }
}


export function servicehookWebhookTfsGitPullRequestCommentedToHclTerraform(struct?: ServicehookWebhookTfsGitPullRequestCommentedOutputReference | ServicehookWebhookTfsGitPullRequestCommented): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsGitPullRequestCommentedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsGitPullRequestCommented | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsGitPullRequestCommented | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._repositoryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._repositoryId = value.repositoryId;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }
}
export interface ServicehookWebhookTfsGitPullRequestCreated {
  /**
  * Include only events for pull requests in a specific branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#branch ServicehookWebhookTfs#branch}
  */
  readonly branch?: string;
  /**
  * Include only events for pull requests created by users in a specific group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#pull_request_created_by ServicehookWebhookTfs#pull_request_created_by}
  */
  readonly pullRequestCreatedBy?: string;
  /**
  * Include only events for pull requests with reviewers in a specific group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#pull_request_reviewers_contains ServicehookWebhookTfs#pull_request_reviewers_contains}
  */
  readonly pullRequestReviewersContains?: string;
  /**
  * Include only events for pull requests in a specific repository (repository ID). If not specified, all repositories in the project will trigger the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_id ServicehookWebhookTfs#repository_id}
  */
  readonly repositoryId?: string;
}

export function servicehookWebhookTfsGitPullRequestCreatedToTerraform(struct?: ServicehookWebhookTfsGitPullRequestCreatedOutputReference | ServicehookWebhookTfsGitPullRequestCreated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    pull_request_created_by: cdktf.stringToTerraform(struct!.pullRequestCreatedBy),
    pull_request_reviewers_contains: cdktf.stringToTerraform(struct!.pullRequestReviewersContains),
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
  }
}


export function servicehookWebhookTfsGitPullRequestCreatedToHclTerraform(struct?: ServicehookWebhookTfsGitPullRequestCreatedOutputReference | ServicehookWebhookTfsGitPullRequestCreated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request_created_by: {
      value: cdktf.stringToHclTerraform(struct!.pullRequestCreatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request_reviewers_contains: {
      value: cdktf.stringToHclTerraform(struct!.pullRequestReviewersContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsGitPullRequestCreatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsGitPullRequestCreated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._pullRequestCreatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestCreatedBy = this._pullRequestCreatedBy;
    }
    if (this._pullRequestReviewersContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestReviewersContains = this._pullRequestReviewersContains;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsGitPullRequestCreated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._pullRequestCreatedBy = undefined;
      this._pullRequestReviewersContains = undefined;
      this._repositoryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._pullRequestCreatedBy = value.pullRequestCreatedBy;
      this._pullRequestReviewersContains = value.pullRequestReviewersContains;
      this._repositoryId = value.repositoryId;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // pull_request_created_by - computed: false, optional: true, required: false
  private _pullRequestCreatedBy?: string; 
  public get pullRequestCreatedBy() {
    return this.getStringAttribute('pull_request_created_by');
  }
  public set pullRequestCreatedBy(value: string) {
    this._pullRequestCreatedBy = value;
  }
  public resetPullRequestCreatedBy() {
    this._pullRequestCreatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestCreatedByInput() {
    return this._pullRequestCreatedBy;
  }

  // pull_request_reviewers_contains - computed: false, optional: true, required: false
  private _pullRequestReviewersContains?: string; 
  public get pullRequestReviewersContains() {
    return this.getStringAttribute('pull_request_reviewers_contains');
  }
  public set pullRequestReviewersContains(value: string) {
    this._pullRequestReviewersContains = value;
  }
  public resetPullRequestReviewersContains() {
    this._pullRequestReviewersContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestReviewersContainsInput() {
    return this._pullRequestReviewersContains;
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }
}
export interface ServicehookWebhookTfsGitPullRequestMergeAttempted {
  /**
  * Include only events for pull requests in a specific branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#branch ServicehookWebhookTfs#branch}
  */
  readonly branch?: string;
  /**
  * Include only events for pull requests with a specific merge result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#merge_result ServicehookWebhookTfs#merge_result}
  */
  readonly mergeResult?: string;
  /**
  * Include only events for pull requests created by users in a specific group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#pull_request_created_by ServicehookWebhookTfs#pull_request_created_by}
  */
  readonly pullRequestCreatedBy?: string;
  /**
  * Include only events for pull requests with reviewers in a specific group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#pull_request_reviewers_contains ServicehookWebhookTfs#pull_request_reviewers_contains}
  */
  readonly pullRequestReviewersContains?: string;
  /**
  * Include only events for pull requests in a specific repository (repository ID). If not specified, all repositories in the project will trigger the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_id ServicehookWebhookTfs#repository_id}
  */
  readonly repositoryId?: string;
}

export function servicehookWebhookTfsGitPullRequestMergeAttemptedToTerraform(struct?: ServicehookWebhookTfsGitPullRequestMergeAttemptedOutputReference | ServicehookWebhookTfsGitPullRequestMergeAttempted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    merge_result: cdktf.stringToTerraform(struct!.mergeResult),
    pull_request_created_by: cdktf.stringToTerraform(struct!.pullRequestCreatedBy),
    pull_request_reviewers_contains: cdktf.stringToTerraform(struct!.pullRequestReviewersContains),
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
  }
}


export function servicehookWebhookTfsGitPullRequestMergeAttemptedToHclTerraform(struct?: ServicehookWebhookTfsGitPullRequestMergeAttemptedOutputReference | ServicehookWebhookTfsGitPullRequestMergeAttempted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merge_result: {
      value: cdktf.stringToHclTerraform(struct!.mergeResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request_created_by: {
      value: cdktf.stringToHclTerraform(struct!.pullRequestCreatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request_reviewers_contains: {
      value: cdktf.stringToHclTerraform(struct!.pullRequestReviewersContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsGitPullRequestMergeAttemptedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsGitPullRequestMergeAttempted | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._mergeResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeResult = this._mergeResult;
    }
    if (this._pullRequestCreatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestCreatedBy = this._pullRequestCreatedBy;
    }
    if (this._pullRequestReviewersContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestReviewersContains = this._pullRequestReviewersContains;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsGitPullRequestMergeAttempted | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._mergeResult = undefined;
      this._pullRequestCreatedBy = undefined;
      this._pullRequestReviewersContains = undefined;
      this._repositoryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._mergeResult = value.mergeResult;
      this._pullRequestCreatedBy = value.pullRequestCreatedBy;
      this._pullRequestReviewersContains = value.pullRequestReviewersContains;
      this._repositoryId = value.repositoryId;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // merge_result - computed: false, optional: true, required: false
  private _mergeResult?: string; 
  public get mergeResult() {
    return this.getStringAttribute('merge_result');
  }
  public set mergeResult(value: string) {
    this._mergeResult = value;
  }
  public resetMergeResult() {
    this._mergeResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeResultInput() {
    return this._mergeResult;
  }

  // pull_request_created_by - computed: false, optional: true, required: false
  private _pullRequestCreatedBy?: string; 
  public get pullRequestCreatedBy() {
    return this.getStringAttribute('pull_request_created_by');
  }
  public set pullRequestCreatedBy(value: string) {
    this._pullRequestCreatedBy = value;
  }
  public resetPullRequestCreatedBy() {
    this._pullRequestCreatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestCreatedByInput() {
    return this._pullRequestCreatedBy;
  }

  // pull_request_reviewers_contains - computed: false, optional: true, required: false
  private _pullRequestReviewersContains?: string; 
  public get pullRequestReviewersContains() {
    return this.getStringAttribute('pull_request_reviewers_contains');
  }
  public set pullRequestReviewersContains(value: string) {
    this._pullRequestReviewersContains = value;
  }
  public resetPullRequestReviewersContains() {
    this._pullRequestReviewersContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestReviewersContainsInput() {
    return this._pullRequestReviewersContains;
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }
}
export interface ServicehookWebhookTfsGitPullRequestUpdated {
  /**
  * Include only events for pull requests in a specific branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#branch ServicehookWebhookTfs#branch}
  */
  readonly branch?: string;
  /**
  * Include only events for pull requests with a specific change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#notification_type ServicehookWebhookTfs#notification_type}
  */
  readonly notificationType?: string;
  /**
  * Include only events for pull requests created by users in a specific group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#pull_request_created_by ServicehookWebhookTfs#pull_request_created_by}
  */
  readonly pullRequestCreatedBy?: string;
  /**
  * Include only events for pull requests with reviewers in a specific group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#pull_request_reviewers_contains ServicehookWebhookTfs#pull_request_reviewers_contains}
  */
  readonly pullRequestReviewersContains?: string;
  /**
  * Include only events for pull requests in a specific repository (repository ID). If not specified, all repositories in the project will trigger the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_id ServicehookWebhookTfs#repository_id}
  */
  readonly repositoryId?: string;
}

export function servicehookWebhookTfsGitPullRequestUpdatedToTerraform(struct?: ServicehookWebhookTfsGitPullRequestUpdatedOutputReference | ServicehookWebhookTfsGitPullRequestUpdated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    notification_type: cdktf.stringToTerraform(struct!.notificationType),
    pull_request_created_by: cdktf.stringToTerraform(struct!.pullRequestCreatedBy),
    pull_request_reviewers_contains: cdktf.stringToTerraform(struct!.pullRequestReviewersContains),
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
  }
}


export function servicehookWebhookTfsGitPullRequestUpdatedToHclTerraform(struct?: ServicehookWebhookTfsGitPullRequestUpdatedOutputReference | ServicehookWebhookTfsGitPullRequestUpdated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_type: {
      value: cdktf.stringToHclTerraform(struct!.notificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request_created_by: {
      value: cdktf.stringToHclTerraform(struct!.pullRequestCreatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request_reviewers_contains: {
      value: cdktf.stringToHclTerraform(struct!.pullRequestReviewersContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsGitPullRequestUpdatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsGitPullRequestUpdated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._notificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationType = this._notificationType;
    }
    if (this._pullRequestCreatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestCreatedBy = this._pullRequestCreatedBy;
    }
    if (this._pullRequestReviewersContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestReviewersContains = this._pullRequestReviewersContains;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsGitPullRequestUpdated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._notificationType = undefined;
      this._pullRequestCreatedBy = undefined;
      this._pullRequestReviewersContains = undefined;
      this._repositoryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._notificationType = value.notificationType;
      this._pullRequestCreatedBy = value.pullRequestCreatedBy;
      this._pullRequestReviewersContains = value.pullRequestReviewersContains;
      this._repositoryId = value.repositoryId;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // notification_type - computed: false, optional: true, required: false
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // pull_request_created_by - computed: false, optional: true, required: false
  private _pullRequestCreatedBy?: string; 
  public get pullRequestCreatedBy() {
    return this.getStringAttribute('pull_request_created_by');
  }
  public set pullRequestCreatedBy(value: string) {
    this._pullRequestCreatedBy = value;
  }
  public resetPullRequestCreatedBy() {
    this._pullRequestCreatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestCreatedByInput() {
    return this._pullRequestCreatedBy;
  }

  // pull_request_reviewers_contains - computed: false, optional: true, required: false
  private _pullRequestReviewersContains?: string; 
  public get pullRequestReviewersContains() {
    return this.getStringAttribute('pull_request_reviewers_contains');
  }
  public set pullRequestReviewersContains(value: string) {
    this._pullRequestReviewersContains = value;
  }
  public resetPullRequestReviewersContains() {
    this._pullRequestReviewersContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestReviewersContainsInput() {
    return this._pullRequestReviewersContains;
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }
}
export interface ServicehookWebhookTfsGitPush {
  /**
  * Include only events for code pushes to a specific branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#branch ServicehookWebhookTfs#branch}
  */
  readonly branch?: string;
  /**
  * Include only events for code pushes by users in a specific group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#pushed_by ServicehookWebhookTfs#pushed_by}
  */
  readonly pushedBy?: string;
  /**
  * Include only events for code pushes to a specific repository (repository ID). If not specified, all repositories in the project will trigger the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_id ServicehookWebhookTfs#repository_id}
  */
  readonly repositoryId?: string;
}

export function servicehookWebhookTfsGitPushToTerraform(struct?: ServicehookWebhookTfsGitPushOutputReference | ServicehookWebhookTfsGitPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    pushed_by: cdktf.stringToTerraform(struct!.pushedBy),
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
  }
}


export function servicehookWebhookTfsGitPushToHclTerraform(struct?: ServicehookWebhookTfsGitPushOutputReference | ServicehookWebhookTfsGitPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pushed_by: {
      value: cdktf.stringToHclTerraform(struct!.pushedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsGitPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsGitPush | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._pushedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushedBy = this._pushedBy;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsGitPush | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._pushedBy = undefined;
      this._repositoryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._pushedBy = value.pushedBy;
      this._repositoryId = value.repositoryId;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // pushed_by - computed: false, optional: true, required: false
  private _pushedBy?: string; 
  public get pushedBy() {
    return this.getStringAttribute('pushed_by');
  }
  public set pushedBy(value: string) {
    this._pushedBy = value;
  }
  public resetPushedBy() {
    this._pushedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushedByInput() {
    return this._pushedBy;
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }
}
export interface ServicehookWebhookTfsRepositoryCreated {
  /**
  * Include only events for repositories created in a specific project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#project_id ServicehookWebhookTfs#project_id}
  */
  readonly projectId?: string;
}

export function servicehookWebhookTfsRepositoryCreatedToTerraform(struct?: ServicehookWebhookTfsRepositoryCreatedOutputReference | ServicehookWebhookTfsRepositoryCreated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function servicehookWebhookTfsRepositoryCreatedToHclTerraform(struct?: ServicehookWebhookTfsRepositoryCreatedOutputReference | ServicehookWebhookTfsRepositoryCreated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsRepositoryCreatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsRepositoryCreated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsRepositoryCreated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ServicehookWebhookTfsRepositoryDeleted {
  /**
  * Include only events for repositories with a specific repository ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_id ServicehookWebhookTfs#repository_id}
  */
  readonly repositoryId?: string;
}

export function servicehookWebhookTfsRepositoryDeletedToTerraform(struct?: ServicehookWebhookTfsRepositoryDeletedOutputReference | ServicehookWebhookTfsRepositoryDeleted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
  }
}


export function servicehookWebhookTfsRepositoryDeletedToHclTerraform(struct?: ServicehookWebhookTfsRepositoryDeletedOutputReference | ServicehookWebhookTfsRepositoryDeleted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsRepositoryDeletedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsRepositoryDeleted | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsRepositoryDeleted | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryId = value.repositoryId;
    }
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }
}
export interface ServicehookWebhookTfsRepositoryForked {
  /**
  * Include only events for repositories with a specific repository ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_id ServicehookWebhookTfs#repository_id}
  */
  readonly repositoryId?: string;
}

export function servicehookWebhookTfsRepositoryForkedToTerraform(struct?: ServicehookWebhookTfsRepositoryForkedOutputReference | ServicehookWebhookTfsRepositoryForked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
  }
}


export function servicehookWebhookTfsRepositoryForkedToHclTerraform(struct?: ServicehookWebhookTfsRepositoryForkedOutputReference | ServicehookWebhookTfsRepositoryForked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsRepositoryForkedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsRepositoryForked | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsRepositoryForked | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryId = value.repositoryId;
    }
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }
}
export interface ServicehookWebhookTfsRepositoryRenamed {
  /**
  * Include only events for repositories with a specific repository ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_id ServicehookWebhookTfs#repository_id}
  */
  readonly repositoryId?: string;
}

export function servicehookWebhookTfsRepositoryRenamedToTerraform(struct?: ServicehookWebhookTfsRepositoryRenamedOutputReference | ServicehookWebhookTfsRepositoryRenamed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
  }
}


export function servicehookWebhookTfsRepositoryRenamedToHclTerraform(struct?: ServicehookWebhookTfsRepositoryRenamedOutputReference | ServicehookWebhookTfsRepositoryRenamed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsRepositoryRenamedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsRepositoryRenamed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsRepositoryRenamed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryId = value.repositoryId;
    }
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }
}
export interface ServicehookWebhookTfsRepositoryStatusChanged {
  /**
  * Include only events for repositories with a specific repository ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#repository_id ServicehookWebhookTfs#repository_id}
  */
  readonly repositoryId?: string;
}

export function servicehookWebhookTfsRepositoryStatusChangedToTerraform(struct?: ServicehookWebhookTfsRepositoryStatusChangedOutputReference | ServicehookWebhookTfsRepositoryStatusChanged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
  }
}


export function servicehookWebhookTfsRepositoryStatusChangedToHclTerraform(struct?: ServicehookWebhookTfsRepositoryStatusChangedOutputReference | ServicehookWebhookTfsRepositoryStatusChanged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsRepositoryStatusChangedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsRepositoryStatusChanged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsRepositoryStatusChanged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryId = value.repositoryId;
    }
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }
}
export interface ServicehookWebhookTfsServiceConnectionCreated {
  /**
  * Include only events for service connections created in a specific project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#project_id ServicehookWebhookTfs#project_id}
  */
  readonly projectId?: string;
}

export function servicehookWebhookTfsServiceConnectionCreatedToTerraform(struct?: ServicehookWebhookTfsServiceConnectionCreatedOutputReference | ServicehookWebhookTfsServiceConnectionCreated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function servicehookWebhookTfsServiceConnectionCreatedToHclTerraform(struct?: ServicehookWebhookTfsServiceConnectionCreatedOutputReference | ServicehookWebhookTfsServiceConnectionCreated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsServiceConnectionCreatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsServiceConnectionCreated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsServiceConnectionCreated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ServicehookWebhookTfsServiceConnectionUpdated {
  /**
  * Include only events for service connections updated in a specific project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#project_id ServicehookWebhookTfs#project_id}
  */
  readonly projectId?: string;
}

export function servicehookWebhookTfsServiceConnectionUpdatedToTerraform(struct?: ServicehookWebhookTfsServiceConnectionUpdatedOutputReference | ServicehookWebhookTfsServiceConnectionUpdated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function servicehookWebhookTfsServiceConnectionUpdatedToHclTerraform(struct?: ServicehookWebhookTfsServiceConnectionUpdatedOutputReference | ServicehookWebhookTfsServiceConnectionUpdated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsServiceConnectionUpdatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsServiceConnectionUpdated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsServiceConnectionUpdated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ServicehookWebhookTfsTfvcCheckin {
  /**
  * Include only events for check-ins that change files under a specific path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#path ServicehookWebhookTfs#path}
  */
  readonly path: string;
}

export function servicehookWebhookTfsTfvcCheckinToTerraform(struct?: ServicehookWebhookTfsTfvcCheckinOutputReference | ServicehookWebhookTfsTfvcCheckin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function servicehookWebhookTfsTfvcCheckinToHclTerraform(struct?: ServicehookWebhookTfsTfvcCheckinOutputReference | ServicehookWebhookTfsTfvcCheckin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsTfvcCheckinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsTfvcCheckin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsTfvcCheckin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface ServicehookWebhookTfsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#create ServicehookWebhookTfs#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#delete ServicehookWebhookTfs#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#read ServicehookWebhookTfs#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#update ServicehookWebhookTfs#update}
  */
  readonly update?: string;
}

export function servicehookWebhookTfsTimeoutsToTerraform(struct?: ServicehookWebhookTfsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function servicehookWebhookTfsTimeoutsToHclTerraform(struct?: ServicehookWebhookTfsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookWebhookTfsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicehookWebhookTfsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ServicehookWebhookTfsWorkItemCommented {
  /**
  * Include only events for work items under a specific area path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#area_path ServicehookWebhookTfs#area_path}
  */
  readonly areaPath?: string;
  /**
  * Include only events for work items with a comment that contains a specific string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#comment_pattern ServicehookWebhookTfs#comment_pattern}
  */
  readonly commentPattern?: string;
  /**
  * Include only events for work items that contain a specific tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#tag ServicehookWebhookTfs#tag}
  */
  readonly tag?: string;
  /**
  * Include only events for work items of a specific type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#work_item_type ServicehookWebhookTfs#work_item_type}
  */
  readonly workItemType?: string;
}

export function servicehookWebhookTfsWorkItemCommentedToTerraform(struct?: ServicehookWebhookTfsWorkItemCommentedOutputReference | ServicehookWebhookTfsWorkItemCommented): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_path: cdktf.stringToTerraform(struct!.areaPath),
    comment_pattern: cdktf.stringToTerraform(struct!.commentPattern),
    tag: cdktf.stringToTerraform(struct!.tag),
    work_item_type: cdktf.stringToTerraform(struct!.workItemType),
  }
}


export function servicehookWebhookTfsWorkItemCommentedToHclTerraform(struct?: ServicehookWebhookTfsWorkItemCommentedOutputReference | ServicehookWebhookTfsWorkItemCommented): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_path: {
      value: cdktf.stringToHclTerraform(struct!.areaPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment_pattern: {
      value: cdktf.stringToHclTerraform(struct!.commentPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class ServicehookWebhookTfsWorkItemCommentedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsWorkItemCommented | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaPath = this._areaPath;
    }
    if (this._commentPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentPattern = this._commentPattern;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._workItemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workItemType = this._workItemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsWorkItemCommented | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areaPath = undefined;
      this._commentPattern = undefined;
      this._tag = undefined;
      this._workItemType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areaPath = value.areaPath;
      this._commentPattern = value.commentPattern;
      this._tag = value.tag;
      this._workItemType = value.workItemType;
    }
  }

  // area_path - computed: false, optional: true, required: false
  private _areaPath?: string; 
  public get areaPath() {
    return this.getStringAttribute('area_path');
  }
  public set areaPath(value: string) {
    this._areaPath = value;
  }
  public resetAreaPath() {
    this._areaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaPathInput() {
    return this._areaPath;
  }

  // comment_pattern - computed: false, optional: true, required: false
  private _commentPattern?: string; 
  public get commentPattern() {
    return this.getStringAttribute('comment_pattern');
  }
  public set commentPattern(value: string) {
    this._commentPattern = value;
  }
  public resetCommentPattern() {
    this._commentPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentPatternInput() {
    return this._commentPattern;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // work_item_type - computed: false, optional: true, required: false
  private _workItemType?: string; 
  public get workItemType() {
    return this.getStringAttribute('work_item_type');
  }
  public set workItemType(value: string) {
    this._workItemType = value;
  }
  public resetWorkItemType() {
    this._workItemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemTypeInput() {
    return this._workItemType;
  }
}
export interface ServicehookWebhookTfsWorkItemCreated {
  /**
  * Include only events for work items under a specific area path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#area_path ServicehookWebhookTfs#area_path}
  */
  readonly areaPath?: string;
  /**
  * Include only events for work items with one or more links added or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#links_changed ServicehookWebhookTfs#links_changed}
  */
  readonly linksChanged?: boolean | cdktf.IResolvable;
  /**
  * Include only events for work items that contain a specific tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#tag ServicehookWebhookTfs#tag}
  */
  readonly tag?: string;
  /**
  * Include only events for work items of a specific type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#work_item_type ServicehookWebhookTfs#work_item_type}
  */
  readonly workItemType?: string;
}

export function servicehookWebhookTfsWorkItemCreatedToTerraform(struct?: ServicehookWebhookTfsWorkItemCreatedOutputReference | ServicehookWebhookTfsWorkItemCreated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_path: cdktf.stringToTerraform(struct!.areaPath),
    links_changed: cdktf.booleanToTerraform(struct!.linksChanged),
    tag: cdktf.stringToTerraform(struct!.tag),
    work_item_type: cdktf.stringToTerraform(struct!.workItemType),
  }
}


export function servicehookWebhookTfsWorkItemCreatedToHclTerraform(struct?: ServicehookWebhookTfsWorkItemCreatedOutputReference | ServicehookWebhookTfsWorkItemCreated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_path: {
      value: cdktf.stringToHclTerraform(struct!.areaPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    links_changed: {
      value: cdktf.booleanToHclTerraform(struct!.linksChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class ServicehookWebhookTfsWorkItemCreatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsWorkItemCreated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaPath = this._areaPath;
    }
    if (this._linksChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.linksChanged = this._linksChanged;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._workItemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workItemType = this._workItemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsWorkItemCreated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areaPath = undefined;
      this._linksChanged = undefined;
      this._tag = undefined;
      this._workItemType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areaPath = value.areaPath;
      this._linksChanged = value.linksChanged;
      this._tag = value.tag;
      this._workItemType = value.workItemType;
    }
  }

  // area_path - computed: false, optional: true, required: false
  private _areaPath?: string; 
  public get areaPath() {
    return this.getStringAttribute('area_path');
  }
  public set areaPath(value: string) {
    this._areaPath = value;
  }
  public resetAreaPath() {
    this._areaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaPathInput() {
    return this._areaPath;
  }

  // links_changed - computed: false, optional: true, required: false
  private _linksChanged?: boolean | cdktf.IResolvable; 
  public get linksChanged() {
    return this.getBooleanAttribute('links_changed');
  }
  public set linksChanged(value: boolean | cdktf.IResolvable) {
    this._linksChanged = value;
  }
  public resetLinksChanged() {
    this._linksChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksChangedInput() {
    return this._linksChanged;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // work_item_type - computed: false, optional: true, required: false
  private _workItemType?: string; 
  public get workItemType() {
    return this.getStringAttribute('work_item_type');
  }
  public set workItemType(value: string) {
    this._workItemType = value;
  }
  public resetWorkItemType() {
    this._workItemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemTypeInput() {
    return this._workItemType;
  }
}
export interface ServicehookWebhookTfsWorkItemDeleted {
  /**
  * Include only events for work items under a specific area path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#area_path ServicehookWebhookTfs#area_path}
  */
  readonly areaPath?: string;
  /**
  * Include only events for work items that contain a specific tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#tag ServicehookWebhookTfs#tag}
  */
  readonly tag?: string;
  /**
  * Include only events for work items of a specific type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#work_item_type ServicehookWebhookTfs#work_item_type}
  */
  readonly workItemType?: string;
}

export function servicehookWebhookTfsWorkItemDeletedToTerraform(struct?: ServicehookWebhookTfsWorkItemDeletedOutputReference | ServicehookWebhookTfsWorkItemDeleted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_path: cdktf.stringToTerraform(struct!.areaPath),
    tag: cdktf.stringToTerraform(struct!.tag),
    work_item_type: cdktf.stringToTerraform(struct!.workItemType),
  }
}


export function servicehookWebhookTfsWorkItemDeletedToHclTerraform(struct?: ServicehookWebhookTfsWorkItemDeletedOutputReference | ServicehookWebhookTfsWorkItemDeleted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_path: {
      value: cdktf.stringToHclTerraform(struct!.areaPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class ServicehookWebhookTfsWorkItemDeletedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsWorkItemDeleted | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaPath = this._areaPath;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._workItemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workItemType = this._workItemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsWorkItemDeleted | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areaPath = undefined;
      this._tag = undefined;
      this._workItemType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areaPath = value.areaPath;
      this._tag = value.tag;
      this._workItemType = value.workItemType;
    }
  }

  // area_path - computed: false, optional: true, required: false
  private _areaPath?: string; 
  public get areaPath() {
    return this.getStringAttribute('area_path');
  }
  public set areaPath(value: string) {
    this._areaPath = value;
  }
  public resetAreaPath() {
    this._areaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaPathInput() {
    return this._areaPath;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // work_item_type - computed: false, optional: true, required: false
  private _workItemType?: string; 
  public get workItemType() {
    return this.getStringAttribute('work_item_type');
  }
  public set workItemType(value: string) {
    this._workItemType = value;
  }
  public resetWorkItemType() {
    this._workItemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemTypeInput() {
    return this._workItemType;
  }
}
export interface ServicehookWebhookTfsWorkItemRestored {
  /**
  * Include only events for work items under a specific area path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#area_path ServicehookWebhookTfs#area_path}
  */
  readonly areaPath?: string;
  /**
  * Include only events for work items that contain a specific tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#tag ServicehookWebhookTfs#tag}
  */
  readonly tag?: string;
  /**
  * Include only events for work items of a specific type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#work_item_type ServicehookWebhookTfs#work_item_type}
  */
  readonly workItemType?: string;
}

export function servicehookWebhookTfsWorkItemRestoredToTerraform(struct?: ServicehookWebhookTfsWorkItemRestoredOutputReference | ServicehookWebhookTfsWorkItemRestored): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_path: cdktf.stringToTerraform(struct!.areaPath),
    tag: cdktf.stringToTerraform(struct!.tag),
    work_item_type: cdktf.stringToTerraform(struct!.workItemType),
  }
}


export function servicehookWebhookTfsWorkItemRestoredToHclTerraform(struct?: ServicehookWebhookTfsWorkItemRestoredOutputReference | ServicehookWebhookTfsWorkItemRestored): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_path: {
      value: cdktf.stringToHclTerraform(struct!.areaPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class ServicehookWebhookTfsWorkItemRestoredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsWorkItemRestored | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaPath = this._areaPath;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._workItemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workItemType = this._workItemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsWorkItemRestored | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areaPath = undefined;
      this._tag = undefined;
      this._workItemType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areaPath = value.areaPath;
      this._tag = value.tag;
      this._workItemType = value.workItemType;
    }
  }

  // area_path - computed: false, optional: true, required: false
  private _areaPath?: string; 
  public get areaPath() {
    return this.getStringAttribute('area_path');
  }
  public set areaPath(value: string) {
    this._areaPath = value;
  }
  public resetAreaPath() {
    this._areaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaPathInput() {
    return this._areaPath;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // work_item_type - computed: false, optional: true, required: false
  private _workItemType?: string; 
  public get workItemType() {
    return this.getStringAttribute('work_item_type');
  }
  public set workItemType(value: string) {
    this._workItemType = value;
  }
  public resetWorkItemType() {
    this._workItemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemTypeInput() {
    return this._workItemType;
  }
}
export interface ServicehookWebhookTfsWorkItemUpdated {
  /**
  * Include only events for work items under a specific area path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#area_path ServicehookWebhookTfs#area_path}
  */
  readonly areaPath?: string;
  /**
  * Include only events for work items with a change in a specific field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#changed_fields ServicehookWebhookTfs#changed_fields}
  */
  readonly changedFields?: string;
  /**
  * Include only events for work items with one or more links added or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#links_changed ServicehookWebhookTfs#links_changed}
  */
  readonly linksChanged?: boolean | cdktf.IResolvable;
  /**
  * Include only events for work items that contain a specific tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#tag ServicehookWebhookTfs#tag}
  */
  readonly tag?: string;
  /**
  * Include only events for work items of a specific type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#work_item_type ServicehookWebhookTfs#work_item_type}
  */
  readonly workItemType?: string;
}

export function servicehookWebhookTfsWorkItemUpdatedToTerraform(struct?: ServicehookWebhookTfsWorkItemUpdatedOutputReference | ServicehookWebhookTfsWorkItemUpdated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_path: cdktf.stringToTerraform(struct!.areaPath),
    changed_fields: cdktf.stringToTerraform(struct!.changedFields),
    links_changed: cdktf.booleanToTerraform(struct!.linksChanged),
    tag: cdktf.stringToTerraform(struct!.tag),
    work_item_type: cdktf.stringToTerraform(struct!.workItemType),
  }
}


export function servicehookWebhookTfsWorkItemUpdatedToHclTerraform(struct?: ServicehookWebhookTfsWorkItemUpdatedOutputReference | ServicehookWebhookTfsWorkItemUpdated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_path: {
      value: cdktf.stringToHclTerraform(struct!.areaPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    changed_fields: {
      value: cdktf.stringToHclTerraform(struct!.changedFields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    links_changed: {
      value: cdktf.booleanToHclTerraform(struct!.linksChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class ServicehookWebhookTfsWorkItemUpdatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookWebhookTfsWorkItemUpdated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaPath = this._areaPath;
    }
    if (this._changedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.changedFields = this._changedFields;
    }
    if (this._linksChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.linksChanged = this._linksChanged;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._workItemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workItemType = this._workItemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookWebhookTfsWorkItemUpdated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areaPath = undefined;
      this._changedFields = undefined;
      this._linksChanged = undefined;
      this._tag = undefined;
      this._workItemType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areaPath = value.areaPath;
      this._changedFields = value.changedFields;
      this._linksChanged = value.linksChanged;
      this._tag = value.tag;
      this._workItemType = value.workItemType;
    }
  }

  // area_path - computed: false, optional: true, required: false
  private _areaPath?: string; 
  public get areaPath() {
    return this.getStringAttribute('area_path');
  }
  public set areaPath(value: string) {
    this._areaPath = value;
  }
  public resetAreaPath() {
    this._areaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaPathInput() {
    return this._areaPath;
  }

  // changed_fields - computed: false, optional: true, required: false
  private _changedFields?: string; 
  public get changedFields() {
    return this.getStringAttribute('changed_fields');
  }
  public set changedFields(value: string) {
    this._changedFields = value;
  }
  public resetChangedFields() {
    this._changedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changedFieldsInput() {
    return this._changedFields;
  }

  // links_changed - computed: false, optional: true, required: false
  private _linksChanged?: boolean | cdktf.IResolvable; 
  public get linksChanged() {
    return this.getBooleanAttribute('links_changed');
  }
  public set linksChanged(value: boolean | cdktf.IResolvable) {
    this._linksChanged = value;
  }
  public resetLinksChanged() {
    this._linksChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksChangedInput() {
    return this._linksChanged;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // work_item_type - computed: false, optional: true, required: false
  private _workItemType?: string; 
  public get workItemType() {
    return this.getStringAttribute('work_item_type');
  }
  public set workItemType(value: string) {
    this._workItemType = value;
  }
  public resetWorkItemType() {
    this._workItemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemTypeInput() {
    return this._workItemType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs azuredevops_servicehook_webhook_tfs}
*/
export class ServicehookWebhookTfs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_servicehook_webhook_tfs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicehookWebhookTfs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicehookWebhookTfs to import
  * @param importFromId The id of the existing ServicehookWebhookTfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicehookWebhookTfs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_servicehook_webhook_tfs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/servicehook_webhook_tfs azuredevops_servicehook_webhook_tfs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicehookWebhookTfsConfig
  */
  public constructor(scope: Construct, id: string, config: ServicehookWebhookTfsConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_servicehook_webhook_tfs',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.0',
        providerVersionConstraint: '1.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptUntrustedCerts = config.acceptUntrustedCerts;
    this._basicAuthPassword = config.basicAuthPassword;
    this._basicAuthUsername = config.basicAuthUsername;
    this._detailedMessagesToSend = config.detailedMessagesToSend;
    this._httpHeaders = config.httpHeaders;
    this._id = config.id;
    this._messagesToSend = config.messagesToSend;
    this._projectId = config.projectId;
    this._resourceDetailsToSend = config.resourceDetailsToSend;
    this._url = config.url;
    this._buildCompleted.internalValue = config.buildCompleted;
    this._gitPullRequestCommented.internalValue = config.gitPullRequestCommented;
    this._gitPullRequestCreated.internalValue = config.gitPullRequestCreated;
    this._gitPullRequestMergeAttempted.internalValue = config.gitPullRequestMergeAttempted;
    this._gitPullRequestUpdated.internalValue = config.gitPullRequestUpdated;
    this._gitPush.internalValue = config.gitPush;
    this._repositoryCreated.internalValue = config.repositoryCreated;
    this._repositoryDeleted.internalValue = config.repositoryDeleted;
    this._repositoryForked.internalValue = config.repositoryForked;
    this._repositoryRenamed.internalValue = config.repositoryRenamed;
    this._repositoryStatusChanged.internalValue = config.repositoryStatusChanged;
    this._serviceConnectionCreated.internalValue = config.serviceConnectionCreated;
    this._serviceConnectionUpdated.internalValue = config.serviceConnectionUpdated;
    this._tfvcCheckin.internalValue = config.tfvcCheckin;
    this._timeouts.internalValue = config.timeouts;
    this._workItemCommented.internalValue = config.workItemCommented;
    this._workItemCreated.internalValue = config.workItemCreated;
    this._workItemDeleted.internalValue = config.workItemDeleted;
    this._workItemRestored.internalValue = config.workItemRestored;
    this._workItemUpdated.internalValue = config.workItemUpdated;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_untrusted_certs - computed: false, optional: true, required: false
  private _acceptUntrustedCerts?: boolean | cdktf.IResolvable; 
  public get acceptUntrustedCerts() {
    return this.getBooleanAttribute('accept_untrusted_certs');
  }
  public set acceptUntrustedCerts(value: boolean | cdktf.IResolvable) {
    this._acceptUntrustedCerts = value;
  }
  public resetAcceptUntrustedCerts() {
    this._acceptUntrustedCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptUntrustedCertsInput() {
    return this._acceptUntrustedCerts;
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
  public set basicAuthUsername(value: string) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }

  // detailed_messages_to_send - computed: false, optional: true, required: false
  private _detailedMessagesToSend?: string; 
  public get detailedMessagesToSend() {
    return this.getStringAttribute('detailed_messages_to_send');
  }
  public set detailedMessagesToSend(value: string) {
    this._detailedMessagesToSend = value;
  }
  public resetDetailedMessagesToSend() {
    this._detailedMessagesToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedMessagesToSendInput() {
    return this._detailedMessagesToSend;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
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

  // messages_to_send - computed: false, optional: true, required: false
  private _messagesToSend?: string; 
  public get messagesToSend() {
    return this.getStringAttribute('messages_to_send');
  }
  public set messagesToSend(value: string) {
    this._messagesToSend = value;
  }
  public resetMessagesToSend() {
    this._messagesToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesToSendInput() {
    return this._messagesToSend;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // resource_details_to_send - computed: false, optional: true, required: false
  private _resourceDetailsToSend?: string; 
  public get resourceDetailsToSend() {
    return this.getStringAttribute('resource_details_to_send');
  }
  public set resourceDetailsToSend(value: string) {
    this._resourceDetailsToSend = value;
  }
  public resetResourceDetailsToSend() {
    this._resourceDetailsToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDetailsToSendInput() {
    return this._resourceDetailsToSend;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // build_completed - computed: false, optional: true, required: false
  private _buildCompleted = new ServicehookWebhookTfsBuildCompletedOutputReference(this, "build_completed");
  public get buildCompleted() {
    return this._buildCompleted;
  }
  public putBuildCompleted(value: ServicehookWebhookTfsBuildCompleted) {
    this._buildCompleted.internalValue = value;
  }
  public resetBuildCompleted() {
    this._buildCompleted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCompletedInput() {
    return this._buildCompleted.internalValue;
  }

  // git_pull_request_commented - computed: false, optional: true, required: false
  private _gitPullRequestCommented = new ServicehookWebhookTfsGitPullRequestCommentedOutputReference(this, "git_pull_request_commented");
  public get gitPullRequestCommented() {
    return this._gitPullRequestCommented;
  }
  public putGitPullRequestCommented(value: ServicehookWebhookTfsGitPullRequestCommented) {
    this._gitPullRequestCommented.internalValue = value;
  }
  public resetGitPullRequestCommented() {
    this._gitPullRequestCommented.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPullRequestCommentedInput() {
    return this._gitPullRequestCommented.internalValue;
  }

  // git_pull_request_created - computed: false, optional: true, required: false
  private _gitPullRequestCreated = new ServicehookWebhookTfsGitPullRequestCreatedOutputReference(this, "git_pull_request_created");
  public get gitPullRequestCreated() {
    return this._gitPullRequestCreated;
  }
  public putGitPullRequestCreated(value: ServicehookWebhookTfsGitPullRequestCreated) {
    this._gitPullRequestCreated.internalValue = value;
  }
  public resetGitPullRequestCreated() {
    this._gitPullRequestCreated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPullRequestCreatedInput() {
    return this._gitPullRequestCreated.internalValue;
  }

  // git_pull_request_merge_attempted - computed: false, optional: true, required: false
  private _gitPullRequestMergeAttempted = new ServicehookWebhookTfsGitPullRequestMergeAttemptedOutputReference(this, "git_pull_request_merge_attempted");
  public get gitPullRequestMergeAttempted() {
    return this._gitPullRequestMergeAttempted;
  }
  public putGitPullRequestMergeAttempted(value: ServicehookWebhookTfsGitPullRequestMergeAttempted) {
    this._gitPullRequestMergeAttempted.internalValue = value;
  }
  public resetGitPullRequestMergeAttempted() {
    this._gitPullRequestMergeAttempted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPullRequestMergeAttemptedInput() {
    return this._gitPullRequestMergeAttempted.internalValue;
  }

  // git_pull_request_updated - computed: false, optional: true, required: false
  private _gitPullRequestUpdated = new ServicehookWebhookTfsGitPullRequestUpdatedOutputReference(this, "git_pull_request_updated");
  public get gitPullRequestUpdated() {
    return this._gitPullRequestUpdated;
  }
  public putGitPullRequestUpdated(value: ServicehookWebhookTfsGitPullRequestUpdated) {
    this._gitPullRequestUpdated.internalValue = value;
  }
  public resetGitPullRequestUpdated() {
    this._gitPullRequestUpdated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPullRequestUpdatedInput() {
    return this._gitPullRequestUpdated.internalValue;
  }

  // git_push - computed: false, optional: true, required: false
  private _gitPush = new ServicehookWebhookTfsGitPushOutputReference(this, "git_push");
  public get gitPush() {
    return this._gitPush;
  }
  public putGitPush(value: ServicehookWebhookTfsGitPush) {
    this._gitPush.internalValue = value;
  }
  public resetGitPush() {
    this._gitPush.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPushInput() {
    return this._gitPush.internalValue;
  }

  // repository_created - computed: false, optional: true, required: false
  private _repositoryCreated = new ServicehookWebhookTfsRepositoryCreatedOutputReference(this, "repository_created");
  public get repositoryCreated() {
    return this._repositoryCreated;
  }
  public putRepositoryCreated(value: ServicehookWebhookTfsRepositoryCreated) {
    this._repositoryCreated.internalValue = value;
  }
  public resetRepositoryCreated() {
    this._repositoryCreated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCreatedInput() {
    return this._repositoryCreated.internalValue;
  }

  // repository_deleted - computed: false, optional: true, required: false
  private _repositoryDeleted = new ServicehookWebhookTfsRepositoryDeletedOutputReference(this, "repository_deleted");
  public get repositoryDeleted() {
    return this._repositoryDeleted;
  }
  public putRepositoryDeleted(value: ServicehookWebhookTfsRepositoryDeleted) {
    this._repositoryDeleted.internalValue = value;
  }
  public resetRepositoryDeleted() {
    this._repositoryDeleted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryDeletedInput() {
    return this._repositoryDeleted.internalValue;
  }

  // repository_forked - computed: false, optional: true, required: false
  private _repositoryForked = new ServicehookWebhookTfsRepositoryForkedOutputReference(this, "repository_forked");
  public get repositoryForked() {
    return this._repositoryForked;
  }
  public putRepositoryForked(value: ServicehookWebhookTfsRepositoryForked) {
    this._repositoryForked.internalValue = value;
  }
  public resetRepositoryForked() {
    this._repositoryForked.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryForkedInput() {
    return this._repositoryForked.internalValue;
  }

  // repository_renamed - computed: false, optional: true, required: false
  private _repositoryRenamed = new ServicehookWebhookTfsRepositoryRenamedOutputReference(this, "repository_renamed");
  public get repositoryRenamed() {
    return this._repositoryRenamed;
  }
  public putRepositoryRenamed(value: ServicehookWebhookTfsRepositoryRenamed) {
    this._repositoryRenamed.internalValue = value;
  }
  public resetRepositoryRenamed() {
    this._repositoryRenamed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryRenamedInput() {
    return this._repositoryRenamed.internalValue;
  }

  // repository_status_changed - computed: false, optional: true, required: false
  private _repositoryStatusChanged = new ServicehookWebhookTfsRepositoryStatusChangedOutputReference(this, "repository_status_changed");
  public get repositoryStatusChanged() {
    return this._repositoryStatusChanged;
  }
  public putRepositoryStatusChanged(value: ServicehookWebhookTfsRepositoryStatusChanged) {
    this._repositoryStatusChanged.internalValue = value;
  }
  public resetRepositoryStatusChanged() {
    this._repositoryStatusChanged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryStatusChangedInput() {
    return this._repositoryStatusChanged.internalValue;
  }

  // service_connection_created - computed: false, optional: true, required: false
  private _serviceConnectionCreated = new ServicehookWebhookTfsServiceConnectionCreatedOutputReference(this, "service_connection_created");
  public get serviceConnectionCreated() {
    return this._serviceConnectionCreated;
  }
  public putServiceConnectionCreated(value: ServicehookWebhookTfsServiceConnectionCreated) {
    this._serviceConnectionCreated.internalValue = value;
  }
  public resetServiceConnectionCreated() {
    this._serviceConnectionCreated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectionCreatedInput() {
    return this._serviceConnectionCreated.internalValue;
  }

  // service_connection_updated - computed: false, optional: true, required: false
  private _serviceConnectionUpdated = new ServicehookWebhookTfsServiceConnectionUpdatedOutputReference(this, "service_connection_updated");
  public get serviceConnectionUpdated() {
    return this._serviceConnectionUpdated;
  }
  public putServiceConnectionUpdated(value: ServicehookWebhookTfsServiceConnectionUpdated) {
    this._serviceConnectionUpdated.internalValue = value;
  }
  public resetServiceConnectionUpdated() {
    this._serviceConnectionUpdated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectionUpdatedInput() {
    return this._serviceConnectionUpdated.internalValue;
  }

  // tfvc_checkin - computed: false, optional: true, required: false
  private _tfvcCheckin = new ServicehookWebhookTfsTfvcCheckinOutputReference(this, "tfvc_checkin");
  public get tfvcCheckin() {
    return this._tfvcCheckin;
  }
  public putTfvcCheckin(value: ServicehookWebhookTfsTfvcCheckin) {
    this._tfvcCheckin.internalValue = value;
  }
  public resetTfvcCheckin() {
    this._tfvcCheckin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfvcCheckinInput() {
    return this._tfvcCheckin.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicehookWebhookTfsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicehookWebhookTfsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // work_item_commented - computed: false, optional: true, required: false
  private _workItemCommented = new ServicehookWebhookTfsWorkItemCommentedOutputReference(this, "work_item_commented");
  public get workItemCommented() {
    return this._workItemCommented;
  }
  public putWorkItemCommented(value: ServicehookWebhookTfsWorkItemCommented) {
    this._workItemCommented.internalValue = value;
  }
  public resetWorkItemCommented() {
    this._workItemCommented.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemCommentedInput() {
    return this._workItemCommented.internalValue;
  }

  // work_item_created - computed: false, optional: true, required: false
  private _workItemCreated = new ServicehookWebhookTfsWorkItemCreatedOutputReference(this, "work_item_created");
  public get workItemCreated() {
    return this._workItemCreated;
  }
  public putWorkItemCreated(value: ServicehookWebhookTfsWorkItemCreated) {
    this._workItemCreated.internalValue = value;
  }
  public resetWorkItemCreated() {
    this._workItemCreated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemCreatedInput() {
    return this._workItemCreated.internalValue;
  }

  // work_item_deleted - computed: false, optional: true, required: false
  private _workItemDeleted = new ServicehookWebhookTfsWorkItemDeletedOutputReference(this, "work_item_deleted");
  public get workItemDeleted() {
    return this._workItemDeleted;
  }
  public putWorkItemDeleted(value: ServicehookWebhookTfsWorkItemDeleted) {
    this._workItemDeleted.internalValue = value;
  }
  public resetWorkItemDeleted() {
    this._workItemDeleted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemDeletedInput() {
    return this._workItemDeleted.internalValue;
  }

  // work_item_restored - computed: false, optional: true, required: false
  private _workItemRestored = new ServicehookWebhookTfsWorkItemRestoredOutputReference(this, "work_item_restored");
  public get workItemRestored() {
    return this._workItemRestored;
  }
  public putWorkItemRestored(value: ServicehookWebhookTfsWorkItemRestored) {
    this._workItemRestored.internalValue = value;
  }
  public resetWorkItemRestored() {
    this._workItemRestored.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemRestoredInput() {
    return this._workItemRestored.internalValue;
  }

  // work_item_updated - computed: false, optional: true, required: false
  private _workItemUpdated = new ServicehookWebhookTfsWorkItemUpdatedOutputReference(this, "work_item_updated");
  public get workItemUpdated() {
    return this._workItemUpdated;
  }
  public putWorkItemUpdated(value: ServicehookWebhookTfsWorkItemUpdated) {
    this._workItemUpdated.internalValue = value;
  }
  public resetWorkItemUpdated() {
    this._workItemUpdated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workItemUpdatedInput() {
    return this._workItemUpdated.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_untrusted_certs: cdktf.booleanToTerraform(this._acceptUntrustedCerts),
      basic_auth_password: cdktf.stringToTerraform(this._basicAuthPassword),
      basic_auth_username: cdktf.stringToTerraform(this._basicAuthUsername),
      detailed_messages_to_send: cdktf.stringToTerraform(this._detailedMessagesToSend),
      http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._httpHeaders),
      id: cdktf.stringToTerraform(this._id),
      messages_to_send: cdktf.stringToTerraform(this._messagesToSend),
      project_id: cdktf.stringToTerraform(this._projectId),
      resource_details_to_send: cdktf.stringToTerraform(this._resourceDetailsToSend),
      url: cdktf.stringToTerraform(this._url),
      build_completed: servicehookWebhookTfsBuildCompletedToTerraform(this._buildCompleted.internalValue),
      git_pull_request_commented: servicehookWebhookTfsGitPullRequestCommentedToTerraform(this._gitPullRequestCommented.internalValue),
      git_pull_request_created: servicehookWebhookTfsGitPullRequestCreatedToTerraform(this._gitPullRequestCreated.internalValue),
      git_pull_request_merge_attempted: servicehookWebhookTfsGitPullRequestMergeAttemptedToTerraform(this._gitPullRequestMergeAttempted.internalValue),
      git_pull_request_updated: servicehookWebhookTfsGitPullRequestUpdatedToTerraform(this._gitPullRequestUpdated.internalValue),
      git_push: servicehookWebhookTfsGitPushToTerraform(this._gitPush.internalValue),
      repository_created: servicehookWebhookTfsRepositoryCreatedToTerraform(this._repositoryCreated.internalValue),
      repository_deleted: servicehookWebhookTfsRepositoryDeletedToTerraform(this._repositoryDeleted.internalValue),
      repository_forked: servicehookWebhookTfsRepositoryForkedToTerraform(this._repositoryForked.internalValue),
      repository_renamed: servicehookWebhookTfsRepositoryRenamedToTerraform(this._repositoryRenamed.internalValue),
      repository_status_changed: servicehookWebhookTfsRepositoryStatusChangedToTerraform(this._repositoryStatusChanged.internalValue),
      service_connection_created: servicehookWebhookTfsServiceConnectionCreatedToTerraform(this._serviceConnectionCreated.internalValue),
      service_connection_updated: servicehookWebhookTfsServiceConnectionUpdatedToTerraform(this._serviceConnectionUpdated.internalValue),
      tfvc_checkin: servicehookWebhookTfsTfvcCheckinToTerraform(this._tfvcCheckin.internalValue),
      timeouts: servicehookWebhookTfsTimeoutsToTerraform(this._timeouts.internalValue),
      work_item_commented: servicehookWebhookTfsWorkItemCommentedToTerraform(this._workItemCommented.internalValue),
      work_item_created: servicehookWebhookTfsWorkItemCreatedToTerraform(this._workItemCreated.internalValue),
      work_item_deleted: servicehookWebhookTfsWorkItemDeletedToTerraform(this._workItemDeleted.internalValue),
      work_item_restored: servicehookWebhookTfsWorkItemRestoredToTerraform(this._workItemRestored.internalValue),
      work_item_updated: servicehookWebhookTfsWorkItemUpdatedToTerraform(this._workItemUpdated.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_untrusted_certs: {
        value: cdktf.booleanToHclTerraform(this._acceptUntrustedCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      basic_auth_password: {
        value: cdktf.stringToHclTerraform(this._basicAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_username: {
        value: cdktf.stringToHclTerraform(this._basicAuthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detailed_messages_to_send: {
        value: cdktf.stringToHclTerraform(this._detailedMessagesToSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._httpHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messages_to_send: {
        value: cdktf.stringToHclTerraform(this._messagesToSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_details_to_send: {
        value: cdktf.stringToHclTerraform(this._resourceDetailsToSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_completed: {
        value: servicehookWebhookTfsBuildCompletedToHclTerraform(this._buildCompleted.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsBuildCompletedList",
      },
      git_pull_request_commented: {
        value: servicehookWebhookTfsGitPullRequestCommentedToHclTerraform(this._gitPullRequestCommented.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsGitPullRequestCommentedList",
      },
      git_pull_request_created: {
        value: servicehookWebhookTfsGitPullRequestCreatedToHclTerraform(this._gitPullRequestCreated.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsGitPullRequestCreatedList",
      },
      git_pull_request_merge_attempted: {
        value: servicehookWebhookTfsGitPullRequestMergeAttemptedToHclTerraform(this._gitPullRequestMergeAttempted.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsGitPullRequestMergeAttemptedList",
      },
      git_pull_request_updated: {
        value: servicehookWebhookTfsGitPullRequestUpdatedToHclTerraform(this._gitPullRequestUpdated.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsGitPullRequestUpdatedList",
      },
      git_push: {
        value: servicehookWebhookTfsGitPushToHclTerraform(this._gitPush.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsGitPushList",
      },
      repository_created: {
        value: servicehookWebhookTfsRepositoryCreatedToHclTerraform(this._repositoryCreated.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsRepositoryCreatedList",
      },
      repository_deleted: {
        value: servicehookWebhookTfsRepositoryDeletedToHclTerraform(this._repositoryDeleted.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsRepositoryDeletedList",
      },
      repository_forked: {
        value: servicehookWebhookTfsRepositoryForkedToHclTerraform(this._repositoryForked.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsRepositoryForkedList",
      },
      repository_renamed: {
        value: servicehookWebhookTfsRepositoryRenamedToHclTerraform(this._repositoryRenamed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsRepositoryRenamedList",
      },
      repository_status_changed: {
        value: servicehookWebhookTfsRepositoryStatusChangedToHclTerraform(this._repositoryStatusChanged.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsRepositoryStatusChangedList",
      },
      service_connection_created: {
        value: servicehookWebhookTfsServiceConnectionCreatedToHclTerraform(this._serviceConnectionCreated.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsServiceConnectionCreatedList",
      },
      service_connection_updated: {
        value: servicehookWebhookTfsServiceConnectionUpdatedToHclTerraform(this._serviceConnectionUpdated.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsServiceConnectionUpdatedList",
      },
      tfvc_checkin: {
        value: servicehookWebhookTfsTfvcCheckinToHclTerraform(this._tfvcCheckin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsTfvcCheckinList",
      },
      timeouts: {
        value: servicehookWebhookTfsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicehookWebhookTfsTimeouts",
      },
      work_item_commented: {
        value: servicehookWebhookTfsWorkItemCommentedToHclTerraform(this._workItemCommented.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsWorkItemCommentedList",
      },
      work_item_created: {
        value: servicehookWebhookTfsWorkItemCreatedToHclTerraform(this._workItemCreated.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsWorkItemCreatedList",
      },
      work_item_deleted: {
        value: servicehookWebhookTfsWorkItemDeletedToHclTerraform(this._workItemDeleted.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsWorkItemDeletedList",
      },
      work_item_restored: {
        value: servicehookWebhookTfsWorkItemRestoredToHclTerraform(this._workItemRestored.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsWorkItemRestoredList",
      },
      work_item_updated: {
        value: servicehookWebhookTfsWorkItemUpdatedToHclTerraform(this._workItemUpdated.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookWebhookTfsWorkItemUpdatedList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
