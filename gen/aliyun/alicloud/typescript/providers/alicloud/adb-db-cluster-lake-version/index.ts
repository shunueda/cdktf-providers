// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdbDbClusterLakeVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#backup_set_id AdbDbClusterLakeVersion#backup_set_id}
  */
  readonly backupSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#compute_resource AdbDbClusterLakeVersion#compute_resource}
  */
  readonly computeResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#db_cluster_description AdbDbClusterLakeVersion#db_cluster_description}
  */
  readonly dbClusterDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#db_cluster_version AdbDbClusterLakeVersion#db_cluster_version}
  */
  readonly dbClusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#disk_encryption AdbDbClusterLakeVersion#disk_encryption}
  */
  readonly diskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#enable_default_resource_group AdbDbClusterLakeVersion#enable_default_resource_group}
  */
  readonly enableDefaultResourceGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#enable_ssl AdbDbClusterLakeVersion#enable_ssl}
  */
  readonly enableSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#id AdbDbClusterLakeVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#kms_id AdbDbClusterLakeVersion#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#payment_type AdbDbClusterLakeVersion#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#period AdbDbClusterLakeVersion#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#product_form AdbDbClusterLakeVersion#product_form}
  */
  readonly productForm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#product_version AdbDbClusterLakeVersion#product_version}
  */
  readonly productVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#reserved_node_count AdbDbClusterLakeVersion#reserved_node_count}
  */
  readonly reservedNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#reserved_node_size AdbDbClusterLakeVersion#reserved_node_size}
  */
  readonly reservedNodeSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#resource_group_id AdbDbClusterLakeVersion#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#restore_to_time AdbDbClusterLakeVersion#restore_to_time}
  */
  readonly restoreToTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#restore_type AdbDbClusterLakeVersion#restore_type}
  */
  readonly restoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#secondary_vswitch_id AdbDbClusterLakeVersion#secondary_vswitch_id}
  */
  readonly secondaryVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#secondary_zone_id AdbDbClusterLakeVersion#secondary_zone_id}
  */
  readonly secondaryZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#security_ips AdbDbClusterLakeVersion#security_ips}
  */
  readonly securityIps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#source_db_cluster_id AdbDbClusterLakeVersion#source_db_cluster_id}
  */
  readonly sourceDbClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#storage_resource AdbDbClusterLakeVersion#storage_resource}
  */
  readonly storageResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#vpc_id AdbDbClusterLakeVersion#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#vswitch_id AdbDbClusterLakeVersion#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#zone_id AdbDbClusterLakeVersion#zone_id}
  */
  readonly zoneId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#timeouts AdbDbClusterLakeVersion#timeouts}
  */
  readonly timeouts?: AdbDbClusterLakeVersionTimeouts;
}
export interface AdbDbClusterLakeVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#create AdbDbClusterLakeVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#delete AdbDbClusterLakeVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#update AdbDbClusterLakeVersion#update}
  */
  readonly update?: string;
}

