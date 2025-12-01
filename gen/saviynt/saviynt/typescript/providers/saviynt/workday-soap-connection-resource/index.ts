// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkdaySoapConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON configuration for accounts import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#accounts_import_json WorkdaySoapConnectionResource#accounts_import_json}
  */
  readonly accountsImportJson?: string;
  /**
  * JSON configuration for password changes. Either this or change_pass_json_wo must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#change_pass_json WorkdaySoapConnectionResource#change_pass_json}
  */
  readonly changePassJson?: string;
  /**
  * Write-only JSON configuration for password changes. Either this or change_pass_json must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#change_pass_json_wo WorkdaySoapConnectionResource#change_pass_json_wo}
  */
  readonly changePassJsonWo?: string;
  /**
  * Combined create request configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#combined_create_request WorkdaySoapConnectionResource#combined_create_request}
  */
  readonly combinedCreateRequest?: string;
  /**
  * General connection JSON configuration. Either this or connection_json_wo must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#connection_json WorkdaySoapConnectionResource#connection_json}
  */
  readonly connectionJson?: string;
  /**
  * Write-only general connection JSON configuration. Either this or connection_json must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#connection_json_wo WorkdaySoapConnectionResource#connection_json_wo}
  */
  readonly connectionJsonWo?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#connection_name WorkdaySoapConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * JSON configuration for account creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#create_account_json WorkdaySoapConnectionResource#create_account_json}
  */
  readonly createAccountJson?: string;
  /**
  * Custom configuration JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#custom_config WorkdaySoapConnectionResource#custom_config}
  */
  readonly customConfig?: string;
  /**
  * Specification of data types to import. Example: "Users,Accounts"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#data_to_import WorkdaySoapConnectionResource#data_to_import}
  */
  readonly dataToImport?: string;
  /**
  * Date format for data processing. Example: "yyyy-MM-dd"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#date_format WorkdaySoapConnectionResource#date_format}
  */
  readonly dateFormat?: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#defaultsavroles WorkdaySoapConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * JSON configuration for account deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#delete_account_json WorkdaySoapConnectionResource#delete_account_json}
  */
  readonly deleteAccountJson?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#description WorkdaySoapConnectionResource#description}
  */
  readonly description?: string;
  /**
  * JSON configuration for account disabling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#disable_account_json WorkdaySoapConnectionResource#disable_account_json}
  */
  readonly disableAccountJson?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#email_template WorkdaySoapConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * JSON configuration for account enabling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#enable_account_json WorkdaySoapConnectionResource#enable_account_json}
  */
  readonly enableAccountJson?: string;
  /**
  * JSON configuration for granting access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#grant_access_json WorkdaySoapConnectionResource#grant_access_json}
  */
  readonly grantAccessJson?: string;
  /**
  * JSON configuration for HR data import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#hr_import_json WorkdaySoapConnectionResource#hr_import_json}
  */
  readonly hrImportJson?: string;
  /**
  * JSON configuration for modifying user data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#modify_user_data_json WorkdaySoapConnectionResource#modify_user_data_json}
  */
  readonly modifyUserDataJson?: string;
  /**
  * Number of records per page. Example: "100"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#page_size WorkdaySoapConnectionResource#page_size}
  */
  readonly pageSize?: string;
  /**
  * PAM configuration JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#pam_config WorkdaySoapConnectionResource#pam_config}
  */
  readonly pamConfig?: string;
  /**
  * Password for SOAP authentication. Either this or password_wo must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#password WorkdaySoapConnectionResource#password}
  */
  readonly password?: string;
  /**
  * Maximum password length. Example: "20"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#password_max_length WorkdaySoapConnectionResource#password_max_length}
  */
  readonly passwordMaxLength?: string;
  /**
  * Minimum password length. Example: "8"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#password_min_length WorkdaySoapConnectionResource#password_min_length}
  */
  readonly passwordMinLength?: string;
  /**
  * Number of capital letters required in password. Example: "1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#password_noofcapsalpha WorkdaySoapConnectionResource#password_noofcapsalpha}
  */
  readonly passwordNoofcapsalpha?: string;
  /**
  * Number of digits required in password. Example: "1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#password_noofdigits WorkdaySoapConnectionResource#password_noofdigits}
  */
  readonly passwordNoofdigits?: string;
  /**
  * Number of special characters required in password. Example: "1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#password_noofsplchars WorkdaySoapConnectionResource#password_noofsplchars}
  */
  readonly passwordNoofsplchars?: string;
  /**
  * Type of password authentication. Example: "BASIC"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#password_type WorkdaySoapConnectionResource#password_type}
  */
  readonly passwordType?: string;
  /**
  * Write-only password for SOAP authentication. Either this or password must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#password_wo WorkdaySoapConnectionResource#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Response path for page results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#responsepath_pageresults WorkdaySoapConnectionResource#responsepath_pageresults}
  */
  readonly responsepathPageresults?: string;
  /**
  * Response path for total results count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#responsepath_totalresults WorkdaySoapConnectionResource#responsepath_totalresults}
  */
  readonly responsepathTotalresults?: string;
  /**
  * Response path for user list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#responsepath_userlist WorkdaySoapConnectionResource#responsepath_userlist}
  */
  readonly responsepathUserlist?: string;
  /**
  * JSON configuration for revoking access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#revoke_access_json WorkdaySoapConnectionResource#revoke_access_json}
  */
  readonly revokeAccessJson?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#save_in_vault WorkdaySoapConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * SOAP endpoint URL for Workday. Example: "https://wd2-impl-services1.workday.com/ccx/service/tenant/Human_Resources/v35.0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#soap_endpoint WorkdaySoapConnectionResource#soap_endpoint}
  */
  readonly soapEndpoint?: string;
  /**
  * JSON configuration for account updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#update_account_json WorkdaySoapConnectionResource#update_account_json}
  */
  readonly updateAccountJson?: string;
  /**
  * JSON configuration for user updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#update_user_json WorkdaySoapConnectionResource#update_user_json}
  */
  readonly updateUserJson?: string;
  /**
  * Username for SOAP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#username WorkdaySoapConnectionResource#username}
  */
  readonly username?: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#vault_configuration WorkdaySoapConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#vault_connection WorkdaySoapConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#wo_version WorkdaySoapConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource saviynt_workday_soap_connection_resource}
