// https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether this module can manage others. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#administrative Module#administrative}
  */
  readonly administrative?: boolean | cdktf.IResolvable;
  /**
  * GitHub branch to apply changes to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#branch Module#branch}
  */
  readonly branch: string;
  /**
  * Free-form module description for users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#description Module#description}
  */
  readonly description?: string;
  /**
  * Indicates whether local preview versions can be triggered on this Module. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#enable_local_preview Module#enable_local_preview}
  */
  readonly enableLocalPreview?: boolean | cdktf.IResolvable;
  /**
  * Git sparse checkout paths is an optional list of paths to use for sparse checkout. If not set, the entire repository will be checked out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#git_sparse_checkout_paths Module#git_sparse_checkout_paths}
  */
  readonly gitSparseCheckoutPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#id Module#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#labels Module#labels}
  */
  readonly labels?: string[];
  /**
  * The module name will by default be inferred from the repository name if it follows the terraform-provider-name naming convention. However, if the repository doesn't follow this convention, or you want to give it a custom name, you can provide it here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#name Module#name}
  */
  readonly name?: string;
  /**
  * Project root is the optional directory relative to the repository root containing the module source code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#project_root Module#project_root}
  */
  readonly projectRoot?: string;
  /**
  * Protect this module from accidental deletion. If set, attempts to delete this module will fail. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#protect_from_deletion Module#protect_from_deletion}
  */
  readonly protectFromDeletion?: boolean | cdktf.IResolvable;
  /**
  * Make this module publicly accessible. Can only be set at creation time. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#public Module#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * Name of the repository, without the owner part
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#repository Module#repository}
  */
  readonly repository: string;
  /**
  * Name of the Docker image used to process Runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#runner_image Module#runner_image}
  */
  readonly runnerImage?: string;
  /**
  * List of the accounts (subdomains) which should have access to the Module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#shared_accounts Module#shared_accounts}
  */
  readonly sharedAccounts?: string[];
  /**
  * ID (slug) of the space the module is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#space_id Module#space_id}
  */
  readonly spaceId?: string;
  /**
  * (Beta) List of the space IDs which should have access to the Module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#space_shares Module#space_shares}
  */
  readonly spaceShares?: string[];
  /**
  * The module provider will by default be inferred from the repository name if it follows the terraform-provider-name naming convention. However, if the repository doesn't follow this convention, or you gave the module a custom name, you can provide the provider name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#terraform_provider Module#terraform_provider}
  */
  readonly terraformProvider?: string;
  /**
  * ID of the worker pool to use. NOTE: worker_pool_id is required when using a self-hosted instance of Spacelift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#worker_pool_id Module#worker_pool_id}
  */
  readonly workerPoolId?: string;
  /**
  * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#workflow_tool Module#workflow_tool}
  */
  readonly workflowTool?: string;
  /**
  * azure_devops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#azure_devops Module#azure_devops}
  */
  readonly azureDevops?: ModuleAzureDevops;
  /**
  * bitbucket_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#bitbucket_cloud Module#bitbucket_cloud}
  */
  readonly bitbucketCloud?: ModuleBitbucketCloud;
  /**
  * bitbucket_datacenter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#bitbucket_datacenter Module#bitbucket_datacenter}
  */
  readonly bitbucketDatacenter?: ModuleBitbucketDatacenter;
  /**
  * github_enterprise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#github_enterprise Module#github_enterprise}
  */
  readonly githubEnterprise?: ModuleGithubEnterprise;
  /**
  * gitlab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#gitlab Module#gitlab}
  */
  readonly gitlab?: ModuleGitlab;
  /**
  * raw_git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#raw_git Module#raw_git}
  */
  readonly rawGit?: ModuleRawGit;
}
export interface ModuleAzureDevops {
  /**
  * ID of the Azure Devops integration. If not specified, the default integration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#id Module#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Azure DevOps project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#project Module#project}
  */
  readonly project: string;
}

