// https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/workday_connection_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntWorkdayConnectionDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store connection_attributes in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/workday_connection_datasource#authenticate DataSaviyntWorkdayConnectionDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * The key of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/workday_connection_datasource#connection_key DataSaviyntWorkdayConnectionDatasource#connection_key}
  */
  readonly connectionKey?: number;
  /**
  * The name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/workday_connection_datasource#connection_name DataSaviyntWorkdayConnectionDatasource#connection_name}
  */
  readonly connectionName?: string;
}
export interface DataSaviyntWorkdayConnectionDatasourceConnectionAttributesConnectionTimeoutConfig {
}

export function dataSaviyntWorkdayConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToTerraform(struct?: DataSaviyntWorkdayConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntWorkdayConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToHclTerraform(struct?: DataSaviyntWorkdayConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntWorkdayConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntWorkdayConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntWorkdayConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined) {
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
export interface DataSaviyntWorkdayConnectionDatasourceConnectionAttributes {
}

export function dataSaviyntWorkdayConnectionDatasourceConnectionAttributesToTerraform(struct?: DataSaviyntWorkdayConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntWorkdayConnectionDatasourceConnectionAttributesToHclTerraform(struct?: DataSaviyntWorkdayConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntWorkdayConnectionDatasourceConnectionAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntWorkdayConnectionDatasourceConnectionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntWorkdayConnectionDatasourceConnectionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_import_list - computed: true, optional: false, required: false
  public get accessImportList() {
    return this.getStringAttribute('access_import_list');
  }

  // access_import_mapping - computed: true, optional: false, required: false
  public get accessImportMapping() {
    return this.getStringAttribute('access_import_mapping');
  }

  // access_last_import_time - computed: true, optional: false, required: false
  public get accessLastImportTime() {
    return this.getStringAttribute('access_last_import_time');
  }

  // account_import_mapping - computed: true, optional: false, required: false
  public get accountImportMapping() {
    return this.getStringAttribute('account_import_mapping');
  }

  // account_import_payload - computed: true, optional: false, required: false
  public get accountImportPayload() {
    return this.getStringAttribute('account_import_payload');
  }

  // accounts_last_import_time - computed: true, optional: false, required: false
  public get accountsLastImportTime() {
    return this.getStringAttribute('accounts_last_import_time');
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // assign_orgrole_payload - computed: true, optional: false, required: false
  public get assignOrgrolePayload() {
    return this.getStringAttribute('assign_orgrole_payload');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // connection_timeout_config - computed: true, optional: false, required: false
  private _connectionTimeoutConfig = new DataSaviyntWorkdayConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference(this, "connection_timeout_config");
  public get connectionTimeoutConfig() {
    return this._connectionTimeoutConfig;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // create_account_payload - computed: true, optional: false, required: false
  public get createAccountPayload() {
    return this.getStringAttribute('create_account_payload');
  }

  // custom_config - computed: true, optional: false, required: false
  public get customConfig() {
    return this.getStringAttribute('custom_config');
  }

  // include_reference_descriptors - computed: true, optional: false, required: false
  public get includeReferenceDescriptors() {
    return this.getStringAttribute('include_reference_descriptors');
  }

  // is_timeout_config_validated - computed: true, optional: false, required: false
  public get isTimeoutConfigValidated() {
    return this.getBooleanAttribute('is_timeout_config_validated');
  }

  // is_timeout_supported - computed: true, optional: false, required: false
  public get isTimeoutSupported() {
    return this.getBooleanAttribute('is_timeout_supported');
  }

  // modifyuserdatajson - computed: true, optional: false, required: false
  public get modifyuserdatajson() {
    return this.getStringAttribute('modifyuserdatajson');
  }

  // page_size - computed: true, optional: false, required: false
  public get pageSize() {
    return this.getStringAttribute('page_size');
  }

  // pam_config - computed: true, optional: false, required: false
  public get pamConfig() {
    return this.getStringAttribute('pam_config');
  }

  // raas_mapping_json - computed: true, optional: false, required: false
  public get raasMappingJson() {
    return this.getStringAttribute('raas_mapping_json');
  }

  // remove_orgrole_payload - computed: true, optional: false, required: false
  public get removeOrgrolePayload() {
    return this.getStringAttribute('remove_orgrole_payload');
  }

  // report_owner - computed: true, optional: false, required: false
  public get reportOwner() {
    return this.getStringAttribute('report_owner');
  }

  // status_key_json - computed: true, optional: false, required: false
  public get statusKeyJson() {
    return this.getStringAttribute('status_key_json');
  }

  // status_threshold_config - computed: true, optional: false, required: false
  public get statusThresholdConfig() {
    return this.getStringAttribute('status_threshold_config');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // update_account_payload - computed: true, optional: false, required: false
  public get updateAccountPayload() {
    return this.getStringAttribute('update_account_payload');
  }

  // update_user_payload - computed: true, optional: false, required: false
  public get updateUserPayload() {
    return this.getStringAttribute('update_user_payload');
  }

  // use_enhanced_orgrole - computed: true, optional: false, required: false
  public get useEnhancedOrgrole() {
    return this.getStringAttribute('use_enhanced_orgrole');
  }

  // use_oauth - computed: true, optional: false, required: false
  public get useOauth() {
    return this.getStringAttribute('use_oauth');
  }

  // use_x509auth_for_soap - computed: true, optional: false, required: false
  public get useX509AuthForSoap() {
    return this.getStringAttribute('use_x509auth_for_soap');
  }

  // user_import_mapping - computed: true, optional: false, required: false
  public get userImportMapping() {
    return this.getStringAttribute('user_import_mapping');
  }

  // user_import_payload - computed: true, optional: false, required: false
  public get userImportPayload() {
    return this.getStringAttribute('user_import_payload');
  }

  // userattributejson - computed: true, optional: false, required: false
  public get userattributejson() {
    return this.getStringAttribute('userattributejson');
  }

  // users_last_import_time - computed: true, optional: false, required: false
  public get usersLastImportTime() {
    return this.getStringAttribute('users_last_import_time');
  }

  // x509_cert - computed: true, optional: false, required: false
  public get x509Cert() {
    return this.getStringAttribute('x509_cert');
  }

  // x509_key - computed: true, optional: false, required: false
  public get x509Key() {
    return this.getStringAttribute('x509_key');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/workday_connection_datasource saviynt_workday_connection_datasource}
*/
export class DataSaviyntWorkdayConnectionDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_workday_connection_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntWorkdayConnectionDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntWorkdayConnectionDatasource to import
  * @param importFromId The id of the existing DataSaviyntWorkdayConnectionDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/workday_connection_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntWorkdayConnectionDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_workday_connection_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/workday_connection_datasource saviynt_workday_connection_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntWorkdayConnectionDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntWorkdayConnectionDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_workday_connection_datasource',
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
  private _connectionAttributes = new DataSaviyntWorkdayConnectionDatasourceConnectionAttributesOutputReference(this, "connection_attributes");
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
