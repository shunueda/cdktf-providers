// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SStorageK8SIoStorageClassV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * allowVolumeExpansion shows whether the storage class allow volume expand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#allow_volume_expansion DataK8SStorageK8SIoStorageClassV1Manifest#allow_volume_expansion}
  */
  readonly allowVolumeExpansion?: boolean | cdktf.IResolvable;
  /**
  * allowedTopologies restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#allowed_topologies DataK8SStorageK8SIoStorageClassV1Manifest#allowed_topologies}
  */
  readonly allowedTopologies?: DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologies[] | cdktf.IResolvable;
  /**
  * provisioner indicates the type of the provisioner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#k8s_provisioner DataK8SStorageK8SIoStorageClassV1Manifest#k8s_provisioner}
  */
  readonly k8SProvisioner: string;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#metadata DataK8SStorageK8SIoStorageClassV1Manifest#metadata}
  */
  readonly metadata: DataK8SStorageK8SIoStorageClassV1ManifestMetadata;
  /**
  * mountOptions controls the mountOptions for dynamically provisioned PersistentVolumes of this storage class. e.g. ['ro', 'soft']. Not validated - mount of the PVs will simply fail if one is invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#mount_options DataK8SStorageK8SIoStorageClassV1Manifest#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * parameters holds the parameters for the provisioner that should create volumes of this storage class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#parameters DataK8SStorageK8SIoStorageClassV1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * reclaimPolicy controls the reclaimPolicy for dynamically provisioned PersistentVolumes of this storage class. Defaults to Delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#reclaim_policy DataK8SStorageK8SIoStorageClassV1Manifest#reclaim_policy}
  */
  readonly reclaimPolicy?: string;
  /**
  * volumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound. When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#volume_binding_mode DataK8SStorageK8SIoStorageClassV1Manifest#volume_binding_mode}
  */
  readonly volumeBindingMode?: string;
}
export interface DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#key DataK8SStorageK8SIoStorageClassV1Manifest#key}
  */
  readonly key: string;
  /**
  * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#values DataK8SStorageK8SIoStorageClassV1Manifest#values}
  */
  readonly values: string[];
}

