// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbProxyEndPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection mode: nearby, balance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#access_mode CynosdbProxyEndPoint#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Do you want to automatically add read-only instances? Yes - Yes, no - Do not automatically add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#auto_add_ro CynosdbProxyEndPoint#auto_add_ro}
  */
  readonly autoAddRo?: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#cluster_id CynosdbProxyEndPoint#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Connection pool threshold: unit (second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#connection_pool_time_out CynosdbProxyEndPoint#connection_pool_time_out}
  */
  readonly connectionPoolTimeOut?: number;
  /**
  * Connection pool type: SessionConnectionPool (session level Connection pool).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#connection_pool_type CynosdbProxyEndPoint#connection_pool_type}
  */
  readonly connectionPoolType?: string;
  /**
  * Consistency timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#consistency_time_out CynosdbProxyEndPoint#consistency_time_out}
  */
  readonly consistencyTimeOut?: number;
  /**
  * Consistency type: event, global, session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#consistency_type CynosdbProxyEndPoint#consistency_type}
  */
  readonly consistencyType?: string;
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#description CynosdbProxyEndPoint#description}
  */
  readonly description?: string;
  /**
  * Enable Failover. yes or no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#fail_over CynosdbProxyEndPoint#fail_over}
  */
  readonly failOver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#id CynosdbProxyEndPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to enable Connection pool, yes - enable, no - do not enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#open_connection_pool CynosdbProxyEndPoint#open_connection_pool}
  */
  readonly openConnectionPool?: string;
  /**
  * Read and write attributes: READWRITE, READONLY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#rw_type CynosdbProxyEndPoint#rw_type}
  */
  readonly rwType?: string;
  /**
  * Security Group ID Array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#security_group_ids CynosdbProxyEndPoint#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Transaction splitting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#trans_split CynosdbProxyEndPoint#trans_split}
  */
  readonly transSplit?: boolean | cdktf.IResolvable;
  /**
  * The private network subnet ID is consistent with the cluster subnet ID by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#unique_subnet_id CynosdbProxyEndPoint#unique_subnet_id}
  */
  readonly uniqueSubnetId: string;
  /**
  * Private network ID, which is consistent with the cluster private network ID by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#unique_vpc_id CynosdbProxyEndPoint#unique_vpc_id}
  */
  readonly uniqueVpcId: string;
  /**
  * VIP Information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#vip CynosdbProxyEndPoint#vip}
  */
  readonly vip?: string;
  /**
  * Port Information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#vport CynosdbProxyEndPoint#vport}
  */
  readonly vport?: number;
  /**
  * Weight mode: system system allocation, custom customization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#weight_mode CynosdbProxyEndPoint#weight_mode}
  */
  readonly weightMode?: string;
  /**
  * instance_weights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#instance_weights CynosdbProxyEndPoint#instance_weights}
  */
  readonly instanceWeights?: CynosdbProxyEndPointInstanceWeights[] | cdktf.IResolvable;
}
export interface CynosdbProxyEndPointInstanceWeights {
  /**
  * Instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#instance_id CynosdbProxyEndPoint#instance_id}
  */
  readonly instanceId: string;
  /**
  * Instance Weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#weight CynosdbProxyEndPoint#weight}
  */
  readonly weight: number;
}

