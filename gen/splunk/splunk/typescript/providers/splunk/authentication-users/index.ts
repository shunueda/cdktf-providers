// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * User default app. Overrides the default app inherited from the user roles. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#default_app AuthenticationUsers#default_app}
  */
  readonly defaultApp?: string;
  /**
  * User email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#email AuthenticationUsers#email}
  */
  readonly email?: string;
  /**
  * Force user to change password indication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#force_change_pass AuthenticationUsers#force_change_pass}
  */
  readonly forceChangePass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#id AuthenticationUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required. Unique user login name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#name AuthenticationUsers#name}
  */
  readonly name: string;
  /**
  * User login password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#password AuthenticationUsers#password}
  */
  readonly password?: string;
  /**
  * Full user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#realname AuthenticationUsers#realname}
  */
  readonly realname?: string;
  /**
  * Restart background search job that has not completed when Splunk restarts indication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#restart_background_jobs AuthenticationUsers#restart_background_jobs}
  */
  readonly restartBackgroundJobs?: boolean | cdktf.IResolvable;
  /**
  * Role to assign to this user. At least one existing role is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#roles AuthenticationUsers#roles}
  */
  readonly roles?: string[];
  /**
  * User timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#tz AuthenticationUsers#tz}
  */
  readonly tz?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users splunk_authentication_users}
*/
export class AuthenticationUsers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_authentication_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationUsers to import
  * @param importFromId The id of the existing AuthenticationUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_authentication_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/authentication_users splunk_authentication_users} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationUsersConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'splunk_authentication_users',
      terraformGeneratorMetadata: {
        providerName: 'splunk',
        providerVersion: '1.4.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultApp = config.defaultApp;
    this._email = config.email;
    this._forceChangePass = config.forceChangePass;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._realname = config.realname;
    this._restartBackgroundJobs = config.restartBackgroundJobs;
    this._roles = config.roles;
    this._tz = config.tz;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_app - computed: true, optional: true, required: false
  private _defaultApp?: string; 
  public get defaultApp() {
    return this.getStringAttribute('default_app');
  }
  public set defaultApp(value: string) {
    this._defaultApp = value;
  }
  public resetDefaultApp() {
    this._defaultApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAppInput() {
    return this._defaultApp;
  }

  // email - computed: true, optional: true, required: false
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

  // force_change_pass - computed: false, optional: true, required: false
  private _forceChangePass?: boolean | cdktf.IResolvable; 
  public get forceChangePass() {
    return this.getBooleanAttribute('force_change_pass');
  }
  public set forceChangePass(value: boolean | cdktf.IResolvable) {
    this._forceChangePass = value;
  }
  public resetForceChangePass() {
    this._forceChangePass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceChangePassInput() {
    return this._forceChangePass;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // realname - computed: true, optional: true, required: false
  private _realname?: string; 
  public get realname() {
    return this.getStringAttribute('realname');
  }
  public set realname(value: string) {
    this._realname = value;
  }
  public resetRealname() {
    this._realname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realnameInput() {
    return this._realname;
  }

  // restart_background_jobs - computed: true, optional: true, required: false
  private _restartBackgroundJobs?: boolean | cdktf.IResolvable; 
  public get restartBackgroundJobs() {
    return this.getBooleanAttribute('restart_background_jobs');
  }
  public set restartBackgroundJobs(value: boolean | cdktf.IResolvable) {
    this._restartBackgroundJobs = value;
  }
  public resetRestartBackgroundJobs() {
    this._restartBackgroundJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartBackgroundJobsInput() {
    return this._restartBackgroundJobs;
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // tz - computed: true, optional: true, required: false
  private _tz?: string; 
  public get tz() {
    return this.getStringAttribute('tz');
  }
  public set tz(value: string) {
    this._tz = value;
  }
  public resetTz() {
    this._tz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tzInput() {
    return this._tz;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_app: cdktf.stringToTerraform(this._defaultApp),
      email: cdktf.stringToTerraform(this._email),
      force_change_pass: cdktf.booleanToTerraform(this._forceChangePass),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      realname: cdktf.stringToTerraform(this._realname),
      restart_background_jobs: cdktf.booleanToTerraform(this._restartBackgroundJobs),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      tz: cdktf.stringToTerraform(this._tz),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_app: {
        value: cdktf.stringToHclTerraform(this._defaultApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_change_pass: {
        value: cdktf.booleanToHclTerraform(this._forceChangePass),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realname: {
        value: cdktf.stringToHclTerraform(this._realname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_background_jobs: {
        value: cdktf.booleanToHclTerraform(this._restartBackgroundJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tz: {
        value: cdktf.stringToHclTerraform(this._tz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
