// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkdayConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comma-separated list of access types to import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#access_import_list WorkdayConnectionResource#access_import_list}
  */
  readonly accessImportList?: string;
  /**
  * Additional access attribute mapping for Workday access objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#access_import_mapping WorkdayConnectionResource#access_import_mapping}
  */
  readonly accessImportMapping?: string;
  /**
  * Property for ACCESS_LAST_IMPORT_TIME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#access_last_import_time WorkdayConnectionResource#access_last_import_time}
  */
  readonly accessLastImportTime?: string;
  /**
  * Mapping configuration for account import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#account_import_mapping WorkdayConnectionResource#account_import_mapping}
  */
  readonly accountImportMapping?: string;
  /**
  * Request payload for importing accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#account_import_payload WorkdayConnectionResource#account_import_payload}
  */
  readonly accountImportPayload?: string;
  /**
  * Property for ACCOUNTS_LAST_IMPORT_TIME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#accounts_last_import_time WorkdayConnectionResource#accounts_last_import_time}
  */
  readonly accountsLastImportTime?: string;
  /**
  * Version of the SOAP API used for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#api_version WorkdayConnectionResource#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Payload for assigning org role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#assign_orgrole_payload WorkdayConnectionResource#assign_orgrole_payload}
  */
  readonly assignOrgrolePayload?: string;
  /**
  * Base URL of the Workday tenant instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#base_url WorkdayConnectionResource#base_url}
  */
  readonly baseUrl?: string;
  /**
  * OAuth client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#client_id WorkdayConnectionResource#client_id}
  */
  readonly clientId?: string;
  /**
  * OAuth client secret. Either this field or the client_secret_wo field must be populated to set the client_secret attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#client_secret WorkdayConnectionResource#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAuth client secret. Either this field or the client_secret field must be populated to set the client_secret attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#client_secret_wo WorkdayConnectionResource#client_secret_wo}
  */
  readonly clientSecretWo?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#connection_name WorkdayConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * Payload for creating an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#create_account_payload WorkdayConnectionResource#create_account_payload}
  */
  readonly createAccountPayload?: string;
  /**
  * Custom configuration for Workday connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#custom_config WorkdayConnectionResource#custom_config}
  */
  readonly customConfig?: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#defaultsavroles WorkdayConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#description WorkdayConnectionResource#description}
  */
  readonly description?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#email_template WorkdayConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * Include descriptor attribute in response if set to TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#include_reference_descriptors WorkdayConnectionResource#include_reference_descriptors}
  */
  readonly includeReferenceDescriptors?: string;
  /**
  * Payload for modifying user data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#modify_user_data_json WorkdayConnectionResource#modify_user_data_json}
  */
  readonly modifyUserDataJson?: string;
  /**
  * Custom SOAP body for organization role import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#orgrole_import_payload WorkdayConnectionResource#orgrole_import_payload}
  */
  readonly orgroleImportPayload?: string;
  /**
  * Number of objects to return per page during import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#page_size WorkdayConnectionResource#page_size}
  */
  readonly pageSize?: string;
  /**
  * Privileged Access Management configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#pam_config WorkdayConnectionResource#pam_config}
  */
  readonly pamConfig?: string;
  /**
  * Password for SOAP authentication. Either this field or the password_wo field must be populated to set the password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#password WorkdayConnectionResource#password}
  */
  readonly password?: string;
  /**
  * Password write-only attribute. Either this field or the password field must be populated to set the password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#password_wo WorkdayConnectionResource#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Overrides default report mapping for RaaS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#raas_mapping_json WorkdayConnectionResource#raas_mapping_json}
  */
  readonly raasMappingJson?: string;
  /**
  * OAuth refresh token. Either this field or the refresh_token_wo field must be populated to set the refresh_token attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#refresh_token WorkdayConnectionResource#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Refresh token write-only attribute. Either this field or the refresh_token field must be populated to set the refresh_token attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#refresh_token_wo WorkdayConnectionResource#refresh_token_wo}
  */
  readonly refreshTokenWo?: string;
  /**
  * Payload for removing org role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#remove_orgrole_payload WorkdayConnectionResource#remove_orgrole_payload}
  */
  readonly removeOrgrolePayload?: string;
  /**
  * Account name of the report owner used to build default RaaS URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#report_owner WorkdayConnectionResource#report_owner}
  */
  readonly reportOwner?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#save_in_vault WorkdayConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * Mapping of user status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#status_key_json WorkdayConnectionResource#status_key_json}
  */
  readonly statusKeyJson?: string;
  /**
  * Config for reading and importing status of account and entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#status_threshold_config WorkdayConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  * The name of your tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#tenant_name WorkdayConnectionResource#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Payload for updating an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#update_account_payload WorkdayConnectionResource#update_account_payload}
  */
  readonly updateAccountPayload?: string;
  /**
  * Payload for updating a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#update_user_payload WorkdayConnectionResource#update_user_payload}
  */
  readonly updateUserPayload?: string;
  /**
  * Set TRUE to utilize enhanced Organizational Role setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#use_enhanced_orgrole WorkdayConnectionResource#use_enhanced_orgrole}
  */
  readonly useEnhancedOrgrole?: string;
  /**
  * Whether to use OAuth authentication.Values can be TRUE/FALSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#use_oauth WorkdayConnectionResource#use_oauth}
  */
  readonly useOauth: string;
  /**
  * Set TRUE to use certificate-based authentication for SOAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#use_x509auth_for_soap WorkdayConnectionResource#use_x509auth_for_soap}
  */
  readonly useX509AuthForSoap?: string;
  /**
  * Mapping configuration for user import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#user_import_mapping WorkdayConnectionResource#user_import_mapping}
  */
  readonly userImportMapping?: string;
  /**
  * Request payload for importing users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#user_import_payload WorkdayConnectionResource#user_import_payload}
  */
  readonly userImportPayload?: string;
  /**
  * Specifies which job-related attributes are stored as user attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#userattributejson WorkdayConnectionResource#userattributejson}
  */
  readonly userattributejson?: string;
  /**
  * Username for SOAP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#username WorkdayConnectionResource#username}
  */
  readonly username?: string;
  /**
  * Property for USERS_LAST_IMPORT_TIME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#users_last_import_time WorkdayConnectionResource#users_last_import_time}
  */
  readonly usersLastImportTime?: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#vault_configuration WorkdayConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#vault_connection WorkdayConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#wo_version WorkdayConnectionResource#wo_version}
  */
  readonly woVersion?: string;
  /**
  * Certificate for x509-based SOAP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#x509_cert WorkdayConnectionResource#x509_cert}
  */
  readonly x509Cert?: string;
  /**
  * Private key for x509-based SOAP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#x509_key WorkdayConnectionResource#x509_key}
  */
  readonly x509Key?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource saviynt_workday_connection_resource}
