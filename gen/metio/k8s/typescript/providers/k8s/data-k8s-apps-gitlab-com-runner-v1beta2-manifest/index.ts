// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsGitlabComRunnerV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#metadata DataK8SAppsGitlabComRunnerV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SAppsGitlabComRunnerV1Beta2ManifestMetadata;
  /**
  * Specification of the desired behavior of a GitLab Runner instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#spec DataK8SAppsGitlabComRunnerV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpec;
}
export interface DataK8SAppsGitlabComRunnerV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#annotations DataK8SAppsGitlabComRunnerV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#labels DataK8SAppsGitlabComRunnerV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#name DataK8SAppsGitlabComRunnerV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#namespace DataK8SAppsGitlabComRunnerV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsGitlabComRunnerV1Beta2ManifestMetadataToTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsGitlabComRunnerV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsGitlabComRunnerV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsGitlabComRunnerV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzure {
  /**
  * Name of the Azure container in which the cache will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#container DataK8SAppsGitlabComRunnerV1Beta2Manifest#container}
  */
  readonly container?: string;
  /**
  * Credentials secret contains 'accountName' and 'privateKey' used to authenticate against Azure blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#credentials DataK8SAppsGitlabComRunnerV1Beta2Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * The domain name of the Azure blob storage e.g. blob.core.windows.net
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#storage_domain DataK8SAppsGitlabComRunnerV1Beta2Manifest#storage_domain}
  */
  readonly storageDomain?: string;
}

export function dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzureToTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    storage_domain: cdktf.stringToTerraform(struct!.storageDomain),
  }
}


export function dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzureToHclTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_domain: {
      value: cdktf.stringToHclTerraform(struct!.storageDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._storageDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDomain = this._storageDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._credentials = undefined;
      this._storageDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._credentials = value.credentials;
      this._storageDomain = value.storageDomain;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // storage_domain - computed: false, optional: true, required: false
  private _storageDomain?: string; 
  public get storageDomain() {
    return this.getStringAttribute('storage_domain');
  }
  public set storageDomain(value: string) {
    this._storageDomain = value;
  }
  public resetStorageDomain() {
    this._storageDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDomainInput() {
    return this._storageDomain;
  }
}
export interface DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcs {
  /**
  * Name of the bucket in which the cache will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#bucket DataK8SAppsGitlabComRunnerV1Beta2Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * contains the GCS 'access-id' and 'private-key'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#credentials DataK8SAppsGitlabComRunnerV1Beta2Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * Takes GCS credentials file, 'keys.json'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#credentials_file DataK8SAppsGitlabComRunnerV1Beta2Manifest#credentials_file}
  */
  readonly credentialsFile?: string;
}

export function dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcsToTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    credentials_file: cdktf.stringToTerraform(struct!.credentialsFile),
  }
}


export function dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcsToHclTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.credentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._credentialsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsFile = this._credentialsFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._credentials = undefined;
      this._credentialsFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._credentials = value.credentials;
      this._credentialsFile = value.credentialsFile;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // credentials_file - computed: false, optional: true, required: false
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  public resetCredentialsFile() {
    this._credentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
  }
}
export interface DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpec {
  /**
  * Name is the name given to the custom Pod Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#name DataK8SAppsGitlabComRunnerV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * A JSON or YAML format string that describes the changes which must be applied to the final PodSpec object before it is generated. You cannot set the patch_path and patch in the same pod_spec configuration, otherwise an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#patch DataK8SAppsGitlabComRunnerV1Beta2Manifest#patch}
  */
  readonly patch?: string;
  /**
  * Path to the file that defines the changes to apply to the final PodSpec object before it is generated. The file must be a JSON or YAML file. You cannot set the patch_path and patch in the same pod_spec configuration, otherwise an error occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#patch_file DataK8SAppsGitlabComRunnerV1Beta2Manifest#patch_file}
  */
  readonly patchFile?: string;
  /**
  * The strategy the runner uses to apply the specified changes to the PodSpec object generated by GitLab Runner. The accepted values are merge, json, and strategic (default value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#patch_type DataK8SAppsGitlabComRunnerV1Beta2Manifest#patch_type}
  */
  readonly patchType: string;
}

export function dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpecToTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    patch: cdktf.stringToTerraform(struct!.patch),
    patch_file: cdktf.stringToTerraform(struct!.patchFile),
    patch_type: cdktf.stringToTerraform(struct!.patchType),
  }
}


