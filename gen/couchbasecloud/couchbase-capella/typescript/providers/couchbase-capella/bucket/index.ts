// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#bucket_conflict_resolution Bucket#bucket_conflict_resolution}
  */
  readonly bucketConflictResolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#cluster_id Bucket#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#durability_level Bucket#durability_level}
  */
  readonly durabilityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#eviction_policy Bucket#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#flush Bucket#flush}
  */
  readonly flush?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#memory_allocation_in_mb Bucket#memory_allocation_in_mb}
  */
  readonly memoryAllocationInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#name Bucket#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#organization_id Bucket#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#project_id Bucket#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#replicas Bucket#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#storage_backend Bucket#storage_backend}
  */
  readonly storageBackend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#time_to_live_in_seconds Bucket#time_to_live_in_seconds}
  */
  readonly timeToLiveInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#type Bucket#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#vbuckets Bucket#vbuckets}
  */
  readonly vbuckets?: number;
}
export interface BucketStats {
}

export function bucketStatsToTerraform(struct?: BucketStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bucketStatsToHclTerraform(struct?: BucketStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BucketStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BucketStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketStats | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket couchbase-capella_bucket}
*/
export class Bucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bucket to import
  * @param importFromId The id of the existing Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/bucket couchbase-capella_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BucketConfig
  */
  public constructor(scope: Construct, id: string, config: BucketConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_bucket',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketConflictResolution = config.bucketConflictResolution;
    this._clusterId = config.clusterId;
    this._durabilityLevel = config.durabilityLevel;
    this._evictionPolicy = config.evictionPolicy;
    this._flush = config.flush;
    this._memoryAllocationInMb = config.memoryAllocationInMb;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._replicas = config.replicas;
    this._storageBackend = config.storageBackend;
    this._timeToLiveInSeconds = config.timeToLiveInSeconds;
    this._type = config.type;
    this._vbuckets = config.vbuckets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
  private _stats = new BucketStatsOutputReference(this, "stats");
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

  // vbuckets - computed: true, optional: true, required: false
  private _vbuckets?: number; 
  public get vbuckets() {
    return this.getNumberAttribute('vbuckets');
  }
  public set vbuckets(value: number) {
    this._vbuckets = value;
  }
  public resetVbuckets() {
    this._vbuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vbucketsInput() {
    return this._vbuckets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_conflict_resolution: cdktf.stringToTerraform(this._bucketConflictResolution),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      durability_level: cdktf.stringToTerraform(this._durabilityLevel),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      flush: cdktf.booleanToTerraform(this._flush),
      memory_allocation_in_mb: cdktf.numberToTerraform(this._memoryAllocationInMb),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      replicas: cdktf.numberToTerraform(this._replicas),
      storage_backend: cdktf.stringToTerraform(this._storageBackend),
      time_to_live_in_seconds: cdktf.numberToTerraform(this._timeToLiveInSeconds),
      type: cdktf.stringToTerraform(this._type),
      vbuckets: cdktf.numberToTerraform(this._vbuckets),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_conflict_resolution: {
        value: cdktf.stringToHclTerraform(this._bucketConflictResolution),
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
      durability_level: {
        value: cdktf.stringToHclTerraform(this._durabilityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eviction_policy: {
        value: cdktf.stringToHclTerraform(this._evictionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flush: {
        value: cdktf.booleanToHclTerraform(this._flush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      memory_allocation_in_mb: {
        value: cdktf.numberToHclTerraform(this._memoryAllocationInMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_backend: {
        value: cdktf.stringToHclTerraform(this._storageBackend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to_live_in_seconds: {
        value: cdktf.numberToHclTerraform(this._timeToLiveInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vbuckets: {
        value: cdktf.numberToHclTerraform(this._vbuckets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
