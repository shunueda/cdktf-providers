// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcdProviderConfig {
  /**
  * Set this to true if you understand the security risks of using API token files and would like to suppress the warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#allow_api_token_file VcdProvider#allow_api_token_file}
  */
  readonly allowApiTokenFile?: boolean | cdktf.IResolvable;
  /**
  * Set this to true if you understand the security risks of using Service Account token files and would like to suppress the warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#allow_service_account_token_file VcdProvider#allow_service_account_token_file}
  */
  readonly allowServiceAccountTokenFile?: boolean | cdktf.IResolvable;
  /**
  * If set, VCDClient will permit unverifiable SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#allow_unverified_ssl VcdProvider#allow_unverified_ssl}
  */
  readonly allowUnverifiedSsl?: boolean | cdktf.IResolvable;
  /**
  * The API token used instead of username/password for VCD API operations. (Requires VCD 10.3.1+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#api_token VcdProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * The API token file instead of username/password for VCD API operations. (Requires VCD 10.3.1+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#api_token_file VcdProvider#api_token_file}
  */
  readonly apiTokenFile?: string;
  /**
  * 'integrated', 'saml_adfs', 'token', 'api_token', 'api_token_file' and 'service_account_token_file' are supported. 'integrated' is default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#auth_type VcdProvider#auth_type}
  */
  readonly authType?: string;
  /**
  * Defines the import separation string to be used with 'terraform import'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#import_separator VcdProvider#import_separator}
  */
  readonly importSeparator?: string;
  /**
  * If set, it will enable logging of API requests and responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#logging VcdProvider#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Defines the full name of the logging file for API calls (requires 'logging')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#logging_file VcdProvider#logging_file}
  */
  readonly loggingFile?: string;
  /**
  * Max num seconds to wait for successful response when operating on resources within vCloud (defaults to 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#max_retry_timeout VcdProvider#max_retry_timeout}
  */
  readonly maxRetryTimeout?: number;
  /**
  * The VCD Org for API operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#org VcdProvider#org}
  */
  readonly org: string;
  /**
  * The user password for VCD API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#password VcdProvider#password}
  */
  readonly password?: string;
  /**
  * Allows to specify custom cookie for ADFS server lookup. '{{.Org}}' is replaced by real Org -  e.g. 'sso-preferred=yes; sso_redirect_org={{.Org}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#saml_adfs_cookie VcdProvider#saml_adfs_cookie}
  */
  readonly samlAdfsCookie?: string;
  /**
  * Allows to specify custom Relaying Party Trust Identifier for auth_type=saml_adfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#saml_adfs_rpt_id VcdProvider#saml_adfs_rpt_id}
  */
  readonly samlAdfsRptId?: string;
  /**
  * The Service Account API token file instead of username/password for VCD API operations. (Requires VCD 10.4.0+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#service_account_token_file VcdProvider#service_account_token_file}
  */
  readonly serviceAccountTokenFile?: string;
  /**
  * The VCD Org for user authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#sysorg VcdProvider#sysorg}
  */
  readonly sysorg?: string;
  /**
  * The token used instead of username/password for VCD API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#token VcdProvider#token}
  */
  readonly token?: string;
  /**
  * The VCD url for VCD API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#url VcdProvider#url}
  */
  readonly url: string;
  /**
  * The user name for VCD API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#user VcdProvider#user}
  */
  readonly user?: string;
  /**
  * The VDC for API operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#vdc VcdProvider#vdc}
  */
  readonly vdc?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#alias VcdProvider#alias}
  */
  readonly alias?: string;
  /**
  * ignore_metadata_changes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#ignore_metadata_changes VcdProvider#ignore_metadata_changes}
  */
  readonly ignoreMetadataChanges?: VcdProviderIgnoreMetadataChanges[] | cdktf.IResolvable;
}
export interface VcdProviderIgnoreMetadataChanges {
  /**
  * One of 'error', 'warn' or 'none'. Configures whether a conflict between this ignored metadata block and the metadata entries set in Terraform should fail, warn or do nothing. Defaults to 'error'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#conflict_action VcdProvider#conflict_action}
  */
  readonly conflictAction?: string;
  /**
  * Regular expression of the metadata entry keys to ignore. Either `key_regex` or `value_regex` is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#key_regex VcdProvider#key_regex}
  */
  readonly keyRegex?: string;
  /**
  * Ignores metadata from the specific entity in VCD named like this argument
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#resource_name VcdProvider#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Ignores metadata from the specific resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#resource_type VcdProvider#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Regular expression of the metadata entry values to ignore. Either `key_regex` or `value_regex` is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#value_regex VcdProvider#value_regex}
  */
  readonly valueRegex?: string;
}

export function vcdProviderIgnoreMetadataChangesToTerraform(struct?: VcdProviderIgnoreMetadataChanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conflict_action: cdktf.stringToTerraform(struct!.conflictAction),
    key_regex: cdktf.stringToTerraform(struct!.keyRegex),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    value_regex: cdktf.stringToTerraform(struct!.valueRegex),
  }
}


