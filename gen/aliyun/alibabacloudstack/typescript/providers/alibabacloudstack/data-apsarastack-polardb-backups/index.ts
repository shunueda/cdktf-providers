// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_polardb_backups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackPolardbBackupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_polardb_backups#db_instance_id DataApsarastackPolardbBackups#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_polardb_backups#end_time DataApsarastackPolardbBackups#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_polardb_backups#id DataApsarastackPolardbBackups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_polardb_backups#ids DataApsarastackPolardbBackups#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_polardb_backups#start_time DataApsarastackPolardbBackups#start_time}
  */
  readonly startTime?: string;
}
export interface DataApsarastackPolardbBackupsBackups {
}

export function dataApsarastackPolardbBackupsBackupsToTerraform(struct?: DataApsarastackPolardbBackupsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackPolardbBackupsBackupsToHclTerraform(struct?: DataApsarastackPolardbBackupsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackPolardbBackupsBackupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackPolardbBackupsBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackPolardbBackupsBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_db_names - computed: true, optional: false, required: false
  public get backupDbNames() {
    return this.getStringAttribute('backup_db_names');
  }

  // backup_end_time - computed: true, optional: false, required: false
  public get backupEndTime() {
    return this.getStringAttribute('backup_end_time');
  }

  // backup_id - computed: true, optional: false, required: false
  public get backupId() {
    return this.getNumberAttribute('backup_id');
  }

  // backup_location - computed: true, optional: false, required: false
  public get backupLocation() {
    return this.getStringAttribute('backup_location');
  }

  // backup_method - computed: true, optional: false, required: false
  public get backupMethod() {
    return this.getStringAttribute('backup_method');
  }

  // backup_mode - computed: true, optional: false, required: false
  public get backupMode() {
    return this.getStringAttribute('backup_mode');
  }

  // backup_scale - computed: true, optional: false, required: false
  public get backupScale() {
    return this.getStringAttribute('backup_scale');
  }

  // backup_size - computed: true, optional: false, required: false
  public get backupSize() {
    return this.getNumberAttribute('backup_size');
  }

  // backup_start_time - computed: true, optional: false, required: false
  public get backupStartTime() {
    return this.getStringAttribute('backup_start_time');
  }

  // backup_status - computed: true, optional: false, required: false
  public get backupStatus() {
    return this.getStringAttribute('backup_status');
  }

  // backup_strategy - computed: true, optional: false, required: false
  public get backupStrategy() {
    return this.getStringAttribute('backup_strategy');
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // db_instance_id - computed: true, optional: false, required: false
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }

  // host_instance_id - computed: true, optional: false, required: false
  public get hostInstanceId() {
    return this.getNumberAttribute('host_instance_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta_status - computed: true, optional: false, required: false
  public get metaStatus() {
    return this.getStringAttribute('meta_status');
  }

  // slave_status - computed: true, optional: false, required: false
  public get slaveStatus() {
    return this.getStringAttribute('slave_status');
  }

  // store_status - computed: true, optional: false, required: false
  public get storeStatus() {
    return this.getStringAttribute('store_status');
  }
}

export class DataApsarastackPolardbBackupsBackupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackPolardbBackupsBackupsOutputReference {
    return new DataApsarastackPolardbBackupsBackupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_polardb_backups apsarastack_polardb_backups}
*/
export class DataApsarastackPolardbBackups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_polardb_backups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackPolardbBackups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackPolardbBackups to import
  * @param importFromId The id of the existing DataApsarastackPolardbBackups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_polardb_backups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackPolardbBackups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_polardb_backups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_polardb_backups apsarastack_polardb_backups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackPolardbBackupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackPolardbBackupsConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_polardb_backups',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._endTime = config.endTime;
    this._id = config.id;
    this._ids = config.ids;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backups - computed: true, optional: false, required: false
  private _backups = new DataApsarastackPolardbBackupsBackupsList(this, "backups", false);
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
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      start_time: cdktf.stringToTerraform(this._startTime),
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
