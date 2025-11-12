// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow SCM branch override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#allow_override Project#allow_override}
  */
  readonly allowOverride?: boolean | cdktf.IResolvable;
  /**
  * Optional description of this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Local path (relative to PROJECTS_ROOT) containing playbooks and related files for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#local_path Project#local_path}
  */
  readonly localPath?: string;
  /**
  * Name of this project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Numeric ID of the project organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#organization_id Project#organization_id}
  */
  readonly organizationId: number;
  /**
  * Specific branch, tag or commit to checkout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#scm_branch Project#scm_branch}
  */
  readonly scmBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#scm_clean Project#scm_clean}
  */
  readonly scmClean?: boolean | cdktf.IResolvable;
  /**
  * Numeric ID of the scm used credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#scm_credential_id Project#scm_credential_id}
  */
  readonly scmCredentialId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#scm_delete_on_update Project#scm_delete_on_update}
  */
  readonly scmDeleteOnUpdate?: boolean | cdktf.IResolvable;
  /**
  * One of "" (manual), git, hg, svn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#scm_type Project#scm_type}
  */
  readonly scmType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#scm_update_cache_timeout Project#scm_update_cache_timeout}
  */
  readonly scmUpdateCacheTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#scm_update_on_launch Project#scm_update_on_launch}
  */
  readonly scmUpdateOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#scm_url Project#scm_url}
  */
  readonly scmUrl?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#timeouts Project#timeouts}
  */
  readonly timeouts?: ProjectTimeouts;
}
export interface ProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#create Project#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#delete Project#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#update Project#update}
  */
  readonly update?: string;
}

