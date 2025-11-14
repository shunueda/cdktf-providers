// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_metastore_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBdsBdsInstanceMetastoreConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_metastore_config#bds_instance_id DataOciBdsBdsInstanceMetastoreConfig#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_metastore_config#metastore_config_id DataOciBdsBdsInstanceMetastoreConfig#metastore_config_id}
  */
  readonly metastoreConfigId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_metastore_config oci_bds_bds_instance_metastore_config}
*/
export class DataOciBdsBdsInstanceMetastoreConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_metastore_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBdsBdsInstanceMetastoreConfig to import
  * @param importFromId The id of the existing DataOciBdsBdsInstanceMetastoreConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_metastore_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBdsBdsInstanceMetastoreConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_metastore_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/bds_bds_instance_metastore_config oci_bds_bds_instance_metastore_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBdsBdsInstanceMetastoreConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstanceMetastoreConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_metastore_config',
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
    this._bdsInstanceId = config.bdsInstanceId;
    this._metastoreConfigId = config.metastoreConfigId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate_trigger - computed: true, optional: false, required: false
  public get activateTrigger() {
    return this.getNumberAttribute('activate_trigger');
  }

  // bds_api_key_id - computed: true, optional: false, required: false
  public get bdsApiKeyId() {
    return this.getStringAttribute('bds_api_key_id');
  }

  // bds_api_key_passphrase - computed: true, optional: false, required: false
  public get bdsApiKeyPassphrase() {
    return this.getStringAttribute('bds_api_key_passphrase');
  }

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
  }

  // cluster_admin_password - computed: true, optional: false, required: false
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metastore_config_id - computed: false, optional: false, required: true
  private _metastoreConfigId?: string; 
  public get metastoreConfigId() {
    return this.getStringAttribute('metastore_config_id');
  }
  public set metastoreConfigId(value: string) {
    this._metastoreConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreConfigIdInput() {
    return this._metastoreConfigId;
  }

  // metastore_id - computed: true, optional: false, required: false
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }

  // metastore_type - computed: true, optional: false, required: false
  public get metastoreType() {
    return this.getStringAttribute('metastore_type');
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
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      metastore_config_id: cdktf.stringToTerraform(this._metastoreConfigId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metastore_config_id: {
        value: cdktf.stringToHclTerraform(this._metastoreConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
