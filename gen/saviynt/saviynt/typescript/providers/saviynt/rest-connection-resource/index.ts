// https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON to add access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#add_access_json RestConnectionResource#add_access_json}
  */
  readonly addAccessJson?: string;
  /**
  * JSON to add FFID access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#add_ffid_access_json RestConnectionResource#add_ffid_access_json}
  */
  readonly addFfidAccessJson?: string;
  /**
  * For CUA configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#app_type RestConnectionResource#app_type}
  */
  readonly appType?: string;
  /**
  * The ApplicationDiscoveryJSON attribute is specifically implemented for ServiceNow application discovery, allowing automated discovery and import of applications from ServiceNow instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#application_discovery_json RestConnectionResource#application_discovery_json}
  */
  readonly applicationDiscoveryJson?: string;
  /**
  * JSON to change a user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#change_pass_json RestConnectionResource#change_pass_json}
  */
  readonly changePassJson?: string;
  /**
  * General configuration JSON for the REST connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#config_json RestConnectionResource#config_json}
  */
  readonly configJson?: string;
  /**
  * Dynamic JSON configuration for the connection. Must be a valid JSON object string. Either the connection_json field or the connection_json_wo field must be populated to set the connection_json attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#connection_json RestConnectionResource#connection_json}
  */
  readonly connectionJson?: string;
  /**
  * Dynamic JSON configuration for the connection (write-only). Must be a valid JSON object string. Either the connection_json field or the connection_json_wo field must be populated to set the connection_json attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#connection_json_wo RestConnectionResource#connection_json_wo}
  */
  readonly connectionJsonWo?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#connection_name RestConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * JSON to create an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#create_account_json RestConnectionResource#create_account_json}
  */
  readonly createAccountJson?: string;
  /**
  * The three entitlement JSON attributes (Create, Update, Delete) are part of a comprehensive entitlement management system for REST connectors, with supporting constants and service classes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#create_entitlement_json RestConnectionResource#create_entitlement_json}
  */
  readonly createEntitlementJson?: string;
  /**
  * JSON to create a ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#create_ticket_json RestConnectionResource#create_ticket_json}
  */
  readonly createTicketJson?: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#defaultsavroles RestConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * The three entitlement JSON attributes (Create, Update, Delete) are part of a comprehensive entitlement management system for REST connectors, with supporting constants and service classes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#delete_entitlement_json RestConnectionResource#delete_entitlement_json}
  */
  readonly deleteEntitlementJson?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#description RestConnectionResource#description}
  */
  readonly description?: string;
  /**
  * JSON configuration to disable an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#disable_account_json RestConnectionResource#disable_account_json}
  */
  readonly disableAccountJson?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#email_template RestConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * JSON configuration to enable an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#enable_account_json RestConnectionResource#enable_account_json}
  */
  readonly enableAccountJson?: string;
  /**
  * Filter criteria for endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#endpoints_filter RestConnectionResource#endpoints_filter}
  */
  readonly endpointsFilter?: string;
  /**
  * JSON for importing accounts and entitlements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#import_account_ent_json RestConnectionResource#import_account_ent_json}
  */
  readonly importAccountEntJson?: string;
  /**
  * JSON for importing users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#import_user_json RestConnectionResource#import_user_json}
  */
  readonly importUserJson?: string;
  /**
  * JSON for modifying user data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#modify_user_data_json RestConnectionResource#modify_user_data_json}
  */
  readonly modifyUserDataJson?: string;
  /**
  * PAM configuration JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#pam_config RestConnectionResource#pam_config}
  */
  readonly pamConfig?: string;
  /**
  * JSON defining the password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#passwd_policy_json RestConnectionResource#passwd_policy_json}
  */
  readonly passwdPolicyJson?: string;
  /**
  * JSON to remove access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#remove_access_json RestConnectionResource#remove_access_json}
  */
  readonly removeAccessJson?: string;
  /**
  * JSON to remove an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#remove_account_json RestConnectionResource#remove_account_json}
  */
  readonly removeAccountJson?: string;
  /**
  * JSON to remove FFID access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#remove_ffid_access_json RestConnectionResource#remove_ffid_access_json}
  */
  readonly removeFfidAccessJson?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#save_in_vault RestConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * JSON to send OTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#send_otp_json RestConnectionResource#send_otp_json}
  */
  readonly sendOtpJson?: string;
  /**
  * JSON configuration for status thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#status_threshold_config RestConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  * JSON to check ticket status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#ticket_status_json RestConnectionResource#ticket_status_json}
  */
  readonly ticketStatusJson?: string;
  /**
  * JSON to update an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#update_account_json RestConnectionResource#update_account_json}
  */
  readonly updateAccountJson?: string;
  /**
  * The three entitlement JSON attributes (Create, Update, Delete) are part of a comprehensive entitlement management system for REST connectors, with supporting constants and service classes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#update_entitlement_json RestConnectionResource#update_entitlement_json}
  */
  readonly updateEntitlementJson?: string;
  /**
  * JSON to update a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#update_user_json RestConnectionResource#update_user_json}
  */
  readonly updateUserJson?: string;
  /**
  * JSON to validate OTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#validate_otp_json RestConnectionResource#validate_otp_json}
  */
  readonly validateOtpJson?: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#vault_configuration RestConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#vault_connection RestConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#wo_version RestConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource saviynt_rest_connection_resource}