export function projectTimeoutsToTerraform(struct?: ProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function projectTimeoutsToHclTerraform(struct?: ProjectTimeouts | cdktf.IResolvable): any {
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

export class ProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project awx_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/project awx_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_project',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowOverride = config.allowOverride;
    this._description = config.description;
    this._id = config.id;
    this._localPath = config.localPath;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._scmBranch = config.scmBranch;
    this._scmClean = config.scmClean;
    this._scmCredentialId = config.scmCredentialId;
    this._scmDeleteOnUpdate = config.scmDeleteOnUpdate;
    this._scmType = config.scmType;
    this._scmUpdateCacheTimeout = config.scmUpdateCacheTimeout;
    this._scmUpdateOnLaunch = config.scmUpdateOnLaunch;
    this._scmUrl = config.scmUrl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_override - computed: false, optional: true, required: false
  private _allowOverride?: boolean | cdktf.IResolvable; 
  public get allowOverride() {
    return this.getBooleanAttribute('allow_override');
  }
  public set allowOverride(value: boolean | cdktf.IResolvable) {
    this._allowOverride = value;
  }
  public resetAllowOverride() {
    this._allowOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverrideInput() {
    return this._allowOverride;
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

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: number; 
  public get organizationId() {
    return this.getNumberAttribute('organization_id');
  }
  public set organizationId(value: number) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // scm_branch - computed: false, optional: true, required: false
  private _scmBranch?: string; 
  public get scmBranch() {
    return this.getStringAttribute('scm_branch');
  }
  public set scmBranch(value: string) {
    this._scmBranch = value;
  }
  public resetScmBranch() {
    this._scmBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmBranchInput() {
    return this._scmBranch;
  }

  // scm_clean - computed: false, optional: true, required: false
  private _scmClean?: boolean | cdktf.IResolvable; 
  public get scmClean() {
    return this.getBooleanAttribute('scm_clean');
  }
  public set scmClean(value: boolean | cdktf.IResolvable) {
    this._scmClean = value;
  }
  public resetScmClean() {
    this._scmClean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmCleanInput() {
    return this._scmClean;
  }

  // scm_credential_id - computed: false, optional: true, required: false
  private _scmCredentialId?: number; 
  public get scmCredentialId() {
    return this.getNumberAttribute('scm_credential_id');
  }
  public set scmCredentialId(value: number) {
    this._scmCredentialId = value;
  }
  public resetScmCredentialId() {
    this._scmCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmCredentialIdInput() {
    return this._scmCredentialId;
  }

  // scm_delete_on_update - computed: false, optional: true, required: false
  private _scmDeleteOnUpdate?: boolean | cdktf.IResolvable; 
  public get scmDeleteOnUpdate() {
    return this.getBooleanAttribute('scm_delete_on_update');
  }
  public set scmDeleteOnUpdate(value: boolean | cdktf.IResolvable) {
    this._scmDeleteOnUpdate = value;
  }
  public resetScmDeleteOnUpdate() {
    this._scmDeleteOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmDeleteOnUpdateInput() {
    return this._scmDeleteOnUpdate;
  }

  // scm_type - computed: false, optional: false, required: true
  private _scmType?: string; 
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }
  public set scmType(value: string) {
    this._scmType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scmTypeInput() {
    return this._scmType;
  }

  // scm_update_cache_timeout - computed: false, optional: true, required: false
  private _scmUpdateCacheTimeout?: number; 
  public get scmUpdateCacheTimeout() {
    return this.getNumberAttribute('scm_update_cache_timeout');
  }
  public set scmUpdateCacheTimeout(value: number) {
    this._scmUpdateCacheTimeout = value;
  }
  public resetScmUpdateCacheTimeout() {
    this._scmUpdateCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmUpdateCacheTimeoutInput() {
    return this._scmUpdateCacheTimeout;
  }

  // scm_update_on_launch - computed: false, optional: true, required: false
  private _scmUpdateOnLaunch?: boolean | cdktf.IResolvable; 
  public get scmUpdateOnLaunch() {
    return this.getBooleanAttribute('scm_update_on_launch');
  }
  public set scmUpdateOnLaunch(value: boolean | cdktf.IResolvable) {
    this._scmUpdateOnLaunch = value;
  }
  public resetScmUpdateOnLaunch() {
    this._scmUpdateOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmUpdateOnLaunchInput() {
    return this._scmUpdateOnLaunch;
  }

  // scm_url - computed: false, optional: true, required: false
  private _scmUrl?: string; 
  public get scmUrl() {
    return this.getStringAttribute('scm_url');
  }
  public set scmUrl(value: string) {
    this._scmUrl = value;
  }
  public resetScmUrl() {
    this._scmUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmUrlInput() {
    return this._scmUrl;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ProjectTimeouts) {
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
      allow_override: cdktf.booleanToTerraform(this._allowOverride),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      local_path: cdktf.stringToTerraform(this._localPath),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.numberToTerraform(this._organizationId),
      scm_branch: cdktf.stringToTerraform(this._scmBranch),
      scm_clean: cdktf.booleanToTerraform(this._scmClean),
      scm_credential_id: cdktf.numberToTerraform(this._scmCredentialId),
      scm_delete_on_update: cdktf.booleanToTerraform(this._scmDeleteOnUpdate),
      scm_type: cdktf.stringToTerraform(this._scmType),
      scm_update_cache_timeout: cdktf.numberToTerraform(this._scmUpdateCacheTimeout),
      scm_update_on_launch: cdktf.booleanToTerraform(this._scmUpdateOnLaunch),
      scm_url: cdktf.stringToTerraform(this._scmUrl),
      timeouts: projectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_override: {
        value: cdktf.booleanToHclTerraform(this._allowOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      local_path: {
        value: cdktf.stringToHclTerraform(this._localPath),
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
      organization_id: {
        value: cdktf.numberToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scm_branch: {
        value: cdktf.stringToHclTerraform(this._scmBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scm_clean: {
        value: cdktf.booleanToHclTerraform(this._scmClean),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scm_credential_id: {
        value: cdktf.numberToHclTerraform(this._scmCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scm_delete_on_update: {
        value: cdktf.booleanToHclTerraform(this._scmDeleteOnUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scm_type: {
        value: cdktf.stringToHclTerraform(this._scmType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scm_update_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._scmUpdateCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scm_update_on_launch: {
        value: cdktf.booleanToHclTerraform(this._scmUpdateOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scm_url: {
        value: cdktf.stringToHclTerraform(this._scmUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: projectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
