// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#metadata DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#metadata}
  */
  readonly metadata: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadata;
  /**
  * The migration mappings to use, should never be empty as that is just an implicit bucket-to-bucket replication then.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#migration_mapping DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#migration_mapping}
  */
  readonly migrationMapping: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMapping;
  /**
  * CouchbaseReplicationSpec allows configuration of an XDCR replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#spec DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#spec}
  */
  readonly spec: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpec;
}
export interface DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#annotations DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#labels DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#name DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#namespace DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadataToTerraform(struct?: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadataToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspace {
  /**
  * The optional collection within the scope. May be empty to just work at scope level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#collection DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#collection}
  */
  readonly collection?: string;
  /**
  * The scope to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#scope DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#scope}
  */
  readonly scope: string;
}

export function dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspaceToTerraform(struct?: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspaceToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._scope = value.scope;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappings {
  /**
  * A filter to select from the source default scope and collection. Defaults to select everything in the default scope and collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#filter DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#filter}
  */
  readonly filter?: string;
  /**
  * The destination of our migration, must be a scope and collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#target_keyspace DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#target_keyspace}
  */
  readonly targetKeyspace: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspace;
}

export function dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsToTerraform(struct?: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    target_keyspace: dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspaceToTerraform(struct!.targetKeyspace),
  }
}


export function dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_keyspace: {
      value: dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspaceToHclTerraform(struct!.targetKeyspace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._targetKeyspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKeyspace = this._targetKeyspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._targetKeyspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._targetKeyspace.internalValue = value.targetKeyspace;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // target_keyspace - computed: false, optional: false, required: true
  private _targetKeyspace = new DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspaceOutputReference(this, "target_keyspace");
  public get targetKeyspace() {
    return this._targetKeyspace;
  }
  public putTargetKeyspace(value: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsTargetKeyspace) {
    this._targetKeyspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKeyspaceInput() {
    return this._targetKeyspace.internalValue;
  }
}

export class DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsOutputReference {
    return new DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMapping {
  /**
  * The migration mappings to use, should never be empty as that is just an implicit bucket-to-bucket replication then.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#mappings DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#mappings}
  */
  readonly mappings: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappings[] | cdktf.IResolvable;
}

export function dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingToTerraform(struct?: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mappings: cdktf.listMapper(dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsToTerraform, false)(struct!.mappings),
  }
}


export function dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mappings: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mappings.internalValue = value.mappings;
    }
  }

  // mappings - computed: false, optional: false, required: true
  private _mappings = new DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }
}
export interface DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpec {
  /**
  * Bucket is the source bucket to replicate from. This refers to the Couchbase bucket name, not the resource name of the bucket. A bucket with this name must be defined on this cluster. Legal bucket names have a maximum length of 100 characters and may be composed of any character from 'a-z', 'A-Z', '0-9' and '-_%.'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#bucket DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#bucket}
  */
  readonly bucket: string;
  /**
  * CompressionType is the type of compression to apply to the replication. When None, no compression will be applied to documents as they are transferred between clusters. When Auto, Couchbase server will automatically compress documents as they are transferred to reduce bandwidth requirements. This field must be one of 'None' or 'Auto', defaulting to 'Auto'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#compression_type DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * FilterExpression allows certain documents to be filtered out of the replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#filter_expression DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#filter_expression}
  */
  readonly filterExpression?: string;
  /**
  * Paused allows a replication to be stopped and restarted without having to restart the replication from the beginning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#paused DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * RemoteBucket is the remote bucket name to synchronize to. This refers to the Couchbase bucket name, not the resource name of the bucket. Legal bucket names have a maximum length of 100 characters and may be composed of any character from 'a-z', 'A-Z', '0-9' and '-_%.'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#remote_bucket DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest#remote_bucket}
  */
  readonly remoteBucket: string;
}

export function dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpecToTerraform(struct?: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    filter_expression: cdktf.stringToTerraform(struct!.filterExpression),
    paused: cdktf.booleanToTerraform(struct!.paused),
    remote_bucket: cdktf.stringToTerraform(struct!.remoteBucket),
  }
}


export function dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpecToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_expression: {
      value: cdktf.stringToHclTerraform(struct!.filterExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_bucket: {
      value: cdktf.stringToHclTerraform(struct!.remoteBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._filterExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExpression = this._filterExpression;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._remoteBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteBucket = this._remoteBucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._compressionType = undefined;
      this._filterExpression = undefined;
      this._paused = undefined;
      this._remoteBucket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._compressionType = value.compressionType;
      this._filterExpression = value.filterExpression;
      this._paused = value.paused;
      this._remoteBucket = value.remoteBucket;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // filter_expression - computed: false, optional: true, required: false
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  public resetFilterExpression() {
    this._filterExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // remote_bucket - computed: false, optional: false, required: true
  private _remoteBucket?: string; 
  public get remoteBucket() {
    return this.getStringAttribute('remote_bucket');
  }
  public set remoteBucket(value: string) {
    this._remoteBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBucketInput() {
    return this._remoteBucket;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest k8s_couchbase_com_couchbase_migration_replication_v2_manifest}
*/
export class DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_couchbase_com_couchbase_migration_replication_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest to import
  * @param importFromId The id of the existing DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCouchbaseComCouchbaseMigrationReplicationV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_couchbase_com_couchbase_migration_replication_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/couchbase_com_couchbase_migration_replication_v2_manifest k8s_couchbase_com_couchbase_migration_replication_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_couchbase_com_couchbase_migration_replication_v2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._migrationMapping.internalValue = config.migrationMapping;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // migration_mapping - computed: false, optional: false, required: true
  private _migrationMapping = new DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingOutputReference(this, "migration_mapping");
  public get migrationMapping() {
    return this._migrationMapping;
  }
  public putMigrationMapping(value: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMapping) {
    this._migrationMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationMappingInput() {
    return this._migrationMapping.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadataToTerraform(this._metadata.internalValue),
      migration_mapping: dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingToTerraform(this._migrationMapping.internalValue),
      spec: dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMetadata",
      },
      migration_mapping: {
        value: dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMappingToHclTerraform(this._migrationMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestMigrationMapping",
      },
      spec: {
        value: dataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseMigrationReplicationV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
