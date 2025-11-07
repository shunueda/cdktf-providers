// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbZonalDbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#auto_renew_period PolardbZonalDbCluster#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#cluster_version PolardbZonalDbCluster#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#creation_category PolardbZonalDbCluster#creation_category}
  */
  readonly creationCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#db_cluster_nodes_configs PolardbZonalDbCluster#db_cluster_nodes_configs}
  */
  readonly dbClusterNodesConfigs: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#db_minor_version PolardbZonalDbCluster#db_minor_version}
  */
  readonly dbMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#db_node_class PolardbZonalDbCluster#db_node_class}
  */
  readonly dbNodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#db_type PolardbZonalDbCluster#db_type}
  */
  readonly dbType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#db_version PolardbZonalDbCluster#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#description PolardbZonalDbCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#ens_region_id PolardbZonalDbCluster#ens_region_id}
  */
  readonly ensRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#id PolardbZonalDbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#pay_type PolardbZonalDbCluster#pay_type}
  */
  readonly payType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#renewal_status PolardbZonalDbCluster#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#storage_space PolardbZonalDbCluster#storage_space}
  */
  readonly storageSpace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#storage_type PolardbZonalDbCluster#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#target_minor_version PolardbZonalDbCluster#target_minor_version}
  */
  readonly targetMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#used_time PolardbZonalDbCluster#used_time}
  */
  readonly usedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#vpc_id PolardbZonalDbCluster#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#vswitch_id PolardbZonalDbCluster#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#timeouts PolardbZonalDbCluster#timeouts}
  */
  readonly timeouts?: PolardbZonalDbClusterTimeouts;
}
export interface PolardbZonalDbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#create PolardbZonalDbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#delete PolardbZonalDbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#update PolardbZonalDbCluster#update}
  */
  readonly update?: string;
}

