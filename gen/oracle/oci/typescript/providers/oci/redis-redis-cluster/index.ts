// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisRedisClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#cluster_mode RedisRedisCluster#cluster_mode}
  */
  readonly clusterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#compartment_id RedisRedisCluster#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#defined_tags RedisRedisCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#display_name RedisRedisCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#freeform_tags RedisRedisCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#id RedisRedisCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#node_count RedisRedisCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#node_memory_in_gbs RedisRedisCluster#node_memory_in_gbs}
  */
  readonly nodeMemoryInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#nsg_ids RedisRedisCluster#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#oci_cache_config_set_id RedisRedisCluster#oci_cache_config_set_id}
  */
  readonly ociCacheConfigSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#security_attributes RedisRedisCluster#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#shard_count RedisRedisCluster#shard_count}
  */
  readonly shardCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#software_version RedisRedisCluster#software_version}
  */
  readonly softwareVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#subnet_id RedisRedisCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#timeouts RedisRedisCluster#timeouts}
  */
  readonly timeouts?: RedisRedisClusterTimeouts;
}
export interface RedisRedisClusterNodeCollectionItems {
}

export function redisRedisClusterNodeCollectionItemsToTerraform(struct?: RedisRedisClusterNodeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function redisRedisClusterNodeCollectionItemsToHclTerraform(struct?: RedisRedisClusterNodeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RedisRedisClusterNodeCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedisRedisClusterNodeCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisRedisClusterNodeCollectionItems | undefined) {
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

export class RedisRedisClusterNodeCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): RedisRedisClusterNodeCollectionItemsOutputReference {
    return new RedisRedisClusterNodeCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisRedisClusterNodeCollection {
}

export function redisRedisClusterNodeCollectionToTerraform(struct?: RedisRedisClusterNodeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function redisRedisClusterNodeCollectionToHclTerraform(struct?: RedisRedisClusterNodeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RedisRedisClusterNodeCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedisRedisClusterNodeCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisRedisClusterNodeCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new RedisRedisClusterNodeCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class RedisRedisClusterNodeCollectionList extends cdktf.ComplexList {

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
  public get(index: number): RedisRedisClusterNodeCollectionOutputReference {
    return new RedisRedisClusterNodeCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisRedisClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#create RedisRedisCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#delete RedisRedisCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#update RedisRedisCluster#update}
  */
  readonly update?: string;
}

export function redisRedisClusterTimeoutsToTerraform(struct?: RedisRedisClusterTimeouts | cdktf.IResolvable): any {
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


export function redisRedisClusterTimeoutsToHclTerraform(struct?: RedisRedisClusterTimeouts | cdktf.IResolvable): any {
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

export class RedisRedisClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedisRedisClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RedisRedisClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster oci_redis_redis_cluster}
*/
export class RedisRedisCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_redis_redis_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisRedisCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisRedisCluster to import
  * @param importFromId The id of the existing RedisRedisCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisRedisCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_redis_redis_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_redis_cluster oci_redis_redis_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisRedisClusterConfig
  */
  public constructor(scope: Construct, id: string, config: RedisRedisClusterConfig) {
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
    this._clusterMode = config.clusterMode;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._nodeCount = config.nodeCount;
    this._nodeMemoryInGbs = config.nodeMemoryInGbs;
    this._nsgIds = config.nsgIds;
    this._ociCacheConfigSetId = config.ociCacheConfigSetId;
    this._securityAttributes = config.securityAttributes;
    this._shardCount = config.shardCount;
    this._softwareVersion = config.softwareVersion;
    this._subnetId = config.subnetId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_mode - computed: true, optional: true, required: false
  private _clusterMode?: string; 
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }
  public set clusterMode(value: string) {
    this._clusterMode = value;
  }
  public resetClusterMode() {
    this._clusterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // node_collection - computed: true, optional: false, required: false
  private _nodeCollection = new RedisRedisClusterNodeCollectionList(this, "node_collection", false);
  public get nodeCollection() {
    return this._nodeCollection;
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

  // node_memory_in_gbs - computed: false, optional: false, required: true
  private _nodeMemoryInGbs?: number; 
  public get nodeMemoryInGbs() {
    return this.getNumberAttribute('node_memory_in_gbs');
  }
  public set nodeMemoryInGbs(value: number) {
    this._nodeMemoryInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMemoryInGbsInput() {
    return this._nodeMemoryInGbs;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // oci_cache_config_set_id - computed: true, optional: true, required: false
  private _ociCacheConfigSetId?: string; 
  public get ociCacheConfigSetId() {
    return this.getStringAttribute('oci_cache_config_set_id');
  }
  public set ociCacheConfigSetId(value: string) {
    this._ociCacheConfigSetId = value;
  }
  public resetOciCacheConfigSetId() {
    this._ociCacheConfigSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociCacheConfigSetIdInput() {
    return this._ociCacheConfigSetId;
  }

  // primary_endpoint_ip_address - computed: true, optional: false, required: false
  public get primaryEndpointIpAddress() {
    return this.getStringAttribute('primary_endpoint_ip_address');
  }

  // primary_fqdn - computed: true, optional: false, required: false
  public get primaryFqdn() {
    return this.getStringAttribute('primary_fqdn');
  }

  // replicas_endpoint_ip_address - computed: true, optional: false, required: false
  public get replicasEndpointIpAddress() {
    return this.getStringAttribute('replicas_endpoint_ip_address');
  }

  // replicas_fqdn - computed: true, optional: false, required: false
  public get replicasFqdn() {
    return this.getStringAttribute('replicas_fqdn');
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // shard_count - computed: true, optional: true, required: false
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // software_version - computed: false, optional: false, required: true
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedisRedisClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedisRedisClusterTimeouts) {
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
      cluster_mode: cdktf.stringToTerraform(this._clusterMode),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_memory_in_gbs: cdktf.numberToTerraform(this._nodeMemoryInGbs),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      oci_cache_config_set_id: cdktf.stringToTerraform(this._ociCacheConfigSetId),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: redisRedisClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_mode: {
        value: cdktf.stringToHclTerraform(this._clusterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_memory_in_gbs: {
        value: cdktf.numberToHclTerraform(this._nodeMemoryInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      oci_cache_config_set_id: {
        value: cdktf.stringToHclTerraform(this._ociCacheConfigSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: redisRedisClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedisRedisClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
