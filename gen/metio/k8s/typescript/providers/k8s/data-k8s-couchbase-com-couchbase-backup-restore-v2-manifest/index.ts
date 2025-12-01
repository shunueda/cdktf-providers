// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#metadata DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#metadata}
  */
  readonly metadata: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadata;
  /**
  * CouchbaseBackupRestoreSpec allows the specification of data restoration to be configured. This includes the backup and repository to restore data from, and the time range of data to be restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#spec DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#spec}
  */
  readonly spec: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpec;
}
export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#annotations DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#labels DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#name DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#namespace DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadataToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadataToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMap {
  /**
  * Source defines the data source of the mapping, this may be either a bucket, scope or collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#source DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#source}
  */
  readonly source: string;
  /**
  * Target defines the data target of the mapping, this may be either a bucket, scope or collection, and must refer to the same type as the restore source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#target DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#target}
  */
  readonly target: string;
}

export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMapToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMapToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMapList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMap[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMapOutputReference {
    return new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecData {
  /**
  * Exclude defines the buckets, scopes or collections that are excluded from the backup. When this field is set, it implies that by default everything will be backed up, and data items can be explicitly excluded. You may define an exclusion as a bucket -- 'my-bucket', a scope -- 'my-bucket.my-scope', or a collection -- 'my-bucket.my-scope.my-collection'. Buckets may contain periods, and therefore must be escaped -- 'my.bucket.my-scope', as period is the separator used to delimit scopes and collections. Excluded data cannot overlap e.g. specifying 'my-bucket' and 'my-bucket.my-scope' is illegal. This field cannot be used at the same time as included items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#exclude DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * FilterKeys only restores documents whose names match the provided regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#filter_keys DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#filter_keys}
  */
  readonly filterKeys?: string;
  /**
  * FilterValues only restores documents whose values match the provided regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#filter_values DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#filter_values}
  */
  readonly filterValues?: string;
  /**
  * Include defines the buckets, scopes or collections that are included in the restore. When this field is set, it implies that by default nothing will be restored, and data items must be explicitly included. You may define an inclusion as a bucket -- 'my-bucket', a scope -- 'my-bucket.my-scope', or a collection -- 'my-bucket.my-scope.my-collection'. Buckets may contain periods, and therefore must be escaped -- 'my.bucket.my-scope', as period is the separator used to delimit scopes and collections. Included data cannot overlap e.g. specifying 'my-bucket' and 'my-bucket.my-scope' is illegal. This field cannot be used at the same time as excluded items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#include DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#include}
  */
  readonly include?: string[];
  /**
  * Map allows data items in the restore to be remapped to a different named container. Buckets can be remapped to other buckets e.g. 'source=target', scopes and collections can be remapped to other scopes and collections within the same bucket only e.g. 'bucket.scope=bucket.other' or 'bucket.scope.collection=bucket.scope.other'. Map sources may only be specified once, and may not overlap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#map DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#map}
  */
  readonly map?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMap[] | cdktf.IResolvable;
}

export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    filter_keys: cdktf.stringToTerraform(struct!.filterKeys),
    filter_values: cdktf.stringToTerraform(struct!.filterValues),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
    map: cdktf.listMapper(dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMapToTerraform, false)(struct!.map),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_keys: {
      value: cdktf.stringToHclTerraform(struct!.filterKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_values: {
      value: cdktf.stringToHclTerraform(struct!.filterValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMapToHclTerraform, false)(struct!.map),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._filterKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKeys = this._filterKeys;
    }
    if (this._filterValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValues = this._filterValues;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._map?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._filterKeys = undefined;
      this._filterValues = undefined;
      this._include = undefined;
      this._map.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._filterKeys = value.filterKeys;
      this._filterValues = value.filterValues;
      this._include = value.include;
      this._map.internalValue = value.map;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // filter_keys - computed: false, optional: true, required: false
  private _filterKeys?: string; 
  public get filterKeys() {
    return this.getStringAttribute('filter_keys');
  }
  public set filterKeys(value: string) {
    this._filterKeys = value;
  }
  public resetFilterKeys() {
    this._filterKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKeysInput() {
    return this._filterKeys;
  }

  // filter_values - computed: false, optional: true, required: false
  private _filterValues?: string; 
  public get filterValues() {
    return this.getStringAttribute('filter_values');
  }
  public set filterValues(value: string) {
    this._filterValues = value;
  }
  public resetFilterValues() {
    this._filterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValuesInput() {
    return this._filterValues;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // map - computed: false, optional: true, required: false
  private _map = new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMapList(this, "map", false);
  public get map() {
    return this._map;
  }
  public putMap(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataMap[] | cdktf.IResolvable) {
    this._map.internalValue = value;
  }
  public resetMap() {
    this._map.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map.internalValue;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEnd {
  /**
  * Int references a relative backup by index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#int DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#int}
  */
  readonly int?: number;
  /**
  * Str references an absolute backup by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#str DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#str}
  */
  readonly str?: string;
}

export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEndToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    int: cdktf.numberToTerraform(struct!.int),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEndToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    int: {
      value: cdktf.numberToHclTerraform(struct!.int),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._int !== undefined) {
      hasAnyValues = true;
      internalValueResult.int = this._int;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._int = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._int = value.int;
      this._str = value.str;
    }
  }

  // int - computed: false, optional: true, required: false
  private _int?: number; 
  public get int() {
    return this.getNumberAttribute('int');
  }
  public set int(value: number) {
    this._int = value;
  }
  public resetInt() {
    this._int = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intInput() {
    return this._int;
  }

  // str - computed: false, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpoint {
  /**
  * The name of the secret, in this namespace, that contains the CA certificate for verification of a TLS endpoint The secret must have the key with the name 'tls.crt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#secret DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#secret}
  */
  readonly secret?: string;
  /**
  * The host/address of the custom object endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#url DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#url}
  */
  readonly url?: string;
  /**
  * UseVirtualPath will force the AWS SDK to use the new virtual style paths which are often required by S3 compatible object stores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#use_virtual_path DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#use_virtual_path}
  */
  readonly useVirtualPath?: boolean | cdktf.IResolvable;
}

export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpointToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    url: cdktf.stringToTerraform(struct!.url),
    use_virtual_path: cdktf.booleanToTerraform(struct!.useVirtualPath),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpointToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_virtual_path: {
      value: cdktf.booleanToHclTerraform(struct!.useVirtualPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useVirtualPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVirtualPath = this._useVirtualPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secret = undefined;
      this._url = undefined;
      this._useVirtualPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secret = value.secret;
      this._url = value.url;
      this._useVirtualPath = value.useVirtualPath;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_virtual_path - computed: false, optional: true, required: false
  private _useVirtualPath?: boolean | cdktf.IResolvable; 
  public get useVirtualPath() {
    return this.getBooleanAttribute('use_virtual_path');
  }
  public set useVirtualPath(value: boolean | cdktf.IResolvable) {
    this._useVirtualPath = value;
  }
  public resetUseVirtualPath() {
    this._useVirtualPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVirtualPathInput() {
    return this._useVirtualPath;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStore {
  /**
  * Endpoint contains the configuration for connecting to a custom Azure/S3/GCP compliant object store. If set will override 'CouchbaseCluster.spec.backup.objectEndpoint' See https://docs.couchbase.com/server/current/backup-restore/cbbackupmgr-cloud.html#compatible-object-stores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#endpoint DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#endpoint}
  */
  readonly endpoint?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpoint;
  /**
  * ObjStoreSecret must contain two fields, access-key-id, secret-access-key and optionally either region or refresh-token. These correspond to the fields used by cbbackupmgr https://docs.couchbase.com/server/current/backup-restore/cbbackupmgr-backup.html#optional-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#secret DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#secret}
  */
  readonly secret?: string;
  /**
  * URI is a reference to a remote object store. This is the prefix of the object store and the bucket name. i.e s3://bucket, az://bucket or gs://bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#uri DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#uri}
  */
  readonly uri?: string;
  /**
  * Whether to allow the backup SDK to attempt to authenticate using the instance metadata api. If set, will override 'CouchbaseCluster.spec.backup.useIAM'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#use_iam DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#use_iam}
  */
  readonly useIam?: boolean | cdktf.IResolvable;
}

export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpointToTerraform(struct!.endpoint),
    secret: cdktf.stringToTerraform(struct!.secret),
    uri: cdktf.stringToTerraform(struct!.uri),
    use_iam: cdktf.booleanToTerraform(struct!.useIam),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpoint",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_iam: {
      value: cdktf.booleanToHclTerraform(struct!.useIam),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._useIam !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIam = this._useIam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint.internalValue = undefined;
      this._secret = undefined;
      this._uri = undefined;
      this._useIam = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint.internalValue = value.endpoint;
      this._secret = value.secret;
      this._uri = value.uri;
      this._useIam = value.useIam;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // use_iam - computed: false, optional: true, required: false
  private _useIam?: boolean | cdktf.IResolvable; 
  public get useIam() {
    return this.getBooleanAttribute('use_iam');
  }
  public set useIam(value: boolean | cdktf.IResolvable) {
    this._useIam = value;
  }
  public resetUseIam() {
    this._useIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIamInput() {
    return this._useIam;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServices {
  /**
  * Analytics restores analytics datasets from the backup. This field defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#analytics DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#analytics}
  */
  readonly analytics?: boolean | cdktf.IResolvable;
  /**
  * BucketConfig restores all bucket configuration settings. If you are restoring to cluster with managed buckets, then this option may conflict with existing bucket settings, and the results are undefined, so avoid use. This option is intended for use with unmanaged buckets. Note that bucket durability settings are not restored in versions less than and equal to 1.1.0, and will need to be manually applied. This field defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#bucket_config DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#bucket_config}
  */
  readonly bucketConfig?: boolean | cdktf.IResolvable;
  /**
  * BucketQuery enables the backup of query metadata for all buckets. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#bucket_query DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#bucket_query}
  */
  readonly bucketQuery?: boolean | cdktf.IResolvable;
  /**
  * ClusterAnalytics enables the backup of cluster-wide analytics data, for example synonyms. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#cluster_analytics DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#cluster_analytics}
  */
  readonly clusterAnalytics?: boolean | cdktf.IResolvable;
  /**
  * ClusterQuery enables the backup of cluster level query metadata. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#cluster_query DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#cluster_query}
  */
  readonly clusterQuery?: boolean | cdktf.IResolvable;
  /**
  * Data restores document data from the backup. This field defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#data DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#data}
  */
  readonly data?: boolean | cdktf.IResolvable;
  /**
  * Eventing restores eventing functions from the backup. This field defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#eventing DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#eventing}
  */
  readonly eventing?: boolean | cdktf.IResolvable;
  /**
  * FTAlias restores full-text search aliases from the backup. This field defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#ft_alias DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#ft_alias}
  */
  readonly ftAlias?: boolean | cdktf.IResolvable;
  /**
  * FTIndex restores full-text search indexes from the backup. This field defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#ft_index DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#ft_index}
  */
  readonly ftIndex?: boolean | cdktf.IResolvable;
  /**
  * GSIIndex restores document indexes from the backup. This field defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#gsi_index DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#gsi_index}
  */
  readonly gsiIndex?: boolean | cdktf.IResolvable;
  /**
  * Users restores cluster level users, including their roles and permissions. This is only available for Couchbase Server 7.6 and later. This field defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#users DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#users}
  */
  readonly users?: boolean | cdktf.IResolvable;
  /**
  * Views restores views from the backup. This field defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#views DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#views}
  */
  readonly views?: boolean | cdktf.IResolvable;
}

export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServicesToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics: cdktf.booleanToTerraform(struct!.analytics),
    bucket_config: cdktf.booleanToTerraform(struct!.bucketConfig),
    bucket_query: cdktf.booleanToTerraform(struct!.bucketQuery),
    cluster_analytics: cdktf.booleanToTerraform(struct!.clusterAnalytics),
    cluster_query: cdktf.booleanToTerraform(struct!.clusterQuery),
    data: cdktf.booleanToTerraform(struct!.data),
    eventing: cdktf.booleanToTerraform(struct!.eventing),
    ft_alias: cdktf.booleanToTerraform(struct!.ftAlias),
    ft_index: cdktf.booleanToTerraform(struct!.ftIndex),
    gsi_index: cdktf.booleanToTerraform(struct!.gsiIndex),
    users: cdktf.booleanToTerraform(struct!.users),
    views: cdktf.booleanToTerraform(struct!.views),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServicesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analytics: {
      value: cdktf.booleanToHclTerraform(struct!.analytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bucket_config: {
      value: cdktf.booleanToHclTerraform(struct!.bucketConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bucket_query: {
      value: cdktf.booleanToHclTerraform(struct!.bucketQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_analytics: {
      value: cdktf.booleanToHclTerraform(struct!.clusterAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_query: {
      value: cdktf.booleanToHclTerraform(struct!.clusterQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data: {
      value: cdktf.booleanToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eventing: {
      value: cdktf.booleanToHclTerraform(struct!.eventing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ft_alias: {
      value: cdktf.booleanToHclTerraform(struct!.ftAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ft_index: {
      value: cdktf.booleanToHclTerraform(struct!.ftIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gsi_index: {
      value: cdktf.booleanToHclTerraform(struct!.gsiIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    users: {
      value: cdktf.booleanToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    views: {
      value: cdktf.booleanToHclTerraform(struct!.views),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.analytics = this._analytics;
    }
    if (this._bucketConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketConfig = this._bucketConfig;
    }
    if (this._bucketQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketQuery = this._bucketQuery;
    }
    if (this._clusterAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAnalytics = this._clusterAnalytics;
    }
    if (this._clusterQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterQuery = this._clusterQuery;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._eventing !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventing = this._eventing;
    }
    if (this._ftAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftAlias = this._ftAlias;
    }
    if (this._ftIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftIndex = this._ftIndex;
    }
    if (this._gsiIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsiIndex = this._gsiIndex;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._views !== undefined) {
      hasAnyValues = true;
      internalValueResult.views = this._views;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analytics = undefined;
      this._bucketConfig = undefined;
      this._bucketQuery = undefined;
      this._clusterAnalytics = undefined;
      this._clusterQuery = undefined;
      this._data = undefined;
      this._eventing = undefined;
      this._ftAlias = undefined;
      this._ftIndex = undefined;
      this._gsiIndex = undefined;
      this._users = undefined;
      this._views = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analytics = value.analytics;
      this._bucketConfig = value.bucketConfig;
      this._bucketQuery = value.bucketQuery;
      this._clusterAnalytics = value.clusterAnalytics;
      this._clusterQuery = value.clusterQuery;
      this._data = value.data;
      this._eventing = value.eventing;
      this._ftAlias = value.ftAlias;
      this._ftIndex = value.ftIndex;
      this._gsiIndex = value.gsiIndex;
      this._users = value.users;
      this._views = value.views;
    }
  }

  // analytics - computed: false, optional: true, required: false
  private _analytics?: boolean | cdktf.IResolvable; 
  public get analytics() {
    return this.getBooleanAttribute('analytics');
  }
  public set analytics(value: boolean | cdktf.IResolvable) {
    this._analytics = value;
  }
  public resetAnalytics() {
    this._analytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsInput() {
    return this._analytics;
  }

  // bucket_config - computed: false, optional: true, required: false
  private _bucketConfig?: boolean | cdktf.IResolvable; 
  public get bucketConfig() {
    return this.getBooleanAttribute('bucket_config');
  }
  public set bucketConfig(value: boolean | cdktf.IResolvable) {
    this._bucketConfig = value;
  }
  public resetBucketConfig() {
    this._bucketConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketConfigInput() {
    return this._bucketConfig;
  }

  // bucket_query - computed: false, optional: true, required: false
  private _bucketQuery?: boolean | cdktf.IResolvable; 
  public get bucketQuery() {
    return this.getBooleanAttribute('bucket_query');
  }
  public set bucketQuery(value: boolean | cdktf.IResolvable) {
    this._bucketQuery = value;
  }
  public resetBucketQuery() {
    this._bucketQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketQueryInput() {
    return this._bucketQuery;
  }

  // cluster_analytics - computed: false, optional: true, required: false
  private _clusterAnalytics?: boolean | cdktf.IResolvable; 
  public get clusterAnalytics() {
    return this.getBooleanAttribute('cluster_analytics');
  }
  public set clusterAnalytics(value: boolean | cdktf.IResolvable) {
    this._clusterAnalytics = value;
  }
  public resetClusterAnalytics() {
    this._clusterAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAnalyticsInput() {
    return this._clusterAnalytics;
  }

  // cluster_query - computed: false, optional: true, required: false
  private _clusterQuery?: boolean | cdktf.IResolvable; 
  public get clusterQuery() {
    return this.getBooleanAttribute('cluster_query');
  }
  public set clusterQuery(value: boolean | cdktf.IResolvable) {
    this._clusterQuery = value;
  }
  public resetClusterQuery() {
    this._clusterQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterQueryInput() {
    return this._clusterQuery;
  }

  // data - computed: false, optional: true, required: false
  private _data?: boolean | cdktf.IResolvable; 
  public get data() {
    return this.getBooleanAttribute('data');
  }
  public set data(value: boolean | cdktf.IResolvable) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // eventing - computed: false, optional: true, required: false
  private _eventing?: boolean | cdktf.IResolvable; 
  public get eventing() {
    return this.getBooleanAttribute('eventing');
  }
  public set eventing(value: boolean | cdktf.IResolvable) {
    this._eventing = value;
  }
  public resetEventing() {
    this._eventing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventingInput() {
    return this._eventing;
  }

  // ft_alias - computed: false, optional: true, required: false
  private _ftAlias?: boolean | cdktf.IResolvable; 
  public get ftAlias() {
    return this.getBooleanAttribute('ft_alias');
  }
  public set ftAlias(value: boolean | cdktf.IResolvable) {
    this._ftAlias = value;
  }
  public resetFtAlias() {
    this._ftAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftAliasInput() {
    return this._ftAlias;
  }

  // ft_index - computed: false, optional: true, required: false
  private _ftIndex?: boolean | cdktf.IResolvable; 
  public get ftIndex() {
    return this.getBooleanAttribute('ft_index');
  }
  public set ftIndex(value: boolean | cdktf.IResolvable) {
    this._ftIndex = value;
  }
  public resetFtIndex() {
    this._ftIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftIndexInput() {
    return this._ftIndex;
  }

  // gsi_index - computed: false, optional: true, required: false
  private _gsiIndex?: boolean | cdktf.IResolvable; 
  public get gsiIndex() {
    return this.getBooleanAttribute('gsi_index');
  }
  public set gsiIndex(value: boolean | cdktf.IResolvable) {
    this._gsiIndex = value;
  }
  public resetGsiIndex() {
    this._gsiIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsiIndexInput() {
    return this._gsiIndex;
  }

  // users - computed: false, optional: true, required: false
  private _users?: boolean | cdktf.IResolvable; 
  public get users() {
    return this.getBooleanAttribute('users');
  }
  public set users(value: boolean | cdktf.IResolvable) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // views - computed: false, optional: true, required: false
  private _views?: boolean | cdktf.IResolvable; 
  public get views() {
    return this.getBooleanAttribute('views');
  }
  public set views(value: boolean | cdktf.IResolvable) {
    this._views = value;
  }
  public resetViews() {
    this._views = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewsInput() {
    return this._views;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolume {
  /**
  * Size allows the specification of a staging volume. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes The ephemeral volume will only be used when restoring from a cloud provider, if the backup job was created using ephemeral storage. Otherwise the restore job will share a staging volume with the backup job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#size DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#size}
  */
  readonly size?: string;
  /**
  * Name of StorageClass to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#storage_class_name DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolumeToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.stringToTerraform(struct!.size),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolumeToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._storageClassName = value.storageClassName;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStart {
  /**
  * Int references a relative backup by index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#int DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#int}
  */
  readonly int?: number;
  /**
  * Str references an absolute backup by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#str DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#str}
  */
  readonly str?: string;
}

export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStartToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    int: cdktf.numberToTerraform(struct!.int),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStartToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    int: {
      value: cdktf.numberToHclTerraform(struct!.int),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._int !== undefined) {
      hasAnyValues = true;
      internalValueResult.int = this._int;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._int = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._int = value.int;
      this._str = value.str;
    }
  }

  // int - computed: false, optional: true, required: false
  private _int?: number; 
  public get int() {
    return this.getNumberAttribute('int');
  }
  public set int(value: number) {
    this._int = value;
  }
  public resetInt() {
    this._int = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intInput() {
    return this._int;
  }

  // str - computed: false, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpec {
  /**
  * Number of times the restore job should try to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#backoff_limit DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#backoff_limit}
  */
  readonly backoffLimit?: number;
  /**
  * The backup resource name associated with this restore, or the backup PVC name to restore from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#backup DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#backup}
  */
  readonly backup?: string;
  /**
  * DEPRECATED - by spec.data. Specific buckets can be explicitly included or excluded in the restore, as well as bucket mappings. This field is now ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#buckets DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#buckets}
  */
  readonly buckets?: { [key: string]: string };
  /**
  * Data allows control over what key-value/document data is included in the restore. By default, all data is included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#data DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#data}
  */
  readonly data?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecData;
  /**
  * End denotes the last backup to restore from. Omitting this field will only restore the backup referenced by start. This may be specified as an integer index (starting from 1), a string specifying a short date DD-MM-YYYY, the backup name, or one of either 'start' or 'oldest' keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#end DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#end}
  */
  readonly end?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEnd;
  /**
  * Forces data in the Couchbase cluster to be overwritten even if the data in the cluster is newer. By default, the system does not force updates, and all updates use Couchbase's conflict resolution mechanism to ensure that if newer data exists on the cluster, older restored data does not overwrite it. However, if 'couchbasebackuprestores.spec.forceUpdates' is true, then the backup record will _always_ overwrite the cluster record, regardless of Couchbase's conflict resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#force_updates DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#force_updates}
  */
  readonly forceUpdates?: boolean | cdktf.IResolvable;
  /**
  * Number of hours to hold restore script logs for, everything older will be deleted. More info: https://golang.org/pkg/time/#ParseDuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#log_retention DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#log_retention}
  */
  readonly logRetention?: string;
  /**
  * The remote destination for backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#object_store DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#object_store}
  */
  readonly objectStore?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStore;
  /**
  * Overwrites the already existing users in the cluster when user restoration is enabled (spec.services.users). The default behavior of backup/restore of users is to skip already existing users. This is only available for Couchbase Server 7.6 and later. This field defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#overwrite_users DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#overwrite_users}
  */
  readonly overwriteUsers?: boolean | cdktf.IResolvable;
  /**
  * Repo is the backup folder to restore from. If no repository is specified, the backup container will choose the latest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#repo DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#repo}
  */
  readonly repo?: string;
  /**
  * DEPRECATED - by spec.objectStore.uri Name of S3 bucket to restore from. If non-empty this overrides local backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#s3bucket DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#s3bucket}
  */
  readonly s3Bucket?: string;
  /**
  * This list accepts a certain set of parameters that will disable that data and prevent it being restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#services DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#services}
  */
  readonly services?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServices;
  /**
  * StagingVolume contains configuration related to the ephemeral volume used as staging when restoring from a cloud backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#staging_volume DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#staging_volume}
  */
  readonly stagingVolume?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolume;
  /**
  * Start denotes the first backup to restore from. This may be specified as an integer index (starting from 1), a string specifying a short date DD-MM-YYYY, the backup name, or one of either 'start' or 'oldest' keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#start DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#start}
  */
  readonly start?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStart;
  /**
  * How many threads to use during the restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#threads DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#threads}
  */
  readonly threads?: number;
  /**
  * Number of seconds to elapse before a completed job is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#ttl_seconds_after_finished DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest#ttl_seconds_after_finished}
  */
  readonly ttlSecondsAfterFinished?: number;
}

export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backoff_limit: cdktf.numberToTerraform(struct!.backoffLimit),
    backup: cdktf.stringToTerraform(struct!.backup),
    buckets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.buckets),
    data: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataToTerraform(struct!.data),
    end: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEndToTerraform(struct!.end),
    force_updates: cdktf.booleanToTerraform(struct!.forceUpdates),
    log_retention: cdktf.stringToTerraform(struct!.logRetention),
    object_store: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreToTerraform(struct!.objectStore),
    overwrite_users: cdktf.booleanToTerraform(struct!.overwriteUsers),
    repo: cdktf.stringToTerraform(struct!.repo),
    s3bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    services: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServicesToTerraform(struct!.services),
    staging_volume: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolumeToTerraform(struct!.stagingVolume),
    start: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStartToTerraform(struct!.start),
    threads: cdktf.numberToTerraform(struct!.threads),
    ttl_seconds_after_finished: cdktf.numberToTerraform(struct!.ttlSecondsAfterFinished),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backoff_limit: {
      value: cdktf.numberToHclTerraform(struct!.backoffLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup: {
      value: cdktf.stringToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buckets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.buckets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data: {
      value: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecData",
    },
    end: {
      value: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEnd",
    },
    force_updates: {
      value: cdktf.booleanToHclTerraform(struct!.forceUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_retention: {
      value: cdktf.stringToHclTerraform(struct!.logRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_store: {
      value: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreToHclTerraform(struct!.objectStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStore",
    },
    overwrite_users: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServices",
    },
    staging_volume: {
      value: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolumeToHclTerraform(struct!.stagingVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolume",
    },
    start: {
      value: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStart",
    },
    threads: {
      value: cdktf.numberToHclTerraform(struct!.threads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_seconds_after_finished: {
      value: cdktf.numberToHclTerraform(struct!.ttlSecondsAfterFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backoffLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoffLimit = this._backoffLimit;
    }
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._forceUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceUpdates = this._forceUpdates;
    }
    if (this._logRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetention = this._logRetention;
    }
    if (this._objectStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStore = this._objectStore?.internalValue;
    }
    if (this._overwriteUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteUsers = this._overwriteUsers;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._stagingVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingVolume = this._stagingVolume?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    if (this._threads !== undefined) {
      hasAnyValues = true;
      internalValueResult.threads = this._threads;
    }
    if (this._ttlSecondsAfterFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSecondsAfterFinished = this._ttlSecondsAfterFinished;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backoffLimit = undefined;
      this._backup = undefined;
      this._buckets = undefined;
      this._data.internalValue = undefined;
      this._end.internalValue = undefined;
      this._forceUpdates = undefined;
      this._logRetention = undefined;
      this._objectStore.internalValue = undefined;
      this._overwriteUsers = undefined;
      this._repo = undefined;
      this._s3Bucket = undefined;
      this._services.internalValue = undefined;
      this._stagingVolume.internalValue = undefined;
      this._start.internalValue = undefined;
      this._threads = undefined;
      this._ttlSecondsAfterFinished = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backoffLimit = value.backoffLimit;
      this._backup = value.backup;
      this._buckets = value.buckets;
      this._data.internalValue = value.data;
      this._end.internalValue = value.end;
      this._forceUpdates = value.forceUpdates;
      this._logRetention = value.logRetention;
      this._objectStore.internalValue = value.objectStore;
      this._overwriteUsers = value.overwriteUsers;
      this._repo = value.repo;
      this._s3Bucket = value.s3Bucket;
      this._services.internalValue = value.services;
      this._stagingVolume.internalValue = value.stagingVolume;
      this._start.internalValue = value.start;
      this._threads = value.threads;
      this._ttlSecondsAfterFinished = value.ttlSecondsAfterFinished;
    }
  }

  // backoff_limit - computed: false, optional: true, required: false
  private _backoffLimit?: number; 
  public get backoffLimit() {
    return this.getNumberAttribute('backoff_limit');
  }
  public set backoffLimit(value: number) {
    this._backoffLimit = value;
  }
  public resetBackoffLimit() {
    this._backoffLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffLimitInput() {
    return this._backoffLimit;
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: string; 
  public get backup() {
    return this.getStringAttribute('backup');
  }
  public set backup(value: string) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets?: { [key: string]: string }; 
  public get buckets() {
    return this.getStringMapAttribute('buckets');
  }
  public set buckets(value: { [key: string]: string }) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // end - computed: false, optional: true, required: false
  private _end = new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // force_updates - computed: false, optional: true, required: false
  private _forceUpdates?: boolean | cdktf.IResolvable; 
  public get forceUpdates() {
    return this.getBooleanAttribute('force_updates');
  }
  public set forceUpdates(value: boolean | cdktf.IResolvable) {
    this._forceUpdates = value;
  }
  public resetForceUpdates() {
    this._forceUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdatesInput() {
    return this._forceUpdates;
  }

  // log_retention - computed: false, optional: true, required: false
  private _logRetention?: string; 
  public get logRetention() {
    return this.getStringAttribute('log_retention');
  }
  public set logRetention(value: string) {
    this._logRetention = value;
  }
  public resetLogRetention() {
    this._logRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionInput() {
    return this._logRetention;
  }

  // object_store - computed: false, optional: true, required: false
  private _objectStore = new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStoreOutputReference(this, "object_store");
  public get objectStore() {
    return this._objectStore;
  }
  public putObjectStore(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecObjectStore) {
    this._objectStore.internalValue = value;
  }
  public resetObjectStore() {
    this._objectStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStoreInput() {
    return this._objectStore.internalValue;
  }

  // overwrite_users - computed: false, optional: true, required: false
  private _overwriteUsers?: boolean | cdktf.IResolvable; 
  public get overwriteUsers() {
    return this.getBooleanAttribute('overwrite_users');
  }
  public set overwriteUsers(value: boolean | cdktf.IResolvable) {
    this._overwriteUsers = value;
  }
  public resetOverwriteUsers() {
    this._overwriteUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteUsersInput() {
    return this._overwriteUsers;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // s3bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // staging_volume - computed: false, optional: true, required: false
  private _stagingVolume = new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolumeOutputReference(this, "staging_volume");
  public get stagingVolume() {
    return this._stagingVolume;
  }
  public putStagingVolume(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStagingVolume) {
    this._stagingVolume.internalValue = value;
  }
  public resetStagingVolume() {
    this._stagingVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingVolumeInput() {
    return this._stagingVolume.internalValue;
  }

  // start - computed: false, optional: true, required: false
  private _start = new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecStart) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }

  // threads - computed: false, optional: true, required: false
  private _threads?: number; 
  public get threads() {
    return this.getNumberAttribute('threads');
  }
  public set threads(value: number) {
    this._threads = value;
  }
  public resetThreads() {
    this._threads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsInput() {
    return this._threads;
  }

  // ttl_seconds_after_finished - computed: false, optional: true, required: false
  private _ttlSecondsAfterFinished?: number; 
  public get ttlSecondsAfterFinished() {
    return this.getNumberAttribute('ttl_seconds_after_finished');
  }
  public set ttlSecondsAfterFinished(value: number) {
    this._ttlSecondsAfterFinished = value;
  }
  public resetTtlSecondsAfterFinished() {
    this._ttlSecondsAfterFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsAfterFinishedInput() {
    return this._ttlSecondsAfterFinished;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest k8s_couchbase_com_couchbase_backup_restore_v2_manifest}
*/
export class DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_couchbase_com_couchbase_backup_restore_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest to import
  * @param importFromId The id of the existing DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCouchbaseComCouchbaseBackupRestoreV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_couchbase_com_couchbase_backup_restore_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_backup_restore_v2_manifest k8s_couchbase_com_couchbase_backup_restore_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_couchbase_com_couchbase_backup_restore_v2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpec) {
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
      metadata: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestMetadata",
      },
      spec: {
        value: dataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseBackupRestoreV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
