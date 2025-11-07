// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentProcessConfig extends cdktf.TerraformMetaArguments {
  /**
  * The branch name associated with this deployment process (i.e. `main`). This value is optional and only applies to associated projects that are stored in version control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#branch DeploymentProcess#branch}
  */
  readonly branch?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#last_snapshot_id DeploymentProcess#last_snapshot_id}
  */
  readonly lastSnapshotId?: string;
  /**
  * The project ID associated with this deployment process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#project_id DeploymentProcess#project_id}
  */
  readonly projectId: string;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#space_id DeploymentProcess#space_id}
  */
  readonly spaceId?: string;
  /**
  * The version number of this deployment process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#version DeploymentProcess#version}
  */
  readonly version?: number;
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#step DeploymentProcess#step}
  */
  readonly step?: DeploymentProcessStep[] | cdktf.IResolvable;
}
export interface DeploymentProcessStepActionActionTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#community_action_template_id DeploymentProcess#community_action_template_id}
  */
  readonly communityActionTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#version DeploymentProcess#version}
  */
  readonly version?: number;
}

export function deploymentProcessStepActionActionTemplateToTerraform(struct?: DeploymentProcessStepActionActionTemplateOutputReference | DeploymentProcessStepActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_action_template_id: cdktf.stringToTerraform(struct!.communityActionTemplateId),
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function deploymentProcessStepActionActionTemplateToHclTerraform(struct?: DeploymentProcessStepActionActionTemplateOutputReference | DeploymentProcessStepActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_action_template_id: {
      value: cdktf.stringToHclTerraform(struct!.communityActionTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepActionActionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepActionActionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityActionTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityActionTemplateId = this._communityActionTemplateId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepActionActionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._communityActionTemplateId = undefined;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._communityActionTemplateId = value.communityActionTemplateId;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // community_action_template_id - computed: true, optional: true, required: false
  private _communityActionTemplateId?: string; 
  public get communityActionTemplateId() {
    return this.getStringAttribute('community_action_template_id');
  }
  public set communityActionTemplateId(value: string) {
    this._communityActionTemplateId = value;
  }
  public resetCommunityActionTemplateId() {
    this._communityActionTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityActionTemplateIdInput() {
    return this._communityActionTemplateId;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DeploymentProcessStepActionContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#image DeploymentProcess#image}
  */
  readonly image?: string;
}

export function deploymentProcessStepActionContainerToTerraform(struct?: DeploymentProcessStepActionContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function deploymentProcessStepActionContainerToHclTerraform(struct?: DeploymentProcessStepActionContainer | cdktf.IResolvable): any {
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

export class DeploymentProcessStepActionContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepActionContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeploymentProcessStepActionContainer | cdktf.IResolvable | undefined) {
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

  // feed_id - computed: false, optional: true, required: false
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

  // image - computed: false, optional: true, required: false
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

export class DeploymentProcessStepActionContainerList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepActionContainer[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepActionContainerOutputReference {
    return new DeploymentProcessStepActionContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepActionGitDependency {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#default_branch DeploymentProcess#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from. Supports glob patten syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#file_path_filters DeploymentProcess#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_id DeploymentProcess#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_type DeploymentProcess#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The Git URI for the repository where this resource is sourced from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#repository_uri DeploymentProcess#repository_uri}
  */
  readonly repositoryUri: string;
}

export function deploymentProcessStepActionGitDependencyToTerraform(struct?: DeploymentProcessStepActionGitDependencyOutputReference | DeploymentProcessStepActionGitDependency): any {
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


export function deploymentProcessStepActionGitDependencyToHclTerraform(struct?: DeploymentProcessStepActionGitDependencyOutputReference | DeploymentProcessStepActionGitDependency): any {
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
      type: "list",
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

export class DeploymentProcessStepActionGitDependencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepActionGitDependency | undefined {
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

  public set internalValue(value: DeploymentProcessStepActionGitDependency | undefined) {
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

  // default_branch - computed: false, optional: false, required: true
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

  // file_path_filters - computed: false, optional: true, required: false
  private _filePathFilters?: string[]; 
  public get filePathFilters() {
    return this.getListAttribute('file_path_filters');
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

  // git_credential_id - computed: false, optional: true, required: false
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

  // git_credential_type - computed: false, optional: false, required: true
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

  // repository_uri - computed: false, optional: false, required: true
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
export interface DeploymentProcessStepActionPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * Whether to extract the package during deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#extract_during_deployment DeploymentProcess#extract_during_deployment}
  */
  readonly extractDuringDeployment?: boolean | cdktf.IResolvable;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepActionPackageToTerraform(struct?: DeploymentProcessStepActionPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    extract_during_deployment: cdktf.booleanToTerraform(struct!.extractDuringDeployment),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepActionPackageToHclTerraform(struct?: DeploymentProcessStepActionPackage | cdktf.IResolvable): any {
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
    extract_during_deployment: {
      value: cdktf.booleanToHclTerraform(struct!.extractDuringDeployment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feed_id: {
      value: cdktf.stringToHclTerraform(struct!.feedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DeploymentProcessStepActionPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepActionPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acquisitionLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.acquisitionLocation = this._acquisitionLocation;
    }
    if (this._extractDuringDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractDuringDeployment = this._extractDuringDeployment;
    }
    if (this._feedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedId = this._feedId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepActionPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._extractDuringDeployment = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
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
      this._extractDuringDeployment = value.extractDuringDeployment;
      this._feedId = value.feedId;
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // extract_during_deployment - computed: true, optional: true, required: false
  private _extractDuringDeployment?: boolean | cdktf.IResolvable; 
  public get extractDuringDeployment() {
    return this.getBooleanAttribute('extract_during_deployment');
  }
  public set extractDuringDeployment(value: boolean | cdktf.IResolvable) {
    this._extractDuringDeployment = value;
  }
  public resetExtractDuringDeployment() {
    this._extractDuringDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractDuringDeploymentInput() {
    return this._extractDuringDeployment;
  }

  // feed_id - computed: false, optional: true, required: false
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

export class DeploymentProcessStepActionPackageList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepActionPackage[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepActionPackageOutputReference {
    return new DeploymentProcessStepActionPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepActionPrimaryPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepActionPrimaryPackageToTerraform(struct?: DeploymentProcessStepActionPrimaryPackageOutputReference | DeploymentProcessStepActionPrimaryPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepActionPrimaryPackageToHclTerraform(struct?: DeploymentProcessStepActionPrimaryPackageOutputReference | DeploymentProcessStepActionPrimaryPackage): any {
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

export class DeploymentProcessStepActionPrimaryPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepActionPrimaryPackage | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepActionPrimaryPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._packageId = undefined;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acquisitionLocation = value.acquisitionLocation;
      this._feedId = value.feedId;
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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
export interface DeploymentProcessStepAction {
  /**
  * The type of action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#action_type DeploymentProcess#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#can_be_used_for_project_versioning DeploymentProcess#can_be_used_for_project_versioning}
  */
  readonly canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable;
  /**
  * The channels associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#channels DeploymentProcess#channels}
  */
  readonly channels?: string[];
  /**
  * The condition associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#condition DeploymentProcess#condition}
  */
  readonly condition?: string;
  /**
  * The environments within which this deployment action will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#environments DeploymentProcess#environments}
  */
  readonly environments?: string[];
  /**
  * The environments that this step will be skipped in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#excluded_environments DeploymentProcess#excluded_environments}
  */
  readonly excludedEnvironments?: string[];
  /**
  * A list of enabled features for this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#features DeploymentProcess#features}
  */
  readonly features?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates the disabled status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_disabled DeploymentProcess#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the required status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_required DeploymentProcess#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * The notes associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#notes DeploymentProcess#notes}
  */
  readonly notes?: string;
  /**
  * The properties associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Whether this step runs on a worker or on the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#run_on_server DeploymentProcess#run_on_server}
  */
  readonly runOnServer?: boolean | cdktf.IResolvable;
  /**
  * Order used by terraform to ensure correct ordering of actions. This property must be either omitted from all actions, or provided on all actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#sort_order DeploymentProcess#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#tenant_tags DeploymentProcess#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The worker pool associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#worker_pool_id DeploymentProcess#worker_pool_id}
  */
  readonly workerPoolId?: string;
  /**
  * The worker pool variable associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#worker_pool_variable DeploymentProcess#worker_pool_variable}
  */
  readonly workerPoolVariable?: string;
  /**
  * action_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#action_template DeploymentProcess#action_template}
  */
  readonly actionTemplate?: DeploymentProcessStepActionActionTemplate;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#container DeploymentProcess#container}
  */
  readonly container?: DeploymentProcessStepActionContainer[] | cdktf.IResolvable;
  /**
  * git_dependency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_dependency DeploymentProcess#git_dependency}
  */
  readonly gitDependency?: DeploymentProcessStepActionGitDependency;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package DeploymentProcess#package}
  */
  readonly package?: DeploymentProcessStepActionPackage[] | cdktf.IResolvable;
  /**
  * primary_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#primary_package DeploymentProcess#primary_package}
  */
  readonly primaryPackage?: DeploymentProcessStepActionPrimaryPackage;
}

export function deploymentProcessStepActionToTerraform(struct?: DeploymentProcessStepAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    can_be_used_for_project_versioning: cdktf.booleanToTerraform(struct!.canBeUsedForProjectVersioning),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    condition: cdktf.stringToTerraform(struct!.condition),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    excluded_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedEnvironments),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    id: cdktf.stringToTerraform(struct!.id),
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    run_on_server: cdktf.booleanToTerraform(struct!.runOnServer),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
    tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantTags),
    worker_pool_id: cdktf.stringToTerraform(struct!.workerPoolId),
    worker_pool_variable: cdktf.stringToTerraform(struct!.workerPoolVariable),
    action_template: deploymentProcessStepActionActionTemplateToTerraform(struct!.actionTemplate),
    container: cdktf.listMapper(deploymentProcessStepActionContainerToTerraform, true)(struct!.container),
    git_dependency: deploymentProcessStepActionGitDependencyToTerraform(struct!.gitDependency),
    package: cdktf.listMapper(deploymentProcessStepActionPackageToTerraform, true)(struct!.package),
    primary_package: deploymentProcessStepActionPrimaryPackageToTerraform(struct!.primaryPackage),
  }
}


export function deploymentProcessStepActionToHclTerraform(struct?: DeploymentProcessStepAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_be_used_for_project_versioning: {
      value: cdktf.booleanToHclTerraform(struct!.canBeUsedForProjectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedEnvironments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    run_on_server: {
      value: cdktf.booleanToHclTerraform(struct!.runOnServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_order: {
      value: cdktf.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    worker_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.workerPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool_variable: {
      value: cdktf.stringToHclTerraform(struct!.workerPoolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_template: {
      value: deploymentProcessStepActionActionTemplateToHclTerraform(struct!.actionTemplate),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepActionActionTemplateList",
    },
    container: {
      value: cdktf.listMapperHcl(deploymentProcessStepActionContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepActionContainerList",
    },
    git_dependency: {
      value: deploymentProcessStepActionGitDependencyToHclTerraform(struct!.gitDependency),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepActionGitDependencyList",
    },
    package: {
      value: cdktf.listMapperHcl(deploymentProcessStepActionPackageToHclTerraform, true)(struct!.package),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepActionPackageList",
    },
    primary_package: {
      value: deploymentProcessStepActionPrimaryPackageToHclTerraform(struct!.primaryPackage),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepActionPrimaryPackageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._canBeUsedForProjectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.canBeUsedForProjectVersioning = this._canBeUsedForProjectVersioning;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._excludedEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEnvironments = this._excludedEnvironments;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._runOnServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnServer = this._runOnServer;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._tenantTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantTags = this._tenantTags;
    }
    if (this._workerPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolId = this._workerPoolId;
    }
    if (this._workerPoolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolVariable = this._workerPoolVariable;
    }
    if (this._actionTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTemplate = this._actionTemplate?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._gitDependency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitDependency = this._gitDependency?.internalValue;
    }
    if (this._package?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package?.internalValue;
    }
    if (this._primaryPackage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryPackage = this._primaryPackage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._canBeUsedForProjectVersioning = undefined;
      this._channels = undefined;
      this._condition = undefined;
      this._environments = undefined;
      this._excludedEnvironments = undefined;
      this._features = undefined;
      this._id = undefined;
      this._isDisabled = undefined;
      this._isRequired = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._properties = undefined;
      this._runOnServer = undefined;
      this._sortOrder = undefined;
      this._tenantTags = undefined;
      this._workerPoolId = undefined;
      this._workerPoolVariable = undefined;
      this._actionTemplate.internalValue = undefined;
      this._container.internalValue = undefined;
      this._gitDependency.internalValue = undefined;
      this._package.internalValue = undefined;
      this._primaryPackage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._canBeUsedForProjectVersioning = value.canBeUsedForProjectVersioning;
      this._channels = value.channels;
      this._condition = value.condition;
      this._environments = value.environments;
      this._excludedEnvironments = value.excludedEnvironments;
      this._features = value.features;
      this._id = value.id;
      this._isDisabled = value.isDisabled;
      this._isRequired = value.isRequired;
      this._name = value.name;
      this._notes = value.notes;
      this._properties = value.properties;
      this._runOnServer = value.runOnServer;
      this._sortOrder = value.sortOrder;
      this._tenantTags = value.tenantTags;
      this._workerPoolId = value.workerPoolId;
      this._workerPoolVariable = value.workerPoolVariable;
      this._actionTemplate.internalValue = value.actionTemplate;
      this._container.internalValue = value.container;
      this._gitDependency.internalValue = value.gitDependency;
      this._package.internalValue = value.package;
      this._primaryPackage.internalValue = value.primaryPackage;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // can_be_used_for_project_versioning - computed: true, optional: true, required: false
  private _canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable; 
  public get canBeUsedForProjectVersioning() {
    return this.getBooleanAttribute('can_be_used_for_project_versioning');
  }
  public set canBeUsedForProjectVersioning(value: boolean | cdktf.IResolvable) {
    this._canBeUsedForProjectVersioning = value;
  }
  public resetCanBeUsedForProjectVersioning() {
    this._canBeUsedForProjectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeUsedForProjectVersioningInput() {
    return this._canBeUsedForProjectVersioning;
  }

  // channels - computed: true, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
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

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
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
    return this.getListAttribute('excluded_environments');
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

  // features - computed: true, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // is_disabled - computed: false, optional: true, required: false
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

  // is_required - computed: false, optional: true, required: false
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

  // run_on_server - computed: false, optional: true, required: false
  private _runOnServer?: boolean | cdktf.IResolvable; 
  public get runOnServer() {
    return this.getBooleanAttribute('run_on_server');
  }
  public set runOnServer(value: boolean | cdktf.IResolvable) {
    this._runOnServer = value;
  }
  public resetRunOnServer() {
    this._runOnServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnServerInput() {
    return this._runOnServer;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
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

  // worker_pool_variable - computed: false, optional: true, required: false
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

  // action_template - computed: false, optional: true, required: false
  private _actionTemplate = new DeploymentProcessStepActionActionTemplateOutputReference(this, "action_template");
  public get actionTemplate() {
    return this._actionTemplate;
  }
  public putActionTemplate(value: DeploymentProcessStepActionActionTemplate) {
    this._actionTemplate.internalValue = value;
  }
  public resetActionTemplate() {
    this._actionTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTemplateInput() {
    return this._actionTemplate.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DeploymentProcessStepActionContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: DeploymentProcessStepActionContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // git_dependency - computed: false, optional: true, required: false
  private _gitDependency = new DeploymentProcessStepActionGitDependencyOutputReference(this, "git_dependency");
  public get gitDependency() {
    return this._gitDependency;
  }
  public putGitDependency(value: DeploymentProcessStepActionGitDependency) {
    this._gitDependency.internalValue = value;
  }
  public resetGitDependency() {
    this._gitDependency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDependencyInput() {
    return this._gitDependency.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new DeploymentProcessStepActionPackageList(this, "package", false);
  public get package() {
    return this._package;
  }
  public putPackage(value: DeploymentProcessStepActionPackage[] | cdktf.IResolvable) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // primary_package - computed: false, optional: true, required: false
  private _primaryPackage = new DeploymentProcessStepActionPrimaryPackageOutputReference(this, "primary_package");
  public get primaryPackage() {
    return this._primaryPackage;
  }
  public putPrimaryPackage(value: DeploymentProcessStepActionPrimaryPackage) {
    this._primaryPackage.internalValue = value;
  }
  public resetPrimaryPackage() {
    this._primaryPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPackageInput() {
    return this._primaryPackage.internalValue;
  }
}

export class DeploymentProcessStepActionList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepAction[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepActionOutputReference {
    return new DeploymentProcessStepActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepApplyTerraformTemplateActionActionTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#community_action_template_id DeploymentProcess#community_action_template_id}
  */
  readonly communityActionTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#version DeploymentProcess#version}
  */
  readonly version?: number;
}

export function deploymentProcessStepApplyTerraformTemplateActionActionTemplateToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionActionTemplateOutputReference | DeploymentProcessStepApplyTerraformTemplateActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_action_template_id: cdktf.stringToTerraform(struct!.communityActionTemplateId),
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionActionTemplateToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionActionTemplateOutputReference | DeploymentProcessStepApplyTerraformTemplateActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_action_template_id: {
      value: cdktf.stringToHclTerraform(struct!.communityActionTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepApplyTerraformTemplateActionActionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionActionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityActionTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityActionTemplateId = this._communityActionTemplateId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionActionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._communityActionTemplateId = undefined;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._communityActionTemplateId = value.communityActionTemplateId;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // community_action_template_id - computed: true, optional: true, required: false
  private _communityActionTemplateId?: string; 
  public get communityActionTemplateId() {
    return this.getStringAttribute('community_action_template_id');
  }
  public set communityActionTemplateId(value: string) {
    this._communityActionTemplateId = value;
  }
  public resetCommunityActionTemplateId() {
    this._communityActionTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityActionTemplateIdInput() {
    return this._communityActionTemplateId;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#allow_additional_plugin_downloads DeploymentProcess#allow_additional_plugin_downloads}
  */
  readonly allowAdditionalPluginDownloads?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#apply_parameters DeploymentProcess#apply_parameters}
  */
  readonly applyParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#init_parameters DeploymentProcess#init_parameters}
  */
  readonly initParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#plugin_cache_directory DeploymentProcess#plugin_cache_directory}
  */
  readonly pluginCacheDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#workspace DeploymentProcess#workspace}
  */
  readonly workspace?: string;
}

export function deploymentProcessStepApplyTerraformTemplateActionAdvancedOptionsToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptionsOutputReference | DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_plugin_downloads: cdktf.booleanToTerraform(struct!.allowAdditionalPluginDownloads),
    apply_parameters: cdktf.stringToTerraform(struct!.applyParameters),
    init_parameters: cdktf.stringToTerraform(struct!.initParameters),
    plugin_cache_directory: cdktf.stringToTerraform(struct!.pluginCacheDirectory),
    workspace: cdktf.stringToTerraform(struct!.workspace),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionAdvancedOptionsToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptionsOutputReference | DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_additional_plugin_downloads: {
      value: cdktf.booleanToHclTerraform(struct!.allowAdditionalPluginDownloads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apply_parameters: {
      value: cdktf.stringToHclTerraform(struct!.applyParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_parameters: {
      value: cdktf.stringToHclTerraform(struct!.initParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_cache_directory: {
      value: cdktf.stringToHclTerraform(struct!.pluginCacheDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAdditionalPluginDownloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAdditionalPluginDownloads = this._allowAdditionalPluginDownloads;
    }
    if (this._applyParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyParameters = this._applyParameters;
    }
    if (this._initParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.initParameters = this._initParameters;
    }
    if (this._pluginCacheDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginCacheDirectory = this._pluginCacheDirectory;
    }
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAdditionalPluginDownloads = undefined;
      this._applyParameters = undefined;
      this._initParameters = undefined;
      this._pluginCacheDirectory = undefined;
      this._workspace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAdditionalPluginDownloads = value.allowAdditionalPluginDownloads;
      this._applyParameters = value.applyParameters;
      this._initParameters = value.initParameters;
      this._pluginCacheDirectory = value.pluginCacheDirectory;
      this._workspace = value.workspace;
    }
  }

  // allow_additional_plugin_downloads - computed: false, optional: true, required: false
  private _allowAdditionalPluginDownloads?: boolean | cdktf.IResolvable; 
  public get allowAdditionalPluginDownloads() {
    return this.getBooleanAttribute('allow_additional_plugin_downloads');
  }
  public set allowAdditionalPluginDownloads(value: boolean | cdktf.IResolvable) {
    this._allowAdditionalPluginDownloads = value;
  }
  public resetAllowAdditionalPluginDownloads() {
    this._allowAdditionalPluginDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdditionalPluginDownloadsInput() {
    return this._allowAdditionalPluginDownloads;
  }

  // apply_parameters - computed: false, optional: true, required: false
  private _applyParameters?: string; 
  public get applyParameters() {
    return this.getStringAttribute('apply_parameters');
  }
  public set applyParameters(value: string) {
    this._applyParameters = value;
  }
  public resetApplyParameters() {
    this._applyParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyParametersInput() {
    return this._applyParameters;
  }

  // init_parameters - computed: false, optional: true, required: false
  private _initParameters?: string; 
  public get initParameters() {
    return this.getStringAttribute('init_parameters');
  }
  public set initParameters(value: string) {
    this._initParameters = value;
  }
  public resetInitParameters() {
    this._initParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initParametersInput() {
    return this._initParameters;
  }

  // plugin_cache_directory - computed: false, optional: true, required: false
  private _pluginCacheDirectory?: string; 
  public get pluginCacheDirectory() {
    return this.getStringAttribute('plugin_cache_directory');
  }
  public set pluginCacheDirectory(value: string) {
    this._pluginCacheDirectory = value;
  }
  public resetPluginCacheDirectory() {
    this._pluginCacheDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginCacheDirectoryInput() {
    return this._pluginCacheDirectory;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  public resetWorkspace() {
    this._workspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }
}
export interface DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#arn DeploymentProcess#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#external_id DeploymentProcess#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#role_session_name DeploymentProcess#role_session_name}
  */
  readonly roleSessionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#session_duration DeploymentProcess#session_duration}
  */
  readonly sessionDuration?: number;
}

export function deploymentProcessStepApplyTerraformTemplateActionAwsAccountRoleToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRoleOutputReference | DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_session_name: cdktf.stringToTerraform(struct!.roleSessionName),
    session_duration: cdktf.numberToTerraform(struct!.sessionDuration),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionAwsAccountRoleToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRoleOutputReference | DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_session_name: {
      value: cdktf.stringToHclTerraform(struct!.roleSessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_duration: {
      value: cdktf.numberToHclTerraform(struct!.sessionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleSessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSessionName = this._roleSessionName;
    }
    if (this._sessionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionDuration = this._sessionDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._externalId = undefined;
      this._roleSessionName = undefined;
      this._sessionDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._externalId = value.externalId;
      this._roleSessionName = value.roleSessionName;
      this._sessionDuration = value.sessionDuration;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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

  // role_session_name - computed: false, optional: true, required: false
  private _roleSessionName?: string; 
  public get roleSessionName() {
    return this.getStringAttribute('role_session_name');
  }
  public set roleSessionName(value: string) {
    this._roleSessionName = value;
  }
  public resetRoleSessionName() {
    this._roleSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSessionNameInput() {
    return this._roleSessionName;
  }

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: number; 
  public get sessionDuration() {
    return this.getNumberAttribute('session_duration');
  }
  public set sessionDuration(value: number) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }
}
export interface DeploymentProcessStepApplyTerraformTemplateActionAwsAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#region DeploymentProcess#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#use_instance_role DeploymentProcess#use_instance_role}
  */
  readonly useInstanceRole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#variable DeploymentProcess#variable}
  */
  readonly variable?: string;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#role DeploymentProcess#role}
  */
  readonly role?: DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRole;
}

export function deploymentProcessStepApplyTerraformTemplateActionAwsAccountToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionAwsAccountOutputReference | DeploymentProcessStepApplyTerraformTemplateActionAwsAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    use_instance_role: cdktf.booleanToTerraform(struct!.useInstanceRole),
    variable: cdktf.stringToTerraform(struct!.variable),
    role: deploymentProcessStepApplyTerraformTemplateActionAwsAccountRoleToTerraform(struct!.role),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionAwsAccountToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionAwsAccountOutputReference | DeploymentProcessStepApplyTerraformTemplateActionAwsAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_instance_role: {
      value: cdktf.booleanToHclTerraform(struct!.useInstanceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: deploymentProcessStepApplyTerraformTemplateActionAwsAccountRoleToHclTerraform(struct!.role),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepApplyTerraformTemplateActionAwsAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionAwsAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._useInstanceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInstanceRole = this._useInstanceRole;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    if (this._role?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionAwsAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._useInstanceRole = undefined;
      this._variable = undefined;
      this._role.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._useInstanceRole = value.useInstanceRole;
      this._variable = value.variable;
      this._role.internalValue = value.role;
    }
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // use_instance_role - computed: false, optional: true, required: false
  private _useInstanceRole?: boolean | cdktf.IResolvable; 
  public get useInstanceRole() {
    return this.getBooleanAttribute('use_instance_role');
  }
  public set useInstanceRole(value: boolean | cdktf.IResolvable) {
    this._useInstanceRole = value;
  }
  public resetUseInstanceRole() {
    this._useInstanceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInstanceRoleInput() {
    return this._useInstanceRole;
  }

  // variable - computed: false, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }

  // role - computed: false, optional: true, required: false
  private _role = new DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRoleOutputReference(this, "role");
  public get role() {
    return this._role;
  }
  public putRole(value: DeploymentProcessStepApplyTerraformTemplateActionAwsAccountRole) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }
}
export interface DeploymentProcessStepApplyTerraformTemplateActionAzureAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#variable DeploymentProcess#variable}
  */
  readonly variable?: string;
}

export function deploymentProcessStepApplyTerraformTemplateActionAzureAccountToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionAzureAccountOutputReference | DeploymentProcessStepApplyTerraformTemplateActionAzureAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionAzureAccountToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionAzureAccountOutputReference | DeploymentProcessStepApplyTerraformTemplateActionAzureAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepApplyTerraformTemplateActionAzureAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionAzureAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionAzureAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._variable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._variable = value.variable;
    }
  }

  // variable - computed: false, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}
export interface DeploymentProcessStepApplyTerraformTemplateActionContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#image DeploymentProcess#image}
  */
  readonly image?: string;
}

export function deploymentProcessStepApplyTerraformTemplateActionContainerToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionContainerToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionContainer | cdktf.IResolvable): any {
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

export class DeploymentProcessStepApplyTerraformTemplateActionContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionContainer | cdktf.IResolvable | undefined) {
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

  // feed_id - computed: false, optional: true, required: false
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

  // image - computed: false, optional: true, required: false
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

export class DeploymentProcessStepApplyTerraformTemplateActionContainerList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepApplyTerraformTemplateActionContainer[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepApplyTerraformTemplateActionContainerOutputReference {
    return new DeploymentProcessStepApplyTerraformTemplateActionContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepApplyTerraformTemplateActionGitDependency {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#default_branch DeploymentProcess#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from. Supports glob patten syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#file_path_filters DeploymentProcess#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_id DeploymentProcess#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_type DeploymentProcess#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The Git URI for the repository where this resource is sourced from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#repository_uri DeploymentProcess#repository_uri}
  */
  readonly repositoryUri: string;
}

export function deploymentProcessStepApplyTerraformTemplateActionGitDependencyToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionGitDependencyOutputReference | DeploymentProcessStepApplyTerraformTemplateActionGitDependency): any {
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


export function deploymentProcessStepApplyTerraformTemplateActionGitDependencyToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionGitDependencyOutputReference | DeploymentProcessStepApplyTerraformTemplateActionGitDependency): any {
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
      type: "list",
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

export class DeploymentProcessStepApplyTerraformTemplateActionGitDependencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionGitDependency | undefined {
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

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionGitDependency | undefined) {
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

  // default_branch - computed: false, optional: false, required: true
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

  // file_path_filters - computed: false, optional: true, required: false
  private _filePathFilters?: string[]; 
  public get filePathFilters() {
    return this.getListAttribute('file_path_filters');
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

  // git_credential_id - computed: false, optional: true, required: false
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

  // git_credential_type - computed: false, optional: false, required: true
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

  // repository_uri - computed: false, optional: false, required: true
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
export interface DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccount {
  /**
  * Impersonate service accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#impersonate_service_account DeploymentProcess#impersonate_service_account}
  */
  readonly impersonateServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * This sets GOOGLE_PROJECT environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#project DeploymentProcess#project}
  */
  readonly project?: string;
  /**
  * This sets GOOGLE_REGION environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#region DeploymentProcess#region}
  */
  readonly region?: string;
  /**
  * This sets GOOGLE_IMPERSONATE_SERVICE_ACCOUNT environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#service_account_emails DeploymentProcess#service_account_emails}
  */
  readonly serviceAccountEmails?: string;
  /**
  * When running in a Compute Engine virtual machine, use the associated VM service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#use_vm_service_account DeploymentProcess#use_vm_service_account}
  */
  readonly useVmServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#variable DeploymentProcess#variable}
  */
  readonly variable?: string;
  /**
  * This sets GOOGLE_ZONE environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#zone DeploymentProcess#zone}
  */
  readonly zone?: string;
}

export function deploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccountToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccountOutputReference | DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    impersonate_service_account: cdktf.booleanToTerraform(struct!.impersonateServiceAccount),
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
    service_account_emails: cdktf.stringToTerraform(struct!.serviceAccountEmails),
    use_vm_service_account: cdktf.booleanToTerraform(struct!.useVmServiceAccount),
    variable: cdktf.stringToTerraform(struct!.variable),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccountToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccountOutputReference | DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    impersonate_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.impersonateServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
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
    service_account_emails: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_vm_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.useVmServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._impersonateServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.impersonateServiceAccount = this._impersonateServiceAccount;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceAccountEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmails = this._serviceAccountEmails;
    }
    if (this._useVmServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVmServiceAccount = this._useVmServiceAccount;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._impersonateServiceAccount = undefined;
      this._project = undefined;
      this._region = undefined;
      this._serviceAccountEmails = undefined;
      this._useVmServiceAccount = undefined;
      this._variable = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._impersonateServiceAccount = value.impersonateServiceAccount;
      this._project = value.project;
      this._region = value.region;
      this._serviceAccountEmails = value.serviceAccountEmails;
      this._useVmServiceAccount = value.useVmServiceAccount;
      this._variable = value.variable;
      this._zone = value.zone;
    }
  }

  // impersonate_service_account - computed: false, optional: true, required: false
  private _impersonateServiceAccount?: boolean | cdktf.IResolvable; 
  public get impersonateServiceAccount() {
    return this.getBooleanAttribute('impersonate_service_account');
  }
  public set impersonateServiceAccount(value: boolean | cdktf.IResolvable) {
    this._impersonateServiceAccount = value;
  }
  public resetImpersonateServiceAccount() {
    this._impersonateServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountInput() {
    return this._impersonateServiceAccount;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_account_emails - computed: false, optional: true, required: false
  private _serviceAccountEmails?: string; 
  public get serviceAccountEmails() {
    return this.getStringAttribute('service_account_emails');
  }
  public set serviceAccountEmails(value: string) {
    this._serviceAccountEmails = value;
  }
  public resetServiceAccountEmails() {
    this._serviceAccountEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailsInput() {
    return this._serviceAccountEmails;
  }

  // use_vm_service_account - computed: false, optional: true, required: false
  private _useVmServiceAccount?: boolean | cdktf.IResolvable; 
  public get useVmServiceAccount() {
    return this.getBooleanAttribute('use_vm_service_account');
  }
  public set useVmServiceAccount(value: boolean | cdktf.IResolvable) {
    this._useVmServiceAccount = value;
  }
  public resetUseVmServiceAccount() {
    this._useVmServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVmServiceAccountInput() {
    return this._useVmServiceAccount;
  }

  // variable - computed: false, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface DeploymentProcessStepApplyTerraformTemplateActionPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepApplyTerraformTemplateActionPackageToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionPackageToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionPackage | cdktf.IResolvable): any {
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

export class DeploymentProcessStepApplyTerraformTemplateActionPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionPackage | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

export class DeploymentProcessStepApplyTerraformTemplateActionPackageList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepApplyTerraformTemplateActionPackage[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepApplyTerraformTemplateActionPackageOutputReference {
    return new DeploymentProcessStepApplyTerraformTemplateActionPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepApplyTerraformTemplateActionPrimaryPackageToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackageOutputReference | DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionPrimaryPackageToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackageOutputReference | DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackage): any {
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

export class DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackage | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._packageId = undefined;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acquisitionLocation = value.acquisitionLocation;
      this._feedId = value.feedId;
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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
export interface DeploymentProcessStepApplyTerraformTemplateActionTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#additional_variable_files DeploymentProcess#additional_variable_files}
  */
  readonly additionalVariableFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#directory DeploymentProcess#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#run_automatic_file_substitution DeploymentProcess#run_automatic_file_substitution}
  */
  readonly runAutomaticFileSubstitution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#target_files DeploymentProcess#target_files}
  */
  readonly targetFiles?: string;
}

export function deploymentProcessStepApplyTerraformTemplateActionTemplateToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionTemplateOutputReference | DeploymentProcessStepApplyTerraformTemplateActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_variable_files: cdktf.stringToTerraform(struct!.additionalVariableFiles),
    directory: cdktf.stringToTerraform(struct!.directory),
    run_automatic_file_substitution: cdktf.booleanToTerraform(struct!.runAutomaticFileSubstitution),
    target_files: cdktf.stringToTerraform(struct!.targetFiles),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionTemplateToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateActionTemplateOutputReference | DeploymentProcessStepApplyTerraformTemplateActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_variable_files: {
      value: cdktf.stringToHclTerraform(struct!.additionalVariableFiles),
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
    run_automatic_file_substitution: {
      value: cdktf.booleanToHclTerraform(struct!.runAutomaticFileSubstitution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_files: {
      value: cdktf.stringToHclTerraform(struct!.targetFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepApplyTerraformTemplateActionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateActionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalVariableFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVariableFiles = this._additionalVariableFiles;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._runAutomaticFileSubstitution !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAutomaticFileSubstitution = this._runAutomaticFileSubstitution;
    }
    if (this._targetFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFiles = this._targetFiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateActionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalVariableFiles = undefined;
      this._directory = undefined;
      this._runAutomaticFileSubstitution = undefined;
      this._targetFiles = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalVariableFiles = value.additionalVariableFiles;
      this._directory = value.directory;
      this._runAutomaticFileSubstitution = value.runAutomaticFileSubstitution;
      this._targetFiles = value.targetFiles;
    }
  }

  // additional_variable_files - computed: false, optional: true, required: false
  private _additionalVariableFiles?: string; 
  public get additionalVariableFiles() {
    return this.getStringAttribute('additional_variable_files');
  }
  public set additionalVariableFiles(value: string) {
    this._additionalVariableFiles = value;
  }
  public resetAdditionalVariableFiles() {
    this._additionalVariableFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVariableFilesInput() {
    return this._additionalVariableFiles;
  }

  // directory - computed: false, optional: true, required: false
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

  // run_automatic_file_substitution - computed: false, optional: true, required: false
  private _runAutomaticFileSubstitution?: boolean | cdktf.IResolvable; 
  public get runAutomaticFileSubstitution() {
    return this.getBooleanAttribute('run_automatic_file_substitution');
  }
  public set runAutomaticFileSubstitution(value: boolean | cdktf.IResolvable) {
    this._runAutomaticFileSubstitution = value;
  }
  public resetRunAutomaticFileSubstitution() {
    this._runAutomaticFileSubstitution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAutomaticFileSubstitutionInput() {
    return this._runAutomaticFileSubstitution;
  }

  // target_files - computed: false, optional: true, required: false
  private _targetFiles?: string; 
  public get targetFiles() {
    return this.getStringAttribute('target_files');
  }
  public set targetFiles(value: string) {
    this._targetFiles = value;
  }
  public resetTargetFiles() {
    this._targetFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFilesInput() {
    return this._targetFiles;
  }
}
export interface DeploymentProcessStepApplyTerraformTemplateAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#can_be_used_for_project_versioning DeploymentProcess#can_be_used_for_project_versioning}
  */
  readonly canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable;
  /**
  * The channels associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#channels DeploymentProcess#channels}
  */
  readonly channels?: string[];
  /**
  * The condition associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#condition DeploymentProcess#condition}
  */
  readonly condition?: string;
  /**
  * The environments within which this deployment action will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#environments DeploymentProcess#environments}
  */
  readonly environments?: string[];
  /**
  * The environments that this step will be skipped in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#excluded_environments DeploymentProcess#excluded_environments}
  */
  readonly excludedEnvironments?: string[];
  /**
  * A list of enabled features for this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#features DeploymentProcess#features}
  */
  readonly features?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#inline_template DeploymentProcess#inline_template}
  */
  readonly inlineTemplate?: string;
  /**
  * Indicates the disabled status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_disabled DeploymentProcess#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the required status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_required DeploymentProcess#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * The notes associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#notes DeploymentProcess#notes}
  */
  readonly notes?: string;
  /**
  * The properties associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Whether this step runs on a worker or on the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#run_on_server DeploymentProcess#run_on_server}
  */
  readonly runOnServer?: boolean | cdktf.IResolvable;
  /**
  * Order used by terraform to ensure correct ordering of actions. This property must be either omitted from all actions, or provided on all actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#sort_order DeploymentProcess#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#template_parameters DeploymentProcess#template_parameters}
  */
  readonly templateParameters?: string;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#tenant_tags DeploymentProcess#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The worker pool associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#worker_pool_id DeploymentProcess#worker_pool_id}
  */
  readonly workerPoolId?: string;
  /**
  * The worker pool variable associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#worker_pool_variable DeploymentProcess#worker_pool_variable}
  */
  readonly workerPoolVariable?: string;
  /**
  * action_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#action_template DeploymentProcess#action_template}
  */
  readonly actionTemplate?: DeploymentProcessStepApplyTerraformTemplateActionActionTemplate;
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#advanced_options DeploymentProcess#advanced_options}
  */
  readonly advancedOptions: DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptions;
  /**
  * aws_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#aws_account DeploymentProcess#aws_account}
  */
  readonly awsAccount?: DeploymentProcessStepApplyTerraformTemplateActionAwsAccount;
  /**
  * azure_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#azure_account DeploymentProcess#azure_account}
  */
  readonly azureAccount?: DeploymentProcessStepApplyTerraformTemplateActionAzureAccount;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#container DeploymentProcess#container}
  */
  readonly container?: DeploymentProcessStepApplyTerraformTemplateActionContainer[] | cdktf.IResolvable;
  /**
  * git_dependency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_dependency DeploymentProcess#git_dependency}
  */
  readonly gitDependency?: DeploymentProcessStepApplyTerraformTemplateActionGitDependency;
  /**
  * google_cloud_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#google_cloud_account DeploymentProcess#google_cloud_account}
  */
  readonly googleCloudAccount?: DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccount;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package DeploymentProcess#package}
  */
  readonly package?: DeploymentProcessStepApplyTerraformTemplateActionPackage[] | cdktf.IResolvable;
  /**
  * primary_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#primary_package DeploymentProcess#primary_package}
  */
  readonly primaryPackage?: DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackage;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#template DeploymentProcess#template}
  */
  readonly template?: DeploymentProcessStepApplyTerraformTemplateActionTemplate;
}

export function deploymentProcessStepApplyTerraformTemplateActionToTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_be_used_for_project_versioning: cdktf.booleanToTerraform(struct!.canBeUsedForProjectVersioning),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    condition: cdktf.stringToTerraform(struct!.condition),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    excluded_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedEnvironments),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    id: cdktf.stringToTerraform(struct!.id),
    inline_template: cdktf.stringToTerraform(struct!.inlineTemplate),
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    run_on_server: cdktf.booleanToTerraform(struct!.runOnServer),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
    template_parameters: cdktf.stringToTerraform(struct!.templateParameters),
    tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantTags),
    worker_pool_id: cdktf.stringToTerraform(struct!.workerPoolId),
    worker_pool_variable: cdktf.stringToTerraform(struct!.workerPoolVariable),
    action_template: deploymentProcessStepApplyTerraformTemplateActionActionTemplateToTerraform(struct!.actionTemplate),
    advanced_options: deploymentProcessStepApplyTerraformTemplateActionAdvancedOptionsToTerraform(struct!.advancedOptions),
    aws_account: deploymentProcessStepApplyTerraformTemplateActionAwsAccountToTerraform(struct!.awsAccount),
    azure_account: deploymentProcessStepApplyTerraformTemplateActionAzureAccountToTerraform(struct!.azureAccount),
    container: cdktf.listMapper(deploymentProcessStepApplyTerraformTemplateActionContainerToTerraform, true)(struct!.container),
    git_dependency: deploymentProcessStepApplyTerraformTemplateActionGitDependencyToTerraform(struct!.gitDependency),
    google_cloud_account: deploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccountToTerraform(struct!.googleCloudAccount),
    package: cdktf.listMapper(deploymentProcessStepApplyTerraformTemplateActionPackageToTerraform, true)(struct!.package),
    primary_package: deploymentProcessStepApplyTerraformTemplateActionPrimaryPackageToTerraform(struct!.primaryPackage),
    template: deploymentProcessStepApplyTerraformTemplateActionTemplateToTerraform(struct!.template),
  }
}


export function deploymentProcessStepApplyTerraformTemplateActionToHclTerraform(struct?: DeploymentProcessStepApplyTerraformTemplateAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_be_used_for_project_versioning: {
      value: cdktf.booleanToHclTerraform(struct!.canBeUsedForProjectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedEnvironments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inline_template: {
      value: cdktf.stringToHclTerraform(struct!.inlineTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    run_on_server: {
      value: cdktf.booleanToHclTerraform(struct!.runOnServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_order: {
      value: cdktf.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_parameters: {
      value: cdktf.stringToHclTerraform(struct!.templateParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    worker_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.workerPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool_variable: {
      value: cdktf.stringToHclTerraform(struct!.workerPoolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_template: {
      value: deploymentProcessStepApplyTerraformTemplateActionActionTemplateToHclTerraform(struct!.actionTemplate),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionActionTemplateList",
    },
    advanced_options: {
      value: deploymentProcessStepApplyTerraformTemplateActionAdvancedOptionsToHclTerraform(struct!.advancedOptions),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptionsList",
    },
    aws_account: {
      value: deploymentProcessStepApplyTerraformTemplateActionAwsAccountToHclTerraform(struct!.awsAccount),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionAwsAccountList",
    },
    azure_account: {
      value: deploymentProcessStepApplyTerraformTemplateActionAzureAccountToHclTerraform(struct!.azureAccount),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionAzureAccountList",
    },
    container: {
      value: cdktf.listMapperHcl(deploymentProcessStepApplyTerraformTemplateActionContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionContainerList",
    },
    git_dependency: {
      value: deploymentProcessStepApplyTerraformTemplateActionGitDependencyToHclTerraform(struct!.gitDependency),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionGitDependencyList",
    },
    google_cloud_account: {
      value: deploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccountToHclTerraform(struct!.googleCloudAccount),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccountList",
    },
    package: {
      value: cdktf.listMapperHcl(deploymentProcessStepApplyTerraformTemplateActionPackageToHclTerraform, true)(struct!.package),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionPackageList",
    },
    primary_package: {
      value: deploymentProcessStepApplyTerraformTemplateActionPrimaryPackageToHclTerraform(struct!.primaryPackage),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackageList",
    },
    template: {
      value: deploymentProcessStepApplyTerraformTemplateActionTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepApplyTerraformTemplateActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepApplyTerraformTemplateAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canBeUsedForProjectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.canBeUsedForProjectVersioning = this._canBeUsedForProjectVersioning;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._excludedEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEnvironments = this._excludedEnvironments;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inlineTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineTemplate = this._inlineTemplate;
    }
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._runOnServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnServer = this._runOnServer;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._templateParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateParameters = this._templateParameters;
    }
    if (this._tenantTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantTags = this._tenantTags;
    }
    if (this._workerPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolId = this._workerPoolId;
    }
    if (this._workerPoolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolVariable = this._workerPoolVariable;
    }
    if (this._actionTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTemplate = this._actionTemplate?.internalValue;
    }
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    if (this._awsAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccount = this._awsAccount?.internalValue;
    }
    if (this._azureAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAccount = this._azureAccount?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._gitDependency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitDependency = this._gitDependency?.internalValue;
    }
    if (this._googleCloudAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudAccount = this._googleCloudAccount?.internalValue;
    }
    if (this._package?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package?.internalValue;
    }
    if (this._primaryPackage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryPackage = this._primaryPackage?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepApplyTerraformTemplateAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canBeUsedForProjectVersioning = undefined;
      this._channels = undefined;
      this._condition = undefined;
      this._environments = undefined;
      this._excludedEnvironments = undefined;
      this._features = undefined;
      this._id = undefined;
      this._inlineTemplate = undefined;
      this._isDisabled = undefined;
      this._isRequired = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._properties = undefined;
      this._runOnServer = undefined;
      this._sortOrder = undefined;
      this._templateParameters = undefined;
      this._tenantTags = undefined;
      this._workerPoolId = undefined;
      this._workerPoolVariable = undefined;
      this._actionTemplate.internalValue = undefined;
      this._advancedOptions.internalValue = undefined;
      this._awsAccount.internalValue = undefined;
      this._azureAccount.internalValue = undefined;
      this._container.internalValue = undefined;
      this._gitDependency.internalValue = undefined;
      this._googleCloudAccount.internalValue = undefined;
      this._package.internalValue = undefined;
      this._primaryPackage.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canBeUsedForProjectVersioning = value.canBeUsedForProjectVersioning;
      this._channels = value.channels;
      this._condition = value.condition;
      this._environments = value.environments;
      this._excludedEnvironments = value.excludedEnvironments;
      this._features = value.features;
      this._id = value.id;
      this._inlineTemplate = value.inlineTemplate;
      this._isDisabled = value.isDisabled;
      this._isRequired = value.isRequired;
      this._name = value.name;
      this._notes = value.notes;
      this._properties = value.properties;
      this._runOnServer = value.runOnServer;
      this._sortOrder = value.sortOrder;
      this._templateParameters = value.templateParameters;
      this._tenantTags = value.tenantTags;
      this._workerPoolId = value.workerPoolId;
      this._workerPoolVariable = value.workerPoolVariable;
      this._actionTemplate.internalValue = value.actionTemplate;
      this._advancedOptions.internalValue = value.advancedOptions;
      this._awsAccount.internalValue = value.awsAccount;
      this._azureAccount.internalValue = value.azureAccount;
      this._container.internalValue = value.container;
      this._gitDependency.internalValue = value.gitDependency;
      this._googleCloudAccount.internalValue = value.googleCloudAccount;
      this._package.internalValue = value.package;
      this._primaryPackage.internalValue = value.primaryPackage;
      this._template.internalValue = value.template;
    }
  }

  // can_be_used_for_project_versioning - computed: true, optional: true, required: false
  private _canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable; 
  public get canBeUsedForProjectVersioning() {
    return this.getBooleanAttribute('can_be_used_for_project_versioning');
  }
  public set canBeUsedForProjectVersioning(value: boolean | cdktf.IResolvable) {
    this._canBeUsedForProjectVersioning = value;
  }
  public resetCanBeUsedForProjectVersioning() {
    this._canBeUsedForProjectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeUsedForProjectVersioningInput() {
    return this._canBeUsedForProjectVersioning;
  }

  // channels - computed: true, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
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

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
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
    return this.getListAttribute('excluded_environments');
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

  // features - computed: true, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // inline_template - computed: false, optional: true, required: false
  private _inlineTemplate?: string; 
  public get inlineTemplate() {
    return this.getStringAttribute('inline_template');
  }
  public set inlineTemplate(value: string) {
    this._inlineTemplate = value;
  }
  public resetInlineTemplate() {
    this._inlineTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineTemplateInput() {
    return this._inlineTemplate;
  }

  // is_disabled - computed: false, optional: true, required: false
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

  // is_required - computed: false, optional: true, required: false
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

  // run_on_server - computed: false, optional: true, required: false
  private _runOnServer?: boolean | cdktf.IResolvable; 
  public get runOnServer() {
    return this.getBooleanAttribute('run_on_server');
  }
  public set runOnServer(value: boolean | cdktf.IResolvable) {
    this._runOnServer = value;
  }
  public resetRunOnServer() {
    this._runOnServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnServerInput() {
    return this._runOnServer;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // template_parameters - computed: false, optional: true, required: false
  private _templateParameters?: string; 
  public get templateParameters() {
    return this.getStringAttribute('template_parameters');
  }
  public set templateParameters(value: string) {
    this._templateParameters = value;
  }
  public resetTemplateParameters() {
    this._templateParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateParametersInput() {
    return this._templateParameters;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
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

  // worker_pool_variable - computed: false, optional: true, required: false
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

  // action_template - computed: false, optional: true, required: false
  private _actionTemplate = new DeploymentProcessStepApplyTerraformTemplateActionActionTemplateOutputReference(this, "action_template");
  public get actionTemplate() {
    return this._actionTemplate;
  }
  public putActionTemplate(value: DeploymentProcessStepApplyTerraformTemplateActionActionTemplate) {
    this._actionTemplate.internalValue = value;
  }
  public resetActionTemplate() {
    this._actionTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTemplateInput() {
    return this._actionTemplate.internalValue;
  }

  // advanced_options - computed: false, optional: false, required: true
  private _advancedOptions = new DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: DeploymentProcessStepApplyTerraformTemplateActionAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // aws_account - computed: false, optional: true, required: false
  private _awsAccount = new DeploymentProcessStepApplyTerraformTemplateActionAwsAccountOutputReference(this, "aws_account");
  public get awsAccount() {
    return this._awsAccount;
  }
  public putAwsAccount(value: DeploymentProcessStepApplyTerraformTemplateActionAwsAccount) {
    this._awsAccount.internalValue = value;
  }
  public resetAwsAccount() {
    this._awsAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountInput() {
    return this._awsAccount.internalValue;
  }

  // azure_account - computed: false, optional: true, required: false
  private _azureAccount = new DeploymentProcessStepApplyTerraformTemplateActionAzureAccountOutputReference(this, "azure_account");
  public get azureAccount() {
    return this._azureAccount;
  }
  public putAzureAccount(value: DeploymentProcessStepApplyTerraformTemplateActionAzureAccount) {
    this._azureAccount.internalValue = value;
  }
  public resetAzureAccount() {
    this._azureAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAccountInput() {
    return this._azureAccount.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DeploymentProcessStepApplyTerraformTemplateActionContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: DeploymentProcessStepApplyTerraformTemplateActionContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // git_dependency - computed: false, optional: true, required: false
  private _gitDependency = new DeploymentProcessStepApplyTerraformTemplateActionGitDependencyOutputReference(this, "git_dependency");
  public get gitDependency() {
    return this._gitDependency;
  }
  public putGitDependency(value: DeploymentProcessStepApplyTerraformTemplateActionGitDependency) {
    this._gitDependency.internalValue = value;
  }
  public resetGitDependency() {
    this._gitDependency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDependencyInput() {
    return this._gitDependency.internalValue;
  }

  // google_cloud_account - computed: false, optional: true, required: false
  private _googleCloudAccount = new DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccountOutputReference(this, "google_cloud_account");
  public get googleCloudAccount() {
    return this._googleCloudAccount;
  }
  public putGoogleCloudAccount(value: DeploymentProcessStepApplyTerraformTemplateActionGoogleCloudAccount) {
    this._googleCloudAccount.internalValue = value;
  }
  public resetGoogleCloudAccount() {
    this._googleCloudAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudAccountInput() {
    return this._googleCloudAccount.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new DeploymentProcessStepApplyTerraformTemplateActionPackageList(this, "package", false);
  public get package() {
    return this._package;
  }
  public putPackage(value: DeploymentProcessStepApplyTerraformTemplateActionPackage[] | cdktf.IResolvable) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // primary_package - computed: false, optional: true, required: false
  private _primaryPackage = new DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackageOutputReference(this, "primary_package");
  public get primaryPackage() {
    return this._primaryPackage;
  }
  public putPrimaryPackage(value: DeploymentProcessStepApplyTerraformTemplateActionPrimaryPackage) {
    this._primaryPackage.internalValue = value;
  }
  public resetPrimaryPackage() {
    this._primaryPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPackageInput() {
    return this._primaryPackage.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DeploymentProcessStepApplyTerraformTemplateActionTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DeploymentProcessStepApplyTerraformTemplateActionTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DeploymentProcessStepApplyTerraformTemplateActionList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepApplyTerraformTemplateAction[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepApplyTerraformTemplateActionOutputReference {
    return new DeploymentProcessStepApplyTerraformTemplateActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepDeployKubernetesSecretActionActionTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#community_action_template_id DeploymentProcess#community_action_template_id}
  */
  readonly communityActionTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#version DeploymentProcess#version}
  */
  readonly version?: number;
}

export function deploymentProcessStepDeployKubernetesSecretActionActionTemplateToTerraform(struct?: DeploymentProcessStepDeployKubernetesSecretActionActionTemplateOutputReference | DeploymentProcessStepDeployKubernetesSecretActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_action_template_id: cdktf.stringToTerraform(struct!.communityActionTemplateId),
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function deploymentProcessStepDeployKubernetesSecretActionActionTemplateToHclTerraform(struct?: DeploymentProcessStepDeployKubernetesSecretActionActionTemplateOutputReference | DeploymentProcessStepDeployKubernetesSecretActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_action_template_id: {
      value: cdktf.stringToHclTerraform(struct!.communityActionTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepDeployKubernetesSecretActionActionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepDeployKubernetesSecretActionActionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityActionTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityActionTemplateId = this._communityActionTemplateId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepDeployKubernetesSecretActionActionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._communityActionTemplateId = undefined;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._communityActionTemplateId = value.communityActionTemplateId;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // community_action_template_id - computed: true, optional: true, required: false
  private _communityActionTemplateId?: string; 
  public get communityActionTemplateId() {
    return this.getStringAttribute('community_action_template_id');
  }
  public set communityActionTemplateId(value: string) {
    this._communityActionTemplateId = value;
  }
  public resetCommunityActionTemplateId() {
    this._communityActionTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityActionTemplateIdInput() {
    return this._communityActionTemplateId;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DeploymentProcessStepDeployKubernetesSecretActionContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#image DeploymentProcess#image}
  */
  readonly image?: string;
}

export function deploymentProcessStepDeployKubernetesSecretActionContainerToTerraform(struct?: DeploymentProcessStepDeployKubernetesSecretActionContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function deploymentProcessStepDeployKubernetesSecretActionContainerToHclTerraform(struct?: DeploymentProcessStepDeployKubernetesSecretActionContainer | cdktf.IResolvable): any {
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

export class DeploymentProcessStepDeployKubernetesSecretActionContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepDeployKubernetesSecretActionContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeploymentProcessStepDeployKubernetesSecretActionContainer | cdktf.IResolvable | undefined) {
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

  // feed_id - computed: false, optional: true, required: false
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

  // image - computed: false, optional: true, required: false
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

export class DeploymentProcessStepDeployKubernetesSecretActionContainerList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepDeployKubernetesSecretActionContainer[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepDeployKubernetesSecretActionContainerOutputReference {
    return new DeploymentProcessStepDeployKubernetesSecretActionContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepDeployKubernetesSecretActionGitDependency {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#default_branch DeploymentProcess#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from. Supports glob patten syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#file_path_filters DeploymentProcess#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_id DeploymentProcess#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_type DeploymentProcess#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The Git URI for the repository where this resource is sourced from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#repository_uri DeploymentProcess#repository_uri}
  */
  readonly repositoryUri: string;
}

export function deploymentProcessStepDeployKubernetesSecretActionGitDependencyToTerraform(struct?: DeploymentProcessStepDeployKubernetesSecretActionGitDependencyOutputReference | DeploymentProcessStepDeployKubernetesSecretActionGitDependency): any {
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


export function deploymentProcessStepDeployKubernetesSecretActionGitDependencyToHclTerraform(struct?: DeploymentProcessStepDeployKubernetesSecretActionGitDependencyOutputReference | DeploymentProcessStepDeployKubernetesSecretActionGitDependency): any {
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
      type: "list",
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

export class DeploymentProcessStepDeployKubernetesSecretActionGitDependencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepDeployKubernetesSecretActionGitDependency | undefined {
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

  public set internalValue(value: DeploymentProcessStepDeployKubernetesSecretActionGitDependency | undefined) {
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

  // default_branch - computed: false, optional: false, required: true
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

  // file_path_filters - computed: false, optional: true, required: false
  private _filePathFilters?: string[]; 
  public get filePathFilters() {
    return this.getListAttribute('file_path_filters');
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

  // git_credential_id - computed: false, optional: true, required: false
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

  // git_credential_type - computed: false, optional: false, required: true
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

  // repository_uri - computed: false, optional: false, required: true
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
export interface DeploymentProcessStepDeployKubernetesSecretActionPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepDeployKubernetesSecretActionPackageToTerraform(struct?: DeploymentProcessStepDeployKubernetesSecretActionPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepDeployKubernetesSecretActionPackageToHclTerraform(struct?: DeploymentProcessStepDeployKubernetesSecretActionPackage | cdktf.IResolvable): any {
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

export class DeploymentProcessStepDeployKubernetesSecretActionPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepDeployKubernetesSecretActionPackage | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepDeployKubernetesSecretActionPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

export class DeploymentProcessStepDeployKubernetesSecretActionPackageList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepDeployKubernetesSecretActionPackage[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepDeployKubernetesSecretActionPackageOutputReference {
    return new DeploymentProcessStepDeployKubernetesSecretActionPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepDeployKubernetesSecretAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#can_be_used_for_project_versioning DeploymentProcess#can_be_used_for_project_versioning}
  */
  readonly canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable;
  /**
  * The channels associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#channels DeploymentProcess#channels}
  */
  readonly channels?: string[];
  /**
  * The condition associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#condition DeploymentProcess#condition}
  */
  readonly condition?: string;
  /**
  * The environments within which this deployment action will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#environments DeploymentProcess#environments}
  */
  readonly environments?: string[];
  /**
  * The environments that this step will be skipped in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#excluded_environments DeploymentProcess#excluded_environments}
  */
  readonly excludedEnvironments?: string[];
  /**
  * A list of enabled features for this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#features DeploymentProcess#features}
  */
  readonly features?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates the disabled status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_disabled DeploymentProcess#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the required status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_required DeploymentProcess#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Indicates the status of the Kubernetes Object Status feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#kubernetes_object_status_check_enabled DeploymentProcess#kubernetes_object_status_check_enabled}
  */
  readonly kubernetesObjectStatusCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * The notes associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#notes DeploymentProcess#notes}
  */
  readonly notes?: string;
  /**
  * The properties associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Whether this step runs on a worker or on the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#run_on_server DeploymentProcess#run_on_server}
  */
  readonly runOnServer?: boolean | cdktf.IResolvable;
  /**
  * The name of the secret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#secret_name DeploymentProcess#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#secret_values DeploymentProcess#secret_values}
  */
  readonly secretValues: { [key: string]: string };
  /**
  * Order used by terraform to ensure correct ordering of actions. This property must be either omitted from all actions, or provided on all actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#sort_order DeploymentProcess#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#tenant_tags DeploymentProcess#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The worker pool associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#worker_pool_id DeploymentProcess#worker_pool_id}
  */
  readonly workerPoolId?: string;
  /**
  * The worker pool variable associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#worker_pool_variable DeploymentProcess#worker_pool_variable}
  */
  readonly workerPoolVariable?: string;
  /**
  * action_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#action_template DeploymentProcess#action_template}
  */
  readonly actionTemplate?: DeploymentProcessStepDeployKubernetesSecretActionActionTemplate;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#container DeploymentProcess#container}
  */
  readonly container?: DeploymentProcessStepDeployKubernetesSecretActionContainer[] | cdktf.IResolvable;
  /**
  * git_dependency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_dependency DeploymentProcess#git_dependency}
  */
  readonly gitDependency?: DeploymentProcessStepDeployKubernetesSecretActionGitDependency;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package DeploymentProcess#package}
  */
  readonly package?: DeploymentProcessStepDeployKubernetesSecretActionPackage[] | cdktf.IResolvable;
}

export function deploymentProcessStepDeployKubernetesSecretActionToTerraform(struct?: DeploymentProcessStepDeployKubernetesSecretAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_be_used_for_project_versioning: cdktf.booleanToTerraform(struct!.canBeUsedForProjectVersioning),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    condition: cdktf.stringToTerraform(struct!.condition),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    excluded_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedEnvironments),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    id: cdktf.stringToTerraform(struct!.id),
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    kubernetes_object_status_check_enabled: cdktf.booleanToTerraform(struct!.kubernetesObjectStatusCheckEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    run_on_server: cdktf.booleanToTerraform(struct!.runOnServer),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secretValues),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
    tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantTags),
    worker_pool_id: cdktf.stringToTerraform(struct!.workerPoolId),
    worker_pool_variable: cdktf.stringToTerraform(struct!.workerPoolVariable),
    action_template: deploymentProcessStepDeployKubernetesSecretActionActionTemplateToTerraform(struct!.actionTemplate),
    container: cdktf.listMapper(deploymentProcessStepDeployKubernetesSecretActionContainerToTerraform, true)(struct!.container),
    git_dependency: deploymentProcessStepDeployKubernetesSecretActionGitDependencyToTerraform(struct!.gitDependency),
    package: cdktf.listMapper(deploymentProcessStepDeployKubernetesSecretActionPackageToTerraform, true)(struct!.package),
  }
}


export function deploymentProcessStepDeployKubernetesSecretActionToHclTerraform(struct?: DeploymentProcessStepDeployKubernetesSecretAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_be_used_for_project_versioning: {
      value: cdktf.booleanToHclTerraform(struct!.canBeUsedForProjectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedEnvironments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kubernetes_object_status_check_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.kubernetesObjectStatusCheckEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    run_on_server: {
      value: cdktf.booleanToHclTerraform(struct!.runOnServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.secretValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sort_order: {
      value: cdktf.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    worker_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.workerPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool_variable: {
      value: cdktf.stringToHclTerraform(struct!.workerPoolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_template: {
      value: deploymentProcessStepDeployKubernetesSecretActionActionTemplateToHclTerraform(struct!.actionTemplate),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepDeployKubernetesSecretActionActionTemplateList",
    },
    container: {
      value: cdktf.listMapperHcl(deploymentProcessStepDeployKubernetesSecretActionContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployKubernetesSecretActionContainerList",
    },
    git_dependency: {
      value: deploymentProcessStepDeployKubernetesSecretActionGitDependencyToHclTerraform(struct!.gitDependency),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepDeployKubernetesSecretActionGitDependencyList",
    },
    package: {
      value: cdktf.listMapperHcl(deploymentProcessStepDeployKubernetesSecretActionPackageToHclTerraform, true)(struct!.package),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployKubernetesSecretActionPackageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepDeployKubernetesSecretActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepDeployKubernetesSecretAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canBeUsedForProjectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.canBeUsedForProjectVersioning = this._canBeUsedForProjectVersioning;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._excludedEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEnvironments = this._excludedEnvironments;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._kubernetesObjectStatusCheckEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesObjectStatusCheckEnabled = this._kubernetesObjectStatusCheckEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._runOnServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnServer = this._runOnServer;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValues = this._secretValues;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._tenantTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantTags = this._tenantTags;
    }
    if (this._workerPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolId = this._workerPoolId;
    }
    if (this._workerPoolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolVariable = this._workerPoolVariable;
    }
    if (this._actionTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTemplate = this._actionTemplate?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._gitDependency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitDependency = this._gitDependency?.internalValue;
    }
    if (this._package?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepDeployKubernetesSecretAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canBeUsedForProjectVersioning = undefined;
      this._channels = undefined;
      this._condition = undefined;
      this._environments = undefined;
      this._excludedEnvironments = undefined;
      this._features = undefined;
      this._id = undefined;
      this._isDisabled = undefined;
      this._isRequired = undefined;
      this._kubernetesObjectStatusCheckEnabled = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._properties = undefined;
      this._runOnServer = undefined;
      this._secretName = undefined;
      this._secretValues = undefined;
      this._sortOrder = undefined;
      this._tenantTags = undefined;
      this._workerPoolId = undefined;
      this._workerPoolVariable = undefined;
      this._actionTemplate.internalValue = undefined;
      this._container.internalValue = undefined;
      this._gitDependency.internalValue = undefined;
      this._package.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canBeUsedForProjectVersioning = value.canBeUsedForProjectVersioning;
      this._channels = value.channels;
      this._condition = value.condition;
      this._environments = value.environments;
      this._excludedEnvironments = value.excludedEnvironments;
      this._features = value.features;
      this._id = value.id;
      this._isDisabled = value.isDisabled;
      this._isRequired = value.isRequired;
      this._kubernetesObjectStatusCheckEnabled = value.kubernetesObjectStatusCheckEnabled;
      this._name = value.name;
      this._notes = value.notes;
      this._properties = value.properties;
      this._runOnServer = value.runOnServer;
      this._secretName = value.secretName;
      this._secretValues = value.secretValues;
      this._sortOrder = value.sortOrder;
      this._tenantTags = value.tenantTags;
      this._workerPoolId = value.workerPoolId;
      this._workerPoolVariable = value.workerPoolVariable;
      this._actionTemplate.internalValue = value.actionTemplate;
      this._container.internalValue = value.container;
      this._gitDependency.internalValue = value.gitDependency;
      this._package.internalValue = value.package;
    }
  }

  // can_be_used_for_project_versioning - computed: true, optional: true, required: false
  private _canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable; 
  public get canBeUsedForProjectVersioning() {
    return this.getBooleanAttribute('can_be_used_for_project_versioning');
  }
  public set canBeUsedForProjectVersioning(value: boolean | cdktf.IResolvable) {
    this._canBeUsedForProjectVersioning = value;
  }
  public resetCanBeUsedForProjectVersioning() {
    this._canBeUsedForProjectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeUsedForProjectVersioningInput() {
    return this._canBeUsedForProjectVersioning;
  }

  // channels - computed: true, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
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

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
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
    return this.getListAttribute('excluded_environments');
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

  // features - computed: true, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // is_disabled - computed: false, optional: true, required: false
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

  // is_required - computed: false, optional: true, required: false
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

  // kubernetes_object_status_check_enabled - computed: false, optional: true, required: false
  private _kubernetesObjectStatusCheckEnabled?: boolean | cdktf.IResolvable; 
  public get kubernetesObjectStatusCheckEnabled() {
    return this.getBooleanAttribute('kubernetes_object_status_check_enabled');
  }
  public set kubernetesObjectStatusCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._kubernetesObjectStatusCheckEnabled = value;
  }
  public resetKubernetesObjectStatusCheckEnabled() {
    this._kubernetesObjectStatusCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesObjectStatusCheckEnabledInput() {
    return this._kubernetesObjectStatusCheckEnabled;
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

  // run_on_server - computed: false, optional: true, required: false
  private _runOnServer?: boolean | cdktf.IResolvable; 
  public get runOnServer() {
    return this.getBooleanAttribute('run_on_server');
  }
  public set runOnServer(value: boolean | cdktf.IResolvable) {
    this._runOnServer = value;
  }
  public resetRunOnServer() {
    this._runOnServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnServerInput() {
    return this._runOnServer;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_values - computed: false, optional: false, required: true
  private _secretValues?: { [key: string]: string }; 
  public get secretValues() {
    return this.getStringMapAttribute('secret_values');
  }
  public set secretValues(value: { [key: string]: string }) {
    this._secretValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValuesInput() {
    return this._secretValues;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
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

  // worker_pool_variable - computed: false, optional: true, required: false
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

  // action_template - computed: false, optional: true, required: false
  private _actionTemplate = new DeploymentProcessStepDeployKubernetesSecretActionActionTemplateOutputReference(this, "action_template");
  public get actionTemplate() {
    return this._actionTemplate;
  }
  public putActionTemplate(value: DeploymentProcessStepDeployKubernetesSecretActionActionTemplate) {
    this._actionTemplate.internalValue = value;
  }
  public resetActionTemplate() {
    this._actionTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTemplateInput() {
    return this._actionTemplate.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DeploymentProcessStepDeployKubernetesSecretActionContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: DeploymentProcessStepDeployKubernetesSecretActionContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // git_dependency - computed: false, optional: true, required: false
  private _gitDependency = new DeploymentProcessStepDeployKubernetesSecretActionGitDependencyOutputReference(this, "git_dependency");
  public get gitDependency() {
    return this._gitDependency;
  }
  public putGitDependency(value: DeploymentProcessStepDeployKubernetesSecretActionGitDependency) {
    this._gitDependency.internalValue = value;
  }
  public resetGitDependency() {
    this._gitDependency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDependencyInput() {
    return this._gitDependency.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new DeploymentProcessStepDeployKubernetesSecretActionPackageList(this, "package", false);
  public get package() {
    return this._package;
  }
  public putPackage(value: DeploymentProcessStepDeployKubernetesSecretActionPackage[] | cdktf.IResolvable) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }
}

export class DeploymentProcessStepDeployKubernetesSecretActionList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepDeployKubernetesSecretAction[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepDeployKubernetesSecretActionOutputReference {
    return new DeploymentProcessStepDeployKubernetesSecretActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepDeployPackageActionActionTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#community_action_template_id DeploymentProcess#community_action_template_id}
  */
  readonly communityActionTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#version DeploymentProcess#version}
  */
  readonly version?: number;
}

export function deploymentProcessStepDeployPackageActionActionTemplateToTerraform(struct?: DeploymentProcessStepDeployPackageActionActionTemplateOutputReference | DeploymentProcessStepDeployPackageActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_action_template_id: cdktf.stringToTerraform(struct!.communityActionTemplateId),
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function deploymentProcessStepDeployPackageActionActionTemplateToHclTerraform(struct?: DeploymentProcessStepDeployPackageActionActionTemplateOutputReference | DeploymentProcessStepDeployPackageActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_action_template_id: {
      value: cdktf.stringToHclTerraform(struct!.communityActionTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepDeployPackageActionActionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepDeployPackageActionActionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityActionTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityActionTemplateId = this._communityActionTemplateId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepDeployPackageActionActionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._communityActionTemplateId = undefined;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._communityActionTemplateId = value.communityActionTemplateId;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // community_action_template_id - computed: true, optional: true, required: false
  private _communityActionTemplateId?: string; 
  public get communityActionTemplateId() {
    return this.getStringAttribute('community_action_template_id');
  }
  public set communityActionTemplateId(value: string) {
    this._communityActionTemplateId = value;
  }
  public resetCommunityActionTemplateId() {
    this._communityActionTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityActionTemplateIdInput() {
    return this._communityActionTemplateId;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DeploymentProcessStepDeployPackageActionContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#image DeploymentProcess#image}
  */
  readonly image?: string;
}

export function deploymentProcessStepDeployPackageActionContainerToTerraform(struct?: DeploymentProcessStepDeployPackageActionContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function deploymentProcessStepDeployPackageActionContainerToHclTerraform(struct?: DeploymentProcessStepDeployPackageActionContainer | cdktf.IResolvable): any {
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

export class DeploymentProcessStepDeployPackageActionContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepDeployPackageActionContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeploymentProcessStepDeployPackageActionContainer | cdktf.IResolvable | undefined) {
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

  // feed_id - computed: false, optional: true, required: false
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

  // image - computed: false, optional: true, required: false
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

export class DeploymentProcessStepDeployPackageActionContainerList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepDeployPackageActionContainer[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepDeployPackageActionContainerOutputReference {
    return new DeploymentProcessStepDeployPackageActionContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepDeployPackageActionGitDependency {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#default_branch DeploymentProcess#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from. Supports glob patten syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#file_path_filters DeploymentProcess#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_id DeploymentProcess#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_type DeploymentProcess#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The Git URI for the repository where this resource is sourced from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#repository_uri DeploymentProcess#repository_uri}
  */
  readonly repositoryUri: string;
}

export function deploymentProcessStepDeployPackageActionGitDependencyToTerraform(struct?: DeploymentProcessStepDeployPackageActionGitDependencyOutputReference | DeploymentProcessStepDeployPackageActionGitDependency): any {
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


export function deploymentProcessStepDeployPackageActionGitDependencyToHclTerraform(struct?: DeploymentProcessStepDeployPackageActionGitDependencyOutputReference | DeploymentProcessStepDeployPackageActionGitDependency): any {
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
      type: "list",
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

export class DeploymentProcessStepDeployPackageActionGitDependencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepDeployPackageActionGitDependency | undefined {
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

  public set internalValue(value: DeploymentProcessStepDeployPackageActionGitDependency | undefined) {
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

  // default_branch - computed: false, optional: false, required: true
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

  // file_path_filters - computed: false, optional: true, required: false
  private _filePathFilters?: string[]; 
  public get filePathFilters() {
    return this.getListAttribute('file_path_filters');
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

  // git_credential_id - computed: false, optional: true, required: false
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

  // git_credential_type - computed: false, optional: false, required: true
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

  // repository_uri - computed: false, optional: false, required: true
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
export interface DeploymentProcessStepDeployPackageActionPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepDeployPackageActionPackageToTerraform(struct?: DeploymentProcessStepDeployPackageActionPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepDeployPackageActionPackageToHclTerraform(struct?: DeploymentProcessStepDeployPackageActionPackage | cdktf.IResolvable): any {
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

export class DeploymentProcessStepDeployPackageActionPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepDeployPackageActionPackage | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepDeployPackageActionPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

export class DeploymentProcessStepDeployPackageActionPackageList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepDeployPackageActionPackage[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepDeployPackageActionPackageOutputReference {
    return new DeploymentProcessStepDeployPackageActionPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepDeployPackageActionPrimaryPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepDeployPackageActionPrimaryPackageToTerraform(struct?: DeploymentProcessStepDeployPackageActionPrimaryPackageOutputReference | DeploymentProcessStepDeployPackageActionPrimaryPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepDeployPackageActionPrimaryPackageToHclTerraform(struct?: DeploymentProcessStepDeployPackageActionPrimaryPackageOutputReference | DeploymentProcessStepDeployPackageActionPrimaryPackage): any {
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

export class DeploymentProcessStepDeployPackageActionPrimaryPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepDeployPackageActionPrimaryPackage | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepDeployPackageActionPrimaryPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._packageId = undefined;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acquisitionLocation = value.acquisitionLocation;
      this._feedId = value.feedId;
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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
export interface DeploymentProcessStepDeployPackageActionWindowsService {
  /**
  * The command line arguments that will be passed to the service when it starts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#arguments DeploymentProcess#arguments}
  */
  readonly arguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#create_or_update_service DeploymentProcess#create_or_update_service}
  */
  readonly createOrUpdateService?: boolean | cdktf.IResolvable;
  /**
  * The Windows/domain account of the custom user that the service will run under
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#custom_account_name DeploymentProcess#custom_account_name}
  */
  readonly customAccountName?: string;
  /**
  * The password for the custom account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#custom_account_password DeploymentProcess#custom_account_password}
  */
  readonly customAccountPassword?: string;
  /**
  * Any dependencies that the service has. Separate the names using forward slashes (/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#dependencies DeploymentProcess#dependencies}
  */
  readonly dependencies?: string;
  /**
  * User-friendly description of the service (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#description DeploymentProcess#description}
  */
  readonly description?: string;
  /**
  * The display name of the service (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#display_name DeploymentProcess#display_name}
  */
  readonly displayName?: string;
  /**
  * The path to the executable relative to the package installation directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#executable_path DeploymentProcess#executable_path}
  */
  readonly executablePath: string;
  /**
  * Which built-in account will the service run under. Can be LocalSystem, NT Authority\NetworkService, NT Authority\LocalService, _CUSTOM or an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#service_account DeploymentProcess#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#service_name DeploymentProcess#service_name}
  */
  readonly serviceName: string;
  /**
  * When will the service start. Can be auto, delayed-auto, manual, unchanged or an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#start_mode DeploymentProcess#start_mode}
  */
  readonly startMode?: string;
}

export function deploymentProcessStepDeployPackageActionWindowsServiceToTerraform(struct?: DeploymentProcessStepDeployPackageActionWindowsServiceOutputReference | DeploymentProcessStepDeployPackageActionWindowsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.stringToTerraform(struct!.arguments),
    create_or_update_service: cdktf.booleanToTerraform(struct!.createOrUpdateService),
    custom_account_name: cdktf.stringToTerraform(struct!.customAccountName),
    custom_account_password: cdktf.stringToTerraform(struct!.customAccountPassword),
    dependencies: cdktf.stringToTerraform(struct!.dependencies),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    executable_path: cdktf.stringToTerraform(struct!.executablePath),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    start_mode: cdktf.stringToTerraform(struct!.startMode),
  }
}


export function deploymentProcessStepDeployPackageActionWindowsServiceToHclTerraform(struct?: DeploymentProcessStepDeployPackageActionWindowsServiceOutputReference | DeploymentProcessStepDeployPackageActionWindowsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.stringToHclTerraform(struct!.arguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_or_update_service: {
      value: cdktf.booleanToHclTerraform(struct!.createOrUpdateService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_account_name: {
      value: cdktf.stringToHclTerraform(struct!.customAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_account_password: {
      value: cdktf.stringToHclTerraform(struct!.customAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependencies: {
      value: cdktf.stringToHclTerraform(struct!.dependencies),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executable_path: {
      value: cdktf.stringToHclTerraform(struct!.executablePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_mode: {
      value: cdktf.stringToHclTerraform(struct!.startMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepDeployPackageActionWindowsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepDeployPackageActionWindowsService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._createOrUpdateService !== undefined) {
      hasAnyValues = true;
      internalValueResult.createOrUpdateService = this._createOrUpdateService;
    }
    if (this._customAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAccountName = this._customAccountName;
    }
    if (this._customAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAccountPassword = this._customAccountPassword;
    }
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._executablePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.executablePath = this._executablePath;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._startMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMode = this._startMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepDeployPackageActionWindowsService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._createOrUpdateService = undefined;
      this._customAccountName = undefined;
      this._customAccountPassword = undefined;
      this._dependencies = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._executablePath = undefined;
      this._serviceAccount = undefined;
      this._serviceName = undefined;
      this._startMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._createOrUpdateService = value.createOrUpdateService;
      this._customAccountName = value.customAccountName;
      this._customAccountPassword = value.customAccountPassword;
      this._dependencies = value.dependencies;
      this._description = value.description;
      this._displayName = value.displayName;
      this._executablePath = value.executablePath;
      this._serviceAccount = value.serviceAccount;
      this._serviceName = value.serviceName;
      this._startMode = value.startMode;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // create_or_update_service - computed: true, optional: true, required: false
  private _createOrUpdateService?: boolean | cdktf.IResolvable; 
  public get createOrUpdateService() {
    return this.getBooleanAttribute('create_or_update_service');
  }
  public set createOrUpdateService(value: boolean | cdktf.IResolvable) {
    this._createOrUpdateService = value;
  }
  public resetCreateOrUpdateService() {
    this._createOrUpdateService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOrUpdateServiceInput() {
    return this._createOrUpdateService;
  }

  // custom_account_name - computed: false, optional: true, required: false
  private _customAccountName?: string; 
  public get customAccountName() {
    return this.getStringAttribute('custom_account_name');
  }
  public set customAccountName(value: string) {
    this._customAccountName = value;
  }
  public resetCustomAccountName() {
    this._customAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAccountNameInput() {
    return this._customAccountName;
  }

  // custom_account_password - computed: true, optional: true, required: false
  private _customAccountPassword?: string; 
  public get customAccountPassword() {
    return this.getStringAttribute('custom_account_password');
  }
  public set customAccountPassword(value: string) {
    this._customAccountPassword = value;
  }
  public resetCustomAccountPassword() {
    this._customAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAccountPasswordInput() {
    return this._customAccountPassword;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies?: string; 
  public get dependencies() {
    return this.getStringAttribute('dependencies');
  }
  public set dependencies(value: string) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // executable_path - computed: false, optional: false, required: true
  private _executablePath?: string; 
  public get executablePath() {
    return this.getStringAttribute('executable_path');
  }
  public set executablePath(value: string) {
    this._executablePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executablePathInput() {
    return this._executablePath;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // start_mode - computed: false, optional: true, required: false
  private _startMode?: string; 
  public get startMode() {
    return this.getStringAttribute('start_mode');
  }
  public set startMode(value: string) {
    this._startMode = value;
  }
  public resetStartMode() {
    this._startMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startModeInput() {
    return this._startMode;
  }
}
export interface DeploymentProcessStepDeployPackageAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#can_be_used_for_project_versioning DeploymentProcess#can_be_used_for_project_versioning}
  */
  readonly canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable;
  /**
  * The channels associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#channels DeploymentProcess#channels}
  */
  readonly channels?: string[];
  /**
  * The condition associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#condition DeploymentProcess#condition}
  */
  readonly condition?: string;
  /**
  * The environments within which this deployment action will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#environments DeploymentProcess#environments}
  */
  readonly environments?: string[];
  /**
  * The environments that this step will be skipped in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#excluded_environments DeploymentProcess#excluded_environments}
  */
  readonly excludedEnvironments?: string[];
  /**
  * A list of enabled features for this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#features DeploymentProcess#features}
  */
  readonly features?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates the disabled status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_disabled DeploymentProcess#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the required status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_required DeploymentProcess#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * The notes associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#notes DeploymentProcess#notes}
  */
  readonly notes?: string;
  /**
  * The properties associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Order used by terraform to ensure correct ordering of actions. This property must be either omitted from all actions, or provided on all actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#sort_order DeploymentProcess#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#tenant_tags DeploymentProcess#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * action_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#action_template DeploymentProcess#action_template}
  */
  readonly actionTemplate?: DeploymentProcessStepDeployPackageActionActionTemplate;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#container DeploymentProcess#container}
  */
  readonly container?: DeploymentProcessStepDeployPackageActionContainer[] | cdktf.IResolvable;
  /**
  * git_dependency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_dependency DeploymentProcess#git_dependency}
  */
  readonly gitDependency?: DeploymentProcessStepDeployPackageActionGitDependency;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package DeploymentProcess#package}
  */
  readonly package?: DeploymentProcessStepDeployPackageActionPackage[] | cdktf.IResolvable;
  /**
  * primary_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#primary_package DeploymentProcess#primary_package}
  */
  readonly primaryPackage: DeploymentProcessStepDeployPackageActionPrimaryPackage;
  /**
  * windows_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#windows_service DeploymentProcess#windows_service}
  */
  readonly windowsService?: DeploymentProcessStepDeployPackageActionWindowsService;
}

export function deploymentProcessStepDeployPackageActionToTerraform(struct?: DeploymentProcessStepDeployPackageAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_be_used_for_project_versioning: cdktf.booleanToTerraform(struct!.canBeUsedForProjectVersioning),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    condition: cdktf.stringToTerraform(struct!.condition),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    excluded_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedEnvironments),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    id: cdktf.stringToTerraform(struct!.id),
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
    tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantTags),
    action_template: deploymentProcessStepDeployPackageActionActionTemplateToTerraform(struct!.actionTemplate),
    container: cdktf.listMapper(deploymentProcessStepDeployPackageActionContainerToTerraform, true)(struct!.container),
    git_dependency: deploymentProcessStepDeployPackageActionGitDependencyToTerraform(struct!.gitDependency),
    package: cdktf.listMapper(deploymentProcessStepDeployPackageActionPackageToTerraform, true)(struct!.package),
    primary_package: deploymentProcessStepDeployPackageActionPrimaryPackageToTerraform(struct!.primaryPackage),
    windows_service: deploymentProcessStepDeployPackageActionWindowsServiceToTerraform(struct!.windowsService),
  }
}


export function deploymentProcessStepDeployPackageActionToHclTerraform(struct?: DeploymentProcessStepDeployPackageAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_be_used_for_project_versioning: {
      value: cdktf.booleanToHclTerraform(struct!.canBeUsedForProjectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedEnvironments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sort_order: {
      value: cdktf.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    action_template: {
      value: deploymentProcessStepDeployPackageActionActionTemplateToHclTerraform(struct!.actionTemplate),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepDeployPackageActionActionTemplateList",
    },
    container: {
      value: cdktf.listMapperHcl(deploymentProcessStepDeployPackageActionContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployPackageActionContainerList",
    },
    git_dependency: {
      value: deploymentProcessStepDeployPackageActionGitDependencyToHclTerraform(struct!.gitDependency),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepDeployPackageActionGitDependencyList",
    },
    package: {
      value: cdktf.listMapperHcl(deploymentProcessStepDeployPackageActionPackageToHclTerraform, true)(struct!.package),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployPackageActionPackageList",
    },
    primary_package: {
      value: deploymentProcessStepDeployPackageActionPrimaryPackageToHclTerraform(struct!.primaryPackage),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployPackageActionPrimaryPackageList",
    },
    windows_service: {
      value: deploymentProcessStepDeployPackageActionWindowsServiceToHclTerraform(struct!.windowsService),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepDeployPackageActionWindowsServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepDeployPackageActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepDeployPackageAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canBeUsedForProjectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.canBeUsedForProjectVersioning = this._canBeUsedForProjectVersioning;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._excludedEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEnvironments = this._excludedEnvironments;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._tenantTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantTags = this._tenantTags;
    }
    if (this._actionTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTemplate = this._actionTemplate?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._gitDependency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitDependency = this._gitDependency?.internalValue;
    }
    if (this._package?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package?.internalValue;
    }
    if (this._primaryPackage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryPackage = this._primaryPackage?.internalValue;
    }
    if (this._windowsService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsService = this._windowsService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepDeployPackageAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canBeUsedForProjectVersioning = undefined;
      this._channels = undefined;
      this._condition = undefined;
      this._environments = undefined;
      this._excludedEnvironments = undefined;
      this._features = undefined;
      this._id = undefined;
      this._isDisabled = undefined;
      this._isRequired = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._properties = undefined;
      this._sortOrder = undefined;
      this._tenantTags = undefined;
      this._actionTemplate.internalValue = undefined;
      this._container.internalValue = undefined;
      this._gitDependency.internalValue = undefined;
      this._package.internalValue = undefined;
      this._primaryPackage.internalValue = undefined;
      this._windowsService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canBeUsedForProjectVersioning = value.canBeUsedForProjectVersioning;
      this._channels = value.channels;
      this._condition = value.condition;
      this._environments = value.environments;
      this._excludedEnvironments = value.excludedEnvironments;
      this._features = value.features;
      this._id = value.id;
      this._isDisabled = value.isDisabled;
      this._isRequired = value.isRequired;
      this._name = value.name;
      this._notes = value.notes;
      this._properties = value.properties;
      this._sortOrder = value.sortOrder;
      this._tenantTags = value.tenantTags;
      this._actionTemplate.internalValue = value.actionTemplate;
      this._container.internalValue = value.container;
      this._gitDependency.internalValue = value.gitDependency;
      this._package.internalValue = value.package;
      this._primaryPackage.internalValue = value.primaryPackage;
      this._windowsService.internalValue = value.windowsService;
    }
  }

  // can_be_used_for_project_versioning - computed: true, optional: true, required: false
  private _canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable; 
  public get canBeUsedForProjectVersioning() {
    return this.getBooleanAttribute('can_be_used_for_project_versioning');
  }
  public set canBeUsedForProjectVersioning(value: boolean | cdktf.IResolvable) {
    this._canBeUsedForProjectVersioning = value;
  }
  public resetCanBeUsedForProjectVersioning() {
    this._canBeUsedForProjectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeUsedForProjectVersioningInput() {
    return this._canBeUsedForProjectVersioning;
  }

  // channels - computed: true, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
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

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
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
    return this.getListAttribute('excluded_environments');
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

  // features - computed: true, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // is_disabled - computed: false, optional: true, required: false
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

  // is_required - computed: false, optional: true, required: false
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

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
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

  // action_template - computed: false, optional: true, required: false
  private _actionTemplate = new DeploymentProcessStepDeployPackageActionActionTemplateOutputReference(this, "action_template");
  public get actionTemplate() {
    return this._actionTemplate;
  }
  public putActionTemplate(value: DeploymentProcessStepDeployPackageActionActionTemplate) {
    this._actionTemplate.internalValue = value;
  }
  public resetActionTemplate() {
    this._actionTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTemplateInput() {
    return this._actionTemplate.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DeploymentProcessStepDeployPackageActionContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: DeploymentProcessStepDeployPackageActionContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // git_dependency - computed: false, optional: true, required: false
  private _gitDependency = new DeploymentProcessStepDeployPackageActionGitDependencyOutputReference(this, "git_dependency");
  public get gitDependency() {
    return this._gitDependency;
  }
  public putGitDependency(value: DeploymentProcessStepDeployPackageActionGitDependency) {
    this._gitDependency.internalValue = value;
  }
  public resetGitDependency() {
    this._gitDependency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDependencyInput() {
    return this._gitDependency.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new DeploymentProcessStepDeployPackageActionPackageList(this, "package", false);
  public get package() {
    return this._package;
  }
  public putPackage(value: DeploymentProcessStepDeployPackageActionPackage[] | cdktf.IResolvable) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // primary_package - computed: false, optional: false, required: true
  private _primaryPackage = new DeploymentProcessStepDeployPackageActionPrimaryPackageOutputReference(this, "primary_package");
  public get primaryPackage() {
    return this._primaryPackage;
  }
  public putPrimaryPackage(value: DeploymentProcessStepDeployPackageActionPrimaryPackage) {
    this._primaryPackage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPackageInput() {
    return this._primaryPackage.internalValue;
  }

  // windows_service - computed: false, optional: true, required: false
  private _windowsService = new DeploymentProcessStepDeployPackageActionWindowsServiceOutputReference(this, "windows_service");
  public get windowsService() {
    return this._windowsService;
  }
  public putWindowsService(value: DeploymentProcessStepDeployPackageActionWindowsService) {
    this._windowsService.internalValue = value;
  }
  public resetWindowsService() {
    this._windowsService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsServiceInput() {
    return this._windowsService.internalValue;
  }
}

export class DeploymentProcessStepDeployPackageActionList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepDeployPackageAction[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepDeployPackageActionOutputReference {
    return new DeploymentProcessStepDeployPackageActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepDeployWindowsServiceActionActionTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#community_action_template_id DeploymentProcess#community_action_template_id}
  */
  readonly communityActionTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#version DeploymentProcess#version}
  */
  readonly version?: number;
}

export function deploymentProcessStepDeployWindowsServiceActionActionTemplateToTerraform(struct?: DeploymentProcessStepDeployWindowsServiceActionActionTemplateOutputReference | DeploymentProcessStepDeployWindowsServiceActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_action_template_id: cdktf.stringToTerraform(struct!.communityActionTemplateId),
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function deploymentProcessStepDeployWindowsServiceActionActionTemplateToHclTerraform(struct?: DeploymentProcessStepDeployWindowsServiceActionActionTemplateOutputReference | DeploymentProcessStepDeployWindowsServiceActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_action_template_id: {
      value: cdktf.stringToHclTerraform(struct!.communityActionTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepDeployWindowsServiceActionActionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepDeployWindowsServiceActionActionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityActionTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityActionTemplateId = this._communityActionTemplateId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepDeployWindowsServiceActionActionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._communityActionTemplateId = undefined;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._communityActionTemplateId = value.communityActionTemplateId;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // community_action_template_id - computed: true, optional: true, required: false
  private _communityActionTemplateId?: string; 
  public get communityActionTemplateId() {
    return this.getStringAttribute('community_action_template_id');
  }
  public set communityActionTemplateId(value: string) {
    this._communityActionTemplateId = value;
  }
  public resetCommunityActionTemplateId() {
    this._communityActionTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityActionTemplateIdInput() {
    return this._communityActionTemplateId;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DeploymentProcessStepDeployWindowsServiceActionContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#image DeploymentProcess#image}
  */
  readonly image?: string;
}

export function deploymentProcessStepDeployWindowsServiceActionContainerToTerraform(struct?: DeploymentProcessStepDeployWindowsServiceActionContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function deploymentProcessStepDeployWindowsServiceActionContainerToHclTerraform(struct?: DeploymentProcessStepDeployWindowsServiceActionContainer | cdktf.IResolvable): any {
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

export class DeploymentProcessStepDeployWindowsServiceActionContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepDeployWindowsServiceActionContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeploymentProcessStepDeployWindowsServiceActionContainer | cdktf.IResolvable | undefined) {
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

  // feed_id - computed: false, optional: true, required: false
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

  // image - computed: false, optional: true, required: false
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

export class DeploymentProcessStepDeployWindowsServiceActionContainerList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepDeployWindowsServiceActionContainer[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepDeployWindowsServiceActionContainerOutputReference {
    return new DeploymentProcessStepDeployWindowsServiceActionContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepDeployWindowsServiceActionGitDependency {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#default_branch DeploymentProcess#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from. Supports glob patten syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#file_path_filters DeploymentProcess#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_id DeploymentProcess#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_type DeploymentProcess#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The Git URI for the repository where this resource is sourced from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#repository_uri DeploymentProcess#repository_uri}
  */
  readonly repositoryUri: string;
}

export function deploymentProcessStepDeployWindowsServiceActionGitDependencyToTerraform(struct?: DeploymentProcessStepDeployWindowsServiceActionGitDependencyOutputReference | DeploymentProcessStepDeployWindowsServiceActionGitDependency): any {
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


export function deploymentProcessStepDeployWindowsServiceActionGitDependencyToHclTerraform(struct?: DeploymentProcessStepDeployWindowsServiceActionGitDependencyOutputReference | DeploymentProcessStepDeployWindowsServiceActionGitDependency): any {
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
      type: "list",
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

export class DeploymentProcessStepDeployWindowsServiceActionGitDependencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepDeployWindowsServiceActionGitDependency | undefined {
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

  public set internalValue(value: DeploymentProcessStepDeployWindowsServiceActionGitDependency | undefined) {
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

  // default_branch - computed: false, optional: false, required: true
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

  // file_path_filters - computed: false, optional: true, required: false
  private _filePathFilters?: string[]; 
  public get filePathFilters() {
    return this.getListAttribute('file_path_filters');
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

  // git_credential_id - computed: false, optional: true, required: false
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

  // git_credential_type - computed: false, optional: false, required: true
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

  // repository_uri - computed: false, optional: false, required: true
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
export interface DeploymentProcessStepDeployWindowsServiceActionPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepDeployWindowsServiceActionPackageToTerraform(struct?: DeploymentProcessStepDeployWindowsServiceActionPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepDeployWindowsServiceActionPackageToHclTerraform(struct?: DeploymentProcessStepDeployWindowsServiceActionPackage | cdktf.IResolvable): any {
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

export class DeploymentProcessStepDeployWindowsServiceActionPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepDeployWindowsServiceActionPackage | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepDeployWindowsServiceActionPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

export class DeploymentProcessStepDeployWindowsServiceActionPackageList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepDeployWindowsServiceActionPackage[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepDeployWindowsServiceActionPackageOutputReference {
    return new DeploymentProcessStepDeployWindowsServiceActionPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepDeployWindowsServiceActionPrimaryPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepDeployWindowsServiceActionPrimaryPackageToTerraform(struct?: DeploymentProcessStepDeployWindowsServiceActionPrimaryPackageOutputReference | DeploymentProcessStepDeployWindowsServiceActionPrimaryPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepDeployWindowsServiceActionPrimaryPackageToHclTerraform(struct?: DeploymentProcessStepDeployWindowsServiceActionPrimaryPackageOutputReference | DeploymentProcessStepDeployWindowsServiceActionPrimaryPackage): any {
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

export class DeploymentProcessStepDeployWindowsServiceActionPrimaryPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepDeployWindowsServiceActionPrimaryPackage | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepDeployWindowsServiceActionPrimaryPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._packageId = undefined;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acquisitionLocation = value.acquisitionLocation;
      this._feedId = value.feedId;
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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
export interface DeploymentProcessStepDeployWindowsServiceAction {
  /**
  * The command line arguments that will be passed to the service when it starts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#arguments DeploymentProcess#arguments}
  */
  readonly arguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#can_be_used_for_project_versioning DeploymentProcess#can_be_used_for_project_versioning}
  */
  readonly canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable;
  /**
  * The channels associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#channels DeploymentProcess#channels}
  */
  readonly channels?: string[];
  /**
  * The condition associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#condition DeploymentProcess#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#create_or_update_service DeploymentProcess#create_or_update_service}
  */
  readonly createOrUpdateService?: boolean | cdktf.IResolvable;
  /**
  * The Windows/domain account of the custom user that the service will run under
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#custom_account_name DeploymentProcess#custom_account_name}
  */
  readonly customAccountName?: string;
  /**
  * The password for the custom account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#custom_account_password DeploymentProcess#custom_account_password}
  */
  readonly customAccountPassword?: string;
  /**
  * Any dependencies that the service has. Separate the names using forward slashes (/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#dependencies DeploymentProcess#dependencies}
  */
  readonly dependencies?: string;
  /**
  * User-friendly description of the service (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#description DeploymentProcess#description}
  */
  readonly description?: string;
  /**
  * The display name of the service (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#display_name DeploymentProcess#display_name}
  */
  readonly displayName?: string;
  /**
  * The environments within which this deployment action will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#environments DeploymentProcess#environments}
  */
  readonly environments?: string[];
  /**
  * The environments that this step will be skipped in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#excluded_environments DeploymentProcess#excluded_environments}
  */
  readonly excludedEnvironments?: string[];
  /**
  * The path to the executable relative to the package installation directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#executable_path DeploymentProcess#executable_path}
  */
  readonly executablePath: string;
  /**
  * A list of enabled features for this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#features DeploymentProcess#features}
  */
  readonly features?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates the disabled status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_disabled DeploymentProcess#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the required status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_required DeploymentProcess#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * The notes associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#notes DeploymentProcess#notes}
  */
  readonly notes?: string;
  /**
  * The properties associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Which built-in account will the service run under. Can be LocalSystem, NT Authority\NetworkService, NT Authority\LocalService, _CUSTOM or an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#service_account DeploymentProcess#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#service_name DeploymentProcess#service_name}
  */
  readonly serviceName: string;
  /**
  * Order used by terraform to ensure correct ordering of actions. This property must be either omitted from all actions, or provided on all actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#sort_order DeploymentProcess#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * When will the service start. Can be auto, delayed-auto, manual, unchanged or an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#start_mode DeploymentProcess#start_mode}
  */
  readonly startMode?: string;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#tenant_tags DeploymentProcess#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * action_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#action_template DeploymentProcess#action_template}
  */
  readonly actionTemplate?: DeploymentProcessStepDeployWindowsServiceActionActionTemplate;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#container DeploymentProcess#container}
  */
  readonly container?: DeploymentProcessStepDeployWindowsServiceActionContainer[] | cdktf.IResolvable;
  /**
  * git_dependency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_dependency DeploymentProcess#git_dependency}
  */
  readonly gitDependency?: DeploymentProcessStepDeployWindowsServiceActionGitDependency;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package DeploymentProcess#package}
  */
  readonly package?: DeploymentProcessStepDeployWindowsServiceActionPackage[] | cdktf.IResolvable;
  /**
  * primary_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#primary_package DeploymentProcess#primary_package}
  */
  readonly primaryPackage: DeploymentProcessStepDeployWindowsServiceActionPrimaryPackage;
}

export function deploymentProcessStepDeployWindowsServiceActionToTerraform(struct?: DeploymentProcessStepDeployWindowsServiceAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.stringToTerraform(struct!.arguments),
    can_be_used_for_project_versioning: cdktf.booleanToTerraform(struct!.canBeUsedForProjectVersioning),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    condition: cdktf.stringToTerraform(struct!.condition),
    create_or_update_service: cdktf.booleanToTerraform(struct!.createOrUpdateService),
    custom_account_name: cdktf.stringToTerraform(struct!.customAccountName),
    custom_account_password: cdktf.stringToTerraform(struct!.customAccountPassword),
    dependencies: cdktf.stringToTerraform(struct!.dependencies),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    excluded_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedEnvironments),
    executable_path: cdktf.stringToTerraform(struct!.executablePath),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    id: cdktf.stringToTerraform(struct!.id),
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
    start_mode: cdktf.stringToTerraform(struct!.startMode),
    tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantTags),
    action_template: deploymentProcessStepDeployWindowsServiceActionActionTemplateToTerraform(struct!.actionTemplate),
    container: cdktf.listMapper(deploymentProcessStepDeployWindowsServiceActionContainerToTerraform, true)(struct!.container),
    git_dependency: deploymentProcessStepDeployWindowsServiceActionGitDependencyToTerraform(struct!.gitDependency),
    package: cdktf.listMapper(deploymentProcessStepDeployWindowsServiceActionPackageToTerraform, true)(struct!.package),
    primary_package: deploymentProcessStepDeployWindowsServiceActionPrimaryPackageToTerraform(struct!.primaryPackage),
  }
}


export function deploymentProcessStepDeployWindowsServiceActionToHclTerraform(struct?: DeploymentProcessStepDeployWindowsServiceAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.stringToHclTerraform(struct!.arguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_be_used_for_project_versioning: {
      value: cdktf.booleanToHclTerraform(struct!.canBeUsedForProjectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_or_update_service: {
      value: cdktf.booleanToHclTerraform(struct!.createOrUpdateService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_account_name: {
      value: cdktf.stringToHclTerraform(struct!.customAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_account_password: {
      value: cdktf.stringToHclTerraform(struct!.customAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependencies: {
      value: cdktf.stringToHclTerraform(struct!.dependencies),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedEnvironments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    executable_path: {
      value: cdktf.stringToHclTerraform(struct!.executablePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktf.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_mode: {
      value: cdktf.stringToHclTerraform(struct!.startMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    action_template: {
      value: deploymentProcessStepDeployWindowsServiceActionActionTemplateToHclTerraform(struct!.actionTemplate),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepDeployWindowsServiceActionActionTemplateList",
    },
    container: {
      value: cdktf.listMapperHcl(deploymentProcessStepDeployWindowsServiceActionContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployWindowsServiceActionContainerList",
    },
    git_dependency: {
      value: deploymentProcessStepDeployWindowsServiceActionGitDependencyToHclTerraform(struct!.gitDependency),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepDeployWindowsServiceActionGitDependencyList",
    },
    package: {
      value: cdktf.listMapperHcl(deploymentProcessStepDeployWindowsServiceActionPackageToHclTerraform, true)(struct!.package),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployWindowsServiceActionPackageList",
    },
    primary_package: {
      value: deploymentProcessStepDeployWindowsServiceActionPrimaryPackageToHclTerraform(struct!.primaryPackage),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployWindowsServiceActionPrimaryPackageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepDeployWindowsServiceActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepDeployWindowsServiceAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._canBeUsedForProjectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.canBeUsedForProjectVersioning = this._canBeUsedForProjectVersioning;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._createOrUpdateService !== undefined) {
      hasAnyValues = true;
      internalValueResult.createOrUpdateService = this._createOrUpdateService;
    }
    if (this._customAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAccountName = this._customAccountName;
    }
    if (this._customAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAccountPassword = this._customAccountPassword;
    }
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._excludedEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEnvironments = this._excludedEnvironments;
    }
    if (this._executablePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.executablePath = this._executablePath;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._startMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMode = this._startMode;
    }
    if (this._tenantTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantTags = this._tenantTags;
    }
    if (this._actionTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTemplate = this._actionTemplate?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._gitDependency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitDependency = this._gitDependency?.internalValue;
    }
    if (this._package?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package?.internalValue;
    }
    if (this._primaryPackage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryPackage = this._primaryPackage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepDeployWindowsServiceAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._canBeUsedForProjectVersioning = undefined;
      this._channels = undefined;
      this._condition = undefined;
      this._createOrUpdateService = undefined;
      this._customAccountName = undefined;
      this._customAccountPassword = undefined;
      this._dependencies = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._environments = undefined;
      this._excludedEnvironments = undefined;
      this._executablePath = undefined;
      this._features = undefined;
      this._id = undefined;
      this._isDisabled = undefined;
      this._isRequired = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._properties = undefined;
      this._serviceAccount = undefined;
      this._serviceName = undefined;
      this._sortOrder = undefined;
      this._startMode = undefined;
      this._tenantTags = undefined;
      this._actionTemplate.internalValue = undefined;
      this._container.internalValue = undefined;
      this._gitDependency.internalValue = undefined;
      this._package.internalValue = undefined;
      this._primaryPackage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._canBeUsedForProjectVersioning = value.canBeUsedForProjectVersioning;
      this._channels = value.channels;
      this._condition = value.condition;
      this._createOrUpdateService = value.createOrUpdateService;
      this._customAccountName = value.customAccountName;
      this._customAccountPassword = value.customAccountPassword;
      this._dependencies = value.dependencies;
      this._description = value.description;
      this._displayName = value.displayName;
      this._environments = value.environments;
      this._excludedEnvironments = value.excludedEnvironments;
      this._executablePath = value.executablePath;
      this._features = value.features;
      this._id = value.id;
      this._isDisabled = value.isDisabled;
      this._isRequired = value.isRequired;
      this._name = value.name;
      this._notes = value.notes;
      this._properties = value.properties;
      this._serviceAccount = value.serviceAccount;
      this._serviceName = value.serviceName;
      this._sortOrder = value.sortOrder;
      this._startMode = value.startMode;
      this._tenantTags = value.tenantTags;
      this._actionTemplate.internalValue = value.actionTemplate;
      this._container.internalValue = value.container;
      this._gitDependency.internalValue = value.gitDependency;
      this._package.internalValue = value.package;
      this._primaryPackage.internalValue = value.primaryPackage;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // can_be_used_for_project_versioning - computed: true, optional: true, required: false
  private _canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable; 
  public get canBeUsedForProjectVersioning() {
    return this.getBooleanAttribute('can_be_used_for_project_versioning');
  }
  public set canBeUsedForProjectVersioning(value: boolean | cdktf.IResolvable) {
    this._canBeUsedForProjectVersioning = value;
  }
  public resetCanBeUsedForProjectVersioning() {
    this._canBeUsedForProjectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeUsedForProjectVersioningInput() {
    return this._canBeUsedForProjectVersioning;
  }

  // channels - computed: true, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
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

  // create_or_update_service - computed: true, optional: true, required: false
  private _createOrUpdateService?: boolean | cdktf.IResolvable; 
  public get createOrUpdateService() {
    return this.getBooleanAttribute('create_or_update_service');
  }
  public set createOrUpdateService(value: boolean | cdktf.IResolvable) {
    this._createOrUpdateService = value;
  }
  public resetCreateOrUpdateService() {
    this._createOrUpdateService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOrUpdateServiceInput() {
    return this._createOrUpdateService;
  }

  // custom_account_name - computed: false, optional: true, required: false
  private _customAccountName?: string; 
  public get customAccountName() {
    return this.getStringAttribute('custom_account_name');
  }
  public set customAccountName(value: string) {
    this._customAccountName = value;
  }
  public resetCustomAccountName() {
    this._customAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAccountNameInput() {
    return this._customAccountName;
  }

  // custom_account_password - computed: true, optional: true, required: false
  private _customAccountPassword?: string; 
  public get customAccountPassword() {
    return this.getStringAttribute('custom_account_password');
  }
  public set customAccountPassword(value: string) {
    this._customAccountPassword = value;
  }
  public resetCustomAccountPassword() {
    this._customAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAccountPasswordInput() {
    return this._customAccountPassword;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies?: string; 
  public get dependencies() {
    return this.getStringAttribute('dependencies');
  }
  public set dependencies(value: string) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
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
    return this.getListAttribute('excluded_environments');
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

  // executable_path - computed: false, optional: false, required: true
  private _executablePath?: string; 
  public get executablePath() {
    return this.getStringAttribute('executable_path');
  }
  public set executablePath(value: string) {
    this._executablePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executablePathInput() {
    return this._executablePath;
  }

  // features - computed: true, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // is_disabled - computed: false, optional: true, required: false
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

  // is_required - computed: false, optional: true, required: false
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // start_mode - computed: false, optional: true, required: false
  private _startMode?: string; 
  public get startMode() {
    return this.getStringAttribute('start_mode');
  }
  public set startMode(value: string) {
    this._startMode = value;
  }
  public resetStartMode() {
    this._startMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startModeInput() {
    return this._startMode;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
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

  // action_template - computed: false, optional: true, required: false
  private _actionTemplate = new DeploymentProcessStepDeployWindowsServiceActionActionTemplateOutputReference(this, "action_template");
  public get actionTemplate() {
    return this._actionTemplate;
  }
  public putActionTemplate(value: DeploymentProcessStepDeployWindowsServiceActionActionTemplate) {
    this._actionTemplate.internalValue = value;
  }
  public resetActionTemplate() {
    this._actionTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTemplateInput() {
    return this._actionTemplate.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DeploymentProcessStepDeployWindowsServiceActionContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: DeploymentProcessStepDeployWindowsServiceActionContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // git_dependency - computed: false, optional: true, required: false
  private _gitDependency = new DeploymentProcessStepDeployWindowsServiceActionGitDependencyOutputReference(this, "git_dependency");
  public get gitDependency() {
    return this._gitDependency;
  }
  public putGitDependency(value: DeploymentProcessStepDeployWindowsServiceActionGitDependency) {
    this._gitDependency.internalValue = value;
  }
  public resetGitDependency() {
    this._gitDependency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDependencyInput() {
    return this._gitDependency.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new DeploymentProcessStepDeployWindowsServiceActionPackageList(this, "package", false);
  public get package() {
    return this._package;
  }
  public putPackage(value: DeploymentProcessStepDeployWindowsServiceActionPackage[] | cdktf.IResolvable) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // primary_package - computed: false, optional: false, required: true
  private _primaryPackage = new DeploymentProcessStepDeployWindowsServiceActionPrimaryPackageOutputReference(this, "primary_package");
  public get primaryPackage() {
    return this._primaryPackage;
  }
  public putPrimaryPackage(value: DeploymentProcessStepDeployWindowsServiceActionPrimaryPackage) {
    this._primaryPackage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPackageInput() {
    return this._primaryPackage.internalValue;
  }
}

export class DeploymentProcessStepDeployWindowsServiceActionList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepDeployWindowsServiceAction[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepDeployWindowsServiceActionOutputReference {
    return new DeploymentProcessStepDeployWindowsServiceActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepManualInterventionActionActionTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#community_action_template_id DeploymentProcess#community_action_template_id}
  */
  readonly communityActionTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#version DeploymentProcess#version}
  */
  readonly version?: number;
}

export function deploymentProcessStepManualInterventionActionActionTemplateToTerraform(struct?: DeploymentProcessStepManualInterventionActionActionTemplateOutputReference | DeploymentProcessStepManualInterventionActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_action_template_id: cdktf.stringToTerraform(struct!.communityActionTemplateId),
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function deploymentProcessStepManualInterventionActionActionTemplateToHclTerraform(struct?: DeploymentProcessStepManualInterventionActionActionTemplateOutputReference | DeploymentProcessStepManualInterventionActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_action_template_id: {
      value: cdktf.stringToHclTerraform(struct!.communityActionTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepManualInterventionActionActionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepManualInterventionActionActionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityActionTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityActionTemplateId = this._communityActionTemplateId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepManualInterventionActionActionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._communityActionTemplateId = undefined;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._communityActionTemplateId = value.communityActionTemplateId;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // community_action_template_id - computed: true, optional: true, required: false
  private _communityActionTemplateId?: string; 
  public get communityActionTemplateId() {
    return this.getStringAttribute('community_action_template_id');
  }
  public set communityActionTemplateId(value: string) {
    this._communityActionTemplateId = value;
  }
  public resetCommunityActionTemplateId() {
    this._communityActionTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityActionTemplateIdInput() {
    return this._communityActionTemplateId;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DeploymentProcessStepManualInterventionActionContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#image DeploymentProcess#image}
  */
  readonly image?: string;
}

export function deploymentProcessStepManualInterventionActionContainerToTerraform(struct?: DeploymentProcessStepManualInterventionActionContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function deploymentProcessStepManualInterventionActionContainerToHclTerraform(struct?: DeploymentProcessStepManualInterventionActionContainer | cdktf.IResolvable): any {
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

export class DeploymentProcessStepManualInterventionActionContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepManualInterventionActionContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeploymentProcessStepManualInterventionActionContainer | cdktf.IResolvable | undefined) {
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

  // feed_id - computed: false, optional: true, required: false
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

  // image - computed: false, optional: true, required: false
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

export class DeploymentProcessStepManualInterventionActionContainerList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepManualInterventionActionContainer[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepManualInterventionActionContainerOutputReference {
    return new DeploymentProcessStepManualInterventionActionContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepManualInterventionActionGitDependency {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#default_branch DeploymentProcess#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from. Supports glob patten syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#file_path_filters DeploymentProcess#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_id DeploymentProcess#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_type DeploymentProcess#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The Git URI for the repository where this resource is sourced from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#repository_uri DeploymentProcess#repository_uri}
  */
  readonly repositoryUri: string;
}

export function deploymentProcessStepManualInterventionActionGitDependencyToTerraform(struct?: DeploymentProcessStepManualInterventionActionGitDependencyOutputReference | DeploymentProcessStepManualInterventionActionGitDependency): any {
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


export function deploymentProcessStepManualInterventionActionGitDependencyToHclTerraform(struct?: DeploymentProcessStepManualInterventionActionGitDependencyOutputReference | DeploymentProcessStepManualInterventionActionGitDependency): any {
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
      type: "list",
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

export class DeploymentProcessStepManualInterventionActionGitDependencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepManualInterventionActionGitDependency | undefined {
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

  public set internalValue(value: DeploymentProcessStepManualInterventionActionGitDependency | undefined) {
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

  // default_branch - computed: false, optional: false, required: true
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

  // file_path_filters - computed: false, optional: true, required: false
  private _filePathFilters?: string[]; 
  public get filePathFilters() {
    return this.getListAttribute('file_path_filters');
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

  // git_credential_id - computed: false, optional: true, required: false
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

  // git_credential_type - computed: false, optional: false, required: true
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

  // repository_uri - computed: false, optional: false, required: true
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
export interface DeploymentProcessStepManualInterventionActionPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepManualInterventionActionPackageToTerraform(struct?: DeploymentProcessStepManualInterventionActionPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepManualInterventionActionPackageToHclTerraform(struct?: DeploymentProcessStepManualInterventionActionPackage | cdktf.IResolvable): any {
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

export class DeploymentProcessStepManualInterventionActionPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepManualInterventionActionPackage | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepManualInterventionActionPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

export class DeploymentProcessStepManualInterventionActionPackageList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepManualInterventionActionPackage[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepManualInterventionActionPackageOutputReference {
    return new DeploymentProcessStepManualInterventionActionPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepManualInterventionAction {
  /**
  * Should other deployments be blocked while this manual intervention is awaiting action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#block_deployments DeploymentProcess#block_deployments}
  */
  readonly blockDeployments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#can_be_used_for_project_versioning DeploymentProcess#can_be_used_for_project_versioning}
  */
  readonly canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable;
  /**
  * The channels associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#channels DeploymentProcess#channels}
  */
  readonly channels?: string[];
  /**
  * The condition associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#condition DeploymentProcess#condition}
  */
  readonly condition?: string;
  /**
  * The environments within which this deployment action will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#environments DeploymentProcess#environments}
  */
  readonly environments?: string[];
  /**
  * The environments that this step will be skipped in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#excluded_environments DeploymentProcess#excluded_environments}
  */
  readonly excludedEnvironments?: string[];
  /**
  * A list of enabled features for this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#features DeploymentProcess#features}
  */
  readonly features?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instructions for the user to follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#instructions DeploymentProcess#instructions}
  */
  readonly instructions: string;
  /**
  * Indicates the disabled status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_disabled DeploymentProcess#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the required status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_required DeploymentProcess#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * The notes associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#notes DeploymentProcess#notes}
  */
  readonly notes?: string;
  /**
  * The properties associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The teams responsible to resolve this step. If no teams are specified, all users who have permission to deploy the project can resolve it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#responsible_teams DeploymentProcess#responsible_teams}
  */
  readonly responsibleTeams?: string;
  /**
  * Order used by terraform to ensure correct ordering of actions. This property must be either omitted from all actions, or provided on all actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#sort_order DeploymentProcess#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#tenant_tags DeploymentProcess#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * action_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#action_template DeploymentProcess#action_template}
  */
  readonly actionTemplate?: DeploymentProcessStepManualInterventionActionActionTemplate;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#container DeploymentProcess#container}
  */
  readonly container?: DeploymentProcessStepManualInterventionActionContainer[] | cdktf.IResolvable;
  /**
  * git_dependency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_dependency DeploymentProcess#git_dependency}
  */
  readonly gitDependency?: DeploymentProcessStepManualInterventionActionGitDependency;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package DeploymentProcess#package}
  */
  readonly package?: DeploymentProcessStepManualInterventionActionPackage[] | cdktf.IResolvable;
}

export function deploymentProcessStepManualInterventionActionToTerraform(struct?: DeploymentProcessStepManualInterventionAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_deployments: cdktf.stringToTerraform(struct!.blockDeployments),
    can_be_used_for_project_versioning: cdktf.booleanToTerraform(struct!.canBeUsedForProjectVersioning),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    condition: cdktf.stringToTerraform(struct!.condition),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    excluded_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedEnvironments),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    id: cdktf.stringToTerraform(struct!.id),
    instructions: cdktf.stringToTerraform(struct!.instructions),
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    responsible_teams: cdktf.stringToTerraform(struct!.responsibleTeams),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
    tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantTags),
    action_template: deploymentProcessStepManualInterventionActionActionTemplateToTerraform(struct!.actionTemplate),
    container: cdktf.listMapper(deploymentProcessStepManualInterventionActionContainerToTerraform, true)(struct!.container),
    git_dependency: deploymentProcessStepManualInterventionActionGitDependencyToTerraform(struct!.gitDependency),
    package: cdktf.listMapper(deploymentProcessStepManualInterventionActionPackageToTerraform, true)(struct!.package),
  }
}


export function deploymentProcessStepManualInterventionActionToHclTerraform(struct?: DeploymentProcessStepManualInterventionAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_deployments: {
      value: cdktf.stringToHclTerraform(struct!.blockDeployments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_be_used_for_project_versioning: {
      value: cdktf.booleanToHclTerraform(struct!.canBeUsedForProjectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedEnvironments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instructions: {
      value: cdktf.stringToHclTerraform(struct!.instructions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    responsible_teams: {
      value: cdktf.stringToHclTerraform(struct!.responsibleTeams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktf.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    action_template: {
      value: deploymentProcessStepManualInterventionActionActionTemplateToHclTerraform(struct!.actionTemplate),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepManualInterventionActionActionTemplateList",
    },
    container: {
      value: cdktf.listMapperHcl(deploymentProcessStepManualInterventionActionContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepManualInterventionActionContainerList",
    },
    git_dependency: {
      value: deploymentProcessStepManualInterventionActionGitDependencyToHclTerraform(struct!.gitDependency),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepManualInterventionActionGitDependencyList",
    },
    package: {
      value: cdktf.listMapperHcl(deploymentProcessStepManualInterventionActionPackageToHclTerraform, true)(struct!.package),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepManualInterventionActionPackageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepManualInterventionActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepManualInterventionAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockDeployments !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDeployments = this._blockDeployments;
    }
    if (this._canBeUsedForProjectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.canBeUsedForProjectVersioning = this._canBeUsedForProjectVersioning;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._excludedEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEnvironments = this._excludedEnvironments;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._responsibleTeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsibleTeams = this._responsibleTeams;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._tenantTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantTags = this._tenantTags;
    }
    if (this._actionTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTemplate = this._actionTemplate?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._gitDependency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitDependency = this._gitDependency?.internalValue;
    }
    if (this._package?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepManualInterventionAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockDeployments = undefined;
      this._canBeUsedForProjectVersioning = undefined;
      this._channels = undefined;
      this._condition = undefined;
      this._environments = undefined;
      this._excludedEnvironments = undefined;
      this._features = undefined;
      this._id = undefined;
      this._instructions = undefined;
      this._isDisabled = undefined;
      this._isRequired = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._properties = undefined;
      this._responsibleTeams = undefined;
      this._sortOrder = undefined;
      this._tenantTags = undefined;
      this._actionTemplate.internalValue = undefined;
      this._container.internalValue = undefined;
      this._gitDependency.internalValue = undefined;
      this._package.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockDeployments = value.blockDeployments;
      this._canBeUsedForProjectVersioning = value.canBeUsedForProjectVersioning;
      this._channels = value.channels;
      this._condition = value.condition;
      this._environments = value.environments;
      this._excludedEnvironments = value.excludedEnvironments;
      this._features = value.features;
      this._id = value.id;
      this._instructions = value.instructions;
      this._isDisabled = value.isDisabled;
      this._isRequired = value.isRequired;
      this._name = value.name;
      this._notes = value.notes;
      this._properties = value.properties;
      this._responsibleTeams = value.responsibleTeams;
      this._sortOrder = value.sortOrder;
      this._tenantTags = value.tenantTags;
      this._actionTemplate.internalValue = value.actionTemplate;
      this._container.internalValue = value.container;
      this._gitDependency.internalValue = value.gitDependency;
      this._package.internalValue = value.package;
    }
  }

  // block_deployments - computed: false, optional: true, required: false
  private _blockDeployments?: string; 
  public get blockDeployments() {
    return this.getStringAttribute('block_deployments');
  }
  public set blockDeployments(value: string) {
    this._blockDeployments = value;
  }
  public resetBlockDeployments() {
    this._blockDeployments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeploymentsInput() {
    return this._blockDeployments;
  }

  // can_be_used_for_project_versioning - computed: true, optional: true, required: false
  private _canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable; 
  public get canBeUsedForProjectVersioning() {
    return this.getBooleanAttribute('can_be_used_for_project_versioning');
  }
  public set canBeUsedForProjectVersioning(value: boolean | cdktf.IResolvable) {
    this._canBeUsedForProjectVersioning = value;
  }
  public resetCanBeUsedForProjectVersioning() {
    this._canBeUsedForProjectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeUsedForProjectVersioningInput() {
    return this._canBeUsedForProjectVersioning;
  }

  // channels - computed: true, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
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

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
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
    return this.getListAttribute('excluded_environments');
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

  // features - computed: true, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // instructions - computed: false, optional: false, required: true
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
  }

  // is_disabled - computed: false, optional: true, required: false
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

  // is_required - computed: false, optional: true, required: false
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

  // responsible_teams - computed: false, optional: true, required: false
  private _responsibleTeams?: string; 
  public get responsibleTeams() {
    return this.getStringAttribute('responsible_teams');
  }
  public set responsibleTeams(value: string) {
    this._responsibleTeams = value;
  }
  public resetResponsibleTeams() {
    this._responsibleTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsibleTeamsInput() {
    return this._responsibleTeams;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
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

  // action_template - computed: false, optional: true, required: false
  private _actionTemplate = new DeploymentProcessStepManualInterventionActionActionTemplateOutputReference(this, "action_template");
  public get actionTemplate() {
    return this._actionTemplate;
  }
  public putActionTemplate(value: DeploymentProcessStepManualInterventionActionActionTemplate) {
    this._actionTemplate.internalValue = value;
  }
  public resetActionTemplate() {
    this._actionTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTemplateInput() {
    return this._actionTemplate.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DeploymentProcessStepManualInterventionActionContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: DeploymentProcessStepManualInterventionActionContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // git_dependency - computed: false, optional: true, required: false
  private _gitDependency = new DeploymentProcessStepManualInterventionActionGitDependencyOutputReference(this, "git_dependency");
  public get gitDependency() {
    return this._gitDependency;
  }
  public putGitDependency(value: DeploymentProcessStepManualInterventionActionGitDependency) {
    this._gitDependency.internalValue = value;
  }
  public resetGitDependency() {
    this._gitDependency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDependencyInput() {
    return this._gitDependency.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new DeploymentProcessStepManualInterventionActionPackageList(this, "package", false);
  public get package() {
    return this._package;
  }
  public putPackage(value: DeploymentProcessStepManualInterventionActionPackage[] | cdktf.IResolvable) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }
}

export class DeploymentProcessStepManualInterventionActionList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepManualInterventionAction[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepManualInterventionActionOutputReference {
    return new DeploymentProcessStepManualInterventionActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepRunKubectlScriptActionActionTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#community_action_template_id DeploymentProcess#community_action_template_id}
  */
  readonly communityActionTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#version DeploymentProcess#version}
  */
  readonly version?: number;
}

export function deploymentProcessStepRunKubectlScriptActionActionTemplateToTerraform(struct?: DeploymentProcessStepRunKubectlScriptActionActionTemplateOutputReference | DeploymentProcessStepRunKubectlScriptActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_action_template_id: cdktf.stringToTerraform(struct!.communityActionTemplateId),
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function deploymentProcessStepRunKubectlScriptActionActionTemplateToHclTerraform(struct?: DeploymentProcessStepRunKubectlScriptActionActionTemplateOutputReference | DeploymentProcessStepRunKubectlScriptActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_action_template_id: {
      value: cdktf.stringToHclTerraform(struct!.communityActionTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepRunKubectlScriptActionActionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepRunKubectlScriptActionActionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityActionTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityActionTemplateId = this._communityActionTemplateId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepRunKubectlScriptActionActionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._communityActionTemplateId = undefined;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._communityActionTemplateId = value.communityActionTemplateId;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // community_action_template_id - computed: true, optional: true, required: false
  private _communityActionTemplateId?: string; 
  public get communityActionTemplateId() {
    return this.getStringAttribute('community_action_template_id');
  }
  public set communityActionTemplateId(value: string) {
    this._communityActionTemplateId = value;
  }
  public resetCommunityActionTemplateId() {
    this._communityActionTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityActionTemplateIdInput() {
    return this._communityActionTemplateId;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DeploymentProcessStepRunKubectlScriptActionContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#image DeploymentProcess#image}
  */
  readonly image?: string;
}

export function deploymentProcessStepRunKubectlScriptActionContainerToTerraform(struct?: DeploymentProcessStepRunKubectlScriptActionContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function deploymentProcessStepRunKubectlScriptActionContainerToHclTerraform(struct?: DeploymentProcessStepRunKubectlScriptActionContainer | cdktf.IResolvable): any {
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

export class DeploymentProcessStepRunKubectlScriptActionContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepRunKubectlScriptActionContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeploymentProcessStepRunKubectlScriptActionContainer | cdktf.IResolvable | undefined) {
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

  // feed_id - computed: false, optional: true, required: false
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

  // image - computed: false, optional: true, required: false
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

export class DeploymentProcessStepRunKubectlScriptActionContainerList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepRunKubectlScriptActionContainer[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepRunKubectlScriptActionContainerOutputReference {
    return new DeploymentProcessStepRunKubectlScriptActionContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepRunKubectlScriptActionGitDependency {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#default_branch DeploymentProcess#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from. Supports glob patten syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#file_path_filters DeploymentProcess#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_id DeploymentProcess#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_type DeploymentProcess#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The Git URI for the repository where this resource is sourced from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#repository_uri DeploymentProcess#repository_uri}
  */
  readonly repositoryUri: string;
}

export function deploymentProcessStepRunKubectlScriptActionGitDependencyToTerraform(struct?: DeploymentProcessStepRunKubectlScriptActionGitDependencyOutputReference | DeploymentProcessStepRunKubectlScriptActionGitDependency): any {
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


export function deploymentProcessStepRunKubectlScriptActionGitDependencyToHclTerraform(struct?: DeploymentProcessStepRunKubectlScriptActionGitDependencyOutputReference | DeploymentProcessStepRunKubectlScriptActionGitDependency): any {
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
      type: "list",
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

export class DeploymentProcessStepRunKubectlScriptActionGitDependencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepRunKubectlScriptActionGitDependency | undefined {
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

  public set internalValue(value: DeploymentProcessStepRunKubectlScriptActionGitDependency | undefined) {
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

  // default_branch - computed: false, optional: false, required: true
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

  // file_path_filters - computed: false, optional: true, required: false
  private _filePathFilters?: string[]; 
  public get filePathFilters() {
    return this.getListAttribute('file_path_filters');
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

  // git_credential_id - computed: false, optional: true, required: false
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

  // git_credential_type - computed: false, optional: false, required: true
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

  // repository_uri - computed: false, optional: false, required: true
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
export interface DeploymentProcessStepRunKubectlScriptActionPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * Whether to extract the package during deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#extract_during_deployment DeploymentProcess#extract_during_deployment}
  */
  readonly extractDuringDeployment?: boolean | cdktf.IResolvable;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepRunKubectlScriptActionPackageToTerraform(struct?: DeploymentProcessStepRunKubectlScriptActionPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    extract_during_deployment: cdktf.booleanToTerraform(struct!.extractDuringDeployment),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepRunKubectlScriptActionPackageToHclTerraform(struct?: DeploymentProcessStepRunKubectlScriptActionPackage | cdktf.IResolvable): any {
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
    extract_during_deployment: {
      value: cdktf.booleanToHclTerraform(struct!.extractDuringDeployment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feed_id: {
      value: cdktf.stringToHclTerraform(struct!.feedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DeploymentProcessStepRunKubectlScriptActionPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepRunKubectlScriptActionPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acquisitionLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.acquisitionLocation = this._acquisitionLocation;
    }
    if (this._extractDuringDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractDuringDeployment = this._extractDuringDeployment;
    }
    if (this._feedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedId = this._feedId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepRunKubectlScriptActionPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._extractDuringDeployment = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
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
      this._extractDuringDeployment = value.extractDuringDeployment;
      this._feedId = value.feedId;
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // extract_during_deployment - computed: true, optional: true, required: false
  private _extractDuringDeployment?: boolean | cdktf.IResolvable; 
  public get extractDuringDeployment() {
    return this.getBooleanAttribute('extract_during_deployment');
  }
  public set extractDuringDeployment(value: boolean | cdktf.IResolvable) {
    this._extractDuringDeployment = value;
  }
  public resetExtractDuringDeployment() {
    this._extractDuringDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractDuringDeploymentInput() {
    return this._extractDuringDeployment;
  }

  // feed_id - computed: false, optional: true, required: false
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

export class DeploymentProcessStepRunKubectlScriptActionPackageList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepRunKubectlScriptActionPackage[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepRunKubectlScriptActionPackageOutputReference {
    return new DeploymentProcessStepRunKubectlScriptActionPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepRunKubectlScriptActionPrimaryPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepRunKubectlScriptActionPrimaryPackageToTerraform(struct?: DeploymentProcessStepRunKubectlScriptActionPrimaryPackageOutputReference | DeploymentProcessStepRunKubectlScriptActionPrimaryPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepRunKubectlScriptActionPrimaryPackageToHclTerraform(struct?: DeploymentProcessStepRunKubectlScriptActionPrimaryPackageOutputReference | DeploymentProcessStepRunKubectlScriptActionPrimaryPackage): any {
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

export class DeploymentProcessStepRunKubectlScriptActionPrimaryPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepRunKubectlScriptActionPrimaryPackage | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepRunKubectlScriptActionPrimaryPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._packageId = undefined;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acquisitionLocation = value.acquisitionLocation;
      this._feedId = value.feedId;
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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
export interface DeploymentProcessStepRunKubectlScriptAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#can_be_used_for_project_versioning DeploymentProcess#can_be_used_for_project_versioning}
  */
  readonly canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable;
  /**
  * The channels associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#channels DeploymentProcess#channels}
  */
  readonly channels?: string[];
  /**
  * The condition associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#condition DeploymentProcess#condition}
  */
  readonly condition?: string;
  /**
  * The environments within which this deployment action will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#environments DeploymentProcess#environments}
  */
  readonly environments?: string[];
  /**
  * The environments that this step will be skipped in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#excluded_environments DeploymentProcess#excluded_environments}
  */
  readonly excludedEnvironments?: string[];
  /**
  * A list of enabled features for this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#features DeploymentProcess#features}
  */
  readonly features?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates the disabled status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_disabled DeploymentProcess#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the required status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_required DeploymentProcess#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#namespace DeploymentProcess#namespace}
  */
  readonly namespace?: string;
  /**
  * The notes associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#notes DeploymentProcess#notes}
  */
  readonly notes?: string;
  /**
  * The properties associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Whether this step runs on a worker or on the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#run_on_server DeploymentProcess#run_on_server}
  */
  readonly runOnServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#script_body DeploymentProcess#script_body}
  */
  readonly scriptBody?: string;
  /**
  * The script file name in the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#script_file_name DeploymentProcess#script_file_name}
  */
  readonly scriptFileName?: string;
  /**
  * Parameters expected by the script. Use platform specific calling convention. e.g. -Path #{VariableStoringPath} for PowerShell or -- #{VariableStoringPath} for ScriptCS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#script_parameters DeploymentProcess#script_parameters}
  */
  readonly scriptParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#script_source DeploymentProcess#script_source}
  */
  readonly scriptSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#script_syntax DeploymentProcess#script_syntax}
  */
  readonly scriptSyntax?: string;
  /**
  * Order used by terraform to ensure correct ordering of actions. This property must be either omitted from all actions, or provided on all actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#sort_order DeploymentProcess#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#tenant_tags DeploymentProcess#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * A newline-separated list of file names to transform, relative to the package contents. Extended wildcard syntax is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#variable_substitution_in_files DeploymentProcess#variable_substitution_in_files}
  */
  readonly variableSubstitutionInFiles?: string;
  /**
  * The worker pool associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#worker_pool_id DeploymentProcess#worker_pool_id}
  */
  readonly workerPoolId?: string;
  /**
  * The worker pool variable associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#worker_pool_variable DeploymentProcess#worker_pool_variable}
  */
  readonly workerPoolVariable?: string;
  /**
  * action_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#action_template DeploymentProcess#action_template}
  */
  readonly actionTemplate?: DeploymentProcessStepRunKubectlScriptActionActionTemplate;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#container DeploymentProcess#container}
  */
  readonly container?: DeploymentProcessStepRunKubectlScriptActionContainer[] | cdktf.IResolvable;
  /**
  * git_dependency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_dependency DeploymentProcess#git_dependency}
  */
  readonly gitDependency?: DeploymentProcessStepRunKubectlScriptActionGitDependency;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package DeploymentProcess#package}
  */
  readonly package?: DeploymentProcessStepRunKubectlScriptActionPackage[] | cdktf.IResolvable;
  /**
  * primary_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#primary_package DeploymentProcess#primary_package}
  */
  readonly primaryPackage?: DeploymentProcessStepRunKubectlScriptActionPrimaryPackage;
}

export function deploymentProcessStepRunKubectlScriptActionToTerraform(struct?: DeploymentProcessStepRunKubectlScriptAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_be_used_for_project_versioning: cdktf.booleanToTerraform(struct!.canBeUsedForProjectVersioning),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    condition: cdktf.stringToTerraform(struct!.condition),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    excluded_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedEnvironments),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    id: cdktf.stringToTerraform(struct!.id),
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    notes: cdktf.stringToTerraform(struct!.notes),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    run_on_server: cdktf.booleanToTerraform(struct!.runOnServer),
    script_body: cdktf.stringToTerraform(struct!.scriptBody),
    script_file_name: cdktf.stringToTerraform(struct!.scriptFileName),
    script_parameters: cdktf.stringToTerraform(struct!.scriptParameters),
    script_source: cdktf.stringToTerraform(struct!.scriptSource),
    script_syntax: cdktf.stringToTerraform(struct!.scriptSyntax),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
    tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantTags),
    variable_substitution_in_files: cdktf.stringToTerraform(struct!.variableSubstitutionInFiles),
    worker_pool_id: cdktf.stringToTerraform(struct!.workerPoolId),
    worker_pool_variable: cdktf.stringToTerraform(struct!.workerPoolVariable),
    action_template: deploymentProcessStepRunKubectlScriptActionActionTemplateToTerraform(struct!.actionTemplate),
    container: cdktf.listMapper(deploymentProcessStepRunKubectlScriptActionContainerToTerraform, true)(struct!.container),
    git_dependency: deploymentProcessStepRunKubectlScriptActionGitDependencyToTerraform(struct!.gitDependency),
    package: cdktf.listMapper(deploymentProcessStepRunKubectlScriptActionPackageToTerraform, true)(struct!.package),
    primary_package: deploymentProcessStepRunKubectlScriptActionPrimaryPackageToTerraform(struct!.primaryPackage),
  }
}


export function deploymentProcessStepRunKubectlScriptActionToHclTerraform(struct?: DeploymentProcessStepRunKubectlScriptAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_be_used_for_project_versioning: {
      value: cdktf.booleanToHclTerraform(struct!.canBeUsedForProjectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedEnvironments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
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
    run_on_server: {
      value: cdktf.booleanToHclTerraform(struct!.runOnServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    script_body: {
      value: cdktf.stringToHclTerraform(struct!.scriptBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_file_name: {
      value: cdktf.stringToHclTerraform(struct!.scriptFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_parameters: {
      value: cdktf.stringToHclTerraform(struct!.scriptParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_source: {
      value: cdktf.stringToHclTerraform(struct!.scriptSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_syntax: {
      value: cdktf.stringToHclTerraform(struct!.scriptSyntax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktf.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    variable_substitution_in_files: {
      value: cdktf.stringToHclTerraform(struct!.variableSubstitutionInFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.workerPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool_variable: {
      value: cdktf.stringToHclTerraform(struct!.workerPoolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_template: {
      value: deploymentProcessStepRunKubectlScriptActionActionTemplateToHclTerraform(struct!.actionTemplate),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepRunKubectlScriptActionActionTemplateList",
    },
    container: {
      value: cdktf.listMapperHcl(deploymentProcessStepRunKubectlScriptActionContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepRunKubectlScriptActionContainerList",
    },
    git_dependency: {
      value: deploymentProcessStepRunKubectlScriptActionGitDependencyToHclTerraform(struct!.gitDependency),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepRunKubectlScriptActionGitDependencyList",
    },
    package: {
      value: cdktf.listMapperHcl(deploymentProcessStepRunKubectlScriptActionPackageToHclTerraform, true)(struct!.package),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepRunKubectlScriptActionPackageList",
    },
    primary_package: {
      value: deploymentProcessStepRunKubectlScriptActionPrimaryPackageToHclTerraform(struct!.primaryPackage),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepRunKubectlScriptActionPrimaryPackageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepRunKubectlScriptActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepRunKubectlScriptAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canBeUsedForProjectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.canBeUsedForProjectVersioning = this._canBeUsedForProjectVersioning;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._excludedEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEnvironments = this._excludedEnvironments;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._runOnServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnServer = this._runOnServer;
    }
    if (this._scriptBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptBody = this._scriptBody;
    }
    if (this._scriptFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptFileName = this._scriptFileName;
    }
    if (this._scriptParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptParameters = this._scriptParameters;
    }
    if (this._scriptSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptSource = this._scriptSource;
    }
    if (this._scriptSyntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptSyntax = this._scriptSyntax;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._tenantTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantTags = this._tenantTags;
    }
    if (this._variableSubstitutionInFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableSubstitutionInFiles = this._variableSubstitutionInFiles;
    }
    if (this._workerPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolId = this._workerPoolId;
    }
    if (this._workerPoolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolVariable = this._workerPoolVariable;
    }
    if (this._actionTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTemplate = this._actionTemplate?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._gitDependency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitDependency = this._gitDependency?.internalValue;
    }
    if (this._package?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package?.internalValue;
    }
    if (this._primaryPackage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryPackage = this._primaryPackage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepRunKubectlScriptAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canBeUsedForProjectVersioning = undefined;
      this._channels = undefined;
      this._condition = undefined;
      this._environments = undefined;
      this._excludedEnvironments = undefined;
      this._features = undefined;
      this._id = undefined;
      this._isDisabled = undefined;
      this._isRequired = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._notes = undefined;
      this._properties = undefined;
      this._runOnServer = undefined;
      this._scriptBody = undefined;
      this._scriptFileName = undefined;
      this._scriptParameters = undefined;
      this._scriptSource = undefined;
      this._scriptSyntax = undefined;
      this._sortOrder = undefined;
      this._tenantTags = undefined;
      this._variableSubstitutionInFiles = undefined;
      this._workerPoolId = undefined;
      this._workerPoolVariable = undefined;
      this._actionTemplate.internalValue = undefined;
      this._container.internalValue = undefined;
      this._gitDependency.internalValue = undefined;
      this._package.internalValue = undefined;
      this._primaryPackage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canBeUsedForProjectVersioning = value.canBeUsedForProjectVersioning;
      this._channels = value.channels;
      this._condition = value.condition;
      this._environments = value.environments;
      this._excludedEnvironments = value.excludedEnvironments;
      this._features = value.features;
      this._id = value.id;
      this._isDisabled = value.isDisabled;
      this._isRequired = value.isRequired;
      this._name = value.name;
      this._namespace = value.namespace;
      this._notes = value.notes;
      this._properties = value.properties;
      this._runOnServer = value.runOnServer;
      this._scriptBody = value.scriptBody;
      this._scriptFileName = value.scriptFileName;
      this._scriptParameters = value.scriptParameters;
      this._scriptSource = value.scriptSource;
      this._scriptSyntax = value.scriptSyntax;
      this._sortOrder = value.sortOrder;
      this._tenantTags = value.tenantTags;
      this._variableSubstitutionInFiles = value.variableSubstitutionInFiles;
      this._workerPoolId = value.workerPoolId;
      this._workerPoolVariable = value.workerPoolVariable;
      this._actionTemplate.internalValue = value.actionTemplate;
      this._container.internalValue = value.container;
      this._gitDependency.internalValue = value.gitDependency;
      this._package.internalValue = value.package;
      this._primaryPackage.internalValue = value.primaryPackage;
    }
  }

  // can_be_used_for_project_versioning - computed: true, optional: true, required: false
  private _canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable; 
  public get canBeUsedForProjectVersioning() {
    return this.getBooleanAttribute('can_be_used_for_project_versioning');
  }
  public set canBeUsedForProjectVersioning(value: boolean | cdktf.IResolvable) {
    this._canBeUsedForProjectVersioning = value;
  }
  public resetCanBeUsedForProjectVersioning() {
    this._canBeUsedForProjectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeUsedForProjectVersioningInput() {
    return this._canBeUsedForProjectVersioning;
  }

  // channels - computed: true, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
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

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
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
    return this.getListAttribute('excluded_environments');
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

  // features - computed: true, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // is_disabled - computed: false, optional: true, required: false
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

  // is_required - computed: false, optional: true, required: false
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

  // run_on_server - computed: false, optional: true, required: false
  private _runOnServer?: boolean | cdktf.IResolvable; 
  public get runOnServer() {
    return this.getBooleanAttribute('run_on_server');
  }
  public set runOnServer(value: boolean | cdktf.IResolvable) {
    this._runOnServer = value;
  }
  public resetRunOnServer() {
    this._runOnServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnServerInput() {
    return this._runOnServer;
  }

  // script_body - computed: false, optional: true, required: false
  private _scriptBody?: string; 
  public get scriptBody() {
    return this.getStringAttribute('script_body');
  }
  public set scriptBody(value: string) {
    this._scriptBody = value;
  }
  public resetScriptBody() {
    this._scriptBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptBodyInput() {
    return this._scriptBody;
  }

  // script_file_name - computed: false, optional: true, required: false
  private _scriptFileName?: string; 
  public get scriptFileName() {
    return this.getStringAttribute('script_file_name');
  }
  public set scriptFileName(value: string) {
    this._scriptFileName = value;
  }
  public resetScriptFileName() {
    this._scriptFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptFileNameInput() {
    return this._scriptFileName;
  }

  // script_parameters - computed: false, optional: true, required: false
  private _scriptParameters?: string; 
  public get scriptParameters() {
    return this.getStringAttribute('script_parameters');
  }
  public set scriptParameters(value: string) {
    this._scriptParameters = value;
  }
  public resetScriptParameters() {
    this._scriptParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptParametersInput() {
    return this._scriptParameters;
  }

  // script_source - computed: true, optional: true, required: false
  private _scriptSource?: string; 
  public get scriptSource() {
    return this.getStringAttribute('script_source');
  }
  public set scriptSource(value: string) {
    this._scriptSource = value;
  }
  public resetScriptSource() {
    this._scriptSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptSourceInput() {
    return this._scriptSource;
  }

  // script_syntax - computed: true, optional: true, required: false
  private _scriptSyntax?: string; 
  public get scriptSyntax() {
    return this.getStringAttribute('script_syntax');
  }
  public set scriptSyntax(value: string) {
    this._scriptSyntax = value;
  }
  public resetScriptSyntax() {
    this._scriptSyntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptSyntaxInput() {
    return this._scriptSyntax;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
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

  // variable_substitution_in_files - computed: false, optional: true, required: false
  private _variableSubstitutionInFiles?: string; 
  public get variableSubstitutionInFiles() {
    return this.getStringAttribute('variable_substitution_in_files');
  }
  public set variableSubstitutionInFiles(value: string) {
    this._variableSubstitutionInFiles = value;
  }
  public resetVariableSubstitutionInFiles() {
    this._variableSubstitutionInFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableSubstitutionInFilesInput() {
    return this._variableSubstitutionInFiles;
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

  // worker_pool_variable - computed: false, optional: true, required: false
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

  // action_template - computed: false, optional: true, required: false
  private _actionTemplate = new DeploymentProcessStepRunKubectlScriptActionActionTemplateOutputReference(this, "action_template");
  public get actionTemplate() {
    return this._actionTemplate;
  }
  public putActionTemplate(value: DeploymentProcessStepRunKubectlScriptActionActionTemplate) {
    this._actionTemplate.internalValue = value;
  }
  public resetActionTemplate() {
    this._actionTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTemplateInput() {
    return this._actionTemplate.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DeploymentProcessStepRunKubectlScriptActionContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: DeploymentProcessStepRunKubectlScriptActionContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // git_dependency - computed: false, optional: true, required: false
  private _gitDependency = new DeploymentProcessStepRunKubectlScriptActionGitDependencyOutputReference(this, "git_dependency");
  public get gitDependency() {
    return this._gitDependency;
  }
  public putGitDependency(value: DeploymentProcessStepRunKubectlScriptActionGitDependency) {
    this._gitDependency.internalValue = value;
  }
  public resetGitDependency() {
    this._gitDependency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDependencyInput() {
    return this._gitDependency.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new DeploymentProcessStepRunKubectlScriptActionPackageList(this, "package", false);
  public get package() {
    return this._package;
  }
  public putPackage(value: DeploymentProcessStepRunKubectlScriptActionPackage[] | cdktf.IResolvable) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // primary_package - computed: false, optional: true, required: false
  private _primaryPackage = new DeploymentProcessStepRunKubectlScriptActionPrimaryPackageOutputReference(this, "primary_package");
  public get primaryPackage() {
    return this._primaryPackage;
  }
  public putPrimaryPackage(value: DeploymentProcessStepRunKubectlScriptActionPrimaryPackage) {
    this._primaryPackage.internalValue = value;
  }
  public resetPrimaryPackage() {
    this._primaryPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPackageInput() {
    return this._primaryPackage.internalValue;
  }
}

export class DeploymentProcessStepRunKubectlScriptActionList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepRunKubectlScriptAction[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepRunKubectlScriptActionOutputReference {
    return new DeploymentProcessStepRunKubectlScriptActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepRunScriptActionActionTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#community_action_template_id DeploymentProcess#community_action_template_id}
  */
  readonly communityActionTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#version DeploymentProcess#version}
  */
  readonly version?: number;
}

export function deploymentProcessStepRunScriptActionActionTemplateToTerraform(struct?: DeploymentProcessStepRunScriptActionActionTemplateOutputReference | DeploymentProcessStepRunScriptActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_action_template_id: cdktf.stringToTerraform(struct!.communityActionTemplateId),
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function deploymentProcessStepRunScriptActionActionTemplateToHclTerraform(struct?: DeploymentProcessStepRunScriptActionActionTemplateOutputReference | DeploymentProcessStepRunScriptActionActionTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_action_template_id: {
      value: cdktf.stringToHclTerraform(struct!.communityActionTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepRunScriptActionActionTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepRunScriptActionActionTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityActionTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityActionTemplateId = this._communityActionTemplateId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepRunScriptActionActionTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._communityActionTemplateId = undefined;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._communityActionTemplateId = value.communityActionTemplateId;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // community_action_template_id - computed: true, optional: true, required: false
  private _communityActionTemplateId?: string; 
  public get communityActionTemplateId() {
    return this.getStringAttribute('community_action_template_id');
  }
  public set communityActionTemplateId(value: string) {
    this._communityActionTemplateId = value;
  }
  public resetCommunityActionTemplateId() {
    this._communityActionTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityActionTemplateIdInput() {
    return this._communityActionTemplateId;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DeploymentProcessStepRunScriptActionContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#image DeploymentProcess#image}
  */
  readonly image?: string;
}

export function deploymentProcessStepRunScriptActionContainerToTerraform(struct?: DeploymentProcessStepRunScriptActionContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function deploymentProcessStepRunScriptActionContainerToHclTerraform(struct?: DeploymentProcessStepRunScriptActionContainer | cdktf.IResolvable): any {
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

export class DeploymentProcessStepRunScriptActionContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepRunScriptActionContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeploymentProcessStepRunScriptActionContainer | cdktf.IResolvable | undefined) {
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

  // feed_id - computed: false, optional: true, required: false
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

  // image - computed: false, optional: true, required: false
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

export class DeploymentProcessStepRunScriptActionContainerList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepRunScriptActionContainer[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepRunScriptActionContainerOutputReference {
    return new DeploymentProcessStepRunScriptActionContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepRunScriptActionGitDependency {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#default_branch DeploymentProcess#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from. Supports glob patten syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#file_path_filters DeploymentProcess#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_id DeploymentProcess#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_credential_type DeploymentProcess#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The Git URI for the repository where this resource is sourced from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#repository_uri DeploymentProcess#repository_uri}
  */
  readonly repositoryUri: string;
}

export function deploymentProcessStepRunScriptActionGitDependencyToTerraform(struct?: DeploymentProcessStepRunScriptActionGitDependencyOutputReference | DeploymentProcessStepRunScriptActionGitDependency): any {
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


export function deploymentProcessStepRunScriptActionGitDependencyToHclTerraform(struct?: DeploymentProcessStepRunScriptActionGitDependencyOutputReference | DeploymentProcessStepRunScriptActionGitDependency): any {
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
      type: "list",
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

export class DeploymentProcessStepRunScriptActionGitDependencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepRunScriptActionGitDependency | undefined {
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

  public set internalValue(value: DeploymentProcessStepRunScriptActionGitDependency | undefined) {
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

  // default_branch - computed: false, optional: false, required: true
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

  // file_path_filters - computed: false, optional: true, required: false
  private _filePathFilters?: string[]; 
  public get filePathFilters() {
    return this.getListAttribute('file_path_filters');
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

  // git_credential_id - computed: false, optional: true, required: false
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

  // git_credential_type - computed: false, optional: false, required: true
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

  // repository_uri - computed: false, optional: false, required: true
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
export interface DeploymentProcessStepRunScriptActionPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * Whether to extract the package during deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#extract_during_deployment DeploymentProcess#extract_during_deployment}
  */
  readonly extractDuringDeployment?: boolean | cdktf.IResolvable;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepRunScriptActionPackageToTerraform(struct?: DeploymentProcessStepRunScriptActionPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    extract_during_deployment: cdktf.booleanToTerraform(struct!.extractDuringDeployment),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepRunScriptActionPackageToHclTerraform(struct?: DeploymentProcessStepRunScriptActionPackage | cdktf.IResolvable): any {
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
    extract_during_deployment: {
      value: cdktf.booleanToHclTerraform(struct!.extractDuringDeployment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feed_id: {
      value: cdktf.stringToHclTerraform(struct!.feedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DeploymentProcessStepRunScriptActionPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepRunScriptActionPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acquisitionLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.acquisitionLocation = this._acquisitionLocation;
    }
    if (this._extractDuringDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractDuringDeployment = this._extractDuringDeployment;
    }
    if (this._feedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedId = this._feedId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepRunScriptActionPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._extractDuringDeployment = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
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
      this._extractDuringDeployment = value.extractDuringDeployment;
      this._feedId = value.feedId;
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // extract_during_deployment - computed: true, optional: true, required: false
  private _extractDuringDeployment?: boolean | cdktf.IResolvable; 
  public get extractDuringDeployment() {
    return this.getBooleanAttribute('extract_during_deployment');
  }
  public set extractDuringDeployment(value: boolean | cdktf.IResolvable) {
    this._extractDuringDeployment = value;
  }
  public resetExtractDuringDeployment() {
    this._extractDuringDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractDuringDeploymentInput() {
    return this._extractDuringDeployment;
  }

  // feed_id - computed: false, optional: true, required: false
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

export class DeploymentProcessStepRunScriptActionPackageList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepRunScriptActionPackage[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepRunScriptActionPackageOutputReference {
    return new DeploymentProcessStepRunScriptActionPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStepRunScriptActionPrimaryPackage {
  /**
  * Whether to acquire this package on the server ('Server'), target ('ExecutionTarget') or not at all ('NotAcquired'). Can be an expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#acquisition_location DeploymentProcess#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * The feed ID associated with this package reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#feed_id DeploymentProcess#feed_id}
  */
  readonly feedId?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name?: string;
  /**
  * The ID of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_id DeploymentProcess#package_id}
  */
  readonly packageId: string;
  /**
  * A list of properties associated with this package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function deploymentProcessStepRunScriptActionPrimaryPackageToTerraform(struct?: DeploymentProcessStepRunScriptActionPrimaryPackageOutputReference | DeploymentProcessStepRunScriptActionPrimaryPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function deploymentProcessStepRunScriptActionPrimaryPackageToHclTerraform(struct?: DeploymentProcessStepRunScriptActionPrimaryPackageOutputReference | DeploymentProcessStepRunScriptActionPrimaryPackage): any {
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

export class DeploymentProcessStepRunScriptActionPrimaryPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentProcessStepRunScriptActionPrimaryPackage | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DeploymentProcessStepRunScriptActionPrimaryPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._packageId = undefined;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acquisitionLocation = value.acquisitionLocation;
      this._feedId = value.feedId;
      this._id = value.id;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties = value.properties;
    }
  }

  // acquisition_location - computed: false, optional: true, required: false
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

  // feed_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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
export interface DeploymentProcessStepRunScriptAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#can_be_used_for_project_versioning DeploymentProcess#can_be_used_for_project_versioning}
  */
  readonly canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable;
  /**
  * The channels associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#channels DeploymentProcess#channels}
  */
  readonly channels?: string[];
  /**
  * The condition associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#condition DeploymentProcess#condition}
  */
  readonly condition?: string;
  /**
  * The environments within which this deployment action will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#environments DeploymentProcess#environments}
  */
  readonly environments?: string[];
  /**
  * The environments that this step will be skipped in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#excluded_environments DeploymentProcess#excluded_environments}
  */
  readonly excludedEnvironments?: string[];
  /**
  * A list of enabled features for this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#features DeploymentProcess#features}
  */
  readonly features?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates the disabled status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_disabled DeploymentProcess#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the required status of this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#is_required DeploymentProcess#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * The notes associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#notes DeploymentProcess#notes}
  */
  readonly notes?: string;
  /**
  * The properties associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Whether this step runs on a worker or on the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#run_on_server DeploymentProcess#run_on_server}
  */
  readonly runOnServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#script_body DeploymentProcess#script_body}
  */
  readonly scriptBody?: string;
  /**
  * The script file name in the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#script_file_name DeploymentProcess#script_file_name}
  */
  readonly scriptFileName?: string;
  /**
  * Parameters expected by the script. Use platform specific calling convention. e.g. -Path #{VariableStoringPath} for PowerShell or -- #{VariableStoringPath} for ScriptCS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#script_parameters DeploymentProcess#script_parameters}
  */
  readonly scriptParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#script_source DeploymentProcess#script_source}
  */
  readonly scriptSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#script_syntax DeploymentProcess#script_syntax}
  */
  readonly scriptSyntax?: string;
  /**
  * Order used by terraform to ensure correct ordering of actions. This property must be either omitted from all actions, or provided on all actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#sort_order DeploymentProcess#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#tenant_tags DeploymentProcess#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * A newline-separated list of file names to transform, relative to the package contents. Extended wildcard syntax is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#variable_substitution_in_files DeploymentProcess#variable_substitution_in_files}
  */
  readonly variableSubstitutionInFiles?: string;
  /**
  * The worker pool associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#worker_pool_id DeploymentProcess#worker_pool_id}
  */
  readonly workerPoolId?: string;
  /**
  * The worker pool variable associated with this deployment action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#worker_pool_variable DeploymentProcess#worker_pool_variable}
  */
  readonly workerPoolVariable?: string;
  /**
  * action_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#action_template DeploymentProcess#action_template}
  */
  readonly actionTemplate?: DeploymentProcessStepRunScriptActionActionTemplate;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#container DeploymentProcess#container}
  */
  readonly container?: DeploymentProcessStepRunScriptActionContainer[] | cdktf.IResolvable;
  /**
  * git_dependency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#git_dependency DeploymentProcess#git_dependency}
  */
  readonly gitDependency?: DeploymentProcessStepRunScriptActionGitDependency;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package DeploymentProcess#package}
  */
  readonly package?: DeploymentProcessStepRunScriptActionPackage[] | cdktf.IResolvable;
  /**
  * primary_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#primary_package DeploymentProcess#primary_package}
  */
  readonly primaryPackage?: DeploymentProcessStepRunScriptActionPrimaryPackage;
}

export function deploymentProcessStepRunScriptActionToTerraform(struct?: DeploymentProcessStepRunScriptAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_be_used_for_project_versioning: cdktf.booleanToTerraform(struct!.canBeUsedForProjectVersioning),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    condition: cdktf.stringToTerraform(struct!.condition),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    excluded_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedEnvironments),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    id: cdktf.stringToTerraform(struct!.id),
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    run_on_server: cdktf.booleanToTerraform(struct!.runOnServer),
    script_body: cdktf.stringToTerraform(struct!.scriptBody),
    script_file_name: cdktf.stringToTerraform(struct!.scriptFileName),
    script_parameters: cdktf.stringToTerraform(struct!.scriptParameters),
    script_source: cdktf.stringToTerraform(struct!.scriptSource),
    script_syntax: cdktf.stringToTerraform(struct!.scriptSyntax),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
    tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantTags),
    variable_substitution_in_files: cdktf.stringToTerraform(struct!.variableSubstitutionInFiles),
    worker_pool_id: cdktf.stringToTerraform(struct!.workerPoolId),
    worker_pool_variable: cdktf.stringToTerraform(struct!.workerPoolVariable),
    action_template: deploymentProcessStepRunScriptActionActionTemplateToTerraform(struct!.actionTemplate),
    container: cdktf.listMapper(deploymentProcessStepRunScriptActionContainerToTerraform, true)(struct!.container),
    git_dependency: deploymentProcessStepRunScriptActionGitDependencyToTerraform(struct!.gitDependency),
    package: cdktf.listMapper(deploymentProcessStepRunScriptActionPackageToTerraform, true)(struct!.package),
    primary_package: deploymentProcessStepRunScriptActionPrimaryPackageToTerraform(struct!.primaryPackage),
  }
}


export function deploymentProcessStepRunScriptActionToHclTerraform(struct?: DeploymentProcessStepRunScriptAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_be_used_for_project_versioning: {
      value: cdktf.booleanToHclTerraform(struct!.canBeUsedForProjectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedEnvironments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    run_on_server: {
      value: cdktf.booleanToHclTerraform(struct!.runOnServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    script_body: {
      value: cdktf.stringToHclTerraform(struct!.scriptBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_file_name: {
      value: cdktf.stringToHclTerraform(struct!.scriptFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_parameters: {
      value: cdktf.stringToHclTerraform(struct!.scriptParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_source: {
      value: cdktf.stringToHclTerraform(struct!.scriptSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_syntax: {
      value: cdktf.stringToHclTerraform(struct!.scriptSyntax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktf.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    variable_substitution_in_files: {
      value: cdktf.stringToHclTerraform(struct!.variableSubstitutionInFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.workerPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool_variable: {
      value: cdktf.stringToHclTerraform(struct!.workerPoolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_template: {
      value: deploymentProcessStepRunScriptActionActionTemplateToHclTerraform(struct!.actionTemplate),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepRunScriptActionActionTemplateList",
    },
    container: {
      value: cdktf.listMapperHcl(deploymentProcessStepRunScriptActionContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepRunScriptActionContainerList",
    },
    git_dependency: {
      value: deploymentProcessStepRunScriptActionGitDependencyToHclTerraform(struct!.gitDependency),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentProcessStepRunScriptActionGitDependencyList",
    },
    package: {
      value: cdktf.listMapperHcl(deploymentProcessStepRunScriptActionPackageToHclTerraform, true)(struct!.package),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepRunScriptActionPackageList",
    },
    primary_package: {
      value: deploymentProcessStepRunScriptActionPrimaryPackageToHclTerraform(struct!.primaryPackage),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepRunScriptActionPrimaryPackageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepRunScriptActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStepRunScriptAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canBeUsedForProjectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.canBeUsedForProjectVersioning = this._canBeUsedForProjectVersioning;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._excludedEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEnvironments = this._excludedEnvironments;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._runOnServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnServer = this._runOnServer;
    }
    if (this._scriptBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptBody = this._scriptBody;
    }
    if (this._scriptFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptFileName = this._scriptFileName;
    }
    if (this._scriptParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptParameters = this._scriptParameters;
    }
    if (this._scriptSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptSource = this._scriptSource;
    }
    if (this._scriptSyntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptSyntax = this._scriptSyntax;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._tenantTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantTags = this._tenantTags;
    }
    if (this._variableSubstitutionInFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableSubstitutionInFiles = this._variableSubstitutionInFiles;
    }
    if (this._workerPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolId = this._workerPoolId;
    }
    if (this._workerPoolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPoolVariable = this._workerPoolVariable;
    }
    if (this._actionTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTemplate = this._actionTemplate?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._gitDependency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitDependency = this._gitDependency?.internalValue;
    }
    if (this._package?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package?.internalValue;
    }
    if (this._primaryPackage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryPackage = this._primaryPackage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStepRunScriptAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canBeUsedForProjectVersioning = undefined;
      this._channels = undefined;
      this._condition = undefined;
      this._environments = undefined;
      this._excludedEnvironments = undefined;
      this._features = undefined;
      this._id = undefined;
      this._isDisabled = undefined;
      this._isRequired = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._properties = undefined;
      this._runOnServer = undefined;
      this._scriptBody = undefined;
      this._scriptFileName = undefined;
      this._scriptParameters = undefined;
      this._scriptSource = undefined;
      this._scriptSyntax = undefined;
      this._sortOrder = undefined;
      this._tenantTags = undefined;
      this._variableSubstitutionInFiles = undefined;
      this._workerPoolId = undefined;
      this._workerPoolVariable = undefined;
      this._actionTemplate.internalValue = undefined;
      this._container.internalValue = undefined;
      this._gitDependency.internalValue = undefined;
      this._package.internalValue = undefined;
      this._primaryPackage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canBeUsedForProjectVersioning = value.canBeUsedForProjectVersioning;
      this._channels = value.channels;
      this._condition = value.condition;
      this._environments = value.environments;
      this._excludedEnvironments = value.excludedEnvironments;
      this._features = value.features;
      this._id = value.id;
      this._isDisabled = value.isDisabled;
      this._isRequired = value.isRequired;
      this._name = value.name;
      this._notes = value.notes;
      this._properties = value.properties;
      this._runOnServer = value.runOnServer;
      this._scriptBody = value.scriptBody;
      this._scriptFileName = value.scriptFileName;
      this._scriptParameters = value.scriptParameters;
      this._scriptSource = value.scriptSource;
      this._scriptSyntax = value.scriptSyntax;
      this._sortOrder = value.sortOrder;
      this._tenantTags = value.tenantTags;
      this._variableSubstitutionInFiles = value.variableSubstitutionInFiles;
      this._workerPoolId = value.workerPoolId;
      this._workerPoolVariable = value.workerPoolVariable;
      this._actionTemplate.internalValue = value.actionTemplate;
      this._container.internalValue = value.container;
      this._gitDependency.internalValue = value.gitDependency;
      this._package.internalValue = value.package;
      this._primaryPackage.internalValue = value.primaryPackage;
    }
  }

  // can_be_used_for_project_versioning - computed: true, optional: true, required: false
  private _canBeUsedForProjectVersioning?: boolean | cdktf.IResolvable; 
  public get canBeUsedForProjectVersioning() {
    return this.getBooleanAttribute('can_be_used_for_project_versioning');
  }
  public set canBeUsedForProjectVersioning(value: boolean | cdktf.IResolvable) {
    this._canBeUsedForProjectVersioning = value;
  }
  public resetCanBeUsedForProjectVersioning() {
    this._canBeUsedForProjectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeUsedForProjectVersioningInput() {
    return this._canBeUsedForProjectVersioning;
  }

  // channels - computed: true, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
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

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
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
    return this.getListAttribute('excluded_environments');
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

  // features - computed: true, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // is_disabled - computed: false, optional: true, required: false
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

  // is_required - computed: false, optional: true, required: false
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

  // run_on_server - computed: false, optional: true, required: false
  private _runOnServer?: boolean | cdktf.IResolvable; 
  public get runOnServer() {
    return this.getBooleanAttribute('run_on_server');
  }
  public set runOnServer(value: boolean | cdktf.IResolvable) {
    this._runOnServer = value;
  }
  public resetRunOnServer() {
    this._runOnServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnServerInput() {
    return this._runOnServer;
  }

  // script_body - computed: false, optional: true, required: false
  private _scriptBody?: string; 
  public get scriptBody() {
    return this.getStringAttribute('script_body');
  }
  public set scriptBody(value: string) {
    this._scriptBody = value;
  }
  public resetScriptBody() {
    this._scriptBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptBodyInput() {
    return this._scriptBody;
  }

  // script_file_name - computed: false, optional: true, required: false
  private _scriptFileName?: string; 
  public get scriptFileName() {
    return this.getStringAttribute('script_file_name');
  }
  public set scriptFileName(value: string) {
    this._scriptFileName = value;
  }
  public resetScriptFileName() {
    this._scriptFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptFileNameInput() {
    return this._scriptFileName;
  }

  // script_parameters - computed: false, optional: true, required: false
  private _scriptParameters?: string; 
  public get scriptParameters() {
    return this.getStringAttribute('script_parameters');
  }
  public set scriptParameters(value: string) {
    this._scriptParameters = value;
  }
  public resetScriptParameters() {
    this._scriptParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptParametersInput() {
    return this._scriptParameters;
  }

  // script_source - computed: true, optional: true, required: false
  private _scriptSource?: string; 
  public get scriptSource() {
    return this.getStringAttribute('script_source');
  }
  public set scriptSource(value: string) {
    this._scriptSource = value;
  }
  public resetScriptSource() {
    this._scriptSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptSourceInput() {
    return this._scriptSource;
  }

  // script_syntax - computed: true, optional: true, required: false
  private _scriptSyntax?: string; 
  public get scriptSyntax() {
    return this.getStringAttribute('script_syntax');
  }
  public set scriptSyntax(value: string) {
    this._scriptSyntax = value;
  }
  public resetScriptSyntax() {
    this._scriptSyntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptSyntaxInput() {
    return this._scriptSyntax;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
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

  // variable_substitution_in_files - computed: false, optional: true, required: false
  private _variableSubstitutionInFiles?: string; 
  public get variableSubstitutionInFiles() {
    return this.getStringAttribute('variable_substitution_in_files');
  }
  public set variableSubstitutionInFiles(value: string) {
    this._variableSubstitutionInFiles = value;
  }
  public resetVariableSubstitutionInFiles() {
    this._variableSubstitutionInFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableSubstitutionInFilesInput() {
    return this._variableSubstitutionInFiles;
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

  // worker_pool_variable - computed: false, optional: true, required: false
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

  // action_template - computed: false, optional: true, required: false
  private _actionTemplate = new DeploymentProcessStepRunScriptActionActionTemplateOutputReference(this, "action_template");
  public get actionTemplate() {
    return this._actionTemplate;
  }
  public putActionTemplate(value: DeploymentProcessStepRunScriptActionActionTemplate) {
    this._actionTemplate.internalValue = value;
  }
  public resetActionTemplate() {
    this._actionTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTemplateInput() {
    return this._actionTemplate.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DeploymentProcessStepRunScriptActionContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: DeploymentProcessStepRunScriptActionContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // git_dependency - computed: false, optional: true, required: false
  private _gitDependency = new DeploymentProcessStepRunScriptActionGitDependencyOutputReference(this, "git_dependency");
  public get gitDependency() {
    return this._gitDependency;
  }
  public putGitDependency(value: DeploymentProcessStepRunScriptActionGitDependency) {
    this._gitDependency.internalValue = value;
  }
  public resetGitDependency() {
    this._gitDependency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDependencyInput() {
    return this._gitDependency.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new DeploymentProcessStepRunScriptActionPackageList(this, "package", false);
  public get package() {
    return this._package;
  }
  public putPackage(value: DeploymentProcessStepRunScriptActionPackage[] | cdktf.IResolvable) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // primary_package - computed: false, optional: true, required: false
  private _primaryPackage = new DeploymentProcessStepRunScriptActionPrimaryPackageOutputReference(this, "primary_package");
  public get primaryPackage() {
    return this._primaryPackage;
  }
  public putPrimaryPackage(value: DeploymentProcessStepRunScriptActionPrimaryPackage) {
    this._primaryPackage.internalValue = value;
  }
  public resetPrimaryPackage() {
    this._primaryPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPackageInput() {
    return this._primaryPackage.internalValue;
  }
}

export class DeploymentProcessStepRunScriptActionList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStepRunScriptAction[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepRunScriptActionOutputReference {
    return new DeploymentProcessStepRunScriptActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProcessStep {
  /**
  * When to run the step, one of 'Success', 'Failure', 'Always' or 'Variable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#condition DeploymentProcess#condition}
  */
  readonly condition?: string;
  /**
  * The expression to evaluate to determine whether to run this step when 'condition' is 'Variable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#condition_expression DeploymentProcess#condition_expression}
  */
  readonly conditionExpression?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#id DeploymentProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#name DeploymentProcess#name}
  */
  readonly name: string;
  /**
  * Whether to run this step before or after package acquisition (if possible)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#package_requirement DeploymentProcess#package_requirement}
  */
  readonly packageRequirement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#properties DeploymentProcess#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Whether to run this step after the previous step ('StartAfterPrevious') or at the same time as the previous step ('StartWithPrevious')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#start_trigger DeploymentProcess#start_trigger}
  */
  readonly startTrigger?: string;
  /**
  * The roles that this step run against, or runs on behalf of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#target_roles DeploymentProcess#target_roles}
  */
  readonly targetRoles?: string[];
  /**
  * The maximum number of targets to deploy to simultaneously
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#window_size DeploymentProcess#window_size}
  */
  readonly windowSize?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#action DeploymentProcess#action}
  */
  readonly action?: DeploymentProcessStepAction[] | cdktf.IResolvable;
  /**
  * apply_terraform_template_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#apply_terraform_template_action DeploymentProcess#apply_terraform_template_action}
  */
  readonly applyTerraformTemplateAction?: DeploymentProcessStepApplyTerraformTemplateAction[] | cdktf.IResolvable;
  /**
  * deploy_kubernetes_secret_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#deploy_kubernetes_secret_action DeploymentProcess#deploy_kubernetes_secret_action}
  */
  readonly deployKubernetesSecretAction?: DeploymentProcessStepDeployKubernetesSecretAction[] | cdktf.IResolvable;
  /**
  * deploy_package_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#deploy_package_action DeploymentProcess#deploy_package_action}
  */
  readonly deployPackageAction?: DeploymentProcessStepDeployPackageAction[] | cdktf.IResolvable;
  /**
  * deploy_windows_service_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#deploy_windows_service_action DeploymentProcess#deploy_windows_service_action}
  */
  readonly deployWindowsServiceAction?: DeploymentProcessStepDeployWindowsServiceAction[] | cdktf.IResolvable;
  /**
  * manual_intervention_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#manual_intervention_action DeploymentProcess#manual_intervention_action}
  */
  readonly manualInterventionAction?: DeploymentProcessStepManualInterventionAction[] | cdktf.IResolvable;
  /**
  * run_kubectl_script_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#run_kubectl_script_action DeploymentProcess#run_kubectl_script_action}
  */
  readonly runKubectlScriptAction?: DeploymentProcessStepRunKubectlScriptAction[] | cdktf.IResolvable;
  /**
  * run_script_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#run_script_action DeploymentProcess#run_script_action}
  */
  readonly runScriptAction?: DeploymentProcessStepRunScriptAction[] | cdktf.IResolvable;
}

export function deploymentProcessStepToTerraform(struct?: DeploymentProcessStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    condition_expression: cdktf.stringToTerraform(struct!.conditionExpression),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    package_requirement: cdktf.stringToTerraform(struct!.packageRequirement),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    start_trigger: cdktf.stringToTerraform(struct!.startTrigger),
    target_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetRoles),
    window_size: cdktf.stringToTerraform(struct!.windowSize),
    action: cdktf.listMapper(deploymentProcessStepActionToTerraform, true)(struct!.action),
    apply_terraform_template_action: cdktf.listMapper(deploymentProcessStepApplyTerraformTemplateActionToTerraform, true)(struct!.applyTerraformTemplateAction),
    deploy_kubernetes_secret_action: cdktf.listMapper(deploymentProcessStepDeployKubernetesSecretActionToTerraform, true)(struct!.deployKubernetesSecretAction),
    deploy_package_action: cdktf.listMapper(deploymentProcessStepDeployPackageActionToTerraform, true)(struct!.deployPackageAction),
    deploy_windows_service_action: cdktf.listMapper(deploymentProcessStepDeployWindowsServiceActionToTerraform, true)(struct!.deployWindowsServiceAction),
    manual_intervention_action: cdktf.listMapper(deploymentProcessStepManualInterventionActionToTerraform, true)(struct!.manualInterventionAction),
    run_kubectl_script_action: cdktf.listMapper(deploymentProcessStepRunKubectlScriptActionToTerraform, true)(struct!.runKubectlScriptAction),
    run_script_action: cdktf.listMapper(deploymentProcessStepRunScriptActionToTerraform, true)(struct!.runScriptAction),
  }
}


export function deploymentProcessStepToHclTerraform(struct?: DeploymentProcessStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_expression: {
      value: cdktf.stringToHclTerraform(struct!.conditionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    package_requirement: {
      value: cdktf.stringToHclTerraform(struct!.packageRequirement),
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
    start_trigger: {
      value: cdktf.stringToHclTerraform(struct!.startTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    window_size: {
      value: cdktf.stringToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(deploymentProcessStepActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepActionList",
    },
    apply_terraform_template_action: {
      value: cdktf.listMapperHcl(deploymentProcessStepApplyTerraformTemplateActionToHclTerraform, true)(struct!.applyTerraformTemplateAction),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepApplyTerraformTemplateActionList",
    },
    deploy_kubernetes_secret_action: {
      value: cdktf.listMapperHcl(deploymentProcessStepDeployKubernetesSecretActionToHclTerraform, true)(struct!.deployKubernetesSecretAction),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployKubernetesSecretActionList",
    },
    deploy_package_action: {
      value: cdktf.listMapperHcl(deploymentProcessStepDeployPackageActionToHclTerraform, true)(struct!.deployPackageAction),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployPackageActionList",
    },
    deploy_windows_service_action: {
      value: cdktf.listMapperHcl(deploymentProcessStepDeployWindowsServiceActionToHclTerraform, true)(struct!.deployWindowsServiceAction),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepDeployWindowsServiceActionList",
    },
    manual_intervention_action: {
      value: cdktf.listMapperHcl(deploymentProcessStepManualInterventionActionToHclTerraform, true)(struct!.manualInterventionAction),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepManualInterventionActionList",
    },
    run_kubectl_script_action: {
      value: cdktf.listMapperHcl(deploymentProcessStepRunKubectlScriptActionToHclTerraform, true)(struct!.runKubectlScriptAction),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepRunKubectlScriptActionList",
    },
    run_script_action: {
      value: cdktf.listMapperHcl(deploymentProcessStepRunScriptActionToHclTerraform, true)(struct!.runScriptAction),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentProcessStepRunScriptActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProcessStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProcessStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._conditionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionExpression = this._conditionExpression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packageRequirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageRequirement = this._packageRequirement;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._startTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTrigger = this._startTrigger;
    }
    if (this._targetRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRoles = this._targetRoles;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._applyTerraformTemplateAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyTerraformTemplateAction = this._applyTerraformTemplateAction?.internalValue;
    }
    if (this._deployKubernetesSecretAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployKubernetesSecretAction = this._deployKubernetesSecretAction?.internalValue;
    }
    if (this._deployPackageAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployPackageAction = this._deployPackageAction?.internalValue;
    }
    if (this._deployWindowsServiceAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployWindowsServiceAction = this._deployWindowsServiceAction?.internalValue;
    }
    if (this._manualInterventionAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualInterventionAction = this._manualInterventionAction?.internalValue;
    }
    if (this._runKubectlScriptAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runKubectlScriptAction = this._runKubectlScriptAction?.internalValue;
    }
    if (this._runScriptAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runScriptAction = this._runScriptAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProcessStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._conditionExpression = undefined;
      this._id = undefined;
      this._name = undefined;
      this._packageRequirement = undefined;
      this._properties = undefined;
      this._startTrigger = undefined;
      this._targetRoles = undefined;
      this._windowSize = undefined;
      this._action.internalValue = undefined;
      this._applyTerraformTemplateAction.internalValue = undefined;
      this._deployKubernetesSecretAction.internalValue = undefined;
      this._deployPackageAction.internalValue = undefined;
      this._deployWindowsServiceAction.internalValue = undefined;
      this._manualInterventionAction.internalValue = undefined;
      this._runKubectlScriptAction.internalValue = undefined;
      this._runScriptAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._conditionExpression = value.conditionExpression;
      this._id = value.id;
      this._name = value.name;
      this._packageRequirement = value.packageRequirement;
      this._properties = value.properties;
      this._startTrigger = value.startTrigger;
      this._targetRoles = value.targetRoles;
      this._windowSize = value.windowSize;
      this._action.internalValue = value.action;
      this._applyTerraformTemplateAction.internalValue = value.applyTerraformTemplateAction;
      this._deployKubernetesSecretAction.internalValue = value.deployKubernetesSecretAction;
      this._deployPackageAction.internalValue = value.deployPackageAction;
      this._deployWindowsServiceAction.internalValue = value.deployWindowsServiceAction;
      this._manualInterventionAction.internalValue = value.manualInterventionAction;
      this._runKubectlScriptAction.internalValue = value.runKubectlScriptAction;
      this._runScriptAction.internalValue = value.runScriptAction;
    }
  }

  // condition - computed: false, optional: true, required: false
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

  // condition_expression - computed: true, optional: true, required: false
  private _conditionExpression?: string; 
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
  public set conditionExpression(value: string) {
    this._conditionExpression = value;
  }
  public resetConditionExpression() {
    this._conditionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExpressionInput() {
    return this._conditionExpression;
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

  // package_requirement - computed: false, optional: true, required: false
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

  // start_trigger - computed: false, optional: true, required: false
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

  // target_roles - computed: true, optional: true, required: false
  private _targetRoles?: string[]; 
  public get targetRoles() {
    return this.getListAttribute('target_roles');
  }
  public set targetRoles(value: string[]) {
    this._targetRoles = value;
  }
  public resetTargetRoles() {
    this._targetRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRolesInput() {
    return this._targetRoles;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }

  // action - computed: false, optional: true, required: false
  private _action = new DeploymentProcessStepActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: DeploymentProcessStepAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // apply_terraform_template_action - computed: false, optional: true, required: false
  private _applyTerraformTemplateAction = new DeploymentProcessStepApplyTerraformTemplateActionList(this, "apply_terraform_template_action", false);
  public get applyTerraformTemplateAction() {
    return this._applyTerraformTemplateAction;
  }
  public putApplyTerraformTemplateAction(value: DeploymentProcessStepApplyTerraformTemplateAction[] | cdktf.IResolvable) {
    this._applyTerraformTemplateAction.internalValue = value;
  }
  public resetApplyTerraformTemplateAction() {
    this._applyTerraformTemplateAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyTerraformTemplateActionInput() {
    return this._applyTerraformTemplateAction.internalValue;
  }

  // deploy_kubernetes_secret_action - computed: false, optional: true, required: false
  private _deployKubernetesSecretAction = new DeploymentProcessStepDeployKubernetesSecretActionList(this, "deploy_kubernetes_secret_action", false);
  public get deployKubernetesSecretAction() {
    return this._deployKubernetesSecretAction;
  }
  public putDeployKubernetesSecretAction(value: DeploymentProcessStepDeployKubernetesSecretAction[] | cdktf.IResolvable) {
    this._deployKubernetesSecretAction.internalValue = value;
  }
  public resetDeployKubernetesSecretAction() {
    this._deployKubernetesSecretAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployKubernetesSecretActionInput() {
    return this._deployKubernetesSecretAction.internalValue;
  }

  // deploy_package_action - computed: false, optional: true, required: false
  private _deployPackageAction = new DeploymentProcessStepDeployPackageActionList(this, "deploy_package_action", false);
  public get deployPackageAction() {
    return this._deployPackageAction;
  }
  public putDeployPackageAction(value: DeploymentProcessStepDeployPackageAction[] | cdktf.IResolvable) {
    this._deployPackageAction.internalValue = value;
  }
  public resetDeployPackageAction() {
    this._deployPackageAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPackageActionInput() {
    return this._deployPackageAction.internalValue;
  }

  // deploy_windows_service_action - computed: false, optional: true, required: false
  private _deployWindowsServiceAction = new DeploymentProcessStepDeployWindowsServiceActionList(this, "deploy_windows_service_action", false);
  public get deployWindowsServiceAction() {
    return this._deployWindowsServiceAction;
  }
  public putDeployWindowsServiceAction(value: DeploymentProcessStepDeployWindowsServiceAction[] | cdktf.IResolvable) {
    this._deployWindowsServiceAction.internalValue = value;
  }
  public resetDeployWindowsServiceAction() {
    this._deployWindowsServiceAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployWindowsServiceActionInput() {
    return this._deployWindowsServiceAction.internalValue;
  }

  // manual_intervention_action - computed: false, optional: true, required: false
  private _manualInterventionAction = new DeploymentProcessStepManualInterventionActionList(this, "manual_intervention_action", false);
  public get manualInterventionAction() {
    return this._manualInterventionAction;
  }
  public putManualInterventionAction(value: DeploymentProcessStepManualInterventionAction[] | cdktf.IResolvable) {
    this._manualInterventionAction.internalValue = value;
  }
  public resetManualInterventionAction() {
    this._manualInterventionAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInterventionActionInput() {
    return this._manualInterventionAction.internalValue;
  }

  // run_kubectl_script_action - computed: false, optional: true, required: false
  private _runKubectlScriptAction = new DeploymentProcessStepRunKubectlScriptActionList(this, "run_kubectl_script_action", false);
  public get runKubectlScriptAction() {
    return this._runKubectlScriptAction;
  }
  public putRunKubectlScriptAction(value: DeploymentProcessStepRunKubectlScriptAction[] | cdktf.IResolvable) {
    this._runKubectlScriptAction.internalValue = value;
  }
  public resetRunKubectlScriptAction() {
    this._runKubectlScriptAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runKubectlScriptActionInput() {
    return this._runKubectlScriptAction.internalValue;
  }

  // run_script_action - computed: false, optional: true, required: false
  private _runScriptAction = new DeploymentProcessStepRunScriptActionList(this, "run_script_action", false);
  public get runScriptAction() {
    return this._runScriptAction;
  }
  public putRunScriptAction(value: DeploymentProcessStepRunScriptAction[] | cdktf.IResolvable) {
    this._runScriptAction.internalValue = value;
  }
  public resetRunScriptAction() {
    this._runScriptAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runScriptActionInput() {
    return this._runScriptAction.internalValue;
  }
}

export class DeploymentProcessStepList extends cdktf.ComplexList {
  public internalValue? : DeploymentProcessStep[] | cdktf.IResolvable

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
  public get(index: number): DeploymentProcessStepOutputReference {
    return new DeploymentProcessStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process octopusdeploy_deployment_process}
*/
export class DeploymentProcess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_deployment_process";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentProcess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentProcess to import
  * @param importFromId The id of the existing DeploymentProcess that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentProcess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_deployment_process", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/deployment_process octopusdeploy_deployment_process} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentProcessConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentProcessConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_deployment_process',
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
    this._branch = config.branch;
    this._id = config.id;
    this._lastSnapshotId = config.lastSnapshotId;
    this._projectId = config.projectId;
    this._spaceId = config.spaceId;
    this._version = config.version;
    this._step.internalValue = config.step;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_snapshot_id - computed: false, optional: true, required: false
  private _lastSnapshotId?: string; 
  public get lastSnapshotId() {
    return this.getStringAttribute('last_snapshot_id');
  }
  public set lastSnapshotId(value: string) {
    this._lastSnapshotId = value;
  }
  public resetLastSnapshotId() {
    this._lastSnapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSnapshotIdInput() {
    return this._lastSnapshotId;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // step - computed: false, optional: true, required: false
  private _step = new DeploymentProcessStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: DeploymentProcessStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  public resetStep() {
    this._step.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      id: cdktf.stringToTerraform(this._id),
      last_snapshot_id: cdktf.stringToTerraform(this._lastSnapshotId),
      project_id: cdktf.stringToTerraform(this._projectId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      version: cdktf.numberToTerraform(this._version),
      step: cdktf.listMapper(deploymentProcessStepToTerraform, true)(this._step.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
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
      last_snapshot_id: {
        value: cdktf.stringToHclTerraform(this._lastSnapshotId),
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
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      step: {
        value: cdktf.listMapperHcl(deploymentProcessStepToHclTerraform, true)(this._step.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentProcessStepList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
