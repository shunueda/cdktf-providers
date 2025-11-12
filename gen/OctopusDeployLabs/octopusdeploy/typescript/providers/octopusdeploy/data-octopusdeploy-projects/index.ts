// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A filter to search for cloned resources by a project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects#cloned_from_project_id DataOctopusdeployProjects#cloned_from_project_id}
  */
  readonly clonedFromProjectId?: string;
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects#ids DataOctopusdeployProjects#ids}
  */
  readonly ids?: string[];
  /**
  * A filter to search for cloned resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects#is_clone DataOctopusdeployProjects#is_clone}
  */
  readonly isClone?: boolean | cdktf.IResolvable;
  /**
  * A filter to search by name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects#name DataOctopusdeployProjects#name}
  */
  readonly name?: string;
  /**
  * A filter to search by a partial name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects#partial_name DataOctopusdeployProjects#partial_name}
  */
  readonly partialName?: string;
  /**
  * A filter to specify the number of items to skip in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects#skip DataOctopusdeployProjects#skip}
  */
  readonly skip?: number;
  /**
  * A Space ID to filter by. Will revert what is specified on the provider if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects#space_id DataOctopusdeployProjects#space_id}
  */
  readonly spaceId?: string;
  /**
  * A filter to specify the number of items to take (or return) in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects#take DataOctopusdeployProjects#take}
  */
  readonly take?: number;
}
export interface DataOctopusdeployProjectsProjectsAutoDeployReleaseOverrides {
}

