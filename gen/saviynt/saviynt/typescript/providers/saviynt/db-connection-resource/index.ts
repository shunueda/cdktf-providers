// https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON to specify the query used to check whether an account exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#account_exists_json DbConnectionResource#account_exists_json}
  */
  readonly accountExistsJson?: string;
  /**
  * Accounts Import XML file content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#accounts_import DbConnectionResource#accounts_import}
  */
  readonly accountsImport?: string;
  /**
  * JSON to specify the queries/stored procedures used to change a password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#change_pass_json DbConnectionResource#change_pass_json}
  */
  readonly changePassJson?: string;
  /**
  * JSON to specify the queries/stored procedures used to change a password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#change_pass_json_wo DbConnectionResource#change_pass_json_wo}
  */
  readonly changePassJsonWo?: string;
  /**
  * JSON to specify commands executable on the target server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#cli_command_json DbConnectionResource#cli_command_json}
  */
  readonly cliCommandJson?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#connection_name DbConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * Properties that need to be added when connecting to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#connection_properties DbConnectionResource#connection_properties}
  */
  readonly connectionProperties?: string;
  /**
  * JSON to specify the queries/stored procedures used to create a new account (e.g., randomPassword, task, user, accountName, role, endpoint, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#create_account_json DbConnectionResource#create_account_json}
  */
  readonly createAccountJson?: string;
  /**
  *  JSON to specify the Queries/stored procedures which will be used to Create the New Entitlements. Objects Exposed - (entitlementMgmtObj, task, user, endpoint and all the objects defined in Dynamic Attributes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#create_entitlement_json DbConnectionResource#create_entitlement_json}
  */
  readonly createEntitlementJson?: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#defaultsavroles DbConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * JSON to specify the queries/stored procedures used to delete an account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#delete_account_json DbConnectionResource#delete_account_json}
  */
  readonly deleteAccountJson?: string;
  /**
  *  JSON to specify the Queries/stored procedures which will be used to Delete the Entitlements. Objects Exposed - (entitlementMgmtObj, task, user, endpoint and all the objects defined in Dynamic Attributes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#delete_entitlement_json DbConnectionResource#delete_entitlement_json}
  */
  readonly deleteEntitlementJson?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#description DbConnectionResource#description}
  */
  readonly description?: string;
  /**
  * JSON to specify the queries/stored procedures used to disable an account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#disable_account_json DbConnectionResource#disable_account_json}
  */
  readonly disableAccountJson?: string;
  /**
  * Driver name for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#driver_name DbConnectionResource#driver_name}
  */
  readonly driverName: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#email_template DbConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * JSON to specify the queries/stored procedures used to enable an account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#enable_account_json DbConnectionResource#enable_account_json}
  */
  readonly enableAccountJson?: string;
  /**
  * JSON to specify the Query which will be used to check whether an entitlement exists. Objects Exposed - (entitlementMgmtObj, task, user, endpoint and all the objects defined in Dynamic Attributes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#entitlement_exist_json DbConnectionResource#entitlement_exist_json}
  */
  readonly entitlementExistJson?: string;
  /**
  * Entitlement Value Import XML file content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#entitlement_value_import DbConnectionResource#entitlement_value_import}
  */
  readonly entitlementValueImport?: string;
  /**
  * JSON to specify the queries/stored procedures used to provide access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#grant_access_json DbConnectionResource#grant_access_json}
  */
  readonly grantAccessJson?: string;
  /**
  * Defines the maximum number of records to be processed per page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#max_pagination_size DbConnectionResource#max_pagination_size}
  */
  readonly maxPaginationSize?: string;
  /**
  * Property for MODIFYUSERDATAJSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#modify_user_data_json DbConnectionResource#modify_user_data_json}
  */
  readonly modifyUserDataJson?: string;
  /**
  * Set the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#password DbConnectionResource#password}
  */
  readonly password?: string;
  /**
  * Specify the maximum length for the random password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#password_max_length DbConnectionResource#password_max_length}
  */
  readonly passwordMaxLength?: string;
  /**
  * Specify the minimum length for the random password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#password_min_length DbConnectionResource#password_min_length}
  */
  readonly passwordMinLength?: string;
  /**
  * Specify the number of uppercase alphabets required for the random password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#password_no_of_caps_alpha DbConnectionResource#password_no_of_caps_alpha}
  */
  readonly passwordNoOfCapsAlpha?: string;
  /**
  * Specify the number of digits required for the random password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#password_no_of_digits DbConnectionResource#password_no_of_digits}
  */
  readonly passwordNoOfDigits?: string;
  /**
  * Specify the number of special characters required for the random password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#password_no_of_spl_chars DbConnectionResource#password_no_of_spl_chars}
  */
  readonly passwordNoOfSplChars?: string;
  /**
  * Set the password_wo (write-only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#password_wo DbConnectionResource#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * JSON to specify the queries/stored procedures used to revoke access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#revoke_access_json DbConnectionResource#revoke_access_json}
  */
  readonly revokeAccessJson?: string;
  /**
  * Role Owner Import XML file content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#role_owner_import DbConnectionResource#role_owner_import}
  */
  readonly roleOwnerImport?: string;
  /**
  * Roles Import XML file content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#roles_import DbConnectionResource#roles_import}
  */
  readonly rolesImport?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#save_in_vault DbConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * Configuration for status and threshold (e.g., statusColumn, activeStatus, accountThresholdValue, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#status_threshold_config DbConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  * System Import XML file content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#system_import DbConnectionResource#system_import}
  */
  readonly systemImport?: string;
  /**
  * JSON to specify the queries/stored procedures used to update an existing account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#update_account_json DbConnectionResource#update_account_json}
  */
  readonly updateAccountJson?: string;
  /**
  *  JSON to specify the Queries/stored procedures which will be used to Update the Entitlements. Objects Exposed - (entitlementMgmtObj, task, user, endpoint and all the objects defined in Dynamic Attributes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#update_entitlement_json DbConnectionResource#update_entitlement_json}
  */
  readonly updateEntitlementJson?: string;
  /**
  * JSON to specify the queries/stored procedures used to update user information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#update_user_json DbConnectionResource#update_user_json}
  */
  readonly updateUserJson?: string;
  /**
  * Host Name for connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#url DbConnectionResource#url}
  */
  readonly url: string;
  /**
  * User Import XML file content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#user_import DbConnectionResource#user_import}
  */
  readonly userImport?: string;
  /**
  * Username for connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#username DbConnectionResource#username}
  */
  readonly username: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#vault_configuration DbConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#vault_connection DbConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#wo_version DbConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource saviynt_db_connection_resource}
