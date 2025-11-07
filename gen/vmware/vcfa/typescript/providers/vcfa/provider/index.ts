// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcfaProviderConfig {
  /**
  * Set this to true if you understand the security risks of using API token files and would like to suppress the warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#allow_api_token_file VcfaProvider#allow_api_token_file}
  */
  readonly allowApiTokenFile?: boolean | cdktf.IResolvable;
  /**
  * Set this to true if you understand the security risks of using Service Account token files and would like to suppress the warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#allow_service_account_token_file VcfaProvider#allow_service_account_token_file}
  */
  readonly allowServiceAccountTokenFile?: boolean | cdktf.IResolvable;
  /**
  * If set, VCFAClient will permit unverifiable SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#allow_unverified_ssl VcfaProvider#allow_unverified_ssl}
  */
  readonly allowUnverifiedSsl?: boolean | cdktf.IResolvable;
  /**
  * The API token used instead of username/password for VCFA API operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#api_token VcfaProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * The API token file instead of username/password for VCFA API operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#api_token_file VcfaProvider#api_token_file}
  */
  readonly apiTokenFile?: string;
  /**
  * 'integrated', 'token', 'api_token', 'api_token_file' and 'service_account_token_file' are supported. 'integrated' is default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#auth_type VcfaProvider#auth_type}
  */
  readonly authType?: string;
  /**
  * Defines the import separation string to be used with 'terraform import'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#import_separator VcfaProvider#import_separator}
  */
  readonly importSeparator?: string;
  /**
  * If set, it will enable logging of API requests and responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#logging VcfaProvider#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Defines the full name of the logging file for API calls (requires 'logging')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#logging_file VcfaProvider#logging_file}
  */
  readonly loggingFile?: string;
  /**
  * The VCFA Org for API operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#org VcfaProvider#org}
  */
  readonly org: string;
  /**
  * The user password for VCFA API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#password VcfaProvider#password}
  */
  readonly password?: string;
  /**
  * The Service Account API token file instead of username/password for VCFA API operations. (Requires VCFA 9.0+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#service_account_token_file VcfaProvider#service_account_token_file}
  */
  readonly serviceAccountTokenFile?: string;
  /**
  * The VCFA Org for user authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#sysorg VcfaProvider#sysorg}
  */
  readonly sysorg?: string;
  /**
  * The token used instead of username/password for VCFA API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#token VcfaProvider#token}
  */
  readonly token?: string;
  /**
  * The VCFA url for VCFA API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#url VcfaProvider#url}
  */
  readonly url: string;
  /**
  * The user name for VCFA API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#user VcfaProvider#user}
  */
  readonly user?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#alias VcfaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs vcfa}
