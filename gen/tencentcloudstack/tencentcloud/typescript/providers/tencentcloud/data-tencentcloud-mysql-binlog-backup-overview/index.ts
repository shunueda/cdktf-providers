// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_binlog_backup_overview
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMysqlBinlogBackupOverviewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_binlog_backup_overview#id DataTencentcloudMysqlBinlogBackupOverview#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of cloud database product to be queried, currently only supports `mysql`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_binlog_backup_overview#product DataTencentcloudMysqlBinlogBackupOverview#product}
  */
  readonly product: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_binlog_backup_overview#result_output_file DataTencentcloudMysqlBinlogBackupOverview#result_output_file}
  */
  readonly resultOutputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_binlog_backup_overview tencentcloud_mysql_binlog_backup_overview}
*/
export class DataTencentcloudMysqlBinlogBackupOverview extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_binlog_backup_overview";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMysqlBinlogBackupOverview resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMysqlBinlogBackupOverview to import
  * @param importFromId The id of the existing DataTencentcloudMysqlBinlogBackupOverview that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_binlog_backup_overview#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMysqlBinlogBackupOverview to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_binlog_backup_overview", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_binlog_backup_overview tencentcloud_mysql_binlog_backup_overview} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMysqlBinlogBackupOverviewConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMysqlBinlogBackupOverviewConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_binlog_backup_overview',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
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
    this._product = config.product;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binlog_archive_count - computed: true, optional: false, required: false
  public get binlogArchiveCount() {
    return this.getNumberAttribute('binlog_archive_count');
  }

  // binlog_archive_volume - computed: true, optional: false, required: false
  public get binlogArchiveVolume() {
    return this.getNumberAttribute('binlog_archive_volume');
  }

  // binlog_backup_count - computed: true, optional: false, required: false
  public get binlogBackupCount() {
    return this.getNumberAttribute('binlog_backup_count');
  }

  // binlog_backup_volume - computed: true, optional: false, required: false
  public get binlogBackupVolume() {
    return this.getNumberAttribute('binlog_backup_volume');
  }

  // binlog_standby_count - computed: true, optional: false, required: false
  public get binlogStandbyCount() {
    return this.getNumberAttribute('binlog_standby_count');
  }

  // binlog_standby_volume - computed: true, optional: false, required: false
  public get binlogStandbyVolume() {
    return this.getNumberAttribute('binlog_standby_volume');
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // remote_binlog_count - computed: true, optional: false, required: false
  public get remoteBinlogCount() {
    return this.getNumberAttribute('remote_binlog_count');
  }

  // remote_binlog_volume - computed: true, optional: false, required: false
  public get remoteBinlogVolume() {
    return this.getNumberAttribute('remote_binlog_volume');
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
      id: cdktf.stringToTerraform(this._id),
      product: cdktf.stringToTerraform(this._product),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      product: {
        value: cdktf.stringToHclTerraform(this._product),
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