*/
export class WorkdaySoapConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_workday_soap_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkdaySoapConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkdaySoapConnectionResource to import
  * @param importFromId The id of the existing WorkdaySoapConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkdaySoapConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_workday_soap_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/workday_soap_connection_resource saviynt_workday_soap_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkdaySoapConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkdaySoapConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_workday_soap_connection_resource',
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
    this._accountsImportJson = config.accountsImportJson;
    this._changePassJson = config.changePassJson;
    this._changePassJsonWo = config.changePassJsonWo;
    this._combinedCreateRequest = config.combinedCreateRequest;
    this._connectionJson = config.connectionJson;
    this._connectionJsonWo = config.connectionJsonWo;
    this._connectionName = config.connectionName;
    this._createAccountJson = config.createAccountJson;
    this._customConfig = config.customConfig;
    this._dataToImport = config.dataToImport;
    this._dateFormat = config.dateFormat;
    this._defaultsavroles = config.defaultsavroles;
    this._deleteAccountJson = config.deleteAccountJson;
    this._description = config.description;
    this._disableAccountJson = config.disableAccountJson;
    this._emailTemplate = config.emailTemplate;
    this._enableAccountJson = config.enableAccountJson;
    this._grantAccessJson = config.grantAccessJson;
    this._hrImportJson = config.hrImportJson;
    this._modifyUserDataJson = config.modifyUserDataJson;
    this._pageSize = config.pageSize;
    this._pamConfig = config.pamConfig;
    this._password = config.password;
    this._passwordMaxLength = config.passwordMaxLength;
    this._passwordMinLength = config.passwordMinLength;
    this._passwordNoofcapsalpha = config.passwordNoofcapsalpha;
    this._passwordNoofdigits = config.passwordNoofdigits;
    this._passwordNoofsplchars = config.passwordNoofsplchars;
    this._passwordType = config.passwordType;
    this._passwordWo = config.passwordWo;
    this._responsepathPageresults = config.responsepathPageresults;
    this._responsepathTotalresults = config.responsepathTotalresults;
    this._responsepathUserlist = config.responsepathUserlist;
    this._revokeAccessJson = config.revokeAccessJson;
    this._saveInVault = config.saveInVault;
    this._soapEndpoint = config.soapEndpoint;
    this._updateAccountJson = config.updateAccountJson;
    this._updateUserJson = config.updateUserJson;
    this._username = config.username;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts_import_json - computed: true, optional: true, required: false
  private _accountsImportJson?: string; 
  public get accountsImportJson() {
    return this.getStringAttribute('accounts_import_json');
  }
  public set accountsImportJson(value: string) {
    this._accountsImportJson = value;
  }
  public resetAccountsImportJson() {
    this._accountsImportJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsImportJsonInput() {
    return this._accountsImportJson;
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

  // combined_create_request - computed: true, optional: true, required: false
  private _combinedCreateRequest?: string; 
  public get combinedCreateRequest() {
    return this.getStringAttribute('combined_create_request');
  }
  public set combinedCreateRequest(value: string) {
    this._combinedCreateRequest = value;
  }
  public resetCombinedCreateRequest() {
    this._combinedCreateRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combinedCreateRequestInput() {
    return this._combinedCreateRequest;
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

  // data_to_import - computed: true, optional: true, required: false
  private _dataToImport?: string; 
  public get dataToImport() {
    return this.getStringAttribute('data_to_import');
  }
  public set dataToImport(value: string) {
    this._dataToImport = value;
  }
  public resetDataToImport() {
    this._dataToImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataToImportInput() {
    return this._dataToImport;
  }

  // date_format - computed: true, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
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

  // hr_import_json - computed: true, optional: true, required: false
  private _hrImportJson?: string; 
  public get hrImportJson() {
    return this.getStringAttribute('hr_import_json');
  }
  public set hrImportJson(value: string) {
    this._hrImportJson = value;
  }
  public resetHrImportJson() {
    this._hrImportJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrImportJsonInput() {
    return this._hrImportJson;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // password_noofcapsalpha - computed: true, optional: true, required: false
  private _passwordNoofcapsalpha?: string; 
  public get passwordNoofcapsalpha() {
    return this.getStringAttribute('password_noofcapsalpha');
  }
  public set passwordNoofcapsalpha(value: string) {
    this._passwordNoofcapsalpha = value;
  }
  public resetPasswordNoofcapsalpha() {
    this._passwordNoofcapsalpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoofcapsalphaInput() {
    return this._passwordNoofcapsalpha;
  }

  // password_noofdigits - computed: true, optional: true, required: false
  private _passwordNoofdigits?: string; 
  public get passwordNoofdigits() {
    return this.getStringAttribute('password_noofdigits');
  }
  public set passwordNoofdigits(value: string) {
    this._passwordNoofdigits = value;
  }
  public resetPasswordNoofdigits() {
    this._passwordNoofdigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoofdigitsInput() {
    return this._passwordNoofdigits;
  }

  // password_noofsplchars - computed: true, optional: true, required: false
  private _passwordNoofsplchars?: string; 
  public get passwordNoofsplchars() {
    return this.getStringAttribute('password_noofsplchars');
  }
  public set passwordNoofsplchars(value: string) {
    this._passwordNoofsplchars = value;
  }
  public resetPasswordNoofsplchars() {
    this._passwordNoofsplchars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoofsplcharsInput() {
    return this._passwordNoofsplchars;
  }

  // password_type - computed: true, optional: true, required: false
  private _passwordType?: string; 
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }
  public set passwordType(value: string) {
    this._passwordType = value;
  }
  public resetPasswordType() {
    this._passwordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
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

  // responsepath_pageresults - computed: true, optional: true, required: false
  private _responsepathPageresults?: string; 
  public get responsepathPageresults() {
    return this.getStringAttribute('responsepath_pageresults');
  }
  public set responsepathPageresults(value: string) {
    this._responsepathPageresults = value;
  }
  public resetResponsepathPageresults() {
    this._responsepathPageresults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsepathPageresultsInput() {
    return this._responsepathPageresults;
  }

  // responsepath_totalresults - computed: true, optional: true, required: false
  private _responsepathTotalresults?: string; 
  public get responsepathTotalresults() {
    return this.getStringAttribute('responsepath_totalresults');
  }
  public set responsepathTotalresults(value: string) {
    this._responsepathTotalresults = value;
  }
  public resetResponsepathTotalresults() {
    this._responsepathTotalresults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsepathTotalresultsInput() {
    return this._responsepathTotalresults;
  }

  // responsepath_userlist - computed: true, optional: true, required: false
  private _responsepathUserlist?: string; 
  public get responsepathUserlist() {
    return this.getStringAttribute('responsepath_userlist');
  }
  public set responsepathUserlist(value: string) {
    this._responsepathUserlist = value;
  }
  public resetResponsepathUserlist() {
    this._responsepathUserlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsepathUserlistInput() {
    return this._responsepathUserlist;
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

  // soap_endpoint - computed: true, optional: true, required: false
  private _soapEndpoint?: string; 
  public get soapEndpoint() {
    return this.getStringAttribute('soap_endpoint');
  }
  public set soapEndpoint(value: string) {
    this._soapEndpoint = value;
  }
  public resetSoapEndpoint() {
    this._soapEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapEndpointInput() {
    return this._soapEndpoint;
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
      accounts_import_json: cdktf.stringToTerraform(this._accountsImportJson),
      change_pass_json: cdktf.stringToTerraform(this._changePassJson),
      change_pass_json_wo: cdktf.stringToTerraform(this._changePassJsonWo),
      combined_create_request: cdktf.stringToTerraform(this._combinedCreateRequest),
      connection_json: cdktf.stringToTerraform(this._connectionJson),
      connection_json_wo: cdktf.stringToTerraform(this._connectionJsonWo),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      create_account_json: cdktf.stringToTerraform(this._createAccountJson),
      custom_config: cdktf.stringToTerraform(this._customConfig),
      data_to_import: cdktf.stringToTerraform(this._dataToImport),
      date_format: cdktf.stringToTerraform(this._dateFormat),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      delete_account_json: cdktf.stringToTerraform(this._deleteAccountJson),
      description: cdktf.stringToTerraform(this._description),
      disable_account_json: cdktf.stringToTerraform(this._disableAccountJson),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      enable_account_json: cdktf.stringToTerraform(this._enableAccountJson),
      grant_access_json: cdktf.stringToTerraform(this._grantAccessJson),
      hr_import_json: cdktf.stringToTerraform(this._hrImportJson),
      modify_user_data_json: cdktf.stringToTerraform(this._modifyUserDataJson),
      page_size: cdktf.stringToTerraform(this._pageSize),
      pam_config: cdktf.stringToTerraform(this._pamConfig),
      password: cdktf.stringToTerraform(this._password),
      password_max_length: cdktf.stringToTerraform(this._passwordMaxLength),
      password_min_length: cdktf.stringToTerraform(this._passwordMinLength),
      password_noofcapsalpha: cdktf.stringToTerraform(this._passwordNoofcapsalpha),
      password_noofdigits: cdktf.stringToTerraform(this._passwordNoofdigits),
      password_noofsplchars: cdktf.stringToTerraform(this._passwordNoofsplchars),
      password_type: cdktf.stringToTerraform(this._passwordType),
      password_wo: cdktf.stringToTerraform(this._passwordWo),
      responsepath_pageresults: cdktf.stringToTerraform(this._responsepathPageresults),
      responsepath_totalresults: cdktf.stringToTerraform(this._responsepathTotalresults),
      responsepath_userlist: cdktf.stringToTerraform(this._responsepathUserlist),
      revoke_access_json: cdktf.stringToTerraform(this._revokeAccessJson),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      soap_endpoint: cdktf.stringToTerraform(this._soapEndpoint),
      update_account_json: cdktf.stringToTerraform(this._updateAccountJson),
      update_user_json: cdktf.stringToTerraform(this._updateUserJson),
      username: cdktf.stringToTerraform(this._username),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounts_import_json: {
        value: cdktf.stringToHclTerraform(this._accountsImportJson),
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
      combined_create_request: {
        value: cdktf.stringToHclTerraform(this._combinedCreateRequest),
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
      custom_config: {
        value: cdktf.stringToHclTerraform(this._customConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_to_import: {
        value: cdktf.stringToHclTerraform(this._dataToImport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_format: {
        value: cdktf.stringToHclTerraform(this._dateFormat),
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
      grant_access_json: {
        value: cdktf.stringToHclTerraform(this._grantAccessJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hr_import_json: {
        value: cdktf.stringToHclTerraform(this._hrImportJson),
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
      password_noofcapsalpha: {
        value: cdktf.stringToHclTerraform(this._passwordNoofcapsalpha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_noofdigits: {
        value: cdktf.stringToHclTerraform(this._passwordNoofdigits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_noofsplchars: {
        value: cdktf.stringToHclTerraform(this._passwordNoofsplchars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_type: {
        value: cdktf.stringToHclTerraform(this._passwordType),
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
      responsepath_pageresults: {
        value: cdktf.stringToHclTerraform(this._responsepathPageresults),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsepath_totalresults: {
        value: cdktf.stringToHclTerraform(this._responsepathTotalresults),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsepath_userlist: {
        value: cdktf.stringToHclTerraform(this._responsepathUserlist),
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
      save_in_vault: {
        value: cdktf.stringToHclTerraform(this._saveInVault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soap_endpoint: {
        value: cdktf.stringToHclTerraform(this._soapEndpoint),
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
      update_user_json: {
        value: cdktf.stringToHclTerraform(this._updateUserJson),
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
