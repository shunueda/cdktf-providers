// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#metadata DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadata;
  /**
  * A [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) is a cluster-global Kubernetes resource that defines a category of secrets that the Secret Operator knows how to provision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#spec DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpec;
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#annotations DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#labels DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsa {
  /**
  * The amount of bits used for generating the RSA keypair. Currently, '2048', '3072' and '4096' are supported. Defaults to '2048' bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#length DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#length}
  */
  readonly length: number;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsaToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsaToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGeneration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#rsa DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#rsa}
  */
  readonly rsa?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsa;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGeneration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rsa: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsaToTerraform(struct!.rsa),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGeneration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rsa: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsaToHclTerraform(struct!.rsa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsa",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGeneration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rsa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsa = this._rsa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGeneration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rsa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rsa.internalValue = value.rsa;
    }
  }

  // rsa - computed: false, optional: true, required: false
  private _rsa = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsaOutputReference(this, "rsa");
  public get rsa() {
    return this._rsa;
  }
  public putRsa(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationRsa) {
    this._rsa.internalValue = value;
  }
  public resetRsa() {
    this._rsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaInput() {
    return this._rsa.internalValue;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecret {
  /**
  * Name of the Secret being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the Secret being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#namespace DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecretToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecretToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecret | cdktf.IResolvable): any {
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

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCa {
  /**
  * Whether the certificate authority should be managed by Secret Operator, including being generated if it does not already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#auto_generate DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#auto_generate}
  */
  readonly autoGenerate?: boolean | cdktf.IResolvable;
  /**
  * The lifetime of each generated certificate authority. Should always be more than double 'maxCertificateLifetime'. If 'autoGenerate: true' then the Secret Operator will prepare a new CA certificate the old CA approaches expiration. If 'autoGenerate: false' then the Secret Operator will log a warning instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#ca_certificate_lifetime DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#ca_certificate_lifetime}
  */
  readonly caCertificateLifetime?: string;
  /**
  * The algorithm used to generate a key pair and required configuration settings. Currently only RSA and a key length of 2048, 3072 or 4096 bits can be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#key_generation DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#key_generation}
  */
  readonly keyGeneration?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGeneration;
  /**
  * Reference (name and namespace) to a Kubernetes Secret object where the CA certificate and key is stored in the keys 'ca.crt' and 'ca.key' respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#secret DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#secret}
  */
  readonly secret: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecret;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_generate: cdktf.booleanToTerraform(struct!.autoGenerate),
    ca_certificate_lifetime: cdktf.stringToTerraform(struct!.caCertificateLifetime),
    key_generation: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationToTerraform(struct!.keyGeneration),
    secret: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_generate: {
      value: cdktf.booleanToHclTerraform(struct!.autoGenerate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca_certificate_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.caCertificateLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_generation: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationToHclTerraform(struct!.keyGeneration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGeneration",
    },
    secret: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoGenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoGenerate = this._autoGenerate;
    }
    if (this._caCertificateLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateLifetime = this._caCertificateLifetime;
    }
    if (this._keyGeneration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyGeneration = this._keyGeneration?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoGenerate = undefined;
      this._caCertificateLifetime = undefined;
      this._keyGeneration.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoGenerate = value.autoGenerate;
      this._caCertificateLifetime = value.caCertificateLifetime;
      this._keyGeneration.internalValue = value.keyGeneration;
      this._secret.internalValue = value.secret;
    }
  }

  // auto_generate - computed: false, optional: true, required: false
  private _autoGenerate?: boolean | cdktf.IResolvable; 
  public get autoGenerate() {
    return this.getBooleanAttribute('auto_generate');
  }
  public set autoGenerate(value: boolean | cdktf.IResolvable) {
    this._autoGenerate = value;
  }
  public resetAutoGenerate() {
    this._autoGenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGenerateInput() {
    return this._autoGenerate;
  }

  // ca_certificate_lifetime - computed: false, optional: true, required: false
  private _caCertificateLifetime?: string; 
  public get caCertificateLifetime() {
    return this.getStringAttribute('ca_certificate_lifetime');
  }
  public set caCertificateLifetime(value: string) {
    this._caCertificateLifetime = value;
  }
  public resetCaCertificateLifetime() {
    this._caCertificateLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateLifetimeInput() {
    return this._caCertificateLifetime;
  }

  // key_generation - computed: false, optional: true, required: false
  private _keyGeneration = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGenerationOutputReference(this, "key_generation");
  public get keyGeneration() {
    return this._keyGeneration;
  }
  public putKeyGeneration(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaKeyGeneration) {
    this._keyGeneration.internalValue = value;
  }
  public resetKeyGeneration() {
    this._keyGeneration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyGenerationInput() {
    return this._keyGeneration.internalValue;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTls {
  /**
  * Configures the certificate authority used to issue Pod certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#ca DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#ca}
  */
  readonly ca: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCa;
  /**
  * Maximum lifetime the created certificates are allowed to have. In case consumers request a longer lifetime than allowed by this setting, the lifetime will be the minimum of both, so this setting takes precedence. The default value is 15 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#max_certificate_lifetime DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#max_certificate_lifetime}
  */
  readonly maxCertificateLifetime?: string;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaToTerraform(struct!.ca),
    max_certificate_lifetime: cdktf.stringToTerraform(struct!.maxCertificateLifetime),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCa",
    },
    max_certificate_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.maxCertificateLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._maxCertificateLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCertificateLifetime = this._maxCertificateLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._maxCertificateLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._maxCertificateLifetime = value.maxCertificateLifetime;
    }
  }

  // ca - computed: false, optional: false, required: true
  private _ca = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsCa) {
    this._ca.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // max_certificate_lifetime - computed: false, optional: true, required: false
  private _maxCertificateLifetime?: string; 
  public get maxCertificateLifetime() {
    return this.getStringAttribute('max_certificate_lifetime');
  }
  public set maxCertificateLifetime(value: string) {
    this._maxCertificateLifetime = value;
  }
  public resetMaxCertificateLifetime() {
    this._maxCertificateLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCertificateLifetimeInput() {
    return this._maxCertificateLifetime;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuer {
  /**
  * The kind of the issuer, Issuer or ClusterIssuer. If Issuer then it must be in the same namespace as the Pods using it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#kind DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * The name of the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuerToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuerToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuer | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
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
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManager {
  /**
  * The default lifetime of certificates. Defaults to 1 day. This may need to be increased for external issuers that impose rate limits (such as Let's Encrypt).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#default_certificate_lifetime DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#default_certificate_lifetime}
  */
  readonly defaultCertificateLifetime?: string;
  /**
  * A reference to the cert-manager issuer that the certificates should be requested from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#issuer DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#issuer}
  */
  readonly issuer: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuer;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_certificate_lifetime: cdktf.stringToTerraform(struct!.defaultCertificateLifetime),
    issuer: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuerToTerraform(struct!.issuer),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_certificate_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.defaultCertificateLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuerToHclTerraform(struct!.issuer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCertificateLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCertificateLifetime = this._defaultCertificateLifetime;
    }
    if (this._issuer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultCertificateLifetime = undefined;
      this._issuer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultCertificateLifetime = value.defaultCertificateLifetime;
      this._issuer.internalValue = value.issuer;
    }
  }

  // default_certificate_lifetime - computed: false, optional: true, required: false
  private _defaultCertificateLifetime?: string; 
  public get defaultCertificateLifetime() {
    return this.getStringAttribute('default_certificate_lifetime');
  }
  public set defaultCertificateLifetime(value: string) {
    this._defaultCertificateLifetime = value;
  }
  public resetDefaultCertificateLifetime() {
    this._defaultCertificateLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCertificateLifetimeInput() {
    return this._defaultCertificateLifetime;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuerOutputReference(this, "issuer");
  public get issuer() {
    return this._issuer;
  }
  public putIssuer(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerIssuer) {
    this._issuer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer.internalValue;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespace {
  /**
  * The Secret objects are located in a single global namespace. Should be used for secrets that are provisioned by the cluster administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The Secret objects are located in the same namespace as the Pod object. Should be used for Secrets that are provisioned by the application administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#pod DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#pod}
  */
  readonly pod?: { [key: string]: string };
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespaceToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pod: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.pod),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespaceToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespace | cdktf.IResolvable): any {
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
    pod: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.pod),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._pod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._pod = value.pod;
    }
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

  // pod - computed: false, optional: true, required: false
  private _pod?: { [key: string]: string }; 
  public get pod() {
    return this.getStringMapAttribute('pod');
  }
  public set pod(value: { [key: string]: string }) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearch {
  /**
  * Configures the namespace searched for Secret objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#search_namespace DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#search_namespace}
  */
  readonly searchNamespace: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespace;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_namespace: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespaceToTerraform(struct!.searchNamespace),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_namespace: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespaceToHclTerraform(struct!.searchNamespace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchNamespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchNamespace = this._searchNamespace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._searchNamespace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._searchNamespace.internalValue = value.searchNamespace;
    }
  }

  // search_namespace - computed: false, optional: false, required: true
  private _searchNamespace = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespaceOutputReference(this, "search_namespace");
  public get searchNamespace() {
    return this._searchNamespace;
  }
  public putSearchNamespace(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchSearchNamespace) {
    this._searchNamespace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchNamespaceInput() {
    return this._searchNamespace.internalValue;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountName {
  /**
  * A prefix to be prepended to generated samAccountNames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#prefix DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * The total length of generated samAccountNames, _including_ 'prefix'. Must be larger than the length of 'prefix', but at most '20'. Note that this should be as large as possible, to minimize the risk of collisions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#total_length DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#total_length}
  */
  readonly totalLength?: number;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountNameToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    total_length: cdktf.numberToTerraform(struct!.totalLength),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountNameToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_length: {
      value: cdktf.numberToHclTerraform(struct!.totalLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._totalLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLength = this._totalLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._totalLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._totalLength = value.totalLength;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // total_length - computed: false, optional: true, required: false
  private _totalLength?: number; 
  public get totalLength() {
    return this.getNumberAttribute('total_length');
  }
  public set totalLength(value: number) {
    this._totalLength = value;
  }
  public resetTotalLength() {
    this._totalLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLengthInput() {
    return this._totalLength;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecret {
  /**
  * Name of the Secret being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the Secret being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#namespace DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecretToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecretToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecret | cdktf.IResolvable): any {
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

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecret {
  /**
  * Name of the Secret being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the Secret being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#namespace DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecretToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecretToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecret | cdktf.IResolvable): any {
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

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectory {
  /**
  * Allows samAccountName generation for new accounts to be customized. Note that setting this field (even if empty) makes the Secret Operator take over the generation duty from the domain controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#experimental_generate_sam_account_name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#experimental_generate_sam_account_name}
  */
  readonly experimentalGenerateSamAccountName?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountName;
  /**
  * An AD LDAP server, such as the AD Domain Controller. This must match the server’s FQDN, or GSSAPI authentication will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#ldap_server DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#ldap_server}
  */
  readonly ldapServer: string;
  /**
  * Reference (name and namespace) to a Kubernetes Secret object containing the TLS CA (in 'ca.crt') that the LDAP server’s certificate should be authenticated against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#ldap_tls_ca_secret DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#ldap_tls_ca_secret}
  */
  readonly ldapTlsCaSecret: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecret;
  /**
  * Reference (name and namespace) to a Kubernetes Secret object where workload passwords will be stored. This must not be accessible to end users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#password_cache_secret DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#password_cache_secret}
  */
  readonly passwordCacheSecret: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecret;
  /**
  * The root Distinguished Name (DN) for AD-managed schemas, typically 'CN=Schema,CN=Configuration,{domain_dn}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#schema_distinguished_name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#schema_distinguished_name}
  */
  readonly schemaDistinguishedName: string;
  /**
  * The root Distinguished Name (DN) where service accounts should be provisioned, typically 'CN=Users,{domain_dn}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#user_distinguished_name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#user_distinguished_name}
  */
  readonly userDistinguishedName: string;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    experimental_generate_sam_account_name: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountNameToTerraform(struct!.experimentalGenerateSamAccountName),
    ldap_server: cdktf.stringToTerraform(struct!.ldapServer),
    ldap_tls_ca_secret: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecretToTerraform(struct!.ldapTlsCaSecret),
    password_cache_secret: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecretToTerraform(struct!.passwordCacheSecret),
    schema_distinguished_name: cdktf.stringToTerraform(struct!.schemaDistinguishedName),
    user_distinguished_name: cdktf.stringToTerraform(struct!.userDistinguishedName),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    experimental_generate_sam_account_name: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountNameToHclTerraform(struct!.experimentalGenerateSamAccountName),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountName",
    },
    ldap_server: {
      value: cdktf.stringToHclTerraform(struct!.ldapServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_tls_ca_secret: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecretToHclTerraform(struct!.ldapTlsCaSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecret",
    },
    password_cache_secret: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecretToHclTerraform(struct!.passwordCacheSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecret",
    },
    schema_distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaDistinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.userDistinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._experimentalGenerateSamAccountName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentalGenerateSamAccountName = this._experimentalGenerateSamAccountName?.internalValue;
    }
    if (this._ldapServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapServer = this._ldapServer;
    }
    if (this._ldapTlsCaSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapTlsCaSecret = this._ldapTlsCaSecret?.internalValue;
    }
    if (this._passwordCacheSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCacheSecret = this._passwordCacheSecret?.internalValue;
    }
    if (this._schemaDistinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDistinguishedName = this._schemaDistinguishedName;
    }
    if (this._userDistinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDistinguishedName = this._userDistinguishedName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._experimentalGenerateSamAccountName.internalValue = undefined;
      this._ldapServer = undefined;
      this._ldapTlsCaSecret.internalValue = undefined;
      this._passwordCacheSecret.internalValue = undefined;
      this._schemaDistinguishedName = undefined;
      this._userDistinguishedName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._experimentalGenerateSamAccountName.internalValue = value.experimentalGenerateSamAccountName;
      this._ldapServer = value.ldapServer;
      this._ldapTlsCaSecret.internalValue = value.ldapTlsCaSecret;
      this._passwordCacheSecret.internalValue = value.passwordCacheSecret;
      this._schemaDistinguishedName = value.schemaDistinguishedName;
      this._userDistinguishedName = value.userDistinguishedName;
    }
  }

  // experimental_generate_sam_account_name - computed: false, optional: true, required: false
  private _experimentalGenerateSamAccountName = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountNameOutputReference(this, "experimental_generate_sam_account_name");
  public get experimentalGenerateSamAccountName() {
    return this._experimentalGenerateSamAccountName;
  }
  public putExperimentalGenerateSamAccountName(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryExperimentalGenerateSamAccountName) {
    this._experimentalGenerateSamAccountName.internalValue = value;
  }
  public resetExperimentalGenerateSamAccountName() {
    this._experimentalGenerateSamAccountName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalGenerateSamAccountNameInput() {
    return this._experimentalGenerateSamAccountName.internalValue;
  }

  // ldap_server - computed: false, optional: false, required: true
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
  }

  // ldap_tls_ca_secret - computed: false, optional: false, required: true
  private _ldapTlsCaSecret = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecretOutputReference(this, "ldap_tls_ca_secret");
  public get ldapTlsCaSecret() {
    return this._ldapTlsCaSecret;
  }
  public putLdapTlsCaSecret(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryLdapTlsCaSecret) {
    this._ldapTlsCaSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapTlsCaSecretInput() {
    return this._ldapTlsCaSecret.internalValue;
  }

  // password_cache_secret - computed: false, optional: false, required: true
  private _passwordCacheSecret = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecretOutputReference(this, "password_cache_secret");
  public get passwordCacheSecret() {
    return this._passwordCacheSecret;
  }
  public putPasswordCacheSecret(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryPasswordCacheSecret) {
    this._passwordCacheSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCacheSecretInput() {
    return this._passwordCacheSecret.internalValue;
  }

  // schema_distinguished_name - computed: false, optional: false, required: true
  private _schemaDistinguishedName?: string; 
  public get schemaDistinguishedName() {
    return this.getStringAttribute('schema_distinguished_name');
  }
  public set schemaDistinguishedName(value: string) {
    this._schemaDistinguishedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDistinguishedNameInput() {
    return this._schemaDistinguishedName;
  }

  // user_distinguished_name - computed: false, optional: false, required: true
  private _userDistinguishedName?: string; 
  public get userDistinguishedName() {
    return this.getStringAttribute('user_distinguished_name');
  }
  public set userDistinguishedName(value: string) {
    this._userDistinguishedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userDistinguishedNameInput() {
    return this._userDistinguishedName;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMit {
  /**
  * The hostname of the Kerberos Admin Server. This should be provided by the Kerberos administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#kadmin_server DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#kadmin_server}
  */
  readonly kadminServer: string;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMitToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kadmin_server: cdktf.stringToTerraform(struct!.kadminServer),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMitToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kadmin_server: {
      value: cdktf.stringToHclTerraform(struct!.kadminServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kadminServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminServer = this._kadminServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kadminServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kadminServer = value.kadminServer;
    }
  }

  // kadmin_server - computed: false, optional: false, required: true
  private _kadminServer?: string; 
  public get kadminServer() {
    return this.getStringAttribute('kadmin_server');
  }
  public set kadminServer(value: string) {
    this._kadminServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminServerInput() {
    return this._kadminServer;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdmin {
  /**
  * Credentials should be provisioned in a Microsoft Active Directory domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#active_directory DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#active_directory}
  */
  readonly activeDirectory?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectory;
  /**
  * Credentials should be provisioned in a MIT Kerberos Admin Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#mit DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#mit}
  */
  readonly mit?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMit;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryToTerraform(struct!.activeDirectory),
    mit: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMitToTerraform(struct!.mit),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_directory: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryToHclTerraform(struct!.activeDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectory",
    },
    mit: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMitToHclTerraform(struct!.mit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdmin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectory = this._activeDirectory?.internalValue;
    }
    if (this._mit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mit = this._mit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdmin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDirectory.internalValue = undefined;
      this._mit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDirectory.internalValue = value.activeDirectory;
      this._mit.internalValue = value.mit;
    }
  }

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminActiveDirectory) {
    this._activeDirectory.internalValue = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory.internalValue;
  }

  // mit - computed: false, optional: true, required: false
  private _mit = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMitOutputReference(this, "mit");
  public get mit() {
    return this._mit;
  }
  public putMit(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminMit) {
    this._mit.internalValue = value;
  }
  public resetMit() {
    this._mit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitInput() {
    return this._mit.internalValue;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecret {
  /**
  * Name of the Secret being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the Secret being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#namespace DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecretToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecretToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecret | cdktf.IResolvable): any {
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

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytab {
  /**
  * Kerberos admin configuration settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#admin DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#admin}
  */
  readonly admin: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdmin;
  /**
  * Reference ('name' and 'namespace') to a K8s Secret object where a keytab with administrative privileges is stored in the key 'keytab'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#admin_keytab_secret DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#admin_keytab_secret}
  */
  readonly adminKeytabSecret: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecret;
  /**
  * The admin principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#admin_principal DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#admin_principal}
  */
  readonly adminPrincipal: string;
  /**
  * The hostname of the Kerberos Key Distribution Center (KDC). This should be provided by the Kerberos administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#kdc DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#kdc}
  */
  readonly kdc: string;
  /**
  * The name of the Kerberos realm. This should be provided by the Kerberos administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#realm_name DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#realm_name}
  */
  readonly realmName: string;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminToTerraform(struct!.admin),
    admin_keytab_secret: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecretToTerraform(struct!.adminKeytabSecret),
    admin_principal: cdktf.stringToTerraform(struct!.adminPrincipal),
    kdc: cdktf.stringToTerraform(struct!.kdc),
    realm_name: cdktf.stringToTerraform(struct!.realmName),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminToHclTerraform(struct!.admin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdmin",
    },
    admin_keytab_secret: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecretToHclTerraform(struct!.adminKeytabSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecret",
    },
    admin_principal: {
      value: cdktf.stringToHclTerraform(struct!.adminPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kdc: {
      value: cdktf.stringToHclTerraform(struct!.kdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm_name: {
      value: cdktf.stringToHclTerraform(struct!.realmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytab | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin?.internalValue;
    }
    if (this._adminKeytabSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminKeytabSecret = this._adminKeytabSecret?.internalValue;
    }
    if (this._adminPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPrincipal = this._adminPrincipal;
    }
    if (this._kdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdc = this._kdc;
    }
    if (this._realmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmName = this._realmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytab | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admin.internalValue = undefined;
      this._adminKeytabSecret.internalValue = undefined;
      this._adminPrincipal = undefined;
      this._kdc = undefined;
      this._realmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admin.internalValue = value.admin;
      this._adminKeytabSecret.internalValue = value.adminKeytabSecret;
      this._adminPrincipal = value.adminPrincipal;
      this._kdc = value.kdc;
      this._realmName = value.realmName;
    }
  }

  // admin - computed: false, optional: false, required: true
  private _admin = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminOutputReference(this, "admin");
  public get admin() {
    return this._admin;
  }
  public putAdmin(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdmin) {
    this._admin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin.internalValue;
  }

  // admin_keytab_secret - computed: false, optional: false, required: true
  private _adminKeytabSecret = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecretOutputReference(this, "admin_keytab_secret");
  public get adminKeytabSecret() {
    return this._adminKeytabSecret;
  }
  public putAdminKeytabSecret(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabAdminKeytabSecret) {
    this._adminKeytabSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminKeytabSecretInput() {
    return this._adminKeytabSecret.internalValue;
  }

  // admin_principal - computed: false, optional: false, required: true
  private _adminPrincipal?: string; 
  public get adminPrincipal() {
    return this.getStringAttribute('admin_principal');
  }
  public set adminPrincipal(value: string) {
    this._adminPrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPrincipalInput() {
    return this._adminPrincipal;
  }

  // kdc - computed: false, optional: false, required: true
  private _kdc?: string; 
  public get kdc() {
    return this.getStringAttribute('kdc');
  }
  public set kdc(value: string) {
    this._kdc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcInput() {
    return this._kdc;
  }

  // realm_name - computed: false, optional: false, required: true
  private _realmName?: string; 
  public get realmName() {
    return this.getStringAttribute('realm_name');
  }
  public set realmName(value: string) {
    this._realmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmNameInput() {
    return this._realmName;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackend {
  /**
  * The ['autoTls' backend](https://docs.stackable.tech/home/nightly/secret-operator/secretclass#backend-autotls) issues a TLS certificate signed by the Secret Operator. The certificate authority can be provided by the administrator, or managed automatically by the Secret Operator. A new certificate and key pair will be generated and signed for each Pod, keys or certificates are never reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#auto_tls DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#auto_tls}
  */
  readonly autoTls?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTls;
  /**
  * The ['experimentalCertManager' backend][1] injects a TLS certificate issued by [cert-manager](https://cert-manager.io/). A new certificate will be requested the first time it is used by a Pod, it will be reused after that (subject to cert-manager renewal rules). [1]: https://docs.stackable.tech/home/nightly/secret-operator/secretclass#backend-certmanager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#experimental_cert_manager DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#experimental_cert_manager}
  */
  readonly experimentalCertManager?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManager;
  /**
  * The ['k8sSearch' backend](https://docs.stackable.tech/home/nightly/secret-operator/secretclass#backend-k8ssearch) can be used to mount Secrets across namespaces into Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#k8s_search DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#k8s_search}
  */
  readonly k8SSearch?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearch;
  /**
  * The ['kerberosKeytab' backend](https://docs.stackable.tech/home/nightly/secret-operator/secretclass#backend-kerberoskeytab) creates a Kerberos keytab file for a selected realm. The Kerberos KDC and administrator credentials must be provided by the administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#kerberos_keytab DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#kerberos_keytab}
  */
  readonly kerberosKeytab?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytab;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_tls: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsToTerraform(struct!.autoTls),
    experimental_cert_manager: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerToTerraform(struct!.experimentalCertManager),
    k8s_search: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchToTerraform(struct!.k8SSearch),
    kerberos_keytab: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabToTerraform(struct!.kerberosKeytab),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_tls: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsToHclTerraform(struct!.autoTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTls",
    },
    experimental_cert_manager: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerToHclTerraform(struct!.experimentalCertManager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManager",
    },
    k8s_search: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchToHclTerraform(struct!.k8SSearch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearch",
    },
    kerberos_keytab: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabToHclTerraform(struct!.kerberosKeytab),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytab",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTls = this._autoTls?.internalValue;
    }
    if (this._experimentalCertManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentalCertManager = this._experimentalCertManager?.internalValue;
    }
    if (this._k8SSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SSearch = this._k8SSearch?.internalValue;
    }
    if (this._kerberosKeytab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKeytab = this._kerberosKeytab?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoTls.internalValue = undefined;
      this._experimentalCertManager.internalValue = undefined;
      this._k8SSearch.internalValue = undefined;
      this._kerberosKeytab.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoTls.internalValue = value.autoTls;
      this._experimentalCertManager.internalValue = value.experimentalCertManager;
      this._k8SSearch.internalValue = value.k8SSearch;
      this._kerberosKeytab.internalValue = value.kerberosKeytab;
    }
  }

  // auto_tls - computed: false, optional: true, required: false
  private _autoTls = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTlsOutputReference(this, "auto_tls");
  public get autoTls() {
    return this._autoTls;
  }
  public putAutoTls(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendAutoTls) {
    this._autoTls.internalValue = value;
  }
  public resetAutoTls() {
    this._autoTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTlsInput() {
    return this._autoTls.internalValue;
  }

  // experimental_cert_manager - computed: false, optional: true, required: false
  private _experimentalCertManager = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManagerOutputReference(this, "experimental_cert_manager");
  public get experimentalCertManager() {
    return this._experimentalCertManager;
  }
  public putExperimentalCertManager(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendExperimentalCertManager) {
    this._experimentalCertManager.internalValue = value;
  }
  public resetExperimentalCertManager() {
    this._experimentalCertManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalCertManagerInput() {
    return this._experimentalCertManager.internalValue;
  }

  // k8s_search - computed: false, optional: true, required: false
  private _k8SSearch = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearchOutputReference(this, "k8s_search");
  public get k8SSearch() {
    return this._k8SSearch;
  }
  public putK8SSearch(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendK8SSearch) {
    this._k8SSearch.internalValue = value;
  }
  public resetK8SSearch() {
    this._k8SSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SSearchInput() {
    return this._k8SSearch.internalValue;
  }

  // kerberos_keytab - computed: false, optional: true, required: false
  private _kerberosKeytab = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytabOutputReference(this, "kerberos_keytab");
  public get kerberosKeytab() {
    return this._kerberosKeytab;
  }
  public putKerberosKeytab(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendKerberosKeytab) {
    this._kerberosKeytab.internalValue = value;
  }
  public resetKerberosKeytab() {
    this._kerberosKeytab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeytabInput() {
    return this._kerberosKeytab.internalValue;
  }
}
export interface DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpec {
  /**
  * Each SecretClass is associated with a single [backend](https://docs.stackable.tech/home/nightly/secret-operator/secretclass#backend), which dictates the mechanism for issuing that kind of Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#backend DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest#backend}
  */
  readonly backend: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackend;
}

export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendToTerraform(struct!.backend),
  }
}


export function dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackend",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend.internalValue = value.backend;
    }
  }

  // backend - computed: false, optional: false, required: true
  private _backend = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecBackend) {
    this._backend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest k8s_secrets_stackable_tech_secret_class_v1alpha1_manifest}
*/
export class DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secrets_stackable_tech_secret_class_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretsStackableTechSecretClassV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secrets_stackable_tech_secret_class_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/secrets_stackable_tech_secret_class_v1alpha1_manifest k8s_secrets_stackable_tech_secret_class_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secrets_stackable_tech_secret_class_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsStackableTechSecretClassV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
