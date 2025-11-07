// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudOracleDbAzureConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_connector#oracle_db_azure_connector_id DataOciDbmulticloudOracleDbAzureConnector#oracle_db_azure_connector_id}
  */
  readonly oracleDbAzureConnectorId: string;
}
export interface DataOciDbmulticloudOracleDbAzureConnectorArcAgentNodes {
}

export function dataOciDbmulticloudOracleDbAzureConnectorArcAgentNodesToTerraform(struct?: DataOciDbmulticloudOracleDbAzureConnectorArcAgentNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDbmulticloudOracleDbAzureConnectorArcAgentNodesToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureConnectorArcAgentNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDbmulticloudOracleDbAzureConnectorArcAgentNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureConnectorArcAgentNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureConnectorArcAgentNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_arc_agent_version - computed: true, optional: false, required: false
  public get currentArcAgentVersion() {
    return this.getStringAttribute('current_arc_agent_version');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_last_checked - computed: true, optional: false, required: false
  public get timeLastChecked() {
    return this.getStringAttribute('time_last_checked');
  }
}

export class DataOciDbmulticloudOracleDbAzureConnectorArcAgentNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureConnectorArcAgentNodesOutputReference {
    return new DataOciDbmulticloudOracleDbAzureConnectorArcAgentNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_connector oci_dbmulticloud_oracle_db_azure_connector}
*/
export class DataOciDbmulticloudOracleDbAzureConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_azure_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudOracleDbAzureConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudOracleDbAzureConnector to import
  * @param importFromId The id of the existing DataOciDbmulticloudOracleDbAzureConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudOracleDbAzureConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_azure_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_connector oci_dbmulticloud_oracle_db_azure_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudOracleDbAzureConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudOracleDbAzureConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_azure_connector',
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
    this._oracleDbAzureConnectorId = config.oracleDbAzureConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // arc_agent_nodes - computed: true, optional: false, required: false
  private _arcAgentNodes = new DataOciDbmulticloudOracleDbAzureConnectorArcAgentNodesList(this, "arc_agent_nodes", false);
  public get arcAgentNodes() {
    return this._arcAgentNodes;
  }

  // azure_identity_connectivity_status - computed: true, optional: false, required: false
  public get azureIdentityConnectivityStatus() {
    return this.getStringAttribute('azure_identity_connectivity_status');
  }

  // azure_identity_mechanism - computed: true, optional: false, required: false
  public get azureIdentityMechanism() {
    return this.getStringAttribute('azure_identity_mechanism');
  }

  // azure_resource_group - computed: true, optional: false, required: false
  public get azureResourceGroup() {
    return this.getStringAttribute('azure_resource_group');
  }

  // azure_subscription_id - computed: true, optional: false, required: false
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }

  // azure_tenant_id - computed: true, optional: false, required: false
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // db_cluster_resource_id - computed: true, optional: false, required: false
  public get dbClusterResourceId() {
    return this.getStringAttribute('db_cluster_resource_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modification - computed: true, optional: false, required: false
  public get lastModification() {
    return this.getStringAttribute('last_modification');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // oracle_db_azure_connector_id - computed: false, optional: false, required: true
  private _oracleDbAzureConnectorId?: string; 
  public get oracleDbAzureConnectorId() {
    return this.getStringAttribute('oracle_db_azure_connector_id');
  }
  public set oracleDbAzureConnectorId(value: string) {
    this._oracleDbAzureConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbAzureConnectorIdInput() {
    return this._oracleDbAzureConnectorId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      oracle_db_azure_connector_id: cdktf.stringToTerraform(this._oracleDbAzureConnectorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oracle_db_azure_connector_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbAzureConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
