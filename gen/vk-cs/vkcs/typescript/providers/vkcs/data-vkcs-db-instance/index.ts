// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of flavor for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#flavor_id DataVkcsDbInstance#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * The hostname of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#hostname DataVkcsDbInstance#hostname}
  */
  readonly hostname?: string;
  /**
  * The id of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#id DataVkcsDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IP address of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#ip DataVkcsDbInstance#ip}
  */
  readonly ip?: string[];
  /**
  * The name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#name DataVkcsDbInstance#name}
  */
  readonly name?: string;
  /**
  * Region of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#region DataVkcsDbInstance#region}
  */
  readonly region?: string;
  /**
  * Instance status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#status DataVkcsDbInstance#status}
  */
  readonly status?: string;
  /**
  * backup_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#backup_schedule DataVkcsDbInstance#backup_schedule}
  */
  readonly backupSchedule?: DataVkcsDbInstanceBackupSchedule[] | cdktf.IResolvable;
  /**
  * datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#datastore DataVkcsDbInstance#datastore}
  */
  readonly datastore?: DataVkcsDbInstanceDatastore;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#volume DataVkcsDbInstance#volume}
  */
  readonly volume?: DataVkcsDbInstanceVolume;
}
export interface DataVkcsDbInstanceBackupSchedule {
  /**
  * Time interval between backups, specified in hours. Available values: 3, 6, 8, 12, 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#interval_hours DataVkcsDbInstance#interval_hours}
  */
  readonly intervalHours: number;
  /**
  * Number of backups to be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#keep_count DataVkcsDbInstance#keep_count}
  */
  readonly keepCount: number;
  /**
  * Name of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#name DataVkcsDbInstance#name}
  */
  readonly name: string;
  /**
  * Hours part of timestamp of initial backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#start_hours DataVkcsDbInstance#start_hours}
  */
  readonly startHours: number;
  /**
  * Minutes part of timestamp of initial backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#start_minutes DataVkcsDbInstance#start_minutes}
  */
  readonly startMinutes: number;
}

export function dataVkcsDbInstanceBackupScheduleToTerraform(struct?: DataVkcsDbInstanceBackupSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_hours: cdktf.numberToTerraform(struct!.intervalHours),
    keep_count: cdktf.numberToTerraform(struct!.keepCount),
    name: cdktf.stringToTerraform(struct!.name),
    start_hours: cdktf.numberToTerraform(struct!.startHours),
    start_minutes: cdktf.numberToTerraform(struct!.startMinutes),
  }
}


