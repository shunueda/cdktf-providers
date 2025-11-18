// https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBuddyPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/permission#domain DataBuddyPermission#domain}
  */
  readonly domain: string;
  /**
  * The permission's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/permission#name DataBuddyPermission#name}
  */
  readonly name?: string;
  /**
  * The permission's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/permission#permission_id DataBuddyPermission#permission_id}
  */
  readonly permissionId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/permission buddy_permission}
*/
export class DataBuddyPermission extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBuddyPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBuddyPermission to import
  * @param importFromId The id of the existing DataBuddyPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBuddyPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/permission buddy_permission} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBuddyPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: DataBuddyPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_permission',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._name = config.name;
    this._permissionId = config.permissionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // permission_id - computed: true, optional: true, required: false
  private _permissionId?: number; 
  public get permissionId() {
    return this.getNumberAttribute('permission_id');
  }
  public set permissionId(value: number) {
    this._permissionId = value;
  }
  public resetPermissionId() {
    this._permissionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionIdInput() {
    return this._permissionId;
  }

  // pipeline_access_level - computed: true, optional: false, required: false
  public get pipelineAccessLevel() {
    return this.getStringAttribute('pipeline_access_level');
  }

  // project_team_access_level - computed: true, optional: false, required: false
  public get projectTeamAccessLevel() {
    return this.getStringAttribute('project_team_access_level');
  }

  // repository_access_level - computed: true, optional: false, required: false
  public get repositoryAccessLevel() {
    return this.getStringAttribute('repository_access_level');
  }

  // sandbox_access_level - computed: true, optional: false, required: false
  public get sandboxAccessLevel() {
    return this.getStringAttribute('sandbox_access_level');
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
      domain: cdktf.stringToTerraform(this._domain),
      name: cdktf.stringToTerraform(this._name),
      permission_id: cdktf.numberToTerraform(this._permissionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      permission_id: {
        value: cdktf.numberToHclTerraform(this._permissionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
