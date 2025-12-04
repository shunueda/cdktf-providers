// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LighthouseDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to automatically use the voucher. Not used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#auto_voucher LighthouseDisk#auto_voucher}
  */
  readonly autoVoucher?: boolean | cdktf.IResolvable;
  /**
  * Specify the disk backup quota. If not uploaded, the default is no backup quota. Currently, only one disk backup quota is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#disk_backup_quota LighthouseDisk#disk_backup_quota}
  */
  readonly diskBackupQuota?: number;
  /**
  * Disk count. Values: [1, 30]. Default: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#disk_count LighthouseDisk#disk_count}
  */
  readonly diskCount?: number;
  /**
  * Disk name. Maximum length 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#disk_name LighthouseDisk#disk_name}
  */
  readonly diskName?: string;
  /**
  * Disk size, unit: GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#disk_size LighthouseDisk#disk_size}
  */
  readonly diskSize: number;
  /**
  * Disk type. Value:CLOUD_PREMIUM, CLOUD_SSD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#disk_type LighthouseDisk#disk_type}
  */
  readonly diskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#id LighthouseDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#zone LighthouseDisk#zone}
  */
  readonly zone: string;
  /**
  * auto_mount_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#auto_mount_configuration LighthouseDisk#auto_mount_configuration}
  */
  readonly autoMountConfiguration?: LighthouseDiskAutoMountConfiguration;
  /**
  * disk_charge_prepaid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#disk_charge_prepaid LighthouseDisk#disk_charge_prepaid}
  */
  readonly diskChargePrepaid: LighthouseDiskDiskChargePrepaid;
}
export interface LighthouseDiskAutoMountConfiguration {
  /**
  * The file system type. Value: ext4, xfs. Only instances of the Linux operating system can pass in this parameter, and if it is not passed, it defaults to ext4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#file_system_type LighthouseDisk#file_system_type}
  */
  readonly fileSystemType?: string;
  /**
  * Instance ID to be mounted. The specified instance must be in the Running state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#instance_id LighthouseDisk#instance_id}
  */
  readonly instanceId: string;
  /**
  * The mount point within the instance. Only instances of the Linux operating system can pass in this parameter, and if it is not passed, it will be mounted under the /data/disk path by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#mount_point LighthouseDisk#mount_point}
  */
  readonly mountPoint?: string;
}

export function lighthouseDiskAutoMountConfigurationToTerraform(struct?: LighthouseDiskAutoMountConfigurationOutputReference | LighthouseDiskAutoMountConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_type: cdktf.stringToTerraform(struct!.fileSystemType),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
  }
}


export function lighthouseDiskAutoMountConfigurationToHclTerraform(struct?: LighthouseDiskAutoMountConfigurationOutputReference | LighthouseDiskAutoMountConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_type: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseDiskAutoMountConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LighthouseDiskAutoMountConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseDiskAutoMountConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemType = undefined;
      this._instanceId = undefined;
      this._mountPoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemType = value.fileSystemType;
      this._instanceId = value.instanceId;
      this._mountPoint = value.mountPoint;
    }
  }

  // file_system_type - computed: false, optional: true, required: false
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  public resetFileSystemType() {
    this._fileSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
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

  // mount_point - computed: false, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }
}
export interface LighthouseDiskDiskChargePrepaid {
  /**
  * new purchase cycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#period LighthouseDisk#period}
  */
  readonly period: number;
  /**
  * Automatic renewal flag. Value: `NOTIFY_AND_AUTO_RENEW`: Notice expires and auto-renews. `NOTIFY_AND_MANUAL_RENEW`: Notification expires without automatic renewal, users need to manually renew. `DISABLE_NOTIFY_AND_AUTO_RENEW`: No automatic renewal and no notification. Default: `NOTIFY_AND_MANUAL_RENEW`. If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the disk will be automatically renewed monthly when the account balance is sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#renew_flag LighthouseDisk#renew_flag}
  */
  readonly renewFlag?: string;
  /**
  * newly purchased unit. Default: m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#time_unit LighthouseDisk#time_unit}
  */
  readonly timeUnit?: string;
}

