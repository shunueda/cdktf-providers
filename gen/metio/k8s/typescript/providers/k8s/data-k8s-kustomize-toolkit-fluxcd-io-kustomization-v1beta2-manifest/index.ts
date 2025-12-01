// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#metadata DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadata;
  /**
  * KustomizationSpec defines the configuration to calculate the desired state from a Source using Kustomize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#spec DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpec;
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#annotations DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#labels DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadataToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadata {
  /**
  * Annotations to be added to the object's metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#annotations DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to the object's metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#labels DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadataToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadataToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadata | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRefToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRefToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryption {
  /**
  * Provider is the name of the decryption engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#provider DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#provider}
  */
  readonly provider: string;
  /**
  * The secret name containing the private OpenPGP keys used for decryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#secret_ref DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRef;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_ref: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryption | cdktf.IResolvable): any {
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
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryption | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionSecretRef) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOn {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, when not specified it acts as LocalObjectReference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOnToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOnToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOn | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOn | cdktf.IResolvable | undefined) {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOnList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOn[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOnOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecks {
  /**
  * API version of the referent, if not specified the Kubernetes preferred version will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#api_version DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#kind DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, when not specified it acts as LocalObjectReference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecksToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecks | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecksToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecks | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecks | cdktf.IResolvable | undefined) {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecksList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecksOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImages {
  /**
  * Digest is the value used to replace the original image tag. If digest is present NewTag value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#digest DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#digest}
  */
  readonly digest?: string;
  /**
  * Name is a tag-less image name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * NewName is the value used to replace the original name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#new_name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#new_name}
  */
  readonly newName?: string;
  /**
  * NewTag is the value used to replace the original tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#new_tag DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#new_tag}
  */
  readonly newTag?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImagesToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImages | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImagesToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImages | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImages | cdktf.IResolvable | undefined) {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImagesOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRef {
  /**
  * Key in the Secret, when not specified an implementation-specific default key is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#key DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Name of the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRefToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRefToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfig {
  /**
  * SecretRef holds the name of a secret that contains a key with the kubeconfig file as the value. If no key is set, the key will default to 'value'. It is recommended that the kubeconfig is self-contained, and the secret is regularly updated if credentials such as a cloud-access-token expire. Cloud specific 'cmd-path' auth helpers will not function without adding binaries and credentials to the Pod that is responsible for reconciling Kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#secret_ref DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#secret_ref}
  */
  readonly secretRef: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRef;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfig | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTarget {
  /**
  * AnnotationSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#annotation_selector DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Group is the API group to select resources from. Together with Version and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#group DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind of the API Group to select resources from. Together with Group and Version it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#kind DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * LabelSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#label_selector DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Name to match resources with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace to select resources from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Version of the API Group to select resources from. Together with Group and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#version DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTargetToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTarget | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTargetToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTarget | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTarget | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatches {
  /**
  * Patch contains an inline StrategicMerge patch or an inline JSON6902 patch with an array of operation objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#patch DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#patch}
  */
  readonly patch: string;
  /**
  * Target points to the resources that the patch document should be applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#target DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#target}
  */
  readonly target?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTarget;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch: cdktf.stringToTerraform(struct!.patch),
    target: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTargetToTerraform(struct!.target),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatches | cdktf.IResolvable): any {
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
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatches | cdktf.IResolvable | undefined) {
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
  private _target = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesTarget) {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Patch {
  /**
  * From contains a JSON-pointer value that references a location within the target document where the operation is performed. The meaning of the value depends on the value of Op, and is NOT taken into account by all operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#from DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#from}
  */
  readonly from?: string;
  /**
  * Op indicates the operation to perform. Its value MUST be one of 'add', 'remove', 'replace', 'move', 'copy', or 'test'. https://datatracker.ietf.org/doc/html/rfc6902#section-4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#op DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#op}
  */
  readonly op: string;
  /**
  * Path contains the JSON-pointer value that references a location within the target document where the operation is performed. The meaning of the value depends on the value of Op.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#path DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#path}
  */
  readonly path: string;
  /**
  * Value contains a valid JSON structure. The meaning of the value depends on the value of Op, and is NOT taken into account by all operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#value DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902PatchToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Patch | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902PatchToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Patch | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902PatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Patch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Patch | cdktf.IResolvable | undefined) {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902PatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Patch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902PatchOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902PatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Target {
  /**
  * AnnotationSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#annotation_selector DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Group is the API group to select resources from. Together with Version and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#group DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind of the API Group to select resources from. Together with Group and Version it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#kind DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * LabelSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#label_selector DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Name to match resources with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace to select resources from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Version of the API Group to select resources from. Together with Group and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#version DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902TargetToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Target | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902TargetToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Target | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902TargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Target | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Target | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902 {
  /**
  * Patch contains the JSON6902 patch document with an array of operation objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#patch DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#patch}
  */
  readonly patch: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Patch[] | cdktf.IResolvable;
  /**
  * Target points to the resources that the patch document should be applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#target DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#target}
  */
  readonly target: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Target;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902ToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902PatchToTerraform, false)(struct!.patch),
    target: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902TargetToTerraform(struct!.target),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902ToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902PatchToHclTerraform, false)(struct!.patch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902PatchList",
    },
    target: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902TargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Target",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902 | cdktf.IResolvable | undefined) {
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
  private _patch = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902PatchList(this, "patch", false);
  public get patch() {
    return this._patch;
  }
  public putPatch(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Patch[] | cdktf.IResolvable) {
    this._patch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902TargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902Target) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902List extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902OutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFrom {
  /**
  * Kind of the values referent, valid values are ('Secret', 'ConfigMap').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#kind DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the values referent. Should reside in the same namespace as the referring resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Optional indicates whether the referenced resource must exist, or whether to tolerate its absence. If true and the referenced resource is absent, proceed as if the resource was present but empty, without any variables defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#optional DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFromToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFromToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFrom | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFrom | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._optional = undefined;
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
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFromOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuild {
  /**
  * Substitute holds a map of key/value pairs. The variables defined in your YAML manifests that match any of the keys defined in the map will be substituted with the set value. Includes support for bash string replacement functions e.g. ${var:=default}, ${var:position} and ${var/substring/replacement}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#substitute DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#substitute}
  */
  readonly substitute?: { [key: string]: string };
  /**
  * SubstituteFrom holds references to ConfigMaps and Secrets containing the variables and their values to be substituted in the YAML manifests. The ConfigMap and the Secret data keys represent the var names and they must match the vars declared in the manifests for the substitution to happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#substitute_from DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#substitute_from}
  */
  readonly substituteFrom?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFrom[] | cdktf.IResolvable;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    substitute: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.substitute),
    substitute_from: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFromToTerraform, false)(struct!.substituteFrom),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    substitute: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.substitute),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    substitute_from: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFromToHclTerraform, false)(struct!.substituteFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuild | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._substitute !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitute = this._substitute;
    }
    if (this._substituteFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.substituteFrom = this._substituteFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuild | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._substitute = undefined;
      this._substituteFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._substitute = value.substitute;
      this._substituteFrom.internalValue = value.substituteFrom;
    }
  }

  // substitute - computed: false, optional: true, required: false
  private _substitute?: { [key: string]: string }; 
  public get substitute() {
    return this.getStringMapAttribute('substitute');
  }
  public set substitute(value: { [key: string]: string }) {
    this._substitute = value;
  }
  public resetSubstitute() {
    this._substitute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteInput() {
    return this._substitute;
  }

  // substitute_from - computed: false, optional: true, required: false
  private _substituteFrom = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFromList(this, "substitute_from", false);
  public get substituteFrom() {
    return this._substituteFrom;
  }
  public putSubstituteFrom(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildSubstituteFrom[] | cdktf.IResolvable) {
    this._substituteFrom.internalValue = value;
  }
  public resetSubstituteFrom() {
    this._substituteFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteFromInput() {
    return this._substituteFrom.internalValue;
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#api_version DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#kind DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, defaults to the namespace of the Kubernetes resource object that contains the reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRefToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRef | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRefToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRef | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpec {
  /**
  * CommonMetadata specifies the common labels and annotations that are applied to all resources. Any existing label or annotation will be overridden if its key matches a common one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#common_metadata DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#common_metadata}
  */
  readonly commonMetadata?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadata;
  /**
  * Components specifies relative paths to specifications of other Components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#components DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#components}
  */
  readonly components?: string[];
  /**
  * Decrypt Kubernetes secrets before applying them on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#decryption DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#decryption}
  */
  readonly decryption?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryption;
  /**
  * DependsOn may contain a meta.NamespacedObjectReference slice with references to Kustomization resources that must be ready before this Kustomization can be reconciled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#depends_on DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#depends_on}
  */
  readonly dependsOn?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOn[] | cdktf.IResolvable;
  /**
  * Force instructs the controller to recreate resources when patching fails due to an immutable field change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#force DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * A list of resources to be included in the health assessment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#health_checks DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#health_checks}
  */
  readonly healthChecks?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecks[] | cdktf.IResolvable;
  /**
  * Images is a list of (image name, new name, new tag or digest) for changing image names, tags or digests. This can also be achieved with a patch, but this operator is simpler to specify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#images DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#images}
  */
  readonly images?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImages[] | cdktf.IResolvable;
  /**
  * The interval at which to reconcile the Kustomization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#interval DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#interval}
  */
  readonly interval: string;
  /**
  * The KubeConfig for reconciling the Kustomization on a remote cluster. When used in combination with KustomizationSpec.ServiceAccountName, forces the controller to act on behalf of that Service Account at the target cluster. If the --default-service-account flag is set, its value will be used as a controller level fallback for when KustomizationSpec.ServiceAccountName is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#kube_config DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#kube_config}
  */
  readonly kubeConfig?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfig;
  /**
  * Strategic merge and JSON patches, defined as inline YAML objects, capable of targeting objects based on kind, label and annotation selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#patches DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#patches}
  */
  readonly patches?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatches[] | cdktf.IResolvable;
  /**
  * JSON 6902 patches, defined as inline YAML objects. Deprecated: Use Patches instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#patches_json6902 DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#patches_json6902}
  */
  readonly patchesJson6902?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902[] | cdktf.IResolvable;
  /**
  * Strategic merge patches, defined as inline YAML objects. Deprecated: Use Patches instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#patches_strategic_merge DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#patches_strategic_merge}
  */
  readonly patchesStrategicMerge?: string[];
  /**
  * Path to the directory containing the kustomization.yaml file, or the set of plain YAMLs a kustomization.yaml should be generated for. Defaults to 'None', which translates to the root path of the SourceRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#path DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#path}
  */
  readonly path?: string;
  /**
  * PostBuild describes which actions to perform on the YAML manifest generated by building the kustomize overlay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#post_build DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#post_build}
  */
  readonly postBuild?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuild;
  /**
  * Prune enables garbage collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#prune DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#prune}
  */
  readonly prune: boolean | cdktf.IResolvable;
  /**
  * The interval at which to retry a previously failed reconciliation. When not specified, the controller uses the KustomizationSpec.Interval value to retry failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#retry_interval DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#retry_interval}
  */
  readonly retryInterval?: string;
  /**
  * The name of the Kubernetes service account to impersonate when reconciling this Kustomization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#service_account_name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Reference of the source where the kustomization file is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#source_ref DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#source_ref}
  */
  readonly sourceRef: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRef;
  /**
  * This flag tells the controller to suspend subsequent kustomize executions, it does not apply to already started executions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#suspend DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * TargetNamespace sets or overrides the namespace in the kustomization.yaml file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#target_namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#target_namespace}
  */
  readonly targetNamespace?: string;
  /**
  * Timeout for validation, apply and health checking operations. Defaults to 'Interval' duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#timeout DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Deprecated: Not used in v1beta2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#validation DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#validation}
  */
  readonly validation?: string;
  /**
  * Wait instructs the controller to check the health of all the reconciled resources. When enabled, the HealthChecks are ignored. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#wait DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_metadata: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadataToTerraform(struct!.commonMetadata),
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    decryption: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionToTerraform(struct!.decryption),
    depends_on: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOnToTerraform, false)(struct!.dependsOn),
    force: cdktf.booleanToTerraform(struct!.force),
    health_checks: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecksToTerraform, false)(struct!.healthChecks),
    images: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImagesToTerraform, false)(struct!.images),
    interval: cdktf.stringToTerraform(struct!.interval),
    kube_config: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigToTerraform(struct!.kubeConfig),
    patches: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesToTerraform, false)(struct!.patches),
    patches_json6902: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902ToTerraform, false)(struct!.patchesJson6902),
    patches_strategic_merge: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patchesStrategicMerge),
    path: cdktf.stringToTerraform(struct!.path),
    post_build: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildToTerraform(struct!.postBuild),
    prune: cdktf.booleanToTerraform(struct!.prune),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    source_ref: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRefToTerraform(struct!.sourceRef),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    target_namespace: cdktf.stringToTerraform(struct!.targetNamespace),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    validation: cdktf.stringToTerraform(struct!.validation),
    wait: cdktf.booleanToTerraform(struct!.wait),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_metadata: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadataToHclTerraform(struct!.commonMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadata",
    },
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    decryption: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionToHclTerraform(struct!.decryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryption",
    },
    depends_on: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOnToHclTerraform, false)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOnList",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_checks: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecksToHclTerraform, false)(struct!.healthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecksList",
    },
    images: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImagesToHclTerraform, false)(struct!.images),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImagesList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_config: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigToHclTerraform(struct!.kubeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfig",
    },
    patches: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesList",
    },
    patches_json6902: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902ToHclTerraform, false)(struct!.patchesJson6902),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902List",
    },
    patches_strategic_merge: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patchesStrategicMerge),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_build: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildToHclTerraform(struct!.postBuild),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuild",
    },
    prune: {
      value: cdktf.booleanToHclTerraform(struct!.prune),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ref: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRef",
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
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: cdktf.stringToHclTerraform(struct!.validation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.booleanToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonMetadata = this._commonMetadata?.internalValue;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._decryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryption = this._decryption?.internalValue;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._healthChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthChecks = this._healthChecks?.internalValue;
    }
    if (this._images?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images?.internalValue;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._kubeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfig = this._kubeConfig?.internalValue;
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
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._postBuild?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postBuild = this._postBuild?.internalValue;
    }
    if (this._prune !== undefined) {
      hasAnyValues = true;
      internalValueResult.prune = this._prune;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._sourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRef = this._sourceRef?.internalValue;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._targetNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNamespace = this._targetNamespace;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._validation !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonMetadata.internalValue = undefined;
      this._components = undefined;
      this._decryption.internalValue = undefined;
      this._dependsOn.internalValue = undefined;
      this._force = undefined;
      this._healthChecks.internalValue = undefined;
      this._images.internalValue = undefined;
      this._interval = undefined;
      this._kubeConfig.internalValue = undefined;
      this._patches.internalValue = undefined;
      this._patchesJson6902.internalValue = undefined;
      this._patchesStrategicMerge = undefined;
      this._path = undefined;
      this._postBuild.internalValue = undefined;
      this._prune = undefined;
      this._retryInterval = undefined;
      this._serviceAccountName = undefined;
      this._sourceRef.internalValue = undefined;
      this._suspend = undefined;
      this._targetNamespace = undefined;
      this._timeout = undefined;
      this._validation = undefined;
      this._wait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonMetadata.internalValue = value.commonMetadata;
      this._components = value.components;
      this._decryption.internalValue = value.decryption;
      this._dependsOn.internalValue = value.dependsOn;
      this._force = value.force;
      this._healthChecks.internalValue = value.healthChecks;
      this._images.internalValue = value.images;
      this._interval = value.interval;
      this._kubeConfig.internalValue = value.kubeConfig;
      this._patches.internalValue = value.patches;
      this._patchesJson6902.internalValue = value.patchesJson6902;
      this._patchesStrategicMerge = value.patchesStrategicMerge;
      this._path = value.path;
      this._postBuild.internalValue = value.postBuild;
      this._prune = value.prune;
      this._retryInterval = value.retryInterval;
      this._serviceAccountName = value.serviceAccountName;
      this._sourceRef.internalValue = value.sourceRef;
      this._suspend = value.suspend;
      this._targetNamespace = value.targetNamespace;
      this._timeout = value.timeout;
      this._validation = value.validation;
      this._wait = value.wait;
    }
  }

  // common_metadata - computed: false, optional: true, required: false
  private _commonMetadata = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadataOutputReference(this, "common_metadata");
  public get commonMetadata() {
    return this._commonMetadata;
  }
  public putCommonMetadata(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecCommonMetadata) {
    this._commonMetadata.internalValue = value;
  }
  public resetCommonMetadata() {
    this._commonMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonMetadataInput() {
    return this._commonMetadata.internalValue;
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // decryption - computed: false, optional: true, required: false
  private _decryption = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryptionOutputReference(this, "decryption");
  public get decryption() {
    return this._decryption;
  }
  public putDecryption(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDecryption) {
    this._decryption.internalValue = value;
  }
  public resetDecryption() {
    this._decryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionInput() {
    return this._decryption.internalValue;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecDependsOn[] | cdktf.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
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

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecHealthChecks[] | cdktf.IResolvable) {
    this._healthChecks.internalValue = value;
  }
  public resetHealthChecks() {
    this._healthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
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
  private _kubeConfig = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfigOutputReference(this, "kube_config");
  public get kubeConfig() {
    return this._kubeConfig;
  }
  public putKubeConfig(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecKubeConfig) {
    this._kubeConfig.internalValue = value;
  }
  public resetKubeConfig() {
    this._kubeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig.internalValue;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatches[] | cdktf.IResolvable) {
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
  private _patchesJson6902 = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902List(this, "patches_json6902", false);
  public get patchesJson6902() {
    return this._patchesJson6902;
  }
  public putPatchesJson6902(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPatchesJson6902[] | cdktf.IResolvable) {
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // post_build - computed: false, optional: true, required: false
  private _postBuild = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuildOutputReference(this, "post_build");
  public get postBuild() {
    return this._postBuild;
  }
  public putPostBuild(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecPostBuild) {
    this._postBuild.internalValue = value;
  }
  public resetPostBuild() {
    this._postBuild.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBuildInput() {
    return this._postBuild.internalValue;
  }

  // prune - computed: false, optional: false, required: true
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
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

  // source_ref - computed: false, optional: false, required: true
  private _sourceRef = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecSourceRef) {
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

  // validation - computed: false, optional: true, required: false
  private _validation?: string; 
  public get validation() {
    return this.getStringAttribute('validation');
  }
  public set validation(value: string) {
    this._validation = value;
  }
  public resetValidation() {
    this._validation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest k8s_kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest}
*/
export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest k8s_kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kustomize_toolkit_fluxcd_io_kustomization_v1beta2_manifest',
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
  private _metadata = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpec) {
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
      metadata: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
