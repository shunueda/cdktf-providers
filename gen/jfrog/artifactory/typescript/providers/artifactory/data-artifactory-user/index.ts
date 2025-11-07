// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Optional, Default: false) When enabled, this user is an administrator with all the ensuing privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user#admin DataArtifactoryUser#admin}
  */
  readonly admin?: boolean | cdktf.IResolvable;
  /**
  * (Optional, Default: true) When enabled, this user can only access the system through the REST API. This option cannot be set if the user has Admin privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user#disable_ui_access DataArtifactoryUser#disable_ui_access}
  */
  readonly disableUiAccess?: boolean | cdktf.IResolvable;
  /**
  * Email for user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user#email DataArtifactoryUser#email}
  */
  readonly email?: string;
  /**
  * List of groups this user is a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user#groups DataArtifactoryUser#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user#id DataArtifactoryUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Optional, Default: false) When enabled, disables the fallback mechanism for using an internal password when external authentication (such as LDAP) is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user#internal_password_disabled DataArtifactoryUser#internal_password_disabled}
  */
  readonly internalPasswordDisabled?: boolean | cdktf.IResolvable;
  /**
  * Username for user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user#name DataArtifactoryUser#name}
  */
  readonly name: string;
  /**
  * (Optional, Default: true) When enabled, this user can update their profile details (except for the password. Only an administrator can update the password). There may be cases in which you want to leave this unset to prevent users from updating their profile. For example, a departmental user with a single password shared between all department members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user#profile_updatable DataArtifactoryUser#profile_updatable}
  */
  readonly profileUpdatable?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user artifactory_user}
*/
export class DataArtifactoryUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryUser to import
  * @param importFromId The id of the existing DataArtifactoryUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/user artifactory_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryUserConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_user',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admin = config.admin;
    this._disableUiAccess = config.disableUiAccess;
    this._email = config.email;
    this._groups = config.groups;
    this._id = config.id;
    this._internalPasswordDisabled = config.internalPasswordDisabled;
    this._name = config.name;
    this._profileUpdatable = config.profileUpdatable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: false, optional: true, required: false
  private _admin?: boolean | cdktf.IResolvable; 
  public get admin() {
    return this.getBooleanAttribute('admin');
  }
  public set admin(value: boolean | cdktf.IResolvable) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // disable_ui_access - computed: false, optional: true, required: false
  private _disableUiAccess?: boolean | cdktf.IResolvable; 
  public get disableUiAccess() {
    return this.getBooleanAttribute('disable_ui_access');
  }
  public set disableUiAccess(value: boolean | cdktf.IResolvable) {
    this._disableUiAccess = value;
  }
  public resetDisableUiAccess() {
    this._disableUiAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUiAccessInput() {
    return this._disableUiAccess;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // internal_password_disabled - computed: false, optional: true, required: false
  private _internalPasswordDisabled?: boolean | cdktf.IResolvable; 
  public get internalPasswordDisabled() {
    return this.getBooleanAttribute('internal_password_disabled');
  }
  public set internalPasswordDisabled(value: boolean | cdktf.IResolvable) {
    this._internalPasswordDisabled = value;
  }
  public resetInternalPasswordDisabled() {
    this._internalPasswordDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPasswordDisabledInput() {
    return this._internalPasswordDisabled;
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

  // profile_updatable - computed: false, optional: true, required: false
  private _profileUpdatable?: boolean | cdktf.IResolvable; 
  public get profileUpdatable() {
    return this.getBooleanAttribute('profile_updatable');
  }
  public set profileUpdatable(value: boolean | cdktf.IResolvable) {
    this._profileUpdatable = value;
  }
  public resetProfileUpdatable() {
    this._profileUpdatable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUpdatableInput() {
    return this._profileUpdatable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin: cdktf.booleanToTerraform(this._admin),
      disable_ui_access: cdktf.booleanToTerraform(this._disableUiAccess),
      email: cdktf.stringToTerraform(this._email),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      internal_password_disabled: cdktf.booleanToTerraform(this._internalPasswordDisabled),
      name: cdktf.stringToTerraform(this._name),
      profile_updatable: cdktf.booleanToTerraform(this._profileUpdatable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin: {
        value: cdktf.booleanToHclTerraform(this._admin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_ui_access: {
        value: cdktf.booleanToHclTerraform(this._disableUiAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_password_disabled: {
        value: cdktf.booleanToHclTerraform(this._internalPasswordDisabled),
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
      profile_updatable: {
        value: cdktf.booleanToHclTerraform(this._profileUpdatable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
