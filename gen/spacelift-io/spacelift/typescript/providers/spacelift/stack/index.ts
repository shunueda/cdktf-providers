// https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Project globs is an optional list of paths to track changes of in addition to the project root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#additional_project_globs Stack#additional_project_globs}
  */
  readonly additionalProjectGlobs?: string[];
  /**
  * Indicates whether this stack can manage others. Defaults to `false`. This field will be removed in a future version. Use `spacelift_role_attachment` resource to manage stack permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#administrative Stack#administrative}
  */
  readonly administrative?: boolean | cdktf.IResolvable;
  /**
  * List of after-apply scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#after_apply Stack#after_apply}
  */
  readonly afterApply?: string[];
  /**
  * List of after-destroy scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#after_destroy Stack#after_destroy}
  */
  readonly afterDestroy?: string[];
  /**
  * List of after-init scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#after_init Stack#after_init}
  */
  readonly afterInit?: string[];
  /**
  * List of after-perform scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#after_perform Stack#after_perform}
  */
  readonly afterPerform?: string[];
  /**
  * List of after-plan scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#after_plan Stack#after_plan}
  */
  readonly afterPlan?: string[];
  /**
  * List of after-run scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#after_run Stack#after_run}
  */
  readonly afterRun?: string[];
  /**
  * Indicates whether a proposed run can be promoted to a tracked a run. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#allow_run_promotion Stack#allow_run_promotion}
  */
  readonly allowRunPromotion?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether changes to this stack can be automatically deployed. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#autodeploy Stack#autodeploy}
  */
  readonly autodeploy?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether obsolete proposed changes should automatically be retried. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#autoretry Stack#autoretry}
  */
  readonly autoretry?: boolean | cdktf.IResolvable;
  /**
  * List of before-apply scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#before_apply Stack#before_apply}
  */
  readonly beforeApply?: string[];
  /**
  * List of before-destroy scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#before_destroy Stack#before_destroy}
  */
  readonly beforeDestroy?: string[];
  /**
  * List of before-init scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#before_init Stack#before_init}
  */
  readonly beforeInit?: string[];
  /**
  * List of before-perform scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#before_perform Stack#before_perform}
  */
  readonly beforePerform?: string[];
  /**
  * List of before-plan scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#before_plan Stack#before_plan}
  */
  readonly beforePlan?: string[];
  /**
  * Git branch to apply changes to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#branch Stack#branch}
  */
  readonly branch: string;
  /**
  * Free-form stack description for users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#description Stack#description}
  */
  readonly description?: string;
  /**
  * Indicates whether local preview runs can be triggered on this Stack. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#enable_local_preview Stack#enable_local_preview}
  */
  readonly enableLocalPreview?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether sensitive outputs created by this stack can be uploaded to Spacelift to be used by Stack Dependency references. Triggered only when corresponding option is enabled on the Worker Pool used by the Stack as well. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#enable_sensitive_outputs_upload Stack#enable_sensitive_outputs_upload}
  */
  readonly enableSensitiveOutputsUpload?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether well-known secret masking is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#enable_well_known_secret_masking Stack#enable_well_known_secret_masking}
  */
  readonly enableWellKnownSecretMasking?: boolean | cdktf.IResolvable;
  /**
  * Git sparse checkout paths is an optional list of paths to use for sparse checkout. If not set, the entire repository will be checked out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#git_sparse_checkout_paths Stack#git_sparse_checkout_paths}
  */
  readonly gitSparseCheckoutPaths?: string[];
  /**
  * Use `allow_run_promotion` instead. Indicates whether GitHub users can promote proposed runs to tracked runs from the Checks API. This is called allow run promotion in the UI. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#github_action_deploy Stack#github_action_deploy}
  */
  readonly githubActionDeploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#id Stack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * State file to upload when creating a new stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#import_state Stack#import_state}
  */
  readonly importState?: string;
  /**
  * Path to the state file to upload when creating a new stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#import_state_file Stack#import_state_file}
  */
  readonly importStateFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#labels Stack#labels}
  */
  readonly labels?: string[];
  /**
  * Determines if Spacelift should manage state for this stack. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#manage_state Stack#manage_state}
  */
  readonly manageState?: boolean | cdktf.IResolvable;
  /**
  * Name of the stack - should be unique in one account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#name Stack#name}
  */
  readonly name: string;
  /**
  * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#project_root Stack#project_root}
  */
  readonly projectRoot?: string;
  /**
  * Protect this stack from accidental deletion. If set, attempts to delete this stack will fail. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#protect_from_deletion Stack#protect_from_deletion}
  */
  readonly protectFromDeletion?: boolean | cdktf.IResolvable;
  /**
  * Name of the repository, without the owner part
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#repository Stack#repository}
  */
  readonly repository: string;
  /**
  * Name of the Docker image used to process Runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#runner_image Stack#runner_image}
  */
  readonly runnerImage?: string;
  /**
  * Allows setting the custom ID (slug) for the stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#slug Stack#slug}
  */
  readonly slug?: string;
  /**
  * ID (slug) of the space the stack is in. Defaults to `legacy` if it exists, otherwise `root`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#space_id Stack#space_id}
  */
  readonly spaceId?: string;
  /**
  * Indicates whether you can access the Stack state file from other stacks or outside of Spacelift. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#terraform_external_state_access Stack#terraform_external_state_access}
  */
  readonly terraformExternalStateAccess?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether runs on this will use terraform's sensitive value system to sanitize the outputs of Terraform state and plans in spacelift instead of sanitizing all fields. Note: Requires the terraform version to be v1.0.1 or above. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#terraform_smart_sanitization Stack#terraform_smart_sanitization}
  */
  readonly terraformSmartSanitization?: boolean | cdktf.IResolvable;
  /**
  * Terraform version to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#terraform_version Stack#terraform_version}
  */
  readonly terraformVersion?: string;
  /**
  * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#terraform_workflow_tool Stack#terraform_workflow_tool}
  */
  readonly terraformWorkflowTool?: string;
  /**
  * Terraform workspace to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#terraform_workspace Stack#terraform_workspace}
  */
  readonly terraformWorkspace?: string;
  /**
  * ID of the worker pool to use. NOTE: worker_pool_id is required when using a self-hosted instance of Spacelift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#worker_pool_id Stack#worker_pool_id}
  */
  readonly workerPoolId?: string;
  /**
  * ansible block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#ansible Stack#ansible}
  */
  readonly ansible?: StackAnsible;
  /**
  * azure_devops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#azure_devops Stack#azure_devops}
  */
  readonly azureDevops?: StackAzureDevops;
  /**
  * bitbucket_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#bitbucket_cloud Stack#bitbucket_cloud}
  */
  readonly bitbucketCloud?: StackBitbucketCloud;
  /**
  * bitbucket_datacenter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#bitbucket_datacenter Stack#bitbucket_datacenter}
  */
  readonly bitbucketDatacenter?: StackBitbucketDatacenter;
  /**
  * cloudformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#cloudformation Stack#cloudformation}
  */
  readonly cloudformation?: StackCloudformation;
  /**
  * github_enterprise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#github_enterprise Stack#github_enterprise}
  */
  readonly githubEnterprise?: StackGithubEnterprise;
  /**
  * gitlab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#gitlab Stack#gitlab}
  */
  readonly gitlab?: StackGitlab;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#kubernetes Stack#kubernetes}
  */
  readonly kubernetes?: StackKubernetes;
  /**
  * pulumi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#pulumi Stack#pulumi}
  */
  readonly pulumi?: StackPulumi;
  /**
  * raw_git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#raw_git Stack#raw_git}
  */
  readonly rawGit?: StackRawGit;
  /**
  * showcase block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#showcase Stack#showcase}
  */
  readonly showcase?: StackShowcase;
  /**
  * terragrunt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#terragrunt Stack#terragrunt}
  */
  readonly terragrunt?: StackTerragrunt;
}
export interface StackAnsible {
  /**
  * The playbook Ansible should run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#playbook Stack#playbook}
  */
  readonly playbook: string;
}

