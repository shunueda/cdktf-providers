// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudOracleDbAzureBlobContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_container#oracle_db_azure_blob_container_id DataOciDbmulticloudOracleDbAzureBlobContainer#oracle_db_azure_blob_container_id}
  */
  readonly oracleDbAzureBlobContainerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_container oci_dbmulticloud_oracle_db_azure_blob_container}
*/
export class DataOciDbmulticloudOracleDbAzureBlobContainer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_azure_blob_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudOracleDbAzureBlobContainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudOracleDbAzureBlobContainer to import
  * @param importFromId The id of the existing DataOciDbmulticloudOracleDbAzureBlobContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudOracleDbAzureBlobContainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_azure_blob_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_container oci_dbmulticloud_oracle_db_azure_blob_container} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudOracleDbAzureBlobContainerConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudOracleDbAzureBlobContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_azure_blob_container',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._oracleDbAzureBlobContainerId = config.oracleDbAzureBlobContainerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_storage_account_name - computed: true, optional: false, required: false
  public get azureStorageAccountName() {
    return this.getStringAttribute('azure_storage_account_name');
  }

  // azure_storage_container_name - computed: true, optional: false, required: false
  public get azureStorageContainerName() {
    return this.getStringAttribute('azure_storage_container_name');
  }

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

  // oracle_db_azure_blob_container_id - computed: false, optional: false, required: true
  private _oracleDbAzureBlobContainerId?: string; 
  public get oracleDbAzureBlobContainerId() {
    return this.getStringAttribute('oracle_db_azure_blob_container_id');
  }
  public set oracleDbAzureBlobContainerId(value: string) {
    this._oracleDbAzureBlobContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbAzureBlobContainerIdInput() {
    return this._oracleDbAzureBlobContainerId;
  }

  // private_endpoint_dns_alias - computed: true, optional: false, required: false
  public get privateEndpointDnsAlias() {
    return this.getStringAttribute('private_endpoint_dns_alias');
  }

  // private_endpoint_ip_address - computed: true, optional: false, required: false
  public get privateEndpointIpAddress() {
    return this.getStringAttribute('private_endpoint_ip_address');
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
      oracle_db_azure_blob_container_id: cdktf.stringToTerraform(this._oracleDbAzureBlobContainerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oracle_db_azure_blob_container_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbAzureBlobContainerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