*/
export class VcfaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcfaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcfaProvider to import
  * @param importFromId The id of the existing VcfaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcfaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs vcfa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcfaProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VcfaProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0'
      },
      terraformProviderSource: 'vmware/vcfa'
    });
    this._allowApiTokenFile = config.allowApiTokenFile;
    this._allowServiceAccountTokenFile = config.allowServiceAccountTokenFile;
    this._allowUnverifiedSsl = config.allowUnverifiedSsl;
    this._apiToken = config.apiToken;
    this._apiTokenFile = config.apiTokenFile;
    this._authType = config.authType;
    this._importSeparator = config.importSeparator;
    this._logging = config.logging;
    this._loggingFile = config.loggingFile;
    this._org = config.org;
    this._password = config.password;
    this._serviceAccountTokenFile = config.serviceAccountTokenFile;
    this._sysorg = config.sysorg;
    this._token = config.token;
    this._url = config.url;
    this._user = config.user;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_api_token_file - computed: false, optional: true, required: false
  private _allowApiTokenFile?: boolean | cdktf.IResolvable; 
  public get allowApiTokenFile() {
    return this._allowApiTokenFile;
  }
  public set allowApiTokenFile(value: boolean | cdktf.IResolvable | undefined) {
    this._allowApiTokenFile = value;
  }
  public resetAllowApiTokenFile() {
    this._allowApiTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowApiTokenFileInput() {
    return this._allowApiTokenFile;
  }

  // allow_service_account_token_file - computed: false, optional: true, required: false
  private _allowServiceAccountTokenFile?: boolean | cdktf.IResolvable; 
  public get allowServiceAccountTokenFile() {
    return this._allowServiceAccountTokenFile;
  }
  public set allowServiceAccountTokenFile(value: boolean | cdktf.IResolvable | undefined) {
    this._allowServiceAccountTokenFile = value;
  }
  public resetAllowServiceAccountTokenFile() {
    this._allowServiceAccountTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowServiceAccountTokenFileInput() {
    return this._allowServiceAccountTokenFile;
  }

  // allow_unverified_ssl - computed: false, optional: true, required: false
  private _allowUnverifiedSsl?: boolean | cdktf.IResolvable; 
  public get allowUnverifiedSsl() {
    return this._allowUnverifiedSsl;
  }
  public set allowUnverifiedSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._allowUnverifiedSsl = value;
  }
  public resetAllowUnverifiedSsl() {
    this._allowUnverifiedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnverifiedSslInput() {
    return this._allowUnverifiedSsl;
  }

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

  // api_token_file - computed: false, optional: true, required: false
  private _apiTokenFile?: string; 
  public get apiTokenFile() {
    return this._apiTokenFile;
  }
  public set apiTokenFile(value: string | undefined) {
    this._apiTokenFile = value;
  }
  public resetApiTokenFile() {
    this._apiTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenFileInput() {
    return this._apiTokenFile;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this._authType;
  }
  public set authType(value: string | undefined) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // import_separator - computed: false, optional: true, required: false
  private _importSeparator?: string; 
  public get importSeparator() {
    return this._importSeparator;
  }
  public set importSeparator(value: string | undefined) {
    this._importSeparator = value;
  }
  public resetImportSeparator() {
    this._importSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importSeparatorInput() {
    return this._importSeparator;
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

  // logging_file - computed: false, optional: true, required: false
  private _loggingFile?: string; 
  public get loggingFile() {
    return this._loggingFile;
  }
  public set loggingFile(value: string | undefined) {
    this._loggingFile = value;
  }
  public resetLoggingFile() {
    this._loggingFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingFileInput() {
    return this._loggingFile;
  }

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this._org;
  }
  public set org(value: string | undefined) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
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

  // service_account_token_file - computed: false, optional: true, required: false
  private _serviceAccountTokenFile?: string; 
  public get serviceAccountTokenFile() {
    return this._serviceAccountTokenFile;
  }
  public set serviceAccountTokenFile(value: string | undefined) {
    this._serviceAccountTokenFile = value;
  }
  public resetServiceAccountTokenFile() {
    this._serviceAccountTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenFileInput() {
    return this._serviceAccountTokenFile;
  }

  // sysorg - computed: false, optional: true, required: false
  private _sysorg?: string; 
  public get sysorg() {
    return this._sysorg;
  }
  public set sysorg(value: string | undefined) {
    this._sysorg = value;
  }
  public resetSysorg() {
    this._sysorg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysorgInput() {
    return this._sysorg;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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
      allow_api_token_file: cdktf.booleanToTerraform(this._allowApiTokenFile),
      allow_service_account_token_file: cdktf.booleanToTerraform(this._allowServiceAccountTokenFile),
      allow_unverified_ssl: cdktf.booleanToTerraform(this._allowUnverifiedSsl),
      api_token: cdktf.stringToTerraform(this._apiToken),
      api_token_file: cdktf.stringToTerraform(this._apiTokenFile),
      auth_type: cdktf.stringToTerraform(this._authType),
      import_separator: cdktf.stringToTerraform(this._importSeparator),
      logging: cdktf.booleanToTerraform(this._logging),
      logging_file: cdktf.stringToTerraform(this._loggingFile),
      org: cdktf.stringToTerraform(this._org),
      password: cdktf.stringToTerraform(this._password),
      service_account_token_file: cdktf.stringToTerraform(this._serviceAccountTokenFile),
      sysorg: cdktf.stringToTerraform(this._sysorg),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      user: cdktf.stringToTerraform(this._user),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_api_token_file: {
        value: cdktf.booleanToHclTerraform(this._allowApiTokenFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_service_account_token_file: {
        value: cdktf.booleanToHclTerraform(this._allowServiceAccountTokenFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_unverified_ssl: {
        value: cdktf.booleanToHclTerraform(this._allowUnverifiedSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_token_file: {
        value: cdktf.stringToHclTerraform(this._apiTokenFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_separator: {
        value: cdktf.stringToHclTerraform(this._importSeparator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.booleanToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logging_file: {
        value: cdktf.stringToHclTerraform(this._loggingFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
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
      service_account_token_file: {
        value: cdktf.stringToHclTerraform(this._serviceAccountTokenFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysorg: {
        value: cdktf.stringToHclTerraform(this._sysorg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
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
