// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STestsTestkubeIoTestSourceV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#metadata DataK8STestsTestkubeIoTestSourceV1Manifest#metadata}
  */
  readonly metadata: DataK8STestsTestkubeIoTestSourceV1ManifestMetadata;
  /**
  * TestSourceSpec defines the desired state of TestSource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#spec DataK8STestsTestkubeIoTestSourceV1Manifest#spec}
  */
  readonly spec?: DataK8STestsTestkubeIoTestSourceV1ManifestSpec;
}
export interface DataK8STestsTestkubeIoTestSourceV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#annotations DataK8STestsTestkubeIoTestSourceV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#labels DataK8STestsTestkubeIoTestSourceV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#name DataK8STestsTestkubeIoTestSourceV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#namespace DataK8STestsTestkubeIoTestSourceV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STestsTestkubeIoTestSourceV1ManifestMetadataToTerraform(struct?: DataK8STestsTestkubeIoTestSourceV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestSourceV1ManifestMetadataToHclTerraform(struct?: DataK8STestsTestkubeIoTestSourceV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSourceV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSourceV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSourceV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecret {
  /**
  * object key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#key DataK8STestsTestkubeIoTestSourceV1Manifest#key}
  */
  readonly key: string;
  /**
  * object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#name DataK8STestsTestkubeIoTestSourceV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecretToTerraform(struct?: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecretToHclTerraform(struct?: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecret | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecret | cdktf.IResolvable | undefined) {
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
}
export interface DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecret {
  /**
  * object key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#key DataK8STestsTestkubeIoTestSourceV1Manifest#key}
  */
  readonly key: string;
  /**
  * object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#name DataK8STestsTestkubeIoTestSourceV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecretToTerraform(struct?: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecretToHclTerraform(struct?: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecret | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecret | cdktf.IResolvable | undefined) {
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
}
export interface DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepository {
  /**
  * auth type for git requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#auth_type DataK8STestsTestkubeIoTestSourceV1Manifest#auth_type}
  */
  readonly authType?: string;
  /**
  * branch/tag name for checkout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#branch DataK8STestsTestkubeIoTestSourceV1Manifest#branch}
  */
  readonly branch?: string;
  /**
  * git auth certificate secret for private repositories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#certificate_secret DataK8STestsTestkubeIoTestSourceV1Manifest#certificate_secret}
  */
  readonly certificateSecret?: string;
  /**
  * commit id (sha) for checkout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#commit DataK8STestsTestkubeIoTestSourceV1Manifest#commit}
  */
  readonly commit?: string;
  /**
  * If specified, does a sparse checkout of the repository at the given path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#path DataK8STestsTestkubeIoTestSourceV1Manifest#path}
  */
  readonly path?: string;
  /**
  * SecretRef is the Testkube internal reference for secret storage in Kubernetes secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#token_secret DataK8STestsTestkubeIoTestSourceV1Manifest#token_secret}
  */
  readonly tokenSecret?: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecret;
  /**
  * VCS repository type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#type DataK8STestsTestkubeIoTestSourceV1Manifest#type}
  */
  readonly type: string;
  /**
  * uri of content file or git directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#uri DataK8STestsTestkubeIoTestSourceV1Manifest#uri}
  */
  readonly uri: string;
  /**
  * SecretRef is the Testkube internal reference for secret storage in Kubernetes secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#username_secret DataK8STestsTestkubeIoTestSourceV1Manifest#username_secret}
  */
  readonly usernameSecret?: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecret;
  /**
  * if provided we checkout the whole repository and run test from this directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#working_dir DataK8STestsTestkubeIoTestSourceV1Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryToTerraform(struct?: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    branch: cdktf.stringToTerraform(struct!.branch),
    certificate_secret: cdktf.stringToTerraform(struct!.certificateSecret),
    commit: cdktf.stringToTerraform(struct!.commit),
    path: cdktf.stringToTerraform(struct!.path),
    token_secret: dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecretToTerraform(struct!.tokenSecret),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
    username_secret: dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecretToTerraform(struct!.usernameSecret),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryToHclTerraform(struct?: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_secret: {
      value: cdktf.stringToHclTerraform(struct!.certificateSecret),
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
    token_secret: {
      value: dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecretToHclTerraform(struct!.tokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecret",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_secret: {
      value: dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecretToHclTerraform(struct!.usernameSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecret",
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

export class DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._certificateSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecret = this._certificateSecret;
    }
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._tokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecret = this._tokenSecret?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._usernameSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameSecret = this._usernameSecret?.internalValue;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._branch = undefined;
      this._certificateSecret = undefined;
      this._commit = undefined;
      this._path = undefined;
      this._tokenSecret.internalValue = undefined;
      this._type = undefined;
      this._uri = undefined;
      this._usernameSecret.internalValue = undefined;
      this._workingDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._branch = value.branch;
      this._certificateSecret = value.certificateSecret;
      this._commit = value.commit;
      this._path = value.path;
      this._tokenSecret.internalValue = value.tokenSecret;
      this._type = value.type;
      this._uri = value.uri;
      this._usernameSecret.internalValue = value.usernameSecret;
      this._workingDir = value.workingDir;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // certificate_secret - computed: false, optional: true, required: false
  private _certificateSecret?: string; 
  public get certificateSecret() {
    return this.getStringAttribute('certificate_secret');
  }
  public set certificateSecret(value: string) {
    this._certificateSecret = value;
  }
  public resetCertificateSecret() {
    this._certificateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretInput() {
    return this._certificateSecret;
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

  // token_secret - computed: false, optional: true, required: false
  private _tokenSecret = new DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecretOutputReference(this, "token_secret");
  public get tokenSecret() {
    return this._tokenSecret;
  }
  public putTokenSecret(value: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryTokenSecret) {
    this._tokenSecret.internalValue = value;
  }
  public resetTokenSecret() {
    this._tokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretInput() {
    return this._tokenSecret.internalValue;
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

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // username_secret - computed: false, optional: true, required: false
  private _usernameSecret = new DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecretOutputReference(this, "username_secret");
  public get usernameSecret() {
    return this._usernameSecret;
  }
  public putUsernameSecret(value: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryUsernameSecret) {
    this._usernameSecret.internalValue = value;
  }
  public resetUsernameSecret() {
    this._usernameSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameSecretInput() {
    return this._usernameSecret.internalValue;
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
export interface DataK8STestsTestkubeIoTestSourceV1ManifestSpec {
  /**
  * test content body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#data DataK8STestsTestkubeIoTestSourceV1Manifest#data}
  */
  readonly data?: string;
  /**
  * repository of test content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#repository DataK8STestsTestkubeIoTestSourceV1Manifest#repository}
  */
  readonly repository?: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepository;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#type DataK8STestsTestkubeIoTestSourceV1Manifest#type}
  */
  readonly type?: string;
  /**
  * uri of test content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#uri DataK8STestsTestkubeIoTestSourceV1Manifest#uri}
  */
  readonly uri?: string;
}

