// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CbsStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The available zone that the CBS instance locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#availability_zone CbsStorage#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Whether to enable performance burst when creating a cloud disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#burst_performance CbsStorage#burst_performance}
  */
  readonly burstPerformance?: boolean | cdktf.IResolvable;
  /**
  * The charge type of CBS instance. Valid values are `PREPAID`, `POSTPAID_BY_HOUR`, `CDCPAID` and `DEDICATED_CLUSTER_PAID`. The default is `POSTPAID_BY_HOUR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#charge_type CbsStorage#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Exclusive cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#dedicated_cluster_id CbsStorage#dedicated_cluster_id}
  */
  readonly dedicatedClusterId?: string;
  /**
  * The quota of backup points of cloud disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#disk_backup_quota CbsStorage#disk_backup_quota}
  */
  readonly diskBackupQuota?: number;
  /**
  * Pass in this parameter to create an encrypted cloud disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#encrypt CbsStorage#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * Specifies the cloud disk encryption type. The values are `ENCRYPT_V1` and `ENCRYPT_V2`, which represent the first-generation and second-generation encryption technologies respectively. The two encryption technologies are incompatible with each other. It is recommended to use the second-generation encryption technology `ENCRYPT_V2` first. The first-generation encryption technology is only supported on some older models. This parameter is only valid when creating an encrypted cloud disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#encrypt_type CbsStorage#encrypt_type}
  */
  readonly encryptType?: string;
  /**
  * Indicate whether to delete CBS instance directly or not. Default is false. If set true, the instance will be deleted instead of staying recycle bin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#force_delete CbsStorage#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#id CbsStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional parameters. When purchasing an encryption disk, customize the key. When this parameter is passed in, the `encrypt` parameter need be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#kms_key_id CbsStorage#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The purchased usage period of CBS. Valid values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#period CbsStorage#period}
  */
  readonly period?: number;
  /**
  * The tenancy (time unit is month) of the prepaid instance, NOTE: it only works when charge_type is set to `PREPAID`. Valid values are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#prepaid_period CbsStorage#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * Auto Renewal flag. Value range: `NOTIFY_AND_AUTO_RENEW`: Notify expiry and renew automatically, `NOTIFY_AND_MANUAL_RENEW`: Notify expiry but do not renew automatically, `DISABLE_NOTIFY_AND_MANUAL_RENEW`: Neither notify expiry nor renew automatically. Default value range: `NOTIFY_AND_MANUAL_RENEW`: Notify expiry but do not renew automatically. NOTE: it only works when charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#prepaid_renew_flag CbsStorage#prepaid_renew_flag}
  */
  readonly prepaidRenewFlag?: string;
  /**
  * ID of the project to which the instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#project_id CbsStorage#project_id}
  */
  readonly projectId?: number;
  /**
  * ID of the snapshot. If specified, created the CBS by this snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#snapshot_id CbsStorage#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Name of CBS. The maximum length can not exceed 60 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#storage_name CbsStorage#storage_name}
  */
  readonly storageName: string;
  /**
  * Volume of CBS, and unit is GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#storage_size CbsStorage#storage_size}
  */
  readonly storageSize: number;
  /**
  * Type of CBS medium. Valid values: CLOUD_BASIC: HDD cloud disk, CLOUD_PREMIUM: Premium Cloud Storage, CLOUD_BSSD: General Purpose SSD, CLOUD_SSD: SSD, CLOUD_HSSD: Enhanced SSD, CLOUD_TSSD: Tremendous SSD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#storage_type CbsStorage#storage_type}
  */
  readonly storageType: string;
  /**
  * The available tags within this CBS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#tags CbsStorage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Add extra performance to the data disk. Only works when disk type is `CLOUD_TSSD` or `CLOUD_HSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#throughput_performance CbsStorage#throughput_performance}
  */
  readonly throughputPerformance?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage tencentcloud_cbs_storage}
