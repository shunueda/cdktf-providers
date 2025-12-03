// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTdmqRocketmqGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group#cluster_id DataTencentcloudTdmqRocketmqGroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Consumer group query by consumer group name. Fuzzy query is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group#filter_group DataTencentcloudTdmqRocketmqGroup#filter_group}
  */
  readonly filterGroup?: string;
  /**
  * Subscription group name. After it is specified, the information of only this subscription group will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group#filter_one_group DataTencentcloudTdmqRocketmqGroup#filter_one_group}
  */
  readonly filterOneGroup?: string;
  /**
  * Topic name, which can be used to query all subscription groups under the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group#filter_topic DataTencentcloudTdmqRocketmqGroup#filter_topic}
  */
  readonly filterTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group#id DataTencentcloudTdmqRocketmqGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group#namespace_id DataTencentcloudTdmqRocketmqGroup#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group#result_output_file DataTencentcloudTdmqRocketmqGroup#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudTdmqRocketmqGroupGroups {
}

export function dataTencentcloudTdmqRocketmqGroupGroupsToTerraform(struct?: DataTencentcloudTdmqRocketmqGroupGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTdmqRocketmqGroupGroupsToHclTerraform(struct?: DataTencentcloudTdmqRocketmqGroupGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTdmqRocketmqGroupGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTdmqRocketmqGroupGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTdmqRocketmqGroupGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broadcast_enable - computed: true, optional: false, required: false
  public get broadcastEnable() {
    return this.getBooleanAttribute('broadcast_enable');
  }

  // client_protocol - computed: true, optional: false, required: false
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }

  // consumer_num - computed: true, optional: false, required: false
  public get consumerNum() {
    return this.getNumberAttribute('consumer_num');
  }

  // consumer_type - computed: true, optional: false, required: false
  public get consumerType() {
    return this.getStringAttribute('consumer_type');
  }

  // consumption_mode - computed: true, optional: false, required: false
  public get consumptionMode() {
    return this.getNumberAttribute('consumption_mode');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_enable - computed: true, optional: false, required: false
  public get readEnable() {
    return this.getBooleanAttribute('read_enable');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // retry_partition_num - computed: true, optional: false, required: false
  public get retryPartitionNum() {
    return this.getNumberAttribute('retry_partition_num');
  }

  // total_accumulative - computed: true, optional: false, required: false
  public get totalAccumulative() {
    return this.getNumberAttribute('total_accumulative');
  }

  // tps - computed: true, optional: false, required: false
  public get tps() {
    return this.getNumberAttribute('tps');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }
}

export class DataTencentcloudTdmqRocketmqGroupGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTdmqRocketmqGroupGroupsOutputReference {
    return new DataTencentcloudTdmqRocketmqGroupGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group tencentcloud_tdmq_rocketmq_group}
*/
export class DataTencentcloudTdmqRocketmqGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_rocketmq_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTdmqRocketmqGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTdmqRocketmqGroup to import
  * @param importFromId The id of the existing DataTencentcloudTdmqRocketmqGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTdmqRocketmqGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_rocketmq_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/tdmq_rocketmq_group tencentcloud_tdmq_rocketmq_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTdmqRocketmqGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTdmqRocketmqGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_rocketmq_group',
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
    this._clusterId = config.clusterId;
    this._filterGroup = config.filterGroup;
    this._filterOneGroup = config.filterOneGroup;
    this._filterTopic = config.filterTopic;
    this._id = config.id;
    this._namespaceId = config.namespaceId;
    this._resultOutputFile = config.resultOutputFile;
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

  // filter_group - computed: false, optional: true, required: false
  private _filterGroup?: string; 
  public get filterGroup() {
    return this.getStringAttribute('filter_group');
  }
  public set filterGroup(value: string) {
    this._filterGroup = value;
  }
  public resetFilterGroup() {
    this._filterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterGroupInput() {
    return this._filterGroup;
  }

  // filter_one_group - computed: false, optional: true, required: false
  private _filterOneGroup?: string; 
  public get filterOneGroup() {
    return this.getStringAttribute('filter_one_group');
  }
  public set filterOneGroup(value: string) {
    this._filterOneGroup = value;
  }
  public resetFilterOneGroup() {
    this._filterOneGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOneGroupInput() {
    return this._filterOneGroup;
  }

  // filter_topic - computed: false, optional: true, required: false
  private _filterTopic?: string; 
  public get filterTopic() {
    return this.getStringAttribute('filter_topic');
  }
  public set filterTopic(value: string) {
    this._filterTopic = value;
  }
  public resetFilterTopic() {
    this._filterTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTopicInput() {
    return this._filterTopic;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataTencentcloudTdmqRocketmqGroupGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
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

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      filter_group: cdktf.stringToTerraform(this._filterGroup),
      filter_one_group: cdktf.stringToTerraform(this._filterOneGroup),
      filter_topic: cdktf.stringToTerraform(this._filterTopic),
      id: cdktf.stringToTerraform(this._id),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      filter_group: {
        value: cdktf.stringToHclTerraform(this._filterGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_one_group: {
        value: cdktf.stringToHclTerraform(this._filterOneGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_topic: {
        value: cdktf.stringToHclTerraform(this._filterTopic),
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
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
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
