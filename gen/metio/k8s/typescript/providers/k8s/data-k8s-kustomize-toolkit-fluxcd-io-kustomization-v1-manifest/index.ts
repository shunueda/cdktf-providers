// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#metadata DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#metadata}
  */
  readonly metadata: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadata;
  /**
  * KustomizationSpec defines the configuration to calculate the desired state from a Source using Kustomize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#spec DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#spec}
  */
  readonly spec?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpec;
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#annotations DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#labels DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadataToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadataToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadata {
  /**
  * Annotations to be added to the object's metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#annotations DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to the object's metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#labels DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadataToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadataToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadata | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRefToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRefToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryption {
  /**
  * Provider is the name of the decryption engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#provider DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#provider}
  */
  readonly provider: string;
  /**
  * The secret name containing the private OpenPGP keys used for decryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#secret_ref DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRef;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_ref: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryption | cdktf.IResolvable): any {
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
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryption | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionSecretRef) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOn {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, when not specified it acts as LocalObjectReference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOnToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOnToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOn | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOn | cdktf.IResolvable | undefined) {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOnList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOn[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOnOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecks {
  /**
  * API version of the referent, if not specified the Kubernetes preferred version will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#api_version DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#kind DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, when not specified it acts as LocalObjectReference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecksToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecks | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecksToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecks | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecks | cdktf.IResolvable | undefined) {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecksList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecksOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImages {
  /**
  * Digest is the value used to replace the original image tag. If digest is present NewTag value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#digest DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#digest}
  */
  readonly digest?: string;
  /**
  * Name is a tag-less image name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name}
  */
  readonly name: string;
  /**
  * NewName is the value used to replace the original name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#new_name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#new_name}
  */
  readonly newName?: string;
  /**
  * NewTag is the value used to replace the original tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#new_tag DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#new_tag}
  */
  readonly newTag?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImagesToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImages | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImagesToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImages | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImages | cdktf.IResolvable | undefined) {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImagesOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRef {
  /**
  * Key in the Secret, when not specified an implementation-specific default key is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#key DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Name of the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRefToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRefToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfig {
  /**
  * SecretRef holds the name of a secret that contains a key with the kubeconfig file as the value. If no key is set, the key will default to 'value'. It is recommended that the kubeconfig is self-contained, and the secret is regularly updated if credentials such as a cloud-access-token expire. Cloud specific 'cmd-path' auth helpers will not function without adding binaries and credentials to the Pod that is responsible for reconciling Kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#secret_ref DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRef;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfig | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTarget {
  /**
  * AnnotationSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#annotation_selector DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Group is the API group to select resources from. Together with Version and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#group DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind of the API Group to select resources from. Together with Group and Version it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#kind DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * LabelSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#label_selector DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Name to match resources with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace to select resources from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Version of the API Group to select resources from. Together with Group and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#version DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTargetToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTarget | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTargetToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTarget | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTarget | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatches {
  /**
  * Patch contains an inline StrategicMerge patch or an inline JSON6902 patch with an array of operation objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#patch DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#patch}
  */
  readonly patch: string;
  /**
  * Target points to the resources that the patch document should be applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#target DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#target}
  */
  readonly target?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTarget;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch: cdktf.stringToTerraform(struct!.patch),
    target: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTargetToTerraform(struct!.target),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatches | cdktf.IResolvable): any {
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
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatches | cdktf.IResolvable | undefined) {
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
  private _target = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesTarget) {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFrom {
  /**
  * Kind of the values referent, valid values are ('Secret', 'ConfigMap').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#kind DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the values referent. Should reside in the same namespace as the referring resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Optional indicates whether the referenced resource must exist, or whether to tolerate its absence. If true and the referenced resource is absent, proceed as if the resource was present but empty, without any variables defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#optional DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFromToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFrom | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFromToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFrom | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFrom | cdktf.IResolvable | undefined) {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFromOutputReference {
    return new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuild {
  /**
  * Substitute holds a map of key/value pairs. The variables defined in your YAML manifests that match any of the keys defined in the map will be substituted with the set value. Includes support for bash string replacement functions e.g. ${var:=default}, ${var:position} and ${var/substring/replacement}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#substitute DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#substitute}
  */
  readonly substitute?: { [key: string]: string };
  /**
  * SubstituteFrom holds references to ConfigMaps and Secrets containing the variables and their values to be substituted in the YAML manifests. The ConfigMap and the Secret data keys represent the var names, and they must match the vars declared in the manifests for the substitution to happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#substitute_from DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#substitute_from}
  */
  readonly substituteFrom?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFrom[] | cdktf.IResolvable;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    substitute: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.substitute),
    substitute_from: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFromToTerraform, false)(struct!.substituteFrom),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuild | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFromToHclTerraform, false)(struct!.substituteFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuild | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuild | cdktf.IResolvable | undefined) {
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
  private _substituteFrom = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFromList(this, "substitute_from", false);
  public get substituteFrom() {
    return this._substituteFrom;
  }
  public putSubstituteFrom(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildSubstituteFrom[] | cdktf.IResolvable) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#api_version DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#kind DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, defaults to the namespace of the Kubernetes resource object that contains the reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRefToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRef | cdktf.IResolvable): any {
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


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRefToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRef | cdktf.IResolvable): any {
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpec {
  /**
  * CommonMetadata specifies the common labels and annotations that are applied to all resources. Any existing label or annotation will be overridden if its key matches a common one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#common_metadata DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#common_metadata}
  */
  readonly commonMetadata?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadata;
  /**
  * Components specifies relative paths to specifications of other Components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#components DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#components}
  */
  readonly components?: string[];
  /**
  * Decrypt Kubernetes secrets before applying them on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#decryption DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#decryption}
  */
  readonly decryption?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryption;
  /**
  * DependsOn may contain a meta.NamespacedObjectReference slice with references to Kustomization resources that must be ready before this Kustomization can be reconciled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#depends_on DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#depends_on}
  */
  readonly dependsOn?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOn[] | cdktf.IResolvable;
  /**
  * Force instructs the controller to recreate resources when patching fails due to an immutable field change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#force DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * A list of resources to be included in the health assessment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#health_checks DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#health_checks}
  */
  readonly healthChecks?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecks[] | cdktf.IResolvable;
  /**
  * Images is a list of (image name, new name, new tag or digest) for changing image names, tags or digests. This can also be achieved with a patch, but this operator is simpler to specify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#images DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#images}
  */
  readonly images?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImages[] | cdktf.IResolvable;
  /**
  * The interval at which to reconcile the Kustomization. This interval is approximate and may be subject to jitter to ensure efficient use of resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#interval DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#interval}
  */
  readonly interval: string;
  /**
  * The KubeConfig for reconciling the Kustomization on a remote cluster. When used in combination with KustomizationSpec.ServiceAccountName, forces the controller to act on behalf of that Service Account at the target cluster. If the --default-service-account flag is set, its value will be used as a controller level fallback for when KustomizationSpec.ServiceAccountName is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#kube_config DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#kube_config}
  */
  readonly kubeConfig?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfig;
  /**
  * NamePrefix will prefix the names of all managed resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name_prefix DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * NameSuffix will suffix the names of all managed resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#name_suffix DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Strategic merge and JSON patches, defined as inline YAML objects, capable of targeting objects based on kind, label and annotation selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#patches DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#patches}
  */
  readonly patches?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatches[] | cdktf.IResolvable;
  /**
  * Path to the directory containing the kustomization.yaml file, or the set of plain YAMLs a kustomization.yaml should be generated for. Defaults to 'None', which translates to the root path of the SourceRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#path DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#path}
  */
  readonly path?: string;
  /**
  * PostBuild describes which actions to perform on the YAML manifest generated by building the kustomize overlay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#post_build DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#post_build}
  */
  readonly postBuild?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuild;
  /**
  * Prune enables garbage collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#prune DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#prune}
  */
  readonly prune: boolean | cdktf.IResolvable;
  /**
  * The interval at which to retry a previously failed reconciliation. When not specified, the controller uses the KustomizationSpec.Interval value to retry failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#retry_interval DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#retry_interval}
  */
  readonly retryInterval?: string;
  /**
  * The name of the Kubernetes service account to impersonate when reconciling this Kustomization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#service_account_name DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Reference of the source where the kustomization file is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#source_ref DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#source_ref}
  */
  readonly sourceRef: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRef;
  /**
  * This flag tells the controller to suspend subsequent kustomize executions, it does not apply to already started executions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#suspend DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * TargetNamespace sets or overrides the namespace in the kustomization.yaml file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#target_namespace DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#target_namespace}
  */
  readonly targetNamespace?: string;
  /**
  * Timeout for validation, apply and health checking operations. Defaults to 'Interval' duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#timeout DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Wait instructs the controller to check the health of all the reconciled resources. When enabled, the HealthChecks are ignored. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#wait DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
}

export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecToTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_metadata: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadataToTerraform(struct!.commonMetadata),
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    decryption: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionToTerraform(struct!.decryption),
    depends_on: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOnToTerraform, false)(struct!.dependsOn),
    force: cdktf.booleanToTerraform(struct!.force),
    health_checks: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecksToTerraform, false)(struct!.healthChecks),
    images: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImagesToTerraform, false)(struct!.images),
    interval: cdktf.stringToTerraform(struct!.interval),
    kube_config: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigToTerraform(struct!.kubeConfig),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    patches: cdktf.listMapper(dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesToTerraform, false)(struct!.patches),
    path: cdktf.stringToTerraform(struct!.path),
    post_build: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildToTerraform(struct!.postBuild),
    prune: cdktf.booleanToTerraform(struct!.prune),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    source_ref: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRefToTerraform(struct!.sourceRef),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    target_namespace: cdktf.stringToTerraform(struct!.targetNamespace),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    wait: cdktf.booleanToTerraform(struct!.wait),
  }
}


export function dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecToHclTerraform(struct?: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_metadata: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadataToHclTerraform(struct!.commonMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadata",
    },
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    decryption: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionToHclTerraform(struct!.decryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryption",
    },
    depends_on: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOnToHclTerraform, false)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOnList",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_checks: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecksToHclTerraform, false)(struct!.healthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecksList",
    },
    images: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImagesToHclTerraform, false)(struct!.images),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImagesList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_config: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigToHclTerraform(struct!.kubeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfig",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patches: {
      value: cdktf.listMapperHcl(dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_build: {
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildToHclTerraform(struct!.postBuild),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuild",
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
      value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRef",
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

export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
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
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpec | cdktf.IResolvable | undefined) {
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
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._patches.internalValue = undefined;
      this._path = undefined;
      this._postBuild.internalValue = undefined;
      this._prune = undefined;
      this._retryInterval = undefined;
      this._serviceAccountName = undefined;
      this._sourceRef.internalValue = undefined;
      this._suspend = undefined;
      this._targetNamespace = undefined;
      this._timeout = undefined;
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
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._patches.internalValue = value.patches;
      this._path = value.path;
      this._postBuild.internalValue = value.postBuild;
      this._prune = value.prune;
      this._retryInterval = value.retryInterval;
      this._serviceAccountName = value.serviceAccountName;
      this._sourceRef.internalValue = value.sourceRef;
      this._suspend = value.suspend;
      this._targetNamespace = value.targetNamespace;
      this._timeout = value.timeout;
      this._wait = value.wait;
    }
  }

  // common_metadata - computed: false, optional: true, required: false
  private _commonMetadata = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadataOutputReference(this, "common_metadata");
  public get commonMetadata() {
    return this._commonMetadata;
  }
  public putCommonMetadata(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecCommonMetadata) {
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
  private _decryption = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryptionOutputReference(this, "decryption");
  public get decryption() {
    return this._decryption;
  }
  public putDecryption(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDecryption) {
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
  private _dependsOn = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecDependsOn[] | cdktf.IResolvable) {
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
  private _healthChecks = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecHealthChecks[] | cdktf.IResolvable) {
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
  private _images = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecImages[] | cdktf.IResolvable) {
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
  private _kubeConfig = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfigOutputReference(this, "kube_config");
  public get kubeConfig() {
    return this._kubeConfig;
  }
  public putKubeConfig(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecKubeConfig) {
    this._kubeConfig.internalValue = value;
  }
  public resetKubeConfig() {
    this._kubeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig.internalValue;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
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
  private _postBuild = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuildOutputReference(this, "post_build");
  public get postBuild() {
    return this._postBuild;
  }
  public putPostBuild(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecPostBuild) {
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
  private _sourceRef = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecSourceRef) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest k8s_kustomize_toolkit_fluxcd_io_kustomization_v1_manifest}
*/
export class DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kustomize_toolkit_fluxcd_io_kustomization_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest to import
  * @param importFromId The id of the existing DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKustomizeToolkitFluxcdIoKustomizationV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kustomize_toolkit_fluxcd_io_kustomization_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kustomize_toolkit_fluxcd_io_kustomization_v1_manifest k8s_kustomize_toolkit_fluxcd_io_kustomization_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kustomize_toolkit_fluxcd_io_kustomization_v1_manifest',
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
  private _metadata = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpec) {
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
      metadata: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestMetadata",
      },
      spec: {
        value: dataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKustomizeToolkitFluxcdIoKustomizationV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
