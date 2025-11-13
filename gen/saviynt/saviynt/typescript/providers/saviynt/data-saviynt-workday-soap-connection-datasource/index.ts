// https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/workday_soap_connection_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntWorkdaySoapConnectionDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store connection_attributes in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/workday_soap_connection_datasource#authenticate DataSaviyntWorkdaySoapConnectionDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * The key of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/workday_soap_connection_datasource#connection_key DataSaviyntWorkdaySoapConnectionDatasource#connection_key}
  */
  readonly connectionKey?: number;
  /**
  * The name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/workday_soap_connection_datasource#connection_name DataSaviyntWorkdaySoapConnectionDatasource#connection_name}
  */
  readonly connectionName?: string;
}
export interface DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesConnectionTimeoutConfig {
}

export function dataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToTerraform(struct?: DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToHclTerraform(struct?: DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // read_timeout - computed: true, optional: false, required: false
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }

  // retry_count - computed: true, optional: false, required: false
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }

  // retry_failure_status_code - computed: true, optional: false, required: false
  public get retryFailureStatusCode() {
    return this.getNumberAttribute('retry_failure_status_code');
  }

  // retry_wait - computed: true, optional: false, required: false
  public get retryWait() {
    return this.getNumberAttribute('retry_wait');
  }

  // retry_wait_max_value - computed: true, optional: false, required: false
  public get retryWaitMaxValue() {
    return this.getNumberAttribute('retry_wait_max_value');
  }

  // token_refresh_max_try_count - computed: true, optional: false, required: false
  public get tokenRefreshMaxTryCount() {
    return this.getNumberAttribute('token_refresh_max_try_count');
  }
}
export interface DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributes {
}