export function dataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressionsToTerraform(struct?: DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressionsToHclTerraform(struct?: DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressionsOutputReference {
    return new DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologies {
  /**
  * A list of topology selector requirements by labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#match_label_expressions DataK8SStorageK8SIoStorageClassV1Manifest#match_label_expressions}
  */
  readonly matchLabelExpressions?: DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressions[] | cdktf.IResolvable;
}

export function dataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesToTerraform(struct?: DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_label_expressions: cdktf.listMapper(dataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressionsToTerraform, false)(struct!.matchLabelExpressions),
  }
}


export function dataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesToHclTerraform(struct?: DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_label_expressions: {
      value: cdktf.listMapperHcl(dataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressionsToHclTerraform, false)(struct!.matchLabelExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabelExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelExpressions = this._matchLabelExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabelExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabelExpressions.internalValue = value.matchLabelExpressions;
    }
  }

  // match_label_expressions - computed: false, optional: true, required: false
  private _matchLabelExpressions = new DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressionsList(this, "match_label_expressions", false);
  public get matchLabelExpressions() {
    return this._matchLabelExpressions;
  }
  public putMatchLabelExpressions(value: DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesMatchLabelExpressions[] | cdktf.IResolvable) {
    this._matchLabelExpressions.internalValue = value;
  }
  public resetMatchLabelExpressions() {
    this._matchLabelExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelExpressionsInput() {
    return this._matchLabelExpressions.internalValue;
  }
}

export class DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesOutputReference {
    return new DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SStorageK8SIoStorageClassV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#annotations DataK8SStorageK8SIoStorageClassV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#labels DataK8SStorageK8SIoStorageClassV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#name DataK8SStorageK8SIoStorageClassV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SStorageK8SIoStorageClassV1ManifestMetadataToTerraform(struct?: DataK8SStorageK8SIoStorageClassV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SStorageK8SIoStorageClassV1ManifestMetadataToHclTerraform(struct?: DataK8SStorageK8SIoStorageClassV1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageK8SIoStorageClassV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageK8SIoStorageClassV1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageK8SIoStorageClassV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest k8s_storage_k8s_io_storage_class_v1_manifest}
*/
export class DataK8SStorageK8SIoStorageClassV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_storage_k8s_io_storage_class_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SStorageK8SIoStorageClassV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SStorageK8SIoStorageClassV1Manifest to import
  * @param importFromId The id of the existing DataK8SStorageK8SIoStorageClassV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SStorageK8SIoStorageClassV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_storage_k8s_io_storage_class_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/storage_k8s_io_storage_class_v1_manifest k8s_storage_k8s_io_storage_class_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SStorageK8SIoStorageClassV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SStorageK8SIoStorageClassV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_storage_k8s_io_storage_class_v1_manifest',
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
    this._allowVolumeExpansion = config.allowVolumeExpansion;
    this._allowedTopologies.internalValue = config.allowedTopologies;
    this._k8SProvisioner = config.k8SProvisioner;
    this._metadata.internalValue = config.metadata;
    this._mountOptions = config.mountOptions;
    this._parameters = config.parameters;
    this._reclaimPolicy = config.reclaimPolicy;
    this._volumeBindingMode = config.volumeBindingMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_volume_expansion - computed: false, optional: true, required: false
  private _allowVolumeExpansion?: boolean | cdktf.IResolvable; 
  public get allowVolumeExpansion() {
    return this.getBooleanAttribute('allow_volume_expansion');
  }
  public set allowVolumeExpansion(value: boolean | cdktf.IResolvable) {
    this._allowVolumeExpansion = value;
  }
  public resetAllowVolumeExpansion() {
    this._allowVolumeExpansion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVolumeExpansionInput() {
    return this._allowVolumeExpansion;
  }

  // allowed_topologies - computed: false, optional: true, required: false
  private _allowedTopologies = new DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesList(this, "allowed_topologies", false);
  public get allowedTopologies() {
    return this._allowedTopologies;
  }
  public putAllowedTopologies(value: DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologies[] | cdktf.IResolvable) {
    this._allowedTopologies.internalValue = value;
  }
  public resetAllowedTopologies() {
    this._allowedTopologies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTopologiesInput() {
    return this._allowedTopologies.internalValue;
  }

  // k8s_provisioner - computed: false, optional: false, required: true
  private _k8SProvisioner?: string; 
  public get k8SProvisioner() {
    return this.getStringAttribute('k8s_provisioner');
  }
  public set k8SProvisioner(value: string) {
    this._k8SProvisioner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SProvisionerInput() {
    return this._k8SProvisioner;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SStorageK8SIoStorageClassV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SStorageK8SIoStorageClassV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[]; 
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }
  public set mountOptions(value: string[]) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // reclaim_policy - computed: false, optional: true, required: false
  private _reclaimPolicy?: string; 
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }
  public set reclaimPolicy(value: string) {
    this._reclaimPolicy = value;
  }
  public resetReclaimPolicy() {
    this._reclaimPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimPolicyInput() {
    return this._reclaimPolicy;
  }

  // volume_binding_mode - computed: false, optional: true, required: false
  private _volumeBindingMode?: string; 
  public get volumeBindingMode() {
    return this.getStringAttribute('volume_binding_mode');
  }
  public set volumeBindingMode(value: string) {
    this._volumeBindingMode = value;
  }
  public resetVolumeBindingMode() {
    this._volumeBindingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeBindingModeInput() {
    return this._volumeBindingMode;
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
      allow_volume_expansion: cdktf.booleanToTerraform(this._allowVolumeExpansion),
      allowed_topologies: cdktf.listMapper(dataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesToTerraform, false)(this._allowedTopologies.internalValue),
      k8s_provisioner: cdktf.stringToTerraform(this._k8SProvisioner),
      metadata: dataK8SStorageK8SIoStorageClassV1ManifestMetadataToTerraform(this._metadata.internalValue),
      mount_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mountOptions),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      reclaim_policy: cdktf.stringToTerraform(this._reclaimPolicy),
      volume_binding_mode: cdktf.stringToTerraform(this._volumeBindingMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_volume_expansion: {
        value: cdktf.booleanToHclTerraform(this._allowVolumeExpansion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_topologies: {
        value: cdktf.listMapperHcl(dataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesToHclTerraform, false)(this._allowedTopologies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SStorageK8SIoStorageClassV1ManifestAllowedTopologiesList",
      },
      k8s_provisioner: {
        value: cdktf.stringToHclTerraform(this._k8SProvisioner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: dataK8SStorageK8SIoStorageClassV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStorageK8SIoStorageClassV1ManifestMetadata",
      },
      mount_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mountOptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      reclaim_policy: {
        value: cdktf.stringToHclTerraform(this._reclaimPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_binding_mode: {
        value: cdktf.stringToHclTerraform(this._volumeBindingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
