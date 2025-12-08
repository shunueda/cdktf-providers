// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#allow_deployments_to_no_targets Project#allow_deployments_to_no_targets}
  */
  readonly allowDeploymentsToNoTargets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#auto_create_release Project#auto_create_release}
  */
  readonly autoCreateRelease?: boolean | cdktf.IResolvable;
  /**
  * The ID of the project this project was cloned from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#cloned_from_project_id Project#cloned_from_project_id}
  */
  readonly clonedFromProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#default_guided_failure_mode Project#default_guided_failure_mode}
  */
  readonly defaultGuidedFailureMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#default_to_skip_if_already_installed Project#default_to_skip_if_already_installed}
  */
  readonly defaultToSkipIfAlreadyInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#deployment_changes_template Project#deployment_changes_template}
  */
  readonly deploymentChangesTemplate?: string;
  /**
  * The ID of the runbook to run when deprovisioning an ephemeral environment for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#deprovisioning_runbook_id Project#deprovisioning_runbook_id}
  */
  readonly deprovisioningRunbookId?: string;
  /**
  * The description of this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Treats releases of different channels to the same environment as a separate deployment dimension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#discrete_channel_release Project#discrete_channel_release}
  */
  readonly discreteChannelRelease?: boolean | cdktf.IResolvable;
  /**
  * The list of included library variable set IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#included_library_variable_sets Project#included_library_variable_sets}
  */
  readonly includedLibraryVariableSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#is_disabled Project#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Treats releases of different channels to the same environment as a separate deployment dimension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#is_discrete_channel_release Project#is_discrete_channel_release}
  */
  readonly isDiscreteChannelRelease?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#is_version_controlled Project#is_version_controlled}
  */
  readonly isVersionControlled?: boolean | cdktf.IResolvable;
  /**
  * The lifecycle ID associated with this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#lifecycle_id Project#lifecycle_id}
  */
  readonly lifecycleId: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * The project group ID associated with this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#project_group_id Project#project_group_id}
  */
  readonly projectGroupId: string;
  /**
  * A list of project tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#project_tags Project#project_tags}
  */
  readonly projectTags?: string[];
  /**
  * The ID of the runbook to run when provisioning an ephemeral environment for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#provisioning_runbook_id Project#provisioning_runbook_id}
  */
  readonly provisioningRunbookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#release_notes_template Project#release_notes_template}
  */
  readonly releaseNotesTemplate?: string;
  /**
  * A human-readable, unique identifier, used to identify a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#slug Project#slug}
  */
  readonly slug?: string;
  /**
  * The space ID associated with this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#space_id Project#space_id}
  */
  readonly spaceId?: string;
  /**
  * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or `Tenanted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#tenanted_deployment_participation Project#tenanted_deployment_participation}
  */
  readonly tenantedDeploymentParticipation?: string;
  /**
  * auto_deploy_release_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#auto_deploy_release_overrides Project#auto_deploy_release_overrides}
  */
  readonly autoDeployReleaseOverrides?: ProjectAutoDeployReleaseOverrides[] | cdktf.IResolvable;
  /**
  * connectivity_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#connectivity_policy Project#connectivity_policy}
  */
  readonly connectivityPolicy?: ProjectConnectivityPolicy[] | cdktf.IResolvable;
  /**
  * git_anonymous_persistence_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#git_anonymous_persistence_settings Project#git_anonymous_persistence_settings}
  */
  readonly gitAnonymousPersistenceSettings?: ProjectGitAnonymousPersistenceSettings[] | cdktf.IResolvable;
  /**
  * git_library_persistence_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#git_library_persistence_settings Project#git_library_persistence_settings}
  */
  readonly gitLibraryPersistenceSettings?: ProjectGitLibraryPersistenceSettings[] | cdktf.IResolvable;
  /**
  * git_username_password_persistence_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#git_username_password_persistence_settings Project#git_username_password_persistence_settings}
  */
  readonly gitUsernamePasswordPersistenceSettings?: ProjectGitUsernamePasswordPersistenceSettings[] | cdktf.IResolvable;
  /**
  * jira_service_management_extension_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#jira_service_management_extension_settings Project#jira_service_management_extension_settings}
  */
  readonly jiraServiceManagementExtensionSettings?: ProjectJiraServiceManagementExtensionSettings[] | cdktf.IResolvable;
  /**
  * release_creation_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#release_creation_strategy Project#release_creation_strategy}
  */
  readonly releaseCreationStrategy?: ProjectReleaseCreationStrategy[] | cdktf.IResolvable;
  /**
  * servicenow_extension_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#servicenow_extension_settings Project#servicenow_extension_settings}
  */
  readonly servicenowExtensionSettings?: ProjectServicenowExtensionSettings[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#template Project#template}
  */
  readonly template?: ProjectTemplate[] | cdktf.IResolvable;
  /**
  * versioning_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#versioning_strategy Project#versioning_strategy}
  */
  readonly versioningStrategy?: ProjectVersioningStrategy[] | cdktf.IResolvable;
}
export interface ProjectAutoDeployReleaseOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#environment_id Project#environment_id}
  */
  readonly environmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#release_id Project#release_id}
  */
  readonly releaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#tenant_id Project#tenant_id}
  */
  readonly tenantId?: string;
}

