// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection Pool Threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#connection_pool_limit MysqlProxy#connection_pool_limit}
  */
  readonly connectionPoolLimit?: number;
  /**
  * Describe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#desc MysqlProxy#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#id MysqlProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#instance_id MysqlProxy#instance_id}
  */
  readonly instanceId: string;
  /**
  * The current version of the database agent. No need to fill in when creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#proxy_version MysqlProxy#proxy_version}
  */
  readonly proxyVersion?: string;
  /**
  * Security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#security_group MysqlProxy#security_group}
  */
  readonly securityGroup?: string[];
  /**
  * Subnet id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#uniq_subnet_id MysqlProxy#uniq_subnet_id}
  */
  readonly uniqSubnetId: string;
  /**
  * Vpc id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#uniq_vpc_id MysqlProxy#uniq_vpc_id}
  */
  readonly uniqVpcId: string;
  /**
  * Upgrade time: nowTime (upgrade completed) timeWindow (instance maintenance time), Required when modifying the agent version, No need to fill in when creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#upgrade_time MysqlProxy#upgrade_time}
  */
  readonly upgradeTime?: string;
  /**
  * IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#vip MysqlProxy#vip}
  */
  readonly vip?: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#vport MysqlProxy#vport}
  */
  readonly vport?: number;
  /**
  * proxy_node_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#proxy_node_custom MysqlProxy#proxy_node_custom}
  */
  readonly proxyNodeCustom: MysqlProxyProxyNodeCustom[] | cdktf.IResolvable;
}
export interface MysqlProxyProxyNodeCustom {
  /**
  * Number of CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#cpu MysqlProxy#cpu}
  */
  readonly cpu: number;
  /**
  * Memory size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#mem MysqlProxy#mem}
  */
  readonly mem: number;
  /**
  * Number of nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#node_count MysqlProxy#node_count}
  */
  readonly nodeCount: number;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#region MysqlProxy#region}
  */
  readonly region: string;
  /**
  * Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#zone MysqlProxy#zone}
  */
  readonly zone: string;
}