export function stackAnsibleToTerraform(struct?: StackAnsibleOutputReference | StackAnsible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    playbook: cdktf.stringToTerraform(struct!.playbook),
  }
}


export function stackAnsibleToHclTerraform(struct?: StackAnsibleOutputReference | StackAnsible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    playbook: {
      value: cdktf.stringToHclTerraform(struct!.playbook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackAnsibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackAnsible | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._playbook !== undefined) {
      hasAnyValues = true;
      internalValueResult.playbook = this._playbook;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackAnsible | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._playbook = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._playbook = value.playbook;
    }
  }

  // playbook - computed: false, optional: false, required: true
  private _playbook?: string; 
  public get playbook() {
    return this.getStringAttribute('playbook');
  }
  public set playbook(value: string) {
    this._playbook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get playbookInput() {
    return this._playbook;
  }
}
export interface StackAzureDevops {
  /**
  * The ID of the Azure Devops integration. If not specified, the default integration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#id Stack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Azure DevOps project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#project Stack#project}
  */
  readonly project: string;
}

export function stackAzureDevopsToTerraform(struct?: StackAzureDevopsOutputReference | StackAzureDevops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function stackAzureDevopsToHclTerraform(struct?: StackAzureDevopsOutputReference | StackAzureDevops): any {
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

export class StackAzureDevopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackAzureDevops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackAzureDevops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._project = value.project;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
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
export interface StackBitbucketCloud {
  /**
  * The ID of the Bitbucket Cloud integration. If not specified, the default integration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#id Stack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Bitbucket project containing the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#namespace Stack#namespace}
  */
  readonly namespace: string;
}

export function stackBitbucketCloudToTerraform(struct?: StackBitbucketCloudOutputReference | StackBitbucketCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function stackBitbucketCloudToHclTerraform(struct?: StackBitbucketCloudOutputReference | StackBitbucketCloud): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackBitbucketCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackBitbucketCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackBitbucketCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._namespace = value.namespace;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface StackBitbucketDatacenter {
  /**
  * The ID of the Bitbucket Datacenter integration. If not specified, the default integration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#id Stack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Bitbucket project containing the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#namespace Stack#namespace}
  */
  readonly namespace: string;
}

export function stackBitbucketDatacenterToTerraform(struct?: StackBitbucketDatacenterOutputReference | StackBitbucketDatacenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function stackBitbucketDatacenterToHclTerraform(struct?: StackBitbucketDatacenterOutputReference | StackBitbucketDatacenter): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackBitbucketDatacenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackBitbucketDatacenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackBitbucketDatacenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._namespace = value.namespace;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface StackCloudformation {
  /**
  * Template file `cloudformation package` will be called on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#entry_template_file Stack#entry_template_file}
  */
  readonly entryTemplateFile: string;
  /**
  * AWS region to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#region Stack#region}
  */
  readonly region: string;
  /**
  * CloudFormation stack name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#stack_name Stack#stack_name}
  */
  readonly stackName: string;
  /**
  * S3 bucket to save CloudFormation templates to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#template_bucket Stack#template_bucket}
  */
  readonly templateBucket: string;
}

export function stackCloudformationToTerraform(struct?: StackCloudformationOutputReference | StackCloudformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_template_file: cdktf.stringToTerraform(struct!.entryTemplateFile),
    region: cdktf.stringToTerraform(struct!.region),
    stack_name: cdktf.stringToTerraform(struct!.stackName),
    template_bucket: cdktf.stringToTerraform(struct!.templateBucket),
  }
}


export function stackCloudformationToHclTerraform(struct?: StackCloudformationOutputReference | StackCloudformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_template_file: {
      value: cdktf.stringToHclTerraform(struct!.entryTemplateFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_name: {
      value: cdktf.stringToHclTerraform(struct!.stackName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_bucket: {
      value: cdktf.stringToHclTerraform(struct!.templateBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackCloudformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackCloudformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryTemplateFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryTemplateFile = this._entryTemplateFile;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._stackName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackName = this._stackName;
    }
    if (this._templateBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateBucket = this._templateBucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackCloudformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryTemplateFile = undefined;
      this._region = undefined;
      this._stackName = undefined;
      this._templateBucket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryTemplateFile = value.entryTemplateFile;
      this._region = value.region;
      this._stackName = value.stackName;
      this._templateBucket = value.templateBucket;
    }
  }

  // entry_template_file - computed: false, optional: false, required: true
  private _entryTemplateFile?: string; 
  public get entryTemplateFile() {
    return this.getStringAttribute('entry_template_file');
  }
  public set entryTemplateFile(value: string) {
    this._entryTemplateFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryTemplateFileInput() {
    return this._entryTemplateFile;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // stack_name - computed: false, optional: false, required: true
  private _stackName?: string; 
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }
  public set stackName(value: string) {
    this._stackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNameInput() {
    return this._stackName;
  }

  // template_bucket - computed: false, optional: false, required: true
  private _templateBucket?: string; 
  public get templateBucket() {
    return this.getStringAttribute('template_bucket');
  }
  public set templateBucket(value: string) {
    this._templateBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBucketInput() {
    return this._templateBucket;
  }
}
export interface StackGithubEnterprise {
  /**
  * The ID of the GitHub Enterprise integration. If not specified, the default integration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#id Stack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitHub organization / user the repository belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#namespace Stack#namespace}
  */
  readonly namespace: string;
}

export function stackGithubEnterpriseToTerraform(struct?: StackGithubEnterpriseOutputReference | StackGithubEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function stackGithubEnterpriseToHclTerraform(struct?: StackGithubEnterpriseOutputReference | StackGithubEnterprise): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackGithubEnterpriseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackGithubEnterprise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackGithubEnterprise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._namespace = value.namespace;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface StackGitlab {
  /**
  * The ID of the Gitlab integration. If not specified, the default integration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#id Stack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitLab namespace containing the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#namespace Stack#namespace}
  */
  readonly namespace: string;
}

export function stackGitlabToTerraform(struct?: StackGitlabOutputReference | StackGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function stackGitlabToHclTerraform(struct?: StackGitlabOutputReference | StackGitlab): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._namespace = value.namespace;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface StackKubernetes {
  /**
  * Kubectl version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#kubectl_version Stack#kubectl_version}
  */
  readonly kubectlVersion?: string;
  /**
  * Defines the tool that will be used to execute the workflow. This can be one of `KUBERNETES` or `CUSTOM`. Defaults to `KUBERNETES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#kubernetes_workflow_tool Stack#kubernetes_workflow_tool}
  */
  readonly kubernetesWorkflowTool?: string;
  /**
  * Namespace of the Kubernetes cluster to run commands on. Leave empty for multi-namespace Stacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#namespace Stack#namespace}
  */
  readonly namespace?: string;
}

export function stackKubernetesToTerraform(struct?: StackKubernetesOutputReference | StackKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubectl_version: cdktf.stringToTerraform(struct!.kubectlVersion),
    kubernetes_workflow_tool: cdktf.stringToTerraform(struct!.kubernetesWorkflowTool),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function stackKubernetesToHclTerraform(struct?: StackKubernetesOutputReference | StackKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubectl_version: {
      value: cdktf.stringToHclTerraform(struct!.kubectlVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_workflow_tool: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesWorkflowTool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubectlVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubectlVersion = this._kubectlVersion;
    }
    if (this._kubernetesWorkflowTool !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesWorkflowTool = this._kubernetesWorkflowTool;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubectlVersion = undefined;
      this._kubernetesWorkflowTool = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubectlVersion = value.kubectlVersion;
      this._kubernetesWorkflowTool = value.kubernetesWorkflowTool;
      this._namespace = value.namespace;
    }
  }

  // kubectl_version - computed: true, optional: true, required: false
  private _kubectlVersion?: string; 
  public get kubectlVersion() {
    return this.getStringAttribute('kubectl_version');
  }
  public set kubectlVersion(value: string) {
    this._kubectlVersion = value;
  }
  public resetKubectlVersion() {
    this._kubectlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubectlVersionInput() {
    return this._kubectlVersion;
  }

  // kubernetes_workflow_tool - computed: true, optional: true, required: false
  private _kubernetesWorkflowTool?: string; 
  public get kubernetesWorkflowTool() {
    return this.getStringAttribute('kubernetes_workflow_tool');
  }
  public set kubernetesWorkflowTool(value: string) {
    this._kubernetesWorkflowTool = value;
  }
  public resetKubernetesWorkflowTool() {
    this._kubernetesWorkflowTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesWorkflowToolInput() {
    return this._kubernetesWorkflowTool;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface StackPulumi {
  /**
  * State backend to log into on Run initialize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#login_url Stack#login_url}
  */
  readonly loginUrl: string;
  /**
  * Pulumi stack name to use with the state backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#stack_name Stack#stack_name}
  */
  readonly stackName: string;
}

export function stackPulumiToTerraform(struct?: StackPulumiOutputReference | StackPulumi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_url: cdktf.stringToTerraform(struct!.loginUrl),
    stack_name: cdktf.stringToTerraform(struct!.stackName),
  }
}


export function stackPulumiToHclTerraform(struct?: StackPulumiOutputReference | StackPulumi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_url: {
      value: cdktf.stringToHclTerraform(struct!.loginUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_name: {
      value: cdktf.stringToHclTerraform(struct!.stackName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackPulumiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackPulumi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginUrl = this._loginUrl;
    }
    if (this._stackName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackName = this._stackName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackPulumi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginUrl = undefined;
      this._stackName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginUrl = value.loginUrl;
      this._stackName = value.stackName;
    }
  }

  // login_url - computed: false, optional: false, required: true
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
  }

  // stack_name - computed: false, optional: false, required: true
  private _stackName?: string; 
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }
  public set stackName(value: string) {
    this._stackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNameInput() {
    return this._stackName;
  }
}
export interface StackRawGit {
  /**
  * User-friendly namespace for the repository, this is for cosmetic purposes only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#namespace Stack#namespace}
  */
  readonly namespace: string;
  /**
  * HTTPS URL of the Git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#url Stack#url}
  */
  readonly url: string;
}

export function stackRawGitToTerraform(struct?: StackRawGitOutputReference | StackRawGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function stackRawGitToHclTerraform(struct?: StackRawGitOutputReference | StackRawGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackRawGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackRawGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackRawGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
      this._url = value.url;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
}
export interface StackShowcase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#namespace Stack#namespace}
  */
  readonly namespace: string;
}

export function stackShowcaseToTerraform(struct?: StackShowcaseOutputReference | StackShowcase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function stackShowcaseToHclTerraform(struct?: StackShowcaseOutputReference | StackShowcase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackShowcaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackShowcase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackShowcase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface StackTerragrunt {
  /**
  * The Terraform version. Must not be provided when tool is set to MANUALLY_PROVISIONED. Defaults to the latest available OpenTofu/Terraform version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#terraform_version Stack#terraform_version}
  */
  readonly terraformVersion?: string;
  /**
  * The Terragrunt version. Defaults to the latest Terragrunt version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#terragrunt_version Stack#terragrunt_version}
  */
  readonly terragruntVersion?: string;
  /**
  * The IaC tool used by Terragrunt. Valid values are OPEN_TOFU, TERRAFORM_FOSS or MANUALLY_PROVISIONED. Defaults to TERRAFORM_FOSS if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#tool Stack#tool}
  */
  readonly tool?: string;
  /**
  * Whether to use `terragrunt run-all` instead of `terragrunt`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#use_run_all Stack#use_run_all}
  */
  readonly useRunAll?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether runs on this will use Terraform's sensitive value system to sanitize the outputs of Terraform state and plans in spacelift instead of sanitizing all fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#use_smart_sanitization Stack#use_smart_sanitization}
  */
  readonly useSmartSanitization?: boolean | cdktf.IResolvable;
}

export function stackTerragruntToTerraform(struct?: StackTerragruntOutputReference | StackTerragrunt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    terraform_version: cdktf.stringToTerraform(struct!.terraformVersion),
    terragrunt_version: cdktf.stringToTerraform(struct!.terragruntVersion),
    tool: cdktf.stringToTerraform(struct!.tool),
    use_run_all: cdktf.booleanToTerraform(struct!.useRunAll),
    use_smart_sanitization: cdktf.booleanToTerraform(struct!.useSmartSanitization),
  }
}


export function stackTerragruntToHclTerraform(struct?: StackTerragruntOutputReference | StackTerragrunt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    terraform_version: {
      value: cdktf.stringToHclTerraform(struct!.terraformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terragrunt_version: {
      value: cdktf.stringToHclTerraform(struct!.terragruntVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_run_all: {
      value: cdktf.booleanToHclTerraform(struct!.useRunAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_smart_sanitization: {
      value: cdktf.booleanToHclTerraform(struct!.useSmartSanitization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackTerragruntOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackTerragrunt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._terraformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.terraformVersion = this._terraformVersion;
    }
    if (this._terragruntVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.terragruntVersion = this._terragruntVersion;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._useRunAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRunAll = this._useRunAll;
    }
    if (this._useSmartSanitization !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSmartSanitization = this._useSmartSanitization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackTerragrunt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._terraformVersion = undefined;
      this._terragruntVersion = undefined;
      this._tool = undefined;
      this._useRunAll = undefined;
      this._useSmartSanitization = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._terraformVersion = value.terraformVersion;
      this._terragruntVersion = value.terragruntVersion;
      this._tool = value.tool;
      this._useRunAll = value.useRunAll;
      this._useSmartSanitization = value.useSmartSanitization;
    }
  }

  // terraform_version - computed: true, optional: true, required: false
  private _terraformVersion?: string; 
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }
  public set terraformVersion(value: string) {
    this._terraformVersion = value;
  }
  public resetTerraformVersion() {
    this._terraformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformVersionInput() {
    return this._terraformVersion;
  }

  // terragrunt_version - computed: true, optional: true, required: false
  private _terragruntVersion?: string; 
  public get terragruntVersion() {
    return this.getStringAttribute('terragrunt_version');
  }
  public set terragruntVersion(value: string) {
    this._terragruntVersion = value;
  }
  public resetTerragruntVersion() {
    this._terragruntVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terragruntVersionInput() {
    return this._terragruntVersion;
  }

  // tool - computed: true, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // use_run_all - computed: false, optional: true, required: false
  private _useRunAll?: boolean | cdktf.IResolvable; 
  public get useRunAll() {
    return this.getBooleanAttribute('use_run_all');
  }
  public set useRunAll(value: boolean | cdktf.IResolvable) {
    this._useRunAll = value;
  }
  public resetUseRunAll() {
    this._useRunAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRunAllInput() {
    return this._useRunAll;
  }

  // use_smart_sanitization - computed: false, optional: true, required: false
  private _useSmartSanitization?: boolean | cdktf.IResolvable; 
  public get useSmartSanitization() {
    return this.getBooleanAttribute('use_smart_sanitization');
  }
  public set useSmartSanitization(value: boolean | cdktf.IResolvable) {
    this._useSmartSanitization = value;
  }
  public resetUseSmartSanitization() {
    this._useSmartSanitization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSmartSanitizationInput() {
    return this._useSmartSanitization;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack spacelift_stack}
*/
export class Stack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Stack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Stack to import
  * @param importFromId The id of the existing Stack that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Stack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/stack spacelift_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackConfig
  */
  public constructor(scope: Construct, id: string, config: StackConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_stack',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.42.0',
        providerVersionConstraint: '1.42.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalProjectGlobs = config.additionalProjectGlobs;
    this._administrative = config.administrative;
    this._afterApply = config.afterApply;
    this._afterDestroy = config.afterDestroy;
    this._afterInit = config.afterInit;
    this._afterPerform = config.afterPerform;
    this._afterPlan = config.afterPlan;
    this._afterRun = config.afterRun;
    this._allowRunPromotion = config.allowRunPromotion;
    this._autodeploy = config.autodeploy;
    this._autoretry = config.autoretry;
    this._beforeApply = config.beforeApply;
    this._beforeDestroy = config.beforeDestroy;
    this._beforeInit = config.beforeInit;
    this._beforePerform = config.beforePerform;
    this._beforePlan = config.beforePlan;
    this._branch = config.branch;
    this._description = config.description;
    this._enableLocalPreview = config.enableLocalPreview;
    this._enableSensitiveOutputsUpload = config.enableSensitiveOutputsUpload;
    this._enableWellKnownSecretMasking = config.enableWellKnownSecretMasking;
    this._gitSparseCheckoutPaths = config.gitSparseCheckoutPaths;
    this._githubActionDeploy = config.githubActionDeploy;
    this._id = config.id;
    this._importState = config.importState;
    this._importStateFile = config.importStateFile;
    this._labels = config.labels;
    this._manageState = config.manageState;
    this._name = config.name;
    this._projectRoot = config.projectRoot;
    this._protectFromDeletion = config.protectFromDeletion;
    this._repository = config.repository;
    this._runnerImage = config.runnerImage;
    this._slug = config.slug;
    this._spaceId = config.spaceId;
    this._terraformExternalStateAccess = config.terraformExternalStateAccess;
    this._terraformSmartSanitization = config.terraformSmartSanitization;
    this._terraformVersion = config.terraformVersion;
    this._terraformWorkflowTool = config.terraformWorkflowTool;
    this._terraformWorkspace = config.terraformWorkspace;
    this._workerPoolId = config.workerPoolId;
    this._ansible.internalValue = config.ansible;
    this._azureDevops.internalValue = config.azureDevops;
    this._bitbucketCloud.internalValue = config.bitbucketCloud;
    this._bitbucketDatacenter.internalValue = config.bitbucketDatacenter;
    this._cloudformation.internalValue = config.cloudformation;
    this._githubEnterprise.internalValue = config.githubEnterprise;
    this._gitlab.internalValue = config.gitlab;
    this._kubernetes.internalValue = config.kubernetes;
    this._pulumi.internalValue = config.pulumi;
    this._rawGit.internalValue = config.rawGit;
    this._showcase.internalValue = config.showcase;
    this._terragrunt.internalValue = config.terragrunt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_project_globs - computed: false, optional: true, required: false
  private _additionalProjectGlobs?: string[]; 
  public get additionalProjectGlobs() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_project_globs'));
  }
  public set additionalProjectGlobs(value: string[]) {
    this._additionalProjectGlobs = value;
  }
  public resetAdditionalProjectGlobs() {
    this._additionalProjectGlobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalProjectGlobsInput() {
    return this._additionalProjectGlobs;
  }

  // administrative - computed: false, optional: true, required: false
  private _administrative?: boolean | cdktf.IResolvable; 
  public get administrative() {
    return this.getBooleanAttribute('administrative');
  }
  public set administrative(value: boolean | cdktf.IResolvable) {
    this._administrative = value;
  }
  public resetAdministrative() {
    this._administrative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeInput() {
    return this._administrative;
  }

  // after_apply - computed: false, optional: true, required: false
  private _afterApply?: string[]; 
  public get afterApply() {
    return this.getListAttribute('after_apply');
  }
  public set afterApply(value: string[]) {
    this._afterApply = value;
  }
  public resetAfterApply() {
    this._afterApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterApplyInput() {
    return this._afterApply;
  }

  // after_destroy - computed: false, optional: true, required: false
  private _afterDestroy?: string[]; 
  public get afterDestroy() {
    return this.getListAttribute('after_destroy');
  }
  public set afterDestroy(value: string[]) {
    this._afterDestroy = value;
  }
  public resetAfterDestroy() {
    this._afterDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterDestroyInput() {
    return this._afterDestroy;
  }

  // after_init - computed: false, optional: true, required: false
  private _afterInit?: string[]; 
  public get afterInit() {
    return this.getListAttribute('after_init');
  }
  public set afterInit(value: string[]) {
    this._afterInit = value;
  }
  public resetAfterInit() {
    this._afterInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInitInput() {
    return this._afterInit;
  }

  // after_perform - computed: false, optional: true, required: false
  private _afterPerform?: string[]; 
  public get afterPerform() {
    return this.getListAttribute('after_perform');
  }
  public set afterPerform(value: string[]) {
    this._afterPerform = value;
  }
  public resetAfterPerform() {
    this._afterPerform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterPerformInput() {
    return this._afterPerform;
  }

  // after_plan - computed: false, optional: true, required: false
  private _afterPlan?: string[]; 
  public get afterPlan() {
    return this.getListAttribute('after_plan');
  }
  public set afterPlan(value: string[]) {
    this._afterPlan = value;
  }
  public resetAfterPlan() {
    this._afterPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterPlanInput() {
    return this._afterPlan;
  }

  // after_run - computed: false, optional: true, required: false
  private _afterRun?: string[]; 
  public get afterRun() {
    return this.getListAttribute('after_run');
  }
  public set afterRun(value: string[]) {
    this._afterRun = value;
  }
  public resetAfterRun() {
    this._afterRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterRunInput() {
    return this._afterRun;
  }

  // allow_run_promotion - computed: false, optional: true, required: false
  private _allowRunPromotion?: boolean | cdktf.IResolvable; 
  public get allowRunPromotion() {
    return this.getBooleanAttribute('allow_run_promotion');
  }
  public set allowRunPromotion(value: boolean | cdktf.IResolvable) {
    this._allowRunPromotion = value;
  }
  public resetAllowRunPromotion() {
    this._allowRunPromotion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRunPromotionInput() {
    return this._allowRunPromotion;
  }

  // autodeploy - computed: false, optional: true, required: false
  private _autodeploy?: boolean | cdktf.IResolvable; 
  public get autodeploy() {
    return this.getBooleanAttribute('autodeploy');
  }
  public set autodeploy(value: boolean | cdktf.IResolvable) {
    this._autodeploy = value;
  }
  public resetAutodeploy() {
    this._autodeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodeployInput() {
    return this._autodeploy;
  }

  // autoretry - computed: false, optional: true, required: false
  private _autoretry?: boolean | cdktf.IResolvable; 
  public get autoretry() {
    return this.getBooleanAttribute('autoretry');
  }
  public set autoretry(value: boolean | cdktf.IResolvable) {
    this._autoretry = value;
  }
  public resetAutoretry() {
    this._autoretry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoretryInput() {
    return this._autoretry;
  }

  // aws_assume_role_policy_statement - computed: true, optional: false, required: false
  public get awsAssumeRolePolicyStatement() {
    return this.getStringAttribute('aws_assume_role_policy_statement');
  }

  // before_apply - computed: false, optional: true, required: false
  private _beforeApply?: string[]; 
  public get beforeApply() {
    return this.getListAttribute('before_apply');
  }
  public set beforeApply(value: string[]) {
    this._beforeApply = value;
  }
  public resetBeforeApply() {
    this._beforeApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeApplyInput() {
    return this._beforeApply;
  }

  // before_destroy - computed: false, optional: true, required: false
  private _beforeDestroy?: string[]; 
  public get beforeDestroy() {
    return this.getListAttribute('before_destroy');
  }
  public set beforeDestroy(value: string[]) {
    this._beforeDestroy = value;
  }
  public resetBeforeDestroy() {
    this._beforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeDestroyInput() {
    return this._beforeDestroy;
  }

  // before_init - computed: false, optional: true, required: false
  private _beforeInit?: string[]; 
  public get beforeInit() {
    return this.getListAttribute('before_init');
  }
  public set beforeInit(value: string[]) {
    this._beforeInit = value;
  }
  public resetBeforeInit() {
    this._beforeInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInitInput() {
    return this._beforeInit;
  }

  // before_perform - computed: false, optional: true, required: false
  private _beforePerform?: string[]; 
  public get beforePerform() {
    return this.getListAttribute('before_perform');
  }
  public set beforePerform(value: string[]) {
    this._beforePerform = value;
  }
  public resetBeforePerform() {
    this._beforePerform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforePerformInput() {
    return this._beforePerform;
  }

  // before_plan - computed: false, optional: true, required: false
  private _beforePlan?: string[]; 
  public get beforePlan() {
    return this.getListAttribute('before_plan');
  }
  public set beforePlan(value: string[]) {
    this._beforePlan = value;
  }
  public resetBeforePlan() {
    this._beforePlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforePlanInput() {
    return this._beforePlan;
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // description - computed: false, optional: true, required: false
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

  // enable_local_preview - computed: false, optional: true, required: false
  private _enableLocalPreview?: boolean | cdktf.IResolvable; 
  public get enableLocalPreview() {
    return this.getBooleanAttribute('enable_local_preview');
  }
  public set enableLocalPreview(value: boolean | cdktf.IResolvable) {
    this._enableLocalPreview = value;
  }
  public resetEnableLocalPreview() {
    this._enableLocalPreview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalPreviewInput() {
    return this._enableLocalPreview;
  }

  // enable_sensitive_outputs_upload - computed: false, optional: true, required: false
  private _enableSensitiveOutputsUpload?: boolean | cdktf.IResolvable; 
  public get enableSensitiveOutputsUpload() {
    return this.getBooleanAttribute('enable_sensitive_outputs_upload');
  }
  public set enableSensitiveOutputsUpload(value: boolean | cdktf.IResolvable) {
    this._enableSensitiveOutputsUpload = value;
  }
  public resetEnableSensitiveOutputsUpload() {
    this._enableSensitiveOutputsUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSensitiveOutputsUploadInput() {
    return this._enableSensitiveOutputsUpload;
  }

  // enable_well_known_secret_masking - computed: false, optional: true, required: false
  private _enableWellKnownSecretMasking?: boolean | cdktf.IResolvable; 
  public get enableWellKnownSecretMasking() {
    return this.getBooleanAttribute('enable_well_known_secret_masking');
  }
  public set enableWellKnownSecretMasking(value: boolean | cdktf.IResolvable) {
    this._enableWellKnownSecretMasking = value;
  }
  public resetEnableWellKnownSecretMasking() {
    this._enableWellKnownSecretMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWellKnownSecretMaskingInput() {
    return this._enableWellKnownSecretMasking;
  }

  // git_sparse_checkout_paths - computed: false, optional: true, required: false
  private _gitSparseCheckoutPaths?: string[]; 
  public get gitSparseCheckoutPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('git_sparse_checkout_paths'));
  }
  public set gitSparseCheckoutPaths(value: string[]) {
    this._gitSparseCheckoutPaths = value;
  }
  public resetGitSparseCheckoutPaths() {
    this._gitSparseCheckoutPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSparseCheckoutPathsInput() {
    return this._gitSparseCheckoutPaths;
  }

  // github_action_deploy - computed: false, optional: true, required: false
  private _githubActionDeploy?: boolean | cdktf.IResolvable; 
  public get githubActionDeploy() {
    return this.getBooleanAttribute('github_action_deploy');
  }
  public set githubActionDeploy(value: boolean | cdktf.IResolvable) {
    this._githubActionDeploy = value;
  }
  public resetGithubActionDeploy() {
    this._githubActionDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubActionDeployInput() {
    return this._githubActionDeploy;
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

  // import_state - computed: false, optional: true, required: false
  private _importState?: string; 
  public get importState() {
    return this.getStringAttribute('import_state');
  }
  public set importState(value: string) {
    this._importState = value;
  }
  public resetImportState() {
    this._importState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importStateInput() {
    return this._importState;
  }

  // import_state_file - computed: false, optional: true, required: false
  private _importStateFile?: string; 
  public get importStateFile() {
    return this.getStringAttribute('import_state_file');
  }
  public set importStateFile(value: string) {
    this._importStateFile = value;
  }
  public resetImportStateFile() {
    this._importStateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importStateFileInput() {
    return this._importStateFile;
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

  // manage_state - computed: false, optional: true, required: false
  private _manageState?: boolean | cdktf.IResolvable; 
  public get manageState() {
    return this.getBooleanAttribute('manage_state');
  }
  public set manageState(value: boolean | cdktf.IResolvable) {
    this._manageState = value;
  }
  public resetManageState() {
    this._manageState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageStateInput() {
    return this._manageState;
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

  // project_root - computed: false, optional: true, required: false
  private _projectRoot?: string; 
  public get projectRoot() {
    return this.getStringAttribute('project_root');
  }
  public set projectRoot(value: string) {
    this._projectRoot = value;
  }
  public resetProjectRoot() {
    this._projectRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectRootInput() {
    return this._projectRoot;
  }

  // protect_from_deletion - computed: false, optional: true, required: false
  private _protectFromDeletion?: boolean | cdktf.IResolvable; 
  public get protectFromDeletion() {
    return this.getBooleanAttribute('protect_from_deletion');
  }
  public set protectFromDeletion(value: boolean | cdktf.IResolvable) {
    this._protectFromDeletion = value;
  }
  public resetProtectFromDeletion() {
    this._protectFromDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectFromDeletionInput() {
    return this._protectFromDeletion;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // runner_image - computed: false, optional: true, required: false
  private _runnerImage?: string; 
  public get runnerImage() {
    return this.getStringAttribute('runner_image');
  }
  public set runnerImage(value: string) {
    this._runnerImage = value;
  }
  public resetRunnerImage() {
    this._runnerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerImageInput() {
    return this._runnerImage;
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // terraform_external_state_access - computed: false, optional: true, required: false
  private _terraformExternalStateAccess?: boolean | cdktf.IResolvable; 
  public get terraformExternalStateAccess() {
    return this.getBooleanAttribute('terraform_external_state_access');
  }
  public set terraformExternalStateAccess(value: boolean | cdktf.IResolvable) {
    this._terraformExternalStateAccess = value;
  }
  public resetTerraformExternalStateAccess() {
    this._terraformExternalStateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformExternalStateAccessInput() {
    return this._terraformExternalStateAccess;
  }

  // terraform_smart_sanitization - computed: false, optional: true, required: false
  private _terraformSmartSanitization?: boolean | cdktf.IResolvable; 
  public get terraformSmartSanitization() {
    return this.getBooleanAttribute('terraform_smart_sanitization');
  }
  public set terraformSmartSanitization(value: boolean | cdktf.IResolvable) {
    this._terraformSmartSanitization = value;
  }
  public resetTerraformSmartSanitization() {
    this._terraformSmartSanitization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformSmartSanitizationInput() {
    return this._terraformSmartSanitization;
  }

  // terraform_version - computed: true, optional: true, required: false
  private _terraformVersion?: string; 
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }
  public set terraformVersion(value: string) {
    this._terraformVersion = value;
  }
  public resetTerraformVersion() {
    this._terraformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformVersionInput() {
    return this._terraformVersion;
  }

  // terraform_workflow_tool - computed: true, optional: true, required: false
  private _terraformWorkflowTool?: string; 
  public get terraformWorkflowTool() {
    return this.getStringAttribute('terraform_workflow_tool');
  }
  public set terraformWorkflowTool(value: string) {
    this._terraformWorkflowTool = value;
  }
  public resetTerraformWorkflowTool() {
    this._terraformWorkflowTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformWorkflowToolInput() {
    return this._terraformWorkflowTool;
  }

  // terraform_workspace - computed: false, optional: true, required: false
  private _terraformWorkspace?: string; 
  public get terraformWorkspace() {
    return this.getStringAttribute('terraform_workspace');
  }
  public set terraformWorkspace(value: string) {
    this._terraformWorkspace = value;
  }
  public resetTerraformWorkspace() {
    this._terraformWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformWorkspaceInput() {
    return this._terraformWorkspace;
  }

  // worker_pool_id - computed: false, optional: true, required: false
  private _workerPoolId?: string; 
  public get workerPoolId() {
    return this.getStringAttribute('worker_pool_id');
  }
  public set workerPoolId(value: string) {
    this._workerPoolId = value;
  }
  public resetWorkerPoolId() {
    this._workerPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolIdInput() {
    return this._workerPoolId;
  }

  // ansible - computed: false, optional: true, required: false
  private _ansible = new StackAnsibleOutputReference(this, "ansible");
  public get ansible() {
    return this._ansible;
  }
  public putAnsible(value: StackAnsible) {
    this._ansible.internalValue = value;
  }
  public resetAnsible() {
    this._ansible.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ansibleInput() {
    return this._ansible.internalValue;
  }

  // azure_devops - computed: false, optional: true, required: false
  private _azureDevops = new StackAzureDevopsOutputReference(this, "azure_devops");
  public get azureDevops() {
    return this._azureDevops;
  }
  public putAzureDevops(value: StackAzureDevops) {
    this._azureDevops.internalValue = value;
  }
  public resetAzureDevops() {
    this._azureDevops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDevopsInput() {
    return this._azureDevops.internalValue;
  }

  // bitbucket_cloud - computed: false, optional: true, required: false
  private _bitbucketCloud = new StackBitbucketCloudOutputReference(this, "bitbucket_cloud");
  public get bitbucketCloud() {
    return this._bitbucketCloud;
  }
  public putBitbucketCloud(value: StackBitbucketCloud) {
    this._bitbucketCloud.internalValue = value;
  }
  public resetBitbucketCloud() {
    this._bitbucketCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketCloudInput() {
    return this._bitbucketCloud.internalValue;
  }

  // bitbucket_datacenter - computed: false, optional: true, required: false
  private _bitbucketDatacenter = new StackBitbucketDatacenterOutputReference(this, "bitbucket_datacenter");
  public get bitbucketDatacenter() {
    return this._bitbucketDatacenter;
  }
  public putBitbucketDatacenter(value: StackBitbucketDatacenter) {
    this._bitbucketDatacenter.internalValue = value;
  }
  public resetBitbucketDatacenter() {
    this._bitbucketDatacenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketDatacenterInput() {
    return this._bitbucketDatacenter.internalValue;
  }

  // cloudformation - computed: false, optional: true, required: false
  private _cloudformation = new StackCloudformationOutputReference(this, "cloudformation");
  public get cloudformation() {
    return this._cloudformation;
  }
  public putCloudformation(value: StackCloudformation) {
    this._cloudformation.internalValue = value;
  }
  public resetCloudformation() {
    this._cloudformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudformationInput() {
    return this._cloudformation.internalValue;
  }

  // github_enterprise - computed: false, optional: true, required: false
  private _githubEnterprise = new StackGithubEnterpriseOutputReference(this, "github_enterprise");
  public get githubEnterprise() {
    return this._githubEnterprise;
  }
  public putGithubEnterprise(value: StackGithubEnterprise) {
    this._githubEnterprise.internalValue = value;
  }
  public resetGithubEnterprise() {
    this._githubEnterprise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseInput() {
    return this._githubEnterprise.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new StackGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: StackGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new StackKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: StackKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // pulumi - computed: false, optional: true, required: false
  private _pulumi = new StackPulumiOutputReference(this, "pulumi");
  public get pulumi() {
    return this._pulumi;
  }
  public putPulumi(value: StackPulumi) {
    this._pulumi.internalValue = value;
  }
  public resetPulumi() {
    this._pulumi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pulumiInput() {
    return this._pulumi.internalValue;
  }

  // raw_git - computed: false, optional: true, required: false
  private _rawGit = new StackRawGitOutputReference(this, "raw_git");
  public get rawGit() {
    return this._rawGit;
  }
  public putRawGit(value: StackRawGit) {
    this._rawGit.internalValue = value;
  }
  public resetRawGit() {
    this._rawGit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawGitInput() {
    return this._rawGit.internalValue;
  }

  // showcase - computed: false, optional: true, required: false
  private _showcase = new StackShowcaseOutputReference(this, "showcase");
  public get showcase() {
    return this._showcase;
  }
  public putShowcase(value: StackShowcase) {
    this._showcase.internalValue = value;
  }
  public resetShowcase() {
    this._showcase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showcaseInput() {
    return this._showcase.internalValue;
  }

  // terragrunt - computed: false, optional: true, required: false
  private _terragrunt = new StackTerragruntOutputReference(this, "terragrunt");
  public get terragrunt() {
    return this._terragrunt;
  }
  public putTerragrunt(value: StackTerragrunt) {
    this._terragrunt.internalValue = value;
  }
  public resetTerragrunt() {
    this._terragrunt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terragruntInput() {
    return this._terragrunt.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_project_globs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalProjectGlobs),
      administrative: cdktf.booleanToTerraform(this._administrative),
      after_apply: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterApply),
      after_destroy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterDestroy),
      after_init: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterInit),
      after_perform: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterPerform),
      after_plan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterPlan),
      after_run: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterRun),
      allow_run_promotion: cdktf.booleanToTerraform(this._allowRunPromotion),
      autodeploy: cdktf.booleanToTerraform(this._autodeploy),
      autoretry: cdktf.booleanToTerraform(this._autoretry),
      before_apply: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beforeApply),
      before_destroy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beforeDestroy),
      before_init: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beforeInit),
      before_perform: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beforePerform),
      before_plan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beforePlan),
      branch: cdktf.stringToTerraform(this._branch),
      description: cdktf.stringToTerraform(this._description),
      enable_local_preview: cdktf.booleanToTerraform(this._enableLocalPreview),
      enable_sensitive_outputs_upload: cdktf.booleanToTerraform(this._enableSensitiveOutputsUpload),
      enable_well_known_secret_masking: cdktf.booleanToTerraform(this._enableWellKnownSecretMasking),
      git_sparse_checkout_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gitSparseCheckoutPaths),
      github_action_deploy: cdktf.booleanToTerraform(this._githubActionDeploy),
      id: cdktf.stringToTerraform(this._id),
      import_state: cdktf.stringToTerraform(this._importState),
      import_state_file: cdktf.stringToTerraform(this._importStateFile),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      manage_state: cdktf.booleanToTerraform(this._manageState),
      name: cdktf.stringToTerraform(this._name),
      project_root: cdktf.stringToTerraform(this._projectRoot),
      protect_from_deletion: cdktf.booleanToTerraform(this._protectFromDeletion),
      repository: cdktf.stringToTerraform(this._repository),
      runner_image: cdktf.stringToTerraform(this._runnerImage),
      slug: cdktf.stringToTerraform(this._slug),
      space_id: cdktf.stringToTerraform(this._spaceId),
      terraform_external_state_access: cdktf.booleanToTerraform(this._terraformExternalStateAccess),
      terraform_smart_sanitization: cdktf.booleanToTerraform(this._terraformSmartSanitization),
      terraform_version: cdktf.stringToTerraform(this._terraformVersion),
      terraform_workflow_tool: cdktf.stringToTerraform(this._terraformWorkflowTool),
      terraform_workspace: cdktf.stringToTerraform(this._terraformWorkspace),
      worker_pool_id: cdktf.stringToTerraform(this._workerPoolId),
      ansible: stackAnsibleToTerraform(this._ansible.internalValue),
      azure_devops: stackAzureDevopsToTerraform(this._azureDevops.internalValue),
      bitbucket_cloud: stackBitbucketCloudToTerraform(this._bitbucketCloud.internalValue),
      bitbucket_datacenter: stackBitbucketDatacenterToTerraform(this._bitbucketDatacenter.internalValue),
      cloudformation: stackCloudformationToTerraform(this._cloudformation.internalValue),
      github_enterprise: stackGithubEnterpriseToTerraform(this._githubEnterprise.internalValue),
      gitlab: stackGitlabToTerraform(this._gitlab.internalValue),
      kubernetes: stackKubernetesToTerraform(this._kubernetes.internalValue),
      pulumi: stackPulumiToTerraform(this._pulumi.internalValue),
      raw_git: stackRawGitToTerraform(this._rawGit.internalValue),
      showcase: stackShowcaseToTerraform(this._showcase.internalValue),
      terragrunt: stackTerragruntToTerraform(this._terragrunt.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_project_globs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalProjectGlobs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      administrative: {
        value: cdktf.booleanToHclTerraform(this._administrative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      after_apply: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterApply),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_destroy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterDestroy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_init: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterInit),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_perform: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterPerform),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_plan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterPlan),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_run: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterRun),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allow_run_promotion: {
        value: cdktf.booleanToHclTerraform(this._allowRunPromotion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autodeploy: {
        value: cdktf.booleanToHclTerraform(this._autodeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autoretry: {
        value: cdktf.booleanToHclTerraform(this._autoretry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      before_apply: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beforeApply),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      before_destroy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beforeDestroy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      before_init: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beforeInit),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      before_perform: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beforePerform),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      before_plan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beforePlan),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
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
      enable_local_preview: {
        value: cdktf.booleanToHclTerraform(this._enableLocalPreview),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sensitive_outputs_upload: {
        value: cdktf.booleanToHclTerraform(this._enableSensitiveOutputsUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_well_known_secret_masking: {
        value: cdktf.booleanToHclTerraform(this._enableWellKnownSecretMasking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_sparse_checkout_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gitSparseCheckoutPaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      github_action_deploy: {
        value: cdktf.booleanToHclTerraform(this._githubActionDeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_state: {
        value: cdktf.stringToHclTerraform(this._importState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_state_file: {
        value: cdktf.stringToHclTerraform(this._importStateFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      manage_state: {
        value: cdktf.booleanToHclTerraform(this._manageState),
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
      project_root: {
        value: cdktf.stringToHclTerraform(this._projectRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_from_deletion: {
        value: cdktf.booleanToHclTerraform(this._protectFromDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runner_image: {
        value: cdktf.stringToHclTerraform(this._runnerImage),
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
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_external_state_access: {
        value: cdktf.booleanToHclTerraform(this._terraformExternalStateAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      terraform_smart_sanitization: {
        value: cdktf.booleanToHclTerraform(this._terraformSmartSanitization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      terraform_version: {
        value: cdktf.stringToHclTerraform(this._terraformVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_workflow_tool: {
        value: cdktf.stringToHclTerraform(this._terraformWorkflowTool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_workspace: {
        value: cdktf.stringToHclTerraform(this._terraformWorkspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_pool_id: {
        value: cdktf.stringToHclTerraform(this._workerPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ansible: {
        value: stackAnsibleToHclTerraform(this._ansible.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackAnsibleList",
      },
      azure_devops: {
        value: stackAzureDevopsToHclTerraform(this._azureDevops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackAzureDevopsList",
      },
      bitbucket_cloud: {
        value: stackBitbucketCloudToHclTerraform(this._bitbucketCloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackBitbucketCloudList",
      },
      bitbucket_datacenter: {
        value: stackBitbucketDatacenterToHclTerraform(this._bitbucketDatacenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackBitbucketDatacenterList",
      },
      cloudformation: {
        value: stackCloudformationToHclTerraform(this._cloudformation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackCloudformationList",
      },
      github_enterprise: {
        value: stackGithubEnterpriseToHclTerraform(this._githubEnterprise.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackGithubEnterpriseList",
      },
      gitlab: {
        value: stackGitlabToHclTerraform(this._gitlab.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackGitlabList",
      },
      kubernetes: {
        value: stackKubernetesToHclTerraform(this._kubernetes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackKubernetesList",
      },
      pulumi: {
        value: stackPulumiToHclTerraform(this._pulumi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackPulumiList",
      },
      raw_git: {
        value: stackRawGitToHclTerraform(this._rawGit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackRawGitList",
      },
      showcase: {
        value: stackShowcaseToHclTerraform(this._showcase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackShowcaseList",
      },
      terragrunt: {
        value: stackTerragruntToHclTerraform(this._terragrunt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackTerragruntList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
