// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackAdbDbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#auto_renew_period ApsarastackAdbDbCluster#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#cluster_type ApsarastackAdbDbCluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#compute_resource ApsarastackAdbDbCluster#compute_resource}
  */
  readonly computeResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#cpu_type ApsarastackAdbDbCluster#cpu_type}
  */
  readonly cpuType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#db_cluster_category ApsarastackAdbDbCluster#db_cluster_category}
  */
  readonly dbClusterCategory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#db_cluster_class ApsarastackAdbDbCluster#db_cluster_class}
  */
  readonly dbClusterClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#db_cluster_version ApsarastackAdbDbCluster#db_cluster_version}
  */
  readonly dbClusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#db_node_class ApsarastackAdbDbCluster#db_node_class}
  */
  readonly dbNodeClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#db_node_count ApsarastackAdbDbCluster#db_node_count}
  */
  readonly dbNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#db_node_storage ApsarastackAdbDbCluster#db_node_storage}
  */
  readonly dbNodeStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#description ApsarastackAdbDbCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#executor_count ApsarastackAdbDbCluster#executor_count}
  */
  readonly executorCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#id ApsarastackAdbDbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#maintain_time ApsarastackAdbDbCluster#maintain_time}
  */
  readonly maintainTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#mode ApsarastackAdbDbCluster#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#modify_type ApsarastackAdbDbCluster#modify_type}
  */
  readonly modifyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#pay_type ApsarastackAdbDbCluster#pay_type}
  */
  readonly payType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#payment_type ApsarastackAdbDbCluster#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#period ApsarastackAdbDbCluster#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#renewal_status ApsarastackAdbDbCluster#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#resource_group_id ApsarastackAdbDbCluster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#security_ips ApsarastackAdbDbCluster#security_ips}
  */
  readonly securityIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#storage_resource ApsarastackAdbDbCluster#storage_resource}
  */
  readonly storageResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#storage_type ApsarastackAdbDbCluster#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#vswitch_id ApsarastackAdbDbCluster#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#zone_id ApsarastackAdbDbCluster#zone_id}
  */
  readonly zoneId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#timeouts ApsarastackAdbDbCluster#timeouts}
  */
  readonly timeouts?: ApsarastackAdbDbClusterTimeouts;
}
export interface ApsarastackAdbDbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#create ApsarastackAdbDbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#delete ApsarastackAdbDbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#update ApsarastackAdbDbCluster#update}
  */
  readonly update?: string;
}

export function apsarastackAdbDbClusterTimeoutsToTerraform(struct?: ApsarastackAdbDbClusterTimeouts | cdktf.IResolvable): any {
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


export function apsarastackAdbDbClusterTimeoutsToHclTerraform(struct?: ApsarastackAdbDbClusterTimeouts | cdktf.IResolvable): any {
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

export class ApsarastackAdbDbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackAdbDbClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackAdbDbClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster apsarastack_adb_db_cluster}
*/
export class ApsarastackAdbDbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_adb_db_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackAdbDbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackAdbDbCluster to import
  * @param importFromId The id of the existing ApsarastackAdbDbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackAdbDbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_adb_db_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_adb_db_cluster apsarastack_adb_db_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackAdbDbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackAdbDbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_adb_db_cluster',
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
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._clusterType = config.clusterType;
    this._computeResource = config.computeResource;
    this._cpuType = config.cpuType;
    this._dbClusterCategory = config.dbClusterCategory;
    this._dbClusterClass = config.dbClusterClass;
    this._dbClusterVersion = config.dbClusterVersion;
    this._dbNodeClass = config.dbNodeClass;
    this._dbNodeCount = config.dbNodeCount;
    this._dbNodeStorage = config.dbNodeStorage;
    this._description = config.description;
    this._executorCount = config.executorCount;
    this._id = config.id;
    this._maintainTime = config.maintainTime;
    this._mode = config.mode;
    this._modifyType = config.modifyType;
    this._payType = config.payType;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._securityIps = config.securityIps;
    this._storageResource = config.storageResource;
    this._storageType = config.storageType;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_period - computed: false, optional: true, required: false
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

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
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

  // cpu_type - computed: false, optional: false, required: true
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
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

  // executor_count - computed: true, optional: true, required: false
  private _executorCount?: number; 
  public get executorCount() {
    return this.getNumberAttribute('executor_count');
  }
  public set executorCount(value: number) {
    this._executorCount = value;
  }
  public resetExecutorCount() {
    this._executorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorCountInput() {
    return this._executorCount;
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

  // instance_inner_connection - computed: true, optional: false, required: false
  public get instanceInnerConnection() {
    return this.getStringAttribute('instance_inner_connection');
  }

  // instance_inner_port - computed: true, optional: false, required: false
  public get instanceInnerPort() {
    return this.getStringAttribute('instance_inner_port');
  }

  // instance_vpc_id - computed: true, optional: false, required: false
  public get instanceVpcId() {
    return this.getStringAttribute('instance_vpc_id');
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

  // renewal_status - computed: false, optional: true, required: false
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

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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
  private _timeouts = new ApsarastackAdbDbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackAdbDbClusterTimeouts) {
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
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      compute_resource: cdktf.stringToTerraform(this._computeResource),
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      db_cluster_category: cdktf.stringToTerraform(this._dbClusterCategory),
      db_cluster_class: cdktf.stringToTerraform(this._dbClusterClass),
      db_cluster_version: cdktf.stringToTerraform(this._dbClusterVersion),
      db_node_class: cdktf.stringToTerraform(this._dbNodeClass),
      db_node_count: cdktf.numberToTerraform(this._dbNodeCount),
      db_node_storage: cdktf.numberToTerraform(this._dbNodeStorage),
      description: cdktf.stringToTerraform(this._description),
      executor_count: cdktf.numberToTerraform(this._executorCount),
      id: cdktf.stringToTerraform(this._id),
      maintain_time: cdktf.stringToTerraform(this._maintainTime),
      mode: cdktf.stringToTerraform(this._mode),
      modify_type: cdktf.stringToTerraform(this._modifyType),
      pay_type: cdktf.stringToTerraform(this._payType),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIps),
      storage_resource: cdktf.stringToTerraform(this._storageResource),
      storage_type: cdktf.stringToTerraform(this._storageType),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: apsarastackAdbDbClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
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
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
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
      executor_count: {
        value: cdktf.numberToHclTerraform(this._executorCount),
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
      storage_resource: {
        value: cdktf.stringToHclTerraform(this._storageResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
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
        value: apsarastackAdbDbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackAdbDbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
