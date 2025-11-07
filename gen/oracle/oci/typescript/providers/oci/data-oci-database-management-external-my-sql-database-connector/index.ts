// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_my_sql_database_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementExternalMySqlDatabaseConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_my_sql_database_connector#external_my_sql_database_connector_id DataOciDatabaseManagementExternalMySqlDatabaseConnector#external_my_sql_database_connector_id}
  */
  readonly externalMySqlDatabaseConnectorId: string;
}
export interface DataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails {
}

export function dataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsToTerraform(struct?: DataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsToHclTerraform(struct?: DataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_database_id - computed: true, optional: false, required: false
  public get externalDatabaseId() {
    return this.getStringAttribute('external_database_id');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // macs_agent_id - computed: true, optional: false, required: false
  public get macsAgentId() {
    return this.getStringAttribute('macs_agent_id');
  }

  // network_protocol - computed: true, optional: false, required: false
  public get networkProtocol() {
    return this.getStringAttribute('network_protocol');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // ssl_secret_id - computed: true, optional: false, required: false
  public get sslSecretId() {
    return this.getStringAttribute('ssl_secret_id');
  }
}

export class DataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsOutputReference {
    return new DataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_my_sql_database_connector oci_database_management_external_my_sql_database_connector}
*/
export class DataOciDatabaseManagementExternalMySqlDatabaseConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_my_sql_database_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementExternalMySqlDatabaseConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementExternalMySqlDatabaseConnector to import
  * @param importFromId The id of the existing DataOciDatabaseManagementExternalMySqlDatabaseConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_my_sql_database_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementExternalMySqlDatabaseConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_my_sql_database_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_my_sql_database_connector oci_database_management_external_my_sql_database_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementExternalMySqlDatabaseConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementExternalMySqlDatabaseConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_my_sql_database_connector',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalMySqlDatabaseConnectorId = config.externalMySqlDatabaseConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_services - computed: true, optional: false, required: false
  public get associatedServices() {
    return this.getStringAttribute('associated_services');
  }

  // check_connection_status_trigger - computed: true, optional: false, required: false
  public get checkConnectionStatusTrigger() {
    return this.getNumberAttribute('check_connection_status_trigger');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // connector_details - computed: true, optional: false, required: false
  private _connectorDetails = new DataOciDatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsList(this, "connector_details", false);
  public get connectorDetails() {
    return this._connectorDetails;
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // external_database_id - computed: true, optional: false, required: false
  public get externalDatabaseId() {
    return this.getStringAttribute('external_database_id');
  }

  // external_my_sql_database_connector_id - computed: false, optional: false, required: true
  private _externalMySqlDatabaseConnectorId?: string; 
  public get externalMySqlDatabaseConnectorId() {
    return this.getStringAttribute('external_my_sql_database_connector_id');
  }
  public set externalMySqlDatabaseConnectorId(value: string) {
    this._externalMySqlDatabaseConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMySqlDatabaseConnectorIdInput() {
    return this._externalMySqlDatabaseConnectorId;
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_test_connection_param - computed: true, optional: false, required: false
  public get isTestConnectionParam() {
    return this.getBooleanAttribute('is_test_connection_param');
  }

  // macs_agent_id - computed: true, optional: false, required: false
  public get macsAgentId() {
    return this.getStringAttribute('macs_agent_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_protocol - computed: true, optional: false, required: false
  public get networkProtocol() {
    return this.getStringAttribute('network_protocol');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // source_database - computed: true, optional: false, required: false
  public get sourceDatabase() {
    return this.getStringAttribute('source_database');
  }

  // source_database_type - computed: true, optional: false, required: false
  public get sourceDatabaseType() {
    return this.getStringAttribute('source_database_type');
  }

  // ssl_secret_id - computed: true, optional: false, required: false
  public get sslSecretId() {
    return this.getStringAttribute('ssl_secret_id');
  }

  // ssl_secret_name - computed: true, optional: false, required: false
  public get sslSecretName() {
    return this.getStringAttribute('ssl_secret_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_connection_status_updated - computed: true, optional: false, required: false
  public get timeConnectionStatusUpdated() {
    return this.getStringAttribute('time_connection_status_updated');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_my_sql_database_connector_id: cdktf.stringToTerraform(this._externalMySqlDatabaseConnectorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_my_sql_database_connector_id: {
        value: cdktf.stringToHclTerraform(this._externalMySqlDatabaseConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
