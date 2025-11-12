// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdmqRabbitmqVipInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatic renewal, the default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#auto_renew_flag TdmqRabbitmqVipInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: boolean | cdktf.IResolvable;
  /**
  * cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#cluster_name TdmqRabbitmqVipInstance#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Cluster version, the default is `3.8.30`, valid values: `3.8.30` and `3.11.8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#cluster_version TdmqRabbitmqVipInstance#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Mirrored queue, the default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#enable_create_default_ha_mirror_queue TdmqRabbitmqVipInstance#enable_create_default_ha_mirror_queue}
  */
  readonly enableCreateDefaultHaMirrorQueue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#id TdmqRabbitmqVipInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of nodes, a minimum of 3 nodes for a multi-availability zone. If not passed, the default single availability zone is 1, and the multi-availability zone is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#node_num TdmqRabbitmqVipInstance#node_num}
  */
  readonly nodeNum?: number;
  /**
  * Node specifications. Valid values: rabbit-vip-basic-5 (for 2C4G), rabbit-vip-profession-2c8g (for 2C8G), rabbit-vip-basic-1 (for 4C8G), rabbit-vip-profession-4c16g (for 4C16G), rabbit-vip-basic-2 (for 8C16G), rabbit-vip-profession-8c32g (for 8C32G), rabbit-vip-basic-4 (for 16C32G), rabbit-vip-profession-16c64g (for 16C64G). The default is rabbit-vip-basic-1. NOTE: The above specifications may be sold out or removed from the shelves.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#node_spec TdmqRabbitmqVipInstance#node_spec}
  */
  readonly nodeSpec?: string;
  /**
  * Payment method: 0 indicates postpaid; 1 indicates prepaid. Default: prepaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#pay_mode TdmqRabbitmqVipInstance#pay_mode}
  */
  readonly payMode?: number;
  /**
  * Single node storage specification, the default is 200G.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#storage_size TdmqRabbitmqVipInstance#storage_size}
  */
  readonly storageSize?: number;
  /**
  * Private network SubnetId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#subnet_id TdmqRabbitmqVipInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Purchase duration, the default is 1 (month).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#time_span TdmqRabbitmqVipInstance#time_span}
  */
  readonly timeSpan?: number;
  /**
  * Private network VpcId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#vpc_id TdmqRabbitmqVipInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#zone_ids TdmqRabbitmqVipInstance#zone_ids}
  */
  readonly zoneIds: number[];
}
export interface TdmqRabbitmqVipInstanceVpcs {
}

