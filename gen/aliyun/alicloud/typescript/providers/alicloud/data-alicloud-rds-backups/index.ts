// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudRdsBackupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups#backup_mode DataAlicloudRdsBackups#backup_mode}
  */
  readonly backupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups#backup_status DataAlicloudRdsBackups#backup_status}
  */
  readonly backupStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups#db_instance_id DataAlicloudRdsBackups#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups#end_time DataAlicloudRdsBackups#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups#id DataAlicloudRdsBackups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups#ids DataAlicloudRdsBackups#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups#output_file DataAlicloudRdsBackups#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups#start_time DataAlicloudRdsBackups#start_time}
  */
  readonly startTime?: string;
}
export interface DataAlicloudRdsBackupsBackups {
}

export function dataAlicloudRdsBackupsBackupsToTerraform(struct?: DataAlicloudRdsBackupsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudRdsBackupsBackupsToHclTerraform(struct?: DataAlicloudRdsBackupsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudRdsBackupsBackupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudRdsBackupsBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudRdsBackupsBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_download_url - computed: true, optional: false, required: false
  public get backupDownloadUrl() {
    return this.getStringAttribute('backup_download_url');
  }

  // backup_end_time - computed: true, optional: false, required: false
  public get backupEndTime() {
    return this.getStringAttribute('backup_end_time');
  }

  // backup_id - computed: true, optional: false, required: false
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }

  // backup_initiator - computed: true, optional: false, required: false
  public get backupInitiator() {
    return this.getStringAttribute('backup_initiator');
  }

  // backup_intranet_download_url - computed: true, optional: false, required: false
  public get backupIntranetDownloadUrl() {
    return this.getStringAttribute('backup_intranet_download_url');
  }

  // backup_method - computed: true, optional: false, required: false
  public get backupMethod() {
    return this.getStringAttribute('backup_method');
  }

  // backup_mode - computed: true, optional: false, required: false
  public get backupMode() {
    return this.getStringAttribute('backup_mode');
  }

  // backup_size - computed: true, optional: false, required: false
  public get backupSize() {
    return this.getStringAttribute('backup_size');
  }

  // backup_start_time - computed: true, optional: false, required: false
  public get backupStartTime() {
    return this.getStringAttribute('backup_start_time');
  }

  // backup_status - computed: true, optional: false, required: false
  public get backupStatus() {
    return this.getStringAttribute('backup_status');
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // consistent_time - computed: true, optional: false, required: false
  public get consistentTime() {
    return this.getStringAttribute('consistent_time');
  }

  // copy_only_backup - computed: true, optional: false, required: false
  public get copyOnlyBackup() {
    return this.getStringAttribute('copy_only_backup');
  }

  // db_instance_id - computed: true, optional: false, required: false
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getStringAttribute('encryption');
  }

  // host_instance_id - computed: true, optional: false, required: false
  public get hostInstanceId() {
    return this.getStringAttribute('host_instance_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_avail - computed: true, optional: false, required: false
  public get isAvail() {
    return this.getNumberAttribute('is_avail');
  }

  // meta_status - computed: true, optional: false, required: false
  public get metaStatus() {
    return this.getStringAttribute('meta_status');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // store_status - computed: true, optional: false, required: false
  public get storeStatus() {
    return this.getStringAttribute('store_status');
  }
}

export class DataAlicloudRdsBackupsBackupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudRdsBackupsBackupsOutputReference {
    return new DataAlicloudRdsBackupsBackupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups alicloud_rds_backups}
*/
export class DataAlicloudRdsBackups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_backups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudRdsBackups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudRdsBackups to import
  * @param importFromId The id of the existing DataAlicloudRdsBackups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudRdsBackups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_backups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/rds_backups alicloud_rds_backups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudRdsBackupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudRdsBackupsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_backups',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupMode = config.backupMode;
    this._backupStatus = config.backupStatus;
    this._dbInstanceId = config.dbInstanceId;
    this._endTime = config.endTime;
    this._id = config.id;
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_mode - computed: false, optional: true, required: false
  private _backupMode?: string; 
  public get backupMode() {
    return this.getStringAttribute('backup_mode');
  }
  public set backupMode(value: string) {
    this._backupMode = value;
  }
  public resetBackupMode() {
    this._backupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupModeInput() {
    return this._backupMode;
  }

  // backup_status - computed: false, optional: true, required: false
  private _backupStatus?: string; 
  public get backupStatus() {
    return this.getStringAttribute('backup_status');
  }
  public set backupStatus(value: string) {
    this._backupStatus = value;
  }
  public resetBackupStatus() {
    this._backupStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStatusInput() {
    return this._backupStatus;
  }

  // backups - computed: true, optional: false, required: false
  private _backups = new DataAlicloudRdsBackupsBackupsList(this, "backups", false);
  public get backups() {
    return this._backups;
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

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_mode: cdktf.stringToTerraform(this._backupMode),
      backup_status: cdktf.stringToTerraform(this._backupStatus),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_mode: {
        value: cdktf.stringToHclTerraform(this._backupMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_status: {
        value: cdktf.stringToHclTerraform(this._backupStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