export function dataVkcsDbInstanceBackupScheduleToHclTerraform(struct?: DataVkcsDbInstanceBackupSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.intervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_count: {
      value: cdktf.numberToHclTerraform(struct!.keepCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_hours: {
      value: cdktf.numberToHclTerraform(struct!.startHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_minutes: {
      value: cdktf.numberToHclTerraform(struct!.startMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVkcsDbInstanceBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVkcsDbInstanceBackupSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalHours = this._intervalHours;
    }
    if (this._keepCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepCount = this._keepCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHours = this._startHours;
    }
    if (this._startMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMinutes = this._startMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVkcsDbInstanceBackupSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intervalHours = undefined;
      this._keepCount = undefined;
      this._name = undefined;
      this._startHours = undefined;
      this._startMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intervalHours = value.intervalHours;
      this._keepCount = value.keepCount;
      this._name = value.name;
      this._startHours = value.startHours;
      this._startMinutes = value.startMinutes;
    }
  }

  // interval_hours - computed: false, optional: false, required: true
  private _intervalHours?: number; 
  public get intervalHours() {
    return this.getNumberAttribute('interval_hours');
  }
  public set intervalHours(value: number) {
    this._intervalHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalHoursInput() {
    return this._intervalHours;
  }

  // keep_count - computed: false, optional: false, required: true
  private _keepCount?: number; 
  public get keepCount() {
    return this.getNumberAttribute('keep_count');
  }
  public set keepCount(value: number) {
    this._keepCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepCountInput() {
    return this._keepCount;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // start_hours - computed: false, optional: false, required: true
  private _startHours?: number; 
  public get startHours() {
    return this.getNumberAttribute('start_hours');
  }
  public set startHours(value: number) {
    this._startHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHoursInput() {
    return this._startHours;
  }

  // start_minutes - computed: false, optional: false, required: true
  private _startMinutes?: number; 
  public get startMinutes() {
    return this.getNumberAttribute('start_minutes');
  }
  public set startMinutes(value: number) {
    this._startMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinutesInput() {
    return this._startMinutes;
  }
}

export class DataVkcsDbInstanceBackupScheduleList extends cdktf.ComplexList {
  public internalValue? : DataVkcsDbInstanceBackupSchedule[] | cdktf.IResolvable

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
  public get(index: number): DataVkcsDbInstanceBackupScheduleOutputReference {
    return new DataVkcsDbInstanceBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVkcsDbInstanceDatastore {
  /**
  * Type of the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#type DataVkcsDbInstance#type}
  */
  readonly type: string;
  /**
  * Version of the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#version DataVkcsDbInstance#version}
  */
  readonly version: string;
}

export function dataVkcsDbInstanceDatastoreToTerraform(struct?: DataVkcsDbInstanceDatastoreOutputReference | DataVkcsDbInstanceDatastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataVkcsDbInstanceDatastoreToHclTerraform(struct?: DataVkcsDbInstanceDatastoreOutputReference | DataVkcsDbInstanceDatastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVkcsDbInstanceDatastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataVkcsDbInstanceDatastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVkcsDbInstanceDatastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataVkcsDbInstanceVolume {
  /**
  * Size of the instance volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#size DataVkcsDbInstance#size}
  */
  readonly size: number;
  /**
  * Size of the used volume space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#used DataVkcsDbInstance#used}
  */
  readonly used: number;
  /**
  * ID of the instance volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#volume_id DataVkcsDbInstance#volume_id}
  */
  readonly volumeId: string;
  /**
  * Type of the instance volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#volume_type DataVkcsDbInstance#volume_type}
  */
  readonly volumeType: string;
}

export function dataVkcsDbInstanceVolumeToTerraform(struct?: DataVkcsDbInstanceVolumeOutputReference | DataVkcsDbInstanceVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    used: cdktf.numberToTerraform(struct!.used),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function dataVkcsDbInstanceVolumeToHclTerraform(struct?: DataVkcsDbInstanceVolumeOutputReference | DataVkcsDbInstanceVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used: {
      value: cdktf.numberToHclTerraform(struct!.used),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVkcsDbInstanceVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataVkcsDbInstanceVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._used !== undefined) {
      hasAnyValues = true;
      internalValueResult.used = this._used;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVkcsDbInstanceVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
      this._used = undefined;
      this._volumeId = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
      this._used = value.used;
      this._volumeId = value.volumeId;
      this._volumeType = value.volumeType;
    }
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // used - computed: false, optional: false, required: true
  private _used?: number; 
  public get used() {
    return this.getNumberAttribute('used');
  }
  public set used(value: number) {
    this._used = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usedInput() {
    return this._used;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance vkcs_db_instance}
*/
export class DataVkcsDbInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsDbInstance to import
  * @param importFromId The id of the existing DataVkcsDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/data-sources/db_instance vkcs_db_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataVkcsDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._flavorId = config.flavorId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ip = config.ip;
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
    this._backupSchedule.internalValue = config.backupSchedule;
    this._datastore.internalValue = config.datastore;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flavor_id - computed: false, optional: true, required: false
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // backup_schedule - computed: false, optional: true, required: false
  private _backupSchedule = new DataVkcsDbInstanceBackupScheduleList(this, "backup_schedule", false);
  public get backupSchedule() {
    return this._backupSchedule;
  }
  public putBackupSchedule(value: DataVkcsDbInstanceBackupSchedule[] | cdktf.IResolvable) {
    this._backupSchedule.internalValue = value;
  }
  public resetBackupSchedule() {
    this._backupSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule.internalValue;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore = new DataVkcsDbInstanceDatastoreOutputReference(this, "datastore");
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: DataVkcsDbInstanceDatastore) {
    this._datastore.internalValue = value;
  }
  public resetDatastore() {
    this._datastore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new DataVkcsDbInstanceVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: DataVkcsDbInstanceVolume) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ip),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      backup_schedule: cdktf.listMapper(dataVkcsDbInstanceBackupScheduleToTerraform, true)(this._backupSchedule.internalValue),
      datastore: dataVkcsDbInstanceDatastoreToTerraform(this._datastore.internalValue),
      volume: dataVkcsDbInstanceVolumeToTerraform(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ip),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_schedule: {
        value: cdktf.listMapperHcl(dataVkcsDbInstanceBackupScheduleToHclTerraform, true)(this._backupSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataVkcsDbInstanceBackupScheduleList",
      },
      datastore: {
        value: dataVkcsDbInstanceDatastoreToHclTerraform(this._datastore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataVkcsDbInstanceDatastoreList",
      },
      volume: {
        value: dataVkcsDbInstanceVolumeToHclTerraform(this._volume.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataVkcsDbInstanceVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
