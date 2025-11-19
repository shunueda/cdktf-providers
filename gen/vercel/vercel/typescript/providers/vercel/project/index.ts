// https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically assign custom production domains after each Production deployment via merge to the production branch or Vercel CLI deploy with --prod. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#auto_assign_custom_domains Project#auto_assign_custom_domains}
  */
  readonly autoAssignCustomDomains?: boolean | cdktf.IResolvable;
  /**
  * Vercel provides a set of Environment Variables that are automatically populated by the System, such as the URL of the Deployment or the name of the Git branch deployed. To expose them to your Deployments, enable this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#automatically_expose_system_environment_variables Project#automatically_expose_system_environment_variables}
  */
  readonly automaticallyExposeSystemEnvironmentVariables?: boolean | cdktf.IResolvable;
  /**
  * The build command for this project. If omitted, this value will be automatically detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#build_command Project#build_command}
  */
  readonly buildCommand?: string;
  /**
  * The build machine type to use for this project. Must be one of "enhanced" or "turbo".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#build_machine_type Project#build_machine_type}
  */
  readonly buildMachineType?: string;
  /**
  * Allows Vercel Customer Support to inspect all Deployments' source code in this project to assist with debugging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#customer_success_code_visibility Project#customer_success_code_visibility}
  */
  readonly customerSuccessCodeVisibility?: boolean | cdktf.IResolvable;
  /**
  * The dev command for this project. If omitted, this value will be automatically detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#dev_command Project#dev_command}
  */
  readonly devCommand?: string;
  /**
  * If no index file is present within a directory, the directory contents will be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#directory_listing Project#directory_listing}
  */
  readonly directoryListing?: boolean | cdktf.IResolvable;
  /**
  * When enabled, Vercel will automatically deploy all projects that are affected by a change to this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#enable_affected_projects_deployments Project#enable_affected_projects_deployments}
  */
  readonly enableAffectedProjectsDeployments?: boolean | cdktf.IResolvable;
  /**
  * Enables the Vercel Toolbar on your preview deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#enable_preview_feedback Project#enable_preview_feedback}
  */
  readonly enablePreviewFeedback?: boolean | cdktf.IResolvable;
  /**
  * Enables the Vercel Toolbar on your production deployments: one of on, off or default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#enable_production_feedback Project#enable_production_feedback}
  */
  readonly enableProductionFeedback?: boolean | cdktf.IResolvable;
  /**
  * A set of Environment Variables that should be configured for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#environment Project#environment}
  */
  readonly environment?: ProjectEnvironment[] | cdktf.IResolvable;
  /**
  * The framework that is being used for this project. If omitted, no framework is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#framework Project#framework}
  */
  readonly framework?: string;
  /**
  * Automatically failover Serverless Functions to the nearest region. You can customize regions through vercel.json. A new Deployment is required for your changes to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#function_failover Project#function_failover}
  */
  readonly functionFailover?: boolean | cdktf.IResolvable;
  /**
  * Configuration for Git Comments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#git_comments Project#git_comments}
  */
  readonly gitComments?: ProjectGitComments;
  /**
  * Ensures that pull requests targeting your Git repository must be authorized by a member of your Team before deploying if your Project has Environment Variables or if the pull request includes a change to vercel.json. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#git_fork_protection Project#git_fork_protection}
  */
  readonly gitForkProtection?: boolean | cdktf.IResolvable;
  /**
  * Enables Git LFS support. Git LFS replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#git_lfs Project#git_lfs}
  */
  readonly gitLfs?: boolean | cdktf.IResolvable;
  /**
  * The Git Repository that will be connected to the project. When this is defined, any pushes to the specified connected Git Repository will be automatically deployed. This requires the corresponding Vercel for [Github](https://vercel.com/docs/concepts/git/vercel-for-github), [Gitlab](https://vercel.com/docs/concepts/git/vercel-for-gitlab) or [Bitbucket](https://vercel.com/docs/concepts/git/vercel-for-bitbucket) plugins to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#git_repository Project#git_repository}
  */
  readonly gitRepository?: ProjectGitRepository;
  /**
  * When a commit is pushed to the Git repository that is connected with your Project, its SHA will determine if a new Build has to be issued. If the SHA was deployed before, no new Build will be issued. You can customize this behavior with a command that exits with code 1 (new Build needed) or code 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#ignore_command Project#ignore_command}
  */
  readonly ignoreCommand?: string;
  /**
  * The install command for this project. If omitted, this value will be automatically detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#install_command Project#install_command}
  */
  readonly installCommand?: string;
  /**
  * The desired name for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * The version of Node.js that is used in the Build Step and for Serverless Functions. A new Deployment is required for your changes to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#node_version Project#node_version}
  */
  readonly nodeVersion?: string;
  /**
  * Configuration for OpenID Connect (OIDC) tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#oidc_token_config Project#oidc_token_config}
  */
  readonly oidcTokenConfig?: ProjectOidcTokenConfig;
  /**
  * Instantly scale build capacity to skip the queue, even if all build slots are in use. You can also choose a larger build machine; charges apply per minute if it exceeds your team's default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#on_demand_concurrent_builds Project#on_demand_concurrent_builds}
  */
  readonly onDemandConcurrentBuilds?: boolean | cdktf.IResolvable;
  /**
  * Disable Deployment Protection for CORS preflight `OPTIONS` requests for a list of paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#options_allowlist Project#options_allowlist}
  */
  readonly optionsAllowlist?: ProjectOptionsAllowlistStruct;
  /**
  * The output directory of the project. If omitted, this value will be automatically detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#output_directory Project#output_directory}
  */
  readonly outputDirectory?: string;
  /**
  * Ensures visitors of your Preview Deployments must enter a password in order to gain access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#password_protection Project#password_protection}
  */
  readonly passwordProtection?: ProjectPasswordProtection;
  /**
  * Enables the Vercel Toolbar on your preview deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#preview_comments Project#preview_comments}
  */
  readonly previewComments?: boolean | cdktf.IResolvable;
  /**
  * Disable creation of Preview Deployments for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#preview_deployments_disabled Project#preview_deployments_disabled}
  */
  readonly previewDeploymentsDisabled?: boolean | cdktf.IResolvable;
  /**
  * If enabled, builds for the Production environment will be prioritized over Preview environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#prioritise_production_builds Project#prioritise_production_builds}
  */
  readonly prioritiseProductionBuilds?: boolean | cdktf.IResolvable;
  /**
  * Allow automation services to bypass Deployment Protection on this project when using an HTTP header named `x-vercel-protection-bypass` with a value of the `protection_bypass_for_automation_secret` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#protection_bypass_for_automation Project#protection_bypass_for_automation}
  */
  readonly protectionBypassForAutomation?: boolean | cdktf.IResolvable;
  /**
  * If `protection_bypass_for_automation` is enabled, optionally set this value to specify a 32 character secret, otherwise a secret will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#protection_bypass_for_automation_secret Project#protection_bypass_for_automation_secret}
  */
  readonly protectionBypassForAutomationSecret?: string;
  /**
  * By default, visitors to the `/_logs` and `/_src` paths of your Production and Preview Deployments must log in with Vercel (requires being a member of your team) to see the Source, Logs and Deployment Status of your project. Setting `public_source` to `true` disables this behaviour, meaning the Source, Logs and Deployment Status can be publicly viewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#public_source Project#public_source}
  */
  readonly publicSource?: boolean | cdktf.IResolvable;
  /**
  * Resource Configuration for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#resource_config Project#resource_config}
  */
  readonly resourceConfig?: ProjectResourceConfig;
  /**
  * The name of a directory or relative path to the source code of your project. If omitted, it will default to the project root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#root_directory Project#root_directory}
  */
  readonly rootDirectory?: string;
  /**
  * The region on Vercel's network to which your Serverless Functions are deployed. It should be close to any data source your Serverless Function might depend on. A new Deployment is required for your changes to take effect. Please see [Vercel's documentation](https://vercel.com/docs/concepts/edge-network/regions) for a full list of regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#serverless_function_region Project#serverless_function_region}
  */
  readonly serverlessFunctionRegion?: string;
  /**
  * Ensures that outdated clients always fetch the correct version for a given deployment. This value defines how long Vercel keeps Skew Protection active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#skew_protection Project#skew_protection}
  */
  readonly skewProtection?: string;
  /**
  * The team ID to add the project to. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#team_id Project#team_id}
  */
  readonly teamId?: string;
  /**
  * Ensures only visitors from an allowed IP address can access your deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#trusted_ips Project#trusted_ips}
  */
  readonly trustedIps?: ProjectTrustedIps;
  /**
  * Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#vercel_authentication Project#vercel_authentication}
  */
  readonly vercelAuthentication?: ProjectVercelAuthentication;
}
export interface ProjectEnvironment {
  /**
  * A comment explaining what the environment variable is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#comment Project#comment}
  */
  readonly comment?: string;
  /**
  * The IDs of Custom Environments that the Environment Variable should be present on. At least one of `target` or `custom_environment_ids` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#custom_environment_ids Project#custom_environment_ids}
  */
  readonly customEnvironmentIds?: string[];
  /**
  * The git branch of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#git_branch Project#git_branch}
  */
  readonly gitBranch?: string;
  /**
  * The name of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#key Project#key}
  */
  readonly key: string;
  /**
  * Whether the Environment Variable is sensitive or not. (May be affected by a [team-wide environment variable policy](https://vercel.com/docs/projects/environment-variables/sensitive-environment-variables#environment-variables-policy))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#sensitive Project#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * The environments that the Environment Variable should be present on. Valid targets are either `production`, `preview`, or `development`. At least one of `target` or `custom_environment_ids` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#target Project#target}
  */
  readonly target?: string[];
  /**
  * The value of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#value Project#value}
  */
  readonly value: string;
}

