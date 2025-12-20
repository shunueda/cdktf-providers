// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmModifyInstanceDiskTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#id CvmModifyInstanceDiskType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID. To obtain the instance IDs, you can call DescribeInstances and look for InstanceId in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#instance_id CvmModifyInstanceDiskType#instance_id}
  */
  readonly instanceId: string;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#data_disks CvmModifyInstanceDiskType#data_disks}
  */
  readonly dataDisks?: CvmModifyInstanceDiskTypeDataDisks[] | cdktf.IResolvable;
  /**
  * system_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#system_disk CvmModifyInstanceDiskType#system_disk}
  */
  readonly systemDisk?: CvmModifyInstanceDiskTypeSystemDisk;
}
export interface CvmModifyInstanceDiskTypeDataDisks {
  /**
  * ID of the dedicated cluster to which the instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#cdc_id CvmModifyInstanceDiskType#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Whether to terminate the data disk when its CVM is terminated. Valid values:
  * - TRUE: terminate the data disk when its CVM is terminated. This value only supports pay-as-you-go cloud disks billed on an hourly basis.
  * - FALSE: retain the data disk when its CVM is terminated.
  * Default value: TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#delete_with_instance CvmModifyInstanceDiskType#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Data disk ID. Note that it's not available for LOCAL_BASIC and LOCAL_SSD disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#disk_id CvmModifyInstanceDiskType#disk_id}
  */
  readonly diskId?: string;
  /**
  * Data disk size (in GB). The minimum adjustment increment is 10 GB. The value range varies by data disk type. The default value is 0, indicating that no data disk is purchased. For more information, see the product documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#disk_size CvmModifyInstanceDiskType#disk_size}
  */
  readonly diskSize: number;
  /**
  * Data disk type. Valid values:
  * - LOCAL_BASIC: local hard disk;
  * - LOCAL_SSD: local SSD hard disk;
  * - LOCAL_NVME: local NVME hard disk, which is strongly related to InstanceType and cannot be specified;
  * - LOCAL_PRO: local HDD hard disk, which is strongly related to InstanceType and cannot be specified;
  * - CLOUD_BASIC: ordinary cloud disk;
  * - CLOUD_PREMIUM: high-performance cloud disk;
  * - CLOUD_SSD:SSD cloud disk;
  * - CLOUD_HSSD: enhanced SSD cloud disk;
  * - CLOUD_TSSD: extremely fast SSD cloud disk;
  * - CLOUD_BSSD: general-purpose SSD cloud disk;
  * Default value: LOCAL_BASIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#disk_type CvmModifyInstanceDiskType#disk_type}
  */
  readonly diskType?: string;
  /**
  * Specifies whether the data disk is encrypted. Valid values:
  * - TRUE: encrypted
  * - FALSE: not encrypted
  * Default value: FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#encrypt CvmModifyInstanceDiskType#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * ID of the custom CMK in the format of UUID or “kms-abcd1234”. This parameter is used to encrypt cloud disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#kms_key_id CvmModifyInstanceDiskType#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Data disk snapshot ID. The size of the selected data disk snapshot must be smaller than that of the data disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#snapshot_id CvmModifyInstanceDiskType#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Cloud disk performance, in MB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#throughput_performance CvmModifyInstanceDiskType#throughput_performance}
  */
  readonly throughputPerformance?: number;
}

export function cvmModifyInstanceDiskTypeDataDisksToTerraform(struct?: CvmModifyInstanceDiskTypeDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    delete_with_instance: cdktf.booleanToTerraform(struct!.deleteWithInstance),
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput_performance: cdktf.numberToTerraform(struct!.throughputPerformance),
  }
}


