// https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The permission's description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission#description Permission#description}
  */
  readonly description?: string;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission#domain Permission#domain}
  */
  readonly domain: string;
  /**
  * The permission's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission#name Permission#name}
  */
  readonly name: string;
  /**
  * The permission's access level to pipelines. Allowed: `DENIED`, `READ_ONLY`, `RUN_ONLY`, `READ_WRITE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission#pipeline_access_level Permission#pipeline_access_level}
  */
  readonly pipelineAccessLevel: string;
  /**
  * The permission's access level to team. Allowed: `READ_ONLY`, `MANAGE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission#project_team_access_level Permission#project_team_access_level}
  */
  readonly projectTeamAccessLevel?: string;
  /**
  * The permission's access level to repository. Allowed: `READ_ONLY`, `READ_WRITE`, `MANAGE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission#repository_access_level Permission#repository_access_level}
  */
  readonly repositoryAccessLevel: string;
  /**
  * The permission's access level to sandboxes. Allowed: `DENIED`, `READ_ONLY`, `READ_WRITE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission#sandbox_access_level Permission#sandbox_access_level}
  */
  readonly sandboxAccessLevel: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission buddy_permission}
*/
export class Permission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Permission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Permission to import
  * @param importFromId The id of the existing Permission that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Permission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/permission buddy_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_permission',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.37.1',
        providerVersionConstraint: '1.37.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._domain = config.domain;
    this._name = config.name;
    this._pipelineAccessLevel = config.pipelineAccessLevel;
    this._projectTeamAccessLevel = config.projectTeamAccessLevel;
    this._repositoryAccessLevel = config.repositoryAccessLevel;
    this._sandboxAccessLevel = config.sandboxAccessLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
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

  // permission_id - computed: true, optional: false, required: false
  public get permissionId() {
    return this.getNumberAttribute('permission_id');
  }

  // pipeline_access_level - computed: false, optional: false, required: true
  private _pipelineAccessLevel?: string; 
  public get pipelineAccessLevel() {
    return this.getStringAttribute('pipeline_access_level');
  }
  public set pipelineAccessLevel(value: string) {
    this._pipelineAccessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAccessLevelInput() {
    return this._pipelineAccessLevel;
  }

  // project_team_access_level - computed: true, optional: true, required: false
  private _projectTeamAccessLevel?: string; 
  public get projectTeamAccessLevel() {
    return this.getStringAttribute('project_team_access_level');
  }
  public set projectTeamAccessLevel(value: string) {
    this._projectTeamAccessLevel = value;
  }
  public resetProjectTeamAccessLevel() {
    this._projectTeamAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectTeamAccessLevelInput() {
    return this._projectTeamAccessLevel;
  }

  // repository_access_level - computed: false, optional: false, required: true
  private _repositoryAccessLevel?: string; 
  public get repositoryAccessLevel() {
    return this.getStringAttribute('repository_access_level');
  }
  public set repositoryAccessLevel(value: string) {
    this._repositoryAccessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAccessLevelInput() {
    return this._repositoryAccessLevel;
  }

  // sandbox_access_level - computed: false, optional: false, required: true
  private _sandboxAccessLevel?: string; 
  public get sandboxAccessLevel() {
    return this.getStringAttribute('sandbox_access_level');
  }
  public set sandboxAccessLevel(value: string) {
    this._sandboxAccessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxAccessLevelInput() {
    return this._sandboxAccessLevel;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      name: cdktf.stringToTerraform(this._name),
      pipeline_access_level: cdktf.stringToTerraform(this._pipelineAccessLevel),
      project_team_access_level: cdktf.stringToTerraform(this._projectTeamAccessLevel),
      repository_access_level: cdktf.stringToTerraform(this._repositoryAccessLevel),
      sandbox_access_level: cdktf.stringToTerraform(this._sandboxAccessLevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      pipeline_access_level: {
        value: cdktf.stringToHclTerraform(this._pipelineAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_team_access_level: {
        value: cdktf.stringToHclTerraform(this._projectTeamAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_access_level: {
        value: cdktf.stringToHclTerraform(this._repositoryAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sandbox_access_level: {
        value: cdktf.stringToHclTerraform(this._sandboxAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
