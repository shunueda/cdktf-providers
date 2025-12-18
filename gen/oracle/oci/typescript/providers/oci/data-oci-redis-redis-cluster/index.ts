// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/redis_redis_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciRedisRedisClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/redis_redis_cluster#redis_cluster_id DataOciRedisRedisCluster#redis_cluster_id}
  */
  readonly redisClusterId: string;
}
export interface DataOciRedisRedisClusterNodeCollectionItems {
}

export function dataOciRedisRedisClusterNodeCollectionItemsToTerraform(struct?: DataOciRedisRedisClusterNodeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRedisRedisClusterNodeCollectionItemsToHclTerraform(struct?: DataOciRedisRedisClusterNodeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRedisRedisClusterNodeCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRedisRedisClusterNodeCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRedisRedisClusterNodeCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // private_endpoint_fqdn - computed: true, optional: false, required: false
  public get privateEndpointFqdn() {
    return this.getStringAttribute('private_endpoint_fqdn');
  }

  // private_endpoint_ip_address - computed: true, optional: false, required: false
  public get privateEndpointIpAddress() {
    return this.getStringAttribute('private_endpoint_ip_address');
  }
}

export class DataOciRedisRedisClusterNodeCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRedisRedisClusterNodeCollectionItemsOutputReference {
    return new DataOciRedisRedisClusterNodeCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciRedisRedisClusterNodeCollection {
}

export function dataOciRedisRedisClusterNodeCollectionToTerraform(struct?: DataOciRedisRedisClusterNodeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRedisRedisClusterNodeCollectionToHclTerraform(struct?: DataOciRedisRedisClusterNodeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRedisRedisClusterNodeCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRedisRedisClusterNodeCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRedisRedisClusterNodeCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciRedisRedisClusterNodeCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciRedisRedisClusterNodeCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRedisRedisClusterNodeCollectionOutputReference {
    return new DataOciRedisRedisClusterNodeCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/redis_redis_cluster oci_redis_redis_cluster}
*/
export class DataOciRedisRedisCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_redis_redis_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciRedisRedisCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciRedisRedisCluster to import
  * @param importFromId The id of the existing DataOciRedisRedisCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/redis_redis_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciRedisRedisCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_redis_redis_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/redis_redis_cluster oci_redis_redis_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciRedisRedisClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciRedisRedisClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_redis_redis_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._redisClusterId = config.redisClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_mode - computed: true, optional: false, required: false
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // discovery_endpoint_ip_address - computed: true, optional: false, required: false
  public get discoveryEndpointIpAddress() {
    return this.getStringAttribute('discovery_endpoint_ip_address');
  }

  // discovery_fqdn - computed: true, optional: false, required: false
  public get discoveryFqdn() {
    return this.getStringAttribute('discovery_fqdn');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // node_collection - computed: true, optional: false, required: false
  private _nodeCollection = new DataOciRedisRedisClusterNodeCollectionList(this, "node_collection", false);
  public get nodeCollection() {
    return this._nodeCollection;
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_memory_in_gbs - computed: true, optional: false, required: false
  public get nodeMemoryInGbs() {
    return this.getNumberAttribute('node_memory_in_gbs');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // oci_cache_config_set_id - computed: true, optional: false, required: false
  public get ociCacheConfigSetId() {
    return this.getStringAttribute('oci_cache_config_set_id');
  }

  // primary_endpoint_ip_address - computed: true, optional: false, required: false
  public get primaryEndpointIpAddress() {
    return this.getStringAttribute('primary_endpoint_ip_address');
  }

  // primary_fqdn - computed: true, optional: false, required: false
  public get primaryFqdn() {
    return this.getStringAttribute('primary_fqdn');
  }

  // redis_cluster_id - computed: false, optional: false, required: true
  private _redisClusterId?: string; 
  public get redisClusterId() {
    return this.getStringAttribute('redis_cluster_id');
  }
  public set redisClusterId(value: string) {
    this._redisClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisClusterIdInput() {
    return this._redisClusterId;
  }

  // replicas_endpoint_ip_address - computed: true, optional: false, required: false
  public get replicasEndpointIpAddress() {
    return this.getStringAttribute('replicas_endpoint_ip_address');
  }

  // replicas_fqdn - computed: true, optional: false, required: false
  public get replicasFqdn() {
    return this.getStringAttribute('replicas_fqdn');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // shard_count - computed: true, optional: false, required: false
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      redis_cluster_id: cdktf.stringToTerraform(this._redisClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      redis_cluster_id: {
        value: cdktf.stringToHclTerraform(this._redisClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
