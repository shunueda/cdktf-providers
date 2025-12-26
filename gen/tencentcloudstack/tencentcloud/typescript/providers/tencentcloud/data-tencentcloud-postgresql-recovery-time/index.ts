// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_recovery_time
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudPostgresqlRecoveryTimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_recovery_time#db_instance_id DataTencentcloudPostgresqlRecoveryTime#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_recovery_time#id DataTencentcloudPostgresqlRecoveryTime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_recovery_time#result_output_file DataTencentcloudPostgresqlRecoveryTime#result_output_file}
  */
  readonly resultOutputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_recovery_time tencentcloud_postgresql_recovery_time}
*/
export class DataTencentcloudPostgresqlRecoveryTime extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_recovery_time";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudPostgresqlRecoveryTime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudPostgresqlRecoveryTime to import
  * @param importFromId The id of the existing DataTencentcloudPostgresqlRecoveryTime that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_recovery_time#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudPostgresqlRecoveryTime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_recovery_time", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_recovery_time tencentcloud_postgresql_recovery_time} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudPostgresqlRecoveryTimeConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudPostgresqlRecoveryTimeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_recovery_time',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // recovery_begin_time - computed: true, optional: false, required: false
  public get recoveryBeginTime() {
    return this.getStringAttribute('recovery_begin_time');
  }

  // recovery_end_time - computed: true, optional: false, required: false
  public get recoveryEndTime() {
    return this.getStringAttribute('recovery_end_time');
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
