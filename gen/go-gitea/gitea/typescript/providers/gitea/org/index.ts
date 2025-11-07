// https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of this organisation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org#description Org#description}
  */
  readonly description?: string;
  /**
  * The display name of the organisation. Defaults to the value of `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org#full_name Org#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org#id Org#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org#location Org#location}
  */
  readonly location?: string;
  /**
  * The name of the organisation without spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org#name Org#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org#repo_admin_change_team_access Org#repo_admin_change_team_access}
  */
  readonly repoAdminChangeTeamAccess?: boolean | cdktf.IResolvable;
  /**
  * Flag is this organisation should be publicly visible or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org#visibility Org#visibility}
  */
  readonly visibility?: string;
  /**
  * A link to a website with more information about this organisation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org#website Org#website}
  */
  readonly website?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org gitea_org}
*/
export class Org extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitea_org";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Org resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Org to import
  * @param importFromId The id of the existing Org that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Org to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitea_org", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/org gitea_org} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgConfig
  */
  public constructor(scope: Construct, id: string, config: OrgConfig) {
    super(scope, id, {
      terraformResourceType: 'gitea_org',
      terraformGeneratorMetadata: {
        providerName: 'gitea',
        providerVersion: '0.7.0'
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
    this._fullName = config.fullName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._repoAdminChangeTeamAccess = config.repoAdminChangeTeamAccess;
    this._visibility = config.visibility;
    this._website = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
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

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // repo_admin_change_team_access - computed: false, optional: true, required: false
  private _repoAdminChangeTeamAccess?: boolean | cdktf.IResolvable; 
  public get repoAdminChangeTeamAccess() {
    return this.getBooleanAttribute('repo_admin_change_team_access');
  }
  public set repoAdminChangeTeamAccess(value: boolean | cdktf.IResolvable) {
    this._repoAdminChangeTeamAccess = value;
  }
  public resetRepoAdminChangeTeamAccess() {
    this._repoAdminChangeTeamAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoAdminChangeTeamAccessInput() {
    return this._repoAdminChangeTeamAccess;
  }

  // repos - computed: true, optional: false, required: false
  public get repos() {
    return this.getListAttribute('repos');
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // website - computed: false, optional: true, required: false
  private _website?: string; 
  public get website() {
    return this.getStringAttribute('website');
  }
  public set website(value: string) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      repo_admin_change_team_access: cdktf.booleanToTerraform(this._repoAdminChangeTeamAccess),
      visibility: cdktf.stringToTerraform(this._visibility),
      website: cdktf.stringToTerraform(this._website),
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
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      repo_admin_change_team_access: {
        value: cdktf.booleanToHclTerraform(this._repoAdminChangeTeamAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website: {
        value: cdktf.stringToHclTerraform(this._website),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
