// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StepTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action type of the step template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#action_type StepTemplate#action_type}
  */
  readonly actionType: string;
  /**
  * The description of this step_template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#description StepTemplate#description}
  */
  readonly description?: string;
  /**
  * List of Git dependencies for the step template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#git_dependencies StepTemplate#git_dependencies}
  */
  readonly gitDependencies?: StepTemplateGitDependencies[] | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#name StepTemplate#name}
  */
  readonly name: string;
  /**
  * Package information for the step template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#packages StepTemplate#packages}
  */
  readonly packages: StepTemplatePackages[] | cdktf.IResolvable;
  /**
  * List of parameters that can be used in step template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#parameters StepTemplate#parameters}
  */
  readonly parameters: StepTemplateParameters[] | cdktf.IResolvable;
  /**
  * Properties for the step template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#properties StepTemplate#properties}
  */
  readonly properties: { [key: string]: string };
  /**
  * The space ID associated with this step_template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#space_id StepTemplate#space_id}
  */
  readonly spaceId?: string;
  /**
  * The ID of the step package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#step_package_id StepTemplate#step_package_id}
  */
  readonly stepPackageId: string;
}
export interface StepTemplateGitDependencies {
  /**
  * Name of the default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#default_branch StepTemplate#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * List of file path filters used to narrow down the directory where files are to be sourced from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#file_path_filters StepTemplate#file_path_filters}
  */
  readonly filePathFilters?: string[];
  /**
  * ID of an existing Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#git_credential_id StepTemplate#git_credential_id}
  */
  readonly gitCredentialId?: string;
  /**
  * The Git credential authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#git_credential_type StepTemplate#git_credential_type}
  */
  readonly gitCredentialType: string;
  /**
  * The name of the Git dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#name StepTemplate#name}
  */
  readonly name?: string;
  /**
  * The Git URI for the repository where this resource is sourced from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#repository_uri StepTemplate#repository_uri}
  */
  readonly repositoryUri: string;
}

export function stepTemplateGitDependenciesToTerraform(struct?: StepTemplateGitDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_branch: cdktf.stringToTerraform(struct!.defaultBranch),
    file_path_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filePathFilters),
    git_credential_id: cdktf.stringToTerraform(struct!.gitCredentialId),
    git_credential_type: cdktf.stringToTerraform(struct!.gitCredentialType),
    name: cdktf.stringToTerraform(struct!.name),
    repository_uri: cdktf.stringToTerraform(struct!.repositoryUri),
  }
}


