// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/clickhouse_instance_nodes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudClickhouseInstanceNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display strategy, display all when All.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/clickhouse_instance_nodes#display_policy DataTencentcloudClickhouseInstanceNodes#display_policy}
  */
  readonly displayPolicy?: string;
  /**
  * When true, returns all nodes, that is, the Limit is infinitely large.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/clickhouse_instance_nodes#force_all DataTencentcloudClickhouseInstanceNodes#force_all}
  */
  readonly forceAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/clickhouse_instance_nodes#id DataTencentcloudClickhouseInstanceNodes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * InstanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/clickhouse_instance_nodes#instance_id DataTencentcloudClickhouseInstanceNodes#instance_id}
  */
  readonly instanceId: string;
  /**
  * Cluster role type, default is `data` data node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/clickhouse_instance_nodes#node_role DataTencentcloudClickhouseInstanceNodes#node_role}
  */
  readonly nodeRole?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/clickhouse_instance_nodes#result_output_file DataTencentcloudClickhouseInstanceNodes#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroups {
}

export function dataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroupsToTerraform(struct?: DataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroupsToHclTerraform(struct?: DataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // replica_name - computed: true, optional: false, required: false
  public get replicaName() {
    return this.getStringAttribute('replica_name');
  }

  // shard_name - computed: true, optional: false, required: false
  public get shardName() {
    return this.getStringAttribute('shard_name');
  }
}

export class DataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroupsOutputReference {
    return new DataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClickhouseInstanceNodesInstanceNodesListStruct {
}

export function dataTencentcloudClickhouseInstanceNodesInstanceNodesListStructToTerraform(struct?: DataTencentcloudClickhouseInstanceNodesInstanceNodesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClickhouseInstanceNodesInstanceNodesListStructToHclTerraform(struct?: DataTencentcloudClickhouseInstanceNodesInstanceNodesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClickhouseInstanceNodesInstanceNodesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClickhouseInstanceNodesInstanceNodesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClickhouseInstanceNodesInstanceNodesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // core - computed: true, optional: false, required: false
  public get core() {
    return this.getNumberAttribute('core');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // is_ch_proxy - computed: true, optional: false, required: false
  public get isChProxy() {
    return this.getBooleanAttribute('is_ch_proxy');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // node_groups - computed: true, optional: false, required: false
  private _nodeGroups = new DataTencentcloudClickhouseInstanceNodesInstanceNodesListNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }

  // rip - computed: true, optional: false, required: false
  public get rip() {
    return this.getStringAttribute('rip');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }
}

export class DataTencentcloudClickhouseInstanceNodesInstanceNodesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClickhouseInstanceNodesInstanceNodesListStructOutputReference {
    return new DataTencentcloudClickhouseInstanceNodesInstanceNodesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/clickhouse_instance_nodes tencentcloud_clickhouse_instance_nodes}
*/
export class DataTencentcloudClickhouseInstanceNodes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clickhouse_instance_nodes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudClickhouseInstanceNodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudClickhouseInstanceNodes to import
  * @param importFromId The id of the existing DataTencentcloudClickhouseInstanceNodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/clickhouse_instance_nodes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudClickhouseInstanceNodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clickhouse_instance_nodes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/clickhouse_instance_nodes tencentcloud_clickhouse_instance_nodes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudClickhouseInstanceNodesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudClickhouseInstanceNodesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clickhouse_instance_nodes',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayPolicy = config.displayPolicy;
    this._forceAll = config.forceAll;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._nodeRole = config.nodeRole;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_policy - computed: false, optional: true, required: false
  private _displayPolicy?: string; 
  public get displayPolicy() {
    return this.getStringAttribute('display_policy');
  }
  public set displayPolicy(value: string) {
    this._displayPolicy = value;
  }
  public resetDisplayPolicy() {
    this._displayPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayPolicyInput() {
    return this._displayPolicy;
  }

  // force_all - computed: false, optional: true, required: false
  private _forceAll?: boolean | cdktf.IResolvable; 
  public get forceAll() {
    return this.getBooleanAttribute('force_all');
  }
  public set forceAll(value: boolean | cdktf.IResolvable) {
    this._forceAll = value;
  }
  public resetForceAll() {
    this._forceAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAllInput() {
    return this._forceAll;
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

  // instance_nodes_list - computed: true, optional: false, required: false
  private _instanceNodesList = new DataTencentcloudClickhouseInstanceNodesInstanceNodesListStructList(this, "instance_nodes_list", false);
  public get instanceNodesList() {
    return this._instanceNodesList;
  }

  // node_role - computed: false, optional: true, required: false
  private _nodeRole?: string; 
  public get nodeRole() {
    return this.getStringAttribute('node_role');
  }
  public set nodeRole(value: string) {
    this._nodeRole = value;
  }
  public resetNodeRole() {
    this._nodeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRoleInput() {
    return this._nodeRole;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_policy: cdktf.stringToTerraform(this._displayPolicy),
      force_all: cdktf.booleanToTerraform(this._forceAll),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      node_role: cdktf.stringToTerraform(this._nodeRole),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_policy: {
        value: cdktf.stringToHclTerraform(this._displayPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_all: {
        value: cdktf.booleanToHclTerraform(this._forceAll),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_role: {
        value: cdktf.stringToHclTerraform(this._nodeRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
