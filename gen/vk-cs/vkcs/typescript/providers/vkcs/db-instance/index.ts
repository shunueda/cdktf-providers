// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the availability zone of the instance. Changing this creates a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#availability_zone DbInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Enable cloud monitoring for the instance. Changing this for Redis creates a new instance._new_since_v0.2.0_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#cloud_monitoring_enabled DbInstance#cloud_monitoring_enabled}
  */
  readonly cloudMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * The id of the configuration attached to instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#configuration_id DbInstance#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * The ID of flavor for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#flavor_id DbInstance#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Indicates whether floating ip is created for instance. Changing this creates a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#floating_ip_enabled DbInstance#floating_ip_enabled}
  */
  readonly floatingIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#id DbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the keypair to be attached to instance. Changing this creates a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#keypair DbInstance#keypair}
  */
  readonly keypair?: string;
  /**
  * The name of the instance. Changing this creates a new instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#name DbInstance#name}
  */
  readonly name: string;
  /**
  * Region to create resource in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#region DbInstance#region}
  */
  readonly region?: string;
  /**
  * ID of the instance, that current instance is replica of. Instance's datastore must be one of: `postgrespro_enterprise`, `mysql`, `postgresql`, `postgrespro_enterprise_1c`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#replica_of DbInstance#replica_of}
  */
  readonly replicaOf?: string;
  /**
  * Indicates whether root user is enabled for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#root_enabled DbInstance#root_enabled}
  */
  readonly rootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Password for the root user of the instance. If this field is empty and root user is enabled, then after creation of the instance this field will contain auto-generated root user password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#root_password DbInstance#root_password}
  */
  readonly rootPassword?: string;
  /**
  * Size of the instance volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#size DbInstance#size}
  */
  readonly size: number;
  /**
  * The type of the instance volume. Changing this creates a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#volume_type DbInstance#volume_type}
  */
  readonly volumeType: string;
  /**
  * backup_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#backup_schedule DbInstance#backup_schedule}
  */
  readonly backupSchedule?: DbInstanceBackupSchedule;
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#capabilities DbInstance#capabilities}
  */
  readonly capabilities?: DbInstanceCapabilities[] | cdktf.IResolvable;
  /**
  * datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#datastore DbInstance#datastore}
  */
  readonly datastore: DbInstanceDatastore;
  /**
  * disk_autoexpand block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#disk_autoexpand DbInstance#disk_autoexpand}
  */
  readonly diskAutoexpand?: DbInstanceDiskAutoexpand;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#network DbInstance#network}
  */
  readonly network?: DbInstanceNetwork[] | cdktf.IResolvable;
  /**
  * restore_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#restore_point DbInstance#restore_point}
  */
  readonly restorePoint?: DbInstanceRestorePoint;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#timeouts DbInstance#timeouts}
  */
  readonly timeouts?: DbInstanceTimeouts;
  /**
  * vendor_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#vendor_options DbInstance#vendor_options}
  */
  readonly vendorOptions?: DbInstanceVendorOptions;
  /**
  * wal_disk_autoexpand block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#wal_disk_autoexpand DbInstance#wal_disk_autoexpand}
  */
  readonly walDiskAutoexpand?: DbInstanceWalDiskAutoexpand;
  /**
  * wal_volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#wal_volume DbInstance#wal_volume}
  */
  readonly walVolume?: DbInstanceWalVolume;
}
export interface DbInstanceBackupSchedule {
  /**
  * Time interval between backups, specified in hours. Available values: 3, 6, 8, 12, 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#interval_hours DbInstance#interval_hours}
  */
  readonly intervalHours: number;
  /**
  * Number of backups to be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#keep_count DbInstance#keep_count}
  */
  readonly keepCount: number;
  /**
  * Name of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#name DbInstance#name}
  */
  readonly name: string;
  /**
  * Hours part of timestamp of initial backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#start_hours DbInstance#start_hours}
  */
  readonly startHours: number;
  /**
  * Minutes part of timestamp of initial backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#start_minutes DbInstance#start_minutes}
  */
  readonly startMinutes: number;
}

