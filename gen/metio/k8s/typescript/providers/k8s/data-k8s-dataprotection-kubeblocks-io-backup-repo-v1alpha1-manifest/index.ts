// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#metadata DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadata;
  /**
  * BackupRepoSpec defines the desired state of 'BackupRepo'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#spec DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpec;
}
export interface DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#annotations DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#labels DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredential {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#namespace DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredentialToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredentialToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredential | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredential | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredential | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpec {
  /**
  * Specifies the access method of the backup repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#access_method DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#access_method}
  */
  readonly accessMethod?: string;
  /**
  * Stores the non-secret configuration parameters for the 'StorageProvider'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#config DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * References to the secret that holds the credentials for the 'StorageProvider'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#credential DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#credential}
  */
  readonly credential?: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredential;
  /**
  * Specifies the prefix of the path for storing backup data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#path_prefix DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Specifies reclaim policy of the PV created by this backup repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#pv_reclaim_policy DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#pv_reclaim_policy}
  */
  readonly pvReclaimPolicy: string;
  /**
  * Specifies the name of the 'StorageProvider' used by this backup repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#storage_provider_ref DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#storage_provider_ref}
  */
  readonly storageProviderRef: string;
  /**
  * Specifies the capacity of the PVC created by this backup repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#volume_capacity DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest#volume_capacity}
  */
  readonly volumeCapacity?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_method: cdktf.stringToTerraform(struct!.accessMethod),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    credential: dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredentialToTerraform(struct!.credential),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    pv_reclaim_policy: cdktf.stringToTerraform(struct!.pvReclaimPolicy),
    storage_provider_ref: cdktf.stringToTerraform(struct!.storageProviderRef),
    volume_capacity: cdktf.stringToTerraform(struct!.volumeCapacity),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_method: {
      value: cdktf.stringToHclTerraform(struct!.accessMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    credential: {
      value: dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredential",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pv_reclaim_policy: {
      value: cdktf.stringToHclTerraform(struct!.pvReclaimPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_provider_ref: {
      value: cdktf.stringToHclTerraform(struct!.storageProviderRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_capacity: {
      value: cdktf.stringToHclTerraform(struct!.volumeCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMethod = this._accessMethod;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._pvReclaimPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvReclaimPolicy = this._pvReclaimPolicy;
    }
    if (this._storageProviderRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageProviderRef = this._storageProviderRef;
    }
    if (this._volumeCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeCapacity = this._volumeCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMethod = undefined;
      this._config = undefined;
      this._credential.internalValue = undefined;
      this._pathPrefix = undefined;
      this._pvReclaimPolicy = undefined;
      this._storageProviderRef = undefined;
      this._volumeCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMethod = value.accessMethod;
      this._config = value.config;
      this._credential.internalValue = value.credential;
      this._pathPrefix = value.pathPrefix;
      this._pvReclaimPolicy = value.pvReclaimPolicy;
      this._storageProviderRef = value.storageProviderRef;
      this._volumeCapacity = value.volumeCapacity;
    }
  }

  // access_method - computed: false, optional: true, required: false
  private _accessMethod?: string; 
  public get accessMethod() {
    return this.getStringAttribute('access_method');
  }
  public set accessMethod(value: string) {
    this._accessMethod = value;
  }
  public resetAccessMethod() {
    this._accessMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessMethodInput() {
    return this._accessMethod;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // credential - computed: false, optional: true, required: false
  private _credential = new DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecCredential) {
    this._credential.internalValue = value;
  }
  public resetCredential() {
    this._credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // pv_reclaim_policy - computed: false, optional: false, required: true
  private _pvReclaimPolicy?: string; 
  public get pvReclaimPolicy() {
    return this.getStringAttribute('pv_reclaim_policy');
  }
  public set pvReclaimPolicy(value: string) {
    this._pvReclaimPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvReclaimPolicyInput() {
    return this._pvReclaimPolicy;
  }

  // storage_provider_ref - computed: false, optional: false, required: true
  private _storageProviderRef?: string; 
  public get storageProviderRef() {
    return this.getStringAttribute('storage_provider_ref');
  }
  public set storageProviderRef(value: string) {
    this._storageProviderRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProviderRefInput() {
    return this._storageProviderRef;
  }

  // volume_capacity - computed: false, optional: true, required: false
  private _volumeCapacity?: string; 
  public get volumeCapacity() {
    return this.getStringAttribute('volume_capacity');
  }
  public set volumeCapacity(value: string) {
    this._volumeCapacity = value;
  }
  public resetVolumeCapacity() {
    this._volumeCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeCapacityInput() {
    return this._volumeCapacity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest}
*/
export class DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_dataprotection_kubeblocks_io_backup_repo_v1alpha1_manifest',
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
  private _metadata = new DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoBackupRepoV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
