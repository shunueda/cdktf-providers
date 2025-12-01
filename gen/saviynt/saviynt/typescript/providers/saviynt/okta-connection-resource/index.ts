// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OktaConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maps Okta user fields to Saviynt account fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#account_field_mappings OktaConnectionResource#account_field_mappings}
  */
  readonly accountFieldMappings?: string;
  /**
  * Auto-enables disabled endpoints based on application status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#activate_endpoint OktaConnectionResource#activate_endpoint}
  */
  readonly activateEndpoint?: string;
  /**
  * Maps Okta application user fields to Saviynt account field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#app_account_field_mappings OktaConnectionResource#app_account_field_mappings}
  */
  readonly appAccountFieldMappings?: string;
  /**
  * Filter for importing specific audit events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#audit_filter OktaConnectionResource#audit_filter}
  */
  readonly auditFilter?: string;
  /**
  * API token for Okta authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#auth_token OktaConnectionResource#auth_token}
  */
  readonly authToken?: string;
  /**
  * API token for Okta authentication (write-only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#auth_token_wo OktaConnectionResource#auth_token_wo}
  */
  readonly authTokenWo?: string;
  /**
  * General connector configuration including timeouts, retries, and connector-specific settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#config_json OktaConnectionResource#config_json}
  */
  readonly configJson?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#connection_name OktaConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#defaultsavroles OktaConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#description OktaConnectionResource#description}
  */
  readonly description?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#email_template OktaConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  *  Maps Okta entitlements to Saviynt entitlement types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#entitlement_types_mappings OktaConnectionResource#entitlement_types_mappings}
  */
  readonly entitlementTypesMappings?: string;
  /**
  *  Controls import of inactive/disabled Okta applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#import_inactive_apps OktaConnectionResource#import_inactive_apps}
  */
  readonly importInactiveApps?: string;
  /**
  * Base URL for Okta API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#import_url OktaConnectionResource#import_url}
  */
  readonly importUrl: string;
  /**
  *  JSON configuration for user data modification operations during provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#modify_user_data_json OktaConnectionResource#modify_user_data_json}
  */
  readonly modifyUserDataJson?: string;
  /**
  * Saviynt security system name for Okta applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#okta_application_securitysystem OktaConnectionResource#okta_application_securitysystem}
  */
  readonly oktaApplicationSecuritysystem: string;
  /**
  * Filter criteria for selective group import from Okta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#okta_groups_filter OktaConnectionResource#okta_groups_filter}
  */
  readonly oktaGroupsFilter?: string;
  /**
  * Privileged Access Management configuration for PAM operations and bootstrap processes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#pam_config OktaConnectionResource#pam_config}
  */
  readonly pamConfig?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#save_in_vault OktaConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * JSON config for status mapping, thresholds, and bulk operation safety controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#status_threshold_config OktaConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  *  Maps Okta user fields to Saviynt user fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#user_field_mappings OktaConnectionResource#user_field_mappings}
  */
  readonly userFieldMappings?: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#vault_configuration OktaConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#vault_connection OktaConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#wo_version OktaConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource saviynt_okta_connection_resource}