*/
export class DbConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_db_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbConnectionResource to import
  * @param importFromId The id of the existing DbConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_db_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/db_connection_resource saviynt_db_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DbConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_db_connection_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountExistsJson = config.accountExistsJson;
    this._accountsImport = config.accountsImport;
    this._changePassJson = config.changePassJson;
    this._changePassJsonWo = config.changePassJsonWo;
    this._cliCommandJson = config.cliCommandJson;
    this._connectionName = config.connectionName;
    this._connectionProperties = config.connectionProperties;
    this._createAccountJson = config.createAccountJson;
    this._createEntitlementJson = config.createEntitlementJson;
    this._defaultsavroles = config.defaultsavroles;
    this._deleteAccountJson = config.deleteAccountJson;
    this._deleteEntitlementJson = config.deleteEntitlementJson;
    this._description = config.description;
    this._disableAccountJson = config.disableAccountJson;
    this._driverName = config.driverName;
    this._emailTemplate = config.emailTemplate;
    this._enableAccountJson = config.enableAccountJson;
    this._entitlementExistJson = config.entitlementExistJson;
    this._entitlementValueImport = config.entitlementValueImport;
    this._grantAccessJson = config.grantAccessJson;
    this._maxPaginationSize = config.maxPaginationSize;
    this._modifyUserDataJson = config.modifyUserDataJson;
    this._password = config.password;
    this._passwordMaxLength = config.passwordMaxLength;
    this._passwordMinLength = config.passwordMinLength;
    this._passwordNoOfCapsAlpha = config.passwordNoOfCapsAlpha;
    this._passwordNoOfDigits = config.passwordNoOfDigits;
    this._passwordNoOfSplChars = config.passwordNoOfSplChars;
    this._passwordWo = config.passwordWo;
    this._revokeAccessJson = config.revokeAccessJson;
    this._roleOwnerImport = config.roleOwnerImport;
    this._rolesImport = config.rolesImport;
    this._saveInVault = config.saveInVault;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._systemImport = config.systemImport;
    this._updateAccountJson = config.updateAccountJson;
    this._updateEntitlementJson = config.updateEntitlementJson;
    this._updateUserJson = config.updateUserJson;
    this._url = config.url;
    this._userImport = config.userImport;
    this._username = config.username;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_exists_json - computed: true, optional: true, required: false
  private _accountExistsJson?: string; 
  public get accountExistsJson() {
    return this.getStringAttribute('account_exists_json');
  }
  public set accountExistsJson(value: string) {
    this._accountExistsJson = value;
  }
  public resetAccountExistsJson() {
    this._accountExistsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountExistsJsonInput() {
    return this._accountExistsJson;
  }

  // accounts_import - computed: true, optional: true, required: false
  private _accountsImport?: string; 
  public get accountsImport() {
    return this.getStringAttribute('accounts_import');
  }
  public set accountsImport(value: string) {
    this._accountsImport = value;
  }
  public resetAccountsImport() {
    this._accountsImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsImportInput() {
    return this._accountsImport;
  }

  // change_pass_json - computed: false, optional: true, required: false
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

  // change_pass_json_wo - computed: false, optional: true, required: false
  private _changePassJsonWo?: string; 
  public get changePassJsonWo() {
    return this.getStringAttribute('change_pass_json_wo');
  }
  public set changePassJsonWo(value: string) {
    this._changePassJsonWo = value;
  }
  public resetChangePassJsonWo() {
    this._changePassJsonWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePassJsonWoInput() {
    return this._changePassJsonWo;
  }

  // cli_command_json - computed: true, optional: true, required: false
  private _cliCommandJson?: string; 
  public get cliCommandJson() {
    return this.getStringAttribute('cli_command_json');
  }
  public set cliCommandJson(value: string) {
    this._cliCommandJson = value;
  }
  public resetCliCommandJson() {
    this._cliCommandJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliCommandJsonInput() {
    return this._cliCommandJson;
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

  // connection_properties - computed: true, optional: true, required: false
  private _connectionProperties?: string; 
  public get connectionProperties() {
    return this.getStringAttribute('connection_properties');
  }
  public set connectionProperties(value: string) {
    this._connectionProperties = value;
  }
  public resetConnectionProperties() {
    this._connectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPropertiesInput() {
    return this._connectionProperties;
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

  // delete_account_json - computed: true, optional: true, required: false
  private _deleteAccountJson?: string; 
  public get deleteAccountJson() {
    return this.getStringAttribute('delete_account_json');
  }
  public set deleteAccountJson(value: string) {
    this._deleteAccountJson = value;
  }
  public resetDeleteAccountJson() {
    this._deleteAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAccountJsonInput() {
    return this._deleteAccountJson;
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

  // driver_name - computed: false, optional: false, required: true
  private _driverName?: string; 
  public get driverName() {
    return this.getStringAttribute('driver_name');
  }
  public set driverName(value: string) {
    this._driverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNameInput() {
    return this._driverName;
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

  // entitlement_exist_json - computed: true, optional: true, required: false
  private _entitlementExistJson?: string; 
  public get entitlementExistJson() {
    return this.getStringAttribute('entitlement_exist_json');
  }
  public set entitlementExistJson(value: string) {
    this._entitlementExistJson = value;
  }
  public resetEntitlementExistJson() {
    this._entitlementExistJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementExistJsonInput() {
    return this._entitlementExistJson;
  }

  // entitlement_value_import - computed: true, optional: true, required: false
  private _entitlementValueImport?: string; 
  public get entitlementValueImport() {
    return this.getStringAttribute('entitlement_value_import');
  }
  public set entitlementValueImport(value: string) {
    this._entitlementValueImport = value;
  }
  public resetEntitlementValueImport() {
    this._entitlementValueImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementValueImportInput() {
    return this._entitlementValueImport;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // grant_access_json - computed: true, optional: true, required: false
  private _grantAccessJson?: string; 
  public get grantAccessJson() {
    return this.getStringAttribute('grant_access_json');
  }
  public set grantAccessJson(value: string) {
    this._grantAccessJson = value;
  }
  public resetGrantAccessJson() {
    this._grantAccessJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantAccessJsonInput() {
    return this._grantAccessJson;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_pagination_size - computed: true, optional: true, required: false
  private _maxPaginationSize?: string; 
  public get maxPaginationSize() {
    return this.getStringAttribute('max_pagination_size');
  }
  public set maxPaginationSize(value: string) {
    this._maxPaginationSize = value;
  }
  public resetMaxPaginationSize() {
    this._maxPaginationSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPaginationSizeInput() {
    return this._maxPaginationSize;
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

  // password_max_length - computed: true, optional: true, required: false
  private _passwordMaxLength?: string; 
  public get passwordMaxLength() {
    return this.getStringAttribute('password_max_length');
  }
  public set passwordMaxLength(value: string) {
    this._passwordMaxLength = value;
  }
  public resetPasswordMaxLength() {
    this._passwordMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMaxLengthInput() {
    return this._passwordMaxLength;
  }

  // password_min_length - computed: true, optional: true, required: false
  private _passwordMinLength?: string; 
  public get passwordMinLength() {
    return this.getStringAttribute('password_min_length');
  }
  public set passwordMinLength(value: string) {
    this._passwordMinLength = value;
  }
  public resetPasswordMinLength() {
    this._passwordMinLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMinLengthInput() {
    return this._passwordMinLength;
  }

  // password_no_of_caps_alpha - computed: true, optional: true, required: false
  private _passwordNoOfCapsAlpha?: string; 
  public get passwordNoOfCapsAlpha() {
    return this.getStringAttribute('password_no_of_caps_alpha');
  }
  public set passwordNoOfCapsAlpha(value: string) {
    this._passwordNoOfCapsAlpha = value;
  }
  public resetPasswordNoOfCapsAlpha() {
    this._passwordNoOfCapsAlpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoOfCapsAlphaInput() {
    return this._passwordNoOfCapsAlpha;
  }

  // password_no_of_digits - computed: true, optional: true, required: false
  private _passwordNoOfDigits?: string; 
  public get passwordNoOfDigits() {
    return this.getStringAttribute('password_no_of_digits');
  }
  public set passwordNoOfDigits(value: string) {
    this._passwordNoOfDigits = value;
  }
  public resetPasswordNoOfDigits() {
    this._passwordNoOfDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoOfDigitsInput() {
    return this._passwordNoOfDigits;
  }

  // password_no_of_spl_chars - computed: true, optional: true, required: false
  private _passwordNoOfSplChars?: string; 
  public get passwordNoOfSplChars() {
    return this.getStringAttribute('password_no_of_spl_chars');
  }
  public set passwordNoOfSplChars(value: string) {
    this._passwordNoOfSplChars = value;
  }
  public resetPasswordNoOfSplChars() {
    this._passwordNoOfSplChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoOfSplCharsInput() {
    return this._passwordNoOfSplChars;
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

  // revoke_access_json - computed: true, optional: true, required: false
  private _revokeAccessJson?: string; 
  public get revokeAccessJson() {
    return this.getStringAttribute('revoke_access_json');
  }
  public set revokeAccessJson(value: string) {
    this._revokeAccessJson = value;
  }
  public resetRevokeAccessJson() {
    this._revokeAccessJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeAccessJsonInput() {
    return this._revokeAccessJson;
  }

  // role_owner_import - computed: true, optional: true, required: false
  private _roleOwnerImport?: string; 
  public get roleOwnerImport() {
    return this.getStringAttribute('role_owner_import');
  }
  public set roleOwnerImport(value: string) {
    this._roleOwnerImport = value;
  }
  public resetRoleOwnerImport() {
    this._roleOwnerImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleOwnerImportInput() {
    return this._roleOwnerImport;
  }

  // roles_import - computed: true, optional: true, required: false
  private _rolesImport?: string; 
  public get rolesImport() {
    return this.getStringAttribute('roles_import');
  }
  public set rolesImport(value: string) {
    this._rolesImport = value;
  }
  public resetRolesImport() {
    this._rolesImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesImportInput() {
    return this._rolesImport;
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

  // system_import - computed: true, optional: true, required: false
  private _systemImport?: string; 
  public get systemImport() {
    return this.getStringAttribute('system_import');
  }
  public set systemImport(value: string) {
    this._systemImport = value;
  }
  public resetSystemImport() {
    this._systemImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemImportInput() {
    return this._systemImport;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_import - computed: true, optional: true, required: false
  private _userImport?: string; 
  public get userImport() {
    return this.getStringAttribute('user_import');
  }
  public set userImport(value: string) {
    this._userImport = value;
  }
  public resetUserImport() {
    this._userImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userImportInput() {
    return this._userImport;
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
      account_exists_json: cdktf.stringToTerraform(this._accountExistsJson),
      accounts_import: cdktf.stringToTerraform(this._accountsImport),
      change_pass_json: cdktf.stringToTerraform(this._changePassJson),
      change_pass_json_wo: cdktf.stringToTerraform(this._changePassJsonWo),
      cli_command_json: cdktf.stringToTerraform(this._cliCommandJson),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      connection_properties: cdktf.stringToTerraform(this._connectionProperties),
      create_account_json: cdktf.stringToTerraform(this._createAccountJson),
      create_entitlement_json: cdktf.stringToTerraform(this._createEntitlementJson),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      delete_account_json: cdktf.stringToTerraform(this._deleteAccountJson),
      delete_entitlement_json: cdktf.stringToTerraform(this._deleteEntitlementJson),
      description: cdktf.stringToTerraform(this._description),
      disable_account_json: cdktf.stringToTerraform(this._disableAccountJson),
      driver_name: cdktf.stringToTerraform(this._driverName),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      enable_account_json: cdktf.stringToTerraform(this._enableAccountJson),
      entitlement_exist_json: cdktf.stringToTerraform(this._entitlementExistJson),
      entitlement_value_import: cdktf.stringToTerraform(this._entitlementValueImport),
      grant_access_json: cdktf.stringToTerraform(this._grantAccessJson),
      max_pagination_size: cdktf.stringToTerraform(this._maxPaginationSize),
      modify_user_data_json: cdktf.stringToTerraform(this._modifyUserDataJson),
      password: cdktf.stringToTerraform(this._password),
      password_max_length: cdktf.stringToTerraform(this._passwordMaxLength),
      password_min_length: cdktf.stringToTerraform(this._passwordMinLength),
      password_no_of_caps_alpha: cdktf.stringToTerraform(this._passwordNoOfCapsAlpha),
      password_no_of_digits: cdktf.stringToTerraform(this._passwordNoOfDigits),
      password_no_of_spl_chars: cdktf.stringToTerraform(this._passwordNoOfSplChars),
      password_wo: cdktf.stringToTerraform(this._passwordWo),
      revoke_access_json: cdktf.stringToTerraform(this._revokeAccessJson),
      role_owner_import: cdktf.stringToTerraform(this._roleOwnerImport),
      roles_import: cdktf.stringToTerraform(this._rolesImport),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      system_import: cdktf.stringToTerraform(this._systemImport),
      update_account_json: cdktf.stringToTerraform(this._updateAccountJson),
      update_entitlement_json: cdktf.stringToTerraform(this._updateEntitlementJson),
      update_user_json: cdktf.stringToTerraform(this._updateUserJson),
      url: cdktf.stringToTerraform(this._url),
      user_import: cdktf.stringToTerraform(this._userImport),
      username: cdktf.stringToTerraform(this._username),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_exists_json: {
        value: cdktf.stringToHclTerraform(this._accountExistsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounts_import: {
        value: cdktf.stringToHclTerraform(this._accountsImport),
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
      change_pass_json_wo: {
        value: cdktf.stringToHclTerraform(this._changePassJsonWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_command_json: {
        value: cdktf.stringToHclTerraform(this._cliCommandJson),
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
      connection_properties: {
        value: cdktf.stringToHclTerraform(this._connectionProperties),
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
      defaultsavroles: {
        value: cdktf.stringToHclTerraform(this._defaultsavroles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_account_json: {
        value: cdktf.stringToHclTerraform(this._deleteAccountJson),
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
      driver_name: {
        value: cdktf.stringToHclTerraform(this._driverName),
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
      entitlement_exist_json: {
        value: cdktf.stringToHclTerraform(this._entitlementExistJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_value_import: {
        value: cdktf.stringToHclTerraform(this._entitlementValueImport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_access_json: {
        value: cdktf.stringToHclTerraform(this._grantAccessJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_pagination_size: {
        value: cdktf.stringToHclTerraform(this._maxPaginationSize),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_max_length: {
        value: cdktf.stringToHclTerraform(this._passwordMaxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_min_length: {
        value: cdktf.stringToHclTerraform(this._passwordMinLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_no_of_caps_alpha: {
        value: cdktf.stringToHclTerraform(this._passwordNoOfCapsAlpha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_no_of_digits: {
        value: cdktf.stringToHclTerraform(this._passwordNoOfDigits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_no_of_spl_chars: {
        value: cdktf.stringToHclTerraform(this._passwordNoOfSplChars),
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
      revoke_access_json: {
        value: cdktf.stringToHclTerraform(this._revokeAccessJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_owner_import: {
        value: cdktf.stringToHclTerraform(this._roleOwnerImport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles_import: {
        value: cdktf.stringToHclTerraform(this._rolesImport),
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
      system_import: {
        value: cdktf.stringToHclTerraform(this._systemImport),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_import: {
        value: cdktf.stringToHclTerraform(this._userImport),
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
