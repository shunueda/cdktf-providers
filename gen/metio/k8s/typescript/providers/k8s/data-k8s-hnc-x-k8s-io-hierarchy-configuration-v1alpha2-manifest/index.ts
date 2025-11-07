// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#metadata DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadata;
  /**
  * HierarchySpec defines the desired state of Hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#spec DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpec;
}
export interface DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#annotations DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#labels DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#name DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#namespace DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotations {
  /**
  * Key is the name of the label or annotation. It must conform to the normal rules for Kubernetes label/annotation keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#key DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Value is the value of the label or annotation. It must confirm to the normal rules for Kubernetes label or annoation values, which are far more restrictive for labels than for anntations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#value DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotationsToTerraform(struct?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotationsToHclTerraform(struct?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotationsOutputReference {
    return new DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabels {
  /**
  * Key is the name of the label or annotation. It must conform to the normal rules for Kubernetes label/annotation keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#key DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Value is the value of the label or annotation. It must confirm to the normal rules for Kubernetes label or annoation values, which are far more restrictive for labels than for anntations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#value DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabelsToTerraform(struct?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabelsToHclTerraform(struct?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabels | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabelsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabels[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabelsOutputReference {
    return new DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpec {
  /**
  * AllowCascadingDeletion indicates if the subnamespaces of this namespace are allowed to cascading delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#allow_cascading_deletion DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#allow_cascading_deletion}
  */
  readonly allowCascadingDeletion?: boolean | cdktf.IResolvable;
  /**
  * Annotations is a list of annotations and values to apply to the current namespace and all of its descendants. All annotation keys must match a regex specified on the command line by --managed-namespace-annotation. A namespace cannot have a KVP that conflicts with one of its ancestors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#annotations DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#annotations}
  */
  readonly annotations?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotations[] | cdktf.IResolvable;
  /**
  * Lables is a list of labels and values to apply to the current namespace and all of its descendants. All label keys must match a regex specified on the command line by --managed-namespace-label. A namespace cannot have a KVP that conflicts with one of its ancestors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#labels DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#labels}
  */
  readonly labels?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabels[] | cdktf.IResolvable;
  /**
  * Parent indicates the parent of this namespace, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#parent DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest#parent}
  */
  readonly parent?: string;
}

export function dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecToTerraform(struct?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_cascading_deletion: cdktf.booleanToTerraform(struct!.allowCascadingDeletion),
    annotations: cdktf.listMapper(dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotationsToTerraform, false)(struct!.annotations),
    labels: cdktf.listMapper(dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabelsToTerraform, false)(struct!.labels),
    parent: cdktf.stringToTerraform(struct!.parent),
  }
}


export function dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_cascading_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.allowCascadingDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    annotations: {
      value: cdktf.listMapperHcl(dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotationsList",
    },
    labels: {
      value: cdktf.listMapperHcl(dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabelsToHclTerraform, false)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabelsList",
    },
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCascadingDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCascadingDeletion = this._allowCascadingDeletion;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCascadingDeletion = undefined;
      this._annotations.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._parent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCascadingDeletion = value.allowCascadingDeletion;
      this._annotations.internalValue = value.annotations;
      this._labels.internalValue = value.labels;
      this._parent = value.parent;
    }
  }

  // allow_cascading_deletion - computed: false, optional: true, required: false
  private _allowCascadingDeletion?: boolean | cdktf.IResolvable; 
  public get allowCascadingDeletion() {
    return this.getBooleanAttribute('allow_cascading_deletion');
  }
  public set allowCascadingDeletion(value: boolean | cdktf.IResolvable) {
    this._allowCascadingDeletion = value;
  }
  public resetAllowCascadingDeletion() {
    this._allowCascadingDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCascadingDeletionInput() {
    return this._allowCascadingDeletion;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations = new DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotationsList(this, "annotations", false);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest k8s_hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest}
*/
export class DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest k8s_hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hnc_x_k8s_io_hierarchy_configuration_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpec) {
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
      metadata: dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHncXK8SIoHierarchyConfigurationV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
