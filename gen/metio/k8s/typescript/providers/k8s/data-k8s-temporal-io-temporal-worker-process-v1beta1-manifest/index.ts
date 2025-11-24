// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#metadata DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadata;
  /**
  * TemporalWorkerProcessSpec defines the desired state of TemporalWorkerProcess.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#spec DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpec;
}
export interface DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#annotations DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#labels DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#name DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#namespace DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadataToTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRef {
  /**
  * Key in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#key DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Name of the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#name DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRefToTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRefToHclTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRef | cdktf.IResolvable): any {
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

export class DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistry {
  /**
  * PasswordSecret is the reference to the secret holding the docker repo password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#password_secret_ref DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#password_secret_ref}
  */
  readonly passwordSecretRef: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRef;
  /**
  * Repository is the fqdn to the image repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#repository DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#repository}
  */
  readonly repository: string;
  /**
  * Username is the username for the container repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#username DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#username}
  */
  readonly username: string;
}

export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryToTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_secret_ref: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRefToTerraform(struct!.passwordSecretRef),
    repository: cdktf.stringToTerraform(struct!.repository),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryToHclTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_secret_ref: {
      value: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRefToHclTerraform(struct!.passwordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRef",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
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

export class DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretRef = this._passwordSecretRef?.internalValue;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordSecretRef.internalValue = undefined;
      this._repository = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordSecretRef.internalValue = value.passwordSecretRef;
      this._repository = value.repository;
      this._username = value.username;
    }
  }

  // password_secret_ref - computed: false, optional: false, required: true
  private _passwordSecretRef = new DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRefOutputReference(this, "password_secret_ref");
  public get passwordSecretRef() {
    return this._passwordSecretRef;
  }
  public putPasswordSecretRef(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryPasswordSecretRef) {
    this._passwordSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretRefInput() {
    return this._passwordSecretRef.internalValue;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
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
export interface DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReference {
  /**
  * Branch to check out, defaults to 'main' if no other field is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#branch DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#branch}
  */
  readonly branch?: string;
}

export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReferenceToTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
  }
}


export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReferenceToHclTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }
}
export interface DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepository {
  /**
  * Reference specifies the Git reference to resolve and monitor for changes, defaults to the 'master' branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#reference DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#reference}
  */
  readonly reference?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReference;
  /**
  * URL specifies the Git repository URL, it can be an HTTP/S or SSH address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#url DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#url}
  */
  readonly url: string;
}

