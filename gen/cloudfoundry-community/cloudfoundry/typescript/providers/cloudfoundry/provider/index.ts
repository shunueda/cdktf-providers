// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfoundryProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#api_url CloudfoundryProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Number of logs message which can be see when app creation is errored (-1 means all messages stored)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#app_logs_max CloudfoundryProvider#app_logs_max}
  */
  readonly appLogsMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#cf_client_id CloudfoundryProvider#cf_client_id}
  */
  readonly cfClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#cf_client_secret CloudfoundryProvider#cf_client_secret}
  */
  readonly cfClientSecret?: string;
  /**
  * Name of the default quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#default_quota_name CloudfoundryProvider#default_quota_name}
  */
  readonly defaultQuotaName?: string;
  /**
  * Set to false to disallow recurive deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#delete_recursive_allowed CloudfoundryProvider#delete_recursive_allowed}
  */
  readonly deleteRecursiveAllowed?: boolean | cdktf.IResolvable;
  /**
  * Set to true to not trigger fail on catalog on service broker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#force_broker_not_fail_when_catalog_not_accessible CloudfoundryProvider#force_broker_not_fail_when_catalog_not_accessible}
  */
  readonly forceBrokerNotFailWhenCatalogNotAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#origin CloudfoundryProvider#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#password CloudfoundryProvider#password}
  */
  readonly password?: string;
  /**
  * Set to true to purge when deleting a resource (e.g.: service instance, service broker)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#purge_when_delete CloudfoundryProvider#purge_when_delete}
  */
  readonly purgeWhenDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#skip_ssl_validation CloudfoundryProvider#skip_ssl_validation}
  */
  readonly skipSslValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#sso_passcode CloudfoundryProvider#sso_passcode}
  */
  readonly ssoPasscode?: string;
  /**
  * Path to a file to store tokens used for login. (this is useful for sso, this avoid requiring each time sso passcode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#store_tokens_path CloudfoundryProvider#store_tokens_path}
  */
  readonly storeTokensPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#uaa_client_id CloudfoundryProvider#uaa_client_id}
  */
  readonly uaaClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#uaa_client_secret CloudfoundryProvider#uaa_client_secret}
  */
  readonly uaaClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#user CloudfoundryProvider#user}
  */
  readonly user?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#alias CloudfoundryProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs cloudfoundry}
