// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueryIndexesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket where the index will be created. Specifies the bucket part of the key space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#bucket_name QueryIndexes#bucket_name}
  */
  readonly bucketName: string;
  /**
  * List of index names to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#build_indexes QueryIndexes#build_indexes}
  */
  readonly buildIndexes?: string[];
  /**
  * The GUID4 ID of the cluster where the index will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#cluster_id QueryIndexes#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Specifies the collection part of the key space. If unspecified, this will be the default collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#collection_name QueryIndexes#collection_name}
  */
  readonly collectionName?: string;
  /**
  * List of document fields to index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#index_keys QueryIndexes#index_keys}
  */
  readonly indexKeys?: string[];
  /**
  * The name of the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#index_name QueryIndexes#index_name}
  */
  readonly indexName?: string;
  /**
  * Specifies whether this is a primary index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#is_primary QueryIndexes#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * The GUID4 ID of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#organization_id QueryIndexes#organization_id}
  */
  readonly organizationId: string;
  /**
  * List of fields to partition the index by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#partition_by QueryIndexes#partition_by}
  */
  readonly partitionBy?: string[];
  /**
  * The GUID4 ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#project_id QueryIndexes#project_id}
  */
  readonly projectId: string;
  /**
  * The name of the scope where the index will be created. Specifies the scope part of the key space. If unspecified, this will be the default scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#scope_name QueryIndexes#scope_name}
  */
  readonly scopeName?: string;
  /**
  * WHERE clause for the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#where QueryIndexes#where}
  */
  readonly where?: string;
  /**
  * Additional index configuration options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#with QueryIndexes#with}
  */
  readonly with?: QueryIndexesWith;
}
export interface QueryIndexesWith {
  /**
  * If true, the index will not be built immediately after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#defer_build QueryIndexes#defer_build}
  */
  readonly deferBuild?: boolean | cdktf.IResolvable;
  /**
  * Number of partitions for the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#num_partition QueryIndexes#num_partition}
  */
  readonly numPartition?: number;
  /**
  * Number of index replicas to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#num_replica QueryIndexes#num_replica}
  */
  readonly numReplica?: number;
}

export function queryIndexesWithToTerraform(struct?: QueryIndexesWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defer_build: cdktf.booleanToTerraform(struct!.deferBuild),
    num_partition: cdktf.numberToTerraform(struct!.numPartition),
    num_replica: cdktf.numberToTerraform(struct!.numReplica),
  }
}


