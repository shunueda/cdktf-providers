// https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SalesforceConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fields to retrieve for Salesforce accounts. Example: Id, Username, LastName, FirstName, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#account_field_query SalesforceConnectionResource#account_field_query}
  */
  readonly accountFieldQuery?: string;
  /**
  * Query used to filter Salesforce accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#account_filter_query SalesforceConnectionResource#account_filter_query}
  */
  readonly accountFilterQuery?: string;
  /**
  * The OAuth client ID for Salesforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#client_id SalesforceConnectionResource#client_id}
  */
  readonly clientId?: string;
  /**
  * The OAuth client secret for Salesforce. Either this field or the client_secret_wo field must be provided to configure the client_secret attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#client_secret SalesforceConnectionResource#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The OAuth client secret for Salesforce (write-only). Either this field or the client_secret field must be provided to configure the client_secret attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#client_secret_wo SalesforceConnectionResource#client_secret_wo}
  */
  readonly clientSecretWo?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#connection_name SalesforceConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * JSON template used for account creation in Salesforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#createaccountjson SalesforceConnectionResource#createaccountjson}
  */
  readonly createaccountjson?: string;
  /**
  * Custom URL used when creating a Salesforce account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#custom_createaccount_url SalesforceConnectionResource#custom_createaccount_url}
  */
  readonly customCreateaccountUrl?: string;
  /**
  * Custom configuration options for Salesforce connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#customconfigjson SalesforceConnectionResource#customconfigjson}
  */
  readonly customconfigjson?: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#defaultsavroles SalesforceConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#description SalesforceConnectionResource#description}
  */
  readonly description?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#email_template SalesforceConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * JSON mapping of feature licenses to permission fields in Salesforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#feature_license_json SalesforceConnectionResource#feature_license_json}
  */
  readonly featureLicenseJson?: string;
  /**
  * JSON mapping of local fields to Salesforce fields with data types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#field_mapping_json SalesforceConnectionResource#field_mapping_json}
  */
  readonly fieldMappingJson?: string;
  /**
  * Salesforce instance base URL. Example: https://@INSTANCE_NAME@.salesforce.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#instance_url SalesforceConnectionResource#instance_url}
  */
  readonly instanceUrl?: string;
  /**
  * JSON template used for modifying Salesforce accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#modifyaccountjson SalesforceConnectionResource#modifyaccountjson}
  */
  readonly modifyaccountjson?: string;
  /**
  * Comma-separated list of Salesforce objects to import. Example: "Profile,Role,Group,PermissionSet"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#object_to_be_imported SalesforceConnectionResource#object_to_be_imported}
  */
  readonly objectToBeImported?: string;
  /**
  * Privileged Access Management (PAM) configuration in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#pam_config SalesforceConnectionResource#pam_config}
  */
  readonly pamConfig?: string;
  /**
  * The redirect URI used in OAuth flows. Example: https://@INSTANCE_NAME@.salesforce.com/services/oauth2/success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#redirect_uri SalesforceConnectionResource#redirect_uri}
  */
  readonly redirectUri?: string;
  /**
  * The OAuth refresh token used to get access tokens from Salesforce. Either this field or the refresh_token_wo field must be provided to configure the refresh_token attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#refresh_token SalesforceConnectionResource#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * The OAuth refresh token used to get access tokens from Salesforce (write-only). Either this field or the refresh_token field must be provided to configure the refresh_token attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#refresh_token_wo SalesforceConnectionResource#refresh_token_wo}
  */
  readonly refreshTokenWo?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#save_in_vault SalesforceConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * JSON configuration to define active/inactive thresholds and lock statuses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#status_threshold_config SalesforceConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#vault_configuration SalesforceConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#vault_connection SalesforceConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#wo_version SalesforceConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource saviynt_salesforce_connection_resource}