*/
export class CloudfoundryProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudfoundryProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfoundryProvider to import
  * @param importFromId The id of the existing CloudfoundryProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfoundryProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs cloudfoundry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfoundryProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudfoundryProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry',
      terraformGeneratorMetadata: {
        providerName: 'cloudfoundry',
        providerVersion: '0.53.1',
        providerVersionConstraint: '0.53.1'
      },
      terraformProviderSource: 'cloudfoundry-community/cloudfoundry'
    });
    this._apiUrl = config.apiUrl;
    this._appLogsMax = config.appLogsMax;
    this._cfClientId = config.cfClientId;
    this._cfClientSecret = config.cfClientSecret;
    this._defaultQuotaName = config.defaultQuotaName;
    this._deleteRecursiveAllowed = config.deleteRecursiveAllowed;
    this._forceBrokerNotFailWhenCatalogNotAccessible = config.forceBrokerNotFailWhenCatalogNotAccessible;
    this._origin = config.origin;
    this._password = config.password;
    this._purgeWhenDelete = config.purgeWhenDelete;
    this._skipSslValidation = config.skipSslValidation;
    this._ssoPasscode = config.ssoPasscode;
    this._storeTokensPath = config.storeTokensPath;
    this._uaaClientId = config.uaaClientId;
    this._uaaClientSecret = config.uaaClientSecret;
    this._user = config.user;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // app_logs_max - computed: false, optional: true, required: false
  private _appLogsMax?: number; 
  public get appLogsMax() {
    return this._appLogsMax;
  }
  public set appLogsMax(value: number | undefined) {
    this._appLogsMax = value;
  }
  public resetAppLogsMax() {
    this._appLogsMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLogsMaxInput() {
    return this._appLogsMax;
  }

  // cf_client_id - computed: false, optional: true, required: false
  private _cfClientId?: string; 
  public get cfClientId() {
    return this._cfClientId;
  }
  public set cfClientId(value: string | undefined) {
    this._cfClientId = value;
  }
  public resetCfClientId() {
    this._cfClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfClientIdInput() {
    return this._cfClientId;
  }

  // cf_client_secret - computed: false, optional: true, required: false
  private _cfClientSecret?: string; 
  public get cfClientSecret() {
    return this._cfClientSecret;
  }
  public set cfClientSecret(value: string | undefined) {
    this._cfClientSecret = value;
  }
  public resetCfClientSecret() {
    this._cfClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfClientSecretInput() {
    return this._cfClientSecret;
  }

  // default_quota_name - computed: false, optional: true, required: false
  private _defaultQuotaName?: string; 
  public get defaultQuotaName() {
    return this._defaultQuotaName;
  }
  public set defaultQuotaName(value: string | undefined) {
    this._defaultQuotaName = value;
  }
  public resetDefaultQuotaName() {
    this._defaultQuotaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQuotaNameInput() {
    return this._defaultQuotaName;
  }

  // delete_recursive_allowed - computed: false, optional: true, required: false
  private _deleteRecursiveAllowed?: boolean | cdktf.IResolvable; 
  public get deleteRecursiveAllowed() {
    return this._deleteRecursiveAllowed;
  }
  public set deleteRecursiveAllowed(value: boolean | cdktf.IResolvable | undefined) {
    this._deleteRecursiveAllowed = value;
  }
  public resetDeleteRecursiveAllowed() {
    this._deleteRecursiveAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecursiveAllowedInput() {
    return this._deleteRecursiveAllowed;
  }

  // force_broker_not_fail_when_catalog_not_accessible - computed: false, optional: true, required: false
  private _forceBrokerNotFailWhenCatalogNotAccessible?: boolean | cdktf.IResolvable; 
  public get forceBrokerNotFailWhenCatalogNotAccessible() {
    return this._forceBrokerNotFailWhenCatalogNotAccessible;
  }
  public set forceBrokerNotFailWhenCatalogNotAccessible(value: boolean | cdktf.IResolvable | undefined) {
    this._forceBrokerNotFailWhenCatalogNotAccessible = value;
  }
  public resetForceBrokerNotFailWhenCatalogNotAccessible() {
    this._forceBrokerNotFailWhenCatalogNotAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceBrokerNotFailWhenCatalogNotAccessibleInput() {
    return this._forceBrokerNotFailWhenCatalogNotAccessible;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this._origin;
  }
  public set origin(value: string | undefined) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

  // purge_when_delete - computed: false, optional: true, required: false
  private _purgeWhenDelete?: boolean | cdktf.IResolvable; 
  public get purgeWhenDelete() {
    return this._purgeWhenDelete;
  }
  public set purgeWhenDelete(value: boolean | cdktf.IResolvable | undefined) {
    this._purgeWhenDelete = value;
  }
  public resetPurgeWhenDelete() {
    this._purgeWhenDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeWhenDeleteInput() {
    return this._purgeWhenDelete;
  }

  // skip_ssl_validation - computed: false, optional: true, required: false
  private _skipSslValidation?: boolean | cdktf.IResolvable; 
  public get skipSslValidation() {
    return this._skipSslValidation;
  }
  public set skipSslValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipSslValidation = value;
  }
  public resetSkipSslValidation() {
    this._skipSslValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSslValidationInput() {
    return this._skipSslValidation;
  }

  // sso_passcode - computed: false, optional: true, required: false
  private _ssoPasscode?: string; 
  public get ssoPasscode() {
    return this._ssoPasscode;
  }
  public set ssoPasscode(value: string | undefined) {
    this._ssoPasscode = value;
  }
  public resetSsoPasscode() {
    this._ssoPasscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoPasscodeInput() {
    return this._ssoPasscode;
  }

  // store_tokens_path - computed: false, optional: true, required: false
  private _storeTokensPath?: string; 
  public get storeTokensPath() {
    return this._storeTokensPath;
  }
  public set storeTokensPath(value: string | undefined) {
    this._storeTokensPath = value;
  }
  public resetStoreTokensPath() {
    this._storeTokensPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeTokensPathInput() {
    return this._storeTokensPath;
  }

  // uaa_client_id - computed: false, optional: true, required: false
  private _uaaClientId?: string; 
  public get uaaClientId() {
    return this._uaaClientId;
  }
  public set uaaClientId(value: string | undefined) {
    this._uaaClientId = value;
  }
  public resetUaaClientId() {
    this._uaaClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaClientIdInput() {
    return this._uaaClientId;
  }

  // uaa_client_secret - computed: false, optional: true, required: false
  private _uaaClientSecret?: string; 
  public get uaaClientSecret() {
    return this._uaaClientSecret;
  }
  public set uaaClientSecret(value: string | undefined) {
    this._uaaClientSecret = value;
  }
  public resetUaaClientSecret() {
    this._uaaClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaClientSecretInput() {
    return this._uaaClientSecret;
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
      api_url: cdktf.stringToTerraform(this._apiUrl),
      app_logs_max: cdktf.numberToTerraform(this._appLogsMax),
      cf_client_id: cdktf.stringToTerraform(this._cfClientId),
      cf_client_secret: cdktf.stringToTerraform(this._cfClientSecret),
      default_quota_name: cdktf.stringToTerraform(this._defaultQuotaName),
      delete_recursive_allowed: cdktf.booleanToTerraform(this._deleteRecursiveAllowed),
      force_broker_not_fail_when_catalog_not_accessible: cdktf.booleanToTerraform(this._forceBrokerNotFailWhenCatalogNotAccessible),
      origin: cdktf.stringToTerraform(this._origin),
      password: cdktf.stringToTerraform(this._password),
      purge_when_delete: cdktf.booleanToTerraform(this._purgeWhenDelete),
      skip_ssl_validation: cdktf.booleanToTerraform(this._skipSslValidation),
      sso_passcode: cdktf.stringToTerraform(this._ssoPasscode),
      store_tokens_path: cdktf.stringToTerraform(this._storeTokensPath),
      uaa_client_id: cdktf.stringToTerraform(this._uaaClientId),
      uaa_client_secret: cdktf.stringToTerraform(this._uaaClientSecret),
      user: cdktf.stringToTerraform(this._user),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_logs_max: {
        value: cdktf.numberToHclTerraform(this._appLogsMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cf_client_id: {
        value: cdktf.stringToHclTerraform(this._cfClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cf_client_secret: {
        value: cdktf.stringToHclTerraform(this._cfClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_quota_name: {
        value: cdktf.stringToHclTerraform(this._defaultQuotaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_recursive_allowed: {
        value: cdktf.booleanToHclTerraform(this._deleteRecursiveAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_broker_not_fail_when_catalog_not_accessible: {
        value: cdktf.booleanToHclTerraform(this._forceBrokerNotFailWhenCatalogNotAccessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
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
      purge_when_delete: {
        value: cdktf.booleanToHclTerraform(this._purgeWhenDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_ssl_validation: {
        value: cdktf.booleanToHclTerraform(this._skipSslValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sso_passcode: {
        value: cdktf.stringToHclTerraform(this._ssoPasscode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_tokens_path: {
        value: cdktf.stringToHclTerraform(this._storeTokensPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uaa_client_id: {
        value: cdktf.stringToHclTerraform(this._uaaClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uaa_client_secret: {
        value: cdktf.stringToHclTerraform(this._uaaClientSecret),
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
