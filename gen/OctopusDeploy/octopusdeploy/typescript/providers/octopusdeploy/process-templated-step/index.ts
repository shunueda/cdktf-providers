// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessTemplatedStepConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of channels associated with this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#channels ProcessTemplatedStep#channels}
  */
  readonly channels?: string[];
  /**
  * When to run the step, one of 'Success', 'Failure', 'Always' or 'Variable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#condition ProcessTemplatedStep#condition}
  */
  readonly condition?: string;
  /**
  * When set, used to run step inside a container on the Octopus Server. Octopus Server must support container execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#container ProcessTemplatedStep#container}
  */
  readonly container?: ProcessTemplatedStepContainer;
  /**
  * A set of environments within which this step will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#environments ProcessTemplatedStep#environments}
  */
  readonly environments?: string[];
  /**
  * A set of environments that this step will be skipped in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#excluded_environments ProcessTemplatedStep#excluded_environments}
  */
  readonly excludedEnvironments?: string[];
  /**
  * Action properties where the key is the property name and the value is its value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#execution_properties ProcessTemplatedStep#execution_properties}
  */
  readonly executionProperties?: { [key: string]: string };
  /**
  * Indicates the disabled status of this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#is_disabled ProcessTemplatedStep#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the required status of this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#is_required ProcessTemplatedStep#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#name ProcessTemplatedStep#name}
  */
  readonly name: string;
  /**
  * The notes associated with this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#notes ProcessTemplatedStep#notes}
  */
  readonly notes?: string;
  /**
  * Whether to run this step before or after package acquisition (if possible).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#package_requirement ProcessTemplatedStep#package_requirement}
  */
  readonly packageRequirement?: string;
  /**
  * Parameters required by template. Default value will be assigned when parameter has default value and parameter is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#parameters ProcessTemplatedStep#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Id of the process this step belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#process_id ProcessTemplatedStep#process_id}
  */
  readonly processId: string;
  /**
  * A collection of process step properties where the key is the property name and the value is its value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#properties ProcessTemplatedStep#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The human-readable unique identifier for the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#slug ProcessTemplatedStep#slug}
  */
  readonly slug?: string;
  /**
  * The space ID associated with this process_templated_step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#space_id ProcessTemplatedStep#space_id}
  */
  readonly spaceId?: string;
  /**
  * Whether to run this step after the previous step ('StartAfterPrevious') or at the same time as the previous step ('StartWithPrevious').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#start_trigger ProcessTemplatedStep#start_trigger}
  */
  readonly startTrigger?: string;
  /**
  * Id of template this step will be based on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#template_id ProcessTemplatedStep#template_id}
  */
  readonly templateId: string;
  /**
  * Version of the template this step will be based on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#template_version ProcessTemplatedStep#template_version}
  */
  readonly templateVersion: number;
  /**
  * A set of tenant tags associated with this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#tenant_tags ProcessTemplatedStep#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The worker pool associated with this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#worker_pool_id ProcessTemplatedStep#worker_pool_id}
  */
  readonly workerPoolId?: string;
  /**
  * The worker pool variable associated with this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#worker_pool_variable ProcessTemplatedStep#worker_pool_variable}
  */
  readonly workerPoolVariable?: string;
}
export interface ProcessTemplatedStepContainer {
  /**
  * Feed where the container will be pulled from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#feed_id ProcessTemplatedStep#feed_id}
  */
  readonly feedId?: string;
  /**
  * Image of the container with tag included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#image ProcessTemplatedStep#image}
  */
  readonly image?: string;
}