export function stepTemplateGitDependenciesToHclTerraform(struct?: StepTemplateGitDependencies | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class StepTemplateGitDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StepTemplateGitDependencies | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._repositoryUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUri = this._repositoryUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepTemplateGitDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultBranch = undefined;
      this._filePathFilters = undefined;
      this._gitCredentialId = undefined;
      this._gitCredentialType = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

export class StepTemplateGitDependenciesList extends cdktf.ComplexList {
  public internalValue? : StepTemplateGitDependencies[] | cdktf.IResolvable

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
  public get(index: number): StepTemplateGitDependenciesOutputReference {
    return new StepTemplateGitDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StepTemplatePackagesProperties {
  /**
  * If the package should extract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#extract StepTemplate#extract}
  */
  readonly extract?: string;
  /**
  * The name of the package parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#package_parameter_name StepTemplate#package_parameter_name}
  */
  readonly packageParameterName?: string;
  /**
  * The purpose of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#purpose StepTemplate#purpose}
  */
  readonly purpose?: string;
  /**
  * The selection mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#selection_mode StepTemplate#selection_mode}
  */
  readonly selectionMode: string;
}

export function stepTemplatePackagesPropertiesToTerraform(struct?: StepTemplatePackagesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extract: cdktf.stringToTerraform(struct!.extract),
    package_parameter_name: cdktf.stringToTerraform(struct!.packageParameterName),
    purpose: cdktf.stringToTerraform(struct!.purpose),
    selection_mode: cdktf.stringToTerraform(struct!.selectionMode),
  }
}


export function stepTemplatePackagesPropertiesToHclTerraform(struct?: StepTemplatePackagesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extract: {
      value: cdktf.stringToHclTerraform(struct!.extract),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.packageParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purpose: {
      value: cdktf.stringToHclTerraform(struct!.purpose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_mode: {
      value: cdktf.stringToHclTerraform(struct!.selectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StepTemplatePackagesPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StepTemplatePackagesProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extract !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract;
    }
    if (this._packageParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageParameterName = this._packageParameterName;
    }
    if (this._purpose !== undefined) {
      hasAnyValues = true;
      internalValueResult.purpose = this._purpose;
    }
    if (this._selectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionMode = this._selectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepTemplatePackagesProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extract = undefined;
      this._packageParameterName = undefined;
      this._purpose = undefined;
      this._selectionMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extract = value.extract;
      this._packageParameterName = value.packageParameterName;
      this._purpose = value.purpose;
      this._selectionMode = value.selectionMode;
    }
  }

  // extract - computed: true, optional: true, required: false
  private _extract?: string; 
  public get extract() {
    return this.getStringAttribute('extract');
  }
  public set extract(value: string) {
    this._extract = value;
  }
  public resetExtract() {
    this._extract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract;
  }

  // package_parameter_name - computed: true, optional: true, required: false
  private _packageParameterName?: string; 
  public get packageParameterName() {
    return this.getStringAttribute('package_parameter_name');
  }
  public set packageParameterName(value: string) {
    this._packageParameterName = value;
  }
  public resetPackageParameterName() {
    this._packageParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageParameterNameInput() {
    return this._packageParameterName;
  }

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // selection_mode - computed: false, optional: false, required: true
  private _selectionMode?: string; 
  public get selectionMode() {
    return this.getStringAttribute('selection_mode');
  }
  public set selectionMode(value: string) {
    this._selectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }
}
export interface StepTemplatePackages {
  /**
  * Acquisition location for the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#acquisition_location StepTemplate#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * ID of the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#feed_id StepTemplate#feed_id}
  */
  readonly feedId: string;
  /**
  * Package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#name StepTemplate#name}
  */
  readonly name: string;
  /**
  * The ID of the package to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#package_id StepTemplate#package_id}
  */
  readonly packageId?: string;
  /**
  * Properties for the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#properties StepTemplate#properties}
  */
  readonly properties: StepTemplatePackagesProperties;
}

export function stepTemplatePackagesToTerraform(struct?: StepTemplatePackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: stepTemplatePackagesPropertiesToTerraform(struct!.properties),
  }
}


export function stepTemplatePackagesToHclTerraform(struct?: StepTemplatePackages | cdktf.IResolvable): any {
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
      value: stepTemplatePackagesPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "StepTemplatePackagesProperties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StepTemplatePackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StepTemplatePackages | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageId = this._packageId;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepTemplatePackages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._name = undefined;
      this._packageId = undefined;
      this._properties.internalValue = undefined;
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
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties.internalValue = value.properties;
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

  // feed_id - computed: false, optional: false, required: true
  private _feedId?: string; 
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId;
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

  // package_id - computed: true, optional: true, required: false
  private _packageId?: string; 
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string) {
    this._packageId = value;
  }
  public resetPackageId() {
    this._packageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new StepTemplatePackagesPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: StepTemplatePackagesProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class StepTemplatePackagesList extends cdktf.ComplexList {
  public internalValue? : StepTemplatePackages[] | cdktf.IResolvable

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
  public get(index: number): StepTemplatePackagesOutputReference {
    return new StepTemplatePackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StepTemplateParameters {
  /**
  * Use this attribute to set a sensitive default value for the parameter when display settings are set to 'Sensitive'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#default_sensitive_value StepTemplate#default_sensitive_value}
  */
  readonly defaultSensitiveValue?: string;
  /**
  * A default value for the parameter, if applicable. This can be a hard-coded value or a variable reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#default_value StepTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The display settings for the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#display_settings StepTemplate#display_settings}
  */
  readonly displaySettings?: { [key: string]: string };
  /**
  * The help presented alongside the parameter input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#help_text StepTemplate#help_text}
  */
  readonly helpText?: string;
  /**
  * The id for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#id StepTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The label shown beside the parameter when presented in the deployment process. Example: `Server name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#label StepTemplate#label}
  */
  readonly label?: string;
  /**
  * The name of the variable set by the parameter. The name can contain letters, digits, dashes and periods. Example: `ServerName`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#name StepTemplate#name}
  */
  readonly name: string;
}

export function stepTemplateParametersToTerraform(struct?: StepTemplateParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_sensitive_value: cdktf.stringToTerraform(struct!.defaultSensitiveValue),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    display_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.displaySettings),
    help_text: cdktf.stringToTerraform(struct!.helpText),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function stepTemplateParametersToHclTerraform(struct?: StepTemplateParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_sensitive_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultSensitiveValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.displaySettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    help_text: {
      value: cdktf.stringToHclTerraform(struct!.helpText),
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StepTemplateParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StepTemplateParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSensitiveValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSensitiveValue = this._defaultSensitiveValue;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._displaySettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.displaySettings = this._displaySettings;
    }
    if (this._helpText !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpText = this._helpText;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepTemplateParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSensitiveValue = undefined;
      this._defaultValue = undefined;
      this._displaySettings = undefined;
      this._helpText = undefined;
      this._id = undefined;
      this._label = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSensitiveValue = value.defaultSensitiveValue;
      this._defaultValue = value.defaultValue;
      this._displaySettings = value.displaySettings;
      this._helpText = value.helpText;
      this._id = value.id;
      this._label = value.label;
      this._name = value.name;
    }
  }

  // default_sensitive_value - computed: false, optional: true, required: false
  private _defaultSensitiveValue?: string; 
  public get defaultSensitiveValue() {
    return this.getStringAttribute('default_sensitive_value');
  }
  public set defaultSensitiveValue(value: string) {
    this._defaultSensitiveValue = value;
  }
  public resetDefaultSensitiveValue() {
    this._defaultSensitiveValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSensitiveValueInput() {
    return this._defaultSensitiveValue;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // display_settings - computed: false, optional: true, required: false
  private _displaySettings?: { [key: string]: string }; 
  public get displaySettings() {
    return this.getStringMapAttribute('display_settings');
  }
  public set displaySettings(value: { [key: string]: string }) {
    this._displaySettings = value;
  }
  public resetDisplaySettings() {
    this._displaySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displaySettingsInput() {
    return this._displaySettings;
  }

  // help_text - computed: true, optional: true, required: false
  private _helpText?: string; 
  public get helpText() {
    return this.getStringAttribute('help_text');
  }
  public set helpText(value: string) {
    this._helpText = value;
  }
  public resetHelpText() {
    this._helpText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpTextInput() {
    return this._helpText;
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

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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
}

export class StepTemplateParametersList extends cdktf.ComplexList {
  public internalValue? : StepTemplateParameters[] | cdktf.IResolvable

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
  public get(index: number): StepTemplateParametersOutputReference {
    return new StepTemplateParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template octopusdeploy_step_template}
*/
export class StepTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_step_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StepTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StepTemplate to import
  * @param importFromId The id of the existing StepTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StepTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_step_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/step_template octopusdeploy_step_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StepTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: StepTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_step_template',
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
    this._actionType = config.actionType;
    this._description = config.description;
    this._gitDependencies.internalValue = config.gitDependencies;
    this._name = config.name;
    this._packages.internalValue = config.packages;
    this._parameters.internalValue = config.parameters;
    this._properties = config.properties;
    this._spaceId = config.spaceId;
    this._stepPackageId = config.stepPackageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // community_action_template_id - computed: true, optional: false, required: false
  public get communityActionTemplateId() {
    return this.getStringAttribute('community_action_template_id');
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

  // git_dependencies - computed: true, optional: true, required: false
  private _gitDependencies = new StepTemplateGitDependenciesList(this, "git_dependencies", false);
  public get gitDependencies() {
    return this._gitDependencies;
  }
  public putGitDependencies(value: StepTemplateGitDependencies[] | cdktf.IResolvable) {
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

  // packages - computed: false, optional: false, required: true
  private _packages = new StepTemplatePackagesList(this, "packages", false);
  public get packages() {
    return this._packages;
  }
  public putPackages(value: StepTemplatePackages[] | cdktf.IResolvable) {
    this._packages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages.internalValue;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new StepTemplateParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: StepTemplateParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // properties - computed: false, optional: false, required: true
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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

  // step_package_id - computed: false, optional: false, required: true
  private _stepPackageId?: string; 
  public get stepPackageId() {
    return this.getStringAttribute('step_package_id');
  }
  public set stepPackageId(value: string) {
    this._stepPackageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepPackageIdInput() {
    return this._stepPackageId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_type: cdktf.stringToTerraform(this._actionType),
      description: cdktf.stringToTerraform(this._description),
      git_dependencies: cdktf.listMapper(stepTemplateGitDependenciesToTerraform, false)(this._gitDependencies.internalValue),
      name: cdktf.stringToTerraform(this._name),
      packages: cdktf.listMapper(stepTemplatePackagesToTerraform, false)(this._packages.internalValue),
      parameters: cdktf.listMapper(stepTemplateParametersToTerraform, false)(this._parameters.internalValue),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      space_id: cdktf.stringToTerraform(this._spaceId),
      step_package_id: cdktf.stringToTerraform(this._stepPackageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
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
      git_dependencies: {
        value: cdktf.listMapperHcl(stepTemplateGitDependenciesToHclTerraform, false)(this._gitDependencies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StepTemplateGitDependenciesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packages: {
        value: cdktf.listMapperHcl(stepTemplatePackagesToHclTerraform, false)(this._packages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StepTemplatePackagesList",
      },
      parameters: {
        value: cdktf.listMapperHcl(stepTemplateParametersToHclTerraform, false)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StepTemplateParametersList",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      step_package_id: {
        value: cdktf.stringToHclTerraform(this._stepPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