export function lighthouseDiskDiskChargePrepaidToTerraform(struct?: LighthouseDiskDiskChargePrepaidOutputReference | LighthouseDiskDiskChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.numberToTerraform(struct!.period),
    renew_flag: cdktf.stringToTerraform(struct!.renewFlag),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function lighthouseDiskDiskChargePrepaidToHclTerraform(struct?: LighthouseDiskDiskChargePrepaidOutputReference | LighthouseDiskDiskChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renew_flag: {
      value: cdktf.stringToHclTerraform(struct!.renewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseDiskDiskChargePrepaidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LighthouseDiskDiskChargePrepaid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._renewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewFlag = this._renewFlag;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseDiskDiskChargePrepaid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._period = undefined;
      this._renewFlag = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._period = value.period;
      this._renewFlag = value.renewFlag;
      this._timeUnit = value.timeUnit;
    }
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // renew_flag - computed: false, optional: true, required: false
  private _renewFlag?: string; 
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }
  public set renewFlag(value: string) {
    this._renewFlag = value;
  }
  public resetRenewFlag() {
    this._renewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk tencentcloud_lighthouse_disk}
*/
export class LighthouseDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_lighthouse_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LighthouseDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LighthouseDisk to import
  * @param importFromId The id of the existing LighthouseDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LighthouseDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_lighthouse_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/lighthouse_disk tencentcloud_lighthouse_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LighthouseDiskConfig
  */
  public constructor(scope: Construct, id: string, config: LighthouseDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_lighthouse_disk',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoVoucher = config.autoVoucher;
    this._diskBackupQuota = config.diskBackupQuota;
    this._diskCount = config.diskCount;
    this._diskName = config.diskName;
    this._diskSize = config.diskSize;
    this._diskType = config.diskType;
    this._id = config.id;
    this._zone = config.zone;
    this._autoMountConfiguration.internalValue = config.autoMountConfiguration;
    this._diskChargePrepaid.internalValue = config.diskChargePrepaid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_voucher - computed: true, optional: true, required: false
  private _autoVoucher?: boolean | cdktf.IResolvable; 
  public get autoVoucher() {
    return this.getBooleanAttribute('auto_voucher');
  }
  public set autoVoucher(value: boolean | cdktf.IResolvable) {
    this._autoVoucher = value;
  }
  public resetAutoVoucher() {
    this._autoVoucher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVoucherInput() {
    return this._autoVoucher;
  }

  // disk_backup_quota - computed: true, optional: true, required: false
  private _diskBackupQuota?: number; 
  public get diskBackupQuota() {
    return this.getNumberAttribute('disk_backup_quota');
  }
  public set diskBackupQuota(value: number) {
    this._diskBackupQuota = value;
  }
  public resetDiskBackupQuota() {
    this._diskBackupQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskBackupQuotaInput() {
    return this._diskBackupQuota;
  }

  // disk_count - computed: true, optional: true, required: false
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }

  // disk_name - computed: true, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // auto_mount_configuration - computed: false, optional: true, required: false
  private _autoMountConfiguration = new LighthouseDiskAutoMountConfigurationOutputReference(this, "auto_mount_configuration");
  public get autoMountConfiguration() {
    return this._autoMountConfiguration;
  }
  public putAutoMountConfiguration(value: LighthouseDiskAutoMountConfiguration) {
    this._autoMountConfiguration.internalValue = value;
  }
  public resetAutoMountConfiguration() {
    this._autoMountConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMountConfigurationInput() {
    return this._autoMountConfiguration.internalValue;
  }

  // disk_charge_prepaid - computed: false, optional: false, required: true
  private _diskChargePrepaid = new LighthouseDiskDiskChargePrepaidOutputReference(this, "disk_charge_prepaid");
  public get diskChargePrepaid() {
    return this._diskChargePrepaid;
  }
  public putDiskChargePrepaid(value: LighthouseDiskDiskChargePrepaid) {
    this._diskChargePrepaid.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskChargePrepaidInput() {
    return this._diskChargePrepaid.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_voucher: cdktf.booleanToTerraform(this._autoVoucher),
      disk_backup_quota: cdktf.numberToTerraform(this._diskBackupQuota),
      disk_count: cdktf.numberToTerraform(this._diskCount),
      disk_name: cdktf.stringToTerraform(this._diskName),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      disk_type: cdktf.stringToTerraform(this._diskType),
      id: cdktf.stringToTerraform(this._id),
      zone: cdktf.stringToTerraform(this._zone),
      auto_mount_configuration: lighthouseDiskAutoMountConfigurationToTerraform(this._autoMountConfiguration.internalValue),
      disk_charge_prepaid: lighthouseDiskDiskChargePrepaidToTerraform(this._diskChargePrepaid.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_voucher: {
        value: cdktf.booleanToHclTerraform(this._autoVoucher),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_backup_quota: {
        value: cdktf.numberToHclTerraform(this._diskBackupQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_count: {
        value: cdktf.numberToHclTerraform(this._diskCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_name: {
        value: cdktf.stringToHclTerraform(this._diskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_mount_configuration: {
        value: lighthouseDiskAutoMountConfigurationToHclTerraform(this._autoMountConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LighthouseDiskAutoMountConfigurationList",
      },
      disk_charge_prepaid: {
        value: lighthouseDiskDiskChargePrepaidToHclTerraform(this._diskChargePrepaid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LighthouseDiskDiskChargePrepaidList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
