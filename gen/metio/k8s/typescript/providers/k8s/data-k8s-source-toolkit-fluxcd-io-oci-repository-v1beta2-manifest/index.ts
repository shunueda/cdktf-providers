// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#metadata DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadata;
  /**
  * OCIRepositorySpec defines the desired state of OCIRepository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#spec DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpec;
}
export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#annotations DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#labels DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#name DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#namespace DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadataToTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#name DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelector {
  /**
  * MediaType specifies the OCI media type of the layer which should be extracted from the OCI Artifact. The first layer matching this type is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#media_type DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#media_type}
  */
  readonly mediaType?: string;
  /**
  * Operation specifies how the selected layer should be processed. By default, the layer compressed content is extracted to storage. When the operation is set to 'copy', the layer compressed content is persisted to storage as it is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#operation DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#operation}
  */
  readonly operation?: string;
}

export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelectorToTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    operation: cdktf.stringToTerraform(struct!.operation),
  }
}


export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelectorToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mediaType = undefined;
      this._operation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mediaType = value.mediaType;
      this._operation = value.operation;
    }
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }
}
export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#name DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRef {
  /**
  * Digest is the image digest to pull, takes precedence over SemVer. The value should be in the format 'sha256:<HASH>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#digest DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#digest}
  */
  readonly digest?: string;
  /**
  * SemVer is the range of tags to pull selecting the latest within the range, takes precedence over Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#semver DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#semver}
  */
  readonly semver?: string;
  /**
  * SemverFilter is a regex pattern to filter the tags within the SemVer range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#semver_filter DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#semver_filter}
  */
  readonly semverFilter?: string;
  /**
  * Tag is the image tag to pull, defaults to latest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#tag DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
    semver: cdktf.stringToTerraform(struct!.semver),
    semver_filter: cdktf.stringToTerraform(struct!.semverFilter),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRef | cdktf.IResolvable): any {
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
    semver: {
      value: cdktf.stringToHclTerraform(struct!.semver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    semver_filter: {
      value: cdktf.stringToHclTerraform(struct!.semverFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._semver !== undefined) {
      hasAnyValues = true;
      internalValueResult.semver = this._semver;
    }
    if (this._semverFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.semverFilter = this._semverFilter;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
      this._semver = undefined;
      this._semverFilter = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digest = value.digest;
      this._semver = value.semver;
      this._semverFilter = value.semverFilter;
      this._tag = value.tag;
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

  // semver - computed: false, optional: true, required: false
  private _semver?: string; 
  public get semver() {
    return this.getStringAttribute('semver');
  }
  public set semver(value: string) {
    this._semver = value;
  }
  public resetSemver() {
    this._semver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semverInput() {
    return this._semver;
  }

  // semver_filter - computed: false, optional: true, required: false
  private _semverFilter?: string; 
  public get semverFilter() {
    return this.getStringAttribute('semver_filter');
  }
  public set semverFilter(value: string) {
    this._semverFilter = value;
  }
  public resetSemverFilter() {
    this._semverFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semverFilterInput() {
    return this._semverFilter;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#name DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentity {
  /**
  * Issuer specifies the regex pattern to match against to verify the OIDC issuer in the Fulcio certificate. The pattern must be a valid Go regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#issuer DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#issuer}
  */
  readonly issuer: string;
  /**
  * Subject specifies the regex pattern to match against to verify the identity subject in the Fulcio certificate. The pattern must be a valid Go regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#subject DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#subject}
  */
  readonly subject: string;
}

