// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STestsTestkubeIoTestExecutionV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#metadata DataK8STestsTestkubeIoTestExecutionV1Manifest#metadata}
  */
  readonly metadata: DataK8STestsTestkubeIoTestExecutionV1ManifestMetadata;
  /**
  * TestExecutionSpec defines the desired state of TestExecution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#spec DataK8STestsTestkubeIoTestExecutionV1Manifest#spec}
  */
  readonly spec?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpec;
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#annotations DataK8STestsTestkubeIoTestExecutionV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#labels DataK8STestsTestkubeIoTestExecutionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#name DataK8STestsTestkubeIoTestExecutionV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#namespace DataK8STestsTestkubeIoTestExecutionV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestMetadataToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestExecutionV1ManifestMetadataToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestExecutionV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequest {
  /**
  * artifact directories for scraping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#dirs DataK8STestsTestkubeIoTestExecutionV1Manifest#dirs}
  */
  readonly dirs?: string[];
  /**
  * regexp to filter scraped artifacts, single or comma separated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#masks DataK8STestsTestkubeIoTestExecutionV1Manifest#masks}
  */
  readonly masks?: string[];
  /**
  * don't use a separate folder for execution artifacts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#omit_folder_per_execution DataK8STestsTestkubeIoTestExecutionV1Manifest#omit_folder_per_execution}
  */
  readonly omitFolderPerExecution?: boolean | cdktf.IResolvable;
  /**
  * whether to share volume between pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#shared_between_pods DataK8STestsTestkubeIoTestExecutionV1Manifest#shared_between_pods}
  */
  readonly sharedBetweenPods?: boolean | cdktf.IResolvable;
  /**
  * run scraper as pod sidecar container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#sidecar_scraper DataK8STestsTestkubeIoTestExecutionV1Manifest#sidecar_scraper}
  */
  readonly sidecarScraper?: boolean | cdktf.IResolvable;
  /**
  * artifact bucket storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#storage_bucket DataK8STestsTestkubeIoTestExecutionV1Manifest#storage_bucket}
  */
  readonly storageBucket?: string;
  /**
  * artifact storage class name for container executor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#storage_class_name DataK8STestsTestkubeIoTestExecutionV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * whether to use default storage class name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#use_default_storage_class_name DataK8STestsTestkubeIoTestExecutionV1Manifest#use_default_storage_class_name}
  */
  readonly useDefaultStorageClassName?: boolean | cdktf.IResolvable;
  /**
  * artifact volume mount path for container executor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#volume_mount_path DataK8STestsTestkubeIoTestExecutionV1Manifest#volume_mount_path}
  */
  readonly volumeMountPath?: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequestToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dirs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dirs),
    masks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.masks),
    omit_folder_per_execution: cdktf.booleanToTerraform(struct!.omitFolderPerExecution),
    shared_between_pods: cdktf.booleanToTerraform(struct!.sharedBetweenPods),
    sidecar_scraper: cdktf.booleanToTerraform(struct!.sidecarScraper),
    storage_bucket: cdktf.stringToTerraform(struct!.storageBucket),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    use_default_storage_class_name: cdktf.booleanToTerraform(struct!.useDefaultStorageClassName),
    volume_mount_path: cdktf.stringToTerraform(struct!.volumeMountPath),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dirs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dirs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    masks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.masks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    omit_folder_per_execution: {
      value: cdktf.booleanToHclTerraform(struct!.omitFolderPerExecution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shared_between_pods: {
      value: cdktf.booleanToHclTerraform(struct!.sharedBetweenPods),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sidecar_scraper: {
      value: cdktf.booleanToHclTerraform(struct!.sidecarScraper),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_bucket: {
      value: cdktf.stringToHclTerraform(struct!.storageBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_storage_class_name: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultStorageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.volumeMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dirs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dirs = this._dirs;
    }
    if (this._masks !== undefined) {
      hasAnyValues = true;
      internalValueResult.masks = this._masks;
    }
    if (this._omitFolderPerExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitFolderPerExecution = this._omitFolderPerExecution;
    }
    if (this._sharedBetweenPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedBetweenPods = this._sharedBetweenPods;
    }
    if (this._sidecarScraper !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecarScraper = this._sidecarScraper;
    }
    if (this._storageBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBucket = this._storageBucket;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._useDefaultStorageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultStorageClassName = this._useDefaultStorageClassName;
    }
    if (this._volumeMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMountPath = this._volumeMountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dirs = undefined;
      this._masks = undefined;
      this._omitFolderPerExecution = undefined;
      this._sharedBetweenPods = undefined;
      this._sidecarScraper = undefined;
      this._storageBucket = undefined;
      this._storageClassName = undefined;
      this._useDefaultStorageClassName = undefined;
      this._volumeMountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dirs = value.dirs;
      this._masks = value.masks;
      this._omitFolderPerExecution = value.omitFolderPerExecution;
      this._sharedBetweenPods = value.sharedBetweenPods;
      this._sidecarScraper = value.sidecarScraper;
      this._storageBucket = value.storageBucket;
      this._storageClassName = value.storageClassName;
      this._useDefaultStorageClassName = value.useDefaultStorageClassName;
      this._volumeMountPath = value.volumeMountPath;
    }
  }

  // dirs - computed: false, optional: true, required: false
  private _dirs?: string[]; 
  public get dirs() {
    return this.getListAttribute('dirs');
  }
  public set dirs(value: string[]) {
    this._dirs = value;
  }
  public resetDirs() {
    this._dirs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirsInput() {
    return this._dirs;
  }

  // masks - computed: false, optional: true, required: false
  private _masks?: string[]; 
  public get masks() {
    return this.getListAttribute('masks');
  }
  public set masks(value: string[]) {
    this._masks = value;
  }
  public resetMasks() {
    this._masks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masksInput() {
    return this._masks;
  }

  // omit_folder_per_execution - computed: false, optional: true, required: false
  private _omitFolderPerExecution?: boolean | cdktf.IResolvable; 
  public get omitFolderPerExecution() {
    return this.getBooleanAttribute('omit_folder_per_execution');
  }
  public set omitFolderPerExecution(value: boolean | cdktf.IResolvable) {
    this._omitFolderPerExecution = value;
  }
  public resetOmitFolderPerExecution() {
    this._omitFolderPerExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitFolderPerExecutionInput() {
    return this._omitFolderPerExecution;
  }

  // shared_between_pods - computed: false, optional: true, required: false
  private _sharedBetweenPods?: boolean | cdktf.IResolvable; 
  public get sharedBetweenPods() {
    return this.getBooleanAttribute('shared_between_pods');
  }
  public set sharedBetweenPods(value: boolean | cdktf.IResolvable) {
    this._sharedBetweenPods = value;
  }
  public resetSharedBetweenPods() {
    this._sharedBetweenPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedBetweenPodsInput() {
    return this._sharedBetweenPods;
  }

  // sidecar_scraper - computed: false, optional: true, required: false
  private _sidecarScraper?: boolean | cdktf.IResolvable; 
  public get sidecarScraper() {
    return this.getBooleanAttribute('sidecar_scraper');
  }
  public set sidecarScraper(value: boolean | cdktf.IResolvable) {
    this._sidecarScraper = value;
  }
  public resetSidecarScraper() {
    this._sidecarScraper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarScraperInput() {
    return this._sidecarScraper;
  }

  // storage_bucket - computed: false, optional: true, required: false
  private _storageBucket?: string; 
  public get storageBucket() {
    return this.getStringAttribute('storage_bucket');
  }
  public set storageBucket(value: string) {
    this._storageBucket = value;
  }
  public resetStorageBucket() {
    this._storageBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBucketInput() {
    return this._storageBucket;
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

  // use_default_storage_class_name - computed: false, optional: true, required: false
  private _useDefaultStorageClassName?: boolean | cdktf.IResolvable; 
  public get useDefaultStorageClassName() {
    return this.getBooleanAttribute('use_default_storage_class_name');
  }
  public set useDefaultStorageClassName(value: boolean | cdktf.IResolvable) {
    this._useDefaultStorageClassName = value;
  }
  public resetUseDefaultStorageClassName() {
    this._useDefaultStorageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultStorageClassNameInput() {
    return this._useDefaultStorageClassName;
  }

  // volume_mount_path - computed: false, optional: true, required: false
  private _volumeMountPath?: string; 
  public get volumeMountPath() {
    return this.getStringAttribute('volume_mount_path');
  }
  public set volumeMountPath(value: string) {
    this._volumeMountPath = value;
  }
  public resetVolumeMountPath() {
    this._volumeMountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountPathInput() {
    return this._volumeMountPath;
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReference {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#name DataK8STestsTestkubeIoTestExecutionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReferenceToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReferenceToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReference | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReference | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMaps {
  /**
  * whether we shoud map to variables from resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#map_to_variables DataK8STestsTestkubeIoTestExecutionV1Manifest#map_to_variables}
  */
  readonly mapToVariables?: boolean | cdktf.IResolvable;
  /**
  * whether we shoud mount resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#mount DataK8STestsTestkubeIoTestExecutionV1Manifest#mount}
  */
  readonly mount?: boolean | cdktf.IResolvable;
  /**
  * where we shoud mount resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#mount_path DataK8STestsTestkubeIoTestExecutionV1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#reference DataK8STestsTestkubeIoTestExecutionV1Manifest#reference}
  */
  readonly reference: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReference;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_to_variables: cdktf.booleanToTerraform(struct!.mapToVariables),
    mount: cdktf.booleanToTerraform(struct!.mount),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    reference: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReferenceToTerraform(struct!.reference),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_to_variables: {
      value: cdktf.booleanToHclTerraform(struct!.mapToVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount: {
      value: cdktf.booleanToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReferenceToHclTerraform(struct!.reference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapToVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapToVariables = this._mapToVariables;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapToVariables = undefined;
      this._mount = undefined;
      this._mountPath = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapToVariables = value.mapToVariables;
      this._mount = value.mount;
      this._mountPath = value.mountPath;
      this._reference.internalValue = value.reference;
    }
  }

  // map_to_variables - computed: false, optional: true, required: false
  private _mapToVariables?: boolean | cdktf.IResolvable; 
  public get mapToVariables() {
    return this.getBooleanAttribute('map_to_variables');
  }
  public set mapToVariables(value: boolean | cdktf.IResolvable) {
    this._mapToVariables = value;
  }
  public resetMapToVariables() {
    this._mapToVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapToVariablesInput() {
    return this._mapToVariables;
  }

  // mount - computed: false, optional: true, required: false
  private _mount?: boolean | cdktf.IResolvable; 
  public get mount() {
    return this.getBooleanAttribute('mount');
  }
  public set mount(value: boolean | cdktf.IResolvable) {
    this._mount = value;
  }
  public resetMount() {
    this._mount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // reference - computed: false, optional: false, required: true
  private _reference = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReferenceOutputReference(this, "reference");
  public get reference() {
    return this._reference;
  }
  public putReference(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsReference) {
    this._reference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMaps[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsOutputReference {
    return new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReference {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#name DataK8STestsTestkubeIoTestExecutionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReferenceToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReferenceToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReference | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReference | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecrets {
  /**
  * whether we shoud map to variables from resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#map_to_variables DataK8STestsTestkubeIoTestExecutionV1Manifest#map_to_variables}
  */
  readonly mapToVariables?: boolean | cdktf.IResolvable;
  /**
  * whether we shoud mount resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#mount DataK8STestsTestkubeIoTestExecutionV1Manifest#mount}
  */
  readonly mount?: boolean | cdktf.IResolvable;
  /**
  * where we shoud mount resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#mount_path DataK8STestsTestkubeIoTestExecutionV1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#reference DataK8STestsTestkubeIoTestExecutionV1Manifest#reference}
  */
  readonly reference: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReference;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_to_variables: cdktf.booleanToTerraform(struct!.mapToVariables),
    mount: cdktf.booleanToTerraform(struct!.mount),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    reference: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReferenceToTerraform(struct!.reference),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_to_variables: {
      value: cdktf.booleanToHclTerraform(struct!.mapToVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount: {
      value: cdktf.booleanToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReferenceToHclTerraform(struct!.reference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapToVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapToVariables = this._mapToVariables;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapToVariables = undefined;
      this._mount = undefined;
      this._mountPath = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapToVariables = value.mapToVariables;
      this._mount = value.mount;
      this._mountPath = value.mountPath;
      this._reference.internalValue = value.reference;
    }
  }

  // map_to_variables - computed: false, optional: true, required: false
  private _mapToVariables?: boolean | cdktf.IResolvable; 
  public get mapToVariables() {
    return this.getBooleanAttribute('map_to_variables');
  }
  public set mapToVariables(value: boolean | cdktf.IResolvable) {
    this._mapToVariables = value;
  }
  public resetMapToVariables() {
    this._mapToVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapToVariablesInput() {
    return this._mapToVariables;
  }

  // mount - computed: false, optional: true, required: false
  private _mount?: boolean | cdktf.IResolvable; 
  public get mount() {
    return this.getBooleanAttribute('mount');
  }
  public set mount(value: boolean | cdktf.IResolvable) {
    this._mount = value;
  }
  public resetMount() {
    this._mount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // reference - computed: false, optional: false, required: true
  private _reference = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReferenceOutputReference(this, "reference");
  public get reference() {
    return this._reference;
  }
  public putReference(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsReference) {
    this._reference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsOutputReference {
    return new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#name DataK8STestsTestkubeIoTestExecutionV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecretsToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecretsToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecretsOutputReference {
    return new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContext {
  /**
  * Context value depending from its type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#context DataK8STestsTestkubeIoTestExecutionV1Manifest#context}
  */
  readonly context?: string;
  /**
  * One of possible context types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#type DataK8STestsTestkubeIoTestExecutionV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContextToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContextToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
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

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._type = value.type;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimits {
  /**
  * requested cpu units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#cpu DataK8STestsTestkubeIoTestExecutionV1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * requested memory units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#memory DataK8STestsTestkubeIoTestExecutionV1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequests {
  /**
  * requested cpu units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#cpu DataK8STestsTestkubeIoTestExecutionV1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * requested memory units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#memory DataK8STestsTestkubeIoTestExecutionV1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResources {
  /**
  * resource request specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#limits DataK8STestsTestkubeIoTestExecutionV1Manifest#limits}
  */
  readonly limits?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimits;
  /**
  * resource request specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#requests DataK8STestsTestkubeIoTestExecutionV1Manifest#requests}
  */
  readonly requests?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequests;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsToTerraform(struct!.limits),
    requests: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsToTerraform(struct!.requests),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimits",
    },
    requests: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequests",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
      this._requests.internalValue = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesRequests) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequest {
  /**
  * pod template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#pod_template DataK8STestsTestkubeIoTestExecutionV1Manifest#pod_template}
  */
  readonly podTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#pod_template_reference DataK8STestsTestkubeIoTestExecutionV1Manifest#pod_template_reference}
  */
  readonly podTemplateReference?: string;
  /**
  * pod resources request specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#resources DataK8STestsTestkubeIoTestExecutionV1Manifest#resources}
  */
  readonly resources?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResources;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_template: cdktf.stringToTerraform(struct!.podTemplate),
    pod_template_reference: cdktf.stringToTerraform(struct!.podTemplateReference),
    resources: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesToTerraform(struct!.resources),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_template: {
      value: cdktf.stringToHclTerraform(struct!.podTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.podTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTemplate = this._podTemplate;
    }
    if (this._podTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTemplateReference = this._podTemplateReference;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podTemplate = undefined;
      this._podTemplateReference = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podTemplate = value.podTemplate;
      this._podTemplateReference = value.podTemplateReference;
      this._resources.internalValue = value.resources;
    }
  }

  // pod_template - computed: false, optional: true, required: false
  private _podTemplate?: string; 
  public get podTemplate() {
    return this.getStringAttribute('pod_template');
  }
  public set podTemplate(value: string) {
    this._podTemplate = value;
  }
  public resetPodTemplate() {
    this._podTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTemplateInput() {
    return this._podTemplate;
  }

  // pod_template_reference - computed: false, optional: true, required: false
  private _podTemplateReference?: string; 
  public get podTemplateReference() {
    return this.getStringAttribute('pod_template_reference');
  }
  public set podTemplateReference(value: string) {
    this._podTemplateReference = value;
  }
  public resetPodTemplateReference() {
    this._podTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTemplateReferenceInput() {
    return this._podTemplateReference;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#key DataK8STestsTestkubeIoTestExecutionV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#name DataK8STestsTestkubeIoTestExecutionV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#optional DataK8STestsTestkubeIoTestExecutionV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#api_version DataK8STestsTestkubeIoTestExecutionV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#field_path DataK8STestsTestkubeIoTestExecutionV1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
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

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#container_name DataK8STestsTestkubeIoTestExecutionV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#divisor DataK8STestsTestkubeIoTestExecutionV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#resource DataK8STestsTestkubeIoTestExecutionV1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#key DataK8STestsTestkubeIoTestExecutionV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#name DataK8STestsTestkubeIoTestExecutionV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#optional DataK8STestsTestkubeIoTestExecutionV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#config_map_key_ref DataK8STestsTestkubeIoTestExecutionV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#field_ref DataK8STestsTestkubeIoTestExecutionV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#resource_field_ref DataK8STestsTestkubeIoTestExecutionV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#secret_key_ref DataK8STestsTestkubeIoTestExecutionV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariables {
  /**
  * variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#name DataK8STestsTestkubeIoTestExecutionV1Manifest#name}
  */
  readonly name?: string;
  /**
  * variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#type DataK8STestsTestkubeIoTestExecutionV1Manifest#type}
  */
  readonly type?: string;
  /**
  * variable string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#value DataK8STestsTestkubeIoTestExecutionV1Manifest#value}
  */
  readonly value?: string;
  /**
  * or load it from var source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#value_from DataK8STestsTestkubeIoTestExecutionV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFrom;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariables | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequest {
  /**
  * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#active_deadline_seconds DataK8STestsTestkubeIoTestExecutionV1Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * additional executor binary arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#args DataK8STestsTestkubeIoTestExecutionV1Manifest#args}
  */
  readonly args?: string[];
  /**
  * usage mode for arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#args_mode DataK8STestsTestkubeIoTestExecutionV1Manifest#args_mode}
  */
  readonly argsMode?: string;
  /**
  * artifact request body with test artifacts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#artifact_request DataK8STestsTestkubeIoTestExecutionV1Manifest#artifact_request}
  */
  readonly artifactRequest?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequest;
  /**
  * executor binary command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#command DataK8STestsTestkubeIoTestExecutionV1Manifest#command}
  */
  readonly command?: string[];
  /**
  * cron job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#cron_job_template DataK8STestsTestkubeIoTestExecutionV1Manifest#cron_job_template}
  */
  readonly cronJobTemplate?: string;
  /**
  * whether webhooks should be called on execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#disable_webhooks DataK8STestsTestkubeIoTestExecutionV1Manifest#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * config map references
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#env_config_maps DataK8STestsTestkubeIoTestExecutionV1Manifest#env_config_maps}
  */
  readonly envConfigMaps?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMaps[] | cdktf.IResolvable;
  /**
  * secret references
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#env_secrets DataK8STestsTestkubeIoTestExecutionV1Manifest#env_secrets}
  */
  readonly envSecrets?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecrets[] | cdktf.IResolvable;
  /**
  * Environment variables passed to executor. Deprecated: use Basic Variables instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#envs DataK8STestsTestkubeIoTestExecutionV1Manifest#envs}
  */
  readonly envs?: { [key: string]: string };
  /**
  * execute post run script before scraping (prebuilt executor only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#execute_post_run_script_before_scraping DataK8STestsTestkubeIoTestExecutionV1Manifest#execute_post_run_script_before_scraping}
  */
  readonly executePostRunScriptBeforeScraping?: boolean | cdktf.IResolvable;
  /**
  * test execution labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#execution_labels DataK8STestsTestkubeIoTestExecutionV1Manifest#execution_labels}
  */
  readonly executionLabels?: { [key: string]: string };
  /**
  * namespace for test execution (Pro edition only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#execution_namespace DataK8STestsTestkubeIoTestExecutionV1Manifest#execution_namespace}
  */
  readonly executionNamespace?: string;
  /**
  * http proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#http_proxy DataK8STestsTestkubeIoTestExecutionV1Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * https proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#https_proxy DataK8STestsTestkubeIoTestExecutionV1Manifest#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * container executor image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#image DataK8STestsTestkubeIoTestExecutionV1Manifest#image}
  */
  readonly image?: string;
  /**
  * container executor image pull secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#image_pull_secrets DataK8STestsTestkubeIoTestExecutionV1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#is_variables_file_uploaded DataK8STestsTestkubeIoTestExecutionV1Manifest#is_variables_file_uploaded}
  */
  readonly isVariablesFileUploaded?: boolean | cdktf.IResolvable;
  /**
  * job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#job_template DataK8STestsTestkubeIoTestExecutionV1Manifest#job_template}
  */
  readonly jobTemplate?: string;
  /**
  * test execution custom name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#name DataK8STestsTestkubeIoTestExecutionV1Manifest#name}
  */
  readonly name?: string;
  /**
  * test kubernetes namespace ('testkube' when not set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#namespace DataK8STestsTestkubeIoTestExecutionV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * negative test will fail the execution if it is a success and it will succeed if it is a failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#negative_test DataK8STestsTestkubeIoTestExecutionV1Manifest#negative_test}
  */
  readonly negativeTest?: boolean | cdktf.IResolvable;
  /**
  * test execution number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#number DataK8STestsTestkubeIoTestExecutionV1Manifest#number}
  */
  readonly number?: number;
  /**
  * script to run after test execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#post_run_script DataK8STestsTestkubeIoTestExecutionV1Manifest#post_run_script}
  */
  readonly postRunScript?: string;
  /**
  * script to run before test execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#pre_run_script DataK8STestsTestkubeIoTestExecutionV1Manifest#pre_run_script}
  */
  readonly preRunScript?: string;
  /**
  * running context for test or test suite execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#running_context DataK8STestsTestkubeIoTestExecutionV1Manifest#running_context}
  */
  readonly runningContext?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContext;
  /**
  * scraper template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#scraper_template DataK8STestsTestkubeIoTestExecutionV1Manifest#scraper_template}
  */
  readonly scraperTemplate?: string;
  /**
  * Execution variables passed to executor from secrets. Deprecated: use Secret Variables instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#secret_envs DataK8STestsTestkubeIoTestExecutionV1Manifest#secret_envs}
  */
  readonly secretEnvs?: { [key: string]: string };
  /**
  * pod request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#slave_pod_request DataK8STestsTestkubeIoTestExecutionV1Manifest#slave_pod_request}
  */
  readonly slavePodRequest?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequest;
  /**
  * run scripts using source command (container executor only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#source_scripts DataK8STestsTestkubeIoTestExecutionV1Manifest#source_scripts}
  */
  readonly sourceScripts?: boolean | cdktf.IResolvable;
  /**
  * whether to start execution sync or async
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#sync DataK8STestsTestkubeIoTestExecutionV1Manifest#sync}
  */
  readonly sync?: boolean | cdktf.IResolvable;
  /**
  * test secret uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#test_secret_uuid DataK8STestsTestkubeIoTestExecutionV1Manifest#test_secret_uuid}
  */
  readonly testSecretUuid?: string;
  /**
  * unique test suite name (CRD Test suite name), if it's run as a part of test suite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#test_suite_name DataK8STestsTestkubeIoTestExecutionV1Manifest#test_suite_name}
  */
  readonly testSuiteName?: string;
  /**
  * test suite secret uuid, if it's run as a part of test suite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#test_suite_secret_uuid DataK8STestsTestkubeIoTestExecutionV1Manifest#test_suite_secret_uuid}
  */
  readonly testSuiteSecretUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#variables DataK8STestsTestkubeIoTestExecutionV1Manifest#variables}
  */
  readonly variables?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariables;
  /**
  * variables file content - need to be in format for particular executor (e.g. postman envs file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#variables_file DataK8STestsTestkubeIoTestExecutionV1Manifest#variables_file}
  */
  readonly variablesFile?: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    args_mode: cdktf.stringToTerraform(struct!.argsMode),
    artifact_request: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequestToTerraform(struct!.artifactRequest),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    cron_job_template: cdktf.stringToTerraform(struct!.cronJobTemplate),
    disable_webhooks: cdktf.booleanToTerraform(struct!.disableWebhooks),
    env_config_maps: cdktf.listMapper(dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsToTerraform, false)(struct!.envConfigMaps),
    env_secrets: cdktf.listMapper(dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsToTerraform, false)(struct!.envSecrets),
    envs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envs),
    execute_post_run_script_before_scraping: cdktf.booleanToTerraform(struct!.executePostRunScriptBeforeScraping),
    execution_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.executionLabels),
    execution_namespace: cdktf.stringToTerraform(struct!.executionNamespace),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_secrets: cdktf.listMapper(dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    is_variables_file_uploaded: cdktf.booleanToTerraform(struct!.isVariablesFileUploaded),
    job_template: cdktf.stringToTerraform(struct!.jobTemplate),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    negative_test: cdktf.booleanToTerraform(struct!.negativeTest),
    number: cdktf.numberToTerraform(struct!.number),
    post_run_script: cdktf.stringToTerraform(struct!.postRunScript),
    pre_run_script: cdktf.stringToTerraform(struct!.preRunScript),
    running_context: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContextToTerraform(struct!.runningContext),
    scraper_template: cdktf.stringToTerraform(struct!.scraperTemplate),
    secret_envs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secretEnvs),
    slave_pod_request: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestToTerraform(struct!.slavePodRequest),
    source_scripts: cdktf.booleanToTerraform(struct!.sourceScripts),
    sync: cdktf.booleanToTerraform(struct!.sync),
    test_secret_uuid: cdktf.stringToTerraform(struct!.testSecretUuid),
    test_suite_name: cdktf.stringToTerraform(struct!.testSuiteName),
    test_suite_secret_uuid: cdktf.stringToTerraform(struct!.testSuiteSecretUuid),
    variables: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesToTerraform(struct!.variables),
    variables_file: cdktf.stringToTerraform(struct!.variablesFile),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.activeDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    args_mode: {
      value: cdktf.stringToHclTerraform(struct!.argsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifact_request: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequestToHclTerraform(struct!.artifactRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequest",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cron_job_template: {
      value: cdktf.stringToHclTerraform(struct!.cronJobTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_webhooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableWebhooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env_config_maps: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsToHclTerraform, false)(struct!.envConfigMaps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsList",
    },
    env_secrets: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsToHclTerraform, false)(struct!.envSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsList",
    },
    envs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    execute_post_run_script_before_scraping: {
      value: cdktf.booleanToHclTerraform(struct!.executePostRunScriptBeforeScraping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.executionLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    execution_namespace: {
      value: cdktf.stringToHclTerraform(struct!.executionNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecretsList",
    },
    is_variables_file_uploaded: {
      value: cdktf.booleanToHclTerraform(struct!.isVariablesFileUploaded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_template: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplate),
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
    negative_test: {
      value: cdktf.booleanToHclTerraform(struct!.negativeTest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_run_script: {
      value: cdktf.stringToHclTerraform(struct!.postRunScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_run_script: {
      value: cdktf.stringToHclTerraform(struct!.preRunScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    running_context: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContextToHclTerraform(struct!.runningContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContext",
    },
    scraper_template: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_envs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.secretEnvs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    slave_pod_request: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestToHclTerraform(struct!.slavePodRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequest",
    },
    source_scripts: {
      value: cdktf.booleanToHclTerraform(struct!.sourceScripts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync: {
      value: cdktf.booleanToHclTerraform(struct!.sync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    test_secret_uuid: {
      value: cdktf.stringToHclTerraform(struct!.testSecretUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_suite_name: {
      value: cdktf.stringToHclTerraform(struct!.testSuiteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_suite_secret_uuid: {
      value: cdktf.stringToHclTerraform(struct!.testSuiteSecretUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariables",
    },
    variables_file: {
      value: cdktf.stringToHclTerraform(struct!.variablesFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._argsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.argsMode = this._argsMode;
    }
    if (this._artifactRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactRequest = this._artifactRequest?.internalValue;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cronJobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplate = this._cronJobTemplate;
    }
    if (this._disableWebhooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWebhooks = this._disableWebhooks;
    }
    if (this._envConfigMaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envConfigMaps = this._envConfigMaps?.internalValue;
    }
    if (this._envSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envSecrets = this._envSecrets?.internalValue;
    }
    if (this._envs !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs;
    }
    if (this._executePostRunScriptBeforeScraping !== undefined) {
      hasAnyValues = true;
      internalValueResult.executePostRunScriptBeforeScraping = this._executePostRunScriptBeforeScraping;
    }
    if (this._executionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionLabels = this._executionLabels;
    }
    if (this._executionNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionNamespace = this._executionNamespace;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._isVariablesFileUploaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVariablesFileUploaded = this._isVariablesFileUploaded;
    }
    if (this._jobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplate = this._jobTemplate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._negativeTest !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeTest = this._negativeTest;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._postRunScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.postRunScript = this._postRunScript;
    }
    if (this._preRunScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preRunScript = this._preRunScript;
    }
    if (this._runningContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningContext = this._runningContext?.internalValue;
    }
    if (this._scraperTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplate = this._scraperTemplate;
    }
    if (this._secretEnvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnvs = this._secretEnvs;
    }
    if (this._slavePodRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slavePodRequest = this._slavePodRequest?.internalValue;
    }
    if (this._sourceScripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceScripts = this._sourceScripts;
    }
    if (this._sync !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync;
    }
    if (this._testSecretUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.testSecretUuid = this._testSecretUuid;
    }
    if (this._testSuiteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.testSuiteName = this._testSuiteName;
    }
    if (this._testSuiteSecretUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.testSuiteSecretUuid = this._testSuiteSecretUuid;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    if (this._variablesFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.variablesFile = this._variablesFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = undefined;
      this._args = undefined;
      this._argsMode = undefined;
      this._artifactRequest.internalValue = undefined;
      this._command = undefined;
      this._cronJobTemplate = undefined;
      this._disableWebhooks = undefined;
      this._envConfigMaps.internalValue = undefined;
      this._envSecrets.internalValue = undefined;
      this._envs = undefined;
      this._executePostRunScriptBeforeScraping = undefined;
      this._executionLabels = undefined;
      this._executionNamespace = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._image = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._isVariablesFileUploaded = undefined;
      this._jobTemplate = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._negativeTest = undefined;
      this._number = undefined;
      this._postRunScript = undefined;
      this._preRunScript = undefined;
      this._runningContext.internalValue = undefined;
      this._scraperTemplate = undefined;
      this._secretEnvs = undefined;
      this._slavePodRequest.internalValue = undefined;
      this._sourceScripts = undefined;
      this._sync = undefined;
      this._testSecretUuid = undefined;
      this._testSuiteName = undefined;
      this._testSuiteSecretUuid = undefined;
      this._variables.internalValue = undefined;
      this._variablesFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._args = value.args;
      this._argsMode = value.argsMode;
      this._artifactRequest.internalValue = value.artifactRequest;
      this._command = value.command;
      this._cronJobTemplate = value.cronJobTemplate;
      this._disableWebhooks = value.disableWebhooks;
      this._envConfigMaps.internalValue = value.envConfigMaps;
      this._envSecrets.internalValue = value.envSecrets;
      this._envs = value.envs;
      this._executePostRunScriptBeforeScraping = value.executePostRunScriptBeforeScraping;
      this._executionLabels = value.executionLabels;
      this._executionNamespace = value.executionNamespace;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._image = value.image;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._isVariablesFileUploaded = value.isVariablesFileUploaded;
      this._jobTemplate = value.jobTemplate;
      this._name = value.name;
      this._namespace = value.namespace;
      this._negativeTest = value.negativeTest;
      this._number = value.number;
      this._postRunScript = value.postRunScript;
      this._preRunScript = value.preRunScript;
      this._runningContext.internalValue = value.runningContext;
      this._scraperTemplate = value.scraperTemplate;
      this._secretEnvs = value.secretEnvs;
      this._slavePodRequest.internalValue = value.slavePodRequest;
      this._sourceScripts = value.sourceScripts;
      this._sync = value.sync;
      this._testSecretUuid = value.testSecretUuid;
      this._testSuiteName = value.testSuiteName;
      this._testSuiteSecretUuid = value.testSuiteSecretUuid;
      this._variables.internalValue = value.variables;
      this._variablesFile = value.variablesFile;
    }
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // args_mode - computed: false, optional: true, required: false
  private _argsMode?: string; 
  public get argsMode() {
    return this.getStringAttribute('args_mode');
  }
  public set argsMode(value: string) {
    this._argsMode = value;
  }
  public resetArgsMode() {
    this._argsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsModeInput() {
    return this._argsMode;
  }

  // artifact_request - computed: false, optional: true, required: false
  private _artifactRequest = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequestOutputReference(this, "artifact_request");
  public get artifactRequest() {
    return this._artifactRequest;
  }
  public putArtifactRequest(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestArtifactRequest) {
    this._artifactRequest.internalValue = value;
  }
  public resetArtifactRequest() {
    this._artifactRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactRequestInput() {
    return this._artifactRequest.internalValue;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // cron_job_template - computed: false, optional: true, required: false
  private _cronJobTemplate?: string; 
  public get cronJobTemplate() {
    return this.getStringAttribute('cron_job_template');
  }
  public set cronJobTemplate(value: string) {
    this._cronJobTemplate = value;
  }
  public resetCronJobTemplate() {
    this._cronJobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobTemplateInput() {
    return this._cronJobTemplate;
  }

  // disable_webhooks - computed: false, optional: true, required: false
  private _disableWebhooks?: boolean | cdktf.IResolvable; 
  public get disableWebhooks() {
    return this.getBooleanAttribute('disable_webhooks');
  }
  public set disableWebhooks(value: boolean | cdktf.IResolvable) {
    this._disableWebhooks = value;
  }
  public resetDisableWebhooks() {
    this._disableWebhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebhooksInput() {
    return this._disableWebhooks;
  }

  // env_config_maps - computed: false, optional: true, required: false
  private _envConfigMaps = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMapsList(this, "env_config_maps", false);
  public get envConfigMaps() {
    return this._envConfigMaps;
  }
  public putEnvConfigMaps(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvConfigMaps[] | cdktf.IResolvable) {
    this._envConfigMaps.internalValue = value;
  }
  public resetEnvConfigMaps() {
    this._envConfigMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envConfigMapsInput() {
    return this._envConfigMaps.internalValue;
  }

  // env_secrets - computed: false, optional: true, required: false
  private _envSecrets = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecretsList(this, "env_secrets", false);
  public get envSecrets() {
    return this._envSecrets;
  }
  public putEnvSecrets(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestEnvSecrets[] | cdktf.IResolvable) {
    this._envSecrets.internalValue = value;
  }
  public resetEnvSecrets() {
    this._envSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envSecretsInput() {
    return this._envSecrets.internalValue;
  }

  // envs - computed: false, optional: true, required: false
  private _envs?: { [key: string]: string }; 
  public get envs() {
    return this.getStringMapAttribute('envs');
  }
  public set envs(value: { [key: string]: string }) {
    this._envs = value;
  }
  public resetEnvs() {
    this._envs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs;
  }

  // execute_post_run_script_before_scraping - computed: false, optional: true, required: false
  private _executePostRunScriptBeforeScraping?: boolean | cdktf.IResolvable; 
  public get executePostRunScriptBeforeScraping() {
    return this.getBooleanAttribute('execute_post_run_script_before_scraping');
  }
  public set executePostRunScriptBeforeScraping(value: boolean | cdktf.IResolvable) {
    this._executePostRunScriptBeforeScraping = value;
  }
  public resetExecutePostRunScriptBeforeScraping() {
    this._executePostRunScriptBeforeScraping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executePostRunScriptBeforeScrapingInput() {
    return this._executePostRunScriptBeforeScraping;
  }

  // execution_labels - computed: false, optional: true, required: false
  private _executionLabels?: { [key: string]: string }; 
  public get executionLabels() {
    return this.getStringMapAttribute('execution_labels');
  }
  public set executionLabels(value: { [key: string]: string }) {
    this._executionLabels = value;
  }
  public resetExecutionLabels() {
    this._executionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLabelsInput() {
    return this._executionLabels;
  }

  // execution_namespace - computed: false, optional: true, required: false
  private _executionNamespace?: string; 
  public get executionNamespace() {
    return this.getStringAttribute('execution_namespace');
  }
  public set executionNamespace(value: string) {
    this._executionNamespace = value;
  }
  public resetExecutionNamespace() {
    this._executionNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionNamespaceInput() {
    return this._executionNamespace;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
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

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // is_variables_file_uploaded - computed: false, optional: true, required: false
  private _isVariablesFileUploaded?: boolean | cdktf.IResolvable; 
  public get isVariablesFileUploaded() {
    return this.getBooleanAttribute('is_variables_file_uploaded');
  }
  public set isVariablesFileUploaded(value: boolean | cdktf.IResolvable) {
    this._isVariablesFileUploaded = value;
  }
  public resetIsVariablesFileUploaded() {
    this._isVariablesFileUploaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVariablesFileUploadedInput() {
    return this._isVariablesFileUploaded;
  }

  // job_template - computed: false, optional: true, required: false
  private _jobTemplate?: string; 
  public get jobTemplate() {
    return this.getStringAttribute('job_template');
  }
  public set jobTemplate(value: string) {
    this._jobTemplate = value;
  }
  public resetJobTemplate() {
    this._jobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateInput() {
    return this._jobTemplate;
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

  // negative_test - computed: false, optional: true, required: false
  private _negativeTest?: boolean | cdktf.IResolvable; 
  public get negativeTest() {
    return this.getBooleanAttribute('negative_test');
  }
  public set negativeTest(value: boolean | cdktf.IResolvable) {
    this._negativeTest = value;
  }
  public resetNegativeTest() {
    this._negativeTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTestInput() {
    return this._negativeTest;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // post_run_script - computed: false, optional: true, required: false
  private _postRunScript?: string; 
  public get postRunScript() {
    return this.getStringAttribute('post_run_script');
  }
  public set postRunScript(value: string) {
    this._postRunScript = value;
  }
  public resetPostRunScript() {
    this._postRunScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRunScriptInput() {
    return this._postRunScript;
  }

  // pre_run_script - computed: false, optional: true, required: false
  private _preRunScript?: string; 
  public get preRunScript() {
    return this.getStringAttribute('pre_run_script');
  }
  public set preRunScript(value: string) {
    this._preRunScript = value;
  }
  public resetPreRunScript() {
    this._preRunScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preRunScriptInput() {
    return this._preRunScript;
  }

  // running_context - computed: false, optional: true, required: false
  private _runningContext = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContextOutputReference(this, "running_context");
  public get runningContext() {
    return this._runningContext;
  }
  public putRunningContext(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestRunningContext) {
    this._runningContext.internalValue = value;
  }
  public resetRunningContext() {
    this._runningContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningContextInput() {
    return this._runningContext.internalValue;
  }

  // scraper_template - computed: false, optional: true, required: false
  private _scraperTemplate?: string; 
  public get scraperTemplate() {
    return this.getStringAttribute('scraper_template');
  }
  public set scraperTemplate(value: string) {
    this._scraperTemplate = value;
  }
  public resetScraperTemplate() {
    this._scraperTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperTemplateInput() {
    return this._scraperTemplate;
  }

  // secret_envs - computed: false, optional: true, required: false
  private _secretEnvs?: { [key: string]: string }; 
  public get secretEnvs() {
    return this.getStringMapAttribute('secret_envs');
  }
  public set secretEnvs(value: { [key: string]: string }) {
    this._secretEnvs = value;
  }
  public resetSecretEnvs() {
    this._secretEnvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvsInput() {
    return this._secretEnvs;
  }

  // slave_pod_request - computed: false, optional: true, required: false
  private _slavePodRequest = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequestOutputReference(this, "slave_pod_request");
  public get slavePodRequest() {
    return this._slavePodRequest;
  }
  public putSlavePodRequest(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestSlavePodRequest) {
    this._slavePodRequest.internalValue = value;
  }
  public resetSlavePodRequest() {
    this._slavePodRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slavePodRequestInput() {
    return this._slavePodRequest.internalValue;
  }

  // source_scripts - computed: false, optional: true, required: false
  private _sourceScripts?: boolean | cdktf.IResolvable; 
  public get sourceScripts() {
    return this.getBooleanAttribute('source_scripts');
  }
  public set sourceScripts(value: boolean | cdktf.IResolvable) {
    this._sourceScripts = value;
  }
  public resetSourceScripts() {
    this._sourceScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceScriptsInput() {
    return this._sourceScripts;
  }

  // sync - computed: false, optional: true, required: false
  private _sync?: boolean | cdktf.IResolvable; 
  public get sync() {
    return this.getBooleanAttribute('sync');
  }
  public set sync(value: boolean | cdktf.IResolvable) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
  }

  // test_secret_uuid - computed: false, optional: true, required: false
  private _testSecretUuid?: string; 
  public get testSecretUuid() {
    return this.getStringAttribute('test_secret_uuid');
  }
  public set testSecretUuid(value: string) {
    this._testSecretUuid = value;
  }
  public resetTestSecretUuid() {
    this._testSecretUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testSecretUuidInput() {
    return this._testSecretUuid;
  }

  // test_suite_name - computed: false, optional: true, required: false
  private _testSuiteName?: string; 
  public get testSuiteName() {
    return this.getStringAttribute('test_suite_name');
  }
  public set testSuiteName(value: string) {
    this._testSuiteName = value;
  }
  public resetTestSuiteName() {
    this._testSuiteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testSuiteNameInput() {
    return this._testSuiteName;
  }

  // test_suite_secret_uuid - computed: false, optional: true, required: false
  private _testSuiteSecretUuid?: string; 
  public get testSuiteSecretUuid() {
    return this.getStringAttribute('test_suite_secret_uuid');
  }
  public set testSuiteSecretUuid(value: string) {
    this._testSuiteSecretUuid = value;
  }
  public resetTestSuiteSecretUuid() {
    this._testSuiteSecretUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testSuiteSecretUuidInput() {
    return this._testSuiteSecretUuid;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // variables_file - computed: false, optional: true, required: false
  private _variablesFile?: string; 
  public get variablesFile() {
    return this.getStringAttribute('variables_file');
  }
  public set variablesFile(value: string) {
    this._variablesFile = value;
  }
  public resetVariablesFile() {
    this._variablesFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesFileInput() {
    return this._variablesFile;
  }
}
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpecTest {
  /**
  * object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#name DataK8STestsTestkubeIoTestExecutionV1Manifest#name}
  */
  readonly name: string;
  /**
  * object kubernetes namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#namespace DataK8STestsTestkubeIoTestExecutionV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecTestToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecTestToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecTest | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecTestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpecTest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecTest | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestExecutionV1ManifestSpec {
  /**
  * test execution request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#execution_request DataK8STestsTestkubeIoTestExecutionV1Manifest#execution_request}
  */
  readonly executionRequest?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#test DataK8STestsTestkubeIoTestExecutionV1Manifest#test}
  */
  readonly test: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecTest;
}

export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecToTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_request: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestToTerraform(struct!.executionRequest),
    test: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecTestToTerraform(struct!.test),
  }
}


export function dataK8STestsTestkubeIoTestExecutionV1ManifestSpecToHclTerraform(struct?: DataK8STestsTestkubeIoTestExecutionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_request: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestToHclTerraform(struct!.executionRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequest",
    },
    test: {
      value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecTestToHclTerraform(struct!.test),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpecTest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestExecutionV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestExecutionV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRequest = this._executionRequest?.internalValue;
    }
    if (this._test?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionRequest.internalValue = undefined;
      this._test.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionRequest.internalValue = value.executionRequest;
      this._test.internalValue = value.test;
    }
  }

  // execution_request - computed: false, optional: true, required: false
  private _executionRequest = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequestOutputReference(this, "execution_request");
  public get executionRequest() {
    return this._executionRequest;
  }
  public putExecutionRequest(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecExecutionRequest) {
    this._executionRequest.internalValue = value;
  }
  public resetExecutionRequest() {
    this._executionRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRequestInput() {
    return this._executionRequest.internalValue;
  }

  // test - computed: false, optional: false, required: true
  private _test = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecTestOutputReference(this, "test");
  public get test() {
    return this._test;
  }
  public putTest(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpecTest) {
    this._test.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest k8s_tests_testkube_io_test_execution_v1_manifest}
*/
export class DataK8STestsTestkubeIoTestExecutionV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tests_testkube_io_test_execution_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STestsTestkubeIoTestExecutionV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STestsTestkubeIoTestExecutionV1Manifest to import
  * @param importFromId The id of the existing DataK8STestsTestkubeIoTestExecutionV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STestsTestkubeIoTestExecutionV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tests_testkube_io_test_execution_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/tests_testkube_io_test_execution_v1_manifest k8s_tests_testkube_io_test_execution_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STestsTestkubeIoTestExecutionV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STestsTestkubeIoTestExecutionV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tests_testkube_io_test_execution_v1_manifest',
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
  private _metadata = new DataK8STestsTestkubeIoTestExecutionV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STestsTestkubeIoTestExecutionV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STestsTestkubeIoTestExecutionV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STestsTestkubeIoTestExecutionV1ManifestSpec) {
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
      metadata: dataK8STestsTestkubeIoTestExecutionV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STestsTestkubeIoTestExecutionV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestMetadata",
      },
      spec: {
        value: dataK8STestsTestkubeIoTestExecutionV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestExecutionV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
