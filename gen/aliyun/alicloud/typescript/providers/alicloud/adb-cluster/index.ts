// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#auto_renew_period AdbCluster#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#compute_resource AdbCluster#compute_resource}
  */
  readonly computeResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#db_cluster_category AdbCluster#db_cluster_category}
  */
  readonly dbClusterCategory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#db_cluster_class AdbCluster#db_cluster_class}
  */
  readonly dbClusterClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#db_cluster_version AdbCluster#db_cluster_version}
  */
  readonly dbClusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#db_node_class AdbCluster#db_node_class}
  */
  readonly dbNodeClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#db_node_count AdbCluster#db_node_count}
  */
  readonly dbNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#db_node_storage AdbCluster#db_node_storage}
  */
  readonly dbNodeStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#description AdbCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#disk_encryption AdbCluster#disk_encryption}
  */
  readonly diskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#disk_performance_level AdbCluster#disk_performance_level}
  */
  readonly diskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#elastic_io_resource AdbCluster#elastic_io_resource}
  */
  readonly elasticIoResource?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#elastic_io_resource_size AdbCluster#elastic_io_resource_size}
  */
  readonly elasticIoResourceSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#enable_ssl AdbCluster#enable_ssl}
  */
  readonly enableSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#id AdbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#kernel_version AdbCluster#kernel_version}
  */
  readonly kernelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#kms_id AdbCluster#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#maintain_time AdbCluster#maintain_time}
  */
  readonly maintainTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#mode AdbCluster#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#modify_type AdbCluster#modify_type}
  */
  readonly modifyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#pay_type AdbCluster#pay_type}
  */
  readonly payType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#payment_type AdbCluster#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#period AdbCluster#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#renewal_status AdbCluster#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#resource_group_id AdbCluster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#security_ips AdbCluster#security_ips}
  */
  readonly securityIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#switch_mode AdbCluster#switch_mode}
  */
  readonly switchMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#tags AdbCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#vpc_id AdbCluster#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#vswitch_id AdbCluster#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#zone_id AdbCluster#zone_id}
  */
  readonly zoneId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#timeouts AdbCluster#timeouts}
  */
  readonly timeouts?: AdbClusterTimeouts;
}
export interface AdbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#create AdbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#delete AdbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#update AdbCluster#update}
  */
  readonly update?: string;
}

