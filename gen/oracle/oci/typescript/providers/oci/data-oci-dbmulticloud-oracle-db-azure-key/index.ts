// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudOracleDbAzureKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_key#id DataOciDbmulticloudOracleDbAzureKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_key#oracle_db_azure_key_id DataOciDbmulticloudOracleDbAzureKey#oracle_db_azure_key_id}
  */
  readonly oracleDbAzureKeyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_key oci_dbmulticloud_oracle_db_azure_key}
*/
export class DataOciDbmulticloudOracleDbAzureKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_azure_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudOracleDbAzureKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudOracleDbAzureKey to import
  * @param importFromId The id of the existing DataOciDbmulticloudOracleDbAzureKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudOracleDbAzureKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_azure_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dbmulticloud_oracle_db_azure_key oci_dbmulticloud_oracle_db_azure_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudOracleDbAzureKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudOracleDbAzureKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_azure_key',
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
    this._id = config.id;
    this._oracleDbAzureKeyId = config.oracleDbAzureKeyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_key_id - computed: true, optional: false, required: false
  public get azureKeyId() {
    return this.getStringAttribute('azure_key_id');
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_properties - computed: true, optional: false, required: false
  private _keyProperties = new cdktf.StringMap(this, "key_properties");
  public get keyProperties() {
    return this._keyProperties;
  }

  // last_modification - computed: true, optional: false, required: false
  public get lastModification() {
    return this.getStringAttribute('last_modification');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // oracle_db_azure_key_id - computed: false, optional: false, required: true
  private _oracleDbAzureKeyId?: string; 
  public get oracleDbAzureKeyId() {
    return this.getStringAttribute('oracle_db_azure_key_id');
  }
  public set oracleDbAzureKeyId(value: string) {
    this._oracleDbAzureKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbAzureKeyIdInput() {
    return this._oracleDbAzureKeyId;
  }

  // oracle_db_azure_vault_id - computed: true, optional: false, required: false
  public get oracleDbAzureVaultId() {
    return this.getStringAttribute('oracle_db_azure_vault_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
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
      id: cdktf.stringToTerraform(this._id),
      oracle_db_azure_key_id: cdktf.stringToTerraform(this._oracleDbAzureKeyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_db_azure_key_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbAzureKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
