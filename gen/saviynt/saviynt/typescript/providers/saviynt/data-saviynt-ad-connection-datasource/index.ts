// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/ad_connection_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntAdConnectionDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store connection_attributes in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/ad_connection_datasource#authenticate DataSaviyntAdConnectionDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * The key of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/ad_connection_datasource#connection_key DataSaviyntAdConnectionDatasource#connection_key}
  */
  readonly connectionKey?: number;
  /**
  * The name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/ad_connection_datasource#connection_name DataSaviyntAdConnectionDatasource#connection_name}
  */
  readonly connectionName?: string;
}
export interface DataSaviyntAdConnectionDatasourceConnectionAttributesConnectionTimeoutConfig {
}

export function dataSaviyntAdConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToTerraform(struct?: DataSaviyntAdConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntAdConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToHclTerraform(struct?: DataSaviyntAdConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntAdConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntAdConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntAdConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined) {
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
export interface DataSaviyntAdConnectionDatasourceConnectionAttributes {
}

export function dataSaviyntAdConnectionDatasourceConnectionAttributesToTerraform(struct?: DataSaviyntAdConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntAdConnectionDatasourceConnectionAttributesToHclTerraform(struct?: DataSaviyntAdConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntAdConnectionDatasourceConnectionAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntAdConnectionDatasourceConnectionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntAdConnectionDatasourceConnectionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_attribute - computed: true, optional: false, required: false
  public get accountAttribute() {
    return this.getStringAttribute('account_attribute');
  }

  // account_name_rule - computed: true, optional: false, required: false
  public get accountNameRule() {
    return this.getStringAttribute('account_name_rule');
  }

  // adv_search - computed: true, optional: false, required: false
  public get advSearch() {
    return this.getStringAttribute('adv_search');
  }

  // advance_filter_json - computed: true, optional: false, required: false
  public get advanceFilterJson() {
    return this.getStringAttribute('advance_filter_json');
  }

  // base - computed: true, optional: false, required: false
  public get base() {
    return this.getStringAttribute('base');
  }

  // check_for_unique - computed: true, optional: false, required: false
  public get checkForUnique() {
    return this.getStringAttribute('check_for_unique');
  }

  // config_json - computed: true, optional: false, required: false
  public get configJson() {
    return this.getStringAttribute('config_json');
  }

  // connection_timeout_config - computed: true, optional: false, required: false
  private _connectionTimeoutConfig = new DataSaviyntAdConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference(this, "connection_timeout_config");
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

  // create_org_json - computed: true, optional: false, required: false
  public get createOrgJson() {
    return this.getStringAttribute('create_org_json');
  }

  // create_update_mappings - computed: true, optional: false, required: false
  public get createUpdateMappings() {
    return this.getStringAttribute('create_update_mappings');
  }

  // dc_locator - computed: true, optional: false, required: false
  public get dcLocator() {
    return this.getStringAttribute('dc_locator');
  }

  // default_user_role - computed: true, optional: false, required: false
  public get defaultUserRole() {
    return this.getStringAttribute('default_user_role');
  }

  // disable_account_json - computed: true, optional: false, required: false
  public get disableAccountJson() {
    return this.getStringAttribute('disable_account_json');
  }

  // enable_account_json - computed: true, optional: false, required: false
  public get enableAccountJson() {
    return this.getStringAttribute('enable_account_json');
  }

  // enable_group_management - computed: true, optional: false, required: false
  public get enableGroupManagement() {
    return this.getStringAttribute('enable_group_management');
  }

  // endpoints_filter - computed: true, optional: false, required: false
  public get endpointsFilter() {
    return this.getStringAttribute('endpoints_filter');
  }

  // enforce_tree_deletion - computed: true, optional: false, required: false
  public get enforceTreeDeletion() {
    return this.getStringAttribute('enforce_tree_deletion');
  }

  // entitlement_attribute - computed: true, optional: false, required: false
  public get entitlementAttribute() {
    return this.getStringAttribute('entitlement_attribute');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // group_import_mapping - computed: true, optional: false, required: false
  public get groupImportMapping() {
    return this.getStringAttribute('group_import_mapping');
  }

  // group_search_base_dn - computed: true, optional: false, required: false
  public get groupSearchBaseDn() {
    return this.getStringAttribute('group_search_base_dn');
  }

  // import_json - computed: true, optional: false, required: false
  public get importJson() {
    return this.getStringAttribute('import_json');
  }

  // incremental_config - computed: true, optional: false, required: false
  public get incrementalConfig() {
    return this.getStringAttribute('incremental_config');
  }

  // is_timeout_config_validated - computed: true, optional: false, required: false
  public get isTimeoutConfigValidated() {
    return this.getBooleanAttribute('is_timeout_config_validated');
  }

  // is_timeout_supported - computed: true, optional: false, required: false
  public get isTimeoutSupported() {
    return this.getBooleanAttribute('is_timeout_supported');
  }

  // last_import_time - computed: true, optional: false, required: false
  public get lastImportTime() {
    return this.getStringAttribute('last_import_time');
  }

  // ldap_or_ad - computed: true, optional: false, required: false
  public get ldapOrAd() {
    return this.getStringAttribute('ldap_or_ad');
  }

  // max_change_number - computed: true, optional: false, required: false
  public get maxChangeNumber() {
    return this.getStringAttribute('max_change_number');
  }

  // modify_user_data_json - computed: true, optional: false, required: false
  public get modifyUserDataJson() {
    return this.getStringAttribute('modify_user_data_json');
  }

  // object_filter - computed: true, optional: false, required: false
  public get objectFilter() {
    return this.getStringAttribute('object_filter');
  }

  // org_base - computed: true, optional: false, required: false
  public get orgBase() {
    return this.getStringAttribute('org_base');
  }

  // org_import_json - computed: true, optional: false, required: false
  public get orgImportJson() {
    return this.getStringAttribute('org_import_json');
  }

  // organization_attribute - computed: true, optional: false, required: false
  public get organizationAttribute() {
    return this.getStringAttribute('organization_attribute');
  }

  // page_size - computed: true, optional: false, required: false
  public get pageSize() {
    return this.getStringAttribute('page_size');
  }

  // pam_config - computed: true, optional: false, required: false
  public get pamConfig() {
    return this.getStringAttribute('pam_config');
  }

  // password_max_length - computed: true, optional: false, required: false
  public get passwordMaxLength() {
    return this.getStringAttribute('password_max_length');
  }

  // password_min_length - computed: true, optional: false, required: false
  public get passwordMinLength() {
    return this.getStringAttribute('password_min_length');
  }

  // password_no_of_caps_alpha - computed: true, optional: false, required: false
  public get passwordNoOfCapsAlpha() {
    return this.getStringAttribute('password_no_of_caps_alpha');
  }

  // password_no_of_digits - computed: true, optional: false, required: false
  public get passwordNoOfDigits() {
    return this.getStringAttribute('password_no_of_digits');
  }

  // password_no_of_spl_chars - computed: true, optional: false, required: false
  public get passwordNoOfSplChars() {
    return this.getStringAttribute('password_no_of_spl_chars');
  }

  // read_operational_attributes - computed: true, optional: false, required: false
  public get readOperationalAttributes() {
    return this.getStringAttribute('read_operational_attributes');
  }

  // remove_account_action - computed: true, optional: false, required: false
  public get removeAccountAction() {
    return this.getStringAttribute('remove_account_action');
  }

  // reset_and_change_password_json - computed: true, optional: false, required: false
  public get resetAndChangePasswordJson() {
    return this.getStringAttribute('reset_and_change_password_json');
  }

  // reuse_account_json - computed: true, optional: false, required: false
  public get reuseAccountJson() {
    return this.getStringAttribute('reuse_account_json');
  }

  // reuse_inactive_account - computed: true, optional: false, required: false
  public get reuseInactiveAccount() {
    return this.getStringAttribute('reuse_inactive_account');
  }

  // save_connection - computed: true, optional: false, required: false
  public get saveConnection() {
    return this.getStringAttribute('save_connection');
  }

  // search_filter - computed: true, optional: false, required: false
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }

  // set_default_page_size - computed: true, optional: false, required: false
  public get setDefaultPageSize() {
    return this.getStringAttribute('set_default_page_size');
  }

  // set_random_password - computed: true, optional: false, required: false
  public get setRandomPassword() {
    return this.getStringAttribute('set_random_password');
  }

  // status_key_json - computed: true, optional: false, required: false
  public get statusKeyJson() {
    return this.getStringAttribute('status_key_json');
  }

  // status_threshold_config - computed: true, optional: false, required: false
  public get statusThresholdConfig() {
    return this.getStringAttribute('status_threshold_config');
  }

  // support_empty_string - computed: true, optional: false, required: false
  public get supportEmptyString() {
    return this.getStringAttribute('support_empty_string');
  }

  // system_name - computed: true, optional: false, required: false
  public get systemName() {
    return this.getStringAttribute('system_name');
  }

  // unlock_account_json - computed: true, optional: false, required: false
  public get unlockAccountJson() {
    return this.getStringAttribute('unlock_account_json');
  }

  // update_account_json - computed: true, optional: false, required: false
  public get updateAccountJson() {
    return this.getStringAttribute('update_account_json');
  }

  // update_org_json - computed: true, optional: false, required: false
  public get updateOrgJson() {
    return this.getStringAttribute('update_org_json');
  }

  // update_user_json - computed: true, optional: false, required: false
  public get updateUserJson() {
    return this.getStringAttribute('update_user_json');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_attribute - computed: true, optional: false, required: false
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/ad_connection_datasource saviynt_ad_connection_datasource}
*/
export class DataSaviyntAdConnectionDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_ad_connection_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntAdConnectionDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntAdConnectionDatasource to import
  * @param importFromId The id of the existing DataSaviyntAdConnectionDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/ad_connection_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntAdConnectionDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_ad_connection_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/data-sources/ad_connection_datasource saviynt_ad_connection_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntAdConnectionDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntAdConnectionDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_ad_connection_datasource',
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
  private _connectionAttributes = new DataSaviyntAdConnectionDatasourceConnectionAttributesOutputReference(this, "connection_attributes");
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
