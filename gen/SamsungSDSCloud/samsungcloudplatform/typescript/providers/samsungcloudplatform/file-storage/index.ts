// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIFS Password is only available for CIFS Protocol. (6 to 20 alphabet and numeric characters without following special characters ($, %, {, }, [, ], ", \)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#cifs_password FileStorage#cifs_password}
  */
  readonly cifsPassword?: string;
  /**
  * Snapshot schedule dayOfWeek must be one of "SUN", "MON", "TUE", "WED", "THU", "FRI" or "SAT"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#day_of_week FileStorage#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * File Storage Disk Type (HDD, SSD, HP_SSD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#disk_type FileStorage#disk_type}
  */
  readonly diskType: string;
  /**
  * File Storage Name (3 to 21 lower alphabet and numeric characters with '_' symbol are available, but it must be started with lower alphabet)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#file_storage_name FileStorage#file_storage_name}
  */
  readonly fileStorageName: string;
  /**
  * File Storage Protocol (NFS, CIFS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#file_storage_protocol FileStorage#file_storage_protocol}
  */
  readonly fileStorageProtocol: string;
  /**
  * File Unit Recovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#file_unit_recovery_enabled FileStorage#file_unit_recovery_enabled}
  */
  readonly fileUnitRecoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Snapshot schedule frequency must be one of "DAILY" or "WEEKLY"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#frequency FileStorage#frequency}
  */
  readonly frequency?: string;
  /**
  * Snapshot schedule hour (0 to 23)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#hour FileStorage#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#id FileStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Multi AZ (If null, default value is false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#multi_availability_zone FileStorage#multi_availability_zone}
  */
  readonly multiAvailabilityZone?: boolean | cdktf.IResolvable;
  /**
  * Product Names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#product_names FileStorage#product_names}
  */
  readonly productNames: string[];
  /**
  * Service Zone ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#service_zone_id FileStorage#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Snapshot retention count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#snapshot_retention_count FileStorage#snapshot_retention_count}
  */
  readonly snapshotRetentionCount?: number;
  /**
  * Snapshot schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#snapshot_schedule FileStorage#snapshot_schedule}
  */
  readonly snapshotSchedule?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#tags FileStorage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * VPC Endpoint Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#vpc_endpoint_info FileStorage#vpc_endpoint_info}
  */
  readonly vpcEndpointInfo?: string;
  /**
  * VPC Endpoint Volume Pool ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#vpc_endpoint_volume_pool_id FileStorage#vpc_endpoint_volume_pool_id}
  */
  readonly vpcEndpointVolumePoolId?: string;
  /**
  * link_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#link_objects FileStorage#link_objects}
  */
  readonly linkObjects?: FileStorageLinkObjects[] | cdktf.IResolvable;
  /**
  * unlink_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#unlink_objects FileStorage#unlink_objects}
  */
  readonly unlinkObjects?: FileStorageUnlinkObjects[] | cdktf.IResolvable;
}
export interface FileStorageLinkObjects {
  /**
  * Link object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#link_object_id FileStorage#link_object_id}
  */
  readonly linkObjectId?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#type FileStorage#type}
  */
  readonly type?: string;
}