export function processTemplatedStepContainerToTerraform(struct?: ProcessTemplatedStepContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function processTemplatedStepContainerToHclTerraform(struct?: ProcessTemplatedStepContainer | cdktf.IResolvable): any {
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

export class ProcessTemplatedStepContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProcessTemplatedStepContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProcessTemplatedStepContainer | cdktf.IResolvable | undefined) {
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
export interface ProcessTemplatedStepGitDependencies {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#default_branch ProcessTemplatedStep#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from. Supports glob patten syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#file_path_filters ProcessTemplatedStep#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#git_credential_id ProcessTemplatedStep#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#git_credential_type ProcessTemplatedStep#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The Git URI for the repository where this resource is sourced from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#repository_uri ProcessTemplatedStep#repository_uri}
  */
  readonly repositoryUri: string;
}

export function processTemplatedStepGitDependenciesToTerraform(struct?: ProcessTemplatedStepGitDependencies): any {
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


export function processTemplatedStepGitDependenciesToHclTerraform(struct?: ProcessTemplatedStepGitDependencies): any {
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

export class ProcessTemplatedStepGitDependenciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ProcessTemplatedStepGitDependencies | undefined {
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

  public set internalValue(value: ProcessTemplatedStepGitDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultBranch = undefined;
      this._filePathFilters = undefined;
      this._gitCredentialId = undefined;
      this._gitCredentialType = undefined;
      this._repositoryUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class ProcessTemplatedStepGitDependenciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ProcessTemplatedStepGitDependencies } | cdktf.IResolvable

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
  public get(key: string): ProcessTemplatedStepGitDependenciesOutputReference {
    return new ProcessTemplatedStepGitDependenciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ProcessTemplatedStepPackages {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#acquisition_location ProcessTemplatedStep#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#feed_id ProcessTemplatedStep#feed_id}
  */
  readonly feedId?: string;
  /**
  * Package ID or a variable-expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#package_id ProcessTemplatedStep#package_id}
  */
  readonly packageId: string;
  /**
  * A collection of properties associated with this package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#properties ProcessTemplatedStep#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function processTemplatedStepPackagesToTerraform(struct?: ProcessTemplatedStepPackages): any {
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


export function processTemplatedStepPackagesToHclTerraform(struct?: ProcessTemplatedStepPackages): any {
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

export class ProcessTemplatedStepPackagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ProcessTemplatedStepPackages | undefined {
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

  public set internalValue(value: ProcessTemplatedStepPackages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._packageId = undefined;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class ProcessTemplatedStepPackagesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ProcessTemplatedStepPackages } | cdktf.IResolvable

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
  public get(key: string): ProcessTemplatedStepPackagesOutputReference {
    return new ProcessTemplatedStepPackagesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step octopusdeploy_process_templated_step}
*/
export class ProcessTemplatedStep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_process_templated_step";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessTemplatedStep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessTemplatedStep to import
  * @param importFromId The id of the existing ProcessTemplatedStep that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessTemplatedStep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_process_templated_step", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/process_templated_step octopusdeploy_process_templated_step} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessTemplatedStepConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessTemplatedStepConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_process_templated_step',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0'
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
    this._isDisabled = config.isDisabled;
    this._isRequired = config.isRequired;
    this._name = config.name;
    this._notes = config.notes;
    this._packageRequirement = config.packageRequirement;
    this._parameters = config.parameters;
    this._processId = config.processId;
    this._properties = config.properties;
    this._slug = config.slug;
    this._spaceId = config.spaceId;
    this._startTrigger = config.startTrigger;
    this._templateId = config.templateId;
    this._templateVersion = config.templateVersion;
    this._tenantTags = config.tenantTags;
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
  private _container = new ProcessTemplatedStepContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ProcessTemplatedStepContainer) {
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

  // git_dependencies - computed: true, optional: false, required: false
  private _gitDependencies = new ProcessTemplatedStepGitDependenciesMap(this, "git_dependencies");
  public get gitDependencies() {
    return this._gitDependencies;
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

  // package_requirement - computed: true, optional: true, required: false
  private _packageRequirement?: string; 
  public get packageRequirement() {
    return this.getStringAttribute('package_requirement');
  }
  public set packageRequirement(value: string) {
    this._packageRequirement = value;
  }
  public resetPackageRequirement() {
    this._packageRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageRequirementInput() {
    return this._packageRequirement;
  }

  // packages - computed: true, optional: false, required: false
  private _packages = new ProcessTemplatedStepPackagesMap(this, "packages");
  public get packages() {
    return this._packages;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // start_trigger - computed: true, optional: true, required: false
  private _startTrigger?: string; 
  public get startTrigger() {
    return this.getStringAttribute('start_trigger');
  }
  public set startTrigger(value: string) {
    this._startTrigger = value;
  }
  public resetStartTrigger() {
    this._startTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTriggerInput() {
    return this._startTrigger;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_properties - computed: true, optional: false, required: false
  private _templateProperties = new cdktf.StringMap(this, "template_properties");
  public get templateProperties() {
    return this._templateProperties;
  }

  // template_version - computed: false, optional: false, required: true
  private _templateVersion?: number; 
  public get templateVersion() {
    return this.getNumberAttribute('template_version');
  }
  public set templateVersion(value: number) {
    this._templateVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVersionInput() {
    return this._templateVersion;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unmanaged_parameters - computed: true, optional: false, required: false
  private _unmanagedParameters = new cdktf.StringMap(this, "unmanaged_parameters");
  public get unmanagedParameters() {
    return this._unmanagedParameters;
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
      container: processTemplatedStepContainerToTerraform(this._container.internalValue),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      excluded_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedEnvironments),
      execution_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._executionProperties),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      is_required: cdktf.booleanToTerraform(this._isRequired),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      package_requirement: cdktf.stringToTerraform(this._packageRequirement),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      process_id: cdktf.stringToTerraform(this._processId),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      slug: cdktf.stringToTerraform(this._slug),
      space_id: cdktf.stringToTerraform(this._spaceId),
      start_trigger: cdktf.stringToTerraform(this._startTrigger),
      template_id: cdktf.stringToTerraform(this._templateId),
      template_version: cdktf.numberToTerraform(this._templateVersion),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
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
        value: processTemplatedStepContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProcessTemplatedStepContainer",
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
      package_requirement: {
        value: cdktf.stringToHclTerraform(this._packageRequirement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      start_trigger: {
        value: cdktf.stringToHclTerraform(this._startTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_version: {
        value: cdktf.numberToHclTerraform(this._templateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
