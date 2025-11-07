// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/sample_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SampleBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GUID4 ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/sample_bucket#cluster_id SampleBucket#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The name of the sample dataset to be loaded. The name has to be one of the following sample datasets: "travel-sample", "gamesim-sample" or "beer-sample".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/sample_bucket#name SampleBucket#name}
  */
  readonly name: string;
  /**
  * The GUID4 ID of the Capella organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/sample_bucket#organization_id SampleBucket#organization_id}
  */
  readonly organizationId: string;
  /**
  * The GUID4 ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/sample_bucket#project_id SampleBucket#project_id}
  */
  readonly projectId: string;
}
export interface SampleBucketStats {
}

export function sampleBucketStatsToTerraform(struct?: SampleBucketStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sampleBucketStatsToHclTerraform(struct?: SampleBucketStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SampleBucketStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SampleBucketStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SampleBucketStats | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/sample_bucket couchbase-capella_sample_bucket}
*/
export class SampleBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_sample_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SampleBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SampleBucket to import
  * @param importFromId The id of the existing SampleBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/sample_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SampleBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_sample_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/sample_bucket couchbase-capella_sample_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SampleBucketConfig
  */
  public constructor(scope: Construct, id: string, config: SampleBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_sample_bucket',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.5.3'
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
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_conflict_resolution - computed: true, optional: false, required: false
  public get bucketConflictResolution() {
    return this.getStringAttribute('bucket_conflict_resolution');
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

  // durability_level - computed: true, optional: false, required: false
  public get durabilityLevel() {
    return this.getStringAttribute('durability_level');
  }

  // eviction_policy - computed: true, optional: false, required: false
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }

  // flush - computed: true, optional: false, required: false
  public get flush() {
    return this.getBooleanAttribute('flush');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory_allocation_in_mb - computed: true, optional: false, required: false
  public get memoryAllocationInMb() {
    return this.getNumberAttribute('memory_allocation_in_mb');
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

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // stats - computed: true, optional: false, required: false
  private _stats = new SampleBucketStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }

  // storage_backend - computed: true, optional: false, required: false
  public get storageBackend() {
    return this.getStringAttribute('storage_backend');
  }

  // time_to_live_in_seconds - computed: true, optional: false, required: false
  public get timeToLiveInSeconds() {
    return this.getNumberAttribute('time_to_live_in_seconds');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