export function dbInstanceBackupScheduleToTerraform(struct?: DbInstanceBackupScheduleOutputReference | DbInstanceBackupSchedule): any {
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


export function dbInstanceBackupScheduleToHclTerraform(struct?: DbInstanceBackupScheduleOutputReference | DbInstanceBackupSchedule): any {
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

export class DbInstanceBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceBackupSchedule | undefined {
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

  public set internalValue(value: DbInstanceBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalHours = undefined;
      this._keepCount = undefined;
      this._name = undefined;
      this._startHours = undefined;
      this._startMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface DbInstanceCapabilities {
  /**
  * The name of the capability to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#name DbInstance#name}
  */
  readonly name: string;
  /**
  * Map of key-value settings of the capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#settings DbInstance#settings}
  */
  readonly settings?: { [key: string]: string };
}

export function dbInstanceCapabilitiesToTerraform(struct?: DbInstanceCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
  }
}


export function dbInstanceCapabilitiesToHclTerraform(struct?: DbInstanceCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbInstanceCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbInstanceCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._settings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._settings = value.settings;
    }
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

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }
}

export class DbInstanceCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : DbInstanceCapabilities[] | cdktf.IResolvable

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
  public get(index: number): DbInstanceCapabilitiesOutputReference {
    return new DbInstanceCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbInstanceDatastore {
  /**
  * Type of the datastore. Changing this creates a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#type DbInstance#type}
  */
  readonly type: string;
  /**
  * Version of the datastore. Changing this creates a new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#version DbInstance#version}
  */
  readonly version: string;
}

export function dbInstanceDatastoreToTerraform(struct?: DbInstanceDatastoreOutputReference | DbInstanceDatastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dbInstanceDatastoreToHclTerraform(struct?: DbInstanceDatastoreOutputReference | DbInstanceDatastore): any {
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

export class DbInstanceDatastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceDatastore | undefined {
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

  public set internalValue(value: DbInstanceDatastore | undefined) {
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
export interface DbInstanceDiskAutoexpand {
  /**
  * Indicates whether autoresize is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#autoexpand DbInstance#autoexpand}
  */
  readonly autoexpand?: boolean | cdktf.IResolvable;
  /**
  * Maximum disk size for autoresize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#max_disk_size DbInstance#max_disk_size}
  */
  readonly maxDiskSize?: number;
}

export function dbInstanceDiskAutoexpandToTerraform(struct?: DbInstanceDiskAutoexpandOutputReference | DbInstanceDiskAutoexpand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoexpand: cdktf.booleanToTerraform(struct!.autoexpand),
    max_disk_size: cdktf.numberToTerraform(struct!.maxDiskSize),
  }
}


export function dbInstanceDiskAutoexpandToHclTerraform(struct?: DbInstanceDiskAutoexpandOutputReference | DbInstanceDiskAutoexpand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoexpand: {
      value: cdktf.booleanToHclTerraform(struct!.autoexpand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.maxDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbInstanceDiskAutoexpandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceDiskAutoexpand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoexpand !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoexpand = this._autoexpand;
    }
    if (this._maxDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDiskSize = this._maxDiskSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceDiskAutoexpand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoexpand = undefined;
      this._maxDiskSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoexpand = value.autoexpand;
      this._maxDiskSize = value.maxDiskSize;
    }
  }

  // autoexpand - computed: false, optional: true, required: false
  private _autoexpand?: boolean | cdktf.IResolvable; 
  public get autoexpand() {
    return this.getBooleanAttribute('autoexpand');
  }
  public set autoexpand(value: boolean | cdktf.IResolvable) {
    this._autoexpand = value;
  }
  public resetAutoexpand() {
    this._autoexpand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoexpandInput() {
    return this._autoexpand;
  }

  // max_disk_size - computed: false, optional: true, required: false
  private _maxDiskSize?: number; 
  public get maxDiskSize() {
    return this.getNumberAttribute('max_disk_size');
  }
  public set maxDiskSize(value: number) {
    this._maxDiskSize = value;
  }
  public resetMaxDiskSize() {
    this._maxDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskSizeInput() {
    return this._maxDiskSize;
  }
}
export interface DbInstanceNetwork {
  /**
  * The IPv4 address. Changing this creates a new instance. _note_ This argument conflicts with "replica_of". Setting both at the same time causes "fixed_ip_v4" to be ignored. **Deprecated** This argument is no longer supported, and the instance will have a random ip address in the selected subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#fixed_ip_v4 DbInstance#fixed_ip_v4}
  */
  readonly fixedIpV4?: string;
  /**
  * The port id of the network. Changing this creates a new instance. **Deprecated** This argument is deprecated, please do not use it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#port DbInstance#port}
  */
  readonly port?: string;
  /**
  * An array of one or more security group IDs to associate with the instance. Changing this creates a new instance._new_since_v0.2.0_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#security_groups DbInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * The id of the subnet. Changing this creates a new instance._new_since_v0.1.15_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#subnet_id DbInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The id of the network. Changing this creates a new instance. _note_ Although this argument is marked as optional, it is actually required at the moment. Not setting a value for it may cause an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#uuid DbInstance#uuid}
  */
  readonly uuid?: string;
}

export function dbInstanceNetworkToTerraform(struct?: DbInstanceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_ip_v4: cdktf.stringToTerraform(struct!.fixedIpV4),
    port: cdktf.stringToTerraform(struct!.port),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dbInstanceNetworkToHclTerraform(struct?: DbInstanceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_ip_v4: {
      value: cdktf.stringToHclTerraform(struct!.fixedIpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbInstanceNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbInstanceNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedIpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpV4 = this._fixedIpV4;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedIpV4 = undefined;
      this._port = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedIpV4 = value.fixedIpV4;
      this._port = value.port;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._uuid = value.uuid;
    }
  }

  // fixed_ip_v4 - computed: false, optional: true, required: false
  private _fixedIpV4?: string; 
  public get fixedIpV4() {
    return this.getStringAttribute('fixed_ip_v4');
  }
  public set fixedIpV4(value: string) {
    this._fixedIpV4 = value;
  }
  public resetFixedIpV4() {
    this._fixedIpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpV4Input() {
    return this._fixedIpV4;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class DbInstanceNetworkList extends cdktf.ComplexList {
  public internalValue? : DbInstanceNetwork[] | cdktf.IResolvable

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
  public get(index: number): DbInstanceNetworkOutputReference {
    return new DbInstanceNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbInstanceRestorePoint {
  /**
  * ID of the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#backup_id DbInstance#backup_id}
  */
  readonly backupId: string;
  /**
  * Used only for restoring from postgresql PITR backups. Timestamp of needed backup in format "2021-10-06 01:02:00". You can specify "latest" to use most recent backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#target DbInstance#target}
  */
  readonly target?: string;
}

export function dbInstanceRestorePointToTerraform(struct?: DbInstanceRestorePointOutputReference | DbInstanceRestorePoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dbInstanceRestorePointToHclTerraform(struct?: DbInstanceRestorePointOutputReference | DbInstanceRestorePoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbInstanceRestorePointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceRestorePoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceRestorePoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupId = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupId = value.backupId;
      this._target = value.target;
    }
  }

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface DbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#create DbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#delete DbInstance#delete}
  */
  readonly delete?: string;
}

export function dbInstanceTimeoutsToTerraform(struct?: DbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function dbInstanceTimeoutsToHclTerraform(struct?: DbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
export interface DbInstanceVendorOptions {
  /**
  * Boolean to confirm autorestart of the instance if it is required to apply configuration group changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#restart_confirmed DbInstance#restart_confirmed}
  */
  readonly restartConfirmed?: boolean | cdktf.IResolvable;
}

export function dbInstanceVendorOptionsToTerraform(struct?: DbInstanceVendorOptionsOutputReference | DbInstanceVendorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart_confirmed: cdktf.booleanToTerraform(struct!.restartConfirmed),
  }
}


export function dbInstanceVendorOptionsToHclTerraform(struct?: DbInstanceVendorOptionsOutputReference | DbInstanceVendorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart_confirmed: {
      value: cdktf.booleanToHclTerraform(struct!.restartConfirmed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbInstanceVendorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceVendorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restartConfirmed !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartConfirmed = this._restartConfirmed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceVendorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restartConfirmed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restartConfirmed = value.restartConfirmed;
    }
  }

  // restart_confirmed - computed: false, optional: true, required: false
  private _restartConfirmed?: boolean | cdktf.IResolvable; 
  public get restartConfirmed() {
    return this.getBooleanAttribute('restart_confirmed');
  }
  public set restartConfirmed(value: boolean | cdktf.IResolvable) {
    this._restartConfirmed = value;
  }
  public resetRestartConfirmed() {
    this._restartConfirmed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartConfirmedInput() {
    return this._restartConfirmed;
  }
}
export interface DbInstanceWalDiskAutoexpand {
  /**
  * Indicates whether wal volume autoresize is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#autoexpand DbInstance#autoexpand}
  */
  readonly autoexpand?: boolean | cdktf.IResolvable;
  /**
  * Maximum disk size for wal volume autoresize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#max_disk_size DbInstance#max_disk_size}
  */
  readonly maxDiskSize?: number;
}

export function dbInstanceWalDiskAutoexpandToTerraform(struct?: DbInstanceWalDiskAutoexpandOutputReference | DbInstanceWalDiskAutoexpand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoexpand: cdktf.booleanToTerraform(struct!.autoexpand),
    max_disk_size: cdktf.numberToTerraform(struct!.maxDiskSize),
  }
}


export function dbInstanceWalDiskAutoexpandToHclTerraform(struct?: DbInstanceWalDiskAutoexpandOutputReference | DbInstanceWalDiskAutoexpand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoexpand: {
      value: cdktf.booleanToHclTerraform(struct!.autoexpand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.maxDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbInstanceWalDiskAutoexpandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceWalDiskAutoexpand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoexpand !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoexpand = this._autoexpand;
    }
    if (this._maxDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDiskSize = this._maxDiskSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceWalDiskAutoexpand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoexpand = undefined;
      this._maxDiskSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoexpand = value.autoexpand;
      this._maxDiskSize = value.maxDiskSize;
    }
  }

  // autoexpand - computed: false, optional: true, required: false
  private _autoexpand?: boolean | cdktf.IResolvable; 
  public get autoexpand() {
    return this.getBooleanAttribute('autoexpand');
  }
  public set autoexpand(value: boolean | cdktf.IResolvable) {
    this._autoexpand = value;
  }
  public resetAutoexpand() {
    this._autoexpand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoexpandInput() {
    return this._autoexpand;
  }

  // max_disk_size - computed: false, optional: true, required: false
  private _maxDiskSize?: number; 
  public get maxDiskSize() {
    return this.getNumberAttribute('max_disk_size');
  }
  public set maxDiskSize(value: number) {
    this._maxDiskSize = value;
  }
  public resetMaxDiskSize() {
    this._maxDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskSizeInput() {
    return this._maxDiskSize;
  }
}
export interface DbInstanceWalVolume {
  /**
  * Indicates whether wal volume autoresize is enabled. **Deprecated** Please, use wal_disk_autoexpand block instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#autoexpand DbInstance#autoexpand}
  */
  readonly autoexpand?: boolean | cdktf.IResolvable;
  /**
  * Maximum disk size for wal volume autoresize. **Deprecated** Please, use wal_disk_autoexpand block instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#max_disk_size DbInstance#max_disk_size}
  */
  readonly maxDiskSize?: number;
  /**
  * Size of the instance wal volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#size DbInstance#size}
  */
  readonly size: number;
  /**
  * The type of the instance wal volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#volume_type DbInstance#volume_type}
  */
  readonly volumeType: string;
}

export function dbInstanceWalVolumeToTerraform(struct?: DbInstanceWalVolumeOutputReference | DbInstanceWalVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoexpand: cdktf.booleanToTerraform(struct!.autoexpand),
    max_disk_size: cdktf.numberToTerraform(struct!.maxDiskSize),
    size: cdktf.numberToTerraform(struct!.size),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function dbInstanceWalVolumeToHclTerraform(struct?: DbInstanceWalVolumeOutputReference | DbInstanceWalVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoexpand: {
      value: cdktf.booleanToHclTerraform(struct!.autoexpand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.maxDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DbInstanceWalVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceWalVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoexpand !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoexpand = this._autoexpand;
    }
    if (this._maxDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDiskSize = this._maxDiskSize;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceWalVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoexpand = undefined;
      this._maxDiskSize = undefined;
      this._size = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoexpand = value.autoexpand;
      this._maxDiskSize = value.maxDiskSize;
      this._size = value.size;
      this._volumeType = value.volumeType;
    }
  }

  // autoexpand - computed: false, optional: true, required: false
  private _autoexpand?: boolean | cdktf.IResolvable; 
  public get autoexpand() {
    return this.getBooleanAttribute('autoexpand');
  }
  public set autoexpand(value: boolean | cdktf.IResolvable) {
    this._autoexpand = value;
  }
  public resetAutoexpand() {
    this._autoexpand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoexpandInput() {
    return this._autoexpand;
  }

  // max_disk_size - computed: false, optional: true, required: false
  private _maxDiskSize?: number; 
  public get maxDiskSize() {
    return this.getNumberAttribute('max_disk_size');
  }
  public set maxDiskSize(value: number) {
    this._maxDiskSize = value;
  }
  public resetMaxDiskSize() {
    this._maxDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskSizeInput() {
    return this._maxDiskSize;
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
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance vkcs_db_instance}
*/
export class DbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbInstance to import
  * @param importFromId The id of the existing DbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/db_instance vkcs_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._cloudMonitoringEnabled = config.cloudMonitoringEnabled;
    this._configurationId = config.configurationId;
    this._flavorId = config.flavorId;
    this._floatingIpEnabled = config.floatingIpEnabled;
    this._id = config.id;
    this._keypair = config.keypair;
    this._name = config.name;
    this._region = config.region;
    this._replicaOf = config.replicaOf;
    this._rootEnabled = config.rootEnabled;
    this._rootPassword = config.rootPassword;
    this._size = config.size;
    this._volumeType = config.volumeType;
    this._backupSchedule.internalValue = config.backupSchedule;
    this._capabilities.internalValue = config.capabilities;
    this._datastore.internalValue = config.datastore;
    this._diskAutoexpand.internalValue = config.diskAutoexpand;
    this._network.internalValue = config.network;
    this._restorePoint.internalValue = config.restorePoint;
    this._timeouts.internalValue = config.timeouts;
    this._vendorOptions.internalValue = config.vendorOptions;
    this._walDiskAutoexpand.internalValue = config.walDiskAutoexpand;
    this._walVolume.internalValue = config.walVolume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cloud_monitoring_enabled - computed: false, optional: true, required: false
  private _cloudMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get cloudMonitoringEnabled() {
    return this.getBooleanAttribute('cloud_monitoring_enabled');
  }
  public set cloudMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudMonitoringEnabled = value;
  }
  public resetCloudMonitoringEnabled() {
    this._cloudMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudMonitoringEnabledInput() {
    return this._cloudMonitoringEnabled;
  }

  // configuration_id - computed: false, optional: true, required: false
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  public resetConfigurationId() {
    this._configurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // floating_ip_enabled - computed: false, optional: true, required: false
  private _floatingIpEnabled?: boolean | cdktf.IResolvable; 
  public get floatingIpEnabled() {
    return this.getBooleanAttribute('floating_ip_enabled');
  }
  public set floatingIpEnabled(value: boolean | cdktf.IResolvable) {
    this._floatingIpEnabled = value;
  }
  public resetFloatingIpEnabled() {
    this._floatingIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpEnabledInput() {
    return this._floatingIpEnabled;
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getListAttribute('ip');
  }

  // keypair - computed: false, optional: true, required: false
  private _keypair?: string; 
  public get keypair() {
    return this.getStringAttribute('keypair');
  }
  public set keypair(value: string) {
    this._keypair = value;
  }
  public resetKeypair() {
    this._keypair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairInput() {
    return this._keypair;
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

  // region - computed: true, optional: true, required: false
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

  // replica_of - computed: false, optional: true, required: false
  private _replicaOf?: string; 
  public get replicaOf() {
    return this.getStringAttribute('replica_of');
  }
  public set replicaOf(value: string) {
    this._replicaOf = value;
  }
  public resetReplicaOf() {
    this._replicaOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaOfInput() {
    return this._replicaOf;
  }

  // root_enabled - computed: false, optional: true, required: false
  private _rootEnabled?: boolean | cdktf.IResolvable; 
  public get rootEnabled() {
    return this.getBooleanAttribute('root_enabled');
  }
  public set rootEnabled(value: boolean | cdktf.IResolvable) {
    this._rootEnabled = value;
  }
  public resetRootEnabled() {
    this._rootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootEnabledInput() {
    return this._rootEnabled;
  }

  // root_password - computed: true, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
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

  // backup_schedule - computed: false, optional: true, required: false
  private _backupSchedule = new DbInstanceBackupScheduleOutputReference(this, "backup_schedule");
  public get backupSchedule() {
    return this._backupSchedule;
  }
  public putBackupSchedule(value: DbInstanceBackupSchedule) {
    this._backupSchedule.internalValue = value;
  }
  public resetBackupSchedule() {
    this._backupSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule.internalValue;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DbInstanceCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DbInstanceCapabilities[] | cdktf.IResolvable) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore = new DbInstanceDatastoreOutputReference(this, "datastore");
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: DbInstanceDatastore) {
    this._datastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore.internalValue;
  }

  // disk_autoexpand - computed: false, optional: true, required: false
  private _diskAutoexpand = new DbInstanceDiskAutoexpandOutputReference(this, "disk_autoexpand");
  public get diskAutoexpand() {
    return this._diskAutoexpand;
  }
  public putDiskAutoexpand(value: DbInstanceDiskAutoexpand) {
    this._diskAutoexpand.internalValue = value;
  }
  public resetDiskAutoexpand() {
    this._diskAutoexpand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAutoexpandInput() {
    return this._diskAutoexpand.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new DbInstanceNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: DbInstanceNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // restore_point - computed: false, optional: true, required: false
  private _restorePoint = new DbInstanceRestorePointOutputReference(this, "restore_point");
  public get restorePoint() {
    return this._restorePoint;
  }
  public putRestorePoint(value: DbInstanceRestorePoint) {
    this._restorePoint.internalValue = value;
  }
  public resetRestorePoint() {
    this._restorePoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePointInput() {
    return this._restorePoint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vendor_options - computed: false, optional: true, required: false
  private _vendorOptions = new DbInstanceVendorOptionsOutputReference(this, "vendor_options");
  public get vendorOptions() {
    return this._vendorOptions;
  }
  public putVendorOptions(value: DbInstanceVendorOptions) {
    this._vendorOptions.internalValue = value;
  }
  public resetVendorOptions() {
    this._vendorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorOptionsInput() {
    return this._vendorOptions.internalValue;
  }

  // wal_disk_autoexpand - computed: false, optional: true, required: false
  private _walDiskAutoexpand = new DbInstanceWalDiskAutoexpandOutputReference(this, "wal_disk_autoexpand");
  public get walDiskAutoexpand() {
    return this._walDiskAutoexpand;
  }
  public putWalDiskAutoexpand(value: DbInstanceWalDiskAutoexpand) {
    this._walDiskAutoexpand.internalValue = value;
  }
  public resetWalDiskAutoexpand() {
    this._walDiskAutoexpand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walDiskAutoexpandInput() {
    return this._walDiskAutoexpand.internalValue;
  }

  // wal_volume - computed: false, optional: true, required: false
  private _walVolume = new DbInstanceWalVolumeOutputReference(this, "wal_volume");
  public get walVolume() {
    return this._walVolume;
  }
  public putWalVolume(value: DbInstanceWalVolume) {
    this._walVolume.internalValue = value;
  }
  public resetWalVolume() {
    this._walVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walVolumeInput() {
    return this._walVolume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cloud_monitoring_enabled: cdktf.booleanToTerraform(this._cloudMonitoringEnabled),
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      floating_ip_enabled: cdktf.booleanToTerraform(this._floatingIpEnabled),
      id: cdktf.stringToTerraform(this._id),
      keypair: cdktf.stringToTerraform(this._keypair),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      replica_of: cdktf.stringToTerraform(this._replicaOf),
      root_enabled: cdktf.booleanToTerraform(this._rootEnabled),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      size: cdktf.numberToTerraform(this._size),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      backup_schedule: dbInstanceBackupScheduleToTerraform(this._backupSchedule.internalValue),
      capabilities: cdktf.listMapper(dbInstanceCapabilitiesToTerraform, true)(this._capabilities.internalValue),
      datastore: dbInstanceDatastoreToTerraform(this._datastore.internalValue),
      disk_autoexpand: dbInstanceDiskAutoexpandToTerraform(this._diskAutoexpand.internalValue),
      network: cdktf.listMapper(dbInstanceNetworkToTerraform, true)(this._network.internalValue),
      restore_point: dbInstanceRestorePointToTerraform(this._restorePoint.internalValue),
      timeouts: dbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      vendor_options: dbInstanceVendorOptionsToTerraform(this._vendorOptions.internalValue),
      wal_disk_autoexpand: dbInstanceWalDiskAutoexpandToTerraform(this._walDiskAutoexpand.internalValue),
      wal_volume: dbInstanceWalVolumeToTerraform(this._walVolume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_monitoring_enabled: {
        value: cdktf.booleanToHclTerraform(this._cloudMonitoringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._floatingIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keypair: {
        value: cdktf.stringToHclTerraform(this._keypair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      replica_of: {
        value: cdktf.stringToHclTerraform(this._replicaOf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_enabled: {
        value: cdktf.booleanToHclTerraform(this._rootEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_password: {
        value: cdktf.stringToHclTerraform(this._rootPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_type: {
        value: cdktf.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_schedule: {
        value: dbInstanceBackupScheduleToHclTerraform(this._backupSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbInstanceBackupScheduleList",
      },
      capabilities: {
        value: cdktf.listMapperHcl(dbInstanceCapabilitiesToHclTerraform, true)(this._capabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbInstanceCapabilitiesList",
      },
      datastore: {
        value: dbInstanceDatastoreToHclTerraform(this._datastore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbInstanceDatastoreList",
      },
      disk_autoexpand: {
        value: dbInstanceDiskAutoexpandToHclTerraform(this._diskAutoexpand.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbInstanceDiskAutoexpandList",
      },
      network: {
        value: cdktf.listMapperHcl(dbInstanceNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbInstanceNetworkList",
      },
      restore_point: {
        value: dbInstanceRestorePointToHclTerraform(this._restorePoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbInstanceRestorePointList",
      },
      timeouts: {
        value: dbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbInstanceTimeouts",
      },
      vendor_options: {
        value: dbInstanceVendorOptionsToHclTerraform(this._vendorOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbInstanceVendorOptionsList",
      },
      wal_disk_autoexpand: {
        value: dbInstanceWalDiskAutoexpandToHclTerraform(this._walDiskAutoexpand.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbInstanceWalDiskAutoexpandList",
      },
      wal_volume: {
        value: dbInstanceWalVolumeToHclTerraform(this._walVolume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbInstanceWalVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
