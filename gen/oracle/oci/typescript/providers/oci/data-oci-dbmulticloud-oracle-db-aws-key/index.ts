// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_aws_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudOracleDbAwsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_aws_key#oracle_db_aws_key_id DataOciDbmulticloudOracleDbAwsKey#oracle_db_aws_key_id}
  */
  readonly oracleDbAwsKeyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_aws_key oci_dbmulticloud_oracle_db_aws_key}
*/
export class DataOciDbmulticloudOracleDbAwsKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_aws_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudOracleDbAwsKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudOracleDbAwsKey to import
  * @param importFromId The id of the existing DataOciDbmulticloudOracleDbAwsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_aws_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudOracleDbAwsKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_aws_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_aws_key oci_dbmulticloud_oracle_db_aws_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudOracleDbAwsKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudOracleDbAwsKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_aws_key',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._oracleDbAwsKeyId = config.oracleDbAwsKeyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_key_arn - computed: true, optional: false, required: false
  public get awsKeyArn() {
    return this.getStringAttribute('aws_key_arn');
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

  // is_aws_key_enabled - computed: true, optional: false, required: false
  public get isAwsKeyEnabled() {
    return this.getBooleanAttribute('is_aws_key_enabled');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // oracle_db_aws_key_id - computed: false, optional: false, required: true
  private _oracleDbAwsKeyId?: string; 
  public get oracleDbAwsKeyId() {
    return this.getStringAttribute('oracle_db_aws_key_id');
  }
  public set oracleDbAwsKeyId(value: string) {
    this._oracleDbAwsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbAwsKeyIdInput() {
    return this._oracleDbAwsKeyId;
  }

  // oracle_db_connector_id - computed: true, optional: false, required: false
  public get oracleDbConnectorId() {
    return this.getStringAttribute('oracle_db_connector_id');
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
      oracle_db_aws_key_id: cdktf.stringToTerraform(this._oracleDbAwsKeyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oracle_db_aws_key_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbAwsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
