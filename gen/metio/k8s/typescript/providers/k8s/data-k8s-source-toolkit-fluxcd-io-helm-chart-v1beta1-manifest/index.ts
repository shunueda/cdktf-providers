// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#metadata DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadata;
  /**
  * HelmChartSpec defines the desired state of a Helm chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#spec DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpec;
}
export interface DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#annotations DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#labels DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#name DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#namespace DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectors {
  /**
  * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#match_labels DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectorsToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectorsToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectorsOutputReference {
    return new DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFrom {
  /**
  * NamespaceSelectors is the list of namespace selectors to which this ACL applies. Items in this list are evaluated using a logical OR operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#namespace_selectors DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#namespace_selectors}
  */
  readonly namespaceSelectors: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable;
}

export function dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selectors: cdktf.listMapper(dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectorsToTerraform, false)(struct!.namespaceSelectors),
  }
}


export function dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selectors: {
      value: cdktf.listMapperHcl(dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectorsToHclTerraform, false)(struct!.namespaceSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFrom | cdktf.IResolvable | undefined) {
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
  private _namespaceSelectors = new DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectorsList(this, "namespace_selectors", false);
  public get namespaceSelectors() {
    return this._namespaceSelectors;
  }
  public putNamespaceSelectors(value: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromNamespaceSelectors[] | cdktf.IResolvable) {
    this._namespaceSelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorsInput() {
    return this._namespaceSelectors.internalValue;
  }
}
export interface DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRef {
  /**
  * APIVersion of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#api_version DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent, valid values are ('HelmRepository', 'GitRepository', 'Bucket').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#kind DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#name DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpec {
  /**
  * AccessFrom defines an Access Control List for allowing cross-namespace references to this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#access_from DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#access_from}
  */
  readonly accessFrom?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFrom;
  /**
  * The name or path the Helm chart is available at in the SourceRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#chart DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#chart}
  */
  readonly chart: string;
  /**
  * The interval at which to check the Source for updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#interval DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#interval}
  */
  readonly interval: string;
  /**
  * Determines what enables the creation of a new artifact. Valid values are ('ChartVersion', 'Revision'). See the documentation of the values for an explanation on their behavior. Defaults to ChartVersion when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#reconcile_strategy DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#reconcile_strategy}
  */
  readonly reconcileStrategy?: string;
  /**
  * The reference to the Source the chart is available at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#source_ref DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#source_ref}
  */
  readonly sourceRef: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRef;
  /**
  * This flag tells the controller to suspend the reconciliation of this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#suspend DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Alternative values file to use as the default chart values, expected to be a relative path in the SourceRef. Deprecated in favor of ValuesFiles, for backwards compatibility the file defined here is merged before the ValuesFiles items. Ignored when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#values_file DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#values_file}
  */
  readonly valuesFile?: string;
  /**
  * Alternative list of values files to use as the chart values (values.yaml is not included by default), expected to be a relative path in the SourceRef. Values files are merged in the order of this list with the last file overriding the first. Ignored when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#values_files DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#values_files}
  */
  readonly valuesFiles?: string[];
  /**
  * The chart version semver expression, ignored for charts from GitRepository and Bucket sources. Defaults to latest when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#version DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecToTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_from: dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromToTerraform(struct!.accessFrom),
    chart: cdktf.stringToTerraform(struct!.chart),
    interval: cdktf.stringToTerraform(struct!.interval),
    reconcile_strategy: cdktf.stringToTerraform(struct!.reconcileStrategy),
    source_ref: dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRefToTerraform(struct!.sourceRef),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    values_file: cdktf.stringToTerraform(struct!.valuesFile),
    values_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valuesFiles),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_from: {
      value: dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromToHclTerraform(struct!.accessFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFrom",
    },
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reconcile_strategy: {
      value: cdktf.stringToHclTerraform(struct!.reconcileStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ref: {
      value: dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRef",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values_file: {
      value: cdktf.stringToHclTerraform(struct!.valuesFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valuesFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessFrom = this._accessFrom?.internalValue;
    }
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._reconcileStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconcileStrategy = this._reconcileStrategy;
    }
    if (this._sourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRef = this._sourceRef?.internalValue;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._valuesFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesFile = this._valuesFile;
    }
    if (this._valuesFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesFiles = this._valuesFiles;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessFrom.internalValue = undefined;
      this._chart = undefined;
      this._interval = undefined;
      this._reconcileStrategy = undefined;
      this._sourceRef.internalValue = undefined;
      this._suspend = undefined;
      this._valuesFile = undefined;
      this._valuesFiles = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessFrom.internalValue = value.accessFrom;
      this._chart = value.chart;
      this._interval = value.interval;
      this._reconcileStrategy = value.reconcileStrategy;
      this._sourceRef.internalValue = value.sourceRef;
      this._suspend = value.suspend;
      this._valuesFile = value.valuesFile;
      this._valuesFiles = value.valuesFiles;
      this._version = value.version;
    }
  }

  // access_from - computed: false, optional: true, required: false
  private _accessFrom = new DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFromOutputReference(this, "access_from");
  public get accessFrom() {
    return this._accessFrom;
  }
  public putAccessFrom(value: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecAccessFrom) {
    this._accessFrom.internalValue = value;
  }
  public resetAccessFrom() {
    this._accessFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessFromInput() {
    return this._accessFrom.internalValue;
  }

  // chart - computed: false, optional: false, required: true
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
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

  // reconcile_strategy - computed: false, optional: true, required: false
  private _reconcileStrategy?: string; 
  public get reconcileStrategy() {
    return this.getStringAttribute('reconcile_strategy');
  }
  public set reconcileStrategy(value: string) {
    this._reconcileStrategy = value;
  }
  public resetReconcileStrategy() {
    this._reconcileStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconcileStrategyInput() {
    return this._reconcileStrategy;
  }

  // source_ref - computed: false, optional: false, required: true
  private _sourceRef = new DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecSourceRef) {
    this._sourceRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRefInput() {
    return this._sourceRef.internalValue;
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

  // values_file - computed: false, optional: true, required: false
  private _valuesFile?: string; 
  public get valuesFile() {
    return this.getStringAttribute('values_file');
  }
  public set valuesFile(value: string) {
    this._valuesFile = value;
  }
  public resetValuesFile() {
    this._valuesFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesFileInput() {
    return this._valuesFile;
  }

  // values_files - computed: false, optional: true, required: false
  private _valuesFiles?: string[]; 
  public get valuesFiles() {
    return this.getListAttribute('values_files');
  }
  public set valuesFiles(value: string[]) {
    this._valuesFiles = value;
  }
  public resetValuesFiles() {
    this._valuesFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesFilesInput() {
    return this._valuesFiles;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest k8s_source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest}
*/
export class DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest k8s_source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_source_toolkit_fluxcd_io_helm_chart_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpec) {
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
      metadata: dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoHelmChartV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
