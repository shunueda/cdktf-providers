// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#metadata DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadata;
  /**
  * HelmReleaseSpec defines the desired state of a Helm release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#spec DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#spec}
  */
  readonly spec?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpec;
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#annotations DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#labels DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#namespace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadataToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadataToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#annotations DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#labels DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadataToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadataToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRef {
  /**
  * APIVersion of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#api_version DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#kind DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#namespace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRefToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRefToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRef | cdktf.IResolvable): any {
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRef | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRefToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRefToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRef | cdktf.IResolvable): any {
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerify {
  /**
  * Provider specifies the technology used to sign the OCI Helm chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#provider DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#provider}
  */
  readonly provider: string;
  /**
  * SecretRef specifies the Kubernetes Secret containing the trusted public keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#secret_ref DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRef;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifyToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_ref: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifyToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider = value.provider;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifySecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpec {
  /**
  * The name or path the Helm chart is available at in the SourceRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#chart DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#chart}
  */
  readonly chart: string;
  /**
  * IgnoreMissingValuesFiles controls whether to silently ignore missing values files rather than failing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#ignore_missing_values_files DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#ignore_missing_values_files}
  */
  readonly ignoreMissingValuesFiles?: boolean | cdktf.IResolvable;
  /**
  * Interval at which to check the v1.Source for updates. Defaults to 'HelmReleaseSpec.Interval'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#interval DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Determines what enables the creation of a new artifact. Valid values are ('ChartVersion', 'Revision'). See the documentation of the values for an explanation on their behavior. Defaults to ChartVersion when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#reconcile_strategy DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#reconcile_strategy}
  */
  readonly reconcileStrategy?: string;
  /**
  * The name and namespace of the v1.Source the chart is available at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#source_ref DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#source_ref}
  */
  readonly sourceRef: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRef;
  /**
  * Alternative values file to use as the default chart values, expected to be a relative path in the SourceRef. Deprecated in favor of ValuesFiles, for backwards compatibility the file defined here is merged before the ValuesFiles items. Ignored when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#values_file DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#values_file}
  */
  readonly valuesFile?: string;
  /**
  * Alternative list of values files to use as the chart values (values.yaml is not included by default), expected to be a relative path in the SourceRef. Values files are merged in the order of this list with the last file overriding the first. Ignored when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#values_files DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#values_files}
  */
  readonly valuesFiles?: string[];
  /**
  * Verify contains the secret name containing the trusted public keys used to verify the signature and specifies which provider to use to check whether OCI image is authentic. This field is only supported for OCI sources. Chart dependencies, which are not bundled in the umbrella chart artifact, are not verified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#verify DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#verify}
  */
  readonly verify?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerify;
  /**
  * Version semver expression, ignored for charts from v1beta2.GitRepository and v1beta2.Bucket sources. Defaults to latest when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#version DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    ignore_missing_values_files: cdktf.booleanToTerraform(struct!.ignoreMissingValuesFiles),
    interval: cdktf.stringToTerraform(struct!.interval),
    reconcile_strategy: cdktf.stringToTerraform(struct!.reconcileStrategy),
    source_ref: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRefToTerraform(struct!.sourceRef),
    values_file: cdktf.stringToTerraform(struct!.valuesFile),
    values_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valuesFiles),
    verify: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifyToTerraform(struct!.verify),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_missing_values_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValuesFiles),
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
    reconcile_strategy: {
      value: cdktf.stringToHclTerraform(struct!.reconcileStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ref: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRef",
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
    verify: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifyToHclTerraform(struct!.verify),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerify",
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._ignoreMissingValuesFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValuesFiles = this._ignoreMissingValuesFiles;
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
    if (this._valuesFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesFile = this._valuesFile;
    }
    if (this._valuesFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesFiles = this._valuesFiles;
    }
    if (this._verify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._ignoreMissingValuesFiles = undefined;
      this._interval = undefined;
      this._reconcileStrategy = undefined;
      this._sourceRef.internalValue = undefined;
      this._valuesFile = undefined;
      this._valuesFiles = undefined;
      this._verify.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._ignoreMissingValuesFiles = value.ignoreMissingValuesFiles;
      this._interval = value.interval;
      this._reconcileStrategy = value.reconcileStrategy;
      this._sourceRef.internalValue = value.sourceRef;
      this._valuesFile = value.valuesFile;
      this._valuesFiles = value.valuesFiles;
      this._verify.internalValue = value.verify;
      this._version = value.version;
    }
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

  // ignore_missing_values_files - computed: false, optional: true, required: false
  private _ignoreMissingValuesFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValuesFiles() {
    return this.getBooleanAttribute('ignore_missing_values_files');
  }
  public set ignoreMissingValuesFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValuesFiles = value;
  }
  public resetIgnoreMissingValuesFiles() {
    this._ignoreMissingValuesFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValuesFilesInput() {
    return this._ignoreMissingValuesFiles;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
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
  private _sourceRef = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecSourceRef) {
    this._sourceRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRefInput() {
    return this._sourceRef.internalValue;
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

  // verify - computed: false, optional: true, required: false
  private _verify = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerifyOutputReference(this, "verify");
  public get verify() {
    return this._verify;
  }
  public putVerify(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecVerify) {
    this._verify.internalValue = value;
  }
  public resetVerify() {
    this._verify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify.internalValue;
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChart {
  /**
  * ObjectMeta holds the template for metadata like labels and annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#metadata DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadata;
  /**
  * Spec holds the template for the v1beta2.HelmChartSpec for this HelmRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#spec DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#spec}
  */
  readonly spec: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpec;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadataToTerraform(struct!.metadata),
    spec: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecToTerraform(struct!.spec),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadata",
    },
    spec: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRef {
  /**
  * APIVersion of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#api_version DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#kind DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, defaults to the namespace of the Kubernetes resource object that contains the reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#namespace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRefToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRefToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRef | cdktf.IResolvable): any {
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRef | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOn {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, when not specified it acts as LocalObjectReference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#namespace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOnToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOnToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOn | cdktf.IResolvable): any {
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOnList extends cdktf.ComplexList {
  public internalValue? : DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOn[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOnOutputReference {
    return new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTarget {
  /**
  * AnnotationSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#annotation_selector DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Group is the API group to select resources from. Together with Version and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#group DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind of the API Group to select resources from. Together with Group and Version it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#kind DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * LabelSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#label_selector DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Name to match resources with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace to select resources from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#namespace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Version of the API Group to select resources from. Together with Group and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#version DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTargetToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTargetToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnore {
  /**
  * Paths is a list of JSON Pointer (RFC 6901) paths to be excluded from consideration in a Kubernetes object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#paths DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#paths}
  */
  readonly paths: string[];
  /**
  * Target is a selector for specifying Kubernetes objects to which this rule applies. If Target is not set, the Paths will be ignored for all Kubernetes objects within the manifest of the Helm release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#target DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#target}
  */
  readonly target?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTarget;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    target: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTargetToTerraform(struct!.target),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
      this._target.internalValue = value.target;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreList extends cdktf.ComplexList {
  public internalValue? : DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnore[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreOutputReference {
    return new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetection {
  /**
  * Ignore contains a list of rules for specifying which changes to ignore during diffing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#ignore DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#ignore}
  */
  readonly ignore?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnore[] | cdktf.IResolvable;
  /**
  * Mode defines how differences should be handled between the Helm manifest and the manifest currently applied to the cluster. If not explicitly set, it defaults to DiffModeDisabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#mode DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore: cdktf.listMapper(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreToTerraform, false)(struct!.ignore),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore: {
      value: cdktf.listMapperHcl(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreToHclTerraform, false)(struct!.ignore),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignore.internalValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignore.internalValue = value.ignore;
      this._mode = value.mode;
    }
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnoreList(this, "ignore", false);
  public get ignore() {
    return this._ignore;
  }
  public putIgnore(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionIgnore[] | cdktf.IResolvable) {
    this._ignore.internalValue = value;
  }
  public resetIgnore() {
    this._ignore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediation {
  /**
  * IgnoreTestFailures tells the controller to skip remediation when the Helm tests are run after an install action but fail. Defaults to 'Test.IgnoreFailures'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#ignore_test_failures DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#ignore_test_failures}
  */
  readonly ignoreTestFailures?: boolean | cdktf.IResolvable;
  /**
  * RemediateLastFailure tells the controller to remediate the last failure, when no retries remain. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#remediate_last_failure DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#remediate_last_failure}
  */
  readonly remediateLastFailure?: boolean | cdktf.IResolvable;
  /**
  * Retries is the number of retries that should be attempted on failures before bailing. Remediation, using an uninstall, is performed between each attempt. Defaults to '0', a negative integer equals to unlimited retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#retries DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#retries}
  */
  readonly retries?: number;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediationToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_test_failures: cdktf.booleanToTerraform(struct!.ignoreTestFailures),
    remediate_last_failure: cdktf.booleanToTerraform(struct!.remediateLastFailure),
    retries: cdktf.numberToTerraform(struct!.retries),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediationToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_test_failures: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTestFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remediate_last_failure: {
      value: cdktf.booleanToHclTerraform(struct!.remediateLastFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreTestFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTestFailures = this._ignoreTestFailures;
    }
    if (this._remediateLastFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediateLastFailure = this._remediateLastFailure;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreTestFailures = undefined;
      this._remediateLastFailure = undefined;
      this._retries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreTestFailures = value.ignoreTestFailures;
      this._remediateLastFailure = value.remediateLastFailure;
      this._retries = value.retries;
    }
  }

  // ignore_test_failures - computed: false, optional: true, required: false
  private _ignoreTestFailures?: boolean | cdktf.IResolvable; 
  public get ignoreTestFailures() {
    return this.getBooleanAttribute('ignore_test_failures');
  }
  public set ignoreTestFailures(value: boolean | cdktf.IResolvable) {
    this._ignoreTestFailures = value;
  }
  public resetIgnoreTestFailures() {
    this._ignoreTestFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTestFailuresInput() {
    return this._ignoreTestFailures;
  }

  // remediate_last_failure - computed: false, optional: true, required: false
  private _remediateLastFailure?: boolean | cdktf.IResolvable; 
  public get remediateLastFailure() {
    return this.getBooleanAttribute('remediate_last_failure');
  }
  public set remediateLastFailure(value: boolean | cdktf.IResolvable) {
    this._remediateLastFailure = value;
  }
  public resetRemediateLastFailure() {
    this._remediateLastFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediateLastFailureInput() {
    return this._remediateLastFailure;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstall {
  /**
  * CRDs upgrade CRDs from the Helm Chart's crds directory according to the CRD upgrade policy provided here. Valid values are 'Skip', 'Create' or 'CreateReplace'. Default is 'Create' and if omitted CRDs are installed but not updated. Skip: do neither install nor replace (update) any CRDs. Create: new CRDs are created, existing CRDs are neither updated nor deleted. CreateReplace: new CRDs are created, existing CRDs are updated (replaced) but not deleted. By default, CRDs are applied (installed) during Helm install action. With this option users can opt in to CRD replace existing CRDs on Helm install actions, which is not (yet) natively supported by Helm. https://helm.sh/docs/chart_best_practices/custom_resource_definitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#crds DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#crds}
  */
  readonly crds?: string;
  /**
  * CreateNamespace tells the Helm install action to create the HelmReleaseSpec.TargetNamespace if it does not exist yet. On uninstall, the namespace will not be garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#create_namespace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#create_namespace}
  */
  readonly createNamespace?: boolean | cdktf.IResolvable;
  /**
  * DisableHooks prevents hooks from running during the Helm install action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_hooks DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_hooks}
  */
  readonly disableHooks?: boolean | cdktf.IResolvable;
  /**
  * DisableOpenAPIValidation prevents the Helm install action from validating rendered templates against the Kubernetes OpenAPI Schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_open_api_validation DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_open_api_validation}
  */
  readonly disableOpenApiValidation?: boolean | cdktf.IResolvable;
  /**
  * DisableWait disables the waiting for resources to be ready after a Helm install has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_wait DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_wait}
  */
  readonly disableWait?: boolean | cdktf.IResolvable;
  /**
  * DisableWaitForJobs disables waiting for jobs to complete after a Helm install has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_wait_for_jobs DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_wait_for_jobs}
  */
  readonly disableWaitForJobs?: boolean | cdktf.IResolvable;
  /**
  * Remediation holds the remediation configuration for when the Helm install action for the HelmRelease fails. The default is to not perform any action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#remediation DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#remediation}
  */
  readonly remediation?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediation;
  /**
  * Replace tells the Helm install action to re-use the 'ReleaseName', but only if that name is a deleted release which remains in the history.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#replace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
  /**
  * SkipCRDs tells the Helm install action to not install any CRDs. By default, CRDs are installed if not already present. Deprecated use CRD policy ('crds') attribute with value 'Skip' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#skip_cr_ds DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#skip_cr_ds}
  */
  readonly skipCrDs?: boolean | cdktf.IResolvable;
  /**
  * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm install action. Defaults to 'HelmReleaseSpec.Timeout'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#timeout DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crds: cdktf.stringToTerraform(struct!.crds),
    create_namespace: cdktf.booleanToTerraform(struct!.createNamespace),
    disable_hooks: cdktf.booleanToTerraform(struct!.disableHooks),
    disable_open_api_validation: cdktf.booleanToTerraform(struct!.disableOpenApiValidation),
    disable_wait: cdktf.booleanToTerraform(struct!.disableWait),
    disable_wait_for_jobs: cdktf.booleanToTerraform(struct!.disableWaitForJobs),
    remediation: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediationToTerraform(struct!.remediation),
    replace: cdktf.booleanToTerraform(struct!.replace),
    skip_cr_ds: cdktf.booleanToTerraform(struct!.skipCrDs),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crds: {
      value: cdktf.stringToHclTerraform(struct!.crds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.createNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_hooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableHooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_open_api_validation: {
      value: cdktf.booleanToHclTerraform(struct!.disableOpenApiValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_wait: {
      value: cdktf.booleanToHclTerraform(struct!.disableWait),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_wait_for_jobs: {
      value: cdktf.booleanToHclTerraform(struct!.disableWaitForJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remediation: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediationToHclTerraform(struct!.remediation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediation",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_cr_ds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrDs),
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crds !== undefined) {
      hasAnyValues = true;
      internalValueResult.crds = this._crds;
    }
    if (this._createNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNamespace = this._createNamespace;
    }
    if (this._disableHooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHooks = this._disableHooks;
    }
    if (this._disableOpenApiValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOpenApiValidation = this._disableOpenApiValidation;
    }
    if (this._disableWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWait = this._disableWait;
    }
    if (this._disableWaitForJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWaitForJobs = this._disableWaitForJobs;
    }
    if (this._remediation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediation = this._remediation?.internalValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    if (this._skipCrDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrDs = this._skipCrDs;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crds = undefined;
      this._createNamespace = undefined;
      this._disableHooks = undefined;
      this._disableOpenApiValidation = undefined;
      this._disableWait = undefined;
      this._disableWaitForJobs = undefined;
      this._remediation.internalValue = undefined;
      this._replace = undefined;
      this._skipCrDs = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crds = value.crds;
      this._createNamespace = value.createNamespace;
      this._disableHooks = value.disableHooks;
      this._disableOpenApiValidation = value.disableOpenApiValidation;
      this._disableWait = value.disableWait;
      this._disableWaitForJobs = value.disableWaitForJobs;
      this._remediation.internalValue = value.remediation;
      this._replace = value.replace;
      this._skipCrDs = value.skipCrDs;
      this._timeout = value.timeout;
    }
  }

  // crds - computed: false, optional: true, required: false
  private _crds?: string; 
  public get crds() {
    return this.getStringAttribute('crds');
  }
  public set crds(value: string) {
    this._crds = value;
  }
  public resetCrds() {
    this._crds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crdsInput() {
    return this._crds;
  }

  // create_namespace - computed: false, optional: true, required: false
  private _createNamespace?: boolean | cdktf.IResolvable; 
  public get createNamespace() {
    return this.getBooleanAttribute('create_namespace');
  }
  public set createNamespace(value: boolean | cdktf.IResolvable) {
    this._createNamespace = value;
  }
  public resetCreateNamespace() {
    this._createNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNamespaceInput() {
    return this._createNamespace;
  }

  // disable_hooks - computed: false, optional: true, required: false
  private _disableHooks?: boolean | cdktf.IResolvable; 
  public get disableHooks() {
    return this.getBooleanAttribute('disable_hooks');
  }
  public set disableHooks(value: boolean | cdktf.IResolvable) {
    this._disableHooks = value;
  }
  public resetDisableHooks() {
    this._disableHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHooksInput() {
    return this._disableHooks;
  }

  // disable_open_api_validation - computed: false, optional: true, required: false
  private _disableOpenApiValidation?: boolean | cdktf.IResolvable; 
  public get disableOpenApiValidation() {
    return this.getBooleanAttribute('disable_open_api_validation');
  }
  public set disableOpenApiValidation(value: boolean | cdktf.IResolvable) {
    this._disableOpenApiValidation = value;
  }
  public resetDisableOpenApiValidation() {
    this._disableOpenApiValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOpenApiValidationInput() {
    return this._disableOpenApiValidation;
  }

  // disable_wait - computed: false, optional: true, required: false
  private _disableWait?: boolean | cdktf.IResolvable; 
  public get disableWait() {
    return this.getBooleanAttribute('disable_wait');
  }
  public set disableWait(value: boolean | cdktf.IResolvable) {
    this._disableWait = value;
  }
  public resetDisableWait() {
    this._disableWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWaitInput() {
    return this._disableWait;
  }

  // disable_wait_for_jobs - computed: false, optional: true, required: false
  private _disableWaitForJobs?: boolean | cdktf.IResolvable; 
  public get disableWaitForJobs() {
    return this.getBooleanAttribute('disable_wait_for_jobs');
  }
  public set disableWaitForJobs(value: boolean | cdktf.IResolvable) {
    this._disableWaitForJobs = value;
  }
  public resetDisableWaitForJobs() {
    this._disableWaitForJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWaitForJobsInput() {
    return this._disableWaitForJobs;
  }

  // remediation - computed: false, optional: true, required: false
  private _remediation = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediationOutputReference(this, "remediation");
  public get remediation() {
    return this._remediation;
  }
  public putRemediation(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallRemediation) {
    this._remediation.internalValue = value;
  }
  public resetRemediation() {
    this._remediation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation.internalValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }

  // skip_cr_ds - computed: false, optional: true, required: false
  private _skipCrDs?: boolean | cdktf.IResolvable; 
  public get skipCrDs() {
    return this.getBooleanAttribute('skip_cr_ds');
  }
  public set skipCrDs(value: boolean | cdktf.IResolvable) {
    this._skipCrDs = value;
  }
  public resetSkipCrDs() {
    this._skipCrDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrDsInput() {
    return this._skipCrDs;
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRef {
  /**
  * Key in the Secret, when not specified an implementation-specific default key is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#key DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Name of the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRefToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRefToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfig {
  /**
  * SecretRef holds the name of a secret that contains a key with the kubeconfig file as the value. If no key is set, the key will default to 'value'. It is recommended that the kubeconfig is self-contained, and the secret is regularly updated if credentials such as a cloud-access-token expire. Cloud specific 'cmd-path' auth helpers will not function without adding binaries and credentials to the Pod that is responsible for reconciling Kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#secret_ref DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#secret_ref}
  */
  readonly secretRef: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRef;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImages {
  /**
  * Digest is the value used to replace the original image tag. If digest is present NewTag value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#digest DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#digest}
  */
  readonly digest?: string;
  /**
  * Name is a tag-less image name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * NewName is the value used to replace the original name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#new_name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#new_name}
  */
  readonly newName?: string;
  /**
  * NewTag is the value used to replace the original tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#new_tag DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#new_tag}
  */
  readonly newTag?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImagesToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
    name: cdktf.stringToTerraform(struct!.name),
    new_name: cdktf.stringToTerraform(struct!.newName),
    new_tag: cdktf.stringToTerraform(struct!.newTag),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImagesToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
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
    new_name: {
      value: cdktf.stringToHclTerraform(struct!.newName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_tag: {
      value: cdktf.stringToHclTerraform(struct!.newTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._newName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newName = this._newName;
    }
    if (this._newTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTag = this._newTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
      this._name = undefined;
      this._newName = undefined;
      this._newTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digest = value.digest;
      this._name = value.name;
      this._newName = value.newName;
      this._newTag = value.newTag;
    }
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
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

  // new_name - computed: false, optional: true, required: false
  private _newName?: string; 
  public get newName() {
    return this.getStringAttribute('new_name');
  }
  public set newName(value: string) {
    this._newName = value;
  }
  public resetNewName() {
    this._newName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNameInput() {
    return this._newName;
  }

  // new_tag - computed: false, optional: true, required: false
  private _newTag?: string; 
  public get newTag() {
    return this.getStringAttribute('new_tag');
  }
  public set newTag(value: string) {
    this._newTag = value;
  }
  public resetNewTag() {
    this._newTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTagInput() {
    return this._newTag;
  }
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImagesOutputReference {
    return new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTarget {
  /**
  * AnnotationSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#annotation_selector DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Group is the API group to select resources from. Together with Version and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#group DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind of the API Group to select resources from. Together with Group and Version it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#kind DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * LabelSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#label_selector DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Name to match resources with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace to select resources from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#namespace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Version of the API Group to select resources from. Together with Group and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#version DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTargetToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTargetToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatches {
  /**
  * Patch contains an inline StrategicMerge patch or an inline JSON6902 patch with an array of operation objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#patch DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#patch}
  */
  readonly patch: string;
  /**
  * Target points to the resources that the patch document should be applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#target DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#target}
  */
  readonly target?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTarget;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch: cdktf.stringToTerraform(struct!.patch),
    target: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patch = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patch = value.patch;
      this._target.internalValue = value.target;
    }
  }

  // patch - computed: false, optional: false, required: true
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesOutputReference {
    return new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Patch {
  /**
  * From contains a JSON-pointer value that references a location within the target document where the operation is performed. The meaning of the value depends on the value of Op, and is NOT taken into account by all operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#from DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#from}
  */
  readonly from?: string;
  /**
  * Op indicates the operation to perform. Its value MUST be one of 'add', 'remove', 'replace', 'move', 'copy', or 'test'. https://datatracker.ietf.org/doc/html/rfc6902#section-4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#op DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#op}
  */
  readonly op: string;
  /**
  * Path contains the JSON-pointer value that references a location within the target document where the operation is performed. The meaning of the value depends on the value of Op.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#path DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#path}
  */
  readonly path: string;
  /**
  * Value contains a valid JSON structure. The meaning of the value depends on the value of Op, and is NOT taken into account by all operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#value DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902PatchToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Patch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902PatchToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Patch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902PatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Patch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Patch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._op = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._op = value.op;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902PatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Patch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902PatchOutputReference {
    return new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902PatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Target {
  /**
  * AnnotationSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#annotation_selector DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Group is the API group to select resources from. Together with Version and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#group DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind of the API Group to select resources from. Together with Group and Version it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#kind DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * LabelSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#label_selector DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Name to match resources with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace to select resources from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#namespace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Version of the API Group to select resources from. Together with Group and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#version DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902TargetToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Target | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902TargetToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Target | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902TargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Target | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Target | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902 {
  /**
  * Patch contains the JSON6902 patch document with an array of operation objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#patch DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#patch}
  */
  readonly patch: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Patch[] | cdktf.IResolvable;
  /**
  * Target points to the resources that the patch document should be applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#target DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#target}
  */
  readonly target: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Target;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902ToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch: cdktf.listMapper(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902PatchToTerraform, false)(struct!.patch),
    target: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902TargetToTerraform(struct!.target),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902ToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch: {
      value: cdktf.listMapperHcl(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902PatchToHclTerraform, false)(struct!.patch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902PatchList",
    },
    target: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902TargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Target",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patch.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patch.internalValue = value.patch;
      this._target.internalValue = value.target;
    }
  }

  // patch - computed: false, optional: false, required: true
  private _patch = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902PatchList(this, "patch", false);
  public get patch() {
    return this._patch;
  }
  public putPatch(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Patch[] | cdktf.IResolvable) {
    this._patch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902TargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902Target) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902List extends cdktf.ComplexList {
  public internalValue? : DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902OutputReference {
    return new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomize {
  /**
  * Images is a list of (image name, new name, new tag or digest) for changing image names, tags or digests. This can also be achieved with a patch, but this operator is simpler to specify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#images DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#images}
  */
  readonly images?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImages[] | cdktf.IResolvable;
  /**
  * Strategic merge and JSON patches, defined as inline YAML objects, capable of targeting objects based on kind, label and annotation selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#patches DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#patches}
  */
  readonly patches?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatches[] | cdktf.IResolvable;
  /**
  * JSON 6902 patches, defined as inline YAML objects. Deprecated: use Patches instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#patches_json6902 DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#patches_json6902}
  */
  readonly patchesJson6902?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902[] | cdktf.IResolvable;
  /**
  * Strategic merge patches, defined as inline YAML objects. Deprecated: use Patches instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#patches_strategic_merge DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#patches_strategic_merge}
  */
  readonly patchesStrategicMerge?: string[];
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    images: cdktf.listMapper(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImagesToTerraform, false)(struct!.images),
    patches: cdktf.listMapper(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesToTerraform, false)(struct!.patches),
    patches_json6902: cdktf.listMapper(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902ToTerraform, false)(struct!.patchesJson6902),
    patches_strategic_merge: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patchesStrategicMerge),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    images: {
      value: cdktf.listMapperHcl(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImagesToHclTerraform, false)(struct!.images),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImagesList",
    },
    patches: {
      value: cdktf.listMapperHcl(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesList",
    },
    patches_json6902: {
      value: cdktf.listMapperHcl(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902ToHclTerraform, false)(struct!.patchesJson6902),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902List",
    },
    patches_strategic_merge: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patchesStrategicMerge),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._images?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images?.internalValue;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._patchesJson6902?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchesJson6902 = this._patchesJson6902?.internalValue;
    }
    if (this._patchesStrategicMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchesStrategicMerge = this._patchesStrategicMerge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._images.internalValue = undefined;
      this._patches.internalValue = undefined;
      this._patchesJson6902.internalValue = undefined;
      this._patchesStrategicMerge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._images.internalValue = value.images;
      this._patches.internalValue = value.patches;
      this._patchesJson6902.internalValue = value.patchesJson6902;
      this._patchesStrategicMerge = value.patchesStrategicMerge;
    }
  }

  // images - computed: false, optional: true, required: false
  private _images = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // patches_json6902 - computed: false, optional: true, required: false
  private _patchesJson6902 = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902List(this, "patches_json6902", false);
  public get patchesJson6902() {
    return this._patchesJson6902;
  }
  public putPatchesJson6902(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizePatchesJson6902[] | cdktf.IResolvable) {
    this._patchesJson6902.internalValue = value;
  }
  public resetPatchesJson6902() {
    this._patchesJson6902.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesJson6902Input() {
    return this._patchesJson6902.internalValue;
  }

  // patches_strategic_merge - computed: false, optional: true, required: false
  private _patchesStrategicMerge?: string[]; 
  public get patchesStrategicMerge() {
    return this.getListAttribute('patches_strategic_merge');
  }
  public set patchesStrategicMerge(value: string[]) {
    this._patchesStrategicMerge = value;
  }
  public resetPatchesStrategicMerge() {
    this._patchesStrategicMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesStrategicMergeInput() {
    return this._patchesStrategicMerge;
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderers {
  /**
  * Kustomization to apply as PostRenderer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#kustomize DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#kustomize}
  */
  readonly kustomize?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomize;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kustomize: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeToTerraform(struct!.kustomize),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kustomize: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomize",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kustomize.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kustomize.internalValue = value.kustomize;
    }
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersList extends cdktf.ComplexList {
  public internalValue? : DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersOutputReference {
    return new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollback {
  /**
  * CleanupOnFail allows deletion of new resources created during the Helm rollback action when it fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#cleanup_on_fail DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#cleanup_on_fail}
  */
  readonly cleanupOnFail?: boolean | cdktf.IResolvable;
  /**
  * DisableHooks prevents hooks from running during the Helm rollback action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_hooks DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_hooks}
  */
  readonly disableHooks?: boolean | cdktf.IResolvable;
  /**
  * DisableWait disables the waiting for resources to be ready after a Helm rollback has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_wait DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_wait}
  */
  readonly disableWait?: boolean | cdktf.IResolvable;
  /**
  * DisableWaitForJobs disables waiting for jobs to complete after a Helm rollback has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_wait_for_jobs DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_wait_for_jobs}
  */
  readonly disableWaitForJobs?: boolean | cdktf.IResolvable;
  /**
  * Force forces resource updates through a replacement strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#force DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Recreate performs pod restarts for the resource if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#recreate DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#recreate}
  */
  readonly recreate?: boolean | cdktf.IResolvable;
  /**
  * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm rollback action. Defaults to 'HelmReleaseSpec.Timeout'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#timeout DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollbackToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_on_fail: cdktf.booleanToTerraform(struct!.cleanupOnFail),
    disable_hooks: cdktf.booleanToTerraform(struct!.disableHooks),
    disable_wait: cdktf.booleanToTerraform(struct!.disableWait),
    disable_wait_for_jobs: cdktf.booleanToTerraform(struct!.disableWaitForJobs),
    force: cdktf.booleanToTerraform(struct!.force),
    recreate: cdktf.booleanToTerraform(struct!.recreate),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollbackToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_on_fail: {
      value: cdktf.booleanToHclTerraform(struct!.cleanupOnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_hooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableHooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_wait: {
      value: cdktf.booleanToHclTerraform(struct!.disableWait),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_wait_for_jobs: {
      value: cdktf.booleanToHclTerraform(struct!.disableWaitForJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recreate: {
      value: cdktf.booleanToHclTerraform(struct!.recreate),
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupOnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupOnFail = this._cleanupOnFail;
    }
    if (this._disableHooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHooks = this._disableHooks;
    }
    if (this._disableWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWait = this._disableWait;
    }
    if (this._disableWaitForJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWaitForJobs = this._disableWaitForJobs;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._recreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.recreate = this._recreate;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanupOnFail = undefined;
      this._disableHooks = undefined;
      this._disableWait = undefined;
      this._disableWaitForJobs = undefined;
      this._force = undefined;
      this._recreate = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanupOnFail = value.cleanupOnFail;
      this._disableHooks = value.disableHooks;
      this._disableWait = value.disableWait;
      this._disableWaitForJobs = value.disableWaitForJobs;
      this._force = value.force;
      this._recreate = value.recreate;
      this._timeout = value.timeout;
    }
  }

  // cleanup_on_fail - computed: false, optional: true, required: false
  private _cleanupOnFail?: boolean | cdktf.IResolvable; 
  public get cleanupOnFail() {
    return this.getBooleanAttribute('cleanup_on_fail');
  }
  public set cleanupOnFail(value: boolean | cdktf.IResolvable) {
    this._cleanupOnFail = value;
  }
  public resetCleanupOnFail() {
    this._cleanupOnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupOnFailInput() {
    return this._cleanupOnFail;
  }

  // disable_hooks - computed: false, optional: true, required: false
  private _disableHooks?: boolean | cdktf.IResolvable; 
  public get disableHooks() {
    return this.getBooleanAttribute('disable_hooks');
  }
  public set disableHooks(value: boolean | cdktf.IResolvable) {
    this._disableHooks = value;
  }
  public resetDisableHooks() {
    this._disableHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHooksInput() {
    return this._disableHooks;
  }

  // disable_wait - computed: false, optional: true, required: false
  private _disableWait?: boolean | cdktf.IResolvable; 
  public get disableWait() {
    return this.getBooleanAttribute('disable_wait');
  }
  public set disableWait(value: boolean | cdktf.IResolvable) {
    this._disableWait = value;
  }
  public resetDisableWait() {
    this._disableWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWaitInput() {
    return this._disableWait;
  }

  // disable_wait_for_jobs - computed: false, optional: true, required: false
  private _disableWaitForJobs?: boolean | cdktf.IResolvable; 
  public get disableWaitForJobs() {
    return this.getBooleanAttribute('disable_wait_for_jobs');
  }
  public set disableWaitForJobs(value: boolean | cdktf.IResolvable) {
    this._disableWaitForJobs = value;
  }
  public resetDisableWaitForJobs() {
    this._disableWaitForJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWaitForJobsInput() {
    return this._disableWaitForJobs;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // recreate - computed: false, optional: true, required: false
  private _recreate?: boolean | cdktf.IResolvable; 
  public get recreate() {
    return this.getBooleanAttribute('recreate');
  }
  public set recreate(value: boolean | cdktf.IResolvable) {
    this._recreate = value;
  }
  public resetRecreate() {
    this._recreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreateInput() {
    return this._recreate;
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFilters {
  /**
  * Exclude specifies whether the named test should be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#exclude DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFiltersToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFiltersToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._name = value.name;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFiltersOutputReference {
    return new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTest {
  /**
  * Enable enables Helm test actions for this HelmRelease after an Helm install or upgrade action has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#enable DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Filters is a list of tests to run or exclude from running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#filters DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#filters}
  */
  readonly filters?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFilters[] | cdktf.IResolvable;
  /**
  * IgnoreFailures tells the controller to skip remediation when the Helm tests are run but fail. Can be overwritten for tests run after install or upgrade actions in 'Install.IgnoreTestFailures' and 'Upgrade.IgnoreTestFailures'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#ignore_failures DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#ignore_failures}
  */
  readonly ignoreFailures?: boolean | cdktf.IResolvable;
  /**
  * Timeout is the time to wait for any individual Kubernetes operation during the performance of a Helm test action. Defaults to 'HelmReleaseSpec.Timeout'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#timeout DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    filters: cdktf.listMapper(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFiltersToTerraform, false)(struct!.filters),
    ignore_failures: cdktf.booleanToTerraform(struct!.ignoreFailures),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filters: {
      value: cdktf.listMapperHcl(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFiltersList",
    },
    ignore_failures: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreFailures),
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._ignoreFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreFailures = this._ignoreFailures;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._filters.internalValue = undefined;
      this._ignoreFailures = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._filters.internalValue = value.filters;
      this._ignoreFailures = value.ignoreFailures;
      this._timeout = value.timeout;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // ignore_failures - computed: false, optional: true, required: false
  private _ignoreFailures?: boolean | cdktf.IResolvable; 
  public get ignoreFailures() {
    return this.getBooleanAttribute('ignore_failures');
  }
  public set ignoreFailures(value: boolean | cdktf.IResolvable) {
    this._ignoreFailures = value;
  }
  public resetIgnoreFailures() {
    this._ignoreFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFailuresInput() {
    return this._ignoreFailures;
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstall {
  /**
  * DeletionPropagation specifies the deletion propagation policy when a Helm uninstall is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#deletion_propagation DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#deletion_propagation}
  */
  readonly deletionPropagation?: string;
  /**
  * DisableHooks prevents hooks from running during the Helm rollback action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_hooks DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_hooks}
  */
  readonly disableHooks?: boolean | cdktf.IResolvable;
  /**
  * DisableWait disables waiting for all the resources to be deleted after a Helm uninstall is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_wait DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_wait}
  */
  readonly disableWait?: boolean | cdktf.IResolvable;
  /**
  * KeepHistory tells Helm to remove all associated resources and mark the release as deleted, but retain the release history.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#keep_history DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#keep_history}
  */
  readonly keepHistory?: boolean | cdktf.IResolvable;
  /**
  * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm uninstall action. Defaults to 'HelmReleaseSpec.Timeout'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#timeout DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstallToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_propagation: cdktf.stringToTerraform(struct!.deletionPropagation),
    disable_hooks: cdktf.booleanToTerraform(struct!.disableHooks),
    disable_wait: cdktf.booleanToTerraform(struct!.disableWait),
    keep_history: cdktf.booleanToTerraform(struct!.keepHistory),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstallToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_propagation: {
      value: cdktf.stringToHclTerraform(struct!.deletionPropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_hooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableHooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_wait: {
      value: cdktf.booleanToHclTerraform(struct!.disableWait),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_history: {
      value: cdktf.booleanToHclTerraform(struct!.keepHistory),
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionPropagation = this._deletionPropagation;
    }
    if (this._disableHooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHooks = this._disableHooks;
    }
    if (this._disableWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWait = this._disableWait;
    }
    if (this._keepHistory !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepHistory = this._keepHistory;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionPropagation = undefined;
      this._disableHooks = undefined;
      this._disableWait = undefined;
      this._keepHistory = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionPropagation = value.deletionPropagation;
      this._disableHooks = value.disableHooks;
      this._disableWait = value.disableWait;
      this._keepHistory = value.keepHistory;
      this._timeout = value.timeout;
    }
  }

  // deletion_propagation - computed: false, optional: true, required: false
  private _deletionPropagation?: string; 
  public get deletionPropagation() {
    return this.getStringAttribute('deletion_propagation');
  }
  public set deletionPropagation(value: string) {
    this._deletionPropagation = value;
  }
  public resetDeletionPropagation() {
    this._deletionPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPropagationInput() {
    return this._deletionPropagation;
  }

  // disable_hooks - computed: false, optional: true, required: false
  private _disableHooks?: boolean | cdktf.IResolvable; 
  public get disableHooks() {
    return this.getBooleanAttribute('disable_hooks');
  }
  public set disableHooks(value: boolean | cdktf.IResolvable) {
    this._disableHooks = value;
  }
  public resetDisableHooks() {
    this._disableHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHooksInput() {
    return this._disableHooks;
  }

  // disable_wait - computed: false, optional: true, required: false
  private _disableWait?: boolean | cdktf.IResolvable; 
  public get disableWait() {
    return this.getBooleanAttribute('disable_wait');
  }
  public set disableWait(value: boolean | cdktf.IResolvable) {
    this._disableWait = value;
  }
  public resetDisableWait() {
    this._disableWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWaitInput() {
    return this._disableWait;
  }

  // keep_history - computed: false, optional: true, required: false
  private _keepHistory?: boolean | cdktf.IResolvable; 
  public get keepHistory() {
    return this.getBooleanAttribute('keep_history');
  }
  public set keepHistory(value: boolean | cdktf.IResolvable) {
    this._keepHistory = value;
  }
  public resetKeepHistory() {
    this._keepHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepHistoryInput() {
    return this._keepHistory;
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediation {
  /**
  * IgnoreTestFailures tells the controller to skip remediation when the Helm tests are run after an upgrade action but fail. Defaults to 'Test.IgnoreFailures'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#ignore_test_failures DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#ignore_test_failures}
  */
  readonly ignoreTestFailures?: boolean | cdktf.IResolvable;
  /**
  * RemediateLastFailure tells the controller to remediate the last failure, when no retries remain. Defaults to 'false' unless 'Retries' is greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#remediate_last_failure DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#remediate_last_failure}
  */
  readonly remediateLastFailure?: boolean | cdktf.IResolvable;
  /**
  * Retries is the number of retries that should be attempted on failures before bailing. Remediation, using 'Strategy', is performed between each attempt. Defaults to '0', a negative integer equals to unlimited retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#retries DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#retries}
  */
  readonly retries?: number;
  /**
  * Strategy to use for failure remediation. Defaults to 'rollback'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#strategy DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediationToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_test_failures: cdktf.booleanToTerraform(struct!.ignoreTestFailures),
    remediate_last_failure: cdktf.booleanToTerraform(struct!.remediateLastFailure),
    retries: cdktf.numberToTerraform(struct!.retries),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediationToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_test_failures: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTestFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remediate_last_failure: {
      value: cdktf.booleanToHclTerraform(struct!.remediateLastFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreTestFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTestFailures = this._ignoreTestFailures;
    }
    if (this._remediateLastFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediateLastFailure = this._remediateLastFailure;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreTestFailures = undefined;
      this._remediateLastFailure = undefined;
      this._retries = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreTestFailures = value.ignoreTestFailures;
      this._remediateLastFailure = value.remediateLastFailure;
      this._retries = value.retries;
      this._strategy = value.strategy;
    }
  }

  // ignore_test_failures - computed: false, optional: true, required: false
  private _ignoreTestFailures?: boolean | cdktf.IResolvable; 
  public get ignoreTestFailures() {
    return this.getBooleanAttribute('ignore_test_failures');
  }
  public set ignoreTestFailures(value: boolean | cdktf.IResolvable) {
    this._ignoreTestFailures = value;
  }
  public resetIgnoreTestFailures() {
    this._ignoreTestFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTestFailuresInput() {
    return this._ignoreTestFailures;
  }

  // remediate_last_failure - computed: false, optional: true, required: false
  private _remediateLastFailure?: boolean | cdktf.IResolvable; 
  public get remediateLastFailure() {
    return this.getBooleanAttribute('remediate_last_failure');
  }
  public set remediateLastFailure(value: boolean | cdktf.IResolvable) {
    this._remediateLastFailure = value;
  }
  public resetRemediateLastFailure() {
    this._remediateLastFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediateLastFailureInput() {
    return this._remediateLastFailure;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgrade {
  /**
  * CleanupOnFail allows deletion of new resources created during the Helm upgrade action when it fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#cleanup_on_fail DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#cleanup_on_fail}
  */
  readonly cleanupOnFail?: boolean | cdktf.IResolvable;
  /**
  * CRDs upgrade CRDs from the Helm Chart's crds directory according to the CRD upgrade policy provided here. Valid values are 'Skip', 'Create' or 'CreateReplace'. Default is 'Skip' and if omitted CRDs are neither installed nor upgraded. Skip: do neither install nor replace (update) any CRDs. Create: new CRDs are created, existing CRDs are neither updated nor deleted. CreateReplace: new CRDs are created, existing CRDs are updated (replaced) but not deleted. By default, CRDs are not applied during Helm upgrade action. With this option users can opt-in to CRD upgrade, which is not (yet) natively supported by Helm. https://helm.sh/docs/chart_best_practices/custom_resource_definitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#crds DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#crds}
  */
  readonly crds?: string;
  /**
  * DisableHooks prevents hooks from running during the Helm upgrade action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_hooks DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_hooks}
  */
  readonly disableHooks?: boolean | cdktf.IResolvable;
  /**
  * DisableOpenAPIValidation prevents the Helm upgrade action from validating rendered templates against the Kubernetes OpenAPI Schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_open_api_validation DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_open_api_validation}
  */
  readonly disableOpenApiValidation?: boolean | cdktf.IResolvable;
  /**
  * DisableWait disables the waiting for resources to be ready after a Helm upgrade has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_wait DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_wait}
  */
  readonly disableWait?: boolean | cdktf.IResolvable;
  /**
  * DisableWaitForJobs disables waiting for jobs to complete after a Helm upgrade has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#disable_wait_for_jobs DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#disable_wait_for_jobs}
  */
  readonly disableWaitForJobs?: boolean | cdktf.IResolvable;
  /**
  * Force forces resource updates through a replacement strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#force DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * PreserveValues will make Helm reuse the last release's values and merge in overrides from 'Values'. Setting this flag makes the HelmRelease non-declarative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#preserve_values DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#preserve_values}
  */
  readonly preserveValues?: boolean | cdktf.IResolvable;
  /**
  * Remediation holds the remediation configuration for when the Helm upgrade action for the HelmRelease fails. The default is to not perform any action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#remediation DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#remediation}
  */
  readonly remediation?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediation;
  /**
  * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm upgrade action. Defaults to 'HelmReleaseSpec.Timeout'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#timeout DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_on_fail: cdktf.booleanToTerraform(struct!.cleanupOnFail),
    crds: cdktf.stringToTerraform(struct!.crds),
    disable_hooks: cdktf.booleanToTerraform(struct!.disableHooks),
    disable_open_api_validation: cdktf.booleanToTerraform(struct!.disableOpenApiValidation),
    disable_wait: cdktf.booleanToTerraform(struct!.disableWait),
    disable_wait_for_jobs: cdktf.booleanToTerraform(struct!.disableWaitForJobs),
    force: cdktf.booleanToTerraform(struct!.force),
    preserve_values: cdktf.booleanToTerraform(struct!.preserveValues),
    remediation: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediationToTerraform(struct!.remediation),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_on_fail: {
      value: cdktf.booleanToHclTerraform(struct!.cleanupOnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crds: {
      value: cdktf.stringToHclTerraform(struct!.crds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_hooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableHooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_open_api_validation: {
      value: cdktf.booleanToHclTerraform(struct!.disableOpenApiValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_wait: {
      value: cdktf.booleanToHclTerraform(struct!.disableWait),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_wait_for_jobs: {
      value: cdktf.booleanToHclTerraform(struct!.disableWaitForJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_values: {
      value: cdktf.booleanToHclTerraform(struct!.preserveValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remediation: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediationToHclTerraform(struct!.remediation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediation",
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

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupOnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupOnFail = this._cleanupOnFail;
    }
    if (this._crds !== undefined) {
      hasAnyValues = true;
      internalValueResult.crds = this._crds;
    }
    if (this._disableHooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHooks = this._disableHooks;
    }
    if (this._disableOpenApiValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOpenApiValidation = this._disableOpenApiValidation;
    }
    if (this._disableWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWait = this._disableWait;
    }
    if (this._disableWaitForJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWaitForJobs = this._disableWaitForJobs;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._preserveValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveValues = this._preserveValues;
    }
    if (this._remediation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediation = this._remediation?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanupOnFail = undefined;
      this._crds = undefined;
      this._disableHooks = undefined;
      this._disableOpenApiValidation = undefined;
      this._disableWait = undefined;
      this._disableWaitForJobs = undefined;
      this._force = undefined;
      this._preserveValues = undefined;
      this._remediation.internalValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanupOnFail = value.cleanupOnFail;
      this._crds = value.crds;
      this._disableHooks = value.disableHooks;
      this._disableOpenApiValidation = value.disableOpenApiValidation;
      this._disableWait = value.disableWait;
      this._disableWaitForJobs = value.disableWaitForJobs;
      this._force = value.force;
      this._preserveValues = value.preserveValues;
      this._remediation.internalValue = value.remediation;
      this._timeout = value.timeout;
    }
  }

  // cleanup_on_fail - computed: false, optional: true, required: false
  private _cleanupOnFail?: boolean | cdktf.IResolvable; 
  public get cleanupOnFail() {
    return this.getBooleanAttribute('cleanup_on_fail');
  }
  public set cleanupOnFail(value: boolean | cdktf.IResolvable) {
    this._cleanupOnFail = value;
  }
  public resetCleanupOnFail() {
    this._cleanupOnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupOnFailInput() {
    return this._cleanupOnFail;
  }

  // crds - computed: false, optional: true, required: false
  private _crds?: string; 
  public get crds() {
    return this.getStringAttribute('crds');
  }
  public set crds(value: string) {
    this._crds = value;
  }
  public resetCrds() {
    this._crds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crdsInput() {
    return this._crds;
  }

  // disable_hooks - computed: false, optional: true, required: false
  private _disableHooks?: boolean | cdktf.IResolvable; 
  public get disableHooks() {
    return this.getBooleanAttribute('disable_hooks');
  }
  public set disableHooks(value: boolean | cdktf.IResolvable) {
    this._disableHooks = value;
  }
  public resetDisableHooks() {
    this._disableHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHooksInput() {
    return this._disableHooks;
  }

  // disable_open_api_validation - computed: false, optional: true, required: false
  private _disableOpenApiValidation?: boolean | cdktf.IResolvable; 
  public get disableOpenApiValidation() {
    return this.getBooleanAttribute('disable_open_api_validation');
  }
  public set disableOpenApiValidation(value: boolean | cdktf.IResolvable) {
    this._disableOpenApiValidation = value;
  }
  public resetDisableOpenApiValidation() {
    this._disableOpenApiValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOpenApiValidationInput() {
    return this._disableOpenApiValidation;
  }

  // disable_wait - computed: false, optional: true, required: false
  private _disableWait?: boolean | cdktf.IResolvable; 
  public get disableWait() {
    return this.getBooleanAttribute('disable_wait');
  }
  public set disableWait(value: boolean | cdktf.IResolvable) {
    this._disableWait = value;
  }
  public resetDisableWait() {
    this._disableWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWaitInput() {
    return this._disableWait;
  }

  // disable_wait_for_jobs - computed: false, optional: true, required: false
  private _disableWaitForJobs?: boolean | cdktf.IResolvable; 
  public get disableWaitForJobs() {
    return this.getBooleanAttribute('disable_wait_for_jobs');
  }
  public set disableWaitForJobs(value: boolean | cdktf.IResolvable) {
    this._disableWaitForJobs = value;
  }
  public resetDisableWaitForJobs() {
    this._disableWaitForJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWaitForJobsInput() {
    return this._disableWaitForJobs;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // preserve_values - computed: false, optional: true, required: false
  private _preserveValues?: boolean | cdktf.IResolvable; 
  public get preserveValues() {
    return this.getBooleanAttribute('preserve_values');
  }
  public set preserveValues(value: boolean | cdktf.IResolvable) {
    this._preserveValues = value;
  }
  public resetPreserveValues() {
    this._preserveValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveValuesInput() {
    return this._preserveValues;
  }

  // remediation - computed: false, optional: true, required: false
  private _remediation = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediationOutputReference(this, "remediation");
  public get remediation() {
    return this._remediation;
  }
  public putRemediation(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeRemediation) {
    this._remediation.internalValue = value;
  }
  public resetRemediation() {
    this._remediation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation.internalValue;
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
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFrom {
  /**
  * Kind of the values referent, valid values are ('Secret', 'ConfigMap').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#kind DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the values referent. Should reside in the same namespace as the referring resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Optional marks this ValuesReference as optional. When set, a not found error for the values reference is ignored, but any ValuesKey, TargetPath or transient error will still result in a reconciliation failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#optional DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * TargetPath is the YAML dot notation path the value should be merged at. When set, the ValuesKey is expected to be a single flat value. Defaults to 'None', which results in the values getting merged at the root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#target_path DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#target_path}
  */
  readonly targetPath?: string;
  /**
  * ValuesKey is the data key where the values.yaml or a specific value can be found at. Defaults to 'values.yaml'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#values_key DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#values_key}
  */
  readonly valuesKey?: string;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFromToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    target_path: cdktf.stringToTerraform(struct!.targetPath),
    values_key: cdktf.stringToTerraform(struct!.valuesKey),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFromToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_path: {
      value: cdktf.stringToHclTerraform(struct!.targetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_key: {
      value: cdktf.stringToHclTerraform(struct!.valuesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._targetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPath = this._targetPath;
    }
    if (this._valuesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesKey = this._valuesKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._targetPath = undefined;
      this._valuesKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
      this._optional = value.optional;
      this._targetPath = value.targetPath;
      this._valuesKey = value.valuesKey;
    }
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // target_path - computed: false, optional: true, required: false
  private _targetPath?: string; 
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }
  public set targetPath(value: string) {
    this._targetPath = value;
  }
  public resetTargetPath() {
    this._targetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathInput() {
    return this._targetPath;
  }

  // values_key - computed: false, optional: true, required: false
  private _valuesKey?: string; 
  public get valuesKey() {
    return this.getStringAttribute('values_key');
  }
  public set valuesKey(value: string) {
    this._valuesKey = value;
  }
  public resetValuesKey() {
    this._valuesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesKeyInput() {
    return this._valuesKey;
  }
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFromOutputReference {
    return new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpec {
  /**
  * Chart defines the template of the v1beta2.HelmChart that should be created for this HelmRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#chart DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#chart}
  */
  readonly chart?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChart;
  /**
  * ChartRef holds a reference to a source controller resource containing the Helm chart artifact. Note: this field is provisional to the v2 API, and not actively used by v2beta2 HelmReleases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#chart_ref DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#chart_ref}
  */
  readonly chartRef?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRef;
  /**
  * DependsOn may contain a meta.NamespacedObjectReference slice with references to HelmRelease resources that must be ready before this HelmRelease can be reconciled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#depends_on DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#depends_on}
  */
  readonly dependsOn?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOn[] | cdktf.IResolvable;
  /**
  * DriftDetection holds the configuration for detecting and handling differences between the manifest in the Helm storage and the resources currently existing in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#drift_detection DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#drift_detection}
  */
  readonly driftDetection?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetection;
  /**
  * Install holds the configuration for Helm install actions for this HelmRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#install DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#install}
  */
  readonly install?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstall;
  /**
  * Interval at which to reconcile the Helm release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#interval DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#interval}
  */
  readonly interval: string;
  /**
  * KubeConfig for reconciling the HelmRelease on a remote cluster. When used in combination with HelmReleaseSpec.ServiceAccountName, forces the controller to act on behalf of that Service Account at the target cluster. If the --default-service-account flag is set, its value will be used as a controller level fallback for when HelmReleaseSpec.ServiceAccountName is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#kube_config DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#kube_config}
  */
  readonly kubeConfig?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfig;
  /**
  * MaxHistory is the number of revisions saved by Helm for this HelmRelease. Use '0' for an unlimited number of revisions; defaults to '5'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#max_history DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#max_history}
  */
  readonly maxHistory?: number;
  /**
  * PersistentClient tells the controller to use a persistent Kubernetes client for this release. When enabled, the client will be reused for the duration of the reconciliation, instead of being created and destroyed for each (step of a) Helm action. This can improve performance, but may cause issues with some Helm charts that for example do create Custom Resource Definitions during installation outside Helm's CRD lifecycle hooks, which are then not observed to be available by e.g. post-install hooks. If not set, it defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#persistent_client DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#persistent_client}
  */
  readonly persistentClient?: boolean | cdktf.IResolvable;
  /**
  * PostRenderers holds an array of Helm PostRenderers, which will be applied in order of their definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#post_renderers DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#post_renderers}
  */
  readonly postRenderers?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderers[] | cdktf.IResolvable;
  /**
  * ReleaseName used for the Helm release. Defaults to a composition of '[TargetNamespace-]Name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#release_name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#release_name}
  */
  readonly releaseName?: string;
  /**
  * Rollback holds the configuration for Helm rollback actions for this HelmRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#rollback DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#rollback}
  */
  readonly rollback?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollback;
  /**
  * The name of the Kubernetes service account to impersonate when reconciling this HelmRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#service_account_name DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * StorageNamespace used for the Helm storage. Defaults to the namespace of the HelmRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#storage_namespace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#storage_namespace}
  */
  readonly storageNamespace?: string;
  /**
  * Suspend tells the controller to suspend reconciliation for this HelmRelease, it does not apply to already started reconciliations. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#suspend DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * TargetNamespace to target when performing operations for the HelmRelease. Defaults to the namespace of the HelmRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#target_namespace DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#target_namespace}
  */
  readonly targetNamespace?: string;
  /**
  * Test holds the configuration for Helm test actions for this HelmRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#test DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#test}
  */
  readonly test?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTest;
  /**
  * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm action. Defaults to '5m0s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#timeout DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Uninstall holds the configuration for Helm uninstall actions for this HelmRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#uninstall DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#uninstall}
  */
  readonly uninstall?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstall;
  /**
  * Upgrade holds the configuration for Helm upgrade actions for this HelmRelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#upgrade DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#upgrade}
  */
  readonly upgrade?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgrade;
  /**
  * Values holds the values for this Helm release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#values DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#values}
  */
  readonly values?: { [key: string]: string };
  /**
  * ValuesFrom holds references to resources containing Helm values for this HelmRelease, and information about how they should be merged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#values_from DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest#values_from}
  */
  readonly valuesFrom?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFrom[] | cdktf.IResolvable;
}

export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecToTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartToTerraform(struct!.chart),
    chart_ref: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRefToTerraform(struct!.chartRef),
    depends_on: cdktf.listMapper(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOnToTerraform, false)(struct!.dependsOn),
    drift_detection: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionToTerraform(struct!.driftDetection),
    install: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallToTerraform(struct!.install),
    interval: cdktf.stringToTerraform(struct!.interval),
    kube_config: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigToTerraform(struct!.kubeConfig),
    max_history: cdktf.numberToTerraform(struct!.maxHistory),
    persistent_client: cdktf.booleanToTerraform(struct!.persistentClient),
    post_renderers: cdktf.listMapper(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersToTerraform, false)(struct!.postRenderers),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    rollback: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollbackToTerraform(struct!.rollback),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    storage_namespace: cdktf.stringToTerraform(struct!.storageNamespace),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    target_namespace: cdktf.stringToTerraform(struct!.targetNamespace),
    test: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestToTerraform(struct!.test),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    uninstall: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstallToTerraform(struct!.uninstall),
    upgrade: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeToTerraform(struct!.upgrade),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
    values_from: cdktf.listMapper(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFromToTerraform, false)(struct!.valuesFrom),
  }
}


export function dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecToHclTerraform(struct?: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartToHclTerraform(struct!.chart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChart",
    },
    chart_ref: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRefToHclTerraform(struct!.chartRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRef",
    },
    depends_on: {
      value: cdktf.listMapperHcl(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOnToHclTerraform, false)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOnList",
    },
    drift_detection: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionToHclTerraform(struct!.driftDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetection",
    },
    install: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallToHclTerraform(struct!.install),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstall",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_config: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigToHclTerraform(struct!.kubeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfig",
    },
    max_history: {
      value: cdktf.numberToHclTerraform(struct!.maxHistory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persistent_client: {
      value: cdktf.booleanToHclTerraform(struct!.persistentClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post_renderers: {
      value: cdktf.listMapperHcl(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersToHclTerraform, false)(struct!.postRenderers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersList",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollback: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollbackToHclTerraform(struct!.rollback),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollback",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_namespace: {
      value: cdktf.stringToHclTerraform(struct!.storageNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_namespace: {
      value: cdktf.stringToHclTerraform(struct!.targetNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestToHclTerraform(struct!.test),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTest",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uninstall: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstallToHclTerraform(struct!.uninstall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstall",
    },
    upgrade: {
      value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeToHclTerraform(struct!.upgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgrade",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    values_from: {
      value: cdktf.listMapperHcl(dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFromToHclTerraform, false)(struct!.valuesFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart?.internalValue;
    }
    if (this._chartRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartRef = this._chartRef?.internalValue;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._driftDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driftDetection = this._driftDetection?.internalValue;
    }
    if (this._install?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.install = this._install?.internalValue;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._kubeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfig = this._kubeConfig?.internalValue;
    }
    if (this._maxHistory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHistory = this._maxHistory;
    }
    if (this._persistentClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentClient = this._persistentClient;
    }
    if (this._postRenderers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postRenderers = this._postRenderers?.internalValue;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._rollback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollback = this._rollback?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._storageNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageNamespace = this._storageNamespace;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._targetNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNamespace = this._targetNamespace;
    }
    if (this._test?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uninstall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uninstall = this._uninstall?.internalValue;
    }
    if (this._upgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgrade = this._upgrade?.internalValue;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesFrom = this._valuesFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart.internalValue = undefined;
      this._chartRef.internalValue = undefined;
      this._dependsOn.internalValue = undefined;
      this._driftDetection.internalValue = undefined;
      this._install.internalValue = undefined;
      this._interval = undefined;
      this._kubeConfig.internalValue = undefined;
      this._maxHistory = undefined;
      this._persistentClient = undefined;
      this._postRenderers.internalValue = undefined;
      this._releaseName = undefined;
      this._rollback.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._storageNamespace = undefined;
      this._suspend = undefined;
      this._targetNamespace = undefined;
      this._test.internalValue = undefined;
      this._timeout = undefined;
      this._uninstall.internalValue = undefined;
      this._upgrade.internalValue = undefined;
      this._values = undefined;
      this._valuesFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart.internalValue = value.chart;
      this._chartRef.internalValue = value.chartRef;
      this._dependsOn.internalValue = value.dependsOn;
      this._driftDetection.internalValue = value.driftDetection;
      this._install.internalValue = value.install;
      this._interval = value.interval;
      this._kubeConfig.internalValue = value.kubeConfig;
      this._maxHistory = value.maxHistory;
      this._persistentClient = value.persistentClient;
      this._postRenderers.internalValue = value.postRenderers;
      this._releaseName = value.releaseName;
      this._rollback.internalValue = value.rollback;
      this._serviceAccountName = value.serviceAccountName;
      this._storageNamespace = value.storageNamespace;
      this._suspend = value.suspend;
      this._targetNamespace = value.targetNamespace;
      this._test.internalValue = value.test;
      this._timeout = value.timeout;
      this._uninstall.internalValue = value.uninstall;
      this._upgrade.internalValue = value.upgrade;
      this._values = value.values;
      this._valuesFrom.internalValue = value.valuesFrom;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartOutputReference(this, "chart");
  public get chart() {
    return this._chart;
  }
  public putChart(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChart) {
    this._chart.internalValue = value;
  }
  public resetChart() {
    this._chart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart.internalValue;
  }

  // chart_ref - computed: false, optional: true, required: false
  private _chartRef = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRefOutputReference(this, "chart_ref");
  public get chartRef() {
    return this._chartRef;
  }
  public putChartRef(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecChartRef) {
    this._chartRef.internalValue = value;
  }
  public resetChartRef() {
    this._chartRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartRefInput() {
    return this._chartRef.internalValue;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDependsOn[] | cdktf.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // drift_detection - computed: false, optional: true, required: false
  private _driftDetection = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetectionOutputReference(this, "drift_detection");
  public get driftDetection() {
    return this._driftDetection;
  }
  public putDriftDetection(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecDriftDetection) {
    this._driftDetection.internalValue = value;
  }
  public resetDriftDetection() {
    this._driftDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftDetectionInput() {
    return this._driftDetection.internalValue;
  }

  // install - computed: false, optional: true, required: false
  private _install = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstallOutputReference(this, "install");
  public get install() {
    return this._install;
  }
  public putInstall(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecInstall) {
    this._install.internalValue = value;
  }
  public resetInstall() {
    this._install.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install.internalValue;
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

  // kube_config - computed: false, optional: true, required: false
  private _kubeConfig = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfigOutputReference(this, "kube_config");
  public get kubeConfig() {
    return this._kubeConfig;
  }
  public putKubeConfig(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecKubeConfig) {
    this._kubeConfig.internalValue = value;
  }
  public resetKubeConfig() {
    this._kubeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig.internalValue;
  }

  // max_history - computed: false, optional: true, required: false
  private _maxHistory?: number; 
  public get maxHistory() {
    return this.getNumberAttribute('max_history');
  }
  public set maxHistory(value: number) {
    this._maxHistory = value;
  }
  public resetMaxHistory() {
    this._maxHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHistoryInput() {
    return this._maxHistory;
  }

  // persistent_client - computed: false, optional: true, required: false
  private _persistentClient?: boolean | cdktf.IResolvable; 
  public get persistentClient() {
    return this.getBooleanAttribute('persistent_client');
  }
  public set persistentClient(value: boolean | cdktf.IResolvable) {
    this._persistentClient = value;
  }
  public resetPersistentClient() {
    this._persistentClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentClientInput() {
    return this._persistentClient;
  }

  // post_renderers - computed: false, optional: true, required: false
  private _postRenderers = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderersList(this, "post_renderers", false);
  public get postRenderers() {
    return this._postRenderers;
  }
  public putPostRenderers(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecPostRenderers[] | cdktf.IResolvable) {
    this._postRenderers.internalValue = value;
  }
  public resetPostRenderers() {
    this._postRenderers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRenderersInput() {
    return this._postRenderers.internalValue;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // rollback - computed: false, optional: true, required: false
  private _rollback = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollbackOutputReference(this, "rollback");
  public get rollback() {
    return this._rollback;
  }
  public putRollback(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecRollback) {
    this._rollback.internalValue = value;
  }
  public resetRollback() {
    this._rollback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // storage_namespace - computed: false, optional: true, required: false
  private _storageNamespace?: string; 
  public get storageNamespace() {
    return this.getStringAttribute('storage_namespace');
  }
  public set storageNamespace(value: string) {
    this._storageNamespace = value;
  }
  public resetStorageNamespace() {
    this._storageNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNamespaceInput() {
    return this._storageNamespace;
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

  // target_namespace - computed: false, optional: true, required: false
  private _targetNamespace?: string; 
  public get targetNamespace() {
    return this.getStringAttribute('target_namespace');
  }
  public set targetNamespace(value: string) {
    this._targetNamespace = value;
  }
  public resetTargetNamespace() {
    this._targetNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespaceInput() {
    return this._targetNamespace;
  }

  // test - computed: false, optional: true, required: false
  private _test = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTestOutputReference(this, "test");
  public get test() {
    return this._test;
  }
  public putTest(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecTest) {
    this._test.internalValue = value;
  }
  public resetTest() {
    this._test.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test.internalValue;
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

  // uninstall - computed: false, optional: true, required: false
  private _uninstall = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstallOutputReference(this, "uninstall");
  public get uninstall() {
    return this._uninstall;
  }
  public putUninstall(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUninstall) {
    this._uninstall.internalValue = value;
  }
  public resetUninstall() {
    this._uninstall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uninstallInput() {
    return this._uninstall.internalValue;
  }

  // upgrade - computed: false, optional: true, required: false
  private _upgrade = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgradeOutputReference(this, "upgrade");
  public get upgrade() {
    return this._upgrade;
  }
  public putUpgrade(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecUpgrade) {
    this._upgrade.internalValue = value;
  }
  public resetUpgrade() {
    this._upgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInput() {
    return this._upgrade.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_from - computed: false, optional: true, required: false
  private _valuesFrom = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFromList(this, "values_from", false);
  public get valuesFrom() {
    return this._valuesFrom;
  }
  public putValuesFrom(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecValuesFrom[] | cdktf.IResolvable) {
    this._valuesFrom.internalValue = value;
  }
  public resetValuesFrom() {
    this._valuesFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesFromInput() {
    return this._valuesFrom.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest k8s_helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest}
*/
export class DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest k8s_helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_helm_toolkit_fluxcd_io_helm_release_v2beta2_manifest',
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
  private _metadata = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpec) {
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
      metadata: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHelmToolkitFluxcdIoHelmReleaseV2Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