*/
export class OktaConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_okta_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OktaConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OktaConnectionResource to import
  * @param importFromId The id of the existing OktaConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OktaConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_okta_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/okta_connection_resource saviynt_okta_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OktaConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: OktaConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_okta_connection_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountFieldMappings = config.accountFieldMappings;
    this._activateEndpoint = config.activateEndpoint;
    this._appAccountFieldMappings = config.appAccountFieldMappings;
    this._auditFilter = config.auditFilter;
    this._authToken = config.authToken;
    this._authTokenWo = config.authTokenWo;
    this._configJson = config.configJson;
    this._connectionName = config.connectionName;
    this._defaultsavroles = config.defaultsavroles;
    this._description = config.description;
    this._emailTemplate = config.emailTemplate;
    this._entitlementTypesMappings = config.entitlementTypesMappings;
    this._importInactiveApps = config.importInactiveApps;
    this._importUrl = config.importUrl;
    this._modifyUserDataJson = config.modifyUserDataJson;
    this._oktaApplicationSecuritysystem = config.oktaApplicationSecuritysystem;
    this._oktaGroupsFilter = config.oktaGroupsFilter;
    this._pamConfig = config.pamConfig;
    this._saveInVault = config.saveInVault;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._userFieldMappings = config.userFieldMappings;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_field_mappings - computed: true, optional: true, required: false
  private _accountFieldMappings?: string; 
  public get accountFieldMappings() {
    return this.getStringAttribute('account_field_mappings');
  }
  public set accountFieldMappings(value: string) {
    this._accountFieldMappings = value;
  }
  public resetAccountFieldMappings() {
    this._accountFieldMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountFieldMappingsInput() {
    return this._accountFieldMappings;
  }

  // activate_endpoint - computed: true, optional: true, required: false
  private _activateEndpoint?: string; 
  public get activateEndpoint() {
    return this.getStringAttribute('activate_endpoint');
  }
  public set activateEndpoint(value: string) {
    this._activateEndpoint = value;
  }
  public resetActivateEndpoint() {
    this._activateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateEndpointInput() {
    return this._activateEndpoint;
  }

  // app_account_field_mappings - computed: true, optional: true, required: false
  private _appAccountFieldMappings?: string; 
  public get appAccountFieldMappings() {
    return this.getStringAttribute('app_account_field_mappings');
  }
  public set appAccountFieldMappings(value: string) {
    this._appAccountFieldMappings = value;
  }
  public resetAppAccountFieldMappings() {
    this._appAccountFieldMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appAccountFieldMappingsInput() {
    return this._appAccountFieldMappings;
  }

  // audit_filter - computed: true, optional: true, required: false
  private _auditFilter?: string; 
  public get auditFilter() {
    return this.getStringAttribute('audit_filter');
  }
  public set auditFilter(value: string) {
    this._auditFilter = value;
  }
  public resetAuditFilter() {
    this._auditFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFilterInput() {
    return this._auditFilter;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // auth_token_wo - computed: false, optional: true, required: false
  private _authTokenWo?: string; 
  public get authTokenWo() {
    return this.getStringAttribute('auth_token_wo');
  }
  public set authTokenWo(value: string) {
    this._authTokenWo = value;
  }
  public resetAuthTokenWo() {
    this._authTokenWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenWoInput() {
    return this._authTokenWo;
  }

  // config_json - computed: true, optional: true, required: false
  private _configJson?: string; 
  public get configJson() {
    return this.getStringAttribute('config_json');
  }
  public set configJson(value: string) {
    this._configJson = value;
  }
  public resetConfigJson() {
    this._configJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configJsonInput() {
    return this._configJson;
  }

  // connection_key - computed: true, optional: false, required: false
  public get connectionKey() {
    return this.getNumberAttribute('connection_key');
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // defaultsavroles - computed: true, optional: true, required: false
  private _defaultsavroles?: string; 
  public get defaultsavroles() {
    return this.getStringAttribute('defaultsavroles');
  }
  public set defaultsavroles(value: string) {
    this._defaultsavroles = value;
  }
  public resetDefaultsavroles() {
    this._defaultsavroles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsavrolesInput() {
    return this._defaultsavroles;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email_template - computed: true, optional: true, required: false
  private _emailTemplate?: string; 
  public get emailTemplate() {
    return this.getStringAttribute('email_template');
  }
  public set emailTemplate(value: string) {
    this._emailTemplate = value;
  }
  public resetEmailTemplate() {
    this._emailTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateInput() {
    return this._emailTemplate;
  }

  // entitlement_types_mappings - computed: true, optional: true, required: false
  private _entitlementTypesMappings?: string; 
  public get entitlementTypesMappings() {
    return this.getStringAttribute('entitlement_types_mappings');
  }
  public set entitlementTypesMappings(value: string) {
    this._entitlementTypesMappings = value;
  }
  public resetEntitlementTypesMappings() {
    this._entitlementTypesMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementTypesMappingsInput() {
    return this._entitlementTypesMappings;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_inactive_apps - computed: true, optional: true, required: false
  private _importInactiveApps?: string; 
  public get importInactiveApps() {
    return this.getStringAttribute('import_inactive_apps');
  }
  public set importInactiveApps(value: string) {
    this._importInactiveApps = value;
  }
  public resetImportInactiveApps() {
    this._importInactiveApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInactiveAppsInput() {
    return this._importInactiveApps;
  }

  // import_url - computed: false, optional: false, required: true
  private _importUrl?: string; 
  public get importUrl() {
    return this.getStringAttribute('import_url');
  }
  public set importUrl(value: string) {
    this._importUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importUrlInput() {
    return this._importUrl;
  }

  // modify_user_data_json - computed: true, optional: true, required: false
  private _modifyUserDataJson?: string; 
  public get modifyUserDataJson() {
    return this.getStringAttribute('modify_user_data_json');
  }
  public set modifyUserDataJson(value: string) {
    this._modifyUserDataJson = value;
  }
  public resetModifyUserDataJson() {
    this._modifyUserDataJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyUserDataJsonInput() {
    return this._modifyUserDataJson;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // okta_application_securitysystem - computed: false, optional: false, required: true
  private _oktaApplicationSecuritysystem?: string; 
  public get oktaApplicationSecuritysystem() {
    return this.getStringAttribute('okta_application_securitysystem');
  }
  public set oktaApplicationSecuritysystem(value: string) {
    this._oktaApplicationSecuritysystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaApplicationSecuritysystemInput() {
    return this._oktaApplicationSecuritysystem;
  }

  // okta_groups_filter - computed: true, optional: true, required: false
  private _oktaGroupsFilter?: string; 
  public get oktaGroupsFilter() {
    return this.getStringAttribute('okta_groups_filter');
  }
  public set oktaGroupsFilter(value: string) {
    this._oktaGroupsFilter = value;
  }
  public resetOktaGroupsFilter() {
    this._oktaGroupsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaGroupsFilterInput() {
    return this._oktaGroupsFilter;
  }

  // pam_config - computed: true, optional: true, required: false
  private _pamConfig?: string; 
  public get pamConfig() {
    return this.getStringAttribute('pam_config');
  }
  public set pamConfig(value: string) {
    this._pamConfig = value;
  }
  public resetPamConfig() {
    this._pamConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pamConfigInput() {
    return this._pamConfig;
  }

  // save_in_vault - computed: false, optional: true, required: false
  private _saveInVault?: string; 
  public get saveInVault() {
    return this.getStringAttribute('save_in_vault');
  }
  public set saveInVault(value: string) {
    this._saveInVault = value;
  }
  public resetSaveInVault() {
    this._saveInVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInVaultInput() {
    return this._saveInVault;
  }

  // status_threshold_config - computed: true, optional: true, required: false
  private _statusThresholdConfig?: string; 
  public get statusThresholdConfig() {
    return this.getStringAttribute('status_threshold_config');
  }
  public set statusThresholdConfig(value: string) {
    this._statusThresholdConfig = value;
  }
  public resetStatusThresholdConfig() {
    this._statusThresholdConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusThresholdConfigInput() {
    return this._statusThresholdConfig;
  }

  // user_field_mappings - computed: true, optional: true, required: false
  private _userFieldMappings?: string; 
  public get userFieldMappings() {
    return this.getStringAttribute('user_field_mappings');
  }
  public set userFieldMappings(value: string) {
    this._userFieldMappings = value;
  }
  public resetUserFieldMappings() {
    this._userFieldMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFieldMappingsInput() {
    return this._userFieldMappings;
  }

  // vault_configuration - computed: false, optional: true, required: false
  private _vaultConfiguration?: string; 
  public get vaultConfiguration() {
    return this.getStringAttribute('vault_configuration');
  }
  public set vaultConfiguration(value: string) {
    this._vaultConfiguration = value;
  }
  public resetVaultConfiguration() {
    this._vaultConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultConfigurationInput() {
    return this._vaultConfiguration;
  }

  // vault_connection - computed: false, optional: true, required: false
  private _vaultConnection?: string; 
  public get vaultConnection() {
    return this.getStringAttribute('vault_connection');
  }
  public set vaultConnection(value: string) {
    this._vaultConnection = value;
  }
  public resetVaultConnection() {
    this._vaultConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultConnectionInput() {
    return this._vaultConnection;
  }

  // wo_version - computed: false, optional: true, required: false
  private _woVersion?: string; 
  public get woVersion() {
    return this.getStringAttribute('wo_version');
  }
  public set woVersion(value: string) {
    this._woVersion = value;
  }
  public resetWoVersion() {
    this._woVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get woVersionInput() {
    return this._woVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_field_mappings: cdktf.stringToTerraform(this._accountFieldMappings),
      activate_endpoint: cdktf.stringToTerraform(this._activateEndpoint),
      app_account_field_mappings: cdktf.stringToTerraform(this._appAccountFieldMappings),
      audit_filter: cdktf.stringToTerraform(this._auditFilter),
      auth_token: cdktf.stringToTerraform(this._authToken),
      auth_token_wo: cdktf.stringToTerraform(this._authTokenWo),
      config_json: cdktf.stringToTerraform(this._configJson),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      description: cdktf.stringToTerraform(this._description),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      entitlement_types_mappings: cdktf.stringToTerraform(this._entitlementTypesMappings),
      import_inactive_apps: cdktf.stringToTerraform(this._importInactiveApps),
      import_url: cdktf.stringToTerraform(this._importUrl),
      modify_user_data_json: cdktf.stringToTerraform(this._modifyUserDataJson),
      okta_application_securitysystem: cdktf.stringToTerraform(this._oktaApplicationSecuritysystem),
      okta_groups_filter: cdktf.stringToTerraform(this._oktaGroupsFilter),
      pam_config: cdktf.stringToTerraform(this._pamConfig),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      user_field_mappings: cdktf.stringToTerraform(this._userFieldMappings),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_field_mappings: {
        value: cdktf.stringToHclTerraform(this._accountFieldMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activate_endpoint: {
        value: cdktf.stringToHclTerraform(this._activateEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_account_field_mappings: {
        value: cdktf.stringToHclTerraform(this._appAccountFieldMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_filter: {
        value: cdktf.stringToHclTerraform(this._auditFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_token_wo: {
        value: cdktf.stringToHclTerraform(this._authTokenWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_json: {
        value: cdktf.stringToHclTerraform(this._configJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultsavroles: {
        value: cdktf.stringToHclTerraform(this._defaultsavroles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_template: {
        value: cdktf.stringToHclTerraform(this._emailTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_types_mappings: {
        value: cdktf.stringToHclTerraform(this._entitlementTypesMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_inactive_apps: {
        value: cdktf.stringToHclTerraform(this._importInactiveApps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_url: {
        value: cdktf.stringToHclTerraform(this._importUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_user_data_json: {
        value: cdktf.stringToHclTerraform(this._modifyUserDataJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_application_securitysystem: {
        value: cdktf.stringToHclTerraform(this._oktaApplicationSecuritysystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_groups_filter: {
        value: cdktf.stringToHclTerraform(this._oktaGroupsFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pam_config: {
        value: cdktf.stringToHclTerraform(this._pamConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_in_vault: {
        value: cdktf.stringToHclTerraform(this._saveInVault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_threshold_config: {
        value: cdktf.stringToHclTerraform(this._statusThresholdConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_field_mappings: {
        value: cdktf.stringToHclTerraform(this._userFieldMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_configuration: {
        value: cdktf.stringToHclTerraform(this._vaultConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_connection: {
        value: cdktf.stringToHclTerraform(this._vaultConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wo_version: {
        value: cdktf.stringToHclTerraform(this._woVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
