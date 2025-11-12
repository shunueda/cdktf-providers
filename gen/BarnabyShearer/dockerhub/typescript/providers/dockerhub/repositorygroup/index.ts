// https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repositorygroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositorygroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The group to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repositorygroup#group Repositorygroup#group}
  */
  readonly group: number;
  /**
  * The group to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repositorygroup#groupname Repositorygroup#groupname}
  */
  readonly groupname: string;
  /**
  * The permission to assign the group. One of 'read', 'write' and 'admin'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repositorygroup#permission Repositorygroup#permission}
  */
  readonly permission?: string;
  /**
  * The repository path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repositorygroup#repository Repositorygroup#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repositorygroup dockerhub_repositorygroup}
*/
export class Repositorygroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dockerhub_repositorygroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Repositorygroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Repositorygroup to import
  * @param importFromId The id of the existing Repositorygroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repositorygroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Repositorygroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dockerhub_repositorygroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repositorygroup dockerhub_repositorygroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositorygroupConfig
  */
  public constructor(scope: Construct, id: string, config: RepositorygroupConfig) {
    super(scope, id, {
      terraformResourceType: 'dockerhub_repositorygroup',
      terraformGeneratorMetadata: {
        providerName: 'dockerhub',
        providerVersion: '0.0.15',
        providerVersionConstraint: '0.0.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._groupname = config.groupname;
    this._permission = config.permission;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // groupname - computed: false, optional: false, required: true
  private _groupname?: string; 
  public get groupname() {
    return this.getStringAttribute('groupname');
  }
  public set groupname(value: string) {
    this._groupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnameInput() {
    return this._groupname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.numberToTerraform(this._group),
      groupname: cdktf.stringToTerraform(this._groupname),
      permission: cdktf.stringToTerraform(this._permission),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.numberToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      groupname: {
        value: cdktf.stringToHclTerraform(this._groupname),
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
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
