// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STestsTestkubeIoTestV3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#metadata DataK8STestsTestkubeIoTestV3Manifest#metadata}
  */
  readonly metadata: DataK8STestsTestkubeIoTestV3ManifestMetadata;
  /**
  * TestSpec defines the desired state of Test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#spec DataK8STestsTestkubeIoTestV3Manifest#spec}
  */
  readonly spec?: DataK8STestsTestkubeIoTestV3ManifestSpec;
}
export interface DataK8STestsTestkubeIoTestV3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#annotations DataK8STestsTestkubeIoTestV3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#labels DataK8STestsTestkubeIoTestV3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#namespace DataK8STestsTestkubeIoTestV3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestMetadataToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestV3ManifestMetadataToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecret {
  /**
  * object key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#key DataK8STestsTestkubeIoTestV3Manifest#key}
  */
  readonly key: string;
  /**
  * object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecretToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecretToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecret | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecret {
  /**
  * object key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#key DataK8STestsTestkubeIoTestV3Manifest#key}
  */
  readonly key: string;
  /**
  * object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecretToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecretToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecret | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecContentRepository {
  /**
  * auth type for git requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#auth_type DataK8STestsTestkubeIoTestV3Manifest#auth_type}
  */
  readonly authType?: string;
  /**
  * branch/tag name for checkout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#branch DataK8STestsTestkubeIoTestV3Manifest#branch}
  */
  readonly branch?: string;
  /**
  * git auth certificate secret for private repositories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#certificate_secret DataK8STestsTestkubeIoTestV3Manifest#certificate_secret}
  */
  readonly certificateSecret?: string;
  /**
  * commit id (sha) for checkout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#commit DataK8STestsTestkubeIoTestV3Manifest#commit}
  */
  readonly commit?: string;
  /**
  * if needed we can checkout particular path (dir or file) in case of BIG/mono repositories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#path DataK8STestsTestkubeIoTestV3Manifest#path}
  */
  readonly path?: string;
  /**
  * SecretRef is the Testkube internal reference for secret storage in Kubernetes secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#token_secret DataK8STestsTestkubeIoTestV3Manifest#token_secret}
  */
  readonly tokenSecret?: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecret;
  /**
  * VCS repository type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#type DataK8STestsTestkubeIoTestV3Manifest#type}
  */
  readonly type?: string;
  /**
  * uri of content file or git directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#uri DataK8STestsTestkubeIoTestV3Manifest#uri}
  */
  readonly uri?: string;
  /**
  * SecretRef is the Testkube internal reference for secret storage in Kubernetes secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#username_secret DataK8STestsTestkubeIoTestV3Manifest#username_secret}
  */
  readonly usernameSecret?: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecret;
  /**
  * if provided we checkout the whole repository and run test from this directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#working_dir DataK8STestsTestkubeIoTestV3Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepository | cdktf.IResolvable): any {
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
    token_secret: dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecretToTerraform(struct!.tokenSecret),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
    username_secret: dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecretToTerraform(struct!.usernameSecret),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepository | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecretToHclTerraform(struct!.tokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecret",
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
      value: dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecretToHclTerraform(struct!.usernameSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecret",
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecContentRepository | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepository | cdktf.IResolvable | undefined) {
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
  private _tokenSecret = new DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecretOutputReference(this, "token_secret");
  public get tokenSecret() {
    return this._tokenSecret;
  }
  public putTokenSecret(value: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryTokenSecret) {
    this._tokenSecret.internalValue = value;
  }
  public resetTokenSecret() {
    this._tokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretInput() {
    return this._tokenSecret.internalValue;
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

  // username_secret - computed: false, optional: true, required: false
  private _usernameSecret = new DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecretOutputReference(this, "username_secret");
  public get usernameSecret() {
    return this._usernameSecret;
  }
  public putUsernameSecret(value: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryUsernameSecret) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecContent {
  /**
  * test content body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#data DataK8STestsTestkubeIoTestV3Manifest#data}
  */
  readonly data?: string;
  /**
  * repository of test content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#repository DataK8STestsTestkubeIoTestV3Manifest#repository}
  */
  readonly repository?: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepository;
  /**
  * test type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#type DataK8STestsTestkubeIoTestV3Manifest#type}
  */
  readonly type?: string;
  /**
  * uri of test content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#uri DataK8STestsTestkubeIoTestV3Manifest#uri}
  */
  readonly uri?: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecContentToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    repository: dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryToTerraform(struct!.repository),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecContentToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecContent | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryToHclTerraform(struct!.repository),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecContentRepository",
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecContent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecContent | cdktf.IResolvable | undefined) {
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
  private _repository = new DataK8STestsTestkubeIoTestV3ManifestSpecContentRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: DataK8STestsTestkubeIoTestV3ManifestSpecContentRepository) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequest {
  /**
  * artifact directories for scraping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#dirs DataK8STestsTestkubeIoTestV3Manifest#dirs}
  */
  readonly dirs?: string[];
  /**
  * regexp to filter scraped artifacts, single or comma separated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#masks DataK8STestsTestkubeIoTestV3Manifest#masks}
  */
  readonly masks?: string[];
  /**
  * don't use a separate folder for execution artifacts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#omit_folder_per_execution DataK8STestsTestkubeIoTestV3Manifest#omit_folder_per_execution}
  */
  readonly omitFolderPerExecution?: boolean | cdktf.IResolvable;
  /**
  * whether to share volume between pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#shared_between_pods DataK8STestsTestkubeIoTestV3Manifest#shared_between_pods}
  */
  readonly sharedBetweenPods?: boolean | cdktf.IResolvable;
  /**
  * run scraper as pod sidecar container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#sidecar_scraper DataK8STestsTestkubeIoTestV3Manifest#sidecar_scraper}
  */
  readonly sidecarScraper?: boolean | cdktf.IResolvable;
  /**
  * artifact bucket storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#storage_bucket DataK8STestsTestkubeIoTestV3Manifest#storage_bucket}
  */
  readonly storageBucket?: string;
  /**
  * artifact storage class name for container executor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#storage_class_name DataK8STestsTestkubeIoTestV3Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * whether to use default storage class name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#use_default_storage_class_name DataK8STestsTestkubeIoTestV3Manifest#use_default_storage_class_name}
  */
  readonly useDefaultStorageClassName?: boolean | cdktf.IResolvable;
  /**
  * artifact volume mount path for container executor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#volume_mount_path DataK8STestsTestkubeIoTestV3Manifest#volume_mount_path}
  */
  readonly volumeMountPath?: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequestToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequest | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequest | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequest | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReference {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReferenceToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReferenceToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReference | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReference | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMaps {
  /**
  * whether we shoud map to variables from resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#map_to_variables DataK8STestsTestkubeIoTestV3Manifest#map_to_variables}
  */
  readonly mapToVariables?: boolean | cdktf.IResolvable;
  /**
  * whether we shoud mount resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#mount DataK8STestsTestkubeIoTestV3Manifest#mount}
  */
  readonly mount?: boolean | cdktf.IResolvable;
  /**
  * where we shoud mount resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#mount_path DataK8STestsTestkubeIoTestV3Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#reference DataK8STestsTestkubeIoTestV3Manifest#reference}
  */
  readonly reference: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReference;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_to_variables: cdktf.booleanToTerraform(struct!.mapToVariables),
    mount: cdktf.booleanToTerraform(struct!.mount),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    reference: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReferenceToTerraform(struct!.reference),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMaps | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReferenceToHclTerraform(struct!.reference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMaps | cdktf.IResolvable | undefined) {
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
  private _reference = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReferenceOutputReference(this, "reference");
  public get reference() {
    return this._reference;
  }
  public putReference(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsReference) {
    this._reference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMaps[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsOutputReference {
    return new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReference {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReferenceToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReferenceToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReference | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReference | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecrets {
  /**
  * whether we shoud map to variables from resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#map_to_variables DataK8STestsTestkubeIoTestV3Manifest#map_to_variables}
  */
  readonly mapToVariables?: boolean | cdktf.IResolvable;
  /**
  * whether we shoud mount resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#mount DataK8STestsTestkubeIoTestV3Manifest#mount}
  */
  readonly mount?: boolean | cdktf.IResolvable;
  /**
  * where we shoud mount resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#mount_path DataK8STestsTestkubeIoTestV3Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#reference DataK8STestsTestkubeIoTestV3Manifest#reference}
  */
  readonly reference: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReference;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_to_variables: cdktf.booleanToTerraform(struct!.mapToVariables),
    mount: cdktf.booleanToTerraform(struct!.mount),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    reference: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReferenceToTerraform(struct!.reference),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecrets | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReferenceToHclTerraform(struct!.reference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecrets | cdktf.IResolvable | undefined) {
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
  private _reference = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReferenceOutputReference(this, "reference");
  public get reference() {
    return this._reference;
  }
  public putReference(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsReference) {
    this._reference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsOutputReference {
    return new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecretsToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecretsToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecretsOutputReference {
    return new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimits {
  /**
  * requested cpu units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#cpu DataK8STestsTestkubeIoTestV3Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * requested memory units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#memory DataK8STestsTestkubeIoTestV3Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimits | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimits | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequests {
  /**
  * requested cpu units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#cpu DataK8STestsTestkubeIoTestV3Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * requested memory units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#memory DataK8STestsTestkubeIoTestV3Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequests | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequests | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequests | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResources {
  /**
  * resource request specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#limits DataK8STestsTestkubeIoTestV3Manifest#limits}
  */
  readonly limits?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimits;
  /**
  * resource request specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#requests DataK8STestsTestkubeIoTestV3Manifest#requests}
  */
  readonly requests?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequests;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsToTerraform(struct!.limits),
    requests: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsToTerraform(struct!.requests),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimits",
    },
    requests: {
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequests",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResources | cdktf.IResolvable | undefined) {
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
  private _limits = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesLimits) {
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
  private _requests = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesRequests) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequest {
  /**
  * pod template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#pod_template DataK8STestsTestkubeIoTestV3Manifest#pod_template}
  */
  readonly podTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#pod_template_reference DataK8STestsTestkubeIoTestV3Manifest#pod_template_reference}
  */
  readonly podTemplateReference?: string;
  /**
  * pod resources request specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#resources DataK8STestsTestkubeIoTestV3Manifest#resources}
  */
  readonly resources?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResources;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_template: cdktf.stringToTerraform(struct!.podTemplate),
    pod_template_reference: cdktf.stringToTerraform(struct!.podTemplateReference),
    resources: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesToTerraform(struct!.resources),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequest | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequest | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestResources) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#key DataK8STestsTestkubeIoTestV3Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#optional DataK8STestsTestkubeIoTestV3Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#api_version DataK8STestsTestkubeIoTestV3Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#field_path DataK8STestsTestkubeIoTestV3Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#container_name DataK8STestsTestkubeIoTestV3Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#divisor DataK8STestsTestkubeIoTestV3Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#resource DataK8STestsTestkubeIoTestV3Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#key DataK8STestsTestkubeIoTestV3Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#optional DataK8STestsTestkubeIoTestV3Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#config_map_key_ref DataK8STestsTestkubeIoTestV3Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#field_ref DataK8STestsTestkubeIoTestV3Manifest#field_ref}
  */
  readonly fieldRef?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#resource_field_ref DataK8STestsTestkubeIoTestV3Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#secret_key_ref DataK8STestsTestkubeIoTestV3Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromSecretKeyRef) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariables {
  /**
  * variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name?: string;
  /**
  * variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#type DataK8STestsTestkubeIoTestV3Manifest#type}
  */
  readonly type?: string;
  /**
  * variable string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#value DataK8STestsTestkubeIoTestV3Manifest#value}
  */
  readonly value?: string;
  /**
  * or load it from var source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#value_from DataK8STestsTestkubeIoTestV3Manifest#value_from}
  */
  readonly valueFrom?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFrom;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariables | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariables | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesValueFrom) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequest {
  /**
  * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#active_deadline_seconds DataK8STestsTestkubeIoTestV3Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * additional executor binary arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#args DataK8STestsTestkubeIoTestV3Manifest#args}
  */
  readonly args?: string[];
  /**
  * usage mode for arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#args_mode DataK8STestsTestkubeIoTestV3Manifest#args_mode}
  */
  readonly argsMode?: string;
  /**
  * artifact request body with test artifacts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#artifact_request DataK8STestsTestkubeIoTestV3Manifest#artifact_request}
  */
  readonly artifactRequest?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequest;
  /**
  * executor binary command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#command DataK8STestsTestkubeIoTestV3Manifest#command}
  */
  readonly command?: string[];
  /**
  * cron job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#cron_job_template DataK8STestsTestkubeIoTestV3Manifest#cron_job_template}
  */
  readonly cronJobTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#cron_job_template_reference DataK8STestsTestkubeIoTestV3Manifest#cron_job_template_reference}
  */
  readonly cronJobTemplateReference?: string;
  /**
  * whether webhooks should be called on execution Deprecated: field is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#disable_webhooks DataK8STestsTestkubeIoTestV3Manifest#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * config map references
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#env_config_maps DataK8STestsTestkubeIoTestV3Manifest#env_config_maps}
  */
  readonly envConfigMaps?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMaps[] | cdktf.IResolvable;
  /**
  * secret references
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#env_secrets DataK8STestsTestkubeIoTestV3Manifest#env_secrets}
  */
  readonly envSecrets?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecrets[] | cdktf.IResolvable;
  /**
  * Environment variables passed to executor. Deprecated: use Basic Variables instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#envs DataK8STestsTestkubeIoTestV3Manifest#envs}
  */
  readonly envs?: { [key: string]: string };
  /**
  * execute post run script before scraping (prebuilt executor only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#execute_post_run_script_before_scraping DataK8STestsTestkubeIoTestV3Manifest#execute_post_run_script_before_scraping}
  */
  readonly executePostRunScriptBeforeScraping?: boolean | cdktf.IResolvable;
  /**
  * test execution labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#execution_labels DataK8STestsTestkubeIoTestV3Manifest#execution_labels}
  */
  readonly executionLabels?: { [key: string]: string };
  /**
  * namespace for test execution (Pro edition only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#execution_namespace DataK8STestsTestkubeIoTestV3Manifest#execution_namespace}
  */
  readonly executionNamespace?: string;
  /**
  * http proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#http_proxy DataK8STestsTestkubeIoTestV3Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * https proxy for executor containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#https_proxy DataK8STestsTestkubeIoTestV3Manifest#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * container executor image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#image DataK8STestsTestkubeIoTestV3Manifest#image}
  */
  readonly image?: string;
  /**
  * container executor image pull secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#image_pull_secrets DataK8STestsTestkubeIoTestV3Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#is_variables_file_uploaded DataK8STestsTestkubeIoTestV3Manifest#is_variables_file_uploaded}
  */
  readonly isVariablesFileUploaded?: boolean | cdktf.IResolvable;
  /**
  * job template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#job_template DataK8STestsTestkubeIoTestV3Manifest#job_template}
  */
  readonly jobTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#job_template_reference DataK8STestsTestkubeIoTestV3Manifest#job_template_reference}
  */
  readonly jobTemplateReference?: string;
  /**
  * test execution custom name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name?: string;
  /**
  * test kubernetes namespace ('testkube' when not set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#namespace DataK8STestsTestkubeIoTestV3Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * negative test will fail the execution if it is a success and it will succeed if it is a failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#negative_test DataK8STestsTestkubeIoTestV3Manifest#negative_test}
  */
  readonly negativeTest?: boolean | cdktf.IResolvable;
  /**
  * test execution number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#number DataK8STestsTestkubeIoTestV3Manifest#number}
  */
  readonly number?: number;
  /**
  * script to run after test execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#post_run_script DataK8STestsTestkubeIoTestV3Manifest#post_run_script}
  */
  readonly postRunScript?: string;
  /**
  * script to run before test execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#pre_run_script DataK8STestsTestkubeIoTestV3Manifest#pre_run_script}
  */
  readonly preRunScript?: string;
  /**
  * pvc template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#pvc_template DataK8STestsTestkubeIoTestV3Manifest#pvc_template}
  */
  readonly pvcTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#pvc_template_reference DataK8STestsTestkubeIoTestV3Manifest#pvc_template_reference}
  */
  readonly pvcTemplateReference?: string;
  /**
  * scraper template extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#scraper_template DataK8STestsTestkubeIoTestV3Manifest#scraper_template}
  */
  readonly scraperTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#scraper_template_reference DataK8STestsTestkubeIoTestV3Manifest#scraper_template_reference}
  */
  readonly scraperTemplateReference?: string;
  /**
  * Execution variables passed to executor from secrets. Deprecated: use Secret Variables instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#secret_envs DataK8STestsTestkubeIoTestV3Manifest#secret_envs}
  */
  readonly secretEnvs?: { [key: string]: string };
  /**
  * pod request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#slave_pod_request DataK8STestsTestkubeIoTestV3Manifest#slave_pod_request}
  */
  readonly slavePodRequest?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequest;
  /**
  * run scripts using source command (container executor only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#source_scripts DataK8STestsTestkubeIoTestV3Manifest#source_scripts}
  */
  readonly sourceScripts?: boolean | cdktf.IResolvable;
  /**
  * whether to start execution sync or async
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#sync DataK8STestsTestkubeIoTestV3Manifest#sync}
  */
  readonly sync?: boolean | cdktf.IResolvable;
  /**
  * test secret uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#test_secret_uuid DataK8STestsTestkubeIoTestV3Manifest#test_secret_uuid}
  */
  readonly testSecretUuid?: string;
  /**
  * unique test suite name (CRD Test suite name), if it's run as a part of test suite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#test_suite_name DataK8STestsTestkubeIoTestV3Manifest#test_suite_name}
  */
  readonly testSuiteName?: string;
  /**
  * test suite secret uuid, if it's run as a part of test suite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#test_suite_secret_uuid DataK8STestsTestkubeIoTestV3Manifest#test_suite_secret_uuid}
  */
  readonly testSuiteSecretUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#variables DataK8STestsTestkubeIoTestV3Manifest#variables}
  */
  readonly variables?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariables;
  /**
  * variables file content - need to be in format for particular executor (e.g. postman envs file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#variables_file DataK8STestsTestkubeIoTestV3Manifest#variables_file}
  */
  readonly variablesFile?: string;
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    args_mode: cdktf.stringToTerraform(struct!.argsMode),
    artifact_request: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequestToTerraform(struct!.artifactRequest),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    cron_job_template: cdktf.stringToTerraform(struct!.cronJobTemplate),
    cron_job_template_reference: cdktf.stringToTerraform(struct!.cronJobTemplateReference),
    disable_webhooks: cdktf.booleanToTerraform(struct!.disableWebhooks),
    env_config_maps: cdktf.listMapper(dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsToTerraform, false)(struct!.envConfigMaps),
    env_secrets: cdktf.listMapper(dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsToTerraform, false)(struct!.envSecrets),
    envs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envs),
    execute_post_run_script_before_scraping: cdktf.booleanToTerraform(struct!.executePostRunScriptBeforeScraping),
    execution_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.executionLabels),
    execution_namespace: cdktf.stringToTerraform(struct!.executionNamespace),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_secrets: cdktf.listMapper(dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    is_variables_file_uploaded: cdktf.booleanToTerraform(struct!.isVariablesFileUploaded),
    job_template: cdktf.stringToTerraform(struct!.jobTemplate),
    job_template_reference: cdktf.stringToTerraform(struct!.jobTemplateReference),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    negative_test: cdktf.booleanToTerraform(struct!.negativeTest),
    number: cdktf.numberToTerraform(struct!.number),
    post_run_script: cdktf.stringToTerraform(struct!.postRunScript),
    pre_run_script: cdktf.stringToTerraform(struct!.preRunScript),
    pvc_template: cdktf.stringToTerraform(struct!.pvcTemplate),
    pvc_template_reference: cdktf.stringToTerraform(struct!.pvcTemplateReference),
    scraper_template: cdktf.stringToTerraform(struct!.scraperTemplate),
    scraper_template_reference: cdktf.stringToTerraform(struct!.scraperTemplateReference),
    secret_envs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secretEnvs),
    slave_pod_request: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestToTerraform(struct!.slavePodRequest),
    source_scripts: cdktf.booleanToTerraform(struct!.sourceScripts),
    sync: cdktf.booleanToTerraform(struct!.sync),
    test_secret_uuid: cdktf.stringToTerraform(struct!.testSecretUuid),
    test_suite_name: cdktf.stringToTerraform(struct!.testSuiteName),
    test_suite_secret_uuid: cdktf.stringToTerraform(struct!.testSuiteSecretUuid),
    variables: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesToTerraform(struct!.variables),
    variables_file: cdktf.stringToTerraform(struct!.variablesFile),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequest | cdktf.IResolvable): any {
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
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequestToHclTerraform(struct!.artifactRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequest",
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
    cron_job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.cronJobTemplateReference),
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
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsToHclTerraform, false)(struct!.envConfigMaps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsList",
    },
    env_secrets: {
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsToHclTerraform, false)(struct!.envSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsList",
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
      value: cdktf.listMapperHcl(dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecretsList",
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
    job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplateReference),
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
    pvc_template: {
      value: cdktf.stringToHclTerraform(struct!.pvcTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.pvcTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scraper_template: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scraper_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.scraperTemplateReference),
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
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestToHclTerraform(struct!.slavePodRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequest",
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
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariables",
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

export class DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequest | cdktf.IResolvable | undefined {
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
    if (this._cronJobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronJobTemplateReference = this._cronJobTemplateReference;
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
    if (this._jobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplateReference = this._jobTemplateReference;
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
    if (this._pvcTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplate = this._pvcTemplate;
    }
    if (this._pvcTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplateReference = this._pvcTemplateReference;
    }
    if (this._scraperTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplate = this._scraperTemplate;
    }
    if (this._scraperTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperTemplateReference = this._scraperTemplateReference;
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

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = undefined;
      this._args = undefined;
      this._argsMode = undefined;
      this._artifactRequest.internalValue = undefined;
      this._command = undefined;
      this._cronJobTemplate = undefined;
      this._cronJobTemplateReference = undefined;
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
      this._jobTemplateReference = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._negativeTest = undefined;
      this._number = undefined;
      this._postRunScript = undefined;
      this._preRunScript = undefined;
      this._pvcTemplate = undefined;
      this._pvcTemplateReference = undefined;
      this._scraperTemplate = undefined;
      this._scraperTemplateReference = undefined;
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
      this._cronJobTemplateReference = value.cronJobTemplateReference;
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
      this._jobTemplateReference = value.jobTemplateReference;
      this._name = value.name;
      this._namespace = value.namespace;
      this._negativeTest = value.negativeTest;
      this._number = value.number;
      this._postRunScript = value.postRunScript;
      this._preRunScript = value.preRunScript;
      this._pvcTemplate = value.pvcTemplate;
      this._pvcTemplateReference = value.pvcTemplateReference;
      this._scraperTemplate = value.scraperTemplate;
      this._scraperTemplateReference = value.scraperTemplateReference;
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
  private _artifactRequest = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequestOutputReference(this, "artifact_request");
  public get artifactRequest() {
    return this._artifactRequest;
  }
  public putArtifactRequest(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestArtifactRequest) {
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

  // cron_job_template_reference - computed: false, optional: true, required: false
  private _cronJobTemplateReference?: string; 
  public get cronJobTemplateReference() {
    return this.getStringAttribute('cron_job_template_reference');
  }
  public set cronJobTemplateReference(value: string) {
    this._cronJobTemplateReference = value;
  }
  public resetCronJobTemplateReference() {
    this._cronJobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronJobTemplateReferenceInput() {
    return this._cronJobTemplateReference;
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
  private _envConfigMaps = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMapsList(this, "env_config_maps", false);
  public get envConfigMaps() {
    return this._envConfigMaps;
  }
  public putEnvConfigMaps(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvConfigMaps[] | cdktf.IResolvable) {
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
  private _envSecrets = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecretsList(this, "env_secrets", false);
  public get envSecrets() {
    return this._envSecrets;
  }
  public putEnvSecrets(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestEnvSecrets[] | cdktf.IResolvable) {
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
  private _imagePullSecrets = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestImagePullSecrets[] | cdktf.IResolvable) {
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

  // job_template_reference - computed: false, optional: true, required: false
  private _jobTemplateReference?: string; 
  public get jobTemplateReference() {
    return this.getStringAttribute('job_template_reference');
  }
  public set jobTemplateReference(value: string) {
    this._jobTemplateReference = value;
  }
  public resetJobTemplateReference() {
    this._jobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateReferenceInput() {
    return this._jobTemplateReference;
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

  // pvc_template - computed: false, optional: true, required: false
  private _pvcTemplate?: string; 
  public get pvcTemplate() {
    return this.getStringAttribute('pvc_template');
  }
  public set pvcTemplate(value: string) {
    this._pvcTemplate = value;
  }
  public resetPvcTemplate() {
    this._pvcTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateInput() {
    return this._pvcTemplate;
  }

  // pvc_template_reference - computed: false, optional: true, required: false
  private _pvcTemplateReference?: string; 
  public get pvcTemplateReference() {
    return this.getStringAttribute('pvc_template_reference');
  }
  public set pvcTemplateReference(value: string) {
    this._pvcTemplateReference = value;
  }
  public resetPvcTemplateReference() {
    this._pvcTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateReferenceInput() {
    return this._pvcTemplateReference;
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

  // scraper_template_reference - computed: false, optional: true, required: false
  private _scraperTemplateReference?: string; 
  public get scraperTemplateReference() {
    return this.getStringAttribute('scraper_template_reference');
  }
  public set scraperTemplateReference(value: string) {
    this._scraperTemplateReference = value;
  }
  public resetScraperTemplateReference() {
    this._scraperTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperTemplateReferenceInput() {
    return this._scraperTemplateReference;
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
  private _slavePodRequest = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequestOutputReference(this, "slave_pod_request");
  public get slavePodRequest() {
    return this._slavePodRequest;
  }
  public putSlavePodRequest(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestSlavePodRequest) {
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
  private _variables = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestVariables) {
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
export interface DataK8STestsTestkubeIoTestV3ManifestSpec {
  /**
  * test content object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#content DataK8STestsTestkubeIoTestV3Manifest#content}
  */
  readonly content?: DataK8STestsTestkubeIoTestV3ManifestSpecContent;
  /**
  * test description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#description DataK8STestsTestkubeIoTestV3Manifest#description}
  */
  readonly description?: string;
  /**
  * test execution request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#execution_request DataK8STestsTestkubeIoTestV3Manifest#execution_request}
  */
  readonly executionRequest?: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequest;
  /**
  * test name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#name DataK8STestsTestkubeIoTestV3Manifest#name}
  */
  readonly name?: string;
  /**
  * schedule in cron job format for scheduled test execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#schedule DataK8STestsTestkubeIoTestV3Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * reference to test source resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#source DataK8STestsTestkubeIoTestV3Manifest#source}
  */
  readonly source?: string;
  /**
  * test type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#type DataK8STestsTestkubeIoTestV3Manifest#type}
  */
  readonly type?: string;
  /**
  * files to be used from minio uploads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#uploads DataK8STestsTestkubeIoTestV3Manifest#uploads}
  */
  readonly uploads?: string[];
}

export function dataK8STestsTestkubeIoTestV3ManifestSpecToTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: dataK8STestsTestkubeIoTestV3ManifestSpecContentToTerraform(struct!.content),
    description: cdktf.stringToTerraform(struct!.description),
    execution_request: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestToTerraform(struct!.executionRequest),
    name: cdktf.stringToTerraform(struct!.name),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    uploads: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uploads),
  }
}


export function dataK8STestsTestkubeIoTestV3ManifestSpecToHclTerraform(struct?: DataK8STestsTestkubeIoTestV3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: dataK8STestsTestkubeIoTestV3ManifestSpecContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecContent",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_request: {
      value: dataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestToHclTerraform(struct!.executionRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequest",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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
    uploads: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uploads),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STestsTestkubeIoTestV3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STestsTestkubeIoTestV3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._executionRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRequest = this._executionRequest?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uploads !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploads = this._uploads;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STestsTestkubeIoTestV3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content.internalValue = undefined;
      this._description = undefined;
      this._executionRequest.internalValue = undefined;
      this._name = undefined;
      this._schedule = undefined;
      this._source = undefined;
      this._type = undefined;
      this._uploads = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content.internalValue = value.content;
      this._description = value.description;
      this._executionRequest.internalValue = value.executionRequest;
      this._name = value.name;
      this._schedule = value.schedule;
      this._source = value.source;
      this._type = value.type;
      this._uploads = value.uploads;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content = new DataK8STestsTestkubeIoTestV3ManifestSpecContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: DataK8STestsTestkubeIoTestV3ManifestSpecContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // execution_request - computed: false, optional: true, required: false
  private _executionRequest = new DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequestOutputReference(this, "execution_request");
  public get executionRequest() {
    return this._executionRequest;
  }
  public putExecutionRequest(value: DataK8STestsTestkubeIoTestV3ManifestSpecExecutionRequest) {
    this._executionRequest.internalValue = value;
  }
  public resetExecutionRequest() {
    this._executionRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRequestInput() {
    return this._executionRequest.internalValue;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // uploads - computed: false, optional: true, required: false
  private _uploads?: string[]; 
  public get uploads() {
    return this.getListAttribute('uploads');
  }
  public set uploads(value: string[]) {
    this._uploads = value;
  }
  public resetUploads() {
    this._uploads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadsInput() {
    return this._uploads;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest k8s_tests_testkube_io_test_v3_manifest}
*/
export class DataK8STestsTestkubeIoTestV3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tests_testkube_io_test_v3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STestsTestkubeIoTestV3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STestsTestkubeIoTestV3Manifest to import
  * @param importFromId The id of the existing DataK8STestsTestkubeIoTestV3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STestsTestkubeIoTestV3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tests_testkube_io_test_v3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tests_testkube_io_test_v3_manifest k8s_tests_testkube_io_test_v3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STestsTestkubeIoTestV3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STestsTestkubeIoTestV3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tests_testkube_io_test_v3_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8STestsTestkubeIoTestV3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STestsTestkubeIoTestV3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STestsTestkubeIoTestV3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STestsTestkubeIoTestV3ManifestSpec) {
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
      metadata: dataK8STestsTestkubeIoTestV3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STestsTestkubeIoTestV3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STestsTestkubeIoTestV3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestV3ManifestMetadata",
      },
      spec: {
        value: dataK8STestsTestkubeIoTestV3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STestsTestkubeIoTestV3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
