// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardbx_backup_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackPolardbxBackupPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardbx_backup_policies#db_instance_id DataAlibabacloudstackPolardbxBackupPolicies#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardbx_backup_policies#id DataAlibabacloudstackPolardbxBackupPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardbx_backup_policies alibabacloudstack_polardbx_backup_policies}
*/
export class DataAlibabacloudstackPolardbxBackupPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardbx_backup_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackPolardbxBackupPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackPolardbxBackupPolicies to import
  * @param importFromId The id of the existing DataAlibabacloudstackPolardbxBackupPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardbx_backup_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackPolardbxBackupPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardbx_backup_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/polardbx_backup_policies alibabacloudstack_polardbx_backup_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackPolardbxBackupPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackPolardbxBackupPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardbx_backup_policies',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_period - computed: true, optional: false, required: false
  public get backupPeriod() {
    return this.getStringAttribute('backup_period');
  }

  // backup_plan_begin - computed: true, optional: false, required: false
  public get backupPlanBegin() {
    return this.getStringAttribute('backup_plan_begin');
  }

  // backup_set_retention - computed: true, optional: false, required: false
  public get backupSetRetention() {
    return this.getNumberAttribute('backup_set_retention');
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // backup_way - computed: true, optional: false, required: false
  public get backupWay() {
    return this.getStringAttribute('backup_way');
  }

  // cold_data_backup_interval - computed: true, optional: false, required: false
  public get coldDataBackupInterval() {
    return this.getNumberAttribute('cold_data_backup_interval');
  }

  // cold_data_backup_retention - computed: true, optional: false, required: false
  public get coldDataBackupRetention() {
    return this.getNumberAttribute('cold_data_backup_retention');
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // force_clean_on_high_space_usage - computed: true, optional: false, required: false
  public get forceCleanOnHighSpaceUsage() {
    return this.getNumberAttribute('force_clean_on_high_space_usage');
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

  // local_log_retention - computed: true, optional: false, required: false
  public get localLogRetention() {
    return this.getNumberAttribute('local_log_retention');
  }

  // local_log_retention_number - computed: true, optional: false, required: false
  public get localLogRetentionNumber() {
    return this.getNumberAttribute('local_log_retention_number');
  }

  // log_local_retention_space - computed: true, optional: false, required: false
  public get logLocalRetentionSpace() {
    return this.getNumberAttribute('log_local_retention_space');
  }

  // remove_log_retention - computed: true, optional: false, required: false
  public get removeLogRetention() {
    return this.getNumberAttribute('remove_log_retention');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
