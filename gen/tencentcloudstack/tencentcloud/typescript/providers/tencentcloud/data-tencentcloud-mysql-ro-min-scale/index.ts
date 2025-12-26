// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mysql_ro_min_scale
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMysqlRoMinScaleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mysql_ro_min_scale#id DataTencentcloudMysqlRoMinScale#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The primary instance ID, in the format: cdb-c1nl9rpv, is the same as the instance ID displayed on the cloud database console page. This parameter and the RoInstanceId parameter cannot be empty at the same time. Note that when the input parameter contains RoInstanceId, the return value is the minimum specification when the read-only instance is upgraded; when the input parameter only contains MasterInstanceId, the return value is the minimum specification when the read-only instance is purchased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mysql_ro_min_scale#master_instance_id DataTencentcloudMysqlRoMinScale#master_instance_id}
  */
  readonly masterInstanceId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mysql_ro_min_scale#result_output_file DataTencentcloudMysqlRoMinScale#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The read-only instance ID, in the format: cdbro-c1nl9rpv, is the same as the instance ID displayed on the cloud database console page. This parameter and the MasterInstanceId parameter cannot be empty at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mysql_ro_min_scale#ro_instance_id DataTencentcloudMysqlRoMinScale#ro_instance_id}
  */
  readonly roInstanceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mysql_ro_min_scale tencentcloud_mysql_ro_min_scale}
*/
export class DataTencentcloudMysqlRoMinScale extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_ro_min_scale";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMysqlRoMinScale resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMysqlRoMinScale to import
  * @param importFromId The id of the existing DataTencentcloudMysqlRoMinScale that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mysql_ro_min_scale#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMysqlRoMinScale to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_ro_min_scale", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/mysql_ro_min_scale tencentcloud_mysql_ro_min_scale} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMysqlRoMinScaleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMysqlRoMinScaleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_ro_min_scale',
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
    this._id = config.id;
    this._masterInstanceId = config.masterInstanceId;
    this._resultOutputFile = config.resultOutputFile;
    this._roInstanceId = config.roInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // master_instance_id - computed: false, optional: true, required: false
  private _masterInstanceId?: string; 
  public get masterInstanceId() {
    return this.getStringAttribute('master_instance_id');
  }
  public set masterInstanceId(value: string) {
    this._masterInstanceId = value;
  }
  public resetMasterInstanceId() {
    this._masterInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceIdInput() {
    return this._masterInstanceId;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
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

  // ro_instance_id - computed: false, optional: true, required: false
  private _roInstanceId?: string; 
  public get roInstanceId() {
    return this.getStringAttribute('ro_instance_id');
  }
  public set roInstanceId(value: string) {
    this._roInstanceId = value;
  }
  public resetRoInstanceId() {
    this._roInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roInstanceIdInput() {
    return this._roInstanceId;
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getNumberAttribute('volume');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      master_instance_id: cdktf.stringToTerraform(this._masterInstanceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      ro_instance_id: cdktf.stringToTerraform(this._roInstanceId),
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
      master_instance_id: {
        value: cdktf.stringToHclTerraform(this._masterInstanceId),
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
      ro_instance_id: {
        value: cdktf.stringToHclTerraform(this._roInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
