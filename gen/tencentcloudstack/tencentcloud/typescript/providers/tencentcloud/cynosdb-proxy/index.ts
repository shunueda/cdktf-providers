// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#cluster_id CynosdbProxy#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Connection pool threshold: unit (second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#connection_pool_time_out CynosdbProxy#connection_pool_time_out}
  */
  readonly connectionPoolTimeOut?: number;
  /**
  * Connection pool type: SessionConnectionPool (session level Connection pool).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#connection_pool_type CynosdbProxy#connection_pool_type}
  */
  readonly connectionPoolType?: string;
  /**
  * Number of CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#cpu CynosdbProxy#cpu}
  */
  readonly cpu: number;
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#description CynosdbProxy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#id CynosdbProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#mem CynosdbProxy#mem}
  */
  readonly mem: number;
  /**
  * Whether to enable Connection pool, yes - enable, no - do not enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#open_connection_pool CynosdbProxy#open_connection_pool}
  */
  readonly openConnectionPool?: string;
  /**
  * Number of database proxy group nodes. If it is set at the same time as the `proxy_zones` field, the `proxy_zones` parameter shall prevail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#proxy_count CynosdbProxy#proxy_count}
  */
  readonly proxyCount?: number;
  /**
  * Security Group ID Array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#security_group_ids CynosdbProxy#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The private network subnet ID is consistent with the cluster subnet ID by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#unique_subnet_id CynosdbProxy#unique_subnet_id}
  */
  readonly uniqueSubnetId?: string;
  /**
  * Private network ID, which is consistent with the cluster private network ID by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#unique_vpc_id CynosdbProxy#unique_vpc_id}
  */
  readonly uniqueVpcId?: string;
  /**
  * proxy_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#proxy_zones CynosdbProxy#proxy_zones}
  */
  readonly proxyZones?: CynosdbProxyProxyZones[] | cdktf.IResolvable;
}
export interface CynosdbProxyRoInstances {
}