export function cynosdbProxyEndPointInstanceWeightsToTerraform(struct?: CynosdbProxyEndPointInstanceWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function cynosdbProxyEndPointInstanceWeightsToHclTerraform(struct?: CynosdbProxyEndPointInstanceWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CynosdbProxyEndPointInstanceWeightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbProxyEndPointInstanceWeights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbProxyEndPointInstanceWeights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._weight = value.weight;
    }
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

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class CynosdbProxyEndPointInstanceWeightsList extends cdktf.ComplexList {
  public internalValue? : CynosdbProxyEndPointInstanceWeights[] | cdktf.IResolvable

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
  public get(index: number): CynosdbProxyEndPointInstanceWeightsOutputReference {
    return new CynosdbProxyEndPointInstanceWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point tencentcloud_cynosdb_proxy_end_point}
*/
export class CynosdbProxyEndPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_proxy_end_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbProxyEndPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbProxyEndPoint to import
  * @param importFromId The id of the existing CynosdbProxyEndPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbProxyEndPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_proxy_end_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_proxy_end_point tencentcloud_cynosdb_proxy_end_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbProxyEndPointConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbProxyEndPointConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_proxy_end_point',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._autoAddRo = config.autoAddRo;
    this._clusterId = config.clusterId;
    this._connectionPoolTimeOut = config.connectionPoolTimeOut;
    this._connectionPoolType = config.connectionPoolType;
    this._consistencyTimeOut = config.consistencyTimeOut;
    this._consistencyType = config.consistencyType;
    this._description = config.description;
    this._failOver = config.failOver;
    this._id = config.id;
    this._openConnectionPool = config.openConnectionPool;
    this._rwType = config.rwType;
    this._securityGroupIds = config.securityGroupIds;
    this._transSplit = config.transSplit;
    this._uniqueSubnetId = config.uniqueSubnetId;
    this._uniqueVpcId = config.uniqueVpcId;
    this._vip = config.vip;
    this._vport = config.vport;
    this._weightMode = config.weightMode;
    this._instanceWeights.internalValue = config.instanceWeights;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // auto_add_ro - computed: true, optional: true, required: false
  private _autoAddRo?: string; 
  public get autoAddRo() {
    return this.getStringAttribute('auto_add_ro');
  }
  public set autoAddRo(value: string) {
    this._autoAddRo = value;
  }
  public resetAutoAddRo() {
    this._autoAddRo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAddRoInput() {
    return this._autoAddRo;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // connection_pool_time_out - computed: true, optional: true, required: false
  private _connectionPoolTimeOut?: number; 
  public get connectionPoolTimeOut() {
    return this.getNumberAttribute('connection_pool_time_out');
  }
  public set connectionPoolTimeOut(value: number) {
    this._connectionPoolTimeOut = value;
  }
  public resetConnectionPoolTimeOut() {
    this._connectionPoolTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolTimeOutInput() {
    return this._connectionPoolTimeOut;
  }

  // connection_pool_type - computed: true, optional: true, required: false
  private _connectionPoolType?: string; 
  public get connectionPoolType() {
    return this.getStringAttribute('connection_pool_type');
  }
  public set connectionPoolType(value: string) {
    this._connectionPoolType = value;
  }
  public resetConnectionPoolType() {
    this._connectionPoolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolTypeInput() {
    return this._connectionPoolType;
  }

  // consistency_time_out - computed: true, optional: true, required: false
  private _consistencyTimeOut?: number; 
  public get consistencyTimeOut() {
    return this.getNumberAttribute('consistency_time_out');
  }
  public set consistencyTimeOut(value: number) {
    this._consistencyTimeOut = value;
  }
  public resetConsistencyTimeOut() {
    this._consistencyTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyTimeOutInput() {
    return this._consistencyTimeOut;
  }

  // consistency_type - computed: true, optional: true, required: false
  private _consistencyType?: string; 
  public get consistencyType() {
    return this.getStringAttribute('consistency_type');
  }
  public set consistencyType(value: string) {
    this._consistencyType = value;
  }
  public resetConsistencyType() {
    this._consistencyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyTypeInput() {
    return this._consistencyType;
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

  // fail_over - computed: true, optional: true, required: false
  private _failOver?: string; 
  public get failOver() {
    return this.getStringAttribute('fail_over');
  }
  public set failOver(value: string) {
    this._failOver = value;
  }
  public resetFailOver() {
    this._failOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverInput() {
    return this._failOver;
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

  // instance_group_id - computed: true, optional: false, required: false
  public get instanceGroupId() {
    return this.getStringAttribute('instance_group_id');
  }

  // open_connection_pool - computed: true, optional: true, required: false
  private _openConnectionPool?: string; 
  public get openConnectionPool() {
    return this.getStringAttribute('open_connection_pool');
  }
  public set openConnectionPool(value: string) {
    this._openConnectionPool = value;
  }
  public resetOpenConnectionPool() {
    this._openConnectionPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openConnectionPoolInput() {
    return this._openConnectionPool;
  }

  // proxy_group_id - computed: true, optional: false, required: false
  public get proxyGroupId() {
    return this.getStringAttribute('proxy_group_id');
  }

  // rw_type - computed: true, optional: true, required: false
  private _rwType?: string; 
  public get rwType() {
    return this.getStringAttribute('rw_type');
  }
  public set rwType(value: string) {
    this._rwType = value;
  }
  public resetRwType() {
    this._rwType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwTypeInput() {
    return this._rwType;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // trans_split - computed: true, optional: true, required: false
  private _transSplit?: boolean | cdktf.IResolvable; 
  public get transSplit() {
    return this.getBooleanAttribute('trans_split');
  }
  public set transSplit(value: boolean | cdktf.IResolvable) {
    this._transSplit = value;
  }
  public resetTransSplit() {
    this._transSplit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transSplitInput() {
    return this._transSplit;
  }

  // unique_subnet_id - computed: false, optional: false, required: true
  private _uniqueSubnetId?: string; 
  public get uniqueSubnetId() {
    return this.getStringAttribute('unique_subnet_id');
  }
  public set uniqueSubnetId(value: string) {
    this._uniqueSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueSubnetIdInput() {
    return this._uniqueSubnetId;
  }

  // unique_vpc_id - computed: false, optional: false, required: true
  private _uniqueVpcId?: string; 
  public get uniqueVpcId() {
    return this.getStringAttribute('unique_vpc_id');
  }
  public set uniqueVpcId(value: string) {
    this._uniqueVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueVpcIdInput() {
    return this._uniqueVpcId;
  }

  // vip - computed: true, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vport - computed: true, optional: true, required: false
  private _vport?: number; 
  public get vport() {
    return this.getNumberAttribute('vport');
  }
  public set vport(value: number) {
    this._vport = value;
  }
  public resetVport() {
    this._vport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportInput() {
    return this._vport;
  }

  // weight_mode - computed: true, optional: true, required: false
  private _weightMode?: string; 
  public get weightMode() {
    return this.getStringAttribute('weight_mode');
  }
  public set weightMode(value: string) {
    this._weightMode = value;
  }
  public resetWeightMode() {
    this._weightMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightModeInput() {
    return this._weightMode;
  }

  // instance_weights - computed: false, optional: true, required: false
  private _instanceWeights = new CynosdbProxyEndPointInstanceWeightsList(this, "instance_weights", false);
  public get instanceWeights() {
    return this._instanceWeights;
  }
  public putInstanceWeights(value: CynosdbProxyEndPointInstanceWeights[] | cdktf.IResolvable) {
    this._instanceWeights.internalValue = value;
  }
  public resetInstanceWeights() {
    this._instanceWeights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceWeightsInput() {
    return this._instanceWeights.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      auto_add_ro: cdktf.stringToTerraform(this._autoAddRo),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      connection_pool_time_out: cdktf.numberToTerraform(this._connectionPoolTimeOut),
      connection_pool_type: cdktf.stringToTerraform(this._connectionPoolType),
      consistency_time_out: cdktf.numberToTerraform(this._consistencyTimeOut),
      consistency_type: cdktf.stringToTerraform(this._consistencyType),
      description: cdktf.stringToTerraform(this._description),
      fail_over: cdktf.stringToTerraform(this._failOver),
      id: cdktf.stringToTerraform(this._id),
      open_connection_pool: cdktf.stringToTerraform(this._openConnectionPool),
      rw_type: cdktf.stringToTerraform(this._rwType),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      trans_split: cdktf.booleanToTerraform(this._transSplit),
      unique_subnet_id: cdktf.stringToTerraform(this._uniqueSubnetId),
      unique_vpc_id: cdktf.stringToTerraform(this._uniqueVpcId),
      vip: cdktf.stringToTerraform(this._vip),
      vport: cdktf.numberToTerraform(this._vport),
      weight_mode: cdktf.stringToTerraform(this._weightMode),
      instance_weights: cdktf.listMapper(cynosdbProxyEndPointInstanceWeightsToTerraform, true)(this._instanceWeights.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_add_ro: {
        value: cdktf.stringToHclTerraform(this._autoAddRo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_pool_time_out: {
        value: cdktf.numberToHclTerraform(this._connectionPoolTimeOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_pool_type: {
        value: cdktf.stringToHclTerraform(this._connectionPoolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consistency_time_out: {
        value: cdktf.numberToHclTerraform(this._consistencyTimeOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consistency_type: {
        value: cdktf.stringToHclTerraform(this._consistencyType),
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
      fail_over: {
        value: cdktf.stringToHclTerraform(this._failOver),
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
      open_connection_pool: {
        value: cdktf.stringToHclTerraform(this._openConnectionPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rw_type: {
        value: cdktf.stringToHclTerraform(this._rwType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trans_split: {
        value: cdktf.booleanToHclTerraform(this._transSplit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unique_subnet_id: {
        value: cdktf.stringToHclTerraform(this._uniqueSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unique_vpc_id: {
        value: cdktf.stringToHclTerraform(this._uniqueVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vport: {
        value: cdktf.numberToHclTerraform(this._vport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_mode: {
        value: cdktf.stringToHclTerraform(this._weightMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_weights: {
        value: cdktf.listMapperHcl(cynosdbProxyEndPointInstanceWeightsToHclTerraform, true)(this._instanceWeights.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CynosdbProxyEndPointInstanceWeightsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
