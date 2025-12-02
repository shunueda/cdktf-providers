// https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/profile_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfilePermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application name of the application, profile is assciated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/profile_permission#app_name ProfilePermission#app_name}
  */
  readonly appName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/profile_permission#id ProfilePermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/profile_permission#permission_name ProfilePermission#permission_name}
  */
  readonly permissionName: string;
  /**
  * The type of permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/profile_permission#permission_type ProfilePermission#permission_type}
  */
  readonly permissionType: string;
  /**
  * The identifier of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/profile_permission#profile_id ProfilePermission#profile_id}
  */
  readonly profileId: string;
  /**
  * The name of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/profile_permission#profile_name ProfilePermission#profile_name}
  */
  readonly profileName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/profile_permission britive_profile_permission}
*/
export class ProfilePermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_profile_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfilePermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfilePermission to import
  * @param importFromId The id of the existing ProfilePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/profile_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfilePermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_profile_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/profile_permission britive_profile_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfilePermissionConfig
  */
  public constructor(scope: Construct, id: string, config: ProfilePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_profile_permission',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.6',
        providerVersionConstraint: '2.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._id = config.id;
    this._permissionName = config.permissionName;
    this._permissionType = config.permissionType;
    this._profileId = config.profileId;
    this._profileName = config.profileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: true, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
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

  // permission_name - computed: false, optional: false, required: true
  private _permissionName?: string; 
  public get permissionName() {
    return this.getStringAttribute('permission_name');
  }
  public set permissionName(value: string) {
    this._permissionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionNameInput() {
    return this._permissionName;
  }

  // permission_type - computed: false, optional: false, required: true
  private _permissionType?: string; 
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }
  public set permissionType(value: string) {
    this._permissionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionTypeInput() {
    return this._permissionType;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      id: cdktf.stringToTerraform(this._id),
      permission_name: cdktf.stringToTerraform(this._permissionName),
      permission_type: cdktf.stringToTerraform(this._permissionType),
      profile_id: cdktf.stringToTerraform(this._profileId),
      profile_name: cdktf.stringToTerraform(this._profileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
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
      permission_name: {
        value: cdktf.stringToHclTerraform(this._permissionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_type: {
        value: cdktf.stringToHclTerraform(this._permissionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
