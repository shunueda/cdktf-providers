// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dbmulticloud_oracle_db_azure_blob_mount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudOracleDbAzureBlobMountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dbmulticloud_oracle_db_azure_blob_mount#oracle_db_azure_blob_mount_id DataOciDbmulticloudOracleDbAzureBlobMount#oracle_db_azure_blob_mount_id}
  */
  readonly oracleDbAzureBlobMountId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dbmulticloud_oracle_db_azure_blob_mount oci_dbmulticloud_oracle_db_azure_blob_mount}
*/
export class DataOciDbmulticloudOracleDbAzureBlobMount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_azure_blob_mount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudOracleDbAzureBlobMount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudOracleDbAzureBlobMount to import
  * @param importFromId The id of the existing DataOciDbmulticloudOracleDbAzureBlobMount that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dbmulticloud_oracle_db_azure_blob_mount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudOracleDbAzureBlobMount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_azure_blob_mount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dbmulticloud_oracle_db_azure_blob_mount oci_dbmulticloud_oracle_db_azure_blob_mount} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudOracleDbAzureBlobMountConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudOracleDbAzureBlobMountConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_azure_blob_mount',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._oracleDbAzureBlobMountId = config.oracleDbAzureBlobMountId;
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

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // oracle_db_azure_blob_container_id - computed: true, optional: false, required: false
  public get oracleDbAzureBlobContainerId() {
    return this.getStringAttribute('oracle_db_azure_blob_container_id');
  }

  // oracle_db_azure_blob_mount_id - computed: false, optional: false, required: true
  private _oracleDbAzureBlobMountId?: string; 
  public get oracleDbAzureBlobMountId() {
    return this.getStringAttribute('oracle_db_azure_blob_mount_id');
  }
  public set oracleDbAzureBlobMountId(value: string) {
    this._oracleDbAzureBlobMountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbAzureBlobMountIdInput() {
    return this._oracleDbAzureBlobMountId;
  }

  // oracle_db_azure_connector_id - computed: true, optional: false, required: false
  public get oracleDbAzureConnectorId() {
    return this.getStringAttribute('oracle_db_azure_connector_id');
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
      oracle_db_azure_blob_mount_id: cdktf.stringToTerraform(this._oracleDbAzureBlobMountId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oracle_db_azure_blob_mount_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbAzureBlobMountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
