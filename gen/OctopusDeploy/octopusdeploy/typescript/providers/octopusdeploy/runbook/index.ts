// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RunbookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sets the runbook guided failure mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#default_guided_failure_mode Runbook#default_guided_failure_mode}
  */
  readonly defaultGuidedFailureMode?: string;
  /**
  * The description of this runbook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#description Runbook#description}
  */
  readonly description?: string;
  /**
  * Determines how the runbook is scoped to environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#environment_scope Runbook#environment_scope}
  */
  readonly environmentScope?: string;
  /**
  * When environment_scope is set to "Specified", this is the list of environments the runbook can be run against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#environments Runbook#environments}
  */
  readonly environments?: string[];
  /**
  * Whether to force packages to be re-downloaded or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#force_package_download Runbook#force_package_download}
  */
  readonly forcePackageDownload?: boolean | cdktf.IResolvable;
  /**
  * The tenanted deployment mode of the runbook. Valid modes are `Untenanted`, `TenantedOrUntenanted`, `Tenanted`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#multi_tenancy_mode Runbook#multi_tenancy_mode}
  */
  readonly multiTenancyMode?: string;
  /**
  * The name of the runbook in Octopus Deploy. This name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#name Runbook#name}
  */
  readonly name: string;
  /**
  * The project that this runbook belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#project_id Runbook#project_id}
  */
  readonly projectId: string;
  /**
  * The space ID associated with this runbook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#space_id Runbook#space_id}
  */
  readonly spaceId?: string;
  /**
  * connectivity_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#connectivity_policy Runbook#connectivity_policy}
  */
  readonly connectivityPolicy?: RunbookConnectivityPolicy[] | cdktf.IResolvable;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#retention_policy Runbook#retention_policy}
  */
  readonly retentionPolicy?: RunbookRetentionPolicy[] | cdktf.IResolvable;
}
export interface RunbookConnectivityPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#allow_deployments_to_no_targets Runbook#allow_deployments_to_no_targets}
  */
  readonly allowDeploymentsToNoTargets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#exclude_unhealthy_targets Runbook#exclude_unhealthy_targets}
  */
  readonly excludeUnhealthyTargets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#skip_machine_behavior Runbook#skip_machine_behavior}
  */
  readonly skipMachineBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#target_roles Runbook#target_roles}
  */
  readonly targetRoles?: string[];
}

