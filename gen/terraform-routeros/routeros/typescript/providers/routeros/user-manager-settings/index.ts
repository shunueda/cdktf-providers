// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserManagerSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings#___path___ UserManagerSettings#___path___}
  */
  readonly path?: string;
  /**
  * Port to listen for RADIUS accounting requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings#accounting_port UserManagerSettings#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * Port to listen for RADIUS authentication requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings#authentication_port UserManagerSettings#authentication_port}
  */
  readonly authenticationPort?: number;
  /**
  * Certificate for use in EAP TLS-type authentication methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings#certificate UserManagerSettings#certificate}
  */
  readonly certificate?: string;
  /**
  * An option whether the User Manager functionality is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings#enabled UserManagerSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings#id UserManagerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An option whether to require `Message-Authenticator` in received Access-Accept/Challenge/Reject messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings#require_message_auth UserManagerSettings#require_message_auth}
  */
  readonly requireMessageAuth?: string;
  /**
  * An option whether to use Profiles and Limitations. When set to `false`, only User configuration is required to run User Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings#use_profiles UserManagerSettings#use_profiles}
  */
  readonly useProfiles?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings routeros_user_manager_settings}
*/
export class UserManagerSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_user_manager_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserManagerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserManagerSettings to import
  * @param importFromId The id of the existing UserManagerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserManagerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_user_manager_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/user_manager_settings routeros_user_manager_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserManagerSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserManagerSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_user_manager_settings',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._accountingPort = config.accountingPort;
    this._authenticationPort = config.authenticationPort;
    this._certificate = config.certificate;
    this._enabled = config.enabled;
    this._id = config.id;
    this._requireMessageAuth = config.requireMessageAuth;
    this._useProfiles = config.useProfiles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // accounting_port - computed: false, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // authentication_port - computed: false, optional: true, required: false
  private _authenticationPort?: number; 
  public get authenticationPort() {
    return this.getNumberAttribute('authentication_port');
  }
  public set authenticationPort(value: number) {
    this._authenticationPort = value;
  }
  public resetAuthenticationPort() {
    this._authenticationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPortInput() {
    return this._authenticationPort;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // require_message_auth - computed: false, optional: true, required: false
  private _requireMessageAuth?: string; 
  public get requireMessageAuth() {
    return this.getStringAttribute('require_message_auth');
  }
  public set requireMessageAuth(value: string) {
    this._requireMessageAuth = value;
  }
  public resetRequireMessageAuth() {
    this._requireMessageAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMessageAuthInput() {
    return this._requireMessageAuth;
  }

  // use_profiles - computed: false, optional: true, required: false
  private _useProfiles?: boolean | cdktf.IResolvable; 
  public get useProfiles() {
    return this.getBooleanAttribute('use_profiles');
  }
  public set useProfiles(value: boolean | cdktf.IResolvable) {
    this._useProfiles = value;
  }
  public resetUseProfiles() {
    this._useProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProfilesInput() {
    return this._useProfiles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      accounting_port: cdktf.numberToTerraform(this._accountingPort),
      authentication_port: cdktf.numberToTerraform(this._authenticationPort),
      certificate: cdktf.stringToTerraform(this._certificate),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      require_message_auth: cdktf.stringToTerraform(this._requireMessageAuth),
      use_profiles: cdktf.booleanToTerraform(this._useProfiles),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting_port: {
        value: cdktf.numberToHclTerraform(this._accountingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_port: {
        value: cdktf.numberToHclTerraform(this._authenticationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      require_message_auth: {
        value: cdktf.stringToHclTerraform(this._requireMessageAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_profiles: {
        value: cdktf.booleanToHclTerraform(this._useProfiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
