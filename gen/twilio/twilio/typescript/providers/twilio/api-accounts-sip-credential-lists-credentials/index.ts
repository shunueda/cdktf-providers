// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_credential_lists_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsSipCredentialListsCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_credential_lists_credentials#credential_list_sid ApiAccountsSipCredentialListsCredentials#credential_list_sid}
  */
  readonly credentialListSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_credential_lists_credentials#id ApiAccountsSipCredentialListsCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_credential_lists_credentials#password ApiAccountsSipCredentialListsCredentials#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_credential_lists_credentials#path_account_sid ApiAccountsSipCredentialListsCredentials#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_credential_lists_credentials#username ApiAccountsSipCredentialListsCredentials#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_credential_lists_credentials twilio_api_accounts_sip_credential_lists_credentials}
*/
export class ApiAccountsSipCredentialListsCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_sip_credential_lists_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsSipCredentialListsCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsSipCredentialListsCredentials to import
  * @param importFromId The id of the existing ApiAccountsSipCredentialListsCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_credential_lists_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsSipCredentialListsCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_sip_credential_lists_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_credential_lists_credentials twilio_api_accounts_sip_credential_lists_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsSipCredentialListsCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsSipCredentialListsCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_sip_credential_lists_credentials',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialListSid = config.credentialListSid;
    this._id = config.id;
    this._password = config.password;
    this._pathAccountSid = config.pathAccountSid;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_list_sid - computed: false, optional: false, required: true
  private _credentialListSid?: string; 
  public get credentialListSid() {
    return this.getStringAttribute('credential_list_sid');
  }
  public set credentialListSid(value: string) {
    this._credentialListSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialListSidInput() {
    return this._credentialListSid;
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

  // path_account_sid - computed: true, optional: true, required: false
  private _pathAccountSid?: string; 
  public get pathAccountSid() {
    return this.getStringAttribute('path_account_sid');
  }
  public set pathAccountSid(value: string) {
    this._pathAccountSid = value;
  }
  public resetPathAccountSid() {
    this._pathAccountSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathAccountSidInput() {
    return this._pathAccountSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_list_sid: cdktf.stringToTerraform(this._credentialListSid),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_list_sid: {
        value: cdktf.stringToHclTerraform(this._credentialListSid),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_account_sid: {
        value: cdktf.stringToHclTerraform(this._pathAccountSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
