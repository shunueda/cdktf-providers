// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#metadata DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#metadata}
  */
  readonly metadata: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadata;
  /**
  * TestSuiteExecutionSpec defines the desired state of TestSuiteExecution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#spec DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#spec}
  */
  readonly spec?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpec;
}
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#annotations DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#labels DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#name DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#namespace DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadataToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadataToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepository {
  /**
  * branch/tag name for checkout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#branch DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#branch}
  */
  readonly branch?: string;
  /**
  * commit id (sha) for checkout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#commit DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#commit}
  */
  readonly commit?: string;
  /**
  * if needed we can checkout particular path (dir or file) in case of BIG/mono repositories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#path DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#path}
  */
  readonly path?: string;
  /**
  * if provided we checkout the whole repository and run test from this directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#working_dir DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepositoryToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    commit: cdktf.stringToTerraform(struct!.commit),
    path: cdktf.stringToTerraform(struct!.path),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepositoryToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepository | cdktf.IResolvable): any {
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
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
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
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._commit = undefined;
      this._path = undefined;
      this._workingDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._commit = value.commit;
      this._path = value.path;
      this._workingDir = value.workingDir;
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

  // commit - computed: false, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
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

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequest {
  /**
  * repository parameters for tests in git repositories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#repository DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#repository}
  */
  readonly repository?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepository;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepositoryToTerraform(struct!.repository),
  }
}


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepositoryToHclTerraform(struct!.repository),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepository",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository.internalValue = value.repository;
    }
  }

  // repository - computed: false, optional: true, required: false
  private _repository = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestRepository) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContext {
  /**
  * Context value depending from its type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#context DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#context}
  */
  readonly context?: string;
  /**
  * One of possible context types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#type DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContextToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContextToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContext | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContext | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#key DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#name DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#optional DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#api_version DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#field_path DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#container_name DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#divisor DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#resource DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#key DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#name DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#optional DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#config_map_key_ref DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#field_ref DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#resource_field_ref DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#secret_key_ref DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef) {
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
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariables {
  /**
  * variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#name DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#name}
  */
  readonly name?: string;
  /**
  * variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#type DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#type}
  */
  readonly type?: string;
  /**
  * variable string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#value DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#value}
  */
  readonly value?: string;
  /**
  * or load it from var source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#value_from DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFrom;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariables | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariables | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesValueFrom) {
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
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequest {
  /**
  * number of tests run in parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#concurrency_level DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#concurrency_level}
  */
  readonly concurrencyLevel?: number;
  /**
  * test content request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#content_request DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#content_request}
  */
  readonly contentRequest?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequest;
  /**
  * cron job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#cron_job_template DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#cron_job_template}
  */
  readonly cronJobTemplate?: string;
  /**
  * whether webhooks should be disabled for this execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#disable_webhooks DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * execution labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#execution_labels DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#execution_labels}
  */
  readonly executionLabels?: { [key: string]: string };
  /**
  * http proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#http_proxy DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * https proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#https_proxy DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * test suite labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#labels DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * test execution custom name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#name DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#name}
  */
  readonly name?: string;
  /**
  * test kubernetes namespace ('testkube' when not set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#namespace DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * test suite execution number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#number DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#number}
  */
  readonly number?: number;
  /**
  * running context for test or test suite execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#running_context DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#running_context}
  */
  readonly runningContext?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContext;
  /**
  * secret uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#secret_uuid DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#secret_uuid}
  */
  readonly secretUuid?: string;
  /**
  * whether to start execution sync or async
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#sync DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#sync}
  */
  readonly sync?: boolean | cdktf.IResolvable;
  /**
  * test suite execution name started the test suite execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#test_suite_execution_name DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#test_suite_execution_name}
  */
  readonly testSuiteExecutionName?: string;
  /**
  * duration in seconds the test suite may be active, until its stopped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#timeout DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#variables DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#variables}
  */
  readonly variables?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariables;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency_level: cdktf.numberToTerraform(struct!.concurrencyLevel),
    content_request: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestToTerraform(struct!.contentRequest),
    cron_job_template: cdktf.stringToTerraform(struct!.cronJobTemplate),
    disable_webhooks: cdktf.booleanToTerraform(struct!.disableWebhooks),
    execution_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.executionLabels),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    number: cdktf.numberToTerraform(struct!.number),
    running_context: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContextToTerraform(struct!.runningContext),
    secret_uuid: cdktf.stringToTerraform(struct!.secretUuid),
    sync: cdktf.booleanToTerraform(struct!.sync),
    test_suite_execution_name: cdktf.stringToTerraform(struct!.testSuiteExecutionName),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    variables: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesToTerraform(struct!.variables),
  }
}


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency_level: {
      value: cdktf.numberToHclTerraform(struct!.concurrencyLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_request: {
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestToHclTerraform(struct!.contentRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequest",
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
    execution_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.executionLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_context: {
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContextToHclTerraform(struct!.runningContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContext",
    },
    secret_uuid: {
      value: cdktf.stringToHclTerraform(struct!.secretUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync: {
      value: cdktf.booleanToHclTerraform(struct!.sync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    test_suite_execution_name: {
      value: cdktf.stringToHclTerraform(struct!.testSuiteExecutionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    variables: {
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrencyLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyLevel = this._concurrencyLevel;
    }
    if (this._contentRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRequest = this._contentRequest?.internalValue;
    }
    if (this._cronJobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplate = this._cronJobTemplate;
    }
    if (this._disableWebhooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWebhooks = this._disableWebhooks;
    }
    if (this._executionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionLabels = this._executionLabels;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
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
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._runningContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningContext = this._runningContext?.internalValue;
    }
    if (this._secretUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUuid = this._secretUuid;
    }
    if (this._sync !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync;
    }
    if (this._testSuiteExecutionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.testSuiteExecutionName = this._testSuiteExecutionName;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrencyLevel = undefined;
      this._contentRequest.internalValue = undefined;
      this._cronJobTemplate = undefined;
      this._disableWebhooks = undefined;
      this._executionLabels = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._number = undefined;
      this._runningContext.internalValue = undefined;
      this._secretUuid = undefined;
      this._sync = undefined;
      this._testSuiteExecutionName = undefined;
      this._timeout = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrencyLevel = value.concurrencyLevel;
      this._contentRequest.internalValue = value.contentRequest;
      this._cronJobTemplate = value.cronJobTemplate;
      this._disableWebhooks = value.disableWebhooks;
      this._executionLabels = value.executionLabels;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
      this._number = value.number;
      this._runningContext.internalValue = value.runningContext;
      this._secretUuid = value.secretUuid;
      this._sync = value.sync;
      this._testSuiteExecutionName = value.testSuiteExecutionName;
      this._timeout = value.timeout;
      this._variables.internalValue = value.variables;
    }
  }

  // concurrency_level - computed: false, optional: true, required: false
  private _concurrencyLevel?: number; 
  public get concurrencyLevel() {
    return this.getNumberAttribute('concurrency_level');
  }
  public set concurrencyLevel(value: number) {
    this._concurrencyLevel = value;
  }
  public resetConcurrencyLevel() {
    this._concurrencyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyLevelInput() {
    return this._concurrencyLevel;
  }

  // content_request - computed: false, optional: true, required: false
  private _contentRequest = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequestOutputReference(this, "content_request");
  public get contentRequest() {
    return this._contentRequest;
  }
  public putContentRequest(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestContentRequest) {
    this._contentRequest.internalValue = value;
  }
  public resetContentRequest() {
    this._contentRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRequestInput() {
    return this._contentRequest.internalValue;
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

  // running_context - computed: false, optional: true, required: false
  private _runningContext = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContextOutputReference(this, "running_context");
  public get runningContext() {
    return this._runningContext;
  }
  public putRunningContext(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestRunningContext) {
    this._runningContext.internalValue = value;
  }
  public resetRunningContext() {
    this._runningContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningContextInput() {
    return this._runningContext.internalValue;
  }

  // secret_uuid - computed: false, optional: true, required: false
  private _secretUuid?: string; 
  public get secretUuid() {
    return this.getStringAttribute('secret_uuid');
  }
  public set secretUuid(value: string) {
    this._secretUuid = value;
  }
  public resetSecretUuid() {
    this._secretUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUuidInput() {
    return this._secretUuid;
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

  // test_suite_execution_name - computed: false, optional: true, required: false
  private _testSuiteExecutionName?: string; 
  public get testSuiteExecutionName() {
    return this.getStringAttribute('test_suite_execution_name');
  }
  public set testSuiteExecutionName(value: string) {
    this._testSuiteExecutionName = value;
  }
  public resetTestSuiteExecutionName() {
    this._testSuiteExecutionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testSuiteExecutionNameInput() {
    return this._testSuiteExecutionName;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuite {
  /**
  * object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#name DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#name}
  */
  readonly name: string;
  /**
  * object kubernetes namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#namespace DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuiteToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuiteToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuite | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuite | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpec {
  /**
  * test suite execution request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#execution_request DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#execution_request}
  */
  readonly executionRequest?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#test_suite DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest#test_suite}
  */
  readonly testSuite: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuite;
}

export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecToTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_request: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestToTerraform(struct!.executionRequest),
    test_suite: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuiteToTerraform(struct!.testSuite),
  }
}


export function dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecToHclTerraform(struct?: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_request: {
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestToHclTerraform(struct!.executionRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequest",
    },
    test_suite: {
      value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuiteToHclTerraform(struct!.testSuite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuite",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRequest = this._executionRequest?.internalValue;
    }
    if (this._testSuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testSuite = this._testSuite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionRequest.internalValue = undefined;
      this._testSuite.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionRequest.internalValue = value.executionRequest;
      this._testSuite.internalValue = value.testSuite;
    }
  }

  // execution_request - computed: false, optional: true, required: false
  private _executionRequest = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequestOutputReference(this, "execution_request");
  public get executionRequest() {
    return this._executionRequest;
  }
  public putExecutionRequest(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecExecutionRequest) {
    this._executionRequest.internalValue = value;
  }
  public resetExecutionRequest() {
    this._executionRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRequestInput() {
    return this._executionRequest.internalValue;
  }

  // test_suite - computed: false, optional: false, required: true
  private _testSuite = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuiteOutputReference(this, "test_suite");
  public get testSuite() {
    return this._testSuite;
  }
  public putTestSuite(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecTestSuite) {
    this._testSuite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testSuiteInput() {
    return this._testSuite.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest k8s_tests_testkube_io_test_suite_execution_v1_manifest}
*/
export class DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tests_testkube_io_test_suite_execution_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest to import
  * @param importFromId The id of the existing DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STestsTestkubeIoTestSuiteExecutionV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tests_testkube_io_test_suite_execution_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/tests_testkube_io_test_suite_execution_v1_manifest k8s_tests_testkube_io_test_suite_execution_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tests_testkube_io_test_suite_execution_v1_manifest',
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
  private _metadata = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpec) {
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
      metadata: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestMetadata",
      },
      spec: {
        value: dataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestSuiteExecutionV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
