// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessChildStepConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of channels associated with this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#channels ProcessChildStep#channels}
  */
  readonly channels?: string[];
  /**
  * When to run the step, can be 'Success' - run when previous child step succeed or variable expression - run when the expression evaluates to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#condition ProcessChildStep#condition}
  */
  readonly condition?: string;
  /**
  * When set, used to run step inside a container on the Octopus Server. Octopus Server must support container execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#container ProcessChildStep#container}
  */
  readonly container?: ProcessChildStepContainer;
  /**
  * A set of environments within which this step will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#environments ProcessChildStep#environments}
  */
  readonly environments?: string[];
  /**
  * A set of environments that this step will be skipped in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#excluded_environments ProcessChildStep#excluded_environments}
  */
  readonly excludedEnvironments?: string[];
  /**
  * A collection of step execution properties where the key is the property name and the value is its value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#execution_properties ProcessChildStep#execution_properties}
  */
  readonly executionProperties?: { [key: string]: string };
  /**
  * References of git dependencies for this step where key is a name of the reference and empty name defines primary dependency. Is the Git equivalent of packages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#git_dependencies ProcessChildStep#git_dependencies}
  */
  readonly gitDependencies?: { [key: string]: ProcessChildStepGitDependencies } | cdktf.IResolvable;
  /**
  * Indicates the disabled status of this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#is_disabled ProcessChildStep#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the required status of this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#is_required ProcessChildStep#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#name ProcessChildStep#name}
  */
  readonly name: string;
  /**
  * The notes associated with this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#notes ProcessChildStep#notes}
  */
  readonly notes?: string;
  /**
  * Package references associated with this step where key is a name of the package reference (use empty name for primary package)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#packages ProcessChildStep#packages}
  */
  readonly packages?: { [key: string]: ProcessChildStepPackages } | cdktf.IResolvable;
  /**
  * Id of the process step this step belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#parent_id ProcessChildStep#parent_id}
  */
  readonly parentId: string;
  /**
  * Primary package of the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#primary_package ProcessChildStep#primary_package}
  */
  readonly primaryPackage?: ProcessChildStepPrimaryPackage;
  /**
  * Id of the process this step belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#process_id ProcessChildStep#process_id}
  */
  readonly processId: string;
  /**
  * The human-readable unique identifier for the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#slug ProcessChildStep#slug}
  */
  readonly slug?: string;
  /**
  * The space ID associated with this process_child_step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#space_id ProcessChildStep#space_id}
  */
  readonly spaceId?: string;
  /**
  * A set of tenant tags associated with this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#tenant_tags ProcessChildStep#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * Execution type of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#type ProcessChildStep#type}
  */
  readonly type: string;
  /**
  * The worker pool associated with this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#worker_pool_id ProcessChildStep#worker_pool_id}
  */
  readonly workerPoolId?: string;
  /**
  * The worker pool variable associated with this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#worker_pool_variable ProcessChildStep#worker_pool_variable}
  */
  readonly workerPoolVariable?: string;
}
export interface ProcessChildStepContainer {
  /**
  * Feed where the container will be pulled from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#feed_id ProcessChildStep#feed_id}
  */
  readonly feedId?: string;
  /**
  * Image of the container with tag included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#image ProcessChildStep#image}
  */
  readonly image?: string;
}

