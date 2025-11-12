// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CommvaultProviderConfig {
  /**
  * Specifies the encrypted token for the user to authentication to Web Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs#api_token CommvaultProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * ignore certificate warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs#ignore_cert CommvaultProvider#ignore_cert}
  */
  readonly ignoreCert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs#logging CommvaultProvider#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Specifies the Password for the user name to authentication to Web Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs#password CommvaultProvider#password}
  */
  readonly password?: string;
  /**
  * Specifies if the connection should be secured https or non secured http
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs#secured CommvaultProvider#secured}
  */
  readonly secured?: boolean | cdktf.IResolvable;
  /**
  * Specifies the User name used for authentication to Web Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs#user_name CommvaultProvider#user_name}
  */
  readonly userName?: string;
  /**
  * Specifies the Web Server URL of the commserver for performing Terraform Operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs#web_service_url CommvaultProvider#web_service_url}
  */
  readonly webServiceUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs#alias CommvaultProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs commvault}
*/
export class CommvaultProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CommvaultProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CommvaultProvider to import
  * @param importFromId The id of the existing CommvaultProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CommvaultProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs commvault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CommvaultProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CommvaultProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'commvault',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      terraformProviderSource: 'Commvault/commvault'
    });
    this._apiToken = config.apiToken;
    this._ignoreCert = config.ignoreCert;
    this._logging = config.logging;
    this._password = config.password;
    this._secured = config.secured;
    this._userName = config.userName;
    this._webServiceUrl = config.webServiceUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // ignore_cert - computed: false, optional: true, required: false
  private _ignoreCert?: boolean | cdktf.IResolvable; 
  public get ignoreCert() {
    return this._ignoreCert;
  }
  public set ignoreCert(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreCert = value;
  }
  public resetIgnoreCert() {
    this._ignoreCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertInput() {
    return this._ignoreCert;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this._logging;
  }
  public set logging(value: boolean | cdktf.IResolvable | undefined) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // secured - computed: false, optional: true, required: false
  private _secured?: boolean | cdktf.IResolvable; 
  public get secured() {
    return this._secured;
  }
  public set secured(value: boolean | cdktf.IResolvable | undefined) {
    this._secured = value;
  }
  public resetSecured() {
    this._secured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securedInput() {
    return this._secured;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this._userName;
  }
  public set userName(value: string | undefined) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // web_service_url - computed: false, optional: true, required: false
  private _webServiceUrl?: string; 
  public get webServiceUrl() {
    return this._webServiceUrl;
  }
  public set webServiceUrl(value: string | undefined) {
    this._webServiceUrl = value;
  }
  public resetWebServiceUrl() {
    this._webServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServiceUrlInput() {
    return this._webServiceUrl;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      ignore_cert: cdktf.booleanToTerraform(this._ignoreCert),
      logging: cdktf.booleanToTerraform(this._logging),
      password: cdktf.stringToTerraform(this._password),
      secured: cdktf.booleanToTerraform(this._secured),
      user_name: cdktf.stringToTerraform(this._userName),
      web_service_url: cdktf.stringToTerraform(this._webServiceUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_cert: {
        value: cdktf.booleanToHclTerraform(this._ignoreCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logging: {
        value: cdktf.booleanToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secured: {
        value: cdktf.booleanToHclTerraform(this._secured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_service_url: {
        value: cdktf.stringToHclTerraform(this._webServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
