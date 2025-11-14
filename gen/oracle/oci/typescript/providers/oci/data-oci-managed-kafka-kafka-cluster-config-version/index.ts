// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/managed_kafka_kafka_cluster_config_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciManagedKafkaKafkaClusterConfigVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/managed_kafka_kafka_cluster_config_version#id DataOciManagedKafkaKafkaClusterConfigVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/managed_kafka_kafka_cluster_config_version#kafka_cluster_config_id DataOciManagedKafkaKafkaClusterConfigVersion#kafka_cluster_config_id}
  */
  readonly kafkaClusterConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/managed_kafka_kafka_cluster_config_version#version_number DataOciManagedKafkaKafkaClusterConfigVersion#version_number}
  */
  readonly versionNumber: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/managed_kafka_kafka_cluster_config_version oci_managed_kafka_kafka_cluster_config_version}
*/
export class DataOciManagedKafkaKafkaClusterConfigVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_managed_kafka_kafka_cluster_config_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciManagedKafkaKafkaClusterConfigVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciManagedKafkaKafkaClusterConfigVersion to import
  * @param importFromId The id of the existing DataOciManagedKafkaKafkaClusterConfigVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/managed_kafka_kafka_cluster_config_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciManagedKafkaKafkaClusterConfigVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_managed_kafka_kafka_cluster_config_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/managed_kafka_kafka_cluster_config_version oci_managed_kafka_kafka_cluster_config_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciManagedKafkaKafkaClusterConfigVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciManagedKafkaKafkaClusterConfigVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_managed_kafka_kafka_cluster_config_version',
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
    this._id = config.id;
    this._kafkaClusterConfigId = config.kafkaClusterConfigId;
    this._versionNumber = config.versionNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
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

  // kafka_cluster_config_id - computed: false, optional: false, required: true
  private _kafkaClusterConfigId?: string; 
  public get kafkaClusterConfigId() {
    return this.getStringAttribute('kafka_cluster_config_id');
  }
  public set kafkaClusterConfigId(value: string) {
    this._kafkaClusterConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterConfigIdInput() {
    return this._kafkaClusterConfigId;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version_number - computed: false, optional: false, required: true
  private _versionNumber?: number; 
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
  public set versionNumber(value: number) {
    this._versionNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNumberInput() {
    return this._versionNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kafka_cluster_config_id: cdktf.stringToTerraform(this._kafkaClusterConfigId),
      version_number: cdktf.numberToTerraform(this._versionNumber),
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
      kafka_cluster_config_id: {
        value: cdktf.stringToHclTerraform(this._kafkaClusterConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_number: {
        value: cdktf.numberToHclTerraform(this._versionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
