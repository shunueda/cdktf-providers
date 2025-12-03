// https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#account_id Deployment#account_id}
  */
  readonly accountId?: string;
  /**
  * The deployment's concurrency limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#concurrency_limit Deployment#concurrency_limit}
  */
  readonly concurrencyLimit?: number;
  /**
  * Concurrency options for the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#concurrency_options Deployment#concurrency_options}
  */
  readonly concurrencyOptions?: DeploymentConcurrencyOptions;
  /**
  * A description for the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#description Deployment#description}
  */
  readonly description?: string;
  /**
  * Whether or not the deployment should enforce the parameter schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#enforce_parameter_schema Deployment#enforce_parameter_schema}
  */
  readonly enforceParameterSchema?: boolean | cdktf.IResolvable;
  /**
  * The path to the entrypoint for the workflow, relative to the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#entrypoint Deployment#entrypoint}
  */
  readonly entrypoint?: string;
  /**
  * Flow ID (UUID) to associate deployment to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#flow_id Deployment#flow_id}
  */
  readonly flowId: string;
  /**
  * The ID of a global concurrency limit to apply to this deployment. This is the recommended way to set concurrency limits. Mutually exclusive with concurrency_limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#global_concurrency_limit_id Deployment#global_concurrency_limit_id}
  */
  readonly globalConcurrencyLimitId?: string;
  /**
  * Overrides for the flow's infrastructure configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#job_variables Deployment#job_variables}
  */
  readonly jobVariables?: string;
  /**
  * The path to the flow's manifest file, relative to the chosen storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#manifest_path Deployment#manifest_path}
  */
  readonly manifestPath?: string;
  /**
  * Name of the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#name Deployment#name}
  */
  readonly name: string;
  /**
  * The parameter schema of the flow, including defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#parameter_openapi_schema Deployment#parameter_openapi_schema}
  */
  readonly parameterOpenapiSchema?: string;
  /**
  * Parameters for flow runs scheduled by the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#parameters Deployment#parameters}
  */
  readonly parameters?: string;
  /**
  * The path to the working directory for the workflow, relative to remote storage or an absolute path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Whether or not the deployment is paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#paused Deployment#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Pull steps to prepare flows for a deployment run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#pull_steps Deployment#pull_steps}
  */
  readonly pullSteps?: DeploymentPullSteps[] | cdktf.IResolvable;
  /**
  * ID of the associated storage document (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#storage_document_id Deployment#storage_document_id}
  */
  readonly storageDocumentId?: string;
  /**
  * Tags associated with the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#tags Deployment#tags}
  */
  readonly tags?: string[];
  /**
  * An optional version for the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#version Deployment#version}
  */
  readonly version?: string;
  /**
  * The name of the deployment's work pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#work_pool_name Deployment#work_pool_name}
  */
  readonly workPoolName?: string;
  /**
  * The work queue for the deployment. If no work queue is set, work will not be scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#work_queue_name Deployment#work_queue_name}
  */
  readonly workQueueName?: string;
  /**
  * Workspace ID (UUID) to associate deployment to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#workspace_id Deployment#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DeploymentConcurrencyOptions {
  /**
  * Enumeration of concurrency collision strategies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#collision_strategy Deployment#collision_strategy}
  */
  readonly collisionStrategy: string;
}

export function deploymentConcurrencyOptionsToTerraform(struct?: DeploymentConcurrencyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collision_strategy: cdktf.stringToTerraform(struct!.collisionStrategy),
  }
}


