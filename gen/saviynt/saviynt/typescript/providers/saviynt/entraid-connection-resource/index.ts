// https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntraidConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure Active Directory tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#aad_tenant_id EntraidConnectionResource#aad_tenant_id}
  */
  readonly aadTenantId: string;
  /**
  * Access token used for API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#access_token EntraidConnectionResource#access_token}
  */
  readonly accessToken?: string;
  /**
  * Access token used for API calls (write-only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#access_token_wo EntraidConnectionResource#access_token_wo}
  */
  readonly accessTokenWo?: string;
  /**
  * Attributes for account configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#account_attributes EntraidConnectionResource#account_attributes}
  */
  readonly accountAttributes?: string;
  /**
  * Fields to import for accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#account_import_fields EntraidConnectionResource#account_import_fields}
  */
  readonly accountImportFields?: string;
  /**
  * Filter for accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#accounts_filter EntraidConnectionResource#accounts_filter}
  */
  readonly accountsFilter?: string;
  /**
  * JSON template to add access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#add_access_json EntraidConnectionResource#add_access_json}
  */
  readonly addAccessJson?: string;
  /**
  * JSON to add access to entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#add_access_to_entitlement_json EntraidConnectionResource#add_access_to_entitlement_json}
  */
  readonly addAccessToEntitlementJson?: string;
  /**
  * Authentication endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#authentication_endpoint EntraidConnectionResource#authentication_endpoint}
  */
  readonly authenticationEndpoint?: string;
  /**
  * Azure management endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#azure_management_endpoint EntraidConnectionResource#azure_management_endpoint}
  */
  readonly azureManagementEndpoint?: string;
  /**
  * Access token for Azure management APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#azure_mgmt_access_token EntraidConnectionResource#azure_mgmt_access_token}
  */
  readonly azureMgmtAccessToken?: string;
  /**
  * Access token for Azure management APIs (write-only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#azure_mgmt_access_token_wo EntraidConnectionResource#azure_mgmt_access_token_wo}
  */
  readonly azureMgmtAccessTokenWo?: string;
  /**
  * JSON template to change password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#change_pass_json EntraidConnectionResource#change_pass_json}
  */
  readonly changePassJson?: string;
  /**
  * Client ID for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#client_id EntraidConnectionResource#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#client_secret EntraidConnectionResource#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Client Secret for authentication (write-only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#client_secret_wo EntraidConnectionResource#client_secret_wo}
  */
  readonly clientSecretWo?: string;
  /**
  * Main config JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#config_json EntraidConnectionResource#config_json}
  */
  readonly configJson?: string;
  /**
  * Configuration for the connection in JSON format. Either the connection_json field or the connection_json_wo field must be populated to set the connection_json attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#connection_json EntraidConnectionResource#connection_json}
  */
  readonly connectionJson?: string;
  /**
  * Connection JSON configuration (write-only). Either the connection_json field or the connection_json_wo field must be populated to set the connection_json attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#connection_json_wo EntraidConnectionResource#connection_json_wo}
  */
  readonly connectionJsonWo?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#connection_name EntraidConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * JSON template to create an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#create_account_json EntraidConnectionResource#create_account_json}
  */
  readonly createAccountJson?: string;
  /**
  * JSON to create channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#create_channel_json EntraidConnectionResource#create_channel_json}
  */
  readonly createChannelJson?: string;
  /**
  * JSON to create group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#create_group_json EntraidConnectionResource#create_group_json}
  */
  readonly createGroupJson?: string;
  /**
  * Configuration to create new endpoints.Value accpetd are YES/NO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#create_new_endpoints EntraidConnectionResource#create_new_endpoints}
  */
  readonly createNewEndpoints?: string;
  /**
  * JSON to create service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#create_service_principal_json EntraidConnectionResource#create_service_principal_json}
  */
  readonly createServicePrincipalJson?: string;
  /**
  * JSON to create team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#create_team_json EntraidConnectionResource#create_team_json}
  */
  readonly createTeamJson?: string;
  /**
  * Flag or configuration for creating users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#create_users EntraidConnectionResource#create_users}
  */
  readonly createUsers?: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#defaultsavroles EntraidConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * JSON to delete group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#delete_group_json EntraidConnectionResource#delete_group_json}
  */
  readonly deleteGroupJson?: string;
  /**
  * Delta tokens JSON data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#delta_tokens_json EntraidConnectionResource#delta_tokens_json}
  */
  readonly deltaTokensJson?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#description EntraidConnectionResource#description}
  */
  readonly description?: string;
  /**
  * JSON template to disable an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#disable_account_json EntraidConnectionResource#disable_account_json}
  */
  readonly disableAccountJson?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#email_template EntraidConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * JSON template to enable an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#enable_account_json EntraidConnectionResource#enable_account_json}
  */
  readonly enableAccountJson?: string;
  /**
  * Endpoints filter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#endpoints_filter EntraidConnectionResource#endpoints_filter}
  */
  readonly endpointsFilter?: string;
  /**
  * Configuration for enhanced directory roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#enhanced_directory_roles EntraidConnectionResource#enhanced_directory_roles}
  */
  readonly enhancedDirectoryRoles?: string;
  /**
  * Attribute used for entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#entitlement_attribute EntraidConnectionResource#entitlement_attribute}
  */
  readonly entitlementAttribute?: string;
  /**
  * Filter JSON for entitlements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#entitlement_filter_json EntraidConnectionResource#entitlement_filter_json}
  */
  readonly entitlementFilterJson?: string;
  /**
  * Depth level for import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#import_depth EntraidConnectionResource#import_depth}
  */
  readonly importDepth?: string;
  /**
  * JSON configuration for importing users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#import_user_json EntraidConnectionResource#import_user_json}
  */
  readonly importUserJson?: string;
  /**
  * Type of managed accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#managed_account_type EntraidConnectionResource#managed_account_type}
  */
  readonly managedAccountType?: string;
  /**
  * Microsoft Graph API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#microsoft_graph_endpoint EntraidConnectionResource#microsoft_graph_endpoint}
  */
  readonly microsoftGraphEndpoint?: string;
  /**
  * JSON to modify user data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#modify_user_data_json EntraidConnectionResource#modify_user_data_json}
  */
  readonly modifyUserDataJson?: string;
  /**
  * PAM configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#pam_config EntraidConnectionResource#pam_config}
  */
  readonly pamConfig?: string;
  /**
  * JSON to remove access from entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#remove_access_from_entitlement_json EntraidConnectionResource#remove_access_from_entitlement_json}
  */
  readonly removeAccessFromEntitlementJson?: string;
  /**
  * JSON template to remove access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#remove_access_json EntraidConnectionResource#remove_access_json}
  */
  readonly removeAccessJson?: string;
  /**
  * JSON template to remove account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#remove_account_json EntraidConnectionResource#remove_account_json}
  */
  readonly removeAccountJson?: string;
  /**
  * JSON to remove service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#remove_service_principal_json EntraidConnectionResource#remove_service_principal_json}
  */
  readonly removeServicePrincipalJson?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#save_in_vault EntraidConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * Attributes for service account configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#service_account_attributes EntraidConnectionResource#service_account_attributes}
  */
  readonly serviceAccountAttributes?: string;
  /**
  * Configuration for status thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#status_threshold_config EntraidConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  * JSON template to update an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#update_account_json EntraidConnectionResource#update_account_json}
  */
  readonly updateAccountJson?: string;
  /**
  * JSON to update group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#update_group_json EntraidConnectionResource#update_group_json}
  */
  readonly updateGroupJson?: string;
  /**
  * JSON to update service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#update_service_principal_json EntraidConnectionResource#update_service_principal_json}
  */
  readonly updateServicePrincipalJson?: string;
  /**
  * JSON template to update user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#update_user_json EntraidConnectionResource#update_user_json}
  */
  readonly updateUserJson?: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#vault_configuration EntraidConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#vault_connection EntraidConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Windows connector JSON configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#windows_connector_json EntraidConnectionResource#windows_connector_json}
  */
  readonly windowsConnectorJson?: string;
  /**
  * Windows connector JSON configuration (write-only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#windows_connector_json_wo EntraidConnectionResource#windows_connector_json_wo}
  */
  readonly windowsConnectorJsonWo?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#wo_version EntraidConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource saviynt_entraid_connection_resource}