export function mysqlProxyProxyNodeCustomToTerraform(struct?: MysqlProxyProxyNodeCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    mem: cdktf.numberToTerraform(struct!.mem),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    region: cdktf.stringToTerraform(struct!.region),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mysqlProxyProxyNodeCustomToHclTerraform(struct?: MysqlProxyProxyNodeCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem: {
      value: cdktf.numberToHclTerraform(struct!.mem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlProxyProxyNodeCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlProxyProxyNodeCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._mem !== undefined) {
      hasAnyValues = true;
      internalValueResult.mem = this._mem;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlProxyProxyNodeCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._mem = undefined;
      this._nodeCount = undefined;
      this._region = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._mem = value.mem;
      this._nodeCount = value.nodeCount;
      this._region = value.region;
      this._zone = value.zone;
    }
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
}

export class MysqlProxyProxyNodeCustomList extends cdktf.ComplexList {
  public internalValue? : MysqlProxyProxyNodeCustom[] | cdktf.IResolvable

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
  public get(index: number): MysqlProxyProxyNodeCustomOutputReference {
    return new MysqlProxyProxyNodeCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy tencentcloud_mysql_proxy}
*/
export class MysqlProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlProxy to import
  * @param importFromId The id of the existing MysqlProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mysql_proxy tencentcloud_mysql_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlProxyConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_proxy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionPoolLimit = config.connectionPoolLimit;
    this._desc = config.desc;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._proxyVersion = config.proxyVersion;
    this._securityGroup = config.securityGroup;
    this._uniqSubnetId = config.uniqSubnetId;
    this._uniqVpcId = config.uniqVpcId;
    this._upgradeTime = config.upgradeTime;
    this._vip = config.vip;
    this._vport = config.vport;
    this._proxyNodeCustom.internalValue = config.proxyNodeCustom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_pool_limit - computed: false, optional: true, required: false
  private _connectionPoolLimit?: number; 
  public get connectionPoolLimit() {
    return this.getNumberAttribute('connection_pool_limit');
  }
  public set connectionPoolLimit(value: number) {
    this._connectionPoolLimit = value;
  }
  public resetConnectionPoolLimit() {
    this._connectionPoolLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolLimitInput() {
    return this._connectionPoolLimit;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
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

  // proxy_address_id - computed: true, optional: false, required: false
  public get proxyAddressId() {
    return this.getStringAttribute('proxy_address_id');
  }

  // proxy_group_id - computed: true, optional: false, required: false
  public get proxyGroupId() {
    return this.getStringAttribute('proxy_group_id');
  }

  // proxy_version - computed: true, optional: true, required: false
  private _proxyVersion?: string; 
  public get proxyVersion() {
    return this.getStringAttribute('proxy_version');
  }
  public set proxyVersion(value: string) {
    this._proxyVersion = value;
  }
  public resetProxyVersion() {
    this._proxyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyVersionInput() {
    return this._proxyVersion;
  }

  // security_group - computed: false, optional: true, required: false
  private _securityGroup?: string[]; 
  public get securityGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group'));
  }
  public set securityGroup(value: string[]) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // uniq_subnet_id - computed: false, optional: false, required: true
  private _uniqSubnetId?: string; 
  public get uniqSubnetId() {
    return this.getStringAttribute('uniq_subnet_id');
  }
  public set uniqSubnetId(value: string) {
    this._uniqSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqSubnetIdInput() {
    return this._uniqSubnetId;
  }

  // uniq_vpc_id - computed: false, optional: false, required: true
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // upgrade_time - computed: false, optional: true, required: false
  private _upgradeTime?: string; 
  public get upgradeTime() {
    return this.getStringAttribute('upgrade_time');
  }
  public set upgradeTime(value: string) {
    this._upgradeTime = value;
  }
  public resetUpgradeTime() {
    this._upgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeInput() {
    return this._upgradeTime;
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

  // proxy_node_custom - computed: false, optional: false, required: true
  private _proxyNodeCustom = new MysqlProxyProxyNodeCustomList(this, "proxy_node_custom", false);
  public get proxyNodeCustom() {
    return this._proxyNodeCustom;
  }
  public putProxyNodeCustom(value: MysqlProxyProxyNodeCustom[] | cdktf.IResolvable) {
    this._proxyNodeCustom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNodeCustomInput() {
    return this._proxyNodeCustom.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_pool_limit: cdktf.numberToTerraform(this._connectionPoolLimit),
      desc: cdktf.stringToTerraform(this._desc),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      proxy_version: cdktf.stringToTerraform(this._proxyVersion),
      security_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroup),
      uniq_subnet_id: cdktf.stringToTerraform(this._uniqSubnetId),
      uniq_vpc_id: cdktf.stringToTerraform(this._uniqVpcId),
      upgrade_time: cdktf.stringToTerraform(this._upgradeTime),
      vip: cdktf.stringToTerraform(this._vip),
      vport: cdktf.numberToTerraform(this._vport),
      proxy_node_custom: cdktf.listMapper(mysqlProxyProxyNodeCustomToTerraform, true)(this._proxyNodeCustom.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_pool_limit: {
        value: cdktf.numberToHclTerraform(this._connectionPoolLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_version: {
        value: cdktf.stringToHclTerraform(this._proxyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      uniq_subnet_id: {
        value: cdktf.stringToHclTerraform(this._uniqSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uniq_vpc_id: {
        value: cdktf.stringToHclTerraform(this._uniqVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_time: {
        value: cdktf.stringToHclTerraform(this._upgradeTime),
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
      proxy_node_custom: {
        value: cdktf.listMapperHcl(mysqlProxyProxyNodeCustomToHclTerraform, true)(this._proxyNodeCustom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlProxyProxyNodeCustomList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