export function dataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesToTerraform(struct?: DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesToHclTerraform(struct?: DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts_import_json - computed: true, optional: false, required: false
  public get accountsImportJson() {
    return this.getStringAttribute('accounts_import_json');
  }

  // change_pass_json - computed: true, optional: false, required: false
  public get changePassJson() {
    return this.getStringAttribute('change_pass_json');
  }

  // combined_create_request - computed: true, optional: false, required: false
  public get combinedCreateRequest() {
    return this.getStringAttribute('combined_create_request');
  }

  // connection_json - computed: true, optional: false, required: false
  public get connectionJson() {
    return this.getStringAttribute('connection_json');
  }

  // connection_timeout_config - computed: true, optional: false, required: false
  private _connectionTimeoutConfig = new DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference(this, "connection_timeout_config");
  public get connectionTimeoutConfig() {
    return this._connectionTimeoutConfig;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // create_account_json - computed: true, optional: false, required: false
  public get createAccountJson() {
    return this.getStringAttribute('create_account_json');
  }

  // custom_config - computed: true, optional: false, required: false
  public get customConfig() {
    return this.getStringAttribute('custom_config');
  }

  // data_to_import - computed: true, optional: false, required: false
  public get dataToImport() {
    return this.getStringAttribute('data_to_import');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // delete_account_json - computed: true, optional: false, required: false
  public get deleteAccountJson() {
    return this.getStringAttribute('delete_account_json');
  }

  // disable_account_json - computed: true, optional: false, required: false
  public get disableAccountJson() {
    return this.getStringAttribute('disable_account_json');
  }

  // enable_account_json - computed: true, optional: false, required: false
  public get enableAccountJson() {
    return this.getStringAttribute('enable_account_json');
  }

  // grant_access_json - computed: true, optional: false, required: false
  public get grantAccessJson() {
    return this.getStringAttribute('grant_access_json');
  }

  // hr_import_json - computed: true, optional: false, required: false
  public get hrImportJson() {
    return this.getStringAttribute('hr_import_json');
  }

  // is_timeout_config_validated - computed: true, optional: false, required: false
  public get isTimeoutConfigValidated() {
    return this.getBooleanAttribute('is_timeout_config_validated');
  }

  // is_timeout_supported - computed: true, optional: false, required: false
  public get isTimeoutSupported() {
    return this.getBooleanAttribute('is_timeout_supported');
  }

  // modify_user_data_json - computed: true, optional: false, required: false
  public get modifyUserDataJson() {
    return this.getStringAttribute('modify_user_data_json');
  }

  // page_size - computed: true, optional: false, required: false
  public get pageSize() {
    return this.getStringAttribute('page_size');
  }

  // pam_config - computed: true, optional: false, required: false
  public get pamConfig() {
    return this.getStringAttribute('pam_config');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_max_length - computed: true, optional: false, required: false
  public get passwordMaxLength() {
    return this.getStringAttribute('password_max_length');
  }

  // password_min_length - computed: true, optional: false, required: false
  public get passwordMinLength() {
    return this.getStringAttribute('password_min_length');
  }

  // password_noofcapsalpha - computed: true, optional: false, required: false
  public get passwordNoofcapsalpha() {
    return this.getStringAttribute('password_noofcapsalpha');
  }

  // password_noofdigits - computed: true, optional: false, required: false
  public get passwordNoofdigits() {
    return this.getStringAttribute('password_noofdigits');
  }

  // password_noofsplchars - computed: true, optional: false, required: false
  public get passwordNoofsplchars() {
    return this.getStringAttribute('password_noofsplchars');
  }

  // password_type - computed: true, optional: false, required: false
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }

  // responsepath_pageresults - computed: true, optional: false, required: false
  public get responsepathPageresults() {
    return this.getStringAttribute('responsepath_pageresults');
  }

  // responsepath_totalresults - computed: true, optional: false, required: false
  public get responsepathTotalresults() {
    return this.getStringAttribute('responsepath_totalresults');
  }

  // responsepath_userlist - computed: true, optional: false, required: false
  public get responsepathUserlist() {
    return this.getStringAttribute('responsepath_userlist');
  }

  // revoke_access_json - computed: true, optional: false, required: false
  public get revokeAccessJson() {
    return this.getStringAttribute('revoke_access_json');
  }

  // soap_endpoint - computed: true, optional: false, required: false
  public get soapEndpoint() {
    return this.getStringAttribute('soap_endpoint');
  }

  // update_account_json - computed: true, optional: false, required: false
  public get updateAccountJson() {
    return this.getStringAttribute('update_account_json');
  }

  // update_user_json - computed: true, optional: false, required: false
  public get updateUserJson() {
    return this.getStringAttribute('update_user_json');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/workday_soap_connection_datasource saviynt_workday_soap_connection_datasource}
*/
export class DataSaviyntWorkdaySoapConnectionDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_workday_soap_connection_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntWorkdaySoapConnectionDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntWorkdaySoapConnectionDatasource to import
  * @param importFromId The id of the existing DataSaviyntWorkdaySoapConnectionDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/workday_soap_connection_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntWorkdaySoapConnectionDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_workday_soap_connection_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/workday_soap_connection_datasource saviynt_workday_soap_connection_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntWorkdaySoapConnectionDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntWorkdaySoapConnectionDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_workday_soap_connection_datasource',
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
    this._authenticate = config.authenticate;
    this._connectionKey = config.connectionKey;
    this._connectionName = config.connectionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticate - computed: false, optional: false, required: true
  private _authenticate?: boolean | cdktf.IResolvable; 
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }
  public set authenticate(value: boolean | cdktf.IResolvable) {
    this._authenticate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // connection_attributes - computed: true, optional: false, required: false
  private _connectionAttributes = new DataSaviyntWorkdaySoapConnectionDatasourceConnectionAttributesOutputReference(this, "connection_attributes");
  public get connectionAttributes() {
    return this._connectionAttributes;
  }

  // connection_key - computed: true, optional: true, required: false
  private _connectionKey?: number; 
  public get connectionKey() {
    return this.getNumberAttribute('connection_key');
  }
  public set connectionKey(value: number) {
    this._connectionKey = value;
  }
  public resetConnectionKey() {
    this._connectionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionKeyInput() {
    return this._connectionKey;
  }

  // connection_name - computed: true, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // default_sav_roles - computed: true, optional: false, required: false
  public get defaultSavRoles() {
    return this.getStringAttribute('default_sav_roles');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_template - computed: true, optional: false, required: false
  public get emailTemplate() {
    return this.getStringAttribute('email_template');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      connection_key: cdktf.numberToTerraform(this._connectionKey),
      connection_name: cdktf.stringToTerraform(this._connectionName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticate: {
        value: cdktf.booleanToHclTerraform(this._authenticate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_key: {
        value: cdktf.numberToHclTerraform(this._connectionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
