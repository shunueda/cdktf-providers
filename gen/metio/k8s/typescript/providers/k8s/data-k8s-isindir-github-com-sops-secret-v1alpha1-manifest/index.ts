// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#metadata DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadata;
  /**
  * SopsSecret metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#sops DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#sops}
  */
  readonly sops?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSops;
  /**
  * SopsSecret Spec definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#spec DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpec;
}
export interface DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#annotations DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#labels DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#name DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#namespace DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKv {
  /**
  * Object creation date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#created_at DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#enc DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#enc}
  */
  readonly enc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#name DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Azure KMS vault URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#vault_url DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#vault_url}
  */
  readonly vaultUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#version DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKvToTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    enc: cdktf.stringToTerraform(struct!.enc),
    name: cdktf.stringToTerraform(struct!.name),
    vault_url: cdktf.stringToTerraform(struct!.vaultUrl),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKvToHclTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enc: {
      value: cdktf.stringToHclTerraform(struct!.enc),
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
    vault_url: {
      value: cdktf.stringToHclTerraform(struct!.vaultUrl),
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

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._enc !== undefined) {
      hasAnyValues = true;
      internalValueResult.enc = this._enc;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vaultUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultUrl = this._vaultUrl;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._enc = undefined;
      this._name = undefined;
      this._vaultUrl = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._enc = value.enc;
      this._name = value.name;
      this._vaultUrl = value.vaultUrl;
      this._version = value.version;
    }
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enc - computed: false, optional: true, required: false
  private _enc?: string; 
  public get enc() {
    return this.getStringAttribute('enc');
  }
  public set enc(value: string) {
    this._enc = value;
  }
  public resetEnc() {
    this._enc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encInput() {
    return this._enc;
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

  // vault_url - computed: false, optional: true, required: false
  private _vaultUrl?: string; 
  public get vaultUrl() {
    return this.getStringAttribute('vault_url');
  }
  public set vaultUrl(value: string) {
    this._vaultUrl = value;
  }
  public resetVaultUrl() {
    this._vaultUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultUrlInput() {
    return this._vaultUrl;
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

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKvList extends cdktf.ComplexList {
  public internalValue? : DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKvOutputReference {
    return new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKms {
  /**
  * Object creation date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#created_at DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#enc DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#enc}
  */
  readonly enc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#resource_id DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#resource_id}
  */
  readonly resourceId?: string;
}

export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKmsToTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    enc: cdktf.stringToTerraform(struct!.enc),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKmsToHclTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enc: {
      value: cdktf.stringToHclTerraform(struct!.enc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._enc !== undefined) {
      hasAnyValues = true;
      internalValueResult.enc = this._enc;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._enc = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._enc = value.enc;
      this._resourceId = value.resourceId;
    }
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enc - computed: false, optional: true, required: false
  private _enc?: string; 
  public get enc() {
    return this.getStringAttribute('enc');
  }
  public set enc(value: string) {
    this._enc = value;
  }
  public resetEnc() {
    this._enc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encInput() {
    return this._enc;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKmsList extends cdktf.ComplexList {
  public internalValue? : DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKmsOutputReference {
    return new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKms {
  /**
  * Arn - KMS key ARN to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#arn DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#aws_profile DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * Object creation date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#created_at DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#enc DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#enc}
  */
  readonly enc?: string;
}

export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKmsToTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    aws_profile: cdktf.stringToTerraform(struct!.awsProfile),
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    enc: cdktf.stringToTerraform(struct!.enc),
  }
}


export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKmsToHclTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_profile: {
      value: cdktf.stringToHclTerraform(struct!.awsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enc: {
      value: cdktf.stringToHclTerraform(struct!.enc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._awsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsProfile = this._awsProfile;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._enc !== undefined) {
      hasAnyValues = true;
      internalValueResult.enc = this._enc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._awsProfile = undefined;
      this._createdAt = undefined;
      this._enc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._awsProfile = value.awsProfile;
      this._createdAt = value.createdAt;
      this._enc = value.enc;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // aws_profile - computed: false, optional: true, required: false
  private _awsProfile?: string; 
  public get awsProfile() {
    return this.getStringAttribute('aws_profile');
  }
  public set awsProfile(value: string) {
    this._awsProfile = value;
  }
  public resetAwsProfile() {
    this._awsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsProfileInput() {
    return this._awsProfile;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enc - computed: false, optional: true, required: false
  private _enc?: string; 
  public get enc() {
    return this.getStringAttribute('enc');
  }
  public set enc(value: string) {
    this._enc = value;
  }
  public resetEnc() {
    this._enc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encInput() {
    return this._enc;
  }
}

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKmsList extends cdktf.ComplexList {
  public internalValue? : DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKmsOutputReference {
    return new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgp {
  /**
  * Object creation date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#created_at DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#enc DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#enc}
  */
  readonly enc?: string;
  /**
  * PGP FingerPrint of the key which can be used for decryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#fp DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#fp}
  */
  readonly fp?: string;
}

export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgpToTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    enc: cdktf.stringToTerraform(struct!.enc),
    fp: cdktf.stringToTerraform(struct!.fp),
  }
}


export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgpToHclTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enc: {
      value: cdktf.stringToHclTerraform(struct!.enc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fp: {
      value: cdktf.stringToHclTerraform(struct!.fp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._enc !== undefined) {
      hasAnyValues = true;
      internalValueResult.enc = this._enc;
    }
    if (this._fp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fp = this._fp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._enc = undefined;
      this._fp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._enc = value.enc;
      this._fp = value.fp;
    }
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enc - computed: false, optional: true, required: false
  private _enc?: string; 
  public get enc() {
    return this.getStringAttribute('enc');
  }
  public set enc(value: string) {
    this._enc = value;
  }
  public resetEnc() {
    this._enc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encInput() {
    return this._enc;
  }

  // fp - computed: false, optional: true, required: false
  private _fp?: string; 
  public get fp() {
    return this.getStringAttribute('fp');
  }
  public set fp(value: string) {
    this._fp = value;
  }
  public resetFp() {
    this._fp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpInput() {
    return this._fp;
  }
}

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgpList extends cdktf.ComplexList {
  public internalValue? : DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgp[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgpOutputReference {
    return new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSops {
  /**
  * Azure KMS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#azure_kv DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#azure_kv}
  */
  readonly azureKv?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKv[] | cdktf.IResolvable;
  /**
  * Suffix used to encrypt SopsSecret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#encrypted_suffix DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#encrypted_suffix}
  */
  readonly encryptedSuffix?: string;
  /**
  * Gcp KMS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#gcp_kms DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#gcp_kms}
  */
  readonly gcpKms?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKms[] | cdktf.IResolvable;
  /**
  * Aws KMS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#kms DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#kms}
  */
  readonly kms?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKms[] | cdktf.IResolvable;
  /**
  * LastModified date when SopsSecret was last modified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#lastmodified DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#lastmodified}
  */
  readonly lastmodified?: string;
  /**
  * Mac - sops setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#mac DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#mac}
  */
  readonly mac?: string;
  /**
  * PGP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#pgp DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#pgp}
  */
  readonly pgp?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgp[] | cdktf.IResolvable;
  /**
  * Version of the sops tool used to encrypt SopsSecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#version DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsToTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_kv: cdktf.listMapper(dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKvToTerraform, false)(struct!.azureKv),
    encrypted_suffix: cdktf.stringToTerraform(struct!.encryptedSuffix),
    gcp_kms: cdktf.listMapper(dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKmsToTerraform, false)(struct!.gcpKms),
    kms: cdktf.listMapper(dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKmsToTerraform, false)(struct!.kms),
    lastmodified: cdktf.stringToTerraform(struct!.lastmodified),
    mac: cdktf.stringToTerraform(struct!.mac),
    pgp: cdktf.listMapper(dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgpToTerraform, false)(struct!.pgp),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsToHclTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_kv: {
      value: cdktf.listMapperHcl(dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKvToHclTerraform, false)(struct!.azureKv),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKvList",
    },
    encrypted_suffix: {
      value: cdktf.stringToHclTerraform(struct!.encryptedSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_kms: {
      value: cdktf.listMapperHcl(dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKmsToHclTerraform, false)(struct!.gcpKms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKmsList",
    },
    kms: {
      value: cdktf.listMapperHcl(dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKmsToHclTerraform, false)(struct!.kms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKmsList",
    },
    lastmodified: {
      value: cdktf.stringToHclTerraform(struct!.lastmodified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pgp: {
      value: cdktf.listMapperHcl(dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgpToHclTerraform, false)(struct!.pgp),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgpList",
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

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureKv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKv = this._azureKv?.internalValue;
    }
    if (this._encryptedSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedSuffix = this._encryptedSuffix;
    }
    if (this._gcpKms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpKms = this._gcpKms?.internalValue;
    }
    if (this._kms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kms = this._kms?.internalValue;
    }
    if (this._lastmodified !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastmodified = this._lastmodified;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._pgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgp = this._pgp?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureKv.internalValue = undefined;
      this._encryptedSuffix = undefined;
      this._gcpKms.internalValue = undefined;
      this._kms.internalValue = undefined;
      this._lastmodified = undefined;
      this._mac = undefined;
      this._pgp.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureKv.internalValue = value.azureKv;
      this._encryptedSuffix = value.encryptedSuffix;
      this._gcpKms.internalValue = value.gcpKms;
      this._kms.internalValue = value.kms;
      this._lastmodified = value.lastmodified;
      this._mac = value.mac;
      this._pgp.internalValue = value.pgp;
      this._version = value.version;
    }
  }

  // azure_kv - computed: false, optional: true, required: false
  private _azureKv = new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKvList(this, "azure_kv", false);
  public get azureKv() {
    return this._azureKv;
  }
  public putAzureKv(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsAzureKv[] | cdktf.IResolvable) {
    this._azureKv.internalValue = value;
  }
  public resetAzureKv() {
    this._azureKv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKvInput() {
    return this._azureKv.internalValue;
  }

  // encrypted_suffix - computed: false, optional: true, required: false
  private _encryptedSuffix?: string; 
  public get encryptedSuffix() {
    return this.getStringAttribute('encrypted_suffix');
  }
  public set encryptedSuffix(value: string) {
    this._encryptedSuffix = value;
  }
  public resetEncryptedSuffix() {
    this._encryptedSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedSuffixInput() {
    return this._encryptedSuffix;
  }

  // gcp_kms - computed: false, optional: true, required: false
  private _gcpKms = new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKmsList(this, "gcp_kms", false);
  public get gcpKms() {
    return this._gcpKms;
  }
  public putGcpKms(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsGcpKms[] | cdktf.IResolvable) {
    this._gcpKms.internalValue = value;
  }
  public resetGcpKms() {
    this._gcpKms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpKmsInput() {
    return this._gcpKms.internalValue;
  }

  // kms - computed: false, optional: true, required: false
  private _kms = new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKmsList(this, "kms", false);
  public get kms() {
    return this._kms;
  }
  public putKms(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsKms[] | cdktf.IResolvable) {
    this._kms.internalValue = value;
  }
  public resetKms() {
    this._kms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsInput() {
    return this._kms.internalValue;
  }

  // lastmodified - computed: false, optional: true, required: false
  private _lastmodified?: string; 
  public get lastmodified() {
    return this.getStringAttribute('lastmodified');
  }
  public set lastmodified(value: string) {
    this._lastmodified = value;
  }
  public resetLastmodified() {
    this._lastmodified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastmodifiedInput() {
    return this._lastmodified;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // pgp - computed: false, optional: true, required: false
  private _pgp = new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgpList(this, "pgp", false);
  public get pgp() {
    return this._pgp;
  }
  public putPgp(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsPgp[] | cdktf.IResolvable) {
    this._pgp.internalValue = value;
  }
  public resetPgp() {
    this._pgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgpInput() {
    return this._pgp.internalValue;
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
export interface DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplates {
  /**
  * Annotations to apply to Kubernetes secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#annotations DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Data map to use in Kubernetes secret (equivalent to Kubernetes Secret object stringData, please see for more information: https://kubernetes.io/docs/concepts/configuration/secret/#overview-of-secrets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#data DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#data}
  */
  readonly data: { [key: string]: string };
  /**
  * Labels to apply to Kubernetes secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#labels DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the Kubernetes secret to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#name DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Kubernetes secret type. Default: Opauqe. Possible values: Opauqe, kubernetes.io/service-account-token, kubernetes.io/dockercfg, kubernetes.io/dockerconfigjson, kubernetes.io/basic-auth, kubernetes.io/ssh-auth, kubernetes.io/tls, bootstrap.kubernetes.io/token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#type DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplatesToTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplatesToHclTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplates | cdktf.IResolvable): any {
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
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
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

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._data = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._data = value.data;
      this._labels = value.labels;
      this._name = value.name;
      this._type = value.type;
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

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplatesOutputReference {
    return new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpec {
  /**
  * Secrets template is a list of definitions to create Kubernetes Secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#secret_templates DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest#secret_templates}
  */
  readonly secretTemplates: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplates[] | cdktf.IResolvable;
}

export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecToTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_templates: cdktf.listMapper(dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplatesToTerraform, false)(struct!.secretTemplates),
  }
}


export function dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_templates: {
      value: cdktf.listMapperHcl(dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplatesToHclTerraform, false)(struct!.secretTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretTemplates = this._secretTemplates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretTemplates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretTemplates.internalValue = value.secretTemplates;
    }
  }

  // secret_templates - computed: false, optional: false, required: true
  private _secretTemplates = new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplatesList(this, "secret_templates", false);
  public get secretTemplates() {
    return this._secretTemplates;
  }
  public putSecretTemplates(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecSecretTemplates[] | cdktf.IResolvable) {
    this._secretTemplates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTemplatesInput() {
    return this._secretTemplates.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest k8s_isindir_github_com_sops_secret_v1alpha1_manifest}
*/
export class DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_isindir_github_com_sops_secret_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SIsindirGithubComSopsSecretV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_isindir_github_com_sops_secret_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/isindir_github_com_sops_secret_v1alpha1_manifest k8s_isindir_github_com_sops_secret_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_isindir_github_com_sops_secret_v1alpha1_manifest',
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
    this._sops.internalValue = config.sops;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // sops - computed: false, optional: true, required: false
  private _sops = new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsOutputReference(this, "sops");
  public get sops() {
    return this._sops;
  }
  public putSops(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSops) {
    this._sops.internalValue = value;
  }
  public resetSops() {
    this._sops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sopsInput() {
    return this._sops.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpec) {
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
      metadata: dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      sops: dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsToTerraform(this._sops.internalValue),
      spec: dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestMetadata",
      },
      sops: {
        value: dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSopsToHclTerraform(this._sops.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSops",
      },
      spec: {
        value: dataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIsindirGithubComSopsSecretV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
