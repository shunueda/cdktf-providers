// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudRdsCrossRegionBackupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#backup_id DataAlicloudRdsCrossRegionBackups#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#cross_backup_id DataAlicloudRdsCrossRegionBackups#cross_backup_id}
  */
  readonly crossBackupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#cross_backup_region DataAlicloudRdsCrossRegionBackups#cross_backup_region}
  */
  readonly crossBackupRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#db_instance_id DataAlicloudRdsCrossRegionBackups#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#end_time DataAlicloudRdsCrossRegionBackups#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#id DataAlicloudRdsCrossRegionBackups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#ids DataAlicloudRdsCrossRegionBackups#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#output_file DataAlicloudRdsCrossRegionBackups#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#resource_group_id DataAlicloudRdsCrossRegionBackups#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#start_time DataAlicloudRdsCrossRegionBackups#start_time}
  */
  readonly startTime?: string;
}
export interface DataAlicloudRdsCrossRegionBackupsBackups {
}

export function dataAlicloudRdsCrossRegionBackupsBackupsToTerraform(struct?: DataAlicloudRdsCrossRegionBackupsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudRdsCrossRegionBackupsBackupsToHclTerraform(struct?: DataAlicloudRdsCrossRegionBackupsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudRdsCrossRegionBackupsBackupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudRdsCrossRegionBackupsBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudRdsCrossRegionBackupsBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_end_time - computed: true, optional: false, required: false
  public get backupEndTime() {
    return this.getStringAttribute('backup_end_time');
  }

  // backup_method - computed: true, optional: false, required: false
  public get backupMethod() {
    return this.getStringAttribute('backup_method');
  }

  // backup_set_scale - computed: true, optional: false, required: false
  public get backupSetScale() {
    return this.getStringAttribute('backup_set_scale');
  }

  // backup_set_status - computed: true, optional: false, required: false
  public get backupSetStatus() {
    return this.getNumberAttribute('backup_set_status');
  }

  // backup_start_time - computed: true, optional: false, required: false
  public get backupStartTime() {
    return this.getStringAttribute('backup_start_time');
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // consistent_time - computed: true, optional: false, required: false
  public get consistentTime() {
    return this.getStringAttribute('consistent_time');
  }

  // cross_backup_download_link - computed: true, optional: false, required: false
  public get crossBackupDownloadLink() {
    return this.getStringAttribute('cross_backup_download_link');
  }

  // cross_backup_id - computed: true, optional: false, required: false
  public get crossBackupId() {
    return this.getStringAttribute('cross_backup_id');
  }

  // cross_backup_region - computed: true, optional: false, required: false
  public get crossBackupRegion() {
    return this.getStringAttribute('cross_backup_region');
  }

  // cross_backup_set_file - computed: true, optional: false, required: false
  public get crossBackupSetFile() {
    return this.getStringAttribute('cross_backup_set_file');
  }

  // cross_backup_set_location - computed: true, optional: false, required: false
  public get crossBackupSetLocation() {
    return this.getStringAttribute('cross_backup_set_location');
  }

  // cross_backup_set_size - computed: true, optional: false, required: false
  public get crossBackupSetSize() {
    return this.getNumberAttribute('cross_backup_set_size');
  }

  // db_instance_storage_type - computed: true, optional: false, required: false
  public get dbInstanceStorageType() {
    return this.getStringAttribute('db_instance_storage_type');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // recovery_begin_time - computed: true, optional: false, required: false
  public get recoveryBeginTime() {
    return this.getStringAttribute('recovery_begin_time');
  }

  // recovery_end_time - computed: true, optional: false, required: false
  public get recoveryEndTime() {
    return this.getStringAttribute('recovery_end_time');
  }

  // restore_regions - computed: true, optional: false, required: false
  public get restoreRegions() {
    return this.getListAttribute('restore_regions');
  }
}

export class DataAlicloudRdsCrossRegionBackupsBackupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudRdsCrossRegionBackupsBackupsOutputReference {
    return new DataAlicloudRdsCrossRegionBackupsBackupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups alicloud_rds_cross_region_backups}
*/
export class DataAlicloudRdsCrossRegionBackups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_cross_region_backups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudRdsCrossRegionBackups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudRdsCrossRegionBackups to import
  * @param importFromId The id of the existing DataAlicloudRdsCrossRegionBackups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudRdsCrossRegionBackups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_cross_region_backups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/rds_cross_region_backups alicloud_rds_cross_region_backups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudRdsCrossRegionBackupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudRdsCrossRegionBackupsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_cross_region_backups',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupId = config.backupId;
    this._crossBackupId = config.crossBackupId;
    this._crossBackupRegion = config.crossBackupRegion;
    this._dbInstanceId = config.dbInstanceId;
    this._endTime = config.endTime;
    this._id = config.id;
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._resourceGroupId = config.resourceGroupId;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backups - computed: true, optional: false, required: false
  private _backups = new DataAlicloudRdsCrossRegionBackupsBackupsList(this, "backups", false);
  public get backups() {
    return this._backups;
  }

  // cross_backup_id - computed: false, optional: true, required: false
  private _crossBackupId?: string; 
  public get crossBackupId() {
    return this.getStringAttribute('cross_backup_id');
  }
  public set crossBackupId(value: string) {
    this._crossBackupId = value;
  }
  public resetCrossBackupId() {
    this._crossBackupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossBackupIdInput() {
    return this._crossBackupId;
  }

  // cross_backup_region - computed: false, optional: true, required: false
  private _crossBackupRegion?: string; 
  public get crossBackupRegion() {
    return this.getStringAttribute('cross_backup_region');
  }
  public set crossBackupRegion(value: string) {
    this._crossBackupRegion = value;
  }
  public resetCrossBackupRegion() {
    this._crossBackupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossBackupRegionInput() {
    return this._crossBackupRegion;
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

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
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
      backup_id: cdktf.stringToTerraform(this._backupId),
      cross_backup_id: cdktf.stringToTerraform(this._crossBackupId),
      cross_backup_region: cdktf.stringToTerraform(this._crossBackupRegion),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_backup_id: {
        value: cdktf.stringToHclTerraform(this._crossBackupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_backup_region: {
        value: cdktf.stringToHclTerraform(this._crossBackupRegion),
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
