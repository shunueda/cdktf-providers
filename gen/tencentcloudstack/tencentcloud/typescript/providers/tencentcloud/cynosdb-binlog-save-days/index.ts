// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_binlog_save_days
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbBinlogSaveDaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Binlog retention days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_binlog_save_days#binlog_save_days CynosdbBinlogSaveDays#binlog_save_days}
  */
  readonly binlogSaveDays: number;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_binlog_save_days#cluster_id CynosdbBinlogSaveDays#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_binlog_save_days#id CynosdbBinlogSaveDays#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_binlog_save_days tencentcloud_cynosdb_binlog_save_days}
*/
export class CynosdbBinlogSaveDays extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_binlog_save_days";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbBinlogSaveDays resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbBinlogSaveDays to import
  * @param importFromId The id of the existing CynosdbBinlogSaveDays that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_binlog_save_days#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbBinlogSaveDays to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_binlog_save_days", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cynosdb_binlog_save_days tencentcloud_cynosdb_binlog_save_days} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbBinlogSaveDaysConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbBinlogSaveDaysConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_binlog_save_days',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binlogSaveDays = config.binlogSaveDays;
    this._clusterId = config.clusterId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binlog_save_days - computed: false, optional: false, required: true
  private _binlogSaveDays?: number; 
  public get binlogSaveDays() {
    return this.getNumberAttribute('binlog_save_days');
  }
  public set binlogSaveDays(value: number) {
    this._binlogSaveDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogSaveDaysInput() {
    return this._binlogSaveDays;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binlog_save_days: cdktf.numberToTerraform(this._binlogSaveDays),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binlog_save_days: {
        value: cdktf.numberToHclTerraform(this._binlogSaveDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
