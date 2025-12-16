// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectPipelineSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Limit job authorization scope to current project for non-release pipelines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#enforce_job_scope ProjectPipelineSettings#enforce_job_scope}
  */
  readonly enforceJobScope?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#enforce_job_scope_for_release ProjectPipelineSettings#enforce_job_scope_for_release}
  */
  readonly enforceJobScopeForRelease?: boolean | cdktf.IResolvable;
  /**
  * Protect access to repositories in YAML pipelines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#enforce_referenced_repo_scoped_token ProjectPipelineSettings#enforce_referenced_repo_scoped_token}
  */
  readonly enforceReferencedRepoScopedToken?: boolean | cdktf.IResolvable;
  /**
  * Limit variables that can be set at queue time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#enforce_settable_var ProjectPipelineSettings#enforce_settable_var}
  */
  readonly enforceSettableVar?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#id ProjectPipelineSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#project_id ProjectPipelineSettings#project_id}
  */
  readonly projectId: string;
  /**
  * Publish metadata from pipelines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#publish_pipeline_metadata ProjectPipelineSettings#publish_pipeline_metadata}
  */
  readonly publishPipelineMetadata?: boolean | cdktf.IResolvable;
  /**
  * Disable anonymous access to badges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#status_badges_are_private ProjectPipelineSettings#status_badges_are_private}
  */
  readonly statusBadgesArePrivate?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#timeouts ProjectPipelineSettings#timeouts}
  */
  readonly timeouts?: ProjectPipelineSettingsTimeouts;
}
export interface ProjectPipelineSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#create ProjectPipelineSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#delete ProjectPipelineSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#read ProjectPipelineSettings#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#update ProjectPipelineSettings#update}
  */
  readonly update?: string;
}

export function projectPipelineSettingsTimeoutsToTerraform(struct?: ProjectPipelineSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function projectPipelineSettingsTimeoutsToHclTerraform(struct?: ProjectPipelineSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectPipelineSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectPipelineSettingsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectPipelineSettingsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings azuredevops_project_pipeline_settings}
*/
export class ProjectPipelineSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_project_pipeline_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectPipelineSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectPipelineSettings to import
  * @param importFromId The id of the existing ProjectPipelineSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectPipelineSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_project_pipeline_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/project_pipeline_settings azuredevops_project_pipeline_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectPipelineSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectPipelineSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_project_pipeline_settings',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.2',
        providerVersionConstraint: '1.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enforceJobScope = config.enforceJobScope;
    this._enforceJobScopeForRelease = config.enforceJobScopeForRelease;
    this._enforceReferencedRepoScopedToken = config.enforceReferencedRepoScopedToken;
    this._enforceSettableVar = config.enforceSettableVar;
    this._id = config.id;
    this._projectId = config.projectId;
    this._publishPipelineMetadata = config.publishPipelineMetadata;
    this._statusBadgesArePrivate = config.statusBadgesArePrivate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enforce_job_scope - computed: true, optional: true, required: false
  private _enforceJobScope?: boolean | cdktf.IResolvable; 
  public get enforceJobScope() {
    return this.getBooleanAttribute('enforce_job_scope');
  }
  public set enforceJobScope(value: boolean | cdktf.IResolvable) {
    this._enforceJobScope = value;
  }
  public resetEnforceJobScope() {
    this._enforceJobScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceJobScopeInput() {
    return this._enforceJobScope;
  }

  // enforce_job_scope_for_release - computed: true, optional: true, required: false
  private _enforceJobScopeForRelease?: boolean | cdktf.IResolvable; 
  public get enforceJobScopeForRelease() {
    return this.getBooleanAttribute('enforce_job_scope_for_release');
  }
  public set enforceJobScopeForRelease(value: boolean | cdktf.IResolvable) {
    this._enforceJobScopeForRelease = value;
  }
  public resetEnforceJobScopeForRelease() {
    this._enforceJobScopeForRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceJobScopeForReleaseInput() {
    return this._enforceJobScopeForRelease;
  }

  // enforce_referenced_repo_scoped_token - computed: true, optional: true, required: false
  private _enforceReferencedRepoScopedToken?: boolean | cdktf.IResolvable; 
  public get enforceReferencedRepoScopedToken() {
    return this.getBooleanAttribute('enforce_referenced_repo_scoped_token');
  }
  public set enforceReferencedRepoScopedToken(value: boolean | cdktf.IResolvable) {
    this._enforceReferencedRepoScopedToken = value;
  }
  public resetEnforceReferencedRepoScopedToken() {
    this._enforceReferencedRepoScopedToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceReferencedRepoScopedTokenInput() {
    return this._enforceReferencedRepoScopedToken;
  }

  // enforce_settable_var - computed: true, optional: true, required: false
  private _enforceSettableVar?: boolean | cdktf.IResolvable; 
  public get enforceSettableVar() {
    return this.getBooleanAttribute('enforce_settable_var');
  }
  public set enforceSettableVar(value: boolean | cdktf.IResolvable) {
    this._enforceSettableVar = value;
  }
  public resetEnforceSettableVar() {
    this._enforceSettableVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSettableVarInput() {
    return this._enforceSettableVar;
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

  // publish_pipeline_metadata - computed: true, optional: true, required: false
  private _publishPipelineMetadata?: boolean | cdktf.IResolvable; 
  public get publishPipelineMetadata() {
    return this.getBooleanAttribute('publish_pipeline_metadata');
  }
  public set publishPipelineMetadata(value: boolean | cdktf.IResolvable) {
    this._publishPipelineMetadata = value;
  }
  public resetPublishPipelineMetadata() {
    this._publishPipelineMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishPipelineMetadataInput() {
    return this._publishPipelineMetadata;
  }

  // status_badges_are_private - computed: true, optional: true, required: false
  private _statusBadgesArePrivate?: boolean | cdktf.IResolvable; 
  public get statusBadgesArePrivate() {
    return this.getBooleanAttribute('status_badges_are_private');
  }
  public set statusBadgesArePrivate(value: boolean | cdktf.IResolvable) {
    this._statusBadgesArePrivate = value;
  }
  public resetStatusBadgesArePrivate() {
    this._statusBadgesArePrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusBadgesArePrivateInput() {
    return this._statusBadgesArePrivate;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ProjectPipelineSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ProjectPipelineSettingsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enforce_job_scope: cdktf.booleanToTerraform(this._enforceJobScope),
      enforce_job_scope_for_release: cdktf.booleanToTerraform(this._enforceJobScopeForRelease),
      enforce_referenced_repo_scoped_token: cdktf.booleanToTerraform(this._enforceReferencedRepoScopedToken),
      enforce_settable_var: cdktf.booleanToTerraform(this._enforceSettableVar),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      publish_pipeline_metadata: cdktf.booleanToTerraform(this._publishPipelineMetadata),
      status_badges_are_private: cdktf.booleanToTerraform(this._statusBadgesArePrivate),
      timeouts: projectPipelineSettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enforce_job_scope: {
        value: cdktf.booleanToHclTerraform(this._enforceJobScope),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_job_scope_for_release: {
        value: cdktf.booleanToHclTerraform(this._enforceJobScopeForRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_referenced_repo_scoped_token: {
        value: cdktf.booleanToHclTerraform(this._enforceReferencedRepoScopedToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_settable_var: {
        value: cdktf.booleanToHclTerraform(this._enforceSettableVar),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      publish_pipeline_metadata: {
        value: cdktf.booleanToHclTerraform(this._publishPipelineMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status_badges_are_private: {
        value: cdktf.booleanToHclTerraform(this._statusBadgesArePrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: projectPipelineSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectPipelineSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