export function tdmqRabbitmqVipInstanceVpcsToTerraform(struct?: TdmqRabbitmqVipInstanceVpcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tdmqRabbitmqVipInstanceVpcsToHclTerraform(struct?: TdmqRabbitmqVipInstanceVpcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TdmqRabbitmqVipInstanceVpcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TdmqRabbitmqVipInstanceVpcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TdmqRabbitmqVipInstanceVpcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_data_stream_endpoint_status - computed: true, optional: false, required: false
  public get vpcDataStreamEndpointStatus() {
    return this.getStringAttribute('vpc_data_stream_endpoint_status');
  }

  // vpc_endpoint - computed: true, optional: false, required: false
  public get vpcEndpoint() {
    return this.getStringAttribute('vpc_endpoint');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class TdmqRabbitmqVipInstanceVpcsList extends cdktf.ComplexList {

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
  public get(index: number): TdmqRabbitmqVipInstanceVpcsOutputReference {
    return new TdmqRabbitmqVipInstanceVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance tencentcloud_tdmq_rabbitmq_vip_instance}
*/
export class TdmqRabbitmqVipInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_rabbitmq_vip_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdmqRabbitmqVipInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdmqRabbitmqVipInstance to import
  * @param importFromId The id of the existing TdmqRabbitmqVipInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdmqRabbitmqVipInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_rabbitmq_vip_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tdmq_rabbitmq_vip_instance tencentcloud_tdmq_rabbitmq_vip_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdmqRabbitmqVipInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: TdmqRabbitmqVipInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_rabbitmq_vip_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewFlag = config.autoRenewFlag;
    this._clusterName = config.clusterName;
    this._clusterVersion = config.clusterVersion;
    this._enableCreateDefaultHaMirrorQueue = config.enableCreateDefaultHaMirrorQueue;
    this._id = config.id;
    this._nodeNum = config.nodeNum;
    this._nodeSpec = config.nodeSpec;
    this._payMode = config.payMode;
    this._storageSize = config.storageSize;
    this._subnetId = config.subnetId;
    this._timeSpan = config.timeSpan;
    this._vpcId = config.vpcId;
    this._zoneIds = config.zoneIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_flag - computed: false, optional: true, required: false
  private _autoRenewFlag?: boolean | cdktf.IResolvable; 
  public get autoRenewFlag() {
    return this.getBooleanAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: boolean | cdktf.IResolvable) {
    this._autoRenewFlag = value;
  }
  public resetAutoRenewFlag() {
    this._autoRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // enable_create_default_ha_mirror_queue - computed: false, optional: true, required: false
  private _enableCreateDefaultHaMirrorQueue?: boolean | cdktf.IResolvable; 
  public get enableCreateDefaultHaMirrorQueue() {
    return this.getBooleanAttribute('enable_create_default_ha_mirror_queue');
  }
  public set enableCreateDefaultHaMirrorQueue(value: boolean | cdktf.IResolvable) {
    this._enableCreateDefaultHaMirrorQueue = value;
  }
  public resetEnableCreateDefaultHaMirrorQueue() {
    this._enableCreateDefaultHaMirrorQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCreateDefaultHaMirrorQueueInput() {
    return this._enableCreateDefaultHaMirrorQueue;
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

  // node_num - computed: false, optional: true, required: false
  private _nodeNum?: number; 
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }
  public set nodeNum(value: number) {
    this._nodeNum = value;
  }
  public resetNodeNum() {
    this._nodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumInput() {
    return this._nodeNum;
  }

  // node_spec - computed: false, optional: true, required: false
  private _nodeSpec?: string; 
  public get nodeSpec() {
    return this.getStringAttribute('node_spec');
  }
  public set nodeSpec(value: string) {
    this._nodeSpec = value;
  }
  public resetNodeSpec() {
    this._nodeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSpecInput() {
    return this._nodeSpec;
  }

  // pay_mode - computed: true, optional: true, required: false
  private _payMode?: number; 
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }
  public set payMode(value: number) {
    this._payMode = value;
  }
  public resetPayMode() {
    this._payMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
  }

  // public_access_endpoint - computed: true, optional: false, required: false
  public get publicAccessEndpoint() {
    return this.getStringAttribute('public_access_endpoint');
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // time_span - computed: false, optional: true, required: false
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  public resetTimeSpan() {
    this._timeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
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

  // vpcs - computed: true, optional: false, required: false
  private _vpcs = new TdmqRabbitmqVipInstanceVpcsList(this, "vpcs", false);
  public get vpcs() {
    return this._vpcs;
  }

  // zone_ids - computed: false, optional: false, required: true
  private _zoneIds?: number[]; 
  public get zoneIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('zone_ids')));
  }
  public set zoneIds(value: number[]) {
    this._zoneIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.booleanToTerraform(this._autoRenewFlag),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      enable_create_default_ha_mirror_queue: cdktf.booleanToTerraform(this._enableCreateDefaultHaMirrorQueue),
      id: cdktf.stringToTerraform(this._id),
      node_num: cdktf.numberToTerraform(this._nodeNum),
      node_spec: cdktf.stringToTerraform(this._nodeSpec),
      pay_mode: cdktf.numberToTerraform(this._payMode),
      storage_size: cdktf.numberToTerraform(this._storageSize),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._zoneIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_flag: {
        value: cdktf.booleanToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_create_default_ha_mirror_queue: {
        value: cdktf.booleanToHclTerraform(this._enableCreateDefaultHaMirrorQueue),
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
      node_num: {
        value: cdktf.numberToHclTerraform(this._nodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_spec: {
        value: cdktf.stringToHclTerraform(this._nodeSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pay_mode: {
        value: cdktf.numberToHclTerraform(this._payMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_size: {
        value: cdktf.numberToHclTerraform(this._storageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
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
      zone_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._zoneIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