export function deploymentConcurrencyOptionsToHclTerraform(struct?: DeploymentConcurrencyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.collisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentConcurrencyOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentConcurrencyOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.collisionStrategy = this._collisionStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentConcurrencyOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collisionStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collisionStrategy = value.collisionStrategy;
    }
  }

  // collision_strategy - computed: false, optional: false, required: true
  private _collisionStrategy?: string; 
  public get collisionStrategy() {
    return this.getStringAttribute('collision_strategy');
  }
  public set collisionStrategy(value: string) {
    this._collisionStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collisionStrategyInput() {
    return this._collisionStrategy;
  }
}
export interface DeploymentPullSteps {
  /**
  * (For type 'git_clone') Access token for the repository. Refer to a credentials block for security purposes. Used in leiu of 'credentials'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#access_token Deployment#access_token}
  */
  readonly accessToken?: string;
  /**
  * (For type 'git_clone') The branch to clone. If not provided, the default branch is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#branch Deployment#branch}
  */
  readonly branch?: string;
  /**
  * (For type 'pull_from_s3' and 'pull_from_gcs') The name of the bucket where files are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#bucket Deployment#bucket}
  */
  readonly bucket?: string;
  /**
  * (For type 'pull_from_azure_blob_storage') The name of the container where files are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#container Deployment#container}
  */
  readonly container?: string;
  /**
  * Credentials to use for the pull step. Refer to a {GitHub,GitLab,BitBucket} credentials block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#credentials Deployment#credentials}
  */
  readonly credentials?: string;
  /**
  * (For type 'set_working_directory') The directory to set as the working directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#directory Deployment#directory}
  */
  readonly directory?: string;
  /**
  * (For type 'pull_from_*') The folder in the bucket/container where files are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#folder Deployment#folder}
  */
  readonly folder?: string;
  /**
  * (For type 'git_clone') Whether to include submodules when cloning the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#include_submodules Deployment#include_submodules}
  */
  readonly includeSubmodules?: boolean | cdktf.IResolvable;
  /**
  * (For type 'git_clone') The URL of the repository to clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#repository Deployment#repository}
  */
  readonly repository?: string;
  /**
  * A list of Python package dependencies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#requires Deployment#requires}
  */
  readonly requires?: string;
  /**
  * The type of pull step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#type Deployment#type}
  */
  readonly type: string;
}