*/
export class WorkdayConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_workday_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkdayConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkdayConnectionResource to import
  * @param importFromId The id of the existing WorkdayConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkdayConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_workday_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_connection_resource saviynt_workday_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkdayConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkdayConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_workday_connection_resource',
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
    this._accessImportList = config.accessImportList;
    this._accessImportMapping = config.accessImportMapping;
    this._accessLastImportTime = config.accessLastImportTime;
    this._accountImportMapping = config.accountImportMapping;
    this._accountImportPayload = config.accountImportPayload;
    this._accountsLastImportTime = config.accountsLastImportTime;
    this._apiVersion = config.apiVersion;
    this._assignOrgrolePayload = config.assignOrgrolePayload;
    this._baseUrl = config.baseUrl;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._clientSecretWo = config.clientSecretWo;
    this._connectionName = config.connectionName;
    this._createAccountPayload = config.createAccountPayload;
    this._customConfig = config.customConfig;
    this._defaultsavroles = config.defaultsavroles;
    this._description = config.description;
    this._emailTemplate = config.emailTemplate;
    this._includeReferenceDescriptors = config.includeReferenceDescriptors;
    this._modifyUserDataJson = config.modifyUserDataJson;
    this._orgroleImportPayload = config.orgroleImportPayload;
    this._pageSize = config.pageSize;
    this._pamConfig = config.pamConfig;
    this._password = config.password;
    this._passwordWo = config.passwordWo;
    this._raasMappingJson = config.raasMappingJson;
    this._refreshToken = config.refreshToken;
    this._refreshTokenWo = config.refreshTokenWo;
    this._removeOrgrolePayload = config.removeOrgrolePayload;
    this._reportOwner = config.reportOwner;
    this._saveInVault = config.saveInVault;
    this._statusKeyJson = config.statusKeyJson;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._tenantName = config.tenantName;
    this._updateAccountPayload = config.updateAccountPayload;
    this._updateUserPayload = config.updateUserPayload;
    this._useEnhancedOrgrole = config.useEnhancedOrgrole;
    this._useOauth = config.useOauth;
    this._useX509AuthForSoap = config.useX509AuthForSoap;
    this._userImportMapping = config.userImportMapping;
    this._userImportPayload = config.userImportPayload;
    this._userattributejson = config.userattributejson;
    this._username = config.username;
    this._usersLastImportTime = config.usersLastImportTime;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
    this._x509Cert = config.x509Cert;
    this._x509Key = config.x509Key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_import_list - computed: true, optional: true, required: false
  private _accessImportList?: string; 
  public get accessImportList() {
    return this.getStringAttribute('access_import_list');
  }
  public set accessImportList(value: string) {
    this._accessImportList = value;
  }
  public resetAccessImportList() {
    this._accessImportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessImportListInput() {
    return this._accessImportList;
  }

  // access_import_mapping - computed: true, optional: true, required: false
  private _accessImportMapping?: string; 
  public get accessImportMapping() {
    return this.getStringAttribute('access_import_mapping');
  }
  public set accessImportMapping(value: string) {
    this._accessImportMapping = value;
  }
  public resetAccessImportMapping() {
    this._accessImportMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessImportMappingInput() {
    return this._accessImportMapping;
  }

  // access_last_import_time - computed: true, optional: true, required: false
  private _accessLastImportTime?: string; 
  public get accessLastImportTime() {
    return this.getStringAttribute('access_last_import_time');
  }
  public set accessLastImportTime(value: string) {
    this._accessLastImportTime = value;
  }
  public resetAccessLastImportTime() {
    this._accessLastImportTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLastImportTimeInput() {
    return this._accessLastImportTime;
  }

  // account_import_mapping - computed: true, optional: true, required: false
  private _accountImportMapping?: string; 
  public get accountImportMapping() {
    return this.getStringAttribute('account_import_mapping');
  }
  public set accountImportMapping(value: string) {
    this._accountImportMapping = value;
  }
  public resetAccountImportMapping() {
    this._accountImportMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountImportMappingInput() {
    return this._accountImportMapping;
  }

  // account_import_payload - computed: true, optional: true, required: false
  private _accountImportPayload?: string; 
  public get accountImportPayload() {
    return this.getStringAttribute('account_import_payload');
  }
  public set accountImportPayload(value: string) {
    this._accountImportPayload = value;
  }
  public resetAccountImportPayload() {
    this._accountImportPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountImportPayloadInput() {
    return this._accountImportPayload;
  }

  // accounts_last_import_time - computed: true, optional: true, required: false
  private _accountsLastImportTime?: string; 
  public get accountsLastImportTime() {
    return this.getStringAttribute('accounts_last_import_time');
  }
  public set accountsLastImportTime(value: string) {
    this._accountsLastImportTime = value;
  }
  public resetAccountsLastImportTime() {
    this._accountsLastImportTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsLastImportTimeInput() {
    return this._accountsLastImportTime;
  }

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // assign_orgrole_payload - computed: true, optional: true, required: false
  private _assignOrgrolePayload?: string; 
  public get assignOrgrolePayload() {
    return this.getStringAttribute('assign_orgrole_payload');
  }
  public set assignOrgrolePayload(value: string) {
    this._assignOrgrolePayload = value;
  }
  public resetAssignOrgrolePayload() {
    this._assignOrgrolePayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignOrgrolePayloadInput() {
    return this._assignOrgrolePayload;
  }

  // base_url - computed: true, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
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

  // create_account_payload - computed: true, optional: true, required: false
  private _createAccountPayload?: string; 
  public get createAccountPayload() {
    return this.getStringAttribute('create_account_payload');
  }
  public set createAccountPayload(value: string) {
    this._createAccountPayload = value;
  }
  public resetCreateAccountPayload() {
    this._createAccountPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAccountPayloadInput() {
    return this._createAccountPayload;
  }

  // custom_config - computed: true, optional: true, required: false
  private _customConfig?: string; 
  public get customConfig() {
    return this.getStringAttribute('custom_config');
  }
  public set customConfig(value: string) {
    this._customConfig = value;
  }
  public resetCustomConfig() {
    this._customConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_reference_descriptors - computed: true, optional: true, required: false
  private _includeReferenceDescriptors?: string; 
  public get includeReferenceDescriptors() {
    return this.getStringAttribute('include_reference_descriptors');
  }
  public set includeReferenceDescriptors(value: string) {
    this._includeReferenceDescriptors = value;
  }
  public resetIncludeReferenceDescriptors() {
    this._includeReferenceDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReferenceDescriptorsInput() {
    return this._includeReferenceDescriptors;
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

  // orgrole_import_payload - computed: true, optional: true, required: false
  private _orgroleImportPayload?: string; 
  public get orgroleImportPayload() {
    return this.getStringAttribute('orgrole_import_payload');
  }
  public set orgroleImportPayload(value: string) {
    this._orgroleImportPayload = value;
  }
  public resetOrgroleImportPayload() {
    this._orgroleImportPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgroleImportPayloadInput() {
    return this._orgroleImportPayload;
  }

  // page_size - computed: true, optional: true, required: false
  private _pageSize?: string; 
  public get pageSize() {
    return this.getStringAttribute('page_size');
  }
  public set pageSize(value: string) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // raas_mapping_json - computed: true, optional: true, required: false
  private _raasMappingJson?: string; 
  public get raasMappingJson() {
    return this.getStringAttribute('raas_mapping_json');
  }
  public set raasMappingJson(value: string) {
    this._raasMappingJson = value;
  }
  public resetRaasMappingJson() {
    this._raasMappingJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raasMappingJsonInput() {
    return this._raasMappingJson;
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

  // remove_orgrole_payload - computed: true, optional: true, required: false
  private _removeOrgrolePayload?: string; 
  public get removeOrgrolePayload() {
    return this.getStringAttribute('remove_orgrole_payload');
  }
  public set removeOrgrolePayload(value: string) {
    this._removeOrgrolePayload = value;
  }
  public resetRemoveOrgrolePayload() {
    this._removeOrgrolePayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeOrgrolePayloadInput() {
    return this._removeOrgrolePayload;
  }

  // report_owner - computed: true, optional: true, required: false
  private _reportOwner?: string; 
  public get reportOwner() {
    return this.getStringAttribute('report_owner');
  }
  public set reportOwner(value: string) {
    this._reportOwner = value;
  }
  public resetReportOwner() {
    this._reportOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportOwnerInput() {
    return this._reportOwner;
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

  // status_key_json - computed: true, optional: true, required: false
  private _statusKeyJson?: string; 
  public get statusKeyJson() {
    return this.getStringAttribute('status_key_json');
  }
  public set statusKeyJson(value: string) {
    this._statusKeyJson = value;
  }
  public resetStatusKeyJson() {
    this._statusKeyJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusKeyJsonInput() {
    return this._statusKeyJson;
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

  // tenant_name - computed: true, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // update_account_payload - computed: true, optional: true, required: false
  private _updateAccountPayload?: string; 
  public get updateAccountPayload() {
    return this.getStringAttribute('update_account_payload');
  }
  public set updateAccountPayload(value: string) {
    this._updateAccountPayload = value;
  }
  public resetUpdateAccountPayload() {
    this._updateAccountPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAccountPayloadInput() {
    return this._updateAccountPayload;
  }

  // update_user_payload - computed: true, optional: true, required: false
  private _updateUserPayload?: string; 
  public get updateUserPayload() {
    return this.getStringAttribute('update_user_payload');
  }
  public set updateUserPayload(value: string) {
    this._updateUserPayload = value;
  }
  public resetUpdateUserPayload() {
    this._updateUserPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUserPayloadInput() {
    return this._updateUserPayload;
  }

  // use_enhanced_orgrole - computed: true, optional: true, required: false
  private _useEnhancedOrgrole?: string; 
  public get useEnhancedOrgrole() {
    return this.getStringAttribute('use_enhanced_orgrole');
  }
  public set useEnhancedOrgrole(value: string) {
    this._useEnhancedOrgrole = value;
  }
  public resetUseEnhancedOrgrole() {
    this._useEnhancedOrgrole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnhancedOrgroleInput() {
    return this._useEnhancedOrgrole;
  }

  // use_oauth - computed: false, optional: false, required: true
  private _useOauth?: string; 
  public get useOauth() {
    return this.getStringAttribute('use_oauth');
  }
  public set useOauth(value: string) {
    this._useOauth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useOauthInput() {
    return this._useOauth;
  }

  // use_x509auth_for_soap - computed: true, optional: true, required: false
  private _useX509AuthForSoap?: string; 
  public get useX509AuthForSoap() {
    return this.getStringAttribute('use_x509auth_for_soap');
  }
  public set useX509AuthForSoap(value: string) {
    this._useX509AuthForSoap = value;
  }
  public resetUseX509AuthForSoap() {
    this._useX509AuthForSoap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useX509AuthForSoapInput() {
    return this._useX509AuthForSoap;
  }

  // user_import_mapping - computed: true, optional: true, required: false
  private _userImportMapping?: string; 
  public get userImportMapping() {
    return this.getStringAttribute('user_import_mapping');
  }
  public set userImportMapping(value: string) {
    this._userImportMapping = value;
  }
  public resetUserImportMapping() {
    this._userImportMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userImportMappingInput() {
    return this._userImportMapping;
  }

  // user_import_payload - computed: true, optional: true, required: false
  private _userImportPayload?: string; 
  public get userImportPayload() {
    return this.getStringAttribute('user_import_payload');
  }
  public set userImportPayload(value: string) {
    this._userImportPayload = value;
  }
  public resetUserImportPayload() {
    this._userImportPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userImportPayloadInput() {
    return this._userImportPayload;
  }

  // userattributejson - computed: true, optional: true, required: false
  private _userattributejson?: string; 
  public get userattributejson() {
    return this.getStringAttribute('userattributejson');
  }
  public set userattributejson(value: string) {
    this._userattributejson = value;
  }
  public resetUserattributejson() {
    this._userattributejson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userattributejsonInput() {
    return this._userattributejson;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // users_last_import_time - computed: true, optional: true, required: false
  private _usersLastImportTime?: string; 
  public get usersLastImportTime() {
    return this.getStringAttribute('users_last_import_time');
  }
  public set usersLastImportTime(value: string) {
    this._usersLastImportTime = value;
  }
  public resetUsersLastImportTime() {
    this._usersLastImportTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersLastImportTimeInput() {
    return this._usersLastImportTime;
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

  // x509_cert - computed: true, optional: true, required: false
  private _x509Cert?: string; 
  public get x509Cert() {
    return this.getStringAttribute('x509_cert');
  }
  public set x509Cert(value: string) {
    this._x509Cert = value;
  }
  public resetX509Cert() {
    this._x509Cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertInput() {
    return this._x509Cert;
  }

  // x509_key - computed: true, optional: true, required: false
  private _x509Key?: string; 
  public get x509Key() {
    return this.getStringAttribute('x509_key');
  }
  public set x509Key(value: string) {
    this._x509Key = value;
  }
  public resetX509Key() {
    this._x509Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509KeyInput() {
    return this._x509Key;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_import_list: cdktf.stringToTerraform(this._accessImportList),
      access_import_mapping: cdktf.stringToTerraform(this._accessImportMapping),
      access_last_import_time: cdktf.stringToTerraform(this._accessLastImportTime),
      account_import_mapping: cdktf.stringToTerraform(this._accountImportMapping),
      account_import_payload: cdktf.stringToTerraform(this._accountImportPayload),
      accounts_last_import_time: cdktf.stringToTerraform(this._accountsLastImportTime),
      api_version: cdktf.stringToTerraform(this._apiVersion),
      assign_orgrole_payload: cdktf.stringToTerraform(this._assignOrgrolePayload),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_wo: cdktf.stringToTerraform(this._clientSecretWo),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      create_account_payload: cdktf.stringToTerraform(this._createAccountPayload),
      custom_config: cdktf.stringToTerraform(this._customConfig),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      description: cdktf.stringToTerraform(this._description),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      include_reference_descriptors: cdktf.stringToTerraform(this._includeReferenceDescriptors),
      modify_user_data_json: cdktf.stringToTerraform(this._modifyUserDataJson),
      orgrole_import_payload: cdktf.stringToTerraform(this._orgroleImportPayload),
      page_size: cdktf.stringToTerraform(this._pageSize),
      pam_config: cdktf.stringToTerraform(this._pamConfig),
      password: cdktf.stringToTerraform(this._password),
      password_wo: cdktf.stringToTerraform(this._passwordWo),
      raas_mapping_json: cdktf.stringToTerraform(this._raasMappingJson),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      refresh_token_wo: cdktf.stringToTerraform(this._refreshTokenWo),
      remove_orgrole_payload: cdktf.stringToTerraform(this._removeOrgrolePayload),
      report_owner: cdktf.stringToTerraform(this._reportOwner),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      status_key_json: cdktf.stringToTerraform(this._statusKeyJson),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      update_account_payload: cdktf.stringToTerraform(this._updateAccountPayload),
      update_user_payload: cdktf.stringToTerraform(this._updateUserPayload),
      use_enhanced_orgrole: cdktf.stringToTerraform(this._useEnhancedOrgrole),
      use_oauth: cdktf.stringToTerraform(this._useOauth),
      use_x509auth_for_soap: cdktf.stringToTerraform(this._useX509AuthForSoap),
      user_import_mapping: cdktf.stringToTerraform(this._userImportMapping),
      user_import_payload: cdktf.stringToTerraform(this._userImportPayload),
      userattributejson: cdktf.stringToTerraform(this._userattributejson),
      username: cdktf.stringToTerraform(this._username),
      users_last_import_time: cdktf.stringToTerraform(this._usersLastImportTime),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
      x509_cert: cdktf.stringToTerraform(this._x509Cert),
      x509_key: cdktf.stringToTerraform(this._x509Key),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_import_list: {
        value: cdktf.stringToHclTerraform(this._accessImportList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_import_mapping: {
        value: cdktf.stringToHclTerraform(this._accessImportMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_last_import_time: {
        value: cdktf.stringToHclTerraform(this._accessLastImportTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_import_mapping: {
        value: cdktf.stringToHclTerraform(this._accountImportMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_import_payload: {
        value: cdktf.stringToHclTerraform(this._accountImportPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounts_last_import_time: {
        value: cdktf.stringToHclTerraform(this._accountsLastImportTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assign_orgrole_payload: {
        value: cdktf.stringToHclTerraform(this._assignOrgrolePayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
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
      create_account_payload: {
        value: cdktf.stringToHclTerraform(this._createAccountPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_config: {
        value: cdktf.stringToHclTerraform(this._customConfig),
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
      include_reference_descriptors: {
        value: cdktf.stringToHclTerraform(this._includeReferenceDescriptors),
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
      orgrole_import_payload: {
        value: cdktf.stringToHclTerraform(this._orgroleImportPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktf.stringToHclTerraform(this._pageSize),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_wo: {
        value: cdktf.stringToHclTerraform(this._passwordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raas_mapping_json: {
        value: cdktf.stringToHclTerraform(this._raasMappingJson),
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
      remove_orgrole_payload: {
        value: cdktf.stringToHclTerraform(this._removeOrgrolePayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_owner: {
        value: cdktf.stringToHclTerraform(this._reportOwner),
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
      status_key_json: {
        value: cdktf.stringToHclTerraform(this._statusKeyJson),
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
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_account_payload: {
        value: cdktf.stringToHclTerraform(this._updateAccountPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_user_payload: {
        value: cdktf.stringToHclTerraform(this._updateUserPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_enhanced_orgrole: {
        value: cdktf.stringToHclTerraform(this._useEnhancedOrgrole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_oauth: {
        value: cdktf.stringToHclTerraform(this._useOauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_x509auth_for_soap: {
        value: cdktf.stringToHclTerraform(this._useX509AuthForSoap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_import_mapping: {
        value: cdktf.stringToHclTerraform(this._userImportMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_import_payload: {
        value: cdktf.stringToHclTerraform(this._userImportPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userattributejson: {
        value: cdktf.stringToHclTerraform(this._userattributejson),
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
      users_last_import_time: {
        value: cdktf.stringToHclTerraform(this._usersLastImportTime),
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
      x509_cert: {
        value: cdktf.stringToHclTerraform(this._x509Cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x509_key: {
        value: cdktf.stringToHclTerraform(this._x509Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