*/
export class SalesforceConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_salesforce_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SalesforceConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SalesforceConnectionResource to import
  * @param importFromId The id of the existing SalesforceConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SalesforceConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_salesforce_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/salesforce_connection_resource saviynt_salesforce_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SalesforceConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: SalesforceConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_salesforce_connection_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountFieldQuery = config.accountFieldQuery;
    this._accountFilterQuery = config.accountFilterQuery;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._clientSecretWo = config.clientSecretWo;
    this._connectionName = config.connectionName;
    this._createaccountjson = config.createaccountjson;
    this._customCreateaccountUrl = config.customCreateaccountUrl;
    this._customconfigjson = config.customconfigjson;
    this._defaultsavroles = config.defaultsavroles;
    this._description = config.description;
    this._emailTemplate = config.emailTemplate;
    this._featureLicenseJson = config.featureLicenseJson;
    this._fieldMappingJson = config.fieldMappingJson;
    this._instanceUrl = config.instanceUrl;
    this._modifyaccountjson = config.modifyaccountjson;
    this._objectToBeImported = config.objectToBeImported;
    this._pamConfig = config.pamConfig;
    this._redirectUri = config.redirectUri;
    this._refreshToken = config.refreshToken;
    this._refreshTokenWo = config.refreshTokenWo;
    this._saveInVault = config.saveInVault;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_field_query - computed: true, optional: true, required: false
  private _accountFieldQuery?: string; 
  public get accountFieldQuery() {
    return this.getStringAttribute('account_field_query');
  }
  public set accountFieldQuery(value: string) {
    this._accountFieldQuery = value;
  }
  public resetAccountFieldQuery() {
    this._accountFieldQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountFieldQueryInput() {
    return this._accountFieldQuery;
  }

  // account_filter_query - computed: true, optional: true, required: false
  private _accountFilterQuery?: string; 
  public get accountFilterQuery() {
    return this.getStringAttribute('account_filter_query');
  }
  public set accountFilterQuery(value: string) {
    this._accountFilterQuery = value;
  }
  public resetAccountFilterQuery() {
    this._accountFilterQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountFilterQueryInput() {
    return this._accountFilterQuery;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
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

  // createaccountjson - computed: true, optional: true, required: false
  private _createaccountjson?: string; 
  public get createaccountjson() {
    return this.getStringAttribute('createaccountjson');
  }
  public set createaccountjson(value: string) {
    this._createaccountjson = value;
  }
  public resetCreateaccountjson() {
    this._createaccountjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createaccountjsonInput() {
    return this._createaccountjson;
  }

  // custom_createaccount_url - computed: true, optional: true, required: false
  private _customCreateaccountUrl?: string; 
  public get customCreateaccountUrl() {
    return this.getStringAttribute('custom_createaccount_url');
  }
  public set customCreateaccountUrl(value: string) {
    this._customCreateaccountUrl = value;
  }
  public resetCustomCreateaccountUrl() {
    this._customCreateaccountUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCreateaccountUrlInput() {
    return this._customCreateaccountUrl;
  }

  // customconfigjson - computed: true, optional: true, required: false
  private _customconfigjson?: string; 
  public get customconfigjson() {
    return this.getStringAttribute('customconfigjson');
  }
  public set customconfigjson(value: string) {
    this._customconfigjson = value;
  }
  public resetCustomconfigjson() {
    this._customconfigjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customconfigjsonInput() {
    return this._customconfigjson;
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

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // feature_license_json - computed: true, optional: true, required: false
  private _featureLicenseJson?: string; 
  public get featureLicenseJson() {
    return this.getStringAttribute('feature_license_json');
  }
  public set featureLicenseJson(value: string) {
    this._featureLicenseJson = value;
  }
  public resetFeatureLicenseJson() {
    this._featureLicenseJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureLicenseJsonInput() {
    return this._featureLicenseJson;
  }

  // field_mapping_json - computed: true, optional: true, required: false
  private _fieldMappingJson?: string; 
  public get fieldMappingJson() {
    return this.getStringAttribute('field_mapping_json');
  }
  public set fieldMappingJson(value: string) {
    this._fieldMappingJson = value;
  }
  public resetFieldMappingJson() {
    this._fieldMappingJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingJsonInput() {
    return this._fieldMappingJson;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }

  // modifyaccountjson - computed: true, optional: true, required: false
  private _modifyaccountjson?: string; 
  public get modifyaccountjson() {
    return this.getStringAttribute('modifyaccountjson');
  }
  public set modifyaccountjson(value: string) {
    this._modifyaccountjson = value;
  }
  public resetModifyaccountjson() {
    this._modifyaccountjson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyaccountjsonInput() {
    return this._modifyaccountjson;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // object_to_be_imported - computed: true, optional: true, required: false
  private _objectToBeImported?: string; 
  public get objectToBeImported() {
    return this.getStringAttribute('object_to_be_imported');
  }
  public set objectToBeImported(value: string) {
    this._objectToBeImported = value;
  }
  public resetObjectToBeImported() {
    this._objectToBeImported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectToBeImportedInput() {
    return this._objectToBeImported;
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

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // refresh_token_wo - computed: false, optional: true, required: false
  private _refreshTokenWo?: string; 
  public get refreshTokenWo() {
    return this.getStringAttribute('refresh_token_wo');
  }
  public set refreshTokenWo(value: string) {
    this._refreshTokenWo = value;
  }
  public resetRefreshTokenWo() {
    this._refreshTokenWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenWoInput() {
    return this._refreshTokenWo;
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
      account_field_query: cdktf.stringToTerraform(this._accountFieldQuery),
      account_filter_query: cdktf.stringToTerraform(this._accountFilterQuery),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_wo: cdktf.stringToTerraform(this._clientSecretWo),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      createaccountjson: cdktf.stringToTerraform(this._createaccountjson),
      custom_createaccount_url: cdktf.stringToTerraform(this._customCreateaccountUrl),
      customconfigjson: cdktf.stringToTerraform(this._customconfigjson),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      description: cdktf.stringToTerraform(this._description),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      feature_license_json: cdktf.stringToTerraform(this._featureLicenseJson),
      field_mapping_json: cdktf.stringToTerraform(this._fieldMappingJson),
      instance_url: cdktf.stringToTerraform(this._instanceUrl),
      modifyaccountjson: cdktf.stringToTerraform(this._modifyaccountjson),
      object_to_be_imported: cdktf.stringToTerraform(this._objectToBeImported),
      pam_config: cdktf.stringToTerraform(this._pamConfig),
      redirect_uri: cdktf.stringToTerraform(this._redirectUri),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      refresh_token_wo: cdktf.stringToTerraform(this._refreshTokenWo),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_field_query: {
        value: cdktf.stringToHclTerraform(this._accountFieldQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_filter_query: {
        value: cdktf.stringToHclTerraform(this._accountFilterQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret_wo: {
        value: cdktf.stringToHclTerraform(this._clientSecretWo),
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
      createaccountjson: {
        value: cdktf.stringToHclTerraform(this._createaccountjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_createaccount_url: {
        value: cdktf.stringToHclTerraform(this._customCreateaccountUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customconfigjson: {
        value: cdktf.stringToHclTerraform(this._customconfigjson),
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
      feature_license_json: {
        value: cdktf.stringToHclTerraform(this._featureLicenseJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_mapping_json: {
        value: cdktf.stringToHclTerraform(this._fieldMappingJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_url: {
        value: cdktf.stringToHclTerraform(this._instanceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modifyaccountjson: {
        value: cdktf.stringToHclTerraform(this._modifyaccountjson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_to_be_imported: {
        value: cdktf.stringToHclTerraform(this._objectToBeImported),
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
      redirect_uri: {
        value: cdktf.stringToHclTerraform(this._redirectUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token: {
        value: cdktf.stringToHclTerraform(this._refreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_wo: {
        value: cdktf.stringToHclTerraform(this._refreshTokenWo),
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
