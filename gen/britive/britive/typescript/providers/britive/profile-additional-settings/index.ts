// https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/profile_additional_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileAdditionalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Provide the console access for the profile, overriden if use_app_credential_type is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/profile_additional_settings#console_access ProfileAdditionalSettings#console_access}
  */
  readonly consoleAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/profile_additional_settings#id ProfileAdditionalSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/profile_additional_settings#profile_id ProfileAdditionalSettings#profile_id}
  */
  readonly profileId: string;
  /**
  * Provide the programmatic access for the profile, overriden if use_app_credential_type is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/profile_additional_settings#programmatic_access ProfileAdditionalSettings#programmatic_access}
  */
  readonly programmaticAccess?: boolean | cdktf.IResolvable;
  /**
  * The project id for creating service accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/profile_additional_settings#project_id_for_service_account ProfileAdditionalSettings#project_id_for_service_account}
  */
  readonly projectIdForServiceAccount?: string;
  /**
  * Inherit the credential type settings from the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/profile_additional_settings#use_app_credential_type ProfileAdditionalSettings#use_app_credential_type}
  */
  readonly useAppCredentialType?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/profile_additional_settings britive_profile_additional_settings}
*/
export class ProfileAdditionalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_profile_additional_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileAdditionalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileAdditionalSettings to import
  * @param importFromId The id of the existing ProfileAdditionalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/profile_additional_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileAdditionalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_profile_additional_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/profile_additional_settings britive_profile_additional_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileAdditionalSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileAdditionalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_profile_additional_settings',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.5',
        providerVersionConstraint: '2.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consoleAccess = config.consoleAccess;
    this._id = config.id;
    this._profileId = config.profileId;
    this._programmaticAccess = config.programmaticAccess;
    this._projectIdForServiceAccount = config.projectIdForServiceAccount;
    this._useAppCredentialType = config.useAppCredentialType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // console_access - computed: false, optional: true, required: false
  private _consoleAccess?: boolean | cdktf.IResolvable; 
  public get consoleAccess() {
    return this.getBooleanAttribute('console_access');
  }
  public set consoleAccess(value: boolean | cdktf.IResolvable) {
    this._consoleAccess = value;
  }
  public resetConsoleAccess() {
    this._consoleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleAccessInput() {
    return this._consoleAccess;
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

  // programmatic_access - computed: false, optional: true, required: false
  private _programmaticAccess?: boolean | cdktf.IResolvable; 
  public get programmaticAccess() {
    return this.getBooleanAttribute('programmatic_access');
  }
  public set programmaticAccess(value: boolean | cdktf.IResolvable) {
    this._programmaticAccess = value;
  }
  public resetProgrammaticAccess() {
    this._programmaticAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programmaticAccessInput() {
    return this._programmaticAccess;
  }

  // project_id_for_service_account - computed: false, optional: true, required: false
  private _projectIdForServiceAccount?: string; 
  public get projectIdForServiceAccount() {
    return this.getStringAttribute('project_id_for_service_account');
  }
  public set projectIdForServiceAccount(value: string) {
    this._projectIdForServiceAccount = value;
  }
  public resetProjectIdForServiceAccount() {
    this._projectIdForServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdForServiceAccountInput() {
    return this._projectIdForServiceAccount;
  }

  // use_app_credential_type - computed: false, optional: true, required: false
  private _useAppCredentialType?: boolean | cdktf.IResolvable; 
  public get useAppCredentialType() {
    return this.getBooleanAttribute('use_app_credential_type');
  }
  public set useAppCredentialType(value: boolean | cdktf.IResolvable) {
    this._useAppCredentialType = value;
  }
  public resetUseAppCredentialType() {
    this._useAppCredentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAppCredentialTypeInput() {
    return this._useAppCredentialType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      console_access: cdktf.booleanToTerraform(this._consoleAccess),
      id: cdktf.stringToTerraform(this._id),
      profile_id: cdktf.stringToTerraform(this._profileId),
      programmatic_access: cdktf.booleanToTerraform(this._programmaticAccess),
      project_id_for_service_account: cdktf.stringToTerraform(this._projectIdForServiceAccount),
      use_app_credential_type: cdktf.booleanToTerraform(this._useAppCredentialType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      console_access: {
        value: cdktf.booleanToHclTerraform(this._consoleAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      programmatic_access: {
        value: cdktf.booleanToHclTerraform(this._programmaticAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id_for_service_account: {
        value: cdktf.stringToHclTerraform(this._projectIdForServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_app_credential_type: {
        value: cdktf.booleanToHclTerraform(this._useAppCredentialType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
