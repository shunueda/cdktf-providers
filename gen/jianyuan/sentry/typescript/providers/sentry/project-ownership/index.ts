// https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_ownership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectOwnershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The auto-assignment mode. The options are: `Auto Assign to Issue Owner`, `Auto Assign to Suspect Commits`, and `Turn off Auto-Assignment`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_ownership#auto_assignment ProjectOwnership#auto_assignment}
  */
  readonly autoAssignment: string;
  /**
  * Whether to automatically sync codeowners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_ownership#codeowners_auto_sync ProjectOwnership#codeowners_auto_sync}
  */
  readonly codeownersAutoSync: boolean | cdktf.IResolvable;
  /**
  * Whether to fall through to the default ownership rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_ownership#fallthrough ProjectOwnership#fallthrough}
  */
  readonly fallthrough: boolean | cdktf.IResolvable;
  /**
  * The organization of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_ownership#organization ProjectOwnership#organization}
  */
  readonly organization: string;
  /**
  * The project of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_ownership#project ProjectOwnership#project}
  */
  readonly project: string;
  /**
  * Raw input for ownership configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_ownership#raw ProjectOwnership#raw}
  */
  readonly raw: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_ownership sentry_project_ownership}
*/
export class ProjectOwnership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_project_ownership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectOwnership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectOwnership to import
  * @param importFromId The id of the existing ProjectOwnership that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_ownership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectOwnership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_project_ownership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.7/docs/resources/project_ownership sentry_project_ownership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectOwnershipConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectOwnershipConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_project_ownership',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.7',
        providerVersionConstraint: '0.14.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAssignment = config.autoAssignment;
    this._codeownersAutoSync = config.codeownersAutoSync;
    this._fallthrough = config.fallthrough;
    this._organization = config.organization;
    this._project = config.project;
    this._raw = config.raw;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_assignment - computed: false, optional: false, required: true
  private _autoAssignment?: string; 
  public get autoAssignment() {
    return this.getStringAttribute('auto_assignment');
  }
  public set autoAssignment(value: string) {
    this._autoAssignment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignmentInput() {
    return this._autoAssignment;
  }

  // codeowners_auto_sync - computed: false, optional: false, required: true
  private _codeownersAutoSync?: boolean | cdktf.IResolvable; 
  public get codeownersAutoSync() {
    return this.getBooleanAttribute('codeowners_auto_sync');
  }
  public set codeownersAutoSync(value: boolean | cdktf.IResolvable) {
    this._codeownersAutoSync = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeownersAutoSyncInput() {
    return this._codeownersAutoSync;
  }

  // fallthrough - computed: false, optional: false, required: true
  private _fallthrough?: boolean | cdktf.IResolvable; 
  public get fallthrough() {
    return this.getBooleanAttribute('fallthrough');
  }
  public set fallthrough(value: boolean | cdktf.IResolvable) {
    this._fallthrough = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallthroughInput() {
    return this._fallthrough;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // raw - computed: false, optional: false, required: true
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_assignment: cdktf.stringToTerraform(this._autoAssignment),
      codeowners_auto_sync: cdktf.booleanToTerraform(this._codeownersAutoSync),
      fallthrough: cdktf.booleanToTerraform(this._fallthrough),
      organization: cdktf.stringToTerraform(this._organization),
      project: cdktf.stringToTerraform(this._project),
      raw: cdktf.stringToTerraform(this._raw),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_assignment: {
        value: cdktf.stringToHclTerraform(this._autoAssignment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      codeowners_auto_sync: {
        value: cdktf.booleanToHclTerraform(this._codeownersAutoSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallthrough: {
        value: cdktf.booleanToHclTerraform(this._fallthrough),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raw: {
        value: cdktf.stringToHclTerraform(this._raw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
