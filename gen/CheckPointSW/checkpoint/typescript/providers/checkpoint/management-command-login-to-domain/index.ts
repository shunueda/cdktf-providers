// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_login_to_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCommandLoginToDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * When 'continue-last-session' is set to 'True', the new session would continue where the last session was stopped. This option is available when the administrator has only one session that can be continued. If there is more than one session, see 'switch-session' API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_login_to_domain#continue_last_session ManagementCommandLoginToDomain#continue_last_session}
  */
  readonly continueLastSession?: boolean | cdktf.IResolvable;
  /**
  * Domain identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_login_to_domain#domain ManagementCommandLoginToDomain#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_login_to_domain#id ManagementCommandLoginToDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Login with Read Only permissions. This parameter is not considered in case continue-last-session is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_login_to_domain#read_only ManagementCommandLoginToDomain#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_login_to_domain checkpoint_management_command_login_to_domain}
*/
export class ManagementCommandLoginToDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_command_login_to_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCommandLoginToDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCommandLoginToDomain to import
  * @param importFromId The id of the existing ManagementCommandLoginToDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_login_to_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCommandLoginToDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_command_login_to_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_login_to_domain checkpoint_management_command_login_to_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCommandLoginToDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementCommandLoginToDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_command_login_to_domain',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._id = config.id;
    this._readOnly = config.readOnly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_server_version - computed: true, optional: false, required: false
  public get apiServerVersion() {
    return this.getStringAttribute('api_server_version');
  }

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

  // disk_space_message - computed: true, optional: false, required: false
  public get diskSpaceMessage() {
    return this.getStringAttribute('disk_space_message');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // last_login_was_at - computed: true, optional: false, required: false
  private _lastLoginWasAt = new cdktf.StringMap(this, "last_login_was_at");
  public get lastLoginWasAt() {
    return this._lastLoginWasAt;
  }

  // login_message - computed: true, optional: false, required: false
  private _loginMessage = new cdktf.StringMap(this, "login_message");
  public get loginMessage() {
    return this._loginMessage;
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

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // standby - computed: true, optional: false, required: false
  public get standby() {
    return this.getBooleanAttribute('standby');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      continue_last_session: cdktf.booleanToTerraform(this._continueLastSession),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      read_only: cdktf.booleanToTerraform(this._readOnly),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