export function vcdProviderIgnoreMetadataChangesToHclTerraform(struct?: VcdProviderIgnoreMetadataChanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conflict_action: {
      value: cdktf.stringToHclTerraform(struct!.conflictAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_regex: {
      value: cdktf.stringToHclTerraform(struct!.keyRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_regex: {
      value: cdktf.stringToHclTerraform(struct!.valueRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs vcd}
*/
export class VcdProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcdProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcdProvider to import
  * @param importFromId The id of the existing VcdProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcdProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs vcd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcdProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VcdProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      terraformProviderSource: 'vmware/vcd'
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
    this._maxRetryTimeout = config.maxRetryTimeout;
    this._org = config.org;
    this._password = config.password;
    this._samlAdfsCookie = config.samlAdfsCookie;
    this._samlAdfsRptId = config.samlAdfsRptId;
    this._serviceAccountTokenFile = config.serviceAccountTokenFile;
    this._sysorg = config.sysorg;
    this._token = config.token;
    this._url = config.url;
    this._user = config.user;
    this._vdc = config.vdc;
    this._alias = config.alias;
    this._ignoreMetadataChanges = config.ignoreMetadataChanges;
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

  // max_retry_timeout - computed: false, optional: true, required: false
  private _maxRetryTimeout?: number; 
  public get maxRetryTimeout() {
    return this._maxRetryTimeout;
  }
  public set maxRetryTimeout(value: number | undefined) {
    this._maxRetryTimeout = value;
  }
  public resetMaxRetryTimeout() {
    this._maxRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryTimeoutInput() {
    return this._maxRetryTimeout;
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

  // saml_adfs_cookie - computed: false, optional: true, required: false
  private _samlAdfsCookie?: string; 
  public get samlAdfsCookie() {
    return this._samlAdfsCookie;
  }
  public set samlAdfsCookie(value: string | undefined) {
    this._samlAdfsCookie = value;
  }
  public resetSamlAdfsCookie() {
    this._samlAdfsCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAdfsCookieInput() {
    return this._samlAdfsCookie;
  }

  // saml_adfs_rpt_id - computed: false, optional: true, required: false
  private _samlAdfsRptId?: string; 
  public get samlAdfsRptId() {
    return this._samlAdfsRptId;
  }
  public set samlAdfsRptId(value: string | undefined) {
    this._samlAdfsRptId = value;
  }
  public resetSamlAdfsRptId() {
    this._samlAdfsRptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAdfsRptIdInput() {
    return this._samlAdfsRptId;
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

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this._vdc;
  }
  public set vdc(value: string | undefined) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
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

  // ignore_metadata_changes - computed: false, optional: true, required: false
  private _ignoreMetadataChanges?: VcdProviderIgnoreMetadataChanges[] | cdktf.IResolvable; 
  public get ignoreMetadataChanges() {
    return this._ignoreMetadataChanges;
  }
  public set ignoreMetadataChanges(value: VcdProviderIgnoreMetadataChanges[] | cdktf.IResolvable | undefined) {
    this._ignoreMetadataChanges = value;
  }
  public resetIgnoreMetadataChanges() {
    this._ignoreMetadataChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMetadataChangesInput() {
    return this._ignoreMetadataChanges;
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
      max_retry_timeout: cdktf.numberToTerraform(this._maxRetryTimeout),
      org: cdktf.stringToTerraform(this._org),
      password: cdktf.stringToTerraform(this._password),
      saml_adfs_cookie: cdktf.stringToTerraform(this._samlAdfsCookie),
      saml_adfs_rpt_id: cdktf.stringToTerraform(this._samlAdfsRptId),
      service_account_token_file: cdktf.stringToTerraform(this._serviceAccountTokenFile),
      sysorg: cdktf.stringToTerraform(this._sysorg),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      user: cdktf.stringToTerraform(this._user),
      vdc: cdktf.stringToTerraform(this._vdc),
      alias: cdktf.stringToTerraform(this._alias),
      ignore_metadata_changes: cdktf.listMapper(vcdProviderIgnoreMetadataChangesToTerraform, true)(this._ignoreMetadataChanges),
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
      max_retry_timeout: {
        value: cdktf.numberToHclTerraform(this._maxRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      saml_adfs_cookie: {
        value: cdktf.stringToHclTerraform(this._samlAdfsCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_adfs_rpt_id: {
        value: cdktf.stringToHclTerraform(this._samlAdfsRptId),
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
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
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
      ignore_metadata_changes: {
        value: cdktf.listMapperHcl(vcdProviderIgnoreMetadataChangesToHclTerraform, true)(this._ignoreMetadataChanges),
        isBlock: true,
        type: "set",
        storageClassType: "VcdProviderIgnoreMetadataChangesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
