// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageUserWriteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write#create_users_as_inactive StageUserWrite#create_users_as_inactive}
  */
  readonly createUsersAsInactive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write#create_users_group StageUserWrite#create_users_group}
  */
  readonly createUsersGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write#id StageUserWrite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write#name StageUserWrite#name}
  */
  readonly name: string;
  /**
  * Allowed values:
  *   - `never_create`
  *   - `create_when_required`
  *   - `always_create`
  *  Defaults to `create_when_required`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write#user_creation_mode StageUserWrite#user_creation_mode}
  */
  readonly userCreationMode?: string;
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write#user_path_template StageUserWrite#user_path_template}
  */
  readonly userPathTemplate?: string;
  /**
  * Allowed values:
  *   - `internal`
  *   - `external`
  *   - `service_account`
  *  Defaults to `external`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write#user_type StageUserWrite#user_type}
  */
  readonly userType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write authentik_stage_user_write}
*/
export class StageUserWrite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_user_write";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageUserWrite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageUserWrite to import
  * @param importFromId The id of the existing StageUserWrite that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageUserWrite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_user_write", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_user_write authentik_stage_user_write} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageUserWriteConfig
  */
  public constructor(scope: Construct, id: string, config: StageUserWriteConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_user_write',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createUsersAsInactive = config.createUsersAsInactive;
    this._createUsersGroup = config.createUsersGroup;
    this._id = config.id;
    this._name = config.name;
    this._userCreationMode = config.userCreationMode;
    this._userPathTemplate = config.userPathTemplate;
    this._userType = config.userType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_users_as_inactive - computed: false, optional: true, required: false
  private _createUsersAsInactive?: boolean | cdktf.IResolvable; 
  public get createUsersAsInactive() {
    return this.getBooleanAttribute('create_users_as_inactive');
  }
  public set createUsersAsInactive(value: boolean | cdktf.IResolvable) {
    this._createUsersAsInactive = value;
  }
  public resetCreateUsersAsInactive() {
    this._createUsersAsInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUsersAsInactiveInput() {
    return this._createUsersAsInactive;
  }

  // create_users_group - computed: false, optional: true, required: false
  private _createUsersGroup?: string; 
  public get createUsersGroup() {
    return this.getStringAttribute('create_users_group');
  }
  public set createUsersGroup(value: string) {
    this._createUsersGroup = value;
  }
  public resetCreateUsersGroup() {
    this._createUsersGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUsersGroupInput() {
    return this._createUsersGroup;
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

  // user_creation_mode - computed: false, optional: true, required: false
  private _userCreationMode?: string; 
  public get userCreationMode() {
    return this.getStringAttribute('user_creation_mode');
  }
  public set userCreationMode(value: string) {
    this._userCreationMode = value;
  }
  public resetUserCreationMode() {
    this._userCreationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCreationModeInput() {
    return this._userCreationMode;
  }

  // user_path_template - computed: false, optional: true, required: false
  private _userPathTemplate?: string; 
  public get userPathTemplate() {
    return this.getStringAttribute('user_path_template');
  }
  public set userPathTemplate(value: string) {
    this._userPathTemplate = value;
  }
  public resetUserPathTemplate() {
    this._userPathTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPathTemplateInput() {
    return this._userPathTemplate;
  }

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_users_as_inactive: cdktf.booleanToTerraform(this._createUsersAsInactive),
      create_users_group: cdktf.stringToTerraform(this._createUsersGroup),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_creation_mode: cdktf.stringToTerraform(this._userCreationMode),
      user_path_template: cdktf.stringToTerraform(this._userPathTemplate),
      user_type: cdktf.stringToTerraform(this._userType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_users_as_inactive: {
        value: cdktf.booleanToHclTerraform(this._createUsersAsInactive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_users_group: {
        value: cdktf.stringToHclTerraform(this._createUsersGroup),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_creation_mode: {
        value: cdktf.stringToHclTerraform(this._userCreationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_path_template: {
        value: cdktf.stringToHclTerraform(this._userPathTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