export function processChildStepContainerToTerraform(struct?: ProcessChildStepContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function processChildStepContainerToHclTerraform(struct?: ProcessChildStepContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feed_id: {
      value: cdktf.stringToHclTerraform(struct!.feedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessChildStepContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProcessChildStepContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedId = this._feedId;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessChildStepContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feedId = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feedId = value.feedId;
      this._image = value.image;
    }
  }

  // feed_id - computed: true, optional: true, required: false
  private _feedId?: string; 
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  public resetFeedId() {
    this._feedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ProcessChildStepGitDependencies {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#default_branch ProcessChildStep#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from. Supports glob patten syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#file_path_filters ProcessChildStep#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#git_credential_id ProcessChildStep#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#git_credential_type ProcessChildStep#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The Git URI for the repository where this resource is sourced from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#repository_uri ProcessChildStep#repository_uri}
  */
  readonly repositoryUri: string;
}

export function processChildStepGitDependenciesToTerraform(struct?: ProcessChildStepGitDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_branch: cdktf.stringToTerraform(struct!.defaultBranch),
    file_path_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filePathFilters),
    git_credential_id: cdktf.stringToTerraform(struct!.gitCredentialId),
    git_credential_type: cdktf.stringToTerraform(struct!.gitCredentialType),
    repository_uri: cdktf.stringToTerraform(struct!.repositoryUri),
  }
}


export function processChildStepGitDependenciesToHclTerraform(struct?: ProcessChildStepGitDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_branch: {
      value: cdktf.stringToHclTerraform(struct!.defaultBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filePathFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    git_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.gitCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_credential_type: {
      value: cdktf.stringToHclTerraform(struct!.gitCredentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_uri: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessChildStepGitDependenciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ProcessChildStepGitDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch;
    }
    if (this._filePathFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePathFilters = this._filePathFilters;
    }
    if (this._gitCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitCredentialId = this._gitCredentialId;
    }
    if (this._gitCredentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitCredentialType = this._gitCredentialType;
    }
    if (this._repositoryUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUri = this._repositoryUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessChildStepGitDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultBranch = undefined;
      this._filePathFilters = undefined;
      this._gitCredentialId = undefined;
      this._gitCredentialType = undefined;
      this._repositoryUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultBranch = value.defaultBranch;
      this._filePathFilters = value.filePathFilters;
      this._gitCredentialId = value.gitCredentialId;
      this._gitCredentialType = value.gitCredentialType;
      this._repositoryUri = value.repositoryUri;
    }
  }

  // default_branch - computed: true, optional: false, required: true
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // file_path_filters - computed: true, optional: true, required: false
  private _filePathFilters?: string[]; 
  public get filePathFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('file_path_filters'));
  }
  public set filePathFilters(value: string[]) {
    this._filePathFilters = value;
  }
  public resetFilePathFilters() {
    this._filePathFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathFiltersInput() {
    return this._filePathFilters;
  }

  // git_credential_id - computed: true, optional: true, required: false
  private _gitCredentialId?: string; 
  public get gitCredentialId() {
    return this.getStringAttribute('git_credential_id');
  }
  public set gitCredentialId(value: string) {
    this._gitCredentialId = value;
  }
  public resetGitCredentialId() {
    this._gitCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCredentialIdInput() {
    return this._gitCredentialId;
  }

  // git_credential_type - computed: true, optional: false, required: true
  private _gitCredentialType?: string; 
  public get gitCredentialType() {
    return this.getStringAttribute('git_credential_type');
  }
  public set gitCredentialType(value: string) {
    this._gitCredentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCredentialTypeInput() {
    return this._gitCredentialType;
  }

  // repository_uri - computed: true, optional: false, required: true
  private _repositoryUri?: string; 
  public get repositoryUri() {
    return this.getStringAttribute('repository_uri');
  }
  public set repositoryUri(value: string) {
    this._repositoryUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUriInput() {
    return this._repositoryUri;
  }
}

export class ProcessChildStepGitDependenciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ProcessChildStepGitDependencies } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ProcessChildStepGitDependenciesOutputReference {
    return new ProcessChildStepGitDependenciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ProcessChildStepPackages {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#acquisition_location ProcessChildStep#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#feed_id ProcessChildStep#feed_id}
  */
  readonly feedId?: string;
  /**
  * Package ID or a variable-expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#package_id ProcessChildStep#package_id}
  */
  readonly packageId: string;
  /**
  * A collection of properties associated with this package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#properties ProcessChildStep#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function processChildStepPackagesToTerraform(struct?: ProcessChildStepPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function processChildStepPackagesToHclTerraform(struct?: ProcessChildStepPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acquisition_location: {
      value: cdktf.stringToHclTerraform(struct!.acquisitionLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feed_id: {
      value: cdktf.stringToHclTerraform(struct!.feedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_id: {
      value: cdktf.stringToHclTerraform(struct!.packageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessChildStepPackagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ProcessChildStepPackages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acquisitionLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.acquisitionLocation = this._acquisitionLocation;
    }
    if (this._feedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedId = this._feedId;
    }
    if (this._packageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageId = this._packageId;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessChildStepPackages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._packageId = undefined;
      this._properties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acquisitionLocation = value.acquisitionLocation;
      this._feedId = value.feedId;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: true, optional: true, required: false
  private _acquisitionLocation?: string; 
  public get acquisitionLocation() {
    return this.getStringAttribute('acquisition_location');
  }
  public set acquisitionLocation(value: string) {
    this._acquisitionLocation = value;
  }
  public resetAcquisitionLocation() {
    this._acquisitionLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acquisitionLocationInput() {
    return this._acquisitionLocation;
  }

  // feed_id - computed: true, optional: true, required: false
  private _feedId?: string; 
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  public resetFeedId() {
    this._feedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // package_id - computed: true, optional: false, required: true
  private _packageId?: string; 
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string) {
    this._packageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

export class ProcessChildStepPackagesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ProcessChildStepPackages } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ProcessChildStepPackagesOutputReference {
    return new ProcessChildStepPackagesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ProcessChildStepPrimaryPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#acquisition_location ProcessChildStep#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#feed_id ProcessChildStep#feed_id}
  */
  readonly feedId?: string;
  /**
  * Package ID or a variable-expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#package_id ProcessChildStep#package_id}
  */
  readonly packageId: string;
  /**
  * A collection of properties associated with this package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#properties ProcessChildStep#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function processChildStepPrimaryPackageToTerraform(struct?: ProcessChildStepPrimaryPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function processChildStepPrimaryPackageToHclTerraform(struct?: ProcessChildStepPrimaryPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acquisition_location: {
      value: cdktf.stringToHclTerraform(struct!.acquisitionLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feed_id: {
      value: cdktf.stringToHclTerraform(struct!.feedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_id: {
      value: cdktf.stringToHclTerraform(struct!.packageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessChildStepPrimaryPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProcessChildStepPrimaryPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acquisitionLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.acquisitionLocation = this._acquisitionLocation;
    }
    if (this._feedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedId = this._feedId;
    }
    if (this._packageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageId = this._packageId;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessChildStepPrimaryPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._packageId = undefined;
      this._properties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acquisitionLocation = value.acquisitionLocation;
      this._feedId = value.feedId;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: true, optional: true, required: false
  private _acquisitionLocation?: string; 
  public get acquisitionLocation() {
    return this.getStringAttribute('acquisition_location');
  }
  public set acquisitionLocation(value: string) {
    this._acquisitionLocation = value;
  }
  public resetAcquisitionLocation() {
    this._acquisitionLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acquisitionLocationInput() {
    return this._acquisitionLocation;
  }

  // feed_id - computed: true, optional: true, required: false
  private _feedId?: string; 
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  public resetFeedId() {
    this._feedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // package_id - computed: false, optional: false, required: true
  private _packageId?: string; 
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string) {
    this._packageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step octopusdeploy_process_child_step}
*/
export class ProcessChildStep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_process_child_step";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessChildStep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessChildStep to import
  * @param importFromId The id of the existing ProcessChildStep that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessChildStep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_process_child_step", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_child_step octopusdeploy_process_child_step} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessChildStepConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessChildStepConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_process_child_step',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channels = config.channels;
    this._condition = config.condition;
    this._container.internalValue = config.container;
    this._environments = config.environments;
    this._excludedEnvironments = config.excludedEnvironments;
    this._executionProperties = config.executionProperties;
    this._gitDependencies.internalValue = config.gitDependencies;
    this._isDisabled = config.isDisabled;
    this._isRequired = config.isRequired;
    this._name = config.name;
    this._notes = config.notes;
    this._packages.internalValue = config.packages;
    this._parentId = config.parentId;
    this._primaryPackage.internalValue = config.primaryPackage;
    this._processId = config.processId;
    this._slug = config.slug;
    this._spaceId = config.spaceId;
    this._tenantTags = config.tenantTags;
    this._type = config.type;
    this._workerPoolId = config.workerPoolId;
    this._workerPoolVariable = config.workerPoolVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channels - computed: true, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return cdktf.Fn.tolist(this.getListAttribute('channels'));
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // container - computed: true, optional: true, required: false
  private _container = new ProcessChildStepContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ProcessChildStepContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // excluded_environments - computed: true, optional: true, required: false
  private _excludedEnvironments?: string[]; 
  public get excludedEnvironments() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_environments'));
  }
  public set excludedEnvironments(value: string[]) {
    this._excludedEnvironments = value;
  }
  public resetExcludedEnvironments() {
    this._excludedEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedEnvironmentsInput() {
    return this._excludedEnvironments;
  }

  // execution_properties - computed: true, optional: true, required: false
  private _executionProperties?: { [key: string]: string }; 
  public get executionProperties() {
    return this.getStringMapAttribute('execution_properties');
  }
  public set executionProperties(value: { [key: string]: string }) {
    this._executionProperties = value;
  }
  public resetExecutionProperties() {
    this._executionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionPropertiesInput() {
    return this._executionProperties;
  }

  // git_dependencies - computed: true, optional: true, required: false
  private _gitDependencies = new ProcessChildStepGitDependenciesMap(this, "git_dependencies");
  public get gitDependencies() {
    return this._gitDependencies;
  }
  public putGitDependencies(value: { [key: string]: ProcessChildStepGitDependencies } | cdktf.IResolvable) {
    this._gitDependencies.internalValue = value;
  }
  public resetGitDependencies() {
    this._gitDependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDependenciesInput() {
    return this._gitDependencies.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
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

  // notes - computed: true, optional: true, required: false
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

  // packages - computed: true, optional: true, required: false
  private _packages = new ProcessChildStepPackagesMap(this, "packages");
  public get packages() {
    return this._packages;
  }
  public putPackages(value: { [key: string]: ProcessChildStepPackages } | cdktf.IResolvable) {
    this._packages.internalValue = value;
  }
  public resetPackages() {
    this._packages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages.internalValue;
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // primary_package - computed: false, optional: true, required: false
  private _primaryPackage = new ProcessChildStepPrimaryPackageOutputReference(this, "primary_package");
  public get primaryPackage() {
    return this._primaryPackage;
  }
  public putPrimaryPackage(value: ProcessChildStepPrimaryPackage) {
    this._primaryPackage.internalValue = value;
  }
  public resetPrimaryPackage() {
    this._primaryPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPackageInput() {
    return this._primaryPackage.internalValue;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
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

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return cdktf.Fn.tolist(this.getListAttribute('tenant_tags'));
  }
  public set tenantTags(value: string[]) {
    this._tenantTags = value;
  }
  public resetTenantTags() {
    this._tenantTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTagsInput() {
    return this._tenantTags;
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

  // worker_pool_id - computed: true, optional: true, required: false
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

  // worker_pool_variable - computed: true, optional: true, required: false
  private _workerPoolVariable?: string; 
  public get workerPoolVariable() {
    return this.getStringAttribute('worker_pool_variable');
  }
  public set workerPoolVariable(value: string) {
    this._workerPoolVariable = value;
  }
  public resetWorkerPoolVariable() {
    this._workerPoolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolVariableInput() {
    return this._workerPoolVariable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._channels),
      condition: cdktf.stringToTerraform(this._condition),
      container: processChildStepContainerToTerraform(this._container.internalValue),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      excluded_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedEnvironments),
      execution_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._executionProperties),
      git_dependencies: cdktf.hashMapper(processChildStepGitDependenciesToTerraform)(this._gitDependencies.internalValue),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      is_required: cdktf.booleanToTerraform(this._isRequired),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      packages: cdktf.hashMapper(processChildStepPackagesToTerraform)(this._packages.internalValue),
      parent_id: cdktf.stringToTerraform(this._parentId),
      primary_package: processChildStepPrimaryPackageToTerraform(this._primaryPackage.internalValue),
      process_id: cdktf.stringToTerraform(this._processId),
      slug: cdktf.stringToTerraform(this._slug),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      type: cdktf.stringToTerraform(this._type),
      worker_pool_id: cdktf.stringToTerraform(this._workerPoolId),
      worker_pool_variable: cdktf.stringToTerraform(this._workerPoolVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._channels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container: {
        value: processChildStepContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProcessChildStepContainer",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedEnvironments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      execution_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._executionProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      git_dependencies: {
        value: cdktf.hashMapperHcl(processChildStepGitDependenciesToHclTerraform)(this._gitDependencies.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ProcessChildStepGitDependenciesMap",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_required: {
        value: cdktf.booleanToHclTerraform(this._isRequired),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packages: {
        value: cdktf.hashMapperHcl(processChildStepPackagesToHclTerraform)(this._packages.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ProcessChildStepPackagesMap",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_package: {
        value: processChildStepPrimaryPackageToHclTerraform(this._primaryPackage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProcessChildStepPrimaryPackage",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
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
      tenant_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      worker_pool_variable: {
        value: cdktf.stringToHclTerraform(this._workerPoolVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
