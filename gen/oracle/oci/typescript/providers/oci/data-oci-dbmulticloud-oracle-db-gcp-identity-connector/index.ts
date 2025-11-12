// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_gcp_identity_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudOracleDbGcpIdentityConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_gcp_identity_connector#oracle_db_gcp_identity_connector_id DataOciDbmulticloudOracleDbGcpIdentityConnector#oracle_db_gcp_identity_connector_id}
  */
  readonly oracleDbGcpIdentityConnectorId: string;
}
export interface DataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodes {
}

export function dataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodesToTerraform(struct?: DataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodesToHclTerraform(struct?: DataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class DataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodesOutputReference {
    return new DataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_gcp_identity_connector oci_dbmulticloud_oracle_db_gcp_identity_connector}
*/
export class DataOciDbmulticloudOracleDbGcpIdentityConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_gcp_identity_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudOracleDbGcpIdentityConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudOracleDbGcpIdentityConnector to import
  * @param importFromId The id of the existing DataOciDbmulticloudOracleDbGcpIdentityConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_gcp_identity_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudOracleDbGcpIdentityConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_gcp_identity_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_gcp_identity_connector oci_dbmulticloud_oracle_db_gcp_identity_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudOracleDbGcpIdentityConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudOracleDbGcpIdentityConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_gcp_identity_connector',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._oracleDbGcpIdentityConnectorId = config.oracleDbGcpIdentityConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gcp_identity_connectivity_status - computed: true, optional: false, required: false
  public get gcpIdentityConnectivityStatus() {
    return this.getStringAttribute('gcp_identity_connectivity_status');
  }

  // gcp_location - computed: true, optional: false, required: false
  public get gcpLocation() {
    return this.getStringAttribute('gcp_location');
  }

  // gcp_nodes - computed: true, optional: false, required: false
  private _gcpNodes = new DataOciDbmulticloudOracleDbGcpIdentityConnectorGcpNodesList(this, "gcp_nodes", false);
  public get gcpNodes() {
    return this._gcpNodes;
  }

  // gcp_resource_service_agent_id - computed: true, optional: false, required: false
  public get gcpResourceServiceAgentId() {
    return this.getStringAttribute('gcp_resource_service_agent_id');
  }

  // gcp_workload_identity_pool_id - computed: true, optional: false, required: false
  public get gcpWorkloadIdentityPoolId() {
    return this.getStringAttribute('gcp_workload_identity_pool_id');
  }

  // gcp_workload_identity_provider_id - computed: true, optional: false, required: false
  public get gcpWorkloadIdentityProviderId() {
    return this.getStringAttribute('gcp_workload_identity_provider_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_url - computed: true, optional: false, required: false
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // oracle_db_gcp_identity_connector_id - computed: false, optional: false, required: true
  private _oracleDbGcpIdentityConnectorId?: string; 
  public get oracleDbGcpIdentityConnectorId() {
    return this.getStringAttribute('oracle_db_gcp_identity_connector_id');
  }
  public set oracleDbGcpIdentityConnectorId(value: string) {
    this._oracleDbGcpIdentityConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbGcpIdentityConnectorIdInput() {
    return this._oracleDbGcpIdentityConnectorId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
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
      oracle_db_gcp_identity_connector_id: cdktf.stringToTerraform(this._oracleDbGcpIdentityConnectorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oracle_db_gcp_identity_connector_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbGcpIdentityConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