export function adbDbClusterLakeVersionTimeoutsToTerraform(struct?: AdbDbClusterLakeVersionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function adbDbClusterLakeVersionTimeoutsToHclTerraform(struct?: AdbDbClusterLakeVersionTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdbDbClusterLakeVersionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdbDbClusterLakeVersionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdbDbClusterLakeVersionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version alicloud_adb_db_cluster_lake_version}
*/
export class AdbDbClusterLakeVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_adb_db_cluster_lake_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdbDbClusterLakeVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdbDbClusterLakeVersion to import
  * @param importFromId The id of the existing AdbDbClusterLakeVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdbDbClusterLakeVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_adb_db_cluster_lake_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_db_cluster_lake_version alicloud_adb_db_cluster_lake_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdbDbClusterLakeVersionConfig
  */
  public constructor(scope: Construct, id: string, config: AdbDbClusterLakeVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_adb_db_cluster_lake_version',
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
    this._backupSetId = config.backupSetId;
    this._computeResource = config.computeResource;
    this._dbClusterDescription = config.dbClusterDescription;
    this._dbClusterVersion = config.dbClusterVersion;
    this._diskEncryption = config.diskEncryption;
    this._enableDefaultResourceGroup = config.enableDefaultResourceGroup;
    this._enableSsl = config.enableSsl;
    this._id = config.id;
    this._kmsId = config.kmsId;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._productForm = config.productForm;
    this._productVersion = config.productVersion;
    this._reservedNodeCount = config.reservedNodeCount;
    this._reservedNodeSize = config.reservedNodeSize;
    this._resourceGroupId = config.resourceGroupId;
    this._restoreToTime = config.restoreToTime;
    this._restoreType = config.restoreType;
    this._secondaryVswitchId = config.secondaryVswitchId;
    this._secondaryZoneId = config.secondaryZoneId;
    this._securityIps = config.securityIps;
    this._sourceDbClusterId = config.sourceDbClusterId;
    this._storageResource = config.storageResource;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_set_id - computed: false, optional: true, required: false
  private _backupSetId?: string; 
  public get backupSetId() {
    return this.getStringAttribute('backup_set_id');
  }
  public set backupSetId(value: string) {
    this._backupSetId = value;
  }
  public resetBackupSetId() {
    this._backupSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSetIdInput() {
    return this._backupSetId;
  }

  // commodity_code - computed: true, optional: false, required: false
  public get commodityCode() {
    return this.getStringAttribute('commodity_code');
  }

  // compute_resource - computed: true, optional: true, required: false
  private _computeResource?: string; 
  public get computeResource() {
    return this.getStringAttribute('compute_resource');
  }
  public set computeResource(value: string) {
    this._computeResource = value;
  }
  public resetComputeResource() {
    this._computeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourceInput() {
    return this._computeResource;
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_cluster_description - computed: true, optional: true, required: false
  private _dbClusterDescription?: string; 
  public get dbClusterDescription() {
    return this.getStringAttribute('db_cluster_description');
  }
  public set dbClusterDescription(value: string) {
    this._dbClusterDescription = value;
  }
  public resetDbClusterDescription() {
    this._dbClusterDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterDescriptionInput() {
    return this._dbClusterDescription;
  }

  // db_cluster_version - computed: false, optional: false, required: true
  private _dbClusterVersion?: string; 
  public get dbClusterVersion() {
    return this.getStringAttribute('db_cluster_version');
  }
  public set dbClusterVersion(value: string) {
    this._dbClusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterVersionInput() {
    return this._dbClusterVersion;
  }

  // disk_encryption - computed: false, optional: true, required: false
  private _diskEncryption?: boolean | cdktf.IResolvable; 
  public get diskEncryption() {
    return this.getBooleanAttribute('disk_encryption');
  }
  public set diskEncryption(value: boolean | cdktf.IResolvable) {
    this._diskEncryption = value;
  }
  public resetDiskEncryption() {
    this._diskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionInput() {
    return this._diskEncryption;
  }

  // enable_default_resource_group - computed: false, optional: true, required: false
  private _enableDefaultResourceGroup?: boolean | cdktf.IResolvable; 
  public get enableDefaultResourceGroup() {
    return this.getBooleanAttribute('enable_default_resource_group');
  }
  public set enableDefaultResourceGroup(value: boolean | cdktf.IResolvable) {
    this._enableDefaultResourceGroup = value;
  }
  public resetEnableDefaultResourceGroup() {
    this._enableDefaultResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultResourceGroupInput() {
    return this._enableDefaultResourceGroup;
  }

  // enable_ssl - computed: false, optional: true, required: false
  private _enableSsl?: boolean | cdktf.IResolvable; 
  public get enableSsl() {
    return this.getBooleanAttribute('enable_ssl');
  }
  public set enableSsl(value: boolean | cdktf.IResolvable) {
    this._enableSsl = value;
  }
  public resetEnableSsl() {
    this._enableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslInput() {
    return this._enableSsl;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
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

  // kms_id - computed: false, optional: true, required: false
  private _kmsId?: string; 
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }
  public set kmsId(value: string) {
    this._kmsId = value;
  }
  public resetKmsId() {
    this._kmsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsIdInput() {
    return this._kmsId;
  }

  // lock_mode - computed: true, optional: false, required: false
  public get lockMode() {
    return this.getStringAttribute('lock_mode');
  }

  // lock_reason - computed: true, optional: false, required: false
  public get lockReason() {
    return this.getStringAttribute('lock_reason');
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // product_form - computed: true, optional: true, required: false
  private _productForm?: string; 
  public get productForm() {
    return this.getStringAttribute('product_form');
  }
  public set productForm(value: string) {
    this._productForm = value;
  }
  public resetProductForm() {
    this._productForm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFormInput() {
    return this._productForm;
  }

  // product_version - computed: true, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // reserved_node_count - computed: true, optional: true, required: false
  private _reservedNodeCount?: number; 
  public get reservedNodeCount() {
    return this.getNumberAttribute('reserved_node_count');
  }
  public set reservedNodeCount(value: number) {
    this._reservedNodeCount = value;
  }
  public resetReservedNodeCount() {
    this._reservedNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedNodeCountInput() {
    return this._reservedNodeCount;
  }

  // reserved_node_size - computed: true, optional: true, required: false
  private _reservedNodeSize?: string; 
  public get reservedNodeSize() {
    return this.getStringAttribute('reserved_node_size');
  }
  public set reservedNodeSize(value: string) {
    this._reservedNodeSize = value;
  }
  public resetReservedNodeSize() {
    this._reservedNodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedNodeSizeInput() {
    return this._reservedNodeSize;
  }

  // resource_group_id - computed: true, optional: true, required: false
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

  // restore_to_time - computed: false, optional: true, required: false
  private _restoreToTime?: string; 
  public get restoreToTime() {
    return this.getStringAttribute('restore_to_time');
  }
  public set restoreToTime(value: string) {
    this._restoreToTime = value;
  }
  public resetRestoreToTime() {
    this._restoreToTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreToTimeInput() {
    return this._restoreToTime;
  }

  // restore_type - computed: false, optional: true, required: false
  private _restoreType?: string; 
  public get restoreType() {
    return this.getStringAttribute('restore_type');
  }
  public set restoreType(value: string) {
    this._restoreType = value;
  }
  public resetRestoreType() {
    this._restoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTypeInput() {
    return this._restoreType;
  }

  // secondary_vswitch_id - computed: false, optional: true, required: false
  private _secondaryVswitchId?: string; 
  public get secondaryVswitchId() {
    return this.getStringAttribute('secondary_vswitch_id');
  }
  public set secondaryVswitchId(value: string) {
    this._secondaryVswitchId = value;
  }
  public resetSecondaryVswitchId() {
    this._secondaryVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVswitchIdInput() {
    return this._secondaryVswitchId;
  }

  // secondary_zone_id - computed: false, optional: true, required: false
  private _secondaryZoneId?: string; 
  public get secondaryZoneId() {
    return this.getStringAttribute('secondary_zone_id');
  }
  public set secondaryZoneId(value: string) {
    this._secondaryZoneId = value;
  }
  public resetSecondaryZoneId() {
    this._secondaryZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryZoneIdInput() {
    return this._secondaryZoneId;
  }

  // security_ips - computed: true, optional: true, required: false
  private _securityIps?: string; 
  public get securityIps() {
    return this.getStringAttribute('security_ips');
  }
  public set securityIps(value: string) {
    this._securityIps = value;
  }
  public resetSecurityIps() {
    this._securityIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpsInput() {
    return this._securityIps;
  }

  // source_db_cluster_id - computed: false, optional: true, required: false
  private _sourceDbClusterId?: string; 
  public get sourceDbClusterId() {
    return this.getStringAttribute('source_db_cluster_id');
  }
  public set sourceDbClusterId(value: string) {
    this._sourceDbClusterId = value;
  }
  public resetSourceDbClusterId() {
    this._sourceDbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbClusterIdInput() {
    return this._sourceDbClusterId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_resource - computed: true, optional: true, required: false
  private _storageResource?: string; 
  public get storageResource() {
    return this.getStringAttribute('storage_resource');
  }
  public set storageResource(value: string) {
    this._storageResource = value;
  }
  public resetStorageResource() {
    this._storageResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageResourceInput() {
    return this._storageResource;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AdbDbClusterLakeVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AdbDbClusterLakeVersionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_set_id: cdktf.stringToTerraform(this._backupSetId),
      compute_resource: cdktf.stringToTerraform(this._computeResource),
      db_cluster_description: cdktf.stringToTerraform(this._dbClusterDescription),
      db_cluster_version: cdktf.stringToTerraform(this._dbClusterVersion),
      disk_encryption: cdktf.booleanToTerraform(this._diskEncryption),
      enable_default_resource_group: cdktf.booleanToTerraform(this._enableDefaultResourceGroup),
      enable_ssl: cdktf.booleanToTerraform(this._enableSsl),
      id: cdktf.stringToTerraform(this._id),
      kms_id: cdktf.stringToTerraform(this._kmsId),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      product_form: cdktf.stringToTerraform(this._productForm),
      product_version: cdktf.stringToTerraform(this._productVersion),
      reserved_node_count: cdktf.numberToTerraform(this._reservedNodeCount),
      reserved_node_size: cdktf.stringToTerraform(this._reservedNodeSize),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      restore_to_time: cdktf.stringToTerraform(this._restoreToTime),
      restore_type: cdktf.stringToTerraform(this._restoreType),
      secondary_vswitch_id: cdktf.stringToTerraform(this._secondaryVswitchId),
      secondary_zone_id: cdktf.stringToTerraform(this._secondaryZoneId),
      security_ips: cdktf.stringToTerraform(this._securityIps),
      source_db_cluster_id: cdktf.stringToTerraform(this._sourceDbClusterId),
      storage_resource: cdktf.stringToTerraform(this._storageResource),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: adbDbClusterLakeVersionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_set_id: {
        value: cdktf.stringToHclTerraform(this._backupSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_resource: {
        value: cdktf.stringToHclTerraform(this._computeResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_description: {
        value: cdktf.stringToHclTerraform(this._dbClusterDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_version: {
        value: cdktf.stringToHclTerraform(this._dbClusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_encryption: {
        value: cdktf.booleanToHclTerraform(this._diskEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_resource_group: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ssl: {
        value: cdktf.booleanToHclTerraform(this._enableSsl),
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
      kms_id: {
        value: cdktf.stringToHclTerraform(this._kmsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
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
      product_form: {
        value: cdktf.stringToHclTerraform(this._productForm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_version: {
        value: cdktf.stringToHclTerraform(this._productVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_node_count: {
        value: cdktf.numberToHclTerraform(this._reservedNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reserved_node_size: {
        value: cdktf.stringToHclTerraform(this._reservedNodeSize),
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
      restore_to_time: {
        value: cdktf.stringToHclTerraform(this._restoreToTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_type: {
        value: cdktf.stringToHclTerraform(this._restoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._secondaryVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_zone_id: {
        value: cdktf.stringToHclTerraform(this._secondaryZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ips: {
        value: cdktf.stringToHclTerraform(this._securityIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_db_cluster_id: {
        value: cdktf.stringToHclTerraform(this._sourceDbClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_resource: {
        value: cdktf.stringToHclTerraform(this._storageResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: adbDbClusterLakeVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdbDbClusterLakeVersionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
