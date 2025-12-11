// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_gcp_key_ring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudOracleDbGcpKeyRingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_gcp_key_ring#oracle_db_gcp_key_ring_id DataOciDbmulticloudOracleDbGcpKeyRing#oracle_db_gcp_key_ring_id}
  */
  readonly oracleDbGcpKeyRingId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_gcp_key_ring oci_dbmulticloud_oracle_db_gcp_key_ring}
*/
export class DataOciDbmulticloudOracleDbGcpKeyRing extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_gcp_key_ring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudOracleDbGcpKeyRing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudOracleDbGcpKeyRing to import
  * @param importFromId The id of the existing DataOciDbmulticloudOracleDbGcpKeyRing that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_gcp_key_ring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudOracleDbGcpKeyRing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_gcp_key_ring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_gcp_key_ring oci_dbmulticloud_oracle_db_gcp_key_ring} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudOracleDbGcpKeyRingConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudOracleDbGcpKeyRingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_gcp_key_ring',
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
    this._oracleDbGcpKeyRingId = config.oracleDbGcpKeyRingId;
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

  // gcp_key_ring_id - computed: true, optional: false, required: false
  public get gcpKeyRingId() {
    return this.getStringAttribute('gcp_key_ring_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // oracle_db_connector_id - computed: true, optional: false, required: false
  public get oracleDbConnectorId() {
    return this.getStringAttribute('oracle_db_connector_id');
  }

  // oracle_db_gcp_key_ring_id - computed: false, optional: false, required: true
  private _oracleDbGcpKeyRingId?: string; 
  public get oracleDbGcpKeyRingId() {
    return this.getStringAttribute('oracle_db_gcp_key_ring_id');
  }
  public set oracleDbGcpKeyRingId(value: string) {
    this._oracleDbGcpKeyRingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbGcpKeyRingIdInput() {
    return this._oracleDbGcpKeyRingId;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      oracle_db_gcp_key_ring_id: cdktf.stringToTerraform(this._oracleDbGcpKeyRingId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oracle_db_gcp_key_ring_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbGcpKeyRingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
