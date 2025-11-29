// https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/data-sources/virtual_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWarpstreamVirtualClustersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataWarpstreamVirtualClustersVirtualClustersAgentKeys {
}

export function dataWarpstreamVirtualClustersVirtualClustersAgentKeysToTerraform(struct?: DataWarpstreamVirtualClustersVirtualClustersAgentKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWarpstreamVirtualClustersVirtualClustersAgentKeysToHclTerraform(struct?: DataWarpstreamVirtualClustersVirtualClustersAgentKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWarpstreamVirtualClustersVirtualClustersAgentKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWarpstreamVirtualClustersVirtualClustersAgentKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWarpstreamVirtualClustersVirtualClustersAgentKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // virtual_cluster_id - computed: true, optional: false, required: false
  public get virtualClusterId() {
    return this.getStringAttribute('virtual_cluster_id');
  }
}

export class DataWarpstreamVirtualClustersVirtualClustersAgentKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataWarpstreamVirtualClustersVirtualClustersAgentKeysOutputReference {
    return new DataWarpstreamVirtualClustersVirtualClustersAgentKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWarpstreamVirtualClustersVirtualClusters {
}

export function dataWarpstreamVirtualClustersVirtualClustersToTerraform(struct?: DataWarpstreamVirtualClustersVirtualClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWarpstreamVirtualClustersVirtualClustersToHclTerraform(struct?: DataWarpstreamVirtualClustersVirtualClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWarpstreamVirtualClustersVirtualClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWarpstreamVirtualClustersVirtualClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWarpstreamVirtualClustersVirtualClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_keys - computed: true, optional: false, required: false
  private _agentKeys = new DataWarpstreamVirtualClustersVirtualClustersAgentKeysList(this, "agent_keys", false);
  public get agentKeys() {
    return this._agentKeys;
  }

  // agent_pool_id - computed: true, optional: false, required: false
  public get agentPoolId() {
    return this.getStringAttribute('agent_pool_id');
  }

  // agent_pool_name - computed: true, optional: false, required: false
  public get agentPoolName() {
    return this.getStringAttribute('agent_pool_name');
  }

  // bootstrap_url - computed: true, optional: false, required: false
  public get bootstrapUrl() {
    return this.getStringAttribute('bootstrap_url');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataWarpstreamVirtualClustersVirtualClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataWarpstreamVirtualClustersVirtualClustersOutputReference {
    return new DataWarpstreamVirtualClustersVirtualClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/data-sources/virtual_clusters warpstream_virtual_clusters}
*/
export class DataWarpstreamVirtualClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "warpstream_virtual_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWarpstreamVirtualClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWarpstreamVirtualClusters to import
  * @param importFromId The id of the existing DataWarpstreamVirtualClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/data-sources/virtual_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWarpstreamVirtualClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "warpstream_virtual_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.3/docs/data-sources/virtual_clusters warpstream_virtual_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWarpstreamVirtualClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataWarpstreamVirtualClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'warpstream_virtual_clusters',
      terraformGeneratorMetadata: {
        providerName: 'warpstream',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // virtual_clusters - computed: true, optional: false, required: false
  private _virtualClusters = new DataWarpstreamVirtualClustersVirtualClustersList(this, "virtual_clusters", false);
  public get virtualClusters() {
    return this._virtualClusters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
