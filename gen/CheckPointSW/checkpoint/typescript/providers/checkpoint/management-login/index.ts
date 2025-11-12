// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementLoginConfig extends cdktf.TerraformMetaArguments {
  /**
  * When 'continue-last-session' is set to 'True', the new session would continue where the last session was stopped. This option is available when the administrator has only one session that can be continued. If there is more than one session, see 'switch-session' API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#continue_last_session ManagementLogin#continue_last_session}
  */
  readonly continueLastSession?: boolean | cdktf.IResolvable;
  /**
  * Use domain to login to specific domain. Domain can be identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#domain ManagementLogin#domain}
  */
  readonly domain?: string;
  /**
  * commonLoginLogic to the last published session. Such login is done with the Read Only permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#enter_last_published_session ManagementLogin#enter_last_published_session}
  */
  readonly enterLastPublishedSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#id ManagementLogin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Administrator password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#password ManagementLogin#password}
  */
  readonly password: string;
  /**
  * commonLoginLogic with Read Only permissions. This parameter is not considered in case continue-last-session is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#read_only ManagementLogin#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Session comments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#session_comments ManagementLogin#session_comments}
  */
  readonly sessionComments?: string;
  /**
  * Session description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#session_description ManagementLogin#session_description}
  */
  readonly sessionDescription?: string;
  /**
  * Session unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#session_name ManagementLogin#session_name}
  */
  readonly sessionName?: string;
  /**
  * Session expiration timeout in seconds. Default 600 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#session_timeout ManagementLogin#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Administrator user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#user ManagementLogin#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login checkpoint_management_login}
*/
export class ManagementLogin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_login";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementLogin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementLogin to import
  * @param importFromId The id of the existing ManagementLogin that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementLogin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_login", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_login checkpoint_management_login} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementLoginConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementLoginConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_login',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._continueLastSession = config.continueLastSession;
    this._domain = config.domain;
    this._enterLastPublishedSession = config.enterLastPublishedSession;
    this._id = config.id;
    this._password = config.password;
    this._readOnly = config.readOnly;
    this._sessionComments = config.sessionComments;
    this._sessionDescription = config.sessionDescription;
    this._sessionName = config.sessionName;
    this._sessionTimeout = config.sessionTimeout;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // continue_last_session - computed: false, optional: true, required: false
  private _continueLastSession?: boolean | cdktf.IResolvable; 
  public get continueLastSession() {
    return this.getBooleanAttribute('continue_last_session');
  }
  public set continueLastSession(value: boolean | cdktf.IResolvable) {
    this._continueLastSession = value;
  }
  public resetContinueLastSession() {
    this._continueLastSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueLastSessionInput() {
    return this._continueLastSession;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enter_last_published_session - computed: false, optional: true, required: false
  private _enterLastPublishedSession?: boolean | cdktf.IResolvable; 
  public get enterLastPublishedSession() {
    return this.getBooleanAttribute('enter_last_published_session');
  }
  public set enterLastPublishedSession(value: boolean | cdktf.IResolvable) {
    this._enterLastPublishedSession = value;
  }
  public resetEnterLastPublishedSession() {
    this._enterLastPublishedSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterLastPublishedSessionInput() {
    return this._enterLastPublishedSession;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // session_comments - computed: false, optional: true, required: false
  private _sessionComments?: string; 
  public get sessionComments() {
    return this.getStringAttribute('session_comments');
  }
  public set sessionComments(value: string) {
    this._sessionComments = value;
  }
  public resetSessionComments() {
    this._sessionComments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCommentsInput() {
    return this._sessionComments;
  }

  // session_description - computed: false, optional: true, required: false
  private _sessionDescription?: string; 
  public get sessionDescription() {
    return this.getStringAttribute('session_description');
  }
  public set sessionDescription(value: string) {
    this._sessionDescription = value;
  }
  public resetSessionDescription() {
    this._sessionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDescriptionInput() {
    return this._sessionDescription;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      continue_last_session: cdktf.booleanToTerraform(this._continueLastSession),
      domain: cdktf.stringToTerraform(this._domain),
      enter_last_published_session: cdktf.booleanToTerraform(this._enterLastPublishedSession),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      session_comments: cdktf.stringToTerraform(this._sessionComments),
      session_description: cdktf.stringToTerraform(this._sessionDescription),
      session_name: cdktf.stringToTerraform(this._sessionName),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      continue_last_session: {
        value: cdktf.booleanToHclTerraform(this._continueLastSession),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enter_last_published_session: {
        value: cdktf.booleanToHclTerraform(this._enterLastPublishedSession),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_comments: {
        value: cdktf.stringToHclTerraform(this._sessionComments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_description: {
        value: cdktf.stringToHclTerraform(this._sessionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_name: {
        value: cdktf.stringToHclTerraform(this._sessionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