export function polardbZonalDbClusterTimeoutsToTerraform(struct?: PolardbZonalDbClusterTimeouts | cdktf.IResolvable): any {
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


export function polardbZonalDbClusterTimeoutsToHclTerraform(struct?: PolardbZonalDbClusterTimeouts | cdktf.IResolvable): any {
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

export class PolardbZonalDbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolardbZonalDbClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolardbZonalDbClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster alicloud_polardb_zonal_db_cluster}
*/
export class PolardbZonalDbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_polardb_zonal_db_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbZonalDbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbZonalDbCluster to import
  * @param importFromId The id of the existing PolardbZonalDbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbZonalDbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_polardb_zonal_db_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_db_cluster alicloud_polardb_zonal_db_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbZonalDbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbZonalDbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_polardb_zonal_db_cluster',
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
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._clusterVersion = config.clusterVersion;
    this._creationCategory = config.creationCategory;
    this._dbClusterNodesConfigs = config.dbClusterNodesConfigs;
    this._dbMinorVersion = config.dbMinorVersion;
    this._dbNodeClass = config.dbNodeClass;
    this._dbType = config.dbType;
    this._dbVersion = config.dbVersion;
    this._description = config.description;
    this._ensRegionId = config.ensRegionId;
    this._id = config.id;
    this._payType = config.payType;
    this._renewalStatus = config.renewalStatus;
    this._storageSpace = config.storageSpace;
    this._storageType = config.storageType;
    this._targetMinorVersion = config.targetMinorVersion;
    this._usedTime = config.usedTime;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
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

  // cluster_latest_version - computed: true, optional: false, required: false
  public get clusterLatestVersion() {
    return this.getStringAttribute('cluster_latest_version');
  }

  // cluster_version - computed: true, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creation_category - computed: true, optional: true, required: false
  private _creationCategory?: string; 
  public get creationCategory() {
    return this.getStringAttribute('creation_category');
  }
  public set creationCategory(value: string) {
    this._creationCategory = value;
  }
  public resetCreationCategory() {
    this._creationCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationCategoryInput() {
    return this._creationCategory;
  }

  // db_cluster_nodes_attributes - computed: true, optional: false, required: false
  private _dbClusterNodesAttributes = new cdktf.StringMap(this, "db_cluster_nodes_attributes");
  public get dbClusterNodesAttributes() {
    return this._dbClusterNodesAttributes;
  }

  // db_cluster_nodes_configs - computed: false, optional: false, required: true
  private _dbClusterNodesConfigs?: { [key: string]: string }; 
  public get dbClusterNodesConfigs() {
    return this.getStringMapAttribute('db_cluster_nodes_configs');
  }
  public set dbClusterNodesConfigs(value: { [key: string]: string }) {
    this._dbClusterNodesConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterNodesConfigsInput() {
    return this._dbClusterNodesConfigs;
  }

  // db_cluster_nodes_ids - computed: true, optional: false, required: false
  private _dbClusterNodesIds = new cdktf.StringMap(this, "db_cluster_nodes_ids");
  public get dbClusterNodesIds() {
    return this._dbClusterNodesIds;
  }

  // db_minor_version - computed: false, optional: true, required: false
  private _dbMinorVersion?: string; 
  public get dbMinorVersion() {
    return this.getStringAttribute('db_minor_version');
  }
  public set dbMinorVersion(value: string) {
    this._dbMinorVersion = value;
  }
  public resetDbMinorVersion() {
    this._dbMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbMinorVersionInput() {
    return this._dbMinorVersion;
  }

  // db_node_class - computed: false, optional: false, required: true
  private _dbNodeClass?: string; 
  public get dbNodeClass() {
    return this.getStringAttribute('db_node_class');
  }
  public set dbNodeClass(value: string) {
    this._dbNodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeClassInput() {
    return this._dbNodeClass;
  }

  // db_type - computed: false, optional: true, required: false
  private _dbType?: string; 
  public get dbType() {
    return this.getStringAttribute('db_type');
  }
  public set dbType(value: string) {
    this._dbType = value;
  }
  public resetDbType() {
    this._dbType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTypeInput() {
    return this._dbType;
  }

  // db_version - computed: false, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
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

  // ens_region_id - computed: false, optional: false, required: true
  private _ensRegionId?: string; 
  public get ensRegionId() {
    return this.getStringAttribute('ens_region_id');
  }
  public set ensRegionId(value: string) {
    this._ensRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ensRegionIdInput() {
    return this._ensRegionId;
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

  // pay_type - computed: false, optional: true, required: false
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
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

  // storage_pay_type - computed: true, optional: false, required: false
  public get storagePayType() {
    return this.getStringAttribute('storage_pay_type');
  }

  // storage_space - computed: false, optional: true, required: false
  private _storageSpace?: number; 
  public get storageSpace() {
    return this.getNumberAttribute('storage_space');
  }
  public set storageSpace(value: number) {
    this._storageSpace = value;
  }
  public resetStorageSpace() {
    this._storageSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSpaceInput() {
    return this._storageSpace;
  }

  // storage_type - computed: false, optional: true, required: false
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

  // target_minor_version - computed: false, optional: true, required: false
  private _targetMinorVersion?: string; 
  public get targetMinorVersion() {
    return this.getStringAttribute('target_minor_version');
  }
  public set targetMinorVersion(value: string) {
    this._targetMinorVersion = value;
  }
  public resetTargetMinorVersion() {
    this._targetMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMinorVersionInput() {
    return this._targetMinorVersion;
  }

  // used_time - computed: false, optional: true, required: false
  private _usedTime?: number; 
  public get usedTime() {
    return this.getNumberAttribute('used_time');
  }
  public set usedTime(value: number) {
    this._usedTime = value;
  }
  public resetUsedTime() {
    this._usedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedTimeInput() {
    return this._usedTime;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PolardbZonalDbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PolardbZonalDbClusterTimeouts) {
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
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      creation_category: cdktf.stringToTerraform(this._creationCategory),
      db_cluster_nodes_configs: cdktf.hashMapper(cdktf.stringToTerraform)(this._dbClusterNodesConfigs),
      db_minor_version: cdktf.stringToTerraform(this._dbMinorVersion),
      db_node_class: cdktf.stringToTerraform(this._dbNodeClass),
      db_type: cdktf.stringToTerraform(this._dbType),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      description: cdktf.stringToTerraform(this._description),
      ens_region_id: cdktf.stringToTerraform(this._ensRegionId),
      id: cdktf.stringToTerraform(this._id),
      pay_type: cdktf.stringToTerraform(this._payType),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      storage_space: cdktf.numberToTerraform(this._storageSpace),
      storage_type: cdktf.stringToTerraform(this._storageType),
      target_minor_version: cdktf.stringToTerraform(this._targetMinorVersion),
      used_time: cdktf.numberToTerraform(this._usedTime),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      timeouts: polardbZonalDbClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_category: {
        value: cdktf.stringToHclTerraform(this._creationCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_nodes_configs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dbClusterNodesConfigs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      db_minor_version: {
        value: cdktf.stringToHclTerraform(this._dbMinorVersion),
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
      db_type: {
        value: cdktf.stringToHclTerraform(this._dbType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ens_region_id: {
        value: cdktf.stringToHclTerraform(this._ensRegionId),
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
      pay_type: {
        value: cdktf.stringToHclTerraform(this._payType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_space: {
        value: cdktf.numberToHclTerraform(this._storageSpace),
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
      target_minor_version: {
        value: cdktf.stringToHclTerraform(this._targetMinorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      used_time: {
        value: cdktf.numberToHclTerraform(this._usedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      timeouts: {
        value: polardbZonalDbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PolardbZonalDbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
