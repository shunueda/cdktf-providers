// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#metadata DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#metadata}
  */
  readonly metadata: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadata;
  /**
  * TableSpec defines the desired state of Table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#spec DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#spec}
  */
  readonly spec?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpec;
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#annotations DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#labels DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#namespace DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadataToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadataToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#column DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_descending DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_descending}
  */
  readonly isDescending?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrderToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    is_descending: cdktf.booleanToTerraform(struct!.isDescending),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrderToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_descending: {
      value: cdktf.booleanToHclTerraform(struct!.isDescending),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._isDescending !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDescending = this._isDescending;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._isDescending = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._isDescending = value.isDescending;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // is_descending - computed: false, optional: true, required: false
  private _isDescending?: boolean | cdktf.IResolvable; 
  public get isDescending() {
    return this.getBooleanAttribute('is_descending');
  }
  public set isDescending(value: boolean | cdktf.IResolvable) {
    this._isDescending = value;
  }
  public resetIsDescending() {
    this._isDescending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDescendingInput() {
    return this._isDescending;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_static DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_static}
  */
  readonly isStatic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumnsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_static: cdktf.booleanToTerraform(struct!.isStatic),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumnsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_static: {
      value: cdktf.booleanToHclTerraform(struct!.isStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isStatic = this._isStatic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isStatic = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isStatic = value.isStatic;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // is_static - computed: false, optional: true, required: false
  private _isStatic?: boolean | cdktf.IResolvable; 
  public get isStatic() {
    return this.getBooleanAttribute('is_static');
  }
  public set isStatic(value: boolean | cdktf.IResolvable) {
    this._isStatic = value;
  }
  public resetIsStatic() {
    this._isStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStaticInput() {
    return this._isStatic;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumnsOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#bloom_filter_fp_chance DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#bloom_filter_fp_chance}
  */
  readonly bloomFilterFpChance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#caching DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#caching}
  */
  readonly caching?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#comment DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#compaction DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#compaction}
  */
  readonly compaction?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#compression DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#compression}
  */
  readonly compression?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#crc_check_chance DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#crc_check_chance}
  */
  readonly crcCheckChance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#dc_local_read_repair_chance DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#dc_local_read_repair_chance}
  */
  readonly dcLocalReadRepairChance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#default_ttl DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#gc_grace_seconds DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#gc_grace_seconds}
  */
  readonly gcGraceSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#max_index_interval DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#max_index_interval}
  */
  readonly maxIndexInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#memtable_flush_period_ms DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#memtable_flush_period_ms}
  */
  readonly memtableFlushPeriodMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#min_index_interval DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#min_index_interval}
  */
  readonly minIndexInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#read_repair_chance DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#read_repair_chance}
  */
  readonly readRepairChance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#speculative_retry DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#speculative_retry}
  */
  readonly speculativeRetry?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraPropertiesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bloom_filter_fp_chance: cdktf.stringToTerraform(struct!.bloomFilterFpChance),
    caching: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.caching),
    comment: cdktf.stringToTerraform(struct!.comment),
    compaction: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.compaction),
    compression: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.compression),
    crc_check_chance: cdktf.stringToTerraform(struct!.crcCheckChance),
    dc_local_read_repair_chance: cdktf.stringToTerraform(struct!.dcLocalReadRepairChance),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    gc_grace_seconds: cdktf.numberToTerraform(struct!.gcGraceSeconds),
    max_index_interval: cdktf.numberToTerraform(struct!.maxIndexInterval),
    memtable_flush_period_ms: cdktf.numberToTerraform(struct!.memtableFlushPeriodMs),
    min_index_interval: cdktf.numberToTerraform(struct!.minIndexInterval),
    read_repair_chance: cdktf.stringToTerraform(struct!.readRepairChance),
    speculative_retry: cdktf.stringToTerraform(struct!.speculativeRetry),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraPropertiesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bloom_filter_fp_chance: {
      value: cdktf.stringToHclTerraform(struct!.bloomFilterFpChance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caching: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.caching),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compaction: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.compaction),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    compression: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.compression),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    crc_check_chance: {
      value: cdktf.stringToHclTerraform(struct!.crcCheckChance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dc_local_read_repair_chance: {
      value: cdktf.stringToHclTerraform(struct!.dcLocalReadRepairChance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gc_grace_seconds: {
      value: cdktf.numberToHclTerraform(struct!.gcGraceSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_index_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxIndexInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memtable_flush_period_ms: {
      value: cdktf.numberToHclTerraform(struct!.memtableFlushPeriodMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_index_interval: {
      value: cdktf.numberToHclTerraform(struct!.minIndexInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_repair_chance: {
      value: cdktf.stringToHclTerraform(struct!.readRepairChance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speculative_retry: {
      value: cdktf.stringToHclTerraform(struct!.speculativeRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bloomFilterFpChance !== undefined) {
      hasAnyValues = true;
      internalValueResult.bloomFilterFpChance = this._bloomFilterFpChance;
    }
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._compaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.compaction = this._compaction;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._crcCheckChance !== undefined) {
      hasAnyValues = true;
      internalValueResult.crcCheckChance = this._crcCheckChance;
    }
    if (this._dcLocalReadRepairChance !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcLocalReadRepairChance = this._dcLocalReadRepairChance;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._gcGraceSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcGraceSeconds = this._gcGraceSeconds;
    }
    if (this._maxIndexInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIndexInterval = this._maxIndexInterval;
    }
    if (this._memtableFlushPeriodMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memtableFlushPeriodMs = this._memtableFlushPeriodMs;
    }
    if (this._minIndexInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIndexInterval = this._minIndexInterval;
    }
    if (this._readRepairChance !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRepairChance = this._readRepairChance;
    }
    if (this._speculativeRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.speculativeRetry = this._speculativeRetry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bloomFilterFpChance = undefined;
      this._caching = undefined;
      this._comment = undefined;
      this._compaction = undefined;
      this._compression = undefined;
      this._crcCheckChance = undefined;
      this._dcLocalReadRepairChance = undefined;
      this._defaultTtl = undefined;
      this._gcGraceSeconds = undefined;
      this._maxIndexInterval = undefined;
      this._memtableFlushPeriodMs = undefined;
      this._minIndexInterval = undefined;
      this._readRepairChance = undefined;
      this._speculativeRetry = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bloomFilterFpChance = value.bloomFilterFpChance;
      this._caching = value.caching;
      this._comment = value.comment;
      this._compaction = value.compaction;
      this._compression = value.compression;
      this._crcCheckChance = value.crcCheckChance;
      this._dcLocalReadRepairChance = value.dcLocalReadRepairChance;
      this._defaultTtl = value.defaultTtl;
      this._gcGraceSeconds = value.gcGraceSeconds;
      this._maxIndexInterval = value.maxIndexInterval;
      this._memtableFlushPeriodMs = value.memtableFlushPeriodMs;
      this._minIndexInterval = value.minIndexInterval;
      this._readRepairChance = value.readRepairChance;
      this._speculativeRetry = value.speculativeRetry;
    }
  }

  // bloom_filter_fp_chance - computed: false, optional: true, required: false
  private _bloomFilterFpChance?: string; 
  public get bloomFilterFpChance() {
    return this.getStringAttribute('bloom_filter_fp_chance');
  }
  public set bloomFilterFpChance(value: string) {
    this._bloomFilterFpChance = value;
  }
  public resetBloomFilterFpChance() {
    this._bloomFilterFpChance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bloomFilterFpChanceInput() {
    return this._bloomFilterFpChance;
  }

  // caching - computed: false, optional: true, required: false
  private _caching?: { [key: string]: string }; 
  public get caching() {
    return this.getStringMapAttribute('caching');
  }
  public set caching(value: { [key: string]: string }) {
    this._caching = value;
  }
  public resetCaching() {
    this._caching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // compaction - computed: false, optional: true, required: false
  private _compaction?: { [key: string]: string }; 
  public get compaction() {
    return this.getStringMapAttribute('compaction');
  }
  public set compaction(value: { [key: string]: string }) {
    this._compaction = value;
  }
  public resetCompaction() {
    this._compaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactionInput() {
    return this._compaction;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: { [key: string]: string }; 
  public get compression() {
    return this.getStringMapAttribute('compression');
  }
  public set compression(value: { [key: string]: string }) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // crc_check_chance - computed: false, optional: true, required: false
  private _crcCheckChance?: string; 
  public get crcCheckChance() {
    return this.getStringAttribute('crc_check_chance');
  }
  public set crcCheckChance(value: string) {
    this._crcCheckChance = value;
  }
  public resetCrcCheckChance() {
    this._crcCheckChance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crcCheckChanceInput() {
    return this._crcCheckChance;
  }

  // dc_local_read_repair_chance - computed: false, optional: true, required: false
  private _dcLocalReadRepairChance?: string; 
  public get dcLocalReadRepairChance() {
    return this.getStringAttribute('dc_local_read_repair_chance');
  }
  public set dcLocalReadRepairChance(value: string) {
    this._dcLocalReadRepairChance = value;
  }
  public resetDcLocalReadRepairChance() {
    this._dcLocalReadRepairChance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcLocalReadRepairChanceInput() {
    return this._dcLocalReadRepairChance;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // gc_grace_seconds - computed: false, optional: true, required: false
  private _gcGraceSeconds?: number; 
  public get gcGraceSeconds() {
    return this.getNumberAttribute('gc_grace_seconds');
  }
  public set gcGraceSeconds(value: number) {
    this._gcGraceSeconds = value;
  }
  public resetGcGraceSeconds() {
    this._gcGraceSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcGraceSecondsInput() {
    return this._gcGraceSeconds;
  }

  // max_index_interval - computed: false, optional: true, required: false
  private _maxIndexInterval?: number; 
  public get maxIndexInterval() {
    return this.getNumberAttribute('max_index_interval');
  }
  public set maxIndexInterval(value: number) {
    this._maxIndexInterval = value;
  }
  public resetMaxIndexInterval() {
    this._maxIndexInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIndexIntervalInput() {
    return this._maxIndexInterval;
  }

  // memtable_flush_period_ms - computed: false, optional: true, required: false
  private _memtableFlushPeriodMs?: number; 
  public get memtableFlushPeriodMs() {
    return this.getNumberAttribute('memtable_flush_period_ms');
  }
  public set memtableFlushPeriodMs(value: number) {
    this._memtableFlushPeriodMs = value;
  }
  public resetMemtableFlushPeriodMs() {
    this._memtableFlushPeriodMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memtableFlushPeriodMsInput() {
    return this._memtableFlushPeriodMs;
  }

  // min_index_interval - computed: false, optional: true, required: false
  private _minIndexInterval?: number; 
  public get minIndexInterval() {
    return this.getNumberAttribute('min_index_interval');
  }
  public set minIndexInterval(value: number) {
    this._minIndexInterval = value;
  }
  public resetMinIndexInterval() {
    this._minIndexInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIndexIntervalInput() {
    return this._minIndexInterval;
  }

  // read_repair_chance - computed: false, optional: true, required: false
  private _readRepairChance?: string; 
  public get readRepairChance() {
    return this.getStringAttribute('read_repair_chance');
  }
  public set readRepairChance(value: string) {
    this._readRepairChance = value;
  }
  public resetReadRepairChance() {
    this._readRepairChance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRepairChanceInput() {
    return this._readRepairChance;
  }

  // speculative_retry - computed: false, optional: true, required: false
  private _speculativeRetry?: string; 
  public get speculativeRetry() {
    return this.getStringAttribute('speculative_retry');
  }
  public set speculativeRetry(value: string) {
    this._speculativeRetry = value;
  }
  public resetSpeculativeRetry() {
    this._speculativeRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speculativeRetryInput() {
    return this._speculativeRetry;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandra {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#clustering_order DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#clustering_order}
  */
  readonly clusteringOrder?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_deleted DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#primary_key DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#primary_key}
  */
  readonly primaryKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#properties DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#properties}
  */
  readonly properties?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraProperties;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clustering_order: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrderToTerraform(struct!.clusteringOrder),
    columns: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumnsToTerraform, false)(struct!.columns),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    primary_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKey),
    properties: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraPropertiesToTerraform(struct!.properties),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clustering_order: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrderToHclTerraform(struct!.clusteringOrder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrder",
    },
    columns: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumnsList",
    },
    is_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.isDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    properties: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraProperties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandra | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusteringOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusteringOrder = this._clusteringOrder?.internalValue;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandra | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusteringOrder.internalValue = undefined;
      this._columns.internalValue = undefined;
      this._isDeleted = undefined;
      this._primaryKey = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusteringOrder.internalValue = value.clusteringOrder;
      this._columns.internalValue = value.columns;
      this._isDeleted = value.isDeleted;
      this._primaryKey = value.primaryKey;
      this._properties.internalValue = value.properties;
    }
  }

  // clustering_order - computed: false, optional: true, required: false
  private _clusteringOrder = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrderOutputReference(this, "clustering_order");
  public get clusteringOrder() {
    return this._clusteringOrder;
  }
  public putClusteringOrder(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraClusteringOrder) {
    this._clusteringOrder.internalValue = value;
  }
  public resetClusteringOrder() {
    this._clusteringOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringOrderInput() {
    return this._clusteringOrder.internalValue;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: boolean | cdktf.IResolvable; 
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }
  public set isDeleted(value: boolean | cdktf.IResolvable) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: string[]; 
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }
  public set primaryKey(value: string[]) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#auto_increment DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#auto_increment}
  */
  readonly autoIncrement?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_increment: cdktf.booleanToTerraform(struct!.autoIncrement),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_increment: {
      value: cdktf.booleanToHclTerraform(struct!.autoIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncrement = this._autoIncrement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoIncrement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoIncrement = value.autoIncrement;
    }
  }

  // auto_increment - computed: false, optional: true, required: false
  private _autoIncrement?: boolean | cdktf.IResolvable; 
  public get autoIncrement() {
    return this.getBooleanAttribute('auto_increment');
  }
  public set autoIncrement(value: boolean | cdktf.IResolvable) {
    this._autoIncrement = value;
  }
  public resetAutoIncrement() {
    this._autoIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementInput() {
    return this._autoIncrement;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#not_null DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#not_null}
  */
  readonly notNull?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraintsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_null: cdktf.booleanToTerraform(struct!.notNull),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraintsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_null: {
      value: cdktf.booleanToHclTerraform(struct!.notNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNull = this._notNull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notNull = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notNull = value.notNull;
    }
  }

  // not_null - computed: false, optional: true, required: false
  private _notNull?: boolean | cdktf.IResolvable; 
  public get notNull() {
    return this.getBooleanAttribute('not_null');
  }
  public set notNull(value: boolean | cdktf.IResolvable) {
    this._notNull = value;
  }
  public resetNotNull() {
    this._notNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNullInput() {
    return this._notNull;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#attributes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#attributes}
  */
  readonly attributes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#constraints DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#constraints}
  */
  readonly constraints?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#default DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributesToTerraform(struct!.attributes),
    constraints: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraintsToTerraform(struct!.constraints),
    default: cdktf.stringToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributes",
    },
    constraints: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraints",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._constraints.internalValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._constraints.internalValue = value.constraints;
      this._default = value.default;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#table DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#table}
  */
  readonly table: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferencesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferencesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._table = value.table;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#on_delete DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#on_delete}
  */
  readonly onDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#references DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#references}
  */
  readonly references: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferences;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    name: cdktf.stringToTerraform(struct!.name),
    on_delete: cdktf.stringToTerraform(struct!.onDelete),
    references: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferencesToTerraform(struct!.references),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_delete: {
      value: cdktf.stringToHclTerraform(struct!.onDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    references: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferencesToHclTerraform(struct!.references),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferences",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDelete = this._onDelete;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._name = undefined;
      this._onDelete = undefined;
      this._references.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._name = value.name;
      this._onDelete = value.onDelete;
      this._references.internalValue = value.references;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string; 
  public get onDelete() {
    return this.getStringAttribute('on_delete');
  }
  public set onDelete(value: string) {
    this._onDelete = value;
  }
  public resetOnDelete() {
    this._onDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteInput() {
    return this._onDelete;
  }

  // references - computed: false, optional: false, required: true
  private _references = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferencesOutputReference(this, "references");
  public get references() {
    return this._references;
  }
  public putReferences(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysReferences) {
    this._references.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeys[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_unique DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_unique}
  */
  readonly isUnique?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    is_unique: cdktf.booleanToTerraform(struct!.isUnique),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_unique: {
      value: cdktf.booleanToHclTerraform(struct!.isUnique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._isUnique !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUnique = this._isUnique;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._isUnique = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._isUnique = value.isUnique;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // is_unique - computed: false, optional: true, required: false
  private _isUnique?: boolean | cdktf.IResolvable; 
  public get isUnique() {
    return this.getBooleanAttribute('is_unique');
  }
  public set isUnique(value: boolean | cdktf.IResolvable) {
    this._isUnique = value;
  }
  public resetIsUnique() {
    this._isUnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUniqueInput() {
    return this._isUnique;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexesOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#arguments DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#arguments}
  */
  readonly arguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#condition DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#constraint_trigger DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#constraint_trigger}
  */
  readonly constraintTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#events DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#execute_procedure DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#execute_procedure}
  */
  readonly executeProcedure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#for_each_run DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#for_each_run}
  */
  readonly forEachRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#for_each_statement DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#for_each_statement}
  */
  readonly forEachStatement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggersToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    condition: cdktf.stringToTerraform(struct!.condition),
    constraint_trigger: cdktf.booleanToTerraform(struct!.constraintTrigger),
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    execute_procedure: cdktf.stringToTerraform(struct!.executeProcedure),
    for_each_run: cdktf.booleanToTerraform(struct!.forEachRun),
    for_each_statement: cdktf.booleanToTerraform(struct!.forEachStatement),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggersToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constraint_trigger: {
      value: cdktf.booleanToHclTerraform(struct!.constraintTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    execute_procedure: {
      value: cdktf.stringToHclTerraform(struct!.executeProcedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for_each_run: {
      value: cdktf.booleanToHclTerraform(struct!.forEachRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    for_each_statement: {
      value: cdktf.booleanToHclTerraform(struct!.forEachStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._constraintTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintTrigger = this._constraintTrigger;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._executeProcedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeProcedure = this._executeProcedure;
    }
    if (this._forEachRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEachRun = this._forEachRun;
    }
    if (this._forEachStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEachStatement = this._forEachStatement;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._condition = undefined;
      this._constraintTrigger = undefined;
      this._events = undefined;
      this._executeProcedure = undefined;
      this._forEachRun = undefined;
      this._forEachStatement = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._condition = value.condition;
      this._constraintTrigger = value.constraintTrigger;
      this._events = value.events;
      this._executeProcedure = value.executeProcedure;
      this._forEachRun = value.forEachRun;
      this._forEachStatement = value.forEachStatement;
      this._name = value.name;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // constraint_trigger - computed: false, optional: true, required: false
  private _constraintTrigger?: boolean | cdktf.IResolvable; 
  public get constraintTrigger() {
    return this.getBooleanAttribute('constraint_trigger');
  }
  public set constraintTrigger(value: boolean | cdktf.IResolvable) {
    this._constraintTrigger = value;
  }
  public resetConstraintTrigger() {
    this._constraintTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintTriggerInput() {
    return this._constraintTrigger;
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // execute_procedure - computed: false, optional: false, required: true
  private _executeProcedure?: string; 
  public get executeProcedure() {
    return this.getStringAttribute('execute_procedure');
  }
  public set executeProcedure(value: string) {
    this._executeProcedure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeProcedureInput() {
    return this._executeProcedure;
  }

  // for_each_run - computed: false, optional: true, required: false
  private _forEachRun?: boolean | cdktf.IResolvable; 
  public get forEachRun() {
    return this.getBooleanAttribute('for_each_run');
  }
  public set forEachRun(value: boolean | cdktf.IResolvable) {
    this._forEachRun = value;
  }
  public resetForEachRun() {
    this._forEachRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachRunInput() {
    return this._forEachRun;
  }

  // for_each_statement - computed: false, optional: true, required: false
  private _forEachStatement?: boolean | cdktf.IResolvable; 
  public get forEachStatement() {
    return this.getBooleanAttribute('for_each_statement');
  }
  public set forEachStatement(value: boolean | cdktf.IResolvable) {
    this._forEachStatement = value;
  }
  public resetForEachStatement() {
    this._forEachStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachStatementInput() {
    return this._forEachStatement;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggersOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#foreign_keys DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#foreign_keys}
  */
  readonly foreignKeys?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeys[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#indexes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#indexes}
  */
  readonly indexes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_deleted DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#json_triggers DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#json_triggers}
  */
  readonly jsonTriggers?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#primary_key DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#primary_key}
  */
  readonly primaryKey?: string[];
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsToTerraform, false)(struct!.columns),
    foreign_keys: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysToTerraform, false)(struct!.foreignKeys),
    indexes: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexesToTerraform, false)(struct!.indexes),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    json_triggers: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggersToTerraform, false)(struct!.jsonTriggers),
    primary_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKey),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsList",
    },
    foreign_keys: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysToHclTerraform, false)(struct!.foreignKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysList",
    },
    indexes: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexesToHclTerraform, false)(struct!.indexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexesList",
    },
    is_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.isDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json_triggers: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggersToHclTerraform, false)(struct!.jsonTriggers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggersList",
    },
    primary_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._foreignKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKeys = this._foreignKeys?.internalValue;
    }
    if (this._indexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes?.internalValue;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._jsonTriggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonTriggers = this._jsonTriggers?.internalValue;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns.internalValue = undefined;
      this._foreignKeys.internalValue = undefined;
      this._indexes.internalValue = undefined;
      this._isDeleted = undefined;
      this._jsonTriggers.internalValue = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns.internalValue = value.columns;
      this._foreignKeys.internalValue = value.foreignKeys;
      this._indexes.internalValue = value.indexes;
      this._isDeleted = value.isDeleted;
      this._jsonTriggers.internalValue = value.jsonTriggers;
      this._primaryKey = value.primaryKey;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // foreign_keys - computed: false, optional: true, required: false
  private _foreignKeys = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeysList(this, "foreign_keys", false);
  public get foreignKeys() {
    return this._foreignKeys;
  }
  public putForeignKeys(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbForeignKeys[] | cdktf.IResolvable) {
    this._foreignKeys.internalValue = value;
  }
  public resetForeignKeys() {
    this._foreignKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeysInput() {
    return this._foreignKeys.internalValue;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }
  public putIndexes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbIndexes[] | cdktf.IResolvable) {
    this._indexes.internalValue = value;
  }
  public resetIndexes() {
    this._indexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes.internalValue;
  }

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: boolean | cdktf.IResolvable; 
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }
  public set isDeleted(value: boolean | cdktf.IResolvable) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // json_triggers - computed: false, optional: true, required: false
  private _jsonTriggers = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggersList(this, "json_triggers", false);
  public get jsonTriggers() {
    return this._jsonTriggers;
  }
  public putJsonTriggers(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbJsonTriggers[] | cdktf.IResolvable) {
    this._jsonTriggers.internalValue = value;
  }
  public resetJsonTriggers() {
    this._jsonTriggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonTriggersInput() {
    return this._jsonTriggers.internalValue;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: string[]; 
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }
  public set primaryKey(value: string[]) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#auto_increment DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#auto_increment}
  */
  readonly autoIncrement?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_increment: cdktf.booleanToTerraform(struct!.autoIncrement),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_increment: {
      value: cdktf.booleanToHclTerraform(struct!.autoIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncrement = this._autoIncrement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoIncrement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoIncrement = value.autoIncrement;
    }
  }

  // auto_increment - computed: false, optional: true, required: false
  private _autoIncrement?: boolean | cdktf.IResolvable; 
  public get autoIncrement() {
    return this.getBooleanAttribute('auto_increment');
  }
  public set autoIncrement(value: boolean | cdktf.IResolvable) {
    this._autoIncrement = value;
  }
  public resetAutoIncrement() {
    this._autoIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementInput() {
    return this._autoIncrement;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#not_null DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#not_null}
  */
  readonly notNull?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraintsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_null: cdktf.booleanToTerraform(struct!.notNull),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraintsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_null: {
      value: cdktf.booleanToHclTerraform(struct!.notNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNull = this._notNull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notNull = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notNull = value.notNull;
    }
  }

  // not_null - computed: false, optional: true, required: false
  private _notNull?: boolean | cdktf.IResolvable; 
  public get notNull() {
    return this.getBooleanAttribute('not_null');
  }
  public set notNull(value: boolean | cdktf.IResolvable) {
    this._notNull = value;
  }
  public resetNotNull() {
    this._notNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNullInput() {
    return this._notNull;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#attributes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#attributes}
  */
  readonly attributes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#charset DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#charset}
  */
  readonly charset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#collation DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#constraints DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#constraints}
  */
  readonly constraints?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#default DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributesToTerraform(struct!.attributes),
    charset: cdktf.stringToTerraform(struct!.charset),
    collation: cdktf.stringToTerraform(struct!.collation),
    constraints: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraintsToTerraform(struct!.constraints),
    default: cdktf.stringToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributes",
    },
    charset: {
      value: cdktf.stringToHclTerraform(struct!.charset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collation: {
      value: cdktf.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constraints: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraints",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._charset !== undefined) {
      hasAnyValues = true;
      internalValueResult.charset = this._charset;
    }
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._charset = undefined;
      this._collation = undefined;
      this._constraints.internalValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._charset = value.charset;
      this._collation = value.collation;
      this._constraints.internalValue = value.constraints;
      this._default = value.default;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // charset - computed: false, optional: true, required: false
  private _charset?: string; 
  public get charset() {
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  public resetCharset() {
    this._charset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset;
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#table DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#table}
  */
  readonly table: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferencesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferencesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._table = value.table;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#on_delete DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#on_delete}
  */
  readonly onDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#references DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#references}
  */
  readonly references: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferences;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    name: cdktf.stringToTerraform(struct!.name),
    on_delete: cdktf.stringToTerraform(struct!.onDelete),
    references: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferencesToTerraform(struct!.references),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_delete: {
      value: cdktf.stringToHclTerraform(struct!.onDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    references: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferencesToHclTerraform(struct!.references),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferences",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDelete = this._onDelete;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._name = undefined;
      this._onDelete = undefined;
      this._references.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._name = value.name;
      this._onDelete = value.onDelete;
      this._references.internalValue = value.references;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string; 
  public get onDelete() {
    return this.getStringAttribute('on_delete');
  }
  public set onDelete(value: string) {
    this._onDelete = value;
  }
  public resetOnDelete() {
    this._onDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteInput() {
    return this._onDelete;
  }

  // references - computed: false, optional: false, required: true
  private _references = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferencesOutputReference(this, "references");
  public get references() {
    return this._references;
  }
  public putReferences(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysReferences) {
    this._references.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeys[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_unique DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_unique}
  */
  readonly isUnique?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    is_unique: cdktf.booleanToTerraform(struct!.isUnique),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_unique: {
      value: cdktf.booleanToHclTerraform(struct!.isUnique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._isUnique !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUnique = this._isUnique;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._isUnique = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._isUnique = value.isUnique;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // is_unique - computed: false, optional: true, required: false
  private _isUnique?: boolean | cdktf.IResolvable; 
  public get isUnique() {
    return this.getBooleanAttribute('is_unique');
  }
  public set isUnique(value: boolean | cdktf.IResolvable) {
    this._isUnique = value;
  }
  public resetIsUnique() {
    this._isUnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUniqueInput() {
    return this._isUnique;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexesOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysql {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#collation DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#default_charset DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#default_charset}
  */
  readonly defaultCharset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#foreign_keys DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#foreign_keys}
  */
  readonly foreignKeys?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeys[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#indexes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#indexes}
  */
  readonly indexes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_deleted DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#primary_key DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#primary_key}
  */
  readonly primaryKey?: string[];
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktf.stringToTerraform(struct!.collation),
    columns: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsToTerraform, false)(struct!.columns),
    default_charset: cdktf.stringToTerraform(struct!.defaultCharset),
    foreign_keys: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysToTerraform, false)(struct!.foreignKeys),
    indexes: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexesToTerraform, false)(struct!.indexes),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    primary_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKey),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collation: {
      value: cdktf.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsList",
    },
    default_charset: {
      value: cdktf.stringToHclTerraform(struct!.defaultCharset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreign_keys: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysToHclTerraform, false)(struct!.foreignKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysList",
    },
    indexes: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexesToHclTerraform, false)(struct!.indexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexesList",
    },
    is_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.isDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._defaultCharset !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCharset = this._defaultCharset;
    }
    if (this._foreignKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKeys = this._foreignKeys?.internalValue;
    }
    if (this._indexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes?.internalValue;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._columns.internalValue = undefined;
      this._defaultCharset = undefined;
      this._foreignKeys.internalValue = undefined;
      this._indexes.internalValue = undefined;
      this._isDeleted = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._columns.internalValue = value.columns;
      this._defaultCharset = value.defaultCharset;
      this._foreignKeys.internalValue = value.foreignKeys;
      this._indexes.internalValue = value.indexes;
      this._isDeleted = value.isDeleted;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // default_charset - computed: false, optional: true, required: false
  private _defaultCharset?: string; 
  public get defaultCharset() {
    return this.getStringAttribute('default_charset');
  }
  public set defaultCharset(value: string) {
    this._defaultCharset = value;
  }
  public resetDefaultCharset() {
    this._defaultCharset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCharsetInput() {
    return this._defaultCharset;
  }

  // foreign_keys - computed: false, optional: true, required: false
  private _foreignKeys = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeysList(this, "foreign_keys", false);
  public get foreignKeys() {
    return this._foreignKeys;
  }
  public putForeignKeys(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlForeignKeys[] | cdktf.IResolvable) {
    this._foreignKeys.internalValue = value;
  }
  public resetForeignKeys() {
    this._foreignKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeysInput() {
    return this._foreignKeys.internalValue;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }
  public putIndexes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlIndexes[] | cdktf.IResolvable) {
    this._indexes.internalValue = value;
  }
  public resetIndexes() {
    this._indexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes.internalValue;
  }

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: boolean | cdktf.IResolvable; 
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }
  public set isDeleted(value: boolean | cdktf.IResolvable) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: string[]; 
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }
  public set primaryKey(value: string[]) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#auto_increment DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#auto_increment}
  */
  readonly autoIncrement?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_increment: cdktf.booleanToTerraform(struct!.autoIncrement),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_increment: {
      value: cdktf.booleanToHclTerraform(struct!.autoIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncrement = this._autoIncrement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoIncrement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoIncrement = value.autoIncrement;
    }
  }

  // auto_increment - computed: false, optional: true, required: false
  private _autoIncrement?: boolean | cdktf.IResolvable; 
  public get autoIncrement() {
    return this.getBooleanAttribute('auto_increment');
  }
  public set autoIncrement(value: boolean | cdktf.IResolvable) {
    this._autoIncrement = value;
  }
  public resetAutoIncrement() {
    this._autoIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementInput() {
    return this._autoIncrement;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#not_null DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#not_null}
  */
  readonly notNull?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraintsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_null: cdktf.booleanToTerraform(struct!.notNull),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraintsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_null: {
      value: cdktf.booleanToHclTerraform(struct!.notNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNull = this._notNull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notNull = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notNull = value.notNull;
    }
  }

  // not_null - computed: false, optional: true, required: false
  private _notNull?: boolean | cdktf.IResolvable; 
  public get notNull() {
    return this.getBooleanAttribute('not_null');
  }
  public set notNull(value: boolean | cdktf.IResolvable) {
    this._notNull = value;
  }
  public resetNotNull() {
    this._notNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNullInput() {
    return this._notNull;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#attributes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#attributes}
  */
  readonly attributes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#constraints DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#constraints}
  */
  readonly constraints?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#default DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributesToTerraform(struct!.attributes),
    constraints: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraintsToTerraform(struct!.constraints),
    default: cdktf.stringToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributes",
    },
    constraints: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraints",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._constraints.internalValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._constraints.internalValue = value.constraints;
      this._default = value.default;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#table DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#table}
  */
  readonly table: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferencesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferencesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._table = value.table;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#on_delete DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#on_delete}
  */
  readonly onDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#references DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#references}
  */
  readonly references: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferences;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    name: cdktf.stringToTerraform(struct!.name),
    on_delete: cdktf.stringToTerraform(struct!.onDelete),
    references: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferencesToTerraform(struct!.references),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_delete: {
      value: cdktf.stringToHclTerraform(struct!.onDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    references: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferencesToHclTerraform(struct!.references),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferences",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDelete = this._onDelete;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._name = undefined;
      this._onDelete = undefined;
      this._references.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._name = value.name;
      this._onDelete = value.onDelete;
      this._references.internalValue = value.references;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string; 
  public get onDelete() {
    return this.getStringAttribute('on_delete');
  }
  public set onDelete(value: string) {
    this._onDelete = value;
  }
  public resetOnDelete() {
    this._onDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteInput() {
    return this._onDelete;
  }

  // references - computed: false, optional: false, required: true
  private _references = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferencesOutputReference(this, "references");
  public get references() {
    return this._references;
  }
  public putReferences(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysReferences) {
    this._references.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeys[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_unique DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_unique}
  */
  readonly isUnique?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    is_unique: cdktf.booleanToTerraform(struct!.isUnique),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_unique: {
      value: cdktf.booleanToHclTerraform(struct!.isUnique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._isUnique !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUnique = this._isUnique;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._isUnique = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._isUnique = value.isUnique;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // is_unique - computed: false, optional: true, required: false
  private _isUnique?: boolean | cdktf.IResolvable; 
  public get isUnique() {
    return this.getBooleanAttribute('is_unique');
  }
  public set isUnique(value: boolean | cdktf.IResolvable) {
    this._isUnique = value;
  }
  public resetIsUnique() {
    this._isUnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUniqueInput() {
    return this._isUnique;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexesOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#arguments DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#arguments}
  */
  readonly arguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#condition DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#constraint_trigger DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#constraint_trigger}
  */
  readonly constraintTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#events DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#execute_procedure DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#execute_procedure}
  */
  readonly executeProcedure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#for_each_run DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#for_each_run}
  */
  readonly forEachRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#for_each_statement DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#for_each_statement}
  */
  readonly forEachStatement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggersToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    condition: cdktf.stringToTerraform(struct!.condition),
    constraint_trigger: cdktf.booleanToTerraform(struct!.constraintTrigger),
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    execute_procedure: cdktf.stringToTerraform(struct!.executeProcedure),
    for_each_run: cdktf.booleanToTerraform(struct!.forEachRun),
    for_each_statement: cdktf.booleanToTerraform(struct!.forEachStatement),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggersToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constraint_trigger: {
      value: cdktf.booleanToHclTerraform(struct!.constraintTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    execute_procedure: {
      value: cdktf.stringToHclTerraform(struct!.executeProcedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for_each_run: {
      value: cdktf.booleanToHclTerraform(struct!.forEachRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    for_each_statement: {
      value: cdktf.booleanToHclTerraform(struct!.forEachStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._constraintTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintTrigger = this._constraintTrigger;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._executeProcedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeProcedure = this._executeProcedure;
    }
    if (this._forEachRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEachRun = this._forEachRun;
    }
    if (this._forEachStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEachStatement = this._forEachStatement;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._condition = undefined;
      this._constraintTrigger = undefined;
      this._events = undefined;
      this._executeProcedure = undefined;
      this._forEachRun = undefined;
      this._forEachStatement = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._condition = value.condition;
      this._constraintTrigger = value.constraintTrigger;
      this._events = value.events;
      this._executeProcedure = value.executeProcedure;
      this._forEachRun = value.forEachRun;
      this._forEachStatement = value.forEachStatement;
      this._name = value.name;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // constraint_trigger - computed: false, optional: true, required: false
  private _constraintTrigger?: boolean | cdktf.IResolvable; 
  public get constraintTrigger() {
    return this.getBooleanAttribute('constraint_trigger');
  }
  public set constraintTrigger(value: boolean | cdktf.IResolvable) {
    this._constraintTrigger = value;
  }
  public resetConstraintTrigger() {
    this._constraintTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintTriggerInput() {
    return this._constraintTrigger;
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // execute_procedure - computed: false, optional: false, required: true
  private _executeProcedure?: string; 
  public get executeProcedure() {
    return this.getStringAttribute('execute_procedure');
  }
  public set executeProcedure(value: string) {
    this._executeProcedure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeProcedureInput() {
    return this._executeProcedure;
  }

  // for_each_run - computed: false, optional: true, required: false
  private _forEachRun?: boolean | cdktf.IResolvable; 
  public get forEachRun() {
    return this.getBooleanAttribute('for_each_run');
  }
  public set forEachRun(value: boolean | cdktf.IResolvable) {
    this._forEachRun = value;
  }
  public resetForEachRun() {
    this._forEachRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachRunInput() {
    return this._forEachRun;
  }

  // for_each_statement - computed: false, optional: true, required: false
  private _forEachStatement?: boolean | cdktf.IResolvable; 
  public get forEachStatement() {
    return this.getBooleanAttribute('for_each_statement');
  }
  public set forEachStatement(value: boolean | cdktf.IResolvable) {
    this._forEachStatement = value;
  }
  public resetForEachStatement() {
    this._forEachStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachStatementInput() {
    return this._forEachStatement;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggersOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgres {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#foreign_keys DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#foreign_keys}
  */
  readonly foreignKeys?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeys[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#indexes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#indexes}
  */
  readonly indexes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_deleted DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#json_triggers DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#json_triggers}
  */
  readonly jsonTriggers?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#primary_key DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#primary_key}
  */
  readonly primaryKey?: string[];
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgres | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsToTerraform, false)(struct!.columns),
    foreign_keys: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysToTerraform, false)(struct!.foreignKeys),
    indexes: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexesToTerraform, false)(struct!.indexes),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    json_triggers: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggersToTerraform, false)(struct!.jsonTriggers),
    primary_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKey),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgres | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsList",
    },
    foreign_keys: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysToHclTerraform, false)(struct!.foreignKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysList",
    },
    indexes: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexesToHclTerraform, false)(struct!.indexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexesList",
    },
    is_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.isDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json_triggers: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggersToHclTerraform, false)(struct!.jsonTriggers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggersList",
    },
    primary_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgres | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._foreignKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKeys = this._foreignKeys?.internalValue;
    }
    if (this._indexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes?.internalValue;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._jsonTriggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonTriggers = this._jsonTriggers?.internalValue;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgres | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns.internalValue = undefined;
      this._foreignKeys.internalValue = undefined;
      this._indexes.internalValue = undefined;
      this._isDeleted = undefined;
      this._jsonTriggers.internalValue = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns.internalValue = value.columns;
      this._foreignKeys.internalValue = value.foreignKeys;
      this._indexes.internalValue = value.indexes;
      this._isDeleted = value.isDeleted;
      this._jsonTriggers.internalValue = value.jsonTriggers;
      this._primaryKey = value.primaryKey;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // foreign_keys - computed: false, optional: true, required: false
  private _foreignKeys = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeysList(this, "foreign_keys", false);
  public get foreignKeys() {
    return this._foreignKeys;
  }
  public putForeignKeys(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresForeignKeys[] | cdktf.IResolvable) {
    this._foreignKeys.internalValue = value;
  }
  public resetForeignKeys() {
    this._foreignKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeysInput() {
    return this._foreignKeys.internalValue;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }
  public putIndexes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresIndexes[] | cdktf.IResolvable) {
    this._indexes.internalValue = value;
  }
  public resetIndexes() {
    this._indexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes.internalValue;
  }

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: boolean | cdktf.IResolvable; 
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }
  public set isDeleted(value: boolean | cdktf.IResolvable) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // json_triggers - computed: false, optional: true, required: false
  private _jsonTriggers = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggersList(this, "json_triggers", false);
  public get jsonTriggers() {
    return this._jsonTriggers;
  }
  public putJsonTriggers(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresJsonTriggers[] | cdktf.IResolvable) {
    this._jsonTriggers.internalValue = value;
  }
  public resetJsonTriggers() {
    this._jsonTriggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonTriggersInput() {
    return this._jsonTriggers.internalValue;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: string[]; 
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }
  public set primaryKey(value: string[]) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#auto_increment DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#auto_increment}
  */
  readonly autoIncrement?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_increment: cdktf.booleanToTerraform(struct!.autoIncrement),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_increment: {
      value: cdktf.booleanToHclTerraform(struct!.autoIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncrement = this._autoIncrement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoIncrement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoIncrement = value.autoIncrement;
    }
  }

  // auto_increment - computed: false, optional: true, required: false
  private _autoIncrement?: boolean | cdktf.IResolvable; 
  public get autoIncrement() {
    return this.getBooleanAttribute('auto_increment');
  }
  public set autoIncrement(value: boolean | cdktf.IResolvable) {
    this._autoIncrement = value;
  }
  public resetAutoIncrement() {
    this._autoIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementInput() {
    return this._autoIncrement;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#not_null DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#not_null}
  */
  readonly notNull?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraintsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_null: cdktf.booleanToTerraform(struct!.notNull),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraintsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_null: {
      value: cdktf.booleanToHclTerraform(struct!.notNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNull = this._notNull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notNull = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notNull = value.notNull;
    }
  }

  // not_null - computed: false, optional: true, required: false
  private _notNull?: boolean | cdktf.IResolvable; 
  public get notNull() {
    return this.getBooleanAttribute('not_null');
  }
  public set notNull(value: boolean | cdktf.IResolvable) {
    this._notNull = value;
  }
  public resetNotNull() {
    this._notNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNullInput() {
    return this._notNull;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#attributes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#attributes}
  */
  readonly attributes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#constraints DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#constraints}
  */
  readonly constraints?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#default DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributesToTerraform(struct!.attributes),
    constraints: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraintsToTerraform(struct!.constraints),
    default: cdktf.stringToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributes",
    },
    constraints: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraints",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._constraints.internalValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._constraints.internalValue = value.constraints;
      this._default = value.default;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#table DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#table}
  */
  readonly table: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferencesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferencesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._table = value.table;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#on_delete DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#on_delete}
  */
  readonly onDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#references DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#references}
  */
  readonly references: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferences;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    name: cdktf.stringToTerraform(struct!.name),
    on_delete: cdktf.stringToTerraform(struct!.onDelete),
    references: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferencesToTerraform(struct!.references),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_delete: {
      value: cdktf.stringToHclTerraform(struct!.onDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    references: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferencesToHclTerraform(struct!.references),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferences",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDelete = this._onDelete;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._name = undefined;
      this._onDelete = undefined;
      this._references.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._name = value.name;
      this._onDelete = value.onDelete;
      this._references.internalValue = value.references;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string; 
  public get onDelete() {
    return this.getStringAttribute('on_delete');
  }
  public set onDelete(value: string) {
    this._onDelete = value;
  }
  public resetOnDelete() {
    this._onDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteInput() {
    return this._onDelete;
  }

  // references - computed: false, optional: false, required: true
  private _references = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferencesOutputReference(this, "references");
  public get references() {
    return this._references;
  }
  public putReferences(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysReferences) {
    this._references.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeys[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_unique DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_unique}
  */
  readonly isUnique?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    is_unique: cdktf.booleanToTerraform(struct!.isUnique),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_unique: {
      value: cdktf.booleanToHclTerraform(struct!.isUnique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._isUnique !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUnique = this._isUnique;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._isUnique = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._isUnique = value.isUnique;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // is_unique - computed: false, optional: true, required: false
  private _isUnique?: boolean | cdktf.IResolvable; 
  public get isUnique() {
    return this.getBooleanAttribute('is_unique');
  }
  public set isUnique(value: boolean | cdktf.IResolvable) {
    this._isUnique = value;
  }
  public resetIsUnique() {
    this._isUnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUniqueInput() {
    return this._isUnique;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexesOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqlite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#foreign_keys DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#foreign_keys}
  */
  readonly foreignKeys?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeys[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#indexes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#indexes}
  */
  readonly indexes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_deleted DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#primary_key DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#primary_key}
  */
  readonly primaryKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#strict DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqlite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsToTerraform, false)(struct!.columns),
    foreign_keys: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysToTerraform, false)(struct!.foreignKeys),
    indexes: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexesToTerraform, false)(struct!.indexes),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    primary_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKey),
    strict: cdktf.booleanToTerraform(struct!.strict),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqlite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsList",
    },
    foreign_keys: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysToHclTerraform, false)(struct!.foreignKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysList",
    },
    indexes: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexesToHclTerraform, false)(struct!.indexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexesList",
    },
    is_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.isDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    strict: {
      value: cdktf.booleanToHclTerraform(struct!.strict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqlite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._foreignKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKeys = this._foreignKeys?.internalValue;
    }
    if (this._indexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes?.internalValue;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    if (this._strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqlite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns.internalValue = undefined;
      this._foreignKeys.internalValue = undefined;
      this._indexes.internalValue = undefined;
      this._isDeleted = undefined;
      this._primaryKey = undefined;
      this._strict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns.internalValue = value.columns;
      this._foreignKeys.internalValue = value.foreignKeys;
      this._indexes.internalValue = value.indexes;
      this._isDeleted = value.isDeleted;
      this._primaryKey = value.primaryKey;
      this._strict = value.strict;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // foreign_keys - computed: false, optional: true, required: false
  private _foreignKeys = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeysList(this, "foreign_keys", false);
  public get foreignKeys() {
    return this._foreignKeys;
  }
  public putForeignKeys(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteForeignKeys[] | cdktf.IResolvable) {
    this._foreignKeys.internalValue = value;
  }
  public resetForeignKeys() {
    this._foreignKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeysInput() {
    return this._foreignKeys.internalValue;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }
  public putIndexes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteIndexes[] | cdktf.IResolvable) {
    this._indexes.internalValue = value;
  }
  public resetIndexes() {
    this._indexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes.internalValue;
  }

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: boolean | cdktf.IResolvable; 
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }
  public set isDeleted(value: boolean | cdktf.IResolvable) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: string[]; 
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }
  public set primaryKey(value: string[]) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#auto_increment DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#auto_increment}
  */
  readonly autoIncrement?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_increment: cdktf.booleanToTerraform(struct!.autoIncrement),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_increment: {
      value: cdktf.booleanToHclTerraform(struct!.autoIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncrement = this._autoIncrement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoIncrement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoIncrement = value.autoIncrement;
    }
  }

  // auto_increment - computed: false, optional: true, required: false
  private _autoIncrement?: boolean | cdktf.IResolvable; 
  public get autoIncrement() {
    return this.getBooleanAttribute('auto_increment');
  }
  public set autoIncrement(value: boolean | cdktf.IResolvable) {
    this._autoIncrement = value;
  }
  public resetAutoIncrement() {
    this._autoIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementInput() {
    return this._autoIncrement;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#not_null DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#not_null}
  */
  readonly notNull?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraintsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_null: cdktf.booleanToTerraform(struct!.notNull),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraintsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_null: {
      value: cdktf.booleanToHclTerraform(struct!.notNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNull = this._notNull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notNull = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notNull = value.notNull;
    }
  }

  // not_null - computed: false, optional: true, required: false
  private _notNull?: boolean | cdktf.IResolvable; 
  public get notNull() {
    return this.getBooleanAttribute('not_null');
  }
  public set notNull(value: boolean | cdktf.IResolvable) {
    this._notNull = value;
  }
  public resetNotNull() {
    this._notNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNullInput() {
    return this._notNull;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#attributes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#attributes}
  */
  readonly attributes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#constraints DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#constraints}
  */
  readonly constraints?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#default DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributesToTerraform(struct!.attributes),
    constraints: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraintsToTerraform(struct!.constraints),
    default: cdktf.stringToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributes",
    },
    constraints: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraints",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._constraints.internalValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._constraints.internalValue = value.constraints;
      this._default = value.default;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#table DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#table}
  */
  readonly table: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferencesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferencesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._table = value.table;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#on_delete DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#on_delete}
  */
  readonly onDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#references DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#references}
  */
  readonly references: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferences;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    name: cdktf.stringToTerraform(struct!.name),
    on_delete: cdktf.stringToTerraform(struct!.onDelete),
    references: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferencesToTerraform(struct!.references),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_delete: {
      value: cdktf.stringToHclTerraform(struct!.onDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    references: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferencesToHclTerraform(struct!.references),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferences",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDelete = this._onDelete;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._name = undefined;
      this._onDelete = undefined;
      this._references.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._name = value.name;
      this._onDelete = value.onDelete;
      this._references.internalValue = value.references;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string; 
  public get onDelete() {
    return this.getStringAttribute('on_delete');
  }
  public set onDelete(value: string) {
    this._onDelete = value;
  }
  public resetOnDelete() {
    this._onDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteInput() {
    return this._onDelete;
  }

  // references - computed: false, optional: false, required: true
  private _references = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferencesOutputReference(this, "references");
  public get references() {
    return this._references;
  }
  public putReferences(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysReferences) {
    this._references.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeys[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_unique DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_unique}
  */
  readonly isUnique?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    is_unique: cdktf.booleanToTerraform(struct!.isUnique),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_unique: {
      value: cdktf.booleanToHclTerraform(struct!.isUnique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._isUnique !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUnique = this._isUnique;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._isUnique = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._isUnique = value.isUnique;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // is_unique - computed: false, optional: true, required: false
  private _isUnique?: boolean | cdktf.IResolvable; 
  public get isUnique() {
    return this.getBooleanAttribute('is_unique');
  }
  public set isUnique(value: boolean | cdktf.IResolvable) {
    this._isUnique = value;
  }
  public resetIsUnique() {
    this._isUnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUniqueInput() {
    return this._isUnique;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexesOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqlite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#foreign_keys DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#foreign_keys}
  */
  readonly foreignKeys?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeys[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#indexes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#indexes}
  */
  readonly indexes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_deleted DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#primary_key DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#primary_key}
  */
  readonly primaryKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#strict DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqlite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsToTerraform, false)(struct!.columns),
    foreign_keys: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysToTerraform, false)(struct!.foreignKeys),
    indexes: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexesToTerraform, false)(struct!.indexes),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    primary_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKey),
    strict: cdktf.booleanToTerraform(struct!.strict),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqlite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsList",
    },
    foreign_keys: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysToHclTerraform, false)(struct!.foreignKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysList",
    },
    indexes: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexesToHclTerraform, false)(struct!.indexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexesList",
    },
    is_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.isDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    strict: {
      value: cdktf.booleanToHclTerraform(struct!.strict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqlite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._foreignKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKeys = this._foreignKeys?.internalValue;
    }
    if (this._indexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes?.internalValue;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    if (this._strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqlite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns.internalValue = undefined;
      this._foreignKeys.internalValue = undefined;
      this._indexes.internalValue = undefined;
      this._isDeleted = undefined;
      this._primaryKey = undefined;
      this._strict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns.internalValue = value.columns;
      this._foreignKeys.internalValue = value.foreignKeys;
      this._indexes.internalValue = value.indexes;
      this._isDeleted = value.isDeleted;
      this._primaryKey = value.primaryKey;
      this._strict = value.strict;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // foreign_keys - computed: false, optional: true, required: false
  private _foreignKeys = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeysList(this, "foreign_keys", false);
  public get foreignKeys() {
    return this._foreignKeys;
  }
  public putForeignKeys(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteForeignKeys[] | cdktf.IResolvable) {
    this._foreignKeys.internalValue = value;
  }
  public resetForeignKeys() {
    this._foreignKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeysInput() {
    return this._foreignKeys.internalValue;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }
  public putIndexes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteIndexes[] | cdktf.IResolvable) {
    this._indexes.internalValue = value;
  }
  public resetIndexes() {
    this._indexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes.internalValue;
  }

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: boolean | cdktf.IResolvable; 
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }
  public set isDeleted(value: boolean | cdktf.IResolvable) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: string[]; 
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }
  public set primaryKey(value: string[]) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#auto_increment DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#auto_increment}
  */
  readonly autoIncrement?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_increment: cdktf.booleanToTerraform(struct!.autoIncrement),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_increment: {
      value: cdktf.booleanToHclTerraform(struct!.autoIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncrement = this._autoIncrement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoIncrement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoIncrement = value.autoIncrement;
    }
  }

  // auto_increment - computed: false, optional: true, required: false
  private _autoIncrement?: boolean | cdktf.IResolvable; 
  public get autoIncrement() {
    return this.getBooleanAttribute('auto_increment');
  }
  public set autoIncrement(value: boolean | cdktf.IResolvable) {
    this._autoIncrement = value;
  }
  public resetAutoIncrement() {
    this._autoIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementInput() {
    return this._autoIncrement;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#not_null DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#not_null}
  */
  readonly notNull?: boolean | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraintsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_null: cdktf.booleanToTerraform(struct!.notNull),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraintsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_null: {
      value: cdktf.booleanToHclTerraform(struct!.notNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNull = this._notNull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notNull = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notNull = value.notNull;
    }
  }

  // not_null - computed: false, optional: true, required: false
  private _notNull?: boolean | cdktf.IResolvable; 
  public get notNull() {
    return this.getBooleanAttribute('not_null');
  }
  public set notNull(value: boolean | cdktf.IResolvable) {
    this._notNull = value;
  }
  public resetNotNull() {
    this._notNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNullInput() {
    return this._notNull;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#attributes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#attributes}
  */
  readonly attributes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#constraints DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#constraints}
  */
  readonly constraints?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#default DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributesToTerraform(struct!.attributes),
    constraints: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraintsToTerraform(struct!.constraints),
    default: cdktf.stringToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributes",
    },
    constraints: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraints",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._constraints.internalValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._constraints.internalValue = value.constraints;
      this._default = value.default;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#table DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#table}
  */
  readonly table: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferencesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferencesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._table = value.table;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#on_delete DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#on_delete}
  */
  readonly onDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#references DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#references}
  */
  readonly references: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferences;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    name: cdktf.stringToTerraform(struct!.name),
    on_delete: cdktf.stringToTerraform(struct!.onDelete),
    references: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferencesToTerraform(struct!.references),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_delete: {
      value: cdktf.stringToHclTerraform(struct!.onDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    references: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferencesToHclTerraform(struct!.references),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferences",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDelete = this._onDelete;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._name = undefined;
      this._onDelete = undefined;
      this._references.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._name = value.name;
      this._onDelete = value.onDelete;
      this._references.internalValue = value.references;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string; 
  public get onDelete() {
    return this.getStringAttribute('on_delete');
  }
  public set onDelete(value: string) {
    this._onDelete = value;
  }
  public resetOnDelete() {
    this._onDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteInput() {
    return this._onDelete;
  }

  // references - computed: false, optional: false, required: true
  private _references = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferencesOutputReference(this, "references");
  public get references() {
    return this._references;
  }
  public putReferences(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysReferences) {
    this._references.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeys[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#interval DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#segment_by DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#segment_by}
  */
  readonly segmentBy: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompressionToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    segment_by: cdktf.stringToTerraform(struct!.segmentBy),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompressionToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_by: {
      value: cdktf.stringToHclTerraform(struct!.segmentBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._segmentBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentBy = this._segmentBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._segmentBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._segmentBy = value.segmentBy;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // segment_by - computed: false, optional: false, required: true
  private _segmentBy?: string; 
  public get segmentBy() {
    return this.getStringAttribute('segment_by');
  }
  public set segmentBy(value: string) {
    this._segmentBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentByInput() {
    return this._segmentBy;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#interval DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#interval}
  */
  readonly interval: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetentionToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetentionToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#associated_schema_name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#associated_schema_name}
  */
  readonly associatedSchemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#associated_table_prefix DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#associated_table_prefix}
  */
  readonly associatedTablePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#chunk_time_interval DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#chunk_time_interval}
  */
  readonly chunkTimeInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#compression DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#compression}
  */
  readonly compression?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#create_default_indexes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#create_default_indexes}
  */
  readonly createDefaultIndexes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#data_nodes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#data_nodes}
  */
  readonly dataNodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#if_not_exists DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#migrate_data DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#migrate_data}
  */
  readonly migrateData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#number_partitions DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#number_partitions}
  */
  readonly numberPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#partitioning_column DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#partitioning_column}
  */
  readonly partitioningColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#partitioning_func DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#partitioning_func}
  */
  readonly partitioningFunc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#replication_factor DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#retention DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#retention}
  */
  readonly retention?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetention;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#time_column_name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#time_column_name}
  */
  readonly timeColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#time_partitioning_func DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#time_partitioning_func}
  */
  readonly timePartitioningFunc?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_schema_name: cdktf.stringToTerraform(struct!.associatedSchemaName),
    associated_table_prefix: cdktf.stringToTerraform(struct!.associatedTablePrefix),
    chunk_time_interval: cdktf.stringToTerraform(struct!.chunkTimeInterval),
    compression: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompressionToTerraform(struct!.compression),
    create_default_indexes: cdktf.booleanToTerraform(struct!.createDefaultIndexes),
    data_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataNodes),
    if_not_exists: cdktf.booleanToTerraform(struct!.ifNotExists),
    migrate_data: cdktf.booleanToTerraform(struct!.migrateData),
    number_partitions: cdktf.numberToTerraform(struct!.numberPartitions),
    partitioning_column: cdktf.stringToTerraform(struct!.partitioningColumn),
    partitioning_func: cdktf.stringToTerraform(struct!.partitioningFunc),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    retention: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetentionToTerraform(struct!.retention),
    time_column_name: cdktf.stringToTerraform(struct!.timeColumnName),
    time_partitioning_func: cdktf.stringToTerraform(struct!.timePartitioningFunc),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associated_schema_name: {
      value: cdktf.stringToHclTerraform(struct!.associatedSchemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    associated_table_prefix: {
      value: cdktf.stringToHclTerraform(struct!.associatedTablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_time_interval: {
      value: cdktf.stringToHclTerraform(struct!.chunkTimeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompression",
    },
    create_default_indexes: {
      value: cdktf.booleanToHclTerraform(struct!.createDefaultIndexes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataNodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    if_not_exists: {
      value: cdktf.booleanToHclTerraform(struct!.ifNotExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    migrate_data: {
      value: cdktf.booleanToHclTerraform(struct!.migrateData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_partitions: {
      value: cdktf.numberToHclTerraform(struct!.numberPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partitioning_column: {
      value: cdktf.stringToHclTerraform(struct!.partitioningColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partitioning_func: {
      value: cdktf.stringToHclTerraform(struct!.partitioningFunc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetention",
    },
    time_column_name: {
      value: cdktf.stringToHclTerraform(struct!.timeColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_partitioning_func: {
      value: cdktf.stringToHclTerraform(struct!.timePartitioningFunc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedSchemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedSchemaName = this._associatedSchemaName;
    }
    if (this._associatedTablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedTablePrefix = this._associatedTablePrefix;
    }
    if (this._chunkTimeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkTimeInterval = this._chunkTimeInterval;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._createDefaultIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDefaultIndexes = this._createDefaultIndexes;
    }
    if (this._dataNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNodes = this._dataNodes;
    }
    if (this._ifNotExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifNotExists = this._ifNotExists;
    }
    if (this._migrateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrateData = this._migrateData;
    }
    if (this._numberPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberPartitions = this._numberPartitions;
    }
    if (this._partitioningColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitioningColumn = this._partitioningColumn;
    }
    if (this._partitioningFunc !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitioningFunc = this._partitioningFunc;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._timeColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeColumnName = this._timeColumnName;
    }
    if (this._timePartitioningFunc !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePartitioningFunc = this._timePartitioningFunc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associatedSchemaName = undefined;
      this._associatedTablePrefix = undefined;
      this._chunkTimeInterval = undefined;
      this._compression.internalValue = undefined;
      this._createDefaultIndexes = undefined;
      this._dataNodes = undefined;
      this._ifNotExists = undefined;
      this._migrateData = undefined;
      this._numberPartitions = undefined;
      this._partitioningColumn = undefined;
      this._partitioningFunc = undefined;
      this._replicationFactor = undefined;
      this._retention.internalValue = undefined;
      this._timeColumnName = undefined;
      this._timePartitioningFunc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associatedSchemaName = value.associatedSchemaName;
      this._associatedTablePrefix = value.associatedTablePrefix;
      this._chunkTimeInterval = value.chunkTimeInterval;
      this._compression.internalValue = value.compression;
      this._createDefaultIndexes = value.createDefaultIndexes;
      this._dataNodes = value.dataNodes;
      this._ifNotExists = value.ifNotExists;
      this._migrateData = value.migrateData;
      this._numberPartitions = value.numberPartitions;
      this._partitioningColumn = value.partitioningColumn;
      this._partitioningFunc = value.partitioningFunc;
      this._replicationFactor = value.replicationFactor;
      this._retention.internalValue = value.retention;
      this._timeColumnName = value.timeColumnName;
      this._timePartitioningFunc = value.timePartitioningFunc;
    }
  }

  // associated_schema_name - computed: false, optional: true, required: false
  private _associatedSchemaName?: string; 
  public get associatedSchemaName() {
    return this.getStringAttribute('associated_schema_name');
  }
  public set associatedSchemaName(value: string) {
    this._associatedSchemaName = value;
  }
  public resetAssociatedSchemaName() {
    this._associatedSchemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedSchemaNameInput() {
    return this._associatedSchemaName;
  }

  // associated_table_prefix - computed: false, optional: true, required: false
  private _associatedTablePrefix?: string; 
  public get associatedTablePrefix() {
    return this.getStringAttribute('associated_table_prefix');
  }
  public set associatedTablePrefix(value: string) {
    this._associatedTablePrefix = value;
  }
  public resetAssociatedTablePrefix() {
    this._associatedTablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedTablePrefixInput() {
    return this._associatedTablePrefix;
  }

  // chunk_time_interval - computed: false, optional: true, required: false
  private _chunkTimeInterval?: string; 
  public get chunkTimeInterval() {
    return this.getStringAttribute('chunk_time_interval');
  }
  public set chunkTimeInterval(value: string) {
    this._chunkTimeInterval = value;
  }
  public resetChunkTimeInterval() {
    this._chunkTimeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkTimeIntervalInput() {
    return this._chunkTimeInterval;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // create_default_indexes - computed: false, optional: true, required: false
  private _createDefaultIndexes?: boolean | cdktf.IResolvable; 
  public get createDefaultIndexes() {
    return this.getBooleanAttribute('create_default_indexes');
  }
  public set createDefaultIndexes(value: boolean | cdktf.IResolvable) {
    this._createDefaultIndexes = value;
  }
  public resetCreateDefaultIndexes() {
    this._createDefaultIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDefaultIndexesInput() {
    return this._createDefaultIndexes;
  }

  // data_nodes - computed: false, optional: true, required: false
  private _dataNodes?: string[]; 
  public get dataNodes() {
    return this.getListAttribute('data_nodes');
  }
  public set dataNodes(value: string[]) {
    this._dataNodes = value;
  }
  public resetDataNodes() {
    this._dataNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodesInput() {
    return this._dataNodes;
  }

  // if_not_exists - computed: false, optional: true, required: false
  private _ifNotExists?: boolean | cdktf.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktf.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
  }

  // migrate_data - computed: false, optional: true, required: false
  private _migrateData?: boolean | cdktf.IResolvable; 
  public get migrateData() {
    return this.getBooleanAttribute('migrate_data');
  }
  public set migrateData(value: boolean | cdktf.IResolvable) {
    this._migrateData = value;
  }
  public resetMigrateData() {
    this._migrateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateDataInput() {
    return this._migrateData;
  }

  // number_partitions - computed: false, optional: true, required: false
  private _numberPartitions?: number; 
  public get numberPartitions() {
    return this.getNumberAttribute('number_partitions');
  }
  public set numberPartitions(value: number) {
    this._numberPartitions = value;
  }
  public resetNumberPartitions() {
    this._numberPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberPartitionsInput() {
    return this._numberPartitions;
  }

  // partitioning_column - computed: false, optional: true, required: false
  private _partitioningColumn?: string; 
  public get partitioningColumn() {
    return this.getStringAttribute('partitioning_column');
  }
  public set partitioningColumn(value: string) {
    this._partitioningColumn = value;
  }
  public resetPartitioningColumn() {
    this._partitioningColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningColumnInput() {
    return this._partitioningColumn;
  }

  // partitioning_func - computed: false, optional: true, required: false
  private _partitioningFunc?: string; 
  public get partitioningFunc() {
    return this.getStringAttribute('partitioning_func');
  }
  public set partitioningFunc(value: string) {
    this._partitioningFunc = value;
  }
  public resetPartitioningFunc() {
    this._partitioningFunc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningFuncInput() {
    return this._partitioningFunc;
  }

  // replication_factor - computed: false, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableRetention) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // time_column_name - computed: false, optional: true, required: false
  private _timeColumnName?: string; 
  public get timeColumnName() {
    return this.getStringAttribute('time_column_name');
  }
  public set timeColumnName(value: string) {
    this._timeColumnName = value;
  }
  public resetTimeColumnName() {
    this._timeColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeColumnNameInput() {
    return this._timeColumnName;
  }

  // time_partitioning_func - computed: false, optional: true, required: false
  private _timePartitioningFunc?: string; 
  public get timePartitioningFunc() {
    return this.getStringAttribute('time_partitioning_func');
  }
  public set timePartitioningFunc(value: string) {
    this._timePartitioningFunc = value;
  }
  public resetTimePartitioningFunc() {
    this._timePartitioningFunc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePartitioningFuncInput() {
    return this._timePartitioningFunc;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_unique DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_unique}
  */
  readonly isUnique?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#type DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexesToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    is_unique: cdktf.booleanToTerraform(struct!.isUnique),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexesToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_unique: {
      value: cdktf.booleanToHclTerraform(struct!.isUnique),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._isUnique !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUnique = this._isUnique;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._isUnique = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._isUnique = value.isUnique;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // is_unique - computed: false, optional: true, required: false
  private _isUnique?: boolean | cdktf.IResolvable; 
  public get isUnique() {
    return this.getBooleanAttribute('is_unique');
  }
  public set isUnique(value: boolean | cdktf.IResolvable) {
    this._isUnique = value;
  }
  public resetIsUnique() {
    this._isUnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUniqueInput() {
    return this._isUnique;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexesOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#arguments DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#arguments}
  */
  readonly arguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#condition DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#constraint_trigger DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#constraint_trigger}
  */
  readonly constraintTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#events DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#execute_procedure DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#execute_procedure}
  */
  readonly executeProcedure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#for_each_run DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#for_each_run}
  */
  readonly forEachRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#for_each_statement DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#for_each_statement}
  */
  readonly forEachStatement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggersToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    condition: cdktf.stringToTerraform(struct!.condition),
    constraint_trigger: cdktf.booleanToTerraform(struct!.constraintTrigger),
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    execute_procedure: cdktf.stringToTerraform(struct!.executeProcedure),
    for_each_run: cdktf.booleanToTerraform(struct!.forEachRun),
    for_each_statement: cdktf.booleanToTerraform(struct!.forEachStatement),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggersToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constraint_trigger: {
      value: cdktf.booleanToHclTerraform(struct!.constraintTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    execute_procedure: {
      value: cdktf.stringToHclTerraform(struct!.executeProcedure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for_each_run: {
      value: cdktf.booleanToHclTerraform(struct!.forEachRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    for_each_statement: {
      value: cdktf.booleanToHclTerraform(struct!.forEachStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._constraintTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintTrigger = this._constraintTrigger;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._executeProcedure !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeProcedure = this._executeProcedure;
    }
    if (this._forEachRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEachRun = this._forEachRun;
    }
    if (this._forEachStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEachStatement = this._forEachStatement;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._condition = undefined;
      this._constraintTrigger = undefined;
      this._events = undefined;
      this._executeProcedure = undefined;
      this._forEachRun = undefined;
      this._forEachStatement = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._condition = value.condition;
      this._constraintTrigger = value.constraintTrigger;
      this._events = value.events;
      this._executeProcedure = value.executeProcedure;
      this._forEachRun = value.forEachRun;
      this._forEachStatement = value.forEachStatement;
      this._name = value.name;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // constraint_trigger - computed: false, optional: true, required: false
  private _constraintTrigger?: boolean | cdktf.IResolvable; 
  public get constraintTrigger() {
    return this.getBooleanAttribute('constraint_trigger');
  }
  public set constraintTrigger(value: boolean | cdktf.IResolvable) {
    this._constraintTrigger = value;
  }
  public resetConstraintTrigger() {
    this._constraintTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintTriggerInput() {
    return this._constraintTrigger;
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // execute_procedure - computed: false, optional: false, required: true
  private _executeProcedure?: string; 
  public get executeProcedure() {
    return this.getStringAttribute('execute_procedure');
  }
  public set executeProcedure(value: string) {
    this._executeProcedure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeProcedureInput() {
    return this._executeProcedure;
  }

  // for_each_run - computed: false, optional: true, required: false
  private _forEachRun?: boolean | cdktf.IResolvable; 
  public get forEachRun() {
    return this.getBooleanAttribute('for_each_run');
  }
  public set forEachRun(value: boolean | cdktf.IResolvable) {
    this._forEachRun = value;
  }
  public resetForEachRun() {
    this._forEachRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachRunInput() {
    return this._forEachRun;
  }

  // for_each_statement - computed: false, optional: true, required: false
  private _forEachStatement?: boolean | cdktf.IResolvable; 
  public get forEachStatement() {
    return this.getBooleanAttribute('for_each_statement');
  }
  public set forEachStatement(value: boolean | cdktf.IResolvable) {
    this._forEachStatement = value;
  }
  public resetForEachStatement() {
    this._forEachStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachStatementInput() {
    return this._forEachStatement;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggersOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#foreign_keys DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#foreign_keys}
  */
  readonly foreignKeys?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeys[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#hypertable DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#hypertable}
  */
  readonly hypertable?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#indexes DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#indexes}
  */
  readonly indexes?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#is_deleted DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#primary_key DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#primary_key}
  */
  readonly primaryKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#triggers DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#triggers}
  */
  readonly triggers?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggers[] | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsToTerraform, false)(struct!.columns),
    foreign_keys: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysToTerraform, false)(struct!.foreignKeys),
    hypertable: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableToTerraform(struct!.hypertable),
    indexes: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexesToTerraform, false)(struct!.indexes),
    is_deleted: cdktf.booleanToTerraform(struct!.isDeleted),
    primary_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKey),
    triggers: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggersToTerraform, false)(struct!.triggers),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsList",
    },
    foreign_keys: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysToHclTerraform, false)(struct!.foreignKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysList",
    },
    hypertable: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableToHclTerraform(struct!.hypertable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertable",
    },
    indexes: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexesToHclTerraform, false)(struct!.indexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexesList",
    },
    is_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.isDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    triggers: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggersToHclTerraform, false)(struct!.triggers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._foreignKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKeys = this._foreignKeys?.internalValue;
    }
    if (this._hypertable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypertable = this._hypertable?.internalValue;
    }
    if (this._indexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes?.internalValue;
    }
    if (this._isDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeleted = this._isDeleted;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    if (this._triggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns.internalValue = undefined;
      this._foreignKeys.internalValue = undefined;
      this._hypertable.internalValue = undefined;
      this._indexes.internalValue = undefined;
      this._isDeleted = undefined;
      this._primaryKey = undefined;
      this._triggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns.internalValue = value.columns;
      this._foreignKeys.internalValue = value.foreignKeys;
      this._hypertable.internalValue = value.hypertable;
      this._indexes.internalValue = value.indexes;
      this._isDeleted = value.isDeleted;
      this._primaryKey = value.primaryKey;
      this._triggers.internalValue = value.triggers;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // foreign_keys - computed: false, optional: true, required: false
  private _foreignKeys = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeysList(this, "foreign_keys", false);
  public get foreignKeys() {
    return this._foreignKeys;
  }
  public putForeignKeys(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbForeignKeys[] | cdktf.IResolvable) {
    this._foreignKeys.internalValue = value;
  }
  public resetForeignKeys() {
    this._foreignKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeysInput() {
    return this._foreignKeys.internalValue;
  }

  // hypertable - computed: false, optional: true, required: false
  private _hypertable = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertableOutputReference(this, "hypertable");
  public get hypertable() {
    return this._hypertable;
  }
  public putHypertable(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbHypertable) {
    this._hypertable.internalValue = value;
  }
  public resetHypertable() {
    this._hypertable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypertableInput() {
    return this._hypertable.internalValue;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }
  public putIndexes(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbIndexes[] | cdktf.IResolvable) {
    this._indexes.internalValue = value;
  }
  public resetIndexes() {
    this._indexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes.internalValue;
  }

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: boolean | cdktf.IResolvable; 
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }
  public set isDeleted(value: boolean | cdktf.IResolvable) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: string[]; 
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }
  public set primaryKey(value: string[]) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  public resetTriggers() {
    this._triggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#cassandra DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#cassandra}
  */
  readonly cassandra?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandra;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#cockroachdb DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#cockroachdb}
  */
  readonly cockroachdb?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdb;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#mysql DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#mysql}
  */
  readonly mysql?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#postgres DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#postgres}
  */
  readonly postgres?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgres;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#rqlite DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#rqlite}
  */
  readonly rqlite?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqlite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#sqlite DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#sqlite}
  */
  readonly sqlite?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqlite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#timescaledb DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#timescaledb}
  */
  readonly timescaledb?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledb;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cassandra: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraToTerraform(struct!.cassandra),
    cockroachdb: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbToTerraform(struct!.cockroachdb),
    mysql: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlToTerraform(struct!.mysql),
    postgres: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresToTerraform(struct!.postgres),
    rqlite: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteToTerraform(struct!.rqlite),
    sqlite: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteToTerraform(struct!.sqlite),
    timescaledb: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbToTerraform(struct!.timescaledb),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cassandra: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraToHclTerraform(struct!.cassandra),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandra",
    },
    cockroachdb: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbToHclTerraform(struct!.cockroachdb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdb",
    },
    mysql: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysql",
    },
    postgres: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresToHclTerraform(struct!.postgres),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgres",
    },
    rqlite: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteToHclTerraform(struct!.rqlite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqlite",
    },
    sqlite: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteToHclTerraform(struct!.sqlite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqlite",
    },
    timescaledb: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbToHclTerraform(struct!.timescaledb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cassandra?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cassandra = this._cassandra?.internalValue;
    }
    if (this._cockroachdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cockroachdb = this._cockroachdb?.internalValue;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._postgres?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgres = this._postgres?.internalValue;
    }
    if (this._rqlite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rqlite = this._rqlite?.internalValue;
    }
    if (this._sqlite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlite = this._sqlite?.internalValue;
    }
    if (this._timescaledb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timescaledb = this._timescaledb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cassandra.internalValue = undefined;
      this._cockroachdb.internalValue = undefined;
      this._mysql.internalValue = undefined;
      this._postgres.internalValue = undefined;
      this._rqlite.internalValue = undefined;
      this._sqlite.internalValue = undefined;
      this._timescaledb.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cassandra.internalValue = value.cassandra;
      this._cockroachdb.internalValue = value.cockroachdb;
      this._mysql.internalValue = value.mysql;
      this._postgres.internalValue = value.postgres;
      this._rqlite.internalValue = value.rqlite;
      this._sqlite.internalValue = value.sqlite;
      this._timescaledb.internalValue = value.timescaledb;
    }
  }

  // cassandra - computed: false, optional: true, required: false
  private _cassandra = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandraOutputReference(this, "cassandra");
  public get cassandra() {
    return this._cassandra;
  }
  public putCassandra(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCassandra) {
    this._cassandra.internalValue = value;
  }
  public resetCassandra() {
    this._cassandra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraInput() {
    return this._cassandra.internalValue;
  }

  // cockroachdb - computed: false, optional: true, required: false
  private _cockroachdb = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdbOutputReference(this, "cockroachdb");
  public get cockroachdb() {
    return this._cockroachdb;
  }
  public putCockroachdb(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaCockroachdb) {
    this._cockroachdb.internalValue = value;
  }
  public resetCockroachdb() {
    this._cockroachdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cockroachdbInput() {
    return this._cockroachdb.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // postgres - computed: false, optional: true, required: false
  private _postgres = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgresOutputReference(this, "postgres");
  public get postgres() {
    return this._postgres;
  }
  public putPostgres(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaPostgres) {
    this._postgres.internalValue = value;
  }
  public resetPostgres() {
    this._postgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInput() {
    return this._postgres.internalValue;
  }

  // rqlite - computed: false, optional: true, required: false
  private _rqlite = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqliteOutputReference(this, "rqlite");
  public get rqlite() {
    return this._rqlite;
  }
  public putRqlite(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaRqlite) {
    this._rqlite.internalValue = value;
  }
  public resetRqlite() {
    this._rqlite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rqliteInput() {
    return this._rqlite.internalValue;
  }

  // sqlite - computed: false, optional: true, required: false
  private _sqlite = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqliteOutputReference(this, "sqlite");
  public get sqlite() {
    return this._sqlite;
  }
  public putSqlite(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaSqlite) {
    this._sqlite.internalValue = value;
  }
  public resetSqlite() {
    this._sqlite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqliteInput() {
    return this._sqlite.internalValue;
  }

  // timescaledb - computed: false, optional: true, required: false
  private _timescaledb = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledbOutputReference(this, "timescaledb");
  public get timescaledb() {
    return this._timescaledb;
  }
  public putTimescaledb(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaTimescaledb) {
    this._timescaledb.internalValue = value;
  }
  public resetTimescaledb() {
    this._timescaledb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timescaledbInput() {
    return this._timescaledb.internalValue;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#int DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#int}
  */
  readonly int?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#str DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#str}
  */
  readonly str?: string;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValueToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    int: cdktf.numberToTerraform(struct!.int),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValueToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValue | cdktf.IResolvable): any {
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

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValue | cdktf.IResolvable | undefined) {
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
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#column DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#value DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#value}
  */
  readonly value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValue;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValueToTerraform(struct!.value),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._value.internalValue = value.value;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // value - computed: false, optional: false, required: true
  private _value = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#columns DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#columns}
  */
  readonly columns: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumns[] | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsToTerraform, false)(struct!.columns),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns.internalValue = value.columns;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRows[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsOutputReference {
    return new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#rows DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#rows}
  */
  readonly rows: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRows[] | cdktf.IResolvable;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rows: cdktf.listMapper(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsToTerraform, false)(struct!.rows),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rows: {
      value: cdktf.listMapperHcl(dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rows.internalValue = value.rows;
    }
  }

  // rows - computed: false, optional: false, required: true
  private _rows = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }
}
export interface DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#database DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#name DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#requires DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#requires}
  */
  readonly requires?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#schema DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#schema}
  */
  readonly schema?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchema;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#seed_data DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest#seed_data}
  */
  readonly seedData?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedData;
}

export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecToTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    name: cdktf.stringToTerraform(struct!.name),
    requires: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requires),
    schema: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaToTerraform(struct!.schema),
    seed_data: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataToTerraform(struct!.seedData),
  }
}


export function dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecToHclTerraform(struct?: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requires: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requires),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schema: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchema",
    },
    seed_data: {
      value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataToHclTerraform(struct!.seedData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requires !== undefined) {
      hasAnyValues = true;
      internalValueResult.requires = this._requires;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._seedData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedData = this._seedData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._name = undefined;
      this._requires = undefined;
      this._schema.internalValue = undefined;
      this._seedData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._name = value.name;
      this._requires = value.requires;
      this._schema.internalValue = value.schema;
      this._seedData.internalValue = value.seedData;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // requires - computed: false, optional: true, required: false
  private _requires?: string[]; 
  public get requires() {
    return this.getListAttribute('requires');
  }
  public set requires(value: string[]) {
    this._requires = value;
  }
  public resetRequires() {
    this._requires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresInput() {
    return this._requires;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // seed_data - computed: false, optional: true, required: false
  private _seedData = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedDataOutputReference(this, "seed_data");
  public get seedData() {
    return this._seedData;
  }
  public putSeedData(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecSeedData) {
    this._seedData.internalValue = value;
  }
  public resetSeedData() {
    this._seedData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedDataInput() {
    return this._seedData.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest k8s_schemas_schemahero_io_table_v1alpha4_manifest}
*/
export class DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_schemas_schemahero_io_table_v1alpha4_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest to import
  * @param importFromId The id of the existing DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSchemasSchemaheroIoTableV1Alpha4Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_schemas_schemahero_io_table_v1alpha4_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/schemas_schemahero_io_table_v1alpha4_manifest k8s_schemas_schemahero_io_table_v1alpha4_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_schemas_schemahero_io_table_v1alpha4_manifest',
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
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
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
      metadata: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestMetadata",
      },
      spec: {
        value: dataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchemasSchemaheroIoTableV1Alpha4ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
