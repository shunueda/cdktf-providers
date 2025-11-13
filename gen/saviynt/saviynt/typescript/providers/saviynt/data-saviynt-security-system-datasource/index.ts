// https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/security_system_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntSecuritySystemDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store security system details in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/security_system_datasource#authenticate DataSaviyntSecuritySystemDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * Filter security systems by connection type (e.g., AD, REST, DB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/security_system_datasource#connection_type DataSaviyntSecuritySystemDatasource#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Filter security systems by connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/security_system_datasource#connectionname DataSaviyntSecuritySystemDatasource#connectionname}
  */
  readonly connectionname?: string;
  /**
  * Maximum number of security systems to return in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/security_system_datasource#max DataSaviyntSecuritySystemDatasource#max}
  */
  readonly max?: number;
  /**
  * Number of security systems to skip before returning results (for pagination).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/security_system_datasource#offset DataSaviyntSecuritySystemDatasource#offset}
  */
  readonly offset?: number;
  /**
  * Name of the security systeme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/security_system_datasource#systemname DataSaviyntSecuritySystemDatasource#systemname}
  */
  readonly systemname?: string;
}
export interface DataSaviyntSecuritySystemDatasourceResults {
}

export function dataSaviyntSecuritySystemDatasourceResultsToTerraform(struct?: DataSaviyntSecuritySystemDatasourceResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntSecuritySystemDatasourceResultsToHclTerraform(struct?: DataSaviyntSecuritySystemDatasourceResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntSecuritySystemDatasourceResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSaviyntSecuritySystemDatasourceResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntSecuritySystemDatasourceResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_add_workflow - computed: true, optional: false, required: false
  public get accessAddWorkflow() {
    return this.getStringAttribute('access_add_workflow');
  }

  // access_remove_workflow - computed: true, optional: false, required: false
  public get accessRemoveWorkflow() {
    return this.getStringAttribute('access_remove_workflow');
  }

  // add_service_account_workflow - computed: true, optional: false, required: false
  public get addServiceAccountWorkflow() {
    return this.getStringAttribute('add_service_account_workflow');
  }

  // automated_provisioning - computed: true, optional: false, required: false
  public get automatedProvisioning() {
    return this.getStringAttribute('automated_provisioning');
  }

  // connection - computed: true, optional: false, required: false
  public get connection() {
    return this.getStringAttribute('connection');
  }

  // connection_parameters - computed: true, optional: false, required: false
  public get connectionParameters() {
    return this.getStringAttribute('connection_parameters');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // connectionname1 - computed: true, optional: false, required: false
  public get connectionname1() {
    return this.getStringAttribute('connectionname1');
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_from - computed: true, optional: false, required: false
  public get createdFrom() {
    return this.getStringAttribute('created_from');
  }

  // default_system - computed: true, optional: false, required: false
  public get defaultSystem() {
    return this.getStringAttribute('default_system');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return this.getStringAttribute('endpoints');
  }

  // external_risk_connection_json - computed: true, optional: false, required: false
  public get externalRiskConnectionJson() {
    return this.getStringAttribute('external_risk_connection_json');
  }

  // firefighterid_request_access_workflow - computed: true, optional: false, required: false
  public get firefighteridRequestAccessWorkflow() {
    return this.getStringAttribute('firefighterid_request_access_workflow');
  }

  // firefighterid_workflow - computed: true, optional: false, required: false
  public get firefighteridWorkflow() {
    return this.getStringAttribute('firefighterid_workflow');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // inherent_sod_report_fields - computed: true, optional: false, required: false
  public get inherentSodReportFields() {
    return this.getListAttribute('inherent_sod_report_fields');
  }

  // instant_provision - computed: true, optional: false, required: false
  public get instantProvision() {
    return this.getStringAttribute('instant_provision');
  }

  // manage_entity - computed: true, optional: false, required: false
  public get manageEntity() {
    return this.getStringAttribute('manage_entity');
  }

  // persistent_data - computed: true, optional: false, required: false
  public get persistentData() {
    return this.getStringAttribute('persistent_data');
  }

  // policy_rule - computed: true, optional: false, required: false
  public get policyRule() {
    return this.getStringAttribute('policy_rule');
  }

  // policy_rule_service_account - computed: true, optional: false, required: false
  public get policyRuleServiceAccount() {
    return this.getStringAttribute('policy_rule_service_account');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // proposed_account_owners_workflow - computed: true, optional: false, required: false
  public get proposedAccountOwnersWorkflow() {
    return this.getStringAttribute('proposed_account_owners_workflow');
  }

  // provisioning_comments - computed: true, optional: false, required: false
  public get provisioningComments() {
    return this.getStringAttribute('provisioning_comments');
  }

  // provisioning_connection - computed: true, optional: false, required: false
  public get provisioningConnection() {
    return this.getStringAttribute('provisioning_connection');
  }

  // provisioning_tries - computed: true, optional: false, required: false
  public get provisioningTries() {
    return this.getStringAttribute('provisioning_tries');
  }

  // recon_application - computed: true, optional: false, required: false
  public get reconApplication() {
    return this.getStringAttribute('recon_application');
  }

  // remove_service_account_workflow - computed: true, optional: false, required: false
  public get removeServiceAccountWorkflow() {
    return this.getStringAttribute('remove_service_account_workflow');
  }

  // service_desk_connection - computed: true, optional: false, required: false
  public get serviceDeskConnection() {
    return this.getStringAttribute('service_desk_connection');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // systemname - computed: true, optional: false, required: false
  public get systemname() {
    return this.getStringAttribute('systemname');
  }

  // update_date - computed: true, optional: false, required: false
  public get updateDate() {
    return this.getStringAttribute('update_date');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // use_open_connector - computed: true, optional: false, required: false
  public get useOpenConnector() {
    return this.getStringAttribute('use_open_connector');
  }
}

export class DataSaviyntSecuritySystemDatasourceResultsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSaviyntSecuritySystemDatasourceResultsOutputReference {
    return new DataSaviyntSecuritySystemDatasourceResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/security_system_datasource saviynt_security_system_datasource}
*/
export class DataSaviyntSecuritySystemDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_security_system_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntSecuritySystemDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntSecuritySystemDatasource to import
  * @param importFromId The id of the existing DataSaviyntSecuritySystemDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/security_system_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntSecuritySystemDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_security_system_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/data-sources/security_system_datasource saviynt_security_system_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntSecuritySystemDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntSecuritySystemDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_security_system_datasource',
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
    this._connectionType = config.connectionType;
    this._connectionname = config.connectionname;
    this._max = config.max;
    this._offset = config.offset;
    this._systemname = config.systemname;
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

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // connectionname - computed: false, optional: true, required: false
  private _connectionname?: string; 
  public get connectionname() {
    return this.getStringAttribute('connectionname');
  }
  public set connectionname(value: string) {
    this._connectionname = value;
  }
  public resetConnectionname() {
    this._connectionname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionnameInput() {
    return this._connectionname;
  }

  // display_count - computed: true, optional: false, required: false
  public get displayCount() {
    return this.getNumberAttribute('display_count');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataSaviyntSecuritySystemDatasourceResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // systemname - computed: false, optional: true, required: false
  private _systemname?: string; 
  public get systemname() {
    return this.getStringAttribute('systemname');
  }
  public set systemname(value: string) {
    this._systemname = value;
  }
  public resetSystemname() {
    this._systemname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemnameInput() {
    return this._systemname;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      connectionname: cdktf.stringToTerraform(this._connectionname),
      max: cdktf.numberToTerraform(this._max),
      offset: cdktf.numberToTerraform(this._offset),
      systemname: cdktf.stringToTerraform(this._systemname),
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
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectionname: {
        value: cdktf.stringToHclTerraform(this._connectionname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max: {
        value: cdktf.numberToHclTerraform(this._max),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      systemname: {
        value: cdktf.stringToHclTerraform(this._systemname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
