// https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag if the Teams members should be able to create Rpositories in the Organisation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team#can_create_repos Team#can_create_repos}
  */
  readonly canCreateRepos?: boolean | cdktf.IResolvable;
  /**
  * Description of the Team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag if the Teams members should have access to all Repositories in the Organisation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team#include_all_repositories Team#include_all_repositories}
  */
  readonly includeAllRepositories?: boolean | cdktf.IResolvable;
  /**
  * Name of the Team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * The organisation which this Team is part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team#organisation Team#organisation}
  */
  readonly organisation: string;
  /**
  * Permissions associated with this Team
  * Can be `none`, `read`, `write`, `admin` or `owner`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team#permission Team#permission}
  */
  readonly permission?: string;
  /**
  * List of Repositories that should be part of this team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team#repositories Team#repositories}
  */
  readonly repositories?: string[];
  /**
  * List of types of Repositories that should be allowed to be created from Team members.
  * Can be `repo.code`, `repo.issues`, `repo.ext_issues`, `repo.wiki`, `repo.pulls`, `repo.releases`, `repo.projects` and/or `repo.ext_wiki`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team#units Team#units}
  */
  readonly units?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team gitea_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitea_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitea_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team gitea_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'gitea_team',
      terraformGeneratorMetadata: {
        providerName: 'gitea',
        providerVersion: '0.7.0',
        providerVersionConstraint: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canCreateRepos = config.canCreateRepos;
    this._description = config.description;
    this._id = config.id;
    this._includeAllRepositories = config.includeAllRepositories;
    this._name = config.name;
    this._organisation = config.organisation;
    this._permission = config.permission;
    this._repositories = config.repositories;
    this._units = config.units;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_create_repos - computed: false, optional: true, required: false
  private _canCreateRepos?: boolean | cdktf.IResolvable; 
  public get canCreateRepos() {
    return this.getBooleanAttribute('can_create_repos');
  }
  public set canCreateRepos(value: boolean | cdktf.IResolvable) {
    this._canCreateRepos = value;
  }
  public resetCanCreateRepos() {
    this._canCreateRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateReposInput() {
    return this._canCreateRepos;
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

  // include_all_repositories - computed: false, optional: true, required: false
  private _includeAllRepositories?: boolean | cdktf.IResolvable; 
  public get includeAllRepositories() {
    return this.getBooleanAttribute('include_all_repositories');
  }
  public set includeAllRepositories(value: boolean | cdktf.IResolvable) {
    this._includeAllRepositories = value;
  }
  public resetIncludeAllRepositories() {
    this._includeAllRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllRepositoriesInput() {
    return this._includeAllRepositories;
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

  // organisation - computed: false, optional: false, required: true
  private _organisation?: string; 
  public get organisation() {
    return this.getStringAttribute('organisation');
  }
  public set organisation(value: string) {
    this._organisation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organisationInput() {
    return this._organisation;
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

  // repositories - computed: true, optional: true, required: false
  private _repositories?: string[]; 
  public get repositories() {
    return this.getListAttribute('repositories');
  }
  public set repositories(value: string[]) {
    this._repositories = value;
  }
  public resetRepositories() {
    this._repositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories;
  }

  // units - computed: false, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_create_repos: cdktf.booleanToTerraform(this._canCreateRepos),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      include_all_repositories: cdktf.booleanToTerraform(this._includeAllRepositories),
      name: cdktf.stringToTerraform(this._name),
      organisation: cdktf.stringToTerraform(this._organisation),
      permission: cdktf.stringToTerraform(this._permission),
      repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repositories),
      units: cdktf.stringToTerraform(this._units),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_create_repos: {
        value: cdktf.booleanToHclTerraform(this._canCreateRepos),
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
      include_all_repositories: {
        value: cdktf.booleanToHclTerraform(this._includeAllRepositories),
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
      organisation: {
        value: cdktf.stringToHclTerraform(this._organisation),
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
      repositories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repositories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      units: {
        value: cdktf.stringToHclTerraform(this._units),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