export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentityToTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentityToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentityList extends cdktf.ComplexList {
  public internalValue? : DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentity[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentityOutputReference {
    return new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#name DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRefToTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRefToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRef | cdktf.IResolvable): any {
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

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerify {
  /**
  * MatchOIDCIdentity specifies the identity matching criteria to use while verifying an OCI artifact which was signed using Cosign keyless signing. The artifact's identity is deemed to be verified if any of the specified matchers match against the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#match_oidc_identity DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#match_oidc_identity}
  */
  readonly matchOidcIdentity?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentity[] | cdktf.IResolvable;
  /**
  * Provider specifies the technology used to sign the OCI Artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#provider DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#provider}
  */
  readonly provider: string;
  /**
  * SecretRef specifies the Kubernetes Secret containing the trusted public keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#secret_ref DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRef;
}

export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyToTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_oidc_identity: cdktf.listMapper(dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentityToTerraform, false)(struct!.matchOidcIdentity),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_ref: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_oidc_identity: {
      value: cdktf.listMapperHcl(dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentityToHclTerraform, false)(struct!.matchOidcIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentityList",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOidcIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOidcIdentity = this._matchOidcIdentity?.internalValue;
    }
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

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchOidcIdentity.internalValue = undefined;
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
      this._matchOidcIdentity.internalValue = value.matchOidcIdentity;
      this._provider = value.provider;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // match_oidc_identity - computed: false, optional: true, required: false
  private _matchOidcIdentity = new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentityList(this, "match_oidc_identity", false);
  public get matchOidcIdentity() {
    return this._matchOidcIdentity;
  }
  public putMatchOidcIdentity(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyMatchOidcIdentity[] | cdktf.IResolvable) {
    this._matchOidcIdentity.internalValue = value;
  }
  public resetMatchOidcIdentity() {
    this._matchOidcIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOidcIdentityInput() {
    return this._matchOidcIdentity.internalValue;
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
  private _secretRef = new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifySecretRef) {
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
export interface DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpec {
  /**
  * CertSecretRef can be given the name of a Secret containing either or both of - a PEM-encoded client certificate ('tls.crt') and private key ('tls.key'); - a PEM-encoded CA certificate ('ca.crt') and whichever are supplied, will be used for connecting to the registry. The client cert and key are useful if you are authenticating with a certificate; the CA cert is useful if you are using a self-signed server certificate. The Secret must be of type 'Opaque' or 'kubernetes.io/tls'. Note: Support for the 'caFile', 'certFile' and 'keyFile' keys have been deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#cert_secret_ref DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRef;
  /**
  * Ignore overrides the set of excluded patterns in the .sourceignore format (which is the same as .gitignore). If not provided, a default will be used, consult the documentation for your version to find out what those are.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#ignore DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#ignore}
  */
  readonly ignore?: string;
  /**
  * Insecure allows connecting to a non-TLS HTTP container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#insecure DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Interval at which the OCIRepository URL is checked for updates. This interval is approximate and may be subject to jitter to ensure efficient use of resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#interval DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#interval}
  */
  readonly interval: string;
  /**
  * LayerSelector specifies which layer should be extracted from the OCI artifact. When not specified, the first layer found in the artifact is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#layer_selector DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#layer_selector}
  */
  readonly layerSelector?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelector;
  /**
  * The provider used for authentication, can be 'aws', 'azure', 'gcp' or 'generic'. When not specified, defaults to 'generic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#provider DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#provider}
  */
  readonly provider?: string;
  /**
  * ProxySecretRef specifies the Secret containing the proxy configuration to use while communicating with the container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#proxy_secret_ref DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#proxy_secret_ref}
  */
  readonly proxySecretRef?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRef;
  /**
  * The OCI reference to pull and monitor for changes, defaults to the latest tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#ref DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#ref}
  */
  readonly ref?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRef;
  /**
  * SecretRef contains the secret name containing the registry login credentials to resolve image metadata. The secret must be of type kubernetes.io/dockerconfigjson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#secret_ref DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRef;
  /**
  * ServiceAccountName is the name of the Kubernetes ServiceAccount used to authenticate the image pull if the service account has attached pull secrets. For more information: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#add-imagepullsecrets-to-a-service-account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#service_account_name DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * This flag tells the controller to suspend the reconciliation of this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#suspend DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * The timeout for remote OCI Repository operations like pulling, defaults to 60s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#timeout DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * URL is a reference to an OCI artifact repository hosted on a remote container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#url DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#url}
  */
  readonly url: string;
  /**
  * Verify contains the secret name containing the trusted public keys used to verify the signature and specifies which provider to use to check whether OCI image is authentic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#verify DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest#verify}
  */
  readonly verify?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerify;
}

export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecToTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_secret_ref: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRefToTerraform(struct!.certSecretRef),
    ignore: cdktf.stringToTerraform(struct!.ignore),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    interval: cdktf.stringToTerraform(struct!.interval),
    layer_selector: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelectorToTerraform(struct!.layerSelector),
    provider: cdktf.stringToTerraform(struct!.provider),
    proxy_secret_ref: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRefToTerraform(struct!.proxySecretRef),
    ref: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRefToTerraform(struct!.ref),
    secret_ref: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRefToTerraform(struct!.secretRef),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
    verify: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyToTerraform(struct!.verify),
  }
}


export function dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_secret_ref: {
      value: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRef",
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
    layer_selector: {
      value: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelectorToHclTerraform(struct!.layerSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelector",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_secret_ref: {
      value: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRefToHclTerraform(struct!.proxySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRef",
    },
    ref: {
      value: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRef",
    },
    secret_ref: {
      value: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRef",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
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
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
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
    verify: {
      value: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyToHclTerraform(struct!.verify),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerify",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretRef = this._certSecretRef?.internalValue;
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
    if (this._layerSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layerSelector = this._layerSelector?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._proxySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxySecretRef = this._proxySecretRef?.internalValue;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._verify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = undefined;
      this._ignore = undefined;
      this._insecure = undefined;
      this._interval = undefined;
      this._layerSelector.internalValue = undefined;
      this._provider = undefined;
      this._proxySecretRef.internalValue = undefined;
      this._ref.internalValue = undefined;
      this._secretRef.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._suspend = undefined;
      this._timeout = undefined;
      this._url = undefined;
      this._verify.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = value.certSecretRef;
      this._ignore = value.ignore;
      this._insecure = value.insecure;
      this._interval = value.interval;
      this._layerSelector.internalValue = value.layerSelector;
      this._provider = value.provider;
      this._proxySecretRef.internalValue = value.proxySecretRef;
      this._ref.internalValue = value.ref;
      this._secretRef.internalValue = value.secretRef;
      this._serviceAccountName = value.serviceAccountName;
      this._suspend = value.suspend;
      this._timeout = value.timeout;
      this._url = value.url;
      this._verify.internalValue = value.verify;
    }
  }

  // cert_secret_ref - computed: false, optional: true, required: false
  private _certSecretRef = new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
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

  // layer_selector - computed: false, optional: true, required: false
  private _layerSelector = new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelectorOutputReference(this, "layer_selector");
  public get layerSelector() {
    return this._layerSelector;
  }
  public putLayerSelector(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecLayerSelector) {
    this._layerSelector.internalValue = value;
  }
  public resetLayerSelector() {
    this._layerSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerSelectorInput() {
    return this._layerSelector.internalValue;
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

  // proxy_secret_ref - computed: false, optional: true, required: false
  private _proxySecretRef = new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRefOutputReference(this, "proxy_secret_ref");
  public get proxySecretRef() {
    return this._proxySecretRef;
  }
  public putProxySecretRef(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecProxySecretRef) {
    this._proxySecretRef.internalValue = value;
  }
  public resetProxySecretRef() {
    this._proxySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySecretRefInput() {
    return this._proxySecretRef.internalValue;
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecRef) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // verify - computed: false, optional: true, required: false
  private _verify = new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerifyOutputReference(this, "verify");
  public get verify() {
    return this._verify;
  }
  public putVerify(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecVerify) {
    this._verify.internalValue = value;
  }
  public resetVerify() {
    this._verify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest k8s_source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest}
*/
export class DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest k8s_source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_source_toolkit_fluxcd_io_oci_repository_v1beta2_manifest',
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
  private _metadata = new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpec) {
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
      metadata: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSourceToolkitFluxcdIoOciRepositoryV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
