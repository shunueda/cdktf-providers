// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/backupschedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGridscaleBackupscheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/backupschedule#id DataGridscaleBackupschedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of a resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/backupschedule#resource_id DataGridscaleBackupschedule#resource_id}
  */
  readonly resourceId: string;
  /**
  * UUID of the storage used to create backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/backupschedule#storage_uuid DataGridscaleBackupschedule#storage_uuid}
  */
  readonly storageUuid: string;
}
export interface DataGridscaleBackupscheduleStorageBackups {
}

export function dataGridscaleBackupscheduleStorageBackupsToTerraform(struct?: DataGridscaleBackupscheduleStorageBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGridscaleBackupscheduleStorageBackupsToHclTerraform(struct?: DataGridscaleBackupscheduleStorageBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGridscaleBackupscheduleStorageBackupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGridscaleBackupscheduleStorageBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGridscaleBackupscheduleStorageBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_uuid - computed: true, optional: false, required: false
  public get objectUuid() {
    return this.getStringAttribute('object_uuid');
  }
}

export class DataGridscaleBackupscheduleStorageBackupsList extends cdktf.ComplexList {

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
  public get(index: number): DataGridscaleBackupscheduleStorageBackupsOutputReference {
    return new DataGridscaleBackupscheduleStorageBackupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/backupschedule gridscale_backupschedule}
*/
export class DataGridscaleBackupschedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_backupschedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGridscaleBackupschedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGridscaleBackupschedule to import
  * @param importFromId The id of the existing DataGridscaleBackupschedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/backupschedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGridscaleBackupschedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_backupschedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/backupschedule gridscale_backupschedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGridscaleBackupscheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataGridscaleBackupscheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_backupschedule',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3'
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
    this._resourceId = config.resourceId;
    this._storageUuid = config.storageUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // backup_location_name - computed: true, optional: false, required: false
  public get backupLocationName() {
    return this.getStringAttribute('backup_location_name');
  }

  // backup_location_uuid - computed: true, optional: false, required: false
  public get backupLocationUuid() {
    return this.getStringAttribute('backup_location_uuid');
  }

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // keep_backups - computed: true, optional: false, required: false
  public get keepBackups() {
    return this.getNumberAttribute('keep_backups');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_runtime - computed: true, optional: false, required: false
  public get nextRuntime() {
    return this.getStringAttribute('next_runtime');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // run_interval - computed: true, optional: false, required: false
  public get runInterval() {
    return this.getNumberAttribute('run_interval');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_backups - computed: true, optional: false, required: false
  private _storageBackups = new DataGridscaleBackupscheduleStorageBackupsList(this, "storage_backups", true);
  public get storageBackups() {
    return this._storageBackups;
  }

  // storage_uuid - computed: false, optional: false, required: true
  private _storageUuid?: string; 
  public get storageUuid() {
    return this.getStringAttribute('storage_uuid');
  }
  public set storageUuid(value: string) {
    this._storageUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUuidInput() {
    return this._storageUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      storage_uuid: cdktf.stringToTerraform(this._storageUuid),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_uuid: {
        value: cdktf.stringToHclTerraform(this._storageUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