export function cvmModifyInstanceDiskTypeDataDisksToHclTerraform(struct?: CvmModifyInstanceDiskTypeDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.cdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_with_instance: {
      value: cdktf.booleanToHclTerraform(struct!.deleteWithInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput_performance: {
      value: cdktf.numberToHclTerraform(struct!.throughputPerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmModifyInstanceDiskTypeDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvmModifyInstanceDiskTypeDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._deleteWithInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteWithInstance = this._deleteWithInstance;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughputPerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputPerformance = this._throughputPerformance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmModifyInstanceDiskTypeDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdcId = undefined;
      this._deleteWithInstance = undefined;
      this._diskId = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._encrypt = undefined;
      this._kmsKeyId = undefined;
      this._snapshotId = undefined;
      this._throughputPerformance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdcId = value.cdcId;
      this._deleteWithInstance = value.deleteWithInstance;
      this._diskId = value.diskId;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._encrypt = value.encrypt;
      this._kmsKeyId = value.kmsKeyId;
      this._snapshotId = value.snapshotId;
      this._throughputPerformance = value.throughputPerformance;
    }
  }

  // cdc_id - computed: false, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // delete_with_instance - computed: false, optional: true, required: false
  private _deleteWithInstance?: boolean | cdktf.IResolvable; 
  public get deleteWithInstance() {
    return this.getBooleanAttribute('delete_with_instance');
  }
  public set deleteWithInstance(value: boolean | cdktf.IResolvable) {
    this._deleteWithInstance = value;
  }
  public resetDeleteWithInstance() {
    this._deleteWithInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWithInstanceInput() {
    return this._deleteWithInstance;
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // throughput_performance - computed: false, optional: true, required: false
  private _throughputPerformance?: number; 
  public get throughputPerformance() {
    return this.getNumberAttribute('throughput_performance');
  }
  public set throughputPerformance(value: number) {
    this._throughputPerformance = value;
  }
  public resetThroughputPerformance() {
    this._throughputPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputPerformanceInput() {
    return this._throughputPerformance;
  }
}

export class CvmModifyInstanceDiskTypeDataDisksList extends cdktf.ComplexList {
  public internalValue? : CvmModifyInstanceDiskTypeDataDisks[] | cdktf.IResolvable

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
  public get(index: number): CvmModifyInstanceDiskTypeDataDisksOutputReference {
    return new CvmModifyInstanceDiskTypeDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvmModifyInstanceDiskTypeSystemDisk {
  /**
  * ID of the dedicated cluster to which the instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#cdc_id CvmModifyInstanceDiskType#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * System disk ID. System disks whose type is LOCAL_BASIC or LOCAL_SSD do not have an ID and do not support this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#disk_id CvmModifyInstanceDiskType#disk_id}
  */
  readonly diskId?: string;
  /**
  * System disk size; unit: GB; default value: 50 GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#disk_size CvmModifyInstanceDiskType#disk_size}
  */
  readonly diskSize?: number;
  /**
  * System disk type. Valid values:- LOCAL_BASIC: local disk
  * - LOCAL_SSD: local SSD disk
  * - CLOUD_BASIC: ordinary cloud disk
  * - CLOUD_SSD: SSD cloud disk
  * - CLOUD_PREMIUM: Premium cloud storage
  * - CLOUD_BSSD: Balanced SSD
  * The disk currently in stock will be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#disk_type CvmModifyInstanceDiskType#disk_type}
  */
  readonly diskType?: string;
}

export function cvmModifyInstanceDiskTypeSystemDiskToTerraform(struct?: CvmModifyInstanceDiskTypeSystemDiskOutputReference | CvmModifyInstanceDiskTypeSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
  }
}


export function cvmModifyInstanceDiskTypeSystemDiskToHclTerraform(struct?: CvmModifyInstanceDiskTypeSystemDiskOutputReference | CvmModifyInstanceDiskTypeSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.cdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmModifyInstanceDiskTypeSystemDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmModifyInstanceDiskTypeSystemDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmModifyInstanceDiskTypeSystemDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdcId = undefined;
      this._diskId = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdcId = value.cdcId;
      this._diskId = value.diskId;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
    }
  }

  // cdc_id - computed: false, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type tencentcloud_cvm_modify_instance_disk_type}
*/
export class CvmModifyInstanceDiskType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_modify_instance_disk_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmModifyInstanceDiskType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmModifyInstanceDiskType to import
  * @param importFromId The id of the existing CvmModifyInstanceDiskType that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmModifyInstanceDiskType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_modify_instance_disk_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cvm_modify_instance_disk_type tencentcloud_cvm_modify_instance_disk_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmModifyInstanceDiskTypeConfig
  */
  public constructor(scope: Construct, id: string, config: CvmModifyInstanceDiskTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_modify_instance_disk_type',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._instanceId = config.instanceId;
    this._dataDisks.internalValue = config.dataDisks;
    this._systemDisk.internalValue = config.systemDisk;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new CvmModifyInstanceDiskTypeDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: CvmModifyInstanceDiskTypeDataDisks[] | cdktf.IResolvable) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // system_disk - computed: false, optional: true, required: false
  private _systemDisk = new CvmModifyInstanceDiskTypeSystemDiskOutputReference(this, "system_disk");
  public get systemDisk() {
    return this._systemDisk;
  }
  public putSystemDisk(value: CvmModifyInstanceDiskTypeSystemDisk) {
    this._systemDisk.internalValue = value;
  }
  public resetSystemDisk() {
    this._systemDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskInput() {
    return this._systemDisk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      data_disks: cdktf.listMapper(cvmModifyInstanceDiskTypeDataDisksToTerraform, true)(this._dataDisks.internalValue),
      system_disk: cvmModifyInstanceDiskTypeSystemDiskToTerraform(this._systemDisk.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_disks: {
        value: cdktf.listMapperHcl(cvmModifyInstanceDiskTypeDataDisksToHclTerraform, true)(this._dataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmModifyInstanceDiskTypeDataDisksList",
      },
      system_disk: {
        value: cvmModifyInstanceDiskTypeSystemDiskToHclTerraform(this._systemDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmModifyInstanceDiskTypeSystemDiskList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
