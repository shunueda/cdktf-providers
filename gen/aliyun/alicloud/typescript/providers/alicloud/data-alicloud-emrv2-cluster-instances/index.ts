// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEmrv2ClusterInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#cluster_id DataAlicloudEmrv2ClusterInstances#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#id DataAlicloudEmrv2ClusterInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#ids DataAlicloudEmrv2ClusterInstances#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#instance_states DataAlicloudEmrv2ClusterInstances#instance_states}
  */
  readonly instanceStates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#max_results DataAlicloudEmrv2ClusterInstances#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#next_token DataAlicloudEmrv2ClusterInstances#next_token}
  */
  readonly nextToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#node_group_ids DataAlicloudEmrv2ClusterInstances#node_group_ids}
  */
  readonly nodeGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#node_group_names DataAlicloudEmrv2ClusterInstances#node_group_names}
  */
  readonly nodeGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#output_file DataAlicloudEmrv2ClusterInstances#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#tags DataAlicloudEmrv2ClusterInstances#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAlicloudEmrv2ClusterInstancesInstances {
}

export function dataAlicloudEmrv2ClusterInstancesInstancesToTerraform(struct?: DataAlicloudEmrv2ClusterInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEmrv2ClusterInstancesInstancesToHclTerraform(struct?: DataAlicloudEmrv2ClusterInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEmrv2ClusterInstancesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEmrv2ClusterInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEmrv2ClusterInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_renew - computed: true, optional: false, required: false
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }

  // auto_renew_duration - computed: true, optional: false, required: false
  public get autoRenewDuration() {
    return this.getNumberAttribute('auto_renew_duration');
  }

  // auto_renew_duration_unit - computed: true, optional: false, required: false
  public get autoRenewDurationUnit() {
    return this.getStringAttribute('auto_renew_duration_unit');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // node_group_id - computed: true, optional: false, required: false
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }

  // node_group_type - computed: true, optional: false, required: false
  public get nodeGroupType() {
    return this.getStringAttribute('node_group_type');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlicloudEmrv2ClusterInstancesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEmrv2ClusterInstancesInstancesOutputReference {
    return new DataAlicloudEmrv2ClusterInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances alicloud_emrv2_cluster_instances}
*/
export class DataAlicloudEmrv2ClusterInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_emrv2_cluster_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEmrv2ClusterInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEmrv2ClusterInstances to import
  * @param importFromId The id of the existing DataAlicloudEmrv2ClusterInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEmrv2ClusterInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_emrv2_cluster_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/emrv2_cluster_instances alicloud_emrv2_cluster_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEmrv2ClusterInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEmrv2ClusterInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_emrv2_cluster_instances',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
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
    this._id = config.id;
    this._ids = config.ids;
    this._instanceStates = config.instanceStates;
    this._maxResults = config.maxResults;
    this._nextToken = config.nextToken;
    this._nodeGroupIds = config.nodeGroupIds;
    this._nodeGroupNames = config.nodeGroupNames;
    this._outputFile = config.outputFile;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instance_states - computed: false, optional: true, required: false
  private _instanceStates?: string[]; 
  public get instanceStates() {
    return this.getListAttribute('instance_states');
  }
  public set instanceStates(value: string[]) {
    this._instanceStates = value;
  }
  public resetInstanceStates() {
    this._instanceStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStatesInput() {
    return this._instanceStates;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataAlicloudEmrv2ClusterInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // next_token - computed: true, optional: true, required: false
  private _nextToken?: string; 
  public get nextToken() {
    return this.getStringAttribute('next_token');
  }
  public set nextToken(value: string) {
    this._nextToken = value;
  }
  public resetNextToken() {
    this._nextToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextTokenInput() {
    return this._nextToken;
  }

  // node_group_ids - computed: false, optional: true, required: false
  private _nodeGroupIds?: string[]; 
  public get nodeGroupIds() {
    return this.getListAttribute('node_group_ids');
  }
  public set nodeGroupIds(value: string[]) {
    this._nodeGroupIds = value;
  }
  public resetNodeGroupIds() {
    this._nodeGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdsInput() {
    return this._nodeGroupIds;
  }

  // node_group_names - computed: false, optional: true, required: false
  private _nodeGroupNames?: string[]; 
  public get nodeGroupNames() {
    return this.getListAttribute('node_group_names');
  }
  public set nodeGroupNames(value: string[]) {
    this._nodeGroupNames = value;
  }
  public resetNodeGroupNames() {
    this._nodeGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupNamesInput() {
    return this._nodeGroupNames;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
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

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      instance_states: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceStates),
      max_results: cdktf.numberToTerraform(this._maxResults),
      next_token: cdktf.stringToTerraform(this._nextToken),
      node_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeGroupIds),
      node_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeGroupNames),
      output_file: cdktf.stringToTerraform(this._outputFile),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_states: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceStates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      next_token: {
        value: cdktf.stringToHclTerraform(this._nextToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      node_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