export function fileStorageLinkObjectsToTerraform(struct?: FileStorageLinkObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_object_id: cdktf.stringToTerraform(struct!.linkObjectId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fileStorageLinkObjectsToHclTerraform(struct?: FileStorageLinkObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_object_id: {
      value: cdktf.stringToHclTerraform(struct!.linkObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStorageLinkObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileStorageLinkObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkObjectId = this._linkObjectId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageLinkObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linkObjectId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linkObjectId = value.linkObjectId;
      this._type = value.type;
    }
  }

  // link_object_id - computed: false, optional: true, required: false
  private _linkObjectId?: string; 
  public get linkObjectId() {
    return this.getStringAttribute('link_object_id');
  }
  public set linkObjectId(value: string) {
    this._linkObjectId = value;
  }
  public resetLinkObjectId() {
    this._linkObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkObjectIdInput() {
    return this._linkObjectId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FileStorageLinkObjectsList extends cdktf.ComplexList {
  public internalValue? : FileStorageLinkObjects[] | cdktf.IResolvable

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
  public get(index: number): FileStorageLinkObjectsOutputReference {
    return new FileStorageLinkObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileStorageUnlinkObjects {
  /**
  * Link object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#link_object_id FileStorage#link_object_id}
  */
  readonly linkObjectId?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#type FileStorage#type}
  */
  readonly type?: string;
}

export function fileStorageUnlinkObjectsToTerraform(struct?: FileStorageUnlinkObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_object_id: cdktf.stringToTerraform(struct!.linkObjectId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fileStorageUnlinkObjectsToHclTerraform(struct?: FileStorageUnlinkObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_object_id: {
      value: cdktf.stringToHclTerraform(struct!.linkObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStorageUnlinkObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileStorageUnlinkObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkObjectId = this._linkObjectId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageUnlinkObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linkObjectId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linkObjectId = value.linkObjectId;
      this._type = value.type;
    }
  }

  // link_object_id - computed: false, optional: true, required: false
  private _linkObjectId?: string; 
  public get linkObjectId() {
    return this.getStringAttribute('link_object_id');
  }
  public set linkObjectId(value: string) {
    this._linkObjectId = value;
  }
  public resetLinkObjectId() {
    this._linkObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkObjectIdInput() {
    return this._linkObjectId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FileStorageUnlinkObjectsList extends cdktf.ComplexList {
  public internalValue? : FileStorageUnlinkObjects[] | cdktf.IResolvable

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
  public get(index: number): FileStorageUnlinkObjectsOutputReference {
    return new FileStorageUnlinkObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage samsungcloudplatform_file_storage}
*/
export class FileStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_file_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileStorage to import
  * @param importFromId The id of the existing FileStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_file_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/file_storage samsungcloudplatform_file_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileStorageConfig
  */
  public constructor(scope: Construct, id: string, config: FileStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_file_storage',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cifsPassword = config.cifsPassword;
    this._dayOfWeek = config.dayOfWeek;
    this._diskType = config.diskType;
    this._fileStorageName = config.fileStorageName;
    this._fileStorageProtocol = config.fileStorageProtocol;
    this._fileUnitRecoveryEnabled = config.fileUnitRecoveryEnabled;
    this._frequency = config.frequency;
    this._hour = config.hour;
    this._id = config.id;
    this._multiAvailabilityZone = config.multiAvailabilityZone;
    this._productNames = config.productNames;
    this._serviceZoneId = config.serviceZoneId;
    this._snapshotRetentionCount = config.snapshotRetentionCount;
    this._snapshotSchedule = config.snapshotSchedule;
    this._tags = config.tags;
    this._vpcEndpointInfo = config.vpcEndpointInfo;
    this._vpcEndpointVolumePoolId = config.vpcEndpointVolumePoolId;
    this._linkObjects.internalValue = config.linkObjects;
    this._unlinkObjects.internalValue = config.unlinkObjects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cifs_id - computed: true, optional: false, required: false
  public get cifsId() {
    return this.getStringAttribute('cifs_id');
  }

  // cifs_password - computed: false, optional: true, required: false
  private _cifsPassword?: string; 
  public get cifsPassword() {
    return this.getStringAttribute('cifs_password');
  }
  public set cifsPassword(value: string) {
    this._cifsPassword = value;
  }
  public resetCifsPassword() {
    this._cifsPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsPasswordInput() {
    return this._cifsPassword;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // file_storage_name - computed: false, optional: false, required: true
  private _fileStorageName?: string; 
  public get fileStorageName() {
    return this.getStringAttribute('file_storage_name');
  }
  public set fileStorageName(value: string) {
    this._fileStorageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageNameInput() {
    return this._fileStorageName;
  }

  // file_storage_name_uuid - computed: true, optional: false, required: false
  public get fileStorageNameUuid() {
    return this.getStringAttribute('file_storage_name_uuid');
  }

  // file_storage_protocol - computed: false, optional: false, required: true
  private _fileStorageProtocol?: string; 
  public get fileStorageProtocol() {
    return this.getStringAttribute('file_storage_protocol');
  }
  public set fileStorageProtocol(value: string) {
    this._fileStorageProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageProtocolInput() {
    return this._fileStorageProtocol;
  }

  // file_unit_recovery_enabled - computed: false, optional: true, required: false
  private _fileUnitRecoveryEnabled?: boolean | cdktf.IResolvable; 
  public get fileUnitRecoveryEnabled() {
    return this.getBooleanAttribute('file_unit_recovery_enabled');
  }
  public set fileUnitRecoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._fileUnitRecoveryEnabled = value;
  }
  public resetFileUnitRecoveryEnabled() {
    this._fileUnitRecoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUnitRecoveryEnabledInput() {
    return this._fileUnitRecoveryEnabled;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
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

  // multi_availability_zone - computed: false, optional: true, required: false
  private _multiAvailabilityZone?: boolean | cdktf.IResolvable; 
  public get multiAvailabilityZone() {
    return this.getBooleanAttribute('multi_availability_zone');
  }
  public set multiAvailabilityZone(value: boolean | cdktf.IResolvable) {
    this._multiAvailabilityZone = value;
  }
  public resetMultiAvailabilityZone() {
    this._multiAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAvailabilityZoneInput() {
    return this._multiAvailabilityZone;
  }

  // product_names - computed: false, optional: false, required: true
  private _productNames?: string[]; 
  public get productNames() {
    return this.getListAttribute('product_names');
  }
  public set productNames(value: string[]) {
    this._productNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNamesInput() {
    return this._productNames;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // snapshot_retention_count - computed: false, optional: true, required: false
  private _snapshotRetentionCount?: number; 
  public get snapshotRetentionCount() {
    return this.getNumberAttribute('snapshot_retention_count');
  }
  public set snapshotRetentionCount(value: number) {
    this._snapshotRetentionCount = value;
  }
  public resetSnapshotRetentionCount() {
    this._snapshotRetentionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionCountInput() {
    return this._snapshotRetentionCount;
  }

  // snapshot_schedule - computed: false, optional: true, required: false
  private _snapshotSchedule?: { [key: string]: string }; 
  public get snapshotSchedule() {
    return this.getStringMapAttribute('snapshot_schedule');
  }
  public set snapshotSchedule(value: { [key: string]: string }) {
    this._snapshotSchedule = value;
  }
  public resetSnapshotSchedule() {
    this._snapshotSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotScheduleInput() {
    return this._snapshotSchedule;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_endpoint_info - computed: false, optional: true, required: false
  private _vpcEndpointInfo?: string; 
  public get vpcEndpointInfo() {
    return this.getStringAttribute('vpc_endpoint_info');
  }
  public set vpcEndpointInfo(value: string) {
    this._vpcEndpointInfo = value;
  }
  public resetVpcEndpointInfo() {
    this._vpcEndpointInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointInfoInput() {
    return this._vpcEndpointInfo;
  }

  // vpc_endpoint_volume_pool_id - computed: false, optional: true, required: false
  private _vpcEndpointVolumePoolId?: string; 
  public get vpcEndpointVolumePoolId() {
    return this.getStringAttribute('vpc_endpoint_volume_pool_id');
  }
  public set vpcEndpointVolumePoolId(value: string) {
    this._vpcEndpointVolumePoolId = value;
  }
  public resetVpcEndpointVolumePoolId() {
    this._vpcEndpointVolumePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointVolumePoolIdInput() {
    return this._vpcEndpointVolumePoolId;
  }

  // link_objects - computed: false, optional: true, required: false
  private _linkObjects = new FileStorageLinkObjectsList(this, "link_objects", false);
  public get linkObjects() {
    return this._linkObjects;
  }
  public putLinkObjects(value: FileStorageLinkObjects[] | cdktf.IResolvable) {
    this._linkObjects.internalValue = value;
  }
  public resetLinkObjects() {
    this._linkObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkObjectsInput() {
    return this._linkObjects.internalValue;
  }

  // unlink_objects - computed: false, optional: true, required: false
  private _unlinkObjects = new FileStorageUnlinkObjectsList(this, "unlink_objects", false);
  public get unlinkObjects() {
    return this._unlinkObjects;
  }
  public putUnlinkObjects(value: FileStorageUnlinkObjects[] | cdktf.IResolvable) {
    this._unlinkObjects.internalValue = value;
  }
  public resetUnlinkObjects() {
    this._unlinkObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlinkObjectsInput() {
    return this._unlinkObjects.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cifs_password: cdktf.stringToTerraform(this._cifsPassword),
      day_of_week: cdktf.stringToTerraform(this._dayOfWeek),
      disk_type: cdktf.stringToTerraform(this._diskType),
      file_storage_name: cdktf.stringToTerraform(this._fileStorageName),
      file_storage_protocol: cdktf.stringToTerraform(this._fileStorageProtocol),
      file_unit_recovery_enabled: cdktf.booleanToTerraform(this._fileUnitRecoveryEnabled),
      frequency: cdktf.stringToTerraform(this._frequency),
      hour: cdktf.numberToTerraform(this._hour),
      id: cdktf.stringToTerraform(this._id),
      multi_availability_zone: cdktf.booleanToTerraform(this._multiAvailabilityZone),
      product_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._productNames),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      snapshot_retention_count: cdktf.numberToTerraform(this._snapshotRetentionCount),
      snapshot_schedule: cdktf.hashMapper(cdktf.stringToTerraform)(this._snapshotSchedule),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_endpoint_info: cdktf.stringToTerraform(this._vpcEndpointInfo),
      vpc_endpoint_volume_pool_id: cdktf.stringToTerraform(this._vpcEndpointVolumePoolId),
      link_objects: cdktf.listMapper(fileStorageLinkObjectsToTerraform, true)(this._linkObjects.internalValue),
      unlink_objects: cdktf.listMapper(fileStorageUnlinkObjectsToTerraform, true)(this._unlinkObjects.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cifs_password: {
        value: cdktf.stringToHclTerraform(this._cifsPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day_of_week: {
        value: cdktf.stringToHclTerraform(this._dayOfWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_storage_name: {
        value: cdktf.stringToHclTerraform(this._fileStorageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_storage_protocol: {
        value: cdktf.stringToHclTerraform(this._fileStorageProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_unit_recovery_enabled: {
        value: cdktf.booleanToHclTerraform(this._fileUnitRecoveryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hour: {
        value: cdktf.numberToHclTerraform(this._hour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_availability_zone: {
        value: cdktf.booleanToHclTerraform(this._multiAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      product_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._productNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_retention_count: {
        value: cdktf.numberToHclTerraform(this._snapshotRetentionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_schedule: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._snapshotSchedule),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_endpoint_info: {
        value: cdktf.stringToHclTerraform(this._vpcEndpointInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_endpoint_volume_pool_id: {
        value: cdktf.stringToHclTerraform(this._vpcEndpointVolumePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_objects: {
        value: cdktf.listMapperHcl(fileStorageLinkObjectsToHclTerraform, true)(this._linkObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileStorageLinkObjectsList",
      },
      unlink_objects: {
        value: cdktf.listMapperHcl(fileStorageUnlinkObjectsToHclTerraform, true)(this._unlinkObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileStorageUnlinkObjectsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
