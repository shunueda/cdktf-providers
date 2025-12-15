// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDigitalisIoValsSecretV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#metadata DataK8SDigitalisIoValsSecretV1Manifest#metadata}
  */
  readonly metadata: DataK8SDigitalisIoValsSecretV1ManifestMetadata;
  /**
  * ValsSecretSpec defines the desired state of ValsSecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#spec DataK8SDigitalisIoValsSecretV1Manifest#spec}
  */
  readonly spec?: DataK8SDigitalisIoValsSecretV1ManifestSpec;
}
export interface DataK8SDigitalisIoValsSecretV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#annotations DataK8SDigitalisIoValsSecretV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#labels DataK8SDigitalisIoValsSecretV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#name DataK8SDigitalisIoValsSecretV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#namespace DataK8SDigitalisIoValsSecretV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDigitalisIoValsSecretV1ManifestMetadataToTerraform(struct?: DataK8SDigitalisIoValsSecretV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDigitalisIoValsSecretV1ManifestMetadataToHclTerraform(struct?: DataK8SDigitalisIoValsSecretV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDigitalisIoValsSecretV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDigitalisIoValsSecretV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDigitalisIoValsSecretV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDigitalisIoValsSecretV1ManifestSpecData {
  /**
  * Encoding type for the secret. Only base64 supported. Optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#encoding DataK8SDigitalisIoValsSecretV1Manifest#encoding}
  */
  readonly encoding?: string;
  /**
  * Ref value to the secret in the format ref+backend://path https://github.com/helmfile/vals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#ref DataK8SDigitalisIoValsSecretV1Manifest#ref}
  */
  readonly ref: string;
}

export function dataK8SDigitalisIoValsSecretV1ManifestSpecDataToTerraform(struct?: DataK8SDigitalisIoValsSecretV1ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    ref: cdktf.stringToTerraform(struct!.ref),
  }
}


