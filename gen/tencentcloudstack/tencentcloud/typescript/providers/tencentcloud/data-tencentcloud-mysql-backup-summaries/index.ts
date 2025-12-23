// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/mysql_backup_summaries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMysqlBackupSummariesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/mysql_backup_summaries#id DataTencentcloudMysqlBackupSummaries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify to sort by a certain item, the optional values include: BackupVolume: backup volume, DataBackupVolume: data backup volume, BinlogBackupVolume: log backup volume, AutoBackupVolume: automatic backup volume, ManualBackupVolume: manual backup volume. By default, they are sorted by BackupVolume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/mysql_backup_summaries#order_by DataTencentcloudMysqlBackupSummaries#order_by}
  */
  readonly orderBy?: string;
  /**
  * Specify the sorting direction, optional values include: ASC: forward order, DESC: reverse order. The default is ASC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/mysql_backup_summaries#order_direction DataTencentcloudMysqlBackupSummaries#order_direction}
  */
  readonly orderDirection?: string;
  /**
  * The type of cloud database product to be queried, currently only supports `mysql`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/mysql_backup_summaries#product DataTencentcloudMysqlBackupSummaries#product}
  */
  readonly product: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/mysql_backup_summaries#result_output_file DataTencentcloudMysqlBackupSummaries#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudMysqlBackupSummariesItems {
}

export function dataTencentcloudMysqlBackupSummariesItemsToTerraform(struct?: DataTencentcloudMysqlBackupSummariesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMysqlBackupSummariesItemsToHclTerraform(struct?: DataTencentcloudMysqlBackupSummariesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMysqlBackupSummariesItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMysqlBackupSummariesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMysqlBackupSummariesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_backup_count - computed: true, optional: false, required: false
  public get autoBackupCount() {
    return this.getNumberAttribute('auto_backup_count');
  }

  // auto_backup_volume - computed: true, optional: false, required: false
  public get autoBackupVolume() {
    return this.getNumberAttribute('auto_backup_volume');
  }

  // backup_volume - computed: true, optional: false, required: false
  public get backupVolume() {
    return this.getNumberAttribute('backup_volume');
  }

  // binlog_backup_count - computed: true, optional: false, required: false
  public get binlogBackupCount() {
    return this.getNumberAttribute('binlog_backup_count');
  }

  // binlog_backup_volume - computed: true, optional: false, required: false
  public get binlogBackupVolume() {
    return this.getNumberAttribute('binlog_backup_volume');
  }

  // data_backup_count - computed: true, optional: false, required: false
  public get dataBackupCount() {
    return this.getNumberAttribute('data_backup_count');
  }

  // data_backup_volume - computed: true, optional: false, required: false
  public get dataBackupVolume() {
    return this.getNumberAttribute('data_backup_volume');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // manual_backup_count - computed: true, optional: false, required: false
  public get manualBackupCount() {
    return this.getNumberAttribute('manual_backup_count');
  }

  // manual_backup_volume - computed: true, optional: false, required: false
  public get manualBackupVolume() {
    return this.getNumberAttribute('manual_backup_volume');
  }
}

export class DataTencentcloudMysqlBackupSummariesItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMysqlBackupSummariesItemsOutputReference {
    return new DataTencentcloudMysqlBackupSummariesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/mysql_backup_summaries tencentcloud_mysql_backup_summaries}
*/
export class DataTencentcloudMysqlBackupSummaries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_backup_summaries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMysqlBackupSummaries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMysqlBackupSummaries to import
  * @param importFromId The id of the existing DataTencentcloudMysqlBackupSummaries that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/mysql_backup_summaries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMysqlBackupSummaries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_backup_summaries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/mysql_backup_summaries tencentcloud_mysql_backup_summaries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMysqlBackupSummariesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMysqlBackupSummariesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_backup_summaries',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
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
    this._orderBy = config.orderBy;
    this._orderDirection = config.orderDirection;
    this._product = config.product;
    this._resultOutputFile = config.resultOutputFile;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudMysqlBackupSummariesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // order_direction - computed: false, optional: true, required: false
  private _orderDirection?: string; 
  public get orderDirection() {
    return this.getStringAttribute('order_direction');
  }
  public set orderDirection(value: string) {
    this._orderDirection = value;
  }
  public resetOrderDirection() {
    this._orderDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderDirectionInput() {
    return this._orderDirection;
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
      order_by: cdktf.stringToTerraform(this._orderBy),
      order_direction: cdktf.stringToTerraform(this._orderDirection),
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
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_direction: {
        value: cdktf.stringToHclTerraform(this._orderDirection),
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
