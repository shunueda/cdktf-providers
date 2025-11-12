// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCouchbaseCapellaFreeTierBucketsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GUID4 ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#cluster_id DataCouchbaseCapellaFreeTierBuckets#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The GUID4 ID of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#organization_id DataCouchbaseCapellaFreeTierBuckets#organization_id}
  */
  readonly organizationId: string;
  /**
  * The GUID4 ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#project_id DataCouchbaseCapellaFreeTierBuckets#project_id}
  */
  readonly projectId: string;
}
export interface DataCouchbaseCapellaFreeTierBucketsDataStats {
}

export function dataCouchbaseCapellaFreeTierBucketsDataStatsToTerraform(struct?: DataCouchbaseCapellaFreeTierBucketsDataStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaFreeTierBucketsDataStatsToHclTerraform(struct?: DataCouchbaseCapellaFreeTierBucketsDataStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaFreeTierBucketsDataStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaFreeTierBucketsDataStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaFreeTierBucketsDataStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_used_in_mib - computed: true, optional: false, required: false
  public get diskUsedInMib() {
    return this.getNumberAttribute('disk_used_in_mib');
  }

  // item_count - computed: true, optional: false, required: false
  public get itemCount() {
    return this.getNumberAttribute('item_count');
  }

  // memory_used_in_mib - computed: true, optional: false, required: false
  public get memoryUsedInMib() {
    return this.getNumberAttribute('memory_used_in_mib');
  }

  // ops_per_second - computed: true, optional: false, required: false
  public get opsPerSecond() {
    return this.getNumberAttribute('ops_per_second');
  }
}
export interface DataCouchbaseCapellaFreeTierBucketsData {
  /**
  * Conflict-resolution mechanism of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#bucket_conflict_resolution DataCouchbaseCapellaFreeTierBuckets#bucket_conflict_resolution}
  */
  readonly bucketConflictResolution?: string;
  /**
  * Durability of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#durability_level DataCouchbaseCapellaFreeTierBuckets#durability_level}
  */
  readonly durabilityLevel?: string;
  /**
  * Eviction policy for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#eviction_policy DataCouchbaseCapellaFreeTierBuckets#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Determines whether flushing is enabled in the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#flush DataCouchbaseCapellaFreeTierBuckets#flush}
  */
  readonly flush?: boolean | cdktf.IResolvable;
  /**
  * Bucket size in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#memory_allocation_in_mb DataCouchbaseCapellaFreeTierBuckets#memory_allocation_in_mb}
  */
  readonly memoryAllocationInMb?: number;
  /**
  * Number of replicas for the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#replicas DataCouchbaseCapellaFreeTierBuckets#replicas}
  */
  readonly replicas?: number;
  /**
  * The bucket storage engine type (Magma or Couchstore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#storage_backend DataCouchbaseCapellaFreeTierBuckets#storage_backend}
  */
  readonly storageBackend?: string;
  /**
  * Time-to-live (TTL) for items in the bucket, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#time_to_live_in_seconds DataCouchbaseCapellaFreeTierBuckets#time_to_live_in_seconds}
  */
  readonly timeToLiveInSeconds?: number;
  /**
  * The bucket type (Couchbase or Ephemeral).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#type DataCouchbaseCapellaFreeTierBuckets#type}
  */
  readonly type?: string;
}

export function dataCouchbaseCapellaFreeTierBucketsDataToTerraform(struct?: DataCouchbaseCapellaFreeTierBucketsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_conflict_resolution: cdktf.stringToTerraform(struct!.bucketConflictResolution),
    durability_level: cdktf.stringToTerraform(struct!.durabilityLevel),
    eviction_policy: cdktf.stringToTerraform(struct!.evictionPolicy),
    flush: cdktf.booleanToTerraform(struct!.flush),
    memory_allocation_in_mb: cdktf.numberToTerraform(struct!.memoryAllocationInMb),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    storage_backend: cdktf.stringToTerraform(struct!.storageBackend),
    time_to_live_in_seconds: cdktf.numberToTerraform(struct!.timeToLiveInSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataCouchbaseCapellaFreeTierBucketsDataToHclTerraform(struct?: DataCouchbaseCapellaFreeTierBucketsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_conflict_resolution: {
      value: cdktf.stringToHclTerraform(struct!.bucketConflictResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    durability_level: {
      value: cdktf.stringToHclTerraform(struct!.durabilityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.evictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush: {
      value: cdktf.booleanToHclTerraform(struct!.flush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memory_allocation_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryAllocationInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_backend: {
      value: cdktf.stringToHclTerraform(struct!.storageBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCouchbaseCapellaFreeTierBucketsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaFreeTierBucketsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketConflictResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketConflictResolution = this._bucketConflictResolution;
    }
    if (this._durabilityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.durabilityLevel = this._durabilityLevel;
    }
    if (this._evictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionPolicy = this._evictionPolicy;
    }
    if (this._flush !== undefined) {
      hasAnyValues = true;
      internalValueResult.flush = this._flush;
    }
    if (this._memoryAllocationInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAllocationInMb = this._memoryAllocationInMb;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._storageBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBackend = this._storageBackend;
    }
    if (this._timeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLiveInSeconds = this._timeToLiveInSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaFreeTierBucketsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketConflictResolution = undefined;
      this._durabilityLevel = undefined;
      this._evictionPolicy = undefined;
      this._flush = undefined;
      this._memoryAllocationInMb = undefined;
      this._replicas = undefined;
      this._storageBackend = undefined;
      this._timeToLiveInSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketConflictResolution = value.bucketConflictResolution;
      this._durabilityLevel = value.durabilityLevel;
      this._evictionPolicy = value.evictionPolicy;
      this._flush = value.flush;
      this._memoryAllocationInMb = value.memoryAllocationInMb;
      this._replicas = value.replicas;
      this._storageBackend = value.storageBackend;
      this._timeToLiveInSeconds = value.timeToLiveInSeconds;
      this._type = value.type;
    }
  }

  // bucket_conflict_resolution - computed: true, optional: true, required: false
  private _bucketConflictResolution?: string; 
  public get bucketConflictResolution() {
    return this.getStringAttribute('bucket_conflict_resolution');
  }
  public set bucketConflictResolution(value: string) {
    this._bucketConflictResolution = value;
  }
  public resetBucketConflictResolution() {
    this._bucketConflictResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketConflictResolutionInput() {
    return this._bucketConflictResolution;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // durability_level - computed: true, optional: true, required: false
  private _durabilityLevel?: string; 
  public get durabilityLevel() {
    return this.getStringAttribute('durability_level');
  }
  public set durabilityLevel(value: string) {
    this._durabilityLevel = value;
  }
  public resetDurabilityLevel() {
    this._durabilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durabilityLevelInput() {
    return this._durabilityLevel;
  }

  // eviction_policy - computed: true, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // flush - computed: true, optional: true, required: false
  private _flush?: boolean | cdktf.IResolvable; 
  public get flush() {
    return this.getBooleanAttribute('flush');
  }
  public set flush(value: boolean | cdktf.IResolvable) {
    this._flush = value;
  }
  public resetFlush() {
    this._flush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushInput() {
    return this._flush;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory_allocation_in_mb - computed: true, optional: true, required: false
  private _memoryAllocationInMb?: number; 
  public get memoryAllocationInMb() {
    return this.getNumberAttribute('memory_allocation_in_mb');
  }
  public set memoryAllocationInMb(value: number) {
    this._memoryAllocationInMb = value;
  }
  public resetMemoryAllocationInMb() {
    this._memoryAllocationInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAllocationInMbInput() {
    return this._memoryAllocationInMb;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // replicas - computed: true, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // stats - computed: true, optional: false, required: false
  private _stats = new DataCouchbaseCapellaFreeTierBucketsDataStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }

  // storage_backend - computed: true, optional: true, required: false
  private _storageBackend?: string; 
  public get storageBackend() {
    return this.getStringAttribute('storage_backend');
  }
  public set storageBackend(value: string) {
    this._storageBackend = value;
  }
  public resetStorageBackend() {
    this._storageBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBackendInput() {
    return this._storageBackend;
  }

  // time_to_live_in_seconds - computed: true, optional: true, required: false
  private _timeToLiveInSeconds?: number; 
  public get timeToLiveInSeconds() {
    return this.getNumberAttribute('time_to_live_in_seconds');
  }
  public set timeToLiveInSeconds(value: number) {
    this._timeToLiveInSeconds = value;
  }
  public resetTimeToLiveInSeconds() {
    this._timeToLiveInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInSecondsInput() {
    return this._timeToLiveInSeconds;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataCouchbaseCapellaFreeTierBucketsDataList extends cdktf.ComplexList {
  public internalValue? : DataCouchbaseCapellaFreeTierBucketsData[] | cdktf.IResolvable

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
  public get(index: number): DataCouchbaseCapellaFreeTierBucketsDataOutputReference {
    return new DataCouchbaseCapellaFreeTierBucketsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets couchbase-capella_free_tier_buckets}
*/
export class DataCouchbaseCapellaFreeTierBuckets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_free_tier_buckets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCouchbaseCapellaFreeTierBuckets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCouchbaseCapellaFreeTierBuckets to import
  * @param importFromId The id of the existing DataCouchbaseCapellaFreeTierBuckets that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCouchbaseCapellaFreeTierBuckets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_free_tier_buckets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/data-sources/free_tier_buckets couchbase-capella_free_tier_buckets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCouchbaseCapellaFreeTierBucketsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCouchbaseCapellaFreeTierBucketsConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_free_tier_buckets',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
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
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
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

  // data - computed: true, optional: false, required: false
  private _data = new DataCouchbaseCapellaFreeTierBucketsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