export function deploymentPullStepsToTerraform(struct?: DeploymentPullSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    branch: cdktf.stringToTerraform(struct!.branch),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    container: cdktf.stringToTerraform(struct!.container),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    directory: cdktf.stringToTerraform(struct!.directory),
    folder: cdktf.stringToTerraform(struct!.folder),
    include_submodules: cdktf.booleanToTerraform(struct!.includeSubmodules),
    repository: cdktf.stringToTerraform(struct!.repository),
    requires: cdktf.stringToTerraform(struct!.requires),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function deploymentPullStepsToHclTerraform(struct?: DeploymentPullSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_submodules: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubmodules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requires: {
      value: cdktf.stringToHclTerraform(struct!.requires),
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

export class DeploymentPullStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentPullSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._includeSubmodules !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubmodules = this._includeSubmodules;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._requires !== undefined) {
      hasAnyValues = true;
      internalValueResult.requires = this._requires;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentPullSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._branch = undefined;
      this._bucket = undefined;
      this._container = undefined;
      this._credentials = undefined;
      this._directory = undefined;
      this._folder = undefined;
      this._includeSubmodules = undefined;
      this._repository = undefined;
      this._requires = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._branch = value.branch;
      this._bucket = value.bucket;
      this._container = value.container;
      this._credentials = value.credentials;
      this._directory = value.directory;
      this._folder = value.folder;
      this._includeSubmodules = value.includeSubmodules;
      this._repository = value.repository;
      this._requires = value.requires;
      this._type = value.type;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // branch - computed: true, optional: true, required: false
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

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // container - computed: true, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // credentials - computed: true, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // directory - computed: true, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // include_submodules - computed: true, optional: true, required: false
  private _includeSubmodules?: boolean | cdktf.IResolvable; 
  public get includeSubmodules() {
    return this.getBooleanAttribute('include_submodules');
  }
  public set includeSubmodules(value: boolean | cdktf.IResolvable) {
    this._includeSubmodules = value;
  }
  public resetIncludeSubmodules() {
    this._includeSubmodules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubmodulesInput() {
    return this._includeSubmodules;
  }

  // repository - computed: true, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // requires - computed: true, optional: true, required: false
  private _requires?: string; 
  public get requires() {
    return this.getStringAttribute('requires');
  }
  public set requires(value: string) {
    this._requires = value;
  }
  public resetRequires() {
    this._requires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresInput() {
    return this._requires;
  }

  // type - computed: true, optional: false, required: true
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

export class DeploymentPullStepsList extends cdktf.ComplexList {
  public internalValue? : DeploymentPullSteps[] | cdktf.IResolvable

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
  public get(index: number): DeploymentPullStepsOutputReference {
    return new DeploymentPullStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment prefect_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deployment to import
  * @param importFromId The id of the existing Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/deployment prefect_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_deployment',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.4',
        providerVersionConstraint: '2.90.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._concurrencyLimit = config.concurrencyLimit;
    this._concurrencyOptions.internalValue = config.concurrencyOptions;
    this._description = config.description;
    this._enforceParameterSchema = config.enforceParameterSchema;
    this._entrypoint = config.entrypoint;
    this._flowId = config.flowId;
    this._globalConcurrencyLimitId = config.globalConcurrencyLimitId;
    this._jobVariables = config.jobVariables;
    this._manifestPath = config.manifestPath;
    this._name = config.name;
    this._parameterOpenapiSchema = config.parameterOpenapiSchema;
    this._parameters = config.parameters;
    this._path = config.path;
    this._paused = config.paused;
    this._pullSteps.internalValue = config.pullSteps;
    this._storageDocumentId = config.storageDocumentId;
    this._tags = config.tags;
    this._version = config.version;
    this._workPoolName = config.workPoolName;
    this._workQueueName = config.workQueueName;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // concurrency_limit - computed: false, optional: true, required: false
  private _concurrencyLimit?: number; 
  public get concurrencyLimit() {
    return this.getNumberAttribute('concurrency_limit');
  }
  public set concurrencyLimit(value: number) {
    this._concurrencyLimit = value;
  }
  public resetConcurrencyLimit() {
    this._concurrencyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyLimitInput() {
    return this._concurrencyLimit;
  }

  // concurrency_options - computed: false, optional: true, required: false
  private _concurrencyOptions = new DeploymentConcurrencyOptionsOutputReference(this, "concurrency_options");
  public get concurrencyOptions() {
    return this._concurrencyOptions;
  }
  public putConcurrencyOptions(value: DeploymentConcurrencyOptions) {
    this._concurrencyOptions.internalValue = value;
  }
  public resetConcurrencyOptions() {
    this._concurrencyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyOptionsInput() {
    return this._concurrencyOptions.internalValue;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // enforce_parameter_schema - computed: true, optional: true, required: false
  private _enforceParameterSchema?: boolean | cdktf.IResolvable; 
  public get enforceParameterSchema() {
    return this.getBooleanAttribute('enforce_parameter_schema');
  }
  public set enforceParameterSchema(value: boolean | cdktf.IResolvable) {
    this._enforceParameterSchema = value;
  }
  public resetEnforceParameterSchema() {
    this._enforceParameterSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceParameterSchemaInput() {
    return this._enforceParameterSchema;
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // flow_id - computed: false, optional: false, required: true
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // global_concurrency_limit_id - computed: true, optional: true, required: false
  private _globalConcurrencyLimitId?: string; 
  public get globalConcurrencyLimitId() {
    return this.getStringAttribute('global_concurrency_limit_id');
  }
  public set globalConcurrencyLimitId(value: string) {
    this._globalConcurrencyLimitId = value;
  }
  public resetGlobalConcurrencyLimitId() {
    this._globalConcurrencyLimitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalConcurrencyLimitIdInput() {
    return this._globalConcurrencyLimitId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_variables - computed: true, optional: true, required: false
  private _jobVariables?: string; 
  public get jobVariables() {
    return this.getStringAttribute('job_variables');
  }
  public set jobVariables(value: string) {
    this._jobVariables = value;
  }
  public resetJobVariables() {
    this._jobVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobVariablesInput() {
    return this._jobVariables;
  }

  // manifest_path - computed: false, optional: true, required: false
  private _manifestPath?: string; 
  public get manifestPath() {
    return this.getStringAttribute('manifest_path');
  }
  public set manifestPath(value: string) {
    this._manifestPath = value;
  }
  public resetManifestPath() {
    this._manifestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestPathInput() {
    return this._manifestPath;
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

  // parameter_openapi_schema - computed: true, optional: true, required: false
  private _parameterOpenapiSchema?: string; 
  public get parameterOpenapiSchema() {
    return this.getStringAttribute('parameter_openapi_schema');
  }
  public set parameterOpenapiSchema(value: string) {
    this._parameterOpenapiSchema = value;
  }
  public resetParameterOpenapiSchema() {
    this._parameterOpenapiSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOpenapiSchemaInput() {
    return this._parameterOpenapiSchema;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // pull_steps - computed: true, optional: true, required: false
  private _pullSteps = new DeploymentPullStepsList(this, "pull_steps", false);
  public get pullSteps() {
    return this._pullSteps;
  }
  public putPullSteps(value: DeploymentPullSteps[] | cdktf.IResolvable) {
    this._pullSteps.internalValue = value;
  }
  public resetPullSteps() {
    this._pullSteps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullStepsInput() {
    return this._pullSteps.internalValue;
  }

  // storage_document_id - computed: true, optional: true, required: false
  private _storageDocumentId?: string; 
  public get storageDocumentId() {
    return this.getStringAttribute('storage_document_id');
  }
  public set storageDocumentId(value: string) {
    this._storageDocumentId = value;
  }
  public resetStorageDocumentId() {
    this._storageDocumentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDocumentIdInput() {
    return this._storageDocumentId;
  }

  // tags - computed: true, optional: true, required: false
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // work_pool_name - computed: true, optional: true, required: false
  private _workPoolName?: string; 
  public get workPoolName() {
    return this.getStringAttribute('work_pool_name');
  }
  public set workPoolName(value: string) {
    this._workPoolName = value;
  }
  public resetWorkPoolName() {
    this._workPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workPoolNameInput() {
    return this._workPoolName;
  }

  // work_queue_name - computed: true, optional: true, required: false
  private _workQueueName?: string; 
  public get workQueueName() {
    return this.getStringAttribute('work_queue_name');
  }
  public set workQueueName(value: string) {
    this._workQueueName = value;
  }
  public resetWorkQueueName() {
    this._workQueueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workQueueNameInput() {
    return this._workQueueName;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      concurrency_limit: cdktf.numberToTerraform(this._concurrencyLimit),
      concurrency_options: deploymentConcurrencyOptionsToTerraform(this._concurrencyOptions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enforce_parameter_schema: cdktf.booleanToTerraform(this._enforceParameterSchema),
      entrypoint: cdktf.stringToTerraform(this._entrypoint),
      flow_id: cdktf.stringToTerraform(this._flowId),
      global_concurrency_limit_id: cdktf.stringToTerraform(this._globalConcurrencyLimitId),
      job_variables: cdktf.stringToTerraform(this._jobVariables),
      manifest_path: cdktf.stringToTerraform(this._manifestPath),
      name: cdktf.stringToTerraform(this._name),
      parameter_openapi_schema: cdktf.stringToTerraform(this._parameterOpenapiSchema),
      parameters: cdktf.stringToTerraform(this._parameters),
      path: cdktf.stringToTerraform(this._path),
      paused: cdktf.booleanToTerraform(this._paused),
      pull_steps: cdktf.listMapper(deploymentPullStepsToTerraform, false)(this._pullSteps.internalValue),
      storage_document_id: cdktf.stringToTerraform(this._storageDocumentId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      work_pool_name: cdktf.stringToTerraform(this._workPoolName),
      work_queue_name: cdktf.stringToTerraform(this._workQueueName),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrency_limit: {
        value: cdktf.numberToHclTerraform(this._concurrencyLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrency_options: {
        value: deploymentConcurrencyOptionsToHclTerraform(this._concurrencyOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentConcurrencyOptions",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_parameter_schema: {
        value: cdktf.booleanToHclTerraform(this._enforceParameterSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entrypoint: {
        value: cdktf.stringToHclTerraform(this._entrypoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_id: {
        value: cdktf.stringToHclTerraform(this._flowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_concurrency_limit_id: {
        value: cdktf.stringToHclTerraform(this._globalConcurrencyLimitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_variables: {
        value: cdktf.stringToHclTerraform(this._jobVariables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifest_path: {
        value: cdktf.stringToHclTerraform(this._manifestPath),
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
      parameter_openapi_schema: {
        value: cdktf.stringToHclTerraform(this._parameterOpenapiSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pull_steps: {
        value: cdktf.listMapperHcl(deploymentPullStepsToHclTerraform, false)(this._pullSteps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentPullStepsList",
      },
      storage_document_id: {
        value: cdktf.stringToHclTerraform(this._storageDocumentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_pool_name: {
        value: cdktf.stringToHclTerraform(this._workPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_queue_name: {
        value: cdktf.stringToHclTerraform(this._workQueueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