export function cynosdbProxyRoInstancesToTerraform(struct?: CynosdbProxyRoInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cynosdbProxyRoInstancesToHclTerraform(struct?: CynosdbProxyRoInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CynosdbProxyRoInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbProxyRoInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbProxyRoInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class CynosdbProxyRoInstancesList extends cdktf.ComplexList {

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
  public get(index: number): CynosdbProxyRoInstancesOutputReference {
    return new CynosdbProxyRoInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CynosdbProxyProxyZones {
  /**
  * Number of proxy nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#proxy_node_count CynosdbProxy#proxy_node_count}
  */
  readonly proxyNodeCount?: number;
  /**
  * Proxy node availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#proxy_node_zone CynosdbProxy#proxy_node_zone}
  */
  readonly proxyNodeZone?: string;
}

export function cynosdbProxyProxyZonesToTerraform(struct?: CynosdbProxyProxyZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_node_count: cdktf.numberToTerraform(struct!.proxyNodeCount),
    proxy_node_zone: cdktf.stringToTerraform(struct!.proxyNodeZone),
  }
}


export function cynosdbProxyProxyZonesToHclTerraform(struct?: CynosdbProxyProxyZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_node_count: {
      value: cdktf.numberToHclTerraform(struct!.proxyNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_node_zone: {
      value: cdktf.stringToHclTerraform(struct!.proxyNodeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CynosdbProxyProxyZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbProxyProxyZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyNodeCount = this._proxyNodeCount;
    }
    if (this._proxyNodeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyNodeZone = this._proxyNodeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbProxyProxyZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyNodeCount = undefined;
      this._proxyNodeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyNodeCount = value.proxyNodeCount;
      this._proxyNodeZone = value.proxyNodeZone;
    }
  }

  // proxy_node_count - computed: false, optional: true, required: false
  private _proxyNodeCount?: number; 
  public get proxyNodeCount() {
    return this.getNumberAttribute('proxy_node_count');
  }
  public set proxyNodeCount(value: number) {
    this._proxyNodeCount = value;
  }
  public resetProxyNodeCount() {
    this._proxyNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNodeCountInput() {
    return this._proxyNodeCount;
  }

  // proxy_node_zone - computed: false, optional: true, required: false
  private _proxyNodeZone?: string; 
  public get proxyNodeZone() {
    return this.getStringAttribute('proxy_node_zone');
  }
  public set proxyNodeZone(value: string) {
    this._proxyNodeZone = value;
  }
  public resetProxyNodeZone() {
    this._proxyNodeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNodeZoneInput() {
    return this._proxyNodeZone;
  }
}

export class CynosdbProxyProxyZonesList extends cdktf.ComplexList {
  public internalValue? : CynosdbProxyProxyZones[] | cdktf.IResolvable

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
  public get(index: number): CynosdbProxyProxyZonesOutputReference {
    return new CynosdbProxyProxyZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy tencentcloud_cynosdb_proxy}
*/
export class CynosdbProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbProxy to import
  * @param importFromId The id of the existing CynosdbProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cynosdb_proxy tencentcloud_cynosdb_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbProxyConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_proxy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._connectionPoolTimeOut = config.connectionPoolTimeOut;
    this._connectionPoolType = config.connectionPoolType;
    this._cpu = config.cpu;
    this._description = config.description;
    this._id = config.id;
    this._mem = config.mem;
    this._openConnectionPool = config.openConnectionPool;
    this._proxyCount = config.proxyCount;
    this._securityGroupIds = config.securityGroupIds;
    this._uniqueSubnetId = config.uniqueSubnetId;
    this._uniqueVpcId = config.uniqueVpcId;
    this._proxyZones.internalValue = config.proxyZones;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // connection_pool_time_out - computed: false, optional: true, required: false
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

  // connection_pool_type - computed: false, optional: true, required: false
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

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // description - computed: false, optional: true, required: false
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

  // mem - computed: false, optional: false, required: true
  private _mem?: number; 
  public get mem() {
    return this.getNumberAttribute('mem');
  }
  public set mem(value: number) {
    this._mem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memInput() {
    return this._mem;
  }

  // open_connection_pool - computed: false, optional: true, required: false
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

  // proxy_count - computed: true, optional: true, required: false
  private _proxyCount?: number; 
  public get proxyCount() {
    return this.getNumberAttribute('proxy_count');
  }
  public set proxyCount(value: number) {
    this._proxyCount = value;
  }
  public resetProxyCount() {
    this._proxyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCountInput() {
    return this._proxyCount;
  }

  // proxy_group_id - computed: true, optional: false, required: false
  public get proxyGroupId() {
    return this.getStringAttribute('proxy_group_id');
  }

  // ro_instances - computed: true, optional: false, required: false
  private _roInstances = new CynosdbProxyRoInstancesList(this, "ro_instances", false);
  public get roInstances() {
    return this._roInstances;
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

  // unique_subnet_id - computed: true, optional: true, required: false
  private _uniqueSubnetId?: string; 
  public get uniqueSubnetId() {
    return this.getStringAttribute('unique_subnet_id');
  }
  public set uniqueSubnetId(value: string) {
    this._uniqueSubnetId = value;
  }
  public resetUniqueSubnetId() {
    this._uniqueSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueSubnetIdInput() {
    return this._uniqueSubnetId;
  }

  // unique_vpc_id - computed: true, optional: true, required: false
  private _uniqueVpcId?: string; 
  public get uniqueVpcId() {
    return this.getStringAttribute('unique_vpc_id');
  }
  public set uniqueVpcId(value: string) {
    this._uniqueVpcId = value;
  }
  public resetUniqueVpcId() {
    this._uniqueVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueVpcIdInput() {
    return this._uniqueVpcId;
  }

  // proxy_zones - computed: false, optional: true, required: false
  private _proxyZones = new CynosdbProxyProxyZonesList(this, "proxy_zones", false);
  public get proxyZones() {
    return this._proxyZones;
  }
  public putProxyZones(value: CynosdbProxyProxyZones[] | cdktf.IResolvable) {
    this._proxyZones.internalValue = value;
  }
  public resetProxyZones() {
    this._proxyZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyZonesInput() {
    return this._proxyZones.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      connection_pool_time_out: cdktf.numberToTerraform(this._connectionPoolTimeOut),
      connection_pool_type: cdktf.stringToTerraform(this._connectionPoolType),
      cpu: cdktf.numberToTerraform(this._cpu),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      mem: cdktf.numberToTerraform(this._mem),
      open_connection_pool: cdktf.stringToTerraform(this._openConnectionPool),
      proxy_count: cdktf.numberToTerraform(this._proxyCount),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      unique_subnet_id: cdktf.stringToTerraform(this._uniqueSubnetId),
      unique_vpc_id: cdktf.stringToTerraform(this._uniqueVpcId),
      proxy_zones: cdktf.listMapper(cynosdbProxyProxyZonesToTerraform, true)(this._proxyZones.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem: {
        value: cdktf.numberToHclTerraform(this._mem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      open_connection_pool: {
        value: cdktf.stringToHclTerraform(this._openConnectionPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_count: {
        value: cdktf.numberToHclTerraform(this._proxyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      proxy_zones: {
        value: cdktf.listMapperHcl(cynosdbProxyProxyZonesToHclTerraform, true)(this._proxyZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CynosdbProxyProxyZonesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
