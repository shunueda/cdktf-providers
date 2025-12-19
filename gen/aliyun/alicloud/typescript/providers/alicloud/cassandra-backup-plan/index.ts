// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CassandraBackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan#active CassandraBackupPlan#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan#backup_period CassandraBackupPlan#backup_period}
  */
  readonly backupPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan#backup_time CassandraBackupPlan#backup_time}
  */
  readonly backupTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan#cluster_id CassandraBackupPlan#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan#data_center_id CassandraBackupPlan#data_center_id}
  */
  readonly dataCenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan#id CassandraBackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan#retention_period CassandraBackupPlan#retention_period}
  */
  readonly retentionPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan alicloud_cassandra_backup_plan}
*/
export class CassandraBackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cassandra_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CassandraBackupPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CassandraBackupPlan to import
  * @param importFromId The id of the existing CassandraBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CassandraBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cassandra_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cassandra_backup_plan alicloud_cassandra_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CassandraBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: CassandraBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cassandra_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._backupPeriod = config.backupPeriod;
    this._backupTime = config.backupTime;
    this._clusterId = config.clusterId;
    this._dataCenterId = config.dataCenterId;
    this._id = config.id;
    this._retentionPeriod = config.retentionPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // backup_period - computed: true, optional: true, required: false
  private _backupPeriod?: string; 
  public get backupPeriod() {
    return this.getStringAttribute('backup_period');
  }
  public set backupPeriod(value: string) {
    this._backupPeriod = value;
  }
  public resetBackupPeriod() {
    this._backupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeriodInput() {
    return this._backupPeriod;
  }

  // backup_time - computed: false, optional: false, required: true
  private _backupTime?: string; 
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }
  public set backupTime(value: string) {
    this._backupTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
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

  // data_center_id - computed: false, optional: false, required: true
  private _dataCenterId?: string; 
  public get dataCenterId() {
    return this.getStringAttribute('data_center_id');
  }
  public set dataCenterId(value: string) {
    this._dataCenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterIdInput() {
    return this._dataCenterId;
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

  // retention_period - computed: true, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      backup_period: cdktf.stringToTerraform(this._backupPeriod),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      data_center_id: cdktf.stringToTerraform(this._dataCenterId),
      id: cdktf.stringToTerraform(this._id),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_period: {
        value: cdktf.stringToHclTerraform(this._backupPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_time: {
        value: cdktf.stringToHclTerraform(this._backupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_center_id: {
        value: cdktf.stringToHclTerraform(this._dataCenterId),
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
      retention_period: {
        value: cdktf.numberToHclTerraform(this._retentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