*/
export class CbsStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cbs_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CbsStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CbsStorage to import
  * @param importFromId The id of the existing CbsStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CbsStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cbs_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cbs_storage tencentcloud_cbs_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CbsStorageConfig
  */
  public constructor(scope: Construct, id: string, config: CbsStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cbs_storage',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
    this._burstPerformance = config.burstPerformance;
    this._chargeType = config.chargeType;
    this._dedicatedClusterId = config.dedicatedClusterId;
    this._diskBackupQuota = config.diskBackupQuota;
    this._encrypt = config.encrypt;
    this._encryptType = config.encryptType;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._period = config.period;
    this._prepaidPeriod = config.prepaidPeriod;
    this._prepaidRenewFlag = config.prepaidRenewFlag;
    this._projectId = config.projectId;
    this._snapshotId = config.snapshotId;
    this._storageName = config.storageName;
    this._storageSize = config.storageSize;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._throughputPerformance = config.throughputPerformance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached - computed: true, optional: false, required: false
  public get attached() {
    return this.getBooleanAttribute('attached');
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // burst_performance - computed: true, optional: true, required: false
  private _burstPerformance?: boolean | cdktf.IResolvable; 
  public get burstPerformance() {
    return this.getBooleanAttribute('burst_performance');
  }
  public set burstPerformance(value: boolean | cdktf.IResolvable) {
    this._burstPerformance = value;
  }
  public resetBurstPerformance() {
    this._burstPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstPerformanceInput() {
    return this._burstPerformance;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // dedicated_cluster_id - computed: false, optional: true, required: false
  private _dedicatedClusterId?: string; 
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }
  public set dedicatedClusterId(value: string) {
    this._dedicatedClusterId = value;
  }
  public resetDedicatedClusterId() {
    this._dedicatedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdInput() {
    return this._dedicatedClusterId;
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

  // encrypt_type - computed: true, optional: true, required: false
  private _encryptType?: string; 
  public get encryptType() {
    return this.getStringAttribute('encrypt_type');
  }
  public set encryptType(value: string) {
    this._encryptType = value;
  }
  public resetEncryptType() {
    this._encryptType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptTypeInput() {
    return this._encryptType;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // kms_key_id - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // prepaid_period - computed: true, optional: true, required: false
  private _prepaidPeriod?: number; 
  public get prepaidPeriod() {
    return this.getNumberAttribute('prepaid_period');
  }
  public set prepaidPeriod(value: number) {
    this._prepaidPeriod = value;
  }
  public resetPrepaidPeriod() {
    this._prepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidPeriodInput() {
    return this._prepaidPeriod;
  }

  // prepaid_renew_flag - computed: true, optional: true, required: false
  private _prepaidRenewFlag?: string; 
  public get prepaidRenewFlag() {
    return this.getStringAttribute('prepaid_renew_flag');
  }
  public set prepaidRenewFlag(value: string) {
    this._prepaidRenewFlag = value;
  }
  public resetPrepaidRenewFlag() {
    this._prepaidRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidRenewFlagInput() {
    return this._prepaidRenewFlag;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // snapshot_id - computed: true, optional: true, required: false
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

  // storage_name - computed: false, optional: false, required: true
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }

  // storage_size - computed: false, optional: false, required: true
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // storage_status - computed: true, optional: false, required: false
  public get storageStatus() {
    return this.getStringAttribute('storage_status');
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      burst_performance: cdktf.booleanToTerraform(this._burstPerformance),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      dedicated_cluster_id: cdktf.stringToTerraform(this._dedicatedClusterId),
      disk_backup_quota: cdktf.numberToTerraform(this._diskBackupQuota),
      encrypt: cdktf.booleanToTerraform(this._encrypt),
      encrypt_type: cdktf.stringToTerraform(this._encryptType),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      period: cdktf.numberToTerraform(this._period),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      prepaid_renew_flag: cdktf.stringToTerraform(this._prepaidRenewFlag),
      project_id: cdktf.numberToTerraform(this._projectId),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      storage_name: cdktf.stringToTerraform(this._storageName),
      storage_size: cdktf.numberToTerraform(this._storageSize),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      throughput_performance: cdktf.numberToTerraform(this._throughputPerformance),
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
      burst_performance: {
        value: cdktf.booleanToHclTerraform(this._burstPerformance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_backup_quota: {
        value: cdktf.numberToHclTerraform(this._diskBackupQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encrypt: {
        value: cdktf.booleanToHclTerraform(this._encrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_type: {
        value: cdktf.stringToHclTerraform(this._encryptType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepaid_period: {
        value: cdktf.numberToHclTerraform(this._prepaidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepaid_renew_flag: {
        value: cdktf.stringToHclTerraform(this._prepaidRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_name: {
        value: cdktf.stringToHclTerraform(this._storageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_size: {
        value: cdktf.numberToHclTerraform(this._storageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      throughput_performance: {
        value: cdktf.numberToHclTerraform(this._throughputPerformance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
