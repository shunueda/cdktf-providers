// https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository_group_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryGroupPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository_group_permission#group_slug RepositoryGroupPermission#group_slug}
  */
  readonly groupSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository_group_permission#id RepositoryGroupPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository_group_permission#permission RepositoryGroupPermission#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository_group_permission#repo_slug RepositoryGroupPermission#repo_slug}
  */
  readonly repoSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository_group_permission#workspace RepositoryGroupPermission#workspace}
  */
  readonly workspace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository_group_permission bitbucket_repository_group_permission}
*/
export class RepositoryGroupPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitbucket_repository_group_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryGroupPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryGroupPermission to import
  * @param importFromId The id of the existing RepositoryGroupPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository_group_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryGroupPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitbucket_repository_group_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository_group_permission bitbucket_repository_group_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryGroupPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryGroupPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'bitbucket_repository_group_permission',
      terraformGeneratorMetadata: {
        providerName: 'bitbucket',
        providerVersion: '2.50.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupSlug = config.groupSlug;
    this._id = config.id;
    this._permission = config.permission;
    this._repoSlug = config.repoSlug;
    this._workspace = config.workspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_slug - computed: false, optional: false, required: true
  private _groupSlug?: string; 
  public get groupSlug() {
    return this.getStringAttribute('group_slug');
  }
  public set groupSlug(value: string) {
    this._groupSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSlugInput() {
    return this._groupSlug;
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // repo_slug - computed: false, optional: false, required: true
  private _repoSlug?: string; 
  public get repoSlug() {
    return this.getStringAttribute('repo_slug');
  }
  public set repoSlug(value: string) {
    this._repoSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoSlugInput() {
    return this._repoSlug;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_slug: cdktf.stringToTerraform(this._groupSlug),
      id: cdktf.stringToTerraform(this._id),
      permission: cdktf.stringToTerraform(this._permission),
      repo_slug: cdktf.stringToTerraform(this._repoSlug),
      workspace: cdktf.stringToTerraform(this._workspace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_slug: {
        value: cdktf.stringToHclTerraform(this._groupSlug),
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
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_slug: {
        value: cdktf.stringToHclTerraform(this._repoSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