*/
export class EntraidConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_entraid_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EntraidConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EntraidConnectionResource to import
  * @param importFromId The id of the existing EntraidConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EntraidConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_entraid_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/entraid_connection_resource saviynt_entraid_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntraidConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: EntraidConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_entraid_connection_resource',
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
    this._aadTenantId = config.aadTenantId;
    this._accessToken = config.accessToken;
    this._accessTokenWo = config.accessTokenWo;
    this._accountAttributes = config.accountAttributes;
    this._accountImportFields = config.accountImportFields;
    this._accountsFilter = config.accountsFilter;
    this._addAccessJson = config.addAccessJson;
    this._addAccessToEntitlementJson = config.addAccessToEntitlementJson;
    this._authenticationEndpoint = config.authenticationEndpoint;
    this._azureManagementEndpoint = config.azureManagementEndpoint;
    this._azureMgmtAccessToken = config.azureMgmtAccessToken;
    this._azureMgmtAccessTokenWo = config.azureMgmtAccessTokenWo;
    this._changePassJson = config.changePassJson;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._clientSecretWo = config.clientSecretWo;
    this._configJson = config.configJson;
    this._connectionJson = config.connectionJson;
    this._connectionJsonWo = config.connectionJsonWo;
    this._connectionName = config.connectionName;
    this._createAccountJson = config.createAccountJson;
    this._createChannelJson = config.createChannelJson;
    this._createGroupJson = config.createGroupJson;
    this._createNewEndpoints = config.createNewEndpoints;
    this._createServicePrincipalJson = config.createServicePrincipalJson;
    this._createTeamJson = config.createTeamJson;
    this._createUsers = config.createUsers;
    this._defaultsavroles = config.defaultsavroles;
    this._deleteGroupJson = config.deleteGroupJson;
    this._deltaTokensJson = config.deltaTokensJson;
    this._description = config.description;
    this._disableAccountJson = config.disableAccountJson;
    this._emailTemplate = config.emailTemplate;
    this._enableAccountJson = config.enableAccountJson;
    this._endpointsFilter = config.endpointsFilter;
    this._enhancedDirectoryRoles = config.enhancedDirectoryRoles;
    this._entitlementAttribute = config.entitlementAttribute;
    this._entitlementFilterJson = config.entitlementFilterJson;
    this._importDepth = config.importDepth;
    this._importUserJson = config.importUserJson;
    this._managedAccountType = config.managedAccountType;
    this._microsoftGraphEndpoint = config.microsoftGraphEndpoint;
    this._modifyUserDataJson = config.modifyUserDataJson;
    this._pamConfig = config.pamConfig;
    this._removeAccessFromEntitlementJson = config.removeAccessFromEntitlementJson;
    this._removeAccessJson = config.removeAccessJson;
    this._removeAccountJson = config.removeAccountJson;
    this._removeServicePrincipalJson = config.removeServicePrincipalJson;
    this._saveInVault = config.saveInVault;
    this._serviceAccountAttributes = config.serviceAccountAttributes;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._updateAccountJson = config.updateAccountJson;
    this._updateGroupJson = config.updateGroupJson;
    this._updateServicePrincipalJson = config.updateServicePrincipalJson;
    this._updateUserJson = config.updateUserJson;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._windowsConnectorJson = config.windowsConnectorJson;
    this._windowsConnectorJsonWo = config.windowsConnectorJsonWo;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aad_tenant_id - computed: false, optional: false, required: true
  private _aadTenantId?: string; 
  public get aadTenantId() {
    return this.getStringAttribute('aad_tenant_id');
  }
  public set aadTenantId(value: string) {
    this._aadTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aadTenantIdInput() {
    return this._aadTenantId;
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // access_token_wo - computed: false, optional: true, required: false
  private _accessTokenWo?: string; 
  public get accessTokenWo() {
    return this.getStringAttribute('access_token_wo');
  }
  public set accessTokenWo(value: string) {
    this._accessTokenWo = value;
  }
  public resetAccessTokenWo() {
    this._accessTokenWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenWoInput() {
    return this._accessTokenWo;
  }

  // account_attributes - computed: true, optional: true, required: false
  private _accountAttributes?: string; 
  public get accountAttributes() {
    return this.getStringAttribute('account_attributes');
  }
  public set accountAttributes(value: string) {
    this._accountAttributes = value;
  }
  public resetAccountAttributes() {
    this._accountAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAttributesInput() {
    return this._accountAttributes;
  }

  // account_import_fields - computed: true, optional: true, required: false
  private _accountImportFields?: string; 
  public get accountImportFields() {
    return this.getStringAttribute('account_import_fields');
  }
  public set accountImportFields(value: string) {
    this._accountImportFields = value;
  }
  public resetAccountImportFields() {
    this._accountImportFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountImportFieldsInput() {
    return this._accountImportFields;
  }

  // accounts_filter - computed: true, optional: true, required: false
  private _accountsFilter?: string; 
  public get accountsFilter() {
    return this.getStringAttribute('accounts_filter');
  }
  public set accountsFilter(value: string) {
    this._accountsFilter = value;
  }
  public resetAccountsFilter() {
    this._accountsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsFilterInput() {
    return this._accountsFilter;
  }

  // add_access_json - computed: true, optional: true, required: false
  private _addAccessJson?: string; 
  public get addAccessJson() {
    return this.getStringAttribute('add_access_json');
  }
  public set addAccessJson(value: string) {
    this._addAccessJson = value;
  }
  public resetAddAccessJson() {
    this._addAccessJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAccessJsonInput() {
    return this._addAccessJson;
  }

  // add_access_to_entitlement_json - computed: true, optional: true, required: false
  private _addAccessToEntitlementJson?: string; 
  public get addAccessToEntitlementJson() {
    return this.getStringAttribute('add_access_to_entitlement_json');
  }
  public set addAccessToEntitlementJson(value: string) {
    this._addAccessToEntitlementJson = value;
  }
  public resetAddAccessToEntitlementJson() {
    this._addAccessToEntitlementJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAccessToEntitlementJsonInput() {
    return this._addAccessToEntitlementJson;
  }

  // authentication_endpoint - computed: true, optional: true, required: false
  private _authenticationEndpoint?: string; 
  public get authenticationEndpoint() {
    return this.getStringAttribute('authentication_endpoint');
  }
  public set authenticationEndpoint(value: string) {
    this._authenticationEndpoint = value;
  }
  public resetAuthenticationEndpoint() {
    this._authenticationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEndpointInput() {
    return this._authenticationEndpoint;
  }

  // azure_management_endpoint - computed: true, optional: true, required: false
  private _azureManagementEndpoint?: string; 
  public get azureManagementEndpoint() {
    return this.getStringAttribute('azure_management_endpoint');
  }
  public set azureManagementEndpoint(value: string) {
    this._azureManagementEndpoint = value;
  }
  public resetAzureManagementEndpoint() {
    this._azureManagementEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureManagementEndpointInput() {
    return this._azureManagementEndpoint;
  }

  // azure_mgmt_access_token - computed: false, optional: true, required: false
  private _azureMgmtAccessToken?: string; 
  public get azureMgmtAccessToken() {
    return this.getStringAttribute('azure_mgmt_access_token');
  }
  public set azureMgmtAccessToken(value: string) {
    this._azureMgmtAccessToken = value;
  }
  public resetAzureMgmtAccessToken() {
    this._azureMgmtAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMgmtAccessTokenInput() {
    return this._azureMgmtAccessToken;
  }

  // azure_mgmt_access_token_wo - computed: false, optional: true, required: false
  private _azureMgmtAccessTokenWo?: string; 
  public get azureMgmtAccessTokenWo() {
    return this.getStringAttribute('azure_mgmt_access_token_wo');
  }
  public set azureMgmtAccessTokenWo(value: string) {
    this._azureMgmtAccessTokenWo = value;
  }
  public resetAzureMgmtAccessTokenWo() {
    this._azureMgmtAccessTokenWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMgmtAccessTokenWoInput() {
    return this._azureMgmtAccessTokenWo;
  }

  // change_pass_json - computed: true, optional: true, required: false
  private _changePassJson?: string; 
  public get changePassJson() {
    return this.getStringAttribute('change_pass_json');
  }
  public set changePassJson(value: string) {
    this._changePassJson = value;
  }
  public resetChangePassJson() {
    this._changePassJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePassJsonInput() {
    return this._changePassJson;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
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

  // connection_json - computed: false, optional: true, required: false
  private _connectionJson?: string; 
  public get connectionJson() {
    return this.getStringAttribute('connection_json');
  }
  public set connectionJson(value: string) {
    this._connectionJson = value;
  }
  public resetConnectionJson() {
    this._connectionJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionJsonInput() {
    return this._connectionJson;
  }

  // connection_json_wo - computed: false, optional: true, required: false
  private _connectionJsonWo?: string; 
  public get connectionJsonWo() {
    return this.getStringAttribute('connection_json_wo');
  }
  public set connectionJsonWo(value: string) {
    this._connectionJsonWo = value;
  }
  public resetConnectionJsonWo() {
    this._connectionJsonWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionJsonWoInput() {
    return this._connectionJsonWo;
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

  // create_account_json - computed: true, optional: true, required: false
  private _createAccountJson?: string; 
  public get createAccountJson() {
    return this.getStringAttribute('create_account_json');
  }
  public set createAccountJson(value: string) {
    this._createAccountJson = value;
  }
  public resetCreateAccountJson() {
    this._createAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAccountJsonInput() {
    return this._createAccountJson;
  }

  // create_channel_json - computed: true, optional: true, required: false
  private _createChannelJson?: string; 
  public get createChannelJson() {
    return this.getStringAttribute('create_channel_json');
  }
  public set createChannelJson(value: string) {
    this._createChannelJson = value;
  }
  public resetCreateChannelJson() {
    this._createChannelJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createChannelJsonInput() {
    return this._createChannelJson;
  }

  // create_group_json - computed: true, optional: true, required: false
  private _createGroupJson?: string; 
  public get createGroupJson() {
    return this.getStringAttribute('create_group_json');
  }
  public set createGroupJson(value: string) {
    this._createGroupJson = value;
  }
  public resetCreateGroupJson() {
    this._createGroupJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createGroupJsonInput() {
    return this._createGroupJson;
  }

  // create_new_endpoints - computed: true, optional: true, required: false
  private _createNewEndpoints?: string; 
  public get createNewEndpoints() {
    return this.getStringAttribute('create_new_endpoints');
  }
  public set createNewEndpoints(value: string) {
    this._createNewEndpoints = value;
  }
  public resetCreateNewEndpoints() {
    this._createNewEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewEndpointsInput() {
    return this._createNewEndpoints;
  }

  // create_service_principal_json - computed: true, optional: true, required: false
  private _createServicePrincipalJson?: string; 
  public get createServicePrincipalJson() {
    return this.getStringAttribute('create_service_principal_json');
  }
  public set createServicePrincipalJson(value: string) {
    this._createServicePrincipalJson = value;
  }
  public resetCreateServicePrincipalJson() {
    this._createServicePrincipalJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createServicePrincipalJsonInput() {
    return this._createServicePrincipalJson;
  }

  // create_team_json - computed: true, optional: true, required: false
  private _createTeamJson?: string; 
  public get createTeamJson() {
    return this.getStringAttribute('create_team_json');
  }
  public set createTeamJson(value: string) {
    this._createTeamJson = value;
  }
  public resetCreateTeamJson() {
    this._createTeamJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTeamJsonInput() {
    return this._createTeamJson;
  }

  // create_users - computed: true, optional: true, required: false
  private _createUsers?: string; 
  public get createUsers() {
    return this.getStringAttribute('create_users');
  }
  public set createUsers(value: string) {
    this._createUsers = value;
  }
  public resetCreateUsers() {
    this._createUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUsersInput() {
    return this._createUsers;
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

  // delete_group_json - computed: true, optional: true, required: false
  private _deleteGroupJson?: string; 
  public get deleteGroupJson() {
    return this.getStringAttribute('delete_group_json');
  }
  public set deleteGroupJson(value: string) {
    this._deleteGroupJson = value;
  }
  public resetDeleteGroupJson() {
    this._deleteGroupJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteGroupJsonInput() {
    return this._deleteGroupJson;
  }

  // delta_tokens_json - computed: true, optional: true, required: false
  private _deltaTokensJson?: string; 
  public get deltaTokensJson() {
    return this.getStringAttribute('delta_tokens_json');
  }
  public set deltaTokensJson(value: string) {
    this._deltaTokensJson = value;
  }
  public resetDeltaTokensJson() {
    this._deltaTokensJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTokensJsonInput() {
    return this._deltaTokensJson;
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

  // disable_account_json - computed: true, optional: true, required: false
  private _disableAccountJson?: string; 
  public get disableAccountJson() {
    return this.getStringAttribute('disable_account_json');
  }
  public set disableAccountJson(value: string) {
    this._disableAccountJson = value;
  }
  public resetDisableAccountJson() {
    this._disableAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAccountJsonInput() {
    return this._disableAccountJson;
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

  // enable_account_json - computed: true, optional: true, required: false
  private _enableAccountJson?: string; 
  public get enableAccountJson() {
    return this.getStringAttribute('enable_account_json');
  }
  public set enableAccountJson(value: string) {
    this._enableAccountJson = value;
  }
  public resetEnableAccountJson() {
    this._enableAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccountJsonInput() {
    return this._enableAccountJson;
  }

  // endpoints_filter - computed: true, optional: true, required: false
  private _endpointsFilter?: string; 
  public get endpointsFilter() {
    return this.getStringAttribute('endpoints_filter');
  }
  public set endpointsFilter(value: string) {
    this._endpointsFilter = value;
  }
  public resetEndpointsFilter() {
    this._endpointsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsFilterInput() {
    return this._endpointsFilter;
  }

  // enhanced_directory_roles - computed: true, optional: true, required: false
  private _enhancedDirectoryRoles?: string; 
  public get enhancedDirectoryRoles() {
    return this.getStringAttribute('enhanced_directory_roles');
  }
  public set enhancedDirectoryRoles(value: string) {
    this._enhancedDirectoryRoles = value;
  }
  public resetEnhancedDirectoryRoles() {
    this._enhancedDirectoryRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedDirectoryRolesInput() {
    return this._enhancedDirectoryRoles;
  }

  // entitlement_attribute - computed: true, optional: true, required: false
  private _entitlementAttribute?: string; 
  public get entitlementAttribute() {
    return this.getStringAttribute('entitlement_attribute');
  }
  public set entitlementAttribute(value: string) {
    this._entitlementAttribute = value;
  }
  public resetEntitlementAttribute() {
    this._entitlementAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementAttributeInput() {
    return this._entitlementAttribute;
  }

  // entitlement_filter_json - computed: true, optional: true, required: false
  private _entitlementFilterJson?: string; 
  public get entitlementFilterJson() {
    return this.getStringAttribute('entitlement_filter_json');
  }
  public set entitlementFilterJson(value: string) {
    this._entitlementFilterJson = value;
  }
  public resetEntitlementFilterJson() {
    this._entitlementFilterJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementFilterJsonInput() {
    return this._entitlementFilterJson;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_depth - computed: true, optional: true, required: false
  private _importDepth?: string; 
  public get importDepth() {
    return this.getStringAttribute('import_depth');
  }
  public set importDepth(value: string) {
    this._importDepth = value;
  }
  public resetImportDepth() {
    this._importDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importDepthInput() {
    return this._importDepth;
  }

  // import_user_json - computed: true, optional: true, required: false
  private _importUserJson?: string; 
  public get importUserJson() {
    return this.getStringAttribute('import_user_json');
  }
  public set importUserJson(value: string) {
    this._importUserJson = value;
  }
  public resetImportUserJson() {
    this._importUserJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importUserJsonInput() {
    return this._importUserJson;
  }

  // managed_account_type - computed: true, optional: true, required: false
  private _managedAccountType?: string; 
  public get managedAccountType() {
    return this.getStringAttribute('managed_account_type');
  }
  public set managedAccountType(value: string) {
    this._managedAccountType = value;
  }
  public resetManagedAccountType() {
    this._managedAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAccountTypeInput() {
    return this._managedAccountType;
  }

  // microsoft_graph_endpoint - computed: true, optional: true, required: false
  private _microsoftGraphEndpoint?: string; 
  public get microsoftGraphEndpoint() {
    return this.getStringAttribute('microsoft_graph_endpoint');
  }
  public set microsoftGraphEndpoint(value: string) {
    this._microsoftGraphEndpoint = value;
  }
  public resetMicrosoftGraphEndpoint() {
    this._microsoftGraphEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftGraphEndpointInput() {
    return this._microsoftGraphEndpoint;
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

  // remove_access_from_entitlement_json - computed: true, optional: true, required: false
  private _removeAccessFromEntitlementJson?: string; 
  public get removeAccessFromEntitlementJson() {
    return this.getStringAttribute('remove_access_from_entitlement_json');
  }
  public set removeAccessFromEntitlementJson(value: string) {
    this._removeAccessFromEntitlementJson = value;
  }
  public resetRemoveAccessFromEntitlementJson() {
    this._removeAccessFromEntitlementJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAccessFromEntitlementJsonInput() {
    return this._removeAccessFromEntitlementJson;
  }

  // remove_access_json - computed: true, optional: true, required: false
  private _removeAccessJson?: string; 
  public get removeAccessJson() {
    return this.getStringAttribute('remove_access_json');
  }
  public set removeAccessJson(value: string) {
    this._removeAccessJson = value;
  }
  public resetRemoveAccessJson() {
    this._removeAccessJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAccessJsonInput() {
    return this._removeAccessJson;
  }

  // remove_account_json - computed: true, optional: true, required: false
  private _removeAccountJson?: string; 
  public get removeAccountJson() {
    return this.getStringAttribute('remove_account_json');
  }
  public set removeAccountJson(value: string) {
    this._removeAccountJson = value;
  }
  public resetRemoveAccountJson() {
    this._removeAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAccountJsonInput() {
    return this._removeAccountJson;
  }

  // remove_service_principal_json - computed: true, optional: true, required: false
  private _removeServicePrincipalJson?: string; 
  public get removeServicePrincipalJson() {
    return this.getStringAttribute('remove_service_principal_json');
  }
  public set removeServicePrincipalJson(value: string) {
    this._removeServicePrincipalJson = value;
  }
  public resetRemoveServicePrincipalJson() {
    this._removeServicePrincipalJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeServicePrincipalJsonInput() {
    return this._removeServicePrincipalJson;
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

  // service_account_attributes - computed: true, optional: true, required: false
  private _serviceAccountAttributes?: string; 
  public get serviceAccountAttributes() {
    return this.getStringAttribute('service_account_attributes');
  }
  public set serviceAccountAttributes(value: string) {
    this._serviceAccountAttributes = value;
  }
  public resetServiceAccountAttributes() {
    this._serviceAccountAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountAttributesInput() {
    return this._serviceAccountAttributes;
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

  // update_account_json - computed: true, optional: true, required: false
  private _updateAccountJson?: string; 
  public get updateAccountJson() {
    return this.getStringAttribute('update_account_json');
  }
  public set updateAccountJson(value: string) {
    this._updateAccountJson = value;
  }
  public resetUpdateAccountJson() {
    this._updateAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAccountJsonInput() {
    return this._updateAccountJson;
  }

  // update_group_json - computed: true, optional: true, required: false
  private _updateGroupJson?: string; 
  public get updateGroupJson() {
    return this.getStringAttribute('update_group_json');
  }
  public set updateGroupJson(value: string) {
    this._updateGroupJson = value;
  }
  public resetUpdateGroupJson() {
    this._updateGroupJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateGroupJsonInput() {
    return this._updateGroupJson;
  }

  // update_service_principal_json - computed: true, optional: true, required: false
  private _updateServicePrincipalJson?: string; 
  public get updateServicePrincipalJson() {
    return this.getStringAttribute('update_service_principal_json');
  }
  public set updateServicePrincipalJson(value: string) {
    this._updateServicePrincipalJson = value;
  }
  public resetUpdateServicePrincipalJson() {
    this._updateServicePrincipalJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateServicePrincipalJsonInput() {
    return this._updateServicePrincipalJson;
  }

  // update_user_json - computed: true, optional: true, required: false
  private _updateUserJson?: string; 
  public get updateUserJson() {
    return this.getStringAttribute('update_user_json');
  }
  public set updateUserJson(value: string) {
    this._updateUserJson = value;
  }
  public resetUpdateUserJson() {
    this._updateUserJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUserJsonInput() {
    return this._updateUserJson;
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

  // windows_connector_json - computed: false, optional: true, required: false
  private _windowsConnectorJson?: string; 
  public get windowsConnectorJson() {
    return this.getStringAttribute('windows_connector_json');
  }
  public set windowsConnectorJson(value: string) {
    this._windowsConnectorJson = value;
  }
  public resetWindowsConnectorJson() {
    this._windowsConnectorJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsConnectorJsonInput() {
    return this._windowsConnectorJson;
  }

  // windows_connector_json_wo - computed: false, optional: true, required: false
  private _windowsConnectorJsonWo?: string; 
  public get windowsConnectorJsonWo() {
    return this.getStringAttribute('windows_connector_json_wo');
  }
  public set windowsConnectorJsonWo(value: string) {
    this._windowsConnectorJsonWo = value;
  }
  public resetWindowsConnectorJsonWo() {
    this._windowsConnectorJsonWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsConnectorJsonWoInput() {
    return this._windowsConnectorJsonWo;
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
      aad_tenant_id: cdktf.stringToTerraform(this._aadTenantId),
      access_token: cdktf.stringToTerraform(this._accessToken),
      access_token_wo: cdktf.stringToTerraform(this._accessTokenWo),
      account_attributes: cdktf.stringToTerraform(this._accountAttributes),
      account_import_fields: cdktf.stringToTerraform(this._accountImportFields),
      accounts_filter: cdktf.stringToTerraform(this._accountsFilter),
      add_access_json: cdktf.stringToTerraform(this._addAccessJson),
      add_access_to_entitlement_json: cdktf.stringToTerraform(this._addAccessToEntitlementJson),
      authentication_endpoint: cdktf.stringToTerraform(this._authenticationEndpoint),
      azure_management_endpoint: cdktf.stringToTerraform(this._azureManagementEndpoint),
      azure_mgmt_access_token: cdktf.stringToTerraform(this._azureMgmtAccessToken),
      azure_mgmt_access_token_wo: cdktf.stringToTerraform(this._azureMgmtAccessTokenWo),
      change_pass_json: cdktf.stringToTerraform(this._changePassJson),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_wo: cdktf.stringToTerraform(this._clientSecretWo),
      config_json: cdktf.stringToTerraform(this._configJson),
      connection_json: cdktf.stringToTerraform(this._connectionJson),
      connection_json_wo: cdktf.stringToTerraform(this._connectionJsonWo),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      create_account_json: cdktf.stringToTerraform(this._createAccountJson),
      create_channel_json: cdktf.stringToTerraform(this._createChannelJson),
      create_group_json: cdktf.stringToTerraform(this._createGroupJson),
      create_new_endpoints: cdktf.stringToTerraform(this._createNewEndpoints),
      create_service_principal_json: cdktf.stringToTerraform(this._createServicePrincipalJson),
      create_team_json: cdktf.stringToTerraform(this._createTeamJson),
      create_users: cdktf.stringToTerraform(this._createUsers),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      delete_group_json: cdktf.stringToTerraform(this._deleteGroupJson),
      delta_tokens_json: cdktf.stringToTerraform(this._deltaTokensJson),
      description: cdktf.stringToTerraform(this._description),
      disable_account_json: cdktf.stringToTerraform(this._disableAccountJson),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      enable_account_json: cdktf.stringToTerraform(this._enableAccountJson),
      endpoints_filter: cdktf.stringToTerraform(this._endpointsFilter),
      enhanced_directory_roles: cdktf.stringToTerraform(this._enhancedDirectoryRoles),
      entitlement_attribute: cdktf.stringToTerraform(this._entitlementAttribute),
      entitlement_filter_json: cdktf.stringToTerraform(this._entitlementFilterJson),
      import_depth: cdktf.stringToTerraform(this._importDepth),
      import_user_json: cdktf.stringToTerraform(this._importUserJson),
      managed_account_type: cdktf.stringToTerraform(this._managedAccountType),
      microsoft_graph_endpoint: cdktf.stringToTerraform(this._microsoftGraphEndpoint),
      modify_user_data_json: cdktf.stringToTerraform(this._modifyUserDataJson),
      pam_config: cdktf.stringToTerraform(this._pamConfig),
      remove_access_from_entitlement_json: cdktf.stringToTerraform(this._removeAccessFromEntitlementJson),
      remove_access_json: cdktf.stringToTerraform(this._removeAccessJson),
      remove_account_json: cdktf.stringToTerraform(this._removeAccountJson),
      remove_service_principal_json: cdktf.stringToTerraform(this._removeServicePrincipalJson),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      service_account_attributes: cdktf.stringToTerraform(this._serviceAccountAttributes),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      update_account_json: cdktf.stringToTerraform(this._updateAccountJson),
      update_group_json: cdktf.stringToTerraform(this._updateGroupJson),
      update_service_principal_json: cdktf.stringToTerraform(this._updateServicePrincipalJson),
      update_user_json: cdktf.stringToTerraform(this._updateUserJson),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      windows_connector_json: cdktf.stringToTerraform(this._windowsConnectorJson),
      windows_connector_json_wo: cdktf.stringToTerraform(this._windowsConnectorJsonWo),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aad_tenant_id: {
        value: cdktf.stringToHclTerraform(this._aadTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_token_wo: {
        value: cdktf.stringToHclTerraform(this._accessTokenWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_attributes: {
        value: cdktf.stringToHclTerraform(this._accountAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_import_fields: {
        value: cdktf.stringToHclTerraform(this._accountImportFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounts_filter: {
        value: cdktf.stringToHclTerraform(this._accountsFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_access_json: {
        value: cdktf.stringToHclTerraform(this._addAccessJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_access_to_entitlement_json: {
        value: cdktf.stringToHclTerraform(this._addAccessToEntitlementJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_endpoint: {
        value: cdktf.stringToHclTerraform(this._authenticationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_management_endpoint: {
        value: cdktf.stringToHclTerraform(this._azureManagementEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_mgmt_access_token: {
        value: cdktf.stringToHclTerraform(this._azureMgmtAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_mgmt_access_token_wo: {
        value: cdktf.stringToHclTerraform(this._azureMgmtAccessTokenWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_pass_json: {
        value: cdktf.stringToHclTerraform(this._changePassJson),
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
      config_json: {
        value: cdktf.stringToHclTerraform(this._configJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_json: {
        value: cdktf.stringToHclTerraform(this._connectionJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_json_wo: {
        value: cdktf.stringToHclTerraform(this._connectionJsonWo),
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
      create_account_json: {
        value: cdktf.stringToHclTerraform(this._createAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_channel_json: {
        value: cdktf.stringToHclTerraform(this._createChannelJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_group_json: {
        value: cdktf.stringToHclTerraform(this._createGroupJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_new_endpoints: {
        value: cdktf.stringToHclTerraform(this._createNewEndpoints),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_service_principal_json: {
        value: cdktf.stringToHclTerraform(this._createServicePrincipalJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_team_json: {
        value: cdktf.stringToHclTerraform(this._createTeamJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_users: {
        value: cdktf.stringToHclTerraform(this._createUsers),
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
      delete_group_json: {
        value: cdktf.stringToHclTerraform(this._deleteGroupJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delta_tokens_json: {
        value: cdktf.stringToHclTerraform(this._deltaTokensJson),
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
      disable_account_json: {
        value: cdktf.stringToHclTerraform(this._disableAccountJson),
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
      enable_account_json: {
        value: cdktf.stringToHclTerraform(this._enableAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints_filter: {
        value: cdktf.stringToHclTerraform(this._endpointsFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_directory_roles: {
        value: cdktf.stringToHclTerraform(this._enhancedDirectoryRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_attribute: {
        value: cdktf.stringToHclTerraform(this._entitlementAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_filter_json: {
        value: cdktf.stringToHclTerraform(this._entitlementFilterJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_depth: {
        value: cdktf.stringToHclTerraform(this._importDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_user_json: {
        value: cdktf.stringToHclTerraform(this._importUserJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_account_type: {
        value: cdktf.stringToHclTerraform(this._managedAccountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microsoft_graph_endpoint: {
        value: cdktf.stringToHclTerraform(this._microsoftGraphEndpoint),
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
      pam_config: {
        value: cdktf.stringToHclTerraform(this._pamConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_access_from_entitlement_json: {
        value: cdktf.stringToHclTerraform(this._removeAccessFromEntitlementJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_access_json: {
        value: cdktf.stringToHclTerraform(this._removeAccessJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_account_json: {
        value: cdktf.stringToHclTerraform(this._removeAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_service_principal_json: {
        value: cdktf.stringToHclTerraform(this._removeServicePrincipalJson),
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
      service_account_attributes: {
        value: cdktf.stringToHclTerraform(this._serviceAccountAttributes),
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
      update_account_json: {
        value: cdktf.stringToHclTerraform(this._updateAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_group_json: {
        value: cdktf.stringToHclTerraform(this._updateGroupJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_service_principal_json: {
        value: cdktf.stringToHclTerraform(this._updateServicePrincipalJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_user_json: {
        value: cdktf.stringToHclTerraform(this._updateUserJson),
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
      windows_connector_json: {
        value: cdktf.stringToHclTerraform(this._windowsConnectorJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windows_connector_json_wo: {
        value: cdktf.stringToHclTerraform(this._windowsConnectorJsonWo),
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