export function runbookConnectivityPolicyToTerraform(struct?: RunbookConnectivityPolicy | cdktf.IResolvable): any {
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


export function runbookConnectivityPolicyToHclTerraform(struct?: RunbookConnectivityPolicy | cdktf.IResolvable): any {
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

export class RunbookConnectivityPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RunbookConnectivityPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RunbookConnectivityPolicy | cdktf.IResolvable | undefined) {
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

export class RunbookConnectivityPolicyList extends cdktf.ComplexList {
  public internalValue? : RunbookConnectivityPolicy[] | cdktf.IResolvable

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
  public get(index: number): RunbookConnectivityPolicyOutputReference {
    return new RunbookConnectivityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RunbookRetentionPolicy {
  /**
  * How many runs to keep per environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#quantity_to_keep Runbook#quantity_to_keep}
  */
  readonly quantityToKeep?: number;
  /**
  * Indicates if items should never be deleted. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#should_keep_forever Runbook#should_keep_forever}
  */
  readonly shouldKeepForever?: boolean | cdktf.IResolvable;
}

export function runbookRetentionPolicyToTerraform(struct?: RunbookRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity_to_keep: cdktf.numberToTerraform(struct!.quantityToKeep),
    should_keep_forever: cdktf.booleanToTerraform(struct!.shouldKeepForever),
  }
}


export function runbookRetentionPolicyToHclTerraform(struct?: RunbookRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_keep_forever: {
      value: cdktf.booleanToHclTerraform(struct!.shouldKeepForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RunbookRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RunbookRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantityToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityToKeep = this._quantityToKeep;
    }
    if (this._shouldKeepForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldKeepForever = this._shouldKeepForever;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RunbookRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantityToKeep = undefined;
      this._shouldKeepForever = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantityToKeep = value.quantityToKeep;
      this._shouldKeepForever = value.shouldKeepForever;
    }
  }

  // quantity_to_keep - computed: true, optional: true, required: false
  private _quantityToKeep?: number; 
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }
  public set quantityToKeep(value: number) {
    this._quantityToKeep = value;
  }
  public resetQuantityToKeep() {
    this._quantityToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityToKeepInput() {
    return this._quantityToKeep;
  }

  // should_keep_forever - computed: true, optional: true, required: false
  private _shouldKeepForever?: boolean | cdktf.IResolvable; 
  public get shouldKeepForever() {
    return this.getBooleanAttribute('should_keep_forever');
  }
  public set shouldKeepForever(value: boolean | cdktf.IResolvable) {
    this._shouldKeepForever = value;
  }
  public resetShouldKeepForever() {
    this._shouldKeepForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldKeepForeverInput() {
    return this._shouldKeepForever;
  }
}

export class RunbookRetentionPolicyList extends cdktf.ComplexList {
  public internalValue? : RunbookRetentionPolicy[] | cdktf.IResolvable

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
  public get(index: number): RunbookRetentionPolicyOutputReference {
    return new RunbookRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook octopusdeploy_runbook}
*/
export class Runbook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_runbook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Runbook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Runbook to import
  * @param importFromId The id of the existing Runbook that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Runbook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_runbook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/runbook octopusdeploy_runbook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RunbookConfig
  */
  public constructor(scope: Construct, id: string, config: RunbookConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_runbook',
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
    this._defaultGuidedFailureMode = config.defaultGuidedFailureMode;
    this._description = config.description;
    this._environmentScope = config.environmentScope;
    this._environments = config.environments;
    this._forcePackageDownload = config.forcePackageDownload;
    this._multiTenancyMode = config.multiTenancyMode;
    this._name = config.name;
    this._projectId = config.projectId;
    this._spaceId = config.spaceId;
    this._connectivityPolicy.internalValue = config.connectivityPolicy;
    this._retentionPolicy.internalValue = config.retentionPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // environment_scope - computed: true, optional: true, required: false
  private _environmentScope?: string; 
  public get environmentScope() {
    return this.getStringAttribute('environment_scope');
  }
  public set environmentScope(value: string) {
    this._environmentScope = value;
  }
  public resetEnvironmentScope() {
    this._environmentScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentScopeInput() {
    return this._environmentScope;
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

  // force_package_download - computed: true, optional: true, required: false
  private _forcePackageDownload?: boolean | cdktf.IResolvable; 
  public get forcePackageDownload() {
    return this.getBooleanAttribute('force_package_download');
  }
  public set forcePackageDownload(value: boolean | cdktf.IResolvable) {
    this._forcePackageDownload = value;
  }
  public resetForcePackageDownload() {
    this._forcePackageDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePackageDownloadInput() {
    return this._forcePackageDownload;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_tenancy_mode - computed: true, optional: true, required: false
  private _multiTenancyMode?: string; 
  public get multiTenancyMode() {
    return this.getStringAttribute('multi_tenancy_mode');
  }
  public set multiTenancyMode(value: string) {
    this._multiTenancyMode = value;
  }
  public resetMultiTenancyMode() {
    this._multiTenancyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTenancyModeInput() {
    return this._multiTenancyMode;
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

  // published_runbook_snapshot_id - computed: true, optional: false, required: false
  public get publishedRunbookSnapshotId() {
    return this.getStringAttribute('published_runbook_snapshot_id');
  }

  // runbook_process_id - computed: true, optional: false, required: false
  public get runbookProcessId() {
    return this.getStringAttribute('runbook_process_id');
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

  // connectivity_policy - computed: false, optional: true, required: false
  private _connectivityPolicy = new RunbookConnectivityPolicyList(this, "connectivity_policy", false);
  public get connectivityPolicy() {
    return this._connectivityPolicy;
  }
  public putConnectivityPolicy(value: RunbookConnectivityPolicy[] | cdktf.IResolvable) {
    this._connectivityPolicy.internalValue = value;
  }
  public resetConnectivityPolicy() {
    this._connectivityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityPolicyInput() {
    return this._connectivityPolicy.internalValue;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new RunbookRetentionPolicyList(this, "retention_policy", false);
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: RunbookRetentionPolicy[] | cdktf.IResolvable) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_guided_failure_mode: cdktf.stringToTerraform(this._defaultGuidedFailureMode),
      description: cdktf.stringToTerraform(this._description),
      environment_scope: cdktf.stringToTerraform(this._environmentScope),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      force_package_download: cdktf.booleanToTerraform(this._forcePackageDownload),
      multi_tenancy_mode: cdktf.stringToTerraform(this._multiTenancyMode),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      connectivity_policy: cdktf.listMapper(runbookConnectivityPolicyToTerraform, true)(this._connectivityPolicy.internalValue),
      retention_policy: cdktf.listMapper(runbookRetentionPolicyToTerraform, true)(this._retentionPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_guided_failure_mode: {
        value: cdktf.stringToHclTerraform(this._defaultGuidedFailureMode),
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
      environment_scope: {
        value: cdktf.stringToHclTerraform(this._environmentScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      force_package_download: {
        value: cdktf.booleanToHclTerraform(this._forcePackageDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_tenancy_mode: {
        value: cdktf.stringToHclTerraform(this._multiTenancyMode),
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
      connectivity_policy: {
        value: cdktf.listMapperHcl(runbookConnectivityPolicyToHclTerraform, true)(this._connectivityPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RunbookConnectivityPolicyList",
      },
      retention_policy: {
        value: cdktf.listMapperHcl(runbookRetentionPolicyToHclTerraform, true)(this._retentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RunbookRetentionPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