export function dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpecToHclTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpec | cdktf.IResolvable): any {
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
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_file: {
      value: cdktf.stringToHclTerraform(struct!.patchFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_type: {
      value: cdktf.stringToHclTerraform(struct!.patchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._patchFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchFile = this._patchFile;
    }
    if (this._patchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchType = this._patchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._patch = undefined;
      this._patchFile = undefined;
      this._patchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._patch = value.patch;
      this._patchFile = value.patchFile;
      this._patchType = value.patchType;
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

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // patch_file - computed: false, optional: true, required: false
  private _patchFile?: string; 
  public get patchFile() {
    return this.getStringAttribute('patch_file');
  }
  public set patchFile(value: string) {
    this._patchFile = value;
  }
  public resetPatchFile() {
    this._patchFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchFileInput() {
    return this._patchFile;
  }

  // patch_type - computed: false, optional: false, required: true
  private _patchType?: string; 
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }
  public set patchType(value: string) {
    this._patchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypeInput() {
    return this._patchType;
  }
}

export class DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpecList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpec[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpecOutputReference {
    return new DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3 {
  /**
  * Name of the bucket in which the cache will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#bucket DataK8SAppsGitlabComRunnerV1Beta2Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Name of the secret containing the 'accesskey' and 'secretkey' used to access the object storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#credentials DataK8SAppsGitlabComRunnerV1Beta2Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * Use insecure connections or HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#insecure DataK8SAppsGitlabComRunnerV1Beta2Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Name of the S3 region in use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#location DataK8SAppsGitlabComRunnerV1Beta2Manifest#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#server DataK8SAppsGitlabComRunnerV1Beta2Manifest#server}
  */
  readonly server?: string;
}

export function dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3ToTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    location: cdktf.stringToTerraform(struct!.location),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3ToHclTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._credentials = undefined;
      this._insecure = undefined;
      this._location = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._credentials = value.credentials;
      this._insecure = value.insecure;
      this._location = value.location;
      this._server = value.server;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SAppsGitlabComRunnerV1Beta2ManifestSpec {
  /**
  * options used to setup Azure blob storage as GitLab Runner Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#azure DataK8SAppsGitlabComRunnerV1Beta2Manifest#azure}
  */
  readonly azure?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzure;
  /**
  * The name of the default image to use to run build jobs, when none is specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#build_image DataK8SAppsGitlabComRunnerV1Beta2Manifest#build_image}
  */
  readonly buildImage?: string;
  /**
  * Name of tls secret containing the custom certificate authority (CA) certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#ca DataK8SAppsGitlabComRunnerV1Beta2Manifest#ca}
  */
  readonly ca?: string;
  /**
  * Path defines the Runner Cache path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#cache_path DataK8SAppsGitlabComRunnerV1Beta2Manifest#cache_path}
  */
  readonly cachePath?: string;
  /**
  * Enable sharing of cache between Runners
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#cache_shared DataK8SAppsGitlabComRunnerV1Beta2Manifest#cache_shared}
  */
  readonly cacheShared?: boolean | cdktf.IResolvable;
  /**
  * Type of cache used for Runner artifacts Options are: gcs, s3, azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#cache_type DataK8SAppsGitlabComRunnerV1Beta2Manifest#cache_type}
  */
  readonly cacheType?: string;
  /**
  * If specified, overrides the default URL used to clone or fetch the Git ref
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#clone_url DataK8SAppsGitlabComRunnerV1Beta2Manifest#clone_url}
  */
  readonly cloneUrl?: string;
  /**
  * Option to limit the number of jobs globally that can run concurrently. The operator sets this to 10, if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#concurrent DataK8SAppsGitlabComRunnerV1Beta2Manifest#concurrent}
  */
  readonly concurrent?: number;
  /**
  * allow user to provide configmap name containing the user provided config.toml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#config DataK8SAppsGitlabComRunnerV1Beta2Manifest#config}
  */
  readonly config?: string;
  /**
  * Accepts configmap name. Provides user mechanism to inject environment variables in the GitLab Runner pod via the key value pairs in the ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#env DataK8SAppsGitlabComRunnerV1Beta2Manifest#env}
  */
  readonly env?: string;
  /**
  * options used to setup GCS (Google Container Storage) as GitLab Runner Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#gcs DataK8SAppsGitlabComRunnerV1Beta2Manifest#gcs}
  */
  readonly gcs?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcs;
  /**
  * The fully qualified domain name for the GitLab instance. For example, https://gitlab.example.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#gitlab_url DataK8SAppsGitlabComRunnerV1Beta2Manifest#gitlab_url}
  */
  readonly gitlabUrl: string;
  /**
  * If specified, overrides the default GitLab Runner helper image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#helper_image DataK8SAppsGitlabComRunnerV1Beta2Manifest#helper_image}
  */
  readonly helperImage?: string;
  /**
  * ImagePullPolicy sets the Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#image_pull_policy DataK8SAppsGitlabComRunnerV1Beta2Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Option to define the number of seconds between checks for new jobs. This is set to a default of 30s by operator if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#interval DataK8SAppsGitlabComRunnerV1Beta2Manifest#interval}
  */
  readonly interval?: number;
  /**
  * Specify whether the runner should be locked to a specific project. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#locked DataK8SAppsGitlabComRunnerV1Beta2Manifest#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#pod_spec DataK8SAppsGitlabComRunnerV1Beta2Manifest#pod_spec}
  */
  readonly podSpec?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpec[] | cdktf.IResolvable;
  /**
  * Specify whether the runner should only run protected branches. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#protected DataK8SAppsGitlabComRunnerV1Beta2Manifest#protected}
  */
  readonly protected?: boolean | cdktf.IResolvable;
  /**
  * Specify if jobs without tags should be run. If not specified, runner will default to true if no tags were specified. In other case it will default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#run_untagged DataK8SAppsGitlabComRunnerV1Beta2Manifest#run_untagged}
  */
  readonly runUntagged?: boolean | cdktf.IResolvable;
  /**
  * If specified, overrides the default GitLab Runner image. Default is the Runner image the operator was bundled with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#runner_image DataK8SAppsGitlabComRunnerV1Beta2Manifest#runner_image}
  */
  readonly runnerImage?: string;
  /**
  * options used to setup S3 object store as GitLab Runner Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#s3 DataK8SAppsGitlabComRunnerV1Beta2Manifest#s3}
  */
  readonly s3?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3;
  /**
  * allow user to override service account used by GitLab Runner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#serviceaccount DataK8SAppsGitlabComRunnerV1Beta2Manifest#serviceaccount}
  */
  readonly serviceaccount?: string;
  /**
  * List of comma separated tags to be applied to the runner More info: https://docs.gitlab.com/ee/ci/runners/#use-tags-to-limit-the-number-of-jobs-using-the-runner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#tags DataK8SAppsGitlabComRunnerV1Beta2Manifest#tags}
  */
  readonly tags?: string;
  /**
  * Name of secret containing the 'runner-registration-token' key used to register the runner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#token DataK8SAppsGitlabComRunnerV1Beta2Manifest#token}
  */
  readonly token: string;
}

export function dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecToTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzureToTerraform(struct!.azure),
    build_image: cdktf.stringToTerraform(struct!.buildImage),
    ca: cdktf.stringToTerraform(struct!.ca),
    cache_path: cdktf.stringToTerraform(struct!.cachePath),
    cache_shared: cdktf.booleanToTerraform(struct!.cacheShared),
    cache_type: cdktf.stringToTerraform(struct!.cacheType),
    clone_url: cdktf.stringToTerraform(struct!.cloneUrl),
    concurrent: cdktf.numberToTerraform(struct!.concurrent),
    config: cdktf.stringToTerraform(struct!.config),
    env: cdktf.stringToTerraform(struct!.env),
    gcs: dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcsToTerraform(struct!.gcs),
    gitlab_url: cdktf.stringToTerraform(struct!.gitlabUrl),
    helper_image: cdktf.stringToTerraform(struct!.helperImage),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    interval: cdktf.numberToTerraform(struct!.interval),
    locked: cdktf.booleanToTerraform(struct!.locked),
    pod_spec: cdktf.listMapper(dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpecToTerraform, false)(struct!.podSpec),
    protected: cdktf.booleanToTerraform(struct!.protected),
    run_untagged: cdktf.booleanToTerraform(struct!.runUntagged),
    runner_image: cdktf.stringToTerraform(struct!.runnerImage),
    s3: dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3ToTerraform(struct!.s3),
    serviceaccount: cdktf.stringToTerraform(struct!.serviceaccount),
    tags: cdktf.stringToTerraform(struct!.tags),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzure",
    },
    build_image: {
      value: cdktf.stringToHclTerraform(struct!.buildImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_path: {
      value: cdktf.stringToHclTerraform(struct!.cachePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_shared: {
      value: cdktf.booleanToHclTerraform(struct!.cacheShared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_type: {
      value: cdktf.stringToHclTerraform(struct!.cacheType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clone_url: {
      value: cdktf.stringToHclTerraform(struct!.cloneUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrent: {
      value: cdktf.numberToHclTerraform(struct!.concurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.stringToHclTerraform(struct!.env),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcs",
    },
    gitlab_url: {
      value: cdktf.stringToHclTerraform(struct!.gitlabUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    helper_image: {
      value: cdktf.stringToHclTerraform(struct!.helperImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_spec: {
      value: cdktf.listMapperHcl(dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpecToHclTerraform, false)(struct!.podSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpecList",
    },
    protected: {
      value: cdktf.booleanToHclTerraform(struct!.protected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_untagged: {
      value: cdktf.booleanToHclTerraform(struct!.runUntagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    runner_image: {
      value: cdktf.stringToHclTerraform(struct!.runnerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3",
    },
    serviceaccount: {
      value: cdktf.stringToHclTerraform(struct!.serviceaccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsGitlabComRunnerV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._buildImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildImage = this._buildImage;
    }
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._cachePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePath = this._cachePath;
    }
    if (this._cacheShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheShared = this._cacheShared;
    }
    if (this._cacheType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheType = this._cacheType;
    }
    if (this._cloneUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneUrl = this._cloneUrl;
    }
    if (this._concurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrent = this._concurrent;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._gitlabUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlabUrl = this._gitlabUrl;
    }
    if (this._helperImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperImage = this._helperImage;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._podSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSpec = this._podSpec?.internalValue;
    }
    if (this._protected !== undefined) {
      hasAnyValues = true;
      internalValueResult.protected = this._protected;
    }
    if (this._runUntagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.runUntagged = this._runUntagged;
    }
    if (this._runnerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerImage = this._runnerImage;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._serviceaccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceaccount = this._serviceaccount;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azure.internalValue = undefined;
      this._buildImage = undefined;
      this._ca = undefined;
      this._cachePath = undefined;
      this._cacheShared = undefined;
      this._cacheType = undefined;
      this._cloneUrl = undefined;
      this._concurrent = undefined;
      this._config = undefined;
      this._env = undefined;
      this._gcs.internalValue = undefined;
      this._gitlabUrl = undefined;
      this._helperImage = undefined;
      this._imagePullPolicy = undefined;
      this._interval = undefined;
      this._locked = undefined;
      this._podSpec.internalValue = undefined;
      this._protected = undefined;
      this._runUntagged = undefined;
      this._runnerImage = undefined;
      this._s3.internalValue = undefined;
      this._serviceaccount = undefined;
      this._tags = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azure.internalValue = value.azure;
      this._buildImage = value.buildImage;
      this._ca = value.ca;
      this._cachePath = value.cachePath;
      this._cacheShared = value.cacheShared;
      this._cacheType = value.cacheType;
      this._cloneUrl = value.cloneUrl;
      this._concurrent = value.concurrent;
      this._config = value.config;
      this._env = value.env;
      this._gcs.internalValue = value.gcs;
      this._gitlabUrl = value.gitlabUrl;
      this._helperImage = value.helperImage;
      this._imagePullPolicy = value.imagePullPolicy;
      this._interval = value.interval;
      this._locked = value.locked;
      this._podSpec.internalValue = value.podSpec;
      this._protected = value.protected;
      this._runUntagged = value.runUntagged;
      this._runnerImage = value.runnerImage;
      this._s3.internalValue = value.s3;
      this._serviceaccount = value.serviceaccount;
      this._tags = value.tags;
      this._token = value.token;
    }
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // build_image - computed: false, optional: true, required: false
  private _buildImage?: string; 
  public get buildImage() {
    return this.getStringAttribute('build_image');
  }
  public set buildImage(value: string) {
    this._buildImage = value;
  }
  public resetBuildImage() {
    this._buildImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildImageInput() {
    return this._buildImage;
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // cache_path - computed: false, optional: true, required: false
  private _cachePath?: string; 
  public get cachePath() {
    return this.getStringAttribute('cache_path');
  }
  public set cachePath(value: string) {
    this._cachePath = value;
  }
  public resetCachePath() {
    this._cachePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePathInput() {
    return this._cachePath;
  }

  // cache_shared - computed: false, optional: true, required: false
  private _cacheShared?: boolean | cdktf.IResolvable; 
  public get cacheShared() {
    return this.getBooleanAttribute('cache_shared');
  }
  public set cacheShared(value: boolean | cdktf.IResolvable) {
    this._cacheShared = value;
  }
  public resetCacheShared() {
    this._cacheShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSharedInput() {
    return this._cacheShared;
  }

  // cache_type - computed: false, optional: true, required: false
  private _cacheType?: string; 
  public get cacheType() {
    return this.getStringAttribute('cache_type');
  }
  public set cacheType(value: string) {
    this._cacheType = value;
  }
  public resetCacheType() {
    this._cacheType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTypeInput() {
    return this._cacheType;
  }

  // clone_url - computed: false, optional: true, required: false
  private _cloneUrl?: string; 
  public get cloneUrl() {
    return this.getStringAttribute('clone_url');
  }
  public set cloneUrl(value: string) {
    this._cloneUrl = value;
  }
  public resetCloneUrl() {
    this._cloneUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneUrlInput() {
    return this._cloneUrl;
  }

  // concurrent - computed: false, optional: true, required: false
  private _concurrent?: number; 
  public get concurrent() {
    return this.getNumberAttribute('concurrent');
  }
  public set concurrent(value: number) {
    this._concurrent = value;
  }
  public resetConcurrent() {
    this._concurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentInput() {
    return this._concurrent;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // gitlab_url - computed: false, optional: false, required: true
  private _gitlabUrl?: string; 
  public get gitlabUrl() {
    return this.getStringAttribute('gitlab_url');
  }
  public set gitlabUrl(value: string) {
    this._gitlabUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabUrlInput() {
    return this._gitlabUrl;
  }

  // helper_image - computed: false, optional: true, required: false
  private _helperImage?: string; 
  public get helperImage() {
    return this.getStringAttribute('helper_image');
  }
  public set helperImage(value: string) {
    this._helperImage = value;
  }
  public resetHelperImage() {
    this._helperImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperImageInput() {
    return this._helperImage;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // pod_spec - computed: false, optional: true, required: false
  private _podSpec = new DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpecList(this, "pod_spec", false);
  public get podSpec() {
    return this._podSpec;
  }
  public putPodSpec(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecPodSpec[] | cdktf.IResolvable) {
    this._podSpec.internalValue = value;
  }
  public resetPodSpec() {
    this._podSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSpecInput() {
    return this._podSpec.internalValue;
  }

  // protected - computed: false, optional: true, required: false
  private _protected?: boolean | cdktf.IResolvable; 
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
  public set protected(value: boolean | cdktf.IResolvable) {
    this._protected = value;
  }
  public resetProtected() {
    this._protected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInput() {
    return this._protected;
  }

  // run_untagged - computed: false, optional: true, required: false
  private _runUntagged?: boolean | cdktf.IResolvable; 
  public get runUntagged() {
    return this.getBooleanAttribute('run_untagged');
  }
  public set runUntagged(value: boolean | cdktf.IResolvable) {
    this._runUntagged = value;
  }
  public resetRunUntagged() {
    this._runUntagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runUntaggedInput() {
    return this._runUntagged;
  }

  // runner_image - computed: false, optional: true, required: false
  private _runnerImage?: string; 
  public get runnerImage() {
    return this.getStringAttribute('runner_image');
  }
  public set runnerImage(value: string) {
    this._runnerImage = value;
  }
  public resetRunnerImage() {
    this._runnerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerImageInput() {
    return this._runnerImage;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // serviceaccount - computed: false, optional: true, required: false
  private _serviceaccount?: string; 
  public get serviceaccount() {
    return this.getStringAttribute('serviceaccount');
  }
  public set serviceaccount(value: string) {
    this._serviceaccount = value;
  }
  public resetServiceaccount() {
    this._serviceaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceaccountInput() {
    return this._serviceaccount;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest k8s_apps_gitlab_com_runner_v1beta2_manifest}
*/
export class DataK8SAppsGitlabComRunnerV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_gitlab_com_runner_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsGitlabComRunnerV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsGitlabComRunnerV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SAppsGitlabComRunnerV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsGitlabComRunnerV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_gitlab_com_runner_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_gitlab_com_runner_v1beta2_manifest k8s_apps_gitlab_com_runner_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsGitlabComRunnerV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsGitlabComRunnerV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_gitlab_com_runner_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SAppsGitlabComRunnerV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsGitlabComRunnerV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsGitlabComRunnerV1Beta2ManifestSpec) {
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
      metadata: dataK8SAppsGitlabComRunnerV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsGitlabComRunnerV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsGitlabComRunnerV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsGitlabComRunnerV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsGitlabComRunnerV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