export function dataOctopusdeployProjectsProjectsAutoDeployReleaseOverridesToTerraform(struct?: DataOctopusdeployProjectsProjectsAutoDeployReleaseOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsAutoDeployReleaseOverridesToHclTerraform(struct?: DataOctopusdeployProjectsProjectsAutoDeployReleaseOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsAutoDeployReleaseOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsAutoDeployReleaseOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsAutoDeployReleaseOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // release_id - computed: true, optional: false, required: false
  public get releaseId() {
    return this.getStringAttribute('release_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataOctopusdeployProjectsProjectsAutoDeployReleaseOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsAutoDeployReleaseOverridesOutputReference {
    return new DataOctopusdeployProjectsProjectsAutoDeployReleaseOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsConnectivityPolicy {
}

export function dataOctopusdeployProjectsProjectsConnectivityPolicyToTerraform(struct?: DataOctopusdeployProjectsProjectsConnectivityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsConnectivityPolicyToHclTerraform(struct?: DataOctopusdeployProjectsProjectsConnectivityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsConnectivityPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsConnectivityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsConnectivityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_deployments_to_no_targets - computed: true, optional: false, required: false
  public get allowDeploymentsToNoTargets() {
    return this.getBooleanAttribute('allow_deployments_to_no_targets');
  }

  // exclude_unhealthy_targets - computed: true, optional: false, required: false
  public get excludeUnhealthyTargets() {
    return this.getBooleanAttribute('exclude_unhealthy_targets');
  }

  // skip_machine_behavior - computed: true, optional: false, required: false
  public get skipMachineBehavior() {
    return this.getStringAttribute('skip_machine_behavior');
  }

  // target_roles - computed: true, optional: false, required: false
  public get targetRoles() {
    return this.getListAttribute('target_roles');
  }
}

export class DataOctopusdeployProjectsProjectsConnectivityPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsConnectivityPolicyOutputReference {
    return new DataOctopusdeployProjectsProjectsConnectivityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettings {
}

export function dataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettingsToTerraform(struct?: DataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettingsToHclTerraform(struct?: DataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // protected_branches - computed: true, optional: false, required: false
  public get protectedBranches() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_branches'));
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettingsOutputReference {
    return new DataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsGitLibraryPersistenceSettings {
}

export function dataOctopusdeployProjectsProjectsGitLibraryPersistenceSettingsToTerraform(struct?: DataOctopusdeployProjectsProjectsGitLibraryPersistenceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsGitLibraryPersistenceSettingsToHclTerraform(struct?: DataOctopusdeployProjectsProjectsGitLibraryPersistenceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsGitLibraryPersistenceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsGitLibraryPersistenceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsGitLibraryPersistenceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // git_credential_id - computed: true, optional: false, required: false
  public get gitCredentialId() {
    return this.getStringAttribute('git_credential_id');
  }

  // protected_branches - computed: true, optional: false, required: false
  public get protectedBranches() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_branches'));
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOctopusdeployProjectsProjectsGitLibraryPersistenceSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsGitLibraryPersistenceSettingsOutputReference {
    return new DataOctopusdeployProjectsProjectsGitLibraryPersistenceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettings {
}

export function dataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettingsToTerraform(struct?: DataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettingsToHclTerraform(struct?: DataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // protected_branches - computed: true, optional: false, required: false
  public get protectedBranches() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_branches'));
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettingsOutputReference {
    return new DataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettings {
}

export function dataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettingsToTerraform(struct?: DataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettingsToHclTerraform(struct?: DataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // service_desk_project_name - computed: true, optional: false, required: false
  public get serviceDeskProjectName() {
    return this.getStringAttribute('service_desk_project_name');
  }
}

export class DataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettingsOutputReference {
    return new DataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackage {
}

export function dataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackageToTerraform(struct?: DataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackageToHclTerraform(struct?: DataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_action - computed: true, optional: false, required: false
  public get deploymentAction() {
    return this.getStringAttribute('deployment_action');
  }

  // package_reference - computed: true, optional: false, required: false
  public get packageReference() {
    return this.getStringAttribute('package_reference');
  }
}

export class DataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackageList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackageOutputReference {
    return new DataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsReleaseCreationStrategy {
}

export function dataOctopusdeployProjectsProjectsReleaseCreationStrategyToTerraform(struct?: DataOctopusdeployProjectsProjectsReleaseCreationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsReleaseCreationStrategyToHclTerraform(struct?: DataOctopusdeployProjectsProjectsReleaseCreationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsReleaseCreationStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsReleaseCreationStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsReleaseCreationStrategy | undefined) {
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

  // release_creation_package - computed: true, optional: false, required: false
  private _releaseCreationPackage = new DataOctopusdeployProjectsProjectsReleaseCreationStrategyReleaseCreationPackageList(this, "release_creation_package", false);
  public get releaseCreationPackage() {
    return this._releaseCreationPackage;
  }

  // release_creation_package_step_id - computed: true, optional: false, required: false
  public get releaseCreationPackageStepId() {
    return this.getStringAttribute('release_creation_package_step_id');
  }
}

export class DataOctopusdeployProjectsProjectsReleaseCreationStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsReleaseCreationStrategyOutputReference {
    return new DataOctopusdeployProjectsProjectsReleaseCreationStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsServicenowExtensionSettings {
}

export function dataOctopusdeployProjectsProjectsServicenowExtensionSettingsToTerraform(struct?: DataOctopusdeployProjectsProjectsServicenowExtensionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsServicenowExtensionSettingsToHclTerraform(struct?: DataOctopusdeployProjectsProjectsServicenowExtensionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsServicenowExtensionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsServicenowExtensionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsServicenowExtensionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_state_automatically_transitioned - computed: true, optional: false, required: false
  public get isStateAutomaticallyTransitioned() {
    return this.getBooleanAttribute('is_state_automatically_transitioned');
  }

  // standard_change_template_name - computed: true, optional: false, required: false
  public get standardChangeTemplateName() {
    return this.getStringAttribute('standard_change_template_name');
  }
}

export class DataOctopusdeployProjectsProjectsServicenowExtensionSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsServicenowExtensionSettingsOutputReference {
    return new DataOctopusdeployProjectsProjectsServicenowExtensionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsTemplate {
}

export function dataOctopusdeployProjectsProjectsTemplateToTerraform(struct?: DataOctopusdeployProjectsProjectsTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsTemplateToHclTerraform(struct?: DataOctopusdeployProjectsProjectsTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // display_settings - computed: true, optional: false, required: false
  private _displaySettings = new cdktf.StringMap(this, "display_settings");
  public get displaySettings() {
    return this._displaySettings;
  }

  // help_text - computed: true, optional: false, required: false
  public get helpText() {
    return this.getStringAttribute('help_text');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOctopusdeployProjectsProjectsTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsTemplateOutputReference {
    return new DataOctopusdeployProjectsProjectsTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsVersioningStrategyDonorPackage {
}

export function dataOctopusdeployProjectsProjectsVersioningStrategyDonorPackageToTerraform(struct?: DataOctopusdeployProjectsProjectsVersioningStrategyDonorPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsVersioningStrategyDonorPackageToHclTerraform(struct?: DataOctopusdeployProjectsProjectsVersioningStrategyDonorPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsVersioningStrategyDonorPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsVersioningStrategyDonorPackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsVersioningStrategyDonorPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_action - computed: true, optional: false, required: false
  public get deploymentAction() {
    return this.getStringAttribute('deployment_action');
  }

  // package_reference - computed: true, optional: false, required: false
  public get packageReference() {
    return this.getStringAttribute('package_reference');
  }
}

export class DataOctopusdeployProjectsProjectsVersioningStrategyDonorPackageList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsVersioningStrategyDonorPackageOutputReference {
    return new DataOctopusdeployProjectsProjectsVersioningStrategyDonorPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjectsVersioningStrategy {
}

export function dataOctopusdeployProjectsProjectsVersioningStrategyToTerraform(struct?: DataOctopusdeployProjectsProjectsVersioningStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsVersioningStrategyToHclTerraform(struct?: DataOctopusdeployProjectsProjectsVersioningStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsVersioningStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjectsVersioningStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjectsVersioningStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // donor_package - computed: true, optional: false, required: false
  private _donorPackage = new DataOctopusdeployProjectsProjectsVersioningStrategyDonorPackageList(this, "donor_package", false);
  public get donorPackage() {
    return this._donorPackage;
  }

  // donor_package_step_id - computed: true, optional: false, required: false
  public get donorPackageStepId() {
    return this.getStringAttribute('donor_package_step_id');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}

export class DataOctopusdeployProjectsProjectsVersioningStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsVersioningStrategyOutputReference {
    return new DataOctopusdeployProjectsProjectsVersioningStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployProjectsProjects {
}

export function dataOctopusdeployProjectsProjectsToTerraform(struct?: DataOctopusdeployProjectsProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployProjectsProjectsToHclTerraform(struct?: DataOctopusdeployProjectsProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployProjectsProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployProjectsProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployProjectsProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_deployments_to_no_targets - computed: true, optional: false, required: false
  public get allowDeploymentsToNoTargets() {
    return this.getBooleanAttribute('allow_deployments_to_no_targets');
  }

  // auto_create_release - computed: true, optional: false, required: false
  public get autoCreateRelease() {
    return this.getBooleanAttribute('auto_create_release');
  }

  // auto_deploy_release_overrides - computed: true, optional: false, required: false
  private _autoDeployReleaseOverrides = new DataOctopusdeployProjectsProjectsAutoDeployReleaseOverridesList(this, "auto_deploy_release_overrides", false);
  public get autoDeployReleaseOverrides() {
    return this._autoDeployReleaseOverrides;
  }

  // cloned_from_project_id - computed: true, optional: false, required: false
  public get clonedFromProjectId() {
    return this.getStringAttribute('cloned_from_project_id');
  }

  // connectivity_policy - computed: true, optional: false, required: false
  private _connectivityPolicy = new DataOctopusdeployProjectsProjectsConnectivityPolicyList(this, "connectivity_policy", false);
  public get connectivityPolicy() {
    return this._connectivityPolicy;
  }

  // default_guided_failure_mode - computed: true, optional: false, required: false
  public get defaultGuidedFailureMode() {
    return this.getStringAttribute('default_guided_failure_mode');
  }

  // default_to_skip_if_already_installed - computed: true, optional: false, required: false
  public get defaultToSkipIfAlreadyInstalled() {
    return this.getBooleanAttribute('default_to_skip_if_already_installed');
  }

  // deployment_changes_template - computed: true, optional: false, required: false
  public get deploymentChangesTemplate() {
    return this.getStringAttribute('deployment_changes_template');
  }

  // deployment_process_id - computed: true, optional: false, required: false
  public get deploymentProcessId() {
    return this.getStringAttribute('deployment_process_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // discrete_channel_release - computed: true, optional: false, required: false
  public get discreteChannelRelease() {
    return this.getBooleanAttribute('discrete_channel_release');
  }

  // git_anonymous_persistence_settings - computed: true, optional: false, required: false
  private _gitAnonymousPersistenceSettings = new DataOctopusdeployProjectsProjectsGitAnonymousPersistenceSettingsList(this, "git_anonymous_persistence_settings", false);
  public get gitAnonymousPersistenceSettings() {
    return this._gitAnonymousPersistenceSettings;
  }

  // git_library_persistence_settings - computed: true, optional: false, required: false
  private _gitLibraryPersistenceSettings = new DataOctopusdeployProjectsProjectsGitLibraryPersistenceSettingsList(this, "git_library_persistence_settings", false);
  public get gitLibraryPersistenceSettings() {
    return this._gitLibraryPersistenceSettings;
  }

  // git_username_password_persistence_settings - computed: true, optional: false, required: false
  private _gitUsernamePasswordPersistenceSettings = new DataOctopusdeployProjectsProjectsGitUsernamePasswordPersistenceSettingsList(this, "git_username_password_persistence_settings", false);
  public get gitUsernamePasswordPersistenceSettings() {
    return this._gitUsernamePasswordPersistenceSettings;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_library_variable_sets - computed: true, optional: false, required: false
  public get includedLibraryVariableSets() {
    return this.getListAttribute('included_library_variable_sets');
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // is_discrete_channel_release - computed: true, optional: false, required: false
  public get isDiscreteChannelRelease() {
    return this.getBooleanAttribute('is_discrete_channel_release');
  }

  // is_version_controlled - computed: true, optional: false, required: false
  public get isVersionControlled() {
    return this.getBooleanAttribute('is_version_controlled');
  }

  // jira_service_management_extension_settings - computed: true, optional: false, required: false
  private _jiraServiceManagementExtensionSettings = new DataOctopusdeployProjectsProjectsJiraServiceManagementExtensionSettingsList(this, "jira_service_management_extension_settings", false);
  public get jiraServiceManagementExtensionSettings() {
    return this._jiraServiceManagementExtensionSettings;
  }

  // lifecycle_id - computed: true, optional: false, required: false
  public get lifecycleId() {
    return this.getStringAttribute('lifecycle_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_group_id - computed: true, optional: false, required: false
  public get projectGroupId() {
    return this.getStringAttribute('project_group_id');
  }

  // release_creation_strategy - computed: true, optional: false, required: false
  private _releaseCreationStrategy = new DataOctopusdeployProjectsProjectsReleaseCreationStrategyList(this, "release_creation_strategy", false);
  public get releaseCreationStrategy() {
    return this._releaseCreationStrategy;
  }

  // release_notes_template - computed: true, optional: false, required: false
  public get releaseNotesTemplate() {
    return this.getStringAttribute('release_notes_template');
  }

  // servicenow_extension_settings - computed: true, optional: false, required: false
  private _servicenowExtensionSettings = new DataOctopusdeployProjectsProjectsServicenowExtensionSettingsList(this, "servicenow_extension_settings", false);
  public get servicenowExtensionSettings() {
    return this._servicenowExtensionSettings;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataOctopusdeployProjectsProjectsTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }

  // tenanted_deployment_participation - computed: true, optional: false, required: false
  public get tenantedDeploymentParticipation() {
    return this.getStringAttribute('tenanted_deployment_participation');
  }

  // variable_set_id - computed: true, optional: false, required: false
  public get variableSetId() {
    return this.getStringAttribute('variable_set_id');
  }

  // versioning_strategy - computed: true, optional: false, required: false
  private _versioningStrategy = new DataOctopusdeployProjectsProjectsVersioningStrategyList(this, "versioning_strategy", false);
  public get versioningStrategy() {
    return this._versioningStrategy;
  }
}

export class DataOctopusdeployProjectsProjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployProjectsProjectsOutputReference {
    return new DataOctopusdeployProjectsProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects octopusdeploy_projects}
*/
export class DataOctopusdeployProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployProjects to import
  * @param importFromId The id of the existing DataOctopusdeployProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/projects octopusdeploy_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployProjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployProjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_projects',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2',
        providerVersionConstraint: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clonedFromProjectId = config.clonedFromProjectId;
    this._ids = config.ids;
    this._isClone = config.isClone;
    this._name = config.name;
    this._partialName = config.partialName;
    this._skip = config.skip;
    this._spaceId = config.spaceId;
    this._take = config.take;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloned_from_project_id - computed: false, optional: true, required: false
  private _clonedFromProjectId?: string; 
  public get clonedFromProjectId() {
    return this.getStringAttribute('cloned_from_project_id');
  }
  public set clonedFromProjectId(value: string) {
    this._clonedFromProjectId = value;
  }
  public resetClonedFromProjectId() {
    this._clonedFromProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clonedFromProjectIdInput() {
    return this._clonedFromProjectId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // is_clone - computed: false, optional: true, required: false
  private _isClone?: boolean | cdktf.IResolvable; 
  public get isClone() {
    return this.getBooleanAttribute('is_clone');
  }
  public set isClone(value: boolean | cdktf.IResolvable) {
    this._isClone = value;
  }
  public resetIsClone() {
    this._isClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCloneInput() {
    return this._isClone;
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

  // partial_name - computed: false, optional: true, required: false
  private _partialName?: string; 
  public get partialName() {
    return this.getStringAttribute('partial_name');
  }
  public set partialName(value: string) {
    this._partialName = value;
  }
  public resetPartialName() {
    this._partialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialNameInput() {
    return this._partialName;
  }

  // projects - computed: true, optional: false, required: false
  private _projects = new DataOctopusdeployProjectsProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // space_id - computed: false, optional: true, required: false
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

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloned_from_project_id: cdktf.stringToTerraform(this._clonedFromProjectId),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      is_clone: cdktf.booleanToTerraform(this._isClone),
      name: cdktf.stringToTerraform(this._name),
      partial_name: cdktf.stringToTerraform(this._partialName),
      skip: cdktf.numberToTerraform(this._skip),
      space_id: cdktf.stringToTerraform(this._spaceId),
      take: cdktf.numberToTerraform(this._take),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloned_from_project_id: {
        value: cdktf.stringToHclTerraform(this._clonedFromProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_clone: {
        value: cdktf.booleanToHclTerraform(this._isClone),
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
      partial_name: {
        value: cdktf.stringToHclTerraform(this._partialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
