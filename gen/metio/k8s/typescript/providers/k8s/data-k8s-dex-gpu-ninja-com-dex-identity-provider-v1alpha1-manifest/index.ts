// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#metadata DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadata;
  /**
  * DexIdentityProviderSpec defines the desired state of the Dex identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#spec DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpec;
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#annotations DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#labels DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#namespace DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchers {
  /**
  * GroupAttr is the attribute to match against the group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#group_attr DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#group_attr}
  */
  readonly groupAttr: string;
  /**
  * UserAttr is the attribute to match against the user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#user_attr DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#user_attr}
  */
  readonly userAttr: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchersToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_attr: cdktf.stringToTerraform(struct!.groupAttr),
    user_attr: cdktf.stringToTerraform(struct!.userAttr),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchersToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_attr: {
      value: cdktf.stringToHclTerraform(struct!.groupAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_attr: {
      value: cdktf.stringToHclTerraform(struct!.userAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttr = this._groupAttr;
    }
    if (this._userAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttr = this._userAttr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAttr = undefined;
      this._userAttr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAttr = value.groupAttr;
      this._userAttr = value.userAttr;
    }
  }

  // group_attr - computed: false, optional: false, required: true
  private _groupAttr?: string; 
  public get groupAttr() {
    return this.getStringAttribute('group_attr');
  }
  public set groupAttr(value: string) {
    this._groupAttr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttrInput() {
    return this._groupAttr;
  }

  // user_attr - computed: false, optional: false, required: true
  private _userAttr?: string; 
  public get userAttr() {
    return this.getStringAttribute('user_attr');
  }
  public set userAttr(value: string) {
    this._userAttr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttrInput() {
    return this._userAttr;
  }
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchersList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchersOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearch {
  /**
  * BaseDN to start the search from. For example 'cn=groups,dc=example,dc=com'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#base_dn DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#base_dn}
  */
  readonly baseDn: string;
  /**
  * Filter is an optional filter to apply when searching the directory. For example '(objectClass=posixGroup)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#filter DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#filter}
  */
  readonly filter?: string;
  /**
  * NameAttr is the attribute of the group that represents its name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name_attr DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name_attr}
  */
  readonly nameAttr: string;
  /**
  * Scope is the optional scope of the search (default 'sub'). Can either be: * 'sub' - search the whole sub tree * 'one' - only search one level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#scope DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * UserMatchers is an array of the field pairs used to match a user to a group. See the 'DexIdentityProviderConnectorLDAPGroupSearchUserMatcher' struct for the exact field names Each pair adds an additional requirement to the filter that an attribute in the group match the user's attribute value. For example that the 'members' attribute of a group matches the 'uid' of the user. The exact filter being added is: (userMatchers[n].<groupAttr>=userMatchers[n].<userAttr value>)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#user_matchers DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#user_matchers}
  */
  readonly userMatchers: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchers[] | cdktf.IResolvable;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    filter: cdktf.stringToTerraform(struct!.filter),
    name_attr: cdktf.stringToTerraform(struct!.nameAttr),
    scope: cdktf.stringToTerraform(struct!.scope),
    user_matchers: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchersToTerraform, false)(struct!.userMatchers),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_attr: {
      value: cdktf.stringToHclTerraform(struct!.nameAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_matchers: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchersToHclTerraform, false)(struct!.userMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._nameAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAttr = this._nameAttr;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._userMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMatchers = this._userMatchers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._filter = undefined;
      this._nameAttr = undefined;
      this._scope = undefined;
      this._userMatchers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._filter = value.filter;
      this._nameAttr = value.nameAttr;
      this._scope = value.scope;
      this._userMatchers.internalValue = value.userMatchers;
    }
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // name_attr - computed: false, optional: false, required: true
  private _nameAttr?: string; 
  public get nameAttr() {
    return this.getStringAttribute('name_attr');
  }
  public set nameAttr(value: string) {
    this._nameAttr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAttrInput() {
    return this._nameAttr;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // user_matchers - computed: false, optional: false, required: true
  private _userMatchers = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchersList(this, "user_matchers", false);
  public get userMatchers() {
    return this._userMatchers;
  }
  public putUserMatchers(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchUserMatchers[] | cdktf.IResolvable) {
    this._userMatchers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userMatchersInput() {
    return this._userMatchers.internalValue;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearch {
  /**
  * BaseDN to start the search from. For example 'cn=users,dc=example,dc=com'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#base_dn DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#base_dn}
  */
  readonly baseDn: string;
  /**
  * EmailAttr is the attribute to use as the user email (default 'mail').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#email_attr DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#email_attr}
  */
  readonly emailAttr?: string;
  /**
  * EmailSuffix if set, will be appended to the idAttr to construct the email claim. This should not include the @ character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#email_suffix DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#email_suffix}
  */
  readonly emailSuffix?: string;
  /**
  * Filter is an optional filter to apply when searching the directory. For example '(objectClass=person)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#filter DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#filter}
  */
  readonly filter?: string;
  /**
  * IDAttr is the attribute to use as the user ID (default 'uid').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#id_attr DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#id_attr}
  */
  readonly idAttr?: string;
  /**
  * NameAttr is the attribute to use as the display name for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name_attr DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name_attr}
  */
  readonly nameAttr?: string;
  /**
  * PreferredUsernameAttr is the attribute to use as the preferred username for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#preferred_username_attr DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#preferred_username_attr}
  */
  readonly preferredUsernameAttr?: string;
  /**
  * Scope is the optional scope of the search (default 'sub'). Can either be: * 'sub' - search the whole sub tree * 'one' - only search one level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#scope DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Username is the attribute to match against the inputted username. This will be translated and combined with the other filter as '(<attr>=<username>)'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#username DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#username}
  */
  readonly username: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearchToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    email_attr: cdktf.stringToTerraform(struct!.emailAttr),
    email_suffix: cdktf.stringToTerraform(struct!.emailSuffix),
    filter: cdktf.stringToTerraform(struct!.filter),
    id_attr: cdktf.stringToTerraform(struct!.idAttr),
    name_attr: cdktf.stringToTerraform(struct!.nameAttr),
    preferred_username_attr: cdktf.stringToTerraform(struct!.preferredUsernameAttr),
    scope: cdktf.stringToTerraform(struct!.scope),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearchToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_attr: {
      value: cdktf.stringToHclTerraform(struct!.emailAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_suffix: {
      value: cdktf.stringToHclTerraform(struct!.emailSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_attr: {
      value: cdktf.stringToHclTerraform(struct!.idAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_attr: {
      value: cdktf.stringToHclTerraform(struct!.nameAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_username_attr: {
      value: cdktf.stringToHclTerraform(struct!.preferredUsernameAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._emailAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAttr = this._emailAttr;
    }
    if (this._emailSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSuffix = this._emailSuffix;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._idAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.idAttr = this._idAttr;
    }
    if (this._nameAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAttr = this._nameAttr;
    }
    if (this._preferredUsernameAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUsernameAttr = this._preferredUsernameAttr;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._emailAttr = undefined;
      this._emailSuffix = undefined;
      this._filter = undefined;
      this._idAttr = undefined;
      this._nameAttr = undefined;
      this._preferredUsernameAttr = undefined;
      this._scope = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._emailAttr = value.emailAttr;
      this._emailSuffix = value.emailSuffix;
      this._filter = value.filter;
      this._idAttr = value.idAttr;
      this._nameAttr = value.nameAttr;
      this._preferredUsernameAttr = value.preferredUsernameAttr;
      this._scope = value.scope;
      this._username = value.username;
    }
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // email_attr - computed: false, optional: true, required: false
  private _emailAttr?: string; 
  public get emailAttr() {
    return this.getStringAttribute('email_attr');
  }
  public set emailAttr(value: string) {
    this._emailAttr = value;
  }
  public resetEmailAttr() {
    this._emailAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAttrInput() {
    return this._emailAttr;
  }

  // email_suffix - computed: false, optional: true, required: false
  private _emailSuffix?: string; 
  public get emailSuffix() {
    return this.getStringAttribute('email_suffix');
  }
  public set emailSuffix(value: string) {
    this._emailSuffix = value;
  }
  public resetEmailSuffix() {
    this._emailSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSuffixInput() {
    return this._emailSuffix;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id_attr - computed: false, optional: true, required: false
  private _idAttr?: string; 
  public get idAttr() {
    return this.getStringAttribute('id_attr');
  }
  public set idAttr(value: string) {
    this._idAttr = value;
  }
  public resetIdAttr() {
    this._idAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idAttrInput() {
    return this._idAttr;
  }

  // name_attr - computed: false, optional: true, required: false
  private _nameAttr?: string; 
  public get nameAttr() {
    return this.getStringAttribute('name_attr');
  }
  public set nameAttr(value: string) {
    this._nameAttr = value;
  }
  public resetNameAttr() {
    this._nameAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAttrInput() {
    return this._nameAttr;
  }

  // preferred_username_attr - computed: false, optional: true, required: false
  private _preferredUsernameAttr?: string; 
  public get preferredUsernameAttr() {
    return this.getStringAttribute('preferred_username_attr');
  }
  public set preferredUsernameAttr(value: string) {
    this._preferredUsernameAttr = value;
  }
  public resetPreferredUsernameAttr() {
    this._preferredUsernameAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUsernameAttrInput() {
    return this._preferredUsernameAttr;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdap {
  /**
  * BindPasswordSecretRef is a reference to a secret containing the bind password. The connector uses these credentials to search for users and groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#bind_password_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#bind_password_secret_ref}
  */
  readonly bindPasswordSecretRef: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRef;
  /**
  * BindUsername is the DN of the user to bind with. The connector uses these credentials to search for users and groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#bind_username DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#bind_username}
  */
  readonly bindUsername: string;
  /**
  * CASecretRef is an optional reference to a secret containing the CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#ca_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#ca_secret_ref}
  */
  readonly caSecretRef?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRef;
  /**
  * ClientCertificateSecretRef is an optional reference to a secret containing the client certificate and key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#client_certificate_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#client_certificate_secret_ref}
  */
  readonly clientCertificateSecretRef?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRef;
  /**
  * GroupSearch contains configuration for searching LDAP groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#group_search DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#group_search}
  */
  readonly groupSearch: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearch;
  /**
  * Host is the host and optional port of the LDAP server. If port isn't supplied, it will be guessed based on the TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#host DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * InsecureNoSSL is required to connect to a server without TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#insecure_no_ssl DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#insecure_no_ssl}
  */
  readonly insecureNoSsl?: boolean | cdktf.IResolvable;
  /**
  * InsecureSkipVerify allows connecting to a server without verifying the TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#insecure_skip_verify DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * StartTLS allows connecting to a server that supports the StartTLS command. If unsupplied secure connections will use the LDAPS protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#start_tls DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * UserSearch contains configuration for searching LDAP users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#user_search DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#user_search}
  */
  readonly userSearch: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearch;
  /**
  * UsernamePrompt allows users to override the username attribute (displayed in the username/password prompt). If unset, the handler will use 'Username'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#username_prompt DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#username_prompt}
  */
  readonly usernamePrompt?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_password_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRefToTerraform(struct!.bindPasswordSecretRef),
    bind_username: cdktf.stringToTerraform(struct!.bindUsername),
    ca_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRefToTerraform(struct!.caSecretRef),
    client_certificate_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRefToTerraform(struct!.clientCertificateSecretRef),
    group_search: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchToTerraform(struct!.groupSearch),
    host: cdktf.stringToTerraform(struct!.host),
    insecure_no_ssl: cdktf.booleanToTerraform(struct!.insecureNoSsl),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    start_tls: cdktf.booleanToTerraform(struct!.startTls),
    user_search: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearchToTerraform(struct!.userSearch),
    username_prompt: cdktf.stringToTerraform(struct!.usernamePrompt),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_password_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRefToHclTerraform(struct!.bindPasswordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRef",
    },
    bind_username: {
      value: cdktf.stringToHclTerraform(struct!.bindUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRefToHclTerraform(struct!.caSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRef",
    },
    client_certificate_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRefToHclTerraform(struct!.clientCertificateSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRef",
    },
    group_search: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchToHclTerraform(struct!.groupSearch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearch",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_no_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.insecureNoSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_tls: {
      value: cdktf.booleanToHclTerraform(struct!.startTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_search: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearchToHclTerraform(struct!.userSearch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearch",
    },
    username_prompt: {
      value: cdktf.stringToHclTerraform(struct!.usernamePrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindPasswordSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindPasswordSecretRef = this._bindPasswordSecretRef?.internalValue;
    }
    if (this._bindUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindUsername = this._bindUsername;
    }
    if (this._caSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecretRef = this._caSecretRef?.internalValue;
    }
    if (this._clientCertificateSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateSecretRef = this._clientCertificateSecretRef?.internalValue;
    }
    if (this._groupSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSearch = this._groupSearch?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._insecureNoSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureNoSsl = this._insecureNoSsl;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._startTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTls = this._startTls;
    }
    if (this._userSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearch = this._userSearch?.internalValue;
    }
    if (this._usernamePrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePrompt = this._usernamePrompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindPasswordSecretRef.internalValue = undefined;
      this._bindUsername = undefined;
      this._caSecretRef.internalValue = undefined;
      this._clientCertificateSecretRef.internalValue = undefined;
      this._groupSearch.internalValue = undefined;
      this._host = undefined;
      this._insecureNoSsl = undefined;
      this._insecureSkipVerify = undefined;
      this._startTls = undefined;
      this._userSearch.internalValue = undefined;
      this._usernamePrompt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindPasswordSecretRef.internalValue = value.bindPasswordSecretRef;
      this._bindUsername = value.bindUsername;
      this._caSecretRef.internalValue = value.caSecretRef;
      this._clientCertificateSecretRef.internalValue = value.clientCertificateSecretRef;
      this._groupSearch.internalValue = value.groupSearch;
      this._host = value.host;
      this._insecureNoSsl = value.insecureNoSsl;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._startTls = value.startTls;
      this._userSearch.internalValue = value.userSearch;
      this._usernamePrompt = value.usernamePrompt;
    }
  }

  // bind_password_secret_ref - computed: false, optional: false, required: true
  private _bindPasswordSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRefOutputReference(this, "bind_password_secret_ref");
  public get bindPasswordSecretRef() {
    return this._bindPasswordSecretRef;
  }
  public putBindPasswordSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapBindPasswordSecretRef) {
    this._bindPasswordSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordSecretRefInput() {
    return this._bindPasswordSecretRef.internalValue;
  }

  // bind_username - computed: false, optional: false, required: true
  private _bindUsername?: string; 
  public get bindUsername() {
    return this.getStringAttribute('bind_username');
  }
  public set bindUsername(value: string) {
    this._bindUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindUsernameInput() {
    return this._bindUsername;
  }

  // ca_secret_ref - computed: false, optional: true, required: false
  private _caSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRefOutputReference(this, "ca_secret_ref");
  public get caSecretRef() {
    return this._caSecretRef;
  }
  public putCaSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapCaSecretRef) {
    this._caSecretRef.internalValue = value;
  }
  public resetCaSecretRef() {
    this._caSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretRefInput() {
    return this._caSecretRef.internalValue;
  }

  // client_certificate_secret_ref - computed: false, optional: true, required: false
  private _clientCertificateSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRefOutputReference(this, "client_certificate_secret_ref");
  public get clientCertificateSecretRef() {
    return this._clientCertificateSecretRef;
  }
  public putClientCertificateSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapClientCertificateSecretRef) {
    this._clientCertificateSecretRef.internalValue = value;
  }
  public resetClientCertificateSecretRef() {
    this._clientCertificateSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateSecretRefInput() {
    return this._clientCertificateSecretRef.internalValue;
  }

  // group_search - computed: false, optional: false, required: true
  private _groupSearch = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearchOutputReference(this, "group_search");
  public get groupSearch() {
    return this._groupSearch;
  }
  public putGroupSearch(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapGroupSearch) {
    this._groupSearch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchInput() {
    return this._groupSearch.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // insecure_no_ssl - computed: false, optional: true, required: false
  private _insecureNoSsl?: boolean | cdktf.IResolvable; 
  public get insecureNoSsl() {
    return this.getBooleanAttribute('insecure_no_ssl');
  }
  public set insecureNoSsl(value: boolean | cdktf.IResolvable) {
    this._insecureNoSsl = value;
  }
  public resetInsecureNoSsl() {
    this._insecureNoSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureNoSslInput() {
    return this._insecureNoSsl;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // start_tls - computed: false, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // user_search - computed: false, optional: false, required: true
  private _userSearch = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearchOutputReference(this, "user_search");
  public get userSearch() {
    return this._userSearch;
  }
  public putUserSearch(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapUserSearch) {
    this._userSearch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchInput() {
    return this._userSearch.internalValue;
  }

  // username_prompt - computed: false, optional: true, required: false
  private _usernamePrompt?: string; 
  public get usernamePrompt() {
    return this.getStringAttribute('username_prompt');
  }
  public set usernamePrompt(value: string) {
    this._usernamePrompt = value;
  }
  public resetUsernamePrompt() {
    this._usernamePrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePromptInput() {
    return this._usernamePrompt;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMapping {
  /**
  * EmailKey is the key which contains the email claims, defaults to 'email'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#email DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#email}
  */
  readonly email?: string;
  /**
  * GroupsKey is the key which contains the groups claims, defaults to 'groups'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#groups DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#groups}
  */
  readonly groups?: string;
  /**
  * PreferredUsernameKey is the key which contains the preferred username claims, defaults to 'preferred_username'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#preferred_username DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#preferred_username}
  */
  readonly preferredUsername?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMappingToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    groups: cdktf.stringToTerraform(struct!.groups),
    preferred_username: cdktf.stringToTerraform(struct!.preferredUsername),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMappingToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.stringToHclTerraform(struct!.groups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_username: {
      value: cdktf.stringToHclTerraform(struct!.preferredUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._preferredUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUsername = this._preferredUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._groups = undefined;
      this._preferredUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._groups = value.groups;
      this._preferredUsername = value.preferredUsername;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // preferred_username - computed: false, optional: true, required: false
  private _preferredUsername?: string; 
  public get preferredUsername() {
    return this.getStringAttribute('preferred_username');
  }
  public set preferredUsername(value: string) {
    this._preferredUsername = value;
  }
  public resetPreferredUsername() {
    this._preferredUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUsernameInput() {
    return this._preferredUsername;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidc {
  /**
  * AcrValues (Authentication Context Class Reference Values) that specifies the Authentication Context Class Values within the Authentication Request that the Authorization Server is being requested to use for processing requests from this Client, with the values appearing in order of preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#acr_values DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#acr_values}
  */
  readonly acrValues?: string[];
  /**
  * BasicAuthUnsupported causes client_secret to be passed as POST parameters instead of basic auth. This is specifically 'NOT RECOMMENDED' by the OAuth2 RFC, but some providers require it. https://tools.ietf.org/html/rfc6749#section-2.3.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#basic_auth_unsupported DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#basic_auth_unsupported}
  */
  readonly basicAuthUnsupported?: boolean | cdktf.IResolvable;
  /**
  * CASecretRef is an optional reference to a secret containing the CA certificate. Only required if your provider uses a self-signed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#ca_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#ca_secret_ref}
  */
  readonly caSecretRef?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRef;
  /**
  * ClaimMapping is used to map non-standard claims to standard claims. Some providers return non-standard claims (eg. mail). https://openid.net/specs/openid-connect-core-1_0.html#Claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#claim_mapping DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#claim_mapping}
  */
  readonly claimMapping?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMapping;
  /**
  * ClientSecretRef is a reference to a secret containing the OAuth client id and secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#client_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#client_secret_ref}
  */
  readonly clientSecretRef: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRef;
  /**
  * GetUserInfo uses the userinfo endpoint to get additional claims for the token. This is especially useful where upstreams return 'thin' id tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#get_user_info DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#get_user_info}
  */
  readonly fetchUserInfo?: boolean | cdktf.IResolvable;
  /**
  * InsecureEnableGroups enables groups claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#insecure_enable_groups DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#insecure_enable_groups}
  */
  readonly insecureEnableGroups?: boolean | cdktf.IResolvable;
  /**
  * InsecureSkipEmailVerified if set will override the value of email_verified to true in the returned claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#insecure_skip_email_verified DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#insecure_skip_email_verified}
  */
  readonly insecureSkipEmailVerified?: boolean | cdktf.IResolvable;
  /**
  * InsecureSkipVerify disables TLS certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#insecure_skip_verify DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Issuer is the URL of the OIDC issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#issuer DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#issuer}
  */
  readonly issuer: string;
  /**
  * OverrideClaimMapping will be used to override the options defined in claimMappings. i.e. if there are 'email' and 'preferred_email' claims available, by default Dex will always use the 'email' claim independent of the ClaimMapping.EmailKey. This setting allows you to override the default behavior of Dex and enforce the mappings defined in 'claimMapping'. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#override_claim_mapping DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#override_claim_mapping}
  */
  readonly overrideClaimMapping?: boolean | cdktf.IResolvable;
  /**
  * PromptType will be used fot the prompt parameter (when offline_access, by default prompt=consent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#prompt_type DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#prompt_type}
  */
  readonly promptType?: string;
  /**
  * RedirectURI is the OAuth redirect URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#redirect_uri DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#redirect_uri}
  */
  readonly redirectUri: string;
  /**
  * Scopes is an optional list of scopes to request. If omitted, defaults to 'profile' and 'email'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#scopes DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * UserIDKey is the claim key to use for the user ID (default sub).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#user_id_key DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#user_id_key}
  */
  readonly userIdKey?: string;
  /**
  * UserNameKey is the claim key to use for the username (default name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#user_name_key DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#user_name_key}
  */
  readonly userNameKey?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acrValues),
    basic_auth_unsupported: cdktf.booleanToTerraform(struct!.basicAuthUnsupported),
    ca_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRefToTerraform(struct!.caSecretRef),
    claim_mapping: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMappingToTerraform(struct!.claimMapping),
    client_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRefToTerraform(struct!.clientSecretRef),
    get_user_info: cdktf.booleanToTerraform(struct!.fetchUserInfo),
    insecure_enable_groups: cdktf.booleanToTerraform(struct!.insecureEnableGroups),
    insecure_skip_email_verified: cdktf.booleanToTerraform(struct!.insecureSkipEmailVerified),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    override_claim_mapping: cdktf.booleanToTerraform(struct!.overrideClaimMapping),
    prompt_type: cdktf.stringToTerraform(struct!.promptType),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    user_id_key: cdktf.stringToTerraform(struct!.userIdKey),
    user_name_key: cdktf.stringToTerraform(struct!.userNameKey),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acrValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    basic_auth_unsupported: {
      value: cdktf.booleanToHclTerraform(struct!.basicAuthUnsupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRefToHclTerraform(struct!.caSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRef",
    },
    claim_mapping: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMappingToHclTerraform(struct!.claimMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMapping",
    },
    client_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRefToHclTerraform(struct!.clientSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRef",
    },
    get_user_info: {
      value: cdktf.booleanToHclTerraform(struct!.fetchUserInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_enable_groups: {
      value: cdktf.booleanToHclTerraform(struct!.insecureEnableGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_email_verified: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipEmailVerified),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_claim_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.overrideClaimMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt_type: {
      value: cdktf.stringToHclTerraform(struct!.promptType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_id_key: {
      value: cdktf.stringToHclTerraform(struct!.userIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name_key: {
      value: cdktf.stringToHclTerraform(struct!.userNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrValues = this._acrValues;
    }
    if (this._basicAuthUnsupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUnsupported = this._basicAuthUnsupported;
    }
    if (this._caSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecretRef = this._caSecretRef?.internalValue;
    }
    if (this._claimMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMapping = this._claimMapping?.internalValue;
    }
    if (this._clientSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretRef = this._clientSecretRef?.internalValue;
    }
    if (this._getUserInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchUserInfo = this._getUserInfo;
    }
    if (this._insecureEnableGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureEnableGroups = this._insecureEnableGroups;
    }
    if (this._insecureSkipEmailVerified !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipEmailVerified = this._insecureSkipEmailVerified;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._overrideClaimMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideClaimMapping = this._overrideClaimMapping;
    }
    if (this._promptType !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptType = this._promptType;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._userIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdKey = this._userIdKey;
    }
    if (this._userNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameKey = this._userNameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acrValues = undefined;
      this._basicAuthUnsupported = undefined;
      this._caSecretRef.internalValue = undefined;
      this._claimMapping.internalValue = undefined;
      this._clientSecretRef.internalValue = undefined;
      this._getUserInfo = undefined;
      this._insecureEnableGroups = undefined;
      this._insecureSkipEmailVerified = undefined;
      this._insecureSkipVerify = undefined;
      this._issuer = undefined;
      this._overrideClaimMapping = undefined;
      this._promptType = undefined;
      this._redirectUri = undefined;
      this._scopes = undefined;
      this._userIdKey = undefined;
      this._userNameKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acrValues = value.acrValues;
      this._basicAuthUnsupported = value.basicAuthUnsupported;
      this._caSecretRef.internalValue = value.caSecretRef;
      this._claimMapping.internalValue = value.claimMapping;
      this._clientSecretRef.internalValue = value.clientSecretRef;
      this._getUserInfo = value.fetchUserInfo;
      this._insecureEnableGroups = value.insecureEnableGroups;
      this._insecureSkipEmailVerified = value.insecureSkipEmailVerified;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._issuer = value.issuer;
      this._overrideClaimMapping = value.overrideClaimMapping;
      this._promptType = value.promptType;
      this._redirectUri = value.redirectUri;
      this._scopes = value.scopes;
      this._userIdKey = value.userIdKey;
      this._userNameKey = value.userNameKey;
    }
  }

  // acr_values - computed: false, optional: true, required: false
  private _acrValues?: string[]; 
  public get acrValues() {
    return this.getListAttribute('acr_values');
  }
  public set acrValues(value: string[]) {
    this._acrValues = value;
  }
  public resetAcrValues() {
    this._acrValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrValuesInput() {
    return this._acrValues;
  }

  // basic_auth_unsupported - computed: false, optional: true, required: false
  private _basicAuthUnsupported?: boolean | cdktf.IResolvable; 
  public get basicAuthUnsupported() {
    return this.getBooleanAttribute('basic_auth_unsupported');
  }
  public set basicAuthUnsupported(value: boolean | cdktf.IResolvable) {
    this._basicAuthUnsupported = value;
  }
  public resetBasicAuthUnsupported() {
    this._basicAuthUnsupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUnsupportedInput() {
    return this._basicAuthUnsupported;
  }

  // ca_secret_ref - computed: false, optional: true, required: false
  private _caSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRefOutputReference(this, "ca_secret_ref");
  public get caSecretRef() {
    return this._caSecretRef;
  }
  public putCaSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcCaSecretRef) {
    this._caSecretRef.internalValue = value;
  }
  public resetCaSecretRef() {
    this._caSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretRefInput() {
    return this._caSecretRef.internalValue;
  }

  // claim_mapping - computed: false, optional: true, required: false
  private _claimMapping = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMappingOutputReference(this, "claim_mapping");
  public get claimMapping() {
    return this._claimMapping;
  }
  public putClaimMapping(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClaimMapping) {
    this._claimMapping.internalValue = value;
  }
  public resetClaimMapping() {
    this._claimMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMappingInput() {
    return this._claimMapping.internalValue;
  }

  // client_secret_ref - computed: false, optional: false, required: true
  private _clientSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRefOutputReference(this, "client_secret_ref");
  public get clientSecretRef() {
    return this._clientSecretRef;
  }
  public putClientSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcClientSecretRef) {
    this._clientSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRefInput() {
    return this._clientSecretRef.internalValue;
  }

  // get_user_info - computed: false, optional: true, required: false
  private _getUserInfo?: boolean | cdktf.IResolvable; 
  public get fetchUserInfo() {
    return this.getBooleanAttribute('get_user_info');
  }
  public set fetchUserInfo(value: boolean | cdktf.IResolvable) {
    this._getUserInfo = value;
  }
  public resetFetchUserInfo() {
    this._getUserInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchUserInfoInput() {
    return this._getUserInfo;
  }

  // insecure_enable_groups - computed: false, optional: true, required: false
  private _insecureEnableGroups?: boolean | cdktf.IResolvable; 
  public get insecureEnableGroups() {
    return this.getBooleanAttribute('insecure_enable_groups');
  }
  public set insecureEnableGroups(value: boolean | cdktf.IResolvable) {
    this._insecureEnableGroups = value;
  }
  public resetInsecureEnableGroups() {
    this._insecureEnableGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureEnableGroupsInput() {
    return this._insecureEnableGroups;
  }

  // insecure_skip_email_verified - computed: false, optional: true, required: false
  private _insecureSkipEmailVerified?: boolean | cdktf.IResolvable; 
  public get insecureSkipEmailVerified() {
    return this.getBooleanAttribute('insecure_skip_email_verified');
  }
  public set insecureSkipEmailVerified(value: boolean | cdktf.IResolvable) {
    this._insecureSkipEmailVerified = value;
  }
  public resetInsecureSkipEmailVerified() {
    this._insecureSkipEmailVerified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipEmailVerifiedInput() {
    return this._insecureSkipEmailVerified;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
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

  // override_claim_mapping - computed: false, optional: true, required: false
  private _overrideClaimMapping?: boolean | cdktf.IResolvable; 
  public get overrideClaimMapping() {
    return this.getBooleanAttribute('override_claim_mapping');
  }
  public set overrideClaimMapping(value: boolean | cdktf.IResolvable) {
    this._overrideClaimMapping = value;
  }
  public resetOverrideClaimMapping() {
    this._overrideClaimMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideClaimMappingInput() {
    return this._overrideClaimMapping;
  }

  // prompt_type - computed: false, optional: true, required: false
  private _promptType?: string; 
  public get promptType() {
    return this.getStringAttribute('prompt_type');
  }
  public set promptType(value: string) {
    this._promptType = value;
  }
  public resetPromptType() {
    this._promptType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTypeInput() {
    return this._promptType;
  }

  // redirect_uri - computed: false, optional: false, required: true
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // user_id_key - computed: false, optional: true, required: false
  private _userIdKey?: string; 
  public get userIdKey() {
    return this.getStringAttribute('user_id_key');
  }
  public set userIdKey(value: string) {
    this._userIdKey = value;
  }
  public resetUserIdKey() {
    this._userIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdKeyInput() {
    return this._userIdKey;
  }

  // user_name_key - computed: false, optional: true, required: false
  private _userNameKey?: string; 
  public get userNameKey() {
    return this.getStringAttribute('user_name_key');
  }
  public set userNameKey(value: string) {
    this._userNameKey = value;
  }
  public resetUserNameKey() {
    this._userNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameKeyInput() {
    return this._userNameKey;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectors {
  /**
  * ID is the connector ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#id DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * LDAP holds configuration for the LDAP connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#ldap DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#ldap}
  */
  readonly ldap?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdap;
  /**
  * Name is the connector name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * OIDC holds configuration for the OIDC connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#oidc DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#oidc}
  */
  readonly oidc?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidc;
  /**
  * Type is the connector type to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#type DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ldap: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapToTerraform(struct!.ldap),
    name: cdktf.stringToTerraform(struct!.name),
    oidc: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcToTerraform(struct!.oidc),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidc",
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ldap.internalValue = undefined;
      this._name = undefined;
      this._oidc.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ldap.internalValue = value.ldap;
      this._name = value.name;
      this._oidc.internalValue = value.oidc;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
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

  // oidc - computed: false, optional: true, required: false
  private _oidc = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokens {
  /**
  * AbsoluteLifetime defines the duration of time after which a refresh token will expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#absolute_lifetime DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#absolute_lifetime}
  */
  readonly absoluteLifetime?: string;
  /**
  * DisableRotation disables refresh token rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#disable_rotation DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#disable_rotation}
  */
  readonly disableRotation?: boolean | cdktf.IResolvable;
  /**
  * ReuseInterval defines the duration of time after which a refresh token can be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#reuse_interval DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#reuse_interval}
  */
  readonly reuseInterval?: string;
  /**
  * ValidIfNotUsedFor defines the duration of time after which a refresh token will expire if not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#valid_if_not_used_for DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#valid_if_not_used_for}
  */
  readonly validIfNotUsedFor?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokensToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_lifetime: cdktf.stringToTerraform(struct!.absoluteLifetime),
    disable_rotation: cdktf.booleanToTerraform(struct!.disableRotation),
    reuse_interval: cdktf.stringToTerraform(struct!.reuseInterval),
    valid_if_not_used_for: cdktf.stringToTerraform(struct!.validIfNotUsedFor),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokensToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.absoluteLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_rotation: {
      value: cdktf.booleanToHclTerraform(struct!.disableRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reuse_interval: {
      value: cdktf.stringToHclTerraform(struct!.reuseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_if_not_used_for: {
      value: cdktf.stringToHclTerraform(struct!.validIfNotUsedFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokensOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteLifetime = this._absoluteLifetime;
    }
    if (this._disableRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRotation = this._disableRotation;
    }
    if (this._reuseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseInterval = this._reuseInterval;
    }
    if (this._validIfNotUsedFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.validIfNotUsedFor = this._validIfNotUsedFor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteLifetime = undefined;
      this._disableRotation = undefined;
      this._reuseInterval = undefined;
      this._validIfNotUsedFor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteLifetime = value.absoluteLifetime;
      this._disableRotation = value.disableRotation;
      this._reuseInterval = value.reuseInterval;
      this._validIfNotUsedFor = value.validIfNotUsedFor;
    }
  }

  // absolute_lifetime - computed: false, optional: true, required: false
  private _absoluteLifetime?: string; 
  public get absoluteLifetime() {
    return this.getStringAttribute('absolute_lifetime');
  }
  public set absoluteLifetime(value: string) {
    this._absoluteLifetime = value;
  }
  public resetAbsoluteLifetime() {
    this._absoluteLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteLifetimeInput() {
    return this._absoluteLifetime;
  }

  // disable_rotation - computed: false, optional: true, required: false
  private _disableRotation?: boolean | cdktf.IResolvable; 
  public get disableRotation() {
    return this.getBooleanAttribute('disable_rotation');
  }
  public set disableRotation(value: boolean | cdktf.IResolvable) {
    this._disableRotation = value;
  }
  public resetDisableRotation() {
    this._disableRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRotationInput() {
    return this._disableRotation;
  }

  // reuse_interval - computed: false, optional: true, required: false
  private _reuseInterval?: string; 
  public get reuseInterval() {
    return this.getStringAttribute('reuse_interval');
  }
  public set reuseInterval(value: string) {
    this._reuseInterval = value;
  }
  public resetReuseInterval() {
    this._reuseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseIntervalInput() {
    return this._reuseInterval;
  }

  // valid_if_not_used_for - computed: false, optional: true, required: false
  private _validIfNotUsedFor?: string; 
  public get validIfNotUsedFor() {
    return this.getStringAttribute('valid_if_not_used_for');
  }
  public set validIfNotUsedFor(value: string) {
    this._validIfNotUsedFor = value;
  }
  public resetValidIfNotUsedFor() {
    this._validIfNotUsedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validIfNotUsedForInput() {
    return this._validIfNotUsedFor;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiry {
  /**
  * AuthRequests defines the duration of time for which the AuthRequests will be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#auth_requests DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#auth_requests}
  */
  readonly authRequests?: string;
  /**
  * DeviceRequests defines the duration of time for which the DeviceRequests will be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#device_requests DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#device_requests}
  */
  readonly deviceRequests?: string;
  /**
  * IDTokens defines the duration of time for which the IdTokens will be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#id_tokens DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#id_tokens}
  */
  readonly idTokens?: string;
  /**
  * RefreshTokens defines refresh tokens expiry policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#refresh_tokens DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#refresh_tokens}
  */
  readonly refreshTokens?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokens;
  /**
  * SigningKeys defines the duration of time after which the SigningKeys will be rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#signing_keys DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#signing_keys}
  */
  readonly signingKeys?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_requests: cdktf.stringToTerraform(struct!.authRequests),
    device_requests: cdktf.stringToTerraform(struct!.deviceRequests),
    id_tokens: cdktf.stringToTerraform(struct!.idTokens),
    refresh_tokens: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokensToTerraform(struct!.refreshTokens),
    signing_keys: cdktf.stringToTerraform(struct!.signingKeys),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_requests: {
      value: cdktf.stringToHclTerraform(struct!.authRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_requests: {
      value: cdktf.stringToHclTerraform(struct!.deviceRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_tokens: {
      value: cdktf.stringToHclTerraform(struct!.idTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_tokens: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokensToHclTerraform(struct!.refreshTokens),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokens",
    },
    signing_keys: {
      value: cdktf.stringToHclTerraform(struct!.signingKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRequests = this._authRequests;
    }
    if (this._deviceRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRequests = this._deviceRequests;
    }
    if (this._idTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokens = this._idTokens;
    }
    if (this._refreshTokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokens = this._refreshTokens?.internalValue;
    }
    if (this._signingKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingKeys = this._signingKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authRequests = undefined;
      this._deviceRequests = undefined;
      this._idTokens = undefined;
      this._refreshTokens.internalValue = undefined;
      this._signingKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authRequests = value.authRequests;
      this._deviceRequests = value.deviceRequests;
      this._idTokens = value.idTokens;
      this._refreshTokens.internalValue = value.refreshTokens;
      this._signingKeys = value.signingKeys;
    }
  }

  // auth_requests - computed: false, optional: true, required: false
  private _authRequests?: string; 
  public get authRequests() {
    return this.getStringAttribute('auth_requests');
  }
  public set authRequests(value: string) {
    this._authRequests = value;
  }
  public resetAuthRequests() {
    this._authRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRequestsInput() {
    return this._authRequests;
  }

  // device_requests - computed: false, optional: true, required: false
  private _deviceRequests?: string; 
  public get deviceRequests() {
    return this.getStringAttribute('device_requests');
  }
  public set deviceRequests(value: string) {
    this._deviceRequests = value;
  }
  public resetDeviceRequests() {
    this._deviceRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRequestsInput() {
    return this._deviceRequests;
  }

  // id_tokens - computed: false, optional: true, required: false
  private _idTokens?: string; 
  public get idTokens() {
    return this.getStringAttribute('id_tokens');
  }
  public set idTokens(value: string) {
    this._idTokens = value;
  }
  public resetIdTokens() {
    this._idTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokensInput() {
    return this._idTokens;
  }

  // refresh_tokens - computed: false, optional: true, required: false
  private _refreshTokens = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokensOutputReference(this, "refresh_tokens");
  public get refreshTokens() {
    return this._refreshTokens;
  }
  public putRefreshTokens(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryRefreshTokens) {
    this._refreshTokens.internalValue = value;
  }
  public resetRefreshTokens() {
    this._refreshTokens.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokensInput() {
    return this._refreshTokens.internalValue;
  }

  // signing_keys - computed: false, optional: true, required: false
  private _signingKeys?: string; 
  public get signingKeys() {
    return this.getStringAttribute('signing_keys');
  }
  public set signingKeys(value: string) {
    this._signingKeys = value;
  }
  public resetSigningKeys() {
    this._signingKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeysInput() {
    return this._signingKeys;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontend {
  /**
  * Dir is a file path to static web assets. It is expected to contain the following directories: * static - Static static served at '( issuer URL )/static'. * templates - HTML templates controlled by dex. * themes/(theme) - Static static served at '( issuer URL )/theme'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#dir DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#dir}
  */
  readonly dir?: string;
  /**
  * Issuer is the name of the issuer, used in the HTML templates. Defaults to 'dex'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#issuer DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#issuer}
  */
  readonly issuer?: string;
  /**
  * LogoURL is the URL of the logo to use in the HTML templates. Defaults to '( issuer URL )/theme/logo.png'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#logo_url DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Theme is the name of the theme to use. Defaults to 'light'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#theme DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#theme}
  */
  readonly theme?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontendToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    logo_url: cdktf.stringToTerraform(struct!.logoUrl),
    theme: cdktf.stringToTerraform(struct!.theme),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontendToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_url: {
      value: cdktf.stringToHclTerraform(struct!.logoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    theme: {
      value: cdktf.stringToHclTerraform(struct!.theme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._logoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoUrl = this._logoUrl;
    }
    if (this._theme !== undefined) {
      hasAnyValues = true;
      internalValueResult.theme = this._theme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dir = undefined;
      this._issuer = undefined;
      this._logoUrl = undefined;
      this._theme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dir = value.dir;
      this._issuer = value.issuer;
      this._logoUrl = value.logoUrl;
      this._theme = value.theme;
    }
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpc {
  /**
  * Annotations is an optional map of additional annotations to add to the Dex API gRPC service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#annotations DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * CertificateSecretRef is an optional reference to a secret containing the TLS certificate and key to use for the Dex API gRPC server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#certificate_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#certificate_secret_ref}
  */
  readonly certificateSecretRef?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRef;
  /**
  * ClientCASecretRef is an optional reference to a secret containing the client CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#client_ca_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#client_ca_secret_ref}
  */
  readonly clientCaSecretRef?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRef;
  /**
  * Reflection enables gRPC server reflection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#reflection DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#reflection}
  */
  readonly reflection?: boolean | cdktf.IResolvable;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    certificate_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRefToTerraform(struct!.certificateSecretRef),
    client_ca_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRefToTerraform(struct!.clientCaSecretRef),
    reflection: cdktf.booleanToTerraform(struct!.reflection),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpc | cdktf.IResolvable): any {
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
    certificate_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRefToHclTerraform(struct!.certificateSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRef",
    },
    client_ca_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRefToHclTerraform(struct!.clientCaSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRef",
    },
    reflection: {
      value: cdktf.booleanToHclTerraform(struct!.reflection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._certificateSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecretRef = this._certificateSecretRef?.internalValue;
    }
    if (this._clientCaSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCaSecretRef = this._clientCaSecretRef?.internalValue;
    }
    if (this._reflection !== undefined) {
      hasAnyValues = true;
      internalValueResult.reflection = this._reflection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._certificateSecretRef.internalValue = undefined;
      this._clientCaSecretRef.internalValue = undefined;
      this._reflection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._certificateSecretRef.internalValue = value.certificateSecretRef;
      this._clientCaSecretRef.internalValue = value.clientCaSecretRef;
      this._reflection = value.reflection;
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

  // certificate_secret_ref - computed: false, optional: true, required: false
  private _certificateSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRefOutputReference(this, "certificate_secret_ref");
  public get certificateSecretRef() {
    return this._certificateSecretRef;
  }
  public putCertificateSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcCertificateSecretRef) {
    this._certificateSecretRef.internalValue = value;
  }
  public resetCertificateSecretRef() {
    this._certificateSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretRefInput() {
    return this._certificateSecretRef.internalValue;
  }

  // client_ca_secret_ref - computed: false, optional: true, required: false
  private _clientCaSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRefOutputReference(this, "client_ca_secret_ref");
  public get clientCaSecretRef() {
    return this._clientCaSecretRef;
  }
  public putClientCaSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcClientCaSecretRef) {
    this._clientCaSecretRef.internalValue = value;
  }
  public resetClientCaSecretRef() {
    this._clientCaSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaSecretRefInput() {
    return this._clientCaSecretRef.internalValue;
  }

  // reflection - computed: false, optional: true, required: false
  private _reflection?: boolean | cdktf.IResolvable; 
  public get reflection() {
    return this.getBooleanAttribute('reflection');
  }
  public set reflection(value: boolean | cdktf.IResolvable) {
    this._reflection = value;
  }
  public resetReflection() {
    this._reflection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reflectionInput() {
    return this._reflection;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPaths {
  /**
  * Path is matched against the path of an incoming request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#path DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * PathType determines the interpretation of the Path matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#path_type DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#path_type}
  */
  readonly pathType: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPathsToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    path_type: cdktf.stringToTerraform(struct!.pathType),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPathsToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_type: {
      value: cdktf.stringToHclTerraform(struct!.pathType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathType = this._pathType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._pathType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._pathType = value.pathType;
    }
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

  // path_type - computed: false, optional: false, required: true
  private _pathType?: string; 
  public get pathType() {
    return this.getStringAttribute('path_type');
  }
  public set pathType(value: string) {
    this._pathType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPathsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPaths[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPathsOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHosts {
  /**
  * Host is the host to route traffic to the Dex identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#host DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * Paths is a list of paths to route traffic to the Dex identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#paths DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#paths}
  */
  readonly paths: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPaths[] | cdktf.IResolvable;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    paths: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPathsToTerraform, false)(struct!.paths),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._paths.internalValue = value.paths;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // paths - computed: false, optional: false, required: true
  private _paths = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHosts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTls {
  /**
  * hosts is a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#hosts DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * secretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the 'Host' header field used by an IngressRule, the SNI host is used for termination and value of the 'Host' header is used for routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#secret_name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTlsToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTlsToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._secretName = value.secretName;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTlsOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngress {
  /**
  * Annotations is an optional map of additional annotations to add to the ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#annotations DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Enabled enables ingress for the Dex identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#enabled DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Hosts is a list of hosts and paths to route traffic to the Dex identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#hosts DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#hosts}
  */
  readonly hosts: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHosts[] | cdktf.IResolvable;
  /**
  * IngressClassName is the optional ingress class to use for the Dex identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#ingress_class_name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * TLS is an optional list of TLS configurations for the ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#tls DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTls[] | cdktf.IResolvable;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hosts: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsToTerraform, false)(struct!.hosts),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    tls: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTlsToTerraform, false)(struct!.tls),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosts: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsList",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTlsToHclTerraform, false)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._enabled = undefined;
      this._hosts.internalValue = undefined;
      this._ingressClassName = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._enabled = value.enabled;
      this._hosts.internalValue = value.hosts;
      this._ingressClassName = value.ingressClassName;
      this._tls.internalValue = value.tls;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressTls[] | cdktf.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLogger {
  /**
  * Format specifies the format to be used for logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#format DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Level sets logging level severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#level DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLoggerToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLogger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLoggerToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLogger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLoggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLogger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLogger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._level = value.level;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetrics {
  /**
  * Enabled enables Prometheus metric scraping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#enabled DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Interval at which metrics should be scraped If not specified Prometheus' global scrape interval is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#interval DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetricsToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetricsToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._interval = value.interval;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2 {
  /**
  * AlwaysShowLoginScreen, if specified, show the connector selection screen even if there's only one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#always_show_login_screen DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#always_show_login_screen}
  */
  readonly alwaysShowLoginScreen?: boolean | cdktf.IResolvable;
  /**
  * GrantTypes is a list of allowed grant types, defaults to all supported types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#grant_types DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#grant_types}
  */
  readonly grantTypes?: string[];
  /**
  * PasswordConnector is a specific connector to user for password grants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#password_connector DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#password_connector}
  */
  readonly passwordConnector?: string;
  /**
  * ResponseTypes is a list of allowed response types, defaults to all supported types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#response_types DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#response_types}
  */
  readonly responseTypes?: string[];
  /**
  * SkipApprovalScreen, if specified, do not prompt the user to approve client authorization. The act of logging in implies authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#skip_approval_screen DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#skip_approval_screen}
  */
  readonly skipApprovalScreen?: boolean | cdktf.IResolvable;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2ToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_show_login_screen: cdktf.booleanToTerraform(struct!.alwaysShowLoginScreen),
    grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grantTypes),
    password_connector: cdktf.stringToTerraform(struct!.passwordConnector),
    response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseTypes),
    skip_approval_screen: cdktf.booleanToTerraform(struct!.skipApprovalScreen),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2ToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_show_login_screen: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysShowLoginScreen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grant_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.grantTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password_connector: {
      value: cdktf.stringToHclTerraform(struct!.passwordConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skip_approval_screen: {
      value: cdktf.booleanToHclTerraform(struct!.skipApprovalScreen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysShowLoginScreen !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysShowLoginScreen = this._alwaysShowLoginScreen;
    }
    if (this._grantTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantTypes = this._grantTypes;
    }
    if (this._passwordConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordConnector = this._passwordConnector;
    }
    if (this._responseTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTypes = this._responseTypes;
    }
    if (this._skipApprovalScreen !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipApprovalScreen = this._skipApprovalScreen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysShowLoginScreen = undefined;
      this._grantTypes = undefined;
      this._passwordConnector = undefined;
      this._responseTypes = undefined;
      this._skipApprovalScreen = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysShowLoginScreen = value.alwaysShowLoginScreen;
      this._grantTypes = value.grantTypes;
      this._passwordConnector = value.passwordConnector;
      this._responseTypes = value.responseTypes;
      this._skipApprovalScreen = value.skipApprovalScreen;
    }
  }

  // always_show_login_screen - computed: false, optional: true, required: false
  private _alwaysShowLoginScreen?: boolean | cdktf.IResolvable; 
  public get alwaysShowLoginScreen() {
    return this.getBooleanAttribute('always_show_login_screen');
  }
  public set alwaysShowLoginScreen(value: boolean | cdktf.IResolvable) {
    this._alwaysShowLoginScreen = value;
  }
  public resetAlwaysShowLoginScreen() {
    this._alwaysShowLoginScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysShowLoginScreenInput() {
    return this._alwaysShowLoginScreen;
  }

  // grant_types - computed: false, optional: true, required: false
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return this.getListAttribute('grant_types');
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  public resetGrantTypes() {
    this._grantTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
  }

  // password_connector - computed: false, optional: true, required: false
  private _passwordConnector?: string; 
  public get passwordConnector() {
    return this.getStringAttribute('password_connector');
  }
  public set passwordConnector(value: string) {
    this._passwordConnector = value;
  }
  public resetPasswordConnector() {
    this._passwordConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordConnectorInput() {
    return this._passwordConnector;
  }

  // response_types - computed: false, optional: true, required: false
  private _responseTypes?: string[]; 
  public get responseTypes() {
    return this.getListAttribute('response_types');
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  public resetResponseTypes() {
    this._responseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
  }

  // skip_approval_screen - computed: false, optional: true, required: false
  private _skipApprovalScreen?: boolean | cdktf.IResolvable; 
  public get skipApprovalScreen() {
    return this.getBooleanAttribute('skip_approval_screen');
  }
  public set skipApprovalScreen(value: boolean | cdktf.IResolvable) {
    this._skipApprovalScreen = value;
  }
  public resetSkipApprovalScreen() {
    this._skipApprovalScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipApprovalScreenInput() {
    return this._skipApprovalScreen;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#claims DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#limits DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#requests DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSsl {
  /**
  * CASecretRef is an optional reference to a secret containing the CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#ca_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#ca_secret_ref}
  */
  readonly caSecretRef?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRef;
  /**
  * ClientCertificateSecretRef is an optional reference to a secret containing the client certificate and key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#client_certificate_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#client_certificate_secret_ref}
  */
  readonly clientCertificateSecretRef?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRef;
  /**
  * Mode is the SSL mode to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#mode DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * ServerName ensures that the certificate matches the given hostname the client is connecting to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#server_name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRefToTerraform(struct!.caSecretRef),
    client_certificate_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRefToTerraform(struct!.clientCertificateSecretRef),
    mode: cdktf.stringToTerraform(struct!.mode),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRefToHclTerraform(struct!.caSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRef",
    },
    client_certificate_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRefToHclTerraform(struct!.clientCertificateSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRef",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSsl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecretRef = this._caSecretRef?.internalValue;
    }
    if (this._clientCertificateSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateSecretRef = this._clientCertificateSecretRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSsl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSecretRef.internalValue = undefined;
      this._clientCertificateSecretRef.internalValue = undefined;
      this._mode = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSecretRef.internalValue = value.caSecretRef;
      this._clientCertificateSecretRef.internalValue = value.clientCertificateSecretRef;
      this._mode = value.mode;
      this._serverName = value.serverName;
    }
  }

  // ca_secret_ref - computed: false, optional: true, required: false
  private _caSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRefOutputReference(this, "ca_secret_ref");
  public get caSecretRef() {
    return this._caSecretRef;
  }
  public putCaSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslCaSecretRef) {
    this._caSecretRef.internalValue = value;
  }
  public resetCaSecretRef() {
    this._caSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretRefInput() {
    return this._caSecretRef.internalValue;
  }

  // client_certificate_secret_ref - computed: false, optional: true, required: false
  private _clientCertificateSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRefOutputReference(this, "client_certificate_secret_ref");
  public get clientCertificateSecretRef() {
    return this._clientCertificateSecretRef;
  }
  public putClientCertificateSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslClientCertificateSecretRef) {
    this._clientCertificateSecretRef.internalValue = value;
  }
  public resetClientCertificateSecretRef() {
    this._clientCertificateSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateSecretRefInput() {
    return this._clientCertificateSecretRef.internalValue;
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

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgres {
  /**
  * ConnMaxLifetime is the maximum amount of time a connection may be reused (default forever).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#conn_max_lifetime DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#conn_max_lifetime}
  */
  readonly connMaxLifetime?: string;
  /**
  * ConnectionTimeout is the maximum amount of time to wait for a connection to become available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#connection_timeout DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#connection_timeout}
  */
  readonly connectionTimeout?: string;
  /**
  * CredentialsSecretRef is a reference to a secret containing the username and password to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#credentials_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRef;
  /**
  * Database is the name of the database to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#database DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#database}
  */
  readonly database: string;
  /**
  * Host is the host to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#host DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * MaxIdleConns is the maximum number of connections in the idle connection pool (default 5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#max_idle_conns DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#max_idle_conns}
  */
  readonly maxIdleConns?: number;
  /**
  * MaxOpenConns is the maximum number of open connections to the database (default 5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#max_open_conns DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#max_open_conns}
  */
  readonly maxOpenConns?: number;
  /**
  * Port is the port to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#port DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * SSL holds optional TLS configuration for postgres.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#ssl DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#ssl}
  */
  readonly ssl?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSsl;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgres | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_max_lifetime: cdktf.stringToTerraform(struct!.connMaxLifetime),
    connection_timeout: cdktf.stringToTerraform(struct!.connectionTimeout),
    credentials_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    max_idle_conns: cdktf.numberToTerraform(struct!.maxIdleConns),
    max_open_conns: cdktf.numberToTerraform(struct!.maxOpenConns),
    port: cdktf.numberToTerraform(struct!.port),
    ssl: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslToTerraform(struct!.ssl),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgres | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_max_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.connMaxLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRef",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_idle_conns: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_open_conns: {
      value: cdktf.numberToHclTerraform(struct!.maxOpenConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslToHclTerraform(struct!.ssl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSsl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgres | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connMaxLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.connMaxLifetime = this._connMaxLifetime;
    }
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._maxIdleConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConns = this._maxIdleConns;
    }
    if (this._maxOpenConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConns = this._maxOpenConns;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ssl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgres | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connMaxLifetime = undefined;
      this._connectionTimeout = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._maxIdleConns = undefined;
      this._maxOpenConns = undefined;
      this._port = undefined;
      this._ssl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connMaxLifetime = value.connMaxLifetime;
      this._connectionTimeout = value.connectionTimeout;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._database = value.database;
      this._host = value.host;
      this._maxIdleConns = value.maxIdleConns;
      this._maxOpenConns = value.maxOpenConns;
      this._port = value.port;
      this._ssl.internalValue = value.ssl;
    }
  }

  // conn_max_lifetime - computed: false, optional: true, required: false
  private _connMaxLifetime?: string; 
  public get connMaxLifetime() {
    return this.getStringAttribute('conn_max_lifetime');
  }
  public set connMaxLifetime(value: string) {
    this._connMaxLifetime = value;
  }
  public resetConnMaxLifetime() {
    this._connMaxLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connMaxLifetimeInput() {
    return this._connMaxLifetime;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: string; 
  public get connectionTimeout() {
    return this.getStringAttribute('connection_timeout');
  }
  public set connectionTimeout(value: string) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // max_idle_conns - computed: false, optional: true, required: false
  private _maxIdleConns?: number; 
  public get maxIdleConns() {
    return this.getNumberAttribute('max_idle_conns');
  }
  public set maxIdleConns(value: number) {
    this._maxIdleConns = value;
  }
  public resetMaxIdleConns() {
    this._maxIdleConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnsInput() {
    return this._maxIdleConns;
  }

  // max_open_conns - computed: false, optional: true, required: false
  private _maxOpenConns?: number; 
  public get maxOpenConns() {
    return this.getNumberAttribute('max_open_conns');
  }
  public set maxOpenConns(value: number) {
    this._maxOpenConns = value;
  }
  public resetMaxOpenConns() {
    this._maxOpenConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnsInput() {
    return this._maxOpenConns;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresSsl) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3 {
  /**
  * File is the path to the sqlite3 database file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#file DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#file}
  */
  readonly file: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3ToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3ToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
    }
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorage {
  /**
  * Postgres holds the configuration for the postgres storage type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#postgres DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#postgres}
  */
  readonly postgres?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgres;
  /**
  * Sqlite3 holds the configuration for the sqlite3 storage type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#sqlite3 DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#sqlite3}
  */
  readonly sqlite3?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3;
  /**
  * Type is the storage type to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#type DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    postgres: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresToTerraform(struct!.postgres),
    sqlite3: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3ToTerraform(struct!.sqlite3),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    postgres: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresToHclTerraform(struct!.postgres),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgres",
    },
    sqlite3: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3ToHclTerraform(struct!.sqlite3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3",
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgres?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgres = this._postgres?.internalValue;
    }
    if (this._sqlite3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlite3 = this._sqlite3?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postgres.internalValue = undefined;
      this._sqlite3.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postgres.internalValue = value.postgres;
      this._sqlite3.internalValue = value.sqlite3;
      this._type = value.type;
    }
  }

  // postgres - computed: false, optional: true, required: false
  private _postgres = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgresOutputReference(this, "postgres");
  public get postgres() {
    return this._postgres;
  }
  public putPostgres(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStoragePostgres) {
    this._postgres.internalValue = value;
  }
  public resetPostgres() {
    this._postgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInput() {
    return this._postgres.internalValue;
  }

  // sqlite3 - computed: false, optional: true, required: false
  private _sqlite3 = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3OutputReference(this, "sqlite3");
  public get sqlite3() {
    return this._sqlite3;
  }
  public putSqlite3(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageSqlite3) {
    this._sqlite3.internalValue = value;
  }
  public resetSqlite3() {
    this._sqlite3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlite3Input() {
    return this._sqlite3.internalValue;
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#annotations DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#finalizers DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#labels DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#namespace DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadataToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadataToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadata | cdktf.IResolvable): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._finalizers = undefined;
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
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#api_group DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#kind DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#api_group DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#kind DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#namespace DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaimsToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaimsToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaimsOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#claims DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#limits DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#requests DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#key DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#operator DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#values DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#match_expressions DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#match_labels DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsList",
    },
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#access_modes DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#data_source DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#data_source_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#resources DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#selector DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#storage_class_name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#volume_mode DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#volume_name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRef",
    },
    resources: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResources",
    },
    selector: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
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

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditions {
  /**
  * lastProbeTime is the time we probed the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#last_probe_time DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#last_probe_time}
  */
  readonly lastProbeTime?: string;
  /**
  * lastTransitionTime is the time the condition transitioned from one status to another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#last_transition_time DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#last_transition_time}
  */
  readonly lastTransitionTime?: string;
  /**
  * message is the human-readable message indicating details about last transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#message DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#message}
  */
  readonly message?: string;
  /**
  * reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports 'ResizeStarted' that means the underlying persistent volume is being resized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#reason DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#status DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#status}
  */
  readonly status: string;
  /**
  * PersistentVolumeClaimConditionType is a valid value of PersistentVolumeClaimCondition.Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#type DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditionsToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_probe_time: cdktf.stringToTerraform(struct!.lastProbeTime),
    last_transition_time: cdktf.stringToTerraform(struct!.lastTransitionTime),
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditionsToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_probe_time: {
      value: cdktf.stringToHclTerraform(struct!.lastProbeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_transition_time: {
      value: cdktf.stringToHclTerraform(struct!.lastTransitionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastProbeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastProbeTime = this._lastProbeTime;
    }
    if (this._lastTransitionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastTransitionTime = this._lastTransitionTime;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastProbeTime = undefined;
      this._lastTransitionTime = undefined;
      this._message = undefined;
      this._reason = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastProbeTime = value.lastProbeTime;
      this._lastTransitionTime = value.lastTransitionTime;
      this._message = value.message;
      this._reason = value.reason;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // last_probe_time - computed: false, optional: true, required: false
  private _lastProbeTime?: string; 
  public get lastProbeTime() {
    return this.getStringAttribute('last_probe_time');
  }
  public set lastProbeTime(value: string) {
    this._lastProbeTime = value;
  }
  public resetLastProbeTime() {
    this._lastProbeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastProbeTimeInput() {
    return this._lastProbeTime;
  }

  // last_transition_time - computed: false, optional: true, required: false
  private _lastTransitionTime?: string; 
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }
  public set lastTransitionTime(value: string) {
    this._lastTransitionTime = value;
  }
  public resetLastTransitionTime() {
    this._lastTransitionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTransitionTimeInput() {
    return this._lastTransitionTime;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditionsOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatus {
  /**
  * accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#access_modes DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * allocatedResourceStatuses stores status of resource being resized for the given PVC. Key names follow standard Kubernetes label syntax. Valid values are either: * Un-prefixed keys: - storage - the capacity of the volume. * Custom resources must use implementation-defined prefixed names such as 'example.com/my-custom-resource' Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used. ClaimResourceStatus can be in any of following states: - ControllerResizeInProgress: State set when resize controller starts resizing the volume in control-plane. - ControllerResizeFailed: State set when resize has failed in resize controller with a terminal error. - NodeResizePending: State set when resize controller has finished resizing the volume but further resizing of volume is needed on the node. - NodeResizeInProgress: State set when kubelet starts resizing the volume. - NodeResizeFailed: State set when resizing has failed in kubelet with a terminal error. Transient errors don't set NodeResizeFailed. For example: if expanding a PVC for more capacity - this field can be one of the following states: - pvc.status.allocatedResourceStatus['storage'] = 'ControllerResizeInProgress' - pvc.status.allocatedResourceStatus['storage'] = 'ControllerResizeFailed' - pvc.status.allocatedResourceStatus['storage'] = 'NodeResizePending' - pvc.status.allocatedResourceStatus['storage'] = 'NodeResizeInProgress' - pvc.status.allocatedResourceStatus['storage'] = 'NodeResizeFailed' When this field is not set, it means that no resize operation is in progress for the given PVC. A controller that receives PVC update with previously unknown resourceName or ClaimResourceStatus should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#allocated_resource_statuses DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#allocated_resource_statuses}
  */
  readonly allocatedResourceStatuses?: { [key: string]: string };
  /**
  * allocatedResources tracks the resources allocated to a PVC including its capacity. Key names follow standard Kubernetes label syntax. Valid values are either: * Un-prefixed keys: - storage - the capacity of the volume. * Custom resources must use implementation-defined prefixed names such as 'example.com/my-custom-resource' Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used. Capacity reported here may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity. A controller that receives PVC update with previously unknown resourceName should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#allocated_resources DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#allocated_resources}
  */
  readonly allocatedResources?: { [key: string]: string };
  /**
  * capacity represents the actual resources of the underlying volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#capacity DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#capacity}
  */
  readonly capacity?: { [key: string]: string };
  /**
  * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#conditions DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#conditions}
  */
  readonly conditions?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditions[] | cdktf.IResolvable;
  /**
  * phase represents the current phase of PersistentVolumeClaim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#phase DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#phase}
  */
  readonly phase?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    allocated_resource_statuses: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allocatedResourceStatuses),
    allocated_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allocatedResources),
    capacity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.capacity),
    conditions: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditionsToTerraform, false)(struct!.conditions),
    phase: cdktf.stringToTerraform(struct!.phase),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allocated_resource_statuses: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.allocatedResourceStatuses),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allocated_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.allocatedResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    capacity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.capacity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditionsList",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._allocatedResourceStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedResourceStatuses = this._allocatedResourceStatuses;
    }
    if (this._allocatedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedResources = this._allocatedResources;
    }
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._allocatedResourceStatuses = undefined;
      this._allocatedResources = undefined;
      this._capacity = undefined;
      this._conditions.internalValue = undefined;
      this._phase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._allocatedResourceStatuses = value.allocatedResourceStatuses;
      this._allocatedResources = value.allocatedResources;
      this._capacity = value.capacity;
      this._conditions.internalValue = value.conditions;
      this._phase = value.phase;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // allocated_resource_statuses - computed: false, optional: true, required: false
  private _allocatedResourceStatuses?: { [key: string]: string }; 
  public get allocatedResourceStatuses() {
    return this.getStringMapAttribute('allocated_resource_statuses');
  }
  public set allocatedResourceStatuses(value: { [key: string]: string }) {
    this._allocatedResourceStatuses = value;
  }
  public resetAllocatedResourceStatuses() {
    this._allocatedResourceStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedResourceStatusesInput() {
    return this._allocatedResourceStatuses;
  }

  // allocated_resources - computed: false, optional: true, required: false
  private _allocatedResources?: { [key: string]: string }; 
  public get allocatedResources() {
    return this.getStringMapAttribute('allocated_resources');
  }
  public set allocatedResources(value: { [key: string]: string }) {
    this._allocatedResources = value;
  }
  public resetAllocatedResources() {
    this._allocatedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedResourcesInput() {
    return this._allocatedResources;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: { [key: string]: string }; 
  public get capacity() {
    return this.getStringMapAttribute('capacity');
  }
  public set capacity(value: { [key: string]: string }) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplates {
  /**
  * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#api_version DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#kind DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#metadata DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadata;
  /**
  * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#spec DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpec;
  /**
  * status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#status DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#status}
  */
  readonly status?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatus;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadataToTerraform(struct!.metadata),
    spec: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecToTerraform(struct!.spec),
    status: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusToTerraform(struct!.status),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplates | cdktf.IResolvable): any {
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
    metadata: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadata",
    },
    spec: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpec",
    },
    status: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplates | cdktf.IResolvable | undefined {
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
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
      this._status.internalValue = undefined;
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
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
      this._status.internalValue = value.status;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#mount_path DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#mount_propagation DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#read_only DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#sub_path DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#sub_path_expr DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMountsToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMountsToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMountsOutputReference {
    return new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#name DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRefToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRefToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWeb {
  /**
  * AllowedOrigins is a list of allowed origins for CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#allowed_origins DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Annotations is an optional map of additional annotations to add to the web service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#annotations DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * CertificateSecretRef is an optional reference to a secret containing the TLS certificate and key to use for HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#certificate_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#certificate_secret_ref}
  */
  readonly certificateSecretRef?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRef;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    certificate_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRefToTerraform(struct!.certificateSecretRef),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    certificate_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRefToHclTerraform(struct!.certificateSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWeb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._certificateSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecretRef = this._certificateSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWeb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedOrigins = undefined;
      this._annotations = undefined;
      this._certificateSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedOrigins = value.allowedOrigins;
      this._annotations = value.annotations;
      this._certificateSecretRef.internalValue = value.certificateSecretRef;
    }
  }

  // allowed_origins - computed: false, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
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

  // certificate_secret_ref - computed: false, optional: true, required: false
  private _certificateSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRefOutputReference(this, "certificate_secret_ref");
  public get certificateSecretRef() {
    return this._certificateSecretRef;
  }
  public putCertificateSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebCertificateSecretRef) {
    this._certificateSecretRef.internalValue = value;
  }
  public resetCertificateSecretRef() {
    this._certificateSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretRefInput() {
    return this._certificateSecretRef.internalValue;
  }
}
export interface DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpec {
  /**
  * ClientCertificateSecretRef is an optional reference to a secret containing a client certificate that the operator can use for connecting to the Dex API gRPC server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#client_certificate_secret_ref DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#client_certificate_secret_ref}
  */
  readonly clientCertificateSecretRef?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRef;
  /**
  * Connectors holds configuration for connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#connectors DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#connectors}
  */
  readonly connectors?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectors[] | cdktf.IResolvable;
  /**
  * Expiry holds configuration for tokens, signing keys, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#expiry DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#expiry}
  */
  readonly expiry?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiry;
  /**
  * Frontend holds the web server's frontend templates and asset configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#frontend DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#frontend}
  */
  readonly frontend?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontend;
  /**
  * GRPC holds configuration for the Dex API gRPC server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#grpc DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#grpc}
  */
  readonly grpc: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpc;
  /**
  * Image is the Dex image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#image DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Ingress is the optional ingress configuration for the Dex identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#ingress DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngress;
  /**
  * Issuer is the base path of Dex and the external name of the OpenID Connect service. This is the canonical URL that all clients MUST use to refer to Dex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#issuer DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#issuer}
  */
  readonly issuer: string;
  /**
  * Logger holds configuration required to customize logging for dex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#logger DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#logger}
  */
  readonly logger?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLogger;
  /**
  * Metrics holds configuration for metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#metrics DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetrics;
  /**
  * OAuth2 holds configuration for OAuth2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#oauth2 DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#oauth2}
  */
  readonly oauth2?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2;
  /**
  * Replicas is the optional number of replicas of the Dex identity provider pod to run. Only supported if using postgresql storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#replicas DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources allows specifying the resource requirements for the Dex identity provider container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#resources DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResources;
  /**
  * Storage configures the storage for Dex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#storage DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#storage}
  */
  readonly storage: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorage;
  /**
  * VolumeClaimTemplates are volume claim templates for the Dex identity provider pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#volume_claim_templates DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#volume_claim_templates}
  */
  readonly volumeClaimTemplates?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplates[] | cdktf.IResolvable;
  /**
  * VolumeMounts are volume mounts for the Dex identity provider container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#volume_mounts DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMounts[] | cdktf.IResolvable;
  /**
  * Web holds configuration for the web server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#web DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest#web}
  */
  readonly web: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWeb;
}

export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_secret_ref: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRefToTerraform(struct!.clientCertificateSecretRef),
    connectors: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsToTerraform, false)(struct!.connectors),
    expiry: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryToTerraform(struct!.expiry),
    frontend: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontendToTerraform(struct!.frontend),
    grpc: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcToTerraform(struct!.grpc),
    image: cdktf.stringToTerraform(struct!.image),
    ingress: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressToTerraform(struct!.ingress),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    logger: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLoggerToTerraform(struct!.logger),
    metrics: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetricsToTerraform(struct!.metrics),
    oauth2: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2ToTerraform(struct!.oauth2),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    storage: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageToTerraform(struct!.storage),
    volume_claim_templates: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesToTerraform, false)(struct!.volumeClaimTemplates),
    volume_mounts: cdktf.listMapper(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
    web: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebToTerraform(struct!.web),
  }
}


export function dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_secret_ref: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRefToHclTerraform(struct!.clientCertificateSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRef",
    },
    connectors: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsToHclTerraform, false)(struct!.connectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsList",
    },
    expiry: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryToHclTerraform(struct!.expiry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiry",
    },
    frontend: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontendToHclTerraform(struct!.frontend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontend",
    },
    grpc: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpc",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngress",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logger: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLoggerToHclTerraform(struct!.logger),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLogger",
    },
    metrics: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetrics",
    },
    oauth2: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResources",
    },
    storage: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorage",
    },
    volume_claim_templates: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesToHclTerraform, false)(struct!.volumeClaimTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMountsList",
    },
    web: {
      value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebToHclTerraform(struct!.web),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWeb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateSecretRef = this._clientCertificateSecretRef?.internalValue;
    }
    if (this._connectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectors = this._connectors?.internalValue;
    }
    if (this._expiry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry?.internalValue;
    }
    if (this._frontend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontend = this._frontend?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._logger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logger = this._logger?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._volumeClaimTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplates = this._volumeClaimTemplates?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._web?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertificateSecretRef.internalValue = undefined;
      this._connectors.internalValue = undefined;
      this._expiry.internalValue = undefined;
      this._frontend.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._image = undefined;
      this._ingress.internalValue = undefined;
      this._issuer = undefined;
      this._logger.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._oauth2.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._storage.internalValue = undefined;
      this._volumeClaimTemplates.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
      this._web.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCertificateSecretRef.internalValue = value.clientCertificateSecretRef;
      this._connectors.internalValue = value.connectors;
      this._expiry.internalValue = value.expiry;
      this._frontend.internalValue = value.frontend;
      this._grpc.internalValue = value.grpc;
      this._image = value.image;
      this._ingress.internalValue = value.ingress;
      this._issuer = value.issuer;
      this._logger.internalValue = value.logger;
      this._metrics.internalValue = value.metrics;
      this._oauth2.internalValue = value.oauth2;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._storage.internalValue = value.storage;
      this._volumeClaimTemplates.internalValue = value.volumeClaimTemplates;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._web.internalValue = value.web;
    }
  }

  // client_certificate_secret_ref - computed: false, optional: true, required: false
  private _clientCertificateSecretRef = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRefOutputReference(this, "client_certificate_secret_ref");
  public get clientCertificateSecretRef() {
    return this._clientCertificateSecretRef;
  }
  public putClientCertificateSecretRef(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecClientCertificateSecretRef) {
    this._clientCertificateSecretRef.internalValue = value;
  }
  public resetClientCertificateSecretRef() {
    this._clientCertificateSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateSecretRefInput() {
    return this._clientCertificateSecretRef.internalValue;
  }

  // connectors - computed: false, optional: true, required: false
  private _connectors = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectorsList(this, "connectors", false);
  public get connectors() {
    return this._connectors;
  }
  public putConnectors(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecConnectors[] | cdktf.IResolvable) {
    this._connectors.internalValue = value;
  }
  public resetConnectors() {
    this._connectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorsInput() {
    return this._connectors.internalValue;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiryOutputReference(this, "expiry");
  public get expiry() {
    return this._expiry;
  }
  public putExpiry(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecExpiry) {
    this._expiry.internalValue = value;
  }
  public resetExpiry() {
    this._expiry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry.internalValue;
  }

  // frontend - computed: false, optional: true, required: false
  private _frontend = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontendOutputReference(this, "frontend");
  public get frontend() {
    return this._frontend;
  }
  public putFrontend(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecFrontend) {
    this._frontend.internalValue = value;
  }
  public resetFrontend() {
    this._frontend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendInput() {
    return this._frontend.internalValue;
  }

  // grpc - computed: false, optional: false, required: true
  private _grpc = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecGrpc) {
    this._grpc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
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

  // logger - computed: false, optional: true, required: false
  private _logger = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLoggerOutputReference(this, "logger");
  public get logger() {
    return this._logger;
  }
  public putLogger(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecLogger) {
    this._logger.internalValue = value;
  }
  public resetLogger() {
    this._logger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggerInput() {
    return this._logger.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // volume_claim_templates - computed: false, optional: true, required: false
  private _volumeClaimTemplates = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplatesList(this, "volume_claim_templates", false);
  public get volumeClaimTemplates() {
    return this._volumeClaimTemplates;
  }
  public putVolumeClaimTemplates(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeClaimTemplates[] | cdktf.IResolvable) {
    this._volumeClaimTemplates.internalValue = value;
  }
  public resetVolumeClaimTemplates() {
    this._volumeClaimTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplatesInput() {
    return this._volumeClaimTemplates.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // web - computed: false, optional: false, required: true
  private _web = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
  public putWeb(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecWeb) {
    this._web.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest k8s_dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest}
*/
export class DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest k8s_dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_dex_gpu_ninja_com_dex_identity_provider_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDexGpuNinjaComDexIdentityProviderV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