export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryToTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReferenceToTerraform(struct!.reference),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryToHclTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReferenceToHclTerraform(struct!.reference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReference",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference.internalValue = value.reference;
      this._url = value.url;
    }
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReferenceOutputReference(this, "reference");
  public get reference() {
    return this._reference;
  }
  public putReference(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryReference) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
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
}
export interface DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilder {
  /**
  * BuildAttempt is the build attempt number of a given version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#attempt DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#attempt}
  */
  readonly attempt?: number;
  /**
  * BuildDir is the location of where the sources will be built.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#build_dir DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#build_dir}
  */
  readonly buildDir?: string;
  /**
  * BuildRegistry specifies how to connect to container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#build_registry DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#build_registry}
  */
  readonly buildRegistry?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistry;
  /**
  * Enabled defines if the operator should build the temporal worker process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#enabled DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * GitRepository specifies how to connect to Git source control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#git_repository DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#git_repository}
  */
  readonly gitRepository?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepository;
  /**
  * Image is the image that will be used to build worker image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#image DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * Version is the version of the image that will be used to build worker image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#version DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderToTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempt: cdktf.numberToTerraform(struct!.attempt),
    build_dir: cdktf.stringToTerraform(struct!.buildDir),
    build_registry: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryToTerraform(struct!.buildRegistry),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    git_repository: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryToTerraform(struct!.gitRepository),
    image: cdktf.stringToTerraform(struct!.image),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderToHclTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempt: {
      value: cdktf.numberToHclTerraform(struct!.attempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    build_dir: {
      value: cdktf.stringToHclTerraform(struct!.buildDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_registry: {
      value: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryToHclTerraform(struct!.buildRegistry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistry",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    git_repository: {
      value: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryToHclTerraform(struct!.gitRepository),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepository",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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

export class DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempt = this._attempt;
    }
    if (this._buildDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildDir = this._buildDir;
    }
    if (this._buildRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildRegistry = this._buildRegistry?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._gitRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepository = this._gitRepository?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempt = undefined;
      this._buildDir = undefined;
      this._buildRegistry.internalValue = undefined;
      this._enabled = undefined;
      this._gitRepository.internalValue = undefined;
      this._image = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempt = value.attempt;
      this._buildDir = value.buildDir;
      this._buildRegistry.internalValue = value.buildRegistry;
      this._enabled = value.enabled;
      this._gitRepository.internalValue = value.gitRepository;
      this._image = value.image;
      this._version = value.version;
    }
  }

  // attempt - computed: false, optional: true, required: false
  private _attempt?: number; 
  public get attempt() {
    return this.getNumberAttribute('attempt');
  }
  public set attempt(value: number) {
    this._attempt = value;
  }
  public resetAttempt() {
    this._attempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptInput() {
    return this._attempt;
  }

  // build_dir - computed: false, optional: true, required: false
  private _buildDir?: string; 
  public get buildDir() {
    return this.getStringAttribute('build_dir');
  }
  public set buildDir(value: string) {
    this._buildDir = value;
  }
  public resetBuildDir() {
    this._buildDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildDirInput() {
    return this._buildDir;
  }

  // build_registry - computed: false, optional: true, required: false
  private _buildRegistry = new DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistryOutputReference(this, "build_registry");
  public get buildRegistry() {
    return this._buildRegistry;
  }
  public putBuildRegistry(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderBuildRegistry) {
    this._buildRegistry.internalValue = value;
  }
  public resetBuildRegistry() {
    this._buildRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildRegistryInput() {
    return this._buildRegistry.internalValue;
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

  // git_repository - computed: false, optional: true, required: false
  private _gitRepository = new DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepositoryOutputReference(this, "git_repository");
  public get gitRepository() {
    return this._gitRepository;
  }
  public putGitRepository(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderGitRepository) {
    this._gitRepository.internalValue = value;
  }
  public resetGitRepository() {
    this._gitRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryInput() {
    return this._gitRepository.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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
export interface DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRef {
  /**
  * The name of the TemporalCluster to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#name DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * The namespace of the TemporalCluster to reference. Defaults to the namespace of the requested resource if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#namespace DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRefToTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRefToHclTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRef | cdktf.IResolvable): any {
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

export class DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#name DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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
}

export class DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpec {
  /**
  * Builder is the configuration for building a TemporalWorkerProcess. THIS FEATURE IS HIGHLY EXPERIMENTAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#builder DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#builder}
  */
  readonly builder?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilder;
  /**
  * Reference to the temporal cluster the worker will connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#cluster_ref DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#cluster_ref}
  */
  readonly clusterRef: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRef;
  /**
  * Image defines the temporal worker docker image the instance should run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#image DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#image}
  */
  readonly image: string;
  /**
  * An optional list of references to secrets in the same namespace to use for pulling temporal images from registries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#image_pull_secrets DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * JobTTLSecondsAfterFinished is amount of time to keep job pods after jobs are completed. Defaults to 300 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#job_ttl_seconds_after_finished DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#job_ttl_seconds_after_finished}
  */
  readonly jobTtlSecondsAfterFinished?: number;
  /**
  * Image pull policy for determining how to pull worker process images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#pull_policy DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Number of desired replicas. Default to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#replicas DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * TemporalNamespace that worker will poll.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#temporal_namespace DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#temporal_namespace}
  */
  readonly temporalNamespace: string;
  /**
  * Version defines the worker process version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#version DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecToTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builder: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderToTerraform(struct!.builder),
    cluster_ref: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRefToTerraform(struct!.clusterRef),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_secrets: cdktf.listMapper(dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    job_ttl_seconds_after_finished: cdktf.numberToTerraform(struct!.jobTtlSecondsAfterFinished),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    temporal_namespace: cdktf.stringToTerraform(struct!.temporalNamespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecToHclTerraform(struct?: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builder: {
      value: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderToHclTerraform(struct!.builder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilder",
    },
    cluster_ref: {
      value: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRefToHclTerraform(struct!.clusterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRef",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecretsList",
    },
    job_ttl_seconds_after_finished: {
      value: cdktf.numberToHclTerraform(struct!.jobTtlSecondsAfterFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    temporal_namespace: {
      value: cdktf.stringToHclTerraform(struct!.temporalNamespace),
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

export class DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.builder = this._builder?.internalValue;
    }
    if (this._clusterRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRef = this._clusterRef?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._jobTtlSecondsAfterFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTtlSecondsAfterFinished = this._jobTtlSecondsAfterFinished;
    }
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._temporalNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporalNamespace = this._temporalNamespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builder.internalValue = undefined;
      this._clusterRef.internalValue = undefined;
      this._image = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._jobTtlSecondsAfterFinished = undefined;
      this._pullPolicy = undefined;
      this._replicas = undefined;
      this._temporalNamespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builder.internalValue = value.builder;
      this._clusterRef.internalValue = value.clusterRef;
      this._image = value.image;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._jobTtlSecondsAfterFinished = value.jobTtlSecondsAfterFinished;
      this._pullPolicy = value.pullPolicy;
      this._replicas = value.replicas;
      this._temporalNamespace = value.temporalNamespace;
      this._version = value.version;
    }
  }

  // builder - computed: false, optional: true, required: false
  private _builder = new DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilderOutputReference(this, "builder");
  public get builder() {
    return this._builder;
  }
  public putBuilder(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecBuilder) {
    this._builder.internalValue = value;
  }
  public resetBuilder() {
    this._builder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builderInput() {
    return this._builder.internalValue;
  }

  // cluster_ref - computed: false, optional: false, required: true
  private _clusterRef = new DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRefOutputReference(this, "cluster_ref");
  public get clusterRef() {
    return this._clusterRef;
  }
  public putClusterRef(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecClusterRef) {
    this._clusterRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefInput() {
    return this._clusterRef.internalValue;
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

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // job_ttl_seconds_after_finished - computed: false, optional: true, required: false
  private _jobTtlSecondsAfterFinished?: number; 
  public get jobTtlSecondsAfterFinished() {
    return this.getNumberAttribute('job_ttl_seconds_after_finished');
  }
  public set jobTtlSecondsAfterFinished(value: number) {
    this._jobTtlSecondsAfterFinished = value;
  }
  public resetJobTtlSecondsAfterFinished() {
    this._jobTtlSecondsAfterFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTtlSecondsAfterFinishedInput() {
    return this._jobTtlSecondsAfterFinished;
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
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

  // temporal_namespace - computed: false, optional: false, required: true
  private _temporalNamespace?: string; 
  public get temporalNamespace() {
    return this.getStringAttribute('temporal_namespace');
  }
  public set temporalNamespace(value: string) {
    this._temporalNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get temporalNamespaceInput() {
    return this._temporalNamespace;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest k8s_temporal_io_temporal_worker_process_v1beta1_manifest}
*/
export class DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_temporal_io_temporal_worker_process_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STemporalIoTemporalWorkerProcessV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_temporal_io_temporal_worker_process_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/temporal_io_temporal_worker_process_v1beta1_manifest k8s_temporal_io_temporal_worker_process_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_temporal_io_temporal_worker_process_v1beta1_manifest',
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
  private _metadata = new DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpec) {
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
      metadata: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STemporalIoTemporalWorkerProcessV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