export function projectEnvironmentToTerraform(struct?: ProjectEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    custom_environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customEnvironmentIds),
    git_branch: cdktf.stringToTerraform(struct!.gitBranch),
    key: cdktf.stringToTerraform(struct!.key),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    target: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.target),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectEnvironmentToHclTerraform(struct?: ProjectEnvironment | cdktf.IResolvable): any {
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
    custom_environment_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customEnvironmentIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    git_branch: {
      value: cdktf.stringToHclTerraform(struct!.gitBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.target),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ProjectEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._customEnvironmentIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEnvironmentIds = this._customEnvironmentIds;
    }
    if (this._gitBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitBranch = this._gitBranch;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._customEnvironmentIds = undefined;
      this._gitBranch = undefined;
      this._key = undefined;
      this._sensitive = undefined;
      this._target = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._customEnvironmentIds = value.customEnvironmentIds;
      this._gitBranch = value.gitBranch;
      this._key = value.key;
      this._sensitive = value.sensitive;
      this._target = value.target;
      this._value = value.value;
    }
  }

  // comment - computed: true, optional: true, required: false
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

  // custom_environment_ids - computed: true, optional: true, required: false
  private _customEnvironmentIds?: string[]; 
  public get customEnvironmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_environment_ids'));
  }
  public set customEnvironmentIds(value: string[]) {
    this._customEnvironmentIds = value;
  }
  public resetCustomEnvironmentIds() {
    this._customEnvironmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvironmentIdsInput() {
    return this._customEnvironmentIds;
  }

  // git_branch - computed: false, optional: true, required: false
  private _gitBranch?: string; 
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }
  public set gitBranch(value: string) {
    this._gitBranch = value;
  }
  public resetGitBranch() {
    this._gitBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitBranchInput() {
    return this._gitBranch;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sensitive - computed: true, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string[]; 
  public get target() {
    return cdktf.Fn.tolist(this.getListAttribute('target'));
  }
  public set target(value: string[]) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

export class ProjectEnvironmentList extends cdktf.ComplexList {
  public internalValue? : ProjectEnvironment[] | cdktf.IResolvable

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
  public get(index: number): ProjectEnvironmentOutputReference {
    return new ProjectEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectGitComments {
  /**
  * Whether Commit comments are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#on_commit Project#on_commit}
  */
  readonly onCommit: boolean | cdktf.IResolvable;
  /**
  * Whether Pull Request comments are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#on_pull_request Project#on_pull_request}
  */
  readonly onPullRequest: boolean | cdktf.IResolvable;
}

export function projectGitCommentsToTerraform(struct?: ProjectGitComments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_commit: cdktf.booleanToTerraform(struct!.onCommit),
    on_pull_request: cdktf.booleanToTerraform(struct!.onPullRequest),
  }
}


export function projectGitCommentsToHclTerraform(struct?: ProjectGitComments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_commit: {
      value: cdktf.booleanToHclTerraform(struct!.onCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_pull_request: {
      value: cdktf.booleanToHclTerraform(struct!.onPullRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectGitCommentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectGitComments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.onCommit = this._onCommit;
    }
    if (this._onPullRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPullRequest = this._onPullRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectGitComments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onCommit = undefined;
      this._onPullRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onCommit = value.onCommit;
      this._onPullRequest = value.onPullRequest;
    }
  }

  // on_commit - computed: false, optional: false, required: true
  private _onCommit?: boolean | cdktf.IResolvable; 
  public get onCommit() {
    return this.getBooleanAttribute('on_commit');
  }
  public set onCommit(value: boolean | cdktf.IResolvable) {
    this._onCommit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onCommitInput() {
    return this._onCommit;
  }

  // on_pull_request - computed: false, optional: false, required: true
  private _onPullRequest?: boolean | cdktf.IResolvable; 
  public get onPullRequest() {
    return this.getBooleanAttribute('on_pull_request');
  }
  public set onPullRequest(value: boolean | cdktf.IResolvable) {
    this._onPullRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPullRequestInput() {
    return this._onPullRequest;
  }
}
export interface ProjectGitRepositoryDeployHooks {
  /**
  * The name of the deploy hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * The branch or commit hash that should be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#ref Project#ref}
  */
  readonly ref: string;
}

export function projectGitRepositoryDeployHooksToTerraform(struct?: ProjectGitRepositoryDeployHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ref: cdktf.stringToTerraform(struct!.ref),
  }
}


export function projectGitRepositoryDeployHooksToHclTerraform(struct?: ProjectGitRepositoryDeployHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectGitRepositoryDeployHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectGitRepositoryDeployHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectGitRepositoryDeployHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ref = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ref = value.ref;
    }
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

  // ref - computed: false, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class ProjectGitRepositoryDeployHooksList extends cdktf.ComplexList {
  public internalValue? : ProjectGitRepositoryDeployHooks[] | cdktf.IResolvable

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
  public get(index: number): ProjectGitRepositoryDeployHooksOutputReference {
    return new ProjectGitRepositoryDeployHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectGitRepository {
  /**
  * Deploy hooks are unique URLs that allow you to trigger a deployment of a given branch. See https://vercel.com/docs/deployments/deploy-hooks for full information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#deploy_hooks Project#deploy_hooks}
  */
  readonly deployHooks?: ProjectGitRepositoryDeployHooks[] | cdktf.IResolvable;
  /**
  * By default, every commit pushed to the main branch will trigger a Production Deployment instead of the usual Preview Deployment. You can switch to a different branch here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#production_branch Project#production_branch}
  */
  readonly productionBranch?: string;
  /**
  * The name of the git repository. For example: `vercel/next.js`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#repo Project#repo}
  */
  readonly repo: string;
  /**
  * The git provider of the repository. Must be either `github`, `gitlab`, or `bitbucket`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#type Project#type}
  */
  readonly type: string;
}

export function projectGitRepositoryToTerraform(struct?: ProjectGitRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deploy_hooks: cdktf.listMapper(projectGitRepositoryDeployHooksToTerraform, false)(struct!.deployHooks),
    production_branch: cdktf.stringToTerraform(struct!.productionBranch),
    repo: cdktf.stringToTerraform(struct!.repo),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function projectGitRepositoryToHclTerraform(struct?: ProjectGitRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deploy_hooks: {
      value: cdktf.listMapperHcl(projectGitRepositoryDeployHooksToHclTerraform, false)(struct!.deployHooks),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectGitRepositoryDeployHooksList",
    },
    production_branch: {
      value: cdktf.stringToHclTerraform(struct!.productionBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectGitRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectGitRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployHooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployHooks = this._deployHooks?.internalValue;
    }
    if (this._productionBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.productionBranch = this._productionBranch;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectGitRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployHooks.internalValue = undefined;
      this._productionBranch = undefined;
      this._repo = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployHooks.internalValue = value.deployHooks;
      this._productionBranch = value.productionBranch;
      this._repo = value.repo;
      this._type = value.type;
    }
  }

  // deploy_hooks - computed: false, optional: true, required: false
  private _deployHooks = new ProjectGitRepositoryDeployHooksList(this, "deploy_hooks", true);
  public get deployHooks() {
    return this._deployHooks;
  }
  public putDeployHooks(value: ProjectGitRepositoryDeployHooks[] | cdktf.IResolvable) {
    this._deployHooks.internalValue = value;
  }
  public resetDeployHooks() {
    this._deployHooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployHooksInput() {
    return this._deployHooks.internalValue;
  }

  // production_branch - computed: true, optional: true, required: false
  private _productionBranch?: string; 
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }
  public set productionBranch(value: string) {
    this._productionBranch = value;
  }
  public resetProductionBranch() {
    this._productionBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionBranchInput() {
    return this._productionBranch;
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
export interface ProjectOidcTokenConfig {
  /**
  * Configures the URL of the `iss` claim. `team` = `https://oidc.vercel.com/[team_slug]` `global` = `https://oidc.vercel.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#issuer_mode Project#issuer_mode}
  */
  readonly issuerMode?: string;
}

export function projectOidcTokenConfigToTerraform(struct?: ProjectOidcTokenConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_mode: cdktf.stringToTerraform(struct!.issuerMode),
  }
}


export function projectOidcTokenConfigToHclTerraform(struct?: ProjectOidcTokenConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer_mode: {
      value: cdktf.stringToHclTerraform(struct!.issuerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectOidcTokenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectOidcTokenConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerMode = this._issuerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectOidcTokenConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuerMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuerMode = value.issuerMode;
    }
  }

  // issuer_mode - computed: true, optional: true, required: false
  private _issuerMode?: string; 
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
  }
  public set issuerMode(value: string) {
    this._issuerMode = value;
  }
  public resetIssuerMode() {
    this._issuerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerModeInput() {
    return this._issuerMode;
  }
}
export interface ProjectOptionsAllowlistPaths {
  /**
  * The path prefix to compare with the incoming request path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#value Project#value}
  */
  readonly value: string;
}

export function projectOptionsAllowlistPathsToTerraform(struct?: ProjectOptionsAllowlistPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectOptionsAllowlistPathsToHclTerraform(struct?: ProjectOptionsAllowlistPaths | cdktf.IResolvable): any {
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

export class ProjectOptionsAllowlistPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectOptionsAllowlistPaths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProjectOptionsAllowlistPaths | cdktf.IResolvable | undefined) {
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

export class ProjectOptionsAllowlistPathsList extends cdktf.ComplexList {
  public internalValue? : ProjectOptionsAllowlistPaths[] | cdktf.IResolvable

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
  public get(index: number): ProjectOptionsAllowlistPathsOutputReference {
    return new ProjectOptionsAllowlistPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectOptionsAllowlistStruct {
  /**
  * The allowed paths for the OPTIONS Allowlist. Incoming requests will bypass Deployment Protection if they have the method `OPTIONS` and **start with** one of the path values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#paths Project#paths}
  */
  readonly paths: ProjectOptionsAllowlistPaths[] | cdktf.IResolvable;
}

export function projectOptionsAllowlistStructToTerraform(struct?: ProjectOptionsAllowlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(projectOptionsAllowlistPathsToTerraform, false)(struct!.paths),
  }
}


export function projectOptionsAllowlistStructToHclTerraform(struct?: ProjectOptionsAllowlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(projectOptionsAllowlistPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectOptionsAllowlistPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectOptionsAllowlistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectOptionsAllowlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectOptionsAllowlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths.internalValue = value.paths;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths = new ProjectOptionsAllowlistPathsList(this, "paths", true);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: ProjectOptionsAllowlistPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}
export interface ProjectPasswordProtection {
  /**
  * The deployment environment to protect. Must be one of `standard_protection_new` (Standard Protection), `standard_protection` (Legacy Standard Protection), `all_deployments`, or `only_preview_deployments`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#deployment_type Project#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * The password that visitors must enter to gain access to your Preview Deployments. Drift detection is not possible for this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#password Project#password}
  */
  readonly password: string;
}

export function projectPasswordProtectionToTerraform(struct?: ProjectPasswordProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function projectPasswordProtectionToHclTerraform(struct?: ProjectPasswordProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectPasswordProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectPasswordProtection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectPasswordProtection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentType = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentType = value.deploymentType;
      this._password = value.password;
    }
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface ProjectResourceConfig {
  /**
  * Enable fluid compute for your Vercel Functions to automatically manage concurrency and optimize performance. Vercel will handle the defaults to ensure the best experience for your workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#fluid Project#fluid}
  */
  readonly fluid?: boolean | cdktf.IResolvable;
  /**
  * The amount of CPU available to your Serverless Functions. Should be one of 'standard_legacy' (0.6vCPU), 'standard' (1vCPU) or 'performance' (1.7vCPUs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#function_default_cpu_type Project#function_default_cpu_type}
  */
  readonly functionDefaultCpuType?: string;
  /**
  * The default regions for Serverless Functions. Must be an array of valid region identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#function_default_regions Project#function_default_regions}
  */
  readonly functionDefaultRegions?: string[];
  /**
  * The default timeout for Serverless Functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#function_default_timeout Project#function_default_timeout}
  */
  readonly functionDefaultTimeout?: number;
}

export function projectResourceConfigToTerraform(struct?: ProjectResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fluid: cdktf.booleanToTerraform(struct!.fluid),
    function_default_cpu_type: cdktf.stringToTerraform(struct!.functionDefaultCpuType),
    function_default_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functionDefaultRegions),
    function_default_timeout: cdktf.numberToTerraform(struct!.functionDefaultTimeout),
  }
}


export function projectResourceConfigToHclTerraform(struct?: ProjectResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fluid: {
      value: cdktf.booleanToHclTerraform(struct!.fluid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    function_default_cpu_type: {
      value: cdktf.stringToHclTerraform(struct!.functionDefaultCpuType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_default_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functionDefaultRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    function_default_timeout: {
      value: cdktf.numberToHclTerraform(struct!.functionDefaultTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectResourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectResourceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fluid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluid = this._fluid;
    }
    if (this._functionDefaultCpuType !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionDefaultCpuType = this._functionDefaultCpuType;
    }
    if (this._functionDefaultRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionDefaultRegions = this._functionDefaultRegions;
    }
    if (this._functionDefaultTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionDefaultTimeout = this._functionDefaultTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectResourceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fluid = undefined;
      this._functionDefaultCpuType = undefined;
      this._functionDefaultRegions = undefined;
      this._functionDefaultTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fluid = value.fluid;
      this._functionDefaultCpuType = value.functionDefaultCpuType;
      this._functionDefaultRegions = value.functionDefaultRegions;
      this._functionDefaultTimeout = value.functionDefaultTimeout;
    }
  }

  // fluid - computed: true, optional: true, required: false
  private _fluid?: boolean | cdktf.IResolvable; 
  public get fluid() {
    return this.getBooleanAttribute('fluid');
  }
  public set fluid(value: boolean | cdktf.IResolvable) {
    this._fluid = value;
  }
  public resetFluid() {
    this._fluid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluidInput() {
    return this._fluid;
  }

  // function_default_cpu_type - computed: true, optional: true, required: false
  private _functionDefaultCpuType?: string; 
  public get functionDefaultCpuType() {
    return this.getStringAttribute('function_default_cpu_type');
  }
  public set functionDefaultCpuType(value: string) {
    this._functionDefaultCpuType = value;
  }
  public resetFunctionDefaultCpuType() {
    this._functionDefaultCpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionDefaultCpuTypeInput() {
    return this._functionDefaultCpuType;
  }

  // function_default_regions - computed: true, optional: true, required: false
  private _functionDefaultRegions?: string[]; 
  public get functionDefaultRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('function_default_regions'));
  }
  public set functionDefaultRegions(value: string[]) {
    this._functionDefaultRegions = value;
  }
  public resetFunctionDefaultRegions() {
    this._functionDefaultRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionDefaultRegionsInput() {
    return this._functionDefaultRegions;
  }

  // function_default_timeout - computed: true, optional: true, required: false
  private _functionDefaultTimeout?: number; 
  public get functionDefaultTimeout() {
    return this.getNumberAttribute('function_default_timeout');
  }
  public set functionDefaultTimeout(value: number) {
    this._functionDefaultTimeout = value;
  }
  public resetFunctionDefaultTimeout() {
    this._functionDefaultTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionDefaultTimeoutInput() {
    return this._functionDefaultTimeout;
  }
}
export interface ProjectTrustedIpsAddresses {
  /**
  * A description for the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#note Project#note}
  */
  readonly note?: string;
  /**
  * The address or CIDR range that can access deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#value Project#value}
  */
  readonly value: string;
}

export function projectTrustedIpsAddressesToTerraform(struct?: ProjectTrustedIpsAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    note: cdktf.stringToTerraform(struct!.note),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectTrustedIpsAddressesToHclTerraform(struct?: ProjectTrustedIpsAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    note: {
      value: cdktf.stringToHclTerraform(struct!.note),
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

export class ProjectTrustedIpsAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectTrustedIpsAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._note !== undefined) {
      hasAnyValues = true;
      internalValueResult.note = this._note;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectTrustedIpsAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._note = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._note = value.note;
      this._value = value.value;
    }
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
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

export class ProjectTrustedIpsAddressesList extends cdktf.ComplexList {
  public internalValue? : ProjectTrustedIpsAddresses[] | cdktf.IResolvable

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
  public get(index: number): ProjectTrustedIpsAddressesOutputReference {
    return new ProjectTrustedIpsAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectTrustedIps {
  /**
  * The allowed IP addressses and CIDR ranges with optional descriptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#addresses Project#addresses}
  */
  readonly addresses: ProjectTrustedIpsAddresses[] | cdktf.IResolvable;
  /**
  * The deployment environment to protect. Must be one of `standard_protection_new` (Standard Protection), `standard_protection` (Legacy Standard Protection), `all_deployments`, `only_production_deployments`, or `only_preview_deployments`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#deployment_type Project#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * Whether or not Trusted IPs is optional to access a deployment. Must be either `trusted_ip_required` or `trusted_ip_optional`. `trusted_ip_optional` is only available with Standalone Trusted IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#protection_mode Project#protection_mode}
  */
  readonly protectionMode?: string;
}

export function projectTrustedIpsToTerraform(struct?: ProjectTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(projectTrustedIpsAddressesToTerraform, false)(struct!.addresses),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
  }
}


export function projectTrustedIpsToHclTerraform(struct?: ProjectTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(projectTrustedIpsAddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectTrustedIpsAddressesList",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectTrustedIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectTrustedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectTrustedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
      this._deploymentType = undefined;
      this._protectionMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
      this._deploymentType = value.deploymentType;
      this._protectionMode = value.protectionMode;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses = new ProjectTrustedIpsAddressesList(this, "addresses", true);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: ProjectTrustedIpsAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // protection_mode - computed: true, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }
}
export interface ProjectVercelAuthentication {
  /**
  * The deployment environment to protect. The default value is `standard_protection_new` (Standard Protection). Must be one of `standard_protection_new` (Standard Protection), `standard_protection` (Legacy Standard Protection), `all_deployments`, `only_preview_deployments`, or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#deployment_type Project#deployment_type}
  */
  readonly deploymentType?: string;
}

export function projectVercelAuthenticationToTerraform(struct?: ProjectVercelAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
  }
}


export function projectVercelAuthenticationToHclTerraform(struct?: ProjectVercelAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectVercelAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectVercelAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectVercelAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentType = value.deploymentType;
    }
  }

  // deployment_type - computed: true, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project vercel_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/project vercel_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_project',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.1',
        providerVersionConstraint: '4.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAssignCustomDomains = config.autoAssignCustomDomains;
    this._automaticallyExposeSystemEnvironmentVariables = config.automaticallyExposeSystemEnvironmentVariables;
    this._buildCommand = config.buildCommand;
    this._buildMachineType = config.buildMachineType;
    this._customerSuccessCodeVisibility = config.customerSuccessCodeVisibility;
    this._devCommand = config.devCommand;
    this._directoryListing = config.directoryListing;
    this._enableAffectedProjectsDeployments = config.enableAffectedProjectsDeployments;
    this._enablePreviewFeedback = config.enablePreviewFeedback;
    this._enableProductionFeedback = config.enableProductionFeedback;
    this._environment.internalValue = config.environment;
    this._framework = config.framework;
    this._functionFailover = config.functionFailover;
    this._gitComments.internalValue = config.gitComments;
    this._gitForkProtection = config.gitForkProtection;
    this._gitLfs = config.gitLfs;
    this._gitRepository.internalValue = config.gitRepository;
    this._ignoreCommand = config.ignoreCommand;
    this._installCommand = config.installCommand;
    this._name = config.name;
    this._nodeVersion = config.nodeVersion;
    this._oidcTokenConfig.internalValue = config.oidcTokenConfig;
    this._onDemandConcurrentBuilds = config.onDemandConcurrentBuilds;
    this._optionsAllowlist.internalValue = config.optionsAllowlist;
    this._outputDirectory = config.outputDirectory;
    this._passwordProtection.internalValue = config.passwordProtection;
    this._previewComments = config.previewComments;
    this._previewDeploymentsDisabled = config.previewDeploymentsDisabled;
    this._prioritiseProductionBuilds = config.prioritiseProductionBuilds;
    this._protectionBypassForAutomation = config.protectionBypassForAutomation;
    this._protectionBypassForAutomationSecret = config.protectionBypassForAutomationSecret;
    this._publicSource = config.publicSource;
    this._resourceConfig.internalValue = config.resourceConfig;
    this._rootDirectory = config.rootDirectory;
    this._serverlessFunctionRegion = config.serverlessFunctionRegion;
    this._skewProtection = config.skewProtection;
    this._teamId = config.teamId;
    this._trustedIps.internalValue = config.trustedIps;
    this._vercelAuthentication.internalValue = config.vercelAuthentication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_assign_custom_domains - computed: true, optional: true, required: false
  private _autoAssignCustomDomains?: boolean | cdktf.IResolvable; 
  public get autoAssignCustomDomains() {
    return this.getBooleanAttribute('auto_assign_custom_domains');
  }
  public set autoAssignCustomDomains(value: boolean | cdktf.IResolvable) {
    this._autoAssignCustomDomains = value;
  }
  public resetAutoAssignCustomDomains() {
    this._autoAssignCustomDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignCustomDomainsInput() {
    return this._autoAssignCustomDomains;
  }

  // automatically_expose_system_environment_variables - computed: true, optional: true, required: false
  private _automaticallyExposeSystemEnvironmentVariables?: boolean | cdktf.IResolvable; 
  public get automaticallyExposeSystemEnvironmentVariables() {
    return this.getBooleanAttribute('automatically_expose_system_environment_variables');
  }
  public set automaticallyExposeSystemEnvironmentVariables(value: boolean | cdktf.IResolvable) {
    this._automaticallyExposeSystemEnvironmentVariables = value;
  }
  public resetAutomaticallyExposeSystemEnvironmentVariables() {
    this._automaticallyExposeSystemEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticallyExposeSystemEnvironmentVariablesInput() {
    return this._automaticallyExposeSystemEnvironmentVariables;
  }

  // build_command - computed: false, optional: true, required: false
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  public resetBuildCommand() {
    this._buildCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // build_machine_type - computed: true, optional: true, required: false
  private _buildMachineType?: string; 
  public get buildMachineType() {
    return this.getStringAttribute('build_machine_type');
  }
  public set buildMachineType(value: string) {
    this._buildMachineType = value;
  }
  public resetBuildMachineType() {
    this._buildMachineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildMachineTypeInput() {
    return this._buildMachineType;
  }

  // customer_success_code_visibility - computed: true, optional: true, required: false
  private _customerSuccessCodeVisibility?: boolean | cdktf.IResolvable; 
  public get customerSuccessCodeVisibility() {
    return this.getBooleanAttribute('customer_success_code_visibility');
  }
  public set customerSuccessCodeVisibility(value: boolean | cdktf.IResolvable) {
    this._customerSuccessCodeVisibility = value;
  }
  public resetCustomerSuccessCodeVisibility() {
    this._customerSuccessCodeVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerSuccessCodeVisibilityInput() {
    return this._customerSuccessCodeVisibility;
  }

  // dev_command - computed: false, optional: true, required: false
  private _devCommand?: string; 
  public get devCommand() {
    return this.getStringAttribute('dev_command');
  }
  public set devCommand(value: string) {
    this._devCommand = value;
  }
  public resetDevCommand() {
    this._devCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devCommandInput() {
    return this._devCommand;
  }

  // directory_listing - computed: true, optional: true, required: false
  private _directoryListing?: boolean | cdktf.IResolvable; 
  public get directoryListing() {
    return this.getBooleanAttribute('directory_listing');
  }
  public set directoryListing(value: boolean | cdktf.IResolvable) {
    this._directoryListing = value;
  }
  public resetDirectoryListing() {
    this._directoryListing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryListingInput() {
    return this._directoryListing;
  }

  // enable_affected_projects_deployments - computed: true, optional: true, required: false
  private _enableAffectedProjectsDeployments?: boolean | cdktf.IResolvable; 
  public get enableAffectedProjectsDeployments() {
    return this.getBooleanAttribute('enable_affected_projects_deployments');
  }
  public set enableAffectedProjectsDeployments(value: boolean | cdktf.IResolvable) {
    this._enableAffectedProjectsDeployments = value;
  }
  public resetEnableAffectedProjectsDeployments() {
    this._enableAffectedProjectsDeployments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAffectedProjectsDeploymentsInput() {
    return this._enableAffectedProjectsDeployments;
  }

  // enable_preview_feedback - computed: true, optional: true, required: false
  private _enablePreviewFeedback?: boolean | cdktf.IResolvable; 
  public get enablePreviewFeedback() {
    return this.getBooleanAttribute('enable_preview_feedback');
  }
  public set enablePreviewFeedback(value: boolean | cdktf.IResolvable) {
    this._enablePreviewFeedback = value;
  }
  public resetEnablePreviewFeedback() {
    this._enablePreviewFeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreviewFeedbackInput() {
    return this._enablePreviewFeedback;
  }

  // enable_production_feedback - computed: true, optional: true, required: false
  private _enableProductionFeedback?: boolean | cdktf.IResolvable; 
  public get enableProductionFeedback() {
    return this.getBooleanAttribute('enable_production_feedback');
  }
  public set enableProductionFeedback(value: boolean | cdktf.IResolvable) {
    this._enableProductionFeedback = value;
  }
  public resetEnableProductionFeedback() {
    this._enableProductionFeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProductionFeedbackInput() {
    return this._enableProductionFeedback;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new ProjectEnvironmentList(this, "environment", true);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: ProjectEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // framework - computed: false, optional: true, required: false
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // function_failover - computed: true, optional: true, required: false
  private _functionFailover?: boolean | cdktf.IResolvable; 
  public get functionFailover() {
    return this.getBooleanAttribute('function_failover');
  }
  public set functionFailover(value: boolean | cdktf.IResolvable) {
    this._functionFailover = value;
  }
  public resetFunctionFailover() {
    this._functionFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionFailoverInput() {
    return this._functionFailover;
  }

  // git_comments - computed: false, optional: true, required: false
  private _gitComments = new ProjectGitCommentsOutputReference(this, "git_comments");
  public get gitComments() {
    return this._gitComments;
  }
  public putGitComments(value: ProjectGitComments) {
    this._gitComments.internalValue = value;
  }
  public resetGitComments() {
    this._gitComments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCommentsInput() {
    return this._gitComments.internalValue;
  }

  // git_fork_protection - computed: true, optional: true, required: false
  private _gitForkProtection?: boolean | cdktf.IResolvable; 
  public get gitForkProtection() {
    return this.getBooleanAttribute('git_fork_protection');
  }
  public set gitForkProtection(value: boolean | cdktf.IResolvable) {
    this._gitForkProtection = value;
  }
  public resetGitForkProtection() {
    this._gitForkProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitForkProtectionInput() {
    return this._gitForkProtection;
  }

  // git_lfs - computed: true, optional: true, required: false
  private _gitLfs?: boolean | cdktf.IResolvable; 
  public get gitLfs() {
    return this.getBooleanAttribute('git_lfs');
  }
  public set gitLfs(value: boolean | cdktf.IResolvable) {
    this._gitLfs = value;
  }
  public resetGitLfs() {
    this._gitLfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitLfsInput() {
    return this._gitLfs;
  }

  // git_repository - computed: false, optional: true, required: false
  private _gitRepository = new ProjectGitRepositoryOutputReference(this, "git_repository");
  public get gitRepository() {
    return this._gitRepository;
  }
  public putGitRepository(value: ProjectGitRepository) {
    this._gitRepository.internalValue = value;
  }
  public resetGitRepository() {
    this._gitRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryInput() {
    return this._gitRepository.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_command - computed: false, optional: true, required: false
  private _ignoreCommand?: string; 
  public get ignoreCommand() {
    return this.getStringAttribute('ignore_command');
  }
  public set ignoreCommand(value: string) {
    this._ignoreCommand = value;
  }
  public resetIgnoreCommand() {
    this._ignoreCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCommandInput() {
    return this._ignoreCommand;
  }

  // install_command - computed: false, optional: true, required: false
  private _installCommand?: string; 
  public get installCommand() {
    return this.getStringAttribute('install_command');
  }
  public set installCommand(value: string) {
    this._installCommand = value;
  }
  public resetInstallCommand() {
    this._installCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installCommandInput() {
    return this._installCommand;
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

  // node_version - computed: true, optional: true, required: false
  private _nodeVersion?: string; 
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }
  public set nodeVersion(value: string) {
    this._nodeVersion = value;
  }
  public resetNodeVersion() {
    this._nodeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVersionInput() {
    return this._nodeVersion;
  }

  // oidc_token_config - computed: true, optional: true, required: false
  private _oidcTokenConfig = new ProjectOidcTokenConfigOutputReference(this, "oidc_token_config");
  public get oidcTokenConfig() {
    return this._oidcTokenConfig;
  }
  public putOidcTokenConfig(value: ProjectOidcTokenConfig) {
    this._oidcTokenConfig.internalValue = value;
  }
  public resetOidcTokenConfig() {
    this._oidcTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenConfigInput() {
    return this._oidcTokenConfig.internalValue;
  }

  // on_demand_concurrent_builds - computed: true, optional: true, required: false
  private _onDemandConcurrentBuilds?: boolean | cdktf.IResolvable; 
  public get onDemandConcurrentBuilds() {
    return this.getBooleanAttribute('on_demand_concurrent_builds');
  }
  public set onDemandConcurrentBuilds(value: boolean | cdktf.IResolvable) {
    this._onDemandConcurrentBuilds = value;
  }
  public resetOnDemandConcurrentBuilds() {
    this._onDemandConcurrentBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandConcurrentBuildsInput() {
    return this._onDemandConcurrentBuilds;
  }

  // options_allowlist - computed: false, optional: true, required: false
  private _optionsAllowlist = new ProjectOptionsAllowlistStructOutputReference(this, "options_allowlist");
  public get optionsAllowlist() {
    return this._optionsAllowlist;
  }
  public putOptionsAllowlist(value: ProjectOptionsAllowlistStruct) {
    this._optionsAllowlist.internalValue = value;
  }
  public resetOptionsAllowlist() {
    this._optionsAllowlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsAllowlistInput() {
    return this._optionsAllowlist.internalValue;
  }

  // output_directory - computed: false, optional: true, required: false
  private _outputDirectory?: string; 
  public get outputDirectory() {
    return this.getStringAttribute('output_directory');
  }
  public set outputDirectory(value: string) {
    this._outputDirectory = value;
  }
  public resetOutputDirectory() {
    this._outputDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDirectoryInput() {
    return this._outputDirectory;
  }

  // password_protection - computed: false, optional: true, required: false
  private _passwordProtection = new ProjectPasswordProtectionOutputReference(this, "password_protection");
  public get passwordProtection() {
    return this._passwordProtection;
  }
  public putPasswordProtection(value: ProjectPasswordProtection) {
    this._passwordProtection.internalValue = value;
  }
  public resetPasswordProtection() {
    this._passwordProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordProtectionInput() {
    return this._passwordProtection.internalValue;
  }

  // preview_comments - computed: true, optional: true, required: false
  private _previewComments?: boolean | cdktf.IResolvable; 
  public get previewComments() {
    return this.getBooleanAttribute('preview_comments');
  }
  public set previewComments(value: boolean | cdktf.IResolvable) {
    this._previewComments = value;
  }
  public resetPreviewComments() {
    this._previewComments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewCommentsInput() {
    return this._previewComments;
  }

  // preview_deployments_disabled - computed: true, optional: true, required: false
  private _previewDeploymentsDisabled?: boolean | cdktf.IResolvable; 
  public get previewDeploymentsDisabled() {
    return this.getBooleanAttribute('preview_deployments_disabled');
  }
  public set previewDeploymentsDisabled(value: boolean | cdktf.IResolvable) {
    this._previewDeploymentsDisabled = value;
  }
  public resetPreviewDeploymentsDisabled() {
    this._previewDeploymentsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewDeploymentsDisabledInput() {
    return this._previewDeploymentsDisabled;
  }

  // prioritise_production_builds - computed: true, optional: true, required: false
  private _prioritiseProductionBuilds?: boolean | cdktf.IResolvable; 
  public get prioritiseProductionBuilds() {
    return this.getBooleanAttribute('prioritise_production_builds');
  }
  public set prioritiseProductionBuilds(value: boolean | cdktf.IResolvable) {
    this._prioritiseProductionBuilds = value;
  }
  public resetPrioritiseProductionBuilds() {
    this._prioritiseProductionBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiseProductionBuildsInput() {
    return this._prioritiseProductionBuilds;
  }

  // protection_bypass_for_automation - computed: false, optional: true, required: false
  private _protectionBypassForAutomation?: boolean | cdktf.IResolvable; 
  public get protectionBypassForAutomation() {
    return this.getBooleanAttribute('protection_bypass_for_automation');
  }
  public set protectionBypassForAutomation(value: boolean | cdktf.IResolvable) {
    this._protectionBypassForAutomation = value;
  }
  public resetProtectionBypassForAutomation() {
    this._protectionBypassForAutomation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionBypassForAutomationInput() {
    return this._protectionBypassForAutomation;
  }

  // protection_bypass_for_automation_secret - computed: true, optional: true, required: false
  private _protectionBypassForAutomationSecret?: string; 
  public get protectionBypassForAutomationSecret() {
    return this.getStringAttribute('protection_bypass_for_automation_secret');
  }
  public set protectionBypassForAutomationSecret(value: string) {
    this._protectionBypassForAutomationSecret = value;
  }
  public resetProtectionBypassForAutomationSecret() {
    this._protectionBypassForAutomationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionBypassForAutomationSecretInput() {
    return this._protectionBypassForAutomationSecret;
  }

  // public_source - computed: false, optional: true, required: false
  private _publicSource?: boolean | cdktf.IResolvable; 
  public get publicSource() {
    return this.getBooleanAttribute('public_source');
  }
  public set publicSource(value: boolean | cdktf.IResolvable) {
    this._publicSource = value;
  }
  public resetPublicSource() {
    this._publicSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSourceInput() {
    return this._publicSource;
  }

  // resource_config - computed: true, optional: true, required: false
  private _resourceConfig = new ProjectResourceConfigOutputReference(this, "resource_config");
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: ProjectResourceConfig) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // root_directory - computed: false, optional: true, required: false
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }

  // serverless_function_region - computed: true, optional: true, required: false
  private _serverlessFunctionRegion?: string; 
  public get serverlessFunctionRegion() {
    return this.getStringAttribute('serverless_function_region');
  }
  public set serverlessFunctionRegion(value: string) {
    this._serverlessFunctionRegion = value;
  }
  public resetServerlessFunctionRegion() {
    this._serverlessFunctionRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessFunctionRegionInput() {
    return this._serverlessFunctionRegion;
  }

  // skew_protection - computed: false, optional: true, required: false
  private _skewProtection?: string; 
  public get skewProtection() {
    return this.getStringAttribute('skew_protection');
  }
  public set skewProtection(value: string) {
    this._skewProtection = value;
  }
  public resetSkewProtection() {
    this._skewProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewProtectionInput() {
    return this._skewProtection;
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // trusted_ips - computed: false, optional: true, required: false
  private _trustedIps = new ProjectTrustedIpsOutputReference(this, "trusted_ips");
  public get trustedIps() {
    return this._trustedIps;
  }
  public putTrustedIps(value: ProjectTrustedIps) {
    this._trustedIps.internalValue = value;
  }
  public resetTrustedIps() {
    this._trustedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedIpsInput() {
    return this._trustedIps.internalValue;
  }

  // vercel_authentication - computed: true, optional: true, required: false
  private _vercelAuthentication = new ProjectVercelAuthenticationOutputReference(this, "vercel_authentication");
  public get vercelAuthentication() {
    return this._vercelAuthentication;
  }
  public putVercelAuthentication(value: ProjectVercelAuthentication) {
    this._vercelAuthentication.internalValue = value;
  }
  public resetVercelAuthentication() {
    this._vercelAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vercelAuthenticationInput() {
    return this._vercelAuthentication.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_assign_custom_domains: cdktf.booleanToTerraform(this._autoAssignCustomDomains),
      automatically_expose_system_environment_variables: cdktf.booleanToTerraform(this._automaticallyExposeSystemEnvironmentVariables),
      build_command: cdktf.stringToTerraform(this._buildCommand),
      build_machine_type: cdktf.stringToTerraform(this._buildMachineType),
      customer_success_code_visibility: cdktf.booleanToTerraform(this._customerSuccessCodeVisibility),
      dev_command: cdktf.stringToTerraform(this._devCommand),
      directory_listing: cdktf.booleanToTerraform(this._directoryListing),
      enable_affected_projects_deployments: cdktf.booleanToTerraform(this._enableAffectedProjectsDeployments),
      enable_preview_feedback: cdktf.booleanToTerraform(this._enablePreviewFeedback),
      enable_production_feedback: cdktf.booleanToTerraform(this._enableProductionFeedback),
      environment: cdktf.listMapper(projectEnvironmentToTerraform, false)(this._environment.internalValue),
      framework: cdktf.stringToTerraform(this._framework),
      function_failover: cdktf.booleanToTerraform(this._functionFailover),
      git_comments: projectGitCommentsToTerraform(this._gitComments.internalValue),
      git_fork_protection: cdktf.booleanToTerraform(this._gitForkProtection),
      git_lfs: cdktf.booleanToTerraform(this._gitLfs),
      git_repository: projectGitRepositoryToTerraform(this._gitRepository.internalValue),
      ignore_command: cdktf.stringToTerraform(this._ignoreCommand),
      install_command: cdktf.stringToTerraform(this._installCommand),
      name: cdktf.stringToTerraform(this._name),
      node_version: cdktf.stringToTerraform(this._nodeVersion),
      oidc_token_config: projectOidcTokenConfigToTerraform(this._oidcTokenConfig.internalValue),
      on_demand_concurrent_builds: cdktf.booleanToTerraform(this._onDemandConcurrentBuilds),
      options_allowlist: projectOptionsAllowlistStructToTerraform(this._optionsAllowlist.internalValue),
      output_directory: cdktf.stringToTerraform(this._outputDirectory),
      password_protection: projectPasswordProtectionToTerraform(this._passwordProtection.internalValue),
      preview_comments: cdktf.booleanToTerraform(this._previewComments),
      preview_deployments_disabled: cdktf.booleanToTerraform(this._previewDeploymentsDisabled),
      prioritise_production_builds: cdktf.booleanToTerraform(this._prioritiseProductionBuilds),
      protection_bypass_for_automation: cdktf.booleanToTerraform(this._protectionBypassForAutomation),
      protection_bypass_for_automation_secret: cdktf.stringToTerraform(this._protectionBypassForAutomationSecret),
      public_source: cdktf.booleanToTerraform(this._publicSource),
      resource_config: projectResourceConfigToTerraform(this._resourceConfig.internalValue),
      root_directory: cdktf.stringToTerraform(this._rootDirectory),
      serverless_function_region: cdktf.stringToTerraform(this._serverlessFunctionRegion),
      skew_protection: cdktf.stringToTerraform(this._skewProtection),
      team_id: cdktf.stringToTerraform(this._teamId),
      trusted_ips: projectTrustedIpsToTerraform(this._trustedIps.internalValue),
      vercel_authentication: projectVercelAuthenticationToTerraform(this._vercelAuthentication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_assign_custom_domains: {
        value: cdktf.booleanToHclTerraform(this._autoAssignCustomDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automatically_expose_system_environment_variables: {
        value: cdktf.booleanToHclTerraform(this._automaticallyExposeSystemEnvironmentVariables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      build_command: {
        value: cdktf.stringToHclTerraform(this._buildCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_machine_type: {
        value: cdktf.stringToHclTerraform(this._buildMachineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_success_code_visibility: {
        value: cdktf.booleanToHclTerraform(this._customerSuccessCodeVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dev_command: {
        value: cdktf.stringToHclTerraform(this._devCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_listing: {
        value: cdktf.booleanToHclTerraform(this._directoryListing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_affected_projects_deployments: {
        value: cdktf.booleanToHclTerraform(this._enableAffectedProjectsDeployments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_preview_feedback: {
        value: cdktf.booleanToHclTerraform(this._enablePreviewFeedback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_production_feedback: {
        value: cdktf.booleanToHclTerraform(this._enableProductionFeedback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.listMapperHcl(projectEnvironmentToHclTerraform, false)(this._environment.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectEnvironmentList",
      },
      framework: {
        value: cdktf.stringToHclTerraform(this._framework),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_failover: {
        value: cdktf.booleanToHclTerraform(this._functionFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_comments: {
        value: projectGitCommentsToHclTerraform(this._gitComments.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectGitComments",
      },
      git_fork_protection: {
        value: cdktf.booleanToHclTerraform(this._gitForkProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_lfs: {
        value: cdktf.booleanToHclTerraform(this._gitLfs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_repository: {
        value: projectGitRepositoryToHclTerraform(this._gitRepository.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectGitRepository",
      },
      ignore_command: {
        value: cdktf.stringToHclTerraform(this._ignoreCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_command: {
        value: cdktf.stringToHclTerraform(this._installCommand),
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
      node_version: {
        value: cdktf.stringToHclTerraform(this._nodeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_token_config: {
        value: projectOidcTokenConfigToHclTerraform(this._oidcTokenConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectOidcTokenConfig",
      },
      on_demand_concurrent_builds: {
        value: cdktf.booleanToHclTerraform(this._onDemandConcurrentBuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options_allowlist: {
        value: projectOptionsAllowlistStructToHclTerraform(this._optionsAllowlist.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectOptionsAllowlistStruct",
      },
      output_directory: {
        value: cdktf.stringToHclTerraform(this._outputDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_protection: {
        value: projectPasswordProtectionToHclTerraform(this._passwordProtection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectPasswordProtection",
      },
      preview_comments: {
        value: cdktf.booleanToHclTerraform(this._previewComments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preview_deployments_disabled: {
        value: cdktf.booleanToHclTerraform(this._previewDeploymentsDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prioritise_production_builds: {
        value: cdktf.booleanToHclTerraform(this._prioritiseProductionBuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protection_bypass_for_automation: {
        value: cdktf.booleanToHclTerraform(this._protectionBypassForAutomation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protection_bypass_for_automation_secret: {
        value: cdktf.stringToHclTerraform(this._protectionBypassForAutomationSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_source: {
        value: cdktf.booleanToHclTerraform(this._publicSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_config: {
        value: projectResourceConfigToHclTerraform(this._resourceConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectResourceConfig",
      },
      root_directory: {
        value: cdktf.stringToHclTerraform(this._rootDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless_function_region: {
        value: cdktf.stringToHclTerraform(this._serverlessFunctionRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skew_protection: {
        value: cdktf.stringToHclTerraform(this._skewProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_ips: {
        value: projectTrustedIpsToHclTerraform(this._trustedIps.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectTrustedIps",
      },
      vercel_authentication: {
        value: projectVercelAuthenticationToHclTerraform(this._vercelAuthentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectVercelAuthentication",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