export function moduleAzureDevopsToTerraform(struct?: ModuleAzureDevopsOutputReference | ModuleAzureDevops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function moduleAzureDevopsToHclTerraform(struct?: ModuleAzureDevopsOutputReference | ModuleAzureDevops): any {
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

export class ModuleAzureDevopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModuleAzureDevops | undefined {
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

  public set internalValue(value: ModuleAzureDevops | undefined) {
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
export interface ModuleBitbucketCloud {
  /**
  * The ID of the Bitbucket Cloud integration. If not specified, the default integration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#id Module#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Bitbucket project containing the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#namespace Module#namespace}
  */
  readonly namespace: string;
}

export function moduleBitbucketCloudToTerraform(struct?: ModuleBitbucketCloudOutputReference | ModuleBitbucketCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function moduleBitbucketCloudToHclTerraform(struct?: ModuleBitbucketCloudOutputReference | ModuleBitbucketCloud): any {
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

export class ModuleBitbucketCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModuleBitbucketCloud | undefined {
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

  public set internalValue(value: ModuleBitbucketCloud | undefined) {
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
export interface ModuleBitbucketDatacenter {
  /**
  * The ID of the Bitbucket Datacenter integration. If not specified, the default integration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#id Module#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Bitbucket project containing the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#namespace Module#namespace}
  */
  readonly namespace: string;
}

export function moduleBitbucketDatacenterToTerraform(struct?: ModuleBitbucketDatacenterOutputReference | ModuleBitbucketDatacenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function moduleBitbucketDatacenterToHclTerraform(struct?: ModuleBitbucketDatacenterOutputReference | ModuleBitbucketDatacenter): any {
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

export class ModuleBitbucketDatacenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModuleBitbucketDatacenter | undefined {
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

  public set internalValue(value: ModuleBitbucketDatacenter | undefined) {
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
export interface ModuleGithubEnterprise {
  /**
  * The ID of the GitHub Enterprise integration. If not specified, the default integration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#id Module#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitHub organization / user the repository belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#namespace Module#namespace}
  */
  readonly namespace: string;
}

export function moduleGithubEnterpriseToTerraform(struct?: ModuleGithubEnterpriseOutputReference | ModuleGithubEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function moduleGithubEnterpriseToHclTerraform(struct?: ModuleGithubEnterpriseOutputReference | ModuleGithubEnterprise): any {
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

export class ModuleGithubEnterpriseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModuleGithubEnterprise | undefined {
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

  public set internalValue(value: ModuleGithubEnterprise | undefined) {
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
export interface ModuleGitlab {
  /**
  * ID of the Gitlab integration. If not specified, the default integration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#id Module#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitLab namespace containing the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#namespace Module#namespace}
  */
  readonly namespace: string;
}

export function moduleGitlabToTerraform(struct?: ModuleGitlabOutputReference | ModuleGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function moduleGitlabToHclTerraform(struct?: ModuleGitlabOutputReference | ModuleGitlab): any {
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

export class ModuleGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModuleGitlab | undefined {
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

  public set internalValue(value: ModuleGitlab | undefined) {
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
export interface ModuleRawGit {
  /**
  * User-friendly namespace for the repository, this is for cosmetic purposes only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#namespace Module#namespace}
  */
  readonly namespace: string;
  /**
  * HTTPS URL of the Git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#url Module#url}
  */
  readonly url: string;
}

export function moduleRawGitToTerraform(struct?: ModuleRawGitOutputReference | ModuleRawGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function moduleRawGitToHclTerraform(struct?: ModuleRawGitOutputReference | ModuleRawGit): any {
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

export class ModuleRawGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModuleRawGit | undefined {
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

  public set internalValue(value: ModuleRawGit | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module spacelift_module}
*/
export class Module extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Module resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Module to import
  * @param importFromId The id of the existing Module that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Module to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.36.0/docs/resources/module spacelift_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ModuleConfig
  */
  public constructor(scope: Construct, id: string, config: ModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_module',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administrative = config.administrative;
    this._branch = config.branch;
    this._description = config.description;
    this._enableLocalPreview = config.enableLocalPreview;
    this._gitSparseCheckoutPaths = config.gitSparseCheckoutPaths;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._projectRoot = config.projectRoot;
    this._protectFromDeletion = config.protectFromDeletion;
    this._public = config.public;
    this._repository = config.repository;
    this._runnerImage = config.runnerImage;
    this._sharedAccounts = config.sharedAccounts;
    this._spaceId = config.spaceId;
    this._spaceShares = config.spaceShares;
    this._terraformProvider = config.terraformProvider;
    this._workerPoolId = config.workerPoolId;
    this._workflowTool = config.workflowTool;
    this._azureDevops.internalValue = config.azureDevops;
    this._bitbucketCloud.internalValue = config.bitbucketCloud;
    this._bitbucketDatacenter.internalValue = config.bitbucketDatacenter;
    this._githubEnterprise.internalValue = config.githubEnterprise;
    this._gitlab.internalValue = config.gitlab;
    this._rawGit.internalValue = config.rawGit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // aws_assume_role_policy_statement - computed: true, optional: false, required: false
  public get awsAssumeRolePolicyStatement() {
    return this.getStringAttribute('aws_assume_role_policy_statement');
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

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
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

  // shared_accounts - computed: false, optional: true, required: false
  private _sharedAccounts?: string[]; 
  public get sharedAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('shared_accounts'));
  }
  public set sharedAccounts(value: string[]) {
    this._sharedAccounts = value;
  }
  public resetSharedAccounts() {
    this._sharedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccountsInput() {
    return this._sharedAccounts;
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

  // space_shares - computed: false, optional: true, required: false
  private _spaceShares?: string[]; 
  public get spaceShares() {
    return cdktf.Fn.tolist(this.getListAttribute('space_shares'));
  }
  public set spaceShares(value: string[]) {
    this._spaceShares = value;
  }
  public resetSpaceShares() {
    this._spaceShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceSharesInput() {
    return this._spaceShares;
  }

  // terraform_provider - computed: true, optional: true, required: false
  private _terraformProvider?: string; 
  public get terraformProvider() {
    return this.getStringAttribute('terraform_provider');
  }
  public set terraformProvider(value: string) {
    this._terraformProvider = value;
  }
  public resetTerraformProvider() {
    this._terraformProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformProviderInput() {
    return this._terraformProvider;
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

  // workflow_tool - computed: true, optional: true, required: false
  private _workflowTool?: string; 
  public get workflowTool() {
    return this.getStringAttribute('workflow_tool');
  }
  public set workflowTool(value: string) {
    this._workflowTool = value;
  }
  public resetWorkflowTool() {
    this._workflowTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowToolInput() {
    return this._workflowTool;
  }

  // azure_devops - computed: false, optional: true, required: false
  private _azureDevops = new ModuleAzureDevopsOutputReference(this, "azure_devops");
  public get azureDevops() {
    return this._azureDevops;
  }
  public putAzureDevops(value: ModuleAzureDevops) {
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
  private _bitbucketCloud = new ModuleBitbucketCloudOutputReference(this, "bitbucket_cloud");
  public get bitbucketCloud() {
    return this._bitbucketCloud;
  }
  public putBitbucketCloud(value: ModuleBitbucketCloud) {
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
  private _bitbucketDatacenter = new ModuleBitbucketDatacenterOutputReference(this, "bitbucket_datacenter");
  public get bitbucketDatacenter() {
    return this._bitbucketDatacenter;
  }
  public putBitbucketDatacenter(value: ModuleBitbucketDatacenter) {
    this._bitbucketDatacenter.internalValue = value;
  }
  public resetBitbucketDatacenter() {
    this._bitbucketDatacenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketDatacenterInput() {
    return this._bitbucketDatacenter.internalValue;
  }

  // github_enterprise - computed: false, optional: true, required: false
  private _githubEnterprise = new ModuleGithubEnterpriseOutputReference(this, "github_enterprise");
  public get githubEnterprise() {
    return this._githubEnterprise;
  }
  public putGithubEnterprise(value: ModuleGithubEnterprise) {
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
  private _gitlab = new ModuleGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: ModuleGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // raw_git - computed: false, optional: true, required: false
  private _rawGit = new ModuleRawGitOutputReference(this, "raw_git");
  public get rawGit() {
    return this._rawGit;
  }
  public putRawGit(value: ModuleRawGit) {
    this._rawGit.internalValue = value;
  }
  public resetRawGit() {
    this._rawGit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawGitInput() {
    return this._rawGit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrative: cdktf.booleanToTerraform(this._administrative),
      branch: cdktf.stringToTerraform(this._branch),
      description: cdktf.stringToTerraform(this._description),
      enable_local_preview: cdktf.booleanToTerraform(this._enableLocalPreview),
      git_sparse_checkout_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gitSparseCheckoutPaths),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project_root: cdktf.stringToTerraform(this._projectRoot),
      protect_from_deletion: cdktf.booleanToTerraform(this._protectFromDeletion),
      public: cdktf.booleanToTerraform(this._public),
      repository: cdktf.stringToTerraform(this._repository),
      runner_image: cdktf.stringToTerraform(this._runnerImage),
      shared_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedAccounts),
      space_id: cdktf.stringToTerraform(this._spaceId),
      space_shares: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spaceShares),
      terraform_provider: cdktf.stringToTerraform(this._terraformProvider),
      worker_pool_id: cdktf.stringToTerraform(this._workerPoolId),
      workflow_tool: cdktf.stringToTerraform(this._workflowTool),
      azure_devops: moduleAzureDevopsToTerraform(this._azureDevops.internalValue),
      bitbucket_cloud: moduleBitbucketCloudToTerraform(this._bitbucketCloud.internalValue),
      bitbucket_datacenter: moduleBitbucketDatacenterToTerraform(this._bitbucketDatacenter.internalValue),
      github_enterprise: moduleGithubEnterpriseToTerraform(this._githubEnterprise.internalValue),
      gitlab: moduleGitlabToTerraform(this._gitlab.internalValue),
      raw_git: moduleRawGitToTerraform(this._rawGit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrative: {
        value: cdktf.booleanToHclTerraform(this._administrative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      git_sparse_checkout_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gitSparseCheckoutPaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
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
      shared_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_shares: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spaceShares),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      terraform_provider: {
        value: cdktf.stringToHclTerraform(this._terraformProvider),
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
      workflow_tool: {
        value: cdktf.stringToHclTerraform(this._workflowTool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_devops: {
        value: moduleAzureDevopsToHclTerraform(this._azureDevops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModuleAzureDevopsList",
      },
      bitbucket_cloud: {
        value: moduleBitbucketCloudToHclTerraform(this._bitbucketCloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModuleBitbucketCloudList",
      },
      bitbucket_datacenter: {
        value: moduleBitbucketDatacenterToHclTerraform(this._bitbucketDatacenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModuleBitbucketDatacenterList",
      },
      github_enterprise: {
        value: moduleGithubEnterpriseToHclTerraform(this._githubEnterprise.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModuleGithubEnterpriseList",
      },
      gitlab: {
        value: moduleGitlabToHclTerraform(this._gitlab.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModuleGitlabList",
      },
      raw_git: {
        value: moduleRawGitToHclTerraform(this._rawGit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModuleRawGitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
