// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#metadata DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadata;
  /**
  * ClusterInputSpec defines the desired state of ClusterInput
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#spec DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpec;
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#annotations DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#labels DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#config DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#config}
  */
  readonly config: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPluginToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPluginToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClient {
  /**
  * The IP address or hostname of the client. This is exclusive with Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#host DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * The network address specification. This is exclusive with Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#network DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#network}
  */
  readonly network?: string;
  /**
  * The shared key per client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#shared_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * The array of usernames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#users DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#users}
  */
  readonly users?: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClientToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    network: cdktf.stringToTerraform(struct!.network),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
    users: cdktf.stringToTerraform(struct!.users),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClientToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_key: {
      value: cdktf.stringToHclTerraform(struct!.sharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.stringToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._network = undefined;
      this._sharedKey = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._network = value.network;
      this._sharedKey = value.sharedKey;
      this._users = value.users;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string; 
  public get users() {
    return this.getStringAttribute('users');
  }
  public set users(value: string) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromSecretKeyRef) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordValueFrom) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromSecretKeyRef) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsername {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFrom;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameValueFrom) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUser {
  /**
  * Secret defines the key of a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#password DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPassword;
  /**
  * Secret defines the key of a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#username DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#username}
  */
  readonly username?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsername;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordToTerraform(struct!.password),
    username: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameToTerraform(struct!.username),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPassword",
    },
    username: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurity {
  /**
  * Allows the anonymous source. <client> sections are required, if disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#allow_anonymous_source DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#allow_anonymous_source}
  */
  readonly allowAnonymousSource?: string;
  /**
  * The hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#self_hostname DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#self_hostname}
  */
  readonly selfHostname?: string;
  /**
  * The shared key for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#shared_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Defines user section directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#user DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#user}
  */
  readonly user?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUser;
  /**
  * If true, user-based authentication is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#user_auth DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#user_auth}
  */
  readonly userAuth?: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_anonymous_source: cdktf.stringToTerraform(struct!.allowAnonymousSource),
    self_hostname: cdktf.stringToTerraform(struct!.selfHostname),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
    user: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserToTerraform(struct!.user),
    user_auth: cdktf.stringToTerraform(struct!.userAuth),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_anonymous_source: {
      value: cdktf.stringToHclTerraform(struct!.allowAnonymousSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_hostname: {
      value: cdktf.stringToHclTerraform(struct!.selfHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_key: {
      value: cdktf.stringToHclTerraform(struct!.sharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUser",
    },
    user_auth: {
      value: cdktf.stringToHclTerraform(struct!.userAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAnonymousSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAnonymousSource = this._allowAnonymousSource;
    }
    if (this._selfHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHostname = this._selfHostname;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    if (this._userAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAuth = this._userAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAnonymousSource = undefined;
      this._selfHostname = undefined;
      this._sharedKey = undefined;
      this._user.internalValue = undefined;
      this._userAuth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAnonymousSource = value.allowAnonymousSource;
      this._selfHostname = value.selfHostname;
      this._sharedKey = value.sharedKey;
      this._user.internalValue = value.user;
      this._userAuth = value.userAuth;
    }
  }

  // allow_anonymous_source - computed: false, optional: true, required: false
  private _allowAnonymousSource?: string; 
  public get allowAnonymousSource() {
    return this.getStringAttribute('allow_anonymous_source');
  }
  public set allowAnonymousSource(value: string) {
    this._allowAnonymousSource = value;
  }
  public resetAllowAnonymousSource() {
    this._allowAnonymousSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnonymousSourceInput() {
    return this._allowAnonymousSource;
  }

  // self_hostname - computed: false, optional: true, required: false
  private _selfHostname?: string; 
  public get selfHostname() {
    return this.getStringAttribute('self_hostname');
  }
  public set selfHostname(value: string) {
    this._selfHostname = value;
  }
  public resetSelfHostname() {
    this._selfHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHostnameInput() {
    return this._selfHostname;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // user_auth - computed: false, optional: true, required: false
  private _userAuth?: string; 
  public get userAuth() {
    return this.getStringAttribute('user_auth');
  }
  public set userAuth(value: string) {
    this._userAuth = value;
  }
  public resetUserAuth() {
    this._userAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthInput() {
    return this._userAuth;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransport {
  /**
  * for Cert generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ca_cert_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ca_cert_path}
  */
  readonly caCertPath?: string;
  /**
  * for Cert signed by public CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ca_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ca_path}
  */
  readonly caPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ca_private_key_passphrase DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ca_private_key_passphrase}
  */
  readonly caPrivateKeyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ca_private_key_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ca_private_key_path}
  */
  readonly caPrivateKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#cert_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#cert_path}
  */
  readonly certPath?: string;
  /**
  * other parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#cert_verifier DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#cert_verifier}
  */
  readonly certVerifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ciphers DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#client_cert_auth DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#client_cert_auth}
  */
  readonly clientCertAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#insecure DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#private_key_passphrase DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#private_key_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * The protocal name of this plugin, i.e: tls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#protocol DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#version DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransportToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert_path: cdktf.stringToTerraform(struct!.caCertPath),
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    ca_private_key_passphrase: cdktf.stringToTerraform(struct!.caPrivateKeyPassphrase),
    ca_private_key_path: cdktf.stringToTerraform(struct!.caPrivateKeyPath),
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    cert_verifier: cdktf.stringToTerraform(struct!.certVerifier),
    ciphers: cdktf.stringToTerraform(struct!.ciphers),
    client_cert_auth: cdktf.booleanToTerraform(struct!.clientCertAuth),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    private_key_passphrase: cdktf.stringToTerraform(struct!.privateKeyPassphrase),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransportToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.caCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_private_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.caPrivateKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.caPrivateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_path: {
      value: cdktf.stringToHclTerraform(struct!.certPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_verifier: {
      value: cdktf.stringToHclTerraform(struct!.certVerifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ciphers: {
      value: cdktf.stringToHclTerraform(struct!.ciphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_auth: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertPath = this._caCertPath;
    }
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._caPrivateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPrivateKeyPassphrase = this._caPrivateKeyPassphrase;
    }
    if (this._caPrivateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPrivateKeyPath = this._caPrivateKeyPath;
    }
    if (this._certPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPath = this._certPath;
    }
    if (this._certVerifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.certVerifier = this._certVerifier;
    }
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._clientCertAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertAuth = this._clientCertAuth;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._privateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphrase = this._privateKeyPassphrase;
    }
    if (this._privateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPath = this._privateKeyPath;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertPath = undefined;
      this._caPath = undefined;
      this._caPrivateKeyPassphrase = undefined;
      this._caPrivateKeyPath = undefined;
      this._certPath = undefined;
      this._certVerifier = undefined;
      this._ciphers = undefined;
      this._clientCertAuth = undefined;
      this._insecure = undefined;
      this._privateKeyPassphrase = undefined;
      this._privateKeyPath = undefined;
      this._protocol = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertPath = value.caCertPath;
      this._caPath = value.caPath;
      this._caPrivateKeyPassphrase = value.caPrivateKeyPassphrase;
      this._caPrivateKeyPath = value.caPrivateKeyPath;
      this._certPath = value.certPath;
      this._certVerifier = value.certVerifier;
      this._ciphers = value.ciphers;
      this._clientCertAuth = value.clientCertAuth;
      this._insecure = value.insecure;
      this._privateKeyPassphrase = value.privateKeyPassphrase;
      this._privateKeyPath = value.privateKeyPath;
      this._protocol = value.protocol;
      this._version = value.version;
    }
  }

  // ca_cert_path - computed: false, optional: true, required: false
  private _caCertPath?: string; 
  public get caCertPath() {
    return this.getStringAttribute('ca_cert_path');
  }
  public set caCertPath(value: string) {
    this._caCertPath = value;
  }
  public resetCaCertPath() {
    this._caCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPathInput() {
    return this._caCertPath;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // ca_private_key_passphrase - computed: false, optional: true, required: false
  private _caPrivateKeyPassphrase?: string; 
  public get caPrivateKeyPassphrase() {
    return this.getStringAttribute('ca_private_key_passphrase');
  }
  public set caPrivateKeyPassphrase(value: string) {
    this._caPrivateKeyPassphrase = value;
  }
  public resetCaPrivateKeyPassphrase() {
    this._caPrivateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPrivateKeyPassphraseInput() {
    return this._caPrivateKeyPassphrase;
  }

  // ca_private_key_path - computed: false, optional: true, required: false
  private _caPrivateKeyPath?: string; 
  public get caPrivateKeyPath() {
    return this.getStringAttribute('ca_private_key_path');
  }
  public set caPrivateKeyPath(value: string) {
    this._caPrivateKeyPath = value;
  }
  public resetCaPrivateKeyPath() {
    this._caPrivateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPrivateKeyPathInput() {
    return this._caPrivateKeyPath;
  }

  // cert_path - computed: false, optional: true, required: false
  private _certPath?: string; 
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }
  public set certPath(value: string) {
    this._certPath = value;
  }
  public resetCertPath() {
    this._certPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // cert_verifier - computed: false, optional: true, required: false
  private _certVerifier?: string; 
  public get certVerifier() {
    return this.getStringAttribute('cert_verifier');
  }
  public set certVerifier(value: string) {
    this._certVerifier = value;
  }
  public resetCertVerifier() {
    this._certVerifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certVerifierInput() {
    return this._certVerifier;
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string; 
  public get ciphers() {
    return this.getStringAttribute('ciphers');
  }
  public set ciphers(value: string) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // client_cert_auth - computed: false, optional: true, required: false
  private _clientCertAuth?: boolean | cdktf.IResolvable; 
  public get clientCertAuth() {
    return this.getBooleanAttribute('client_cert_auth');
  }
  public set clientCertAuth(value: boolean | cdktf.IResolvable) {
    this._clientCertAuth = value;
  }
  public resetClientCertAuth() {
    this._clientCertAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertAuthInput() {
    return this._clientCertAuth;
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

  // private_key_passphrase - computed: false, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromSecretKeyRef) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordValueFrom) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromSecretKeyRef) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsername {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFrom;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameValueFrom) {
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUser {
  /**
  * Secret defines the key of a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#password DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPassword;
  /**
  * Secret defines the key of a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#username DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#username}
  */
  readonly username?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsername;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordToTerraform(struct!.password),
    username: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameToTerraform(struct!.username),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPassword",
    },
    username: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForward {
  /**
  * Adds the prefix to the incoming event's tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#add_tag_prefix DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#add_tag_prefix}
  */
  readonly addTagPrefix?: string;
  /**
  * The port to listen to, default is '0.0.0.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#bind DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#bind}
  */
  readonly bind?: string;
  /**
  * The size limit of the received chunk. If the chunk size is larger than this value, the received chunk is dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#chunk_size_limit DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#chunk_size_limit}
  */
  readonly chunkSizeLimit?: string;
  /**
  * The warning size limit of the received chunk. If the chunk size is larger than this value, a warning message will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#chunk_size_warn_limit DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#chunk_size_warn_limit}
  */
  readonly chunkSizeWarnLimit?: string;
  /**
  * The security section of client plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#client DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#client}
  */
  readonly client?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClient;
  /**
  * The connections will be disconnected right after receiving a message, if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#deny_keepalive DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#deny_keepalive}
  */
  readonly denyKeepalive?: boolean | cdktf.IResolvable;
  /**
  * The timeout used to set the linger option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#linger_timeout DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#linger_timeout}
  */
  readonly lingerTimeout?: number;
  /**
  * The port to listen to, default is 24224.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#port DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Tries to resolve hostname from IP addresses or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#resolve_hostname DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#resolve_hostname}
  */
  readonly resolveHostname?: boolean | cdktf.IResolvable;
  /**
  * The security section of forward plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#security DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#security}
  */
  readonly security?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurity;
  /**
  * Enables the TCP keepalive for sockets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#send_keepalive_packet DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#send_keepalive_packet}
  */
  readonly sendKeepalivePacket?: boolean | cdktf.IResolvable;
  /**
  * Skips the invalid incoming event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#skip_invalid_event DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#skip_invalid_event}
  */
  readonly skipInvalidEvent?: boolean | cdktf.IResolvable;
  /**
  * The field name of the client's source address. If set, the client's address will be set to its key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#source_address_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#source_address_key}
  */
  readonly sourceAddressKey?: string;
  /**
  * The field name of the client's hostname. If set, the client's hostname will be set to its key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#source_hostname_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#source_hostname_key}
  */
  readonly sourceHostnameKey?: string;
  /**
  * in_forward uses incoming event's tag by default (See Protocol Section). If the tag parameter is set, its value is used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#tag DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
  /**
  * The transport section of forward plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#transport DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#transport}
  */
  readonly transport?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransport;
  /**
  * The security section of user plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#user DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#user}
  */
  readonly user?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUser;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_tag_prefix: cdktf.stringToTerraform(struct!.addTagPrefix),
    bind: cdktf.stringToTerraform(struct!.bind),
    chunk_size_limit: cdktf.stringToTerraform(struct!.chunkSizeLimit),
    chunk_size_warn_limit: cdktf.stringToTerraform(struct!.chunkSizeWarnLimit),
    client: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClientToTerraform(struct!.client),
    deny_keepalive: cdktf.booleanToTerraform(struct!.denyKeepalive),
    linger_timeout: cdktf.numberToTerraform(struct!.lingerTimeout),
    port: cdktf.numberToTerraform(struct!.port),
    resolve_hostname: cdktf.booleanToTerraform(struct!.resolveHostname),
    security: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityToTerraform(struct!.security),
    send_keepalive_packet: cdktf.booleanToTerraform(struct!.sendKeepalivePacket),
    skip_invalid_event: cdktf.booleanToTerraform(struct!.skipInvalidEvent),
    source_address_key: cdktf.stringToTerraform(struct!.sourceAddressKey),
    source_hostname_key: cdktf.stringToTerraform(struct!.sourceHostnameKey),
    tag: cdktf.stringToTerraform(struct!.tag),
    transport: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransportToTerraform(struct!.transport),
    user: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserToTerraform(struct!.user),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_tag_prefix: {
      value: cdktf.stringToHclTerraform(struct!.addTagPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind: {
      value: cdktf.stringToHclTerraform(struct!.bind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.chunkSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size_warn_limit: {
      value: cdktf.stringToHclTerraform(struct!.chunkSizeWarnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClientToHclTerraform(struct!.client),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClient",
    },
    deny_keepalive: {
      value: cdktf.booleanToHclTerraform(struct!.denyKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    linger_timeout: {
      value: cdktf.numberToHclTerraform(struct!.lingerTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resolve_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.resolveHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurity",
    },
    send_keepalive_packet: {
      value: cdktf.booleanToHclTerraform(struct!.sendKeepalivePacket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_invalid_event: {
      value: cdktf.booleanToHclTerraform(struct!.skipInvalidEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_address_key: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_hostname_key: {
      value: cdktf.stringToHclTerraform(struct!.sourceHostnameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransport",
    },
    user: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForward | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addTagPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.addTagPrefix = this._addTagPrefix;
    }
    if (this._bind !== undefined) {
      hasAnyValues = true;
      internalValueResult.bind = this._bind;
    }
    if (this._chunkSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSizeLimit = this._chunkSizeLimit;
    }
    if (this._chunkSizeWarnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSizeWarnLimit = this._chunkSizeWarnLimit;
    }
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._denyKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyKeepalive = this._denyKeepalive;
    }
    if (this._lingerTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.lingerTimeout = this._lingerTimeout;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resolveHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveHostname = this._resolveHostname;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._sendKeepalivePacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendKeepalivePacket = this._sendKeepalivePacket;
    }
    if (this._skipInvalidEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipInvalidEvent = this._skipInvalidEvent;
    }
    if (this._sourceAddressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressKey = this._sourceAddressKey;
    }
    if (this._sourceHostnameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHostnameKey = this._sourceHostnameKey;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForward | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addTagPrefix = undefined;
      this._bind = undefined;
      this._chunkSizeLimit = undefined;
      this._chunkSizeWarnLimit = undefined;
      this._client.internalValue = undefined;
      this._denyKeepalive = undefined;
      this._lingerTimeout = undefined;
      this._port = undefined;
      this._resolveHostname = undefined;
      this._security.internalValue = undefined;
      this._sendKeepalivePacket = undefined;
      this._skipInvalidEvent = undefined;
      this._sourceAddressKey = undefined;
      this._sourceHostnameKey = undefined;
      this._tag = undefined;
      this._transport.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addTagPrefix = value.addTagPrefix;
      this._bind = value.bind;
      this._chunkSizeLimit = value.chunkSizeLimit;
      this._chunkSizeWarnLimit = value.chunkSizeWarnLimit;
      this._client.internalValue = value.client;
      this._denyKeepalive = value.denyKeepalive;
      this._lingerTimeout = value.lingerTimeout;
      this._port = value.port;
      this._resolveHostname = value.resolveHostname;
      this._security.internalValue = value.security;
      this._sendKeepalivePacket = value.sendKeepalivePacket;
      this._skipInvalidEvent = value.skipInvalidEvent;
      this._sourceAddressKey = value.sourceAddressKey;
      this._sourceHostnameKey = value.sourceHostnameKey;
      this._tag = value.tag;
      this._transport.internalValue = value.transport;
      this._user.internalValue = value.user;
    }
  }

  // add_tag_prefix - computed: false, optional: true, required: false
  private _addTagPrefix?: string; 
  public get addTagPrefix() {
    return this.getStringAttribute('add_tag_prefix');
  }
  public set addTagPrefix(value: string) {
    this._addTagPrefix = value;
  }
  public resetAddTagPrefix() {
    this._addTagPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addTagPrefixInput() {
    return this._addTagPrefix;
  }

  // bind - computed: false, optional: true, required: false
  private _bind?: string; 
  public get bind() {
    return this.getStringAttribute('bind');
  }
  public set bind(value: string) {
    this._bind = value;
  }
  public resetBind() {
    this._bind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind;
  }

  // chunk_size_limit - computed: false, optional: true, required: false
  private _chunkSizeLimit?: string; 
  public get chunkSizeLimit() {
    return this.getStringAttribute('chunk_size_limit');
  }
  public set chunkSizeLimit(value: string) {
    this._chunkSizeLimit = value;
  }
  public resetChunkSizeLimit() {
    this._chunkSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeLimitInput() {
    return this._chunkSizeLimit;
  }

  // chunk_size_warn_limit - computed: false, optional: true, required: false
  private _chunkSizeWarnLimit?: string; 
  public get chunkSizeWarnLimit() {
    return this.getStringAttribute('chunk_size_warn_limit');
  }
  public set chunkSizeWarnLimit(value: string) {
    this._chunkSizeWarnLimit = value;
  }
  public resetChunkSizeWarnLimit() {
    this._chunkSizeWarnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeWarnLimitInput() {
    return this._chunkSizeWarnLimit;
  }

  // client - computed: false, optional: true, required: false
  private _client = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // deny_keepalive - computed: false, optional: true, required: false
  private _denyKeepalive?: boolean | cdktf.IResolvable; 
  public get denyKeepalive() {
    return this.getBooleanAttribute('deny_keepalive');
  }
  public set denyKeepalive(value: boolean | cdktf.IResolvable) {
    this._denyKeepalive = value;
  }
  public resetDenyKeepalive() {
    this._denyKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyKeepaliveInput() {
    return this._denyKeepalive;
  }

  // linger_timeout - computed: false, optional: true, required: false
  private _lingerTimeout?: number; 
  public get lingerTimeout() {
    return this.getNumberAttribute('linger_timeout');
  }
  public set lingerTimeout(value: number) {
    this._lingerTimeout = value;
  }
  public resetLingerTimeout() {
    this._lingerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lingerTimeoutInput() {
    return this._lingerTimeout;
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

  // resolve_hostname - computed: false, optional: true, required: false
  private _resolveHostname?: boolean | cdktf.IResolvable; 
  public get resolveHostname() {
    return this.getBooleanAttribute('resolve_hostname');
  }
  public set resolveHostname(value: boolean | cdktf.IResolvable) {
    this._resolveHostname = value;
  }
  public resetResolveHostname() {
    this._resolveHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveHostnameInput() {
    return this._resolveHostname;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // send_keepalive_packet - computed: false, optional: true, required: false
  private _sendKeepalivePacket?: boolean | cdktf.IResolvable; 
  public get sendKeepalivePacket() {
    return this.getBooleanAttribute('send_keepalive_packet');
  }
  public set sendKeepalivePacket(value: boolean | cdktf.IResolvable) {
    this._sendKeepalivePacket = value;
  }
  public resetSendKeepalivePacket() {
    this._sendKeepalivePacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendKeepalivePacketInput() {
    return this._sendKeepalivePacket;
  }

  // skip_invalid_event - computed: false, optional: true, required: false
  private _skipInvalidEvent?: boolean | cdktf.IResolvable; 
  public get skipInvalidEvent() {
    return this.getBooleanAttribute('skip_invalid_event');
  }
  public set skipInvalidEvent(value: boolean | cdktf.IResolvable) {
    this._skipInvalidEvent = value;
  }
  public resetSkipInvalidEvent() {
    this._skipInvalidEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInvalidEventInput() {
    return this._skipInvalidEvent;
  }

  // source_address_key - computed: false, optional: true, required: false
  private _sourceAddressKey?: string; 
  public get sourceAddressKey() {
    return this.getStringAttribute('source_address_key');
  }
  public set sourceAddressKey(value: string) {
    this._sourceAddressKey = value;
  }
  public resetSourceAddressKey() {
    this._sourceAddressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressKeyInput() {
    return this._sourceAddressKey;
  }

  // source_hostname_key - computed: false, optional: true, required: false
  private _sourceHostnameKey?: string; 
  public get sourceHostnameKey() {
    return this.getStringAttribute('source_hostname_key');
  }
  public set sourceHostnameKey(value: string) {
    this._sourceHostnameKey = value;
  }
  public resetSourceHostnameKey() {
    this._sourceHostnameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHostnameKeyInput() {
    return this._sourceHostnameKey;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // transport - computed: false, optional: true, required: false
  private _transport = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrok {
  /**
  * If true, keep time field in the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#keep_time_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * The name of this grok section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The pattern of grok. Required parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#pattern DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Process value using specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_format DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Specify time field for event time. If the event doesn't have this field, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Use specified timezone. one can parse/format the time value in the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_zone DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_zone}
  */
  readonly timeZone?: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrokToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrok | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrokToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrok | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrokOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrok | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrok | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepTimeKey = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepTimeKey = value.keepTimeKey;
      this._name = value.name;
      this._pattern = value.pattern;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timeZone = value.timeZone;
    }
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrokList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrok[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrokOutputReference {
    return new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrokOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParse {
  /**
  * Path to the file that includes custom grok patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#custom_pattern_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#custom_pattern_path}
  */
  readonly customPatternPath?: string;
  /**
  * If true, use Fluent::Eventnow(current time) as a timestamp when time_key is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#estimate_current_event DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#estimate_current_event}
  */
  readonly estimateCurrentEvent?: boolean | cdktf.IResolvable;
  /**
  * Specifies the regular expression for matching logs. Regular expression also supports i and m suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#expression DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * Grok Sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#grok DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#grok}
  */
  readonly grok?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrok[] | cdktf.IResolvable;
  /**
  * The key has grok failure reason.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#grok_failure_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#grok_failure_key}
  */
  readonly grokFailureKey?: string;
  /**
  * The pattern of grok.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#grok_pattern DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#grok_pattern}
  */
  readonly grokPattern?: string;
  /**
  * Specify grok pattern series set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#grok_pattern_series DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#grok_pattern_series}
  */
  readonly grokPatternSeries?: string;
  /**
  * The @id parameter specifies a unique name for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#id DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, keep time field in th record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#keep_time_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * If true, uses local time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#localtime DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#localtime}
  */
  readonly localtime?: boolean | cdktf.IResolvable;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#log_level DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * The regexp to match beginning of multiline. This is only for 'multiline_grok'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#multi_line_start_regexp DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#multi_line_start_regexp}
  */
  readonly multiLineStartRegexp?: string;
  /**
  * Process value according to the specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_format DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Uses the specified time format as a fallback in the specified order. You can parse undetermined time format by using time_format_fallbacks. This options is enabled when time_type is mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_format_fallbacks DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_format_fallbacks}
  */
  readonly timeFormatFallbacks?: string;
  /**
  * Specify time field for event time. If the event doesn't have this field, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * parses/formats value according to this type, default is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_type DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Specify timeout for parse processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#timeout DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Uses the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#timezone DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * The @type parameter specifies the type of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#type DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Specify types for converting field into another, i.e: types user_id:integer,paid:bool,paid_usd_amount:float
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#types DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#types}
  */
  readonly types?: string;
  /**
  * If true, uses UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#utc DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_pattern_path: cdktf.stringToTerraform(struct!.customPatternPath),
    estimate_current_event: cdktf.booleanToTerraform(struct!.estimateCurrentEvent),
    expression: cdktf.stringToTerraform(struct!.expression),
    grok: cdktf.listMapper(dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrokToTerraform, false)(struct!.grok),
    grok_failure_key: cdktf.stringToTerraform(struct!.grokFailureKey),
    grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
    grok_pattern_series: cdktf.stringToTerraform(struct!.grokPatternSeries),
    id: cdktf.stringToTerraform(struct!.id),
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    localtime: cdktf.booleanToTerraform(struct!.localtime),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    multi_line_start_regexp: cdktf.stringToTerraform(struct!.multiLineStartRegexp),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_format_fallbacks: cdktf.stringToTerraform(struct!.timeFormatFallbacks),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    types: cdktf.stringToTerraform(struct!.types),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_pattern_path: {
      value: cdktf.stringToHclTerraform(struct!.customPatternPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    estimate_current_event: {
      value: cdktf.booleanToHclTerraform(struct!.estimateCurrentEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrokToHclTerraform, false)(struct!.grok),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrokList",
    },
    grok_failure_key: {
      value: cdktf.stringToHclTerraform(struct!.grokFailureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern: {
      value: cdktf.stringToHclTerraform(struct!.grokPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern_series: {
      value: cdktf.stringToHclTerraform(struct!.grokPatternSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    localtime: {
      value: cdktf.booleanToHclTerraform(struct!.localtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_line_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multiLineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format_fallbacks: {
      value: cdktf.stringToHclTerraform(struct!.timeFormatFallbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    types: {
      value: cdktf.stringToHclTerraform(struct!.types),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPatternPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPatternPath = this._customPatternPath;
    }
    if (this._estimateCurrentEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimateCurrentEvent = this._estimateCurrentEvent;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._grok?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grok = this._grok?.internalValue;
    }
    if (this._grokFailureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokFailureKey = this._grokFailureKey;
    }
    if (this._grokPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPattern = this._grokPattern;
    }
    if (this._grokPatternSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPatternSeries = this._grokPatternSeries;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._localtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localtime = this._localtime;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._multiLineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLineStartRegexp = this._multiLineStartRegexp;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeFormatFallbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormatFallbacks = this._timeFormatFallbacks;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPatternPath = undefined;
      this._estimateCurrentEvent = undefined;
      this._expression = undefined;
      this._grok.internalValue = undefined;
      this._grokFailureKey = undefined;
      this._grokPattern = undefined;
      this._grokPatternSeries = undefined;
      this._id = undefined;
      this._keepTimeKey = undefined;
      this._localtime = undefined;
      this._logLevel = undefined;
      this._multiLineStartRegexp = undefined;
      this._timeFormat = undefined;
      this._timeFormatFallbacks = undefined;
      this._timeKey = undefined;
      this._timeType = undefined;
      this._timeout = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._types = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPatternPath = value.customPatternPath;
      this._estimateCurrentEvent = value.estimateCurrentEvent;
      this._expression = value.expression;
      this._grok.internalValue = value.grok;
      this._grokFailureKey = value.grokFailureKey;
      this._grokPattern = value.grokPattern;
      this._grokPatternSeries = value.grokPatternSeries;
      this._id = value.id;
      this._keepTimeKey = value.keepTimeKey;
      this._localtime = value.localtime;
      this._logLevel = value.logLevel;
      this._multiLineStartRegexp = value.multiLineStartRegexp;
      this._timeFormat = value.timeFormat;
      this._timeFormatFallbacks = value.timeFormatFallbacks;
      this._timeKey = value.timeKey;
      this._timeType = value.timeType;
      this._timeout = value.timeout;
      this._timezone = value.timezone;
      this._type = value.type;
      this._types = value.types;
      this._utc = value.utc;
    }
  }

  // custom_pattern_path - computed: false, optional: true, required: false
  private _customPatternPath?: string; 
  public get customPatternPath() {
    return this.getStringAttribute('custom_pattern_path');
  }
  public set customPatternPath(value: string) {
    this._customPatternPath = value;
  }
  public resetCustomPatternPath() {
    this._customPatternPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternPathInput() {
    return this._customPatternPath;
  }

  // estimate_current_event - computed: false, optional: true, required: false
  private _estimateCurrentEvent?: boolean | cdktf.IResolvable; 
  public get estimateCurrentEvent() {
    return this.getBooleanAttribute('estimate_current_event');
  }
  public set estimateCurrentEvent(value: boolean | cdktf.IResolvable) {
    this._estimateCurrentEvent = value;
  }
  public resetEstimateCurrentEvent() {
    this._estimateCurrentEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimateCurrentEventInput() {
    return this._estimateCurrentEvent;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // grok - computed: false, optional: true, required: false
  private _grok = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrokList(this, "grok", false);
  public get grok() {
    return this._grok;
  }
  public putGrok(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseGrok[] | cdktf.IResolvable) {
    this._grok.internalValue = value;
  }
  public resetGrok() {
    this._grok.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokInput() {
    return this._grok.internalValue;
  }

  // grok_failure_key - computed: false, optional: true, required: false
  private _grokFailureKey?: string; 
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }
  public set grokFailureKey(value: string) {
    this._grokFailureKey = value;
  }
  public resetGrokFailureKey() {
    this._grokFailureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokFailureKeyInput() {
    return this._grokFailureKey;
  }

  // grok_pattern - computed: false, optional: true, required: false
  private _grokPattern?: string; 
  public get grokPattern() {
    return this.getStringAttribute('grok_pattern');
  }
  public set grokPattern(value: string) {
    this._grokPattern = value;
  }
  public resetGrokPattern() {
    this._grokPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternInput() {
    return this._grokPattern;
  }

  // grok_pattern_series - computed: false, optional: true, required: false
  private _grokPatternSeries?: string; 
  public get grokPatternSeries() {
    return this.getStringAttribute('grok_pattern_series');
  }
  public set grokPatternSeries(value: string) {
    this._grokPatternSeries = value;
  }
  public resetGrokPatternSeries() {
    this._grokPatternSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternSeriesInput() {
    return this._grokPatternSeries;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
  }

  // localtime - computed: false, optional: true, required: false
  private _localtime?: boolean | cdktf.IResolvable; 
  public get localtime() {
    return this.getBooleanAttribute('localtime');
  }
  public set localtime(value: boolean | cdktf.IResolvable) {
    this._localtime = value;
  }
  public resetLocaltime() {
    this._localtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localtimeInput() {
    return this._localtime;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // multi_line_start_regexp - computed: false, optional: true, required: false
  private _multiLineStartRegexp?: string; 
  public get multiLineStartRegexp() {
    return this.getStringAttribute('multi_line_start_regexp');
  }
  public set multiLineStartRegexp(value: string) {
    this._multiLineStartRegexp = value;
  }
  public resetMultiLineStartRegexp() {
    this._multiLineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineStartRegexpInput() {
    return this._multiLineStartRegexp;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_format_fallbacks - computed: false, optional: true, required: false
  private _timeFormatFallbacks?: string; 
  public get timeFormatFallbacks() {
    return this.getStringAttribute('time_format_fallbacks');
  }
  public set timeFormatFallbacks(value: string) {
    this._timeFormatFallbacks = value;
  }
  public resetTimeFormatFallbacks() {
    this._timeFormatFallbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatFallbacksInput() {
    return this._timeFormatFallbacks;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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

  // types - computed: false, optional: true, required: false
  private _types?: string; 
  public get types() {
    return this.getStringAttribute('types');
  }
  public set types(value: string) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransport {
  /**
  * for Cert generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ca_cert_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ca_cert_path}
  */
  readonly caCertPath?: string;
  /**
  * for Cert signed by public CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ca_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ca_path}
  */
  readonly caPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ca_private_key_passphrase DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ca_private_key_passphrase}
  */
  readonly caPrivateKeyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ca_private_key_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ca_private_key_path}
  */
  readonly caPrivateKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#cert_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#cert_path}
  */
  readonly certPath?: string;
  /**
  * other parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#cert_verifier DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#cert_verifier}
  */
  readonly certVerifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ciphers DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#client_cert_auth DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#client_cert_auth}
  */
  readonly clientCertAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#insecure DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#private_key_passphrase DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#private_key_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * The protocal name of this plugin, i.e: tls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#protocol DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#version DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransportToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert_path: cdktf.stringToTerraform(struct!.caCertPath),
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    ca_private_key_passphrase: cdktf.stringToTerraform(struct!.caPrivateKeyPassphrase),
    ca_private_key_path: cdktf.stringToTerraform(struct!.caPrivateKeyPath),
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    cert_verifier: cdktf.stringToTerraform(struct!.certVerifier),
    ciphers: cdktf.stringToTerraform(struct!.ciphers),
    client_cert_auth: cdktf.booleanToTerraform(struct!.clientCertAuth),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    private_key_passphrase: cdktf.stringToTerraform(struct!.privateKeyPassphrase),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransportToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.caCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_private_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.caPrivateKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.caPrivateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_path: {
      value: cdktf.stringToHclTerraform(struct!.certPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_verifier: {
      value: cdktf.stringToHclTerraform(struct!.certVerifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ciphers: {
      value: cdktf.stringToHclTerraform(struct!.ciphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_auth: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertPath = this._caCertPath;
    }
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._caPrivateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPrivateKeyPassphrase = this._caPrivateKeyPassphrase;
    }
    if (this._caPrivateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPrivateKeyPath = this._caPrivateKeyPath;
    }
    if (this._certPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPath = this._certPath;
    }
    if (this._certVerifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.certVerifier = this._certVerifier;
    }
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._clientCertAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertAuth = this._clientCertAuth;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._privateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphrase = this._privateKeyPassphrase;
    }
    if (this._privateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPath = this._privateKeyPath;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertPath = undefined;
      this._caPath = undefined;
      this._caPrivateKeyPassphrase = undefined;
      this._caPrivateKeyPath = undefined;
      this._certPath = undefined;
      this._certVerifier = undefined;
      this._ciphers = undefined;
      this._clientCertAuth = undefined;
      this._insecure = undefined;
      this._privateKeyPassphrase = undefined;
      this._privateKeyPath = undefined;
      this._protocol = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertPath = value.caCertPath;
      this._caPath = value.caPath;
      this._caPrivateKeyPassphrase = value.caPrivateKeyPassphrase;
      this._caPrivateKeyPath = value.caPrivateKeyPath;
      this._certPath = value.certPath;
      this._certVerifier = value.certVerifier;
      this._ciphers = value.ciphers;
      this._clientCertAuth = value.clientCertAuth;
      this._insecure = value.insecure;
      this._privateKeyPassphrase = value.privateKeyPassphrase;
      this._privateKeyPath = value.privateKeyPath;
      this._protocol = value.protocol;
      this._version = value.version;
    }
  }

  // ca_cert_path - computed: false, optional: true, required: false
  private _caCertPath?: string; 
  public get caCertPath() {
    return this.getStringAttribute('ca_cert_path');
  }
  public set caCertPath(value: string) {
    this._caCertPath = value;
  }
  public resetCaCertPath() {
    this._caCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPathInput() {
    return this._caCertPath;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // ca_private_key_passphrase - computed: false, optional: true, required: false
  private _caPrivateKeyPassphrase?: string; 
  public get caPrivateKeyPassphrase() {
    return this.getStringAttribute('ca_private_key_passphrase');
  }
  public set caPrivateKeyPassphrase(value: string) {
    this._caPrivateKeyPassphrase = value;
  }
  public resetCaPrivateKeyPassphrase() {
    this._caPrivateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPrivateKeyPassphraseInput() {
    return this._caPrivateKeyPassphrase;
  }

  // ca_private_key_path - computed: false, optional: true, required: false
  private _caPrivateKeyPath?: string; 
  public get caPrivateKeyPath() {
    return this.getStringAttribute('ca_private_key_path');
  }
  public set caPrivateKeyPath(value: string) {
    this._caPrivateKeyPath = value;
  }
  public resetCaPrivateKeyPath() {
    this._caPrivateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPrivateKeyPathInput() {
    return this._caPrivateKeyPath;
  }

  // cert_path - computed: false, optional: true, required: false
  private _certPath?: string; 
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }
  public set certPath(value: string) {
    this._certPath = value;
  }
  public resetCertPath() {
    this._certPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // cert_verifier - computed: false, optional: true, required: false
  private _certVerifier?: string; 
  public get certVerifier() {
    return this.getStringAttribute('cert_verifier');
  }
  public set certVerifier(value: string) {
    this._certVerifier = value;
  }
  public resetCertVerifier() {
    this._certVerifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certVerifierInput() {
    return this._certVerifier;
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string; 
  public get ciphers() {
    return this.getStringAttribute('ciphers');
  }
  public set ciphers(value: string) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // client_cert_auth - computed: false, optional: true, required: false
  private _clientCertAuth?: boolean | cdktf.IResolvable; 
  public get clientCertAuth() {
    return this.getBooleanAttribute('client_cert_auth');
  }
  public set clientCertAuth(value: boolean | cdktf.IResolvable) {
    this._clientCertAuth = value;
  }
  public resetClientCertAuth() {
    this._clientCertAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertAuthInput() {
    return this._clientCertAuth;
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

  // private_key_passphrase - computed: false, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttp {
  /**
  * Adds HTTP_ prefix headers to the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#add_http_headers DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#add_http_headers}
  */
  readonly addHttpHeaders?: boolean | cdktf.IResolvable;
  /**
  * Adds REMOTE_ADDR field to the record. The value of REMOTE_ADDR is the client's address. i.e: X-Forwarded-For: host1, host2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#add_remote_addr DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#add_remote_addr}
  */
  readonly addRemoteAddr?: string;
  /**
  * The port to listen to, default is '0.0.0.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#bind DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#bind}
  */
  readonly bind?: string;
  /**
  * The size limit of the POSTed element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#body_size_limit DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#body_size_limit}
  */
  readonly bodySizeLimit?: string;
  /**
  * Whitelist domains for CORS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#cors_all_origins DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#cors_all_origins}
  */
  readonly corsAllOrigins?: string;
  /**
  * Add Access-Control-Allow-Credentials header. It's needed when a request's credentials mode is include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#cors_allow_credentials DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#cors_allow_credentials}
  */
  readonly corsAllowCredentials?: string;
  /**
  * The timeout limit for keeping the connection alive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#keepalive_timeout DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#keepalive_timeout}
  */
  readonly keepaliveTimeout?: string;
  /**
  * The parse section of http plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#parse DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#parse}
  */
  readonly parse?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParse;
  /**
  * The port to listen to, default is 9880.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#port DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Responds with an empty GIF image of 1x1 pixel (rather than an empty string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#responds_with_empty_img DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#responds_with_empty_img}
  */
  readonly respondsWithEmptyImg?: boolean | cdktf.IResolvable;
  /**
  * The transport section of http plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#transport DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#transport}
  */
  readonly transport?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransport;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_http_headers: cdktf.booleanToTerraform(struct!.addHttpHeaders),
    add_remote_addr: cdktf.stringToTerraform(struct!.addRemoteAddr),
    bind: cdktf.stringToTerraform(struct!.bind),
    body_size_limit: cdktf.stringToTerraform(struct!.bodySizeLimit),
    cors_all_origins: cdktf.stringToTerraform(struct!.corsAllOrigins),
    cors_allow_credentials: cdktf.stringToTerraform(struct!.corsAllowCredentials),
    keepalive_timeout: cdktf.stringToTerraform(struct!.keepaliveTimeout),
    parse: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseToTerraform(struct!.parse),
    port: cdktf.numberToTerraform(struct!.port),
    responds_with_empty_img: cdktf.booleanToTerraform(struct!.respondsWithEmptyImg),
    transport: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransportToTerraform(struct!.transport),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_http_headers: {
      value: cdktf.booleanToHclTerraform(struct!.addHttpHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_remote_addr: {
      value: cdktf.stringToHclTerraform(struct!.addRemoteAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind: {
      value: cdktf.stringToHclTerraform(struct!.bind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.bodySizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cors_all_origins: {
      value: cdktf.stringToHclTerraform(struct!.corsAllOrigins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cors_allow_credentials: {
      value: cdktf.stringToHclTerraform(struct!.corsAllowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_timeout: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseToHclTerraform(struct!.parse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParse",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    responds_with_empty_img: {
      value: cdktf.booleanToHclTerraform(struct!.respondsWithEmptyImg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transport: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttpHeaders = this._addHttpHeaders;
    }
    if (this._addRemoteAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addRemoteAddr = this._addRemoteAddr;
    }
    if (this._bind !== undefined) {
      hasAnyValues = true;
      internalValueResult.bind = this._bind;
    }
    if (this._bodySizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodySizeLimit = this._bodySizeLimit;
    }
    if (this._corsAllOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsAllOrigins = this._corsAllOrigins;
    }
    if (this._corsAllowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsAllowCredentials = this._corsAllowCredentials;
    }
    if (this._keepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTimeout = this._keepaliveTimeout;
    }
    if (this._parse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parse = this._parse?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._respondsWithEmptyImg !== undefined) {
      hasAnyValues = true;
      internalValueResult.respondsWithEmptyImg = this._respondsWithEmptyImg;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addHttpHeaders = undefined;
      this._addRemoteAddr = undefined;
      this._bind = undefined;
      this._bodySizeLimit = undefined;
      this._corsAllOrigins = undefined;
      this._corsAllowCredentials = undefined;
      this._keepaliveTimeout = undefined;
      this._parse.internalValue = undefined;
      this._port = undefined;
      this._respondsWithEmptyImg = undefined;
      this._transport.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addHttpHeaders = value.addHttpHeaders;
      this._addRemoteAddr = value.addRemoteAddr;
      this._bind = value.bind;
      this._bodySizeLimit = value.bodySizeLimit;
      this._corsAllOrigins = value.corsAllOrigins;
      this._corsAllowCredentials = value.corsAllowCredentials;
      this._keepaliveTimeout = value.keepaliveTimeout;
      this._parse.internalValue = value.parse;
      this._port = value.port;
      this._respondsWithEmptyImg = value.respondsWithEmptyImg;
      this._transport.internalValue = value.transport;
    }
  }

  // add_http_headers - computed: false, optional: true, required: false
  private _addHttpHeaders?: boolean | cdktf.IResolvable; 
  public get addHttpHeaders() {
    return this.getBooleanAttribute('add_http_headers');
  }
  public set addHttpHeaders(value: boolean | cdktf.IResolvable) {
    this._addHttpHeaders = value;
  }
  public resetAddHttpHeaders() {
    this._addHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttpHeadersInput() {
    return this._addHttpHeaders;
  }

  // add_remote_addr - computed: false, optional: true, required: false
  private _addRemoteAddr?: string; 
  public get addRemoteAddr() {
    return this.getStringAttribute('add_remote_addr');
  }
  public set addRemoteAddr(value: string) {
    this._addRemoteAddr = value;
  }
  public resetAddRemoteAddr() {
    this._addRemoteAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRemoteAddrInput() {
    return this._addRemoteAddr;
  }

  // bind - computed: false, optional: true, required: false
  private _bind?: string; 
  public get bind() {
    return this.getStringAttribute('bind');
  }
  public set bind(value: string) {
    this._bind = value;
  }
  public resetBind() {
    this._bind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind;
  }

  // body_size_limit - computed: false, optional: true, required: false
  private _bodySizeLimit?: string; 
  public get bodySizeLimit() {
    return this.getStringAttribute('body_size_limit');
  }
  public set bodySizeLimit(value: string) {
    this._bodySizeLimit = value;
  }
  public resetBodySizeLimit() {
    this._bodySizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodySizeLimitInput() {
    return this._bodySizeLimit;
  }

  // cors_all_origins - computed: false, optional: true, required: false
  private _corsAllOrigins?: string; 
  public get corsAllOrigins() {
    return this.getStringAttribute('cors_all_origins');
  }
  public set corsAllOrigins(value: string) {
    this._corsAllOrigins = value;
  }
  public resetCorsAllOrigins() {
    this._corsAllOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsAllOriginsInput() {
    return this._corsAllOrigins;
  }

  // cors_allow_credentials - computed: false, optional: true, required: false
  private _corsAllowCredentials?: string; 
  public get corsAllowCredentials() {
    return this.getStringAttribute('cors_allow_credentials');
  }
  public set corsAllowCredentials(value: string) {
    this._corsAllowCredentials = value;
  }
  public resetCorsAllowCredentials() {
    this._corsAllowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsAllowCredentialsInput() {
    return this._corsAllowCredentials;
  }

  // keepalive_timeout - computed: false, optional: true, required: false
  private _keepaliveTimeout?: string; 
  public get keepaliveTimeout() {
    return this.getStringAttribute('keepalive_timeout');
  }
  public set keepaliveTimeout(value: string) {
    this._keepaliveTimeout = value;
  }
  public resetKeepaliveTimeout() {
    this._keepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeoutInput() {
    return this._keepaliveTimeout;
  }

  // parse - computed: false, optional: true, required: false
  private _parse = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParseOutputReference(this, "parse");
  public get parse() {
    return this._parse;
  }
  public putParse(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpParse) {
    this._parse.internalValue = value;
  }
  public resetParse() {
    this._parse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseInput() {
    return this._parse.internalValue;
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

  // responds_with_empty_img - computed: false, optional: true, required: false
  private _respondsWithEmptyImg?: boolean | cdktf.IResolvable; 
  public get respondsWithEmptyImg() {
    return this.getBooleanAttribute('responds_with_empty_img');
  }
  public set respondsWithEmptyImg(value: boolean | cdktf.IResolvable) {
    this._respondsWithEmptyImg = value;
  }
  public resetRespondsWithEmptyImg() {
    this._respondsWithEmptyImg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondsWithEmptyImgInput() {
    return this._respondsWithEmptyImg;
  }

  // transport - computed: false, optional: true, required: false
  private _transport = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgent {
  /**
  * The bind address to listen to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#bind DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#bind}
  */
  readonly bind?: string;
  /**
  * The interval time between event emits. This will be used when 'tag' is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#emit_interval DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#emit_interval}
  */
  readonly emitInterval?: number;
  /**
  * You can set this option to false to remove the config field from the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#include_config DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#include_config}
  */
  readonly includeConfig?: boolean | cdktf.IResolvable;
  /**
  * You can set this option to false to remove the retry field from the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#include_retry DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#include_retry}
  */
  readonly includeRetry?: boolean | cdktf.IResolvable;
  /**
  * The port to listen to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#port DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * If you set this parameter, this plugin emits metrics as records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#tag DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgentToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind: cdktf.stringToTerraform(struct!.bind),
    emit_interval: cdktf.numberToTerraform(struct!.emitInterval),
    include_config: cdktf.booleanToTerraform(struct!.includeConfig),
    include_retry: cdktf.booleanToTerraform(struct!.includeRetry),
    port: cdktf.numberToTerraform(struct!.port),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgentToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind: {
      value: cdktf.stringToHclTerraform(struct!.bind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emit_interval: {
      value: cdktf.numberToHclTerraform(struct!.emitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_config: {
      value: cdktf.booleanToHclTerraform(struct!.includeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_retry: {
      value: cdktf.booleanToHclTerraform(struct!.includeRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bind !== undefined) {
      hasAnyValues = true;
      internalValueResult.bind = this._bind;
    }
    if (this._emitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitInterval = this._emitInterval;
    }
    if (this._includeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeConfig = this._includeConfig;
    }
    if (this._includeRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRetry = this._includeRetry;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bind = undefined;
      this._emitInterval = undefined;
      this._includeConfig = undefined;
      this._includeRetry = undefined;
      this._port = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bind = value.bind;
      this._emitInterval = value.emitInterval;
      this._includeConfig = value.includeConfig;
      this._includeRetry = value.includeRetry;
      this._port = value.port;
      this._tag = value.tag;
    }
  }

  // bind - computed: false, optional: true, required: false
  private _bind?: string; 
  public get bind() {
    return this.getStringAttribute('bind');
  }
  public set bind(value: string) {
    this._bind = value;
  }
  public resetBind() {
    this._bind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind;
  }

  // emit_interval - computed: false, optional: true, required: false
  private _emitInterval?: number; 
  public get emitInterval() {
    return this.getNumberAttribute('emit_interval');
  }
  public set emitInterval(value: number) {
    this._emitInterval = value;
  }
  public resetEmitInterval() {
    this._emitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitIntervalInput() {
    return this._emitInterval;
  }

  // include_config - computed: false, optional: true, required: false
  private _includeConfig?: boolean | cdktf.IResolvable; 
  public get includeConfig() {
    return this.getBooleanAttribute('include_config');
  }
  public set includeConfig(value: boolean | cdktf.IResolvable) {
    this._includeConfig = value;
  }
  public resetIncludeConfig() {
    this._includeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeConfigInput() {
    return this._includeConfig;
  }

  // include_retry - computed: false, optional: true, required: false
  private _includeRetry?: boolean | cdktf.IResolvable; 
  public get includeRetry() {
    return this.getBooleanAttribute('include_retry');
  }
  public set includeRetry(value: boolean | cdktf.IResolvable) {
    this._includeRetry = value;
  }
  public resetIncludeRetry() {
    this._includeRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRetryInput() {
    return this._includeRetry;
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSample {
  /**
  * If specified, each generated event has an auto-incremented key field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#auto_increment_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#auto_increment_key}
  */
  readonly autoIncrementKey?: string;
  /**
  * It configures how many events to generate per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#rate DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#rate}
  */
  readonly rate?: number;
  /**
  * The sample data to be generated. It should be either an array of JSON hashes or a single JSON hash. If it is an array of JSON hashes, the hashes in the array are cycled through in order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#sample DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#sample}
  */
  readonly sample?: string;
  /**
  * The number of events in the event stream of each emit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#size DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#size}
  */
  readonly size?: number;
  /**
  * The tag of the event. The value is the tag assigned to the generated events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#tag DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSampleToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_increment_key: cdktf.stringToTerraform(struct!.autoIncrementKey),
    rate: cdktf.numberToTerraform(struct!.rate),
    sample: cdktf.stringToTerraform(struct!.sample),
    size: cdktf.numberToTerraform(struct!.size),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSampleToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_increment_key: {
      value: cdktf.stringToHclTerraform(struct!.autoIncrementKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample: {
      value: cdktf.stringToHclTerraform(struct!.sample),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSample | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoIncrementKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncrementKey = this._autoIncrementKey;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._sample !== undefined) {
      hasAnyValues = true;
      internalValueResult.sample = this._sample;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSample | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoIncrementKey = undefined;
      this._rate = undefined;
      this._sample = undefined;
      this._size = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoIncrementKey = value.autoIncrementKey;
      this._rate = value.rate;
      this._sample = value.sample;
      this._size = value.size;
      this._tag = value.tag;
    }
  }

  // auto_increment_key - computed: false, optional: true, required: false
  private _autoIncrementKey?: string; 
  public get autoIncrementKey() {
    return this.getStringAttribute('auto_increment_key');
  }
  public set autoIncrementKey(value: string) {
    this._autoIncrementKey = value;
  }
  public resetAutoIncrementKey() {
    this._autoIncrementKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementKeyInput() {
    return this._autoIncrementKey;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // sample - computed: false, optional: true, required: false
  private _sample?: string; 
  public get sample() {
    return this.getStringAttribute('sample');
  }
  public set sample(value: string) {
    this._sample = value;
  }
  public resetSample() {
    this._sample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRule {
  /**
  * Maximum number of lines allowed from a group in rate_period time interval. The default value of -1 doesn't throttle log files of that group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#limit DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * match parameter is used to check if a file belongs to a particular group based on hash keys (named captures from pattern) and hash values (regexp in string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#match DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRuleToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRuleToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._match = value.match;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroup {
  /**
  * Specifies the regular expression for extracting metadata (namespace, podname) from log file path. Default value of the pattern regexp extracts information about namespace, podname, docker_id, container of the log (K8s specific).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#pattern DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Time period in which the group line limit is applied. in_tail resets the counter after every rate_period interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#rate_period DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#rate_period}
  */
  readonly ratePeriod?: number;
  /**
  * Grouping rules for log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#rule DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#rule}
  */
  readonly rule: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRule;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    rate_period: cdktf.numberToTerraform(struct!.ratePeriod),
    rule: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRuleToTerraform(struct!.rule),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_period: {
      value: cdktf.numberToHclTerraform(struct!.ratePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRuleToHclTerraform(struct!.rule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._ratePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratePeriod = this._ratePeriod;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._ratePeriod = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._ratePeriod = value.ratePeriod;
      this._rule.internalValue = value.rule;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // rate_period - computed: false, optional: true, required: false
  private _ratePeriod?: number; 
  public get ratePeriod() {
    return this.getNumberAttribute('rate_period');
  }
  public set ratePeriod(value: number) {
    this._ratePeriod = value;
  }
  public resetRatePeriod() {
    this._ratePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePeriodInput() {
    return this._ratePeriod;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrok {
  /**
  * If true, keep time field in the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#keep_time_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * The name of this grok section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The pattern of grok. Required parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#pattern DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Process value using specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_format DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Specify time field for event time. If the event doesn't have this field, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Use specified timezone. one can parse/format the time value in the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_zone DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_zone}
  */
  readonly timeZone?: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrokToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrok | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrokToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrok | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrokOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrok | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrok | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepTimeKey = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepTimeKey = value.keepTimeKey;
      this._name = value.name;
      this._pattern = value.pattern;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timeZone = value.timeZone;
    }
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrokList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrok[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrokOutputReference {
    return new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrokOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParse {
  /**
  * Path to the file that includes custom grok patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#custom_pattern_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#custom_pattern_path}
  */
  readonly customPatternPath?: string;
  /**
  * If true, use Fluent::Eventnow(current time) as a timestamp when time_key is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#estimate_current_event DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#estimate_current_event}
  */
  readonly estimateCurrentEvent?: boolean | cdktf.IResolvable;
  /**
  * Specifies the regular expression for matching logs. Regular expression also supports i and m suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#expression DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * Grok Sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#grok DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#grok}
  */
  readonly grok?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrok[] | cdktf.IResolvable;
  /**
  * The key has grok failure reason.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#grok_failure_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#grok_failure_key}
  */
  readonly grokFailureKey?: string;
  /**
  * The pattern of grok.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#grok_pattern DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#grok_pattern}
  */
  readonly grokPattern?: string;
  /**
  * Specify grok pattern series set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#grok_pattern_series DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#grok_pattern_series}
  */
  readonly grokPatternSeries?: string;
  /**
  * The @id parameter specifies a unique name for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#id DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, keep time field in th record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#keep_time_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * If true, uses local time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#localtime DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#localtime}
  */
  readonly localtime?: boolean | cdktf.IResolvable;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#log_level DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * The regexp to match beginning of multiline. This is only for 'multiline_grok'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#multi_line_start_regexp DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#multi_line_start_regexp}
  */
  readonly multiLineStartRegexp?: string;
  /**
  * Process value according to the specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_format DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Uses the specified time format as a fallback in the specified order. You can parse undetermined time format by using time_format_fallbacks. This options is enabled when time_type is mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_format_fallbacks DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_format_fallbacks}
  */
  readonly timeFormatFallbacks?: string;
  /**
  * Specify time field for event time. If the event doesn't have this field, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * parses/formats value according to this type, default is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#time_type DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Specify timeout for parse processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#timeout DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Uses the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#timezone DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * The @type parameter specifies the type of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#type DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Specify types for converting field into another, i.e: types user_id:integer,paid:bool,paid_usd_amount:float
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#types DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#types}
  */
  readonly types?: string;
  /**
  * If true, uses UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#utc DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_pattern_path: cdktf.stringToTerraform(struct!.customPatternPath),
    estimate_current_event: cdktf.booleanToTerraform(struct!.estimateCurrentEvent),
    expression: cdktf.stringToTerraform(struct!.expression),
    grok: cdktf.listMapper(dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrokToTerraform, false)(struct!.grok),
    grok_failure_key: cdktf.stringToTerraform(struct!.grokFailureKey),
    grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
    grok_pattern_series: cdktf.stringToTerraform(struct!.grokPatternSeries),
    id: cdktf.stringToTerraform(struct!.id),
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    localtime: cdktf.booleanToTerraform(struct!.localtime),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    multi_line_start_regexp: cdktf.stringToTerraform(struct!.multiLineStartRegexp),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_format_fallbacks: cdktf.stringToTerraform(struct!.timeFormatFallbacks),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    types: cdktf.stringToTerraform(struct!.types),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_pattern_path: {
      value: cdktf.stringToHclTerraform(struct!.customPatternPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    estimate_current_event: {
      value: cdktf.booleanToHclTerraform(struct!.estimateCurrentEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrokToHclTerraform, false)(struct!.grok),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrokList",
    },
    grok_failure_key: {
      value: cdktf.stringToHclTerraform(struct!.grokFailureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern: {
      value: cdktf.stringToHclTerraform(struct!.grokPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern_series: {
      value: cdktf.stringToHclTerraform(struct!.grokPatternSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    localtime: {
      value: cdktf.booleanToHclTerraform(struct!.localtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_line_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multiLineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format_fallbacks: {
      value: cdktf.stringToHclTerraform(struct!.timeFormatFallbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    types: {
      value: cdktf.stringToHclTerraform(struct!.types),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPatternPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPatternPath = this._customPatternPath;
    }
    if (this._estimateCurrentEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimateCurrentEvent = this._estimateCurrentEvent;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._grok?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grok = this._grok?.internalValue;
    }
    if (this._grokFailureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokFailureKey = this._grokFailureKey;
    }
    if (this._grokPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPattern = this._grokPattern;
    }
    if (this._grokPatternSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPatternSeries = this._grokPatternSeries;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._localtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localtime = this._localtime;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._multiLineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLineStartRegexp = this._multiLineStartRegexp;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeFormatFallbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormatFallbacks = this._timeFormatFallbacks;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPatternPath = undefined;
      this._estimateCurrentEvent = undefined;
      this._expression = undefined;
      this._grok.internalValue = undefined;
      this._grokFailureKey = undefined;
      this._grokPattern = undefined;
      this._grokPatternSeries = undefined;
      this._id = undefined;
      this._keepTimeKey = undefined;
      this._localtime = undefined;
      this._logLevel = undefined;
      this._multiLineStartRegexp = undefined;
      this._timeFormat = undefined;
      this._timeFormatFallbacks = undefined;
      this._timeKey = undefined;
      this._timeType = undefined;
      this._timeout = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._types = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPatternPath = value.customPatternPath;
      this._estimateCurrentEvent = value.estimateCurrentEvent;
      this._expression = value.expression;
      this._grok.internalValue = value.grok;
      this._grokFailureKey = value.grokFailureKey;
      this._grokPattern = value.grokPattern;
      this._grokPatternSeries = value.grokPatternSeries;
      this._id = value.id;
      this._keepTimeKey = value.keepTimeKey;
      this._localtime = value.localtime;
      this._logLevel = value.logLevel;
      this._multiLineStartRegexp = value.multiLineStartRegexp;
      this._timeFormat = value.timeFormat;
      this._timeFormatFallbacks = value.timeFormatFallbacks;
      this._timeKey = value.timeKey;
      this._timeType = value.timeType;
      this._timeout = value.timeout;
      this._timezone = value.timezone;
      this._type = value.type;
      this._types = value.types;
      this._utc = value.utc;
    }
  }

  // custom_pattern_path - computed: false, optional: true, required: false
  private _customPatternPath?: string; 
  public get customPatternPath() {
    return this.getStringAttribute('custom_pattern_path');
  }
  public set customPatternPath(value: string) {
    this._customPatternPath = value;
  }
  public resetCustomPatternPath() {
    this._customPatternPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternPathInput() {
    return this._customPatternPath;
  }

  // estimate_current_event - computed: false, optional: true, required: false
  private _estimateCurrentEvent?: boolean | cdktf.IResolvable; 
  public get estimateCurrentEvent() {
    return this.getBooleanAttribute('estimate_current_event');
  }
  public set estimateCurrentEvent(value: boolean | cdktf.IResolvable) {
    this._estimateCurrentEvent = value;
  }
  public resetEstimateCurrentEvent() {
    this._estimateCurrentEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimateCurrentEventInput() {
    return this._estimateCurrentEvent;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // grok - computed: false, optional: true, required: false
  private _grok = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrokList(this, "grok", false);
  public get grok() {
    return this._grok;
  }
  public putGrok(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseGrok[] | cdktf.IResolvable) {
    this._grok.internalValue = value;
  }
  public resetGrok() {
    this._grok.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokInput() {
    return this._grok.internalValue;
  }

  // grok_failure_key - computed: false, optional: true, required: false
  private _grokFailureKey?: string; 
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }
  public set grokFailureKey(value: string) {
    this._grokFailureKey = value;
  }
  public resetGrokFailureKey() {
    this._grokFailureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokFailureKeyInput() {
    return this._grokFailureKey;
  }

  // grok_pattern - computed: false, optional: true, required: false
  private _grokPattern?: string; 
  public get grokPattern() {
    return this.getStringAttribute('grok_pattern');
  }
  public set grokPattern(value: string) {
    this._grokPattern = value;
  }
  public resetGrokPattern() {
    this._grokPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternInput() {
    return this._grokPattern;
  }

  // grok_pattern_series - computed: false, optional: true, required: false
  private _grokPatternSeries?: string; 
  public get grokPatternSeries() {
    return this.getStringAttribute('grok_pattern_series');
  }
  public set grokPatternSeries(value: string) {
    this._grokPatternSeries = value;
  }
  public resetGrokPatternSeries() {
    this._grokPatternSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternSeriesInput() {
    return this._grokPatternSeries;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
  }

  // localtime - computed: false, optional: true, required: false
  private _localtime?: boolean | cdktf.IResolvable; 
  public get localtime() {
    return this.getBooleanAttribute('localtime');
  }
  public set localtime(value: boolean | cdktf.IResolvable) {
    this._localtime = value;
  }
  public resetLocaltime() {
    this._localtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localtimeInput() {
    return this._localtime;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // multi_line_start_regexp - computed: false, optional: true, required: false
  private _multiLineStartRegexp?: string; 
  public get multiLineStartRegexp() {
    return this.getStringAttribute('multi_line_start_regexp');
  }
  public set multiLineStartRegexp(value: string) {
    this._multiLineStartRegexp = value;
  }
  public resetMultiLineStartRegexp() {
    this._multiLineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineStartRegexpInput() {
    return this._multiLineStartRegexp;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_format_fallbacks - computed: false, optional: true, required: false
  private _timeFormatFallbacks?: string; 
  public get timeFormatFallbacks() {
    return this.getStringAttribute('time_format_fallbacks');
  }
  public set timeFormatFallbacks(value: string) {
    this._timeFormatFallbacks = value;
  }
  public resetTimeFormatFallbacks() {
    this._timeFormatFallbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatFallbacksInput() {
    return this._timeFormatFallbacks;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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

  // types - computed: false, optional: true, required: false
  private _types?: string; 
  public get types() {
    return this.getStringAttribute('types');
  }
  public set types(value: string) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTail {
  /**
  * Emits unmatched lines when <parse> format is not matched for incoming logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#emit_unmatched_lines DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#emit_unmatched_lines}
  */
  readonly emitUnmatchedLines?: boolean | cdktf.IResolvable;
  /**
  * Enables the additional inotify-based watcher. Setting this parameter to false will disable the inotify events and use only timer watcher for file tailing. This option is mainly for avoiding the stuck issue with inotify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#enable_stat_watcher DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#enable_stat_watcher}
  */
  readonly enableStatWatcher?: boolean | cdktf.IResolvable;
  /**
  * Enables the additional watch timer. Setting this parameter to false will significantly reduce CPU and I/O consumption when tailing a large number of files on systems with inotify support. The default is true which results in an additional 1 second timer being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#enable_watch_timer DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#enable_watch_timer}
  */
  readonly enableWatchTimer?: boolean | cdktf.IResolvable;
  /**
  * Specifies the encoding of reading lines. By default, in_tail emits string value as ASCII-8BIT encoding. If encoding is specified, in_tail changes string to encoding. If encoding and fromEncoding both are specified, in_tail tries to encode string from fromEncoding to encoding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#encoding DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#encoding}
  */
  readonly encoding?: string;
  /**
  * The paths excluded from the watcher list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#exclude_path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#exclude_path}
  */
  readonly excludePath?: string[];
  /**
  * Avoid to read rotated files duplicately. You should set true when you use * or strftime format in path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#follow_inodes DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#follow_inodes}
  */
  readonly followInodes?: boolean | cdktf.IResolvable;
  /**
  * Specifies the encoding of reading lines. By default, in_tail emits string value as ASCII-8BIT encoding. If encoding is specified, in_tail changes string to encoding. If encoding and fromEncoding both are specified, in_tail tries to encode string from fromEncoding to encoding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#from_encoding DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#from_encoding}
  */
  readonly fromEncoding?: string;
  /**
  * The in_tail plugin can assign each log file to a group, based on user defined rules. The limit parameter controls the total number of lines collected for a group within a rate_period time interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#group DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#group}
  */
  readonly group?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroup;
  /**
  * If you have to exclude the non-permission files from the watch list, set this parameter to true. It suppresses the repeated permission error logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#ignore_repeated_permission_error DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#ignore_repeated_permission_error}
  */
  readonly ignoreRepeatedPermissionError?: boolean | cdktf.IResolvable;
  /**
  * Limits the watching files that the modification time is within the specified time range when using * in path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#limit_recently_modified DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#limit_recently_modified}
  */
  readonly limitRecentlyModified?: number;
  /**
  * The maximum length of a line. Longer lines than it will be just skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#max_line_size DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#max_line_size}
  */
  readonly maxLineSize?: number;
  /**
  * The interval of flushing the buffer for multiline format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#multiline_flush_interval DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#multiline_flush_interval}
  */
  readonly multilineFlushInterval?: number;
  /**
  * Opens and closes the file on every update instead of leaving it open until it gets rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#open_on_every_update DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#open_on_every_update}
  */
  readonly openOnEveryUpdate?: boolean | cdktf.IResolvable;
  /**
  * Parse defines various parameters for the parse plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#parse DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#parse}
  */
  readonly parse: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParse;
  /**
  * The path(s) to read. Multiple paths can be specified, separated by comma ','.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#path DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Adds the watching file path to the path_key field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#path_key DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#path_key}
  */
  readonly pathKey?: string;
  /**
  * This parameter is for strftime formatted path like /path/to/%Y/%m/%d/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#path_timezone DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#path_timezone}
  */
  readonly pathTimezone?: string;
  /**
  * (recommended) Fluentd will record the position it last read from this file. pos_file handles multiple positions in one file so no need to have multiple pos_file parameters per source. Don't share pos_file between in_tail configurations. It causes unexpected behavior e.g. corrupt pos_file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#pos_file DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#pos_file}
  */
  readonly posFile?: string;
  /**
  * The interval of doing compaction of pos file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#pos_file_compaction_interval DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#pos_file_compaction_interval}
  */
  readonly posFileCompactionInterval?: number;
  /**
  * The number of reading bytes per second to read with I/O operation. This value should be equal or greater than 8192.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#read_bytes_limit_per_second DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#read_bytes_limit_per_second}
  */
  readonly readBytesLimitPerSecond?: number;
  /**
  * Starts to read the logs from the head of the file or the last read position recorded in pos_file, not tail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#read_from_head DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#read_from_head}
  */
  readonly readFromHead?: boolean | cdktf.IResolvable;
  /**
  * The number of lines to read with each I/O operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#read_lines_limit DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#read_lines_limit}
  */
  readonly readLinesLimit?: number;
  /**
  * The interval to refresh the list of watch files. This is used when the path includes *.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#refresh_interval DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * in_tail actually does a bit more than tail -F itself. When rotating a file, some data may still need to be written to the old file as opposed to the new one. in_tail takes care of this by keeping a reference to the old file (even after it has been rotated) for some time before transitioning completely to the new file. This helps prevent data designated for the old file from getting lost. By default, this time interval is 5 seconds. The rotate_wait parameter accepts a single integer representing the number of seconds you want this time interval to be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#rotate_wait DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#rotate_wait}
  */
  readonly rotateWait?: number;
  /**
  * Skips the refresh of the watch list on startup. This reduces the startup time when * is used in path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#skip_refresh_on_startup DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#skip_refresh_on_startup}
  */
  readonly skipRefreshOnStartup?: boolean | cdktf.IResolvable;
  /**
  * The tag of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#tag DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#tag}
  */
  readonly tag: string;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emit_unmatched_lines: cdktf.booleanToTerraform(struct!.emitUnmatchedLines),
    enable_stat_watcher: cdktf.booleanToTerraform(struct!.enableStatWatcher),
    enable_watch_timer: cdktf.booleanToTerraform(struct!.enableWatchTimer),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    exclude_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePath),
    follow_inodes: cdktf.booleanToTerraform(struct!.followInodes),
    from_encoding: cdktf.stringToTerraform(struct!.fromEncoding),
    group: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupToTerraform(struct!.group),
    ignore_repeated_permission_error: cdktf.booleanToTerraform(struct!.ignoreRepeatedPermissionError),
    limit_recently_modified: cdktf.numberToTerraform(struct!.limitRecentlyModified),
    max_line_size: cdktf.numberToTerraform(struct!.maxLineSize),
    multiline_flush_interval: cdktf.numberToTerraform(struct!.multilineFlushInterval),
    open_on_every_update: cdktf.booleanToTerraform(struct!.openOnEveryUpdate),
    parse: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseToTerraform(struct!.parse),
    path: cdktf.stringToTerraform(struct!.path),
    path_key: cdktf.stringToTerraform(struct!.pathKey),
    path_timezone: cdktf.stringToTerraform(struct!.pathTimezone),
    pos_file: cdktf.stringToTerraform(struct!.posFile),
    pos_file_compaction_interval: cdktf.numberToTerraform(struct!.posFileCompactionInterval),
    read_bytes_limit_per_second: cdktf.numberToTerraform(struct!.readBytesLimitPerSecond),
    read_from_head: cdktf.booleanToTerraform(struct!.readFromHead),
    read_lines_limit: cdktf.numberToTerraform(struct!.readLinesLimit),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
    rotate_wait: cdktf.numberToTerraform(struct!.rotateWait),
    skip_refresh_on_startup: cdktf.booleanToTerraform(struct!.skipRefreshOnStartup),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emit_unmatched_lines: {
      value: cdktf.booleanToHclTerraform(struct!.emitUnmatchedLines),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_stat_watcher: {
      value: cdktf.booleanToHclTerraform(struct!.enableStatWatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_watch_timer: {
      value: cdktf.booleanToHclTerraform(struct!.enableWatchTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    follow_inodes: {
      value: cdktf.booleanToHclTerraform(struct!.followInodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_encoding: {
      value: cdktf.stringToHclTerraform(struct!.fromEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroup",
    },
    ignore_repeated_permission_error: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreRepeatedPermissionError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_recently_modified: {
      value: cdktf.numberToHclTerraform(struct!.limitRecentlyModified),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_line_size: {
      value: cdktf.numberToHclTerraform(struct!.maxLineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiline_flush_interval: {
      value: cdktf.numberToHclTerraform(struct!.multilineFlushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_on_every_update: {
      value: cdktf.booleanToHclTerraform(struct!.openOnEveryUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parse: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseToHclTerraform(struct!.parse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParse",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_key: {
      value: cdktf.stringToHclTerraform(struct!.pathKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_timezone: {
      value: cdktf.stringToHclTerraform(struct!.pathTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pos_file: {
      value: cdktf.stringToHclTerraform(struct!.posFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pos_file_compaction_interval: {
      value: cdktf.numberToHclTerraform(struct!.posFileCompactionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_bytes_limit_per_second: {
      value: cdktf.numberToHclTerraform(struct!.readBytesLimitPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_from_head: {
      value: cdktf.booleanToHclTerraform(struct!.readFromHead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_lines_limit: {
      value: cdktf.numberToHclTerraform(struct!.readLinesLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rotate_wait: {
      value: cdktf.numberToHclTerraform(struct!.rotateWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_refresh_on_startup: {
      value: cdktf.booleanToHclTerraform(struct!.skipRefreshOnStartup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emitUnmatchedLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitUnmatchedLines = this._emitUnmatchedLines;
    }
    if (this._enableStatWatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStatWatcher = this._enableStatWatcher;
    }
    if (this._enableWatchTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWatchTimer = this._enableWatchTimer;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._excludePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePath = this._excludePath;
    }
    if (this._followInodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.followInodes = this._followInodes;
    }
    if (this._fromEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEncoding = this._fromEncoding;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._ignoreRepeatedPermissionError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreRepeatedPermissionError = this._ignoreRepeatedPermissionError;
    }
    if (this._limitRecentlyModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitRecentlyModified = this._limitRecentlyModified;
    }
    if (this._maxLineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLineSize = this._maxLineSize;
    }
    if (this._multilineFlushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineFlushInterval = this._multilineFlushInterval;
    }
    if (this._openOnEveryUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.openOnEveryUpdate = this._openOnEveryUpdate;
    }
    if (this._parse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parse = this._parse?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathKey = this._pathKey;
    }
    if (this._pathTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathTimezone = this._pathTimezone;
    }
    if (this._posFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.posFile = this._posFile;
    }
    if (this._posFileCompactionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.posFileCompactionInterval = this._posFileCompactionInterval;
    }
    if (this._readBytesLimitPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBytesLimitPerSecond = this._readBytesLimitPerSecond;
    }
    if (this._readFromHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.readFromHead = this._readFromHead;
    }
    if (this._readLinesLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLinesLimit = this._readLinesLimit;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._rotateWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateWait = this._rotateWait;
    }
    if (this._skipRefreshOnStartup !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipRefreshOnStartup = this._skipRefreshOnStartup;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emitUnmatchedLines = undefined;
      this._enableStatWatcher = undefined;
      this._enableWatchTimer = undefined;
      this._encoding = undefined;
      this._excludePath = undefined;
      this._followInodes = undefined;
      this._fromEncoding = undefined;
      this._group.internalValue = undefined;
      this._ignoreRepeatedPermissionError = undefined;
      this._limitRecentlyModified = undefined;
      this._maxLineSize = undefined;
      this._multilineFlushInterval = undefined;
      this._openOnEveryUpdate = undefined;
      this._parse.internalValue = undefined;
      this._path = undefined;
      this._pathKey = undefined;
      this._pathTimezone = undefined;
      this._posFile = undefined;
      this._posFileCompactionInterval = undefined;
      this._readBytesLimitPerSecond = undefined;
      this._readFromHead = undefined;
      this._readLinesLimit = undefined;
      this._refreshInterval = undefined;
      this._rotateWait = undefined;
      this._skipRefreshOnStartup = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emitUnmatchedLines = value.emitUnmatchedLines;
      this._enableStatWatcher = value.enableStatWatcher;
      this._enableWatchTimer = value.enableWatchTimer;
      this._encoding = value.encoding;
      this._excludePath = value.excludePath;
      this._followInodes = value.followInodes;
      this._fromEncoding = value.fromEncoding;
      this._group.internalValue = value.group;
      this._ignoreRepeatedPermissionError = value.ignoreRepeatedPermissionError;
      this._limitRecentlyModified = value.limitRecentlyModified;
      this._maxLineSize = value.maxLineSize;
      this._multilineFlushInterval = value.multilineFlushInterval;
      this._openOnEveryUpdate = value.openOnEveryUpdate;
      this._parse.internalValue = value.parse;
      this._path = value.path;
      this._pathKey = value.pathKey;
      this._pathTimezone = value.pathTimezone;
      this._posFile = value.posFile;
      this._posFileCompactionInterval = value.posFileCompactionInterval;
      this._readBytesLimitPerSecond = value.readBytesLimitPerSecond;
      this._readFromHead = value.readFromHead;
      this._readLinesLimit = value.readLinesLimit;
      this._refreshInterval = value.refreshInterval;
      this._rotateWait = value.rotateWait;
      this._skipRefreshOnStartup = value.skipRefreshOnStartup;
      this._tag = value.tag;
    }
  }

  // emit_unmatched_lines - computed: false, optional: true, required: false
  private _emitUnmatchedLines?: boolean | cdktf.IResolvable; 
  public get emitUnmatchedLines() {
    return this.getBooleanAttribute('emit_unmatched_lines');
  }
  public set emitUnmatchedLines(value: boolean | cdktf.IResolvable) {
    this._emitUnmatchedLines = value;
  }
  public resetEmitUnmatchedLines() {
    this._emitUnmatchedLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitUnmatchedLinesInput() {
    return this._emitUnmatchedLines;
  }

  // enable_stat_watcher - computed: false, optional: true, required: false
  private _enableStatWatcher?: boolean | cdktf.IResolvable; 
  public get enableStatWatcher() {
    return this.getBooleanAttribute('enable_stat_watcher');
  }
  public set enableStatWatcher(value: boolean | cdktf.IResolvable) {
    this._enableStatWatcher = value;
  }
  public resetEnableStatWatcher() {
    this._enableStatWatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStatWatcherInput() {
    return this._enableStatWatcher;
  }

  // enable_watch_timer - computed: false, optional: true, required: false
  private _enableWatchTimer?: boolean | cdktf.IResolvable; 
  public get enableWatchTimer() {
    return this.getBooleanAttribute('enable_watch_timer');
  }
  public set enableWatchTimer(value: boolean | cdktf.IResolvable) {
    this._enableWatchTimer = value;
  }
  public resetEnableWatchTimer() {
    this._enableWatchTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWatchTimerInput() {
    return this._enableWatchTimer;
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

  // exclude_path - computed: false, optional: true, required: false
  private _excludePath?: string[]; 
  public get excludePath() {
    return this.getListAttribute('exclude_path');
  }
  public set excludePath(value: string[]) {
    this._excludePath = value;
  }
  public resetExcludePath() {
    this._excludePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathInput() {
    return this._excludePath;
  }

  // follow_inodes - computed: false, optional: true, required: false
  private _followInodes?: boolean | cdktf.IResolvable; 
  public get followInodes() {
    return this.getBooleanAttribute('follow_inodes');
  }
  public set followInodes(value: boolean | cdktf.IResolvable) {
    this._followInodes = value;
  }
  public resetFollowInodes() {
    this._followInodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followInodesInput() {
    return this._followInodes;
  }

  // from_encoding - computed: false, optional: true, required: false
  private _fromEncoding?: string; 
  public get fromEncoding() {
    return this.getStringAttribute('from_encoding');
  }
  public set fromEncoding(value: string) {
    this._fromEncoding = value;
  }
  public resetFromEncoding() {
    this._fromEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEncodingInput() {
    return this._fromEncoding;
  }

  // group - computed: false, optional: true, required: false
  private _group = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // ignore_repeated_permission_error - computed: false, optional: true, required: false
  private _ignoreRepeatedPermissionError?: boolean | cdktf.IResolvable; 
  public get ignoreRepeatedPermissionError() {
    return this.getBooleanAttribute('ignore_repeated_permission_error');
  }
  public set ignoreRepeatedPermissionError(value: boolean | cdktf.IResolvable) {
    this._ignoreRepeatedPermissionError = value;
  }
  public resetIgnoreRepeatedPermissionError() {
    this._ignoreRepeatedPermissionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRepeatedPermissionErrorInput() {
    return this._ignoreRepeatedPermissionError;
  }

  // limit_recently_modified - computed: false, optional: true, required: false
  private _limitRecentlyModified?: number; 
  public get limitRecentlyModified() {
    return this.getNumberAttribute('limit_recently_modified');
  }
  public set limitRecentlyModified(value: number) {
    this._limitRecentlyModified = value;
  }
  public resetLimitRecentlyModified() {
    this._limitRecentlyModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitRecentlyModifiedInput() {
    return this._limitRecentlyModified;
  }

  // max_line_size - computed: false, optional: true, required: false
  private _maxLineSize?: number; 
  public get maxLineSize() {
    return this.getNumberAttribute('max_line_size');
  }
  public set maxLineSize(value: number) {
    this._maxLineSize = value;
  }
  public resetMaxLineSize() {
    this._maxLineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLineSizeInput() {
    return this._maxLineSize;
  }

  // multiline_flush_interval - computed: false, optional: true, required: false
  private _multilineFlushInterval?: number; 
  public get multilineFlushInterval() {
    return this.getNumberAttribute('multiline_flush_interval');
  }
  public set multilineFlushInterval(value: number) {
    this._multilineFlushInterval = value;
  }
  public resetMultilineFlushInterval() {
    this._multilineFlushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineFlushIntervalInput() {
    return this._multilineFlushInterval;
  }

  // open_on_every_update - computed: false, optional: true, required: false
  private _openOnEveryUpdate?: boolean | cdktf.IResolvable; 
  public get openOnEveryUpdate() {
    return this.getBooleanAttribute('open_on_every_update');
  }
  public set openOnEveryUpdate(value: boolean | cdktf.IResolvable) {
    this._openOnEveryUpdate = value;
  }
  public resetOpenOnEveryUpdate() {
    this._openOnEveryUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openOnEveryUpdateInput() {
    return this._openOnEveryUpdate;
  }

  // parse - computed: false, optional: false, required: true
  private _parse = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParseOutputReference(this, "parse");
  public get parse() {
    return this._parse;
  }
  public putParse(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailParse) {
    this._parse.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parseInput() {
    return this._parse.internalValue;
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

  // path_key - computed: false, optional: true, required: false
  private _pathKey?: string; 
  public get pathKey() {
    return this.getStringAttribute('path_key');
  }
  public set pathKey(value: string) {
    this._pathKey = value;
  }
  public resetPathKey() {
    this._pathKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathKeyInput() {
    return this._pathKey;
  }

  // path_timezone - computed: false, optional: true, required: false
  private _pathTimezone?: string; 
  public get pathTimezone() {
    return this.getStringAttribute('path_timezone');
  }
  public set pathTimezone(value: string) {
    this._pathTimezone = value;
  }
  public resetPathTimezone() {
    this._pathTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTimezoneInput() {
    return this._pathTimezone;
  }

  // pos_file - computed: false, optional: true, required: false
  private _posFile?: string; 
  public get posFile() {
    return this.getStringAttribute('pos_file');
  }
  public set posFile(value: string) {
    this._posFile = value;
  }
  public resetPosFile() {
    this._posFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posFileInput() {
    return this._posFile;
  }

  // pos_file_compaction_interval - computed: false, optional: true, required: false
  private _posFileCompactionInterval?: number; 
  public get posFileCompactionInterval() {
    return this.getNumberAttribute('pos_file_compaction_interval');
  }
  public set posFileCompactionInterval(value: number) {
    this._posFileCompactionInterval = value;
  }
  public resetPosFileCompactionInterval() {
    this._posFileCompactionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posFileCompactionIntervalInput() {
    return this._posFileCompactionInterval;
  }

  // read_bytes_limit_per_second - computed: false, optional: true, required: false
  private _readBytesLimitPerSecond?: number; 
  public get readBytesLimitPerSecond() {
    return this.getNumberAttribute('read_bytes_limit_per_second');
  }
  public set readBytesLimitPerSecond(value: number) {
    this._readBytesLimitPerSecond = value;
  }
  public resetReadBytesLimitPerSecond() {
    this._readBytesLimitPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBytesLimitPerSecondInput() {
    return this._readBytesLimitPerSecond;
  }

  // read_from_head - computed: false, optional: true, required: false
  private _readFromHead?: boolean | cdktf.IResolvable; 
  public get readFromHead() {
    return this.getBooleanAttribute('read_from_head');
  }
  public set readFromHead(value: boolean | cdktf.IResolvable) {
    this._readFromHead = value;
  }
  public resetReadFromHead() {
    this._readFromHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readFromHeadInput() {
    return this._readFromHead;
  }

  // read_lines_limit - computed: false, optional: true, required: false
  private _readLinesLimit?: number; 
  public get readLinesLimit() {
    return this.getNumberAttribute('read_lines_limit');
  }
  public set readLinesLimit(value: number) {
    this._readLinesLimit = value;
  }
  public resetReadLinesLimit() {
    this._readLinesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLinesLimitInput() {
    return this._readLinesLimit;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // rotate_wait - computed: false, optional: true, required: false
  private _rotateWait?: number; 
  public get rotateWait() {
    return this.getNumberAttribute('rotate_wait');
  }
  public set rotateWait(value: number) {
    this._rotateWait = value;
  }
  public resetRotateWait() {
    this._rotateWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateWaitInput() {
    return this._rotateWait;
  }

  // skip_refresh_on_startup - computed: false, optional: true, required: false
  private _skipRefreshOnStartup?: boolean | cdktf.IResolvable; 
  public get skipRefreshOnStartup() {
    return this.getBooleanAttribute('skip_refresh_on_startup');
  }
  public set skipRefreshOnStartup(value: boolean | cdktf.IResolvable) {
    this._skipRefreshOnStartup = value;
  }
  public resetSkipRefreshOnStartup() {
    this._skipRefreshOnStartup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRefreshOnStartupInput() {
    return this._skipRefreshOnStartup;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputs {
  /**
  * Custom plugin type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#custom_plugin DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#custom_plugin}
  */
  readonly customPlugin?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPlugin;
  /**
  * in_forward plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#forward DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#forward}
  */
  readonly forward?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForward;
  /**
  * in_http plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#http DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#http}
  */
  readonly http?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttp;
  /**
  * The @id parameter specifies a unique name for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#id DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The @label parameter is to route the input events to <label> sections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#label DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#label}
  */
  readonly label?: string;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#log_level DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * monitor_agent plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#monitor_agent DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#monitor_agent}
  */
  readonly monitorAgent?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgent;
  /**
  * in_sample plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#sample DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#sample}
  */
  readonly sample?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSample;
  /**
  * in_tail plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#tail DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#tail}
  */
  readonly tail?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTail;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_plugin: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPluginToTerraform(struct!.customPlugin),
    forward: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardToTerraform(struct!.forward),
    http: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpToTerraform(struct!.http),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    monitor_agent: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgentToTerraform(struct!.monitorAgent),
    sample: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSampleToTerraform(struct!.sample),
    tail: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailToTerraform(struct!.tail),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_plugin: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPluginToHclTerraform(struct!.customPlugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPlugin",
    },
    forward: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardToHclTerraform(struct!.forward),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForward",
    },
    http: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttp",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_agent: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgentToHclTerraform(struct!.monitorAgent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgent",
    },
    sample: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSampleToHclTerraform(struct!.sample),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSample",
    },
    tail: {
      value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailToHclTerraform(struct!.tail),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTail",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPlugin = this._customPlugin?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._monitorAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorAgent = this._monitorAgent?.internalValue;
    }
    if (this._sample?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sample = this._sample?.internalValue;
    }
    if (this._tail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tail = this._tail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPlugin.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._http.internalValue = undefined;
      this._id = undefined;
      this._label = undefined;
      this._logLevel = undefined;
      this._monitorAgent.internalValue = undefined;
      this._sample.internalValue = undefined;
      this._tail.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPlugin.internalValue = value.customPlugin;
      this._forward.internalValue = value.forward;
      this._http.internalValue = value.http;
      this._id = value.id;
      this._label = value.label;
      this._logLevel = value.logLevel;
      this._monitorAgent.internalValue = value.monitorAgent;
      this._sample.internalValue = value.sample;
      this._tail.internalValue = value.tail;
    }
  }

  // custom_plugin - computed: false, optional: true, required: false
  private _customPlugin = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPluginOutputReference(this, "custom_plugin");
  public get customPlugin() {
    return this._customPlugin;
  }
  public putCustomPlugin(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsCustomPlugin) {
    this._customPlugin.internalValue = value;
  }
  public resetCustomPlugin() {
    this._customPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPluginInput() {
    return this._customPlugin.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForwardOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsForward) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // monitor_agent - computed: false, optional: true, required: false
  private _monitorAgent = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgentOutputReference(this, "monitor_agent");
  public get monitorAgent() {
    return this._monitorAgent;
  }
  public putMonitorAgent(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsMonitorAgent) {
    this._monitorAgent.internalValue = value;
  }
  public resetMonitorAgent() {
    this._monitorAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAgentInput() {
    return this._monitorAgent.internalValue;
  }

  // sample - computed: false, optional: true, required: false
  private _sample = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSampleOutputReference(this, "sample");
  public get sample() {
    return this._sample;
  }
  public putSample(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsSample) {
    this._sample.internalValue = value;
  }
  public resetSample() {
    this._sample.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample.internalValue;
  }

  // tail - computed: false, optional: true, required: false
  private _tail = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTailOutputReference(this, "tail");
  public get tail() {
    return this._tail;
  }
  public putTail(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsTail) {
    this._tail.internalValue = value;
  }
  public resetTail() {
    this._tail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailInput() {
    return this._tail.internalValue;
  }
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsOutputReference {
    return new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#inputs DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest#inputs}
  */
  readonly inputs?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputs[] | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecToTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inputs: cdktf.listMapper(dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsToTerraform, false)(struct!.inputs),
  }
}


export function dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inputs: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsToHclTerraform, false)(struct!.inputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputs.internalValue = value.inputs;
    }
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecInputs[] | cdktf.IResolvable) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest k8s_fluentd_fluent_io_cluster_input_v1alpha1_manifest}
*/
export class DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_fluentd_fluent_io_cluster_input_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFluentdFluentIoClusterInputV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_fluentd_fluent_io_cluster_input_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/fluentd_fluent_io_cluster_input_v1alpha1_manifest k8s_fluentd_fluent_io_cluster_input_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_fluentd_fluent_io_cluster_input_v1alpha1_manifest',
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
  private _metadata = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpec) {
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
      metadata: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentdFluentIoClusterInputV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