export function dataK8SDigitalisIoValsSecretV1ManifestSpecDataToHclTerraform(struct?: DataK8SDigitalisIoValsSecretV1ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDigitalisIoValsSecretV1ManifestSpecDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDigitalisIoValsSecretV1ManifestSpecData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDigitalisIoValsSecretV1ManifestSpecData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._ref = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._ref = value.ref;
    }
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // ref - computed: false, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }
}
export interface DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentials {
  /**
  * Optional namespace of the secret, default current namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#namespace DataK8SDigitalisIoValsSecretV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Key in the secret containing the database username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#password_key DataK8SDigitalisIoValsSecretV1Manifest#password_key}
  */
  readonly passwordKey: string;
  /**
  * Name of the secret containing the credentials to be able to log in to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#secret_name DataK8SDigitalisIoValsSecretV1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Key in the secret containing the database username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#username_key DataK8SDigitalisIoValsSecretV1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentialsToTerraform(struct?: DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    password_key: cdktf.stringToTerraform(struct!.passwordKey),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    username_key: cdktf.stringToTerraform(struct!.usernameKey),
  }
}


export function dataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentialsToHclTerraform(struct?: DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_key: {
      value: cdktf.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktf.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._passwordKey = undefined;
      this._secretName = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._passwordKey = value.passwordKey;
      this._secretName = value.secretName;
      this._usernameKey = value.usernameKey;
    }
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

  // password_key - computed: false, optional: false, required: true
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }
}
export interface DataK8SDigitalisIoValsSecretV1ManifestSpecDatabases {
  /**
  * Defines the database type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#driver DataK8SDigitalisIoValsSecretV1Manifest#driver}
  */
  readonly driver: string;
  /**
  * List of hosts to connect to, they'll be tried in sequence until one succeeds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#hosts DataK8SDigitalisIoValsSecretV1Manifest#hosts}
  */
  readonly hosts: string[];
  /**
  * Credentials to access the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#login_credentials DataK8SDigitalisIoValsSecretV1Manifest#login_credentials}
  */
  readonly loginCredentials?: DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentials;
  /**
  * Key in the secret containing the database username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#password_key DataK8SDigitalisIoValsSecretV1Manifest#password_key}
  */
  readonly passwordKey: string;
  /**
  * Database port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#port DataK8SDigitalisIoValsSecretV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Used for MySQL only, the host part for the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#user_host DataK8SDigitalisIoValsSecretV1Manifest#user_host}
  */
  readonly userHost?: string;
  /**
  * Key in the secret containing the database username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#username_key DataK8SDigitalisIoValsSecretV1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesToTerraform(struct?: DataK8SDigitalisIoValsSecretV1ManifestSpecDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    login_credentials: dataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentialsToTerraform(struct!.loginCredentials),
    password_key: cdktf.stringToTerraform(struct!.passwordKey),
    port: cdktf.numberToTerraform(struct!.port),
    user_host: cdktf.stringToTerraform(struct!.userHost),
    username_key: cdktf.stringToTerraform(struct!.usernameKey),
  }
}


export function dataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesToHclTerraform(struct?: DataK8SDigitalisIoValsSecretV1ManifestSpecDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    login_credentials: {
      value: dataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentialsToHclTerraform(struct!.loginCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentials",
    },
    password_key: {
      value: cdktf.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_host: {
      value: cdktf.stringToHclTerraform(struct!.userHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktf.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDigitalisIoValsSecretV1ManifestSpecDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._loginCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginCredentials = this._loginCredentials?.internalValue;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._userHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.userHost = this._userHost;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDigitalisIoValsSecretV1ManifestSpecDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._hosts = undefined;
      this._loginCredentials.internalValue = undefined;
      this._passwordKey = undefined;
      this._port = undefined;
      this._userHost = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._hosts = value.hosts;
      this._loginCredentials.internalValue = value.loginCredentials;
      this._passwordKey = value.passwordKey;
      this._port = value.port;
      this._userHost = value.userHost;
      this._usernameKey = value.usernameKey;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // login_credentials - computed: false, optional: true, required: false
  private _loginCredentials = new DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentialsOutputReference(this, "login_credentials");
  public get loginCredentials() {
    return this._loginCredentials;
  }
  public putLoginCredentials(value: DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesLoginCredentials) {
    this._loginCredentials.internalValue = value;
  }
  public resetLoginCredentials() {
    this._loginCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginCredentialsInput() {
    return this._loginCredentials.internalValue;
  }

  // password_key - computed: false, optional: false, required: true
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // user_host - computed: false, optional: true, required: false
  private _userHost?: string; 
  public get userHost() {
    return this.getStringAttribute('user_host');
  }
  public set userHost(value: string) {
    this._userHost = value;
  }
  public resetUserHost() {
    this._userHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userHostInput() {
    return this._userHost;
  }

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }
}

export class DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDigitalisIoValsSecretV1ManifestSpecDatabases[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesOutputReference {
    return new DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDigitalisIoValsSecretV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#data DataK8SDigitalisIoValsSecretV1Manifest#data}
  */
  readonly data: DataK8SDigitalisIoValsSecretV1ManifestSpecData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#databases DataK8SDigitalisIoValsSecretV1Manifest#databases}
  */
  readonly databases?: DataK8SDigitalisIoValsSecretV1ManifestSpecDatabases[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#name DataK8SDigitalisIoValsSecretV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#template DataK8SDigitalisIoValsSecretV1Manifest#template}
  */
  readonly template?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#ttl DataK8SDigitalisIoValsSecretV1Manifest#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#type DataK8SDigitalisIoValsSecretV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SDigitalisIoValsSecretV1ManifestSpecToTerraform(struct?: DataK8SDigitalisIoValsSecretV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataK8SDigitalisIoValsSecretV1ManifestSpecDataToTerraform(struct!.data),
    databases: cdktf.listMapper(dataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesToTerraform, false)(struct!.databases),
    name: cdktf.stringToTerraform(struct!.name),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SDigitalisIoValsSecretV1ManifestSpecToHclTerraform(struct?: DataK8SDigitalisIoValsSecretV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataK8SDigitalisIoValsSecretV1ManifestSpecDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDigitalisIoValsSecretV1ManifestSpecData",
    },
    databases: {
      value: cdktf.listMapperHcl(dataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesToHclTerraform, false)(struct!.databases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SDigitalisIoValsSecretV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDigitalisIoValsSecretV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDigitalisIoValsSecretV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
      this._databases.internalValue = undefined;
      this._name = undefined;
      this._template = undefined;
      this._ttl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
      this._databases.internalValue = value.databases;
      this._name = value.name;
      this._template = value.template;
      this._ttl = value.ttl;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data = new DataK8SDigitalisIoValsSecretV1ManifestSpecDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SDigitalisIoValsSecretV1ManifestSpecData) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // databases - computed: false, optional: true, required: false
  private _databases = new DataK8SDigitalisIoValsSecretV1ManifestSpecDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: DataK8SDigitalisIoValsSecretV1ManifestSpecDatabases[] | cdktf.IResolvable) {
    this._databases.internalValue = value;
  }
  public resetDatabases() {
    this._databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
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

  // template - computed: false, optional: true, required: false
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest k8s_digitalis_io_vals_secret_v1_manifest}
*/
export class DataK8SDigitalisIoValsSecretV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_digitalis_io_vals_secret_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDigitalisIoValsSecretV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDigitalisIoValsSecretV1Manifest to import
  * @param importFromId The id of the existing DataK8SDigitalisIoValsSecretV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDigitalisIoValsSecretV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_digitalis_io_vals_secret_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/digitalis_io_vals_secret_v1_manifest k8s_digitalis_io_vals_secret_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDigitalisIoValsSecretV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDigitalisIoValsSecretV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_digitalis_io_vals_secret_v1_manifest',
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
  private _metadata = new DataK8SDigitalisIoValsSecretV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDigitalisIoValsSecretV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDigitalisIoValsSecretV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDigitalisIoValsSecretV1ManifestSpec) {
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
      metadata: dataK8SDigitalisIoValsSecretV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDigitalisIoValsSecretV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDigitalisIoValsSecretV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDigitalisIoValsSecretV1ManifestMetadata",
      },
      spec: {
        value: dataK8SDigitalisIoValsSecretV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDigitalisIoValsSecretV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
