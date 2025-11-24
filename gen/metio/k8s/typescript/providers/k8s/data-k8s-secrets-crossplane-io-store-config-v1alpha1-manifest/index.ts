// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#metadata DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadata;
  /**
  * A StoreConfigSpec defines the desired state of a StoreConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#spec DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpec;
}
export interface DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#annotations DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#labels DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#name DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnv {
  /**
  * Name is the name of an environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#name DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnvToTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnvToHclTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnv | cdktf.IResolvable): any {
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

export class DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnv | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFs {
  /**
  * Path is a filesystem path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#path DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFsToTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFsToHclTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFs | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
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
}
export interface DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#key DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#name DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#namespace DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRefToTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRefToHclTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRef | cdktf.IResolvable): any {
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

export class DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRef | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuth {
  /**
  * Env is a reference to an environment variable that contains credentials that must be used to connect to the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#env DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnv;
  /**
  * Fs is a reference to a filesystem location that contains credentials that must be used to connect to the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#fs DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#fs}
  */
  readonly fs?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFs;
  /**
  * A SecretRef is a reference to a secret key that contains the credentials that must be used to connect to the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#secret_ref DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRef;
  /**
  * Source of the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#source DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#source}
  */
  readonly source: string;
}

export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthToTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnvToTerraform(struct!.env),
    fs: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFsToTerraform(struct!.fs),
    secret_ref: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRefToTerraform(struct!.secretRef),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthToHclTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnvToHclTerraform(struct!.env),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnv",
    },
    fs: {
      value: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFsToHclTerraform(struct!.fs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFs",
    },
    secret_ref: {
      value: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRef",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._fs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fs = this._fs?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._fs.internalValue = undefined;
      this._secretRef.internalValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._fs.internalValue = value.fs;
      this._secretRef.internalValue = value.secretRef;
      this._source = value.source;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnvOutputReference(this, "env");
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthEnv) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // fs - computed: false, optional: true, required: false
  private _fs = new DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFsOutputReference(this, "fs");
  public get fs() {
    return this._fs;
  }
  public putFs(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthFs) {
    this._fs.internalValue = value;
  }
  public resetFs() {
    this._fs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsInput() {
    return this._fs.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetes {
  /**
  * Credentials used to connect to the Kubernetes API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#auth DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#auth}
  */
  readonly auth: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuth;
}

export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesToTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthToTerraform(struct!.auth),
  }
}


export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesToHclTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}
export interface DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRef {
  /**
  * APIVersion of the referenced config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#api_version DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referenced config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#kind DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referenced config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#name DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRefToTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRef | cdktf.IResolvable): any {
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


export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRefToHclTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRef | cdktf.IResolvable): any {
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

export class DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRef | cdktf.IResolvable | undefined) {
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

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
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
export interface DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPlugin {
  /**
  * ConfigRef contains store config reference info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#config_ref DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#config_ref}
  */
  readonly configRef?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRef;
  /**
  * Endpoint is the endpoint of the gRPC server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#endpoint DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#endpoint}
  */
  readonly endpoint?: string;
}

export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginToTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_ref: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRefToTerraform(struct!.configRef),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginToHclTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_ref: {
      value: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRefToHclTerraform(struct!.configRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRef",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRef = this._configRef?.internalValue;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configRef.internalValue = undefined;
      this._endpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configRef.internalValue = value.configRef;
      this._endpoint = value.endpoint;
    }
  }

  // config_ref - computed: false, optional: true, required: false
  private _configRef = new DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRefOutputReference(this, "config_ref");
  public get configRef() {
    return this._configRef;
  }
  public putConfigRef(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginConfigRef) {
    this._configRef.internalValue = value;
  }
  public resetConfigRef() {
    this._configRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRefInput() {
    return this._configRef.internalValue;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpec {
  /**
  * DefaultScope used for scoping secrets for 'cluster-scoped' resources. If store type is 'Kubernetes', this would mean the default namespace to store connection secrets for cluster scoped resources. In case of 'Vault', this would be used as the default parent path. Typically, should be set as Crossplane installation namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#default_scope DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#default_scope}
  */
  readonly defaultScope: string;
  /**
  * Kubernetes configures a Kubernetes secret store. If the 'type' is 'Kubernetes' but no config provided, in cluster config will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#kubernetes DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetes;
  /**
  * Plugin configures External secret store as a plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#plugin DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#plugin}
  */
  readonly plugin?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPlugin;
  /**
  * Type configures which secret store to be used. Only the configuration block for this store will be used and others will be ignored if provided. Default is Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#type DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_scope: cdktf.stringToTerraform(struct!.defaultScope),
    kubernetes: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesToTerraform(struct!.kubernetes),
    plugin: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginToTerraform(struct!.plugin),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_scope: {
      value: cdktf.stringToHclTerraform(struct!.defaultScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes: {
      value: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetes",
    },
    plugin: {
      value: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPlugin",
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

export class DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultScope = this._defaultScope;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultScope = undefined;
      this._kubernetes.internalValue = undefined;
      this._plugin.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultScope = value.defaultScope;
      this._kubernetes.internalValue = value.kubernetes;
      this._plugin.internalValue = value.plugin;
      this._type = value.type;
    }
  }

  // default_scope - computed: false, optional: false, required: true
  private _defaultScope?: string; 
  public get defaultScope() {
    return this.getStringAttribute('default_scope');
  }
  public set defaultScope(value: string) {
    this._defaultScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultScopeInput() {
    return this._defaultScope;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecPlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest k8s_secrets_crossplane_io_store_config_v1alpha1_manifest}
*/
export class DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secrets_crossplane_io_store_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secrets_crossplane_io_store_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_crossplane_io_store_config_v1alpha1_manifest k8s_secrets_crossplane_io_store_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secrets_crossplane_io_store_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsCrossplaneIoStoreConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