*/
export class RestConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_rest_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RestConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RestConnectionResource to import
  * @param importFromId The id of the existing RestConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RestConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_rest_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/rest_connection_resource saviynt_rest_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: RestConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_rest_connection_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.1',
        providerVersionConstraint: '0.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addAccessJson = config.addAccessJson;
    this._addFfidAccessJson = config.addFfidAccessJson;
    this._appType = config.appType;
    this._applicationDiscoveryJson = config.applicationDiscoveryJson;
    this._changePassJson = config.changePassJson;
    this._configJson = config.configJson;
    this._connectionJson = config.connectionJson;
    this._connectionJsonWo = config.connectionJsonWo;
    this._connectionName = config.connectionName;
    this._createAccountJson = config.createAccountJson;
    this._createEntitlementJson = config.createEntitlementJson;
    this._createTicketJson = config.createTicketJson;
    this._defaultsavroles = config.defaultsavroles;
    this._deleteEntitlementJson = config.deleteEntitlementJson;
    this._description = config.description;
    this._disableAccountJson = config.disableAccountJson;
    this._emailTemplate = config.emailTemplate;
    this._enableAccountJson = config.enableAccountJson;
    this._endpointsFilter = config.endpointsFilter;
    this._importAccountEntJson = config.importAccountEntJson;
    this._importUserJson = config.importUserJson;
    this._modifyUserDataJson = config.modifyUserDataJson;
    this._pamConfig = config.pamConfig;
    this._passwdPolicyJson = config.passwdPolicyJson;
    this._removeAccessJson = config.removeAccessJson;
    this._removeAccountJson = config.removeAccountJson;
    this._removeFfidAccessJson = config.removeFfidAccessJson;
    this._saveInVault = config.saveInVault;
    this._sendOtpJson = config.sendOtpJson;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._ticketStatusJson = config.ticketStatusJson;
    this._updateAccountJson = config.updateAccountJson;
    this._updateEntitlementJson = config.updateEntitlementJson;
    this._updateUserJson = config.updateUserJson;
    this._validateOtpJson = config.validateOtpJson;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // add_ffid_access_json - computed: true, optional: true, required: false
  private _addFfidAccessJson?: string; 
  public get addFfidAccessJson() {
    return this.getStringAttribute('add_ffid_access_json');
  }
  public set addFfidAccessJson(value: string) {
    this._addFfidAccessJson = value;
  }
  public resetAddFfidAccessJson() {
    this._addFfidAccessJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addFfidAccessJsonInput() {
    return this._addFfidAccessJson;
  }

  // app_type - computed: true, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // application_discovery_json - computed: true, optional: true, required: false
  private _applicationDiscoveryJson?: string; 
  public get applicationDiscoveryJson() {
    return this.getStringAttribute('application_discovery_json');
  }
  public set applicationDiscoveryJson(value: string) {
    this._applicationDiscoveryJson = value;
  }
  public resetApplicationDiscoveryJson() {
    this._applicationDiscoveryJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDiscoveryJsonInput() {
    return this._applicationDiscoveryJson;
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

  // create_entitlement_json - computed: true, optional: true, required: false
  private _createEntitlementJson?: string; 
  public get createEntitlementJson() {
    return this.getStringAttribute('create_entitlement_json');
  }
  public set createEntitlementJson(value: string) {
    this._createEntitlementJson = value;
  }
  public resetCreateEntitlementJson() {
    this._createEntitlementJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createEntitlementJsonInput() {
    return this._createEntitlementJson;
  }

  // create_ticket_json - computed: true, optional: true, required: false
  private _createTicketJson?: string; 
  public get createTicketJson() {
    return this.getStringAttribute('create_ticket_json');
  }
  public set createTicketJson(value: string) {
    this._createTicketJson = value;
  }
  public resetCreateTicketJson() {
    this._createTicketJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTicketJsonInput() {
    return this._createTicketJson;
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

  // delete_entitlement_json - computed: true, optional: true, required: false
  private _deleteEntitlementJson?: string; 
  public get deleteEntitlementJson() {
    return this.getStringAttribute('delete_entitlement_json');
  }
  public set deleteEntitlementJson(value: string) {
    this._deleteEntitlementJson = value;
  }
  public resetDeleteEntitlementJson() {
    this._deleteEntitlementJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEntitlementJsonInput() {
    return this._deleteEntitlementJson;
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

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_account_ent_json - computed: true, optional: true, required: false
  private _importAccountEntJson?: string; 
  public get importAccountEntJson() {
    return this.getStringAttribute('import_account_ent_json');
  }
  public set importAccountEntJson(value: string) {
    this._importAccountEntJson = value;
  }
  public resetImportAccountEntJson() {
    this._importAccountEntJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importAccountEntJsonInput() {
    return this._importAccountEntJson;
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

  // passwd_policy_json - computed: true, optional: true, required: false
  private _passwdPolicyJson?: string; 
  public get passwdPolicyJson() {
    return this.getStringAttribute('passwd_policy_json');
  }
  public set passwdPolicyJson(value: string) {
    this._passwdPolicyJson = value;
  }
  public resetPasswdPolicyJson() {
    this._passwdPolicyJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdPolicyJsonInput() {
    return this._passwdPolicyJson;
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

  // remove_ffid_access_json - computed: true, optional: true, required: false
  private _removeFfidAccessJson?: string; 
  public get removeFfidAccessJson() {
    return this.getStringAttribute('remove_ffid_access_json');
  }
  public set removeFfidAccessJson(value: string) {
    this._removeFfidAccessJson = value;
  }
  public resetRemoveFfidAccessJson() {
    this._removeFfidAccessJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFfidAccessJsonInput() {
    return this._removeFfidAccessJson;
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

  // send_otp_json - computed: true, optional: true, required: false
  private _sendOtpJson?: string; 
  public get sendOtpJson() {
    return this.getStringAttribute('send_otp_json');
  }
  public set sendOtpJson(value: string) {
    this._sendOtpJson = value;
  }
  public resetSendOtpJson() {
    this._sendOtpJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOtpJsonInput() {
    return this._sendOtpJson;
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

  // ticket_status_json - computed: true, optional: true, required: false
  private _ticketStatusJson?: string; 
  public get ticketStatusJson() {
    return this.getStringAttribute('ticket_status_json');
  }
  public set ticketStatusJson(value: string) {
    this._ticketStatusJson = value;
  }
  public resetTicketStatusJson() {
    this._ticketStatusJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketStatusJsonInput() {
    return this._ticketStatusJson;
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

  // update_entitlement_json - computed: true, optional: true, required: false
  private _updateEntitlementJson?: string; 
  public get updateEntitlementJson() {
    return this.getStringAttribute('update_entitlement_json');
  }
  public set updateEntitlementJson(value: string) {
    this._updateEntitlementJson = value;
  }
  public resetUpdateEntitlementJson() {
    this._updateEntitlementJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateEntitlementJsonInput() {
    return this._updateEntitlementJson;
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

  // validate_otp_json - computed: true, optional: true, required: false
  private _validateOtpJson?: string; 
  public get validateOtpJson() {
    return this.getStringAttribute('validate_otp_json');
  }
  public set validateOtpJson(value: string) {
    this._validateOtpJson = value;
  }
  public resetValidateOtpJson() {
    this._validateOtpJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateOtpJsonInput() {
    return this._validateOtpJson;
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
      add_access_json: cdktf.stringToTerraform(this._addAccessJson),
      add_ffid_access_json: cdktf.stringToTerraform(this._addFfidAccessJson),
      app_type: cdktf.stringToTerraform(this._appType),
      application_discovery_json: cdktf.stringToTerraform(this._applicationDiscoveryJson),
      change_pass_json: cdktf.stringToTerraform(this._changePassJson),
      config_json: cdktf.stringToTerraform(this._configJson),
      connection_json: cdktf.stringToTerraform(this._connectionJson),
      connection_json_wo: cdktf.stringToTerraform(this._connectionJsonWo),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      create_account_json: cdktf.stringToTerraform(this._createAccountJson),
      create_entitlement_json: cdktf.stringToTerraform(this._createEntitlementJson),
      create_ticket_json: cdktf.stringToTerraform(this._createTicketJson),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      delete_entitlement_json: cdktf.stringToTerraform(this._deleteEntitlementJson),
      description: cdktf.stringToTerraform(this._description),
      disable_account_json: cdktf.stringToTerraform(this._disableAccountJson),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      enable_account_json: cdktf.stringToTerraform(this._enableAccountJson),
      endpoints_filter: cdktf.stringToTerraform(this._endpointsFilter),
      import_account_ent_json: cdktf.stringToTerraform(this._importAccountEntJson),
      import_user_json: cdktf.stringToTerraform(this._importUserJson),
      modify_user_data_json: cdktf.stringToTerraform(this._modifyUserDataJson),
      pam_config: cdktf.stringToTerraform(this._pamConfig),
      passwd_policy_json: cdktf.stringToTerraform(this._passwdPolicyJson),
      remove_access_json: cdktf.stringToTerraform(this._removeAccessJson),
      remove_account_json: cdktf.stringToTerraform(this._removeAccountJson),
      remove_ffid_access_json: cdktf.stringToTerraform(this._removeFfidAccessJson),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      send_otp_json: cdktf.stringToTerraform(this._sendOtpJson),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      ticket_status_json: cdktf.stringToTerraform(this._ticketStatusJson),
      update_account_json: cdktf.stringToTerraform(this._updateAccountJson),
      update_entitlement_json: cdktf.stringToTerraform(this._updateEntitlementJson),
      update_user_json: cdktf.stringToTerraform(this._updateUserJson),
      validate_otp_json: cdktf.stringToTerraform(this._validateOtpJson),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_access_json: {
        value: cdktf.stringToHclTerraform(this._addAccessJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_ffid_access_json: {
        value: cdktf.stringToHclTerraform(this._addFfidAccessJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_type: {
        value: cdktf.stringToHclTerraform(this._appType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_discovery_json: {
        value: cdktf.stringToHclTerraform(this._applicationDiscoveryJson),
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
      create_entitlement_json: {
        value: cdktf.stringToHclTerraform(this._createEntitlementJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_ticket_json: {
        value: cdktf.stringToHclTerraform(this._createTicketJson),
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
      delete_entitlement_json: {
        value: cdktf.stringToHclTerraform(this._deleteEntitlementJson),
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
      import_account_ent_json: {
        value: cdktf.stringToHclTerraform(this._importAccountEntJson),
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
      passwd_policy_json: {
        value: cdktf.stringToHclTerraform(this._passwdPolicyJson),
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
      remove_ffid_access_json: {
        value: cdktf.stringToHclTerraform(this._removeFfidAccessJson),
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
      send_otp_json: {
        value: cdktf.stringToHclTerraform(this._sendOtpJson),
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
      ticket_status_json: {
        value: cdktf.stringToHclTerraform(this._ticketStatusJson),
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
      update_entitlement_json: {
        value: cdktf.stringToHclTerraform(this._updateEntitlementJson),
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
      validate_otp_json: {
        value: cdktf.stringToHclTerraform(this._validateOtpJson),
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