export function adbClusterTimeoutsToTerraform(struct?: AdbClusterTimeouts | cdktf.IResolvable): any {
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


export function adbClusterTimeoutsToHclTerraform(struct?: AdbClusterTimeouts | cdktf.IResolvable): any {
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

export class AdbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdbClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AdbClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster alicloud_adb_cluster}
*/
export class AdbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_adb_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdbCluster to import
  * @param importFromId The id of the existing AdbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_adb_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/adb_cluster alicloud_adb_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AdbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_adb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._computeResource = config.computeResource;
    this._dbClusterCategory = config.dbClusterCategory;
    this._dbClusterClass = config.dbClusterClass;
    this._dbClusterVersion = config.dbClusterVersion;
    this._dbNodeClass = config.dbNodeClass;
    this._dbNodeCount = config.dbNodeCount;
    this._dbNodeStorage = config.dbNodeStorage;
    this._description = config.description;
    this._diskEncryption = config.diskEncryption;
    this._diskPerformanceLevel = config.diskPerformanceLevel;
    this._elasticIoResource = config.elasticIoResource;
    this._elasticIoResourceSize = config.elasticIoResourceSize;
    this._enableSsl = config.enableSsl;
    this._id = config.id;
    this._kernelVersion = config.kernelVersion;
    this._kmsId = config.kmsId;
    this._maintainTime = config.maintainTime;
    this._mode = config.mode;
    this._modifyType = config.modifyType;
    this._payType = config.payType;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._securityIps = config.securityIps;
    this._switchMode = config.switchMode;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_period - computed: true, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // compute_resource - computed: false, optional: true, required: false
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

  // db_cluster_category - computed: false, optional: false, required: true
  private _dbClusterCategory?: string; 
  public get dbClusterCategory() {
    return this.getStringAttribute('db_cluster_category');
  }
  public set dbClusterCategory(value: string) {
    this._dbClusterCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterCategoryInput() {
    return this._dbClusterCategory;
  }

  // db_cluster_class - computed: false, optional: true, required: false
  private _dbClusterClass?: string; 
  public get dbClusterClass() {
    return this.getStringAttribute('db_cluster_class');
  }
  public set dbClusterClass(value: string) {
    this._dbClusterClass = value;
  }
  public resetDbClusterClass() {
    this._dbClusterClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterClassInput() {
    return this._dbClusterClass;
  }

  // db_cluster_version - computed: false, optional: true, required: false
  private _dbClusterVersion?: string; 
  public get dbClusterVersion() {
    return this.getStringAttribute('db_cluster_version');
  }
  public set dbClusterVersion(value: string) {
    this._dbClusterVersion = value;
  }
  public resetDbClusterVersion() {
    this._dbClusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterVersionInput() {
    return this._dbClusterVersion;
  }

  // db_node_class - computed: true, optional: true, required: false
  private _dbNodeClass?: string; 
  public get dbNodeClass() {
    return this.getStringAttribute('db_node_class');
  }
  public set dbNodeClass(value: string) {
    this._dbNodeClass = value;
  }
  public resetDbNodeClass() {
    this._dbNodeClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeClassInput() {
    return this._dbNodeClass;
  }

  // db_node_count - computed: true, optional: true, required: false
  private _dbNodeCount?: number; 
  public get dbNodeCount() {
    return this.getNumberAttribute('db_node_count');
  }
  public set dbNodeCount(value: number) {
    this._dbNodeCount = value;
  }
  public resetDbNodeCount() {
    this._dbNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeCountInput() {
    return this._dbNodeCount;
  }

  // db_node_storage - computed: true, optional: true, required: false
  private _dbNodeStorage?: number; 
  public get dbNodeStorage() {
    return this.getNumberAttribute('db_node_storage');
  }
  public set dbNodeStorage(value: number) {
    this._dbNodeStorage = value;
  }
  public resetDbNodeStorage() {
    this._dbNodeStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeStorageInput() {
    return this._dbNodeStorage;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // disk_performance_level - computed: true, optional: true, required: false
  private _diskPerformanceLevel?: string; 
  public get diskPerformanceLevel() {
    return this.getStringAttribute('disk_performance_level');
  }
  public set diskPerformanceLevel(value: string) {
    this._diskPerformanceLevel = value;
  }
  public resetDiskPerformanceLevel() {
    this._diskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPerformanceLevelInput() {
    return this._diskPerformanceLevel;
  }

  // elastic_io_resource - computed: true, optional: true, required: false
  private _elasticIoResource?: number; 
  public get elasticIoResource() {
    return this.getNumberAttribute('elastic_io_resource');
  }
  public set elasticIoResource(value: number) {
    this._elasticIoResource = value;
  }
  public resetElasticIoResource() {
    this._elasticIoResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIoResourceInput() {
    return this._elasticIoResource;
  }

  // elastic_io_resource_size - computed: true, optional: true, required: false
  private _elasticIoResourceSize?: string; 
  public get elasticIoResourceSize() {
    return this.getStringAttribute('elastic_io_resource_size');
  }
  public set elasticIoResourceSize(value: string) {
    this._elasticIoResourceSize = value;
  }
  public resetElasticIoResourceSize() {
    this._elasticIoResourceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIoResourceSizeInput() {
    return this._elasticIoResourceSize;
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

  // kernel_version - computed: true, optional: true, required: false
  private _kernelVersion?: string; 
  public get kernelVersion() {
    return this.getStringAttribute('kernel_version');
  }
  public set kernelVersion(value: string) {
    this._kernelVersion = value;
  }
  public resetKernelVersion() {
    this._kernelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelVersionInput() {
    return this._kernelVersion;
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

  // maintain_time - computed: true, optional: true, required: false
  private _maintainTime?: string; 
  public get maintainTime() {
    return this.getStringAttribute('maintain_time');
  }
  public set maintainTime(value: string) {
    this._maintainTime = value;
  }
  public resetMaintainTime() {
    this._maintainTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainTimeInput() {
    return this._maintainTime;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // modify_type - computed: false, optional: true, required: false
  private _modifyType?: string; 
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }
  public set modifyType(value: string) {
    this._modifyType = value;
  }
  public resetModifyType() {
    this._modifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTypeInput() {
    return this._modifyType;
  }

  // pay_type - computed: true, optional: true, required: false
  private _payType?: string; 
  public get payType() {
    return this.getStringAttribute('pay_type');
  }
  public set payType(value: string) {
    this._payType = value;
  }
  public resetPayType() {
    this._payType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payTypeInput() {
    return this._payType;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
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

  // renewal_status - computed: true, optional: true, required: false
  private _renewalStatus?: string; 
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }
  public set renewalStatus(value: string) {
    this._renewalStatus = value;
  }
  public resetRenewalStatus() {
    this._renewalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalStatusInput() {
    return this._renewalStatus;
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

  // security_ips - computed: true, optional: true, required: false
  private _securityIps?: string[]; 
  public get securityIps() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ips'));
  }
  public set securityIps(value: string[]) {
    this._securityIps = value;
  }
  public resetSecurityIps() {
    this._securityIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpsInput() {
    return this._securityIps;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // switch_mode - computed: false, optional: true, required: false
  private _switchMode?: number; 
  public get switchMode() {
    return this.getNumberAttribute('switch_mode');
  }
  public set switchMode(value: number) {
    this._switchMode = value;
  }
  public resetSwitchMode() {
    this._switchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchModeInput() {
    return this._switchMode;
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

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AdbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AdbClusterTimeouts) {
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
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      compute_resource: cdktf.stringToTerraform(this._computeResource),
      db_cluster_category: cdktf.stringToTerraform(this._dbClusterCategory),
      db_cluster_class: cdktf.stringToTerraform(this._dbClusterClass),
      db_cluster_version: cdktf.stringToTerraform(this._dbClusterVersion),
      db_node_class: cdktf.stringToTerraform(this._dbNodeClass),
      db_node_count: cdktf.numberToTerraform(this._dbNodeCount),
      db_node_storage: cdktf.numberToTerraform(this._dbNodeStorage),
      description: cdktf.stringToTerraform(this._description),
      disk_encryption: cdktf.booleanToTerraform(this._diskEncryption),
      disk_performance_level: cdktf.stringToTerraform(this._diskPerformanceLevel),
      elastic_io_resource: cdktf.numberToTerraform(this._elasticIoResource),
      elastic_io_resource_size: cdktf.stringToTerraform(this._elasticIoResourceSize),
      enable_ssl: cdktf.booleanToTerraform(this._enableSsl),
      id: cdktf.stringToTerraform(this._id),
      kernel_version: cdktf.stringToTerraform(this._kernelVersion),
      kms_id: cdktf.stringToTerraform(this._kmsId),
      maintain_time: cdktf.stringToTerraform(this._maintainTime),
      mode: cdktf.stringToTerraform(this._mode),
      modify_type: cdktf.stringToTerraform(this._modifyType),
      pay_type: cdktf.stringToTerraform(this._payType),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIps),
      switch_mode: cdktf.numberToTerraform(this._switchMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: adbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compute_resource: {
        value: cdktf.stringToHclTerraform(this._computeResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_category: {
        value: cdktf.stringToHclTerraform(this._dbClusterCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_class: {
        value: cdktf.stringToHclTerraform(this._dbClusterClass),
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
      db_node_class: {
        value: cdktf.stringToHclTerraform(this._dbNodeClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_node_count: {
        value: cdktf.numberToHclTerraform(this._dbNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_node_storage: {
        value: cdktf.numberToHclTerraform(this._dbNodeStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._diskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elastic_io_resource: {
        value: cdktf.numberToHclTerraform(this._elasticIoResource),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      elastic_io_resource_size: {
        value: cdktf.stringToHclTerraform(this._elasticIoResourceSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      kernel_version: {
        value: cdktf.stringToHclTerraform(this._kernelVersion),
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
      maintain_time: {
        value: cdktf.stringToHclTerraform(this._maintainTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_type: {
        value: cdktf.stringToHclTerraform(this._modifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pay_type: {
        value: cdktf.stringToHclTerraform(this._payType),
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
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
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
      security_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      switch_mode: {
        value: cdktf.numberToHclTerraform(this._switchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
        value: adbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
