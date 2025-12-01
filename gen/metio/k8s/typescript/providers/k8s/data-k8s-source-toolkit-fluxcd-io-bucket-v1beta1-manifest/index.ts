// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#metadata DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadata;
  /**
  * BucketSpec defines the desired state of an S3 compatible bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#spec DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpec;
}
export interface DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#annotations DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#labels DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#name DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#namespace DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectors {
  /**
  * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#match_labels DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectorsToTerraform(struct?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectorsToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectorsOutputReference {
    return new DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFrom {
  /**
  * NamespaceSelectors is the list of namespace selectors to which this ACL applies. Items in this list are evaluated using a logical OR operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#namespace_selectors DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#namespace_selectors}
  */
  readonly namespaceSelectors: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable;
}

export function dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromToTerraform(struct?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selectors: cdktf.listMapper(dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectorsToTerraform, false)(struct!.namespaceSelectors),
  }
}


export function dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selectors: {
      value: cdktf.listMapperHcl(dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectorsToHclTerraform, false)(struct!.namespaceSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelectors = this._namespaceSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceSelectors.internalValue = value.namespaceSelectors;
    }
  }

  // namespace_selectors - computed: false, optional: false, required: true
  private _namespaceSelectors = new DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectorsList(this, "namespace_selectors", false);
  public get namespaceSelectors() {
    return this._namespaceSelectors;
  }
  public putNamespaceSelectors(value: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable) {
    this._namespaceSelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorsInput() {
    return this._namespaceSelectors.internalValue;
  }
}
export interface DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#name DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
export interface DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpec {
  /**
  * AccessFrom defines an Access Control List for allowing cross-namespace references to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#access_from DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#access_from}
  */
  readonly accessFrom?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFrom;
  /**
  * The bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#bucket_name DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The bucket endpoint address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#endpoint DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#endpoint}
  */
  readonly endpoint: string;
  /**
  * Ignore overrides the set of excluded patterns in the .sourceignore format (which is the same as .gitignore). If not provided, a default will be used, consult the documentation for your version to find out what those are.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#ignore DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#ignore}
  */
  readonly ignore?: string;
  /**
  * Insecure allows connecting to a non-TLS S3 HTTP endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#insecure DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The interval at which to check for bucket updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#interval DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#interval}
  */
  readonly interval: string;
  /**
  * The S3 compatible storage provider name, default ('generic').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#provider DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#provider}
  */
  readonly provider?: string;
  /**
  * The bucket region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#region DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#region}
  */
  readonly region?: string;
  /**
  * The name of the secret containing authentication credentials for the Bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#secret_ref DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRef;
  /**
  * This flag tells the controller to suspend the reconciliation of this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#suspend DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * The timeout for download operations, defaults to 60s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#timeout DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecToTerraform(struct?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_from: dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromToTerraform(struct!.accessFrom),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    ignore: cdktf.stringToTerraform(struct!.ignore),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    interval: cdktf.stringToTerraform(struct!.interval),
    provider: cdktf.stringToTerraform(struct!.provider),
    region: cdktf.stringToTerraform(struct!.region),
    secret_ref: dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRefToTerraform(struct!.secretRef),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_from: {
      value: dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromToHclTerraform(struct!.accessFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFrom",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore: {
      value: cdktf.stringToHclTerraform(struct!.ignore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRef",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessFrom = this._accessFrom?.internalValue;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessFrom.internalValue = undefined;
      this._bucketName = undefined;
      this._endpoint = undefined;
      this._ignore = undefined;
      this._insecure = undefined;
      this._interval = undefined;
      this._provider = undefined;
      this._region = undefined;
      this._secretRef.internalValue = undefined;
      this._suspend = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessFrom.internalValue = value.accessFrom;
      this._bucketName = value.bucketName;
      this._endpoint = value.endpoint;
      this._ignore = value.ignore;
      this._insecure = value.insecure;
      this._interval = value.interval;
      this._provider = value.provider;
      this._region = value.region;
      this._secretRef.internalValue = value.secretRef;
      this._suspend = value.suspend;
      this._timeout = value.timeout;
    }
  }

  // access_from - computed: false, optional: true, required: false
  private _accessFrom = new DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFromOutputReference(this, "access_from");
  public get accessFrom() {
    return this._accessFrom;
  }
  public putAccessFrom(value: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecAccessFrom) {
    this._accessFrom.internalValue = value;
  }
  public resetAccessFrom() {
    this._accessFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessFromInput() {
    return this._accessFrom.internalValue;
  }

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

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string; 
  public get ignore() {
    return this.getStringAttribute('ignore');
  }
  public set ignore(value: string) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
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

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest k8s_source_toolkit_fluxcd_io_bucket_v1beta1_manifest}
*/
export class DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_source_toolkit_fluxcd_io_bucket_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSourceToolkitFluxcdIoBucketV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_source_toolkit_fluxcd_io_bucket_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/source_toolkit_fluxcd_io_bucket_v1beta1_manifest k8s_source_toolkit_fluxcd_io_bucket_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_source_toolkit_fluxcd_io_bucket_v1beta1_manifest',
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
  private _metadata = new DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpec) {
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
      metadata: dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoBucketV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