export function queryIndexesWithToHclTerraform(struct?: QueryIndexesWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defer_build: {
      value: cdktf.booleanToHclTerraform(struct!.deferBuild),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    num_partition: {
      value: cdktf.numberToHclTerraform(struct!.numPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_replica: {
      value: cdktf.numberToHclTerraform(struct!.numReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueryIndexesWithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QueryIndexesWith | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deferBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.deferBuild = this._deferBuild;
    }
    if (this._numPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPartition = this._numPartition;
    }
    if (this._numReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.numReplica = this._numReplica;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryIndexesWith | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deferBuild = undefined;
      this._numPartition = undefined;
      this._numReplica = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deferBuild = value.deferBuild;
      this._numPartition = value.numPartition;
      this._numReplica = value.numReplica;
    }
  }

  // defer_build - computed: true, optional: true, required: false
  private _deferBuild?: boolean | cdktf.IResolvable; 
  public get deferBuild() {
    return this.getBooleanAttribute('defer_build');
  }
  public set deferBuild(value: boolean | cdktf.IResolvable) {
    this._deferBuild = value;
  }
  public resetDeferBuild() {
    this._deferBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferBuildInput() {
    return this._deferBuild;
  }

  // num_partition - computed: true, optional: true, required: false
  private _numPartition?: number; 
  public get numPartition() {
    return this.getNumberAttribute('num_partition');
  }
  public set numPartition(value: number) {
    this._numPartition = value;
  }
  public resetNumPartition() {
    this._numPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPartitionInput() {
    return this._numPartition;
  }

  // num_replica - computed: true, optional: true, required: false
  private _numReplica?: number; 
  public get numReplica() {
    return this.getNumberAttribute('num_replica');
  }
  public set numReplica(value: number) {
    this._numReplica = value;
  }
  public resetNumReplica() {
    this._numReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numReplicaInput() {
    return this._numReplica;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes couchbase-capella_query_indexes}
*/
export class QueryIndexes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_query_indexes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QueryIndexes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QueryIndexes to import
  * @param importFromId The id of the existing QueryIndexes that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QueryIndexes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_query_indexes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/query_indexes couchbase-capella_query_indexes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueryIndexesConfig
  */
  public constructor(scope: Construct, id: string, config: QueryIndexesConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_query_indexes',
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
    this._bucketName = config.bucketName;
    this._buildIndexes = config.buildIndexes;
    this._clusterId = config.clusterId;
    this._collectionName = config.collectionName;
    this._indexKeys = config.indexKeys;
    this._indexName = config.indexName;
    this._isPrimary = config.isPrimary;
    this._organizationId = config.organizationId;
    this._partitionBy = config.partitionBy;
    this._projectId = config.projectId;
    this._scopeName = config.scopeName;
    this._where = config.where;
    this._with.internalValue = config.with;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // build_indexes - computed: false, optional: true, required: false
  private _buildIndexes?: string[]; 
  public get buildIndexes() {
    return cdktf.Fn.tolist(this.getListAttribute('build_indexes'));
  }
  public set buildIndexes(value: string[]) {
    this._buildIndexes = value;
  }
  public resetBuildIndexes() {
    this._buildIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildIndexesInput() {
    return this._buildIndexes;
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

  // collection_name - computed: true, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // index_keys - computed: false, optional: true, required: false
  private _indexKeys?: string[]; 
  public get indexKeys() {
    return this.getListAttribute('index_keys');
  }
  public set indexKeys(value: string[]) {
    this._indexKeys = value;
  }
  public resetIndexKeys() {
    this._indexKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexKeysInput() {
    return this._indexKeys;
  }

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // is_primary - computed: false, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
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

  // partition_by - computed: false, optional: true, required: false
  private _partitionBy?: string[]; 
  public get partitionBy() {
    return this.getListAttribute('partition_by');
  }
  public set partitionBy(value: string[]) {
    this._partitionBy = value;
  }
  public resetPartitionBy() {
    this._partitionBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionByInput() {
    return this._partitionBy;
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

  // scope_name - computed: true, optional: true, required: false
  private _scopeName?: string; 
  public get scopeName() {
    return this.getStringAttribute('scope_name');
  }
  public set scopeName(value: string) {
    this._scopeName = value;
  }
  public resetScopeName() {
    this._scopeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeNameInput() {
    return this._scopeName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }

  // with - computed: true, optional: true, required: false
  private _with = new QueryIndexesWithOutputReference(this, "with");
  public get with() {
    return this._with;
  }
  public putWith(value: QueryIndexesWith) {
    this._with.internalValue = value;
  }
  public resetWith() {
    this._with.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withInput() {
    return this._with.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      build_indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._buildIndexes),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      collection_name: cdktf.stringToTerraform(this._collectionName),
      index_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexKeys),
      index_name: cdktf.stringToTerraform(this._indexName),
      is_primary: cdktf.booleanToTerraform(this._isPrimary),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      partition_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._partitionBy),
      project_id: cdktf.stringToTerraform(this._projectId),
      scope_name: cdktf.stringToTerraform(this._scopeName),
      where: cdktf.stringToTerraform(this._where),
      with: queryIndexesWithToTerraform(this._with.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_indexes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._buildIndexes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_name: {
        value: cdktf.stringToHclTerraform(this._collectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      index_name: {
        value: cdktf.stringToHclTerraform(this._indexName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_primary: {
        value: cdktf.booleanToHclTerraform(this._isPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._partitionBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_name: {
        value: cdktf.stringToHclTerraform(this._scopeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      where: {
        value: cdktf.stringToHclTerraform(this._where),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with: {
        value: queryIndexesWithToHclTerraform(this._with.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QueryIndexesWith",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