export function projectAutoDeployReleaseOverridesToTerraform(struct?: ProjectAutoDeployReleaseOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
    release_id: cdktf.stringToTerraform(struct!.releaseId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function projectAutoDeployReleaseOverridesToHclTerraform(struct?: ProjectAutoDeployReleaseOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_id: {
      value: cdktf.stringToHclTerraform(struct!.releaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectAutoDeployReleaseOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectAutoDeployReleaseOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._releaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseId = this._releaseId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectAutoDeployReleaseOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentId = undefined;
      this._releaseId = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentId = value.environmentId;
      this._releaseId = value.releaseId;
      this._tenantId = value.tenantId;
    }
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // release_id - computed: false, optional: true, required: false
  private _releaseId?: string; 
  public get releaseId() {
    return this.getStringAttribute('release_id');
  }
  public set releaseId(value: string) {
    this._releaseId = value;
  }
  public resetReleaseId() {
    this._releaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseIdInput() {
    return this._releaseId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class ProjectAutoDeployReleaseOverridesList extends cdktf.ComplexList {
  public internalValue? : ProjectAutoDeployReleaseOverrides[] | cdktf.IResolvable

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
  public get(index: number): ProjectAutoDeployReleaseOverridesOutputReference {
    return new ProjectAutoDeployReleaseOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectConnectivityPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#allow_deployments_to_no_targets Project#allow_deployments_to_no_targets}
  */
  readonly allowDeploymentsToNoTargets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#exclude_unhealthy_targets Project#exclude_unhealthy_targets}
  */
  readonly excludeUnhealthyTargets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#skip_machine_behavior Project#skip_machine_behavior}
  */
  readonly skipMachineBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#target_roles Project#target_roles}
  */
  readonly targetRoles?: string[];
}

export function projectConnectivityPolicyToTerraform(struct?: ProjectConnectivityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_deployments_to_no_targets: cdktf.booleanToTerraform(struct!.allowDeploymentsToNoTargets),
    exclude_unhealthy_targets: cdktf.booleanToTerraform(struct!.excludeUnhealthyTargets),
    skip_machine_behavior: cdktf.stringToTerraform(struct!.skipMachineBehavior),
    target_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetRoles),
  }
}


export function projectConnectivityPolicyToHclTerraform(struct?: ProjectConnectivityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_deployments_to_no_targets: {
      value: cdktf.booleanToHclTerraform(struct!.allowDeploymentsToNoTargets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_unhealthy_targets: {
      value: cdktf.booleanToHclTerraform(struct!.excludeUnhealthyTargets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_machine_behavior: {
      value: cdktf.stringToHclTerraform(struct!.skipMachineBehavior),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectConnectivityPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectConnectivityPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDeploymentsToNoTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDeploymentsToNoTargets = this._allowDeploymentsToNoTargets;
    }
    if (this._excludeUnhealthyTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeUnhealthyTargets = this._excludeUnhealthyTargets;
    }
    if (this._skipMachineBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipMachineBehavior = this._skipMachineBehavior;
    }
    if (this._targetRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRoles = this._targetRoles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectConnectivityPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDeploymentsToNoTargets = undefined;
      this._excludeUnhealthyTargets = undefined;
      this._skipMachineBehavior = undefined;
      this._targetRoles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDeploymentsToNoTargets = value.allowDeploymentsToNoTargets;
      this._excludeUnhealthyTargets = value.excludeUnhealthyTargets;
      this._skipMachineBehavior = value.skipMachineBehavior;
      this._targetRoles = value.targetRoles;
    }
  }

  // allow_deployments_to_no_targets - computed: true, optional: true, required: false
  private _allowDeploymentsToNoTargets?: boolean | cdktf.IResolvable; 
  public get allowDeploymentsToNoTargets() {
    return this.getBooleanAttribute('allow_deployments_to_no_targets');
  }
  public set allowDeploymentsToNoTargets(value: boolean | cdktf.IResolvable) {
    this._allowDeploymentsToNoTargets = value;
  }
  public resetAllowDeploymentsToNoTargets() {
    this._allowDeploymentsToNoTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeploymentsToNoTargetsInput() {
    return this._allowDeploymentsToNoTargets;
  }

  // exclude_unhealthy_targets - computed: true, optional: true, required: false
  private _excludeUnhealthyTargets?: boolean | cdktf.IResolvable; 
  public get excludeUnhealthyTargets() {
    return this.getBooleanAttribute('exclude_unhealthy_targets');
  }
  public set excludeUnhealthyTargets(value: boolean | cdktf.IResolvable) {
    this._excludeUnhealthyTargets = value;
  }
  public resetExcludeUnhealthyTargets() {
    this._excludeUnhealthyTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUnhealthyTargetsInput() {
    return this._excludeUnhealthyTargets;
  }

  // skip_machine_behavior - computed: true, optional: true, required: false
  private _skipMachineBehavior?: string; 
  public get skipMachineBehavior() {
    return this.getStringAttribute('skip_machine_behavior');
  }
  public set skipMachineBehavior(value: string) {
    this._skipMachineBehavior = value;
  }
  public resetSkipMachineBehavior() {
    this._skipMachineBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMachineBehaviorInput() {
    return this._skipMachineBehavior;
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
}

export class ProjectConnectivityPolicyList extends cdktf.ComplexList {
  public internalValue? : ProjectConnectivityPolicy[] | cdktf.IResolvable

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
  public get(index: number): ProjectConnectivityPolicyOutputReference {
    return new ProjectConnectivityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectGitAnonymousPersistenceSettings {
  /**
  * The base path associated with these version control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#base_path Project#base_path}
  */
  readonly basePath?: string;
  /**
  * The default branch associated with these version control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#default_branch Project#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * A list of protected branch patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#protected_branches Project#protected_branches}
  */
  readonly protectedBranches?: string[];
  /**
  * The URL associated with these version control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#url Project#url}
  */
  readonly url: string;
}

export function projectGitAnonymousPersistenceSettingsToTerraform(struct?: ProjectGitAnonymousPersistenceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_path: cdktf.stringToTerraform(struct!.basePath),
    default_branch: cdktf.stringToTerraform(struct!.defaultBranch),
    protected_branches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protectedBranches),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function projectGitAnonymousPersistenceSettingsToHclTerraform(struct?: ProjectGitAnonymousPersistenceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_branch: {
      value: cdktf.stringToHclTerraform(struct!.defaultBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected_branches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protectedBranches),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ProjectGitAnonymousPersistenceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectGitAnonymousPersistenceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._defaultBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch;
    }
    if (this._protectedBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedBranches = this._protectedBranches;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectGitAnonymousPersistenceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basePath = undefined;
      this._defaultBranch = undefined;
      this._protectedBranches = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basePath = value.basePath;
      this._defaultBranch = value.defaultBranch;
      this._protectedBranches = value.protectedBranches;
      this._url = value.url;
    }
  }

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // default_branch - computed: false, optional: true, required: false
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // protected_branches - computed: true, optional: true, required: false
  private _protectedBranches?: string[]; 
  public get protectedBranches() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_branches'));
  }
  public set protectedBranches(value: string[]) {
    this._protectedBranches = value;
  }
  public resetProtectedBranches() {
    this._protectedBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedBranchesInput() {
    return this._protectedBranches;
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

export class ProjectGitAnonymousPersistenceSettingsList extends cdktf.ComplexList {
  public internalValue? : ProjectGitAnonymousPersistenceSettings[] | cdktf.IResolvable

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
  public get(index: number): ProjectGitAnonymousPersistenceSettingsOutputReference {
    return new ProjectGitAnonymousPersistenceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectGitLibraryPersistenceSettings {
  /**
  * The base path associated with these version control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#base_path Project#base_path}
  */
  readonly basePath?: string;
  /**
  * The default branch associated with these version control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#default_branch Project#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#git_credential_id Project#git_credential_id}
  */
  readonly gitCredentialId: string;
  /**
  * A list of protected branch patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#protected_branches Project#protected_branches}
  */
  readonly protectedBranches?: string[];
  /**
  * The URL associated with these version control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#url Project#url}
  */
  readonly url: string;
}

export function projectGitLibraryPersistenceSettingsToTerraform(struct?: ProjectGitLibraryPersistenceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_path: cdktf.stringToTerraform(struct!.basePath),
    default_branch: cdktf.stringToTerraform(struct!.defaultBranch),
    git_credential_id: cdktf.stringToTerraform(struct!.gitCredentialId),
    protected_branches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protectedBranches),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function projectGitLibraryPersistenceSettingsToHclTerraform(struct?: ProjectGitLibraryPersistenceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_branch: {
      value: cdktf.stringToHclTerraform(struct!.defaultBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.gitCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected_branches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protectedBranches),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ProjectGitLibraryPersistenceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectGitLibraryPersistenceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._defaultBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch;
    }
    if (this._gitCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitCredentialId = this._gitCredentialId;
    }
    if (this._protectedBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedBranches = this._protectedBranches;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectGitLibraryPersistenceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basePath = undefined;
      this._defaultBranch = undefined;
      this._gitCredentialId = undefined;
      this._protectedBranches = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basePath = value.basePath;
      this._defaultBranch = value.defaultBranch;
      this._gitCredentialId = value.gitCredentialId;
      this._protectedBranches = value.protectedBranches;
      this._url = value.url;
    }
  }

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // default_branch - computed: false, optional: true, required: false
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // git_credential_id - computed: false, optional: false, required: true
  private _gitCredentialId?: string; 
  public get gitCredentialId() {
    return this.getStringAttribute('git_credential_id');
  }
  public set gitCredentialId(value: string) {
    this._gitCredentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCredentialIdInput() {
    return this._gitCredentialId;
  }

  // protected_branches - computed: true, optional: true, required: false
  private _protectedBranches?: string[]; 
  public get protectedBranches() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_branches'));
  }
  public set protectedBranches(value: string[]) {
    this._protectedBranches = value;
  }
  public resetProtectedBranches() {
    this._protectedBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedBranchesInput() {
    return this._protectedBranches;
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

export class ProjectGitLibraryPersistenceSettingsList extends cdktf.ComplexList {
  public internalValue? : ProjectGitLibraryPersistenceSettings[] | cdktf.IResolvable

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
  public get(index: number): ProjectGitLibraryPersistenceSettingsOutputReference {
    return new ProjectGitLibraryPersistenceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectGitUsernamePasswordPersistenceSettings {
  /**
  * The base path associated with these version control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#base_path Project#base_path}
  */
  readonly basePath?: string;
  /**
  * The default branch associated with these version control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#default_branch Project#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * The password for the Git credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#password Project#password}
  */
  readonly password: string;
  /**
  * A list of protected branch patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#protected_branches Project#protected_branches}
  */
  readonly protectedBranches?: string[];
  /**
  * The URL associated with these version control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#url Project#url}
  */
  readonly url: string;
  /**
  * The username for the Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#username Project#username}
  */
  readonly username: string;
}

export function projectGitUsernamePasswordPersistenceSettingsToTerraform(struct?: ProjectGitUsernamePasswordPersistenceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_path: cdktf.stringToTerraform(struct!.basePath),
    default_branch: cdktf.stringToTerraform(struct!.defaultBranch),
    password: cdktf.stringToTerraform(struct!.password),
    protected_branches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protectedBranches),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function projectGitUsernamePasswordPersistenceSettingsToHclTerraform(struct?: ProjectGitUsernamePasswordPersistenceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_branch: {
      value: cdktf.stringToHclTerraform(struct!.defaultBranch),
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
    protected_branches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protectedBranches),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectGitUsernamePasswordPersistenceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectGitUsernamePasswordPersistenceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._defaultBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._protectedBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedBranches = this._protectedBranches;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectGitUsernamePasswordPersistenceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basePath = undefined;
      this._defaultBranch = undefined;
      this._password = undefined;
      this._protectedBranches = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basePath = value.basePath;
      this._defaultBranch = value.defaultBranch;
      this._password = value.password;
      this._protectedBranches = value.protectedBranches;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // default_branch - computed: false, optional: true, required: false
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
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

  // protected_branches - computed: true, optional: true, required: false
  private _protectedBranches?: string[]; 
  public get protectedBranches() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_branches'));
  }
  public set protectedBranches(value: string[]) {
    this._protectedBranches = value;
  }
  public resetProtectedBranches() {
    this._protectedBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedBranchesInput() {
    return this._protectedBranches;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ProjectGitUsernamePasswordPersistenceSettingsList extends cdktf.ComplexList {
  public internalValue? : ProjectGitUsernamePasswordPersistenceSettings[] | cdktf.IResolvable

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
  public get(index: number): ProjectGitUsernamePasswordPersistenceSettingsOutputReference {
    return new ProjectGitUsernamePasswordPersistenceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectJiraServiceManagementExtensionSettings {
  /**
  * The connection identifier associated with the extension settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#connection_id Project#connection_id}
  */
  readonly connectionId: string;
  /**
  * Specifies whether or not this extension is enabled for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#is_enabled Project#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * The project name associated with this extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#service_desk_project_name Project#service_desk_project_name}
  */
  readonly serviceDeskProjectName: string;
}

export function projectJiraServiceManagementExtensionSettingsToTerraform(struct?: ProjectJiraServiceManagementExtensionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    service_desk_project_name: cdktf.stringToTerraform(struct!.serviceDeskProjectName),
  }
}


export function projectJiraServiceManagementExtensionSettingsToHclTerraform(struct?: ProjectJiraServiceManagementExtensionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_desk_project_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceDeskProjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectJiraServiceManagementExtensionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectJiraServiceManagementExtensionSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._serviceDeskProjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDeskProjectName = this._serviceDeskProjectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectJiraServiceManagementExtensionSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._isEnabled = undefined;
      this._serviceDeskProjectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._isEnabled = value.isEnabled;
      this._serviceDeskProjectName = value.serviceDeskProjectName;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // service_desk_project_name - computed: false, optional: false, required: true
  private _serviceDeskProjectName?: string; 
  public get serviceDeskProjectName() {
    return this.getStringAttribute('service_desk_project_name');
  }
  public set serviceDeskProjectName(value: string) {
    this._serviceDeskProjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDeskProjectNameInput() {
    return this._serviceDeskProjectName;
  }
}

export class ProjectJiraServiceManagementExtensionSettingsList extends cdktf.ComplexList {
  public internalValue? : ProjectJiraServiceManagementExtensionSettings[] | cdktf.IResolvable

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
  public get(index: number): ProjectJiraServiceManagementExtensionSettingsOutputReference {
    return new ProjectJiraServiceManagementExtensionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectReleaseCreationStrategyReleaseCreationPackage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#deployment_action Project#deployment_action}
  */
  readonly deploymentAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#package_reference Project#package_reference}
  */
  readonly packageReference?: string;
}

export function projectReleaseCreationStrategyReleaseCreationPackageToTerraform(struct?: ProjectReleaseCreationStrategyReleaseCreationPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_action: cdktf.stringToTerraform(struct!.deploymentAction),
    package_reference: cdktf.stringToTerraform(struct!.packageReference),
  }
}


export function projectReleaseCreationStrategyReleaseCreationPackageToHclTerraform(struct?: ProjectReleaseCreationStrategyReleaseCreationPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_action: {
      value: cdktf.stringToHclTerraform(struct!.deploymentAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_reference: {
      value: cdktf.stringToHclTerraform(struct!.packageReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectReleaseCreationStrategyReleaseCreationPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectReleaseCreationStrategyReleaseCreationPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentAction = this._deploymentAction;
    }
    if (this._packageReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageReference = this._packageReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectReleaseCreationStrategyReleaseCreationPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentAction = undefined;
      this._packageReference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentAction = value.deploymentAction;
      this._packageReference = value.packageReference;
    }
  }

  // deployment_action - computed: false, optional: true, required: false
  private _deploymentAction?: string; 
  public get deploymentAction() {
    return this.getStringAttribute('deployment_action');
  }
  public set deploymentAction(value: string) {
    this._deploymentAction = value;
  }
  public resetDeploymentAction() {
    this._deploymentAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentActionInput() {
    return this._deploymentAction;
  }

  // package_reference - computed: false, optional: true, required: false
  private _packageReference?: string; 
  public get packageReference() {
    return this.getStringAttribute('package_reference');
  }
  public set packageReference(value: string) {
    this._packageReference = value;
  }
  public resetPackageReference() {
    this._packageReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageReferenceInput() {
    return this._packageReference;
  }
}

export class ProjectReleaseCreationStrategyReleaseCreationPackageList extends cdktf.ComplexList {
  public internalValue? : ProjectReleaseCreationStrategyReleaseCreationPackage[] | cdktf.IResolvable

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
  public get(index: number): ProjectReleaseCreationStrategyReleaseCreationPackageOutputReference {
    return new ProjectReleaseCreationStrategyReleaseCreationPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectReleaseCreationStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#channel_id Project#channel_id}
  */
  readonly channelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#release_creation_package_step_id Project#release_creation_package_step_id}
  */
  readonly releaseCreationPackageStepId?: string;
  /**
  * release_creation_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#release_creation_package Project#release_creation_package}
  */
  readonly releaseCreationPackage?: ProjectReleaseCreationStrategyReleaseCreationPackage[] | cdktf.IResolvable;
}

export function projectReleaseCreationStrategyToTerraform(struct?: ProjectReleaseCreationStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    release_creation_package_step_id: cdktf.stringToTerraform(struct!.releaseCreationPackageStepId),
    release_creation_package: cdktf.listMapper(projectReleaseCreationStrategyReleaseCreationPackageToTerraform, true)(struct!.releaseCreationPackage),
  }
}


export function projectReleaseCreationStrategyToHclTerraform(struct?: ProjectReleaseCreationStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_id: {
      value: cdktf.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_creation_package_step_id: {
      value: cdktf.stringToHclTerraform(struct!.releaseCreationPackageStepId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_creation_package: {
      value: cdktf.listMapperHcl(projectReleaseCreationStrategyReleaseCreationPackageToHclTerraform, true)(struct!.releaseCreationPackage),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectReleaseCreationStrategyReleaseCreationPackageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectReleaseCreationStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectReleaseCreationStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._releaseCreationPackageStepId !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseCreationPackageStepId = this._releaseCreationPackageStepId;
    }
    if (this._releaseCreationPackage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseCreationPackage = this._releaseCreationPackage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectReleaseCreationStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelId = undefined;
      this._releaseCreationPackageStepId = undefined;
      this._releaseCreationPackage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelId = value.channelId;
      this._releaseCreationPackageStepId = value.releaseCreationPackageStepId;
      this._releaseCreationPackage.internalValue = value.releaseCreationPackage;
    }
  }

  // channel_id - computed: false, optional: true, required: false
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  public resetChannelId() {
    this._channelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // release_creation_package_step_id - computed: false, optional: true, required: false
  private _releaseCreationPackageStepId?: string; 
  public get releaseCreationPackageStepId() {
    return this.getStringAttribute('release_creation_package_step_id');
  }
  public set releaseCreationPackageStepId(value: string) {
    this._releaseCreationPackageStepId = value;
  }
  public resetReleaseCreationPackageStepId() {
    this._releaseCreationPackageStepId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCreationPackageStepIdInput() {
    return this._releaseCreationPackageStepId;
  }

  // release_creation_package - computed: false, optional: true, required: false
  private _releaseCreationPackage = new ProjectReleaseCreationStrategyReleaseCreationPackageList(this, "release_creation_package", false);
  public get releaseCreationPackage() {
    return this._releaseCreationPackage;
  }
  public putReleaseCreationPackage(value: ProjectReleaseCreationStrategyReleaseCreationPackage[] | cdktf.IResolvable) {
    this._releaseCreationPackage.internalValue = value;
  }
  public resetReleaseCreationPackage() {
    this._releaseCreationPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCreationPackageInput() {
    return this._releaseCreationPackage.internalValue;
  }
}

export class ProjectReleaseCreationStrategyList extends cdktf.ComplexList {
  public internalValue? : ProjectReleaseCreationStrategy[] | cdktf.IResolvable

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
  public get(index: number): ProjectReleaseCreationStrategyOutputReference {
    return new ProjectReleaseCreationStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectServicenowExtensionSettings {
  /**
  * The connection identifier associated with the extension settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#connection_id Project#connection_id}
  */
  readonly connectionId: string;
  /**
  * Specifies whether or not this extension is enabled for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#is_enabled Project#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not this extension will automatically transition the state of a deployment for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#is_state_automatically_transitioned Project#is_state_automatically_transitioned}
  */
  readonly isStateAutomaticallyTransitioned: boolean | cdktf.IResolvable;
  /**
  * The name of the standard change template associated with this extension. If provided, deployments will create a standard change based on the provided template, otherwise a normal change will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#standard_change_template_name Project#standard_change_template_name}
  */
  readonly standardChangeTemplateName?: string;
}

export function projectServicenowExtensionSettingsToTerraform(struct?: ProjectServicenowExtensionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_state_automatically_transitioned: cdktf.booleanToTerraform(struct!.isStateAutomaticallyTransitioned),
    standard_change_template_name: cdktf.stringToTerraform(struct!.standardChangeTemplateName),
  }
}


export function projectServicenowExtensionSettingsToHclTerraform(struct?: ProjectServicenowExtensionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_state_automatically_transitioned: {
      value: cdktf.booleanToHclTerraform(struct!.isStateAutomaticallyTransitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    standard_change_template_name: {
      value: cdktf.stringToHclTerraform(struct!.standardChangeTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectServicenowExtensionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectServicenowExtensionSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isStateAutomaticallyTransitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.isStateAutomaticallyTransitioned = this._isStateAutomaticallyTransitioned;
    }
    if (this._standardChangeTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardChangeTemplateName = this._standardChangeTemplateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectServicenowExtensionSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._isEnabled = undefined;
      this._isStateAutomaticallyTransitioned = undefined;
      this._standardChangeTemplateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._isEnabled = value.isEnabled;
      this._isStateAutomaticallyTransitioned = value.isStateAutomaticallyTransitioned;
      this._standardChangeTemplateName = value.standardChangeTemplateName;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_state_automatically_transitioned - computed: false, optional: false, required: true
  private _isStateAutomaticallyTransitioned?: boolean | cdktf.IResolvable; 
  public get isStateAutomaticallyTransitioned() {
    return this.getBooleanAttribute('is_state_automatically_transitioned');
  }
  public set isStateAutomaticallyTransitioned(value: boolean | cdktf.IResolvable) {
    this._isStateAutomaticallyTransitioned = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isStateAutomaticallyTransitionedInput() {
    return this._isStateAutomaticallyTransitioned;
  }

  // standard_change_template_name - computed: false, optional: true, required: false
  private _standardChangeTemplateName?: string; 
  public get standardChangeTemplateName() {
    return this.getStringAttribute('standard_change_template_name');
  }
  public set standardChangeTemplateName(value: string) {
    this._standardChangeTemplateName = value;
  }
  public resetStandardChangeTemplateName() {
    this._standardChangeTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardChangeTemplateNameInput() {
    return this._standardChangeTemplateName;
  }
}

export class ProjectServicenowExtensionSettingsList extends cdktf.ComplexList {
  public internalValue? : ProjectServicenowExtensionSettings[] | cdktf.IResolvable

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
  public get(index: number): ProjectServicenowExtensionSettingsOutputReference {
    return new ProjectServicenowExtensionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectTemplate {
  /**
  * A default value for the parameter, if applicable. This can be a hard-coded value or a variable reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#default_value Project#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The display settings for the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#display_settings Project#display_settings}
  */
  readonly displaySettings?: { [key: string]: string };
  /**
  * The help presented alongside the parameter input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#help_text Project#help_text}
  */
  readonly helpText?: string;
  /**
  * The ID of the template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The label shown beside the parameter when presented in the deployment process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#label Project#label}
  */
  readonly label?: string;
  /**
  * The name of the variable set by the parameter. The name can contain letters, digits, dashes and periods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
}

export function projectTemplateToTerraform(struct?: ProjectTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    display_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.displaySettings),
    help_text: cdktf.stringToTerraform(struct!.helpText),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function projectTemplateToHclTerraform(struct?: ProjectTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ProjectTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ProjectTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._defaultValue = value.defaultValue;
      this._displaySettings = value.displaySettings;
      this._helpText = value.helpText;
      this._id = value.id;
      this._label = value.label;
      this._name = value.name;
    }
  }

  // default_value - computed: false, optional: true, required: false
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

  // help_text - computed: false, optional: true, required: false
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

  // label - computed: false, optional: true, required: false
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

export class ProjectTemplateList extends cdktf.ComplexList {
  public internalValue? : ProjectTemplate[] | cdktf.IResolvable

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
  public get(index: number): ProjectTemplateOutputReference {
    return new ProjectTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectVersioningStrategyDonorPackage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#deployment_action Project#deployment_action}
  */
  readonly deploymentAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#package_reference Project#package_reference}
  */
  readonly packageReference?: string;
}

export function projectVersioningStrategyDonorPackageToTerraform(struct?: ProjectVersioningStrategyDonorPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_action: cdktf.stringToTerraform(struct!.deploymentAction),
    package_reference: cdktf.stringToTerraform(struct!.packageReference),
  }
}


export function projectVersioningStrategyDonorPackageToHclTerraform(struct?: ProjectVersioningStrategyDonorPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_action: {
      value: cdktf.stringToHclTerraform(struct!.deploymentAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_reference: {
      value: cdktf.stringToHclTerraform(struct!.packageReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectVersioningStrategyDonorPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectVersioningStrategyDonorPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentAction = this._deploymentAction;
    }
    if (this._packageReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageReference = this._packageReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectVersioningStrategyDonorPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentAction = undefined;
      this._packageReference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentAction = value.deploymentAction;
      this._packageReference = value.packageReference;
    }
  }

  // deployment_action - computed: false, optional: true, required: false
  private _deploymentAction?: string; 
  public get deploymentAction() {
    return this.getStringAttribute('deployment_action');
  }
  public set deploymentAction(value: string) {
    this._deploymentAction = value;
  }
  public resetDeploymentAction() {
    this._deploymentAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentActionInput() {
    return this._deploymentAction;
  }

  // package_reference - computed: false, optional: true, required: false
  private _packageReference?: string; 
  public get packageReference() {
    return this.getStringAttribute('package_reference');
  }
  public set packageReference(value: string) {
    this._packageReference = value;
  }
  public resetPackageReference() {
    this._packageReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageReferenceInput() {
    return this._packageReference;
  }
}

export class ProjectVersioningStrategyDonorPackageList extends cdktf.ComplexList {
  public internalValue? : ProjectVersioningStrategyDonorPackage[] | cdktf.IResolvable

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
  public get(index: number): ProjectVersioningStrategyDonorPackageOutputReference {
    return new ProjectVersioningStrategyDonorPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectVersioningStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#donor_package_step_id Project#donor_package_step_id}
  */
  readonly donorPackageStepId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#template Project#template}
  */
  readonly template?: string;
  /**
  * donor_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#donor_package Project#donor_package}
  */
  readonly donorPackage?: ProjectVersioningStrategyDonorPackage[] | cdktf.IResolvable;
}

export function projectVersioningStrategyToTerraform(struct?: ProjectVersioningStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    donor_package_step_id: cdktf.stringToTerraform(struct!.donorPackageStepId),
    template: cdktf.stringToTerraform(struct!.template),
    donor_package: cdktf.listMapper(projectVersioningStrategyDonorPackageToTerraform, true)(struct!.donorPackage),
  }
}


export function projectVersioningStrategyToHclTerraform(struct?: ProjectVersioningStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    donor_package_step_id: {
      value: cdktf.stringToHclTerraform(struct!.donorPackageStepId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    donor_package: {
      value: cdktf.listMapperHcl(projectVersioningStrategyDonorPackageToHclTerraform, true)(struct!.donorPackage),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectVersioningStrategyDonorPackageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectVersioningStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectVersioningStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._donorPackageStepId !== undefined) {
      hasAnyValues = true;
      internalValueResult.donorPackageStepId = this._donorPackageStepId;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._donorPackage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.donorPackage = this._donorPackage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectVersioningStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._donorPackageStepId = undefined;
      this._template = undefined;
      this._donorPackage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._donorPackageStepId = value.donorPackageStepId;
      this._template = value.template;
      this._donorPackage.internalValue = value.donorPackage;
    }
  }

  // donor_package_step_id - computed: false, optional: true, required: false
  private _donorPackageStepId?: string; 
  public get donorPackageStepId() {
    return this.getStringAttribute('donor_package_step_id');
  }
  public set donorPackageStepId(value: string) {
    this._donorPackageStepId = value;
  }
  public resetDonorPackageStepId() {
    this._donorPackageStepId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get donorPackageStepIdInput() {
    return this._donorPackageStepId;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // donor_package - computed: false, optional: true, required: false
  private _donorPackage = new ProjectVersioningStrategyDonorPackageList(this, "donor_package", false);
  public get donorPackage() {
    return this._donorPackage;
  }
  public putDonorPackage(value: ProjectVersioningStrategyDonorPackage[] | cdktf.IResolvable) {
    this._donorPackage.internalValue = value;
  }
  public resetDonorPackage() {
    this._donorPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get donorPackageInput() {
    return this._donorPackage.internalValue;
  }
}

export class ProjectVersioningStrategyList extends cdktf.ComplexList {
  public internalValue? : ProjectVersioningStrategy[] | cdktf.IResolvable

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
  public get(index: number): ProjectVersioningStrategyOutputReference {
    return new ProjectVersioningStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project octopusdeploy_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/project octopusdeploy_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_project',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDeploymentsToNoTargets = config.allowDeploymentsToNoTargets;
    this._autoCreateRelease = config.autoCreateRelease;
    this._clonedFromProjectId = config.clonedFromProjectId;
    this._defaultGuidedFailureMode = config.defaultGuidedFailureMode;
    this._defaultToSkipIfAlreadyInstalled = config.defaultToSkipIfAlreadyInstalled;
    this._deploymentChangesTemplate = config.deploymentChangesTemplate;
    this._deprovisioningRunbookId = config.deprovisioningRunbookId;
    this._description = config.description;
    this._discreteChannelRelease = config.discreteChannelRelease;
    this._includedLibraryVariableSets = config.includedLibraryVariableSets;
    this._isDisabled = config.isDisabled;
    this._isDiscreteChannelRelease = config.isDiscreteChannelRelease;
    this._isVersionControlled = config.isVersionControlled;
    this._lifecycleId = config.lifecycleId;
    this._name = config.name;
    this._projectGroupId = config.projectGroupId;
    this._projectTags = config.projectTags;
    this._provisioningRunbookId = config.provisioningRunbookId;
    this._releaseNotesTemplate = config.releaseNotesTemplate;
    this._slug = config.slug;
    this._spaceId = config.spaceId;
    this._tenantedDeploymentParticipation = config.tenantedDeploymentParticipation;
    this._autoDeployReleaseOverrides.internalValue = config.autoDeployReleaseOverrides;
    this._connectivityPolicy.internalValue = config.connectivityPolicy;
    this._gitAnonymousPersistenceSettings.internalValue = config.gitAnonymousPersistenceSettings;
    this._gitLibraryPersistenceSettings.internalValue = config.gitLibraryPersistenceSettings;
    this._gitUsernamePasswordPersistenceSettings.internalValue = config.gitUsernamePasswordPersistenceSettings;
    this._jiraServiceManagementExtensionSettings.internalValue = config.jiraServiceManagementExtensionSettings;
    this._releaseCreationStrategy.internalValue = config.releaseCreationStrategy;
    this._servicenowExtensionSettings.internalValue = config.servicenowExtensionSettings;
    this._template.internalValue = config.template;
    this._versioningStrategy.internalValue = config.versioningStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_deployments_to_no_targets - computed: false, optional: true, required: false
  private _allowDeploymentsToNoTargets?: boolean | cdktf.IResolvable; 
  public get allowDeploymentsToNoTargets() {
    return this.getBooleanAttribute('allow_deployments_to_no_targets');
  }
  public set allowDeploymentsToNoTargets(value: boolean | cdktf.IResolvable) {
    this._allowDeploymentsToNoTargets = value;
  }
  public resetAllowDeploymentsToNoTargets() {
    this._allowDeploymentsToNoTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeploymentsToNoTargetsInput() {
    return this._allowDeploymentsToNoTargets;
  }

  // auto_create_release - computed: true, optional: true, required: false
  private _autoCreateRelease?: boolean | cdktf.IResolvable; 
  public get autoCreateRelease() {
    return this.getBooleanAttribute('auto_create_release');
  }
  public set autoCreateRelease(value: boolean | cdktf.IResolvable) {
    this._autoCreateRelease = value;
  }
  public resetAutoCreateRelease() {
    this._autoCreateRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateReleaseInput() {
    return this._autoCreateRelease;
  }

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

  // default_guided_failure_mode - computed: true, optional: true, required: false
  private _defaultGuidedFailureMode?: string; 
  public get defaultGuidedFailureMode() {
    return this.getStringAttribute('default_guided_failure_mode');
  }
  public set defaultGuidedFailureMode(value: string) {
    this._defaultGuidedFailureMode = value;
  }
  public resetDefaultGuidedFailureMode() {
    this._defaultGuidedFailureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGuidedFailureModeInput() {
    return this._defaultGuidedFailureMode;
  }

  // default_to_skip_if_already_installed - computed: true, optional: true, required: false
  private _defaultToSkipIfAlreadyInstalled?: boolean | cdktf.IResolvable; 
  public get defaultToSkipIfAlreadyInstalled() {
    return this.getBooleanAttribute('default_to_skip_if_already_installed');
  }
  public set defaultToSkipIfAlreadyInstalled(value: boolean | cdktf.IResolvable) {
    this._defaultToSkipIfAlreadyInstalled = value;
  }
  public resetDefaultToSkipIfAlreadyInstalled() {
    this._defaultToSkipIfAlreadyInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultToSkipIfAlreadyInstalledInput() {
    return this._defaultToSkipIfAlreadyInstalled;
  }

  // deployment_changes_template - computed: true, optional: true, required: false
  private _deploymentChangesTemplate?: string; 
  public get deploymentChangesTemplate() {
    return this.getStringAttribute('deployment_changes_template');
  }
  public set deploymentChangesTemplate(value: string) {
    this._deploymentChangesTemplate = value;
  }
  public resetDeploymentChangesTemplate() {
    this._deploymentChangesTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentChangesTemplateInput() {
    return this._deploymentChangesTemplate;
  }

  // deployment_process_id - computed: true, optional: false, required: false
  public get deploymentProcessId() {
    return this.getStringAttribute('deployment_process_id');
  }

  // deprovisioning_runbook_id - computed: false, optional: true, required: false
  private _deprovisioningRunbookId?: string; 
  public get deprovisioningRunbookId() {
    return this.getStringAttribute('deprovisioning_runbook_id');
  }
  public set deprovisioningRunbookId(value: string) {
    this._deprovisioningRunbookId = value;
  }
  public resetDeprovisioningRunbookId() {
    this._deprovisioningRunbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprovisioningRunbookIdInput() {
    return this._deprovisioningRunbookId;
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

  // discrete_channel_release - computed: true, optional: true, required: false
  private _discreteChannelRelease?: boolean | cdktf.IResolvable; 
  public get discreteChannelRelease() {
    return this.getBooleanAttribute('discrete_channel_release');
  }
  public set discreteChannelRelease(value: boolean | cdktf.IResolvable) {
    this._discreteChannelRelease = value;
  }
  public resetDiscreteChannelRelease() {
    this._discreteChannelRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discreteChannelReleaseInput() {
    return this._discreteChannelRelease;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_library_variable_sets - computed: true, optional: true, required: false
  private _includedLibraryVariableSets?: string[]; 
  public get includedLibraryVariableSets() {
    return this.getListAttribute('included_library_variable_sets');
  }
  public set includedLibraryVariableSets(value: string[]) {
    this._includedLibraryVariableSets = value;
  }
  public resetIncludedLibraryVariableSets() {
    this._includedLibraryVariableSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedLibraryVariableSetsInput() {
    return this._includedLibraryVariableSets;
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

  // is_discrete_channel_release - computed: true, optional: true, required: false
  private _isDiscreteChannelRelease?: boolean | cdktf.IResolvable; 
  public get isDiscreteChannelRelease() {
    return this.getBooleanAttribute('is_discrete_channel_release');
  }
  public set isDiscreteChannelRelease(value: boolean | cdktf.IResolvable) {
    this._isDiscreteChannelRelease = value;
  }
  public resetIsDiscreteChannelRelease() {
    this._isDiscreteChannelRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDiscreteChannelReleaseInput() {
    return this._isDiscreteChannelRelease;
  }

  // is_version_controlled - computed: true, optional: true, required: false
  private _isVersionControlled?: boolean | cdktf.IResolvable; 
  public get isVersionControlled() {
    return this.getBooleanAttribute('is_version_controlled');
  }
  public set isVersionControlled(value: boolean | cdktf.IResolvable) {
    this._isVersionControlled = value;
  }
  public resetIsVersionControlled() {
    this._isVersionControlled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVersionControlledInput() {
    return this._isVersionControlled;
  }

  // lifecycle_id - computed: false, optional: false, required: true
  private _lifecycleId?: string; 
  public get lifecycleId() {
    return this.getStringAttribute('lifecycle_id');
  }
  public set lifecycleId(value: string) {
    this._lifecycleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleIdInput() {
    return this._lifecycleId;
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

  // project_group_id - computed: false, optional: false, required: true
  private _projectGroupId?: string; 
  public get projectGroupId() {
    return this.getStringAttribute('project_group_id');
  }
  public set projectGroupId(value: string) {
    this._projectGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectGroupIdInput() {
    return this._projectGroupId;
  }

  // project_tags - computed: true, optional: true, required: false
  private _projectTags?: string[]; 
  public get projectTags() {
    return cdktf.Fn.tolist(this.getListAttribute('project_tags'));
  }
  public set projectTags(value: string[]) {
    this._projectTags = value;
  }
  public resetProjectTags() {
    this._projectTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectTagsInput() {
    return this._projectTags;
  }

  // provisioning_runbook_id - computed: false, optional: true, required: false
  private _provisioningRunbookId?: string; 
  public get provisioningRunbookId() {
    return this.getStringAttribute('provisioning_runbook_id');
  }
  public set provisioningRunbookId(value: string) {
    this._provisioningRunbookId = value;
  }
  public resetProvisioningRunbookId() {
    this._provisioningRunbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningRunbookIdInput() {
    return this._provisioningRunbookId;
  }

  // release_notes_template - computed: true, optional: true, required: false
  private _releaseNotesTemplate?: string; 
  public get releaseNotesTemplate() {
    return this.getStringAttribute('release_notes_template');
  }
  public set releaseNotesTemplate(value: string) {
    this._releaseNotesTemplate = value;
  }
  public resetReleaseNotesTemplate() {
    this._releaseNotesTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNotesTemplateInput() {
    return this._releaseNotesTemplate;
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

  // tenanted_deployment_participation - computed: true, optional: true, required: false
  private _tenantedDeploymentParticipation?: string; 
  public get tenantedDeploymentParticipation() {
    return this.getStringAttribute('tenanted_deployment_participation');
  }
  public set tenantedDeploymentParticipation(value: string) {
    this._tenantedDeploymentParticipation = value;
  }
  public resetTenantedDeploymentParticipation() {
    this._tenantedDeploymentParticipation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantedDeploymentParticipationInput() {
    return this._tenantedDeploymentParticipation;
  }

  // variable_set_id - computed: true, optional: false, required: false
  public get variableSetId() {
    return this.getStringAttribute('variable_set_id');
  }

  // auto_deploy_release_overrides - computed: false, optional: true, required: false
  private _autoDeployReleaseOverrides = new ProjectAutoDeployReleaseOverridesList(this, "auto_deploy_release_overrides", false);
  public get autoDeployReleaseOverrides() {
    return this._autoDeployReleaseOverrides;
  }
  public putAutoDeployReleaseOverrides(value: ProjectAutoDeployReleaseOverrides[] | cdktf.IResolvable) {
    this._autoDeployReleaseOverrides.internalValue = value;
  }
  public resetAutoDeployReleaseOverrides() {
    this._autoDeployReleaseOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployReleaseOverridesInput() {
    return this._autoDeployReleaseOverrides.internalValue;
  }

  // connectivity_policy - computed: false, optional: true, required: false
  private _connectivityPolicy = new ProjectConnectivityPolicyList(this, "connectivity_policy", false);
  public get connectivityPolicy() {
    return this._connectivityPolicy;
  }
  public putConnectivityPolicy(value: ProjectConnectivityPolicy[] | cdktf.IResolvable) {
    this._connectivityPolicy.internalValue = value;
  }
  public resetConnectivityPolicy() {
    this._connectivityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityPolicyInput() {
    return this._connectivityPolicy.internalValue;
  }

  // git_anonymous_persistence_settings - computed: false, optional: true, required: false
  private _gitAnonymousPersistenceSettings = new ProjectGitAnonymousPersistenceSettingsList(this, "git_anonymous_persistence_settings", false);
  public get gitAnonymousPersistenceSettings() {
    return this._gitAnonymousPersistenceSettings;
  }
  public putGitAnonymousPersistenceSettings(value: ProjectGitAnonymousPersistenceSettings[] | cdktf.IResolvable) {
    this._gitAnonymousPersistenceSettings.internalValue = value;
  }
  public resetGitAnonymousPersistenceSettings() {
    this._gitAnonymousPersistenceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitAnonymousPersistenceSettingsInput() {
    return this._gitAnonymousPersistenceSettings.internalValue;
  }

  // git_library_persistence_settings - computed: false, optional: true, required: false
  private _gitLibraryPersistenceSettings = new ProjectGitLibraryPersistenceSettingsList(this, "git_library_persistence_settings", false);
  public get gitLibraryPersistenceSettings() {
    return this._gitLibraryPersistenceSettings;
  }
  public putGitLibraryPersistenceSettings(value: ProjectGitLibraryPersistenceSettings[] | cdktf.IResolvable) {
    this._gitLibraryPersistenceSettings.internalValue = value;
  }
  public resetGitLibraryPersistenceSettings() {
    this._gitLibraryPersistenceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitLibraryPersistenceSettingsInput() {
    return this._gitLibraryPersistenceSettings.internalValue;
  }

  // git_username_password_persistence_settings - computed: false, optional: true, required: false
  private _gitUsernamePasswordPersistenceSettings = new ProjectGitUsernamePasswordPersistenceSettingsList(this, "git_username_password_persistence_settings", false);
  public get gitUsernamePasswordPersistenceSettings() {
    return this._gitUsernamePasswordPersistenceSettings;
  }
  public putGitUsernamePasswordPersistenceSettings(value: ProjectGitUsernamePasswordPersistenceSettings[] | cdktf.IResolvable) {
    this._gitUsernamePasswordPersistenceSettings.internalValue = value;
  }
  public resetGitUsernamePasswordPersistenceSettings() {
    this._gitUsernamePasswordPersistenceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUsernamePasswordPersistenceSettingsInput() {
    return this._gitUsernamePasswordPersistenceSettings.internalValue;
  }

  // jira_service_management_extension_settings - computed: false, optional: true, required: false
  private _jiraServiceManagementExtensionSettings = new ProjectJiraServiceManagementExtensionSettingsList(this, "jira_service_management_extension_settings", false);
  public get jiraServiceManagementExtensionSettings() {
    return this._jiraServiceManagementExtensionSettings;
  }
  public putJiraServiceManagementExtensionSettings(value: ProjectJiraServiceManagementExtensionSettings[] | cdktf.IResolvable) {
    this._jiraServiceManagementExtensionSettings.internalValue = value;
  }
  public resetJiraServiceManagementExtensionSettings() {
    this._jiraServiceManagementExtensionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraServiceManagementExtensionSettingsInput() {
    return this._jiraServiceManagementExtensionSettings.internalValue;
  }

  // release_creation_strategy - computed: false, optional: true, required: false
  private _releaseCreationStrategy = new ProjectReleaseCreationStrategyList(this, "release_creation_strategy", false);
  public get releaseCreationStrategy() {
    return this._releaseCreationStrategy;
  }
  public putReleaseCreationStrategy(value: ProjectReleaseCreationStrategy[] | cdktf.IResolvable) {
    this._releaseCreationStrategy.internalValue = value;
  }
  public resetReleaseCreationStrategy() {
    this._releaseCreationStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCreationStrategyInput() {
    return this._releaseCreationStrategy.internalValue;
  }

  // servicenow_extension_settings - computed: false, optional: true, required: false
  private _servicenowExtensionSettings = new ProjectServicenowExtensionSettingsList(this, "servicenow_extension_settings", false);
  public get servicenowExtensionSettings() {
    return this._servicenowExtensionSettings;
  }
  public putServicenowExtensionSettings(value: ProjectServicenowExtensionSettings[] | cdktf.IResolvable) {
    this._servicenowExtensionSettings.internalValue = value;
  }
  public resetServicenowExtensionSettings() {
    this._servicenowExtensionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowExtensionSettingsInput() {
    return this._servicenowExtensionSettings.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ProjectTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }
  public putTemplate(value: ProjectTemplate[] | cdktf.IResolvable) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // versioning_strategy - computed: false, optional: true, required: false
  private _versioningStrategy = new ProjectVersioningStrategyList(this, "versioning_strategy", false);
  public get versioningStrategy() {
    return this._versioningStrategy;
  }
  public putVersioningStrategy(value: ProjectVersioningStrategy[] | cdktf.IResolvable) {
    this._versioningStrategy.internalValue = value;
  }
  public resetVersioningStrategy() {
    this._versioningStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningStrategyInput() {
    return this._versioningStrategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_deployments_to_no_targets: cdktf.booleanToTerraform(this._allowDeploymentsToNoTargets),
      auto_create_release: cdktf.booleanToTerraform(this._autoCreateRelease),
      cloned_from_project_id: cdktf.stringToTerraform(this._clonedFromProjectId),
      default_guided_failure_mode: cdktf.stringToTerraform(this._defaultGuidedFailureMode),
      default_to_skip_if_already_installed: cdktf.booleanToTerraform(this._defaultToSkipIfAlreadyInstalled),
      deployment_changes_template: cdktf.stringToTerraform(this._deploymentChangesTemplate),
      deprovisioning_runbook_id: cdktf.stringToTerraform(this._deprovisioningRunbookId),
      description: cdktf.stringToTerraform(this._description),
      discrete_channel_release: cdktf.booleanToTerraform(this._discreteChannelRelease),
      included_library_variable_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedLibraryVariableSets),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      is_discrete_channel_release: cdktf.booleanToTerraform(this._isDiscreteChannelRelease),
      is_version_controlled: cdktf.booleanToTerraform(this._isVersionControlled),
      lifecycle_id: cdktf.stringToTerraform(this._lifecycleId),
      name: cdktf.stringToTerraform(this._name),
      project_group_id: cdktf.stringToTerraform(this._projectGroupId),
      project_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectTags),
      provisioning_runbook_id: cdktf.stringToTerraform(this._provisioningRunbookId),
      release_notes_template: cdktf.stringToTerraform(this._releaseNotesTemplate),
      slug: cdktf.stringToTerraform(this._slug),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenanted_deployment_participation: cdktf.stringToTerraform(this._tenantedDeploymentParticipation),
      auto_deploy_release_overrides: cdktf.listMapper(projectAutoDeployReleaseOverridesToTerraform, true)(this._autoDeployReleaseOverrides.internalValue),
      connectivity_policy: cdktf.listMapper(projectConnectivityPolicyToTerraform, true)(this._connectivityPolicy.internalValue),
      git_anonymous_persistence_settings: cdktf.listMapper(projectGitAnonymousPersistenceSettingsToTerraform, true)(this._gitAnonymousPersistenceSettings.internalValue),
      git_library_persistence_settings: cdktf.listMapper(projectGitLibraryPersistenceSettingsToTerraform, true)(this._gitLibraryPersistenceSettings.internalValue),
      git_username_password_persistence_settings: cdktf.listMapper(projectGitUsernamePasswordPersistenceSettingsToTerraform, true)(this._gitUsernamePasswordPersistenceSettings.internalValue),
      jira_service_management_extension_settings: cdktf.listMapper(projectJiraServiceManagementExtensionSettingsToTerraform, true)(this._jiraServiceManagementExtensionSettings.internalValue),
      release_creation_strategy: cdktf.listMapper(projectReleaseCreationStrategyToTerraform, true)(this._releaseCreationStrategy.internalValue),
      servicenow_extension_settings: cdktf.listMapper(projectServicenowExtensionSettingsToTerraform, true)(this._servicenowExtensionSettings.internalValue),
      template: cdktf.listMapper(projectTemplateToTerraform, true)(this._template.internalValue),
      versioning_strategy: cdktf.listMapper(projectVersioningStrategyToTerraform, true)(this._versioningStrategy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_deployments_to_no_targets: {
        value: cdktf.booleanToHclTerraform(this._allowDeploymentsToNoTargets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create_release: {
        value: cdktf.booleanToHclTerraform(this._autoCreateRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloned_from_project_id: {
        value: cdktf.stringToHclTerraform(this._clonedFromProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_guided_failure_mode: {
        value: cdktf.stringToHclTerraform(this._defaultGuidedFailureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_to_skip_if_already_installed: {
        value: cdktf.booleanToHclTerraform(this._defaultToSkipIfAlreadyInstalled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_changes_template: {
        value: cdktf.stringToHclTerraform(this._deploymentChangesTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprovisioning_runbook_id: {
        value: cdktf.stringToHclTerraform(this._deprovisioningRunbookId),
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
      discrete_channel_release: {
        value: cdktf.booleanToHclTerraform(this._discreteChannelRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      included_library_variable_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedLibraryVariableSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_discrete_channel_release: {
        value: cdktf.booleanToHclTerraform(this._isDiscreteChannelRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_version_controlled: {
        value: cdktf.booleanToHclTerraform(this._isVersionControlled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lifecycle_id: {
        value: cdktf.stringToHclTerraform(this._lifecycleId),
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
      project_group_id: {
        value: cdktf.stringToHclTerraform(this._projectGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      provisioning_runbook_id: {
        value: cdktf.stringToHclTerraform(this._provisioningRunbookId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_notes_template: {
        value: cdktf.stringToHclTerraform(this._releaseNotesTemplate),
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
      tenanted_deployment_participation: {
        value: cdktf.stringToHclTerraform(this._tenantedDeploymentParticipation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_deploy_release_overrides: {
        value: cdktf.listMapperHcl(projectAutoDeployReleaseOverridesToHclTerraform, true)(this._autoDeployReleaseOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectAutoDeployReleaseOverridesList",
      },
      connectivity_policy: {
        value: cdktf.listMapperHcl(projectConnectivityPolicyToHclTerraform, true)(this._connectivityPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectConnectivityPolicyList",
      },
      git_anonymous_persistence_settings: {
        value: cdktf.listMapperHcl(projectGitAnonymousPersistenceSettingsToHclTerraform, true)(this._gitAnonymousPersistenceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectGitAnonymousPersistenceSettingsList",
      },
      git_library_persistence_settings: {
        value: cdktf.listMapperHcl(projectGitLibraryPersistenceSettingsToHclTerraform, true)(this._gitLibraryPersistenceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectGitLibraryPersistenceSettingsList",
      },
      git_username_password_persistence_settings: {
        value: cdktf.listMapperHcl(projectGitUsernamePasswordPersistenceSettingsToHclTerraform, true)(this._gitUsernamePasswordPersistenceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectGitUsernamePasswordPersistenceSettingsList",
      },
      jira_service_management_extension_settings: {
        value: cdktf.listMapperHcl(projectJiraServiceManagementExtensionSettingsToHclTerraform, true)(this._jiraServiceManagementExtensionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectJiraServiceManagementExtensionSettingsList",
      },
      release_creation_strategy: {
        value: cdktf.listMapperHcl(projectReleaseCreationStrategyToHclTerraform, true)(this._releaseCreationStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectReleaseCreationStrategyList",
      },
      servicenow_extension_settings: {
        value: cdktf.listMapperHcl(projectServicenowExtensionSettingsToHclTerraform, true)(this._servicenowExtensionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectServicenowExtensionSettingsList",
      },
      template: {
        value: cdktf.listMapperHcl(projectTemplateToHclTerraform, true)(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectTemplateList",
      },
      versioning_strategy: {
        value: cdktf.listMapperHcl(projectVersioningStrategyToHclTerraform, true)(this._versioningStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectVersioningStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