export function dataK8STestsTestkubeIoTestSourceV1ManifestSpecToTerraform(struct?: DataK8STestsTestkubeIoTestSourceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    repository: dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryToTerraform(struct!.repository),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8STestsTestkubeIoTestSourceV1ManifestSpecToHclTerraform(struct?: DataK8STestsTestkubeIoTestSourceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: dataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryToHclTerraform(struct!.repository),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepository",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestSourceV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestSourceV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._repository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestSourceV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._repository.internalValue = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._repository.internalValue = value.repository;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // repository - computed: false, optional: true, required: false
  private _repository = new DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: DataK8STestsTestkubeIoTestSourceV1ManifestSpecRepository) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest k8s_tests_testkube_io_test_source_v1_manifest}
*/
export class DataK8STestsTestkubeIoTestSourceV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tests_testkube_io_test_source_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STestsTestkubeIoTestSourceV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STestsTestkubeIoTestSourceV1Manifest to import
  * @param importFromId The id of the existing DataK8STestsTestkubeIoTestSourceV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STestsTestkubeIoTestSourceV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tests_testkube_io_test_source_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/tests_testkube_io_test_source_v1_manifest k8s_tests_testkube_io_test_source_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STestsTestkubeIoTestSourceV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STestsTestkubeIoTestSourceV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tests_testkube_io_test_source_v1_manifest',
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
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8STestsTestkubeIoTestSourceV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STestsTestkubeIoTestSourceV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STestsTestkubeIoTestSourceV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STestsTestkubeIoTestSourceV1ManifestSpec) {
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
      metadata: dataK8STestsTestkubeIoTestSourceV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STestsTestkubeIoTestSourceV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STestsTestkubeIoTestSourceV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestSourceV1ManifestMetadata",
      },
      spec: {
        value: dataK8STestsTestkubeIoTestSourceV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestSourceV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
